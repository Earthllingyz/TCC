import { useState } from "react";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

import "../styles/dashboardCliente.css";

import TopBar from "../components/TopBar";
import StudentCard from "../components/StudentCard";

import CriarAlertaModal from "../modals/CriarAlertaModal";
import FiltroModal from "../modals/FiltroModal";

import estudantes from "../data/Estudantes";

function DashboardCliente() {

    const [abrirAlerta, setAbrirAlerta] = useState(false);
    const [abrirFiltro, setAbrirFiltro] = useState(false);
    const navigate = useNavigate();

useEffect(() => {

  if (localStorage.getItem("logado") !== "true") {

    navigate("/", { replace: true });

  }

}, []);
    
const estudantesRecomendados = estudantes.filter(
  (estudante) => estudante.recomendado
);

  return (
    <div className="dashboard-cliente">

<TopBar
  placeholder="Pesquisar estudante..."
  onPesquisar={(texto) => {

    navigate(
      `/resultados?pesquisa=${encodeURIComponent(texto)}`
    );

  }}
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

      {estudantesRecomendados.map((estudante) => (
          <StudentCard
          key={estudante.id}
      
          id={estudante.id}
      
          foto={estudante.foto}
      
          nome={estudante.nome}
      
          genero={estudante.genero}
      
          faculdade={estudante.faculdade}
      
          semestre={`${estudante.semestre}º semestre`}
      
          avaliacao={estudante.avaliacao.media}
      
          totalAvaliacoes={estudante.avaliacao.total}
      
          disponivel={estudante.disponivel}
      
          onPerfil={() =>
              navigate(`/perfil-estudante/${estudante.id}`)
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