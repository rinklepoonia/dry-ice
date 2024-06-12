import React, { useEffect } from 'react'
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.js';
import Hero from './components/Hero';
import Future from './components/Future';
import Understanding from './components/Understanding';
import WhyChoose from './components/WhyChoose';
import BehindSection from './components/BehindSection';
import LetsTalk from './components/LetsTalk';
import Quote from './components/Quote';
import Meeteam from './components/Meeteam';
import StillUnsure from './components/StillUnsure';
import Blast from './components/Blast';
import LatestSection from './components/LatestSection';
import MailBox from './components/MailBox';
import FooterSection from './components/FooterSection';
import Map from './components/Map'
import Slider from './components/Slider';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Aos from 'aos';

function App() {
  useEffect(() => {
    AOS.init(
      {
        // once: true,
        duration: 1200,
      }
    );
    Aos.refresh()
  });
  return (
    <div className='overflow-hidden'>
      <Hero />
      <Future />
      <Understanding />
      <WhyChoose />
      <BehindSection />
      <LetsTalk />
      <Quote />
      <Slider />
      <Meeteam />
      <StillUnsure />
      <Blast />
      <LatestSection />
      <MailBox />
      <Map />
      <FooterSection />

    </div>
  );
}

export default App;
