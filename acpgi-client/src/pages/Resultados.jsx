import {
  useSearchParams,
  useLocation,
  useNavigate
} from "react-router-dom";

import { useState } from "react";
import estudantes from "../data/Estudantes";
import StudentCard from "../components/StudentCard";
import TopBar from "../components/TopBar";
import FiltroModal from "../modals/FiltroModal";

function Resultados() {

  const [searchParams] = useSearchParams();

const location = useLocation();

const navigate = useNavigate();

const pesquisa = searchParams.get("pesquisa") || "";

const filtros = location.state?.filtros ?? {

    faculdade: "",

    avaliacao: 1,

    genero: "Todos",

    dias: []

};

const [abrirFiltro, setAbrirFiltro] = useState(false);

const [filtrosAtuais, setFiltrosAtuais] = useState(filtros);

  const estudantesFiltrados = estudantes.filter((estudante)=>{

    if(

        !estudante.nome
        .toLowerCase()
        .includes(pesquisa.toLowerCase())

    ){

        return false;

    }

    if(

      filtrosAtuais.faculdade &&
        !estudante.faculdade
        .toLowerCase()
        .includes(filtrosAtuais.faculdade.toLowerCase())

    ){

        return false;

    }

    if(

        estudante.avaliacao.media < filtrosAtuais.avaliacao

    ){

        return false;

    }

    if(

      filtrosAtuais.genero !== "Todos" &&
        estudante.genero !== filtrosAtuais.genero

    ){

        return false;

    }

    if(filtrosAtuais.dias.length>0){

        const possuiDia = estudante.agenda.some(

            (dia)=>filtrosAtuais.dias.includes(dia.dia)

        );

        if(!possuiDia){

            return false;

        }

    }

    return true;

});

  return (

    <div className="dashboard-cliente">

<TopBar
    placeholder="Pesquisar estudante..."
    valorPesquisa={pesquisa}

    onPesquisar={(texto) => {

      const params = new URLSearchParams();
  
      params.set("pesquisa", texto);
  
      navigate(
  
          `/resultados?${params.toString()}`,
  
          {
  
              state: {
  
                  filtros: filtrosAtuais
  
              }
  
          }
  
      );
  
  }}

    onFiltroClick={()=>setAbrirFiltro(true)}
/>

<h2
  style={{
    margin: "20px",
    color: "#222"
  }}
>
  Resultados encontrados
</h2>

      <div className="students-grid">

      <FiltroModal

aberto={abrirFiltro}

fechar={()=>setAbrirFiltro(false)}

filtros={filtrosAtuais}

setFiltros={setFiltrosAtuais}

/>

        {estudantesFiltrados.map((estudante) => (

          <StudentCard

            key={estudante.id}

            id={estudante.id}

            foto={estudante.foto}

            nome={estudante.nome}

            genero={estudante.genero}

            faculdade={estudante.faculdade}

            semestre={estudante.semestre}

            avaliacao={estudante.avaliacao.media}

            totalAvaliacoes={estudante.avaliacao.total}

            disponivel={estudante.disponivel}

          />

        ))}

      </div>

    </div>

  );

}

export default Resultados;