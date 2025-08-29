import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";

import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div
      className="bg-cover bg-center bg-fixed min-h-screen text-gray-800"
      style={{ backgroundImage: "url('/tech.jpg')" }}
    >
      <Navbar />
      <Hero />
      <About />
      <Skills />
      
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}
