import { useState } from "react";
import Navbar from "../components/Navbar";

function Permisos() {
  const [permisos, setPermisos] = useState([]);
  const [nuevo, setNuevo] = useState({
    tipo: "",
    inicio: "",
    fin: "",
    motivo: ""
  });

  const handleChange = (e) => {
    setNuevo({ ...nuevo, [e.target.name]: e.target.value });
  };

  const agregarPermiso = (e) => {
    e.preventDefault();
    if (!nuevo.tipo || !nuevo.inicio || !nuevo.fin || !nuevo.motivo) return;

    const permiso = {
      ...nuevo,
      estado: "Pendiente"
    };

    setPermisos([...permisos, permiso]);
    setNuevo({ tipo: "", inicio: "", fin: "", motivo: "" });
  };

  return (
    <>
      <Navbar />
      <div style={{ padding: "2rem" }}>
        <h2>Solicitud de Permisos</h2>

        <form onSubmit={agregarPermiso} style={{ marginBottom: "1.5rem" }}>
          <select
            name="tipo"
            value={nuevo.tipo}
            onChange={handleChange}
            required
            style={{ marginRight: "1rem" }}
          >
            <option value="">Seleccione tipo</option>
            <option value="Vacaciones">Vacaciones</option>
            <option value="Personal">Personal</option>
            <option value="Médico">Médico</option>
          </select>

          <input
            type="date"
            name="inicio"
            value={nuevo.inicio}
            onChange={handleChange}
            required
            style={{ marginRight: "1rem" }}
          />

          <input
            type="date"
            name="fin"
            value={nuevo.fin}
            onChange={handleChange}
            required
            style={{ marginRight: "1rem" }}
          />

          <input
            type="text"
            name="motivo"
            placeholder="Motivo"
            value={nuevo.motivo}
            onChange={handleChange}
            required
            style={{ marginRight: "1rem", width: "200px" }}
          />

          <button type="submit">Solicitar</button>
        </form>

        {permisos.length > 0 ? (
          <table border="1" cellPadding="8" style={{ width: "100%", borderCollapse: "collapse" }}>
            <thead>
              <tr>
                <th>Tipo</th>
                <th>Inicio</th>
                <th>Fin</th>
                <th>Motivo</th>
                <th>Estado</th>
              </tr>
            </thead>
            <tbody>
              {permisos.map((p, i) => (
                <tr key={i}>
                  <td>{p.tipo}</td>
                  <td>{p.inicio}</td>
                  <td>{p.fin}</td>
                  <td>{p.motivo}</td>
                  <td>{p.estado}</td>
                </tr>
              ))}
            </tbody>
          </table>
        ) : (
          <p>No hay solicitudes registradas.</p>
        )}
      </div>
    </>
  );
}

export default Permisos;
