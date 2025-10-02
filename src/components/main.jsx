import React, { useEffect, useRef } from 'react';
import Typed from 'typed.js';
import AOS from 'aos';
import 'aos/dist/aos.css';

import '../App.css';

function Home() {
  const typedRef = useRef(null);
  const typedInstance = useRef(null);

  useEffect(() => {
    const typedStrings = typedRef.current.getAttribute('data-typed-items').split(',');

    typedInstance.current = new Typed(typedRef.current, {
      strings: typedStrings,
      loop: true,
      typeSpeed: 100,
      backSpeed: 50,
      backDelay: 2000
    });

    return () => {
      // Destroy the Typed instance on unmounting to prevent memory leaks
      if (typedInstance.current) {
        typedInstance.current.destroy();
      }
    };
  }, []);

  useEffect(() => {
    AOS.init({
      duration: 1000, // animation duration in ms
      once: true, // whether animation should happen only once
    });
  }, []);

  return (
    <section id="hero" className="hero section dark-background">
      <img
        src="/assets/web-bg-home.png"
        alt="Background"
        data-aos="fade-in"
      />

      <div
        className="container d-flex flex-column align-items-center justify-content-center text-center"
        data-aos="fade-up"
        data-aos-delay="100"
      >
        <br /><br /><br /><br /><br /><br /><br />
        <h2>
          <span
            ref={typedRef}
            className="typed"
            data-typed-items="Hello World!, I am Hanzel Sabio"
          ></span>
        </h2>
      </div>
    </section>
  );
};

export default Home;