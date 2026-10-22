// ==========================================
// 1. EFFET PARALLAXE SUR LE FOND
// ==========================================
document.addEventListener("mousemove", (e) => {
    const bgWrapper = document.getElementById('parallax-wrapper');
    if (bgWrapper) {
        const moveX = (window.innerWidth / 2 - e.clientX) / 40;
        const moveY = (window.innerHeight / 2 - e.clientY) / 40;
        bgWrapper.style.transform = `translate(${moveX}px, ${moveY}px) scale(1.1)`;
        bgWrapper.style.transition = "transform 0.2s ease-out";
    }
});

// ==========================================
// 2. BOUTONS MAGNÉTIQUES (Apple Style)
// ==========================================
document.querySelectorAll('.magnetic-btn').forEach(btn => {
    btn.addEventListener('mousemove', (e) => {
        const rect = btn.getBoundingClientRect();
        const x = e.clientX - rect.left - rect.width / 2;
        const y = e.clientY - rect.top - rect.height / 2;
        btn.style.transform = `translate(${x * 0.3}px, ${y * 0.3}px)`;
        btn.style.transition = 'transform 0.1s ease-out';
    });
    btn.addEventListener('mouseleave', () => {
        btn.style.transform = 'translate(0px, 0px)';
        btn.style.transition = 'transform 0.5s cubic-bezier(0.2, 0.8, 0.2, 1)';
    });
});

// ==========================================
// 3. CARTES AVEC INCLINAISON 3D (Tilt Effect)
// ==========================================
document.querySelectorAll('.tilt-card').forEach(card => {
    card.addEventListener('mousemove', (e) => {
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        const centerX = rect.width / 2;
        const centerY = rect.height / 2;
        const rotateX = ((y - centerY) / centerY) * -10;
        const rotateY = ((x - centerX) / centerX) * 10;
        
        card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.02, 1.02, 1.02)`;
        card.style.transition = 'transform 0.1s ease-out';
    });
    card.addEventListener('mouseleave', () => {
        card.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)';
        card.style.transition = 'transform 0.5s cubic-bezier(0.2, 0.8, 0.2, 1)';
    });
});

// ==========================================
// 4. TRANSITIONS DE PAGE FLUIDES (Fade In / Fade Out)
// ==========================================
// Apparition en douceur au chargement de la page
window.addEventListener('pageshow', () => {
    document.body.classList.remove('opacity-0');
    document.body.classList.add('opacity-100');
});

// Disparition en douceur au clic sur un lien du menu
document.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', function(e) {
        const href = this.getAttribute('href');
        const target = this.getAttribute('target');
        
        // On vérifie que c'est un lien vers une autre page de ton site (et pas un onglet externe)
        if (href && href.endsWith('.html') && target !== '_blank') {
            e.preventDefault(); // On bloque le rechargement brutal
            
            // On déclenche le fondu au noir
            document.body.classList.remove('opacity-100');
            document.body.classList.add('opacity-0');
            
            // On change de page une fois l'animation terminée (400ms)
            setTimeout(() => {
                window.location.href = href;
            }, 400);
        }
    });
});
// ==========================================
// 5. DARK / LIGHT MODE TOGGLE
// ==========================================
const htmlEl = document.documentElement;
const themeIcon = document.getElementById('theme-icon');
const themeToggleBtn = document.getElementById('theme-toggle');

// Fonction pour mettre à jour l'icône (Soleil/Lune)
const updateIcon = () => {
    if(themeIcon) {
        themeIcon.textContent = htmlEl.classList.contains('dark') ? '🌞' : '🌙';
    }
};

// Si le bouton existe sur la page
if(themeToggleBtn) {
    themeToggleBtn.addEventListener('click', () => {
        htmlEl.classList.toggle('dark');
        // Sauvegarde le choix dans le navigateur
        localStorage.theme = htmlEl.classList.contains('dark') ? 'dark' : 'light';
        updateIcon();
    });
}