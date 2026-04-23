import React from 'react';
import { portfolioData } from '../data/portfolioData';
import { Briefcase } from 'lucide-react';
import './Experience.css';

const Experience = () => {
  const { experience } = portfolioData;

  return (
    <section id="experience" className="section experience-section">
      <div className="container">
        <h2 className="section-title">Experience</h2>
        <div className="timeline">
          {experience.map((exp, index) => (
            <div key={index} className="timeline-item glass-panel animate-fade-in">
              <div className="timeline-icon">
                <Briefcase size={20} />
              </div>
              <div className="timeline-content">
                <h3 className="timeline-title">{exp.title}</h3>
                <span className="timeline-duration">{exp.duration}</span>
                <ul className="bullet-list">
                  {exp.bulletPoints.map((point, idx) => (
                    <li key={idx}>{point}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
