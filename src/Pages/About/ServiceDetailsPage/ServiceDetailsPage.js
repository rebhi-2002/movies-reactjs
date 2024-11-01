import React, { Fragment } from "react";
import { useParams } from "react-router-dom";
import { servicesData } from "../../../components/About/About";
import styles from "./ServiceDetailsPage.module.css";

const ServiceDetailsPage = () => {
  const { title } = useParams(); // للحصول على عنوان الخدمة من الرابط
  const service = servicesData.find(
    (service) => service.title === decodeURIComponent(title)
  );

  // const service = servicesData.find((service) => service.id === someId);
  // const service = servicesData.find((item) => item.title === "Full-Stack Web Development & SEO");

  if (!service) {
    return <p>Service not found</p>;
  }

  return (
    <div className={`container-fluid py-5 ${styles.container}`} style={{ padding: "0 20px"}}>
      <header className="text-center mb-4">
        <h1 className="display-4">{service.title}</h1>
        <p className="lead text-muted">{service.subTitle}</p>
      </header>
      {/* الوصف */}
      <section className="my-4">
        <h3>Description</h3>
        <p>{service.description}</p>
      </section>
      {/* الصورة */}
      <section className="my-4">
        <img
          src={service.imageUrl}
          alt={service.title}
          className="img-fluid mb-3 w-25"
        />
      </section>
      {/* الوصف التفصيلي */}
      <section className="my-4">
        <h3>Detailed Description</h3>
        <p>{service.detailedDescription}</p>
      </section>
      {/* الأسئلة المتكررة */}
      <section className="mt-3 mb-4">
        <h3>Frequently Asked Questions</h3>
        <ul className={`${styles.listUnstyled} list-unstyled`}>
          {service.faqs.map((faq, index) => (
            <li key={index} className="mb-2">
              <strong>{faq.question}</strong>
              <p>{faq.answer}</p>
            </li>
          ))}
        </ul>
      </section>
      {/* تاريخ آخر تحديث */}
      <section className="my-4">
        <h3>Updated Date</h3>
        <p>{service.updatedDate}</p>
      </section>
      {/* الجمهور المستهدف */}
      <section className="my-4">
        <h3>Target Audience</h3>
        <p>{service.targetAudience}</p>
      </section>
      {/* الميزات الرئيسية والميزات الإضافية */}
      <div className="row mt-4 mb-2">
        <div className="col-md-6 mb-4">
          <div className={`card shadow-sm ${styles.card}`}>
            <div className="card-header">
              <h5 className="my-0 fw-normal">Main Features</h5>
            </div>
            <div className="card-body">
              <ul className="list-unstyled">
                {service.features.map((feature, index) => (
                  <li key={index} className="my-2">
                    <i className="fa fa-check-circle text-success me-2"></i>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
        {service.extraFeatures && (
          <div className="col-md-6 mb-4">
            <div className={`card shadow-sm ${styles.card}`}>
              <div className="card-header">
                <h5 className="my-0 fw-normal">Extra Features</h5>
              </div>
              <div className="card-body">
                <ul className="list-unstyled">
                  {service.extraFeatures.map((feature, index) => (
                    <li key={index} className="my-2">
                      <i className="fa fa-plus-circle text-info me-2"></i>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        )}
      </div>
      {/* التسعير ووقت الانتهاء */}
      <div className="row mb-4 mt-2">
        <div className="col-md-6 mb-4">
          <div className={`card shadow-sm ${styles.card}`}>
            <div className="card-header">
              <h5 className="my-0 fw-normal">Pricing</h5>
            </div>
            <div className="card-body">
              <p className="h5">{service.pricing}</p>
            </div>
          </div>
        </div>
        <div className="col-md-6 mb-4">
          <div className={`card shadow-sm ${styles.card}`}>
            <div className="card-header">
              <h5 className="my-0 fw-normal">Estimated Completion Time</h5>
            </div>
            <div className="card-body">
              <p className="h5">{service.estimatedCompletionTime}</p>
            </div>
          </div>
        </div>
      </div>
      {/* تقييم العملاء */}
      <section className="my-4">
        <div className={`card shadow-sm ${styles.card}`}>
          <div className={`card-header ${styles["card-header"]}`}>
            <h5 className="fw-normal">Client Testimonial</h5>
          </div>
          <div className="card-body">
            <blockquote className={`blockquote ${styles["blockquote"]}`}>
              <p className="mb-3">"{service.testimonial}"</p>
              <footer
                className={`blockquote-footer ${styles["blockquote-footer"]}`}
              >
                {service.clientName}
              </footer>
            </blockquote>
            <img
              src={service.clientImage}
              alt={service.clientName}
              className="img-fluid rounded-circle"
            />
          </div>
        </div>
      </section>
      {/* التصنيف والتقييم */}
      <section className={`${styles.ratingSection}`}>
        <h3 className={`${styles.sectionTitle}`}>Rating:</h3>
        <p className={styles.ratingValue}>
          Rating: <strong> {service.rating} ⭐</strong>
        </p>
        <p className={styles.categories}>
          Categories: <strong>{service.categories.join(", ")}</strong>
        </p>
      </section>
      {/* دراسات الحالة */}
      <section className={`${styles.caseStudiesSection}`}>
        <h3 className={styles.sectionTitle}>Case Studies</h3>
        <ul className={`list-unstyled ${styles.caseStudiesList}`}>
          {service.caseStudies.map((caseStudy, index) => (
            <li key={index} className={`mb-3 ${styles.caseStudyItem}`}>
              <h5 className={styles.caseStudyTitle}>{caseStudy.title}</h5>
              <p className={styles.caseStudyDescription}>
                {caseStudy.description}
              </p>
            </li>
          ))}
        </ul>
      </section>
      {/* معلومات الاتصال */}
      <section className={`${styles.contactInfoSection} mb-5`}>
        <h3 className={styles.sectionTitle}>Contact Information</h3>{" "}
        <p>
          Email:{" "}
          <strong>
            <a href={`mailto:${service.contactEmail}`}>
              {service.contactEmail}
            </a>
          </strong>
        </p>
        <p>
          Phone: <strong>{service.phoneNumber}</strong>
        </p>
      </section>
      {/* زر المزيد من المعلومات */}
      <div className="d-flex align-items-center my-3" style={{ gap: ".5rem" }}>
        <a
          href={service.externalLink}
          target="_blank"
          rel="noopener noreferrer"
          className="btn btn-primary btn-lg me-3"
        >
          Learn More <i className="fas fa-external-link-alt ms-1"></i>
        </a>
        <span
          className={`${styles.badge} ${
            styles[service.available ? "badge-success" : "badge-warning"]
          }`}
        >
          {service.available ? "Available" : "On Demand"}
        </span>
      </div>
      {/* زر الحجز */}
      <section className="my-4 text-center">
        <a
          href={service.actionButton.link}
          className="btn btn-success btn-lg"
          target="_blank"
          rel="noopener noreferrer"
        >
          {service.actionButton.text}
        </a>
      </section>
    </div>
  );
};

export default ServiceDetailsPage;
