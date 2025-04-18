$(document).ready(function () {
    renderSkills('es');
});

function renderSkills(lang) {
    const container = $(".skills-container");
    container.html('');
    
    const data = skills[lang];
    
    Object.entries(data).forEach(([groupTitle, skillsList]) => {
        const itemsHTML = skillsList.map(skill => `
            <div class="skill-item"><span>${skill.name}</span>
                <div class="bar">
                    <div style="width: ${skill.level}%"></div>
                </div>
            </div>`).join('');

        const groupHTML = `
            <div class="skills-group">
                <h3>${groupTitle}</h3>
                <div class="skills-two-cols">${itemsHTML}</div>
            </div>
        `;

        container.append(groupHTML);
    });
}

const skills = {
    es: {
        "Lenguajes": [
            { name: "HTML5", level: 80 },
            { name: "CSS3", level: 50 },
            { name: "JavaScript", level: 75 },
            { name: "PHP", level: 100 },
            { name: "Kotlin / Android", level: 90 }
        ],
        "Frameworks / Tools": [
            { name: "Laravel", level: 100 },
            { name: "Node.js", level: 80 },
            { name: "NestJS", level: 65 },
            { name: "React.js", level: 50 },
            { name: "Docker", level: 65 },
            { name: "Bootstrap 4.1", level: 85 }
        ],
        "Bases de Datos": [
            { name: "MySQL", level: 95 },
            { name: "Microsoft SQL Server", level: 95 },
            { name: "MongoDB", level: 80 },
            { name: "GraphQL", level: 50 }
        ],
        "Otros": [
            { name: "Power BI", level: 70 },
            { name: "AJAX", level: 100 },
            { name: "Git", level: 95 },
            { name: "Java / Android", level: 65 },
            { name: "JWT", level: 100 },
            { name: "Microsoft Office", level: 90 },
            { name: "AWS – EC2", level: 70 },
            { name: "AWS – S3", level: 70 },
            { name: "Heroku", level: 50 }
        ]
    },

    pt: {
        "Linguagens": [
            { name: "HTML5", level: 80 },
            { name: "CSS3", level: 50 },
            { name: "JavaScript", level: 75 },
            { name: "PHP", level: 100 },
            { name: "Kotlin / Android", level: 90 }
        ],
        "Frameworks / Ferramentas": [
            { name: "Laravel", level: 100 },
            { name: "Node.js", level: 80 },
            { name: "NestJS", level: 65 },
            { name: "React.js", level: 50 },
            { name: "Docker", level: 65 },
            { name: "Bootstrap 4.1", level: 85 }
        ],
        "Bancos de Dados": [
            { name: "MySQL", level: 95 },
            { name: "Microsoft SQL Server", level: 95 },
            { name: "MongoDB", level: 80 },
            { name: "GraphQL", level: 50 }
        ],
        "Outros": [
            { name: "Power BI", level: 70 },
            { name: "AJAX", level: 100 },
            { name: "Git", level: 95 },
            { name: "Java / Android", level: 65 },
            { name: "JWT", level: 100 },
            { name: "Microsoft Office", level: 90 },
            { name: "AWS – EC2", level: 70 },
            { name: "AWS – S3", level: 70 },
            { name: "Heroku", level: 50 }
        ]
    }
};
