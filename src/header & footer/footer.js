import React from "react";
import { Link } from "react-router-dom";
import "./footer.css"; // Adjust the path as needed

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <h4>Know more</h4>
            <p>
            <Link to="/about-us">About Us</Link>
              {/* ... other links ... */}
            </p>
            <p>Return policy</p>
            <p>FAQs</p>
            <p>Customer support / Help</p>
          </div>
          <div className="col-md-6">
            <h4>Contact Us</h4>
            <p>
              <i className="fa fa-envelope"></i> Email: sneaky10@gmail.com
            </p>
            <p>
              <i className="fa fa-phone"></i> Phone: (+91) 79846-49158
            </p>
            <p>
              <a href="https://www.instagram.com/your_instagram">
                <i className="fa fa-instagram"></i> Instagram: @Sneaky_fashion
              </a>
            </p>
            <p>
              <a href="https://www.facebook.com/your_facebook">
                <i className="fa fa-facebook"></i> Facebook: /Sneaky_fashion
              </a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
