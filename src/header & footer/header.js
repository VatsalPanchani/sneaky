import React, { useState } from "react";
import { FaUser, FaBars, FaShoppingBasket, FaSearch, FaHome } from "react-icons/fa";
import logo from "../logo/Sneaky (2).png"; // Adjust the path as needed
import Menu from '../api/menu'; // Import the Dropdown component
import {Link} from 'react-router-dom' 
import './header.css'
const Header = ({ handleLoginFormToggle }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary con">
      <div className="container-fluid">
        <a className="navbar-brand">
          <img src={logo} alt="Navbar Logo" className="navbar-logo" href="/" />
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            {/* ... your existing navigation items ... */}
          </ul>
          <div className="d-flex align-items-center">
            <button className="btn btn-outline-primary me-2">
              <FaHome /> <Link to="/">Home</Link>
            </button>
            <div className="d-flex align-items-center">
              <button className="btn btn-outline-primary me-2" onClick={toggleMenu}>
                <FaBars/>Menu
              </button>
              <Menu show={isMenuOpen} onClose={toggleMenu} />
            </div>
            <button className="btn btn-outline-primary me-2">
              <FaShoppingBasket /> <Link to="/cart">Cart</Link>
            </button>
          </div>
          <div className="d-flex align-items-center ms-auto">
            <button className="btn btn-outline-primary me-2">
              <FaSearch /> Search
            </button>
            <button
              className="btn btn-outline-primary"
              onClick={handleLoginFormToggle}
            >
            <Link to="/login">Login</Link>
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Header;