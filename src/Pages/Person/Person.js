import React, { useState, useEffect } from "react";
import { useNavigate, useLocation, Link } from "react-router-dom";
import { TMDB_API_KEY } from "../../config";
import useFavorites from "../../hooks/useFavorites";
import { Dropdown, Form, Row, Col, Button, Image, Card } from "react-bootstrap";
import { FaArrowAltCircleRight } from "react-icons/fa"; // Importing icons
import axios from "axios";
import classes from "./Person.module.css";

const Person = () => {
  const [movies, setMovies] = useState([]);
  const [tvShows, setTvShows] = useState([]); // حالة جديدة لتخزين بيانات السلسلة التلفزيونية
  const [personResults, setPersonResults] = useState([]);
  const [selectedPerson, setSelectedPerson] = useState(null); // لحفظ بيانات الممثل المختار
  const [genres, setGenres] = useState([]);
  const [hasError, setHasError] = useState(false);
  const [message, setMessage] = useState("");

  const navigate = useNavigate();
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const [query, setQuery] = useState(queryParams.get("query") || "");

  const { favoriteMovies, toggleFavorite } = useFavorites(); // استخدام الهوك المخصص

  // جلب الممثلين بناءً على الاسم
  const fetchPersonByName = async (name) => {
    setHasError(false);
    try {
      const personResponse = await axios.get(
        `https://api.themoviedb.org/3/search/person?api_key=${TMDB_API_KEY}&language=en-US&query=${name}`
      );
      if (personResponse.data.results.length > 0) {
        setPersonResults(personResponse.data.results);
      } else {
        setPersonResults([]);
      }
    } catch (error) {
      setHasError(true);
      setMessage("Failed to fetch person. Please try again later.");
      console.error("Error fetching person:", error);
    }
  };
  // جلب الأفلام بناءً على معرف الممثل وجلب تفاصيل الممثل
  const fetchMoviesAndPersonDetailsById = async (personId) => {
    setHasError(false);
    try {
      const [moviesResponse, personDetailsResponse, tvShowsResponse] =
        await Promise.all([
          axios.get(
            `https://api.themoviedb.org/3/person/${personId}/movie_credits?api_key=${TMDB_API_KEY}&language=en-US`
          ),
          axios.get(
            `https://api.themoviedb.org/3/person/${personId}?api_key=${TMDB_API_KEY}&language=en-US`
          ),
          axios.get(
            `https://api.themoviedb.org/3/person/${personId}/tv_credits?api_key=${TMDB_API_KEY}&language=en-US`
          ),
        ]);

      // إضافة نوع "movie" للأفلام
      const moviesWithType = moviesResponse.data.cast.map((movie) => ({
        ...movie,
        type: "movie", // تعيين نوع الفيلم
      }));

      // إضافة نوع "tv" للسلاسل التلفزيونية
      const tvShowsWithType = tvShowsResponse.data.cast.map((show) => ({
        ...show,
        type: "tv", // تعيين نوع السلسلة التلفزيونية
      }));

      setMovies(moviesWithType); // حفظ أفلام الممثل مع النوع
      setTvShows(tvShowsWithType); // حفظ بيانات السلسلة التلفزيونية مع النوع
      setSelectedPerson(personDetailsResponse.data); // حفظ تفاصيل الممثل
    } catch (error) {
      setHasError(true);
      setMessage(
        "Failed to fetch movies or person details. Please try again later."
      );
      console.error("Error fetching movies or person details:", error);
    }
  };
  // التحقق من البحث عن الأشخاص عند كتابة الاستعلام
  useEffect(() => {
    const delayDebounceFn = setTimeout(() => {
      if (query.length > 0) {
        fetchPersonByName(query);
      } else {
        setPersonResults([]);
        setMovies([]); // امسح أفلام الممثل إذا كان البحث فارغًا
      }
    }, 500);

    return () => clearTimeout(delayDebounceFn);
  }, [query]);
  // عند اختيار شخص من القائمة
  const handleSelect = (person) => {
    fetchMoviesAndPersonDetailsById(person.id); // جلب أفلام الممثل وتفاصيله عند اختياره
  };

  // جلب التصنيفات من TMDB API
  useEffect(() => {
    const fetchGenres = async () => {
      try {
        const response = await axios.get(
          `https://api.themoviedb.org/3/genre/movie/list?api_key=${TMDB_API_KEY}&language=en-US`
        );
        setGenres(response.data.genres); // حفظ التصنيفات في الحالة
      } catch (error) {
        console.error("Error fetching genres:", error);
      }
    };

    fetchGenres();
  }, []);
  // ربط genre_ids مع أسماء التصنيفات
  const getGenreNames = (genreIds) => {
    return genreIds
      .map((id) => {
        const genre = genres.find((g) => g.id === id);
        return genre ? genre.name : null;
      })
      .filter((name) => name !== null); // تجاهل القيم غير المتطابقة
  };

  const handleSearch = (e) => {
    e.preventDefault();
    if (selectedPerson)
      navigate(
        `/person?query=${selectedPerson.name.replace(" ", "-")}&id=${
          selectedPerson.id
        }`
      );
    else navigate(`/person?query=${query}`);

    // * Update the URL without reloading the page
    // const newUrl = `/person?query=${selectedPerson.name.replace(" ", "-")}&id=${
    //   selectedPerson.id
    // }`;
    // window.history.pushState({}, "", newUrl);
  };

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const personId = params.get("id"); // Extract the id from the URL

    if (personId) {
      // Fetch the person data using the id from the URL
      fetchMoviesAndPersonDetailsById(personId);
    }
  }, []);

  const changeUrlBasedOnSelection = (person) => {
    handleSelect(person);
    navigate(`/person?query=${person.name.replace(" ", "-")}&id=${person.id}`);
  };

  if (hasError) {
    return <div className="alert alert-danger m-4">{message}</div>;
  }

  const isFavorite = favoriteMovies.some(
    (favoriteMovie) => favoriteMovie.id === selectedPerson?.id
  );

  return (
    <div className={`${classes["search-container"]}`}>
      <Form className="mb-5" onSubmit={handleSearch}>
        <Row className="mb-3 align-items-center">
          <Col md="4" className="mb-2">
            <Form.Control
              type="text"
              placeholder="Search by title"
              value={
                // (selectedPerson && selectedPerson.name.replace("-", " ")) ||
                query.replace("-", " ")
              }
              onChange={(e) => setQuery(e.target.value)}
            />
          </Col>
          <Col md="6" className="mb-2">
            <Dropdown>
              <Dropdown.Toggle
                variant="light"
                id="dropdown-basic"
                className="w-100"
              >
                {query.length > 0
                  ? `Results for "${
                      (selectedPerson &&
                        selectedPerson.name.replace("-", " ")) ||
                      query
                    }"`
                  : "Select a person"}
              </Dropdown.Toggle>
              {/* <Dropdown.Menu
                className="w-100 overflow-auto"
                style={{ height: "200px" }}
              >
                {personResults.map((person) => (
                  <Dropdown.Item
                    key={person.id}
                    onClick={() => {
                      changeUrlBasedOnSelection(person);
                    }}
                  >
                    {person.name ||
                      "Please search for an actor's name in the designated search box."}
                  </Dropdown.Item>
                ))}
              </Dropdown.Menu> */}
              <Dropdown.Menu
                className="w-100 overflow-auto"
                style={{ height: "200px" }}
              >
                {personResults.length > 0 ? (
                  personResults.map((person) => (
                    <Dropdown.Item
                      key={person.id}
                      onClick={() => {
                        changeUrlBasedOnSelection(person);
                      }}
                    >
                      {person.name}
                    </Dropdown.Item>
                  ))
                ) : (
                  <Dropdown.Item disabled style={{ whiteSpace: "normal" }}>
                    <p className="p-2 m-auto text-center">
                      Please search for an actor's name in the designated search
                      box.
                    </p>
                  </Dropdown.Item>
                )}
              </Dropdown.Menu>
            </Dropdown>
          </Col>
          <Col md="2" className="mb-2">
            <Button type="submit" className="w-100">
              Search
            </Button>
          </Col>
        </Row>
      </Form>

      {query.length > 0 && (
        <div className="mt-3 mb-5">
          <h2 className="text-primary-emphasis">Persons:</h2>
          <div>
            <ul className="list-unstyled d-flex justify-content-center flex-wrap">
              {personResults.map((person) => (
                <div
                  key={person.id}
                  style={{ cursor: "pointer" }}
                  // onClick={() => handleSelect(person)}
                  onClick={() => {
                    changeUrlBasedOnSelection(person);
                  }}
                >
                  <li
                    className={`py-2 px-4 m-1 rounded-5 border border-2 ${
                      selectedPerson &&
                      (person.id === selectedPerson.id
                        ? "border-primary-subtle"
                        : "border-secondary")
                    } bg-secondary-subtle`}
                    style={{ width: "fit-content" }}
                    // onClick={() =>
                    //   navigate(
                    //     `/person?query=${person.name.replace(" ", "-")}&id=${
                    //       person.id
                    //     }`
                    //   )
                    // }
                  >
                    {person.name}
                  </li>
                </div>
              ))}
            </ul>
          </div>
        </div>
      )}

      {/* عرض معلومات الممثل */}
      {selectedPerson && (
        <div className={`mt-3 mb-5 ${classes["person-container"]}`}>
          <h2 className={`p-2 ${classes["person-name"]} fw-bold text-center`}>
            {selectedPerson.name}
          </h2>
          {selectedPerson.also_known_as.length > 0 && (
            <p className="p-2 fs-5">
              <strong>Also known as:</strong>{" "}
              {selectedPerson.also_known_as.join(", ")}
            </p>
          )}
          <Row>
            <Col md="4">
              {/* عرض صورة الممثل */}
              {selectedPerson.profile_path ? (
                <Image
                  src={`https://image.tmdb.org/t/p/w500${selectedPerson.profile_path}`}
                  alt={selectedPerson.name}
                  rounded
                  fluid
                  className={`${classes["person-image"]}`}
                />
              ) : (
                <p>No Image Available</p>
              )}
              <div
                className="w-100"
                onClick={() => toggleFavorite(selectedPerson, "person")}
              >
                {isFavorite ? (
                  <Button
                    className={`${classes["btn-remove"]} py-2 mb-2 w-100 btn btn-danger bg-danger`}
                  >
                    Remove From Fav.
                  </Button>
                ) : (
                  <Button
                    className={`${classes["btn-add"]} py-2 mb-2 w-100 btn btn-success bg-success`}
                  >
                    Add To Fav.
                  </Button>
                )}
              </div>
            </Col>
            <Col md="8">
              <ul className={`list-unstyled ${classes["person-details"]}`}>
                <li>
                  <strong>Known for Department:</strong>{" "}
                  {selectedPerson.known_for_department}
                </li>
                <li>
                  <p>
                    <strong>ID:</strong> {selectedPerson.id}
                  </p>
                  <p>
                    <strong>IMDB_ID:</strong> {selectedPerson.imdb_id}
                  </p>
                </li>
                <li>
                  <strong>Birthday:</strong> {selectedPerson.birthday || "N/A"}
                </li>
                <li>
                  <strong>Place of Birth:</strong>{" "}
                  {selectedPerson.place_of_birth || "N/A"}
                </li>
                <li>
                  <strong>popularity:</strong>{" "}
                  {selectedPerson.popularity || "N/A"}
                </li>
                <li>
                  <strong>Deathday:</strong> {selectedPerson.deathday || "N/A"}
                </li>
                <li>
                  <strong>Biography:</strong>
                  <p className={classes["person-bio"]}>
                    {selectedPerson.biography || "N/A"}
                  </p>
                </li>
                {selectedPerson.homepage && (
                  <a
                    href={selectedPerson.homepage}
                    className="btn btn-outline-dark py-2 px-4"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    HomePage
                    {/* {"# " + JSON.stringify(selectedPerson.homepage)} */}
                  </a>
                )}
              </ul>
            </Col>
          </Row>
        </div>
      )}

      {/* عرض أفلام الممثل المحدد */}
      {movies.length > 0 && (
        <div className="mt-3 mb-5">
          <h2 className="text-primary-emphasis mb-5">Movies:</h2>
          <Row className="g-4 justify-content-start">
            {movies.map((movie) => (
              <Col key={movie.id} xs={12} sm={6} md={4} lg={3} className="my-2">
                <Card
                  className={`${classes["movie-card"]} d-flex flex-column w-100 h-100`}
                >
                  <Card.Img
                    variant="top"
                    src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                    alt={movie.title || movie.original_title}
                    className={`${classes["movie-poster"]} w-100 h-auto`}
                    style={{ objectFit: "cover" }}
                  />
                  <Card.Body>
                    <Card.Title className={`${classes["movie-title"]} fw-bold`}>
                      {movie.title || movie.original_title}
                      <span className="fw-lighter fs-6">
                        {" "}
                        (Type: {movie.type})
                      </span>
                    </Card.Title>
                    <Card.Text className="d-flex flex-column align-items-start mt-3 mb-1">
                      <span
                        className={`${classes["vote-average"]} text-white d-block w-100 p-2`}
                      >
                        {movie.vote_average} ({movie.vote_count} votes)
                      </span>
                      <span className="text-muted d-block w-100 py-2">
                        {movie.release_date}
                      </span>
                    </Card.Text>
                    <Card.Text className={classes["movie-overview"]}>
                      {movie.overview.length > 250
                        ? `${movie.overview.substring(0, 250)}...`
                        : movie.overview}
                    </Card.Text>
                    <Card.Text className="my-1">
                      <strong>Character:</strong> {movie.character || "N/A"}
                    </Card.Text>
                    <Card.Text className="my-1">
                      <strong>Genres:</strong>{" "}
                      {getGenreNames(movie.genre_ids).map(
                        (genre, index, array) => (
                          <span key={genre}>
                            {genre}
                            {index < array.length - 1 && ", "}
                          </span>
                        )
                      )}
                    </Card.Text>
                    <Card.Text className="my-1">
                      <strong>Original Language:</strong>{" "}
                      {movie.original_language.toUpperCase()}
                    </Card.Text>
                    <Card.Text className="my-1">
                      <strong>Popularity:</strong> {movie.popularity.toFixed(2)}
                    </Card.Text>
                  </Card.Body>
                  <Link
                    to={`/${movie.type}/details/${movie.id}`}
                    className="my-1 btn btn-outline-primary"
                  >
                    <strong>Show Details</strong> <FaArrowAltCircleRight />
                  </Link>
                </Card>
              </Col>
            ))}
          </Row>
        </div>
      )}

      {/* عرض السلسلة التلفزيونية */}
      {tvShows.length > 0 && (
        <div className="mt-3 mb-5">
          <h2 className="text-primary-emphasis mb-5">TV Shows:</h2>
          <Row className="g-4 justify-content-start">
            {tvShows.length > 0 ? (
              tvShows.map((show, index) => (
                <Col
                  key={show.id + "#" + index}
                  xs={12}
                  sm={6}
                  md={4}
                  lg={3}
                  className="my-2"
                >
                  <Card
                    className={`${classes["tv-card"]} d-flex flex-column w-100 h-100`}
                  >
                    <Card.Img
                      variant="top"
                      src={`https://image.tmdb.org/t/p/w500${show.poster_path}`}
                      alt={show.name}
                      className={`${classes["tv-poster"]} w-100 h-auto`}
                      style={{ objectFit: "cover" }}
                    />
                    <Card.Body>
                      <Card.Title className={`${classes["tv-title"]} fw-bold`}>
                        {show.name || show.original_name}
                        <span className="fw-lighter fs-6">
                          {" "}
                          (Type: {show.type})
                        </span>
                      </Card.Title>
                      <Card.Text className="d-flex flex-column align-items-start mt-3 mb-1">
                        <span
                          className={`${classes["vote-average"]} text-white d-block w-100 p-2`}
                        >
                          <strong>Vote Average:</strong> {show.vote_average} (
                          {show.vote_count} votes)
                        </span>
                      </Card.Text>
                      <Card.Text>
                        <strong>First Air Date:</strong> {show.first_air_date}
                      </Card.Text>
                      <Card.Text className={classes["tv-overview"]}>
                        <strong>Overview:</strong>
                        {show.overview.length > 250
                          ? `${show.overview.substring(0, 250)}...`
                          : show.overview}
                      </Card.Text>
                      <Card.Text className="my-1">
                        <strong>Character:</strong> {show.character || "N/A"}
                      </Card.Text>
                      <Card.Text className="my-1">
                        <strong>Original Language:</strong>{" "}
                        {show.original_language.toUpperCase()}
                      </Card.Text>
                      <Card.Text className="my-1">
                        <strong>Original Country:</strong>{" "}
                        {show.origin_country.join(", ")}
                      </Card.Text>
                      <Card.Text className="my-1">
                        <strong>Popularity:</strong>{" "}
                        {show.popularity.toFixed(2)}
                      </Card.Text>
                      <Card.Text className="my-1">
                        <strong>Genres:</strong>{" "}
                        {getGenreNames(show.genre_ids).map(
                          (genre, index, array) => (
                            <span key={genre}>
                              {genre}
                              {index < array.length - 1 && ", "}
                            </span>
                          )
                        )}
                      </Card.Text>
                    </Card.Body>
                    <Link
                      to={`/${show.type}/details/${show.id}`}
                      className="my-1 btn btn-outline-primary"
                    >
                      <strong>Show Details</strong> <FaArrowAltCircleRight />
                    </Link>
                  </Card>
                </Col>
              ))
            ) : (
              <div>No tv data available.</div>
            )}
          </Row>
        </div>
      )}
    </div>
  );
};

export default Person;
