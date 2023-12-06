import React, { useState, useContext } from 'react';
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';
import { AuthContext } from './AuthContext';
import { Link } from 'react-router-dom';

const Proceso = () => {
  const { isLoggedIn } = useContext(AuthContext);
  const MySwal = withReactContent(Swal);

  // Función para obtener el usuario del localStorage
  const obtenerUsuarioLocalStorage = () => {
    const usuario = JSON.parse(localStorage.getItem('usuario'));
    return usuario;
  };

  // Mover las funciones fuera de la función mostrarAlertaMatriculacion
  const verificarUsuarioYMostrarModal = (tipo) => {
    const usuario = obtenerUsuarioLocalStorage(); // Obtener usuario del localStorage
    if (isLoggedIn) {
      if (tipo === 'atencion') {
        mostrarModalFecha(usuario);
      } else if (tipo === 'pagos') {
        mostrarAlertaPagos();
      }
    } else {
      Swal.fire('Necesitas estar logueado para acceder a esta función.');
    }
  };

  const mostrarModalFecha = (usuario) => {
    Swal.fire({
      title: 'Selecciona la fecha para la atención',
      input: 'date',
      inputAttributes: {
        min: new Date().toISOString().split("T")[0]
      },
      showCancelButton: true,
      confirmButtonText: 'Seleccionar',
      cancelButtonText: 'Cancelar',
    }).then((result) => {
      if (result.isConfirmed) {
        const selectedDate = result.value;
  
        if (selectedDate && usuario) {
          // Guardar la fecha y el correo electrónico en el localStorage
          const citas = JSON.parse(localStorage.getItem('citas')) || [];
          citas.push({ emailUsuario: usuario.email, selectedDate });
          localStorage.setItem('citas', JSON.stringify(citas));
  
          Swal.fire('Éxito', 'La fecha se ha guardado correctamente.', 'success');
        } else {
          Swal.fire('Error', 'No se pudo guardar la fecha.', 'error');
        }
      }
    });
  };

  const mostrarAlertaPagos = () => {
    Swal.fire({
      title: 'Gestión de Pagos',
      text: 'La Gestión de Pagos está en mantenimiento momentáneo.',
      icon: 'info',
    });
  };

  const mostrarAlertaMatriculacion = () => {
    MySwal.fire({
      title: 'Atención',
      text: 'No se está en horario de matriculación',
      icon: 'warning',
      toast: true,
      position: 'top-end',
      showConfirmButton: false,
      timer: 3000,
      timerProgressBar: true,
      didOpen: (toast) => {
        toast.addEventListener('mouseenter', Swal.stopTimer);
        toast.addEventListener('mouseleave', Swal.resumeTimer);
      }
    });
  };

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
        <ul className="proceso1">
          <div className="contenedor-proceso2-pagos"></div>
          <li><img src="imagen/atencion.jpg" alt="Atención general" /><a href="#" onClick={() => verificarUsuarioYMostrarModal('atencion')}>Atención general</a></li>

          <div className="contenedor-proceso2-pagos"></div>
          <li><img src="imagen/pago.png" alt="Gestión de pagos" /><a href="#" onClick={() => verificarUsuarioYMostrarModal('pagos')}>Gestión de pagos</a></li>

          <li>
            <img src="imagen/soporte.jpg" alt="Soporte a usuarios" />
            <a href="#" onClick={mostrarAlertaMatriculacion}>Matrículas</a>
          </li>
        </ul>
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

export default Proceso;
