// inicializar ícones Lucide
lucide.createIcons();

// animação de scroll para elementos com classe fade-in
document.addEventListener("DOMContentLoaded", () => {
    const elements = document.querySelectorAll(".fade-in");
    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) entry.target.classList.add("visible");
        });
    }, { 
        threshold: 0.5, // 50% do elemento visível
        rootMargin: "0px 0px -100px 0px" // ativa quando entrar 100px da viewport
    });

    elements.forEach(el => observer.observe(el));
    lucide.createIcons();
});

// verificar elementos ao carregar e ao scrollar
window.addEventListener('scroll', checkFadeIn);
window.addEventListener('load', checkFadeIn);

// smooth scroll para links de navegação
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        const targetId = this.getAttribute('href');
        if (targetId === '#') return;

        const targetElement = document.querySelector(targetId);
        if (targetElement) {
            const headerHeight = document.querySelector('header').offsetHeight;
            const targetPosition = targetElement.offsetTop - headerHeight;

            window.scrollTo({
                top: targetPosition,
                behavior: 'smooth'
            });
        }
    });
});

function toggleFAQ(button) {
    const content = button.nextElementSibling;
    const icon = button.querySelector("i");
    content.style.maxHeight = content.style.maxHeight ? null : content.scrollHeight + "px";
    icon.classList.toggle("rotate-180");
};

// menu Mobile
function toggleMobileMenu() {
    const menu = document.querySelector('.mobile-menu');
    menu.classList.toggle('open');
}

document.addEventListener("DOMContentLoaded", () => {
    const elements = document.querySelectorAll(".fade-in");
    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) entry.target.classList.add("visible");
        });
    }, { threshold: 0.1 });

    elements.forEach(el => observer.observe(el));

    lucide.createIcons();
});




        