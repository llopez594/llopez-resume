$(document).ready(function () {

    const timeline = $(".timeline");
    
    experiences.forEach(exp => {
        const tagsHtml = exp.tags.map((tag, i) => `
            <div class="tech-chip">
                <img src="${exp.icons[i]}" alt="${tag}" />
                <span>${tag}</span>
            </div>`).join("");

        const html = `
        <div class="timeline-item">
            <div class="timeline-card left">
                <h4>${exp.title}</h4>
                <p class="company">${exp.company}</p>
                <div class="tech-stack">${tagsHtml}</div>
            </div>
            <div class="timeline-date right">${exp.duration}</div>
        </div>`;

        timeline.append(html);
    });
});

const experiences = [
    {
      title: "Backend Developer",
      duration: "ago.2024 – Actualidad",
      company: "ICO - International Certification Organization",
      tags: ["Laravel", "MySQL", "Power BI"],
      icons: [
        "https://cdn.simpleicons.org/laravel/ffffff",
        "https://cdn.simpleicons.org/mysql",
        "https://upload.wikimedia.org/wikipedia/commons/c/cf/New_Power_BI_Logo.svg"
      ]
    },
    {
      title: "Backend Developer – 1 año, 5 meses",
      duration: "abr.2023 – ago.2024",
      company: "Pets",
      tags: ["Node.js", "Laravel", "MongoDB"],
      icons: [
        "https://cdn.simpleicons.org/nodedotjs",
        "https://cdn.simpleicons.org/laravel/ffffff",
        "https://cdn.simpleicons.org/mongodb"
      ]
    },
    {
      title: "PHP Developer – 4 meses",
      duration: "feb.2023 – may.2023",
      company: "Sempiterno Group",
      tags: ["Docker", "PHP", "JS", "HTML5", "MySQL"],
      icons: [
        "https://cdn.simpleicons.org/docker",
        "https://cdn.simpleicons.org/php",
        "https://cdn.simpleicons.org/javascript",
        "https://cdn.simpleicons.org/html5",
        "https://cdn.simpleicons.org/mysql"
      ]
    },
    {
      title: "PHP Developer – 1 año",
      duration: "feb.2022 – ene.2023",
      company: "RSISTEMS C.A.",
      tags: ["PHP", "JS", "HTML5", "Microsoft SQL Server"],
      icons: [
        "https://cdn.simpleicons.org/php",
        "https://cdn.simpleicons.org/javascript",
        "https://cdn.simpleicons.org/html5",
        "https://img.icons8.com/color/48/microsoft-sql-server.png"
      ]
    },
    {
      title: "PHP Developer – 2 años",
      duration: "feb.2022 – ene.2023",
      company: "Distribuciones Confisur, C.A.",
      tags: ["PHP", "JS", "HTML5", "Microsoft SQL Server"],
      icons: [
        "https://cdn.simpleicons.org/php",
        "https://cdn.simpleicons.org/javascript",
        "https://cdn.simpleicons.org/html5",
        "https://img.icons8.com/color/48/microsoft-sql-server.png"
      ]
    },
    {
      title: "Android Developer – 8 meses",
      duration: "may.2021 – dic.2021",
      company: "FrooGeT",
      tags: ["Kotlin", "Android"],
      icons: [
        "https://cdn.simpleicons.org/kotlin",
        "https://cdn.simpleicons.org/android"
      ]
    },
    {
      title: "Android Developer – 2 años",
      duration: "dic.2017 – dic.2019",
      company: "Repuestos Coreanos Smith Rodriguez C.A.",
      tags: ["Laravel", "Java", "Kotlin", "Android", "Microsoft SQL Server"],
      icons: [
        "https://cdn.simpleicons.org/laravel/ffffff",
        "https://img.icons8.com/color/48/java-coffee-cup-logo.png",
        "https://cdn.simpleicons.org/kotlin",
        "https://cdn.simpleicons.org/android",
        "https://img.icons8.com/color/48/microsoft-sql-server.png"
      ]
    }
  ];
  