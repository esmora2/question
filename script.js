const noBtn = document.getElementById('no-btn');

// Función que mueve el botón a una posición aleatoria
function moverBoton() {
    const x = Math.random() * (window.innerWidth - noBtn.offsetWidth);
    const y = Math.random() * (window.innerHeight - noBtn.offsetHeight);
    
    noBtn.style.position = 'absolute';
    noBtn.style.left = `${x}px`;
    noBtn.style.top = `${y}px`;
}

// Evento para cuando se pasa el mouse sobre el botón (escritorio)
noBtn.addEventListener('mouseover', moverBoton);

// Evento para cuando se toca el botón (móviles)
noBtn.addEventListener('touchstart', moverBoton);
