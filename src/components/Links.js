import React from "react";
import { Link } from "react-router-dom";

const Links = () => {
    return (
      <div className="header-wrapper">
        <div className="header-logo">
          <h1>Top of the Line</h1>
        </div>
        <div className="links">
            <div className="home-btn">
              <Link to="/">Home</Link>
            </div>

            <div className="about-btn">
              <Link to="/about">About</Link>
            </div>

            <div className="add-btn">
              <Link to="/addCar">Create Post</Link>
            </div>
        </div>
      </div>
    );
  };

export default Links;