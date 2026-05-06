const INDEX_PAGE = "index.html";
const PROJECTS_PAGE = "projects.html";
const RESUME_PAGE = "resume.html";

const TRANSLATION_PT = "PT";
const TRANSLATION_ENG = "ENG";

const translation_strings = {
    home_PT_strings: [
        "Projetos",
        "Cúrriculo",
        "Olá, sou o",
        "Desenvolvedor Software Júnior",
        "Sobre Mim",
        "Sou Técnico Especialista em Tecnologias e Programação de Sistemas de Informação (ATEC). Recentemente, tive a oportunidade de aplicar os meus conhecimentos na APTIV, onde desenvolvi uma solução web para monitorização de robôs numa linha de produção. Tenho bases sólidas em linguagens como Java, C#, SQL e tecnologias Web. Sou focado na resolução de problemas e, como tenho também experiência em 3D, tenho facilidade em visualizar o produto final. Procuro agora o meu primeiro desafio profissional sólido para continuar a evoluir como programador.",
        "- Línguas:",
        "- Embbeded:",
        "- Ferramentas:",
        "Projetos Destacados",
        "Feito por Pedro Bernardo"
    ],

    home_ENG_strings: [
        "Projects",
        "Resumé",
        "Hi, I'm",
        "Junior Software Developer",
        "About Me",
        "I am a Certified Specialist in Information Systems Technology and Programming (ATEC). Recently, I had the opportunity to apply my knowledge at APTIV, where I developed a web-based solution for monitoring robots on a production line. I have a solid foundation in languages such as Java, C#, SQL, and web technologies. I am focused on problem-solving, and since I also have experience in 3D. I am now looking for my first substantial professional challenge to continue growing as a programmer.",
        "- Languages:",
        "- Embbeded:",
        "- Tools:",
        "Featured Projects",
        "Made by Pedro Bernardo."
    ],

    projects_PT_strings: [
        "Projetos",
        "Cúrriculo",
        "Olá, sou o",
        "Desenvolvedor Software Júnior",
        "Projetos",
        "Tipo de Projeto:&nbsp",
        "Todos",
        "Programação",
        "Sistemas Embebidos",
        "Arquitetura",
        "Composições",
        "Edição de Software",
        "Feito por Pedro Bernardo"
    ],

    projects_ENG_strings: [
        "Projects",
        "Resumé",
        "Hi, I'm",
        "Junior Software Developer",
        "Projects",
        "Project Type:&nbsp",
        "All",
        "Programming",
        "Embbeded",
        "Architecture",
        "Compositions",
        "Editing Software",
        "Made by Pedro Bernardo"
    ],

    resume_PT_strings: [
        ""
    ],

    resume_ENG_strings: [
        ""
    ]
}


/**Gets the page url and translates the respective text
 * 
 */
function pageToTranslate(language) {
    language = language.trim();

    if (document.URL.includes(INDEX_PAGE)) {
        if (language === TRANSLATION_PT)
            translateLanguage(translation_strings.home_PT_strings);
        else if (language === TRANSLATION_ENG)
            translateLanguage(translation_strings.home_ENG_strings);
    }
    else if (document.URL.includes(PROJECTS_PAGE)) {
        if (language === TRANSLATION_PT)
            translateLanguage(translation_strings.projects_PT_strings);
        else if (language === TRANSLATION_ENG)
            translateLanguage(translation_strings.projects_ENG_strings);
    }
    else if (document.URL.includes(RESUME_PAGE)) {
        if (language === TRANSLATION_PT)
            translateLanguage(translation_strings.resume_PT_strings);
        else if (language === TRANSLATION_ENG)
            translateLanguage(translation_strings.resume_ENG_strings);
    }
}

/**Translates text in html to the desired language
 * 
 */
function translateLanguage(translation_string_list) {
    for (let i = 0; i < translation_string_list.length; i++) {
        let container = document.getElementById(`translate${i}`);

        if (container !== null)
            container.innerHTML = translation_string_list[i];
    }
}