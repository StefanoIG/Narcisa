import React, { useState, useContext} from 'react';
import { useNavigate } from 'react-router-dom'; // Importa useNavigate
import './Css/registro.css';
import cabeza from '../imagen/cabeza.png';

const Registro = () => {
    const [usuario, setUsuario] = useState({
        nombres: '',
        apellidos: '',
        email: '',
        password: '',
        confirmPassword: '',
        fechaNacimiento: '',
        sexo: ''
    });
    const navigate = useNavigate(); // Instancia de useNavigate
    const handleSignInClick = () => {
        navigate('/login'); // Navega a la ruta de inicio de sesión
    };
    
    const handleChange = (e) => {
        const { name, value } = e.target;
        setUsuario({ ...usuario, [name]: value });
    };

    const validarCampos = () => {
        const regexSoloLetras = /^[A-Za-z\s]+$/; // RegEx que permite solo letras y espacios
    
        // Valida campos vacíos
        if (Object.values(usuario).some(value => value.trim() === '')) {
            alert("Por favor, completa todos los campos.");
            return false;
        }
    
        // Valida nombres y apellidos para que solo contengan letras
        if (!regexSoloLetras.test(usuario.nombres) || !regexSoloLetras.test(usuario.apellidos)) {
            alert("Los nombres y apellidos solo deben contener letras.");
            return false;
        }
    
        // Valida que las contraseñas coincidan
        if (usuario.password !== usuario.confirmPassword) {
            alert("Las contraseñas no coinciden.");
            return false;
        }
    
        // Valida el formato de la fecha de nacimiento
        if (!Date.parse(usuario.fechaNacimiento)) {
            alert("La fecha de nacimiento no tiene un formato válido.");
            return false;
        }
    
        // Puedes añadir más validaciones aquí
    
        return true;
    };
    

    const handleSubmit = (e) => {
        e.preventDefault();
        if (validarCampos()) {
            alert("Registro exitoso");
                // Almacenar usuario en localStorage
                localStorage.setItem('usuario', JSON.stringify(usuario));
                 navigate('/login'); // Redirige al usuario a la página de inicio

        }
    };

    return (
        <div>
            <header>
            <img  src={cabeza} alt="" />
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
            <main>
                <div className="container ">
                    <div className="form-content">
                        <h1 id="title">REGISTRO DE USUARIO</h1>
                        <form onSubmit={handleSubmit}>
                            <div className="input-group">
                                {/* Nombres */}
                                <div className="input-field">
                                    <input type="text" placeholder="Nombres" name="nombres" value={usuario.nombres} onChange={handleChange} />
                                </div>
                                {/* Apellidos */}
                                <div className="input-field">
                                    <input type="text" placeholder="Apellidos" name="apellidos" value={usuario.apellidos} onChange={handleChange} />
                                </div>
                                {/* Email */}
                                <div className="input-field">
                                    <input type="email" placeholder="Correo Electrónico" name="email" value={usuario.email} onChange={handleChange} />
                                </div>
                                {/* Contraseña */}
                                <div className="input-field">
                                    <input type="password" placeholder="Contraseña" name="password" value={usuario.password} onChange={handleChange} />
                                </div>
                                {/* Confirmar Contraseña */}
                                <div className="input-field">
                                    <input type="password" placeholder="Repetir contraseña" name="confirmPassword" value={usuario.confirmPassword} onChange={handleChange} />
                                </div>
                                {/* Fecha de Nacimiento */}
                                <div className="input-field">
                                    <input type="date" name="fechaNacimiento" value={usuario.fechaNacimiento} onChange={handleChange} />
                                </div>

                                {/* Sexo */}
                                <div className="input-field">
                                    <select name="sexo" value={usuario.sexo} onChange={handleChange}>
                                        <option value="">Selecciona tu sexo</option>
                                        <option value="Masculino">Masculino</option>
                                        <option value="Femenino">Femenino</option>
                                        <option value="Otro">Otro</option>
                                    </select>
                                </div>

                                <div className="btn-field">
                                    <button type="submit" className="btn btn-primary mt-4">Registrarse</button>
                                </div>
                                <div className="btn-field">
                                    <button onClick={handleSignInClick} className="btn btn-secondary mt-4">Iniciar sesión</button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
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
        </div>
    );
};

export default Registro;
