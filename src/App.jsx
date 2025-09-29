import Navbar from './component/Navbar.jsx';
import Hero from './component/Hero';
import About from './component/About';
import Project from './component/Project';
import Contact from './component/Contact';
import Footer from './component/Footer';
import Particle from './component/Particles';
import Cursor from './component/Cursor';
// import ChatBot from "./component/ChatBot.jsx";

function App() {
  return (
    <div className="relative overflow-hidden">
      {/* Particle Background */}
      <div className="absolute inset-0 -z-10">
        <Particle />
      </div>

      {/* Floating ChatBot */}
      <div className="fixed bottom-18 right-2 z-50">
        {/* <ChatBot /> */}
      </div>
      <Cursor />
      <Navbar />
      <Hero />
      <About />
      <Project />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
