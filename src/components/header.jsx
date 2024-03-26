import React from "react";

export const Header = (props) => {
  return (
    <header id="header">
      <div className="intro">
        <div className="overlay">
          <div className="container">
            <div className="title-container">
              <img  alt="logo" className="header-img1" src="img/buzz3.jpeg">
              </img>
              <div className="title2">
              <h1 className="buzz">Buzz</h1>
              <div>
              <h2>Box<span>.</span></h2>
              </div>
              <div className="btn-div">
              <a
                  href="#about"
                  className="btn btn-custom btn-lg page-scroll"
                >
                  Learn More
                </a>
              </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};
