import React, { Fragment } from "react";
import { Link, useParams } from "react-router-dom";
import { Card } from "react-bootstrap";
import { FaHeart, FaRegHeart } from "react-icons/fa";
import useFavorites from "../../../hooks/useFavorites";
import classes from "./MovieCard.module.css";

const MovieCard = ({ movies, category }) => {
  const { favoriteMovies, toggleFavorite } = useFavorites(); // استخدام الهوك المخصص
  const { mediaCategory } = useParams();

  const capitalizeFirstLetter = (mediaCategory) => {
    return (
      mediaCategory.charAt(0).toUpperCase() +
      mediaCategory.slice(1).toLowerCase()
    );
  };

  return (
    <Fragment>
      <div
        style={{ padding: "0 20px", width: "fit-content", margin: "20px auto" }}
      >
        <h1
          className={classes["category-movies"]}
          style={{
            padding: "10px 20px",
            textAlign: "center",
            fontSize: "2.5rem",
            width: "100%",
          }}
        >
          {/* {category.replace("-", " ")} Movies */}
          {capitalizeFirstLetter(category)}{" "}
          {capitalizeFirstLetter(mediaCategory)}
        </h1>
      </div>
      <div className={`${classes["movie-grid"]} d-grid`}>
        {movies.map((movie) => {
          const isFavorite = favoriteMovies.some(
            (favoriteMovie) => favoriteMovie.id === movie.id
          );
          return (
            <Card key={movie.id} className={classes["movie-card"]}>
              {/* <Link to={`/movie/${movie.id}`}> */}
              <Link to={`/${mediaCategory}/details/${movie.id}`}>
                <Card.Img
                  variant="top"
                  src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                  alt={movie.title || movie.name}
                />
              </Link>
              <Card.Body className={`${classes["card-body"]} flex-column`}>
                <Card.Title className="fs-4">
                  {movie.title || movie.name}
                </Card.Title>
                <p
                  className={`${classes["movie-release-date"]} d-inline-flex justify-content-center align-items-center w-100 fw-bold fst-italic`}
                >
                  Release Date: {movie.release_date || movie.first_air_date}
                </p>
              </Card.Body>
              <div
                className="heart-icon"
                onClick={() => toggleFavorite(movie, mediaCategory)}
              >
                {isFavorite ? (
                  <FaHeart className="filled-heart" />
                ) : (
                  <FaRegHeart className="outlined-heart" />
                )}
              </div>
            </Card>
          );
        })}
      </div>
    </Fragment>
  );
};

export default MovieCard;
