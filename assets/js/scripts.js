
$(function() {

    $('#translateEN').click(function() {
        $('#contactPhone').text('+1 407-212-9457');
        $('#inputMail').attr({placeholder:"Mail"});
        $('#inputName').attr({placeholder:"Name"});
        $('#inputPhone').attr({placeholder:"Phone"});
        $('#inputMsg').attr({placeholder:"Enter your message"});
    });
    $('#translatePT').click(function() {
        $('#contactPhone').text('(61) 8123-3300');
        $('#inputMail').attr({placeholder:"E-mail"});
        $('#inputName').attr({placeholder:"Nome"});
        $('#inputPhone').attr({placeholder:"Telefone"});
        $('#inputMsg').attr({placeholder:"Digite sua mensagem"});
    });


    var t = {
        "Olá mundo": {
            en: "Hello World",
        },
        "Não espere a luz vermelha acender": {
            en: "Do not wait the red light flash.",
        },
        "Comunicação sem complexidade para gestão educacional": {
            en: "Communication without complexity for educational management",
        },
        "Tem um projeto?": {
            en: "Have a project?",

        },
        "Nós podemos ajudar": {
            en: "We can help",

        },
        "Conheça nossos trabalho": {
            en: "Discover our work",

        },
        "Plataforma tecnológica para o planejamento e execução": {
            en: "Technological platform for planning and execution",

        },
        "Controle de engajamento": {
            en: "Engagement Control",

        },
        "Posicione sua escola de forma assertiva durante contextos de crise. Aumente a interação da sua instituição de ensino com pais e responsáveis.": {
            en: "Position your school assertively during crisis contexts. Increase your educational institution's interaction with parents and guardians.",

        },
        "Consultoria financeira": {
            en: "Financial consultancy",
        },
        "Conheça a nossa equipe": {
            en: "Meet our team",
        },
        "Consultoria financeira especializada em gerenciamento de crise. Tenha total controle sobre as ações de seus professores dentro de nosso ambiente.": {
            en: "Financial consultancy specializing in crisis management. Have full control over your teachers' actions within our environment.",
        },
        "Ferramentas personalizadas": {
            en: "Custom tools",
        },
        "Tenha em mãos as ferramentas necessárias para o gerir e controlar as ações de planejamento pedagógico da sua escola.": {
            en: "Have at hand the necessary tools to manage and control your school's pedagogical planning actions.",

        },
        "Ações preventivas": {
            en: "Preventive actions",

        },
        "Conte com um corpo de especialistas renomados para acompanhamento e desenvolvimento de ações  em cenários pós-crise.": {
            en: "Count on a body of renowned experts to monitor and develop actions in post-crisis scenarios.",
        },
        "Projetos recentes": {
            en: "Recent Projects",
        },
        "Implementação do soluções educacionais de gerenciamento de recursos didáticos mediados por tecnologia em contexto de pandemia com foco na educação infantil.": {
            en: "Implementation of educational solutions for managing teaching resources mediated by technology in a pandemic context, focusing on early childhood education.",

        },
        "Educação": {
            en: "Education",
        },
        "Desenvolvimento de plataforma, metodologias e rotinas de produção e distribuição de material educacional.": {
            en: "Development of platform, methodologies and routines for the production and distribution of educational material.",
        },
        "Site e presença digital, bem como o desenvolvimento de metodologias e  distribuição de material educacional.": {
            en: "Website and digital presence, as well as the development of methodologies and distribution of educational material.",
        },
        "Desenvolvimento de plataforma digital, sistema de interação por QR code, site e presença em redes sociais.": {
            en: "Development of digital platform, QR code interaction system, website and presence on social networks.",
        },
        "Gestão da aprendizagem e de trabalho colaborativo, permite a realização de cursos e disciplinas presenciais.": {
            en: "Management of learning and collaborative work, allows the realization of on-site courses and subjects.",
        },
        "Pedagogia e Relações Internacionais concentrou-se em negócios internacionais, combinada com diversos cursos de pós-graduação nas áreas de gestão de pessoas, gestão e orientação educacional e outros que o tornam um especialista em gestão educacional.": {
            en: "Pedagogy and International Relations has focused on international business, combined with several postgraduate courses in the areas of people management, educational management and guidance and others that make him an expert in educational management.",
        },
        "Contato": {
            en: "Contact",
        },
        "Pronto para iniciar seu próximo projeto conosco? Envie-nos uma": {
            en: "Ready to start your next project with us? send us a",
        },
        "mensagem e entraremos em contato com você o mais breve possível!": {
            en: "message and we will get back to you as soon as possible!",
        },
        "Enviar mensagem": {
            en: "Send Message",
        },
    };
    var _t = $('body').translate({lang: "pt", t: t});
    var str = _t.g("translate");
    console.log(str);


    $(".lang_selector").click(function(ev) {
        var lang = $(this).attr("data-value");
        _t.lang(lang);

        console.log(lang);
        ev.preventDefault();
    });



});