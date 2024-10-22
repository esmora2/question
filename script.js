const noBtn = document.getElementById('no-btn');
const nahSound = document.getElementById('nah-sound');
let audioEnabled = false; // Variable para controlar si el audio está habilitado

// Función que mueve el botón a una posición aleatoria
function moverBoton() {
    const x = Math.random() * (window.innerWidth - noBtn.offsetWidth);
    const y = Math.random() * (window.innerHeight - noBtn.offsetHeight);
    
    noBtn.style.position = 'absolute';
    noBtn.style.left = `${x}px`;
    noBtn.style.top = `${y}px`;
}

// Reproducir el sonido Nah.mp3
function reproducirSonido() {
    if (audioEnabled) {
        nahSound.currentTime = 0; // Reinicia el sonido
        nahSound.play().catch(error => {
            console.error('Error al intentar reproducir el sonido:', error);
        });
    }
}

// Evento para habilitar la reproducción de audio con la primera interacción
document.addEventListener('click', () => {
    audioEnabled = true; // Habilita la reproducción de audio
});

// Evento para cuando se hace clic en el botón "No"
noBtn.addEventListener('click', () => {
    moverBoton();
    reproducirSonido();
});

// También puedes mantener el evento mouseover si deseas que el botón se mueva al pasar el mouse
noBtn.addEventListener('mouseover', () => {
    moverBoton();
});
