import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/FiltroModal.css";
import ModalAnimado from "./ModalAnimado";
import "../styles/ModalAnimado.css";

function FiltroModal({
  aberto,
  fechar,
  filtros,
  setFiltros
}) {

  const navigate = useNavigate();

  useEffect(() => {

    if (aberto) {
      document.body.style.overflow = "hidden";
    }

    return () => {
      document.body.style.overflow = "auto";
    };

  }, [aberto]);

  function alterarDia(dia){

    if(filtros.dias.includes(dia)){
  
      setFiltros({
        ...filtros,
        dias: filtros.dias.filter((d)=>d !== dia)
      });
  
    }else{
  
      setFiltros({
        ...filtros,
        dias:[...filtros.dias,dia]
      });
  
    }
  
  }

  return (

    <ModalAnimado aberto={aberto}>

    <div
  className="modal-overlay"
  onClick={fechar}
>
  <div
    className="modal-content"
    onClick={(e) => e.stopPropagation()}
  >

        <div className="modal-header">

          <h2>Filtros</h2>

          <button
  type="button"
  className="close-btn"
  onClick={fechar}
>
  ✕
</button>

        </div>

        <div className="modal-body">

  <div className="filtro-body">

    <label>Faculdade</label>

    <input
  type="text"
  placeholder="Pesquisar faculdade"
  value={filtros.faculdade}
  onChange={(e)=>
    setFiltros({
      ...filtros,
      faculdade:e.target.value
    })
  }
/>

    <label>Avaliação mínima</label>

    <select
  value={filtros.avaliacao}
  onChange={(e)=>
    setFiltros({
      ...filtros,
      avaliacao:Number(e.target.value)
    })
  }
>
<option value={1}>⭐ 1+</option>
<option value={2}>⭐ 2+</option>
<option value={3}>⭐ 3+</option>
<option value={4}>⭐ 4+</option>
<option value={5}>⭐ 5</option>
    </select>

    <label>Gênero</label>

    <select
  value={filtros.genero}
  onChange={(e)=>
    setFiltros({
      ...filtros,
      genero:e.target.value
    })
  }
>
      <option>Todos</option>
      <option>Masculino</option>
      <option>Feminino</option>
      <option>Outro</option>
    </select>

    <label>Disponibilidade</label>

    <div className="dias-grid">
    <label>
  <input
    type="checkbox"
    checked={filtros.dias.includes("Segunda-feira")}
    onChange={()=>alterarDia("Segunda-feira")}
  />
  Segunda
</label>

<label>
  <input
    type="checkbox"
    checked={filtros.dias.includes("Terça-feira")}
    onChange={()=>alterarDia("Terça-feira")}
  />
  Terça
</label>

<label>
  <input
    type="checkbox"
    checked={filtros.dias.includes("Quarta-feira")}
    onChange={()=>alterarDia("Quarta-feira")}
  />
  Quarta
</label>

<label>
  <input
    type="checkbox"
    checked={filtros.dias.includes("Quinta-feira")}
    onChange={()=>alterarDia("Quinta-feira")}
  />
  Quinta
</label>

<label>
  <input
    type="checkbox"
    checked={filtros.dias.includes("Sexta-feira")}
    onChange={()=>alterarDia("Sexta-feira")}
  />
  Sexta
</label>

<label>
  <input
    type="checkbox"
    checked={filtros.dias.includes("Sábado")}
    onChange={()=>alterarDia("Sábado")}
  />
  Sábado
</label>

<label>
  <input
    type="checkbox"
    checked={filtros.dias.includes("Domingo")}
    onChange={()=>alterarDia("Domingo")}
  />
  Domingo
</label>
    </div>

    <button
  className="aplicar-btn"
  onClick={() => {

    const pesquisa =
        new URLSearchParams(window.location.search).get("pesquisa") || "";

    const params = new URLSearchParams();

    if (pesquisa) {
        params.set("pesquisa", pesquisa);
    }

    fechar();

setTimeout(() => {
    navigate(
        `/resultados?${params.toString()}`,
        {
            state: {
                filtros
            }
        }
    );
}, 300);

}}
>
  Aplicar Filtros
</button>

<button
    className="limpar-btn"
    onClick={() => {
        const filtrosLimpos = {
            faculdade: "",
            avaliacao: 1,
            genero: "Todos",
            dias: []
        };

        setFiltros(filtrosLimpos);

        const pesquisa =
            new URLSearchParams(window.location.search)
                .get("pesquisa") || "";

        fechar();

        setTimeout(() => {
            navigate(
                `/resultados?pesquisa=${pesquisa}`,
                {
                    state: {
                        filtros: filtrosLimpos
                    }
                }
            );
        }, 300);
    }}
>
    Limpar filtros
</button>


  </div>

</div>

      </div>

    </div>

</ModalAnimado>
  );
}

export default FiltroModal;