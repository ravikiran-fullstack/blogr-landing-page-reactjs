import React from "react";
import Header from "./header/Header";

const Home = () => {
  return (
    <div className="home">
      <Header />
      <div className="homeBody">
        <div className="homeHeading">
          <h1>A modern publishing platform</h1>
        </div>
        <div>
          <p className="homeSubCaption">
            Grow your audience and build your online brand
          </p>
        </div>
        <div className="homeBtns">
          <div className="startBtn">Start for Free</div>
          <div className="learnMoreBtn">Learn More</div>
        </div>
      </div>
    </div>
  );
};

export default Home;
