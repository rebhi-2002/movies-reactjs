import React from "react";
import classes from "../About.module.css";

const Resume = () => {
  return (
    <section id="resume" className={`${classes.resume} resume`}>
      {/* Start Resume Section */}
      <div className="container">
        {/* Section Title */}
        <div className={`${classes.sectionTitle}`}>
          <h2>My Resume</h2>
          {/* <p>Check My Resume</p> */}
          <p>
            Explore my professional experience, skills, and achievements.
            Discover how my background can add value to your projects and goals.
          </p>
          <a href="/resume.pdf" target="_blank" rel="noopener noreferrer" className={`btn btn-primary btn-lg ${classes.resumeButton}`}>Download My Resume</a>
        </div>
        {/* Personal Summary */}
        <div className="row">
          <div className="col-lg-6">
            <h3 className={`${classes.resumeTitle} resume-title`}>Summary</h3>
            <div className={`${classes.resumeItem} resume-item`}>
              <div className={classes.timeline}>
                <h4>Rebhe Ibrahim</h4>
                <p>
                  {/* <em>
											Innovative and deadline - driven Front - End Web Developer with 2 + years of
											experience in developing front end project and designing, passionate about
											responsive website design using HTML, CSS, JS and Bootstrap to build all
											aspects of the user experience and user interface for client - facing
											landing pages and implement new responsive website approach with increased
											mobile traffic by 75 % .
										</em> */}
                  <em>
                    Skilled Front-End Developer with over 3 years of hands-on
                    experience in designing and developing responsive websites
                    and interactive applications. Proficient in HTML, CSS,
                    JavaScript, and React with a focus on delivering
                    user-centered designs that boost engagement and drive
                    growth.
                  </em>
                </p>
                <ul>
                  <li>Location: Palestine, Gaza, Nuseirat</li>
                  <li>Contact: +972 59-752-3575</li>
                  <li>Email: rebheibrahim@gmail.com</li>
                </ul>
              </div>
            </div>
            {/* Education */}
            <h3 className={`${classes.resumeTitle} resume-title`}>Education</h3>
            <div className={`${classes.resumeItem} resume-item`}>
              <div className={`${classes.timeline}`}>
                <h4>Bachelor of Computer Science</h4>
                <h5>2020 - 2024</h5>
                <p>
                  <em>Al - Azhar University</em>
                </p>
                <p>
                  Gained comprehensive knowledge in software development,
                  algorithms, and computer systems, strengthening my
                  problem-solving skills and expertise in various web
                  technologies.
                </p>
              </div>
              <div className={`${classes.timeline}`}>
                <h4>Matriculation</h4>
                <h5>2018 - 2020</h5>
                <p>
                  <em>Shuhada Al-Nuseirat Secondary School for Boys</em>
                </p>
                <p>
                  Focused on foundational programming principles and analytical
                  thinking, preparing for advanced studies in computer science.
                </p>
              </div>
              {/*
                // EducationItem.js
                    const EducationItem = ({degree, year, institution, description}) => {
                      return (
                        <div className={`${classes.timeline}`}>
                          <h4>{degree}</h4>
                          <h5>{year}</h5>
                          <p><em>{institution}</em></p>
                          <p>{description}</p>
                        </div>
                      );
                    };
                    export default EducationItem;
                    <EducationItem
                      degree="Bachelor of Computer Science"
                      year="2020 - 2024"
                      institution="Al-Azhar University"
                      description="Qui deserunt veniam. Et sed aliquam labore tempore sed quisquam iusto autem sit. Ea vero voluptatum qui ut dignissimos deleniti nerada porti sand markend"
                    />
                    <EducationItem
                      degree="Matriculation"
                      year="2018 - 2020"
                      institution="Shuhada Al-Nuseirat Secondary School for Boys"
                      description="Quia nobis sequi est occaecati aut. Repudiandae et iusto quae reiciendis et quis Eius vel ratione eius unde vitae rerum voluptates asperiores voluptatem Earum molestiae consequatur neque etlon sader mart dila"
                    />
                */}
            </div>
          </div>
          {/* Professional Experience */}
          <div className="col-lg-6">
            <h3 className={`${classes.resumeTitle} resume-title`}>
              Professional Experience
            </h3>
            <div className={`${classes.resumeItem} resume-item`}>
              {/* Senior UI Designer */}
              <div className={`${classes.timeline}`}>
                <h4>Senior UI Designer</h4>
                <h5>2021 - 2022</h5>
                <p>
                  <em>Self-Learning</em>
                </p>
                <ul>
                  {/* <li>Applications interfaces designing.</li>
										<li>
											Collaborated with the UX / UI design teams to improve the website and
											applications, increasing conversion rates by 25 % .
										</li> */}
                  <li>
                    Designed intuitive user interfaces for applications with
                    focus on usability.
                  </li>
                  <li>
                    Improved website and app conversion rates by enhancing UI/UX
                    design, leading to a 25% increase in engagement.
                  </li>
                </ul>
              </div>
              {/* Creative Front-End Developer */}
              <div className={`${classes.timeline}`}>
                <h4>Creative Front End Developer</h4>
                <h5>2021 - Present</h5>
                <p>
                  <em>Self Learning</em>
                </p>
                <ul>
                  <li>
                    Developed interactive and responsive websites utilizing
                    React, HTML, CSS, and JavaScript.
                  </li>
                  <li>
                    Built a diverse portfolio of over 40 projects, including
                    e-commerce platforms, landing pages, and educational tools.
                  </li>
                  <li>
                    Engineered a custom client dashboard with dynamic
                    components, enhancing data visualization and accessibility.
                  </li>
                  <li>
                    Collaborated with cross-functional teams to implement UI
                    improvements and introduce new features.
                  </li>
                  {/* <li>Created a custom client dashboard.</li>
										<li>
											Presented findings in a clear and concise manner to key decision - makers.
										</li>
										<li>Maintaining, optimizing, troubleshooting, and improving websites.</li>
										<li>
											Implemented websites, mobile applications, and landing pages from concept
											through deployment.
										</li>
										<li>
											Standardized all output with a new, responsive, mobile - first approach and
											strategy.
										</li>
										<li>
											Collaborated with product team members to implement new feature
											developments.
										</li>
										<li>Develop features to enhance the users’ experience.</li>
										<li>Make sure the web design is smartphone - capable.</li>
										<li>Ensure web pages are optimized for best speed and scalability.</li>
										<li>Employ a diverse selection of markup languages to design web pages.</li> */}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* End Resume Section */}
    </section>
  );
};
export default Resume;
