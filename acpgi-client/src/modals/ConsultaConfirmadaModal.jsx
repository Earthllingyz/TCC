import "../styles/ConsultaConfirmadaModal.css";
import { useNavigate } from "react-router-dom";
import ModalAnimado from "./ModalAnimado";
import "../styles/ModalAnimado.css";


function ConsultaConfirmadaModal({
    aberto,
    fechar,
    consulta,
    aberturas,
    cancelar
}) {

    const navigate = useNavigate();

    if (!consulta) return null;

    return (

        <ModalAnimado aberto={aberto}>

        <div
            className="modal-overlay"
            onClick={fechar}
        >

            <div
                className="modal-content"
                onClick={(e) => e.stopPropagation()}
            >

                <div className="modal-header">

                    <h2>Consulta confirmada</h2>

                    <button
                        className="close-btn"
                        onClick={fechar}
                    >
                        ✕
                    </button>

                </div>

                <div className="modal-body">

                    {
                        aberturas < 3 ? (
                            <>

                                <p>

                                    Volte na hora da consulta para acessar o chat privado.

                                </p>

                                <button
                                    className="chat-bloqueado-btn"
                                    disabled
                                >

                                    💬 Chat (bloqueado)

                                </button>

                                <button
                                    className="cancelar-consulta-btn"
                                    onClick={cancelar}
                                >

                                    Cancelar consulta

                                </button>

                            </>
                        ) : (
                            <>

                                <p>

                                    Está na hora da consulta!
                                    <br />
                                    Não deixe o estudante esperando.

                                </p>

                                <button
    onClick={() => {
        const dados = {
            estudanteId: consulta.estudanteId,
            dia: consulta.dia,
            horario: consulta.horario
        };
    
        localStorage.setItem(
            "consultaConfirmada",
            JSON.stringify(dados)
        );
    
        fechar();
    
        setTimeout(() => {
            navigate(
                `/chat/${consulta.estudanteId}?dia=${consulta.dia}&horario=${consulta.horario}`
            );
        }, 300);
    }}
    
>
    💬 Chat
</button>

                            </>
                        )
                    }

                </div>

            </div>

        </div>

        </ModalAnimado>

    );

}

export default ConsultaConfirmadaModal;