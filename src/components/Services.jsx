import React from 'react';
import { portfolioData } from '../data/portfolioData';
import { MonitorSmartphone, Code2, Globe, Palette } from 'lucide-react';
import './Services.css';

const serviceIcons = {
  "Frontend Development": <MonitorSmartphone size={32} />,
  "Backend APIs": <Code2 size={32} />,
  "Full-Stack Web Apps": <Globe size={32} />,
  "UI/UX Implementation": <Palette size={32} />
};

const Services = () => {
  const { services } = portfolioData;

  return (
    <section id="services" className="section services-section">
      <div className="container">
        <h2 className="section-title">What I Do</h2>
        
        <div className="services-grid">
          {services.map((service, index) => (
            <div key={index} className="glass-panel service-card" style={{ animationDelay: `${index * 0.15}s` }}>
              <div className="service-icon">
                {serviceIcons[service.title] || <Globe size={32} />}
              </div>
              <h3 className="service-title">{service.title}</h3>
              <p className="service-description">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
