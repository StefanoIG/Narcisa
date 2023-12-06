import React, { useState, useContext} from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { AuthProvider } from './AuthContext';

// Importa tus componentes aquí
import Registro from './Registro';
import Login from './Login';
import Home from './Home';
import Proceso from './procesos';
import Historial from './Historial';

function App() {
  return (
    <AuthProvider>
      <Router>
        <Routes>
        <Route path="/register" element={<Registro />} />
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<Home />} />
        <Route path="/proceso" element={<Proceso />} />
        <Route path="/historial" element={<Historial />} />




        </Routes>
      </Router>
    </AuthProvider>

  );
}

export default App;
