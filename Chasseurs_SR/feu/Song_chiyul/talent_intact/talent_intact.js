const stars = document.querySelectorAll('.star');
const message = document.getElementById('message');
const messages = [
    "5 étoiles :<br>Augmente les dégâts de feu de l'utilisateur de 8%.<br>Lors de l'utilisation d'une Attaque de base ou de noyau, les dégâts infligés aux monstres de type Normal augmentent de 8% pendant 10 seconde(s) (cumulable jusqu'à 5 fois).",
    "10 étoiles :<br>Augmente l'Attaque, la Défense et les PV de 15%.",

];

let firstStarClicked = false;  // Suivi de l'état de la première étoile

stars.forEach(star => {
    star.addEventListener('click', function () {
        const value = parseInt(this.getAttribute('data-value'));

        // Si la première étoile est cliquée et déjà activée, on réinitialise
        if (this === stars[0] && firstStarClicked) {
            firstStarClicked = false;
            updateStars(0);  // Réinitialise toutes les étoiles à l'état gris
            message.innerHTML = "0 étoile :<br>Augmente les dégâts de feu de l'utilisateur de 2%.<br>Lors de l'utilisation d'une Compétence de base ou d'une Attaque de noyau, les dégâts infligés aux monstres de type Normal augmentent de 2% pendant 10 seconde(s) (cumulable jusqu'à 5 fois).";  // Message 0 étoile
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
