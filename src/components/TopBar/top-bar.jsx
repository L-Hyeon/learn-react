import React from "react";
import "./top-bar.css";
import { Link } from "react-router-dom";

function TopBar() {
  return (
    <div id="TopBar">
      <div id="logo">LOGO</div>
      <div id="menu">
        <button>
          <Link to="/" style={{ textDecoration: "none" }}>
            Home
          </Link>
        </button>
        <button>
          <Link to="/about" style={{ textDecoration: "none" }}>
            About
          </Link>
        </button>
        <button>
          <Link to="/contact" style={{ textDecoration: "none" }}>
            Contact
          </Link>
        </button>
      </div>
    </div>
  );
}

export default TopBar;
