// Main Page (e.g., ConversePage.js)
import React from 'react';
import ConverseProducts from './converse'; // Import the ConverseProducts component

const pageHeadingStyle = {
    textAlign: 'center', // Center text within the h1 element
    backgroundColor: '#ffffff', // Set background color to white
  };

  const ConversePage = () => {
  return (
    <div>
      <h1 style={pageHeadingStyle}>Converse Products</h1>
      <ConverseProducts /> {/* Include the ConverseProducts component */}
    </div>
  );
};

export default ConversePage;
