// acerca-de-mi.html
if (document.body.classList.contains("page-acerca-de-mi")) {
    (() => {
        const starsContainer = document.getElementById('stars');
        for (let i = 0; i < 200; i++) {
            const star = document.createElement('div');
            star.className = 'star';
            star.style.left = Math.random() * 100 + '%';
            star.style.top = Math.random() * 100 + '%';
            star.style.animationDelay = Math.random() * 3 + 's';
            star.style.animationDuration = (2 + Math.random() * 2) + 's';
            starsContainer.appendChild(star);
        }

        const animatedCards = document.querySelectorAll('.profile-card, .technology-card');
        const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

        if (prefersReducedMotion || !('IntersectionObserver' in window)) {
            animatedCards.forEach((card) => {
                card.style.opacity = '1';
                card.style.transform = 'translateY(0)';
            });
        } else {
            const observer = new IntersectionObserver((entries) => {
                entries.forEach((entry, index) => {
                    if (entry.isIntersecting) {
                        setTimeout(() => {
                            entry.target.style.opacity = '1';
                            entry.target.style.transform = 'translateY(0)';
                        }, index * 100);
                        observer.unobserve(entry.target);
                    }
                });
            }, { threshold: 0.1 });

            animatedCards.forEach((card) => {
                card.style.opacity = '0';
                card.style.transform = 'translateY(80px)';
                card.style.transition =
                    'opacity 0.8s cubic-bezier(0.4, 0, 0.2, 1), transform 0.8s cubic-bezier(0.4, 0, 0.2, 1)';
                observer.observe(card);
            });
        }

    })();
}

// ansiedad.html
if (document.body.classList.contains("page-ansiedad")) {
    (() => {
        // Generar estrellas
        const starsContainer = document.getElementById('stars');
        for (let i = 0; i < 200; i++) {
            const star = document.createElement('div');
            star.className = 'star';
            star.style.left = Math.random() * 100 + '%';
            star.style.top = Math.random() * 100 + '%';
            star.style.animationDelay = Math.random() * 3 + 's';
            star.style.animationDuration = (2 + Math.random() * 2) + 's';
            starsContainer.appendChild(star);
        }

        // Efecto parallax
        let mouseX = 0, mouseY = 0;
        let currentX = 0, currentY = 0;

        document.addEventListener('mousemove', (e) => {
            mouseX = (e.clientX / window.innerWidth - 0.5) * 15;
            mouseY = (e.clientY / window.innerHeight - 0.5) * 15;
        });

        function animate() {
            currentX += (mouseX - currentX) * 0.05;
            currentY += (mouseY - currentY) * 0.05;

            const cards = document.querySelectorAll('.symptom-card, .song-card, .step, .type-card');
            cards.forEach((card, index) => {
                const depth = (index % 3 + 1) * 0.3;
                card.style.transform = `translate(${currentX * depth}px, ${currentY * depth}px)`;
            });

            requestAnimationFrame(animate);
        }

        animate();

        // Animación de entrada para elementos
        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry, index) => {
                if (entry.isIntersecting) {
                    setTimeout(() => {
                        entry.target.style.opacity = '1';
                        entry.target.style.transform = 'translateY(0)';
                    }, index * 80);
                }
            });
        }, { threshold: 0.1 });

        document.querySelectorAll('.symptom-card, .song-card, .step, .info-box, .type-card').forEach(element => {
            element.style.opacity = '0';
            element.style.transform = 'translateY(50px)';
            element.style.transition = 'opacity 0.8s cubic-bezier(0.4, 0, 0.2, 1), transform 0.8s cubic-bezier(0.4, 0, 0.2, 1)';
            observer.observe(element);
        });

        // Efecto de resplandor que sigue al cursor
        const heroGlow = document.querySelector('.hero-glow');
        document.addEventListener('mousemove', (e) => {
            const x = e.clientX / window.innerWidth * 100;
            const y = e.clientY / window.innerHeight * 100;
            heroGlow.style.background = `radial-gradient(circle at ${x}% ${y}%, rgba(126, 34, 206, 0.25) 0%, transparent 50%)`;
        });

        // Scroll suave para navegación
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function (e) {
                e.preventDefault();
                const target = document.querySelector(this.getAttribute('href'));
                if (target) {
                    target.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                }
            });
        });

    })();
}

