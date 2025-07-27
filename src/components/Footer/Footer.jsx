import React from "react";
import "./Footer.css";

function Footer() {
  return (
    <footer className="footer-container">
      &copy; {new Date().getFullYear()} SKYPIEA. All rights reserved.
    </footer>
  );
}

export default Footer;
