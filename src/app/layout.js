"use client"
import "./globals.css";
import { useState } from 'react';
import { Instagram, Github, Linkedin, House, BriefcaseBusiness, User, Phone } from "lucide-react";

export default function RootLayout({ children }) {

    const [isOpen, setIsOpen] = useState(false);
    const [isLoaded, setIsLoaded] = useState(false);
    function toggleMenu() {
        setIsOpen(!isOpen);
        setIsLoaded(true);
    }

    return (
        <html lang="en">

            <body>

                <header>
                    <div className="name">
                        <p className="primaryText">Bruno Ríos</p>
                        <p className="secondaryText">Soriano Uruguay</p>
                    </div>


                    <div className="menu">
                        <a className="primaryTextLink" href="/">Home<House className="icon" color="white" size={20} /></a>
                        <a className="primaryTextLink" href="/projects">Projects<BriefcaseBusiness className="icon" color="white" size={20} /></a>
                        <a className="primaryTextLink" href="/about">About Me<User className="icon" color="white" size={20} /></a>
                        <a className="primaryTextLink" href="/contact">Contact Me<Phone className="icon" color="white" size={20} /></a>
                    </div>


                    <div className="hamburgerMenu">
                        <button className="hamburgerButton primaryText" tabIndex='1' onClick={() => toggleMenu()}>{`${!isOpen ? 'Menu' : 'Close'}`}</button>
                    </div>
                    <div className={`${isOpen ? 'hamburgerDisplay' : 'hamburgerHidden'} ${!isLoaded ? 'preload' : ''} hamburgerMenu`}>
                        <a className="primaryTextLink" href="/" tabIndex={`${!isOpen ? '-1' : '2'}`}>Home<House className="icon" color="white" size={20} /></a>
                        <a className="primaryTextLink" href="/projects" tabIndex={`${!isOpen ? '-1' : '3'}`}>Proyects<BriefcaseBusiness className="icon" color="white" size={20} /></a>
                        <a className="primaryTextLink" href="/about" tabIndex={`${!isOpen ? '-1' : '4'}`}>About Me<User className="icon" color="white" size={20} /></a>
                        <a className="primaryTextLink" href="/contact" tabIndex={`${!isOpen ? '-1' : '5'}`}>Contact Me<Phone className="icon" color="white" size={20} /></a>
                    </div>
                </header>

                {children}

                <footer>
                    <div className="menuSocials">
                        <a className="primaryTextLink" href="https://github.com/BrunoRiosAU" target="_blank">Github<Github className="icon" color="white" size={20} /></a>
                        <a className="primaryTextLink" href="https://www.linkedin.com/in/bruno-r%C3%ADos-3b0998235/" target="_blank">Linkedin<Linkedin className="icon" color="white" size={20} /></a>
                        <a className="primaryTextLink" href="https://www.instagram.com/brunorios04/" target="_blank">Instagram<Instagram className="icon" color="white" size={20} /></a>
                    </div>
                    <div className="designedBy">
                        <p className="primaryText">Develop and designed by Bruno Ríos</p>
                    </div>
                </footer>
            </body>
        </html>
    );
}


