import { useState, useEffect } from "react";
import ModalAnimado from "./ModalAnimado";
import "../styles/ModalAnimado.css";

function ModalEditarSenha({
  aberto,
  fechar,
  senhaAtual,
  setSenha
}) {

  const [novaSenha,
    setNovaSenha] =
    useState("");

  const [confirmarSenha,
    setConfirmarSenha] =
    useState("");

  const [erroSenha,
    setErroSenha] =
    useState("");

  const [erroConfirmacao,
    setErroConfirmacao] =
    useState("");

    useEffect(() => {

      if (!aberto) {
    
        setNovaSenha("");
        setConfirmarSenha("");
    
        setErroSenha("");
        setErroConfirmacao("");
    
      }
    
    }, [aberto]);

  const salvar = () => {

    let valido = true;

    setErroSenha("");
    setErroConfirmacao("");

    if (
      novaSenha.length < 6
    ) {
    
      setErroSenha(
        "Mínimo de 6 caracteres."
      );
    
      valido = false;
    }

    if (
      novaSenha === senhaAtual
    ) {
    
      setErroSenha(
        "A nova senha deve ser diferente da senha atual."
      );
    
      valido = false;
    }

    if (
      novaSenha !==
      confirmarSenha
    ) {

      setErroConfirmacao(
        "As senhas não coincidem."
      );

      valido = false;
    }

    if (valido) {

      setSenha(novaSenha);
    
      alert(
        "Senha alterada com sucesso!"
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
            Alterar Senha
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
            Nova Senha
          </label>

          <input
            type="password"
            value={novaSenha}
            onChange={(e)=>
              setNovaSenha(
                e.target.value
              )
            }
          />

<small>
  Mínimo de 6 caracteres
</small>

          {
            erroSenha &&
            <p className="erro">
              {erroSenha}
            </p>
          }

          <label>
            Confirmar Senha
          </label>

          <input
            type="password"
            value={confirmarSenha}
            onChange={(e)=>
              setConfirmarSenha(
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

export default ModalEditarSenha;