import React, { useState } from "react";
import { Form, Row, Col, Button, Alert, Spinner } from "react-bootstrap";
import classes from "../About.module.css";

const Contact = () => {
  const [loading, setLoading] = useState(false);
  const [sent, setSent] = useState(false);
  const [error, setError] = useState(false);

  //* [Start Contact Form]:
  // State to store form data
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  // Handle form input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };
  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    setSent(false);
    setError(false);

    // Implement form submission logic here (e.g., send to server)
    console.log(formData);

    // Simulate form submission for now
    setTimeout(() => {
      if (
        formData.name &&
        formData.email &&
        formData.subject &&
        formData.message
      ) {
        setLoading(false);
        setSent(true);
        setFormData({ name: "", email: "", subject: "", message: "" }); // Clear form
      } else {
        setLoading(false);
        setError(true);
      }
    }, 2000); // Simulate a 2-second loading
  };

  return (
    <section id="contact" className={classes.contactSection}>
      {/* Start Contact Section */}
      <div className="container">
        <div className={classes.sectionTitle}>
          <h2>Contact Me</h2>
          <p>
            I'd love to hear from you! Feel free to reach out for any inquiries,
            collaborations, or just to say hello. You can contact me via the
            form below or through my social media channels.
          </p>
        </div>

        {/* ترتيب الأعمدة مع الخريطة */}
        <Row>
          {/* الخريطة */}
          <Col md={6}>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d850.9254851311482!2d34.390511703110555!3d31.449871535447627!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sar!2s!4v1730307732579!5m2!1sar!2s"
              // width="800" // height="600" // style={{ border: "0", width: "100%", height: "270px" }}
              style={{
                outline: "5px solid #fff",
                borderRadius: "16px",
                width: "100%",
                height: "100%",
              }}
              // frameBorder="0"
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </Col>
          {/* معلومات الاتصال */}
          <Col md={6}>
            <Row className="mt-2">
              <Col md={6} className="d-flex align-items-stretch">
                <div className={`${classes.infoBox} ${classes.boxShadow}`}>
                  <i
                    className={`${classes["icon-map"]} ${classes.icon} bx bx-map fs-2`}
                  />
                  <h3>My Address</h3>
                  <p>Yafa Street, Nuseirat</p>
                </div>
              </Col>
              <Col md={6} className="mt-4 mt-md-0 d-flex align-items-stretch">
                <div className={`${classes.infoBox} ${classes.boxShadow}`}>
                  <i
                    className={`${classes["icon-social"]} ${classes.icon} bx bx-share-alt fs-2`}
                  />
                  <h3>Social Profiles</h3>
                  <div className={classes.socialLinks}>
                    <a
                      href="/"
                      className={`${classes.twitter} ${classes.socialIcon}`}
                    >
                      <i className="bi bi-twitter" />
                    </a>
                    <a
                      href="/"
                      className={`${classes.facebook} ${classes.socialIcon}`}
                    >
                      <i className="bi bi-facebook" />
                    </a>
                    <a
                      href="/"
                      className={`${classes.instagram} ${classes.socialIcon}`}
                    >
                      <i className="bi bi-instagram" />
                    </a>
                    <a
                      href="/"
                      className={`${classes.googlePlus} ${classes.socialIcon}`}
                    >
                      <i className="bi bi-skype" />
                    </a>
                    <a
                      href="/"
                      className={`${classes.linkedin} ${classes.socialIcon}`}
                    >
                      <i className="bi bi-linkedin" />
                    </a>
                  </div>
                </div>
              </Col>
              <Col md={6} className="mt-4 d-flex align-items-stretch">
                <div className={`${classes.infoBox} ${classes.boxShadow}`}>
                  <i
                    className={`${classes["icon-envelope"]} ${classes.icon} bx bx-envelope fs-2`}
                  />
                  <h3>Email Me</h3>
                  <p>rebheibrahim@gmail.com</p>
                </div>
              </Col>
              <Col md={6} className="mt-4 d-flex align-items-stretch">
                <div className={`${classes.infoBox} ${classes.boxShadow}`}>
                  <i
                    className={`${classes["icon-phone"]} ${classes.icon} bx bx-phone-call fs-2`}
                  />
                  <h3>Call Me</h3>
                  <p>+972 59-752-3575</p>
                </div>
              </Col>
            </Row>
          </Col>
        </Row>

        {/* Form Section */}
        <Form
          onSubmit={handleSubmit}
          className={`${classes["php-email-form"]} mt-4 ${classes.contactForm}`}
        >
          {sent && (
            <Alert
              variant="success"
              className={`${classes.successMessage} mb-4 text-center`}
            >
              Your message has been sent. Thank you!
            </Alert>
          )}
          {error && (
            <Alert
              variant="danger"
              className={`${classes.errorMessage} text-center`}
            >
              There was an error sending your message. Please try again.
            </Alert>
          )}
          <Row>
            <Col md={6} className="form-group">
              <Form.Control
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Your Name"
                required
                className={`${classes.inputField} form-control`}
              />
            </Col>
            <Col md={6} className="form-group mt-3 mt-md-0">
              <Form.Control
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Your Email"
                required
                className={`${classes.inputField} form-control`}
              />
            </Col>
          </Row>
          <Form.Group className="mt-3">
            <Form.Control
              type="text"
              name="subject"
              value={formData.subject}
              onChange={handleChange}
              placeholder="Subject"
              required
              className={`${classes.inputField}`}
            />
          </Form.Group>
          <Form.Group className="mt-3">
            <Form.Control
              as="textarea"
              name="message"
              value={formData.message}
              onChange={handleChange}
              rows="5"
              placeholder="Message"
              required
              className={classes.textareaField}
            />
          </Form.Group>
          {loading && (
            <div className={`text-center my-3`}>
              <Spinner animation="border" variant="primary" />
            </div>
          )}
          <div className="text-center">
            <Button
              type="submit"
              className={`btn btn-primary ${classes.submitButton}`}
            >
              Send Message
            </Button>
          </div>
        </Form>
      </div>
      {/* End Contact Section */}
    </section>
  );
};
export default Contact;
