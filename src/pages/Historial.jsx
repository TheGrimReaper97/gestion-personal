import { useState } from "react";
import Navbar from "../components/Navbar";

function Historial() {
  const [historial, setHistorial] = useState([]);
  const [registro, setRegistro] = useState({
    empleado: "",
    cargo: "",
    departamento: "",
    inicio: "",
    fin: ""
  });

  const handleChange = (e) => {
    setRegistro({ ...registro, [e.target.name]: e.target.value });
  };

  const agregarRegistro = (e) => {
    e.preventDefault();
    if (!registro.empleado || !registro.cargo || !registro.departamento || !registro.inicio) return;

    setHistorial([...historial, registro]);
    setRegistro({
      empleado: "",
      cargo: "",
      departamento: "",
      inicio: "",
      fin: ""
    });
  };

  return (
    <>
      <Navbar />
      <div style={{ padding: "2rem" }}>
        <h2>Historial Laboral</h2>

        <form onSubmit={agregarRegistro} style={{ marginBottom: "1.5rem" }}>
          <input
            type="text"
            name="empleado"
            placeholder="Nombre del empleado"
            value={registro.empleado}
            onChange={handleChange}
            required
            style={{ marginRight: "1rem" }}
          />
          <input
            type="text"
            name="cargo"
            placeholder="Cargo"
            value={registro.cargo}
            onChange={handleChange}
            required
            style={{ marginRight: "1rem" }}
          />
          <input
            type="text"
            name="departamento"
            placeholder="Departamento"
            value={registro.departamento}
            onChange={handleChange}
            required
            style={{ marginRight: "1rem" }}
          />
          <input
            type="date"
            name="inicio"
            value={registro.inicio}
            onChange={handleChange}
            required
            style={{ marginRight: "1rem" }}
          />
          <input
            type="date"
            name="fin"
            value={registro.fin}
            onChange={handleChange}
            style={{ marginRight: "1rem" }}
          />
          <button type="submit">Agregar</button>
        </form>

        {historial.length > 0 ? (
          <table border="1" cellPadding="8" style={{ width: "100%", borderCollapse: "collapse" }}>
            <thead>
              <tr>
                <th>Empleado</th>
                <th>Cargo</th>
                <th>Departamento</th>
                <th>Inicio</th>
                <th>Fin</th>
              </tr>
            </thead>
            <tbody>
              {historial.map((h, i) => (
                <tr key={i}>
                  <td>{h.empleado}</td>
                  <td>{h.cargo}</td>
                  <td>{h.departamento}</td>
                  <td>{h.inicio}</td>
                  <td>{h.fin || "Actual"}</td>
                </tr>
              ))}
            </tbody>
          </table>
        ) : (
          <p>No hay historial registrado.</p>
        )}
      </div>
    </>
  );
}

export default Historial;
