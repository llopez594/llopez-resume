$(document).ready(function () {
    const container = document.querySelector(".education-container");
            
    educationItems.forEach(item => {
    const html = `
        <div class="education-item">
        <img src="${item.image}" alt="${item.alt}" />
        <div class="education-content">
            <h4>${item.title}</h4>
            <p>${item.description}</p>
        </div>
        <span class="date-range">${item.date}</span>
        </div>
    `;
    container.insertAdjacentHTML("beforeend", html);
});
});

const educationItems = [
    {
        "image": "./img/uneg.png",
        "alt": "UNEG",
        "title": "Universidad Nacional Experimental de Guayana - Ingenier\u00eda en Inform\u00e1tica",
        "description": "Actualmente curso el 7mo semestre en esta casa de estudios reconocida por su compromiso con la innovaci\u00f3n, el desarrollo y la formaci\u00f3n integral de profesionales en el \u00e1rea tecnol\u00f3gica. La UNEG fue fundada el 9 de marzo de 1982 mediante decreto presidencial, consolid\u00e1ndose como una de las principales instituciones educativas del oriente del pa\u00eds.",
        "date": "2014 - actual"
    },
    {
        "image": "./img/utsguayana.png",
        "alt": "UTS-Guayana",
        "title": "I.U.T. Antonio Jos\u00e9 de Sucre - TSU en Inform\u00e1tica",
        "description": "Centro de formaci\u00f3n t\u00e9cnica superior con enfoque pr\u00e1ctico. Me gradu\u00e9 como T\u00e9cnico Superior Universitario, adquiriendo competencias s\u00f3lidas en desarrollo de software y bases de datos.",
        "date": "2019 - 2024"
    },
    {
        "image": "./img/uecsa.jpg",
        "alt": "UECSA",
        "title": "U.E.Colegio San Agust\u00edn - Bachiller en Ciencias",
        "description": "Instituci\u00f3n orientada a la formaci\u00f3n acad\u00e9mica, ciudadana y moral. Recib\u00ed all\u00ed una educaci\u00f3n integral que reforz\u00f3 mis valores, disciplina y habilidades desde temprana edad.",
        "date": "2008 - 2013"
    }
];