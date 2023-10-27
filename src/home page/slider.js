import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./slider.css";

export default function ImageSlider() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 3000, // Set the speed to 3000ms (3 seconds)
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true, // Enable autoplay
    autoplaySpeed: 3000, // Set the autoplay interval to 3000ms (3 seconds)
  };

  return (
    <div className="slider-container">
      <h2 className="slider-heading">!! New Launches !!</h2>
      <Slider {...settings}>
        <div className="slider-item">
          <img src="/images/nike/air-jordan-1-low-og-shoes-29tsx7-removebg-preview.png" alt="Slide 1" />
          <p className="image-name">Nike Air Jordan 1 Low OG</p>
        </div>
        <div className="slider-item">
          <img src="/images/nike/air-jordan-xxxviii-pf-basketball-shoes-tTRwfF-removebg-preview.png" alt="Slide 2" />
          <p className="image-name">Nike Air Jordan XXXVIII pf Basketball</p>
          </div>
        <div className="slider-item">
          <img src="/images/nike/download-removebg-preview.png" alt="Slide 3" />
          <p className="image-name">Nike Air Force 1 custome</p>
        </div>
      </Slider>
    </div>
  );
}
