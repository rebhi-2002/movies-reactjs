import React, { useState, useEffect, Fragment } from "react";
import { useLocation, useNavigate, Link, useParams } from "react-router-dom";
import { TMDB_API_KEY } from "../../config";
import useFavorites from "../../hooks/useFavorites";
import PaginationComponent from "../../components/Pagination/Pagination";
import { Form, Button, Col, Row } from "react-bootstrap";
import axios from "axios";
import {
  FaArrowAltCircleRight,
  FaHeart,
  FaLink,
  FaRegHeart,
} from "react-icons/fa";
import classes from "./Search.module.css";

const Search = (props) => {
  const { type } = useParams();
  const location = useLocation();
  const navigate = useNavigate();
  const queryParams = new URLSearchParams(location.search);
  const initialPage = parseInt(queryParams.get("page")) || 1;

  const [query, setQuery] = useState(queryParams.get("query") || "");
  const [genre, setGenre] = useState(queryParams.get("genre") || "");
  const [year, setYear] = useState(queryParams.get("year") || "");
  const [rating, setRating] = useState(queryParams.get("rating") || "");
  const [movies, setMovies] = useState([]);
  const [currentPage, setCurrentPage] = useState(initialPage);
  const [totalPages, setTotalPages] = useState(1);
  const [genres, setGenres] = useState([]);
  const [page, setPage] = useState(initialPage); // حالة جديدة لرقم الصفحة
  const [loading, setLoading] = useState(false);
  const [hasError, setHasError] = useState(false);
  const [message, setMessage] = useState("");

  const [id, setId] = useState("");
  const [movieDetails, setMovieDetails] = useState(null);
  const [tvShowDetails, setTvShowDetails] = useState(null);
  const [itemType, setItemType] = useState("movie");

  const { favoriteMovies, toggleFavorite } = useFavorites(); // استخدام الهوك المخصص

  // جلب الأنواع
  useEffect(() => {
    const fetchGenres = async () => {
      setHasError(false);
      try {
        const movieGenresResponse = await axios.get(
          `https://api.themoviedb.org/3/genre/movie/list?api_key=${TMDB_API_KEY}&language=en-US`
        );
        const tvGenresResponse = await axios.get(
          `https://api.themoviedb.org/3/genre/tv/list?api_key=${TMDB_API_KEY}&language=en-US`
        );

        const combinedGenres = [
          ...movieGenresResponse.data.genres,
          ...tvGenresResponse.data.genres,
        ];

        setGenres(combinedGenres);
      } catch (error) {
        setHasError(true);
        setMessage(
          "Failed to fetch genres. Please try again later",
          "Error fetching genres:",
          error
        );
        console.error("Error fetching genres:", error);
        // alert("Failed to fetch genres. Please try again later.");
      }
    };

    fetchGenres();
  }, []);

  // جلب الأفلام بناءً على البحث أو اختيار الممثل
  useEffect(() => {
    const fetchMovies = async () => {
      setLoading(true);
      setHasError(false);
      try {
        // إذا كان هناك استعلام (عند البحث)
        if (query) {
          const movieRequest = axios.get(
            `https://api.themoviedb.org/3/search/movie?api_key=${TMDB_API_KEY}&query=${query}&with_genres=${genre}&primary_release_year=${year}&vote_average.gte=${Math.max(
              rating,
              0
            )}&page=${page}`
          );
          const tvRequest = axios.get(
            `https://api.themoviedb.org/3/search/tv?api_key=${TMDB_API_KEY}&query=${query}&with_genres=${genre}&primary_release_year=${year}&vote_average.gte=${Math.max(
              rating,
              0
            )}&page=${page}`
          );

          const [movieResponse, tvResponse] = await axios.all([
            movieRequest,
            tvRequest,
          ]);
          const movies = movieResponse.data.results;
          const tvShows = tvResponse.data.results;

          setMovies([
            ...movies.map((movie) => ({
              ...movie,
              type: "movie", // تحديد نوع الفيلم
            })),
            ...tvShows.map((tvShow) => ({
              ...tvShow,
              type: "tv", // تحديد نوع المسلسل
            })),
          ]);

          // setTotalPages(500); // setTotalPages(movieResponse.data.total_pages);
          // تحديد عدد الصفحات الكلي بناءً على أكبر قيمة من كلا الردين
          const totalMoviePages = movieResponse.data.total_pages || 0;
          const totalTvPages = tvResponse.data.total_pages || 0;
          setTotalPages(Math.max(totalMoviePages, totalTvPages));
        } else {
          const movieRequest = axios.get(
            `https://api.themoviedb.org/3/discover/movie?api_key=${TMDB_API_KEY}&query=${query}&with_genres=${genre}&primary_release_year=${year}&vote_average.gte=${Math.max(
              rating,
              0
            )}&page=${page}`
          );
          const tvRequest = axios.get(
            `https://api.themoviedb.org/3/discover/tv?api_key=${TMDB_API_KEY}&query=${query}&with_genres=${genre}&primary_release_year=${year}&vote_average.gte=${Math.max(
              rating,
              0
            )}&page=${page}`
          );
          const [movieResponse, tvResponse] = await axios.all([
            movieRequest,
            tvRequest,
          ]);

          const movies = movieResponse.data.results;
          const tvShows = tvResponse.data.results;
          console.log(movies, tvShows);

          setMovies([
            ...movieResponse.data.results.map((movie) => ({
              ...movie,
              type: "movie",
            })),
            ...tvResponse.data.results.map((tvShow) => ({
              ...tvShow,
              type: "tv",
            })),
          ]);

          // setTotalPages(500); // setTotalPages(response.data.total_pages);
          const totalMoviePages = movieResponse.data.total_pages || 0;
          const totalTvPages = tvResponse.data.total_pages || 0;
          setTotalPages(Math.max(totalMoviePages, totalTvPages));
        }
      } catch (error) {
        setHasError(true);
        setMessage("Error fetching movies");
        console.error("Error fetching movies:", error);
      } finally {
        setLoading(false); // انتهاء عملية التحميل
      }
    };

    fetchMovies();
  }, [query, genre, year, rating, currentPage, page]);

  // const fetchDetails = async (id, isTvShow = false) => {
  //   if (id) {
  //     setLoading(true);
  //     setHasError(false);

  //     // إعادة تعيين القيم القديمة قبل جلب البيانات الجديدة
  //     setMovieDetails(null);
  //     setTvShowDetails(null);

  //     try {
  //       const response = await fetch(
  //         `https://api.themoviedb.org/3/${
  //           isTvShow ? "tv" : "movie"
  //         }/${id}?api_key=${TMDB_API_KEY}&language=en-US`
  //       );
  //       if (!response.ok) {
  //         throw new Error("Item not found");
  //       }
  //       const data = await response.json();

  //       if (isTvShow) {
  //         setTvShowDetails(data); // حالة لتخزين تفاصيل المسلسل
  //       } else {
  //         setMovieDetails(data); // حالة لتخزين تفاصيل الفيلم
  //       }
  //       setHasError("");
  //     } catch (err) {
  //       setHasError(err.message);
  //       setMovieDetails(null);
  //       setTvShowDetails(null); // إعادة تعيين تفاصيل المسلسل
  //     } finally {
  //       setLoading(false);
  //     }
  //   } else {
  //     setHasError("Please enter a valid ID."); // عرض رسالة خطأ إذا لم يتم إدخال ID
  //   }
  // };

  const fetchDetails = async (id, isTvShow = false) => {
    if (!id) {
      setHasError("Please provide a valid ID.");
      return; // إذا لم يكن هناك ID، أوقف تنفيذ الدالة
    }

    setLoading(true);
    setHasError(false);

    // إعادة تعيين القيم القديمة قبل جلب البيانات الجديدة
    setMovieDetails(null);
    setTvShowDetails(null);

    try {
      const response = await fetch(
        `https://api.themoviedb.org/3/${
          isTvShow ? "tv" : "movie"
        }/${id}?api_key=${TMDB_API_KEY}&language=en-US`
      );

      // تحقق مما إذا كان الرد غير ناجح
      if (!response.ok) {
        // تحقق من حالة 404
        if (response.status === 404) {
          throw new Error("Item not found. Please check the ID.");
        } else {
          throw new Error("An error occurred while fetching data.");
        }
      }

      const data = await response.json();

      if (isTvShow) {
        setTvShowDetails(data); // حالة لتخزين تفاصيل المسلسل
      } else {
        setMovieDetails(data); // حالة لتخزين تفاصيل الفيلم
      }
      setHasError(""); // إذا تمت العملية بنجاح
    } catch (err) {
      setHasError(err.message); // عرض رسالة الخطأ
      setMovieDetails(null);
      setTvShowDetails(null); // إعادة تعيين تفاصيل المسلسل
    } finally {
      setLoading(false);
    }
  };

  const handleSearch = (e) => {
    e.preventDefault();
    // setCurrentPage(1);
    navigate(
      `/search?query=${query}&genre=${genre}&year=${year}&rating=${rating}&page=${page}`
    );
  };

  const currentYear = new Date().getFullYear(); // الحصول على السنة الحالية
  const years = Array.from(
    new Array(currentYear - 1885 + 1),
    (val, index) => 1885 + index
  ).reverse();

  console.log("Search.JS RUNNING");

  return (
    <div className={`${classes["search-container"]}`}>
      {hasError && (
        <p className="text-center my-2 p-2 text-danger-emphasis">{message}</p>
      )}
      {!hasError && (
        <Fragment>
          <Form
            className={`${classes["search-form"]} mb-0`}
            onSubmit={handleSearch}
          >
            <Row className="mb3 align-items-center">
              <Col md="12" className="mb-2">
                <Form.Control
                  type="text"
                  placeholder="Search by title"
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                />
              </Col>

              <Col md="2" className="mb-2">
                <Form.Control
                  as="select"
                  value={genre}
                  onChange={(e) => setGenre(e.target.value)}
                >
                  <option value="">Select Genre</option>
                  {genres.length > 0 ? (
                    genres.map((g) => (
                      <option key={g.id + Math.random()} value={g.id}>
                        {g.name}
                      </option>
                    ))
                  ) : (
                    <option disabled>Loading genres...</option>
                  )}
                </Form.Control>
              </Col>

              <Col md="2" className="mb-2">
                <Form.Control
                  as="select"
                  value={year}
                  onChange={(e) => setYear(e.target.value)}
                >
                  <option value="">Select Year</option>
                  {years.map((yearOption) => (
                    <option key={yearOption} value={yearOption}>
                      {yearOption}
                    </option>
                  ))}
                </Form.Control>
              </Col>

              <Col md="2" className="mb-2">
                <Form.Control
                  type="number"
                  placeholder="Rating (0-10)"
                  value={rating}
                  onChange={(e) => setRating(e.target.value)}
                  min="0"
                  max="10"
                />
              </Col>

              <Col md="2" className="mb-2">
                <Form.Control
                  type="number"
                  placeholder="Page Number (0-500)"
                  value={page}
                  onChange={(e) => {
                    const newPage = Math.max(1, e.target.value); // تأكد من أن رقم الصفحة لا يقل عن 1
                    setPage(newPage);
                  }}
                  min="1"
                  max="500"
                />
              </Col>

              <Col md="4" className="mb-2">
                <Button type="submit" className="w-100">
                  Search
                </Button>
              </Col>

              <Col md="4" className="mt-2 mb-2 movie-details-container">
                <h2 className="text-primary-emphasis">Enter Movie/Tv ID:</h2>
                <Form.Control
                  type="number"
                  placeholder="Enter ID"
                  value={id}
                  onChange={(e) => setId(e.target.value)}
                  className="my-1"
                />
                <Form.Check
                  type="radio"
                  label="Movie"
                  name="itemType"
                  value="movie"
                  checked={itemType === "movie"}
                  onChange={() => setItemType("movie")}
                  className="mb-1"
                />
                <Form.Check
                  type="radio"
                  label="TV Show"
                  name="itemType"
                  value="tv"
                  checked={itemType === "tv"}
                  onChange={() => setItemType("tv")}
                  className="mt-1"
                />
                <Button
                  onClick={() => fetchDetails(id, itemType === "tv")}
                  className={`w-100 my-1 ${classes["btn-custom-disabled"]}`}
                  disabled={!id}
                >
                  Get Details
                </Button>
              </Col>
            </Row>
          </Form>
          {/* <Fragment>
            {loading && <p>Loading...</p>}
            {hasError && <p>{hasError}</p>}
            {!loading && !hasError && (movieDetails || tvShowDetails) ? (
              <div
                className={`${classes["movie-card"]} ${classes["menu-item"]} w-25 mb-4 position-relative overflow-hidden text-center`}
              >
                <Link
                  to={`/${tvShowDetails ? "tv" : "movie"}/details/${
                    tvShowDetails ? tvShowDetails.id : movieDetails.id
                  }`}
                >
                  <img
                    className={`${classes["movie-poster"]} w-100 h-auto`}
                    src={`https://image.tmdb.org/t/p/w500${
                      tvShowDetails
                        ? tvShowDetails.poster_path
                        : movieDetails.poster_path
                    }`}
                    alt={
                      tvShowDetails ? tvShowDetails.name : movieDetails.title
                    }
                  />
                </Link>
                <div>
                  <h3
                    className={`${classes["movie-card-title"]} p-2 pt-4 d-flex justify-content-center align-items-center fw-bold text-center text-white`}
                  >
                    {tvShowDetails ? tvShowDetails.name : movieDetails.title}
                  </h3>
                  <h6
                    className={`m-auto mb-3 p-2 rounded-5 border-2 ${
                      tvShowDetails
                        ? "text-danger-emphasis"
                        : "text-primary-emphasis"
                    }`}
                    style={{ borderStyle: "solid", width: "fit-content" }}
                  >
                    Type: {tvShowDetails ? "tv" : "movie"}
                  </h6>
                  <p>
                    Release Date:{" "}
                    {tvShowDetails
                      ? tvShowDetails.first_air_date
                      : movieDetails.release_date}
                  </p>
                  <p>
                    Rating:{" "}
                    {tvShowDetails
                      ? tvShowDetails.vote_average
                      : movieDetails.vote_average}
                  </p>
                </div>
                <div
                  className="heart-icon"
                  onClick={() =>
                    toggleFavorite(
                      tvShowDetails ? tvShowDetails : movieDetails,
                      tvShowDetails ? "tv" : "movie"
                    )
                  }
                >
                  {favoriteMovies.some(
                    (favoriteMovie) =>
                      favoriteMovie.id ===
                      (tvShowDetails ? tvShowDetails.id : movieDetails.id)
                  ) ? (
                    <FaHeart className="filled-heart" />
                  ) : (
                    <FaRegHeart className="outlined-heart" />
                  )}
                </div>
              </div>
            ) : (
              <p>No results found. Please try a different search.</p>
            )}
          </Fragment> */}

          <Fragment>
            {loading && <p>Loading...</p>}
            {hasError && <p className="text-danger">{hasError}</p>}
            {!loading && !hasError && (movieDetails || tvShowDetails) ? (
              <div
                className={`${classes["movie-card"]} ${classes["movie-card__byId"]} ${classes["menu-item"]} w-25 mt-3 mb4 position-relative overflow-hidden text-center`}
              >
                <Link
                  to={`/${tvShowDetails ? "tv" : "movie"}/details/${
                    tvShowDetails ? tvShowDetails.id : movieDetails.id
                  }`}
                >
                  <img
                    className={`${classes["movie-poster"]} w-100 h-auto`}
                    src={`https://image.tmdb.org/t/p/w500${
                      tvShowDetails
                        ? tvShowDetails.poster_path
                        : movieDetails.poster_path
                    }`}
                    alt={
                      tvShowDetails ? tvShowDetails.name : movieDetails.title
                    }
                  />
                </Link>
                <div className="text-danger-emphasis bg-body d-flex flex-column justify-content-center align-items-center p-1 m-auto">
                  <h2
                    className={`fs-4 text-decoration-underline fs-3 m-auto mx-2 mb-2 p-2 pt-4 d-flex justify-content-center align-items-center fw-bolder text-center text-danger`}
                    style={{ height: "70px" }}
                  >
                    {tvShowDetails ? tvShowDetails.name : movieDetails.title}
                    <p
                      className={`fs-5 m-auto mx-2 mb-3 p-2 rounded-5 border-2 ${
                        tvShowDetails
                          ? "text-danger-emphasis"
                          : "text-primary-emphasis"
                      }`}
                      style={{ borderStyle: "solid", width: "fit-content" }}
                    >
                      {tvShowDetails ? "tv" : "movie"}
                    </p>
                  </h2>
                  <div
                    className="rounded-5 my-2 mx-auto border-3 border-primary-subtle"
                    style={{
                      borderStyle: "solid",
                      width: "90%",
                      height: "3px",
                    }}
                  ></div>
                  <p className="text-secondary">
                    <strong>Release Date: </strong>
                    {tvShowDetails
                      ? tvShowDetails.first_air_date
                      : movieDetails.release_date}
                  </p>
                  <p className="text-secondary">
                    <strong>Rating: </strong>
                    {tvShowDetails
                      ? tvShowDetails.vote_average
                      : movieDetails.vote_average}
                  </p>
                  <Link
                    to={`/${tvShowDetails ? "tv" : "movie"}/details/${
                      tvShowDetails ? tvShowDetails.id : movieDetails.id
                    }`}
                  >
                    <FaLink className="mx-1" />
                    <FaArrowAltCircleRight className="mx-1" />
                  </Link>
                </div>
              </div>
            ) : (
              !loading && (
                <p
                  className="py-2 px-5 text-danger alert alert-warning"
                  style={{ width: "fit-content" }}
                >
                  No results found. Please try a different search.
                </p>
              )
            )}
          </Fragment>

          {loading ? (
            <p>Loading movies...</p> // يمكنك استخدام loader أفضل
          ) : (
            <div
              className={`${classes["movies-grid"]} mt-4 d-grid justify-items-center align-items-center`}
            >
              {movies.length > 0 ? (
                movies.map((movie) => {
                  const isFavorite = favoriteMovies.some(
                    (favoriteMovie) => favoriteMovie.id === movie.id
                  );
                  return (
                    <div
                      key={movie.id}
                      className={`${classes["movie-card"]} ${classes["menu-item"]} position-relative overflow-hidden text-center`}
                    >
                      {/* <Link to={`/movie/${movie.id}`}> */}
                      <Link to={`/${movie.type}/details/${movie.id}`}>
                        <img
                          className={`${classes["movie-poster"]} w-100 h-auto`}
                          src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                          alt={movie.title || movie.name}
                        />
                      </Link>
                      <div>
                        <h5
                          className={`${classes["movie-card-title"]} p-2 pt-4 d-flex justify-content-center align-items-center fw-bold text-center text-white`}
                        >
                          {movie.title || movie.name}
                        </h5>
                        <h6
                          className={`m-auto mb-3 p-2 rounded-5 border-2
                            ${
                              movie.type === "tv"
                                ? "text-danger-emphasis"
                                : movie.type === "movie"
                                ? "text-primary-emphasis"
                                : null
                            }`}
                          style={{
                            borderStyle: "solid",
                            width: "fit-content",
                          }}
                        >
                          Type: {movie.type.toUpperCase()}
                        </h6>
                      </div>
                      <div
                        className="heart-icon"
                        onClick={() => toggleFavorite(movie, movie.type)}
                      >
                        {isFavorite ? (
                          <FaHeart className="filled-heart" />
                        ) : (
                          <FaRegHeart className="outlined-heart" />
                        )}
                      </div>
                    </div>
                  );
                })
              ) : (
                <p
                  className={`${classes["no-movies-message"]} w-75 text-center mx-auto`}
                >
                  عذرًا، لم نجد أي أفلام تتناسب مع معايير البحث التي أدخلتها.
                  يمكنك محاولة تعديل خيارات البحث أو البحث باستخدام كلمات
                  مفتاحية مختلفة.
                </p>
              )}
            </div>
          )}
          {!loading && movies.length > 0 && (
            <div className="mt-5">
              <PaginationComponent
                // currentPage={currentPage}
                currentPage={page}
                totalPages={totalPages}
                // onPageChange={(page) => setCurrentPage(page)}
                onPageChange={(page) => setPage(page)}
                searchQuery={query}
                genre={genre}
                year={year}
                rating={rating}
                link={`/search?query=${query}&genre=${genre}&year=${year}&rating=${rating}`}
              />
            </div>
          )}
        </Fragment>
      )}
    </div>
  );
};

export default Search;
