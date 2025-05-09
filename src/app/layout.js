"use client"
import "./globals.css";
import { useState } from 'react';

export default function RootLayout({ children }) {

    const [isOpen, setIsOpen] = useState(false);

    let isLoaded = false;

    setTimeout(() => {
        isLoaded = !isLoaded;

    }, 1000);

    return (
        <html lang="en">

            <body>

                <header>
                    <div className="name">
                        <p className="primary-text">Bruno Ríos</p>
                        <p className="secondary-text">Soriano Uruguay</p>
                    </div>
                    <div className="hamburgermenu">
                        <button className={`${!isOpen ? 'showhamburgerbutton' : 'hidehamburgerbutton'} hamburgerbutton primary-text`} onClick={() => setIsOpen(!isOpen)}>Menu</button>

                    </div>
                    <div className="menu">
                        <p className="primary-text">Home</p>
                        <p className="primary-text">Proyects</p>
                        <p className="primary-text">About Me</p>
                        <p className="primary-text">Contact Me</p>
                    </div>

                </header>
                
                <div className={`${isOpen ? 'hamburgerdisplay' : 'hamburgerhidden'} hamburgermenu`}>
                    <button className={`${isOpen ? 'showhamburgerbutton' : 'hidehamburgerbutton'} hamburgerbutton primary-text`} onClick={() => setIsOpen(!isOpen)}>Close</button>
                    <p className="primary-text">Home</p>
                    <p className="primary-text">Proyects</p>
                    <p className="primary-text">About Me</p>
                    <p className="primary-text">Contact Me</p>
                </div>
                <div className="animationhidder hamburgerhidden"></div>
                {children}
            </body>
        </html>
    );
}

