import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Login from './pages/Login'
import Dashboard from './pages/Dashboard'
import Empleados from './pages/Empleados'
import Asistencia from './pages/Asistencia'
import Permisos from './pages/Permisos'
import Historial from './pages/Historial'


import './login.css'

function Placeholder({ name }) {
  return (
    <div style={{ padding: "2rem" }}>
      <h2>{name}</h2>
    </div>
  );
}

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/empleados" element={<Empleados />} />
        <Route path="/asistencia" element={<Asistencia />} />
        <Route path="/permisos" element={<Permisos />} />
        <Route path="/historial" element={<Historial />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
)
