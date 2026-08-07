import "../styles/cadastro.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import ModalSolicitacaoConta
from "../modals/ModalSolicitacaoConta";

function Cadastro() {

  const [tipo, setTipo] = useState("cliente");

  const [nome, setNome] = useState("");

const [telefone, setTelefone] = useState("");

const [email, setEmail] = useState("");

const [senha, setSenha] = useState("");

const [cpf, setCpf] = useState("");

const [faculdade, setFaculdade] = useState("");

const [periodo, setPeriodo] = useState("");

const [sexo, setSexo] = useState("");

const [arquivo, setArquivo] = useState(null);

const [erros, setErros] = useState({});

const [erroFormulario,
  setErroFormulario] =
  useState("");

  const [abrirModalSolicitacao, setAbrirModalSolicitacao] =
useState(false);

  const navigate = useNavigate();

  const formatarTelefone = (valor) => {

    valor = valor.replace(/\D/g,"");
    
    valor = valor.slice(0,11);
    
    if(valor.length<=2)
    return valor;
    
    if(valor.length<=7)
    
    return `(${valor.slice(0,2)}) ${valor.slice(2)}`;
    
    return `(${valor.slice(0,2)}) ${valor.slice(2,7)}-${valor.slice(7)}`;
    
    };

    const formatarCPF = (valor)=>{

      valor=valor.replace(/\D/g,"");
      
      valor=valor.slice(0,11);
      
      if(valor.length<=3)
      return valor;
      
      if(valor.length<=6)
      
      return `${valor.slice(0,3)}.${valor.slice(3)}`;
      
      if(valor.length<=9)
      
      return `${valor.slice(0,3)}.${valor.slice(3,6)}.${valor.slice(6)}`;
      
      return `${valor.slice(0,3)}.${valor.slice(3,6)}.${valor.slice(6,9)}-${valor.slice(9)}`;
      
      };

const handleCadastro = (e) => {
  e.preventDefault();

  setErroFormulario("");
setErros({});

  const novosErros = {};

  if (!nome.trim())
    novosErros.nome =
    "Informe seu nome.";
    
    if (!telefone.trim()) {
      novosErros.telefone = "Informe seu telefone.";
    } else {
      const telefoneLimpo = telefone.replace(/\D/g, "");
    
      if (telefoneLimpo.length !== 11) {
        novosErros.telefone = "Digite um telefone válido.";
      }
    }
    
    if (!email.trim())
    novosErros.email =
    "Informe seu e-mail.";

    else if (
      !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
    ) {
    
      novosErros.email =
        "Digite um e-mail válido.";
    
    }
    
    if (!senha.trim()) {
      novosErros.senha = "Informe sua senha.";
    } else if (senha.length < 6) {
      novosErros.senha = "A senha deve ter pelo menos 6 caracteres.";
    }
    
    if (tipo === "estudante") {

      if (!cpf.trim()) {
        novosErros.cpf = "Informe o CPF.";
      } else {
        const cpfLimpo = cpf.replace(/\D/g, "");
    
        if (cpfLimpo.length !== 11) {
          novosErros.cpf = "Digite um CPF válido.";
        }
      }
    
      if (!faculdade.trim())
        novosErros.faculdade = "Informe a faculdade.";
    
      if (!periodo.trim())
        novosErros.periodo = "Informe o período.";
    
      if (!sexo)
        novosErros.sexo = "Selecione o gênero.";
    
      if (!arquivo)
        novosErros.arquivo = "Envie a declaração.";
    }

    setErros(novosErros);

if(

Object.keys(novosErros).length>0

){

setErroFormulario(

"Preencha todos os campos obrigatórios."

);

return;

}

if (tipo === "cliente") {

  localStorage.setItem("logado", "true");

  navigate("/dashboard-cliente");

} else {

  setAbrirModalSolicitacao(true);

}
};

  return (
    <div className="cadastro-container">

      <div className="cadastro-card">

        <h1>Criar Conta</h1>

        <div className="tipo-usuario">

          <button
            type="button"
            className={tipo === "estudante" ? "tipo-btn ativo" : "tipo-btn"}
            onClick={() => setTipo("estudante")}
          >
            👨‍🎓 Estudante
          </button>

          <button
            type="button"
            className={tipo === "cliente" ? "tipo-btn ativo" : "tipo-btn"}
            onClick={() => setTipo("cliente")}
          >
            👤 Cliente
          </button>

        </div>

        <form onSubmit={handleCadastro}>

        <input
type="text"
placeholder="Nome Completo"
value={nome}
onChange={(e)=>
setNome(e.target.value)
}
/>

{
erros.nome &&
<p className="erro">
{erros.nome}
</p>
}

          {tipo === "estudante" && (
            <>
              <input

type="text"

placeholder="CPF"

inputMode="numeric"

value={cpf}

onChange={(e)=>

setCpf(

formatarCPF(

e.target.value

)

)

}

onKeyDown={(e)=>{

const permitidas=[

"Backspace",

"Delete",

"ArrowLeft",

"ArrowRight",

"Tab"

];

if(

!/[0-9]/.test(e.key)

&&

!permitidas.includes(e.key)

){

e.preventDefault();

}

}}

 />

{
  erros.cpf &&
  <p className="erro">
    {erros.cpf}
  </p>
}

<input
  type="text"
  placeholder="Faculdade"
  value={faculdade}
  onChange={(e) =>
    setFaculdade(e.target.value)
  }
/>

{
  erros.faculdade &&
  <p className="erro">
    {erros.faculdade}
  </p>
}

<input
  type="text"
  placeholder="Período"
  value={periodo}
  onChange={(e) =>
    setPeriodo(e.target.value)
  }
/>

{
  erros.periodo &&
  <p className="erro">
    {erros.periodo}
  </p>
}

<select
  value={sexo}
  onChange={(e) =>
    setSexo(e.target.value)
  }
>
  <option value="">
    Selecione
  </option>

  <option value="Masculino">
    Masculino
  </option>

  <option value="Feminino">
    Feminino
  </option>

  <option value="Outro">
    Outro
  </option>
</select>

{
  erros.sexo &&
  <p className="erro">
    {erros.sexo}
  </p>
}

              <label>
                Declaração de Matrícula
              </label>

              <input
  type="file"
  onChange={(e) =>
    setArquivo(e.target.files[0])
  }
/>

{
  erros.arquivo &&
  <p className="erro">
    {erros.arquivo}
  </p>
}
            </>
          )}

<input

type="text"

inputMode="numeric"

placeholder="Telefone"

value={telefone}

onChange={(e)=>

setTelefone(

formatarTelefone(

e.target.value

)

)

}

onKeyDown={(e)=>{

const permitidas=[

"Backspace",

"Delete",

"ArrowLeft",

"ArrowRight",

"Tab"

];

if(

!/[0-9]/.test(e.key)

&&

!permitidas.includes(e.key)

){

e.preventDefault();

}

}}

 />

{
  erros.telefone &&
  <p className="erro">
    {erros.telefone}
  </p>
}

<input
  type="email"
  placeholder="E-mail"
  value={email}
  onChange={(e) =>
    setEmail(e.target.value)
  }
/>

{
  erros.email &&
  <p className="erro">
    {erros.email}
  </p>
}

<input
  type="password"
  placeholder="Senha"
  value={senha}
  onChange={(e) =>
    setSenha(e.target.value)
  }
/>

{
  erros.senha &&
  <p className="erro">
    {erros.senha}
  </p>
}

{

erroFormulario &&

<p className="erro-geral">

{erroFormulario}

</p>

}

          <button
            type="submit"
            className="cadastro-btn"
          >
            Criar Conta
          </button>

        </form>

        <ModalSolicitacaoConta
  aberto={abrirModalSolicitacao}
  fechar={() =>
    setAbrirModalSolicitacao(false)
  }
/>

      </div>

    </div>
  );
}

export default Cadastro;