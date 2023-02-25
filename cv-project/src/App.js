import React, { Component } from 'react';
import GeneralInfo from './components/GeneralInfo/GenInfo';

function App() {
  return (
    <div className="app">
      <div className="cv-container"></div>
      <div className="gen-info">
        <GeneralInfo />
      </div>
    </div>
  );
}

export default App;
