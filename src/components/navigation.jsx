import React, { useState } from "react";

export const Navigation = (props) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleMenuToggle = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleLinkClick = () => {
    setIsMenuOpen(false); // Close the menu when a link is clicked
  };

  return (
    <nav id="menu" className={`navbar navbar-default navbar-fixed-top ${isMenuOpen ? 'open' : ''}`}>
      <div className="container">
        <div className="navbar-header">
          <button
            type="button"
            className="navbar-toggle collapsed"
            onClick={handleMenuToggle}
          >
            <span className="sr-only">Toggle navigation</span>
            <span className="icon-bar"></span>
            <span className="icon-bar"></span>
            <span className="icon-bar"></span>
          </button>
          <a className="navbar-brand page-scroll" href="#page-top">
            Buzz <span className="nav-title1"> Box</span>.
          </a>{" "}
        </div>

        <div className={`collapse navbar-collapse ${isMenuOpen ? 'in' : ''}`}>
          <ul className="nav navbar-nav navbar-right">
            <li>
              <a href="#about" className="page-scroll" onClick={handleLinkClick}>
                About
              </a>
            </li>
            <li>
              <a href="#services" className="page-scroll" onClick={handleLinkClick}>
                Services
              </a>
            </li>
            <li>
              <a href="#team" className="page-scroll" onClick={handleLinkClick}>
                Team
              </a>
            </li>
            <li>
              <a href="#contact" className="page-scroll" onClick={handleLinkClick}>
                Contact
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};
