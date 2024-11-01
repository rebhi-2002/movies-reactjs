// https://api.themoviedb.org/3/list/{list_id}?api_key=52ef927bbeb21980cd91386a29403c78

import React, { useState, useEffect } from "react";
import { useNavigate, useParams, useSearchParams } from "react-router-dom";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import axios from "axios";
import { TMDB_API_KEY } from "../../../config";
import styles from "./MovieShowcase.module.css";

const MovieShowcase = () => {
  // const { id } = useParams(); // Get the ID from the URL parameters
  const { id, page } = useParams();

  const [listId, setListId] = useState(""); // لحفظ الـ id المدخل من المستخدم
  const [currentPage, setCurrentPage] = useState(1); // حالة لتتبع الصفحة الحالية
  const [movies, setMovies] = useState([]);
  const [listDetails, setListDetails] = useState({});
  const [genres, setGenres] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const navigate = useNavigate();
  const [searchParams] = useSearchParams();

  /*
    const [loading, setLoading] = useState(true);
    useEffect(() => {
      const fetchMovies = async () => {
        try {
          const response = await axios.get(
            `https://api.themoviedb.org/3/list/${id}?api_key=${TMDB_API_KEY}`,
            {
              headers: {
                Authorization: `Bearer ${TMDB_API_KEY}`,
              },
            }
          );
          setMovies(response.data.items);
          setListDetails({
            name: response.data.name,
            id: response.data.id,
            createdBy: response.data.created_by,
            description: response.data.description,
            favoriteCount: response.data.favorite_count,
            iso_639_1: response.data.iso_639_1,
            itemCount: response.data.item_count,
            page: response.data.page,
            totalPages: response.data.total_pages,
            totalResults: response.data.total_results,
          });
        } catch (err) {
          setError("An error occurred while fetching the movies.");
        } finally {
          setLoading(false);
        }
      };
    }, []);

    if (loading) return <div className={styles.loader}>Loading...</div>;
    if (error) return <div className={styles.error}>{error}</div>;
  */

  // من الرابط عند تحميل المكون `page` و `id` جلب
  useEffect(() => {
    // const queryId = searchParams.get("id");
    // const queryPage = searchParams.get("page");
    //* `state` إلى أرقام صحيحة وتعيينهم للحالات page و id تأكد من تحويل
    // if (queryId) setListId(queryId); console.log(queryId);
    // if (queryPage) setCurrentPage(Number(queryPage)); console.log(queryPage);

    // فقط إذا كانت موجودة `id` تعيين
    if (id) setListId(id);
    console.log("ID: ", id);
    // فقط إذا كانت موجودة وقيمة صحيحة `page` تعيين
    if (page && !isNaN(page)) {
      // setCurrentPage(Number(page)); // console.log(page);
      const parsedPage = Number(page);
      if (parsedPage > 0) {
        setCurrentPage(
          Math.min(parsedPage, listDetails.totalPages || parsedPage)
        ); // تحقق من أن الرقم ضمن النطاق
      } else {
        setCurrentPage(1); // تعيين 1 كقيمة افتراضية
      }
    } else {
      setCurrentPage(1); // تعيين 1 كقيمة افتراضية
    }

    console.log("ID: ", id);
    console.log("Page: ", currentPage);
  }, [id, page, listDetails.totalPages]);

  // `page` و `id` دالة جلب الأفلام حسب
  const fetchMovies = async (listId, currentPage) => {
    setLoading(true);
    try {
      const response = await axios.get(
        `https://api.themoviedb.org/3/list/${listId}?api_key=${TMDB_API_KEY}&page=${currentPage}`,
        {
          headers: {
            Authorization: `Bearer ${TMDB_API_KEY}`,
          },
        }
      );
      setMovies(response.data.items);
      setListDetails({
        poster_path: response.data.poster_path, // JSX: style={{ backgroundImage: listDetails.poster_path ? `url(https://image.tmdb.org/t/p/w500${listDetails.poster_path})` : "none" }} // CSS_Module: { width: 100% !important; height: 100% !important; object-fit: cover !important; object-position: center !important; background-size: cover !important; background-position: center !important; background-repeat: no-repeat !important; }
        name: response.data.name,
        id: response.data.id,
        createdBy: response.data.created_by,
        description: response.data.description,
        favoriteCount: response.data.favorite_count,
        iso_639_1: response.data.iso_639_1,
        itemCount: response.data.item_count,
        page: response.data.page,
        totalPages: response.data.total_pages,
        totalResults: response.data.total_results,
      });
      setError("");
    } catch (err) {
      setError("An error occurred while fetching the movies.");
    } finally {
      setLoading(false);
    }
  };
  // Fetch movies when the component mounts or when the page or ID changes | في كل مرة تتغير فيها الصفحة fetchMovies استدعاء
  // `page` أو `listId` عند تغيير fetchMovies استدعاء
  useEffect(() => {
    if (listId) {
      fetchMovies(listId, currentPage);
      // `page` و `id` تحديث الرابط ليشمل
      navigate(`/MovieShowcase/${listId}/${currentPage}`);
    }
  }, [listId, currentPage, navigate]);

  // Fetch genres on component mount | جلب قائمة الأنواع عند تحميل المكون
  useEffect(() => {
    const fetchGenres = async () => {
      try {
        const response = await axios.get(
          `https://api.themoviedb.org/3/genre/movie/list?api_key=${TMDB_API_KEY}`
        );
        setGenres(response.data.genres); // تخزين قائمة الأنواع
      } catch (error) {
        console.error("Error fetching genres:", error);
      }
    };
    fetchGenres();
  }, []);
  // Get genre names from IDs | دالة لتحويل genre_ids إلى أسماء
  const getGenreNames = (genreIds) => {
    return genreIds
      .map((id) => {
        const genre = genres.find((g) => g.id === id);
        return genre ? genre.name : null;
      })
      .filter((name) => name)
      .join(", ");
  };

  // Pagination controls | التحكم في أزرار التنقل
  const goToNextPage = () => {
    if (currentPage < listDetails.totalPages)
      setCurrentPage((prevPage) => prevPage + 1);
  };
  const goToPreviousPage = () => {
    if (currentPage > 1) setCurrentPage((prevPage) => prevPage - 1);
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    if (listId) {
      // تحقق من أن الرقم ضمن النطاق الصحيح
      if (currentPage > 0 && currentPage <= listDetails.totalPages) {
        navigate(`/MovieShowcase/${listId}/${currentPage}`);
        fetchMovies(listId, currentPage);
      } else {
        setError("Please enter a valid page number.");
      }
    } else {
      setError("Please enter a valid ID.");
    }
  };

  console.log(" ********* useParams *********");
  console.log("ID: ", id);
  console.log("Page: ", page);
  console.log(" ********* UserInput *********");
  console.log("ID: ", listId);
  console.log("currentPage: ", currentPage);
  console.log(" ***************************** ");

  return (
    <div className={styles.movieListContainer}>
      <h2 className={`${styles.sectionTitle} text-center`}>
        {/* <span className={`${styles["material-icons"]} material-icons me3`}>movie</span> */}
        <i className="fas fa-film mx-3" style={{ color: "#ffffff" }}></i>
        List My Movie List
      </h2>

      <p
        className={`${styles.textNeon} text-center h3 fs-3 my-4 mx-auto bg-primary-subtle p-3`}
      >
        Movie Showcase - ID: {listId} - Page: {currentPage}
      </p>

      {/* Form for user to enter the ID */}
      <form onSubmit={handleSubmit} className="mb-3">
        <div className="d-flex justify-content-center align-items-center w-100">
          <label htmlFor="listId" className="form-label m-0 me-2 fs-4">
            Enter List ID:
          </label>
          <input
            type="number"
            min="1"
            id="listId"
            className="form-control form-control-md w-50"
            value={listId}
            onChange={(e) => setListId(e.target.value)}
            placeholder="Enter List ID"
          />
        </div>
        <button
          type="submit"
          className="btn btn-primary mt-3 mb-4 m-auto d-block"
        >
          Fetch List
        </button>
      </form>

      {/* Display loading, error, or fetched data */}
      {loading && (
        <div className={`${styles.loader} text-info`}>Loading...</div>
      )}
      {error && <div className={`${styles.error} text-danger`}>{error}</div>}

      <div className={styles.listDetails}>
        <h2 className="text-primary text-center mb-4">{listDetails.name}</h2>
        <table
          className="table table-striped table-bordered"
          style={{
            backgroundColor: "rgba(255, 255, 255, 0.9)",
            borderRadius: "10px",
            overflow: "hidden",
          }}
        >
          <tbody>
            <tr>
              <th className="text-secondary">Poster</th>
              <td className="text-muted d-flex justify-content-center align-items-center">
                <div className="w-25">
                  {listDetails.poster_path ? (
                    <img
                      src={`https://image.tmdb.org/t/p/w500${listDetails.poster_path}`}
                      alt={listDetails.title}
                      className={`${styles.poster}`}
                    />
                  ) : (
                    <div
                      className={`alert alert-warning w-100 m-auto text-center`}
                    >
                      No Poster Found
                    </div>
                  )}
                </div>
              </td>
            </tr>
            <tr>
              <th className="text-secondary">List ID</th>
              <td className="text-muted">{listDetails.id}</td>
            </tr>
            <tr>
              <th className="text-secondary">Created by</th>
              <td className="text-muted">{listDetails.createdBy}</td>
            </tr>
            <tr>
              <th className="text-secondary">Description</th>
              <td className="text-muted">
                {/* <em>{listDetails.description}</em> */}
                <span>
                  <ol className="ps3 mb-0 list-unstyled">
                    {listDetails.description &&
                      listDetails.description
                        .split("\r\n")
                        .map((item, index) => <li key={index}>{item}</li>)}
                  </ol>
                </span>
              </td>
            </tr>
            <tr>
              <th className="text-secondary">Favorites</th>
              <td className="text-muted">
                <strong>{listDetails.favoriteCount}</strong>
              </td>
            </tr>
            <tr>
              <th className="text-secondary">Language</th>
              <td className="text-muted">{listDetails.iso_639_1}</td>
            </tr>
            <tr>
              <th className="text-secondary">Item Count</th>
              <td className="text-muted">
                <span className="badge bg-info">{listDetails.itemCount}</span>
              </td>
            </tr>
            <tr>
              <th className="text-secondary">Current Page</th>
              <td className="text-muted">
                <span className="badge bg-info">{listDetails.page}</span>
              </td>
            </tr>
            <tr>
              <th className="text-secondary">Total Pages</th>
              <td className="text-muted">
                <span className="badge bg-info">{listDetails.totalPages}</span>
              </td>
            </tr>
            <tr>
              <th className="text-secondary">Total Results</th>
              <td className="text-muted">
                <span className="badge bg-info">
                  {listDetails.totalResults}
                </span>
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      <div className={styles.movieGrid}>
        {movies.length === 0 ? (
          <p
            className="textmuted text-warning fs-5 text-center my-4"
            style={{ gridColumn: "1 / -1" }} // grid-column: 1 / -1; يجعل العنصر يمتد من العمود الأول إلى آخر عمود متاح، مما يتيح له استخدام العرض الكامل للشبكة في تلك الصف.
          >
            No movies found.
          </p>
        ) : (
          movies.map((movie) => (
            <div key={movie.id} className={styles.movieCard}>
              {movie.poster_path && (
                <img
                  src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} // backdrop_path
                  alt={movie.title}
                  className={styles.poster}
                />
              )}
              {/* Container for movie details */}
              <div
                className={styles.detailsOverlay}
                style={{
                  backgroundImage: `url(https://image.tmdb.org/t/p/w500${movie.backdrop_path})`,
                }}
              >
                <div className={styles.details}>
                  <h3 className={`${styles.id} text-white-50`}>
                    <span
                      className={
                        "d-inline-flex justify-content-center align-items-center text-center m-auto text-white border-1 w-50 h-50"
                      }
                      style={{ borderStyle: "solid", borderRadius: "50%" }}
                    >
                      ID
                    </span>
                    {movie.id}
                  </h3>
                  <h3 className={styles.title}>{movie.original_title}</h3>
                  <div className={styles.scrollContainer}>
                    <p className={styles.overview}>{movie.overview}</p>
                    <p
                      className={`${styles.media_type} text-decoration-underline`}
                    >
                      {movie.media_type}
                    </p>
                    <p className={styles.original_language}>
                      Original Language: {movie.original_language}
                    </p>
                    <p className={styles.vote_count}>
                      Vote: {movie.vote_count}
                    </p>
                    <p className={styles.rating}>
                      Rating: {movie.vote_average}
                    </p>
                    <p className={styles.releaseDate}>
                      Released: {movie.release_date}
                    </p>
                    <p className={styles.genre}>
                      Genres: {getGenreNames(movie.genre_ids)}
                      {/* {movie.genre_ids.join(", ")} */}
                    </p>
                    <p className={styles.popularity}>
                      Popularity: {movie.popularity}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))
        )}
      </div>
      {listDetails.totalPages > 1 && (
        <div className={styles.paginationContainer}>
          <div className={styles["button-group"]}>
            <button
              onClick={goToPreviousPage}
              disabled={currentPage === 1}
              className={`${styles.button} ${styles.prevButton}`}
            >
              <FaArrowLeft className={styles.icon} />
              {/* <span className={styles.arrow}>&larr;</span> */}
              Previous
            </button>
            <div className={styles.pageIndicator}>
              <span className={styles.pageNumber}>{currentPage}</span>
              <span className={styles.separator}>/</span>
              <span className={styles.totalPages}>
                {listDetails.totalPages}
              </span>
            </div>
            <button
              onClick={goToNextPage}
              disabled={currentPage === listDetails.totalPages}
              className={`${styles.button} ${styles.nextButton}`}
            >
              Next
              {/* <span className={styles.arrow}>&rarr;</span> */}
              <FaArrowRight className={styles.icon} />
            </button>
          </div>
          <div className={styles["Current__PageNumber"]}>{currentPage}</div>
        </div>
      )}
    </div>
  );
};

export default MovieShowcase;
