import "../styles/disponibilidade.css";

import {
  useState,
  useEffect
} from "react";

import { useNavigate } from "react-router-dom";

function Disponibilidade() {

  const navigate = useNavigate();

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
    <div className="disp-container">

      <div className="disp-header">
        <h1>Minha Disponibilidade</h1>
        <p>
          Defina os dias e horários em que você estará disponível para atendimento.
        </p>
      </div>

      <div className="dia-card">

        <div className="dia-topo">
          <h2>Segunda-feira</h2>
          <button>+ Adicionar Período</button>
        </div>

        <div className="periodo">

          <input type="time" defaultValue="08:00" />

          <span>até</span>

          <input type="time" defaultValue="12:00" />

        </div>

        <div className="periodo">

          <input type="time" defaultValue="14:00" />

          <span>até</span>

          <input type="time" defaultValue="18:00" />

        </div>

      </div>

      <div className="dia-card">

        <div className="dia-topo">
          <h2>Terça-feira</h2>
          <button>+ Adicionar Período</button>
        </div>

        <div className="periodo">

          <input type="time" defaultValue="09:00" />

          <span>até</span>

          <input type="time" defaultValue="13:00" />

        </div>

      </div>

      <div className="duracao-card">

        <h2>Duração padrão da consulta</h2>

        <div className="duracoes">

          <label>
            <input type="radio" name="duracao" />
            30 minutos
          </label>

          <label>
            <input type="radio" name="duracao" defaultChecked />
            50 minutos
          </label>

          <label>
            <input type="radio" name="duracao" />
            60 minutos
          </label>

        </div>

      </div>

      <button className="salvar-btn">
        Salvar Disponibilidade
      </button>

    </div>
  );
}

export default Disponibilidade;