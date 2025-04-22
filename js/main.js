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

    document.querySelectorAll('nav a').forEach(link => link.classList.remove('active-link'));
    document.querySelector(`nav a[data-target="${id}"]`).classList.add('active-link');
}