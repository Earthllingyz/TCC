import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/login.css";
import logo from "../assets/logo.png";

function TelaLogin() {

  const [tipoUsuario, setTipoUsuario] = useState("estudante");

  const [email, setEmail] = useState("");

const [senha, setSenha] = useState("");

const [erroEmail, setErroEmail] = useState("");

const [erroSenha, setErroSenha] = useState("");

const [erroFormulario,
  setErroFormulario] =
  useState("");

  localStorage.removeItem("notificacoes");

  localStorage.removeItem("statusHorarios");

  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
  
    setErroFormulario("");
  
    if (!email.trim()) {
      setErroFormulario("Preencha o e-mail.");
      return;
    }
  
    if (!senha.trim()) {
      setErroFormulario("Preencha a senha.");
      return;
    }

    if (senha.length < 6) {
      setErroFormulario(
          "Sua senha possui menos de 6 caracteres."
      );
      return;
  }
  
    if (tipoUsuario === "cliente") {
      localStorage.clear();
      localStorage.setItem("logado", "true");
      navigate("/dashboard-cliente");
    } else {
      localStorage.setItem("logado", "true");
      navigate("/dashboard-estudante");
    }
  };

  return (
    <div className="login-container">

      <div className="login-card">

        <img src={logo} alt="ACPGI" className="logo" />

        <h1>ACPGI</h1>

        <p className="subtitle">
          Aplicativo de Consultas Psicológicas Gratuitas
        </p>

        <div className="tipo-usuario">

          <button
            type="button"
            className={
              tipoUsuario === "estudante"
                ? "tipo-btn ativo"
                : "tipo-btn"
            }
            onClick={() => setTipoUsuario("estudante")}
          >
            👨‍🎓 Estudante
          </button>

          <button
            type="button"
            className={
              tipoUsuario === "cliente"
                ? "tipo-btn ativo"
                : "tipo-btn"
            }
            onClick={() => setTipoUsuario("cliente")}
          >
            👤 Cliente
          </button>

        </div>

        <p className="tipo-selecionado">
          Entrando como: <strong>{tipoUsuario}</strong>
        </p>

        <form onSubmit={handleLogin}>

        <input
  type="email"
  placeholder="Digite seu e-mail"
  value={email}
  onChange={(e)=>
    setEmail(e.target.value)
  }
/>

<input
  type="password"
  placeholder="Digite sua senha"
  value={senha}
  onChange={(e)=>
    setSenha(e.target.value)
  }
/>

{
erroFormulario &&

<p className="erro-geral">

{erroFormulario}

</p>

}

          <button
            type="submit"
            className="entrar-btn"
          >
            Entrar
          </button>

        </form>

        <div className="cadastro">

          <span>
            Ainda não possui uma conta?
          </span>

          <a href="/cadastro">
          Cadastre-se
          </a>

        </div>

      </div>

    </div>
  );
}

export default TelaLogin;