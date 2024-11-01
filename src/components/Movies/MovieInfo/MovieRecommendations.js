import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { TMDB_API_KEY } from "../../../config";
import axios from "axios";
import classes from "./MovieRecommendations.module.css";

const MovieRecommendations = ({ mediaType, mediaId }) => {
  const [recommendations, setRecommendations] = useState([]);
  const [loading, setLoading] = useState(true);

  const navigate = useNavigate();
  const [genres, setGenres] = useState([]);

  useEffect(() => {
    const fetchGenres = async () => {
      try {
        const response = await fetch(
          `https://api.themoviedb.org/3/genre/${mediaType}/list?api_key=${TMDB_API_KEY}&language=en-US`
        );
        const data = await response.json();
        setGenres(data.genres);
      } catch (error) {
        console.error("Error fetching genres:", error);
      }
    };

    fetchGenres();
  }, [mediaType]);

  const getGenreNames = (ids) => {
    return ids
      .map((id) => {
        const genre = genres.find((genre) => genre.id === id);
        return genre ? genre.name : "Unknown";
      })
      .join(", ");
  };

  useEffect(() => {
    const fetchRecommendations = async () => {
      try {
        const response = await axios.get(
          `https://api.themoviedb.org/3/${mediaType}/${mediaId}/recommendations?api_key=52ef927bbeb21980cd91386a29403c78&language=en-US`
        );
        setRecommendations(response.data.results);
      } catch (error) {
        console.error("Error fetching recommendations:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchRecommendations();
  }, [mediaType, mediaId]);

  if (loading) {
    return <div className={classes.loader}>Loading...</div>;
  }

  const handleMovieRecommendationsClick = (id) => {
    navigate(`/${mediaType}/details/${id}`);
    window.scrollTo(0, 0);
  };

  return (
    <div className={classes.recommendationsContainer}>
      <h3
        className={`${classes.title} border border-2 rounded-5 border-primary bg-primary-subtle text-danger w-75 p-3 my-5 mt-4 mx-auto`}
      >
        Recommendations {mediaType === "movie" ? "Movies" : "Shows"}
      </h3>

      <div className={classes.cardContainer}>
        {recommendations.map((item) => (
          <div key={item.id} className={`${classes.cardWrapper} w-100`}>
            <div className={`${classes.card}`}>
              <img
                src={`https://image.tmdb.org/t/p/w500${item.poster_path}`}
                alt={item.title || item.name}
                className={classes.poster}
              />
              <div className="p-1 d-flex flex-column justify-content-between flex-grow-1">
                <h3 className={classes.cardTitle}>{item.title || item.name}</h3>
                <p className={`${classes.overview} text_truncate`}>
                  {item.overview.split(" ").slice(0, 40).join(" ")}...
                </p>

                <div className={classes.detailsContainer}>
                  <div className={classes.detailItem}>
                    <strong>Media Type:</strong> {item.media_type}
                  </div>
                  <div className={classes.detailItem}>
                    <strong>Original Language:</strong> {item.original_language}
                  </div>
                  <div className={classes.detailItem}>
                    <strong>Genres:</strong> {getGenreNames(item.genre_ids)}
                  </div>
                  <div className={classes.detailItem}>
                    <strong>Popularity:</strong> {item.popularity}
                  </div>
                  <div className={classes.detailItem}>
                    <strong>Vote Count:</strong> {item.vote_count}
                  </div>
                  {item.origin_country && (
                    <div className={classes.detailItem}>
                      <strong>Origin Country:</strong>{" "}
                      {item.origin_country.join(", ")}
                    </div>
                  )}
                </div>

                <div className={classes.footer}>
                  <span className={classes.rating}>
                    Rating: {item.vote_average}
                  </span>
                  <span className={classes.releaseDate}>
                    {item.release_date || item.first_air_date}
                  </span>
                </div>
              </div>
            </div>
            <div className="position-relative py-2 my-2 d-flex justify-content-center align-items-center m-auto">
              <button
                className="btn btn-primary"
                style={{
                  borderRadius: "25px",
                  boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
                  background: "linear-gradient(90deg, #007bff, #6610f2)",
                  padding: "10px 30px",
                  transition: "transform 0.3s, background 0.3s",
                }}
                onClick={() => handleMovieRecommendationsClick(item.id)}
                onMouseEnter={(e) => (e.target.style.transform = "scale(1.1)")}
                onMouseLeave={(e) => (e.target.style.transform = "scale(1)")}
              >
                Discover Full Story
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MovieRecommendations;