// depresion.html
if (document.body.classList.contains("page-depresion")) {
    (() => {
        // Generar estrellas
        const starsContainer = document.getElementById('stars');
        for (let i = 0; i < 200; i++) {
            const star = document.createElement('div');
            star.className = 'star';
            star.style.left = Math.random() * 100 + '%';
            star.style.top = Math.random() * 100 + '%';
            star.style.animationDelay = Math.random() * 3 + 's';
            star.style.animationDuration = (2 + Math.random() * 2) + 's';
            starsContainer.appendChild(star);
        }

        // Efecto parallax
        let mouseX = 0, mouseY = 0;
        let currentX = 0, currentY = 0;

        document.addEventListener('mousemove', (e) => {
            mouseX = (e.clientX / window.innerWidth - 0.5) * 15;
            mouseY = (e.clientY / window.innerHeight - 0.5) * 15;
        });

        function animate() {
            currentX += (mouseX - currentX) * 0.05;
            currentY += (mouseY - currentY) * 0.05;

            const cards = document.querySelectorAll('.symptom-card, .song-card, .step');
            cards.forEach((card, index) => {
                const depth = (index % 3 + 1) * 0.3;
                card.style.transform = `translate(${currentX * depth}px, ${currentY * depth}px)`;
            });

            requestAnimationFrame(animate);
        }

        animate();

        // Animación de entrada para elementos
        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry, index) => {
                if (entry.isIntersecting) {
                    setTimeout(() => {
                        entry.target.style.opacity = '1';
                        entry.target.style.transform = 'translateY(0)';
                    }, index * 80);
                }
            });
        }, { threshold: 0.1 });

        document.querySelectorAll('.symptom-card, .song-card, .step, .info-box').forEach(element => {
            element.style.opacity = '0';
            element.style.transform = 'translateY(50px)';
            element.style.transition = 'opacity 0.8s cubic-bezier(0.4, 0, 0.2, 1), transform 0.8s cubic-bezier(0.4, 0, 0.2, 1)';
            observer.observe(element);
        });

        // Efecto de resplandor que sigue al cursor
        const heroGlow = document.querySelector('.hero-glow');
        document.addEventListener('mousemove', (e) => {
            const x = e.clientX / window.innerWidth * 100;
            const y = e.clientY / window.innerHeight * 100;
            heroGlow.style.background = `radial-gradient(circle at ${x}% ${y}%, rgba(30, 58, 138, 0.25) 0%, transparent 50%)`;
        });

        // Scroll suave para navegación
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function (e) {
                e.preventDefault();
                const target = document.querySelector(this.getAttribute('href'));
                if (target) {
                    target.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                }
            });
        });
    })();
}

// index1.html
if (document.body.classList.contains("page-index1")) {
    (() => {
        // Generar estrellas mejoradas
        const starsContainer = document.getElementById('stars');
        for (let i = 0; i < 200; i++) {
            const star = document.createElement('div');
            star.className = 'star';
            star.style.left = Math.random() * 100 + '%';
            star.style.top = Math.random() * 100 + '%';
            star.style.animationDelay = Math.random() * 3 + 's';
            star.style.animationDuration = (2 + Math.random() * 2) + 's';
            starsContainer.appendChild(star);
        }

        // Efecto parallax mejorado
        let mouseX = 0, mouseY = 0;
        let currentX = 0, currentY = 0;

        document.addEventListener('mousemove', (e) => {
            mouseX = (e.clientX / window.innerWidth - 0.5) * 20;
            mouseY = (e.clientY / window.innerHeight - 0.5) * 20;
        });

        function animate() {
            currentX += (mouseX - currentX) * 0.05;
            currentY += (mouseY - currentY) * 0.05;

            document.querySelectorAll('.card').forEach((card, index) => {
                const depth = (index % 3 + 1) * 0.5;
                card.style.transform = `translate(${currentX * depth}px, ${currentY * depth}px)`;
            });

            requestAnimationFrame(animate);
        }

        animate();

        // Animación de entrada para las tarjetas con efecto stagger
        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry, index) => {
                if (entry.isIntersecting) {
                    setTimeout(() => {
                        entry.target.style.opacity = '1';
                        entry.target.style.transform = 'translateY(0)';
                    }, index * 100);
                }
            });
        }, { threshold: 0.1 });

        document.querySelectorAll('.card').forEach(card => {
            card.style.opacity = '0';
            card.style.transform = 'translateY(80px)';
            card.style.transition = 'opacity 0.8s cubic-bezier(0.4, 0, 0.2, 1), transform 0.8s cubic-bezier(0.4, 0, 0.2, 1)';
            observer.observe(card);
        });

        // Efecto de resplandor que sigue al cursor
        const heroGlow = document.querySelector('.hero-glow');
        document.addEventListener('mousemove', (e) => {
            const x = e.clientX / window.innerWidth * 100;
            const y = e.clientY / window.innerHeight * 100;
            heroGlow.style.background = `radial-gradient(circle at ${x}% ${y}%, rgba(100, 181, 246, 0.15) 0%, transparent 50%)`;
        });

    })();
}

