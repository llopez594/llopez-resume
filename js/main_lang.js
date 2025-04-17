$(document).ready(function () {
    const browserLang = navigator.language || navigator.userLanguage;
    const storedLang = localStorage.getItem('lang');
    
    if (!storedLang) {
        const defaultLang = browserLang.includes('pt') ? 'pt' : 'es';
        setLanguage(defaultLang);
    } else {
        setLanguage(storedLang);
    }

    $('#languageSelector').on('change', function () {
        const selectedLang = $(this).val();
        localStorage.setItem('lang', selectedLang);
        setLanguage(selectedLang);
    });
});
    
function setLanguage(lang) {
    $('#languageSelector').val(lang);
    $('[data-lang]').each(function () {
        const key = $(this).attr('data-lang');
        const translation = translations[lang][key];
        if (translation) {
            $(this).html(translation);
        }
    });
}


const translations = {
    es: {
        nav_about: "Acerca de Mí",
        nav_experience: "Experiencias",
        nav_skills: "Habilidades",
        nav_contact: "Contacto",
        
        role: "- Backend Developer -",
    
        info_title: "Información Personal",
        nationality: "<strong>Nacionalidad:</strong> Venezolano",
        birthdate: "<strong>Cumpleaños:</strong> 20/03/1996",
        status: "<strong>Relación:</strong> Soltero",
        languages: "<strong>Idiomas:</strong> Español, Portugués intermedio", 
        cv_button: "📄 Ver Currículum Vitae",
        education_title: "Educación",

        experience_title: "Experiencia",

        skills_languages: "Lenguajes",
        skills_frameworks: "Frameworks / Tools",
        skills_databases: "Bases de Datos",
        skills_others: "Otros",

        contact_title: "Contacto",

        footer_contact: "Información de contacto"
    },

    pt: {
        nav_about: "Sobre Mim",
        nav_experience: "Experiências",
        nav_skills: "Habilidades",
        nav_contact: "Contato",
        
        role: "- Desenvolvedor Backend -",
    
        info_title: "Informações Pessoais",
        nationality: "<strong>Nacionalidade:</strong> Venezuelano",
        birthdate: "<strong>Aniversário:</strong> 20/03/1996",
        status: "<strong>Relacionamento:</strong> Solteiro",
        languages: "<strong>Idiomas:</strong> Espanhol, Português intermediário",
        cv_button: "📄 Ver Currículo",
        education_title: "Educação",

        experience_title: "Experiência",

        skills_languages: "Linguagens",
        skills_frameworks: "Frameworks / Ferramentas",
        skills_databases: "Bancos de Dados",
        skills_others: "Outros",

        contact_title: "Contato",

        footer_contact: "Informações de contato"
    }
};

