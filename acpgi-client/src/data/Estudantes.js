const estudantes = [

    {
        id: 1,
    
        recomendado: false,
    
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

    },

    {
        id: 2,
    
        recomendado: true,
    
        nome: "Maria Eduarda Santos",
    
        idade: 23,
    
        genero: "Feminino",
    
        foto: "https://i.pravatar.cc/300?img=32",
    
        faculdade: "PUC-SP",
    
        semestre: 7,
    
        descricao:
            "Olá! Sou Maria Eduarda Santos, estudante de Psicologia na PUC-SP. Gosto de proporcionar um ambiente tranquilo, acolhedor e sem julgamentos para que cada pessoa possa falar livremente sobre suas emoções e desafios. Busco sempre ouvir com empatia e respeito, ajudando cada paciente a se sentir confortável durante toda a conversa.",
    
        experiencia: {
    
            participandoDesde: "Janeiro de 2026",
    
            consultasRealizadas: 58
    
        },
    
        agenda: [
    
            {
    
                dia: "Terça-feira",
    
                disponivel: true,
    
                horarios: [
    
                    {
                        das: "09:00",
                        ate: "10:30",
                        solicitado: false
                    },
    
                    {
                        das: "15:00",
                        ate: "16:30",
                        solicitado: false
                    }
    
                ]
    
            },
    
            {
    
                dia: "Quinta-feira",
    
                disponivel: true,
    
                horarios: [
    
                    {
                        das: "13:30",
                        ate: "15:00",
                        solicitado: false
                    }
    
                ]
    
            },
    
            {
    
                dia: "Sábado",
    
                disponivel: true,
    
                horarios: [
    
                    {
                        das: "10:00",
                        ate: "11:30",
                        solicitado: false
                    }
    
                ]
    
            }
    
        ],
    
        avaliacao: {
    
            media: 5.0,
    
            total: 241,
    
            cincoEstrelas: 232,
    
            quatroEstrelas: 8,
    
            tresEstrelas: 1,
    
            duasEstrelas: 0,
    
            umaEstrela: 0
    
        },
    
        feedbacks: [
    
            {
    
                estrelas: 5,
    
                tempo: "há 1 semana",
    
                comentario: "Excelente profissional. Me senti muito à vontade durante toda a conversa."
    
            },
    
            {
    
                estrelas: 5,
    
                tempo: "há 3 semanas",
    
                comentario: "Muito paciente, atenciosa e acolhedora."
    
            },
    
            {
    
                estrelas: 5,
    
                tempo: "há 1 mês",
    
                comentario: "Foi uma experiência muito positiva."
    
            },
    
            {
    
                estrelas: 5,
    
                tempo: "há 2 meses",
    
                comentario: "Conseguiu me ouvir sem julgamentos."
    
            },
    
            {
    
                estrelas: 5,
    
                tempo: "há 4 meses",
    
                comentario: "Pretendo agendar novamente."
    
            },
    
            {
    
                estrelas: 4,
    
                tempo: "há 6 meses",
    
                comentario: "Muito simpática e educada."
    
            }
    
        ],
    
        disponivel: true
    
    },

    {
        id: 3,
    
        recomendado: true,
    
        nome: "Lucas Henrique Almeida",
    
        idade: 24,
    
        genero: "Masculino",
    
        foto: "https://i.pravatar.cc/300?img=12",
    
        faculdade: "UFMG",
    
        semestre: 8,
    
        descricao:
            "Olá! Sou Lucas Henrique Almeida, estudante de Psicologia na UFMG. Participo do projeto porque acredito que toda pessoa merece ser ouvida com respeito e empatia. Procuro oferecer um ambiente tranquilo, acolhedor e livre de julgamentos, ajudando cada paciente a se sentir confortável para conversar sobre suas dificuldades.",
    
        experiencia: {
    
            participandoDesde: "Fevereiro de 2026",
    
            consultasRealizadas: 47
    
        },
    
        agenda: [
    
            {
    
                dia: "Segunda-feira",
    
                disponivel: true,
    
                horarios: [
    
                    {
                        das: "10:00",
                        ate: "11:30",
                        solicitado: false
                    },
    
                    {
                        das: "18:00",
                        ate: "19:30",
                        solicitado: false
                    }
    
                ]
    
            },
    
            {
    
                dia: "Quarta-feira",
    
                disponivel: true,
    
                horarios: [
    
                    {
                        das: "14:30",
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
    
            media: 4.8,
    
            total: 163,
    
            cincoEstrelas: 145,
    
            quatroEstrelas: 15,
    
            tresEstrelas: 3,
    
            duasEstrelas: 0,
    
            umaEstrela: 0
    
        },
    
        feedbacks: [
    
            {
    
                estrelas: 5,
    
                tempo: "há 2 semanas",
    
                comentario: "Muito educado e atencioso."
    
            },
    
            {
    
                estrelas: 5,
    
                tempo: "há 1 mês",
    
                comentario: "Conversa muito acolhedora."
    
            },
    
            {
    
                estrelas: 5,
    
                tempo: "há 2 meses",
    
                comentario: "Me senti confortável durante toda a consulta."
    
            },
    
            {
    
                estrelas: 5,
    
                tempo: "há 3 meses",
    
                comentario: "Excelente escuta."
    
            },
    
            {
    
                estrelas: 4,
    
                tempo: "há 5 meses",
    
                comentario: "Muito profissional."
    
            },
    
            {
    
                estrelas: 5,
    
                tempo: "há 8 meses",
    
                comentario: "Gostei bastante da experiência."
    
            }
    
        ],
    
        disponivel: true
    
    },

    {
        id: 4,
    
        recomendado: true,
    
        nome: "Beatriz Costa Ribeiro",
    
        idade: 22,
    
        genero: "Feminino",
    
        foto: "https://i.pravatar.cc/300?img=47",
    
        faculdade: "UNESP",
    
        semestre: 6,
    
        descricao:
            "Olá! Sou Beatriz Costa Ribeiro, estudante de Psicologia na UNESP. Acredito que uma boa escuta pode fazer muita diferença na vida das pessoas. Durante os atendimentos procuro criar um ambiente leve, acolhedor e respeitoso, permitindo que cada paciente se expresse com tranquilidade e confiança.",
    
        experiencia: {
    
            participandoDesde: "Abril de 2026",
    
            consultasRealizadas: 41
    
        },
    
        agenda: [
    
            {
    
                dia: "Terça-feira",
    
                disponivel: true,
    
                horarios: [
    
                    {
                        das: "08:30",
                        ate: "10:00",
                        solicitado: false
                    },
    
                    {
                        das: "16:00",
                        ate: "17:30",
                        solicitado: false
                    }
    
                ]
    
            },
    
            {
    
                dia: "Quinta-feira",
    
                disponivel: true,
    
                horarios: [
    
                    {
                        das: "14:00",
                        ate: "15:30",
                        solicitado: false
                    }
    
                ]
    
            },
    
            {
    
                dia: "Sexta-feira",
    
                disponivel: true,
    
                horarios: [
    
                    {
                        das: "18:00",
                        ate: "19:30",
                        solicitado: false
                    }
    
                ]
    
            }
    
        ],
    
        avaliacao: {
    
            media: 4.9,
    
            total: 198,
    
            cincoEstrelas: 184,
    
            quatroEstrelas: 12,
    
            tresEstrelas: 2,
    
            duasEstrelas: 0,
    
            umaEstrela: 0
    
        },
    
        feedbacks: [
    
            {
    
                estrelas: 5,
    
                tempo: "há 1 semana",
    
                comentario: "Muito gentil e acolhedora."
    
            },
    
            {
    
                estrelas: 5,
    
                tempo: "há 3 semanas",
    
                comentario: "Conseguiu me deixar muito confortável."
    
            },
    
            {
    
                estrelas: 5,
    
                tempo: "há 2 meses",
    
                comentario: "Excelente atendimento."
    
            },
    
            {
    
                estrelas: 5,
    
                tempo: "há 4 meses",
    
                comentario: "Muito atenciosa durante toda a conversa."
    
            },
    
            {
    
                estrelas: 4,
    
                tempo: "há 5 meses",
    
                comentario: "Gostei bastante da consulta."
    
            },
    
            {
    
                estrelas: 5,
    
                tempo: "há 7 meses",
    
                comentario: "Com certeza voltarei a agendar."
    
            }
    
        ],
    
        disponivel: true
    
    },

    {
        id: 7,
    
        recomendado: false,
    
        nome: "Ana Clara Souza",
    
        idade: 22,
    
        genero: "Feminino",
    
        foto: "https://i.pravatar.cc/300?img=23",
    
        faculdade: "UFPR",
    
        semestre: 6,
    
        descricao:
            "Sou Ana Clara Souza, estudante de Psicologia na UFPR. Gosto de oferecer um ambiente tranquilo e acolhedor para que cada pessoa possa compartilhar suas emoções com liberdade e confiança. Acredito que uma escuta atenta pode fazer toda a diferença.",
    
        experiencia:{
            participandoDesde:"Março de 2026",
            consultasRealizadas:39
        },
    
        agenda:[
            {
                dia:"Segunda-feira",
                disponivel:true,
                horarios:[
                    { das:"08:30", ate:"10:00", solicitado:false },
                    { das:"14:30", ate:"16:00", solicitado:false }
                ]
            },
            {
                dia:"Quinta-feira",
                disponivel:true,
                horarios:[
                    { das:"18:00", ate:"19:30", solicitado:false }
                ]
            }
        ],
    
        avaliacao:{
            media:4.8,
            total:162,
            cincoEstrelas:148,
            quatroEstrelas:12,
            tresEstrelas:2,
            duasEstrelas:0,
            umaEstrela:0
        },
    
        feedbacks:[
            { estrelas:5, tempo:"há 1 semana", comentario:"Muito acolhedora." },
            { estrelas:5, tempo:"há 3 semanas", comentario:"Excelente conversa." },
            { estrelas:5, tempo:"há 2 meses", comentario:"Muito paciente." },
            { estrelas:5, tempo:"há 3 meses", comentario:"Gostei bastante." },
            { estrelas:4, tempo:"há 5 meses", comentario:"Ótimo atendimento." },
            { estrelas:5, tempo:"há 7 meses", comentario:"Voltaria novamente." }
        ],
    
        disponivel:true
    },

    {
        id:8,
    
        recomendado:false,
    
        nome:"Ana Júlia Ferreira",
    
        idade:24,
    
        genero:"Feminino",
    
        foto:"https://i.pravatar.cc/300?img=44",
    
        faculdade:"UFRJ",
    
        semestre:8,
    
        descricao:
        "Sou Ana Júlia Ferreira, estudante de Psicologia na UFRJ. Busco proporcionar um espaço seguro, respeitoso e sem julgamentos para que cada paciente possa conversar sobre suas experiências.",
    
        experiencia:{
            participandoDesde:"Janeiro de 2026",
            consultasRealizadas:64
        },
    
        agenda:[
            {
                dia:"Terça-feira",
                disponivel:true,
                horarios:[
                    { das:"09:00", ate:"10:30", solicitado:false },
                    { das:"16:00", ate:"17:30", solicitado:false }
                ]
            },
            {
                dia:"Sexta-feira",
                disponivel:true,
                horarios:[
                    { das:"13:00", ate:"14:30", solicitado:false }
                ]
            }
        ],
    
        avaliacao:{
            media:4.9,
            total:201,
            cincoEstrelas:187,
            quatroEstrelas:12,
            tresEstrelas:2,
            duasEstrelas:0,
            umaEstrela:0
        },
    
        feedbacks:[
            { estrelas:5, tempo:"há 2 dias", comentario:"Muito simpática." },
            { estrelas:5, tempo:"há 2 semanas", comentario:"Excelente escuta." },
            { estrelas:5, tempo:"há 1 mês", comentario:"Muito acolhedora." },
            { estrelas:5, tempo:"há 3 meses", comentario:"Gostei muito." },
            { estrelas:5, tempo:"há 4 meses", comentario:"Atendimento maravilhoso." },
            { estrelas:4, tempo:"há 7 meses", comentario:"Muito boa profissional." }
        ],
    
        disponivel:true
    },

    {
        id:9,
    
        recomendado:false,
    
        nome:"Ana Beatriz Lima",
    
        idade:23,
    
        genero:"Feminino",
    
        foto:"https://i.pravatar.cc/300?img=41",
    
        faculdade:"UFSC",
    
        semestre:7,
    
        descricao:
        "Sou Ana Beatriz Lima e acredito que ouvir alguém com atenção pode transformar um momento difícil em uma oportunidade de crescimento. Procuro sempre acolher cada paciente com respeito e empatia.",
    
        experiencia:{
            participandoDesde:"Abril de 2026",
            consultasRealizadas:48
        },
    
        agenda:[
            {
                dia:"Quarta-feira",
                disponivel:true,
                horarios:[
                    { das:"08:00", ate:"09:30", solicitado:false },
                    { das:"18:00", ate:"19:30", solicitado:false }
                ]
            },
            {
                dia:"Sábado",
                disponivel:true,
                horarios:[
                    { das:"10:00", ate:"11:30", solicitado:false }
                ]
            }
        ],
    
        avaliacao:{
            media:4.7,
            total:144,
            cincoEstrelas:130,
            quatroEstrelas:12,
            tresEstrelas:2,
            duasEstrelas:0,
            umaEstrela:0
        },
    
        feedbacks:[
            { estrelas:5, tempo:"há 5 dias", comentario:"Muito querida." },
            { estrelas:5, tempo:"há 3 semanas", comentario:"Conversa excelente." },
            { estrelas:5, tempo:"há 2 meses", comentario:"Muito educada." },
            { estrelas:4, tempo:"há 4 meses", comentario:"Gostei bastante." },
            { estrelas:5, tempo:"há 5 meses", comentario:"Ótima escuta." },
            { estrelas:5, tempo:"há 8 meses", comentario:"Excelente atendimento." }
        ],
    
        disponivel:true
    },

    {
        id:10,
    
        recomendado:false,
    
        nome:"Ana Carolina Martins",
    
        idade:22,
    
        genero:"Feminino",
    
        foto:"https://i.pravatar.cc/300?img=48",
    
        faculdade:"PUC Minas",
    
        semestre:5,
    
        descricao:
        "Sou Ana Carolina Martins. Durante os atendimentos procuro criar um ambiente leve, tranquilo e acolhedor para que cada pessoa possa se expressar livremente e se sentir confortável durante toda a conversa.",
    
        experiencia:{
            participandoDesde:"Fevereiro de 2026",
            consultasRealizadas:36
        },
    
        agenda:[
            {
                dia:"Segunda-feira",
                disponivel:true,
                horarios:[
                    { das:"13:00", ate:"14:30", solicitado:false },
                    { das:"17:00", ate:"18:30", solicitado:false }
                ]
            },
            {
                dia:"Quinta-feira",
                disponivel:true,
                horarios:[
                    { das:"09:00", ate:"10:30", solicitado:false }
                ]
            }
        ],
    
        avaliacao:{
            media:4.8,
            total:156,
            cincoEstrelas:144,
            quatroEstrelas:10,
            tresEstrelas:2,
            duasEstrelas:0,
            umaEstrela:0
        },
    
        feedbacks:[
            { estrelas:5, tempo:"há 1 semana", comentario:"Muito acolhedora." },
            { estrelas:5, tempo:"há 2 semanas", comentario:"Gostei bastante." },
            { estrelas:5, tempo:"há 1 mês", comentario:"Excelente profissional." },
            { estrelas:5, tempo:"há 3 meses", comentario:"Me senti muito bem." },
            { estrelas:4, tempo:"há 6 meses", comentario:"Muito simpática." },
            { estrelas:5, tempo:"há 8 meses", comentario:"Voltarei novamente." }
        ],
    
        disponivel:true
    },

    {
        id:11,
    
        recomendado:false,
    
        nome:"João Pedro Silva",
    
        idade:22,
    
        genero:"Masculino",
    
        foto:"https://i.pravatar.cc/300?img=13",
    
        faculdade:"USP",
    
        semestre:6,
    
        descricao:
        "Olá! Sou João Pedro Silva, estudante de Psicologia na USP. Participo deste projeto porque acredito que ser ouvido com respeito pode fazer muita diferença na vida das pessoas. Procuro oferecer um ambiente acolhedor, tranquilo e livre de julgamentos durante cada atendimento.",
    
        experiencia:{
            participandoDesde:"Março de 2026",
            consultasRealizadas:42
        },
    
        agenda:[
            {
                dia:"Segunda-feira",
                disponivel:true,
                horarios:[
                    { das:"09:00", ate:"10:30", solicitado:false },
                    { das:"15:00", ate:"16:30", solicitado:false }
                ]
            },
            {
                dia:"Quinta-feira",
                disponivel:true,
                horarios:[
                    { das:"18:00", ate:"19:30", solicitado:false }
                ]
            }
        ],
    
        avaliacao:{
            media:4.8,
            total:173,
            cincoEstrelas:158,
            quatroEstrelas:13,
            tresEstrelas:2,
            duasEstrelas:0,
            umaEstrela:0
        },
    
        feedbacks:[
            { estrelas:5, tempo:"há 5 dias", comentario:"Muito educado e atencioso." },
            { estrelas:5, tempo:"há 2 semanas", comentario:"Excelente conversa." },
            { estrelas:5, tempo:"há 1 mês", comentario:"Me senti muito acolhido." },
            { estrelas:5, tempo:"há 3 meses", comentario:"Gostei bastante do atendimento." },
            { estrelas:4, tempo:"há 5 meses", comentario:"Muito profissional." },
            { estrelas:5, tempo:"há 7 meses", comentario:"Voltaria novamente." }
        ],
    
        disponivel:true
    },

    {
        id:12,
    
        recomendado:false,
    
        nome:"João Gabriel Costa",
    
        idade:24,
    
        genero:"Masculino",
    
        foto:"https://i.pravatar.cc/300?img=17",
    
        faculdade:"UNICAMP",
    
        semestre:8,
    
        descricao:
        "Sou João Gabriel Costa, estudante de Psicologia na UNICAMP. Gosto de criar um ambiente leve e acolhedor para que cada paciente possa falar livremente sobre suas emoções, sempre com respeito e empatia.",
    
        experiencia:{
            participandoDesde:"Janeiro de 2026",
            consultasRealizadas:66
        },
    
        agenda:[
            {
                dia:"Terça-feira",
                disponivel:true,
                horarios:[
                    { das:"08:30", ate:"10:00", solicitado:false },
                    { das:"14:30", ate:"16:00", solicitado:false }
                ]
            },
            {
                dia:"Sexta-feira",
                disponivel:true,
                horarios:[
                    { das:"19:00", ate:"20:30", solicitado:false }
                ]
            }
        ],
    
        avaliacao:{
            media:4.9,
            total:229,
            cincoEstrelas:214,
            quatroEstrelas:13,
            tresEstrelas:2,
            duasEstrelas:0,
            umaEstrela:0
        },
    
        feedbacks:[
            { estrelas:5, tempo:"há 1 semana", comentario:"Muito simpático." },
            { estrelas:5, tempo:"há 3 semanas", comentario:"Excelente escuta." },
            { estrelas:5, tempo:"há 1 mês", comentario:"Me ajudou bastante." },
            { estrelas:5, tempo:"há 2 meses", comentario:"Muito acolhedor." },
            { estrelas:5, tempo:"há 4 meses", comentario:"Conversa muito tranquila." },
            { estrelas:4, tempo:"há 6 meses", comentario:"Ótima experiência." }
        ],
    
        disponivel:true
    },

    {
        id:13,
    
        recomendado:false,
    
        nome:"João Victor Almeida",
    
        idade:23,
    
        genero:"Masculino",
    
        foto:"https://i.pravatar.cc/300?img=60",
    
        faculdade:"UFMG",
    
        semestre:7,
    
        descricao:
        "Sou João Victor Almeida e acredito que um atendimento humanizado começa por uma escuta verdadeira. Meu objetivo é oferecer um espaço seguro, respeitoso e confortável para todos os pacientes.",
    
        experiencia:{
            participandoDesde:"Abril de 2026",
            consultasRealizadas:51
        },
    
        agenda:[
            {
                dia:"Quarta-feira",
                disponivel:true,
                horarios:[
                    { das:"09:30", ate:"11:00", solicitado:false },
                    { das:"17:00", ate:"18:30", solicitado:false }
                ]
            },
            {
                dia:"Sábado",
                disponivel:true,
                horarios:[
                    { das:"10:00", ate:"11:30", solicitado:false }
                ]
            }
        ],
    
        avaliacao:{
            media:4.8,
            total:181,
            cincoEstrelas:165,
            quatroEstrelas:13,
            tresEstrelas:3,
            duasEstrelas:0,
            umaEstrela:0
        },
    
        feedbacks:[
            { estrelas:5, tempo:"há 2 dias", comentario:"Muito respeitoso." },
            { estrelas:5, tempo:"há 2 semanas", comentario:"Excelente atendimento." },
            { estrelas:5, tempo:"há 1 mês", comentario:"Me senti à vontade." },
            { estrelas:5, tempo:"há 3 meses", comentario:"Muito atencioso." },
            { estrelas:4, tempo:"há 4 meses", comentario:"Gostei bastante." },
            { estrelas:5, tempo:"há 8 meses", comentario:"Muito profissional." }
        ],
    
        disponivel:true
    },

    {
        id:14,
    
        recomendado:false,
    
        nome:"João Lucas Ferreira",
    
        idade:21,
    
        genero:"Masculino",
    
        foto:"https://i.pravatar.cc/300?img=67",
    
        faculdade:"UFSC",
    
        semestre:5,
    
        descricao:
        "Olá! Sou João Lucas Ferreira. Durante cada atendimento procuro oferecer um ambiente acolhedor, tranquilo e respeitoso para que cada pessoa possa conversar livremente sobre seus sentimentos e dificuldades.",
    
        experiencia:{
            participandoDesde:"Fevereiro de 2026",
            consultasRealizadas:37
        },
    
        agenda:[
            {
                dia:"Segunda-feira",
                disponivel:true,
                horarios:[
                    { das:"13:30", ate:"15:00", solicitado:false },
                    { das:"18:00", ate:"19:30", solicitado:false }
                ]
            },
            {
                dia:"Quinta-feira",
                disponivel:true,
                horarios:[
                    { das:"09:00", ate:"10:30", solicitado:false }
                ]
            }
        ],
    
        avaliacao:{
            media:4.7,
            total:152,
            cincoEstrelas:137,
            quatroEstrelas:13,
            tresEstrelas:2,
            duasEstrelas:0,
            umaEstrela:0
        },
    
        feedbacks:[
            { estrelas:5, tempo:"há 6 dias", comentario:"Muito tranquilo." },
            { estrelas:5, tempo:"há 2 semanas", comentario:"Excelente profissional." },
            { estrelas:5, tempo:"há 2 meses", comentario:"Gostei muito." },
            { estrelas:5, tempo:"há 4 meses", comentario:"Muito acolhedor." },
            { estrelas:4, tempo:"há 5 meses", comentario:"Boa conversa." },
            { estrelas:5, tempo:"há 7 meses", comentario:"Voltaria novamente." }
        ],
    
        disponivel:true
    },

    {
        id:15,
    
        recomendado:false,
    
        nome:"João Henrique Martins",
    
        idade:25,
    
        genero:"Masculino",
    
        foto:"https://i.pravatar.cc/300?img=68",
    
        faculdade:"PUC-SP",
    
        semestre:9,
    
        descricao:
        "Sou João Henrique Martins, estudante de Psicologia na PUC-SP. Acredito que ouvir alguém com atenção, empatia e respeito é o primeiro passo para construir um atendimento acolhedor e humanizado. Busco sempre proporcionar um espaço confortável e livre de julgamentos.",
    
        experiencia:{
            participandoDesde:"Janeiro de 2026",
            consultasRealizadas:79
        },
    
        agenda:[
            {
                dia:"Terça-feira",
                disponivel:true,
                horarios:[
                    { das:"10:00", ate:"11:30", solicitado:false },
                    { das:"15:30", ate:"17:00", solicitado:false }
                ]
            },
            {
                dia:"Sexta-feira",
                disponivel:true,
                horarios:[
                    { das:"18:30", ate:"20:00", solicitado:false }
                ]
            }
        ],
    
        avaliacao:{
            media:5.0,
            total:284,
            cincoEstrelas:271,
            quatroEstrelas:11,
            tresEstrelas:2,
            duasEstrelas:0,
            umaEstrela:0
        },
    
        feedbacks:[
            { estrelas:5, tempo:"há 3 dias", comentario:"Atendimento excelente." },
            { estrelas:5, tempo:"há 2 semanas", comentario:"Muito paciente e educado." },
            { estrelas:5, tempo:"há 1 mês", comentario:"Excelente escuta." },
            { estrelas:5, tempo:"há 2 meses", comentario:"Muito acolhedor." },
            { estrelas:5, tempo:"há 4 meses", comentario:"Gostei muito da consulta." },
            { estrelas:5, tempo:"há 6 meses", comentario:"Recomendo fortemente." }
        ],
    
        disponivel:true
    }
];

export default estudantes;