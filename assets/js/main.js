// ==========================================
// 1. CURSEUR PERSONNALISÉ INTERACTIF
// ==========================================
const cursorDot = document.createElement('div');
const cursorOutline = document.createElement('div');
cursorDot.id = 'cursor-dot';
cursorOutline.id = 'cursor-outline';
document.body.appendChild(cursorDot);
document.body.appendChild(cursorOutline);

window.addEventListener('mousemove', (e) => {
    const posX = e.clientX;
    const posY = e.clientY;
    
    // Le point central suit instantanément
    cursorDot.style.left = `${posX}px`;
    cursorDot.style.top = `${posY}px`;
    
    // Le cercle extérieur suit avec un léger retard fluide
    cursorOutline.animate({
        left: `${posX}px`,
        top: `${posY}px`
    }, { duration: 500, fill: "forwards" });
});

// Agrandir le curseur au survol des liens, boutons et images
const interactiveElements = document.querySelectorAll('a, button, .cursor-pointer');
interactiveElements.forEach(el => {
    el.addEventListener('mouseenter', () => cursorOutline.classList.add('expand'));
    el.addEventListener('mouseleave', () => cursorOutline.classList.remove('expand'));
});


// ==========================================
// 2. EFFET PARALLAXE SUR LE FOND
// ==========================================
document.addEventListener("mousemove", (e) => {
    // On cible le conteneur du fond animé (les blobs)
    const bgContainer = document.querySelector('.fixed.inset-0');
    if (bgContainer) {
        // Calcul du décalage en fonction de la position de la souris
        const x = (window.innerWidth - e.pageX * 2) / 90;
        const y = (window.innerHeight - e.pageY * 2) / 90;
        // On applique le mouvement
        bgContainer.style.transform = `translate(${x}px, ${y}px)`;
    }
});