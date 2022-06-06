import React from "react";

const Footer = () => {
  var today = new Date();
  var currentYear = today.getFullYear();

  return (
    <div className="footer-container">
      <div className="footer-info">
        <p>© Website made on React {currentYear}</p>
      </div>
    </div>
  );
};

export default Footer;
