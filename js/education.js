$(document).ready(function () {
    renderEducation('es');
});

function renderEducation(lang) {
    const container = $(".education-container");
    container.html('');
    educationItems[lang].forEach(item => {
        const html = `
            <div class="education-item">
                <img src="${item.image}" alt="${item.alt}" />
                <div class="education-content">
                <h4>${item.title}</h4>
                <p>${item.description}</p>
                </div>
                <span class="date-range">${item.date}</span>
            </div>`;
        container.append(html);
    });
}

const educationItems = {
    es: [
        {
            image: "img/uneg.png",
            alt: "UNEG",
            title: "Universidad Nacional Experimental de Guayana - Ingeniería en Informática",
            description: "Actualmente curso el 7mo semestre en esta institución, que forma profesionales integrales preparados para diseñar, desarrollar y gestionar soluciones innovadoras con conocimientos en estructuras de datos, análisis y modelado de sistemas, dominio de bases de datos relacionales y no relacionales, así como la capacidad de aplicar estándares de calidad.",
            date: "2014 - actual"
        },
        {
            image: "img/utsguayana.png",
            alt: "UTS-Guayana",
            title: "I.U.T. Antonio José de Sucre - TSU en Informática",
            description: "Centro de formación técnica superior con enfoque práctico. Me gradué como Técnico Superior Universitario, adquiriendo competencias sólidas en desarrollo de software y bases de datos.",
            date: "2019 - 2024"
        },
        {
            image: "img/uecsa.jpg",
            alt: "San Agustín",
            title: "U.E.Colegio San Agustín - Bachiller en Ciencias",
            description: "Institución orientada a la formación académica, ciudadana y moral. Recibí allí una educación integral que reforzó mis valores, disciplina y habilidades desde temprana edad.",
            date: "2008 - 2013"
        }
    ],
    pt: [
        {
            image: "img/uneg.png",
            alt: "UNEG",
            title: "Universidade Experimental Nacional da Guayana - Engenharia da Computação",
            description: "Atualmente curso o 7º semestre nesta instituição, que forma profissionais integrais preparados para projetar, desenvolver e gerenciar soluções inovadoras, com conhecimentos em estruturas de dados, análise e modelagem de sistemas, domínio de bancos de dados relacionais e não relacionais, além da capacidade de aplicar padrões de qualidade.",
            date: "2014 - atual"
        },
        {
            image: "img/utsguayana.png",
            alt: "UTS-Guayana",
            title: "I.U.T. Antonio José de Sucre - Tecnólogo em Análise e Desenvolvimento de Sistemas",
            description: "Centro de formação técnica de nível superior com enfoque prático. Formei-me como Tecnólogo, adquirindo competências sólidas em desenvolvimento de software e bancos de dados.",
            date: "2019 - 2024"
        },
        {
            image: "img/uecsa.jpg",
            alt: "San Agustín",
            title: "U.E.Colegio San Agustín - Ensino Médio completo com formação em área científica",
            description: "Instituição voltada à formação acadêmica e cidadã. Recebi ali uma educação integral que reforçou meus valores e habilidades.",
            date: "2008 - 2013"
        }
    ]
};