import { useState, useEffect } from "react";
import ModalAnimado from "./ModalAnimado";
import "../styles/ModalAnimado.css";

function ModalEditarNome({
  aberto,
  fechar,
  setNome,
  senhaAtual
}) {

  const [novoNome, setNovoNome] =
    useState("");

  const [confirmarNome,
    setConfirmarNome] =
    useState("");

  const [senha, setSenha] =
    useState("");

  const [erroNome,
    setErroNome] =
    useState("");

  const [erroConfirmacao,
    setErroConfirmacao] =
    useState("");

  const [erroSenha,
    setErroSenha] =
    useState("");

  useEffect(() => {

    if (!aberto) {

      setNovoNome("");
      setConfirmarNome("");
      setSenha("");

      setErroNome("");
      setErroConfirmacao("");
      setErroSenha("");

    }

  }, [aberto]);

  const salvar = () => {

    let valido = true;

    setErroNome("");
    setErroConfirmacao("");
    setErroSenha("");

    if (
      novoNome.trim().length < 3
    ) {

      setErroNome(
        "Digite um nome válido."
      );

      valido = false;

    }

    if (
      novoNome !== confirmarNome
    ) {

      setErroConfirmacao(
        "Os nomes não coincidem."
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

      setNome(novoNome);

      alert(
        "Nome alterado com sucesso!"
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
            Alterar Nome
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
            Nome Completo
          </label>

          <input
            type="text"
            value={novoNome}
            onChange={(e) =>
              setNovoNome(
                e.target.value
              )
            }
          />

          {
            erroNome &&
            <p className="erro">
              {erroNome}
            </p>
          }

          <label>
            Confirmar Nome
          </label>

          <input
            type="text"
            value={confirmarNome}
            onChange={(e) =>
              setConfirmarNome(
                e.target.value
              )
            }
          />

          {
            erroConfirmacao &&
            <p className="erro">
              {erroConfirmacao}
            </p>
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
            <p className="erro">
              {erroSenha}
            </p>
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

export default ModalEditarNome;