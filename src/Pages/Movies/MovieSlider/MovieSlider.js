import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { TMDB_API_KEY } from "../../../config";
import axios from "axios";
import Slider from "react-slick";
import "./MovieSlider.css";

const MovieSlider = () => {
  const [movies, setMovies] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const [
          topRatedMoviesResponse,
          topRatedTvResponse,
          nowPlayingMoviesResponse,
          nowPlayingTvResponse,
        ] = await Promise.all([
          axios.get(
            `https://api.themoviedb.org/3/movie/top_rated?api_key=${TMDB_API_KEY}&language=en-US&page=1`
          ),
          axios.get(
            `https://api.themoviedb.org/3/tv/top_rated?api_key=${TMDB_API_KEY}&language=en-US&page=1`
          ),
          axios.get(
            `https://api.themoviedb.org/3/movie/now_playing?api_key=${TMDB_API_KEY}&language=en-US&page=1`
          ),
          axios.get(
            `https://api.themoviedb.org/3/trending/tv/day?api_key=${TMDB_API_KEY}&language=en-US&page=1`
          ),
        ]);

        // setMovies([
        //   ...nowPlayingTvResponse.data.results.slice(0, 12),
        //   ...topRatedMoviesResponse.data.results.slice(0, 12),
        // ]);

        // const topRatedMovies = topRatedMoviesResponse.data.results.slice(0, 12);
        // const topRatedTv = topRatedTvResponse.data.results.slice(0, 12);
        // const nowPlayingMovies = nowPlayingMoviesResponse.data.results.slice(0, 12);
        // const nowPlayingTv = nowPlayingTvResponse.data.results.slice(0, 12);

        // جلب 12 عنصر من كل استجابة
        const topRatedMovies = topRatedMoviesResponse.data.results
          .slice(0, 12)
          .map((movie) => ({ ...movie, media_type: "movie" })); // إضافة media_type

        const topRatedTv = topRatedTvResponse.data.results
          .slice(0, 12)
          .map((tvShow) => ({ ...tvShow, media_type: "tv" })); // إضافة media_type

        const nowPlayingMovies = nowPlayingMoviesResponse.data.results
          .slice(0, 12)
          .map((movie) => ({ ...movie, media_type: "movie" })); // إضافة media_type

        const nowPlayingTv = nowPlayingTvResponse.data.results
          .slice(0, 12)
          .map((tvShow) => ({ ...tvShow, media_type: "tv" })); // إضافة media_type

        // دمج القوائم الأربعة بالتناوب
        const combinedContent = [];
        for (
          let i = 0;
          i <
          Math.max(
            topRatedMovies.length,
            topRatedTv.length,
            nowPlayingMovies.length,
            nowPlayingTv.length
          );
          i++
        ) {
          // إضافة من قائمة nowPlayingMovies
          if (i < nowPlayingMovies.length) {
            combinedContent.push(nowPlayingMovies[i]);
          }

          // إضافة من قائمة topRatedMovies
          if (i < topRatedMovies.length) {
            combinedContent.push(topRatedMovies[i]);
          }

          // إضافة من قائمة nowPlayingTv
          if (i < nowPlayingTv.length) {
            combinedContent.push(nowPlayingTv[i]);
          }

          // إضافة من قائمة topRatedTv
          if (i < topRatedTv.length) {
            combinedContent.push(topRatedTv[i]);
          }
        }

        setMovies(combinedContent); // تحديث الحالة بالأفلام المدمجة
      } catch (error) {
        console.error("Failed to fetch movies", error);
      }
    };

    // const fetchMovies = async () => {
    //   try {
    //     const nowPlayingResponse = await axios.get(
    //       `https://api.themoviedb.org/3/movie/now_playing?api_key=${TMDB_API_KEY}&language=en-US&page=1`
    //     );

    //     // استخدم nowPlayingResponse.data.results كما تريد
    //     setMovies(nowPlayingResponse.data.results);
    //   } catch (error) {
    //     console.error("Failed to fetch movies", error);
    //   }
    // };

    fetchMovies();
  }, []);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true, // Keep arrows enabled
    autoplay: true, // تفعيل التشغيل التلقائي
    // autoplaySpeed: 3000, // تحديد مدة الانتظار بين الشرائح (3000 مللي ثانية = 3 ثواني)
    autoplaySpeed: 5000,
  };

  // const handleMovieClick = (id) => {
  //   // نقل المستخدم إلى صفحة التفاصيل للفيلم المحدد
  //   navigate(`/movie/${id}`);
  // };

  const handleMovieClick = (id, mediaType) => {
    // navigate(`/movie/details/${id}`);
    navigate(`/${mediaType}/details/${id}`);
  };

  return (
    <div className="movie-slider w-100 h-100 mx-auto position-relative">
      <Slider {...settings}>
        {movies.map((movie) => (
          <div
            key={movie.id}
            className="slider-item position-relative w-100 h-100"
          >
            {movie.backdrop_path ? (
              <img
                onClick={() => handleMovieClick(movie.id, movie.media_type)}
                src={`https://image.tmdb.org/t/p/original${movie.backdrop_path}`}
                alt={movie.title || movie.name}
                className="slider-image d-block w-100"
                style={{ cursor: "pointer" }}
              />
            ) : (
              <div className="no-image w-100 d-flex align-items-center justify-content-center">
                No Image Available
              </div>
            )}
            <div className="slider-caption position-absolute text-white">
              <h2>{movie.title || movie.name}</h2>
              <p className="m-0 overflow-hidden">{movie.overview}</p>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default MovieSlider;
