"use client";

import { useState } from "react";
import { Instagram, Github, Linkedin, House, BriefcaseBusiness, User, Phone } from "lucide-react";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);

  function toggleMenu() {
    setIsOpen(!isOpen);
    setIsLoaded(true);
  }

  return (
    <header>
      <div className="name">
        <p className="primaryText">Bruno Ríos</p>
        <p className="secondaryText">Soriano Uruguay</p>
      </div>

      <div className="menu">
        <a className="primaryTextLink" href="/">
          Home<House className="icon" color="white" size={20} />
        </a>
        <a className="primaryTextLink" href="/projects">
          Projects<BriefcaseBusiness className="icon" color="white" size={20} />
        </a>
        <a className="primaryTextLink" href="/about">
          About Me<User className="icon" color="white" size={20} />
        </a>
        <a className="primaryTextLink" href="/contact">
          Contact Me<Phone className="icon" color="white" size={20} />
        </a>
      </div>

      <div className="hamburgerMenu">
        <button
          className="hamburgerButton primaryText"
          tabIndex="1"
          onClick={toggleMenu}
        >
          {isOpen ? "Close" : "Menu"}
        </button>
      </div>

      <div
        className={`${isOpen ? "hamburgerDisplay" : "hamburgerHidden"} ${
          !isLoaded ? "preload" : ""
        } hamburgerMenu`}
      >
        <a
          className="primaryTextLink"
          href="/"
          tabIndex={!isOpen ? "-1" : "2"}
        >
          Home<House className="icon" color="white" size={20} />
        </a>
        <a
          className="primaryTextLink"
          href="/projects"
          tabIndex={!isOpen ? "-1" : "3"}
        >
          Projects<BriefcaseBusiness className="icon" color="white" size={20} />
        </a>
        <a
          className="primaryTextLink"
          href="/about"
          tabIndex={!isOpen ? "-1" : "4"}
        >
          About Me<User className="icon" color="white" size={20} />
        </a>
        <a
          className="primaryTextLink"
          href="/contact"
          tabIndex={!isOpen ? "-1" : "5"}
        >
          Contact Me<Phone className="icon" color="white" size={20} />
        </a>
      </div>
    </header>
  );
}