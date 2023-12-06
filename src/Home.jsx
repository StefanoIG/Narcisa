import React, { useState, useContext} from 'react';
import { AuthContext } from './AuthContext';
import { Link } from 'react-router-dom';

const Home = () => {
    const { isLoggedIn } = useContext(AuthContext);

    return (
        <>
            <header>
                <nav>
                    <a href="#" className="encabezado"><img src="imagen/cabeza.png" alt="encabezado" /></a>
                </nav>

                <nav>
                <ul className="barra">
                    <li className="barra_"><Link to="/">Inicio</Link></li>
                    <li className="barra_"><Link to="/proceso">Procesos</Link></li>

                    {isLoggedIn ? (
                        // Links para usuarios logueados
                        <>
                            <li className="barra_"><Link to="/historial">Historial</Link></li>
                            <li className="barra_"><a href="/" onClick={() => setIsLoggedIn(false)}>Desconectarse</a></li>
                        </>
                    ) : (
                        // Links para usuarios no logueados
                        <>
                            <li className="barra_"><Link to="/login">Iniciar Sesión</Link></li>
                            <li className="barra_"><Link to="/register">Registrarse</Link></li>
                        </>
                    )}
                </ul>
            </nav>
            </header>

            <main>
                <section className='princ'>
                    <div className="contenedor-imagen"></div>
                    <img src="imagen/alfaro.jpg" alt="Imagen principal" className="alfaro">
                        </img> 
                        
                    <div className="capa-oscura">
                        
                    </div>
                </section>

                <section>
                    <div className="contenedorimagen"></div>
                    <img src="imagen/imagenes.png" alt="Imagen parrafo" className="imagen" />
                    <div className="capa-oscura"></div>
                    <h2 className="Bienvenida">
                        Bienvenidos<br />
                        En nombre de la Secretaría General de la Universidad Laica «Eloy Alfaro» de Manabí le damos la más cordial bienvenida a nuestra página web, en la cual encontrarán la información que necesitan de acuerdo a nuestras funciones establecidas en el Estatuto Institucional.
                    </h2>
                </section>
            </main>

            <footer className="footer">
                <div className="contenido-footer">
                    <div className="logo">
                        <img src="imagen/logo.png" alt="Logo de la empresa" />
                    </div>
                    <div className="redes-sociales">
                        <a href="https://www.facebook.com/UleamEc" className="red-social"><img src="imagen/facebook.png" alt="Logo de Facebook" /></a>
                        <a href="https://twitter.com/UleamEcuador" className="red-social"><img src="imagen/twitter.png" alt="Logo de Twitter" /></a>
                        <a href="https://www.instagram.com/uleam_ecuador_oficial/" className="red-social"><img src="imagen/instagram.png" alt="Logo de Instagram" /></a>
                    </div>
                </div>
                <div className="derechos-autor">
                    ULEAM © Copyright 2020, Todos los derechos reservados - Universidad Laica Eloy Alfaro de Manabí
                    Dirección: Av. Circunvalación - Vía a San Mateo
                    Manta - Manabí - Ecuador
                </div>
            </footer>
        </>
    );
};

export default Home;
