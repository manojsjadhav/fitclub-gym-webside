import React from "react";
import "./Header.css";
import Logo from "../../assets/logo.png";
import Bars from "../../assets/bars.png";
import { useState } from "react";
import { Link } from "react-scroll";

const Header = () => {
  const mobile = window.innerWidth <= 768 ? true : false;
  const [menuopen, setMenuOpen] = useState(false);
  return (
    <div className="header">
      <img src={Logo} alt="" className="logo" />
      {menuopen === false && mobile === true ? (
        <div
          style={{
            backgroundColor: "var(--appColor)",
            padding: "0.5rem",
            borderRadius: "5px",
          }}
          onClick={() => setMenuOpen(true)}
        >
          <img
            src={Bars}
            alt=""
            style={{ width: "1.5rem", height: "1.5rem" }}
          />
        </div>
      ) : (
        <ul className="header-menu">
          {/* <li onClick={() => setMenuOpen(false)}>Home</li>
          <li onClick={() => setMenuOpen(false)}>Programs</li>
          <li onClick={() => setMenuOpen(false)}>Why us</li>
          <li onClick={() => setMenuOpen(false)}>Plans</li> */}
          <li>
            <Link
              to="home"
              span={true}
              smooth={true}
              onClick={() => setMenuOpen(false)}
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              to="programs"
              span={true}
              smooth={true}
              onClick={() => setMenuOpen(false)}
            >
              Programs
            </Link>
          </li>
          <li>
            <Link
              to="reasons"
              span={true}
              smooth={true}
              onClick={() => setMenuOpen(false)}
            >
              Why us
            </Link>
          </li>
          <li>
            <Link
              to="plans"
              span={true}
              smooth={true}
              onClick={() => setMenuOpen(false)}
            >
              Plans
            </Link>
          </li>
          <li>
            <Link
              to="testimonials"
              span={true}
              smooth={true}
              onClick={() => setMenuOpen(false)}
            >
              Testimonials
            </Link>
          </li>
        </ul>
      )}
    </div>
  );
};

export default Header;
