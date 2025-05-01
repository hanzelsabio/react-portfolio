import { useEffect } from 'react';

function Preloader() {
  useEffect(() => {
    const handleLoad = () => {
      const preloader = document.getElementById('preloader');
      if (preloader) {
        preloader.remove();
      }
    };

    window.addEventListener('load', handleLoad);

    // Cleanup event listener on unmount
    return () => {
      window.removeEventListener('load', handleLoad);
    };
  }, []);

  return (
    <>
      <div id="preloader"></div>
    </>
  );
}

export default Preloader;