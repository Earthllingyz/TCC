function NotificacoesModal({
    aberto,
    fechar
  }) {
  
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
          <h2>Notificações</h2>
  
          <p>
            Nenhuma notificação no momento.
          </p>
        </div>
      </div>
    );
  }
  
  export default NotificacoesModal;