$(document).ready(function () {
    const container = document.querySelector(".perfil-container");
            
    const html = perfilData.data;

    container.insertAdjacentHTML("beforeend", html);
});

const perfilData = {
    "data": `
        <p>
            Hola, soy <strong>Luis López</strong>, Desarrollador Backend con más de 6 años de experiencia en
            el desarrollo de
            soluciones web escalables y automatizadas. He trabajado con tecnologías como <strong>Laravel,
                PHP, Node.js</strong>,
            bases de datos <strong>relacionales y no relacionales</strong>, y herramientas como
            <strong>Power BI</strong> para
            la visualización y análisis de datos.
        </p>
        <p>
            Durante mi trayectoria, he tenido la oportunidad de construir sistemas personalizados para
            empresas de diferentes
            sectores, optimizando procesos como control de inventario, ventas, generación de KPIs,
            integración de APIs y gestión
            documental. Mi enfoque siempre ha estado en crear soluciones <strong>eficientes, seguras y bien
                estructuradas</strong>,
            siguiendo principios como <strong>arquitectura limpia y SOLID</strong>.
        </p>
        <p>
            Disfruto colaborar en equipo, aportar valor técnico y mantenerme en constante aprendizaje.
            Actualmente me encuentro
            en Brasil, abierto a oportunidades <strong>remotas o presenciales</strong>, y con alta
            disposición para integrarme a
            nuevos proyectos desafiantes.
        </p>
        <p>
            Hi, I'm <strong>Luis López</strong>, a backend developer with over 6 years of experience
            building scalable web
            solutions using Laravel, Node.js and modern database systems. I focus on clean architecture,
            data-driven systems,
            and team collaboration. I'm currently based in Brazil and open to remote or on-site
            opportunities.
        </p>
    `
};