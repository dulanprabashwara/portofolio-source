import React from "react";
import image2 from "../../assets/assets/image2.png";
import image5 from "../../assets/assets/image5.png";
import profile_img from "../../assets/assets/profile_img.svg";
import "./Hero.css";
import AnchorLink from "react-anchor-link-smooth-scroll";
const Hero = () => {
  return (
    <div id="home" className="hero">
      <img src={image5} alt="" />
      <h1>
        <span>I'm Dulan Prabashwara,</span> undergraduated IT student in Sri
        Lanka
      </h1>
      <p>
        {" "}
        I'm looking to master full-stack development and currently studying at
        university of moratuwa{" "}
      </p>
      <div className="hero-action">
        <div className="hero-connect">
          <AnchorLink className="anchor-link" offset={50} href="#contact">
            Connect with me{" "}
          </AnchorLink>
        </div>
        <div className="hero-resume">My resume</div>
      </div>
    </div>
  );
};
export default Hero;
