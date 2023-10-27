import React from "react";
import styles from "./about.module.css"; // Adjust the path as needed

export default function AboutUs() {
  return (
    <>
    <br/><div className={styles.aboutUsContainer} id="about-us">
      <h2>About Our Store</h2><br/>
      <p>
      Welcome to <b><i>Sneaky</i></b>, your one-stop destination for the latest and greatest in footwear fashion. We're more than just a shoe store; we're a community of passionate sneakerheads dedicated to bringing you the best in style, comfort, and quality.
      </p>
    </div><br/>
    <div className={styles.aboutUsContainer} id="about-us">
    <h3>Why Choose Us?</h3><br/>
    <p>
    <h5>Unrivaled Selection:</h5> We take pride in offering a vast and diverse range of footwear. From sneakers to boots, running shoes to casual wear, you'll find it all in one place.
    </p><p>
    <h5>Quality Assurance:</h5> We're committed to providing only the highest-quality products. Each shoe is carefully selected for its craftsmanship, durability, and style.
    </p><p>
    <h5>User-Friendly Experience:</h5> Shopping on our website is a breeze. Our intuitive interface makes it easy to browse, search, and find your perfect pair. With detailed product descriptions and high-resolution images, you'll know exactly what you're getting.
    </p><p>
    <h5>Secure Checkout:</h5> Your security is our priority. We use top-notch encryption to ensure your personal and payment information is safe and sound.
    </p><p>
    <h5>Fast Shipping:</h5> We know you can't wait to lace up those new kicks. That's why we offer fast and reliable shipping options to get your order to you as soon as possible.
    </p><p>
    <h5>Dedicated Customer Support:</h5> Have questions or need assistance? Our friendly customer support team is here to help. We're just a message or phone call away.    
    </p>
  </div><br/>
  <div className={styles.aboutUsContainer} id="about-us">
    <h3>How It Works</h3><br/>
    <p>
    Shopping at <b><i>Sneaky</i></b> is as easy as 1-2-3:
    </p><p>
    <h5>Browse:</h5> Explore our vast selection of sneakers. Use our search and filter options to find the perfect pair based on your style, brand preference, or size    
    </p><p>
    <h5>Add to Cart:</h5> Once you've found the sneakers you love, simply click "Add to Cart." You can review your selections in your shopping cart before proceeding to checkout.
    </p><p>
    <h5>Checkout:</h5> Complete your purchase by providing your shipping and payment information. We'll handle the rest, ensuring your sneakers are delivered to your doorstep promptly.
    </p>
  </div><br/>
  <div className={styles.aboutUsContainer} id="about-us">
      <h3>Join Our Community</h3><br/>
      <p>
      We invite you to join our community of sneaker enthusiasts. Follow us on social media for the latest updates, releases, and exclusive offers. Sign up for our newsletter to stay in the loop.
      </p>
      <p>
      Thank you for choosing <b><i>Sneaky</i></b> as your go-to destination for sneakers. We look forward to helping you find the perfect pair that suits your style and personality.
      </p>
      <p>
      Happy shopping!
      </p>
    </div><br/>
  </>
  );
}
