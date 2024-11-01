import React, { useState, useEffect } from "react";
import { Container, Row, Col, ProgressBar } from "react-bootstrap";
import { useInView } from "react-intersection-observer";
import classes from "../About.module.css";

const Skills = () => {
  //* [Start Skills]:
  // State for progress bar values
  const [htmlCssProgress, setHtmlCssProgress] = useState(0);
  const [scssProgress, setScssProgress] = useState(0);
  const [jsProgress, setJsProgress] = useState(0);
  const [bootstrapProgress, setBootstrapProgress] = useState(0);
  const [xdProgress, setXdProgress] = useState(0);
  const [photoshopProgress, setPhotoshopProgress] = useState(0);
  const [reactProgress, setReactProgress] = useState(0);

  // InView for the skills section
  const { ref: skillsRef, inView: skillsInView } = useInView({
    triggerOnce: true, // To trigger only once when in view
    threshold: 0.2, // Trigger when 20% of the section is visible
  });

  // Update progress when the section is in view
  useEffect(() => {
    if (skillsInView) {
      // Simulate gradual progress increment
      setTimeout(() => setHtmlCssProgress(90), 200);
      setTimeout(() => setScssProgress(80), 400);
      setTimeout(() => setJsProgress(70), 600);
      setTimeout(() => setBootstrapProgress(95), 800);
      setTimeout(() => setXdProgress(90), 1000);
      setTimeout(() => setPhotoshopProgress(55), 1200);
      setTimeout(() => setReactProgress(80), 1400);
    }
  }, [skillsInView]);

  return (
    <Container fluid className={classes.skillsSection} ref={skillsRef}>
      {/* Start Skills */}
      {/* Section Title */}
      <div className={classes.sectionTitle}>
        <h2>My Professional Skills</h2>
        <p>
          Explore the range of skills I have acquired through years of
          experience in web development and full-stack programming. From
          mastering JavaScript frameworks like React and Node.js to working with
          backend technologies and databases, I bring a full set of skills to
          deliver top-notch web applications.
        </p>
      </div>
      {/* Skills Content */}
      <Row className={classes.skillsContent}>
        <Col lg={6} className={classes.skillColumn}>
          <div className={classes.skill}>
            <label>
              <i className="me-1 bi bi-code-slash" /> HTML / CSS{" "}
              <small className="text-muted mx-1"> (4 years experience)</small>
            </label>
            <ProgressBar
              // now={90}
              // label="HTML/CSS 90%"
              now={htmlCssProgress}
              label={`HTML/CSS ${htmlCssProgress}%`}
              className={classes.progressBar}
            />
          </div>
          <div className={classes.skill}>
            <label>
              {" "}
              {/* <i className="bi bi-bootstrap" /> */}
              {/* <i className="me-1 fab fa-bootstrap" /> */}
              <i className="me-1 iconify" data-icon="logos:bootstrap" />
              Bootstrap{" "}
              <small className="text-muted mx-1">(3 years experience)</small>
            </label>
            <ProgressBar
              // now={95}
              // label="Bootstrap 95%"
              now={bootstrapProgress}
              label={`Bootstrap ${bootstrapProgress}%`}
              className={classes.progressBar}
            />
          </div>
          <div className={classes.skill}>
            <label>
              {" "}
              <i className="me-1 bi bi-file-earmark-image" /> Photoshop{" "}
              <small className="text-muted mx-1">(1 years experience)</small>
            </label>
            <ProgressBar
              //now={55}
              // label="Photoshop 55%"
              now={photoshopProgress}
              label={`Photoshop ${photoshopProgress}%`}
              className={classes.progressBar}
            />
          </div>
          <div className={classes.skill}>
            <label>
              {" "}
              {/* <i className="me-1 fab fa-react" /> */}
              <i className="me-1 iconify" data-icon="logos:react" /> React{" "}
              <small className="text-muted mx-1">(2 years experience)</small>
            </label>
            <ProgressBar
              // now={80}
              // label="React 80%"
              now={reactProgress}
              label={`React ${reactProgress}%`}
              className={classes.progressBar}
            />
          </div>
        </Col>
        <Col lg={6} className={classes.skillColumn}>
          <div className={classes.skill}>
            <label>
              {" "}
              {/* <i className="me-1 fab fa-js" /> */}
              <i className="me-1 iconify" data-icon="logos:javascript" />{" "}
              JavaScript{" "}
              <small className="text-muted mx-1">(3 years experience)</small>
            </label>
            <ProgressBar
              // now={70}
              // label="JavaScript 70%"
              now={jsProgress}
              label={`JavaScript ${jsProgress}%`}
              className={classes.progressBar}
            />
          </div>
          <div className={classes.skill}>
            <label>
              {" "}
              {/* <i className="bi bi-file-earmark-code" /> */}
              {/* <i className="me-1 fab fa-sass" /> */}
              <i className="me-1 iconify" data-icon="logos:sass" /> SCSS{" "}
              <small className="text-muted mx-1">(3 years experience)</small>
            </label>
            <ProgressBar
              // now={80}
              // label="SCSS 80%"
              now={scssProgress}
              label={`SCSS ${scssProgress}%`}
              className={classes.progressBar}
            />
          </div>
          <div className={classes.skill}>
            <label>
              <i className="me-1 iconify" data-icon="logos:adobe-xd" /> Adobe XD
              <small className="text-muted mx-1">(2 years experience)</small>
            </label>
            <ProgressBar
              // now={90}
              // label="Adobe XD 90%"
              now={xdProgress}
              label={`Adobe XD ${xdProgress}%`}
              className={classes.progressBar}
            />
          </div>
        </Col>
      </Row>
      {/* End Skills */}
    </Container>
  );
};
export default Skills;
