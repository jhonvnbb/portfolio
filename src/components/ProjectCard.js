// ProjectCard.js
import { useState } from "react";

export const ProjectCard = ({ title, description, imgUrl, tags, github, demo, delay, isVisible }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div 
      className={`code-project-card ${isVisible ? "animate__animated animate__fadeInUp" : ""}`}
      style={{ animationDelay: `${delay}s` }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="project-browser">
        <div className="browser-dots">
          <span className="dot red"></span>
          <span className="dot yellow"></span>
          <span className="dot green"></span>
        </div>
        <div className="browser-url">https://{title.toLowerCase().replace(/\s+/g, '')}.dev</div>
      </div>
      
      <div className="project-image-container">
        <img 
          src={imgUrl} 
          alt={title} 
          className={`project-screenshot ${isHovered ? "zoom-effect" : ""}`} 
        />
        <div className={`project-hover ${isHovered ? "hover-visible" : ""}`}>
          <div className="hover-content">
            <h3 className="project-title">
              <span className="title-bracket">{"{"}</span>
              {title}
              <span className="title-bracket">{"}"}</span>
            </h3>
            <p className="project-desc">{description}</p>
            
            <div className="project-tech">
              {tags.map((tag, i) => (
                <span key={i} className="tech-tag">
                  <i className={`devicon-${tag.toLowerCase().replace(/\s+/g, '-')}-plain`}></i> {tag}
                </span>
              ))}
            </div>
            
            <div className="project-links">
              {github && (
                <a href={github} className="code-link" target="_blank" rel="noopener noreferrer">
                  <i className="devicon-github-plain"></i> Source
                  <span className="link-arrow">→</span>
                </a>
              )}
              {demo && (
                <a href={demo} className="code-link" target="_blank" rel="noopener noreferrer">
                  <i className="devicon-chrome-plain"></i> Live Demo
                  <span className="link-arrow">→</span>
                </a>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};