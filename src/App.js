import React, { useState, useEffect } from "react";
import { Routes, Route, useNavigate, useLocation } from "react-router-dom";

import Navbar from "./Pages/Navbar/Navbar";
import MoviesList from "./Pages/Movies/MoviesList/MoviesList";
import MovieDetails from "./Pages/Movies/MovieDetails/MovieDetails";

import MoviesCategoryPage from "./Pages/Movies/MoviesCategoryPage/MoviesCategoryPage";
import MovieShowcase from "./Pages/Movies/MovieShowcase/MovieShowcase";
import Search from "./Pages/Search/Search";
import Person from "./Pages/Person/Person";
import Favorites from "./Pages/Favorites/Favorites";
import Footer from "./Pages/Footer/Footer";

import About from "./Pages/About/About";
import ServiceDetailsPage from "./Pages/About/ServiceDetailsPage/ServiceDetailsPage";
import PortfolioDetailsPage from "./Pages/About/PortfolioDetailsPage/PortfolioDetailsPage";
import ProjectImageGallery from "./Pages/About/ProjectImageGallery/ProjectImageGallery";
import Contact from "./Pages/Contact/Contact";
import PrivacyPolicy from "./Pages/PrivacyPolicy/PrivacyPolicy";

import NotFound from "./Pages/NotFound/NotFound";
// import ErrorBoundary from "./components/ErrorBoundary/ErrorBoundary";

import Login from "./Pages/Login/Login";
import "bootstrap/dist/css/bootstrap.min.css"; // Importing Bootstrap styles
import "@fortawesome/fontawesome-free/css/all.min.css";
import classes from "./App.module.css";

const App = () => {
  // استرجاع حالة الوضع الداكن من localStorage عند تحميل الصفحة
  const [darkMode, setDarkMode] = useState(() => {
    const savedMode = localStorage.getItem("darkMode");
    return savedMode ? JSON.parse(savedMode) : false; // تحويل النص إلى Boolean أو استخدام الوضع الافتراضي (false)
  });

  // State for showing the dark mode button based on scroll
  const [isButtonVisible, setButtonVisible] = useState(false);

  // Toggles dark mode
  const toggleMode = () => {
    const newMode = !darkMode;
    setDarkMode(newMode);
    document.body.setAttribute("data-theme", newMode ? "dark" : "light");
    // حفظ الوضع في localStorage
    localStorage.setItem("darkMode", JSON.stringify(newMode));
  };

  // Handle scroll to show/hide dark mode button
  const handleScroll = () => {
    if (window.scrollY > 100) {
      setButtonVisible(true);
    } else {
      setButtonVisible(false);
    }
  };

  // Adding event listener for scroll
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // useEffect to handle dark/light theme toggle based on `darkMode`
  useEffect(() => {
    document.body.setAttribute("data-theme", darkMode ? "dark" : "light");
  }, [darkMode]);

  console.log("APP.JS RUNNING");

  const navigate = useNavigate();
  const location = useLocation();

  // استرداد عدد الصفحات من الـ Local Storage
  // const totalPages = parseInt(localStorage.getItem("totalPages"), 10) || 0; // استخدم 0 كقيمة افتراضية
  // console.log(totalPages.toString());

  const totalPages = Number.isNaN(
    parseInt(localStorage.getItem("totalPages"), 10)
  )
    ? 0
    : parseInt(localStorage.getItem("totalPages"), 10);

  useEffect(() => {
    const searchParams = new URLSearchParams(location.search);
    const page = parseInt(searchParams.get("page"), 10);
    // تحقق من صحة القيم الواردة في URL
    if (page && (page < 1 || page > totalPages)) {
      // إذا كان رقم الصفحة غير صالح، قم بتوجيه المستخدم إلى صفحة 404
      navigate("/404");
    }
  }, [location, navigate, totalPages]);

  return (
    // {/* <ErrorBoundary> */}
    <React.Fragment>
      {/* <NotFound /> */}
      <Navbar /> {/* Navigation bar */}
      <button
        className={`${classes["toggle-mode"]} ${
          isButtonVisible ? `${classes["visible"]}` : ""
        }`}
        onClick={toggleMode}
      >
        {darkMode ? "Light Mode" : "Dark Mode"}{" "}
        {/* Button label based on mode */}
      </button>
      <Routes>
        <Route path="/" element={<MoviesList />} />
        {/* <Route path="/movie/:id" element={<MovieDetails />} /> */}
        <Route path="/:type/details/:id" element={<MovieDetails />} />
        {/* <Route path="/movies/:category" element={<MoviesCategoryPage />} /> */}
        <Route
          path="/movies/:mediaCategory/:category"
          element={<MoviesCategoryPage />}
        />
        <Route path="/MovieShowcase/:id/:page" element={<MovieShowcase />} />
        <Route path="/search" element={<Search />} />
        <Route path="/person" element={<Person />} />
        <Route path="/favorites" element={<Favorites />} />
        <Route path="/about" element={<About />} />
        <Route path="/services/:title" element={<ServiceDetailsPage />} />;
        <Route
          path="/about/portfolio/details/:id"
          element={<PortfolioDetailsPage />}
        />
        <Route
          // path="/about/portfolio/work/static/media/:id"
          path="/about/portfolio/work/:id"
          element={<ProjectImageGallery />}
        />
        <Route path="/contact" element={<Contact />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/404" element={<NotFound />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
      {/* // </ErrorBoundary> */}
    </React.Fragment>
  );

  // return <Login />;
};

export default App;
