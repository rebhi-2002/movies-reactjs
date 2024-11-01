import React, { useEffect, useRef } from "react";
import { Container, Row, Col } from "react-bootstrap";
import Typed from "typed.js";
import classes from "../About.module.css";

// import me from "../../../assets/bg-1.jpeg";
import me from "../../../assets/bg-2.png";

const AboutMe = () => {
  const typedRef = useRef(null);

  useEffect(() => {
    // إعداد النصوص التي تريد عرضها بشكل متتابع
    const options = {
      strings: [
        "JavaScript Developer",
        "React & UI/UX Specialist",
        "Creative Front-End Innovator",
        "Freelance Solution Architect",
        "Dedicated to Clean Code & Design",
        "React Enthusiast & Tech Explorer",
        "Building Seamless User Experiences",
        "Turning Ideas into Reality",
      ],
      loop: true,
      typeSpeed: 100,
      backSpeed: 50,
      backDelay: 2000,
    };
    // إنشاء كائن Typed
    const typed = new Typed(typedRef.current, options);
    // تنظيف التفاعل عند إنهاء المكون
    return () => {
      typed.destroy();
    };
  }, []);

  // typed_strings = typed_strings.split(",");

  return (
    <Container fluid className={classes.aboutMeSection}>
      {/* Start About Me */}
      <section className={`${classes.sectionTitle}`}>
        <h2>About Me - Full Stack JavaScript Developer</h2>
        <p>
          Discover more about my journey as a Full Stack JavaScript Developer.
          Learn about my experience, projects, and the technologies I use like
          React, Node.js, and MongoDB.
        </p>
        <p className={`fs-4 ${classes["text-animated-container"]}`}>
          <span ref={typedRef} />
        </p>
      </section>
      <Row>
        <Col lg={4} data-aos="fade-right">
          <img
            src={me}
            alt="MyPicture"
            className={`img-fluid w-100 h-100 ${classes.imgFluid}`}
            style={
              {
                //aspectRatio: "1 / 1" ,
              }
            }
          />
        </Col>
        <Col
          lg={8}
          className={`pt-4 pt-lg-0 ${classes.content}`}
          data-aos="fade-left"
        >
          <h1>Rebhe Ibrahim</h1>
          <h3>I'm a professional Front-End Web Developer from Palestine</h3>
          <p className="fst-italic">
            Passionate about crafting responsive and visually appealing websites
            with modern technologies.
          </p>
          <Row>
            <Col lg={6}>
              <ul className={`list-unstyled ${classes.info}`}>
                <li>
                  <i className="bi bi-chevron-right" />
                  <strong>Name: </strong>
                  <span>Rebhe A.Ibrahim</span>
                </li>
                <li>
                  <i className="bi bi-chevron-right" />
                  <strong>Birthday: </strong>
                  <span>20 Dec 2002</span>
                </li>
                <li>
                  <i className="bi bi-chevron-right" />
                  <strong>Website: </strong>
                  <span>www.example.com</span>
                </li>
                <li>
                  <i className="bi bi-chevron-right" />
                  <strong>Phone: </strong>
                  <span>
                    <a href="tel:+972597523575">+972 59-752-3575</a>
                  </span>
                </li>
                <li>
                  <i className="bi bi-chevron-right" />
                  <strong>City: </strong>
                  <span>Gaza, Palestine</span>
                </li>
                <li>
                  <i className="bi bi-chevron-right" />
                  <strong>LinkedIn: </strong>
                  <span>
                    <a
                      href=" https://www.linkedin.com/in/rebhe-ibrahim-451504244/?original_referer"
                      target="_blank"
                    >
                      Hire Me
                    </a>
                  </span>
                </li>
                <li>
                  <i className="bi bi-chevron-right" />
                  <strong>Codepen: </strong>
                  <span>
                    <a
                      href="https://codepen.io/rebhe-2002"
                      target="_blank"
                      rel="noreferrer"
                    >
                      Show
                    </a>
                  </span>
                </li>
                <li>
                  <i className="bi bi-chevron-right" />
                  <strong>Freelancer: </strong>
                  <span>
                    <a
                      href="https://www.freelancer.com/u/RebheIbrahim"
                      target="_blank"
                      rel="noreferrer"
                    >
                      Hire Me
                    </a>
                  </span>
                </li>
              </ul>
            </Col>
            <Col lg={6}>
              <ul className={`list-unstyled ${classes.info}`}>
                <li>
                  <i className="bi bi-chevron-right" />
                  <strong>Age: </strong>
                  <span>21</span>
                </li>
                <li>
                  <i className="bi bi-chevron-right" />
                  <strong>Degree: </strong>
                  <span>Bachelor</span>
                </li>
                <li>
                  <i className="bi bi-chevron-right" />
                  <strong>PhEmailone: </strong>
                  <span>
                    <a href="mailto:rebheibrahim@gmail.com">
                      rebheibrahim@gmail.com
                    </a>
                  </span>
                </li>
                <li>
                  <i className="bi bi-chevron-right" />
                  <strong>Freelance: </strong>
                  <span>Available</span>
                </li>
                <li>
                  <i className="bi bi-chevron-right" />
                  <strong>Github: </strong>
                  <span>
                    <a
                      href="https://github.com/rebhi-2002"
                      target="_blank"
                      rel="noreferrer"
                    >
                      Show
                    </a>
                  </span>
                </li>
                <li>
                  <i className="bi bi-chevron-right" />
                  <strong>Upwork: </strong>
                  <span>
                    <a
                      href="https://www.upwork.com/freelancers/~01be8254101d97cbb1?s=1110580755057594368"
                      target="_blank"
                      rel="noreferrer"
                    >
                      Hire Me
                    </a>
                  </span>
                </li>
                <li>
                  <i className="bi bi-chevron-right" />
                  <strong>Mostaqel: </strong>
                  <span>
                    <a
                      href="https://mostaql.com/u/RebheIbrahim"
                      target="_blank"
                      rel="noreferrer"
                    >
                      Hire Me
                    </a>
                  </span>
                </li>
                <li>
                  <i className="bi bi-chevron-right" />
                  <strong>Khamsat: </strong>
                  <span>
                    <a
                      href="https://khamsat.com/user/rebheibrahim"
                      target="_blank"
                      rel="noreferrer"
                    >
                      Hire Me
                    </a>
                  </span>
                </li>
              </ul>
            </Col>
          </Row>
          <p>
            With a solid foundation in front - end technologies, I bring ideas
            to life through clean and efficient code, while always keeping the
            user experience at the forefront.
          </p>
        </Col>
      </Row>
      {/* End About Me */}
    </Container>
  );
};

export default AboutMe;
