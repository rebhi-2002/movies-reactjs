import React, { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import classes from "./NotFound.module.css";

const NotFound = () => {
  const navigate = useNavigate();

  useEffect(() => {
    // استخدم pushState لإضافة حالة جديدة في الـ history
    window.history.pushState(null, null, window.location.href);

    // متابعة حدث الرجوع
    const preventBack = () => {
      // إعادة توجيه المستخدم إلى الصفحة المطلوبة
      navigate("/");
    };

    // متابعة حدث popstate (الذي يحصل عند محاولة الرجوع)
    window.addEventListener("popstate", preventBack);

    // تنظيف: إزالة متابعة الحدث عند انتهاء الاستخدام
    return () => {
      window.removeEventListener("popstate", preventBack);
    };
  }, [navigate]);

  // return null;

  return (
    <div
      className={`${classes["not-found-container"]} d-flex justify-content-center align-items-center`}
    >
      <div
        className={`${classes["not-found-content"]} text-center text-white w-100`}
      >
        <h1 className={`${classes["not-found-title"]} fw-bold m-0`}>404</h1>
        <p className={classes["not-found-text"]}>
          Oops! The page you're looking for doesn't exist.
        </p>
        <Link
          to="/"
          className={`${classes["back-home-button"]} text-decoration-none text-white`}
        >
          Go Back Home
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
