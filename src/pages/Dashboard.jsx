import Navbar from "../components/Navbar";

function Dashboard() {
  return (
    <>
      <Navbar />
      <div style={{ padding: "2rem" }}>
        <h1>Bienvenido al Panel Principal</h1>
        <p>Selecciona una sección del menú para comenzar.</p>
      </div>
    </>
  );
}

export default Dashboard;
