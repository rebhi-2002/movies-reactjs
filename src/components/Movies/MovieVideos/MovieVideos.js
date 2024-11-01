import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { TMDB_API_KEY } from "../../../config";
import axios from "axios";
import classes from "./MovieVideos.module.css";

const MovieVideos = ({ movieId }) => {
  const [movie, setMovie] = useState([]);
  const [videos, setVideos] = useState([]);
  const { type } = useParams();

  useEffect(() => {
    const getMovieDetails = async () => {
      const res = await axios.get(
        // `https://api.themoviedb.org/3/movie/${movieId}?api_key=${TMDB_API_KEY}&language=en-US`
        `https://api.themoviedb.org/3/${type}/${movieId}?api_key=${TMDB_API_KEY}&language=en-US`
      );
      console.log(res.data); // تحقق من البيانات
      setMovie(res.data);
    };

    const fetchVideos = async () => {
      try {
        const response = await fetch(
          // `https://api.themoviedb.org/3/tv/${movieId}/videos?api_key=${TMDB_API_KEY}`
          `https://api.themoviedb.org/3/${type}/${movieId}/videos?api_key=${TMDB_API_KEY}`
        );
        const data = await response.json();
        const filteredVideos = data.results.filter((video) =>
          ["Trailer", "Teaser", "Clip", "Featurette"].includes(video.type)
        );
        setVideos(filteredVideos);
      } catch (error) {
        console.error("Error fetching videos:", error);
      }
    };
    getMovieDetails();
    fetchVideos();
  }, [movieId]);

  console.log("MoviesVideos.JS RUNNING");

  return (
    <React.Fragment>
      <div>
        {movie.homepage && (
          <a href={movie.homepage} target="_blank" rel="noreferrer">
            <button
              style={{
                background: "linear-gradient(45deg, #ff7e5f, #feb47b)",
                border: "none",
                color: "#fff",
                padding: "12px 30px",
                fontSize: "18px",
                fontWeight: "bold",
                borderRadius: "50px",
                boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.2)",
                transition: "transform 0.3s ease, box-shadow 0.3s ease",
              }}
              className="btn mx-2 my-3 px-4 py-2 fs-5 rounded-3"
              onMouseEnter={(e) => {
                e.target.style.transform = "scale(1.05)";
                e.target.style.boxShadow = "0px 6px 12px rgba(0, 0, 0, 0.3)";
              }}
              onMouseLeave={(e) => {
                e.target.style.transform = "scale(1)";
                e.target.style.boxShadow = "0px 4px 8px rgba(0, 0, 0, 0.2)";
              }}
            >
              Official Movie Website
            </button>
          </a>
        )}
      </div>
      <div>
        <p
          className={
            "d-inline-flex align-items-center fs-3 bg-body rounded-3 my-3 py-2 px-4 mx-2"
          }
          style={{ color: "#ff9800" }}
        >
          Check Out the Movie
          <span
            className="ms-3"
            style={{
              display: "inline-block",
              width: "0",
              height: "0",
              borderLeft: "10px solid transparent",
              borderRight: "10px solid transparent",
              borderTop: "15px solid #cc8400",
            }}
          ></span>
        </p>
      </div>

      <div
        className={`${classes["video-container"]} d-flex flex-column align-items-center`}
      >
        {videos.length > 0 ? (
          videos.map((video) => (
            <div
              key={video.id}
              className={`${classes["video-item"]} w-100 text-white text-center`}
            >
              <h4 className="text-white">
                {video.name} ({video.type})
              </h4>
              <a
                // href={`https://www.youtube.com/watch?v=${video.key}`}
                href={`https://${video.site.toLowerCase()}.com/watch?v=${
                  video.key
                }`}
                target="_blank"
                rel="noopener noreferrer"
                className={`${classes["video-button"]} d-inline-block text-white text-decoration-none`}
              >
                Watch Video [{video.site.toUpperCase()}]
              </a>
            </div>
          ))
        ) : (
          <p
            className="p-4 m-2 fs-4"
            style={{
              textAlign: "center",
              color: "white",
              background: "rgba(0, 0, 0, 0.5)",
              borderRadius: "5px",
            }}
          >
            No videos available for this movie.
          </p>
        )}
      </div>
    </React.Fragment>
  );
};

export default MovieVideos;
