import { useState, useEffect } from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import { CodeSlash, Github, Whatsapp, Instagram, ArrowUp } from "react-bootstrap-icons";
import { HashLink } from 'react-router-hash-link';
import { BrowserRouter as Router } from "react-router-dom";

export const NavBar = () => {
  const [activeLink, setActiveLink] = useState('home');
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const onUpdateActiveLink = (value) => {
    setActiveLink(value);
    setMobileOpen(false);
  };

  return (
    <Router>
      <Navbar 
        expand="lg" 
        fixed="top"
        className={`modern-navbar ${scrolled ? "scrolled" : ""} ${mobileOpen ? "mobile-open" : ""}`}
        expanded={mobileOpen}
        onToggle={() => setMobileOpen(!mobileOpen)}
      >
        <Container fluid className="nav-container">
          {/* Left Side - Only Name */}
          <Navbar.Brand href="/" className="brand">
            <span className="code-symbol">{'</>'}</span>
            <span className="brand-name">Jhonvnbb</span>
            <span className="cursor-blink">_</span>
          </Navbar.Brand>

          {/* Right Side - Navigation Elements */}
          <div className="nav-right-content">
            <Navbar.Toggle 
              aria-controls="navbar-nav" 
              className="hamburger"
            >
              <div className={`hamburger-inner ${mobileOpen ? "active" : ""}`}></div>
            </Navbar.Toggle>
            
            <Navbar.Collapse id="navbar-nav" className="navbar-collapse-content">
              <Nav className="nav-links">
                <Nav.Link 
                  href="#home" 
                  className={`nav-link ${activeLink === 'home' ? 'active' : ''}`}
                  onClick={() => onUpdateActiveLink('home')}
                >
                  <span className="nav-number">01.</span>
                  <span className="nav-text">Home</span>
                </Nav.Link>
                <Nav.Link 
                  href="#about" 
                  className={`nav-link ${activeLink === 'about' ? 'active' : ''}`}
                  onClick={() => onUpdateActiveLink('about')}
                >
                  <span className="nav-number">02.</span>
                  <span className="nav-text">About</span>
                </Nav.Link>
                <Nav.Link 
                  href="#projects" 
                  className={`nav-link ${activeLink === 'projects' ? 'active' : ''}`}
                  onClick={() => onUpdateActiveLink('projects')}
                >
                  <span className="nav-number">03.</span>
                  <span className="nav-text">Projects</span>
                </Nav.Link>
              </Nav>

              <div className="nav-actions">
                <div className="social-icons">
                  <a href="https://github.com/jhonvnbb" target="_blank" rel="noopener noreferrer" className="social-icon">
                    <Github className="icon" />
                  </a>
                  <a href="https://wa.me/62895346053848" target="_blank" rel="noopener noreferrer" className="social-icon">
                    <Whatsapp className="icon" />
                  </a>
                  <a href="https://instagram.com/jhonnvnbb" target="_blank" rel="noopener noreferrer" className="social-icon">
                    <Instagram className="icon" />
                  </a>
                </div>
                
                <HashLink 
                  smooth 
                  to='#connect' 
                  className="contact-btn"
                  onClick={() => setMobileOpen(false)}
                >
                  <span>Contact Me</span>
                </HashLink>
              </div>
            </Navbar.Collapse>
          </div>
        </Container>
      </Navbar>
      <ScrollToTopButton />
    </Router>
  );
};

export const ScrollToTopButton = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 300) {
        setVisible(true);
      } else {
        setVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <button 
      className={`scroll-to-top ${visible ? 'show' : ''}`}
      onClick={scrollToTop}
      aria-label="Scroll to top"
    >
      <ArrowUp className="arrow-icon" />
    </button>
  );
};