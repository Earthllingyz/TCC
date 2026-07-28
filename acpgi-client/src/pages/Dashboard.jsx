import Sidebar from "../components/Sidebar";
import "../styles/dashboard.css";

function Dashboard() {
  return (
    <div className="dashboard">

      <Sidebar />

      <main className="content">

        <h1>Dashboard ACPGI</h1>

        <div className="cards">

          <div className="card">
            <h3>Consultas Hoje</h3>
            <span>12</span>
          </div>

          <div className="card">
            <h3>Estudantes Online</h3>
            <span>37</span>
          </div>

          <div className="card">
            <h3>Avaliação Média</h3>
            <span>4.9 ⭐</span>
          </div>

        </div>

        <div className="agenda-box">

          <h2>Próximas Consultas</h2>

          <div className="consulta">
            14:00 - Ana Souza
          </div>

          <div className="consulta">
            16:30 - Pedro Silva
          </div>

        </div>

      </main>

    </div>
  );
}

export default Dashboard;