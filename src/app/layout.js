"use client"
import "./globals.css";
import { useState } from 'react';

export default function RootLayout({ children }) {

    const [isOpen, setIsOpen] = useState(false);


    return (
        <html lang="en">

            <body>

                <header>
                    <div className="name">
                        <p className="primary-text">Bruno Ríos</p>
                        <p className="secondary-text">Soriano Uruguay</p>
                    </div>
                    <div className="hamburgermenu">
                        <button className="hamburgerbutton" onClick={() => setIsOpen(!isOpen)}>☰</button>
                    </div>
                    <div className="menu">
                        <p className="primary-text">Home</p>
                        <p className="primary-text">Proyects</p>
                        <p className="primary-text">About Me</p>
                        <p className="primary-text">Contact Me</p>
                    </div>

                </header>

                <div className={`${isOpen ? 'hamburgerdisplay' : 'hamburgerhidden'}`}>

                    <p className="primary-text">Hola puta de mierda</p>
                </div>


                {children}
            </body>
        </html>
    );
}

