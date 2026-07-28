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

      </Routes>
    </BrowserRouter>
  );
}

export default App;