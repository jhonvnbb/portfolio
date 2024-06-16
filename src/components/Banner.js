import { useState, useEffect } from "react";
import { Container, Row, Col, Modal, Button } from "react-bootstrap";
import headerImg from "../assets/img/profile-logo.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Banner = () => {
  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [text, setText] = useState('');
  const [delta, setDelta] = useState(300 - Math.random() * 100);
  const [index, setIndex] = useState(1);
  const toRotate = ["Front End Dev,", "Back End Dev,", "Fullstack Dev,"];
  const period = 2000;

  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    let ticker = setInterval(() => {
      tick();
    }, delta);

    return () => { clearInterval(ticker) };
  }, [text]);

  const tick = () => {
    let i = loopNum % toRotate.length;
    let fullText = toRotate[i];
    let updatedText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1);

    setText(updatedText);

    if (isDeleting) {
      setDelta(prevDelta => prevDelta / 2);
    }

    if (!isDeleting && updatedText === fullText) {
      setIsDeleting(true);
      setIndex(prevIndex => prevIndex - 1);
      setDelta(period);
    } else if (isDeleting && updatedText === '') {
      setIsDeleting(false);
      setLoopNum(loopNum + 1);
      setIndex(1);
      setDelta(500);
    } else {
      setIndex(prevIndex => prevIndex + 1);
    }
  };

  const handleShowModal = () => setShowModal(true);
  const handleCloseModal = () => setShowModal(false);

  return (
    <section className="banner" id="home">
      <Container>
        <Row className="align-items-center">
          <Col xs={12} md={6} xl={7}>
            <TrackVisibility>
              {({ isVisible }) =>
                <div className={isVisible ? "animate__animated animate__fadeInLeft" : ""}>
                  <span className="tagline">Welcome to my Portfolio</span>
                  <h1>{`Hi, I'm `}<span className="my-name">Jhonvnbb </span></h1>
                  <h1 className="mt-2 mb-5 fw-bold">
                    <span className="txt-rotate" dataPeriod="1000" data-rotate='[ "Web Developer", "Web Designer", "UI/UX Designer" ]'>
                      <span className="wrap">{text}</span>
                    </span>
                  </h1>
                  <p>"Embrace challenges as stepping stones to success. Your resilience defines you. Believe in your journey, stay focused, and conquer every obstacle. You've got this!"</p>
                  <button className="animate__animated animate__pulse animate__infinite" onClick={handleShowModal}>View CV</button>
                </div>}
            </TrackVisibility>
          </Col>
          <Col xs={12} md={6} xl={5}>
            <TrackVisibility>
              {({ isVisible }) =>
                <div className={isVisible ? "animate__animated animate__zoomIn" : ""}>
                  <img src={headerImg} alt="Header Img"/>
                </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>

      <Modal show={showModal} onHide={handleCloseModal} size="lg" className="custom-modal">
        <Modal.Header closeButton>
          <Modal.Title>My CV</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <embed src={require("../assets/img/JhonVNababan-CV.pdf")} type="application/pdf" width="100%" height="500px" />
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCloseModal}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </section>
  );
};
