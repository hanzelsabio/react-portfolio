import React, { useEffect } from 'react';

const Preloader = () => {
  useEffect(() => {
    const preloader = document.querySelector('#preloader');
    const handleLoad = () => {
      if (preloader) {
        preloader.remove();
      }
    };

    window.addEventListener('load', handleLoad);

    return () => {
      window.removeEventListener('load', handleLoad);
    };
  }, []);

  return (
    <>
      <div id="preloader"></div>
    </>
  );
};

export default Preloader;