document.addEventListener('DOMContentLoaded', () => {
    const sections = document.querySelectorAll('.section');
    
    const options = {
        threshold: 0.5
    };
    
    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, options);
    
    sections.forEach(section => {
        observer.observe(section);
    });

    const menuToggle = document.querySelector('#mobile-menu');
    const navList = document.querySelector('.nav-list');

    menuToggle.addEventListener('click', () => {
        navList.classList.toggle('nav-active');
        menuToggle.classList.toggle('toggle');
    });
});
