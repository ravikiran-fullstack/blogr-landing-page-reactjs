import React from "react";
import "./sectionTwo-style.css";
import phoneImage from "../../assets/illustration-phones.svg";
import circle from "../../assets/bg-pattern-circles.svg";

const SectionTwo = () => {
  return (
    <section className="sectionTwo">
      <div className="illustrationPhones">
        {/* <div className="circleBg">
          <img src={circle} alt="circle" />
        </div> */}
        <img src={phoneImage} alt="phoneImage" />
      </div>
      <div className="sectionTwoInfoPara">
        <div className="sectionTwoInfoParaHeading">
          <h2>Introducing an extensible editor</h2>
        </div>
        <div className="sectionTwoInfoParaContent">
          <p>
            Blogr features an exceedingly intuitive interface which lets you
            focus on one thing: creating content. The editor supports management
            of multiple blogs and allows easy manipulation of embeds such as
            images, videos, and Markdown. Extensibility with plugins and themes
            provide easy ways to functionality or change the looks of a blog
          </p>
        </div>
      </div>
    </section>
  );
};

export default SectionTwo;
