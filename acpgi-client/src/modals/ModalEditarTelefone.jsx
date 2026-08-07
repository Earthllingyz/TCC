import { useState, useEffect } from "react";
import ModalAnimado from "./ModalAnimado";
import "../styles/ModalAnimado.css";

function ModalEditarTelefone({
  aberto,
  fechar,
  telefoneAtual,
  setTelefone,
  senhaAtual
}) {

  const [novoTelefone,
    setNovoTelefone] =
    useState("");

    const formatarTelefone = (valor) => {

      valor = valor.replace(/\D/g, "");
    
      valor = valor.slice(0, 11);
    
      if (valor.length <= 2) {
    
        return valor;
    
      }
    
      if (valor.length <= 7) {
    
        return `(${valor.slice(0, 2)}) ${valor.slice(2)}`;
    
      }
    
      return `(${valor.slice(0, 2)}) ${valor.slice(
        2,
        7
      )}-${valor.slice(7)}`;
    
    };

  const [confirmarTelefone,
    setConfirmarTelefone] =
    useState("");

  const [senha,
    setSenha] =
    useState("");

  const [erroTelefone,
    setErroTelefone] =
    useState("");

  const [erroConfirmacao,
    setErroConfirmacao] =
    useState("");

  const [erroSenha,
    setErroSenha] =
    useState("");

    useEffect(() => {

      if (!aberto) {
    
        setNovoTelefone("");
        setConfirmarTelefone("");
        setSenha("");
    
        setErroTelefone("");
        setErroConfirmacao("");
        setErroSenha("");
    
      }
    
    }, [aberto]);

  const salvar = () => {

    let valido = true;

    setErroTelefone("");
    setErroConfirmacao("");
    setErroSenha("");

    const telefoneLimpo =
  novoTelefone.replace(/\D/g, "");

if (telefoneLimpo.length !== 11) {

  setErroTelefone(
    "Digite um telefone válido com 11 números."
  );

  valido = false;

}

    if (
      novoTelefone !==
      confirmarTelefone
    ) {

      setErroConfirmacao(
        "Os telefones não coincidem."
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

      setTelefone(novoTelefone);
    
      alert(
        "Telefone alterado com sucesso!"
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
        onClick={(e)=>
          e.stopPropagation()
        }
      >

        <div className="modal-header">

          <h2>
            Alterar Telefone
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
            Novo Telefone
          </label>

          <input
  type="text"
  inputMode="numeric"
  placeholder="(11) 99999-9999"
  value={novoTelefone}
  onChange={(e) =>
    setNovoTelefone(
      formatarTelefone(
        e.target.value
      )
    )
  }

  onKeyDown={(e) => {

    const teclasPermitidas = [
      "Backspace",
      "Delete",
      "ArrowLeft",
      "ArrowRight",
      "Tab"
    ];

    if (
      !/[0-9]/.test(e.key) &&
      !teclasPermitidas.includes(e.key)
    ) {
      e.preventDefault();
    }

  }}
/>

<p className="dica-campo">
  Informe um telefone com DDD e 11 números.
</p>

          {
            erroTelefone &&
            <p className="erro">
              {erroTelefone}
            </p>
          }

          <label>
            Confirmar Telefone
          </label>

          <input
  type="text"
  inputMode="numeric"
  placeholder="(11) 99999-9999"
  value={confirmarTelefone}
  onChange={(e) =>
    setConfirmarTelefone(
      formatarTelefone(
        e.target.value
      )
    )
  }
  onKeyDown={(e) => {

    const teclasPermitidas = [
      "Backspace",
      "Delete",
      "ArrowLeft",
      "ArrowRight",
      "Tab"
    ];

    if (
      !/[0-9]/.test(e.key) &&
      !teclasPermitidas.includes(e.key)
    ) {
      e.preventDefault();
    }

  }}
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
            onChange={(e)=>
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

export default ModalEditarTelefone;