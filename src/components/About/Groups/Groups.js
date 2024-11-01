import React from "react";
import classes from "../About.module.css";

import qr_image1 from "../../../assets/qr-image1.jpg";
import qr_image2 from "../../../assets/qr-image2.jpg";

const Groups = () => {
  return (
    <section className={classes["qr-groups-section"]}>
      {/* Start groups-section */}
      {/* <div className={classes["section-title"]}> */}
      <div className={classes["sectionTitle"]}>
        <h2>Join Our Educational Groups</h2>
        <p>
          You can easily join our various educational groups by scanning the QR
          code below or by clicking on the links provided. We offer a wealth of
          resources and support to enhance your learning experience.
        </p>
      </div>
      <div className={classes["groups-container"]}>
        {/* المجموعة الأولى */}
        <div className={classes["group"]}>
          <div className={classes["card"]}>
            <img
              src={qr_image1}
              alt="QR Code for Group 1"
              className={classes["qr-image"]}
            />
            <h3>
              <i className="fa fa-book"></i> مجموعة تعليمية 1
            </h3>
            <p>
              انضم إلى المجموعة التعليمية 1 لمتابعة آخر الدورات، بما يشمل دروس
              تفاعلية وتمارين عملية.
            </p>
            <p>مستوى الدورة: مبتدئين</p>
            <p>
              حاليًا أكثر من <strong>500 عضو</strong> يتابعون المحتوى المميز.
            </p>
            {/* قسم التعليقات */}
            <div className={classes["testimonials__group"]}>
              <p>“محتوى مفيد جدًا ساعدني في تطوير مهاراتي.” - محمد</p>
              <p>“تجربة تعليمية رائعة!” - سارة</p>
            </div>
            {/* أزرار المشاركة */}
            <div className={classes["share-buttons"]}>
              <button
                onClick={() =>
                  window.open(
                    "https://www.facebook.com/sharer/sharer.php?u=https://t.me/ReactAcademy2024",
                    "_blank"
                  )
                }
              >
                مشاركة على فيسبوك
              </button>
              <button
                onClick={() =>
                  window.open(
                    "https://twitter.com/share?url=https://t.me/ReactAcademy2024&text=انضموا معنا لتعلم المزيد",
                    "_blank"
                  )
                }
              >
                مشاركة على تويتر
              </button>
            </div>
            <a
              href="https://t.me/ReactAcademy2024"
              target="_blank"
              className={classes["btn-join"]}
              rel="noreferrer"
            >
              انضم الآن
            </a>
            {/* فيديو توضيحي */}
            {/* <video controls className={classes["group-video"]}>
                <source src="path/to/intro-video1.mp4" type="video/mp4" />
                متصفحك لا يدعم تشغيل الفيديو.
              </video> */}
          </div>
        </div>
        {/* المجموعة الثانية */}
        <div className={classes["group"]}>
          <div className={classes["card"]}>
            <img
              src={qr_image2}
              alt="QR Code for Group 2"
              className={classes["qr-image"]}
            />
            <h3>
              <i className="fa fa-user-graduate"></i> مجموعة تعليمية 2
            </h3>
            <p>
              انضم إلى المجموعة التعليمية 2 واستفد من المحتوى التعليمي المتقدم
              وورش العمل الحصرية.
            </p>
            <p>مستوى الدورة: متوسط</p>
            <p>
              حاليًا أكثر من <strong>300 عضو</strong> يتعلمون معنا في هذه
              المجموعة.
            </p>
            {/* قسم التعليقات */}
            <div className={classes["testimonials__group"]}>
              <p>“محتوى رائع ومميز يساعد في تطوير مهاراتي.” - أحمد</p>
              <p>“جودة عالية وتعليم متقن!” - ليلى</p>
            </div>
            {/* أزرار المشاركة */}
            <div className={classes["share-buttons"]}>
              <button
                onClick={() =>
                  window.open(
                    "https://www.facebook.com/sharer/sharer.php?u=https://t.me/JavaScriptDevelopers2024",
                    "_blank"
                  )
                }
              >
                مشاركة على فيسبوك
              </button>
              <button
                onClick={() =>
                  window.open(
                    "https://twitter.com/share?url=https://t.me/JavaScriptDevelopers2024&text=انضموا معنا لتعلم المزيد",
                    "_blank"
                  )
                }
              >
                مشاركة على تويتر
              </button>
            </div>
            <a
              href="https://t.me/JavaScriptDevelopers2024"
              target="_blank"
              className={classes["btn-join"]}
              rel="noreferrer"
            >
              انضم الآن
            </a>
            {/* فيديو توضيحي */}
            {/* <video controls className={classes["group-video"]}>
                <source src="path/to/intro-video2.mp4" type="video/mp4" />
                متصفحك لا يدعم تشغيل الفيديو.
              </video> */}
          </div>
        </div>
      </div>
      {/* End groups-section */}
    </section>
  );
};
export default Groups;
