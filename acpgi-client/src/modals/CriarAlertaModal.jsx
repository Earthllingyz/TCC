import { useState, useEffect } from "react";
import "../styles/CriarAlertaModal.css";

function CriarAlertaModal({ aberto, fechar }) {

  useEffect(() => {

    if (aberto) {
      document.body.style.overflow = "hidden";
    }

    return () => {
      document.body.style.overflow = "auto";
    };

  }, [aberto]);

  const [diasSelecionados, setDiasSelecionados] = useState({});
  const [horarioAtual, setHorarioAtual] = useState({});

  if (!aberto) return null;

  const diasSemana = [
    "Segunda",
    "Terça",
    "Quarta",
    "Quinta",
    "Sexta",
    "Sábado",
    "Domingo"
  ];

  return (
    <div
  className="modal-overlay"
  onClick={fechar}
>
  <div
    className="modal-content"
    onClick={(e) => e.stopPropagation()}
  >

        <div className="modal-header">
          <h2>Criar Alerta</h2>

          <button
  type="button"
  className="close-btn"
  onClick={fechar}
>
  ✕
</button>
        </div>

        <div className="modal-body">

        <form className="alerta-form">

          <label>Temas Principais</label>

          <input
            type="text"
            placeholder="Ex: Ansiedade"
          />

          <label>Descrição</label>

          <textarea
            rows="5"
            placeholder="Descreva o que você procura..."
          />

<label>Dias Disponíveis</label>

<div className="dias-container">

  {diasSemana.map((dia) => (

    <div
      key={dia}
      className="dia-card"
    >

      <label>

        <input
          type="checkbox"
          checked={!!diasSelecionados[dia]}
          onChange={(e) => {

            if (e.target.checked) {
              setDiasSelecionados({
                ...diasSelecionados,
                [dia]: []
              });
            } else {
              const copia = {
                ...diasSelecionados
              };

              delete copia[dia];

              setDiasSelecionados(copia);
            }

          }}
        />

        {dia}

      </label>

      {diasSelecionados[dia] && (
        <>

          {diasSelecionados[dia].map(
            (hora, index) => (
              <div
                key={index}
                className="horario-item"
              >
                🕒 {hora}
              </div>
            )
          )}

          <div className="novo-horario">

          <input
  type="time"
  value={horarioAtual[dia] || ""}
  onClick={(e) => {
    if (e.target.showPicker) {
      e.target.showPicker();
    }
  }}
  onChange={(e) =>
    setHorarioAtual({
      ...horarioAtual,
      [dia]: e.target.value
    })
  }
/>

            <button
              type="button"
              onClick={() => {

                if (
                  !horarioAtual[dia]
                )
                  return;

                setDiasSelecionados({
                  ...diasSelecionados,

                  [dia]: [
                    ...diasSelecionados[dia],
                    horarioAtual[dia]
                  ]
                });

                setHorarioAtual({
                  ...horarioAtual,
                  [dia]: ""
                });

              }}
            >
              Adicionar Horário
            </button>

          </div>

        </>
      )}

    </div>

  ))}

</div>

          <button
            type="submit"
            className="publicar-btn"
          >
            Publicar Alerta
          </button>

        </form>

        </div>
      </div>
    </div>
  );
}

export default CriarAlertaModal;