document.addEventListener('DOMContentLoaded', () => {
    const pagePath = window.location.pathname.replace(/\/$/, '');
    const navigationLinks = document.querySelectorAll('.main-nav .nav-link');

    navigationLinks.forEach(link => {
        const linkPath = new URL(link.href, window.location.origin).pathname.replace(/\/$/, '');
        link.classList.toggle('active', linkPath === pagePath);
        link.addEventListener('click', () => {
            navigationLinks.forEach(item => item.classList.remove('active'));
            link.classList.add('active');
        });
    });

    const popupTargets = document.querySelectorAll(
        '.section-title, .info-content, .card, [class*="card"], [class*="box"], .contact-item, .stats > div'
    );

    popupTargets.forEach((item, index) => {
        item.classList.add('popup-item');
        item.style.transitionDelay = `${Math.min((index % 5) * 70, 280)}ms`;
    });

    if (!('IntersectionObserver' in window)) {
        popupTargets.forEach(item => item.classList.add('is-visible'));
        return;
    }

    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('is-visible');
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.12 });

    popupTargets.forEach(item => observer.observe(item));
});
