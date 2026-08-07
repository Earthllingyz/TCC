import { useState, useEffect } from "react";
import ModalAnimado from "./ModalAnimado";
import "../styles/ModalAnimado.css";

function ModalEditarEmail({
  aberto,
  fechar,
  emailAtual,
  setEmail,
  senhaAtual
}) {

  const [novoEmail, setNovoEmail] =
    useState("");

  const [confirmarEmail, setConfirmarEmail] =
    useState("");

  const [senha, setSenha] =
    useState("");

  const [erroEmail, setErroEmail] =
    useState("");

  const [erroConfirmacao, setErroConfirmacao] =
    useState("");

  const [erroSenha, setErroSenha] =
    useState("");

    useEffect(() => {

      if (!aberto) {
    
        setNovoEmail("");
        setConfirmarEmail("");
        setSenha("");
    
        setErroEmail("");
        setErroConfirmacao("");
        setErroSenha("");
    
      }
    
    }, [aberto]);

  const salvar = () => {

    let valido = true;

    setErroEmail("");
    setErroConfirmacao("");
    setErroSenha("");

    const regexEmail =
      /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (
      !regexEmail.test(novoEmail)
    ) {

      setErroEmail(
        "Digite um e-mail válido."
      );

      valido = false;
    }

    if (
      novoEmail !== confirmarEmail
    ) {

      setErroConfirmacao(
        "Os e-mails não coincidem."
      );

      valido = false;
    }

    if (
      senha !== senhaAtual
    ) {

      setErroSenha(
        "Senha incorreta."
      );

      valido = false;
    }

    if (valido) {

      setEmail(novoEmail);
    
      alert(
        "E-mail alterado com sucesso!"
      );
    
      fechar();
    }
  };

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

        <div className="modal-header">

          <h2>
            Alterar E-mail
          </h2>

          <button
            className="close-btn"
            onClick={fechar}
          >
            ✕
          </button>

        </div>

        <div className="modal-body editar-email-body">

          <label>
            Novo E-mail
          </label>

          <input
            type="email"
            value={novoEmail}
            onChange={(e) =>
              setNovoEmail(
                e.target.value
              )
            }
          />

          {
            erroEmail &&
            (
              <p className="erro">
  {erroEmail}
</p>
            )
          }

          <label>
            Confirmar E-mail
          </label>

          <input
            type="email"
            value={confirmarEmail}
            onChange={(e) =>
              setConfirmarEmail(
                e.target.value
              )
            }
          />

          {
            erroConfirmacao &&
            (
              <p
                style={{
                  color:"red"
                }}
              >
                {erroConfirmacao}
              </p>
            )
          }

          <label>
            Senha Atual
          </label>

          <input
            type="password"
            value={senha}
            onChange={(e) =>
              setSenha(
                e.target.value
              )
            }
          />

          {
            erroSenha &&
            (
              <p
                style={{
                  color:"red"
                }}
              >
                {erroSenha}
              </p>
            )
          }

          <button
            className="publicar-btn"
            onClick={salvar}
          >
            Confirmar
          </button>

        </div>

      </div>

    </div>

</ModalAnimado>

  );
}

export default ModalEditarEmail;