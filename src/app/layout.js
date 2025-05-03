"use client"
import "./globals.css";
import toggleLanguage from "./language/toggleLanguage"
import getLanguage from "./language/getLanguage";



export default function RootLayout({ children }) {
    getLanguage()
    return (
        <html lang="en">
            
            <body>
                
                <header>

                    
                    <h1>Test</h1>
                    <nav>
                        <ul>
                            <li><a href="#inicio">Inicio</a></li>
                            <li><a href="#servicios">Servicios</a></li>
                            <li><a href="#contacto">Contacto</a></li>
                        </ul>
                    </nav>
                </header>

                <p id="en">Ingles</p>
                <p id="es">Español</p>

                <button onClick={toggleLanguage}>Toggle Idioma</button>
                

                {children}
            </body>
        </html>
    );
}
