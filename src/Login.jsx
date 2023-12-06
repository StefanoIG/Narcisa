import React, { useState, useContext} from 'react';
import { useNavigate } from 'react-router-dom';
import './Css/registro.css';
import cabeza from '../imagen/cabeza.png';
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';
import { AuthContext } from './AuthContext';
import logo from '../imagen/logo.png';
import facebook from '../imagen/facebook.png';
import twitter from '../imagen/twitter.png';
import instagram from '../imagen/instagram.png';


const MySwal = withReactContent(Swal);

const InicioSesion = () => {
    
    const [credenciales, setCredenciales] = useState({
        username: '',
        email: '',
        password: ''
    });
    const { setIsLoggedIn } = useContext(AuthContext);
    const navigate = useNavigate(); // Hook para la navegación

    const handleChange = (e) => {
        const { name, value } = e.target;
        setCredenciales({ ...credenciales, [name]: value });
    };

    const mostrarToast = (mensaje, icono) => {
        MySwal.fire({
            toast: true,
            position: 'top-end',
            showConfirmButton: false,
            timer: 3000,
            timerProgressBar: true,
            icon: icono,
            title: mensaje
        });
    };

    const verificarUsuarioRegistrado = (email, password) => {
        const usuarioRegistrado = JSON.parse(localStorage.getItem('usuario'));
        if (usuarioRegistrado && usuarioRegistrado.email === email && usuarioRegistrado.password === password) {
            mostrarToast('Inicio de sesión exitoso', 'success');
            setIsLoggedIn(true);
            navigate('/'); // Redirige al usuario a la página de inicio
        } else {
            mostrarToast('Correo o contraseña incorrecta', 'error');
        }
    };
    

    const submitForm = () => {
        const { email, password } = credenciales;

        if (email.trim() === "" || password.trim() === "") {
            mostrarToast('Por favor, completa todos los campos.', 'warning');
        } else {
            verificarUsuarioRegistrado(email, password);
        }
    };


    return (
        <>
            <div className="login">
            <header className='encabezado'>
                <img src={cabeza} alt="" />
            <nav>
                <ul class="barra">
                    <li class="barra_"><a href="/">Inicio</a></li>
                    <li class="barra_"><a href="#"></a></li>
                    <li class="barra_"><a href="#"></a></li>
                    <li class="barra_"><a href="#"></a></li>
                    <li class="barra_"><a href="#"></a></li>
                </ul>
                </nav>
            </header>
        <main className='login-main'>

            <div className="form-content ">
                <form className='login-cont'>
                    <div className="input-group">

                        <div className="input-field">
                            <i className="fa-solid fa-envelope"></i>
                            <input 
                                type="email" 
                                placeholder="Correo" 
                                name="email"
                                value={credenciales.email}
                                onChange={handleChange}
                            />
                        </div>

                        <div className="input-field">
                            <i className="fa-solid fa-lock"></i>
                            <input 
                                type="password" 
                                placeholder="Contraseña" 
                                name="password"
                                value={credenciales.password}
                                onChange={handleChange}
                            />
                        </div>

                        <div className="btn-field">
                            <button id="signIn" type="button" onClick={submitForm}>Iniciar sesión</button>
                        </div>  
                    </div>               

                </form>
            </div>
         </main>

                    <footer className="footer">
                    <div className="contenido-footer">
                    <div className="logo">
                        <img src={logo} alt="Logo de la empresa" />
                    </div>
                    <div className="redes-sociales">
                        <a href="https://www.facebook.com/UleamEc" className="red-social">
                        <img src={facebook} alt="Logo de Facebook" />
                        </a>
                        <a href="https://twitter.com/UleamEcuador" className="red-social">
                        <img src={twitter} alt="Logo de Twitter" />
                        </a>
                        <a href="https://www.instagram.com/uleam_ecuador_oficial/" className="red-social">
                        <img src={instagram} alt="Logo de Instagram" />
                        </a>
                    </div>
                    </div>
                    <div className="derechos-autor">
                    ULEAM © Copyright 2020, Todos los derechos reservados - Universidad Laica Eloy Alfaro de Manabí
                    Dirección: Av. Circunvalación - Vía a San Mateo
                    Manta - Manabí - Ecuador
                    </div>
                </footer>

            </div>
        </>
    );
};

export default InicioSesion;
