import React from "react";

import Header from "../components/Header";
import Main from "../components/main";
import About from "../components/About";
import Experiences from "../components/Experiences";
import Skills from "../components/Skills";
import Projects from "../components/Projects.jsx";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import Preloader from "../components/Preloader";
import ScrollToTopButton from "../components/scrollToTop";

function Home() {
  return (
    <div className="index-page">
      <Header />
      <main className="main">
        <Main />
        <About />
        <Experiences />
        <Skills />
        <Projects />
        <Contact />
      </main>
      <ScrollToTopButton />
      <Footer />
      <Preloader />
    </div>
  );
}

export default Home;
