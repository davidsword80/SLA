document.addEventListener('keydown', function(e) {
    // Raccourci existant pour YouTube (Ctrl + Y)
    if (e.ctrlKey && e.key === 'y') {
      window.location.href = 'https://www.youtube.com/';
    }

    // Nouveau raccourci secret pour les Leaks (Alt + L)
    if (e.altKey && e.key === 'l') {
      window.location.href = 'leaks.html';
    }
});