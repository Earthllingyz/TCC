import { useNavigate } from "react-router-dom";

function ModalSolicitacaoConta({
  aberto,
  fechar
}) {

  const navigate = useNavigate();

  if (!aberto) return null;

  const finalizar = () => {

    fechar();

    navigate("/");

  };

  return (

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

  );

}

export default ModalSolicitacaoConta;