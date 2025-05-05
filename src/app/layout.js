"use client"
import "./globals.css";




export default function RootLayout({ children }) {

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

                
                {children}
            </body>
        </html>
    );
}
