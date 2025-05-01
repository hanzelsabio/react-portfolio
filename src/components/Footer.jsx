import React, { useState, useEffect } from 'react';

function Footer() {
  const [currentYear, setCurrentYear] = useState(new Date().getFullYear());

  // Update the current year automatically when the year changes
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentYear(new Date().getFullYear());
    }, 60000); // Update every minute in case it changes

    return () => clearInterval(interval); // Cleanup when component unmounts
  }, []);

  return (
    <footer>
      <p>Copyright © {currentYear} <span style={{ color: '#df1529' }}>Hanzel Sabio</span></p>
    </footer>
  );
}

export default Footer;