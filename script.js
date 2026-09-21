// ===== Smooth scroll for navigation links =====
document.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                e.preventDefault();
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
});

// ===== Dynamic years of experience calculation =====
document.addEventListener('DOMContentLoaded', () => {
    const joiningDate = new Date(2017, 8, 1); // September 1, 2017 (months are 0-indexed)
    const now = new Date();
    let years = now.getFullYear() - joiningDate.getFullYear();
    const m = now.getMonth() - joiningDate.getMonth();
    if (m < 0 || (m === 0 && now.getDate() < joiningDate.getDate())) {
        years--;
    }
    const yearsElem = document.getElementById('years-experience');
    if (yearsElem) {
        yearsElem.textContent = years;
    }
});

// ===== Scroll to top button (moved from index.html inline script) =====
document.addEventListener('DOMContentLoaded', () => {
    const scrollBtn = document.getElementById('scrollToTopBtn');
    if (!scrollBtn) return;
    window.addEventListener('scroll', () => {
        if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
            scrollBtn.style.display = 'block';
        } else {
            scrollBtn.style.display = 'none';
        }
    });
    scrollBtn.addEventListener('click', () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });
});

// ===== Light/Dark mode toggle with persistence =====
document.addEventListener('DOMContentLoaded', () => {
    const toggle = document.getElementById('themeToggle');
    if (!toggle) return;

    if (localStorage.getItem('theme') === 'dark') {
        document.documentElement.setAttribute('data-theme', 'dark');
    }

    toggle.addEventListener('click', () => {
        const isDark = document.documentElement.getAttribute('data-theme') === 'dark';
        if (isDark) {
            document.documentElement.removeAttribute('data-theme');
            localStorage.setItem('theme', 'light');
        } else {
            document.documentElement.setAttribute('data-theme', 'dark');
            localStorage.setItem('theme', 'dark');
        }
    });
});
