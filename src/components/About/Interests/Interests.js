import React from "react";
import classes from "../About.module.css";

import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";
//** الشرح:
// useInView: تُستخدم لمراقبة ما إذا كان العنصر (القسم) داخل مجال العرض. عندما يكون القسم مرئيًا (أي عندما يكون inView صحيحًا)، يتم تشغيل الرسوم المتحركة.
// threshold: يحدد نسبة الظهور المطلوبة لتفعيل الرسوم المتحركة. القيمة 0.1 تعني أن 10% من القسم يجب أن تكون مرئية لتفعيل الرسوم المتحركة.
// motion.div: يتم استخدامه مع خاصية animate للتحكم في الرسوم المتحركة بناءً على حالة inView.

const Interests = () => {
  const { ref: interestsSection, inView: inViewInterestsSection } = useInView({
    threshold: 0.1, // نسبة الظهور المطلوبة لتفعيل الرسوم المتحركة
  });

  return (
    <div
      className={`container-fluid ${classes.interests}`}
      ref={interestsSection}
    >
      {/* Start Interests */}
      {/* Section Title */}
      <div className={classes.sectionTitle}>
        <h2>My Personal Interests</h2>
        <p>
          Apart from my passion for web development and programming, I enjoy
          exploring various fields such as artificial intelligence, blockchain
          technology, and open-source contributions. In my free time, I also
          love reading books on technology trends, playing video games, and
          engaging in outdoor activities like hiking and cycling.
        </p>
      </div>
      {/* Interests List */}
      <div className="row">
        {[
          { icon: "ri-store-line", title: "Lorem Ipsum", color: "#ffbb2c" },
          {
            icon: "ri-bar-chart-box-line",
            title: "Dolor Sitema",
            color: "#5578ff",
          },
          {
            icon: "ri-calendar-todo-line",
            title: "Sed perspiciatis",
            color: "#e80368",
          },
          {
            icon: "ri-paint-brush-line",
            title: "Magni Dolores",
            color: "#e361ff",
          },
          {
            icon: "ri-database-2-line",
            title: "Nemo Enim",
            color: "#47aeff",
          },
          {
            icon: "ri-gradienter-line",
            title: "Eiusmod Tempor",
            color: "#ffa76e",
          },
          {
            icon: "ri-file-list-3-line",
            title: "Midela Teren",
            color: "#11dbcf",
          },
          {
            icon: "ri-price-tag-2-line",
            title: "Pira Neve",
            color: "#4233ff",
          },
          { icon: "ri-anchor-line", title: "Dirada Pack", color: "#b2904f" },
          { icon: "ri-disc-line", title: "Moton Ideal", color: "#b20969" },
          {
            icon: "ri-base-station-line",
            title: "Verdo Park",
            color: "#ff5828",
          },
          {
            icon: "ri-fingerprint-line",
            title: "Flavor Nivelanda",
            color: "#29cc61",
          },
        ].map((interest, index) => (
          <div key={index} className="col-lg-3 col-md-4 mt-4">
            {/* <div className={classes.iconBox}> */}
            <motion.div
              className={`${classes.iconBox} shadow p-4 rounded`}
              style={{ transition: "transform 0.3s" }}
              initial={{ opacity: 0, scale: 0.5 }} // تأثير البداية
              animate={
                inViewInterestsSection
                  ? { opacity: 1, scale: 1 }
                  : { opacity: 0, scale: 0.5 }
              } // التأثير النهائي
              transition={{ duration: 0.3 }} // مدة التأثير
            >
              <i
                className={`${interest.icon} ${classes.icon}`}
                style={{ color: interest.color }}
              />
              <h3 className={classes.title}>{interest.title}</h3>
              {/* Optional Description */}
              {/* <p className={classes.description}>وصف قصير للاهتمام.</p> */}
              <p className={classes.description}>
                {interest.title === "Lorem Ipsum"
                  ? "وصف ل Lorem Ipsum."
                  : interest.title === "Dolor Sitema"
                  ? "وصف ل Dolor Sitema."
                  : interest.title === "Sed perspiciatis"
                  ? "وصف ل Sed perspiciatis."
                  : // أضف المزيد من الأوصاف حسب الاهتمامات
                    "وصف افتراضي للاهتمام."}
              </p>
            </motion.div>
          </div>
        ))}
      </div>
      {/* End Interests */}
    </div>
  );
};
export default Interests;
