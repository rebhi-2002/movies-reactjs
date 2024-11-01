import React from "react";
import { Link } from "react-router-dom";
import { Card } from "react-bootstrap";
import { FaHeart, FaRegHeart } from "react-icons/fa";
import useFavorites from "../../../hooks/useFavorites";
import classes from "./MoviesSection.module.css";

const MoviesSection = ({
  title,
  movies = [],
  buttonLink,
  buttonText = "View All",
  media_type,
}) => {
  console.log("MoviesSection.JS RUNNING");

  const { favoriteMovies, toggleFavorite } = useFavorites(); // استخدام الهوك المخصص

  return (
    <div className={classes["movies-section"]}>
      <div
        className={`${classes["movies-header"]} d-flex justify-content-between align-items-center`}
      >
        <h2 className={`${classes["movies-title"]} f-w-bold m-0`}>{title}</h2>
        <Link
          // to={`/movies/${buttonLink}`}
          // to={media_type === "tv" ? `/movies/tv/${buttonLink}` : `/movies/movie/${buttonLink}`}
          to={`/movies/${media_type}/${buttonLink}`}
          className={`btn btn-primary ${classes["btn-view-all"]} fw-bold text-decoration-none text-white`}
        >
          {buttonText}
        </Link>
      </div>
      <div
        className={`${classes["movies-grid"]} d-grid justify-content-center align-items-center`}
      >
        {movies.length > 0 ? (
          movies.slice(0, 6).map((movie) => {
            const isFavorite = favoriteMovies.some(
              (favoriteMovie) =>
                favoriteMovie.id === movie.id &&
                favoriteMovie.type === media_type
            );

            return (
              <Card
                key={movie.id}
                className={`${classes["movie-card"]} position-relative w-100 h-100 bg-white text-center overflow-hidden border-0`}
              >
                <Link
                  // to={
                  //   media_type === "tv"
                  //     ? `/tv/details/${movie.id}`
                  //     : `/movie/details/${movie.id}`
                  // }
                  to={`/${media_type}/details/${movie.id}`}
                >
                  <Card.Img
                    className="w-100 h-100"
                    variant="top"
                    src={
                      movie.poster_path
                        ? `https://image.tmdb.org/t/p/w500${movie.poster_path}`
                        : "/path/to/default/image.jpg"
                    }
                    alt={movie.title || movie.name || "Movie Poster"}
                  />
                </Link>
                <Card.Body
                  className={`${classes["card-body"]} d-flex justify-content-center align-items-center text-center`}
                >
                  <Card.Title className="fw-bold text-center text-white">
                    {movie.title || movie.name}
                  </Card.Title>
                </Card.Body>
                <div
                  className="heart-icon"
                  onClick={() => toggleFavorite(movie, media_type)}
                >
                  {isFavorite ? (
                    <FaHeart className="filled-heart" />
                  ) : (
                    <FaRegHeart className="outlined-heart" />
                  )}
                </div>
              </Card>
            );
          })
        ) : (
          <p>No movies available.</p>
        )}
      </div>
    </div>
  );
};

export default MoviesSection;
