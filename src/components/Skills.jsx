import React from 'react';
import { portfolioData } from '../data/portfolioData';
import { Layers, Server, Database, Wrench } from 'lucide-react';
import { 
  FaReact, FaCss3Alt, FaHtml5, FaNodeJs, FaBootstrap, 
  FaGithub, FaFigma, FaNpm, FaServer, FaGitAlt 
} from 'react-icons/fa';
import { 
  SiTailwindcss, SiTypescript, SiJavascript, SiRedux, 
  SiExpress, SiMongodb, SiFirebase, SiPostman 
} from 'react-icons/si';
import './Skills.css';

const getSkillIcon = (skillName) => {
  const name = skillName.toLowerCase();
  if (name.includes('react')) return <FaReact />;
  if (name.includes('tailwind')) return <SiTailwindcss />;
  if (name.includes('javascript') || name === 'js') return <SiJavascript />;
  if (name.includes('css')) return <FaCss3Alt />;
  if (name.includes('html')) return <FaHtml5 />;
  if (name.includes('typescript') || name === 'ts') return <SiTypescript />;
  if (name.includes('redux')) return <SiRedux />;
  if (name.includes('node')) return <FaNodeJs />;
  if (name.includes('express')) return <SiExpress />;
  if (name.includes('api')) return <FaServer />; // for RESTful APIs
  if (name.includes('mongo')) return <SiMongodb />;
  if (name.includes('firebase')) return <SiFirebase />;
  if (name === 'git') return <FaGitAlt />;
  if (name.includes('github')) return <FaGithub />;
  if (name.includes('postman')) return <SiPostman />;
  if (name.includes('figma')) return <FaFigma />;
  if (name.includes('npm')) return <FaNpm />;
  if (name.includes('bootstrap')) return <FaBootstrap />;
  
  // Default dot if no icon found
  return <div className="skill-dot"></div>;
};

const Skills = () => {
  const { technicalSkills } = portfolioData;

  return (
    <section id="skills" className="section arsenal-section">
      <div className="container">
        
        <div className="arsenal-header">
          <h2 className="arsenal-title">Technical <span>Arsenal</span></h2>
          <p className="arsenal-subtitle">
            The tools and technologies I use to bring ideas to life. Always exploring, always learning.
          </p>
        </div>
        
        <div className="arsenal-bento">
          
          {/* Frontend Block */}
          <div className="bento-card arsenal-card frontend-card">
            <div className="card-header">
              <Layers className="text-primary" />
              <h3>Frontend</h3>
            </div>
            <div className="skill-grid-items">
              {technicalSkills.frontend.map(skill => (
                <div className="skill-chip glass-panel" key={skill}>
                  <div className="skill-icon">{getSkillIcon(skill)}</div>
                  <span className="skill-name">{skill}</span>
                </div>
              ))}
              {technicalSkills.languages.filter(l => l.includes('Script')).map(skill => (
                <div className="skill-chip glass-panel" key={skill}>
                  <div className="skill-icon">{getSkillIcon(skill)}</div>
                  <span className="skill-name">{skill}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Backend Block */}
          <div className="bento-card arsenal-card backend-card">
            <div className="card-header">
              <Server className="text-primary" />
              <h3>Backend</h3>
            </div>
            <div className="skill-grid-items">
              {technicalSkills.backend.map(skill => (
                <div className="skill-chip glass-panel" key={skill}>
                  <div className="skill-icon">{getSkillIcon(skill)}</div>
                  <span className="skill-name">{skill}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Database Block */}
          <div className="bento-card arsenal-card database-card">
            <div className="card-header">
              <Database className="text-primary" />
              <h3>Database</h3>
            </div>
            <div className="skill-grid-items">
              {technicalSkills.databases.map(skill => (
                <div className="skill-chip glass-panel" key={skill}>
                  <div className="skill-icon">{getSkillIcon(skill)}</div>
                  <span className="skill-name">{skill}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Tools Block */}
          <div className="bento-card arsenal-card tools-card">
            <div className="card-header">
              <Wrench className="text-primary" />
              <h3>Tools</h3>
            </div>
            <div className="skill-grid-items">
              {technicalSkills.tools.map(skill => (
                <div className="skill-chip glass-panel" key={skill}>
                  <div className="skill-icon">{getSkillIcon(skill)}</div>
                  <span className="skill-name">{skill}</span>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Skills;
