import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { TMDB_API_KEY } from "../../../config";
import SimilarItemsComponent from "../../../components/Movies/MovieInfo/SimilarItemsComponent";
import MovieRecommendations from "../../../components/Movies/MovieInfo/MovieRecommendations";
import MovieVideos from "../../../components/Movies/MovieVideos/MovieVideos";
import axios from "axios";
import { FaHeart, FaRegHeart } from "react-icons/fa";
import MovieInfo from "../../../components/Movies/MovieInfo/MovieInfo";
import useFavorites from "../../../hooks/useFavorites";
import classes from "./MovieDetails.module.css";

const MovieDetails = () => {
  const { type, id } = useParams(); // استخدم type هنا
  const [details, setDetails] = useState(null);
  const [cast, setCast] = useState([]); // حالة جديدة لجلب بيانات الطاقم
  const [reviews, setReviews] = useState([]); // حالة جديدة لجلب بيانات الطاقم
  const [similarItems, setSimilarItems] = useState([]);
  // const [error, setError] = useState(null);

  const [error, setError] = useState({
    detailsError: null,
    castError: null,
    reviewsError: null,
    similarItemsError: null,
  });

  const { favoriteMovies, toggleFavorite } = useFavorites(); // استخدام الهوك المخصص

  useEffect(() => {
    const fetchDetails = async () => {
      try {
        const response = await axios.get(
          `https://api.themoviedb.org/3/${type}/${id}?api_key=${TMDB_API_KEY}` // استخدم type في الرابط
        );
        setDetails(response.data);
      } catch (error) {
        console.error("Error fetching details:", error);
        // setError("Failed to fetch details.");
        setError((prevError) => ({
          ...prevError,
          detailsError: `Failed to fetch details. [${error}]`,
        }));
      }
    };

    const fetchCast = async () => {
      try {
        const response = await axios.get(
          `https://api.themoviedb.org/3/${type}/${id}/credits?api_key=${TMDB_API_KEY}`
        );
        setCast(response.data.cast); // تحديث حالة الطاقم
      } catch (error) {
        console.error("Error fetching cast:", error);
        // setError("Failed to fetch cast.");
        setError((prevError) => ({
          ...prevError,
          castError: `Failed to fetch cast. [${error}]`,
        }));
      }
    };

    const fetchReviewsResponse = () => {
      axios
        .get(
          `https://api.themoviedb.org/3/${type}/${id}/reviews?api_key=${TMDB_API_KEY}&language=en-US&page=1`
        )
        .then((response) => {
          const Reviews = response.data.results;
          setReviews(Reviews);
        })
        .catch((error) => {
          console.error("Error fetching reviews:", error);
          // setError("Failed to fetch reviews.");
          setError((prevError) => ({
            ...prevError,
            reviewsError: `Failed to fetch reviews. [${error}]`,
          }));
        });
    };

    const fetchSimilarItems = async () => {
      try {
        const response = await axios.get(
          `https://api.themoviedb.org/3/${type}/${id}/similar?api_key=${TMDB_API_KEY}`
        );
        // setSimilarItems(response.data.results);
        setSimilarItems(
          response.data.results.map((movie) => ({
            ...movie,
            type: { type }, // تحديد نوع الفيلم
          }))
        );
      } catch (error) {
        console.error("Error fetching similar items:", error);
        // setError("Failed to fetch similar items.");
        setError((prevError) => ({
          ...prevError,
          similarItemsError: `Failed to fetch similar items. [${error}]`,
        }));
      }
    };

    fetchDetails();
    fetchCast();
    fetchReviewsResponse();
    fetchSimilarItems();
  }, [type, id]);

  // if (error)
  //   return (
  //     <div className="text-center my-2 p-2 text-danger-emphasis">
  //       Error: {error}
  //     </div>
  //   );

  const errorMessages = [];
  if (error.detailsError) errorMessages.push(error.detailsError);
  if (error.castError) errorMessages.push(error.castError);
  if (error.reviewsError) errorMessages.push(error.reviewsError);
  if (error.similarItemsError) errorMessages.push(error.similarItemsError);

  if (errorMessages.length > 0) {
    return (
      <div className="text-center my-2 p-2 text-danger-emphasis">
        {errorMessages.map((msg, index) => (
          <p key={index}>{msg}</p> // عرض كل خطأ في فقرة جديدة
        ))}
      </div>
    );
  }

  // if (error.length > 0)
  //   return (
  //     <div className="text-center my-2 p-2 text-danger-emphasis">
  //       Error: {JSON.stringify(error)}
  //       {error.detailsError && (
  //         <p className="text-center">{error.detailsError}</p>
  //       )}
  //       {error.castError && <p className="text-center">{error.castError}</p>}
  //       {error.reviewsError && (
  //         <p className="text-center">{error.reviewsError}</p>
  //       )}
  //       {error.similarItemsError && (
  //         <p className="text-center">{error.similarItemsError}</p>
  //       )}
  //     </div>
  //   );
  if (!details) {
    return (
      <div
        style={{
          textAlign: "center",
          padding: "20px",
          background: "#ccc",
          maxWidth: "80%",
          margin: "50px auto",
          borderRadius: "8px",
          boxShadow: "0px 10px 30px rgba(0, 0, 0, 0.1)",
        }}
      >
        Loading...
      </div>
    );
  }

  const isFavorite = favoriteMovies.some(
    (favoriteMovie) => favoriteMovie.id === details.id
  );

  return (
    <div
      className={`${classes["movie-details"]} w-100 text-center my-0 mx-auto`}
      style={{
        backgroundImage: `url('https://image.tmdb.org/t/p/original${details.backdrop_path}')`,
      }}
    >
      <div
        className={`${classes["top-right-box"]}`}
        onClick={() => toggleFavorite(details, type)}
      >
        {isFavorite ? (
          <FaHeart className={`fs-1 ${classes["filled-heart"]}`} />
        ) : (
          <FaRegHeart className={`fs-1 ${classes["outlined-heart"]} `} />
        )}
      </div>
      <div className={`d-flex ${classes.onMobile}`}>
        <MovieInfo
          type={type}
          details={details}
          reviews={reviews}
          cast={cast}
          similarItems={similarItems}
        />
        <div
          className={`${classes.movie__videos} m-auto d-flex flex-column justify-content-center align-items-center text-align-center`}
        >
          <MovieVideos movieId={id} type={type} />
        </div>
      </div>
      <SimilarItemsComponent type={type} similarItems={similarItems} />
      <MovieRecommendations mediaType={type} mediaId={id} />
    </div>
  );
};

export default MovieDetails;
