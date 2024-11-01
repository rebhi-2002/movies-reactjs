import React from "react";
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";
import classes from "./Footer.module.css";

const Footer = () => {
  return (
    <footer
      className={`${classes.footer} d-flex justify-content-center align-items-center text-center bg-dark text-white text-center`}
    >
      <div
        className={`${classes.container} w-100 d-flex flex-wrap justify-content-around align-items-center p-0 m-auto`}
      >
        <div
          className={`${classes["footer-links"]} d-flex flex-column`}
        >
          <a className="text-white text-decoration-none" href="/">
            Home
          </a>
          <a className="text-white text-decoration-none" href="/about">
            About
          </a>
          <a className="text-white text-decoration-none" href="/contact">
            Contact
          </a>
          <a className="text-white text-decoration-none" href="/privacy-policy">
            Privacy Policy
          </a>
        </div>
        <div
          className={`${classes["footer-contact"]} d-flex flex-column align-items-center`}
        >
          <p>Email: contact@example.com</p>
          <p>Phone: +1-234-567-890</p>
        </div>
        <div
          className={`${classes["footer-social"]} d-flex justify-content-center`}
        >
          <a
            className="text-white text-decoration-none"
            href="https://facebook.com/yourpage"
            aria-label="Facebook"
          >
            <FaFacebook />
          </a>
          <a
            className="text-white text-decoration-none"
            href="https://twitter.com/yourpage"
            aria-label="Twitter"
          >
            <FaTwitter />
          </a>
          <a
            className="text-white text-decoration-none"
            href="https://instagram.com/yourpage"
            aria-label="Instagram"
          >
            <FaInstagram />
          </a>
          <a
            className="text-white text-decoration-none"
            href="https://linkedin.com/company/yourpage"
            aria-label="LinkedIn"
          >
            <FaLinkedin />
          </a>
        </div>
        <div className={`${classes["footer-newsletter"]} text-start`}>
          <p>Subscribe to our newsletter:</p>
          <form action="#" method="post">
            <input
              className="w-100 border-0"
              type="email"
              placeholder="Your email address"
              required
            />
            <button
              className="d-inline-block text-white border-0"
              type="submit"
            >
              Subscribe
            </button>
          </form>
        </div>
        <div
          className={`${classes["footer-custom"]} w-100 text-center d-flex flex-column justify-content-center align-items-center`}
        >
          <p>Powered by Rebhe Ibrahim</p>
          <p>
            MoviesApp &copy; {new Date().getFullYear()}. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
