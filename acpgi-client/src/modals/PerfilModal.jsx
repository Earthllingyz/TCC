import { useNavigate } from "react-router-dom";
import ModalAnimado from "./ModalAnimado";
import "../styles/ModalAnimado.css";

function PerfilModal({
  aberto,
  fechar
}) {

  const navigate = useNavigate();

  return (

    <ModalAnimado aberto={aberto}>

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

    </ModalAnimado>

  );
}

export default PerfilModal;