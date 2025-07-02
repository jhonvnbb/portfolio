import React, { useState } from "react";
import profileImg from "../assets/img/profile.png";
import TrackVisibility from "react-on-screen";
import "animate.css";

export const Profile = () => {
  const tools = [
    { name: "HTML5", icon: "devicon-html5-plain", color: "#E44D26" },
    { name: "CSS3", icon: "devicon-css3-plain", color: "#2965F1" },
    { name: "JavaScript", icon: "devicon-javascript-plain", color: "#F0DB4F" },
    { name: "React", icon: "devicon-react-original", color: "#61DAFB" },
    { name: "Laravel", icon: "devicon-laravel-plain", color: "#FF2D20" },
    { name: "PHP", icon: "devicon-php-plain", color: "#777BB4" },
    { name: "MySQL", icon: "devicon-mysql-plain", color: "#4479A1" },
    { name: "Python", icon: "devicon-python-plain", color: "#3776AB" },
    { name: "Java", icon: "devicon-java-plain", color: "#007396" },
    { name: "Figma", icon: "devicon-figma-plain", color: "#F24E1E" },
    { name: "Git", icon: "devicon-git-plain", color: "#F05032" },
    { name: "VS Code", icon: "devicon-vscode-plain", color: "#007ACC" },
  ];

  const [hasAnimated, setHasAnimated] = useState({
    profileImg: false,
    heading: false,
    paragraph1: false,
    paragraph2: false,
    tools: false,
    map: false,
  });

  const handleVisibility = (key, isVisible) => {
    if (isVisible && !hasAnimated[key]) {
      setHasAnimated((prev) => ({ ...prev, [key]: true }));
    }
  };

  return (
    <section id="about" className="about-section">
      <div className="profile-container">
        {/* Decorative elements */}
        <div className="code-bg-elements">
          <div className="code-line line-1"></div>
          <div className="code-line line-2"></div>
          <div className="code-line line-3"></div>
          <div className="code-bracket"></div>
        </div>

        <div className="profile-grid">
          {/* Profile Image Column */}
          <div className="profile-image-col">
            <TrackVisibility partialVisibility onChange={(isVisible) => handleVisibility("profileImg", isVisible)}>
              {({ isVisible }) => (
                <div className={`image-wrapper ${hasAnimated.profileImg ? "animate__animated animate__fadeIn" : ""}`}>
                  <div className="tech-circle react"></div>
                  <div className="tech-circle js"></div>
                  <div className="tech-circle html"></div>
                  <img src={profileImg} className="profile-image" alt="Profile" />
                  <div className="image-border"></div>
                </div>
              )}
            </TrackVisibility>
          </div>

          {/* Profile Content Column */}
          <div className="profile-content-col">
            <div className="heading-container">
              <TrackVisibility partialVisibility onChange={(isVisible) => handleVisibility("heading", isVisible)}>
                {({ isVisible }) => (
                  <h2 className={`section-heading ${hasAnimated.heading ? "animate__animated animate__fadeInDown" : ""}`}>
                    <span className="code-tag">&lt;</span>
                    <span className="highlight-letter">WhoAmI</span>
                    <span className="code-tag">/&gt;</span>
                    <div className="heading-underline"></div>
                  </h2>
                )}
              </TrackVisibility>
              <div className="background-text">// ABOUT_ME</div>
            </div>

            <TrackVisibility partialVisibility onChange={(isVisible) => handleVisibility("paragraph1", isVisible)}>
              {({ isVisible }) => (
                <p className={`bio-text ${hasAnimated.paragraph1 ? "animate__animated animate__fadeInRight" : ""}`}>
                  <span className="code-comment">// Introduction</span>
                  Hello I'm <span className="text-highlight">Jhonvnbb</span>, a passionate web development student at the University of Lampung. With <span className="text-highlight">3 years</span> of hands-on experience, I specialize in building high-performance, responsive web applications using modern technologies.
                </p>
              )}
            </TrackVisibility>

            <TrackVisibility partialVisibility onChange={(isVisible) => handleVisibility("paragraph2", isVisible)}>
              {({ isVisible }) => (
                <p className={`bio-text ${hasAnimated.paragraph2 ? "animate__animated animate__fadeInRight" : ""}`}>
                  <span className="code-comment">// Beyond coding</span>
                  When I'm not coding, you'll find me <span className="text-highlight">playing guitar</span>, competing in <span className="text-highlight">football matches</span>, or exploring the latest in <span className="text-highlight">tech literature</span>. I believe in maintaining a balance between professional growth and personal passions.
                </p>
              )}
            </TrackVisibility>
          </div>
        </div>

        {/* Tools and Map Section */}
        <div className="tools-map-section">
          <div className="section-divider">
            <span className="divider-line"></span>
            <span className="divider-icon">{`{ ... }`}</span>
            <span className="divider-line"></span>
          </div>

          <div className="tools-map-grid">
            {/* Tools Section */}
            <div className="tools-col">
              <TrackVisibility partialVisibility onChange={(isVisible) => handleVisibility("tools", isVisible)}>
                {({ isVisible }) => (
                  <div className={`tools-container ${hasAnimated.tools ? "animate__animated animate__fadeInLeft" : ""}`}>
                    <h3 className="tools-heading">
                      <span className="code-tag">const</span> myStack <span className="code-tag">=</span> [
                    </h3>
                    <div className="tools-grid">
                      {tools.map((tool, index) => (
                        <div 
                          key={index} 
                          className="tool-item"
                          style={{ '--tool-color': tool.color }}
                        >
                          <i className={`${tool.icon} colored`}></i>
                          <span>{tool.name}</span>
                          <div className="tool-hover-effect"></div>
                        </div>
                      ))}
                    </div>
                    <h3 className="tools-heading">];</h3>
                  </div>
                )}
              </TrackVisibility>
            </div>

            {/* Map Section */}
            <div className="map-col">
              <TrackVisibility partialVisibility onChange={(isVisible) => handleVisibility("map", isVisible)}>
                {({ isVisible }) => (
                  <div className={`map-container ${hasAnimated.map ? "animate__animated animate__fadeInRight" : ""}`}>
                    <h3 className="map-heading">
                      <span className="code-tag">location</span>.<span className="code-property">coordinates</span>
                    </h3>
                    <div className="map-wrapper">
                      <iframe
                        src="https://maps.google.com/maps?q=University%20of%20Lampung&t=&z=13&ie=UTF8&iwloc=&output=embed"
                        className="location-map"
                        title="University Location"
                      ></iframe>
                      <div className="map-overlay"></div>
                    </div>
                  </div>
                )}
              </TrackVisibility>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};