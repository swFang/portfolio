
import LandingPage from './components/LandingPage';
import React from 'react';

import './styles.css'
import WorkExperience from './components/WorkExperience';
import Extras from './components/Extras';

function App() {

  return (
    <div className='page-container'>
      <LandingPage />
      <WorkExperience />
      <Extras />
    </div>
  )
}

export default App;