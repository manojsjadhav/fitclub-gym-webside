import React from "react";
import Header from "../header/Header";
import "./Hero.css";
import hero_image from "../../assets/hero_image.png";
import hero_image_back from "../../assets/hero_image_back.png";
import hero_img from "../../assets/hero_img.png";
import heart from "../../assets/heart.png";
import calories from "../../assets/calories.png";

const Hero = () => {
  return (
    <div className="hero" id="home">
    <div className="blur hero-blur"></div>
      <div className="left-h">
        <Header />
        <div className="the-test-ad">
          <div></div>
          <span>THE BEST FITNESS CLUB IN THE TOWN</span>
        </div>
        <div className="hero-text">
          <div>
            <span className="stroke-text">SHAPE </span>
            <span>YOUR</span>
          </div>
          <div>
            <span>IDEAL BODY</span>
          </div>
          <div className="body-text">
            <span className="span">
              In here we will help you to shape and bulid your ideal body and
              live up your life to fullest
            </span>
          </div>
        </div>
        <div className="figure">
          <div className="figure-text">
            <span>+ 140</span>
            <span>EXPERT COACHES</span>
          </div>
          <div className="figure-text">
            <span>+ 978</span>
            <span>MEMBERS JOINED</span>
          </div>
          <div className="figure-text">
            <span>+ 50</span>
            <span>FITNESS PROGRAMS</span>
          </div>
        </div>
        <div className="hero-button">
          <button className="btn">Get Started</button>
          <button className="btn">Learn More</button>
        </div>
      </div>
      <div className="right-h">
        <button className="btn">Join Now</button>
        <div className="heart-rate">
          <img src={heart} alt="" />
          <span>Heart Rate</span>
          <span>116 bpm</span>
        </div>
        <img src={hero_img} alt="" className="hero_image" />
        <img src={hero_image_back} alt="" className="hero_image_back" />
        <div className="calories">
          <img src={calories} alt='' />
          <div className="calories-rate" >
            <samp>Calories Burned</samp>
            <span>220 kcal</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
