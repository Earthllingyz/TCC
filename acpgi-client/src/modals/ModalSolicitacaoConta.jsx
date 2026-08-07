import { useNavigate } from "react-router-dom";
import ModalAnimado from "./ModalAnimado";
import "../styles/ModalAnimado.css";

function ModalSolicitacaoConta({
  aberto,
  fechar
}) {

  const navigate = useNavigate();

  const finalizar = () => {
    fechar();
  
    setTimeout(() => {
      navigate("/");
    }, 300);
  };
  

  return (

    <ModalAnimado aberto={aberto}>

    <div
      className="modal-overlay"
      onClick={finalizar}
    >

      <div
        className="modal-content"
        onClick={(e)=>e.stopPropagation()}
      >

        <div className="modal-header">

          <h2>
          ✅ Solicitação enviada!
          </h2>

          <button
            className="close-btn"
            onClick={finalizar}
          >
            ✕
          </button>

        </div>

        <div className="modal-body">

          <p>

            No momento estamos avaliando seus dados, entraremos em contato assim que estiver tudo certo.

          </p>

          <br/>

          <button
            className="publicar-btn"
            onClick={finalizar}
          >
            OK
          </button>

        </div>

      </div>

    </div>

    </ModalAnimado>

  );

}

export default ModalSolicitacaoConta;