import "../styles/SolicitacaoModal.css";
import ModalAnimado from "./ModalAnimado";
import "../styles/ModalAnimado.css";

function SolicitacaoModal({
    aberto,
    fechar,
    solicitacao,
    cancelar
}) {

    if (!solicitacao) {
        return null;
    }

    return (

        <ModalAnimado aberto={aberto}>

        <div
    className="solicitacao-overlay"
    onClick={fechar}
>


<div
    className="solicitacao-container"
    onClick={(e)=>e.stopPropagation()}
>


                <button
                    className="fechar-modal"
                    onClick={fechar}
                >
                    ✕
                </button>



                <div className="titulo-modal">

    <div className="check-sucesso">
        ✅
    </div>

    <h2>
        Consulta solicitada
    </h2>

</div>



                <p>
                    Sua solicitação foi enviada com sucesso.
                </p>



                <div className="dados-consulta">


                    <strong>
                        Estudante
                    </strong>

                    <span>
                        {solicitacao.estudante}
                    </span>



                    <strong>
                        Dia
                    </strong>

                    <span>
                        {solicitacao.dia}
                    </span>



                    <strong>
                        Horário
                    </strong>

                    <span>
                        {solicitacao.horario}
                    </span>


                </div>



                <p className="aviso">

                    Agora basta aguardar que o estudante aceite
                    ou recuse sua solicitação.

                </p>



                <button
                    className="cancelar-solicitacao"
                    onClick={cancelar}
                >

                    Cancelar solicitação

                </button>



            </div>


        </div>

        </ModalAnimado>

    );

}


export default SolicitacaoModal;