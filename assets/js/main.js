// ==========================================
// EFFET PARALLAXE SUR LE FOND
// ==========================================
document.addEventListener("mousemove", (e) => {
    const bgWrapper = document.getElementById('parallax-wrapper');
    if (bgWrapper) {
        // Calcul du mouvement (plus le diviseur est petit, plus le mouvement est ample)
        const moveX = (window.innerWidth / 2 - e.clientX) / 40;
        const moveY = (window.innerHeight / 2 - e.clientY) / 40;
        
        // Applique le mouvement avec un léger zoom (scale 1.1) pour masquer les bords
        bgWrapper.style.transform = `translate(${moveX}px, ${moveY}px) scale(1.1)`;
        // Ajout d'une transition douce pour que la parallaxe soit fluide
        bgWrapper.style.transition = "transform 0.2s ease-out";
    }
});