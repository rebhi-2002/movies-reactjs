import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUser,
  faEnvelope,
  faPhone,
  faComment,
} from "@fortawesome/free-solid-svg-icons";
import styles from "./Contact.module.css"; // استيراد CSS Module

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
    setErrors({ ...errors, [name]: "" });
  };

  const validateForm = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = "Name is required";
    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Email is invalid";
    }
    if (!formData.phone.trim()) newErrors.phone = "Phone number is required";
    if (!formData.subject.trim()) newErrors.subject = "Subject is required";
    if (!formData.message.trim()) {
      newErrors.message = "Message is required";
    } else if (formData.message.length < 10) {
      newErrors.message = "Message must be at least 10 characters long";
    }
    return newErrors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    const validationErrors = validateForm();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      setIsSubmitting(false);
      return;
    }

    try {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/posts",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        }
      );

      if (response.ok) {
        const result = await response.json();
        console.log("Form submitted successfully:", result);
        toast.success("Your message has been sent successfully!");
        setFormData({
          name: "",
          email: "",
          phone: "",
          subject: "",
          message: "",
        });
      } else {
        toast.error("Failed to send message. Please try again later.");
      }
    } catch (error) {
      toast.error("There was an error. Please try again later.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className={`${styles.container} w-75 mx-auto my-5`}>
      <h2 className="text-center mb-4 text-primary">Contact Us</h2>
      <form
        onSubmit={handleSubmit}
        className={`${styles["form-contact"]} mx-auto w-100 shadow-lg p-4 rounded bg-light`}
      >
        <div className="mb-3">
          <label htmlFor="name" className={styles.formLabel}>
            <FontAwesomeIcon icon={faUser} className="me-2" />
            Name:
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className={`form-control ${errors.name ? "is-invalid" : ""}`}
            required
          />
          {errors.name && (
            <div className={styles.invalidFeedback}>{errors.name}</div>
          )}
        </div>
        <div className="mb-3">
          <label htmlFor="email" className={styles.formLabel}>
            <FontAwesomeIcon icon={faEnvelope} className="me-2" />
            Email:
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className={`form-control ${errors.email ? "is-invalid" : ""}`}
            required
          />
          {errors.email && (
            <div className={styles.invalidFeedback}>{errors.email}</div>
          )}
        </div>
        <div className="mb-3">
          <label htmlFor="phone" className={styles.formLabel}>
            <FontAwesomeIcon icon={faPhone} className="me-2" />
            Phone:
          </label>
          <input
            type="tel"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            className={`form-control ${errors.phone ? "is-invalid" : ""}`}
            required
          />
          {errors.phone && (
            <div className={styles.invalidFeedback}>{errors.phone}</div>
          )}
        </div>
        <div className="mb-3">
          <label htmlFor="subject" className={styles.formLabel}>
            Subject:
          </label>
          <input
            type="text"
            id="subject"
            name="subject"
            value={formData.subject}
            onChange={handleChange}
            className={`form-control ${errors.subject ? "is-invalid" : ""}`}
            required
          />
          {errors.subject && (
            <div className={styles.invalidFeedback}>{errors.subject}</div>
          )}
        </div>
        <div className="mb-3">
          <label htmlFor="message" className={styles.formLabel}>
            <FontAwesomeIcon icon={faComment} className="me-2" />
            Message:
          </label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            className={`form-control ${errors.message ? "is-invalid" : ""}`}
            rows="5"
            required
          />
          {errors.message && (
            <div className={styles.invalidFeedback}>{errors.message}</div>
          )}
        </div>
        <button
          type="submit"
          className={`btn btn-primary w-100 ${styles.transition}`}
          disabled={isSubmitting}
        >
          {isSubmitting ? "Sending..." : "Send Message"}
        </button>
      </form>
      <ToastContainer />
    </div>
  );
};

export default Contact;
