import React from "react";
import "./Join.css";

const Join = () => {
  return (
    <div className="join">
      <div className="left-j">
        <hr />
        <div>
          <span className="stroke-text">READY TO </span>
          <span>LEVEL UP</span>
        </div>
        <div>
          <span>YOUR BODY</span>
          <span className="stroke-text">WHIT US?</span>
        </div>
      </div>
      <div className="right-j">
        <form action="" className="email-container">
          <input
            type="email"
            name="user-email"
            placeholder="Enter your Email Address her"
          />
          <button className="btn btn-j">Join now</button>
        </form>
      </div>
    </div>
  );
};

export default Join;
