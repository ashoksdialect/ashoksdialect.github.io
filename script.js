// Portfolio interaction enhancements

document.addEventListener('DOMContentLoaded', () => {
    // Keep in-page navigation smooth while allowing the home control to return to the hero.
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (event) {
            const target = document.querySelector(this.getAttribute('href'));
            if (!target) return;

            event.preventDefault();
            target.scrollIntoView({ behavior: 'smooth', block: 'start' });
        });
    });

    // Replace the initials with a compact, recognizable home mark.
    const homeLink = document.querySelector('.logo-section .avatar');
    if (homeLink) {
        homeLink.href = '#home';
        homeLink.classList.add('home-link');
        homeLink.setAttribute('aria-label', 'Back to home');
        homeLink.setAttribute('title', 'Back to home');
        homeLink.innerHTML = '<i class="fas fa-house-chimney-window home-icon" aria-hidden="true"></i>';
    }

    // Add the resume action to the top navigation without changing the existing palette.
    const navLinks = document.querySelector('.nav-links');
    if (navLinks && !navLinks.querySelector('.resume-nav-link')) {
        const resumeLink = document.createElement('a');
        resumeLink.className = 'resume-nav-link';
        resumeLink.href = 'Ashok_Rajendran.pdf';
        resumeLink.download = '';
        resumeLink.setAttribute('aria-label', 'Download resume');
        resumeLink.setAttribute('title', 'Download resume');
        resumeLink.innerHTML = '<i class="fas fa-file-arrow-down" aria-hidden="true"></i><span>Resume</span>';
        navLinks.appendChild(resumeLink);
    }

    // Give the introduction a little more visual hierarchy while retaining the existing copy.
    const heroDescription = document.querySelector('.hero-description');
    if (heroDescription && !heroDescription.querySelector('.hero-keyword')) {
        const copy = heroDescription.textContent;
        const keywords = /((?:data )?pipelines|real-time processing|cloud-native architecture|scalable data infrastructure|meaningful insights)/gi;
        heroDescription.innerHTML = copy.replace(keywords, '<span class="hero-keyword">$1</span>');
    }

    // Dynamic years of experience calculation.
    const joiningDate = new Date(2017, 8, 1);
    const now = new Date();
    let years = now.getFullYear() - joiningDate.getFullYear();
    const monthDelta = now.getMonth() - joiningDate.getMonth();
    if (monthDelta < 0 || (monthDelta === 0 && now.getDate() < joiningDate.getDate())) years--;

    const yearsElem = document.getElementById('years-experience');
    if (yearsElem) yearsElem.textContent = years;

    // Scroll-to-top behavior is kept here as a fallback for pages that do not use inline logic.
    const scrollBtn = document.getElementById('scrollToTopBtn');
    if (scrollBtn) {
        const updateScrollButton = () => {
            scrollBtn.style.display = window.scrollY > 200 ? 'block' : 'none';
        };
        window.addEventListener('scroll', updateScrollButton, { passive: true });
        updateScrollButton();
        scrollBtn.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));
    }
});
