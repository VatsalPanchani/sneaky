import React from "react";
import styles from "./home.css";
//import { Routes, Route } from "react-router-dom";
import Slider from "../home page/slider"; // Create a Slider component for changing pictures
import Catagory from "../home page/category";
// import ProductCategory from "./ProductCategory"; // Create a ProductCategory component for category-wise products
// import FeaturedProducts from "./FeaturedProducts"; // Create a FeaturedProducts component for featured items
// import Testimonials from "./Testimonials"; // Create a Testimonials component for customer reviews
// import Newsletter from "./Newsletter"; // Create a Newsletter component for email subscription

export default function Home() {
  return (
    <div className={styles.page}>
      <Slider />
      <Catagory />
      {/* <Routes>
        <Route path="/nike" element={<Nike />} />
        <Route path="/adidas" element={<Adidas />} />
      </Routes>

      <Catagory brand="nike" />
      <Catagory brand="adidas" /> */}
      {/* <ProductCategory />
      <FeaturedProducts />
      <Testimonials />
      <Newsletter /> */}
    </div>
  );
}
