import { useState, useEffect } from "react";
import { Container, Row, Col, Modal, Button } from "react-bootstrap";
import headerImg from "../assets/img/profile-logo.png";
import "animate.css";
import TrackVisibility from "react-on-screen";

export const Banner = () => {
  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [text, setText] = useState("");
  const [delta, setDelta] = useState(300 - Math.random() * 100);
  const toRotate = ["Frontend Developer", "Backend Developer", "Fullstack Developer"];
  const period = 2000;

  const [showModal, setShowModal] = useState(false);
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    let ticker = setInterval(() => {
      tick();
    }, delta);

    return () => {
      clearInterval(ticker);
    };
  }, [text]);

  const tick = () => {
    let i = loopNum % toRotate.length;
    let fullText = toRotate[i];
    let updatedText = isDeleting
      ? fullText.substring(0, text.length - 1)
      : fullText.substring(0, text.length + 1);

    setText(updatedText);

    if (isDeleting) {
      setDelta(prevDelta => prevDelta / 2);
    }

    if (!isDeleting && updatedText === fullText) {
      setIsDeleting(true);
      setDelta(period);
    } else if (isDeleting && updatedText === "") {
      setIsDeleting(false);
      setLoopNum(loopNum + 1);
      setDelta(500);
    }
  };

  const handleShowModal = () => setShowModal(true);
  const handleCloseModal = () => setShowModal(false);

  return (
    <section className="banner" id="home">
      <div className="banner-background"></div>
      <Container>
        <Row className="align-items-center">
          <Col xs={12} md={6} xl={6}>
            <TrackVisibility once>
              {({ isVisible }) => {
                if (isVisible && !hasAnimated) {
                  setHasAnimated(true);
                }
                return (
                  <div className={`banner-content ${hasAnimated ? "animate__animated animate__fadeInLeft" : ""}`}>
                    <div className="greeting-wrapper">
                      <span className="greeting">Hello, my name is</span>
                      <h1 className="name">
                        <span className="name-highlight">Jhonvnbb</span>
                      </h1>
                      <div className="title-wrapper">
                        <h2 className="title">
                          <span className="title-text">I'm a </span>
                          <span className="rotating-text">{text}</span>
                          <span className="typing-cursor">|</span>
                        </h2>
                      </div>
                    </div>
                    <p className="description">
                      Crafting digital experiences with clean code and thoughtful design.
                      Passionate about building responsive, accessible, and performant web applications.
                    </p>
                    <div className="cta-buttons">
                      <button 
                        className="view-cv-btn"
                        onClick={handleShowModal}
                      >
                        <span>View CV</span>
                      </button>
                      <a href="#projects" className="view-work-btn">
                        <span>See My Work</span>
                      </a>
                    </div>
                  </div>
                );
              }}
            </TrackVisibility>
          </Col>
          <Col xs={12} md={6} xl={6}>
            <TrackVisibility once>
              {({ isVisible }) => (
                <div className={`profile-wrapper ${isVisible ? "animate__animated animate__fadeInRight" : ""}`}>
                  <div className="profile-image-container">
                    <img src={headerImg} alt="Profile" className="profile-image" />
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
        </Row>
      </Container>

      <Modal
        show={showModal}
        onHide={handleCloseModal}
        size="lg"
        centered
        className="cv-modal"
      >
        <Modal.Header closeButton>
          <Modal.Title className="modal-title">My Professional CV</Modal.Title>
        </Modal.Header>
        <Modal.Body className="modal-body">
          <embed
            src={require("../assets/img/JhonVNababan-CV.pdf")}
            type="application/pdf"
            className="pdf-embed"
          />
        </Modal.Body>
        <Modal.Footer className="modal-footer">
          <Button variant="primary" onClick={handleCloseModal} className="close-btn">
            Close
          </Button>
          <Button variant="success" className="download-btn">
            Download CV
          </Button>
        </Modal.Footer>
      </Modal>
    </section>
  );
};