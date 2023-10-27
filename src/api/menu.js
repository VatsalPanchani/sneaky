// Menu.js
import React from 'react';
import { Link } from 'react-router-dom';
import styles from './menu.module.css';

const Menu = ({ show, onClose }) => {
  return (
    <div className={`${styles.menu} ${show ? styles.open : ''}`}>
      <div className={styles.menuContent}>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about-us">About Us</Link></li>
          <li><Link to="/login">Login</Link></li>
          <li><Link to="/product">Products</Link></li>
          <ol style={{ listStyleType: 'circle' }}>
            <li><Link to="/nike">Nike Sneakers</Link></li>
            <li><Link to="/adidas">Adidas Sneakers</Link></li>
            <li><Link to="/converse">Converse Sneakers</Link></li>
            <li><Link to="/new_balance">New Balance Sneakers</Link></li>
            <li><Link to="/fila">Fila Sneakers</Link></li>
            <li><Link to="/us_polo">US Polo Sneakers</Link></li>
          </ol>{/* Add more links as needed */}
        </ul>
        <button className={styles.closeButton} onClick={onClose}>
          Close
        </button>
      </div>
    </div>
  );
};

export default Menu;
