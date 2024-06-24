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
      description: "PHP & Bootstrap",
      imgUrl: projImg1,
    },
    {
      title: "First Zovy Watch",
      description: "PHP & Bootstrap",
      imgUrl: projImg2,
    },
    {
      title: "Aston Hotel",
      description: "PHP & Bootstrap",
      imgUrl: projImg3,
    },
    {
      title: "First Portfolio",
      description: "React JS & Bootstrap",
      imgUrl: projImg4,
    },
    {
      title: "Second Portfolio",
      description: "Html, CSS & Bootstrap",
      imgUrl: projImg5,
    },
    {
      title: "Second Zovy Watch",
      description: "PHP & Bootstrap",
      imgUrl: projImg6,
    },
    {
      title: "Adiksi Coffee",
      description: "HTML, CSS & JS",
      imgUrl: projImg7,
    },
    {
      title: "Quick Job",
      description: "Figma",
      imgUrl: projImg8,
    },
    {
      title: "Ngodrink",
      description: "Kotlin",
      imgUrl: projImg9,
    },
  ];

  const websiteProjects = projects.filter(project => project.title !== "Quick Job" && project.title !== "Ngodrink");
  const mobileProjects = projects.filter(project => project.title === "Quick Job" || project.title === "Ngodrink");

  return (
  <section className="project" id="projects">
    <Container>
      <Row>
        <Col size={12}>
          <TrackVisibility>
            {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn": ""}>
                <div className="heading-container">
                  <h2><span className="me-1">P</span>rojects</h2>
                  <div className="background-text">PROJECTS</div>
                </div>
                <div className="vertical-line my-5"></div>
                <Tab.Container id="projects-tabs" defaultActiveKey="first">
                  <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                    <Nav.Item>
                      <Nav.Link eventKey="first">All</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="second">Website</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="third">Mobile</Nav.Link>
                    </Nav.Item>
                  </Nav>
                  <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                    <Tab.Pane eventKey="first">
                      <Row>
                        {
                          projects.map((project, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...project}
                              />
                            )
                          })
                        }
                      </Row>
                    </Tab.Pane>
                    <Tab.Pane eventKey="second">
                      <Row>
                        {
                          websiteProjects.map((project, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...project}
                              />
                            )
                          })
                        }
                      </Row>
                    </Tab.Pane>
                    <Tab.Pane eventKey="third">
                      <Row>
                        {
                          mobileProjects.map((project, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...project}
                              />
                            )
                          })
                        }
                      </Row>
                    </Tab.Pane>
                  </Tab.Content>
                </Tab.Container>
              </div>
            }
          </TrackVisibility>
        </Col>
      </Row>
    </Container>
  </section>
  )
}
