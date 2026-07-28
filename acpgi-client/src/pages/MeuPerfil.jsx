import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { FaTimes } from "react-icons/fa";
import "../styles/MeuPerfil.css";
import {
  FaUserCircle,
  FaPen,
  FaEye,
  FaEyeSlash
} from "react-icons/fa";

import ModalCodigo from "../modals/ModalCodigo";

import ModalMetodoSenha from "../modals/ModalMetodoSenha";

import ModalEditarEmail from "../modals/ModalEditarEmail";

import ModalEditarTelefone from "../modals/ModalEditarTelefone";

import ModalEditarSenha from "../modals/ModalEditarSenha";

import ModalEditarNome from "../modals/ModalEditarNome";

function MeuPerfil() {

  const navigate = useNavigate();

  const [nome, setNome] =
  useState("Renato Ferreira");

  const [email, setEmail] =
    useState("renato@email.com");

  const [telefone, setTelefone] =
    useState("(11) 99999-9999");

  const [senha, setSenha] =
    useState("123456");

    const [abrirCodigo,
      setAbrirCodigo] =
      useState(false);
    
    const [abrirMetodoSenha,
      setAbrirMetodoSenha] =
      useState(false);
    
    const [abrirEditarEmail,
      setAbrirEditarEmail] =
      useState(false);
    
    const [abrirEditarTelefone,
      setAbrirEditarTelefone] =
      useState(false);
    
    const [abrirEditarSenha,
      setAbrirEditarSenha] =
      useState(false);

      const [abrirMetodoNome,
        setAbrirMetodoNome] =
        useState(false);
      
      const [abrirEditarNome,
        setAbrirEditarNome] =
        useState(false);
    
    const [tipoAcao,
      setTipoAcao] =
      useState("");

      const [tipoSenha,
        setTipoSenha] =
        useState("");

        const [metodoCodigo,
          setMetodoCodigo] =
          useState("");

  const [mostrarSenha, setMostrarSenha] =
    useState(false);

    useEffect(() => {

      if (
        localStorage.getItem("logado") !== "true"
      ) {
    
        navigate("/", {
          replace: true
        });
    
      }
    
    }, [navigate]);

  return (
    <div className="perfil-container">

      <div className="perfil-card">

      <button
  className="fechar-perfil-btn"
  onClick={() =>
    navigate("/dashboard-cliente")
  }
>
  <FaTimes />
</button>

        <div className="perfil-topo">

          <FaUserCircle
            className="perfil-avatar"
          />

<div className="perfil-nome-header">

<h1>{nome}</h1>

<button
  className="icon-action"
  onClick={() =>
    setAbrirMetodoNome(true)
  }
>
  <FaPen />
</button>

</div>

        </div>

        <div className="info-box">

          <div className="info-header">

            <span>E-mail</span>

            <button
  className="icon-action"
  onClick={() => {

    setTipoAcao("email");
  
    setAbrirCodigo(true);
  
  }}
>
  <FaPen />
</button>

          </div>

          <p>{email}</p>

        </div>

        <div className="info-box">

          <div className="info-header">

            <span>Telefone</span>

            <button
  className="icon-action"
  onClick={() => {

    setTipoAcao("telefone");
  
    setAbrirCodigo(true);
  
  }}
>
  <FaPen />
</button>

          </div>

          <p>{telefone}</p>

        </div>

        <div className="info-box">

          <div className="info-header">

            <span>Senha</span>

            <div className="acoes-senha">

            <button
  className="icon-action"
  onClick={() => {

    if (mostrarSenha) {
  
      setMostrarSenha(false);
  
      return;
  
    }
  
    setTipoSenha("visualizar");
  
    setAbrirMetodoSenha(true);
  
  }}
>
                {
                  mostrarSenha
                    ? <FaEyeSlash />
                    : <FaEye />
                }
              </button>

              <button
  className="icon-action"
  onClick={() => {

    setTipoSenha("editar");

    setAbrirMetodoSenha(true);

  }}
>
  <FaPen />
</button>

            </div>

          </div>

          <p>
  {
    mostrarSenha
      ? senha
      : "*".repeat(
          senha.length
        )
  }
</p>

        </div>

      </div>

      <ModalCodigo
  aberto={abrirCodigo}
  fechar={() =>
    setAbrirCodigo(false)
  }

  mensagem={

    tipoAcao === "email"
  
    ? "Um código foi enviado por SMS para o telefone cadastrado."
  
    : tipoAcao === "telefone"
  
    ? "Um código foi enviado para o e-mail cadastrado."
  
    : metodoCodigo === "sms"
  
    ? "Um código foi enviado por SMS para o telefone cadastrado."
  
    : "Um código foi enviado para o e-mail cadastrado."
  
  }

  aoValidar={() => {

    if (tipoAcao === "nome") {
  
      setAbrirEditarNome(true);
  
    }
  
    if (tipoAcao === "email") {
  
      setAbrirEditarEmail(true);
  
    }
  
    if (tipoAcao === "telefone") {
  
      setAbrirEditarTelefone(true);
  
    }
  
    if (tipoAcao === "senha") {
  
      setAbrirEditarSenha(true);
  
    }
  
  }}
/>

<ModalMetodoSenha
  aberto={abrirMetodoSenha}

  fechar={() =>
    setAbrirMetodoSenha(false)
  }

  abrirCodigoEmail={() => {

    setAbrirMetodoSenha(false);

    setTipoAcao("senha");

    setMetodoCodigo("email");

    setAbrirCodigo(true);

  }}

  abrirCodigoSms={() => {

    setAbrirMetodoSenha(false);

    setTipoAcao("senha");

    setMetodoCodigo("sms");

    setAbrirCodigo(true);

  }}
/>

<ModalMetodoSenha
  aberto={abrirMetodoNome}
  fechar={() =>
    setAbrirMetodoNome(false)
  }

  abrirCodigoEmail={() => {

    setAbrirMetodoNome(false);

    setTipoAcao("nome");

    setMetodoCodigo("email");

    setAbrirCodigo(true);

  }}

  abrirCodigoSms={() => {

    setAbrirMetodoNome(false);

    setTipoAcao("nome");

    setMetodoCodigo("sms");

    setAbrirCodigo(true);

  }}
/>

<ModalEditarEmail
  aberto={abrirEditarEmail}
  fechar={() =>
    setAbrirEditarEmail(false)
  }
  emailAtual={email}
  setEmail={setEmail}
  senhaAtual={senha}
/>

<ModalEditarTelefone
  aberto={abrirEditarTelefone}
  fechar={() =>
    setAbrirEditarTelefone(false)
  }
  telefoneAtual={telefone}
  setTelefone={setTelefone}
  senhaAtual={senha}
/>

<ModalEditarSenha
  aberto={abrirEditarSenha}
  fechar={() =>
    setAbrirEditarSenha(false)
  }
  setSenha={setSenha}
/>

<ModalEditarNome
  aberto={abrirEditarNome}
  fechar={() =>
    setAbrirEditarNome(false)
  }

  nomeAtual={nome}

  setNome={setNome}

  senhaAtual={senha}
/>

    </div>
  );
}

export default MeuPerfil;