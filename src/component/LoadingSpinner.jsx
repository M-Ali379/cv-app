import React from 'react';
import './LoadingSpinner.css';

function LoadingSpinner() {
  return (
    <div className="loading-spinner" role="status" aria-label="Loading content">
      <div className="spinner-ring"></div>
      <p className="spinner-text">Loading...</p>
    </div>
  );
}

export default LoadingSpinner;