// recursos.html
if (document.body.classList.contains("page-recursos")) {
    (() => {
        document.getElementById('music-feedback-form').addEventListener('submit', (event) => {
            event.preventDefault();
            document.getElementById('feedback-status').textContent =
                'Formulario de muestra: tus respuestas no se han enviado ni guardado.';
        });

        // Generar estrellas
        const starsContainer = document.getElementById('stars');
        for (let i = 0; i < 200; i++) {
            const star = document.createElement('div');
            star.className = 'star';
            star.style.left = Math.random() * 100 + '%';
            star.style.top = Math.random() * 100 + '%';
            star.style.animationDelay = Math.random() * 3 + 's';
            star.style.animationDuration = (2 + Math.random() * 2) + 's';
            starsContainer.appendChild(star);
        }

        // Animación de entrada para las tarjetas
        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry, index) => {
                if (entry.isIntersecting) {
                    setTimeout(() => {
                        entry.target.style.opacity = '1';
                        entry.target.style.transform = 'translateY(0)';
                    }, index * 100);
                }
            });
        }, { threshold: 0.1 });

        document.querySelectorAll('.info-card, .song-card').forEach(card => {
            card.style.opacity = '0';
            card.style.transform = 'translateY(40px)';
            card.style.transition = 'opacity 0.8s cubic-bezier(0.4, 0, 0.2, 1), transform 0.8s cubic-bezier(0.4, 0, 0.2, 1)';
            observer.observe(card);
        });

        // Efecto parallax suave (animación completa)
        let mouseX = 0, mouseY = 0;
        let currentX = 0, currentY = 0;

        document.addEventListener('mousemove', (e) => {
            mouseX = (e.clientX / window.innerWidth - 0.5) * 10;
            mouseY = (e.clientY / window.innerHeight - 0.5) * 10;
        });

        function animate() {
            currentX += (mouseX - currentX) * 0.05;
            currentY += (mouseY - currentY) * 0.05;

            document.querySelectorAll('.info-card, .song-card').forEach((el, index) => {
                const depth = ((index % 3) + 1) * 0.6;
                // Conserva la traslación vertical de la animación de entrada aplicando translateY(0)
                el.style.transform = `translate(${currentX * depth}px, ${currentY * depth}px) translateY(0)`;
            });

            requestAnimationFrame(animate);
        }

        animate();

    })();
}

