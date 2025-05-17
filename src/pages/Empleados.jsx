import { useState } from "react";
import Navbar from "../components/Navbar";

function Empleados() {
  const [empleados, setEmpleados] = useState([]);
  const [nuevoEmpleado, setNuevoEmpleado] = useState({
    nombre: "",
    cargo: "",
    correo: "",
  });

  const handleChange = (e) => {
    setNuevoEmpleado({
      ...nuevoEmpleado,
      [e.target.name]: e.target.value,
    });
  };

  const agregarEmpleado = (e) => {
    e.preventDefault();
    if (!nuevoEmpleado.nombre || !nuevoEmpleado.cargo || !nuevoEmpleado.correo) return;

    setEmpleados([...empleados, nuevoEmpleado]);
    setNuevoEmpleado({ nombre: "", cargo: "", correo: "" });
  };

  return (
    <>
      <Navbar />
      <div style={{ padding: "2rem" }}>
        <h2>Gestión de Empleados</h2>

        <form onSubmit={agregarEmpleado} style={{ marginBottom: "1.5rem" }}>
          <input
            type="text"
            name="nombre"
            placeholder="Nombre"
            value={nuevoEmpleado.nombre}
            onChange={handleChange}
            required
            style={{ marginRight: "1rem" }}
          />
          <input
            type="text"
            name="cargo"
            placeholder="Cargo"
            value={nuevoEmpleado.cargo}
            onChange={handleChange}
            required
            style={{ marginRight: "1rem" }}
          />
          <input
            type="email"
            name="correo"
            placeholder="Correo"
            value={nuevoEmpleado.correo}
            onChange={handleChange}
            required
            style={{ marginRight: "1rem" }}
          />
          <button type="submit">Agregar</button>
        </form>

        {empleados.length > 0 ? (
          <table border="1" cellPadding="10" style={{ width: "100%", borderCollapse: "collapse" }}>
            <thead>
              <tr>
                <th>Nombre</th>
                <th>Cargo</th>
                <th>Correo</th>
              </tr>
            </thead>
            <tbody>
              {empleados.map((emp, index) => (
                <tr key={index}>
                  <td>{emp.nombre}</td>
                  <td>{emp.cargo}</td>
                  <td>{emp.correo}</td>
                </tr>
              ))}
            </tbody>
          </table>
        ) : (
          <p>No hay empleados registrados.</p>
        )}
      </div>
    </>
  );
}

export default Empleados;
