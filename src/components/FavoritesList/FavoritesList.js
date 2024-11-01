import React, { Fragment, useState } from "react";
import {
  FaSortAlphaDown,
  FaSortAlphaUp,
  FaStar,
  FaCalendar,
  FaLink,
} from "react-icons/fa";
import classes from "./FavoritesList.module.css";
import { Image } from "react-bootstrap";
import { Link } from "react-router-dom";
import { FaDeleteLeft } from "react-icons/fa6";

const FavoritesList = ({
  favoriteMovies,
  genres,
  genreFilter,
  setGenreFilter,
  sortOrder,
  setSortOrder,
  handleRemoveAllFavorites,
  handleMovieClick,
  handleRemoveFavorite,
}) => {
  const [selectedType, setSelectedType] = useState("all"); // حالة لتخزين النوع المختار

  // * #1

  // const sortMovies = (movies) => {
  //   switch (sortOrder) {
  //     case "titleAsc":
  //       // return movies.sort((a, b) => a.title.localeCompare(b.title));
  //       return movies.sort((a, b) => {
  //         // تحقق من وجود title
  //         if (a.title && b.title) {
  //           return a.title.localeCompare(b.title);
  //         }
  //         // return 0; // إذا لم يكن أحدهما لديه title، قم بإرجاع 0
  //         return a.title ? -1 : 1; // إذا لم يكن b.title موجودًا، ضع a.title في المقدمة
  //       });
  //     case "titleDesc":
  //       // return movies.sort((a, b) => b.title.localeCompare(a.title));
  //       return movies.sort((a, b) => {
  //         if (a.title && b.title) {
  //           return b.title.localeCompare(a.title);
  //         }
  //         // return 0;
  //         return a.title ? 1 : -1; // إذا لم يكن b.title موجودًا، ضع a.title في المقدمة
  //       });
  //     case "year":
  //       return movies.sort((a, b) => {
  //         // return b.release_date.localeCompare(a.release_date);
  //         // تحقق من وجود release_date
  //         return b.release_date && a.release_date
  //           ? b.release_date.localeCompare(a.release_date)
  //           : b.release_date
  //           ? -1
  //           : 1; // إذا لم يكن a.release_date موجودًا، ضع b في المقدمة
  //       });
  //     case "rating":
  //       // return movies.sort((a, b) => b.vote_average - a.vote_average);
  //       return movies.sort(
  //         (a, b) => (b.vote_average || 0) - (a.vote_average || 0)
  //       );
  //     default:
  //       return movies;
  //   }
  // };

  //* تصفية الأفلام حسب النوع
  // const filteredMovies =
  //   genreFilter === "all"
  //     ? favoriteMovies
  //     : favoriteMovies.filter((movie) =>
  //         movie.genre_ids.includes(parseInt(genreFilter))
  //       ); // تأكد من أن لديك حقل genre_ids في بيانات الفيلم

  //* فرز الأفلام قبل العرض
  // const sortedMovies = sortMovies([...filteredMovies]);

  // *#2

  //* تصفية الأفلام بناءً على النوع المختار
  // const filteredTypes = favoriteMovies.filter((movie) => {
  //   if (selectedType === "person") {
  //     return movie.type === "person";
  //   } else if (selectedType === "movie_or_tv") {
  //     return ["movie", "tv"].includes(movie.type);
  //   }
  //   return true; // إذا كان "all"، يتم عرض جميع العناصر
  // });

  // const sortPersons = (persons) => {
  //   switch (sortOrder) {
  //     case "nameAsc":
  //       return persons.sort((a, b) =>
  //         (a.name || "").localeCompare(b.name || "")
  //       );
  //     case "nameDesc":
  //       return persons.sort((a, b) =>
  //         (b.name || "").localeCompare(a.name || "")
  //       );
  //     case "birthday":
  //       return persons.sort((a, b) => {
  //         if (a.birthday && b.birthday) {
  //           return new Date(a.birthday) - new Date(b.birthday);
  //         }
  //         return a.birthday ? -1 : 1; // ضع الأشخاص الذين لديهم تاريخ ميلاد في المقدمة
  //       });
  //     case "popularity":
  //       return persons.sort(
  //         (a, b) => (b.popularity || 0) - (a.popularity || 0)
  //       );
  //     default:
  //       return persons;
  //   }
  // };

  //* فرز الأشخاص قبل العرض
  // const sortedPersons = sortPersons([...filteredTypes]);

  // *#3 New Way:

  // const sortItems = (movies) => {
  //   switch (sortOrder) {
  //     case "nameAsc":
  //     case "titleAsc":
  //       return movies.sort((a, b) => {
  //         const field =
  //           selectedType === "person"
  //             ? a.name
  //             : selectedType === "movie" || selectedType === "tv"
  //             ? a.title
  //             : null;
  //         const fieldB =
  //           selectedType === "person"
  //             ? b.name
  //             : selectedType === "movie" || selectedType === "tv"
  //             ? b.title
  //             : null;
  //         if (field && fieldB) {
  //           return field.localeCompare(fieldB);
  //         }
  //         return field ? -1 : 1; // ضع العنصر الذي يملك الاسم أو العنوان في المقدمة
  //       });

  //     case "nameDesc":
  //     case "titleDesc":
  //       return movies.sort((a, b) => {
  //         const field =
  //           selectedType === "person"
  //             ? a.name
  //             : selectedType === "movie" || selectedType === "tv"
  //             ? a.title
  //             : null;
  //         const fieldB =
  //           selectedType === "person"
  //             ? b.name
  //             : selectedType === "movie" || selectedType === "tv"
  //             ? b.title
  //             : null;
  //         if (field && fieldB) {
  //           return fieldB.localeCompare(field);
  //         }
  //         return field ? -1 : 1;
  //       });

  //     case "birthday":
  //     case "year":
  //       return movies.sort((a, b) => {
  //         const field =
  //           selectedType === "person"
  //             ? a.birthday
  //             : selectedType === "movie" || selectedType === "tv"
  //             ? a.release_date
  //             : null;
  //         const fieldB =
  //           selectedType === "person"
  //             ? b.birthday
  //             : selectedType === "movie" || selectedType === "tv"
  //             ? b.release_date
  //             : null;
  //         if (field && fieldB) {
  //           return new Date(field) - new Date(fieldB);
  //         }
  //         return field ? -1 : 1;
  //       });

  //     case "popularity":
  //     case "rating":
  //       return movies.sort((a, b) => {
  //         const field =
  //           selectedType === "person"
  //             ? a.popularity
  //             : selectedType === "movie" || selectedType === "tv"
  //             ? a.vote_average
  //             : null;
  //         const fieldB =
  //           selectedType === "person"
  //             ? b.popularity
  //             : selectedType === "movie" || selectedType === "tv"
  //             ? b.vote_average
  //             : null;
  //         return (fieldB || 0) - (field || 0);
  //       });

  //     default:
  //       return movies;
  //   }
  // };

  const sortItems = (items, type, sortOrder) => {
    switch (sortOrder) {
      case "nameAsc":
      case "titleAsc":
        return items.sort((a, b) => {
          const field =
            type === "person"
              ? a.name
              : type === "movie" || type === "tv"
              ? a.name || a.title
              : null;
          const fieldB =
            type === "person"
              ? b.name
              : type === "movie" || type === "tv"
              ? b.name || b.title
              : null;
          if (field && fieldB) {
            return field.localeCompare(fieldB);
          }
          return field ? -1 : 1; // ضع العنصر الذي يملك الاسم أو العنوان في المقدمة
        });

      case "nameDesc":
      case "titleDesc":
        return items.sort((a, b) => {
          const field =
            type === "person"
              ? a.name
              : type === "movie" || type === "tv"
              ? a.name || a.title
              : null;
          const fieldB =
            type === "person"
              ? b.name
              : type === "movie" || type === "tv"
              ? b.name || b.title
              : null;
          if (field && fieldB) {
            return fieldB.localeCompare(field);
          }
          return field ? -1 : 1;
        });

      case "birthday":
      case "year":
        return items.sort((a, b) => {
          const field =
            type === "person"
              ? a.birthday
              : type === "movie" || type === "tv"
              ? a.release_date || a.first_air_date
              : null;
          const fieldB =
            type === "person"
              ? b.birthday
              : type === "movie" || type === "tv"
              ? b.release_date || b.first_air_date
              : null;
          if (field && fieldB) {
            return new Date(fieldB) - new Date(field);
          }
          return field ? -1 : 1;
        });

      case "popularity":
      case "rating":
        return items.sort((a, b) => {
          const field =
            type === "person"
              ? a.popularity
              : type === "movie" || type === "tv"
              ? a.vote_average
              : null;
          const fieldB =
            type === "person"
              ? b.popularity
              : type === "movie" || type === "tv"
              ? b.vote_average
              : null;
          return (fieldB || 0) - (field || 0);
        });

      default:
        return items;
    }
  };

  const sortedMovies = sortItems(favoriteMovies, "movie", sortOrder);

  const persons = favoriteMovies.filter((item) => item.type === "person");
  const sortedPersons = sortItems(persons, "person", sortOrder);

  return (
    <Fragment>
      <h2
        className="mb-4 border-3 rounded-2 p-3 text-danger"
        style={{ borderStyle: "solid" }}
      >
        Your Favorite Movies
      </h2>
      {/* قائمة منسدلة لتصفية حسب النوع */}
      <div className="bg-primary-subtle p-2 mb-4 m-auto rounded-3">
        <select
          value={genreFilter}
          onChange={(e) => setGenreFilter(e.target.value)}
          className="form-select m-auto bg-body-tertiary text-primary"
        >
          <option value="all">All Genres</option>
          {genres.map((genre, index) => (
            // <option key={genre.id} value={genre.id}>
            <option key={genre.id + "#" + index} value={genre.id}>
              {genre.name}
            </option>
          ))}
        </select>
      </div>

      <div className={`d-flex flex-wrap mb-4 ${classes["sort"]}`}>
        <button
          onClick={() => setSortOrder("titleAsc")}
          className={`btn btn-outline-primary mx-1 my-1 ${
            sortOrder === "titleAsc" ? "active" : ""
          }`}
        >
          <FaSortAlphaDown /> Sort A-Z
        </button>
        <button
          onClick={() => setSortOrder("titleDesc")}
          className={`btn btn-outline-primary mx-1 my-1 ${
            sortOrder === "titleDesc" ? "active" : ""
          }`}
        >
          <FaSortAlphaUp /> Sort Z-A
        </button>
        <button
          onClick={() => setSortOrder("year")}
          className={`btn btn-outline-primary mx-1 my-1 ${
            sortOrder === "year" ? "active" : ""
          }`}
        >
          <FaCalendar /> Sort by Year/Birthday
        </button>
        <button
          onClick={() => setSortOrder("rating")}
          className={`btn btn-outline-primary mx-1 my-1 ${
            sortOrder === "rating" ? "active" : ""
          }`}
        >
          <FaStar /> Sort by Rating/Popularity
        </button>
      </div>

      {/* <div className={`mb-4 ${classes["sort"]}`}>
        <button
          onClick={() => setSortOrder("nameAsc")}
          className={`btn btn-outline-primary mx-1 ${
            sortOrder === "nameAsc" ? "active" : ""
          }`}
        >
          <FaSortAlphaDown /> Sort A-Z
        </button>
        <button
          onClick={() => setSortOrder("nameDesc")}
          className={`btn btn-outline-primary mx-1 ${
            sortOrder === "nameDesc" ? "active" : ""
          }`}
        >
          <FaSortAlphaUp /> Sort Z-A
        </button>
        <button
          onClick={() => setSortOrder("birthday")}
          className={`btn btn-outline-primary mx-1 ${
            sortOrder === "birthday" ? "active" : ""
          }`}
        >
          <FaCalendar /> Sort by Birthday
        </button>
        <button
          onClick={() => setSortOrder("popularity")}
          className={`btn btn-outline-primary mx-1 ${
            sortOrder === "popularity" ? "active" : ""
          }`}
        >
          <FaStar /> Sort by Popularity
        </button>
      </div> */}

      <div
        className={`${classes.edit__buttons} d-flex flex-wrap justify-content-center align-items-center`}
      >
        {/* زر إزالة الكل */}
        <button
          onClick={handleRemoveAllFavorites}
          className="btn btn-danger mb-2 mx-3"
          disabled={favoriteMovies.length === 0}
        >
          Remove All Favorites
        </button>
        {/* Dropdown لاختيار النوع */}
        <select
          value={selectedType}
          onChange={(e) => setSelectedType(e.target.value)}
          className="form-select mb-2 w-25 mx-3 border-2 border-primary"
        >
          <option value="all">All</option>
          <option value="person">Persons</option>
          <option value="movie_or_tv">Movies & TV Shows</option>
          <option value="new">Soon!</option>
        </select>
      </div>

      {/* <div>
        {favoriteMovies.map((movie) => (
          <div key={movie.id}>
            <h3>{movie.title}</h3>
            {/* استخدام النوع الديناميكي لكل عنصر *}
            <p>Type: {movie.type}</p>
            <button onClick={() => handleMovieClick(movie.id)}>
              View {movie.type} Details
            </button>
            <button onClick={() => handleRemoveFavorite(movie.id)}>
              Remove from Favorites
            </button>
          </div>
        ))}
      </div> */}

      {sortedMovies.length === 0 ? (
        <p
          className="p-3 m-auto mt-5 rounded-3 text-bg-light bg-body-secondary"
          style={{ width: "fit-content" }}
        >
          No favorite movies yet. Start adding some!
        </p>
      ) : (
        <Fragment>
          {["person", "all"].includes(selectedType) && (
            <div className="d-flex justify-content-evenly flex-wrap mt-5">
              {(selectedType === "person" || selectedType === "all") && (
                <div className="w-100 text-start mb-4">
                  <h2
                    className="d-block py-2 px-4 mb-0 rounded border-3 text-primary bg-primary-subtle border-primary"
                    style={{ borderStyle: "solid", width: "fit-content" }}
                  >
                    Persons:
                  </h2>
                </div>
              )}
              {sortedPersons.length > 0 ? (
                sortedPersons.map((person) => (
                  <Fragment key={person.id}>
                    {person.type === "person" && (
                      <div
                        className={`${classes["person-container"]} mx-4 mb-4 mw-100 position-relative d-flex justify-content-start align-items-center`}
                      >
                        <div className={classes.overlay}></div>
                        {person.profile_path ? (
                          <Image
                            src={`https://image.tmdb.org/t/p/w500${person.profile_path}`}
                            alt={person.name}
                            rounded
                            className={`${classes["person-image"]}`}
                          />
                        ) : (
                          <p>No Image Available</p>
                        )}
                        <div
                          className={`${classes["person-info"]} text-center position-absolute`}
                        >
                          <h3>{person.name}</h3>
                          <p className="m-0">
                            <strong>Known:</strong>{" "}
                            {person.known_for_department}
                          </p>
                          <p className="m-0">
                            <strong>Birthday:</strong>{" "}
                            {person.birthday || "N/A"}
                          </p>
                          <p className="m-0">
                            <strong>PlaceOfBirth:</strong>{" "}
                            {person.place_of_birth || "N/A"}
                          </p>
                          <p className="m-0">
                            <strong>Popularity:</strong>{" "}
                            {person.popularity || "N/A"}
                          </p>
                          <Link
                            to={`/person?query=${person.name.replace(
                              " ",
                              "-"
                            )}&id=${person.id}`}
                            className="text-decoration-none mt-3"
                          >
                            <FaLink /> Show Info
                          </Link>
                          <button
                            className="text-truncate w-75 btn btn-danger mx-auto p-1 text-decoration-none text-white border-0"
                            style={{ marginTop: "15px" }}
                            onClick={() => handleRemoveFavorite(person.id)}
                          >
                            <FaDeleteLeft /> ({person.name})
                          </button>
                        </div>
                      </div>
                    )}
                  </Fragment>
                ))
              ) : (
                <div
                  className="alert alert-info text-center text-dark"
                  role="alert"
                >
                  You haven't added any person(s) yet.
                </div>
              )}
            </div>
          )}

          {/* وظيفة لإنشاء قسم للأفلام أو العروض التلفزيونية */}
          {/* تحقق أولاً إذا كان النوع "movie" أو "tv" */}
          {["movie_or_tv", "all"].includes(selectedType) &&
            ["movie", "tv"].map((type) => (
              <div
                key={type}
                className={`${type}-section ${classes["favorites-list"]} d-flex flex-wrap align-items-center`}
              >
                <div className="w-100 text-start mt-3">
                  <h2
                    className="d-block py-2 px-4 mb-0 rounded border-3 text-primary bg-primary-subtle border-primary"
                    style={{ borderStyle: "solid", width: "fit-content" }}
                  >
                    {type === "movie" ? "Movies" : "TV Shows"}:
                  </h2>
                </div>
                {/* {filteredTypes */}
                {sortedMovies.filter((movie) => movie.type === type).length >
                0 ? (
                  sortedMovies
                    .filter((movie) => movie.type === type)
                    .map((movie) => (
                      <div
                        key={movie.id}
                        className={`${classes["favorites-item"]} overflow-hidden`}
                      >
                        <div className={`position-relative`}>
                          <img
                            src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`}
                            alt={movie.title || movie.name}
                            className={`card-img-top ${classes["favorites-poster"]} w-100 h-100`}
                            onClick={() => handleMovieClick(movie.id)}
                          />
                          <div
                            className={`${classes["favorites-details"]} text-center`}
                          >
                            <h3
                              className={classes["card-title"]}
                              onClick={() => handleMovieClick(movie.id)}
                            >
                              {movie.title || movie.name}
                            </h3>
                            <p className="text-muted">
                              Release Year:{" "}
                              {movie.release_date
                                ? movie.release_date.split("-")[0]
                                : movie.first_air_date
                                ? movie.first_air_date.split("-")[0]
                                : "N/A"}
                            </p>
                            <p className="text-muted">
                              Rating: {movie.vote_average}
                            </p>
                            <button
                              className={`btn btn-danger ${classes["remove-btn"]} text-white border-0`}
                              onClick={() => handleRemoveFavorite(movie.id)}
                            >
                              Remove
                            </button>
                          </div>
                        </div>
                      </div>
                    ))
                ) : (
                  <div
                    className="alert alert-info text-center text-dark m-auto"
                    role="alert"
                  >
                    {type === "movie"
                      ? "You haven't added any movies to your favorites yet. Start exploring and add some to your list!"
                      : type === "tv"
                      ? "No TV shows in your favorites yet. Why not add a few of your favorites?"
                      : `No ${
                          type === "movie" ? "Movies" : "TV Shows"
                        } Found Yet`}
                  </div>
                )}
              </div>
            ))}
        </Fragment>
      )}
    </Fragment>
  );
};

export default FavoritesList;