// tept.html
if (document.body.classList.contains("page-tept")) {
    (() => {
        // Generar estrellas
        const starsContainer = document.getElementById('stars');
        for (let i = 0; i < 200; i++) {
            const star = document.createElement('div');
            star.className = 'star';
            star.style.left = Math.random() * 100 + '%';
            star.style.top = Math.random() * 100 + '%';
            star.style.animationDelay = Math.random() * 3 + 's';
            star.style.animationDuration = (2 + Math.random() * 2) + 's';
            starsContainer.appendChild(star);
        }

        // Efecto parallax
        let mouseX = 0, mouseY = 0;
        let currentX = 0, currentY = 0;

        document.addEventListener('mousemove', (e) => {
            mouseX = (e.clientX / window.innerWidth - 0.5) * 15;
            mouseY = (e.clientY / window.innerHeight - 0.5) * 15;
        });

        function animate() {
            currentX += (mouseX - currentX) * 0.05;
            currentY += (mouseY - currentY) * 0.05;

            const cards = document.querySelectorAll('.song-card, .step, .trauma-card, .symptom-category');
            cards.forEach((card, index) => {
                const depth = (index % 3 + 1) * 0.3;
                card.style.transform = `translate(${currentX * depth}px, ${currentY * depth}px)`;
            });

            requestAnimationFrame(animate);
        }

        animate();

        // Animación de entrada para elementos
        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry, index) => {
                if (entry.isIntersecting) {
                    setTimeout(() => {
                        entry.target.style.opacity = '1';
                        entry.target.style.transform = 'translateY(0)';
                    }, index * 80);
                }
            });
        }, { threshold: 0.1 });

        document.querySelectorAll('.song-card, .step, .info-box, .trauma-card, .symptom-category').forEach(element => {
            element.style.opacity = '0';
            element.style.transform = 'translateY(50px)';
            element.style.transition = 'opacity 0.8s cubic-bezier(0.4, 0, 0.2, 1), transform 0.8s cubic-bezier(0.4, 0, 0.2, 1)';
            observer.observe(element);
        });

        // Efecto de resplandor que sigue al cursor
        const heroGlow = document.querySelector('.hero-glow');
        document.addEventListener('mousemove', (e) => {
            const x = e.clientX / window.innerWidth * 100;
            const y = e.clientY / window.innerHeight * 100;
            heroGlow.style.background = `radial-gradient(circle at ${x}% ${y}%, rgba(51, 65, 85, 0.25) 0%, transparent 50%)`;
        });

        // Scroll suave para navegación
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function (e) {
                e.preventDefault();
                const target = document.querySelector(this.getAttribute('href'));
                if (target) {
                    target.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                }
            });
        });

    })();
}

// toc.html
if (document.body.classList.contains("page-toc")) {
    (() => {
        // Generar estrellas
        const starsContainer = document.getElementById('stars');
        for (let i = 0; i < 200; i++) {
            const star = document.createElement('div');
            star.className = 'star';
            star.style.left = Math.random() * 100 + '%';
            star.style.top = Math.random() * 100 + '%';
            star.style.animationDelay = Math.random() * 3 + 's';
            star.style.animationDuration = (2 + Math.random() * 2) + 's';
            starsContainer.appendChild(star);
        }

        // Efecto parallax
        let mouseX = 0, mouseY = 0;
        let currentX = 0, currentY = 0;

        document.addEventListener('mousemove', (e) => {
            mouseX = (e.clientX / window.innerWidth - 0.5) * 15;
            mouseY = (e.clientY / window.innerHeight - 0.5) * 15;
        });

        function animate() {
            currentX += (mouseX - currentX) * 0.05;
            currentY += (mouseY - currentY) * 0.05;

            const cards = document.querySelectorAll('.song-card, .step, .symptom-card, .oc-box');
            cards.forEach((card, index) => {
                const depth = (index % 3 + 1) * 0.3;
                card.style.transform = `translate(${currentX * depth}px, ${currentY * depth}px)`;
            });

            requestAnimationFrame(animate);
        }

        animate();

        // Animación de entrada para elementos
        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry, index) => {
                if (entry.isIntersecting) {
                    setTimeout(() => {
                        entry.target.style.opacity = '1';
                        entry.target.style.transform = 'translateY(0)';
                    }, index * 80);
                }
            });
        }, { threshold: 0.1 });

        document.querySelectorAll('.song-card, .step, .info-box, .symptom-card, .oc-box').forEach(element => {
            element.style.opacity = '0';
            element.style.transform = 'translateY(50px)';
            element.style.transition = 'opacity 0.8s cubic-bezier(0.4, 0, 0.2, 1), transform 0.8s cubic-bezier(0.4, 0, 0.2, 1)';
            observer.observe(element);
        });

        // Efecto de resplandor que sigue al cursor
        const heroGlow = document.querySelector('.hero-glow');
        document.addEventListener('mousemove', (e) => {
            const x = e.clientX / window.innerWidth * 100;
            const y = e.clientY / window.innerHeight * 100;
            heroGlow.style.background = `radial-gradient(circle at ${x}% ${y}%, rgba(190, 18, 60, 0.25) 0%, transparent 50%)`;
        });

        // Scroll suave para navegación
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function (e) {
                e.preventDefault();
                const target = document.querySelector(this.getAttribute('href'));
                if (target) {
                    target.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                }
            });
        });

    })();
}
