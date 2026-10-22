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
        // Calcule la distance entre la souris et le centre du bouton
        const x = e.clientX - rect.left - rect.width / 2;
        const y = e.clientY - rect.top - rect.height / 2;
        
        // Déplace légèrement le bouton vers la souris (force de 0.3)
        btn.style.transform = `translate(${x * 0.3}px, ${y * 0.3}px)`;
        btn.style.transition = 'transform 0.1s ease-out';
    });

    btn.addEventListener('mouseleave', () => {
        // Retour élastique à la position d'origine
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
        
        // Inclinaison max de 10 degrés
        const rotateX = ((y - centerY) / centerY) * -10;
        const rotateY = ((x - centerX) / centerX) * 10;
        
        card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.02, 1.02, 1.02)`;
        card.style.transition = 'transform 0.1s ease-out';
    });

    card.addEventListener('mouseleave', () => {
        // Retour fluide à plat
        card.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)';
        card.style.transition = 'transform 0.5s cubic-bezier(0.2, 0.8, 0.2, 1)';
    });
});