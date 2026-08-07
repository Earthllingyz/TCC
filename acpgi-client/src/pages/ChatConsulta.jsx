import {
    useNavigate,
    useParams
} from "react-router-dom";
import estudantes from "../data/Estudantes";
import { useState, useEffect, useRef } from "react";
import "../styles/ChatConsulta.css";
import ModalAnimado from "../modals/ModalAnimado";
import "../styles/ModalAnimado.css";
import { FaFlag } from "react-icons/fa";

function ChatConsulta(){

    const { id } = useParams();

    const navigate = useNavigate();

    const estudante = estudantes.find(
        e => e.id === Number(id)
    );

    const [mensagem, setMensagem] = useState("");

    const [mensagens, setMensagens] = useState(()=>{


        const salvo = localStorage.getItem(
            `mensagensChat_${id}`
        );
    
    
        return salvo ? JSON.parse(salvo) : [
    
            {
                tipo:"estudante",
                texto:"Olá! 😊 Seja bem-vindo(a)! Como posso ajudar você hoje?"
            },
    
            {
                tipo:"estudante",
                texto:"Fique à vontade para fazer qualquer pergunta."
            }
    
        ];
    
    
    });

    const [toast, setToast] = useState(null);

    const [abrirDenuncia, setAbrirDenuncia] = useState(false);

const [motivoDenuncia, setMotivoDenuncia] = useState("");

    const [toastSaindo,setToastSaindo]=useState(false);

    const toastTimeout = useRef(null);

    const [avisoTrintaSegundos, setAvisoTrintaSegundos] = useState(false);

const [maisTrinta, setMaisTrinta] = useState(false);

function voltar(){

    localStorage.setItem(
        "consultaEmChat",
        JSON.stringify({

            estudanteId:Number(id),
            
            dia:new URLSearchParams(window.location.search).get("dia"),
            
            das:new URLSearchParams(window.location.search).get("horario").split(" às ")[0],
            
            ate:new URLSearchParams(window.location.search).get("horario").split(" às ")[1]
            
            })
    );


    localStorage.setItem(
        `mensagensChat_${id}`,
        JSON.stringify(mensagens)
    );

    console.log(
        JSON.parse(localStorage.getItem("consultaEmChat"))
    );


    navigate(-1);

}

const [segundos, setSegundos] = useState(() => {

    const salvo = localStorage.getItem(`chatTempo_${id}`);
    
    return salvo ? Number(salvo) : 60;
    
    });

    useEffect(() => {

        const intervalo = setInterval(() => {
    
            setSegundos((s) => {
    
                if (s <= 0) {
    
                    clearInterval(intervalo);
    
                    return 0;
    
                }
    
                return s - 1;
    
            });
    
        }, 1000);
    
        return () => clearInterval(intervalo);
    
    }, []);

    useEffect(() => {

        localStorage.setItem(
    
            `chatTempo_${id}`,
    
            segundos
    
        );
    
    }, [segundos, id]);

    useEffect(() => {

        if (segundos === 30 && !avisoTrintaSegundos) {
    
            setAvisoTrintaSegundos(true);
    
            mostrarToastChat({
    
                tipo: "mais",
    
                texto: "Faltam 30 segundos. Solicite mais tempo se precisar."
    
            });
    
        }
    
    }, [segundos, avisoTrintaSegundos]);

    useEffect(() => {

        if(segundos === 0){
    
    
            const query = new URLSearchParams(window.location.search);
    
    
            localStorage.setItem(
    
                "consultaEncerrada",
    
                JSON.stringify({
    
                    estudanteId:Number(id),
    
                    dia:query.get("dia"),
    
                    horario:query.get("horario")
    
                })
    
            );
    
    
            localStorage.removeItem(`chatTempo_${id}`);
    
    
            alert("A consulta foi encerrada.");
    
    
            navigate(-1);
    
    
        }
    
    
    }, [segundos]);

    useEffect(()=>{


        localStorage.setItem(
    
            `mensagensChat_${id}`,
    
            JSON.stringify(mensagens)
    
        );
    
    
    },[mensagens,id]);

    function solicitarMaisTempo() {

        mostrarToastChat(
            {
                tipo: "sucesso",
                texto: "Solicitação de mais tempo enviada"
            },
    
            () => {
    
                mostrarToastChat(
                    {
                        tipo: "negado",
                        texto: "Solicitação de mais tempo negada"
                    },
    
                    () => {
    
                        mostrarToastChat(
                            {
                                tipo: "mais",
                                texto: "+30 minutos concedidos"
                            },
    
                            () => {
    
                                setMaisTrinta(true);
    
                                setSegundos(s => s + 1800);
    
                                setTimeout(() => {
    
                                    setMaisTrinta(false);
    
                                }, 1500);
    
                            }
                        );
    
                    }
                );
    
            }
        );
    
    }

    function encerrarChat() {

        mostrarToastChat(
            {
                tipo: "sucesso",
                texto: "Solicitação de encerramento enviada"
            },
    
            () => {
    
                mostrarToastChat(
                    {
                        tipo: "negado",
                        texto: "Solicitação de encerramento negada"
                    },
    
                    () => {
    
                        mostrarToastChat(
                            {
                                tipo: "encerrado",
                                texto: "Consulta encerrada"
                            },
    
                            () => {
    
                                localStorage.setItem(
                                    "consultaEncerrada",
                                    JSON.stringify({
                                        estudanteId: Number(id),
                                        dia: new URLSearchParams(window.location.search).get("dia"),
                                        horario: new URLSearchParams(window.location.search).get("horario")
                                    })
                                );
    
                                localStorage.removeItem(`chatTempo_${id}`);
    
                                navigate(-1);
    
                            }
                        );
    
                    }
                );
    
            }
        );
    
    }

    function mostrarToastChat(dados, aoFinal) {

        if (toastTimeout.current) {
            clearTimeout(toastTimeout.current);
        }
    
        setToastSaindo(false);
        setToast(dados);
    
        toastTimeout.current = setTimeout(() => {
    
            setToastSaindo(true);
    
            setTimeout(() => {
    
                setToast(null);
                setToastSaindo(false);
    
                if (aoFinal) {
                    aoFinal();
                }
    
            }, 350);
    
        }, 4700);
    
    }


    return (

        <div className="chat-container">

{

toast && (

<div

className={`toast-chat ${toast.tipo} ${toastSaindo ? "saindo" : ""}`}

>

<button

className="fechar-toast-chat"

onClick={()=>setToast(null)}

>

✖

</button>

<span>

{
toast.tipo==="negado"

? "❌ "

: toast.tipo==="mais"

? "⏱️ "

: toast.tipo==="encerrado"

? "⚠️ "

: "✅ "

}

{toast.texto}

</span>

</div>

)

}

<div className="chat-header">

<button
    className="voltar-chat"
    onClick={voltar}
>
    ←
</button>

<img
    src={estudante.foto}
    alt={estudante.nome}
    className="chat-foto"
/>

<div className="chat-info">

    <h3>{estudante.nome}</h3>

    <span>
        Atendimento em andamento
    </span>

</div>

<div className="chat-timer">

    {`${String(Math.floor(segundos/60)).padStart(2,"0")}:${String(segundos%60).padStart(2,"0")}`}

    {

        maisTrinta && (

            <span className="mais-trinta">

                +30

            </span>

        )

    }

</div>

</div>

<div className="acoes-chat">

<button
    className="tempo-btn"
    onClick={solicitarMaisTempo}
>

    +30 minutos

</button>

<button
    className="encerrar-btn"
    onClick={encerrarChat}
>
    Encerrar chat
</button>

</div>

<div className="chat-mensagens">

{mensagens.map((msg, index) => (

<div
    key={index}
    className={
        msg.tipo === "estudante"
            ? "msg-estudante"
            : "msg-paciente"
    }
>

    {msg.texto}

    {msg.tipo === "estudante" && (

        <button
            className="btn-denunciar"
            onClick={() => {

                setMotivoDenuncia("");

                setAbrirDenuncia(true);

            }}
        >

            <FaFlag />

        </button>

    )}

</div>

))}

</div>

{

abrirDenuncia && (

    <ModalAnimado aberto={aberto}>

<div
    className="modal-overlay"
    onClick={() => setAbrirDenuncia(false)}
>

    <div
        className="modal-content"
        onClick={(e) => e.stopPropagation()}
    >

        <div className="modal-header">

            <h2>Processo de denúncia</h2>

            <button
                className="close-btn"
                onClick={() => setAbrirDenuncia(false)}
            >
                ✕
            </button>

        </div>

        <div className="modal-body">

            <p>
                Por que deseja denunciar essa mensagem?
            </p>

            <div className="denuncia-acoes">

    <textarea
        value={motivoDenuncia}
        onChange={(e)=>setMotivoDenuncia(e.target.value)}
        placeholder="Descreva o motivo"
    />

    <button
        className="publicar-btn"
        onClick={() => {

            setAbrirDenuncia(false);

            mostrarToastChat({
                tipo: "encerrado",
                texto: "Denúncia sob análise"
            });

        }}
    >
        Enviar
    </button>

</div>

        </div>

    </div>

</div>

</ModalAnimado>

)}

            <div className="chat-input">

            <input

value={mensagem}

onChange={(e)=>setMensagem(e.target.value)}

placeholder="Digite sua mensagem..."

/>

<button

onClick={() => {

    if (!mensagem.trim()) return;

    setMensagens([

        ...mensagens,

        {

            tipo: "paciente",

            texto: mensagem

        }

    ]);

    setMensagem("");

}}

>

➤

</button>

</div>

        </div>

    );

}

export default ChatConsulta;