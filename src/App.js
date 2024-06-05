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

function App() {
  return (
    <div>
      <Hero />
      <Future />
      <Understanding />
      <WhyChoose />
      <BehindSection />
      <LetsTalk />
      <Quote />
      <Meeteam />
      <StillUnsure />
      <Blast />
      <LatestSection />
      <MailBox />
    </div>
  );
}

export default App;
