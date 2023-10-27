// Main Page (e.g., AdidasPage.js)
import React from 'react';
import AdidasProducts from './adidas'; // Import the AdidasProducts component

const pageHeadingStyle = {
    textAlign: 'center', // Center text within the h1 element
    backgroundColor: '#ffffff', // Set background color to white
  };

  const AdidasPage = () => {
  return (
    <div>
      <h1 style={pageHeadingStyle}>Adidas Products</h1>
      <AdidasProducts /> {/* Include the AdidasProducts component */}
    </div>
  );
};

export default AdidasPage;
