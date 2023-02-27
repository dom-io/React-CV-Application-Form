import React, { Component } from 'react';
import Education from './components/Education';
import GeneralInfo from './components/GenInfo';
import SavePage from './components/SaveBtn';
import WorkHistory from './components/WorkHistory';
import './styles.css';

function App() {
  return (
    <div className="app">
      <div className="gen-header">Personal Information</div>
      <div className="gen-info">
        <GeneralInfo />
      </div>
      <div className="edu-header">Education Information</div>
      <div className="edu-info">
        <Education />
      </div>
      <div className="work-header">Work History</div>
      <div className="work-info">
        <WorkHistory />
      </div>
      <div className="cv-container">
        <SavePage />
      </div>
    </div>
  );
}

export default App;
