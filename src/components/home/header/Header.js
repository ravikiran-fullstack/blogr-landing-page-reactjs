import React, { useState, useEffect, useRef } from "react";
import "./header-style.css";

const Header = () => {
  const dropdownRef = useRef(null);
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenuBar = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const pageClicked = (e) => {
      if (dropdownRef !== null && !dropdownRef.current.contains(e.target)) {
        setIsOpen(!isOpen);
      }
    };

    if (isOpen) {
      window.addEventListener("click", pageClicked);
    }

    return () => {
      window.removeEventListener("click", pageClicked);
    };
  }, [isOpen]);
  return (
    <>
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
      <header>
        <div className="headerMobile">
          <div className="logoMobile">Blogr</div>
          <div className="menu-container">
            <div onClick={toggleMenuBar} className="menu-trigger"></div>
            <nav
              ref={dropdownRef}
              className={`menu ${isOpen ? "active" : "inactive"}`}
            >
              <ul>
                <li>
                  <a href="#product">Product</a>
                </li>
                <li>
                  <a href="#company">Company</a>
                </li>
                <li>
                  <a href="#connect">Connect</a>
                </li>
                <li>
                  <a href="#login">Login</a>
                </li>
                <li>
                  <a href="#signUp">Sign Up</a>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
