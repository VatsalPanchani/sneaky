// Main Page (e.g., FilaPage.js)
import React from 'react';
import FilaProducts from './fila'; // Import the FilaProducts component

const pageHeadingStyle = {
    textAlign: 'center', // Center text within the h1 element
    backgroundColor: '#ffffff', // Set background color to white
  };

  const FilaPage = () => {
  return (
    <div>
      <h1 style={pageHeadingStyle}>Fila Products</h1>
      <FilaProducts /> {/* Include the FilaProducts component */}
    </div>
  );
};

export default FilaPage;
