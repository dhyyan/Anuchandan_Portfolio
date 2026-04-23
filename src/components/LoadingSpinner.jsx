import React from 'react';
import './LoadingSpinner.css';

const LoadingSpinner = () => {
  return (
    <div className="loader-wrapper">
      <div className="loader-content">
        <div className="spinner-ring">
          <div className="spinner-dot"></div>
          <div className="spinner-dot"></div>
          <div className="spinner-dot"></div>
        </div>
        <div className="loader-text">
          <span className="char">L</span>
          <span className="char">O</span>
          <span className="char">A</span>
          <span className="char">D</span>
          <span className="char">I</span>
          <span className="char">N</span>
          <span className="char">G</span>
        </div>
      </div>
    </div>
  );
};

export default LoadingSpinner;
