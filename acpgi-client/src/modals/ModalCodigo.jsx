import { useState, useEffect } from "react";
import ModalAnimado from "./ModalAnimado";
import "../styles/ModalAnimado.css";

function ModalCodigo({
  aberto,
  fechar,
  aoValidar,
  mensagem
}) {

  const [codigo, setCodigo] =
  useState(["", "", "", ""]);

  const alterarDigito = (
    valor,
    indice
  ) => {
  
    if (!/^[0-9]?$/.test(valor))
      return;
  
    const novoCodigo =
      [...codigo];
  
    novoCodigo[indice] = valor;
  
    setCodigo(novoCodigo);
  
    if (
      valor &&
      indice < 3
    ) {
  
      document
        .getElementById(
          `codigo-${indice + 1}`
        )
        ?.focus();
  
    }
  
  };

  const [erro, setErro] =
    useState("");

    useEffect(() => {

      if (!aberto) {
    
        setCodigo(["", "", "", ""]);
        setErro("");
    
      }
    
    }, [aberto]);

  const verificar = () => {

    if (
      codigo.join("") === "1234"
    ) {

      setErro("");

      fechar();

      aoValidar();

    }

    else {

      setErro(
        "Código inválido."
      );

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

<h2 className="titulo-modal">
  Código de Verificação
</h2>

        <p className="codigo-info">
  {mensagem}
</p>
        <div className="codigo-boxes">

  {[0,1,2,3].map((i) => (

    <input
      key={i}
      id={`codigo-${i}`}
      className="codigo-input"
      inputMode="numeric"
      maxLength="1"
      value={codigo[i]}
      onChange={(e) =>
        alterarDigito(
          e.target.value,
          i
        )
      }

      onKeyDown={(e) => {

        if (
          e.key === "Backspace" &&
          !codigo[i] &&
          i > 0
        ) {
      
          document
            .getElementById(
              `codigo-${i - 1}`
            )
            ?.focus();
      
        }
      
      }}
    />

  ))}

</div>

        {
          erro &&
          (
            <p
              style={{
                color:"red"
              }}
            >
              {erro}
            </p>
          )
        }

        <button
          onClick={verificar}
        >
          Confirmar
        </button>

      </div>

    </div>

    </ModalAnimado>

  );
}

export default ModalCodigo;