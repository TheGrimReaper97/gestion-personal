import { useState } from "react";
import Navbar from "../components/Navbar";

function Asistencia() {
  const [registros, setRegistros] = useState([]);
  const [registrando, setRegistrando] = useState(false);

  const registrarAsistencia = () => {
    const ahora = new Date();
    const fecha = ahora.toLocaleDateString();
    const hora = ahora.toLocaleTimeString();

    const nuevoRegistro = {
      fecha,
      hora,
      tipo: registrando ? "Salida" : "Entrada"
    };

    setRegistros([...registros, nuevoRegistro]);
    setRegistrando(!registrando); // alterna entre entrada/salida
  };

  const exportarCSV = () => {
    if (registros.length === 0) return;

    const encabezado = "Fecha,Hora,Tipo\n";
    const filas = registros.map(r => `${r.fecha},${r.hora},${r.tipo}`).join("\n");
    const contenido = encabezado + filas;

    const blob = new Blob([contenido], { type: "text/csv;charset=utf-8;" });
    const url = URL.createObjectURL(blob);

    const enlace = document.createElement("a");
    enlace.href = url;
    enlace.download = "asistencia.csv";
    enlace.click();

    URL.revokeObjectURL(url);
  };

  return (
    <>
      <Navbar />
      <div style={{ padding: "2rem" }}>
        <h2>Registro de Asistencia</h2>

        <div style={{ margin: "1rem 0" }}>
          <button onClick={registrarAsistencia} style={{ marginRight: "1rem" }}>
            Registrar {registrando ? "Salida" : "Entrada"}
          </button>
          <button onClick={exportarCSV}>Exportar CSV</button>
        </div>

        {registros.length > 0 ? (
          <table border="1" cellPadding="8" style={{ width: "100%", borderCollapse: "collapse" }}>
            <thead>
              <tr>
                <th>Fecha</th>
                <th>Hora</th>
                <th>Tipo</th>
              </tr>
            </thead>
            <tbody>
              {registros.map((reg, index) => (
                <tr key={index}>
                  <td>{reg.fecha}</td>
                  <td>{reg.hora}</td>
                  <td>{reg.tipo}</td>
                </tr>
              ))}
            </tbody>
          </table>
        ) : (
          <p>No hay registros de asistencia.</p>
        )}
      </div>
    </>
  );
}

export default Asistencia;
