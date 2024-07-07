import { Container, Row, Col } from "react-bootstrap";
import navIcon1 from "../assets/img/icon-github.svg";
import navIcon2 from "../assets/img/icon-wa.svg";
import navIcon3 from "../assets/img/icon-ig.svg";

export const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row className="align-items-center">
          <Col size={12} sm={6}>
            <div className="link-footer text-center my-2">
              <ul>
                <li><a href="#home">Home</a></li>
                <li><a href="#about">About</a></li>
                <li><a href="#projects">Projects</a></li>
              </ul>
            </div>
          </Col>
          <Col size={12} sm={6} className="text-center text-sm-end">
            <div className="social-icon-footer">
              <a href="https://github.com/jhonvnbb" target="__blank"><img src={navIcon1} alt="Icon" /></a>
              <a href="https://wa.me/6281375839812" target="__blank"><img src={navIcon2} alt="Icon" /></a>
              <a href="https://instagram.com/jhonnvnbb?igshid=OGQ5ZDc2ODk2ZA==" target="__blank"><img src={navIcon3} alt="Icon" /></a>
            </div>
            <p>&copy; Copyright 2024. Protected by law</p>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}