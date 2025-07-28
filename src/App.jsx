import Navbar from './component/Navbar.jsx';
import Hero from './component/Hero';
import About from './component/About';
import Project from './component/Project';
import Contact from './component/Contact';
import Footer from './component/Footer';
import Particle from './component/Particles';

function App() {
  return (
    <div className="relative overflow-hidden">
      {/* Particle Background */}
      <Particle />

      {/* Navbar */}
      <Navbar />

      {/* Main Sections */}
      <Hero />
      <About />
      <Project />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
