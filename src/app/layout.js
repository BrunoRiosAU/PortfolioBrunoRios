"use client"
import "./globals.css";
import { useState } from 'react';
import { Instagram, Github, Linkedin } from "lucide-react";

export default function RootLayout({ children }) {

    const [isOpen, setIsOpen] = useState(false);
    const [isLoaded, setIsLoaded] = useState(false);
    function toggleMenu(){
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
                    <div className="hamburgermenu">
                        <button className={`${!isOpen ? 'showhamburgerbutton' : 'hidehamburgerbutton'} hamburgerbutton primary-text`} onClick={() => toggleMenu()}>Menu</button>

                    </div>
                    <div className="menu">
                        <p className="primary-text">Home</p>
                        <p className="primary-text">Proyects</p>
                        <p className="primary-text">About Me</p>
                        <p className="primary-text">Contact Me</p>
                    </div>

                    <div className={`${isOpen ? 'hamburgerdisplay' : 'hamburgerhidden'} ${!isLoaded ? 'preload' : ''} hamburgermenu`}>
                        <button className={`${isOpen ? 'showhamburgerbutton' : 'hidehamburgerbutton'} hamburgerbutton primary-text`} onClick={() => toggleMenu()}>Close</button>
                        <p className="primary-text">Home</p>
                        <p className="primary-text">Proyects</p>
                        <p className="primary-text">About Me</p>
                        <p className="primary-text">Contact Me</p>
                    </div>
                    

                </header>


                {children}

                <footer>
                    <div className="menusocials">
                        <p className="primary-text">Github<Github className="icon" color="white" size={20}/></p>
                        <p className="primary-text">Linkedin<Linkedin className="icon" color="white" size={20}/></p>
                        <p className="primary-text">Instagram<Instagram className="icon" color="white" size={20}/></p>
                    </div>
                    <div className="designedby">
                        <p className="primary-text">Develop and designed by Bruno Ríos</p>
                    </div>

                </footer>
            </body>
        </html>
    );
}

