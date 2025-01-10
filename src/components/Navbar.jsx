import "./Navbar.css";
import logo1 from "../assets/assets/logo1.webp";
import { useRef, useState } from "react";
import logo4 from "../assets/assets/logo4.png";
import underline from "../assets/assets/nav_underline.svg";
import React from "react";
import { HashLink as Link } from "react-router-hash-link";
import AnchorLink from "react-anchor-link-smooth-scroll";
import menu_open from "../assets/assets/menu_open.svg";
import menu_close from "../assets/assets/menu_close.svg";
import { MdHeight } from "react-icons/md";

const Navbar = () => {
  const [menu, setMenu] = useState("");
  const menuRef = useRef();
  const openmenu = () => {
    menuRef.current.style.right = "0";
  };
  const closemenu = () => {
    menuRef.current.style.right = "-350px";
  };
  return (
    <div className="navbar">
      <img src={logo4} alt="logo" width="109" height="80" />
      <img
        src={menu_open}
        onClick={openmenu}
        alt="menu open"
        className="nav-mob-open"
      />

      <ul ref={menuRef} className="nav-menu">
        <img src={menu_close} onClick={closemenu} className="nav-mob-close" />
        <li>
          <AnchorLink className="anchor-link" href="#home">
            <p
              onClick={() => {
                setMenu("home");
              }}
            >
              Home
            </p>
          </AnchorLink>
          {menu === "home" ? <img src={underline} alt="underline" /> : null}
        </li>
        <li>
          <AnchorLink className="anchor-link" offset={50} href="#about">
            <p
              onClick={() => {
                setMenu("about");
              }}
            >
              About Me
            </p>
          </AnchorLink>
          {menu === "about" ? <img src={underline} alt="underline" /> : null}
        </li>
        <li>
          <AnchorLink className="anchor-link" offset={50} href="#services">
            <p
              onClick={() => {
                setMenu("services");
              }}
            >
              Services
            </p>
          </AnchorLink>
          {menu === "services" ? <img src={underline} alt="underline" /> : null}
        </li>
        <li>
          <AnchorLink className="anchor-link" offset={50} href="#work">
            <p
              onClick={() => {
                setMenu("work");
              }}
            >
              Portfolio
            </p>
          </AnchorLink>
          {menu === "work" ? <img src={underline} alt="underline" /> : null}
        </li>
        <li>
          <AnchorLink className="anchor-link" offset={50} href="#contact">
            <p
              onClick={() => {
                setMenu("contact");
              }}
            >
              Contact
            </p>
          </AnchorLink>
          {menu === "contact" ? <img src={underline} alt="underline" /> : null}
        </li>
      </ul>
      <div className="nav-connect">
        <AnchorLink className="anchor-link" offset={50} href="#contact">
          connect with me
        </AnchorLink>
      </div>
    </div>
  );
};

export default Navbar;
