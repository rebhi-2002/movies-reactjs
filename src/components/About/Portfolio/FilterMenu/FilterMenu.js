import React, { Fragment, useCallback } from "react";
import styles from "./FilterMenu.module.css";

import { toast } from "react-toastify";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import {
  FaReact,
  FaHtml5,
  FaCss3Alt,
  FaSass,
  FaBootstrap,
} from "react-icons/fa";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSquareJs,
  faBootstrap,
  faSass,
  faSketch,
  // faReact,
} from "@fortawesome/free-brands-svg-icons";
// import { faFileCode } from "@fortawesome/free-regular-svg-icons";
import {
  // faTag,
  faFilter,
  faDesktop,
  faFileCode,
  faPalette,
  faMobileAlt,
  faUniversity,
} from "@fortawesome/free-solid-svg-icons"; // مثال على أيقونات

import HtmlIcon from "@mui/icons-material/Html";
import { TbBrandJavascript, TbBrandReactNative } from "react-icons/tb";
import { SiAdobexd, SiReactbootstrap } from "react-icons/si";

/* https://github.com/react-icons/react-icons
   Key	     |  Default  |  Notes
   ==========================================================
   color	   | undefined | (inherit)	
   size	     | 1em	     |
   className | undefined |
   style   	 | undefined | Can overwrite size and color
   attr    	 | undefined | Overwritten by other attributes
   title	   | undefined | Icon description for accessibility
   ==========================================================
*/

const FilterMenu = ({ categories, onFilterSelect, activeCategory }) => {
  const handleFilterSelect = useCallback(
    (category) => {
      onFilterSelect(category); // toast.success(`تم اختيار ${category}`);
      toast.info(
        `✨ "${category}" selected! Discover your customized items. Happy browsing!`,
        {
          position: "top-center",
          autoClose: 2500,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          icon: "🔍",
          style: {
            backgroundColor: "#1a1a1d",
            color: "#f0f0f0",
            fontWeight: "bold",
            borderRadius: "8px",
          },
        }
      );
    },

    [onFilterSelect]
  );

  // const iconMap = {
  //   All: faFilter,
  //   "landing-page": faDesktop,
  //   "html-css": faFileCode,
  //   js: faCode,
  //   bootstrap: faPalette,
  //   scss: faPalette,
  //   xd: faPalette,
  //   react: faReact,
  //   univ: faUniversity,
  // };

  const iconMap = {
    All: <FontAwesomeIcon icon={faFilter} />,
    "landing-page": <FontAwesomeIcon icon={faDesktop} />,
    // "html-css": <FontAwesomeIcon icon={faFileCode} />, // "html-css": <HtmlIcon style={{ fontSize: 50, color: "#E44D26" }} />,
    "html-css": (
      <React.Fragment>
        <FaHtml5 size={25} color="#E44D26" />
        <FaCss3Alt size={25} color="#1572B6" />
      </React.Fragment>
    ),
    js: <TbBrandJavascript size={25} color="#F7DF1E" />, // js: <FontAwesomeIcon icon={faSquareJs} />,
    bootstrap: <FaBootstrap size={25} color="#563d7c" />, // bootstrap: <FontAwesomeIcon icon={faBootstrap} />,
    scss: <FaSass size={25} color="#C76395" />, // scss: <FontAwesomeIcon icon={faSass} />,
    xd: <SiAdobexd size={22} color="#FF61F6" />, // xd: <FontAwesomeIcon icon={faPalette} />, // xd: <FontAwesomeIcon icon={faSketch} />,
    // react: <FaReact size={25} color="#61DBFB" />, // react: <FontAwesomeIcon icon={faReact} />,
    react: (
      <React.Fragment>
        <FaReact size={25} color="#61DBFB" />
        <SiReactbootstrap size={22} color="#0d6efd" />
      </React.Fragment>
    ),
    "react-native": <TbBrandReactNative size={25} color="#00BFFF" />, // "react-native": <FontAwesomeIcon icon={faMobileAlt} />,
    univ: <FontAwesomeIcon icon={faUniversity} />,
  };

  const category__badge = {
    All: 38,
    "landing-page": 5,
    "html-css": 8,
    js: 6,
    bootstrap: 4,
    scss: 1,
    xd: 1,
    react: 9,
    "react-native": 0,
    univ: 4,
  };

  return (
    <Fragment>
      <ToastContainer />
      <ul
        className={`${styles["filter-menu"]} flex-wrap list-group list-group-horizontal justify-content-center`}
      >
        {categories.map((category) => (
          <li
            key={category}
            className={`${
              styles["item-menu"]
            } flex-wrap my-2 mx-2 list-group-item ${
              category === activeCategory ? styles.active : ""
            }`}
            onClick={() => handleFilterSelect(category)}
            // onClick={() => onFilterSelect(category)}
            style={{
              cursor: "pointer",
              transition: "all 0.3s ease",
              // borderRadius: "8px",
              padding: "10px 15px",
              boxShadow:
                category === activeCategory
                  ? "0 4px 10px rgba(0,0,0,0.2)"
                  : "none",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = "scale(1.1)"; // تأثير تكبير أقوى
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = "scale(1)"; // إعادة الحجم الأصلي عند الخروج
            }}
            onMouseDown={(e) => {
              e.currentTarget.style.transform = "scale(0.95)";
            }}
            onMouseUp={(e) => {
              e.currentTarget.style.transform = "scale(1)";
            }}
          >
            {/* <FontAwesomeIcon icon={faTag} className="me-2" /> */}
            {/* <FontAwesomeIcon icon={iconMap[category]} className="me-2" /> */}
            {iconMap[category]} {/* تظهر الأيقونة هنا */}
            {category}
            <div
              className="d-flex align-items-center justify-content-center m-auto text-center"
              style={{
                position: "relative",
                display: "inline-flex",
                gap: "8px",
              }}
            >
              <span className={`${styles.badge} badge`}>
                {category__badge[category]}
              </span>
            </div>
          </li>
        ))}
      </ul>
    </Fragment>
  );
};

export default FilterMenu;
