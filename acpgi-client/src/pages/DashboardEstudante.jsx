import {
  useState,
  useEffect
} from "react";

import { useNavigate } from "react-router-dom";

function DashboardEstudante() {

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
      <div style={{ padding: "30px" }}>
        <h1>Dashboard do Estudante</h1>
        <p>Página em desenvolvimento.</p>
      </div>
    );
  }
  
  export default DashboardEstudante;