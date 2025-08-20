"use client"
import "./globals.css";
import { useState, useEffect } from 'react';
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
                        <p className="primary-text">Bruno Ríos</p>
                        <p className="secondary-text">Soriano Uruguay</p>
                    </div>


                    <div className="menu">
                        <a className="primary-text-link" href="http://localhost:3000/">Home<House className="icon" color="white" size={20} /></a>
                        <a className="primary-text-link" href="http://localhost:3000/">Projects<BriefcaseBusiness className="icon" color="white" size={20} /></a>
                        <a className="primary-text-link" href="http://localhost:3000/">About Me<User className="icon" color="white" size={20} /></a>
                        <a className="primary-text-link" href="http://localhost:3000/">Contact Me<Phone className="icon" color="white" size={20} /></a>
                    </div>


                    <div className="hamburger-menu">
                        <button className="hamburger-button primary-text" tabIndex='1' onClick={() => toggleMenu()}>{`${!isOpen ? 'Menu' : 'Close'}`}</button>
                    </div>
                    <div className={`${isOpen ? 'hamburger-display' : 'hamburger-hidden'} ${!isLoaded ? 'preload' : ''} hamburger-menu`}>
                        <a className="primary-text-link" href="http://localhost:3000/" tabIndex={`${!isOpen ? '-1' : '2'}`}>Home<House className="icon" color="white" size={20} /></a>
                        <a className="primary-text-link" href="http://localhost:3000/" tabIndex={`${!isOpen ? '-1' : '3'}`}>Proyects<BriefcaseBusiness className="icon" color="white" size={20} /></a>
                        <a className="primary-text-link" href="http://localhost:3000/" tabIndex={`${!isOpen ? '-1' : '4'}`}>About Me<User className="icon" color="white" size={20} /></a>
                        <a className="primary-text-link" href="http://localhost:3000/" tabIndex={`${!isOpen ? '-1' : '5'}`}>Contact Me<Phone className="icon" color="white" size={20} /></a>
                    </div>
                </header>

                {children}

                <footer>
                    <div className="menu-socials">
                        <a className="primary-text-link" href="https://github.com/BrunoRiosAU" target="_blank">Github<Github className="icon" color="white" size={20} /></a>
                        <a className="primary-text-link" href="https://www.linkedin.com/in/bruno-r%C3%ADos-3b0998235/" target="_blank">Linkedin<Linkedin className="icon" color="white" size={20} /></a>
                        <a className="primary-text-link" href="https://www.instagram.com/brunorios04/" target="_blank">Instagram<Instagram className="icon" color="white" size={20} /></a>
                    </div>
                    <div className="designed-by">
                        <p className="primary-text">Develop and designed by Bruno Ríos</p>
                    </div>
                </footer>
            </body>
        </html>
    );
}


