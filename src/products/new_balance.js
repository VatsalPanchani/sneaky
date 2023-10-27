import React, { useState, useEffect } from 'react';
import './new_balance.css'; // Import the CSS file for styling

const New_balanceProducts = ({ addToCart }) => {
  const [shoes, setShoes] = useState([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch('/Shoes.json'); // Adjust the path as needed
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const jsonData = await response.json();
        setShoes(jsonData.new_balanceShoes);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    }

    fetchData();
  }, []);

  const handleAddToCart = (shoe) => {
    // Here, you should add the selected item to the cart
    addToCart(shoe);
    console.log(shoe);
  };

  return (
    <div className="new_balance-products-container">
      {shoes.map((shoe, index) => (
        <div className="new_balance-product" key={index}>
          <img className="zoom-image" src={shoe.url} alt={shoe.name} />
          <h3>{shoe.name}</h3>
          <p>{shoe.price}</p>
          <button className="add-to-cart-button" onClick={() => handleAddToCart(shoe)}>
            Add to Cart
          </button>
        </div>
      ))}
    </div>
  );
};

export default New_balanceProducts;
