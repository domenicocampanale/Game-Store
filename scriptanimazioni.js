// Funzione per controllare lo scrolling e attivare l'animazione
window.addEventListener('scroll', function() {
    var element = document.querySelector('.rotating-image');
    var position = element.getBoundingClientRect();

    // Se l'immagine è visibile nella finestra visualizzazione
    if (position.top < window.innerHeight && position.bottom >= 0) {
        element.classList.add('rotated'); // Aggiungi la classe per ruotare l'immagine
    } else {
        element.classList.remove('rotated'); // Rimuovi la classe se l'immagine non è più visibile
    }
});
