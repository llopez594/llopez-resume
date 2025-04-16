const scrollBtn = document.getElementById("scrollToTopBtn");

        window.addEventListener("scroll", () => {
            const scrolledFromTop = window.scrollY || document.documentElement.scrollTop;
            const documentHeight = document.documentElement.scrollHeight;
            const windowHeight = window.innerHeight;

            const reachedBottom = (scrolledFromTop + windowHeight) >= (documentHeight - 50);

            scrollBtn.style.display = reachedBottom ? "block" : "none";
        });

        scrollBtn.addEventListener("click", () => {
            window.scrollTo({ top: 0, behavior: "smooth" });
        });


        $(document).ready(function () {
            const lastSection = localStorage.getItem('lastSection') || 'about';
            show(lastSection);

            // timeline
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

        document.querySelectorAll('.ripple').forEach(btn => {
            btn.addEventListener('click', function (e) {
                this.classList.remove('clicked');
                void this.offsetWidth;
                this.classList.add('clicked');
            });
        });

        function show(id) {
            localStorage.setItem('lastSection', id);

            document.querySelectorAll('.section').forEach(s => s.classList.remove('active'));
            document.getElementById(id).classList.add('active');

            /* document.querySelectorAll('nav a').forEach(a => {
                a.classList.toggle('active-link', a.dataset.target === id);
            }); */

            document.querySelectorAll('nav a').forEach(link => link.classList.remove('active-link'));
            document.querySelector(`nav a[data-target="${id}"]`).classList.add('active-link');
        }