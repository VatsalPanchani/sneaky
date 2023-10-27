// Main Page (e.g., New_balancePage.js)
import React from 'react';
import New_balanceProducts from './new_balance'; // Import the New_balanceProducts component

const pageHeadingStyle = {
    textAlign: 'center', // Center text within the h1 element
    backgroundColor: '#ffffff', // Set background color to white
  };

  const New_balancePage = () => {
  return (
    <div>
      <h1 style={pageHeadingStyle}>New_balance Products</h1>
      <New_balanceProducts /> {/* Include the New_balanceProducts component */}
    </div>
  );
};

export default New_balancePage;
