import React, { useState, useEffect } from 'react'; // Importa useState y useEffect solo una vez
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';
import { Link } from 'react-router-dom';
import cabeza from '../imagen/cabeza.png';
import logo from '../imagen/logo.png';
import facebook from '../imagen/facebook.png';
import twitter from '../imagen/twitter.png';
import instagram from '../imagen/instagram.png';

const Historial = () => {
  // Estado para almacenar la lista de citas
  const [citas, setCitas] = useState([]);

  useEffect(() => {
    // Obtener las citas almacenadas en localStorage
    const storedCitas = JSON.parse(localStorage.getItem('citas')) || [];
    setCitas(storedCitas);
  }, []);

  const MySwal = withReactContent(Swal);

  // Función para obtener el usuario del localStorage
  const obtenerUsuarioLocalStorage = () => {
    const usuario = JSON.parse(localStorage.getItem('usuario'));
    return usuario;
  };

  // Mover las funciones fuera de la función mostrarAlertaMatriculacion




  return (
    <>
      <header>
        <nav>
          <a href="#" className="encabezado"><img src={cabeza} alt="encabezado" /></a>
        </nav>

        <nav>
          <ul className="barra">
            <li className="barra_"><Link to="/">Inicio</Link></li>
            <li className="barra_"><Link to="/proceso">Procesos</Link></li>
            {/* Puedes agregar más elementos de navegación aquí */}
          </ul>
        </nav>
      </header>

      <main>
        {/* Contenido específico de Historial */}
        <div className="historial-table">
          <h2>Historial de Citas</h2>
          <table>
            <thead>
              <tr>
                <th>Correo</th>
                <th>Fecha de Cita</th>
                <th>Estado</th>
              </tr>
            </thead>
            <tbody>
              {citas.map((cita, index) => (
                <tr key={index}>
                  <td>{cita.emailUsuario}</td>
                  <td>{cita.selectedDate}</td>
                  <td>Pendiente</td>
                </tr>
              ))}
            </tbody>
          </table>
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
    </>
  );
};

export default Historial;
