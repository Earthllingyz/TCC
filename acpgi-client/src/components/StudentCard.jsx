import "../styles/StudentCard.css";
import RatingStars from "./RatingStars";
import { useNavigate } from "react-router-dom";

function StudentCard({
  id,
  foto,
  nome,
  genero,
  faculdade,
  semestre,
  avaliacao,
  totalAvaliacoes,
  disponivel,
  onPerfil
}) {
  const navigate = useNavigate();

  return (
    <div
    className="student-card"
>

      <img
        src={foto}
        alt={nome}
        className="student-photo"
      />

      <h3>{nome}</h3>

      <p>

{genero === "Feminino" ? "♀ Feminino" : "♂ Masculino"}

</p>

<p>{faculdade}</p>

<span>{semestre}</span>

<div className="rating">

<RatingStars nota={avaliacao} />

<strong>{avaliacao}</strong>

</div>

<p className="total-avaliacoes">

{totalAvaliacoes} avaliações

</p>

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
  onClick={(e) => {

    e.stopPropagation();

    if (onPerfil) {

      onPerfil();

    } else {

      navigate(`/perfil-estudante/${id}`);

    }

  }}
>
        Ver Perfil
      </button>

    </div>
  );
}

export default StudentCard;