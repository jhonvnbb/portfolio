import React, { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import headerImg from "../assets/img/profile-logo.png";
import contactImg from "../assets/img/contact-boss.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Contact = () => {
  const [formDetails, setFormDetails] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    message: ''
  });
  const [buttonText, setButtonText] = useState('Submit');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const onFormUpdate = (category, value) => {
    setFormDetails({
      ...formDetails,
      [category]: value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setButtonText("Sending...");
    
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setButtonText("Submit");
      showSuccessToast();
      setFormDetails({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        message: ''
      });
    }, 1500);
  };

  const showSuccessToast = () => {
    toast.success('Message sent successfully!', {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
      className: 'code-toast'
    });
  };

  return (
    <section className="code-contact" id="connect">
      <div className="code-bg-elements">
        <div className="code-line"></div>
        <div className="code-bracket"></div>
      </div>
      
      <Container>
        <Row className="align-items-center">
          <Col xs={12} md={6} xl={6}>
            <TrackVisibility once>
              {({ isVisible }) => (
                <div className={`profile-wrapper ${isVisible ? "animate__animated animate__fadeInRight" : ""}`}>
                  <div className="profile-image-container">
                    <img src={contactImg} alt="Profile" className="profile-image" />
                    <div className="tech-stack">
                      <span className="tech-tag-banner"></span>
                      <span className="tech-tag-banner"></span>
                      <span className="tech-tag-banner"></span>
                    </div>
                  </div>
                </div>
              )}
            </TrackVisibility>
          </Col>
          
          <Col xs={12} md={6} xl={6}>
            <TrackVisibility once>
              {({ isVisible }) =>
                <div className={isVisible ? "animate__animated animate__fadeInRight" : ""}>
                  <div className="contact-header">
                    <h2 className="code-section-title">
                      <span className="code-tag">{"<"}</span>
                      <span className="code-title">Connect</span>
                      <span className="code-title-accent">WithMe</span>
                      <span className="code-tag">{"/>"}</span>
                    </h2>
                    <div className="code-line-divider"></div>
                    <p className="contact-subtitle">
                      <span className="prompt">$</span> Fill out the form or connect through my socials
                    </p>
                  </div>
                  
                  <form onSubmit={handleSubmit} className="code-contact-form">
                    <div className="form-grid">
                      <div className="form-group">
                        <label htmlFor="firstName" className="input-label">
                          <span className="code-tag">firstName</span>
                        </label>
                        <input
                          type="text"
                          id="firstName"
                          value={formDetails.firstName}
                          onChange={(e) => onFormUpdate('firstName', e.target.value)}
                          className="code-input"
                          required
                        />
                      </div>
                      
                      <div className="form-group">
                        <label htmlFor="lastName" className="input-label">
                          <span className="code-tag">lastName</span>
                        </label>
                        <input
                          type="text"
                          id="lastName"
                          value={formDetails.lastName}
                          onChange={(e) => onFormUpdate('lastName', e.target.value)}
                          className="code-input"
                          required
                        />
                      </div>
                      
                      <div className="form-group">
                        <label htmlFor="email" className="input-label">
                          <span className="code-tag">email</span>
                        </label>
                        <input
                          type="email"
                          id="email"
                          value={formDetails.email}
                          onChange={(e) => onFormUpdate('email', e.target.value)}
                          className="code-input"
                          required
                        />
                      </div>
                      
                      <div className="form-group">
                        <label htmlFor="phone" className="input-label">
                          <span className="code-tag">phone</span>
                        </label>
                        <input
                          type="tel"
                          id="phone"
                          value={formDetails.phone}
                          onChange={(e) => onFormUpdate('phone', e.target.value)}
                          className="code-input"
                          required
                        />
                      </div>
                      
                      <div className="form-group full-width">
                        <label htmlFor="message" className="input-label">
                          <span className="code-tag">message</span>
                        </label>
                        <textarea
                          id="message"
                          rows="5"
                          value={formDetails.message}
                          onChange={(e) => onFormUpdate('message', e.target.value)}
                          className="code-textarea"
                          required
                        ></textarea>
                      </div>
                      
                      <button 
                        type="submit" 
                        className={`code-submit-btn ${isSubmitting ? 'submitting' : ''}`}
                        disabled={isSubmitting}
                      >
                        <span className="btn-text">{buttonText}</span>
                        {isSubmitting && (
                          <span className="btn-loader">
                            <span className="loader-dot"></span>
                            <span className="loader-dot"></span>
                            <span className="loader-dot"></span>
                          </span>
                        )}
                      </button>
                    </div>
                  </form>
                </div>
              }
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <ToastContainer />
    </section>
  );
};