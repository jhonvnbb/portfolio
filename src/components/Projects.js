import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/img/AstonServe.png";
import projImg2 from "../assets/img/Zovy.png";
import projImg3 from "../assets/img/AstonServe1.png";
import projImg4 from "../assets/img/Portfolio.png";
import projImg5 from "../assets/img/Portfolio1.png";
import projImg6 from "../assets/img/Zovy1.png";
import projImg7 from "../assets/img/AdiksiCoffee.png";
import projImg8 from "../assets/img/QuickJob.png";
import projImg9 from "../assets/img/Ngodrink.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Projects = () => {
  const projects = [
    {
      title: "Aston Serve",
      description: "Restaurant Management System",
      imgUrl: projImg1,
      tags: ["PHP", "Bootstrap", "MySQL"],
      github: "#",
      demo: "#",
      category: "web"
    },
    {
      title: "Zovy Watch",
      description: "E-commerce Platform",
      imgUrl: projImg2,
      tags: ["PHP", "Bootstrap", "jQuery"],
      github: "#",
      demo: "#",
      category: "web"
    },
    {
      title: "Aston Hotel",
      description: "Hotel Booking System",
      imgUrl: projImg3,
      tags: ["PHP", "Bootstrap", "JavaScript"],
      github: "#",
      demo: "#",
      category: "web"
    },
    {
      title: "Portfolio v1",
      description: "Personal Portfolio Website",
      imgUrl: projImg4,
      tags: ["React", "Bootstrap", "CSS3"],
      github: "#",
      demo: "#",
      category: "web"
    },
    {
      title: "Portfolio v2",
      description: "Personal Portfolio Website",
      imgUrl: projImg5,
      tags: ["HTML5", "CSS3", "Bootstrap"],
      github: "#",
      demo: "#",
      category: "web"
    },
    {
      title: "Zovy Watch v2",
      description: "E-commerce Platform",
      imgUrl: projImg6,
      tags: ["PHP", "Bootstrap", "JavaScript"],
      github: "#",
      demo: "#",
      category: "web"
    },
    {
      title: "Adiksi Coffee",
      description: "Cafe Landing Page",
      imgUrl: projImg7,
      tags: ["HTML5", "CSS3", "JavaScript"],
      github: "#",
      demo: "#",
      category: "web"
    },
    {
      title: "Quick Job",
      description: "Mobile App Design",
      imgUrl: projImg8,
      tags: ["Figma", "UI/UX", "Prototyping"],
      github: "#",
      demo: "#",
      category: "mobile"
    },
    {
      title: "Ngodrink",
      description: "Beverage Delivery App",
      imgUrl: projImg9,
      tags: ["Kotlin", "Android", "Firebase"],
      github: "#",
      demo: "#",
      category: "mobile"
    }
  ];

  const webProjects = projects.filter(project => project.category === "web");
  const mobileProjects = projects.filter(project => project.category === "mobile");

  return (
    <section className="code-projects" id="projects">
      <div className="code-bg-elements">
        <div className="code-line"></div>
        <div className="code-bracket"></div>
        <div className="floating-icon react-icon">
          <i className="devicon-react-original"></i>
        </div>
        <div className="floating-icon js-icon">
          <i className="devicon-javascript-plain"></i>
        </div>
      </div>
      
      <Container>
        <Row>
          <Col>
            <TrackVisibility partialVisibility>
              {({ isVisible }) => (
                <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                  <div className="section-header">
                    <div className={`terminal-window ${isVisible ? "animate__animated animate__fadeInDown" : ""}`}>
                      <div className="terminal-header">
                        <div className="terminal-dots">
                          <span className="dot red"></span>
                          <span className="dot yellow"></span>
                          <span className="dot green"></span>
                        </div>
                        <span className="terminal-title">projects_terminal</span>
                        <span className="terminal-command">bash</span>
                      </div>
                      <div className="terminal-body">
                        <span className="prompt">visitor@portfolio:~$</span>
                        <span className={`typing-text ${isVisible ? "animate-typing" : ""}`}>
                          ./load_projects.sh --filter=all --theme=dark
                        </span>
                        <span className="cursor">|</span>
                      </div>
                    </div>
                    
                    <h2 className={`code-section-title ${isVisible ? "animate__animated animate__fadeIn" : ""}`}>
                      <span className="code-tag">&lt;</span>
                      <span className="code-title">Featured</span>
                      <span className="code-title-accent">Projects</span>
                      <span className="code-tag">/&gt;</span>
                    </h2>
                    <div className={`code-line-divider ${isVisible ? "animate__animated animate__fadeIn" : ""}`}></div>
                  </div>

                  <Tab.Container id="projects-tabs" defaultActiveKey="all">
                    <Nav variant="pills" className={`code-tabs ${isVisible ? "animate__animated animate__fadeIn" : ""}`}>
                      <Nav.Item>
                        <Nav.Link eventKey="all" className="code-tab">
                          <i className="devicon-github-plain"></i> All Projects
                          <span className="tab-badge">{projects.length}</span>
                        </Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="web" className="code-tab">
                          <i className="devicon-chrome-plain"></i> Web Apps
                          <span className="tab-badge">{webProjects.length}</span>
                        </Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="mobile" className="code-tab">
                          <i className="devicon-android-plain"></i> Mobile Apps
                          <span className="tab-badge">{mobileProjects.length}</span>
                        </Nav.Link>
                      </Nav.Item>
                    </Nav>

                    <Tab.Content>
                      <Tab.Pane eventKey="all">
                        <div className="project-matrix">
                          {projects.map((project, index) => (
                            <ProjectCard 
                              key={index} 
                              {...project}
                              delay={index * 0.1}
                              isVisible={isVisible}
                            />
                          ))}
                        </div>
                      </Tab.Pane>
                      <Tab.Pane eventKey="web">
                        <div className="project-matrix">
                          {webProjects.map((project, index) => (
                            <ProjectCard 
                              key={index} 
                              {...project}
                              delay={index * 0.1}
                              isVisible={isVisible}
                            />
                          ))}
                        </div>
                      </Tab.Pane>
                      <Tab.Pane eventKey="mobile">
                        <div className="project-matrix">
                          {mobileProjects.map((project, index) => (
                            <ProjectCard 
                              key={index} 
                              {...project}
                              delay={index * 0.1}
                              isVisible={isVisible}
                            />
                          ))}
                        </div>
                      </Tab.Pane>
                    </Tab.Content>
                  </Tab.Container>
                </div>
              )}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </section>
  );
};