import { useNavigate } from "react-router-dom";

function PerfilModal({
  aberto,
  fechar
}) {

  const navigate = useNavigate();

  if (!aberto) return null;

  return (
    <div
      className="modal-overlay"
      onClick={fechar}
    >
      <div
        className="modal-content"
        onClick={(e) =>
          e.stopPropagation()
        }
      >

        <h2>Perfil</h2>

        <button
  onClick={() => {
    fechar();
    navigate("/meu-perfil");
  }}
>
  Meu Perfil
</button>

        <button
          onClick={() => {
            fechar();
            navigate("/", { replace: true });
          }}
        >
          Sair
        </button>

      </div>
    </div>
  );
}

export default PerfilModal;