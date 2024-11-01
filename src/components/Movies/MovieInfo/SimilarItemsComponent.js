import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { TMDB_API_KEY } from "../../../config";
import { FaHeart, FaRegHeart } from "react-icons/fa";
import useFavorites from "../../../hooks/useFavorites";
import classes from "./SimilarItemsComponent.module.css";

const SimilarItemsComponent = ({ type, similarItems }) => {
  const navigate = useNavigate();
  const { favoriteMovies, toggleFavorite } = useFavorites();

  const [genres, setGenres] = useState([]);

  // استرداد قائمة الأنواع عند تحميل المكون
  useEffect(() => {
    const fetchGenres = async () => {
      const response = await fetch(
        `https://api.themoviedb.org/3/genre/${type}/list?api_key=${TMDB_API_KEY}`
      );
      const data = await response.json();
      setGenres(data.genres); // تخزين الأنواع
    };

    fetchGenres();
  }, [type]);

  // دالة لتحويل genre_ids إلى أسماء
  const getGenreNames = (ids) => {
    return ids
      .map((id) => {
        const genre = genres.find((genre) => genre.id === id);
        return genre ? genre.name : "Unknown"; // إرجاع اسم النوع أو "غير معروف"
      })
      .join(", "); // دمج الأسماء في سلسلة
  };

  const handleMovieClick = (id) => {
    navigate(`/${type}/details/${id}`); // التنقل إلى صفحة الفيلم المعين
    window.scrollTo(0, 0);
  };

  return (
    <div className={`${classes.similarContainer}`}>
      <h3
        className={`${classes.sectionTitle} border border-2 rounded-5 border-primary bg-primary-subtle text-danger w-75 p-3 my-5 mx-auto`}
      >
        Similar {type === "movie" ? "Movies" : "Shows"}
      </h3>
      <div className={`row ${classes["cards"]}`}>
        {similarItems.length > 0 ? (
          similarItems.map((item) => {
            const isFavorite = favoriteMovies.some(
              (favoriteMovie) => favoriteMovie.id === item.id
            );
            return (
              <div
                key={item.id}
                className={`col-md-3 my-2 mx-auto ${classes.itemCard}`}
              >
                <div className="card mb-2 w-100 h-100 overflow-hidden">
                  <img
                    src={`https://image.tmdb.org/t/p/w500${item.poster_path}`}
                    alt={item.name || item.title}
                    className={`card-img-top ${classes.posterImage}`}
                  />
                  <div
                    className="card-body bg-danger-subtle w-100 h-100 p-0"
                    style={{
                      backgroundImage: `url('https://image.tmdb.org/t/p/original${item.backdrop_path}')`,
                      backgroundSize: "cover", // تأكد من أن الصورة تغطي البطاقة
                      backgroundPosition: "center", // لضمان أن الصورة تتوسط البطاقة
                      position: "relative", // لتسهيل إضافة الخلفية الملونة
                    }}
                  >
                    <div
                      className="w-100 h-100 p-3 mb-3 position-relative"
                      style={{
                        backgroundColor: "rgba(255, 255, 255, 0.8)", // لون خلفية أبيض مع شفافية 60%
                      }}
                    >
                      <h5
                        className={`card-title text-warning-emphasis mb-3 ${classes.cardTitle}`}
                      >
                        {item.name || item.title}
                      </h5>
                      <span className="d-block text-center mb-2">
                        <strong>OriginalName:</strong>{" "}
                        {item.original_name || item.original_title}
                      </span>
                      <p
                        className={`card-text text-info-emphasis ${classes.cardOverview}`}
                      >
                        {item.overview ? (
                          item.overview.slice(0, 220) + "..."
                        ) : (
                          <span className="text-center d-block mb-5">
                            No description available.
                          </span>
                        )}
                      </p>
                      <p>
                        <strong>Rating:</strong> {item.vote_average} (
                        {item.vote_count} votes)
                      </p>
                      <p>
                        <strong>First Air Date:</strong>{" "}
                        {item.first_air_date || item.release_date}
                      </p>
                      <p>
                        <strong>Ppopularity:</strong> {item.popularity}
                      </p>
                      {item.origin_country && (
                        <p>
                          <strong>Origin Country:</strong> {item.origin_country}
                        </p>
                      )}
                      <p>
                        <strong>Origin Language:</strong>{" "}
                        {item.original_language}
                      </p>
                      <p>
                        <strong>Genres:</strong> {getGenreNames(item.genre_ids)}
                      </p>
                      <div className="pt-3 my-2">
                        <button
                          className="btn btn-primary mb-3 position-absolute bottom-0 start-50 translate-middle-x"
                          onClick={() => handleMovieClick(item.id)} // إضافة حدث النقر
                        >
                          View Details
                        </button>
                      </div>
                    </div>
                  </div>
                  <div
                    className="heart-icon"
                    onClick={() => toggleFavorite(item, type)}
                  >
                    {isFavorite ? (
                      <FaHeart className="filled-heart" />
                    ) : (
                      <FaRegHeart className="outlined-heart" />
                    )}
                  </div>
                </div>
              </div>
            );
          })
        ) : (
          <p className={classes.noResults}>
            No similar {type === "movie" ? "movies" : "shows"} found.
          </p>
        )}
      </div>
    </div>
  );
};

export default SimilarItemsComponent;
