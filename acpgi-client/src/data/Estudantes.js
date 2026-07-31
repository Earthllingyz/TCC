const estudantes = [

    {
        id: 1,
    
        recomendado: true,
    
        nome: "Ana Oliveira",
    
        idade: 21,
    
        genero: "Feminino",
    
        foto: "https://i.pravatar.cc/300?img=5",
    
        faculdade: "USP",
    
        semestre: 5,
    
        descricao:
            "Olá! Sou Ana Oliveira, estudante de Psicologia na USP. Participo do projeto para desenvolver minha experiência prática, oferecendo um ambiente acolhedor, respeitoso e seguro para que cada paciente possa conversar livremente sobre suas dificuldades, emoções e desafios do dia a dia. Meu objetivo é proporcionar uma escuta atenta e humanizada, sempre buscando auxiliar cada pessoa da melhor forma possível durante sua jornada.",
    
        experiencia: {
    
            participandoDesde: "Março de 2026",
    
            consultasRealizadas: 34
    
        },
    
        agenda: [
    
            {
    
                dia: "Segunda-feira",
    
                disponivel: true,
    
                horarios: [
    
                    {
                        das: "08:00",
                        ate: "09:30",
                        solicitado: false
                    },
    
                    {
                        das: "15:00",
                        ate: "17:00",
                        solicitado: false
                    }
    
                ]
    
            },
    
            {
    
                dia: "Quarta-feira",
    
                disponivel: true,
    
                horarios: [
    
                    {
                        das: "14:00",
                        ate: "16:00",
                        solicitado: false
                    }
    
                ]
    
            },
    
            {
    
                dia: "Sexta-feira",
    
                disponivel: true,
    
                horarios: [
    
                    {
                        das: "09:00",
                        ate: "10:30",
                        solicitado: false
                    }
    
                ]
    
            }
    
        ],
    
        avaliacao: {
    
            media: 4.9,
    
            total: 186,
    
            cincoEstrelas: 170,
    
            quatroEstrelas: 12,
    
            tresEstrelas: 4,
    
            duasEstrelas: 0,
    
            umaEstrela: 0
    
        },
    
        feedbacks: [
    
            {
                estrelas: 5,
                tempo: "há 2 semanas",
                comentario: "Me senti muito acolhida durante a conversa."
            },
    
            {
                estrelas: 5,
                tempo: "há 1 mês",
                comentario: "Muito educada e transmite bastante confiança."
            },
    
            {
                estrelas: 5,
                tempo: "há 2 meses",
                comentario: "Gostei bastante da escuta e da atenção recebida."
            },
    
            {
                estrelas: 5,
                tempo: "há 4 meses",
                comentario: "Foi uma ótima experiência. Recomendo."
            },
    
            {
                estrelas: 5,
                tempo: "há 6 meses",
                comentario: "Consegui conversar com tranquilidade durante toda a consulta."
            },
    
            {
                estrelas: 4,
                tempo: "há 8 meses",
                comentario: "Muito simpática e profissional."
            }
    
        ],
    
        disponivel: true
    
    }
    
    ];
    
    export default estudantes;