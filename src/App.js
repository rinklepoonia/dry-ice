import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.js';
import Hero from './components/Hero';
import Future from './components/Future';
import Understanding from './components/Understanding';
import WhyChoose from './components/WhyChoose';
import BehindSection from './components/BehindSection';

function App() {
  return (
    <div>
      <Hero />
      <Future />
      <Understanding />
      <WhyChoose />
      <BehindSection/>
    </div>
  );
}

export default App;
