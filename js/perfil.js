$(document).ready(function () {
    renderPerfil('es');
});

function renderPerfil(lang) {
    const container = $(".perfil-container");
    container.html(perfilData[lang]);
}

const perfilData = {
    es: `
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
        `,
    pt: `
        <p>
            Olá, sou <strong>Luis López</strong>, Desenvolvedor Backend com mais de 6 anos de experiência no 
            desenvolvimento de soluções web escaláveis e automatizadas. Trabalhei com tecnologias como <strong>
            Laravel, PHP, Node.js</strong>, bancos de dados <strong>relacionais e não relacionais</strong> e ferramentas 
            como <strong>Power BI</strong> para visualização e análise de dados.
        </p>
        <p>
            Durante minha trajetória, tive a oportunidade de construir sistemas personalizados para empresas de diferentes 
            setores, otimizando processos como controle de estoque, vendas, geração de KPIs, integração de APIs e gestão documental. 
            Sempre me concentrei em criar soluções <strong>eficientes, seguras e bem estruturadas</strong>, seguindo princípios como 
            <strong>arquitetura limpa e SOLID</strong>.
        </p>
        <p>
            Gosto de colaborar em equipe, agregar valor técnico e estar em constante aprendizado. Atualmente moro no Brasil e 
            estou aberto a oportunidades <strong>remotas ou presenciais</strong>, com alta disposição para participar de novos 
            projetos desafiadores.
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