import React from "react";
import "./header-style.css";

const Header = () => {
  return (
    <header>
      <ul className="headerDesktop">
        <li className="logo">Blogr</li>
        <li className="productTab">Product</li>
        <li className="companyTab">Company</li>
        <li className="connectTab">Connect</li>
        <li className="loginBtn">Login</li>
        <li className="signUpBtn">Sign Up</li>
      </ul>
    </header>
  );
};

export default Header;
