import React from 'react'
import Navbar from './Navbar';
import Hero from './Hero';
import MidSection from './MidSection'
import Inspiration from './Inspiration';
import VidSection from './VidSection';


const App = () => {
  return (
    <div className=''>
      <Navbar />
      <Hero />
      <Inspiration />
      <MidSection />
      <VidSection />
    </div>
  );
}

export default App;

