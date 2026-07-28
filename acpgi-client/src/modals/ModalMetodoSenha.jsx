function ModalMetodoSenha({
  aberto,
  fechar,
  abrirCodigoEmail,
  abrirCodigoSms
}) {

  if (!aberto) return null;

  return (

    <div
      className="modal-overlay"
      onClick={fechar}
    >

      <div
        className="modal-content"
        onClick={(e)=>
          e.stopPropagation()
        }
      >

        <div className="modal-header">

          <h2>
            Verificação
          </h2>

          <button
            className="close-btn"
            onClick={fechar}
          >
            ✕
          </button>

        </div>

        <div className="modal-body metodo-senha-body">
          
          <p>
            Escolha onde deseja
            receber o código.
          </p>

          <button
            className="publicar-btn"
            onClick={abrirCodigoEmail}
          >
            Receber por E-mail
          </button>

          <button
            className="publicar-btn"
            onClick={abrirCodigoSms}
          >
            Receber por SMS
          </button>

        </div>

      </div>

    </div>

  );
}

export default ModalMetodoSenha;