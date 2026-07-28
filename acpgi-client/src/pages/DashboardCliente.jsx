import { useState } from "react";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

import "../styles/dashboardCliente.css";

import TopBar from "../components/TopBar";
import StudentCard from "../components/StudentCard";

import CriarAlertaModal from "../modals/CriarAlertaModal";
import FiltroModal from "../modals/FiltroModal";

function DashboardCliente() {

    const [abrirAlerta, setAbrirAlerta] = useState(false);
    const [abrirFiltro, setAbrirFiltro] = useState(false);
    const navigate = useNavigate();

useEffect(() => {

  if (localStorage.getItem("logado") !== "true") {

    navigate("/", { replace: true });

  }

}, []);
    
  const estudantes = [
    {
      id: 1,
      nome: "Maria Oliveira",
      faculdade: "USP",
      semestre: 7,
      avaliacao: 4.9,
      disponivel: true,
      foto:
        "https://i.pravatar.cc/150?img=1"
    },
    {
      id: 2,
      nome: "João Silva",
      faculdade: "PUC",
      semestre: 8,
      avaliacao: 4.8,
      disponivel: true,
      foto:
        "https://i.pravatar.cc/150?img=2"
    },
    {
      id: 3,
      nome: "Ana Costa",
      faculdade: "Mackenzie",
      semestre: 6,
      avaliacao: 4.7,
      disponivel: true,
      foto:
        "https://i.pravatar.cc/150?img=3"
    }
  ];

  return (
    <div className="dashboard-cliente">

<TopBar
  placeholder="Pesquisar estudante..."
  onFiltroClick={() => setAbrirFiltro(true)}
/>

      <div className="dashboard-header">

      <button
  className="alerta-btn"
  onClick={() => setAbrirAlerta(true)}
>
  + Criar Alerta
</button>

      </div>

      <div className="section-title">
        ⭐ Estudantes Recomendados
      </div>

      <div className="students-grid">

        {estudantes.map((estudante) => (
          <StudentCard
            key={estudante.id}
            foto={estudante.foto}
            nome={estudante.nome}
            faculdade={estudante.faculdade}
            semestre={estudante.semestre}
            avaliacao={estudante.avaliacao}
            disponivel={estudante.disponivel}
            onPerfil={() =>
              console.log(
                "Abrir perfil",
                estudante.nome
              )
            }
          />
        ))}

      </div>

      <CriarAlertaModal
  aberto={abrirAlerta}
  fechar={() => setAbrirAlerta(false)}
/>

<FiltroModal
  aberto={abrirFiltro}
  fechar={() => setAbrirFiltro(false)}
/>

    </div>
  );
}

export default DashboardCliente;