import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./sections/Hero";
import About from "./sections/About";
import Skills from "./sections/Skills";
import ExperienceSection from "./sections/Experience";
import Projects from "./sections/Projects";
import ArchitectureShowcase from "./sections/ArchitectureShowcase";
import CertificationsEducation from "./sections/CertificationsEducation";
import Contact from "./sections/Contact";
import Footer from "./components/Footer";
import "./App.css";

const App: React.FC = () => {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <ExperienceSection />
        <Projects />
        <ArchitectureShowcase />
        <CertificationsEducation />
        <Contact />
      </main>
      <Footer />
    </>
  );
};

export default App;
