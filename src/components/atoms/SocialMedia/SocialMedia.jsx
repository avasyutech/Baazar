import React from "react";
import "./SocialMedia.scss";

const SocialMedia = () => {
  return (
    <div className="social-media">
      <a href="#" className="twitter">
        <img src='http://localhost:9000/icons/Twitter.svg' alt="twitter" />
      </a>
      <a href="#" className="facebook">
        <img src='http://localhost:9000/icons/Facebook.svg' alt="facebook" />
      </a>
      <a href="#" className="pinterest">
        <img src='http://localhost:9000/icons/Pinterest.svg' alt="pinterest" />
      </a>
      <a href="#" className="reddit">
        <img src='http://localhost:9000/icons/Reddit.svg' alt="reddit" />
      </a>
      <a href="#" className="youtube">
        <img src='http://localhost:9000/icons/Youtube.svg' alt="youtube" />
      </a>
      <a href="#" className="instagram">
        <img src='http://localhost:9000/icons/Instagram.svg' alt="instagram" />
      </a>
    </div>
  );
};

export default SocialMedia;
