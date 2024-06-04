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
    </div>
  );
}

export default App;
