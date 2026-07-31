import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import estudantes from "../data/Estudantes";
import RatingStars from "../components/RatingStars";
import "../styles/PerfilEstudante.css";
import SolicitacaoModal from "../modals/SolicitacaoModal";

function PerfilEstudante() {

    const { id } = useParams();
  
    const [solicitacao, setSolicitacao] = useState(null);
  
    const [toast, setToast] = useState(null);

    const [mostrarTodosFeedbacks, setMostrarTodosFeedbacks] = useState(false);

  const estudante = estudantes.find(
    (e) => e.id === Number(id)
  );

  const [agenda, setAgenda] = useState(estudante.agenda);

  useEffect(() => {

    window.scrollTo({

        top: 0,

        behavior: "smooth"

    });

}, []);

  if (!estudante) {

    return <h2>Estudante não encontrado.</h2>;

  }

  function mostrarToast(dados){

    setToast(dados);

    setTimeout(()=>{

        setToast(null);

    },5000);

}


function solicitarConsulta(dia, horario){

    setAgenda(

        agenda.map((d)=>({

            ...d,

            horarios:d.horarios.map((h)=>{

                if(h === horario){

                    return {

                        ...h,

                        solicitado:true

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

}

  return (

        <>
        
        {
toast && (

<div

className="toast-solicitacao"

onClick={() => {

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


    setToast(null);


}}

>

✖

</button>



<div className="toast-texto">


{

toast.cancelado

?

"❌ Solicitação cancelada"

:

"✅ Consulta solicitada"

}


</div>



<div className="toast-barra"></div>


</div>

)
}

    <div className="perfil-container">
    
        <div className="perfil-header">

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

    {agenda.map((dia, index) => (

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
    horario.solicitado
    ?
    "btn-solicitado"
    :
    "btn-agendar"
}

onClick={()=>{


    if(!horario.solicitado){

        solicitarConsulta(dia, horario);
    
    }
    else{
    
        setSolicitacao({
    
            estudante: estudante.nome,
    
            dia: dia.dia,
    
            horario:`${horario.das} às ${horario.ate}`,
    
            horarioRef: horario
    
        });
    
    }
    
    
    }}

>

{
horario.solicitado
?
"Solicitado ✓"
:
"Agendar"
}

</button>

</div>

))}

        </div>

    ))}

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

        setAgenda(
    
            agenda.map((d) => ({
    
                ...d,
    
                horarios: d.horarios.map((h) => {
    
                    if (

                        h.das === solicitacao.horarioRef.das &&
                    
                        h.ate === solicitacao.horarioRef.ate
                    
                    ) {
    
                        return {
    
                            ...h,
    
                            solicitado: false
    
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
    
        </div>

</>

);

}

export default PerfilEstudante;