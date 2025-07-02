import { Container, Row, Col } from "react-bootstrap";
import { CodeSlash, Github, Whatsapp, Instagram } from "react-bootstrap-icons";

export const Footer = () => {
  return (
    <footer className="code-footer">
      <div className="footer-top-border"></div>
      <Container>
        <Row className="align-items-center">
          <Col xs={12} md={6}>
            <div className="footer-links">
              <ul className="footer-nav">
                <li className="nav-item">
                  <a href="#home" className="nav-link">
                    <span className="code-tag">&lt;</span>Home<span className="code-tag">/&gt;</span>
                  </a>
                </li>
                <li className="nav-item">
                  <a href="#about" className="nav-link">
                    <span className="code-tag">&lt;</span>About<span className="code-tag">/&gt;</span>
                  </a>
                </li>
                <li className="nav-item">
                  <a href="#projects" className="nav-link">
                    <span className="code-tag">&lt;</span>Projects<span className="code-tag">/&gt;</span>
                  </a>
                </li>
                <li className="nav-item">
                  <a href="#connect" className="nav-link">
                    <span className="code-tag">&lt;</span>Contact<span className="code-tag">/&gt;</span>
                  </a>
                </li>
              </ul>
            </div>
          </Col>
          <Col xs={12} md={6}>
            <div className="footer-social">
              <div className="social-icons-footer">
                <a 
                  href="https://github.com/jhonvnbb" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="social-icon"
                  aria-label="GitHub"
                >
                  <Github className="icon" />
                  <span className="icon-tooltip">GitHub</span>
                </a>
                <a 
                  href="https://wa.me/6281375839812" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="social-icon"
                  aria-label="WhatsApp"
                >
                  <Whatsapp className="icon" />
                  <span className="icon-tooltip">WhatsApp</span>
                </a>
                <a 
                  href="https://instagram.com/jhonnvnbb" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="social-icon"
                  aria-label="Instagram"
                >
                  <Instagram className="icon" />
                  <span className="icon-tooltip">Instagram</span>
                </a>
              </div>
              <div className="footer-copyright">
                <CodeSlash className="code-icon" />
                <p>
                  <span className="code-comment">// Copyright © {new Date().getFullYear()} Jhonvnbb</span>
                  <br />
                  <span className="code-comment">// All rights reserved</span>
                </p>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};