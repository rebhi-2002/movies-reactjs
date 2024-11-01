import React from "react";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";
import "remixicon/fonts/remixicon.css";
import classes from "../About.module.css";

const Counts = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  return (
    <div className={`container-fluid ${classes.counts}`} ref={ref}>
      {/* Start Counts */}
      <div className={classes.sectionTitle}>
        <h2>Key Facts About My Work</h2>
        <p>
          Discover important facts about my experience and skills. From handling
          complex projects to ensuring efficient and clean code, explore the
          qualities that make my work stand out in web development and full
          stack technologies.
        </p>
      </div>
      <div className="row">
        <div className="col-lg-3 col-md-6">
          <div className={classes["count-box"]}>
            <i className="bi bi-emoji-smile" />
            {/* <span data-purecounter-start="0" data-purecounter-end="232" data-purecounter-duration="1" className={classes.purecounter}></span> */}
            {/* <CountUp start={0} end={232} duration={1} className={classes.purecounter} /> */}
            {inView ? (
              <CountUp
                start={0}
                end={232}
                duration={2}
                className={classes.purecounter}
              />
            ) : (
              <span className="d-block my-2 fs-3 fw-bold m-auto"> 0 </span>
            )}{" "}
            <p> Happy Clients </p>
          </div>
        </div>
        <div className="col-lg-3 col-md-6 mt-5 mt-md-0">
          <div className={classes["count-box"]}>
            <i className="bi bi-journal-richtext" />{" "}
            {inView ? (
              <CountUp
                start={0}
                end={521}
                duration={1}
                className={classes.purecounter}
              />
            ) : (
              <span className="d-block my-2 fs-3 fw-bold m-auto"> 0 </span>
            )}{" "}
            <p> Projects </p>
          </div>
        </div>
        <div className="col-lg-3 col-md-6 mt-5 mt-lg-0">
          <div className={classes["count-box"]}>
            <i className="bi bi-headset" />{" "}
            {inView ? (
              <CountUp
                start={0}
                end={1463}
                duration={1}
                className={classes.purecounter}
              />
            ) : (
              <span className="d-block my-2 fs-3 fw-bold m-auto"> 0 </span>
            )}{" "}
            <p> Hours Of Support </p>
          </div>
        </div>
        <div className="col-lg-3 col-md-6 mt-5 mt-lg-0">
          <div className={classes["count-box"]}>
            <i className="bi bi-award" />{" "}
            {inView ? (
              <CountUp
                start={0}
                end={24}
                duration={1}
                className={classes.purecounter}
              />
            ) : (
              <span className="d-block my-2 fs-3 fw-bold m-auto">0 </span>
            )}{" "}
            <p> Awards </p>
          </div>
        </div>
      </div>
      {/* End Counts */}
    </div>
  );
};
export default Counts;
