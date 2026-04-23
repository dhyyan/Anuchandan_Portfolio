import React from 'react';
import { Code2, MonitorPlay } from 'lucide-react';
import './About.css';

const About = () => {
  return (
    <section id="about" className="section about-section">
      <div className="container">
        
        <div className="section-label" style={{ justifyContent: 'flex-end', flexDirection: 'row-reverse' }}>
          ABOUT ME
        </div>
        
        <div className="about-header">
          <h2 className="about-title">
            FRONTEND <span>focused</span> &<br />
            FULL STACK DEVELOPER
          </h2>
          <p className="about-subtitle">
            Building scalable web applications with modern technologies and practical solutions.
          </p>
        </div>
        
        <div className="about-bento-grid">
          {/* Card 1: Technical Focus */}
          <div className="bento-card focus-card animate-fade-in">
            <div className="card-bg-icon">
              <Code2 size={120} strokeWidth={1} />
            </div>
            <h3 className="bento-heading">My Technical Focus</h3>
            <p className="bento-text">
              I'm a full-stack developer passionate about building intuitive and efficient web applications using the <strong>MERN stack</strong>. I focus on creating scalable, secure, and high-performing solutions.
            </p>
            <p className="bento-text">
              I follow strong architectural practices including Clean Architecture, MVC, and SOLID principles. I have implemented secure authentication, database indexing, and interactive UI features.
            </p>
            <p className="bento-text">
              I continuously improve my skills through platforms like LeetCode and believe in user-centric design to deliver impactful digital solutions.
            </p>
            
            <div className="tech-tags">
              <span className="tech-tag">React</span>
              <span className="tech-tag">Node.js</span>
              <span className="tech-tag">MongoDB</span>
              <span className="tech-tag">Express</span>
              <span className="tech-tag">Tailwind</span>
            </div>
          </div>
          
          {/* Card 2: Projects Completed */}
          <div className="bento-card projects-stat-card animate-fade-in" style={{ animationDelay: '0.2s' }}>
            <div className="stat-circle">
              <MonitorPlay size={32} />
            </div>
            <h3 className="stat-number">5+</h3>
            <p className="stat-label">PROJECTS COMPLETED</p>
          </div>
        </div>
        
      </div>
    </section>
  );
};

export default About;
