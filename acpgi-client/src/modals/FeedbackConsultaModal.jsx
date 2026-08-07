import { useState } from "react";
import "../styles/FeedbackConsultaModal.css";

function FeedbackConsultaModal({
    aberto,
    fechar,
    estudante,
    enviarFeedback
}) {

    const [estrelas, setEstrelas] = useState(0);
    const [comentario, setComentario] = useState("");

    if (!aberto) return null;

    function enviar() {

        if (estrelas === 0) {
            return;
        }

        enviarFeedback({
            estrelas,
            comentario
        });

        setEstrelas(0);
        setComentario("");

    }

    return (

        <div className="modal-overlay">

            <div
                className="modal-content feedback-consulta-modal"
                onClick={(e) => e.stopPropagation()}
            >

                <div className="modal-header">

                    <h2>
                    ⭐ Como foi sua consulta?
                    </h2>

                    <button
                        className="close-btn"
                        onClick={fechar}
                    >
                        ✕
                    </button>

                </div>

                <div className="modal-body">

                    <p>
                        Deixe um feedback sobre o atendimento de {estudante}.
                    </p>

                    <div className="feedback-estrelas">

                        {[1, 2, 3, 4, 5].map((estrela) => (

                            <button
                                key={estrela}
                                type="button"
                                className={
                                    estrela <= estrelas
                                        ? "estrela selecionada"
                                        : "estrela"
                                }
                                onClick={() => setEstrelas(estrela)}
                            >
                                ★
                            </button>

                        ))}

                    </div>

                    <textarea
                        value={comentario}
                        onChange={(e) => setComentario(e.target.value)}
                        placeholder="Conte como foi sua experiência..."
                    />

                    <button
                        className="enviar-feedback-btn"
                        onClick={enviar}
                        disabled={estrelas === 0}
                    >
                        Enviar feedback
                    </button>

                </div>

            </div>

        </div>

    );

}

export default FeedbackConsultaModal;