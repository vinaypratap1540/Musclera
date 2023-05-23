import React from "react";
import { Link } from "react-router-dom";
import Image from "../images/main_header.png";

const MainHeader = () => {
  return (
    <header className="main__header">
      <div className="container main__header-container">
        <div className="main__header-left">
          <h4>100DaysOfWorkout</h4>
          <h1>Find your strength and push your limits with us.</h1>
          <p>
            Get fit and feel great with us. Our gym offers top-notch equipment,
            experienced trainers, and a welcoming community to help you reach
            your fitness goals. Join us today and start your journey to a
            healthier, happier you.
          </p>
          <Link to="/plans" className="btn lg">
            Get Started
          </Link>
        </div>
        <div className="main__header-right">
          <div className="main__header-circle"></div>
          <div className="main__header-image">
            <img src={Image} alt="MainHeaderImage" />
          </div>
        </div>
      </div>
    </header>
  );
};

export default MainHeader;
