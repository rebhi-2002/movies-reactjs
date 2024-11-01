import React, { useCallback, useEffect, useState } from "react";
import { useParams, useLocation } from "react-router-dom";
import { TMDB_API_KEY } from "../../../config";
import MovieCard from "../../../components/Movies/MovieCard/MovieCard";
import PaginationComponent from "../../../components/Pagination/Pagination";
import axios from "axios";

const MoviesCategoryPage = () => {
  const { mediaCategory, category } = useParams(); // استخدام useParams لجلب نوع التصنيف من الرابط
  const location = useLocation(); // استخدم useLocation للحصول على المعلومات من URL
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);
  const [hasError, setHasError] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);

  // استخدم هذا الدالة لتحليل query parameters
  const getPageFromQuery = useCallback(() => {
    const params = new URLSearchParams(location.search);
    return parseInt(params.get("page"), 10) || 1; // ارجع القيمة أو 1 إذا كانت غير موجودة
  }, [location.search]);

  const fetchMovies = useCallback(
    async (page = 1) => {
      setLoading(true);
      setHasError(false);

      try {
        let response;
        const formattedCategory = category.replace("-", "_"); // يمكنك تعديل هذا وفقًا لما تحتاجه
        // تحديد نوع التصنيف (movie أو tv)
        if (category === "trending") {
          response = await axios.get(
            `https://api.themoviedb.org/3/trending/${mediaCategory}/day?api_key=${TMDB_API_KEY}&language=en-US&page=${page}`
          );
        } else {
          // استخدام الرابط العادي للتصنيفات الأخرى
          response = await axios.get(
            `https://api.themoviedb.org/3/${mediaCategory}/${formattedCategory}?api_key=${TMDB_API_KEY}&language=en-US&page=${page}`
          );
        }
        setMovies(response.data.results);
        setTotalPages(response.data.total_pages); // تحديث إجمالي الصفحات
      } catch (error) {
        setHasError(true);
        console.error("Error fetching movies:", error);
      } finally {
        setLoading(false);
      }
    },
    [category, mediaCategory]
  );

  useEffect(() => {
    // قراءة الصفحة من URL وتعيين currentPage
    const pageFromQuery = getPageFromQuery();
    setCurrentPage(pageFromQuery); // تعيين الصفحة الحالية بناءً على URL
    fetchMovies(pageFromQuery); // جلب الأفلام بناءً على الصفحة الحالية
  }, [fetchMovies, getPageFromQuery]); // قم بتحديث الدالة عند تغير التصنيف أو query parameters

  return (
    <div>
      {loading && <p className="p-2">Loading...</p>}
      {hasError && (
        <p className="p-2 text-center text-danger-emphasis my-3">Failed to load movies. Please try again later.</p>
      )}
      {!loading && !hasError && (
        <>
          <MovieCard
            title={category.replace("-", " ")}
            movies={movies}
            category={category}
            mediaCategory={mediaCategory}
          />
          {/* إضافة مكون التصفح بين الصفحات هنا */}
          <PaginationComponent
            currentPage={currentPage}
            totalPages={totalPages}
            onPageChange={(page) => setCurrentPage(page)}
            // link={`/movies/${category}?`}
            link={`/movies/${mediaCategory}/${category}?`}
          />
        </>
      )}
    </div>
  );
};

export default MoviesCategoryPage;
