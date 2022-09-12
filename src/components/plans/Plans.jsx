import React from "react";
import "./Plans.css";
import { plansData } from "../../data/plansData";
import whiteTick from '../../assets/whiteTick.png'

const Plans = () => {
  return (
    <div className="plans-container" id="plans">
    <div className="blur plans-blur-1"></div>
    <div className="blur plans-blur-2"></div>
      <div className="plans-header">
        <span className="stroke-text">READY TO START</span>
        <span>YOUR JOURNEY</span>
        <span className="stroke-text">NOW WITHUS</span>
      </div>
      <div className="plans-categories">
        {plansData.map((plan, i) => (
          <div className="plan" >
            {plan.icon}
            <span>{plan.name}</span>
            <span>{`$ ${plan.price}`}</span>
            <div className="features">
              {plan.features.map((item, i) => (
                <div className="feature" key={i}>
                  <img src={whiteTick} alt="" />
                  <span key={i}>{item}</span>
                </div>
              ))}
            </div>
            <div>
                <span>{`See more   benefites ->`}</span>
            </div>
            <button className="btn">Join now</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Plans;