import "../styles/ConsultaConfirmadaModal.css";
import { useNavigate } from "react-router-dom";

function ConsultaConfirmadaModal({
    aberto,
    fechar,
    consulta,
    aberturas,
    cancelar
}) {

    const navigate = useNavigate();

    if (!aberto || !consulta) return null;

    return (

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

        navigate(
            `/chat/${consulta.estudanteId}?dia=${consulta.dia}&horario=${consulta.horario}`
        );
    
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

    );

}

export default ConsultaConfirmadaModal;