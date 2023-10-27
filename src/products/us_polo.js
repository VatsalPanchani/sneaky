import React, { useState, useEffect } from 'react';
import './us_polo.css'; // Import the CSS file for styling

const Us_poloProducts = ({ addToCart }) => {
  const [shoes, setShoes] = useState([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch('/Shoes.json'); // Adjust the path as needed
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const jsonData = await response.json();
        setShoes(jsonData.us_poloShoes);
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
    <div className="us_polo-products-container">
      {shoes.map((shoe, index) => (
        <div className="us_polo-product" key={index}>
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

export default Us_poloProducts;
