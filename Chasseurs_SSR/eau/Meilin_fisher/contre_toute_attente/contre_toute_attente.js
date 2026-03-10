const stars = document.querySelectorAll('.star');
const message = document.getElementById('message');
const messages = [
    "5 étoiles :<br>Lors de l'utilisation de la compétence Fouet latéral, les dégâts du membre de l'équipe ayant l'Attaque la plus élevée augmentent de 1% tous les 2000 de PV max de Meilin Fisher pendant 12 seconde(s) (avec un taux d'augmentation maximal des dégâts de 16%).<br>Réduit le temps de rechargement de la Compétence ultime de 20 %.",
    "10 étoiles :<br>Augmente l'Attaque, la Défense et les PV de l'utilisateur de 15%.",

];

let firstStarClicked = false;  // Suivi de l'état de la première étoile

stars.forEach(star => {
    star.addEventListener('click', function () {
        const value = parseInt(this.getAttribute('data-value'));

        // Si la première étoile est cliquée et déjà activée, on réinitialise
        if (this === stars[0] && firstStarClicked) {
            firstStarClicked = false;
            updateStars(0);  // Réinitialise toutes les étoiles à l'état gris
            message.innerHTML = "0 étoile :<br>Lors de l'utilisation de la compétence Fouet latéral, les dégâts du membre de l'équipe ayant l'Attaque la plus élevée augmentent de 1% tous les 2000 de PV max de Meilin Fisher pendant 12 seconde(s) (avec un taux d'augmentation maximal des dégâts de 6 %).<br>Réduit le temps de rechargement de la Compétence ultime de 5%.";  // Message 0 étoile
        } else {
            if (this === stars[0]) firstStarClicked = true;  // Marque la première étoile comme activée
            updateStars(value);
            displayMessage(value);
        }
    });
});

// Fonction pour mettre à jour l'état des étoiles
function updateStars(value) {
    stars.forEach(star => {
        const starValue = parseInt(star.getAttribute('data-value'));
        star.classList.toggle('filled', starValue <= value);
    });

    // Si aucune étoile n'est remplie, affiche le message "Aucune sélection"
    if (value === 0) {
        message.innerHTML = "Aucune sélection";
    }
}

// Fonction pour afficher le message de l'étoile sélectionnée
function displayMessage(value) {
    if (value === 0) {
        message.innerHTML = "Aucune sélection";  // Message par défaut si aucune étoile n'est sélectionnée
    } else {
        message.innerHTML = messages[value - 1];  // Affiche le message correspondant à l'étoile cliquée
    }
}
