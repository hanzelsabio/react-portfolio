import React, { useEffect } from 'react';

const Header = () => {
  useEffect(() => {
    // Scrollspy functionality to track active link as you scroll
    const navmenulinks = document.querySelectorAll('.navmenu a');
    const sections = document.querySelectorAll('section'); // Assuming each section has the <section> tag

    // Function to highlight the active link based on scroll position
    const onScroll = () => {
      let currentSection = null;

      sections.forEach((section) => {
        const rect = section.getBoundingClientRect();
        if (rect.top <= window.innerHeight / 2 && rect.bottom >= window.innerHeight / 2) {
          currentSection = section;
        }
      });

      navmenulinks.forEach((link) => {
        link.classList.remove('active');
        if (currentSection && link.getAttribute('href').slice(1) === currentSection.id) {
          link.classList.add('active');
        }
      });
    };

    window.addEventListener('scroll', onScroll);

    // Cleanup listener when component is unmounted
    return () => {
      window.removeEventListener('scroll', onScroll);
    };
  }, []);

  const handleToggleClick = () => {
    document.body.classList.toggle('mobile-nav-active');

    const toggleBtn = document.querySelector('.mobile-nav-toggle');
    if (toggleBtn) {
      toggleBtn.classList.toggle('bi-list');
      toggleBtn.classList.toggle('bi-x');
    }
  };

  return (
    <header id="header" className="header d-flex align-items-center sticky-top">
      <div className="container-fluid container-xl position-relative d-flex align-items-center justify-content-between">
        <a href="/" className="logo d-flex align-items-center">
          <img src="/assets/hz-logo-1.png" alt="Logo" />
        </a>
        <nav id="navmenu" className="navmenu">
          <ul>
            <li><a href="#" className="active">Home</a></li>
            <li><a href="#about_me">About Me</a></li>
            <li><a href="#experiences">Experiences</a></li>
            <li><a href="#skills">Skills</a></li>
            <li><a href="#certificates">Certificates</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
          <i
            className="mobile-nav-toggle d-md-none bi bi-list"
            onClick={handleToggleClick}
            role="button"
            tabIndex={0}
            aria-label="Toggle navigation"
          ></i>
        </nav>
      </div>
    </header>
  );
};

export default Header;