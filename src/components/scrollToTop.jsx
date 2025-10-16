import React, { useState, useEffect } from "react";

function ScrollToTopButton() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleScrollTop = () => {
      setIsVisible(window.scrollY > 100);
    };

    // Show/hide on scroll or load
    window.addEventListener("scroll", toggleScrollTop);
    window.addEventListener("load", toggleScrollTop);

    // Clean up listeners
    return () => {
      window.removeEventListener("scroll", toggleScrollTop);
      window.removeEventListener("load", toggleScrollTop);
    };
  }, []);

  const scrollToTop = (e) => {
    e.preventDefault();
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <a
      href="#"
      onClick={scrollToTop}
      id="scroll-top"
      className={`scroll-top d-flex align-items-center justify-content-center ${
        isVisible ? "active" : ""
      }`}
    >
      <i className="bi bi-arrow-up-short"></i>
    </a>
  );
}

export default ScrollToTopButton;
