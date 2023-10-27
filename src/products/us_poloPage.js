// Main Page (e.g., Us_poloPage.js)
import React from 'react';
import Us_poloProducts from './us_polo'; // Import the Us_poloProducts component

const pageHeadingStyle = {
    textAlign: 'center', // Center text within the h1 element
    backgroundColor: '#ffffff', // Set background color to white
  };

  const Us_poloPage = () => {
  return (
    <div>
      <h1 style={pageHeadingStyle}>Us_polo Products</h1>
      <Us_poloProducts /> {/* Include the Us_poloProducts component */}
    </div>
  );
};

export default Us_poloPage;
