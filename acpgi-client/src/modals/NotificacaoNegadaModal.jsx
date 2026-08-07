import { useNavigate } from "react-router-dom";
import StudentCard from "../components/StudentCard";
import "../styles/NotificacaoNegadaModal.css";

function NotificacaoNegadaModal({
    aberto,
    fechar,
    notificacao
}) {

    const navigate = useNavigate();

    if(!aberto || !notificacao) return null;

    return(

        <div
            className="modal-overlay"
            onClick={fechar}
        >

            <div
                className="modal-content"
                onClick={(e)=>e.stopPropagation()}
            >

                <div className="modal-header">

                    <h2>Solicitação negada</h2>

                    <button
                        className="close-btn"
                        onClick={fechar}
                    >
                        ✕
                    </button>

                </div>

                <div className="modal-body">

                <p>

A solicitação de consulta com

<strong> {notificacao.estudante} </strong>

foi negada.

<br/>

Dia:

<strong> {notificacao.dia}</strong>

<br/>

Horário:

<strong> {notificacao.horario}</strong>


</p>


    <StudentCard

                    id={notificacao.estudanteId}

                    foto={notificacao.foto}

                    nome={notificacao.estudante}

                    genero={notificacao.genero}

                    faculdade={notificacao.faculdade}

                    semestre={`${notificacao.semestre}º semestre`}

                    avaliacao={notificacao.avaliacao}

                    totalAvaliacoes={notificacao.totalAvaliacoes}

                    disponivel={true}

                    onPerfil={() => {

                        navigate(
                            `/perfil-estudante/${notificacao.estudanteId}?negado=${notificacao.dia}&horario=${notificacao.horario}`
                        );

                        fechar();

                    }}

                />

</div>

            </div>

        </div>

    );

}

export default NotificacaoNegadaModal;