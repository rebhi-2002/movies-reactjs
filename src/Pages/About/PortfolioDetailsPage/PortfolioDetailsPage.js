import React, { useState, useEffect, Fragment } from "react";
import { Link, useParams } from "react-router-dom";
import { portfolioItems } from "../About";
import styles from "./PortfolioDetailsPage.module.css";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination"; // أنماط pagination
import "swiper/css/navigation"; // أنماط navigation

const PortfolioDetails = () => {
  const [loading, setLoading] = useState(true);
  const { id } = useParams();
  const project = portfolioItems.find((item) => item.id === parseInt(id));

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false); // إيقاف التحميل بعد 3 ثواني
    }, 3000);
    return () => clearTimeout(timer); // تنظيف المؤقت عند إلغاء المكون
  }, []);

  if (!project) {
    return <h2 className={styles.notFound}>Project not found</h2>;
  }

  const { title, images, info, description } = project.details;

  return (
    <main id="main">
      {/* Start Portfolio Details */}
      <div id="portfolio-details" className={styles.portfolioDetails}>
        {/* Hero Section */}
        <div
          className={`${styles.hero} ${styles["hero-single"]} route ${styles["bg-image"]}`}
        >
          <div className={styles["overlay-mf"]}></div>
          <div
            className={`${styles["hero-content"]} ${styles["display-table"]}`}
          >
            <div className={styles["table-cell"]}>
              <div className="container text-center">
                <h2 className={`${styles["hero-title"]} text-white`}>
                  Portfolio Details
                </h2>
                <ol
                  className={`${styles["breadcrumb"]} d-flex justify-content-center`}
                >
                  <li className={styles["breadcrumb-item"]}>
                    {/* <Link to="/about" className="text-decoration-none">Home</Link> */}
                    <Link
                      to="/about"
                      style={{
                        textDecoration: "none",
                        color: "#007bff",
                        transition: "color 0.3s",
                      }}
                      onMouseEnter={(e) => (e.target.style.color = "#0056b3")}
                      onMouseLeave={(e) => (e.target.style.color = "#007bff")}
                    >
                      Home
                    </Link>
                  </li>
                  <li
                    className={`${styles["breadcrumb-item"]} ${styles["active"]}`}
                  >
                    Portfolio Details
                  </li>
                </ol>
              </div>
            </div>
          </div>
        </div>
        <div className="container mt-5">
          <div className="row">
            {/* Portfolio Images Section */}
            <div className="col-lg-8 bg-white p-4 rounded shadow-sm">
              <h2 className={`${styles.portfolioTitle} mb-4 text-center`}>
                {title}
              </h2>
              <div className="portfolio-details-slider swiper-container">
                {/* <div className="swiper-wrapper align-items-center">
                  {images.map((image, index) => (
                    <div key={index} className="swiper-slide">
                      <img style={{ maxWidth: "100%" }} src={image} alt="" />
                    </div>
                  ))}
                </div> */}
                {loading ? (
                  // {/* يمكنك هنا وضع تأثير أو spinner للتحميل */}
                  <div className={`p-5 my-5 ${styles["loading-spinner"]}`}>
                    <div
                      className={`d-flex flex-column p-2 my-4 ${styles["loader-container"]}`}
                    >
                      <div className={styles.loader}></div>
                      <p className="d-block w-100 text-primary my-4 mx-auto text-center">
                        Loading...
                      </p>
                    </div>
                  </div>
                ) : (
                  <Swiper
                    spaceBetween={30}
                    slidesPerView={1}
                    pagination={{ clickable: true }}
                    navigation
                    loop={true}
                    modules={[Pagination, Navigation]}
                    className="align-items-center"
                  >
                    {images.map((image, index) => (
                      <SwiperSlide
                        key={index}
                        className="d-flex justify-content-center align-items-center"
                      >
                        <img
                          style={{
                            maxWidth: "100%",
                            height: "auto",
                            borderRadius: "15px",
                            boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
                            // aspectRatio: "1 / 1",
                            objectFit: "contain",
                            margin: "auto",
                          }}
                          src={image}
                          alt={`Project Image ${index + 1}`}
                        />
                      </SwiperSlide>
                    ))}
                  </Swiper>
                )}
                <div className="swiper-pagination mt-3"></div>
              </div>
            </div>
            {/* Project Information Section */}
            <div className="col-lg-4 bg-light p-4 rounded shadow-sm">
              <h3 className="mb-4">Project Information</h3>
              <ul className="list-unstyled">
                <li className="mb-3">
                  <i className="bi bi-folder2-open me-2"></i>
                  <strong>Category:</strong> {info.category}
                </li>
                <li className="mb-3">
                  <i className="bi bi-person-fill me-2"></i>
                  <strong>Client:</strong> {info.client}
                </li>
                <li className="mb-3">
                  <i className="bi bi-calendar3 me-2"></i>
                  <strong>Project Date:</strong> {info.date}
                </li>
                <li className="mb-3">
                  <i className="bi bi-link-45deg me-2"></i>
                  <strong>Project URL:</strong>{" "}
                  <a href={info.url} target="_blank" rel="noopener noreferrer">
                    Visit Site
                  </a>
                </li>
              </ul>

              {/* Description */}
              {description.split("\n").map((paragraph, index) => (
                <p key={index} className="mb-3">
                  {paragraph}
                </p>
              ))}
            </div>
          </div>
        </div>
      </div>
      {/* End Portfolio Details */}
      <button
        className="back-to-top"
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        style={{
          position: "fixed",
          bottom: "20px",
          right: "20px",
          padding: "10px 15px",
          borderRadius: "50%",
          backgroundColor: "#007bff",
          color: "#fff",
          border: "none",
          cursor: "pointer",
          boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
          zIndex: "1000",
        }}
      >
        ↑
      </button>
    </main>
  );
};

export default PortfolioDetails;
