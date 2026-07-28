import { useEffect } from "react";
import "../styles/FiltroModal.css";

function FiltroModal({ aberto, fechar }) {

  useEffect(() => {

    if (aberto) {
      document.body.style.overflow = "hidden";
    }

    return () => {
      document.body.style.overflow = "auto";
    };

  }, [aberto]);

  if (!aberto) return null;

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
    />

    <label>Avaliação mínima</label>

    <select>
      <option>⭐ 1+</option>
      <option>⭐ 2+</option>
      <option>⭐ 3+</option>
      <option>⭐ 4+</option>
      <option>⭐ 5</option>
    </select>

    <label>Gênero</label>

    <select>
      <option>Todos</option>
      <option>Masculino</option>
      <option>Feminino</option>
      <option>Outro</option>
    </select>

    <label>Disponibilidade</label>

    <div className="dias-grid">
      <label><input type="checkbox" /> Segunda</label>
      <label><input type="checkbox" /> Terça</label>
      <label><input type="checkbox" /> Quarta</label>
      <label><input type="checkbox" /> Quinta</label>
      <label><input type="checkbox" /> Sexta</label>
      <label><input type="checkbox" /> Sábado</label>
      <label><input type="checkbox" /> Domingo</label>
    </div>

    <button className="aplicar-btn">
      Aplicar Filtros
    </button>

  </div>

</div>

      </div>

    </div>
  );
}

export default FiltroModal;