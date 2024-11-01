import { useState, useEffect } from "react";
import "./useFavorites.css";

const useFavorites = () => {
  const [favoriteMovies, setFavoriteMovies] = useState([]);

  // تحميل المفضلات من localStorage عند تحميل المكون
  useEffect(() => {
    const storedFavorites =
      JSON.parse(localStorage.getItem("favoriteMovies")) || [];
    setFavoriteMovies(storedFavorites);
    console.log("Loaded favorites from localStorage:", storedFavorites);
  }, []);

  const toggleFavorite = (movie, media_type) => {
    if (!movie.id || !media_type) {
      console.warn("movie.id or media_type is missing!");
      return; // تجنب تنفيذ إذا كانت القيم مفقودة
    }

    // تحقق مما إذا كان الفيلم موجودًا في المفضلة
    const isAlreadyFavorite = favoriteMovies.some(
      (favoriteMovie) =>
        favoriteMovie.id === movie.id && favoriteMovie.type === media_type
    );

    let updatedFavorites;

    if (isAlreadyFavorite) {
      // إزالة الفيلم إذا كان موجودًا
      updatedFavorites = favoriteMovies.filter(
        (favoriteMovie) =>
          !(favoriteMovie.id === movie.id && favoriteMovie.type === media_type)
      );
    } else {
      // تحقق مما إذا كان هناك نوع آخر من نفس الفيلم موجود بالفعل
      const otherTypeExists = favoriteMovies.some(
        (favoriteMovie) =>
          favoriteMovie.id === movie.id && favoriteMovie.type !== media_type
      );

      if (otherTypeExists) {
        // إزالة النوع السابق إذا كان موجودًا
        updatedFavorites = favoriteMovies.filter(
          (favoriteMovie) =>
            favoriteMovie.id !== movie.id || favoriteMovie.type === media_type
        );
      } else {
        // إضافة الفيلم إلى المفضلة
        const movieWithType = {
          ...movie,
          type: media_type, // إضافة النوع هنا
        };
        updatedFavorites = [...favoriteMovies, movieWithType];
      }
    }

    // تحديث المفضلة في localStorage
    localStorage.setItem("favoriteMovies", JSON.stringify(updatedFavorites));

    // تحديث الحالة المحلية
    setFavoriteMovies(updatedFavorites);

    console.log("Updated Favorites:", updatedFavorites);
  };

  return { favoriteMovies, toggleFavorite };
};

export default useFavorites;
