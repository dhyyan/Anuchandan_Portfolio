import React from 'react';
import { portfolioData } from '../data/portfolioData';
import { GraduationCap, Award } from 'lucide-react';
import './Education.css';

const Education = () => {
  const { education, certifications } = portfolioData;

  return (
    <section id="education" className="section education-section">
      <div className="container">
        <div className="education-grid">
          {/* Education Column */}
          <div className="education-column solo-column">
            <h2 className="section-title">Education</h2>
            <div className="education-list">
              {education.map((edu, index) => (
                <div key={index} className="glass-panel edu-card animate-fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
                  <div className="edu-icon-wrapper">
                    <GraduationCap size={28} />
                  </div>
                  <h3 className="edu-institution">{edu.institution}</h3>
                  <h4 className="edu-degree">{edu.degree}</h4>
                  <span className="edu-duration">{edu.duration}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
