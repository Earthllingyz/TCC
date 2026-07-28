import "../styles/StudentCard.css";
import { FaStar } from "react-icons/fa";

function StudentCard({
  foto,
  nome,
  faculdade,
  semestre,
  avaliacao,
  disponivel,
  onPerfil
}) {
  return (
    <div className="student-card">

      <img
        src={foto}
        alt={nome}
        className="student-photo"
      />

      <h3>{nome}</h3>

      <p>{faculdade}</p>

      <span>{semestre}º Semestre</span>

      <div className="rating">
        <FaStar />
        <strong>{avaliacao}</strong>
      </div>

      <div
        className={
          disponivel
            ? "status disponivel"
            : "status indisponivel"
        }
      >
        {disponivel
          ? "Disponível Hoje"
          : "Indisponível"}
      </div>

      <button
        className="perfil-btn"
        onClick={onPerfil}
      >
        Ver Perfil
      </button>

    </div>
  );
}

export default StudentCard;