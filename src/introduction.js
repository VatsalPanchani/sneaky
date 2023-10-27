import React, { useEffect } from "react";
import video from "./logo/Sneaky_1.mp4"; // Adjust the path as needed
import "./introduction.css"; // Create this CSS file for styling

const Introduction = ({ onIntroductionEnd }) => {
  useEffect(() => {
    const videoElement = document.getElementById("intro-video");
    videoElement.addEventListener("ended", onIntroductionEnd);
    return () => {
      videoElement.removeEventListener("ended", onIntroductionEnd);
    };
  }, [onIntroductionEnd]);

  return (
    <div className="introduction">
      <video id="intro-video" autoPlay muted>
        <source src={video} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  );
};

export default Introduction;
