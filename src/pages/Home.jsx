import React from 'react';

import Header from '../components/Header';
import Main from '../components/main';
import About from '../components/About';
import Experiences from '../components/Experiences';
import Skills from '../components/Skills';
import Certificates from '../components/Certificates';
import Contact from '../components/Contact';
import Footer from '../components/Footer';
import Preloader from '../components/Preloader';

function Home() {
  return (
    <div className="index-page">
      <Header />
      <main className="main">
        <Main />
        <About />
        <Experiences />
        <Skills />
        <Certificates />
        <Contact />
      </main>
      <a href="#" id="scroll-top" className="scroll-top d-flex align-items-center justify-content-center">
        <i className="bi bi-arrow-up-short"></i>
      </a>
      <Footer />
      <Preloader />
    </div>
  );
};

export default Home;