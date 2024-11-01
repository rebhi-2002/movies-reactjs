import React from "react";
import { Link } from "react-router-dom";
import person from "../../../assets/person.jpeg";
import { FaLink } from "react-icons/fa";
import { Scrollbars } from "react-custom-scrollbars-2";
import classes from "./MovieInfo.module.css";

const MovieInfo = ({ type, details, reviews, cast, similarItems }) => {
  const theme = document.body.getAttribute("data-theme");
  const textColor =
    theme === "light" ? "text-secondary-emphasis" : "text-secondary";

  return (
    <div
      className={`${classes["movie-header"]} d-flex justify-content-center align-items-center flex-column`}
    >
      <div className={`${classes["TMDB__IMG"]} w-100 h-100`}>
        <img
          src={`https://image.tmdb.org/t/p/w500${details.poster_path}`}
          alt={details.title || (details.name && details.name)} // استخدم title أو name
          className={`${classes["movie-poster"]} w-100 h-100`}
        />
      </div>
      <div className={classes["movie-info"]}>
        <div className="container py-5">
          {/* عرض العنوان وتفاصيل أساسية */}
          <div className="text-center mb-4">
            {/* <h2 className="fw-bold">{details.title || details.name}</h2> */}
            <h2
              className={`${classes["movie-title"]} fw-semibold text-capitalize`}
            >
              {details.original_title || details.original_name}{" "}
              <span className="fs-5 text-capitalize text-primary">
                `{type}`
              </span>{" "}
              {/* استخدم title أو name */}
            </h2>
            {details.tagline && (
              <p className={`${classes["movie-tagline"]} text-center fw-bold`}>
                "{details.tagline}"
              </p>
            )}
            <div className="text-center mt-3 mb-4">
              <h3 className="fw-bold">Overview:</h3>
              <p className={classes["movie-overview"]}>{details.overview}</p>
            </div>
            {/* <p className="text-white">
                  {details.release_date
                    ? `Release Date: ${new Date(
                        details.release_date
                      ).toLocaleDateString()}`
                    : details.first_air_date
                    ? `First Air Date: ${new Date(
                        details.first_air_date
                      ).toLocaleDateString()}`
                    : ""}
                </p> */}
            {type === "tv" && (
              <div className={classes["status__info"]}>
                <div className="fw-bold fst-italic w-100 d-flex justify-content-center">
                  <p className="m-2">
                    Number of Seasons:
                    <span
                      className={`text-decoration-underline mx-1 ${classes["no"]}`}
                    >
                      {details.number_of_seasons}
                    </span>
                  </p>
                  <p className="m-2">
                    Number of Episodes:
                    <span
                      className={`text-decoration-underline mx-1 ${classes["no"]}`}
                    >
                      {details.number_of_episodes}
                    </span>
                  </p>
                </div>
                <p className="d-block w-100">
                  <strong>Status:</strong> {details.status}
                </p>
              </div>
            )}

            {details.release_date ? (
              <p
                className={`${classes["movie-release-date"]} fw-bold fst-italic w-100 d-inline-flex justify-content-center align-items-center`}
              >
                <strong className="me-1">Release Date: </strong>{" "}
                {details.release_date}
              </p>
            ) : details.first_air_date ? (
              <p
                className={`${classes["movie-release-date"]} fw-bold fst-italic w-100 d-inline-flex justify-content-center align-items-center`}
              >
                <strong className="me-1">First Air Date:</strong>{" "}
                {details.first_air_date}
              </p>
            ) : null}
            {/* <p className="text-white">Runtime: {details.runtime || details.episode_run_time?.[0]} mins</p> */}
            <p
              className={`${classes["movie-runtime"]} fst-italic w-100 d-inline-flex justify-content-center align-items-center`}
            >
              Runtime:{" "}
              {details.runtime
                ? `${details.runtime || details.episode_run_time} minutes`
                : "N/A"}{" "}
              {/* تأكد من وجود runtime */}
            </p>
            <p
              className={`${classes["card-text-details"]} w-100 d-inline-flex justify-content-center align-items-center`}
            >
              Voter Count:
              <span className="fw-normal d-inline-block ms-1">
                {details.vote_count}
              </span>
            </p>
            {/* <p className="text-white">Vote Average: {details.vote_average}/10</p> */}
            <p
              className={`${classes["movie-rating"]} fw-bold w-100 d-inline-flex justify-content-center align-items-center`}
            >
              Rating: {details.vote_average} / 10
            </p>
            {type === "movie" && (
              <p
                className={`${classes["status__info"]} ${textColor} d-block w-100`}
                style={{ fontSize: "18px" }}
              >
                <strong>Status:</strong> {details.status}
              </p>
            )}
            {type === "tv" && (
              <div className="my-2 mx-1 py-2 px-1">
                <div className="container">
                  <h3
                    className="p-2 rounded m-auto border-3 border-primary-subtle"
                    style={{ borderStyle: "solid" }}
                  >
                    Seasons
                  </h3>
                  <Scrollbars
                    className="my-4"
                    style={{ height: 600, paddingRight: "15px" }}
                    autoHide
                    autoHideTimeout={700} // قللت الوقت لجعل الإخفاء أسرع
                    autoHideDuration={300} // زدت المدة لجعل ظهور التمرير أكثر سلاسة
                    renderThumbVertical={({ style, ...props }) => (
                      <div
                        {...props}
                        style={{
                          ...style,
                          backgroundColor: "#ff9800", // لون جذاب ومميز
                          borderRadius: "10px",
                          width: "8px", // عرض أضيق للـ scrollbar ليبدو أجمل
                          opacity: 0.9, // شفافية خفيفة لتحسين المظهر
                          transition: "background-color 0.3s ease", // تحكم سلس في تغييرات الألوان عند التحويم
                        }}
                        onMouseOver={(e) => {
                          e.target.style.backgroundColor = "#ffa733"; // تغيير اللون عند التحويم
                        }}
                        onMouseOut={(e) => {
                          e.target.style.backgroundColor = "#ff9800"; // العودة إلى اللون الأصلي عند إزالة التحويم
                        }}
                      />
                    )}
                    renderTrackVertical={({ style, ...props }) => (
                      <div
                        {...props}
                        style={{
                          ...style,
                          backgroundColor: "rgba(0, 0, 0, 0.2)", // خلفية نصف شفافة لمسار التمرير
                          borderRadius: "10px",
                          width: "8px", // ضبط عرض مسار التمرير
                          right: "0px", // تأكد من أن المسار على أقصى اليمين
                          top: "0px", // جعل المسار يبدأ من الأعلى
                          bottom: "0px", // جعل المسار ينتهي في الأسفل
                        }}
                      />
                    )}
                  >
                    <ul
                      className={`${classes["seasons-section"]} list-unstyled mb-4`}
                    >
                      {details.seasons.map((season) => (
                        <li
                          key={season.id}
                          className={`card my-3 ${classes.seasonCard}`}
                        >
                          <div className="card-body">
                            <h4 className="card-title">{season.name}</h4>
                            <p className="card-text">
                              <strong>Air Date:</strong>{" "}
                              {season.air_date || "N/A"}
                            </p>
                            <p className="card-text">
                              <strong>Episode Count:</strong>{" "}
                              {season.episode_count || "N/A"}
                            </p>
                            <p className="card-text">
                              <strong>Vote Average:</strong>{" "}
                              {season.vote_average || "N/A"}
                            </p>
                            {season.poster_path && (
                              <img
                                src={`https://image.tmdb.org/t/p/w200${season.poster_path}`}
                                alt={season.name}
                                className={`img-fluid ${classes.posterImage}`} // استخدام img-fluid لتنسيق الصورة
                              />
                            )}
                          </div>
                        </li>
                      ))}
                    </ul>
                  </Scrollbars>

                  {/* إضافة معلومات الشبكات */}
                  <h3
                    className="p-2 rounded m-auto border-3 border-primary-subtle"
                    style={{ borderStyle: "solid" }}
                  >
                    Networks
                  </h3>
                  <ul className="list-unstyled mb-4">
                    {details.networks.map((network) => (
                      <li
                        key={network.id}
                        className={`card my-3 ${classes.networkCard}`}
                      >
                        <div className="card-body">
                          <p className="card-text">
                            <strong>{network.name}</strong>
                          </p>
                          {network.logo_path && (
                            <img
                              src={`https://image.tmdb.org/t/p/w200${network.logo_path}`}
                              alt={network.name}
                              className={`img-fluid ${classes.logoImage}`} // استخدام img-fluid لتنسيق الصورة
                            />
                          )}
                          {network.origin_country && (
                            <p className="card-text">
                              <strong>Country:</strong> {network.origin_country}
                            </p>
                          )}
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>
                {/* إنشاء مصفوفة تحتوي على الحلقات */}
                <div className={`container ${classes.episodeDetails}`}>
                  <h3
                    className="p-2 rounded m-auto border-3 border-primary-subtle"
                    style={{ borderStyle: "solid" }}
                  >
                    EpisodeDetails
                  </h3>
                  {details && // تأكد من وجود details
                    [
                      {
                        episode: details.last_episode_to_air,
                        title: "Last Episode to Air",
                      },
                      {
                        episode: details.next_episode_to_air,
                        title: "Next Episode to Air",
                      },
                    ].map(
                      (item, index) =>
                        item.episode ? ( // تأكد من أن الحلقة موجودة
                          <div
                            key={item.episode.id || index}
                            className={`card my-3 ${classes.card}`}
                          >
                            <div className="card-body">
                              <h3 className="card-title">{item.title}</h3>
                              <p className="card-text">
                                <strong>Episode Name:</strong>{" "}
                                {item.episode.name || "N/A"}
                              </p>
                              <p className="card-text">
                                <strong>Air Date:</strong>{" "}
                                {item.episode.air_date || "N/A"}
                              </p>
                              <p className="card-text">
                                <strong>Episode Type:</strong>{" "}
                                {item.episode.episode_type || "N/A"}
                              </p>
                              <p className="card-text">
                                <strong>Episode Number:</strong>{" "}
                                {item.episode.episode_number}
                              </p>
                              <p className="card-text">
                                <strong>Season Number:</strong>{" "}
                                {item.episode.season_number}
                              </p>
                              <p className="card-text">
                                <strong>Vote Average:</strong>{" "}
                                {item.episode.vote_average || "N/A"}
                              </p>
                              <p className="card-text">
                                <strong>Overview:</strong>{" "}
                                {item.episode.overview ||
                                  "No overview available."}
                              </p>

                              {item.episode.still_path && (
                                <img
                                  src={`https://image.tmdb.org/t/p/w500${item.episode.still_path}`}
                                  alt={item.episode.name}
                                  className={`img-fluid ${classes.episodeImage}`} // استخدام img-fluid لتنسيق الصورة
                                />
                              )}
                            </div>
                          </div>
                        ) : null // في حالة عدم وجود الحلقة، لا تعرض شيئًا
                    )}
                </div>
              </div>
            )}
            <div className="w-100">
              {/* عرض شركات الإنتاج */}
              <div
                className={`${classes["production-companies"]} d-flex flex-column align-items-center`}
              >
                <h3 className="fw-bold">Production Companies:</h3>
                <div className="d-flex flex-wrap justify-content-center align-items-center">
                  {details.production_companies.map((company) => (
                    <div
                      key={company.id}
                      className={`${classes["company-logo"]} d-flex flex-column align-items-center`}
                    >
                      {company.logo_path && (
                        <img
                          src={`https://image.tmdb.org/t/p/w500${company.logo_path}`}
                          alt={company.name}
                          className={classes["logo"]}
                        />
                      )}
                      <span className="text-white">{company.name}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* عرض اللغات المتحدثة */}
              <div
                className={`${classes["spoken-languages"]} d-flex flex-column align-items-center`}
              >
                <h3 className="fw-bold">Languages:</h3>
                <ul
                  className={`${classes["languages-list"]} list-unstyled d-flex flex-wrap justify-content-center`}
                >
                  {details.spoken_languages.map((language) => (
                    <li key={language.iso_639_1} className="text-white">
                      {language.name + " "} {" " + language.english_name}
                    </li>
                  ))}
                </ul>
              </div>

              {/* عرض تصنيف العمر */}
              <p
                className={`${classes["movie-rating-category"]} fw-bold w-100`}
              >
                Age Rating: {details.adult ? "18+" : "Suitable for all ages"}
              </p>

              {/* عرض تفاصيل المجموعة إذا كانت متاحة */}
              {details.belongs_to_collection && (
                <div
                  className={`${classes["collection-details"]} position-relative text-center`}
                  style={{
                    backgroundImage: `url('https://image.tmdb.org/t/p/original${details.belongs_to_collection.backdrop_path}')`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    padding: "20px 0",
                    borderRadius: "8px",
                    color: "white",
                  }}
                >
                  <div
                    style={{
                      position: "absolute",
                      top: 0,
                      left: 0,
                      right: 0,
                      bottom: 0,
                      backdropFilter: "blur(8px)",
                      zIndex: 1,
                      borderRadius: "8px",
                    }}
                  ></div>
                  <div style={{ position: "relative", zIndex: 2 }}>
                    <h3
                      className="fw-bold"
                      style={{ textShadow: "2px 2px 10px rgb(0, 0, 0, 1)" }}
                    >
                      Collection: {details.belongs_to_collection.name}
                    </h3>
                    <img
                      src={`https://image.tmdb.org/t/p/w500${details.belongs_to_collection.poster_path}`}
                      alt={details.belongs_to_collection.name}
                      className={classes["collection-poster"]}
                    />
                  </div>
                </div>
              )}

              {/* عرض معلومات المنشئين في حال كانت من النوع TV */}
              {details.created_by && details.created_by.length > 0 && (
                <div
                  className={`${classes["created-by"]} d-flex flex-column align-items-center`}
                >
                  <h3 className="fw-bold">Created By:</h3>
                  <div className="d-flex flex-wrap justify-content-center align-items-end">
                    {details.created_by.map((creator) => (
                      <div
                        key={creator.id}
                        className={`${classes["creator"]} d-flex flex-column align-items-center`}
                      >
                        {creator.profile_path ? (
                          <img
                            src={`https://image.tmdb.org/t/p/w500${creator.profile_path}`}
                            alt={creator.name}
                            className={classes["creator-photo"]}
                          />
                        ) : (
                          <img
                            src={person}
                            alt="Default Avatar"
                            className={classes["creator-photo"]}
                          />
                        )}
                        <span className={classes["creator__name"]}>
                          {creator.name}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
            <div
              className={`${classes["movie-genres"]} fst-italic d-flex justify-content-center align-items-center flex-wrap w-100 d-inline-flex justify-content-center align-items-center`}
            >
              <h3 className="fw-bold fs-4">Genres: </h3>
              <ul
                className={`${classes["genres-list"]} d-flex flex-wrap list-unstyled p-1 m-2`}
              >
                {details.genres.map((genre) => (
                  <li key={genre.id} className="d-inline text-white m-1">
                    {genre.name}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className={classes["reviews-container"]}>
            <h3 class="fw-bold my-5">Reviews and Viewer Opinions on Movies</h3>
            <div>
              {reviews.map((review, index) => (
                <div key={index} className={classes["review-card"]}>
                  <div className={classes["review-author"]}>
                    <strong>Author:</strong> {review.author || "Anonymous"}
                    <br />
                    <strong>Username:</strong> {review.author_details.username}
                  </div>
                  <div className={classes["review-avatar"]}>
                    {review.author_details.avatar_path ? (
                      <img
                        src={`https://image.tmdb.org/t/p/w200${review.author_details.avatar_path}`}
                        alt={`${review.author}'s avatar`}
                      />
                    ) : (
                      <img src={person} alt="Default avatar" />
                    )}
                  </div>
                  <div className={classes["review-rating"]}>
                    <strong>Rating:</strong>{" "}
                    {review.author_details.rating
                      ? `${review.author_details.rating}/10`
                      : "No Rating"}
                  </div>
                  <div className={classes["review-content"]}>
                    <p>
                      {review.content.length > 300
                        ? `${review.content.substring(0, 300)}...`
                        : review.content}
                    </p>
                  </div>
                  <div className={classes["review-date"]}>
                    <strong>Posted on:</strong>{" "}
                    {new Date(review.created_at).toLocaleDateString()}
                  </div>
                  {review.url && (
                    <div className={classes["review-link"]}>
                      <a
                        href={review.url}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Read Full Review
                      </a>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* عرض الطاقم (Cast) */}
          {cast.length > 0 && (
            <div
              className={`${classes.cast} d-flex flex-column align-items-center`}
            >
              <h3 className="fw-bold">Cast:</h3>
              <div
                className={`${classes["Cast__Info"]} ${classes["actor-container"]} w-100 d-flex flex-wrap justify-content-center`}
              >
                {cast.map((actor) => (
                  <div
                    key={actor.id}
                    className={`${classes.actor} d-flex flex-column align-items-center`}
                  >
                    {actor.profile_path ? (
                      <img
                        src={`https://image.tmdb.org/t/p/w500${actor.profile_path}`}
                        alt={actor.name}
                        className={classes["actor-photo"]}
                      />
                    ) : (
                      <img
                        src={person} // alt="Default Avatar"
                        alt={actor.name}
                        className={`${classes["actor-photo"]} h-100`}
                      />
                    )}
                    <span className="my-1 text-white fw-bold">
                      <Link
                        to={`/person?query=${actor.name.replace(" ", "-")}&id=${
                          actor.id
                        }`}
                        className="text-white text-decoration-none"
                      >
                        <FaLink /> {actor.name}
                      </Link>
                    </span>
                    <span className="my-1 text-white">
                      as {actor.character}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* عرض معلومات الإنتاج */}
          <div
            className={`${classes["production-details"]} rounded-4 mt-5 p-3 text-danger bg-body-secondary d-flex flex-column`}
          >
            <h3 className="fw-bold mb-3">Production Details:</h3>
            {/* عرض الميزانية */}
            <p className="mb-2 fw-bolder fs-5">
              <span className={`${classes["label"]} text-primary`}>
                Budget:
              </span>
              {details.budget ? `$${details.budget.toLocaleString()}` : "N/A"}
            </p>
            {/* عرض الإيرادات (Box Office) */}
            <p className="mb-2 fw-bolder fs-5">
              <span className={`${classes["label"]} text-primary`}>
                Box Office:
              </span>
              {details.revenue ? `$${details.revenue.toLocaleString()}` : "N/A"}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MovieInfo;
