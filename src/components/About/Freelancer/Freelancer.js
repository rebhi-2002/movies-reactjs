import React, { useState, useEffect } from "react";
import { ProgressBar } from "react-bootstrap";
import { useInView } from "react-intersection-observer";
import classes from "../About.module.css";

import person from "../../../assets/person.jpeg";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLinkedinIn,
  faGithub,
  faCodepen,
  faUpwork,
  // faFreelancer,
  // faMostaqel,
  // faKhamsat,
} from "@fortawesome/free-brands-svg-icons";

const Freelancer = () => {
  const [progress, setProgress] = useState(0);
  useEffect(() => {
    setProgress(85);
  }, []);

  const { ref, inView } = useInView({
    threshold: 0.1,
    // threshold: 0.1, // نسبة الظهور المطلوبة لتفعيل الأنيميشن
    // triggerOnce: true, // لتفعيل الأنيميشن مرة واحدة فقط
  });

  return (
    <section className={`${classes["freelancer-section"]}`} ref={ref}>
      {/* Start Freelancer-section */}
      <div className={`${classes["sectionTitle"]} ${classes["section-title"]}`}>
        <h2 className={inView ? classes.fadeIn : ""}>
          My Freelancer Platforms
        </h2>
        <p>
          Explore my profiles on various freelancer platforms below to see my
          work, client feedback, and the services I offer. Joining these
          platforms allows you to connect with me for potential collaborations
          and projects.
        </p>
      </div>
      <div className={classes["cards-container"]}>
        {/* LinkedIn Card */}
        <div className={`card ${classes["linkedin-card"]}`}>
          <div className={classes["card-content"]}>
            <div className={classes["card-header"]}>
              <FontAwesomeIcon icon={faLinkedinIn} size="3x" />
              <img
                src={person}
                alt="Profile"
                className={classes["profile-image"]}
              />
            </div>
            {/*
                <div className="badge-base LI-profile-badge"
                  data-locale="ar_AE"
                  data-size="medium" // data-size="large"
                  data-theme="light" // data-theme="dark"
                  data-type="VERTICAL" // data-type="HORIZONTAL"
                  data-vanity="rebhe-ibrahim-451504244"
                  data-version="v1">
                    <a class="badge-base__link LI-simple-link" href="https://ps.linkedin.com/in/rebhe-ibrahim-451504244?trk=profile-badge">Rebhe Ibrahim</a>
                </div>
              */}
            {/*
                <iframe
                src="https://www.linkedin.com/in/rebhe-ibrahim-451504244"
                title="LinkedIn Profile"
                className={classes["iframe-preview"]}
                loading="lazy"></iframe>
              */}
            <h3>LinkedIn</h3>
            {/* معلومات إضافية */}
            <h4 className="mt-3">About Me:</h4>
            <p>
              I am a passionate developer specializing in full-stack
              development, always eager to learn and collaborate on innovative
              projects.
            </p>
            {/* المعلومات الشخصية */}
            <h4>Contact Information:</h4>
            <p className="mb-0">
              <strong>Email:</strong> rebheibrahim@gmail.com
            </p>
            <p className="mb-0">
              <strong>Location:</strong> Gaza, Palestine
            </p>
            <p className="mb-0">
              <strong>Languages:</strong> English, Arabic
            </p>
            {/* عرض الإنجازات */}
            <h4 className="mt-3">Key Skills:</h4>
            <ul className="list-unstyled">
              <li>JavaScript</li>
              <li>React</li>
              <li>Node.js</li>
              <li>Responsive Web Design</li>
            </ul>
            {/* الشهادات أو الإنجازات */}
            <h4 className="mt-3">Achievements:</h4>
            <ul className="list-unstyled">
              <li>Certified JavaScript Developer</li>
              <li>Completed React Advanced Course</li>
            </ul>
            <p>
              Connect with me on LinkedIn for professional updates and
              opportunities.
            </p>
            {/* زر زيارة البروفايل */}
            <div className="text-center mt-4">
              <a
                href="https://www.linkedin.com/in/rebhe-ibrahim-451504244"
                target="_blank"
                className="btn btn-outline-primary"
                rel="noopener noreferrer"
              >
                Visit Profile
              </a>
            </div>
          </div>
        </div>
        {/* Github Card */}
        <div className={`card ${classes["github-card"]}`}>
          <div className={classes["card-content"]}>
            <div className={classes["card-header"]}>
              <FontAwesomeIcon icon={faGithub} size="3x" />
              <img
                src={person}
                alt="Profile"
                className={classes["profile-image"]}
              />
            </div>
            {/*
                <iframe
                src="https://github.com/rebhi-2002?tab=repositories"
                title="Github Profile"
                className={classes["iframe-preview"]}
                loading="lazy"></iframe>
              */}
            <h3>Github</h3>
            {/* معلومات إضافية */}
            <h4 className="mt-3">About My Work:</h4>
            <p>
              I work on various open-source projects and collaborate with
              developers globally. Feel free to explore my repositories.
            </p>
            {/* قائمة المشاريع أو المستودعات */}
            <h4 className="mt-3">Featured Repositories:</h4>
            <ul className="list-unstyled">
              <li>
                <a
                  href="https://github.com/rebhi-2002/project-one"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={classes["project-link"]}
                >
                  Project One
                </a>
                <p className={classes["project-description"]}>
                  Description of Project One.
                </p>
              </li>
              <li>
                <a
                  href="https://github.com/rebhi-2002/project-two"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={classes["project-link"]}
                >
                  Project Two
                </a>
                <p className={classes["project-description"]}>
                  Description of Project Two.
                </p>
              </li>
              <li>
                <a
                  href="https://github.com/rebhi-2002/project-three"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={classes["project-link"]}
                >
                  Project Three
                </a>
                <p className={classes["project-description"]}>
                  Description of Project Three.
                </p>
              </li>
            </ul>
            <p>
              Check out my profile on Github and get in touch for your next
              project.
            </p>
            {/* زر زيارة البروفايل */}
            <div className="text-center mt-4">
              <a
                href="https://github.com/rebhi-2002"
                target="_blank"
                className="btn btn-outline-primary"
                rel="noopener noreferrer"
              >
                Visit Profile
              </a>
            </div>
          </div>
        </div>
        {/* CodePen Card */}
        <div className={`card ${classes["codepen-card"]}`}>
          <div className={classes["card-content"]}>
            <div className={classes["card-header"]}>
              <FontAwesomeIcon icon={faCodepen} size="3x" />
              <img
                src={person}
                alt="Profile"
                className={classes["profile-image"]}
              />
            </div>
            {/*
                <iframe
                src="https://codepen.io/rebhe-2002"
                title="Codepen Profile"
                className={classes["iframe-preview"]}
                loading="lazy"></iframe>
              */}
            <h3>CodePen</h3>
            {/* إضافة إحصائيات */}
            <p>Published Pens: 35 | Followers: 120</p>
            {/* إضافة قائمة المشاريع المميزة */}
            <h4>Featured Projects:</h4>
            <ul className="list-unstyled">
              <li>
                <a
                  href="https://codepen.io/pen1"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={classes["project-link"]}
                >
                  Responsive Landing Page
                </a>
              </li>
              <li>
                <a
                  href="https://codepen.io/pen2"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={classes["project-link"]}
                >
                  CSS Animation Showcase
                </a>
              </li>
            </ul>
            {/* إضافة قائمة المهارات */}
            <h4>Skills showcased:</h4>
            <p>HTML5, CSS3, JavaScript, React, Bootstrap</p>
            {/* إضافة شهادات أو مديح */}
            <blockquote className={classes["testimonial__codepen"]}>
              "Amazing work with clean and modern design!"
            </blockquote>
            <p>
              Check out my profile on Codepen and get in touch for your next
              project.
            </p>
            {/* إضافة زر التواصل */}
            <div className="text-center mt-4">
              <a
                href="mailto:rebheibrahim@gmail.com"
                className="btn btn-primary mx-2"
              >
                Contact Me
              </a>
              {/* إضافة زر زيارة البروفايل */}
              <a
                href="https://codepen.io/rebhe-2002"
                target="_blank"
                className="btn btn-outline-primary mx-2"
                rel="noopener noreferrer"
              >
                Visit Profile
              </a>
            </div>
          </div>
        </div>
        {/* Upwork Card */}
        <div className={`card ${classes["upwork-card"]}`}>
          <div className={classes["card-content"]}>
            <div className={classes["card-header"]}>
              <FontAwesomeIcon icon={faUpwork} size="3x" />
              <img
                src={person}
                alt="Profile"
                className={classes["profile-image"]}
              />
            </div>
            {/*
                <iframe
                src="https://www.upwork.com/freelancers/~01be8254101d97cbb1"
                title="Upwork Profile"
                className={classes["iframe-preview"]}
                loading="lazy"></iframe>
              */}
            <h3>Upwork</h3>
            {/* إحصائيات Upwork */}
            <p>Jobs Completed: 50 | Rating: 4.9 / 5</p>
            {/* عرض الشهادات أو التقييمات */}
            <h4>Client Testimonials:</h4>
            <blockquote>
              "Amazing work! Delivered on time and exceeded expectations." -
              Client A
            </blockquote>
            <blockquote>
              "Professional, communicative, and highly skilled. Will hire
              again!" - Client B
            </blockquote>
            {/* قائمة المهارات المقدمة */}
            <h4>Skills:</h4>
            <p>Web Development, React, Node.js, Firebase, UI / UX Design</p>
            {/* قائمة مشاريع ناجحة */}
            <h4>Featured Projects:</h4>
            <ul className="list-unstyled">
              <li>
                <a
                  href="https://www.upwork.com/project1"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  E - Commerce Website
                </a>
              </li>
              <li>
                <a
                  href="https://www.upwork.com/project2"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Custom Dashboard
                </a>
              </li>
            </ul>
            {/* إضافة معلومات الاتصال */}
            <h4>Contact Me:</h4>
            <p>
              If you're interested in working together, feel free to reach out!
            </p>
            <div className="text-center mt-4">
              <a
                href="mailto:rebheibrahim@gmail.com"
                className="btn btn-primary mx-2"
              >
                Contact Me
              </a>
              {/* زر زيارة البروفايل */}
              <a
                href="https://www.upwork.com/freelancers/~01be8254101d97cbb1?s=1110580755057594368"
                target="_blank"
                className="btn btn-outline-primary mx-2"
                rel="noopener noreferrer"
              >
                Visit Profile
              </a>
            </div>
          </div>
        </div>
        {/* Freelancer Card */}
        <div className={`card ${classes["freelancer-card"]}`}>
          <div className={classes["card-content"]}>
            <div className={classes["card-header"]}>
              {/*
                  <FontAwesomeIcon
                  icon={faFreelancer}
                  size="3x" />
                */}
              <svg
                version="1.1"
                id="Layer_1"
                xmlns="http://www.w3.org/2000/svg"
                xmlnsXlink="http://www.w3.org/1999/xlink"
                x="0px"
                y="0px"
                viewBox="0 0 2500 607"
                style={{
                  enableBackground: "new 0 0 2500 607",
                }}
                xmlSpace="preserve"
              >
                <style type="text/css">{`.st0{fill:#29B2FE;}`}</style>
                <path
                  className={`st0 ${classes["path__one"]}`}
                  d="M343.4,91.1L0,72l223.8,240L343.4,91.1z M171.6,65.5L330,76.8L133.7,0L171.6,65.5z M369.9,76.8L454.3,0l56.9,81.6L369.9,76.8z M360.4,92L236.1,321.5L349,445.7l127-118.5l35.1-227.6L360.4,92z M242.8,357.5L183,607l155.5-148L242.8,357.5z M472.3,3.8L533,81.6L814.7,3.8H472.3z"
                />
                <path
                  className={classes["path__two"]}
                  d="M736.2,145.1c0.1,19.3-1.1,38.5-3.6,57.6c-19.9,0.7-44.8-6.5-44.1,27.7c30.6-0.7,38.8,0,38.8,0s-1.4,60.5-47,58.2c-16.4,92.5-32,173.6-32,173.6h-73l39.8-258.7c0,0,9.2-52.6,56.9-58.2L736.2,145.1z M704.2,462.4l38.4-236.1h66.9l5.2,17.8c0,0,16.8-23.5,67.3-17.8c-12.1,57.6-14.2,66.2-14.2,66.2s-55.5-5.7-59.8,12.1c-4.3,17.8-26.3,157.9-26.3,157.9L704.2,462.4z M1296.7,268.9c-14.9-27-42-51.7-106-43.6c-64,8.1-109.9,71.1-106.7,156.6c6.5,71.1,57,83.7,74.7,86.1c120.2,14.2,121.7-48.4,122.4-71.9c-24.9,0-36.6,0.5-47,0.7c-3,9.8-51.7,5-51.7,5s-18.5-1.4-19.9-34.1h134.5C1296.9,367.7,1311.7,296,1296.7,268.9z M1227.7,326.5c-13.5,1.4-59,0-59,0C1186.5,256.1,1235.5,286.7,1227.7,326.5z M2241.3,268.9c-14.9-27-42-51.7-106-43.6s-109.9,71.1-106.7,156.6c6.5,71.1,57,83.7,74.7,86.1c120.2,14.2,121.7-48.4,122.4-71.9c-24.9,0-36.6,0.5-47,0.7c-3,9.8-51.7,5-51.7,5s-18.5-1.4-19.9-34.1h134.3C2241.3,367.7,2255.9,296,2241.3,268.9z M2172.3,326.5c-13.5,1.4-59,0-59,0c17.5-70.4,66.6-39.8,58.7,0H2172.3z"
                />
                <path
                  className={classes["path__three"]}
                  d="M1077.2,268.9c-14.9-27-42-51.7-106-43.6c-64,8.1-109.9,71.1-106.7,156.6c6.5,71.1,57,83.7,74.7,86.1c120.2,14.2,121.7-48.4,122.4-71.9c-24.9,0-36.6,0.5-47,0.7c-3,9.8-51.7,5-51.7,5s-18.5-1.4-19.9-34.1h134.3C1077.2,367.7,1092.2,296,1077.2,268.9L1077.2,268.9z M1008.1,326.5c-13.5,1.4-59,0-59,0C967.2,256.1,1016,286.7,1008.1,326.5L1008.1,326.5z M1347.2,150.8l-49.1,311.5h78.3l52.6-311.5L1347.2,150.8z M1609.7,462.4l39.8-237h69.7v18.1c0,0,24.2-26.3,88.2-18.1c64,8.1,32,121.8,32,121.8l-17.1,115.4h-76.8c0,0,17.8-116.4,21.3-147.3c-3.6-34.9-44.8-33.4-54.8-8.5c-5,30.6-27.7,155.8-27.7,155.8L1609.7,462.4z M1956.1,293.1h70.4l6.5-46.2c0,0,8.5-21.3-21.3-21.7s-74.7,0-74.7,0s-87.5,12.4-82.5,183.9c4.6,30.6,27.9,55.1,58.2,61.1c6.5,1.4,51.7,0,51.7,0s50.5-6.5,43.4-69.7c-52.6,1.4-74.7,3.6-77.6-11.4C1927.2,374.2,1936.2,298.8,1956.1,293.1L1956.1,293.1z M2259.1,304.4l92-79.3L2316,462.4h-77.7L2259.1,304.4z"
                />
                <path
                  className={`st0 ${classes["path__four"]}`}
                  d="M2370.1,225.1l-13.3,85l143.2-86.3L2370.1,225.1z"
                />
                <path
                  className={classes["path__five"]}
                  d="M1564.2,225.3c-59-0.5-72.6,0.5-94.6,0c-22.1-0.5-37,32.3-35.6,67.1h90.5c0,0,9.2-1.4,10,6.5c0.4,7.6,0.4,15.2,0,22.8h-65.6c0,0-92.5,8.5-63.3,120.2c5.7,17.1,34.1,29,49.8,28.4c15.7-0.6,54.8-14.9,61.2-20.6l0.7,13.5l69.7-0.7c0,0,23.5-145.8,26.3-157.9C1616.1,292.5,1621.1,245.8,1564.2,225.3L1564.2,225.3z M1503.2,410.7c-27.5,0-31.3-26.6-9.4-40.8c21.8-9.5,35.1-3.8,35.1-3.8S1529.9,411.7,1503.2,410.7L1503.2,410.7z"
                />
              </svg>
              <img
                src={person}
                alt="Rebhe Ibrahim"
                className={classes["profile-image"]}
              />
            </div>
            {/*
                <iframe
                src="https://www.freelancer.com/u/RebheIbrahim"
                title="Freelancer Profile"
                className={classes["iframe-preview"]}
                loading="lazy"></iframe>
              */}
            <h3>Freelancer</h3>
            <h2 className={classes["freelancer-name"]}>Rebhe Ibrahim</h2>
            <h4 className={classes["freelancer-title"]}>
              Full Stack JavaScript Developer | Designer
            </h4>
            <div className={`${classes["progress-bar"]} bg-transparent mt-4`}>
              <ProgressBar
                now={progress}
                label={`${progress}% Projects Completed`}
                className={`py-2 bg-dark d-flex align-items-center text-center ${classes["progress"]} ${classes.progressBar}`}
                style={{ width: "75%", margin: "8px auto" }}
              ></ProgressBar>
            </div>
            <div className={classes["card-content"]}>
              <p>
                I am a passionate developer with a keen eye for design.I
                specialize in building user - friendly websites and applications
                that stand out.
              </p>
              <div className={classes["card-skills"]}>
                <h4>Core Skills:</h4>
                <ul className="list-unstyled">
                  <li>JavaScript, React, Node.js</li>
                  <li>UI / UX Design, Figma, Adobe XD</li>
                  <li>Responsive Web Development</li>
                  <li>SEO Optimization</li>
                </ul>
              </div>
              <div className={classes["card-reviews"]}>
                <h4>Client Testimonials:</h4>
                <blockquote>
                  "Rebhe was excellent! Delivered the project ahead of schedule
                  with great quality. "<cite>-Client A</cite>
                </blockquote>
                <blockquote>
                  "Exceptional work ethic and communication skills. Highly
                  recommend!"
                  <cite>-Client B</cite>
                </blockquote>
              </div>
            </div>
            <div className={classes["card-footer"]}>
              <p>
                Check out my profile on Freelancer and get in touch for your
                next project.
              </p>
              <a
                href="https://www.freelancer.com/u/RebheIbrahim"
                target="_blank"
                className="btn btn-outline-primary"
                rel="noopener noreferrer"
              >
                Visit My Profile
              </a>
            </div>
          </div>
        </div>
        {/* Mostaql Card */}
        <div className={`card ${classes["mostaql-card"]}`}>
          <div className={classes["card-content"]}>
            <div className={classes["card-header"]}>
              {/* <FontAwesomeIcon icon={faMostaql} size="3x" /> */}
              <svg
                width="120px"
                height="60px"
                viewBox="0 0 414 122"
                version="1.1"
                xmlns="http://www.w3.org/2000/svg"
                xmlnsXlink="http://www.w3.org/1999/xlink"
              >
                <g
                  id="Page-1"
                  stroke="none"
                  strokeWidth="1"
                  fill="none"
                  fillRule="evenodd"
                >
                  <g
                    id="mostaql_1_"
                    transform="translate(0.059437, 0.195000)"
                    fill="#000"
                    fillRule="nonzero"
                  >
                    <g id="Ar" transform="translate(0.000000, 0.000000)">
                      <circle
                        id="Oval"
                        cx="123.491563"
                        cy="12.573"
                        r="12.573"
                      />
                      <circle
                        id="Oval"
                        cx="153.090563"
                        cy="12.573"
                        r="12.573"
                      />
                      <circle id="Oval" cx="196.606563" cy="37.67" r="12.573" />
                      <circle id="Oval" cx="226.205563" cy="37.67" r="12.573" />
                      <path
                        d="M374.709563,42.623 C353.083563,42.623 335.491563,60.215 335.491563,81.841 C335.491563,84.257 335.722563,86.618 336.142563,88.915 C330.741563,88.916 324.037563,88.916 316.490563,88.917 L321.137563,58.675 C321.982563,53.136 318.177563,47.96 312.638563,47.114 C307.110563,46.291 301.923563,50.074 301.077563,55.613 L295.960563,88.92 C293.044563,88.92 290.080563,88.921 287.077563,88.921 L291.057563,63.174 C291.902563,57.635 288.097563,52.459 282.558563,51.613 C277.026563,50.79 271.843563,54.573 270.997563,60.112 L266.543563,88.924 C263.622563,88.924 260.707563,88.925 257.809563,88.925 L260.602563,70.621 C261.447563,65.082 257.641563,59.906 252.103563,59.06 C246.571563,58.237 241.388563,62.02 240.542563,67.559 L237.281563,88.928 C230.973563,88.929 224.968563,88.93 219.444563,88.931 L222.238563,70.621 C223.083563,65.082 219.277563,59.906 213.739563,59.06 C208.207563,58.237 203.024563,62.02 202.178563,67.559 L198.919563,88.918 L169.379563,88.918 C172.732563,83.35 174.665563,76.835 174.665563,69.876 C174.665563,49.46 158.056563,32.851 137.640563,32.851 C117.224563,32.851 100.615563,49.46 100.615563,69.876 C100.615563,76.836 102.548563,83.351 105.901563,88.918 L79.4215629,88.918 C79.8435629,86.534 80.0655629,84.072 80.0675629,81.531 C80.0685629,79.278 80.0675629,77.026 80.0665629,74.773 C80.0665629,74.764 80.0675629,74.756 80.0675629,74.748 L80.2625629,10.031 C80.2625629,4.493 75.7725629,0.002 70.2335629,0.002 C64.6945629,0.002 60.2045629,4.493 60.2045629,10.031 L60.2065629,17.446 L60.2065629,17.446 C60.2065629,17.504 60.2065629,17.561 60.2065629,17.619 L60.2215629,74.997 C60.2155629,77.163 60.2085629,79.346 60.2005629,81.568 C60.1515629,94.82 46.2775629,104.007 33.7985629,100.477 C24.7625629,97.92 18.8175629,89.3 19.6565629,79.97 C20.5195629,70.376 28.0635629,63.175 38.0915629,62.374 C45.1465629,61.81 49.3255629,57.65 48.8835629,51.63 C48.4505629,45.736 43.5125629,42.107 36.5525629,42.568 C19.0615629,43.726 4.67256288,56.212 0.96456288,73.103 C-2.83943712,90.435 4.81256288,107.882 20.3085629,116.289 C35.6835629,124.63 56.3755629,121.846 68.6935629,109.424 L346.880563,109.424 C353.991563,116.598 363.833563,121.061 374.709563,121.061 C396.333563,121.061 413.925563,103.469 413.925563,81.843 C413.925563,60.217 396.333563,42.623 374.709563,42.623 Z M137.638563,52.005 C147.491563,52.005 155.507563,60.02 155.507563,69.874 C155.507563,79.728 147.491563,87.743 137.638563,87.743 C127.785563,87.743 119.769563,79.728 119.769563,69.874 C119.770563,60.02 127.786563,52.005 137.638563,52.005 Z M374.709563,100.768 C364.272563,100.768 355.782563,92.278 355.782563,81.841 C355.782563,71.404 364.272563,62.914 374.709563,62.914 C385.144563,62.914 393.634563,71.404 393.634563,81.841 C393.634563,92.278 385.144563,100.768 374.709563,100.768 Z"
                        id="Shape"
                      />
                      <text
                        x="36%"
                        y="125%"
                        fontFamily="Arial"
                        fontSize="40"
                        fill="black"
                      >
                        Mostaql
                      </text>
                    </g>
                  </g>
                </g>
              </svg>
              <img
                src={person}
                alt="Rebhe Ibrahim"
                className={classes["profile-image"]}
              />
            </div>
            {/*
                <iframe
                src="https://mostaql.com/u/RebheIbrahim"
                title="Mostaql Profile"
                className={classes["iframe-preview"]}
                loading="lazy"></iframe>
              */}
            <h3>Mostaql</h3>
            <div className={classes["card-details"]}>
              <p>
                <strong>Specialties: </strong>
                Web Development, Graphic Design, Content Writing
              </p>
              <p>
                <strong>Skills: </strong>React.js, Node.js, JavaScript, HTML5,
                CSS3, UI/UX Design
              </p>
              <div className={`${classes.paragraph} my-3`}>
                <strong>Top Projects:</strong>
                <ul className="list-unstyled">
                  <li>Website Development for XYZ Tech</li>
                  <li>Custom E-Commerce Platform for ABC Store</li>
                  <li>Portfolio Design for John Doe</li>
                </ul>
              </div>
              <p className="mb-0">
                <strong>Projects Completed:</strong> 50+
              </p>
              <p className="mb-0">
                <strong>Happy Clients:</strong> 35+
              </p>
              <div className={classes["testimonials__mostaql"]}>
                <p>
                  "Great work and fast delivery, I will work with him again!" -
                  Happy Client
                </p>
              </div>
              <div
                className={`d-flex justify-content-center align-items-center ${classes["social-links"]}`}
              >
                <a
                  href="https://x.com/rebhe_1643"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="fab fa-twitter"></i> Twitter
                </a>
                <a
                  href="https://www.linkedin.com/in/rebhe-ibrahim-451504244/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="fab fa-linkedin"></i> LinkedIn
                </a>
              </div>
              {/* <p>
                  <strong>Rating:</strong>
                  ⭐⭐⭐⭐☆ (4.5/ 5)
                </p> */}
              <div className={classes["rating-chart"]}>
                <p>⭐⭐⭐⭐⭐ (80%)</p>
                <p>⭐⭐⭐⭐ (15%)</p>
                <p>⭐⭐⭐ (5%)</p>
              </div>
              <iframe
                src="https://www.youtube.com/embed/8PYe3g61yV4/"
                title="Introduction Video"
                className={classes["video-preview"]}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                frameBorder="0"
              ></iframe>
              <div className="my-2">
                <a
                  href="mailto:rebheibrahim@gmail.com"
                  className="btn btn-success mx-1"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Contact Now
                </a>
                <a
                  href="https://mostaql.com/u/RebheIbrahim/portfolio"
                  className="btn btn-outline-info mx-1"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  View Portfolio
                </a>
              </div>
              <p>
                <strong>Special Offer for First-time Clients:</strong> Get 15%
                off your first project!
              </p>
              <p>
                <strong>Offers:</strong>
                10% off on first project
              </p>
            </div>
            <p>
              Check out my profile on Mostaql and get in touch for your next
              project.
            </p>
            <a
              href="https://mostaql.com/u/RebheIbrahim"
              target="_blank"
              className="btn btn-outline-primary"
              rel="noopener noreferrer"
            >
              Visit Profile
            </a>
            <p className="my-2">
              <strong>Contact: </strong>rebheibrahim@gmail.com
            </p>
          </div>
        </div>
        {/* Khamsat Card */}
        <div className={`card ${classes["khamsat-card"]}`}>
          <div className={classes["card-content"]}>
            <div className={classes["card-header"]}>
              {/* Khamsat Logo */}
              {/* <FontAwesomeIcon icon={faKhamsat} size="3x" />
               */}
              <div
                className="d-flex flex-column justify-content-center align-items-center mx-auto"
                style={{ marginTop: "-16px" }}
              >
                <svg
                  viewBox="0 0 1080 1080"
                  xmlns="http://www.w3.org/2000/svg"
                  width="100"
                  height="100"
                >
                  <path d="M0 0h1080v1080H0z" fill="transparent" />
                  {/* fill="#fcb61a" */}
                  <g fill="#424242">
                    <path d="M363.36 520.38c8.82-15.12 19.56-29.04 32.09-41.57 15.17-15.17 32.36-27.71 51.27-37.4v-78.05h60.53V280H363.36zM446.72 473.32c-49 30.54-81.95 84.4-83.31 146.07-.02.66-.03 1.32-.04 1.98s-.01 1.32-.01 1.98h83.36c0-39.91 25.21-74.06 60.53-87.35v-86.24c-21.85 4.11-42.3 12.27-60.53 23.65zM363.57 716.64h143.68V800H363.57zM540 446.72c-1.66 0-3.31.02-4.96.08v83.41c1.64-.09 3.29-.13 4.96-.13 51.43 0 93.28 41.85 93.28 93.28s-41.85 93.28-93.28 93.28h-4.96V800H540c97.4 0 176.64-79.24 176.64-176.64S637.4 446.72 540 446.72zM535.04 280h156.79v83.36H535.04z" />
                  </g>
                </svg>
                <span style={{ marginTop: "-25px" }}>خمسات</span>
              </div>
              <img
                src={person}
                alt="Rebhe Ibrahim"
                className={classes["profile-image"]}
              />{" "}
            </div>
            {/*
                <iframe
                src="https://khamsat.com/user/rebheibrahim"
                title="Khamsat Profile"
                className={classes["iframe-preview"]}
                loading="lazy"></iframe>
              */}
            <h3 className="mt-2">Khamsat</h3>
            <div className={classes["card-details"]}>
              <p className="my-3">
                <strong>Specialties: </strong>Web Development, SEO, Content
                Creation
              </p>
              <p className="my-3">
                <strong>Skills: </strong>HTML5, CSS3, JavaScript, React.js, SEO
                Optimization
              </p>
              <div className={`${classes.paragraph} my-3`}>
                <strong>Top Projects:</strong>
                <ul>
                  <li>E-commerce Website for ABC Store</li>
                  <li>SEO Optimization for XYZ Company</li>
                  <li>Content Writing for Tech Blog</li>
                </ul>
              </div>
              <p className="my-3">
                <strong>Certifications: </strong>Google SEO Certification
              </p>
              <p className="my-3">
                <strong>Rating: </strong>⭐⭐⭐⭐☆ (4.7/ 5)
                {/* <p>
  <strong>Rating:</strong>
  <svg width="100" height="20" viewBox="0 0 24 24">
    <g fill="none" stroke="gold" strokeWidth="2">
      <path d="M12 .587l3.668 7.568 8.332 1.197-6 5.848 1.416 8.234L12 18.897l-7.416 3.898L5.334 15.2l-6-5.848 8.332-1.197z" />
      <path d="M12 .587l3.668 7.568 8.332 1.197-6 5.848 1.416 8.234L12 18.897l-7.416 3.898L5.334 15.2l-6-5.848 8.332-1.197z" />
      <path d="M12 .587l3.668 7.568 8.332 1.197-6 5.848 1.416 8.234L12 18.897l-7.416 3.898L5.334 15.2l-6-5.848 8.332-1.197z" />
      <path d="M12 .587l3.668 7.568 8.332 1.197-6 5.848 1.416 8.234L12 18.897l-7.416 3.898L5.334 15.2l-6-5.848 8.332-1.197z" />
      <path d="M12 .587l3.668 7.568 8.332 1.197-6 5.848 1.416 8.234L12 18.897l-7.416 3.898L5.334 15.2l-6-5.848 8.332-1.197z" />
    </g>
  </svg>
</p> */}
              </p>
              <p className="my-3">
                <strong>Offers: </strong>Exclusive discount for new clients
              </p>
              <p className="my-3">
                <strong>Experience: </strong>4+ years in web development and SEO
              </p>
              <p className="my-3">
                <strong>Delivery Time: </strong>3-5 days depending on project
                size
              </p>
              <p className="my-3">
                <strong>Pricing: </strong>Starting at $50 per project, depending
                on scope
              </p>
            </div>
            <p className="mt-5">
              Check out my profile on Khamsat and get in touch for your next
              project.
            </p>
            <a
              href="https://khamsat.com/user/rebheibrahim"
              target="_blank"
              className="btn btn-outline-primary"
              rel="noopener noreferrer"
            >
              Visit Profile
            </a>
            <p className="my-2">
              <strong>Contact: </strong>rebheibrahim@gmail.com
            </p>
          </div>
        </div>
      </div>
      {/* End Freelancer-section */}
    </section>
  );
};
export default Freelancer;
