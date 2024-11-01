import React from "react";
import { Link } from "react-router-dom";
import { Navbar, Nav, Container } from "react-bootstrap"; // Importing Bootstrap components
import { FaHome, FaSearch, FaHeart, FaFolderOpen } from "react-icons/fa"; // Importing icons
import { FaPerson } from "react-icons/fa6";
import { MdMovieFilter } from "react-icons/md";
import { SiThemoviedatabase } from "react-icons/si";
import logo from "../../assets/logo.png";
import classes from "./Navbar.module.css";

const CustomNavbar = () => {
  console.log("Navbar.JS RUNNING");

  return (
    // {/* Sticky navbar, Navbar with Bootstrap dark theme */}
    <Navbar bg="dark" variant="dark" expand="lg" /*sticky="top"*/>
      <Container fluid style={{ padding: "0 20px" }}>
        {/* Brand with link to home */}
        <a style={{ marginRight: "8px" }} href="/">
          {/* <SiThemoviedatabase size={40} color="01d277" /> */}
          <img
            src={logo}
            alt="Movie_Logo"
            width="35"
            style={{ objectFit: "cover", height: "auto" }}
          />
        </a>
        <Navbar.Brand
          as={Link}
          to="/"
          className={` ${classes["navbar-brand"]} text-decoration-none`}
        >
          MoviesApp
        </Navbar.Brand>
        {/* Toggle button for mobile view */}
        <Navbar.Toggle aria-controls="navbar-nav" />
        {/* Collapsible content */}
        <Navbar.Collapse id="navbar-nav">
          <Nav className="ms-auto justify-content-end">
            {/* Home icon | Navigation links */}
            <Nav.Link
              as={Link}
              to="/"
              className={`${classes["nav-link"]} text-white text-decoration-none`}
            >
              <FaHome /> Home
            </Nav.Link>
            <Nav.Link
              as={Link}
              // to="/MovieShowcase/:id/:page"
              to="/MovieShowcase/1/:page"
              className={`${classes["nav-link"]} text-white text-decoration-none`}
            >
              <MdMovieFilter size={18} className="me2" />
              <span className="text-capitalize"> DiscoverList</span>
            </Nav.Link>
            <Nav.Link
              as={Link}
              to="/search"
              className={`${classes["nav-link"]} text-white text-decoration-none`}
            >
              <FaSearch /> Search
            </Nav.Link>
            <Nav.Link
              as={Link}
              to="/person"
              className={`${classes["nav-link"]} text-white text-decoration-none`}
            >
              <FaPerson /> Person
            </Nav.Link>
            <Nav.Link
              as={Link}
              to="/favorites"
              className={`${classes["nav-link"]} text-white text-decoration-none`}
            >
              <FaHeart /> Favorites
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default CustomNavbar;
