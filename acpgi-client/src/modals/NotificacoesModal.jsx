import ModalAnimado from "./ModalAnimado";
import "../styles/ModalAnimado.css";

function NotificacoesModal({
    aberto,
    fechar
  }) {
  
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
          <h2>Notificações</h2>
  
          <p>
            Nenhuma notificação no momento.
          </p>
        </div>
      </div>

</ModalAnimado>

    );
  }
  
  export default NotificacoesModal;