import logo from "../assets/logo.png";

function Sidebar() {
  return (
    <aside className="sidebar">

      <img
        src={logo}
        alt="logo"
        className="sidebar-logo"
      />

      <h2>ACPGI</h2>

      <nav>

        <a href="#">🏠 Dashboard</a>

        <a href="#">📅 Agenda</a>

        <a href="#">💬 Chat</a>

        <a href="#">📞 Consultas</a>

        <a href="#">👤 Perfil</a>

        <a href="#">⚙️ Configurações</a>

      </nav>

    </aside>
  );
}

export default Sidebar;