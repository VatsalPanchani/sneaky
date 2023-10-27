import React from "react";
import { Link } from "react-router-dom";
import "./category.css"; // Import the CSS file
import nikeLogo from "../logo/nike_logo.png";
import adidasLogo from "../logo/adidas_logo.png";
import converseLogo from "../logo/converse_logo.png";
import new_balanceLogo from "../logo/new-blance_logo.png";
import filaLogo from "../logo/fila_logo.png";
import us_poloLogo from "../logo/us-polo_logo.png";
import { FaArrowAltCircleRight } from "react-icons/fa"; // Import the right arrow icon

export default function CategoryShoes({ brand }) {
  return (
    <>
    <div className="category-shoes-container">
      {/* Brand Logo */}
      <div className="nike-logo">
        <img src={nikeLogo} alt="Nike Logo" />
      </div>
      {/* Shoes Row with Scroll */}
      <div className="shoes-row">
        <div className="shoe-item1">
          <img
            src="/images/nike/air-jordan-1-mid-se-shoes-lCj12k-removebg-preview.png"
            alt="Shoe 1"
          />
        </div>
        <div className="shoe-item1">
          <img
            src="/images/nike/air-jordan-6-retro-shoes-4m3b9d-removebg-preview.png"
            alt="Shoe 2"
          />
        </div>
        <div className="shoe-item1">
          <img
            src="/images/nike/air-jordan-3-retro-shoes-TJf2lm-removebg-preview.png"
            alt="Shoe 3"
          />
        </div>
        <div className="shoe-item1">
          <img
            src="/images/nike/air-jordan-13-retro-shoes-xcK6vg__1_-removebg-preview.png"
            alt="Shoe 4"
          />
        </div>

        {/* Add more shoe items here */}
      </div>

      {/* "See More" Button */}
      <Link to='/nike' className="see-more-button">
          <FaArrowAltCircleRight className="arrow-icon" />
        </Link>
    </div>
    <div className="category-shoes-container">
      {/* Brand Logo */}
      <div className="adidas-logo">
        <img src={adidasLogo} alt="Adidas Logo" />
      </div>
      {/* Shoes Row with Scroll */}
      <div className="shoes-row">
        <div className="shoe-item2">
          <img
            src="/images/adidas/1.png"
            alt="Shoe 1"
          />
        </div>
        <div className="shoe-item2">
          <img
            src="/images/adidas/8.png"
            alt="Shoe 2"
          />
        </div>
        <div className="shoe-item2">
          <img
            src="/images/adidas/7.png"
            alt="Shoe 3"
          />
        </div>
        <div className="shoe-item2">
          <img
            src="/images/adidas/3.png"
            alt="Shoe 4"
          />
        </div>

        {/* Add more shoe items here */}
      </div>

      {/* "See More" Button */}
      <Link to='/adidas' className="see-more-button">
          <FaArrowAltCircleRight className="arrow-icon" />
        </Link>
    </div>
    <div className="category-shoes-container">
      {/* Brand Logo */}
      <div className="converse-logo">
        <img src={converseLogo} alt="Converse Logo" />
      </div>
      {/* Shoes Row with Scroll */}
      <div className="shoes-row">
        <div className="shoe-item3">
          <img
            src="/images/converse/172895c_01-removebg-preview.png"
            alt="Shoe 1"
          />
        </div>
        <div className="shoe-item3">
          <img
            src="/images/converse/a06198c_01-removebg-preview.png"
            alt="Shoe 2"
          />
        </div>
        <div className="shoe-item3">
          <img
            src="/images/converse/a03471c_01-removebg-preview.png"
            alt="Shoe 3"
          />
        </div>
        <div className="shoe-item3">
          <img
            src="/images/converse/a04144c_a_107x1-removebg-preview.png"
            alt="Shoe 4"
          />
        </div>

        {/* Add more shoe items here */}
      </div>

      {/* "See More" Button */}
      <Link to='/converse' className="see-more-button">
          <FaArrowAltCircleRight className="arrow-icon" />
        </Link>
    </div>
    <div className="category-shoes-container">
      {/* Brand Logo */}
      <div className="new_balance-logo">
        <img src={new_balanceLogo} alt="New Balance Logo" />
      </div>
      {/* Shoes Row with Scroll */}
      <div className="shoes-row">
        <div className="shoe-item4">
          <img
            src="/images/new balance/bb480lba_nb_02_i-removebg-preview.png"
            alt="Shoe 1"
          />
        </div>
        <div className="shoe-item4">
          <img
            src="/images/new balance/ml610tak_nb_02_i-removebg-preview.png"
            alt="Shoe 2"
          />
        </div>
        <div className="shoe-item4">
          <img
            src="/images/new balance/nm306wav_nb_02_i-removebg-preview.png"
            alt="Shoe 3"
          />
        </div>
        <div className="shoe-item4">
          <img
            src="/images/new balance/u9060hsd_nb_02_i-removebg-preview.png"
            alt="Shoe 4"
          />
        </div>

        {/* Add more shoe items here */}
      </div>

      {/* "See More" Button */}
      <Link to='/new_balance' className="see-more-button">
          <FaArrowAltCircleRight className="arrow-icon" />
        </Link>
    </div>
    <div className="category-shoes-container">
      {/* Brand Logo */}
      <div className="fila-logo">
        <img src={filaLogo} alt="Fila Logo" />
      </div>
      {/* Shoes Row with Scroll */}
      <div className="shoes-row">
        <div className="shoe-item6">
          <img
            src="/images/fila/1.png"
            alt="Shoe 1"
          />
        </div>
        <div className="shoe-item6">
          <img
            src="/images/fila/11.png"
            alt="Shoe 2"
          />
        </div>
        <div className="shoe-item6">
          <img
            src="/images/fila/9.png"
            alt="Shoe 3"
          />
        </div>
        <div className="shoe-item6">
          <img
            src="/images/fila/6.png"
            alt="Shoe 4"
          />
        </div>

        {/* Add more shoe items here */}
      </div>

      {/* "See More" Button */}
      <Link to='/fila' className="see-more-button">
          <FaArrowAltCircleRight className="arrow-icon" />
        </Link>
    </div>
    <div className="category-shoes-container">
      {/* Brand Logo */}
      <div className="us_polo-logo">
        <img src={us_poloLogo} alt="US Polo Logo" />
      </div>
      {/* Shoes Row with Scroll */}
      <div className="shoes-row">
        <div className="shoe-item7">
          <img
            src="/images/us polo/3_0b3c4527-d59c-44b5-8710-a29284a7c0e5_1080x-removebg-preview.png"
            alt="Shoe 1"
          />
        </div>
        <div className="shoe-item7">
          <img
            src="/images/us polo/4_b56f25a1-0e99-48c1-a34a-8ad029c7ce60_1080x-removebg-preview.png"
            alt="Shoe 2"
          />
        </div>
        <div className="shoe-item7">
          <img
            src="/images/us polo/4_f7b8d58a-3076-4793-9532-38d8ed239e81_1080x-removebg-preview.png"
            alt="Shoe 3"
          />
        </div>
        <div className="shoe-item7">
          <img
            src="/images/us polo/4_fe2af34d-4d4c-4b93-98db-7d6d6cfb98e3_1080x-removebg-preview.png"
            alt="Shoe 4"
          />
        </div>

        {/* Add more shoe items here */}
      </div>

      {/* "See More" Button */}
      <Link to='/us_polo' className="see-more-button">
          <FaArrowAltCircleRight className="arrow-icon" />
        </Link>
    </div>
    </>
  );
}
