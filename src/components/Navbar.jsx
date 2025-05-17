import { Link } from "react-router-dom";
import { FaUserTie, FaUserCheck, FaCalendarAlt, FaHistory, FaSignOutAlt, FaHome } from "react-icons/fa";
import "./Navbar.css";

function Navbar() {
  return (
    <nav className="navbar">
      <ul>
        <li className="logo">
             <img src="/sivartech-logo.png" alt="SivarTech Logo" className="logo-img" />
        </li>
   
        <li><Link to="/dashboard"><FaHome /> Inicio</Link></li>
        <li><Link to="/empleados"><FaUserTie /> Empleados</Link></li>
        <li><Link to="/asistencia"><FaUserCheck /> Asistencia</Link></li>
        <li><Link to="/permisos"><FaCalendarAlt /> Permisos</Link></li>
        <li><Link to="/historial"><FaHistory /> Historial</Link></li>
        <li><Link to="/"><FaSignOutAlt /> Cerrar sesión</Link></li>
      </ul>
    </nav>
  );
}

export default Navbar;
