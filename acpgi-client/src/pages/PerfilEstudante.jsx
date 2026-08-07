import {
    useParams,
    useNavigate,
    useLocation
} from "react-router-dom";
import { useState, useEffect, useRef } from "react";
import estudantes from "../data/Estudantes";
import RatingStars from "../components/RatingStars";
import "../styles/PerfilEstudante.css";
import SolicitacaoModal from "../modals/SolicitacaoModal";
import ConsultaConfirmadaModal from "../modals/ConsultaConfirmadaModal";
import FeedbackConsultaModal from "../modals/FeedbackConsultaModal";

function PerfilEstudante() {

    const { id } = useParams();

    const query = new URLSearchParams(window.location.search);

const diaNegado = query.get("negado");

const horarioNegado = query.get("horario");

const diaConfirmado = query.get("confirmado");

const horarioConfirmado = query.get("horario");

    const navigate = useNavigate();

    const location = useLocation();
  
    const [solicitacao, setSolicitacao] = useState(null);

    const [consultaConfirmada, setConsultaConfirmada] = useState(null);

const [aberturasConsulta, setAberturasConsulta] = useState(0);
  
    const [toast, setToast] = useState(null);

    const [agendaVazia, setAgendaVazia] = useState(false);

    const [mostrarTodosFeedbacks, setMostrarTodosFeedbacks] = useState(false);

    const toastTimeout = useRef(null);

    const [feedbackConsulta, setFeedbackConsulta] = useState(null);

  const estudante = estudantes.find(
    (e) => e.id === Number(id)
  );

  const [agenda, setAgenda] = useState(() =>
    estudante.agenda.map(dia => ({
        ...dia,
        horarios: dia.horarios.map(h => ({ ...h }))
    }))
);

useEffect(() => {

    window.scrollTo({

        top: 0,

        behavior: "smooth"

    });


    limparAgendaConsultaEncerrada();


}, []);

useEffect(() => {

    limparAgendaConsultaEncerrada();

}, [location]);

useEffect(() => {

    const encerrada = JSON.parse(
        localStorage.getItem("consultaEncerrada")
    );

    if (
        encerrada &&
        encerrada.estudanteId === estudante.id
    ) {

        setFeedbackConsulta(encerrada);

    }

}, [location]);

useEffect(() => {

    if (!diaConfirmado || !horarioConfirmado) {
        return;
    }

    setAgenda(prev =>

        prev.map(dia => ({

            ...dia,

            horarios: dia.horarios.map(horario => {

                const texto =
                    `${horario.das} às ${horario.ate}`;

                    if (
                        dia.dia === diaConfirmado &&
                        texto === horarioConfirmado
                    ) {
                    
                        const consultaEmChat = JSON.parse(
                            localStorage.getItem("consultaEmChat")
                        );

                        console.log("consultaEmChat:", consultaEmChat);
                        
                        const emChat =
                            consultaEmChat &&
                            consultaEmChat.estudanteId === estudante.id &&
                            consultaEmChat.dia === dia.dia &&
                            consultaEmChat.das === horario.das &&
                            consultaEmChat.ate === horario.ate;
                        
                        return {
                            ...horario,
                            status: emChat ? "emChat" : "confirmado"
                        };
                    
                    }

                return horario;

            })

        }))

    );

}, [diaConfirmado, horarioConfirmado]);

useEffect(() => {

    if (!diaNegado || !horarioNegado) {
        return;
    }

    setAgenda(prev =>

        prev.map(dia => ({

            ...dia,

            horarios: dia.horarios.map(horario => {

                const texto = `${horario.das} às ${horario.ate}`;

                if (
                    dia.dia === diaNegado &&
                    texto === horarioNegado
                ) {
                    return {
                        ...horario,
                        status: "negado"
                    };
                }

                return horario;

            })

        }))

    );

}, [diaNegado, horarioNegado]);

  if (!estudante) {

    return <h2>Estudante não encontrado.</h2>;

  }

  function mostrarToast(dados){

    if (toastTimeout.current) {

        clearTimeout(toastTimeout.current);

    }

    setToast(dados);

    toastTimeout.current = setTimeout(() => {

        setToast(null);

    }, 5000);

}

function enviarFeedback(feedback) {

    console.log("Feedback enviado:", {
        estudanteId: estudante.id,
        estudante: estudante.nome,
        estrelas: feedback.estrelas,
        comentario: feedback.comentario
    });

    localStorage.removeItem("consultaEncerrada");

    setFeedbackConsulta(null);

    mostrarToast({
        feedbackEnviado: true
    });

}

function negarConsulta(dia, horario){

    setAgenda(prev =>

        prev.map((d)=>({

            ...d,

            horarios:d.horarios.map((h)=>{

                if(
                    h.das === horario.das &&
                    h.ate === horario.ate
                ){

                    return {

                        ...h,

                        status:"negado"

                    };

                }


                return h;

            })

        }))

    );

}

const ordemDias = [
    "Segunda-feira",
    "Terça-feira",
    "Quarta-feira",
    "Quinta-feira",
    "Sexta-feira",
    "Sábado",
    "Domingo"
];

function limparAgendaConsultaEncerrada() {

    const encerrada = JSON.parse(
        localStorage.getItem("consultaEncerrada")
    );

    if (
        !encerrada ||
        encerrada.estudanteId !== estudante.id
    ) {
        return;
    }

    const indiceDiaConsulta = ordemDias.indexOf(encerrada.dia);

    setAgenda((agendaAtual) => {

        const novaAgenda = agendaAtual
            .map((dia) => {
    
                const indiceDia = ordemDias.indexOf(dia.dia);
    
                if (indiceDia < indiceDiaConsulta) {
                    return null;
                }
    
                if (indiceDia === indiceDiaConsulta) {
    
                    const horariosRestantes = dia.horarios.filter((horario) => {
    
                        const texto = `${horario.das} às ${horario.ate}`;
    
                        if (texto === encerrada.horario) {
                            return false;
                        }
    
                        const horaConsulta = encerrada.horario.split(" às ")[0];
    
                        return horario.das > horaConsulta;
    
                    });
    
                    if (horariosRestantes.length === 0) {
                        return null;
                    }
    
                    return {
                        ...dia,
                        horarios: horariosRestantes
                    };
                }
    
                return dia;
            })
            .filter(Boolean);
    
        setAgendaVazia(novaAgenda.length === 0);
    
        return novaAgenda;
    
    });
}


function solicitarConsulta(dia, horario){

    setAgenda(prev =>

        prev.map((d)=>({

            ...d,

            horarios:d.horarios.map((h)=>{

                if(h === horario){

                    return {

                        ...h,
                    
                        status: "solicitado"
                    
                    };

                }

                return h;

            })

        }))

    );

    const dados = {

        estudante: estudante.nome,

        dia: dia.dia,

        horario:`${horario.das} às ${horario.ate}`,

        horarioRef: {
            das: horario.das,
            ate: horario.ate
        }

    };

    mostrarToast(dados);

    const notificacoes = [

        {
            id: Date.now(),
            titulo: "Consulta confirmada",
            mensagem: "Sua consulta foi confirmada pelo estudante.",
            tipo: "sucesso",
    
            estudanteId: estudante.id,
            estudante: estudante.nome,
            foto: estudante.foto,
            faculdade: estudante.faculdade,
            semestre: estudante.semestre,
            avaliacao: estudante.avaliacao.media,
            totalAvaliacoes: estudante.avaliacao.total,
            genero: estudante.genero,
    
            dia: dia.dia,
            horario: `${horario.das} às ${horario.ate}`
        },
    
        {
            id: Date.now()+1,
            titulo: "Solicitação negada",
            mensagem: "Uma solicitação de consulta foi recusada.",
            tipo: "erro",
    
            estudanteId: estudante.id,
            estudante: estudante.nome,
            foto: estudante.foto,
            faculdade: estudante.faculdade,
            semestre: estudante.semestre,
            avaliacao: estudante.avaliacao.media,
            totalAvaliacoes: estudante.avaliacao.total,
            genero: estudante.genero,
    
            dia: dia.dia,
            horario: `${horario.das} às ${horario.ate}`
        }
    
    ];
    
    localStorage.setItem(
        "notificacoes",
        JSON.stringify(notificacoes)
    );

}

console.log("Agenda renderizada:", agenda);

  return (

        <>
        
        {
toast && (

<div

className="toast-solicitacao"

onClick={() => {

    if (
        toast.negado ||
        toast.feedbackEnviado
    ) {

        return;

    }

    if (!toast.cancelado) {

        setSolicitacao(toast);

        setToast(null);

    }

}}


>


<button

className="fechar-toast"

onClick={(e)=>{

    e.stopPropagation();

    if (toastTimeout.current) {

        clearTimeout(toastTimeout.current);

    }

    setToast(null);

}}

>

✖

</button>



<div className="toast-texto">

{
    toast.feedbackEnviado
        ? "✅ Feedback enviado com sucesso!"
        : toast.negado
        ? "❌ Solicitação negada"
        : toast.cancelado
        ? "❌ Solicitação cancelada"
        : "✅ Consulta solicitada"
}


</div>



<div className="toast-barra"></div>


</div>

)
}

    <div className="perfil-container">
    
        <div className="perfil-header">

        <button
    className="fechar-perfil"
    onClick={() => navigate(-1)}
>
    ✕
</button>

        <img
    src={estudante.foto}
    alt={estudante.nome}
    className="perfil-foto"
/>

<div className="perfil-info">

    <h1>{estudante.nome}</h1>

    <p>

        {estudante.idade} anos • {estudante.genero}

    </p>

    <p>

        {estudante.faculdade} • {estudante.semestre}º semestre

    </p>

    <div className="perfil-avaliacao">

    <RatingStars nota={estudante.avaliacao.media} />

    <h3>

        {estudante.avaliacao.media}

        {" "}

        ({estudante.avaliacao.total} avaliações)

    </h3>

</div>

</div>
    
        </div>
    
        <div className="perfil-descricao">

    <h2>Sobre a estudante</h2>

    <p>
        {estudante.descricao}
    </p>

</div>
    
        <div className="perfil-experiencia">

        <h2>Experiência no projeto</h2>

<div className="cards-experiencia">

  <div className="card-experiencia">

    <h3>Desde</h3>

    <p>{estudante.experiencia.participandoDesde}</p>

  </div>

  <div className="card-experiencia">

    <h3>Consultas</h3>

    <p>{estudante.experiencia.consultasRealizadas}</p>

  </div>

  <div className="card-experiencia">

    <h3>Avaliações</h3>

    <p>{estudante.avaliacao.total}</p>

  </div>

</div>
    
        </div>
    
        <div className="perfil-agenda">

        <h2>Agenda disponível</h2>

<div className="agenda-grid">

{
agendaVazia ? (

    <div className="sem-horarios">

        Sem horários disponíveis essa semana,
        espere até semana que vem.

    </div>

) : (

agenda.map((dia,index)=>(


        <div
            key={index}
            className="agenda-card"
        >

            <h3>{dia.dia}</h3>

            {dia.horarios.map((horario, i) => (

<div
    key={i}
    className="horario-item"
>

    <p>

        🕒 {horario.das} às {horario.ate}

    </p>

    <button

className={
    horario.status === "livre"
        ? "btn-agendar"
        : horario.status === "solicitado"
        ? "btn-solicitado"
        : horario.status === "negado"
        ? "btn-negado"
        : horario.status === "confirmado"
        ? "btn-confirmado"
        : "btn-chat"
}

onClick={()=>{


    if(horario.status === "livre"){

        solicitarConsulta(dia, horario);
    
    }

    else if(horario.status === "negado"){

        mostrarToast({
    
            negado: true
    
        });
    
    }

    else if(horario.status === "solicitado"){

        setSolicitacao({
    
            estudante: estudante.nome,
    
            dia: dia.dia,
    
            horario:`${horario.das} às ${horario.ate}`,
    
            horarioRef: horario
    
        });
    
    }
    
    else if(horario.status === "confirmado"){

        setAberturasConsulta(prev => prev + 1);
    
        setConsultaConfirmada({

            estudanteId: estudante.id,
        
            estudante: estudante.nome,
        
            dia: dia.dia,
        
            horario: `${horario.das} às ${horario.ate}`,
        
            horarioRef: horario
        
        });
    
    }

    else if(horario.status==="emChat"){

        navigate(
            `/chat/${estudante.id}?dia=${dia.dia}&horario=${horario.das} às ${horario.ate}`
        );
    
    }
    
    
    }}

>

{
horario.status === "livre"
? "Agendar"
: horario.status === "solicitado"
? "Solicitado ✓"
: horario.status === "negado"
? "Negado"
: horario.status === "confirmado"
? "Agendado"
: horario.status === "emChat"
? "💬 Chat"
: "Agendar"
}

</button>

</div>

))}

        </div>

    ))

)
}

</div>
    
        </div>
    
        <div className="perfil-feedbacks">

        <h2>Feedbacks dos pacientes</h2>

        <div className="feedbacks-container">

{

estudante.feedbacks
.slice(
    0,
    mostrarTodosFeedbacks ? estudante.feedbacks.length : 3
)
.map((feedback,index)=>(

<div 
    key={index}
    className="feedback-card"
>

    <div>

        <RatingStars nota={feedback.estrelas}/>

    </div>


    <p>
        "{feedback.comentario}"
    </p>


    <span>
        {feedback.tempo}
    </span>


</div>

))

}

</div>

<button

className="mostrar-feedbacks"

onClick={() => setMostrarTodosFeedbacks(true)}

>

Mostrar mais

</button>
    
        </div>
    
        <div className="perfil-agendar">
    
        </div>

        <SolicitacaoModal

    aberto={solicitacao !== null}

    fechar={()=>setSolicitacao(null)}

    solicitacao={solicitacao}

    cancelar={() => {

        setAgenda(prev =>

            prev.map((d) => ({
    
                ...d,
    
                horarios: d.horarios.map((h) => {
    
                    if (

                        h.das === solicitacao.horarioRef.das &&
                    
                        h.ate === solicitacao.horarioRef.ate
                    
                    ) {
    
                        return {

                            ...h,
                        
                            status: "livre"
                        
                        };
    
                    }
    
                    return h;
    
                })
    
            }))
    
        );
    
        setSolicitacao(null);
    
        mostrarToast({
    
            cancelado: true
    
        });
    
    }}

/>

<ConsultaConfirmadaModal

    aberto={consultaConfirmada !== null}

    fechar={() => setConsultaConfirmada(null)}

    consulta={consultaConfirmada}

    aberturas={aberturasConsulta}

    cancelar={() => {

        setAgenda(prev =>

            prev.map((d) => ({

                ...d,

                horarios: d.horarios.map((h) => {

                    if (

                        h.das === consultaConfirmada.horarioRef.das &&

                        h.ate === consultaConfirmada.horarioRef.ate

                    ) {

                        return {

                            ...h,

                            status: "livre"

                        };

                    }

                    return h;

                })

            }))

        );

        setConsultaConfirmada(null);

    }}

/>

<FeedbackConsultaModal

    aberto={feedbackConsulta !== null}

    estudante={estudante.nome}

    enviarFeedback={enviarFeedback}

    fechar={() => {

        localStorage.removeItem("consultaEncerrada");

        setFeedbackConsulta(null);

    }}

/>

        </div>

</>

);

}

export default PerfilEstudante;