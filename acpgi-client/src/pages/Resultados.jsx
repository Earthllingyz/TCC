import { useSearchParams } from "react-router-dom";
import estudantes from "../data/Estudantes";
import StudentCard from "../components/StudentCard";
import TopBar from "../components/TopBar";

function Resultados() {

  const [searchParams] = useSearchParams();

  const pesquisa = searchParams.get("pesquisa") || "";

  const estudantesFiltrados = estudantes.filter((estudante) =>
    estudante.nome.toLowerCase().includes(pesquisa.toLowerCase())
  );

  return (

    <div className="dashboard-cliente">

      <TopBar
        placeholder="Pesquisar estudante..."
        valorPesquisa={pesquisa}
      />

      <h2 style={{ margin: "20px" }}>
        Resultados encontrados
      </h2>

      <div className="students-grid">

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