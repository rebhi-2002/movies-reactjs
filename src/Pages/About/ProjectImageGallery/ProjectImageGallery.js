import React, { useState, useRef } from "react";
import { useParams, useNavigate } from "react-router-dom";
import Slider from "react-slick";
import { portfolioItems } from "../About"; // استيراد بيانات المشاريع
import classes from "./ProjectImageGallery.module.css";
import { keyframes } from "framer-motion";

const ProjectImageGallery = () => {
  const { id } = useParams(); // جلب id من المسار
  const navigate = useNavigate();

  // const project = portfolioItems.find((item) => `${item.workPage}` === `/static/media/${id}`); // العثور على المشروع المناسب بناءً على id
  const project = portfolioItems.find((item) => `${item.id}` === `${id}`);

  const [currentIndex, setCurrentIndex] = useState(0); // حالة لتتبع الشريحة الحالية
  const sliderRef = useRef(null); // المرجع للسلايدر

  // إعداد خيارات السلايدر
  const sliderSettings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: false,
    autoplaySpeed: 3000, // الوقت بين كل تغيير في الصورة
    adaptiveHeight: true, // ضبط السلايدر ليتكيف مع حجم المحتوى
    afterChange: (current) => {
      setCurrentIndex(current); // تحديث currentIndex بعد تغيير الشريحة
      console.log(`Current slide index: ${current}`); // سجل المؤشر الحالي
      if (current === project.workPage.length - 1) {
        // إذا وصل إلى آخر صورة
        sliderRef.current.slickGoTo(0); // العودة إلى أول صورة
      }
    },
  };

  // إذا لم يتم العثور على المشروع
  if (!project) {
    return (
      <div className="text-center">
        <h2>Project not found</h2>
        <p>{`No project found for ID: ${id}`}</p>
      </div>
    );
  }

  const uniqueImages = Array.from(new Set(project.workPage));
  const isDarkMode = document.body.getAttribute("data-theme") === "dark";

  const maxProjectId = Math.max(...portfolioItems.map((project) => project.id));

  return (
    <div className={classes["container-fluid"]}>
      <div className={classes["project-image-gallery"]}>
        <div className={`${classes["toolbar-buttons"]} d-flex justify-content-between align-items-center mt-4`}>
          {/* زر المشروع السابق */}
          <button
            onClick={() => navigate(`/about/portfolio/work/${project.id - 1}`)}
            className={`${classes["previous-project-button"]} btn bg-secondary-subtle btn-link d-inline-flex justify-content-center align-items-center mx-2`}
            style={{
              padding: "10px 20px",
              borderRadius: "5px",
              border: "none",
              cursor: project.id <= 1 ? "not-allowed" : "pointer",
            }}
            disabled={project.id <= 1} // تعطيل الزر إذا كان id أقل من أو يساوي 1
          >
            <i className="fas fa-arrow-left fs-5"></i>
            <strong className="fs-4 ms-2">Previous Project</strong>
          </button>
          {/* زر العودة للصفحة السابقة */}
          <button
            onClick={() => navigate(`/about#portfolio-items`)}
            className={`${classes["back-button"]} btn btn-primary d-inline-flex justify-content-center align-items-center mx-2 my-3`}
            style={{
              padding: "10px 20px",
              marginBottom: "20px",
              borderRadius: "5px",
              backgroundColor: "#007bff",
              color: "#fff",
              border: "none",
              cursor: "pointer",
              boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
            }}
          >
            <i className="fas fa-arrow-alt-circle-left fs-5"></i>
            <strong className="fs-4">Go Back</strong>
          </button>
          {/* زر عرض تفاصيل المشروع */}
          <button
            onClick={() => navigate(`/about/portfolio/details/${project.id}`)}
            className={`${classes["more-details-button"]} btn bg-primary-subtle btn-link d-inline-flex justify-content-center align-items-center mx-2 my-3`}
            style={{
              padding: "10px 20px",
              marginTop: "20px",
              borderRadius: "5px",
              // backgroundColor: "#28a745",
              // color: "#fff",
              border: "none",
              cursor: "pointer",
              // boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
            }}
          >
            <strong className="fs-4">View Full Project Details</strong>
          </button>
          {/* زر المشروع التالي */}
          <button
            onClick={() => navigate(`/about/portfolio/work/${project.id + 1}`)}
            className={`${classes["next-project-button"]} btn bg-secondary-subtle btn-link d-inline-flex justify-content-center align-items-center mx-2`}
            style={{
              padding: "10px 20px",
              borderRadius: "5px",
              border: "none",
              cursor: project.id >= maxProjectId ? "not-allowed" : "pointer", // maxProjectId هو الحد الأقصى لقيمة id للمشاريع
            }}
            disabled={project.id >= maxProjectId} // تعطيل الزر إذا كان id يساوي أو أكبر من الحد الأقصى
          >
            <strong className="fs-4 me-2">Next Project</strong>
            <i className="fas fa-arrow-right fs-5"></i>
          </button>
        </div>

        {/* وصف المشروع */}
        <p
          className="text-center bg-dark text-light rounded-2 lh-base fs-5 mt-4 mb-5 py-2 px-5"
          // style={{ color: isDarkMode ? "#e0e0e0" : "#777" }}
        >
          {project.details.description ||
            "This project showcases my work in web development, design, and more."}
        </p>
        {/* <Link
          to="#"
          className={classes["back-button"]}
          onClick={() => window.history.back()}
        >
          <i className="fas fa-arrow-left"></i> Back
          <i className="bi bi-arrow-left"></i> Back
        </Link> */}
        {/* عرض عنوان المشروع */}
        <div
          className={`${classes.hero} d-inline-flex justify-content-between align-items-center m-auto`}
        >
          <h2
            className={`${classes["project-title"]} display-4 my-3 me-5 pe-5`}
            style={{
              width: "fit-content",
              fontSize: "3rem",
              color: "rgb(250, 230, 245)",
              // background: "rgba(250, 250, 250, 0.2)",
              // background: "rgba(0, 0, 0, 0.4)",
              background: isDarkMode
                ? "rgba(0, 0, 0, 0.4)"
                : "rgba(255, 255, 255, 0.2)",
              padding: "10px 80px 10px 20px",
              marginBottom: "10px",
              borderRadius: "8px",
              borderBottom: "2px solid #007bff",
              boxShadow: "0 4px 20px rgba(0, 0, 0, 1)",
              textShadow:
                " 0 0 5px rgba(255, 255, 255, 0.7), 0 0 10px rgba(255, 255, 255, 0.5), 0 0 15px rgba(0, 204, 255, 0.5)",
            }}
          >
            {project.title}
          </h2>
          <a
            href="#project-feedback"
            className={`${classes["btn-scroll"]} ms-5 ps-5 scrollto`}
            title="Scroll Down"
          >
            <i class="bx bx-chevron-down"></i>
          </a>
        </div>
        {/* سلايدر الصور */}
        <Slider
          ref={sliderRef}
          {...sliderSettings}
          style={{
            backgroundRepeat: "no-repeat",
          }}
        >
          {/* {project.workPage.map((image, index) => ( */}
          {uniqueImages.map((image, index) => (
            <div
              key={index}
              className={`${classes["gallery-slide"]} p-2 rounded-2 bg-info-subtle`}
            >
              <img
                src={image}
                alt={`ProjectImage ${index + 1}`}
                loading="lazy"
              />
              <div
                className="d-flex justify-content-center align-items-center mx-auto text-center my-3 text-primary fs-4"
                style={{
                  color: isDarkMode ? "#e0e0e0" : "#333",
                }}
              >
                <p
                  className="d-inline-block px-2 my-2 fs-3 rounded-2 border-2 text-primary"
                  style={{ borderStyle: "dashed" }}
                >
                  <span className="text-danger">Image</span>
                  <span
                    className="d-inline-flex justify-content-center align-items-center mx-1 text-primary"
                    style={{
                      borderRadius: "50%",
                      borderStyle: "solid",
                      width: "30px",
                      height: "30px",
                      aspectRatio: "1 / 1",
                    }}
                  >
                    {`${" "}${currentIndex + 1}${" "}`}
                  </span>
                  <span className="text-danger">of </span>
                  <strong className="text-primary text-decoration-underline">
                    {uniqueImages.length}
                  </strong>
                </p>
              </div>
            </div>
          ))}
        </Slider>
        {/* قسم إضافة التقييم */}
        <div
          id="project-feedback"
          className={`${classes["project-feedback"]} container mt-5 p-4 shadow-lg rounded bg-light`}
        >
          <h3 className="text-center mb-4">Leave a Review:</h3>
          <form className="row g-3 needs-validation" noValidate>
            <div className="col-12">
              <textarea
                placeholder="Write your feedback here..."
                className="form-control"
                style={{
                  height: "150px",
                  padding: "15px",
                  fontSize: "16px",
                  borderRadius: "10px",
                  borderColor: "#dee2e6",
                  boxShadow: "0 3px 6px rgba(0, 0, 0, 0.1)",
                }}
                required
              ></textarea>
              <div className="invalid-feedback">
                Please enter your feedback before submitting.
              </div>
            </div>

            <div className="col-12 text-center">
              <button
                type="submit"
                className="btn btn-primary btn-lg px-5 py-3"
                style={{
                  borderRadius: "50px",
                  backgroundColor: "#007bff",
                  border: "none",
                  transition: "all 0.3s ease",
                  boxShadow: "0 4px 8px rgba(0, 123, 255, 0.4)",
                }}
                onMouseEnter={(e) =>
                  (e.currentTarget.style.boxShadow =
                    "0 6px 12px rgba(0, 123, 255, 0.6)")
                }
                onMouseLeave={(e) =>
                  (e.currentTarget.style.boxShadow =
                    "0 4px 8px rgba(0, 123, 255, 0.4)")
                }
              >
                <i className="fas fa-paper-plane me-2"></i>Submit Feedback
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ProjectImageGallery;
