import React, { useState } from 'react';
import './cart.css'; // Import the CSS file
import { FaTrash } from 'react-icons/fa';

export default function Cart({ cart, onRemove }) {
    const handleRemoveClick = (itemId) => {
        // Call the onRemove function with the ID of the item to be removed
        onRemove(itemId);
      };
    return (
      <div className="cart-container">
        {cart.map((shoe) => (
          <div className="cart-item" key={shoe.id}>
            <img className="cart-item-image" src={shoe.url} alt={shoe.name} />
            <h3 className="cart-item-name">{shoe.name}</h3>
            <p className="cart-item-price">{shoe.price}</p>
            <button className="remove-button" onClick={() => handleRemoveClick(shoe.id)}>
              <FaTrash /> {/* React Font Awesome icon */}
            </button>
          </div>
        ))}
      </div>
    );
  }