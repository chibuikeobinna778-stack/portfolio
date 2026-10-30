function toggleMenu() {
            document.getElementById('navLinks').classList.toggle('active');
        }

        function handleSubmit(e) {
            e.preventDefault();
            alert('Thank you for your message! This is a demo form.');
            e.target.reset();
        }

        // Dark Mode Toggle
        const themeToggle = document.getElementById('themeToggle');
        const themeIcon = document.getElementById('themeIcon');
        const html = document.documentElement;

        // Check for saved theme preference or system preference
        const savedTheme = localStorage.getItem('theme');
        const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;

        if (savedTheme === 'dark' || (!savedTheme && prefersDark)) {
            html.setAttribute('data-theme', 'dark');
            themeIcon.textContent = '☀️';
        }

        themeToggle.addEventListener('click', () => {
            const currentTheme = html.getAttribute('data-theme');
            if (currentTheme === 'dark') {
                html.removeAttribute('data-theme');
                themeIcon.textContent = '🌙';
                localStorage.setItem('theme', 'light');
            } else {
                html.setAttribute('data-theme', 'dark');
                themeIcon.textContent = '☀️';
                localStorage.setItem('theme', 'dark');
            }
        });