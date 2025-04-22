$(document).ready(function () {
  renderExperiences('es');
});

function renderExperiences(lang) {
  const container = $(".timeline");
  container.html('');

  experiences[lang].forEach(exp => {
    const chips = exp.tags.map((tag, i) => `
      <div class="tech-chip">
        <img src="${exp.icons[i]}" alt="${tag}" />
        <span>${tag}</span>
      </div>`).join("");

    const html = `
      <div class="timeline-item">
        <div class="timeline-card left">
          <h4>${exp.title}</h4>
          <p class="company">${exp.company}</p>
          <p class="timeline-date-mobile">${exp.duration}</p>
          <div class="tech-stack">${chips}</div>
        </div>
        <div class="timeline-date right">${exp.duration}</div>
      </div>`;
      
      container.append(html);
  });
}

const experiences = {
  "es": [
    {
      "title": "Backend Developer",
      "duration": "ago.2024 \u2013 Actualidad",
      "company": "ICO - International Certification Organization",
      "tags": [
        "Laravel",
        "MySQL",
        "Power BI"
      ],
      "icons": [
        "https://cdn.simpleicons.org/laravel/ffffff",
        "https://cdn.simpleicons.org/mysql",
        "https://upload.wikimedia.org/wikipedia/commons/c/cf/New_Power_BI_Logo.svg"
      ]
    },
    {
      "title": "Backend Developer \u2013 1 a\u00f1o, 5 meses",
      "duration": "abr.2023 \u2013 ago.2024",
      "company": "Pets S.A.C.",
      "tags": [
        "Node.js",
        "Laravel",
        "MongoDB"
      ],
      "icons": [
        "https://cdn.simpleicons.org/nodedotjs",
        "https://cdn.simpleicons.org/laravel/ffffff",
        "https://cdn.simpleicons.org/mongodb"
      ]
    },
    {
      "title": "PHP Developer \u2013 4 meses",
      "duration": "feb.2023 \u2013 may.2023",
      "company": "Sempiterno Group",
      "tags": [
        "Docker",
        "PHP",
        "JS",
        "HTML5",
        "MySQL"
      ],
      "icons": [
        "https://cdn.simpleicons.org/docker",
        "https://cdn.simpleicons.org/php",
        "https://cdn.simpleicons.org/javascript",
        "https://cdn.simpleicons.org/html5",
        "https://cdn.simpleicons.org/mysql"
      ]
    },
    {
      "title": "PHP Developer \u2013 1 a\u00f1o",
      "duration": "feb.2022 \u2013 ene.2023",
      "company": "RSISTEMS, C.A.",
      "tags": [
        "PHP",
        "JS",
        "HTML5",
        "Microsoft SQL Server"
      ],
      "icons": [
        "https://cdn.simpleicons.org/php",
        "https://cdn.simpleicons.org/javascript",
        "https://cdn.simpleicons.org/html5",
        "https://img.icons8.com/color/48/microsoft-sql-server.png"
      ]
    },
    {
      "title": "PHP Developer \u2013 2 a\u00f1os",
      "duration": "feb.2022 \u2013 ene.2023",
      "company": "Distribuciones Confisur, C.A.",
      "tags": [
        "PHP",
        "JS",
        "HTML5",
        "Microsoft SQL Server"
      ],
      "icons": [
        "https://cdn.simpleicons.org/php",
        "https://cdn.simpleicons.org/javascript",
        "https://cdn.simpleicons.org/html5",
        "https://img.icons8.com/color/48/microsoft-sql-server.png"
      ]
    },
    {
      "title": "Android Developer \u2013 8 meses",
      "duration": "may.2021 \u2013 dic.2021",
      "company": "FrooGeT",
      "tags": [
        "Kotlin",
        "Android"
      ],
      "icons": [
        "https://cdn.simpleicons.org/kotlin",
        "https://cdn.simpleicons.org/android"
      ]
    },
    {
      "title": "Android Developer \u2013 2 a\u00f1os",
      "duration": "dic.2017 \u2013 dic.2019",
      "company": "Repuestos Coreanos Smith Rodriguez C.A.",
      "tags": [
        "Laravel",
        "Java",
        "Kotlin",
        "Android",
        "Microsoft SQL Server",
        "ASP.NET",
        "C#"
      ],
      "icons": [
        "https://cdn.simpleicons.org/laravel/ffffff",
        "https://img.icons8.com/color/48/java-coffee-cup-logo.png",
        "https://cdn.simpleicons.org/kotlin",
        "https://cdn.simpleicons.org/android",
        "https://img.icons8.com/color/48/microsoft-sql-server.png",
        "https://cdn.simpleicons.org/dotnet",
        "https://cdn.simpleicons.org/dotnet"
      ]
    }
  ],
  "pt": [
    {
      "title": "Desenvolvedor Backend",
      "duration": "ago.2024 \u2013 Atual",
      "company": "ICO - Organiza\u00e7\u00e3o Internacional de Certifica\u00e7\u00e3o",
      "tags": [
        "Laravel",
        "MySQL",
        "Power BI"
      ],
      "icons": [
        "https://cdn.simpleicons.org/laravel/ffffff",
        "https://cdn.simpleicons.org/mysql",
        "https://upload.wikimedia.org/wikipedia/commons/c/cf/New_Power_BI_Logo.svg"
      ]
    },
    {
      "title": "Desenvolvedor Backend \u2013 1 a\u00f1o, 5 meses",
      "duration": "abr.2023 \u2013 ago.2024",
      "company": "Pets S.A.C.",
      "tags": [
        "Node.js",
        "Laravel",
        "MongoDB"
      ],
      "icons": [
        "https://cdn.simpleicons.org/nodedotjs",
        "https://cdn.simpleicons.org/laravel/ffffff",
        "https://cdn.simpleicons.org/mongodb"
      ]
    },
    {
      "title": "Desenvolvedor PHP \u2013 4 meses",
      "duration": "feb.2023 \u2013 may.2023",
      "company": "Sempiterno Group",
      "tags": [
        "Docker",
        "PHP",
        "JS",
        "HTML5",
        "MySQL"
      ],
      "icons": [
        "https://cdn.simpleicons.org/docker",
        "https://cdn.simpleicons.org/php",
        "https://cdn.simpleicons.org/javascript",
        "https://cdn.simpleicons.org/html5",
        "https://cdn.simpleicons.org/mysql"
      ]
    },
    {
      "title": "Desenvolvedor PHP \u2013 1 a\u00f1o",
      "duration": "feb.2022 \u2013 jan.2023",
      "company": "RSISTEMS, C.A.",
      "tags": [
        "PHP",
        "JS",
        "HTML5",
        "Microsoft SQL Server"
      ],
      "icons": [
        "https://cdn.simpleicons.org/php",
        "https://cdn.simpleicons.org/javascript",
        "https://cdn.simpleicons.org/html5",
        "https://img.icons8.com/color/48/microsoft-sql-server.png"
      ]
    },
    {
      "title": "Desenvolvedor PHP \u2013 2 a\u00f1os",
      "duration": "feb.2022 \u2013 jan.2023",
      "company": "Distribuciones Confisur, C.A.",
      "tags": [
        "PHP",
        "JS",
        "HTML5",
        "Microsoft SQL Server"
      ],
      "icons": [
        "https://cdn.simpleicons.org/php",
        "https://cdn.simpleicons.org/javascript",
        "https://cdn.simpleicons.org/html5",
        "https://img.icons8.com/color/48/microsoft-sql-server.png"
      ]
    },
    {
      "title": "Desenvolvedor Android \u2013 8 meses",
      "duration": "may.2021 \u2013 dic.2021",
      "company": "FrooGeT",
      "tags": [
        "Kotlin",
        "Android"
      ],
      "icons": [
        "https://cdn.simpleicons.org/kotlin",
        "https://cdn.simpleicons.org/android"
      ]
    },
    {
      "title": "Desenvolvedor Android \u2013 2 a\u00f1os",
      "duration": "dic.2017 \u2013 dic.2019",
      "company": "Repuestos Coreanos Smith Rodriguez C.A.",
      "tags": [
        "Laravel",
        "Java",
        "Kotlin",
        "Android",
        "Microsoft SQL Server",
        "ASP.NET",
        "C#"
      ],
      "icons": [
        "https://cdn.simpleicons.org/laravel/ffffff",
        "https://img.icons8.com/color/48/java-coffee-cup-logo.png",
        "https://cdn.simpleicons.org/kotlin",
        "https://cdn.simpleicons.org/android",
        "https://img.icons8.com/color/48/microsoft-sql-server.png",
        "https://cdn.simpleicons.org/dotnet",
        "https://cdn.simpleicons.org/dotnet"
      ]
    }
  ]
};