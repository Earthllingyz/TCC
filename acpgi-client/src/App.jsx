import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";

import TelaLogin from "./pages/TelaLogin";
import Cadastro from "./pages/Cadastro";
import Dashboard from "./pages/Dashboard";
import Disponibilidade from "./pages/Disponibilidade";
import DashboardCliente from "./pages/DashboardCliente";
import DashboardEstudante from "./pages/DashboardEstudante";
import MeuPerfil from "./pages/MeuPerfil";
import Resultados from "./pages/Resultados";
import PerfilEstudante from "./pages/PerfilEstudante";
import ChatConsulta from "./pages/ChatConsulta";

function App() {
  return (
    <BrowserRouter>
      <Routes>

        <Route
          path="/"
          element={<TelaLogin />}
        />

        <Route
          path="/cadastro"
          element={<Cadastro />}
        />

<Route
  path="/dashboard"
  element={<Dashboard />}
/>

<Route
  path="/disponibilidade"
  element={<Disponibilidade />}
/>

<Route
    path="/dashboard-cliente"
    element={<DashboardCliente />}
/>

<Route
    path="/dashboard-estudante"
    element={<DashboardEstudante />}
/>

<Route
  path="/meu-perfil"
  element={<MeuPerfil />}
/>

<Route
    path="/resultados"
    element={<Resultados />}
/>

<Route
    path="/perfil-estudante/:id"
    element={<PerfilEstudante />}
/>

<Route
    path="/chat/:id"
    element={<ChatConsulta />}
/>

      </Routes>
    </BrowserRouter>
  );
}

export default App;