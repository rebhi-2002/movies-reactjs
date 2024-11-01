import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { TMDB_API_KEY } from "../../config";
import axios from "axios";
import FavoritesList from "../../components/FavoritesList/FavoritesList";
import classes from "../../components/FavoritesList/FavoritesList.module.css";

const Favorites = () => {
  const [favoriteMovies, setFavoriteMovies] = useState([]);
  const [sortOrder, setSortOrder] = useState("titleAsc"); // حالة لترتيب الفرز
  const [genreFilter, setGenreFilter] = useState("all"); // حالة لتصفية حسب النوع
  const [genres, setGenres] = useState([]); // حالة لتخزين الأنواع
  const navigate = useNavigate();

  const [isLoading, setIsLoading] = useState(false);
  const [message, setMessage] = useState("");

  useEffect(() => {
    const storedFavorites =
      JSON.parse(localStorage.getItem("favoriteMovies")) || [];
    setFavoriteMovies(storedFavorites);

    // تحديث المصفوفة بحيث تشمل نوع العنصر
    const updatedFavorites = storedFavorites.map((item) => ({
      ...item,
      type: item.type || "movie", // إذا لم يكن موجوداً، يمكن استخدام قيمة افتراضية
    }));

    setFavoriteMovies(updatedFavorites);
  }, []);

  // جلب الأنواع من API
  useEffect(() => {
    // const fetchGenres = async () => {
    //   try {
    //     const response = await axios.get(
    //       `https://api.themoviedb.org/3/genre/movie/list?api_key=${TMDB_API_KEY}&language=en-US`
    //     );
    //     setGenres(response.data.genres);
    //   } catch (error) {
    //     console.error("Error fetching genres:", error);
    //   }
    // };

    const fetchGenres = async () => {
      setIsLoading(false);
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
        setIsLoading(true);
        setMessage(error.message);
        console.error("Error fetching genres:", error);
        // alert("Failed to fetch genres. Please try again later.");
      }
    };

    fetchGenres();
  }, []);

  const handleRemoveFavorite = (movieId) => {
    const updatedFavorites = favoriteMovies.filter(
      (movie) => movie.id !== movieId
    );
    setFavoriteMovies(updatedFavorites);
    localStorage.setItem("favoriteMovies", JSON.stringify(updatedFavorites));
  };

  const handleMovieClick = (movieId) => {
    const storedData = localStorage.getItem("favoriteMovies");
    console.log("Stored Data:", storedData); // تحقق من البيانات المخزنة

    if (storedData) {
      const favoriteMovies = JSON.parse(storedData);
      console.log("Favorite Movies:", favoriteMovies); // تحقق من تحويل البيانات

      const result = favoriteMovies.map((item) => ({
        id: item.id,
        type: item.type || "unknown",
      }));
      console.log("Mapped Result:", result); // تحقق من القيم المصفوفة

      const selectedMovie = result.find(
        (movie) => movie.id === Number(movieId)
      );
      console.log("Selected Movie:", selectedMovie); // تحقق من الفيلم المحدد

      if (selectedMovie) {
        const type = selectedMovie.type; // لا تعين قيمة افتراضية بعد
        console.log("Navigating to:", `/${type}/details/${selectedMovie.id}`); // تحقق من الرابط
        navigate(`/${type}/details/${selectedMovie.id}`);
      } else {
        console.error("Movie not found in favorites");
      }
    } else {
      console.error("No favorite movies stored in localStorage");
    }
  };

  const handleRemoveAllFavorites = () => {
    setFavoriteMovies([]); // إفراغ الحالة
    localStorage.setItem("favoriteMovies", JSON.stringify([])); // إفراغ localStorage
  };

  return (
    <div
      className={`${classes["favorites-container"]} text-center container my-5 mx-auto py-5 px-4`}
    >
      {isLoading && (
        <p className="text-center w-75 my-2 mx-auto p-2 text-danger-emphasis bg-danger-subtle border border-2 rounded-5 border-danger">
          {message}
        </p>
      )}
      {!isLoading && (
        <FavoritesList
          // favoriteMovies={favoriteMovies}
          favoriteMovies={favoriteMovies.map((movie) => ({
            ...movie,
            type: movie.type || "unknown", // تمرير النوع بشكل متغير من قائمة المفضلة
          }))}
          genres={genres}
          genreFilter={genreFilter}
          setGenreFilter={setGenreFilter}
          sortOrder={sortOrder}
          setSortOrder={setSortOrder}
          handleRemoveAllFavorites={handleRemoveAllFavorites}
          handleMovieClick={handleMovieClick}
          handleRemoveFavorite={handleRemoveFavorite}
        />
      )}
    </div>
  );
};

export default Favorites;
