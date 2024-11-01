import React from "react";
import { Link } from "react-router-dom";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import styles from "./Portfolio.module.css";

const PortfolioGrid = ({ items }) => {
  return (
    <TransitionGroup className={styles["portfolio-grid"]}>
      {items.map((item) => (
        <CSSTransition
          key={item.id}
          timeout={300} // مدة التأثير
          classNames={{
            enter: styles["fade-enter"],
            enterActive: styles["fade-enter-active"],
            exit: styles["fade-exit"],
            exitActive: styles["fade-exit-active"],
          }}
        >
          <div className={`${styles["portfolio-container"]}`}>
            <div
              className={`${styles["portfolio-item"]} m-auto my-2 filter-${item.category}`}
            >
              <div className={`${styles["portfolio-wrap"]} w-100 h-100`}>
                <img
                  src={item.imageUrl}
                  className={`${styles["img-fluid"]} w-100 h-100`}
                  style={{
                    aspectRatio: "1.5 / 1",
                    objectFit: "cover",
                    objectPosition: "center",
                  }}
                  alt={item.title}
                />

                <div className={styles["portfolio-info"]}>
                  <h4 className="my-1">{item.title}</h4>
                  <p className="my-1">{item.projectType.toUpperCase()}</p>
                  <div className={`${styles["portfolio-links"]} mb-2`}>
                    <Link
                      to={`/about/portfolio/work/${item.id}`}
                      className={styles["portfolio-lightbox"]}
                      title={item.title}
                    >
                      <i className="bx bx-plus fs-3"></i>
                    </Link>
                    <Link
                      to={item.detailsUrl}
                      className={styles["portfolio-details-lightbox"]}
                      title="Portfolio Details"
                    >
                      <i className="bx bx-link fs-3"></i>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </CSSTransition>
      ))}
    </TransitionGroup>
  );
};

export default PortfolioGrid;
