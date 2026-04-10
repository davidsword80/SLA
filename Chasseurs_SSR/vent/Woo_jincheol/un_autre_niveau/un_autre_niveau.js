const stars = document.querySelectorAll('.star');
const message = document.getElementById('message');
const messages = [
    "5 étoiles :<br>L'utilisateur attaque en ignorant 6 % de la Défense.<br>Lors de l'utilisation de la compétence Médiation de puissance, les dégâts infligés par l'utilisateur à la cible augmentent de 20% pendant 5 seconde(s) (cumulable jusqu'à 3 fois).<br>Lorsque l'ennemi entre en état de [Bris], les dégâts élémentaires de vent de toute l'équipe augmentent de 12%, à l'exception de l'utilisateur de cette compétence.<br>Durée: infinie",
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
            message.innerHTML = "0 étoile :<br>L'utilisateur attaque en ignorant 2 % de la Défense.<br>Lors de l'utilisation de la compétence Médiation de puissance, les dégâts infligés par l'utilisateur à la cible augmentent de 5% pendant 5 seconde(s) (cumulable jusqu'à 3 fois).<br>Lorsque l'ennemi entre en état de [Bris], les dégâts élémentaires de vent de toute l'équipe augmentent de 4%, à l'exception de l'utilisateur de cette compétence.<br>Durée: infinie";  // Message 0 étoile
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
