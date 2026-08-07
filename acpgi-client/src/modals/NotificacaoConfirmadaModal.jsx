import { useNavigate } from "react-router-dom";
import StudentCard from "../components/StudentCard";
import "../styles/NotificacaoConfirmadaModal.css";


function NotificacaoConfirmadaModal({

    aberto,

    fechar,

    notificacao

}){


const navigate = useNavigate();


if(!aberto || !notificacao)

return null;



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


<h2>
Consulta confirmada
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

Sua consulta com

<strong> {notificacao.estudante} </strong>

foi confirmada.

<br/>

Dia:

<strong> {notificacao.dia} </strong>

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


onPerfil={()=>{


    navigate(
        `/perfil-estudante/${notificacao.estudanteId}?confirmado=${notificacao.dia}&horario=${notificacao.horario}`
    );


fechar();


}}


/>


</div>


</div>


</div>


);


}


export default NotificacaoConfirmadaModal;