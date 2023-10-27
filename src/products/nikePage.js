// Main Page (e.g., NikePage.js)
import React from 'react';
import Nike from './nike'; // Import the NikeProducts component

const pageHeadingStyle = {
    textAlign: 'center', // Center text within the h1 element
    backgroundColor: '#ffffff', // Set background color to white
  };

  const NikePage = () => {
  return (
    <div>
      <h1 style={pageHeadingStyle}>Nike Products</h1>
      <Nike /> {/* Include the NikeProducts component */}
    </div>
  );
};

export default NikePage;