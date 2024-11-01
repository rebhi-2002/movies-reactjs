import React, { useState, useEffect } from "react";
import { TMDB_API_KEY } from "../../../config";
import MovieSlider from "../MovieSlider/MovieSlider";
import MoviesSection from "../../../components/Movies/MoviesSection/MoviesSection";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const MoviesList = (props) => {
  const [popularMovies, setPopularMovies] = useState([]);
  const [topRatedMovies, setTopRatedMovies] = useState([]);
  const [upcomingMovies, setUpcomingMovies] = useState([]);
  const [nowPlayingMovies, setNowPlayingMovies] = useState([]);
  const [trendingMovies, setTrendingMovies] = useState([]);

  const [popularTvShows, setPopularTvShows] = useState([]);
  const [topRatedTvShows, setTopRatedTvShows] = useState([]);
  const [trendingTvShows, setTrendingTvShows] = useState([]);
  const [airingToday, setairingToday] = useState([]);

  const [loading, setLoading] = useState(false);
  const [hasError, setHasError] = useState(false);

  // const fetchMovies = async () => {
  const fetchMoviesAndTvShows = async () => {
    setLoading(true);
    setHasError(false);
    try {
      const [
        popularMoviesResponse,
        topRatedMoviesResponse,
        upcomingMoviesResponse,
        nowPlayingMoviesResponse,
        trendingMoviesResponse,
        popularTvResponse,
        topRatedTvResponse,
        trendingTvResponse,
        airingTodayResponse,
        ,
      ] = await Promise.all([
        axios.get(
          `https://api.themoviedb.org/3/movie/popular?api_key=${TMDB_API_KEY}&language=en-US&page=1`
        ),
        axios.get(
          `https://api.themoviedb.org/3/movie/top_rated?api_key=${TMDB_API_KEY}&language=en-US&page=1`
        ),
        axios.get(
          `https://api.themoviedb.org/3/movie/upcoming?api_key=${TMDB_API_KEY}&language=en-US&page=1`
        ),
        axios.get(
          `https://api.themoviedb.org/3/movie/now_playing?api_key=${TMDB_API_KEY}&language=en-US&page=1`
        ),
        axios.get(
          `https://api.themoviedb.org/3/trending/movie/day?api_key=${TMDB_API_KEY}&language=en-US&page=1`
        ),
        axios.get(
          `https://api.themoviedb.org/3/tv/popular?api_key=${TMDB_API_KEY}&language=en-US&page=1`
        ),
        axios.get(
          `https://api.themoviedb.org/3/tv/top_rated?api_key=${TMDB_API_KEY}&language=en-US&page=1`
        ),
        axios.get(
          `https://api.themoviedb.org/3/trending/tv/day?api_key=${TMDB_API_KEY}&language=en-US&page=1`
        ),
        axios.get(
          `https://api.themoviedb.org/3/tv/airing_today?api_key=${TMDB_API_KEY}&language=en-US&page=1`
        ),
      ]);

      // تعيين بيانات الأفلام
      setPopularMovies(popularMoviesResponse.data.results);
      setTopRatedMovies(topRatedMoviesResponse.data.results);
      setUpcomingMovies(upcomingMoviesResponse.data.results);
      setNowPlayingMovies(nowPlayingMoviesResponse.data.results);
      setTrendingMovies(trendingMoviesResponse.data.results);

      // تعيين بيانات المسلسلات
      setPopularTvShows(popularTvResponse.data.results);
      setTopRatedTvShows(topRatedTvResponse.data.results);
      setTrendingTvShows(trendingTvResponse.data.results);
      setairingToday(airingTodayResponse.data.results);

      // toast.success("Movies loaded successfully!"); // تنبيه عند نجاح التحميل
      toast.success("Movies and TV shows loaded successfully!");
    } catch (error) {
      setHasError(true);
      // toast.error("Failed to load movies. Please try again."); // تنبيه عند حدوث خطأ
      // console.error("Error fetching movie data:", error);
      toast.error("Failed to load movies and TV shows. Please try again.");
      console.error("Error fetching data:", error);
    } finally {
      setLoading(false);
      // setHasError(false);
    }
  };

  // useEffect(() => {
  //   fetchMovies();
  // }, []);

  useEffect(() => {
    fetchMoviesAndTvShows();
  }, []);

  console.log("MoviesList RUNNING");

  return (
    <div className="my-4">
      <ToastContainer />

      {loading && (
        <p
          style={{
            color: "#eee",
            fontSize: "18px",
            textAlign: "center",
            marginTop: "20px",
          }}
        >
          Loading...
        </p>
      )}
      {hasError && !loading && (
        <div
          className="d-flex justify-content-center align-items-center flex-column p-3 m-auto"
          style={{ background: "#eee", maxWidth: "80%", borderRadius: "5px" }}
        >
          <p className="align-items-center">
            حدث خطأ في التحميل. حاول مرة أخرى.
          </p>
          <button
            onClick={() => {
              // fetchMovies();
              fetchMoviesAndTvShows();
            }}
            className="btn btn-secondary"
          >
            Retry
          </button>
        </div>
      )}
      {!loading && !hasError && (
        <>
          <MovieSlider />
          <MoviesSection
            title="Trending Movies"
            buttonText="View All"
            buttonLink="trending"
            movies={trendingMovies}
            media_type="movie"
          />
          <MoviesSection
            title="Upcoming Movies"
            buttonText="View All"
            buttonLink="upcoming"
            movies={upcomingMovies}
            media_type="movie"
          />
          <MoviesSection
            title="Now Playing"
            buttonText="View All"
            buttonLink="now-playing"
            movies={nowPlayingMovies}
            media_type="movie"
          />
          <MoviesSection
            title="Popular Movies"
            buttonText="View All"
            buttonLink="popular"
            movies={popularMovies}
            media_type="movie"
          />
          <MoviesSection
            title="Top Rated Movies"
            buttonText="View All"
            buttonLink="top-rated"
            movies={topRatedMovies}
            media_type="movie"
          />
          {/* ** New! ** */}
          {/* <MoviesSection
            title="Action Movies"
            buttonText="View All"
            buttonLink="action"
            movies={topRatedMovies.filter((movie) =>
              movie.genre_ids.includes(28)
            )} // استخدم الفلتر لعرض أفلام الأكشن
          /> */}
          <MoviesSection
            title="Trending TV Shows"
            buttonText="View All"
            buttonLink="trending"
            movies={trendingTvShows}
            media_type="tv"
          />
          <MoviesSection
            title="Popular TV Shows"
            buttonText="View All"
            buttonLink="popular"
            movies={popularTvShows}
            media_type="tv"
          />
          <MoviesSection
            title="Top Rated TV Shows"
            buttonText="View All"
            buttonLink="top-rated"
            movies={topRatedTvShows}
            media_type="tv"
          />
          <MoviesSection
            title="Airing Today"
            buttonText="View All"
            buttonLink="airing-today"
            movies={airingToday}
            media_type="tv"
          />
        </>
      )}
    </div>
  );
};

export default MoviesList;
