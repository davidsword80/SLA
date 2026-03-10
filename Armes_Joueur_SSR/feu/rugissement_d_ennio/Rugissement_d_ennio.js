/* ==========================================
   LOGIQUE ARME (Rugissement d'Ennio)
   ========================================== */
const weaponStarsContainer = document.getElementById('weapon-stars-container');
const weaponStars = weaponStarsContainer.querySelectorAll('.star');
const weaponMessage = document.getElementById('weapon-message');

let weaponCurrentLevel = 0;

const weaponData = {
    0: `
        <h3>Passif :</h3>
        <p>Lorsque la compétence <strong>Rage noir d'encre</strong> touche sa cible et que cette dernière présente l'effet <span class="buff">[Brûlure]</span>, l'effet augmente les dégâts de <span class="stat-boost">10 %</span>.<br>
        Lors de l'utilisation de la compétence <strong>Rage noir d'encre</strong>, l'effet <span class="buff">[Rancœur incandescente]</span> s'active.<br></p>
        
        <div class="detail-box">
            <h4><span class="buff">[Rancœur incandescente]</span></h4>
            <p>Augmente les dégâts subis de <span class="stat-boost">10 %</span>. Augmente les dégâts de feu de <span class="stat-boost">5 %</span>.<br>
            Augmente les dégâts infligés aux boss de <span class="stat-boost">5 %</span>. Augmente les dégâts de la compétence <strong>Rage noir d'encre</strong> de <span class="stat-boost">50 %</span>.</p>
        </div>
    `,
    1: `
        <h3>1 étoile :</h3>
        <p>Augmente la Pénétration de défense de <span class="stat-boost">16 %</span> lorsque toutes les armes équipées sont de l'élément Feu.<br>
        L'utilisation de la compétence <strong>Rage noir d'encre</strong> active l'effet <span class="buff">[Marque de l'Adversaire]</span> sur les boss et monstres Élite se trouvant dans un rayon de 20 m.<br>
        Lorsque la compétence <strong>Rage noir d'encre</strong> touche sa cible et que cette dernière présente l'effet <span class="buff">[Marque de l'Adversaire]</span>, l'effet <span class="buff">[Rage d'Ennio]</span> s'active.<br></p>

        <div class="detail-box">
            <h4><span class="buff">[Rage d'Ennio]</span></h4>
            <p>Invoque un météore dans le ciel pour attaquer la cible.<br>
            Dégâts : <span class="stat-boost">1000 %</span> de l'Attaque.</p>
        </div>

        <div class="detail-box">
            <h4><span class="buff">[Marque de l'Adversaire]</span></h4>
            <p>Augmente les dégâts de la compétence <strong>Rage noir d'encre</strong> de <span class="stat-boost">50 %</span>.<br>
            Supprime l'effet lorsque la compétence <strong>Rage noir d'encre</strong> touche sa cible.<br>
            Durée : 3 secondes.</p>
        </div>
    `,
    2: `
        <h3>2 étoiles :</h3>
        <p>Augmente les dégâts de feu de l'utilisateur de <span class="stat-boost">10 %</span>.<br></p>
    `,
    3: `
        <h3>3 étoiles :</h3>
        <p>Lorsque la compétence <strong>Rage noir d'encre</strong> touche sa cible et que cette dernière présente l'effet <span class="buff">[Brûlure]</span>, les dégâts augmentent de <span class="stat-boost">25 %</span>.<br>
        Améliore l'effet <span class="buff">[Rancœur incandescente]</span>.<br></p>

        <div class="detail-box">
            <h4><span class="buff">[Rancœur incandescente]</span> (Amélioré)</h4>
            <p>Augmente les dégâts subis de <span class="stat-boost">5 %</span>.<br>
            Augmente les dégâts de feu de <span class="stat-boost">15 %</span>. Augmente les dégâts infligés aux boss de <span class="stat-boost">10 %</span>.<br>
            Augmente les dégâts de la compétence <strong>Rage noir d'encre</strong> de <span class="stat-boost">100 %</span>.<br>
            Durée : illimitée.</p>
        </div>
    `,
    4: `
        <h3>4 étoiles :</h3>
        <p>Réduit le temps de rechargement de <strong>Rage noir d'encre</strong> de <span class="stat-boost">20 %</span>.<br></p>
    `,
    5: `
        <h3>5 étoiles :</h3>
        <p>L'utilisation d'une arme de l'élément Feu augmente les dégâts de compétence d'arme de feu de l'utilisateur de <span class="stat-boost">50 %</span> pendant 2.5 seconde(s) face aux cibles affectées par l'effet <span class="buff">[Brûlure]</span>.<br>
        Augmente les dégâts de <span class="buff">[Rage d'Ennio]</span>. Améliore l'effet <span class="buff">[Marque de l'Adversaire]</span>.<br></p>

        <div class="detail-box">
            <h4><span class="buff">[Rage d'Ennio]</span> (Amélioré)</h4>
            <p>Invoque un météore dans le ciel pour attaquer la cible.<br>
            Dégâts : <span class="stat-boost">2000 %</span> de l'Attaque.</p>
        </div>

        <div class="detail-box">
            <h4><span class="buff">[Marque de l'Adversaire]</span> (Amélioré)</h4>
            <p>Augmente les dégâts de <strong>Rage noir d'encre</strong> de <span class="stat-boost">100 %</span>.<br>
            Supprime l'effet lorsque <strong>Rage noir d'encre</strong> touche sa cible.<br>
            Durée : 3 seconde(s).</p>
        </div>
    `
};

// Initialisation
displayWeaponMessage(0);

weaponStars.forEach(star => {
    star.addEventListener('click', function () {
        const clickedValue = parseInt(this.getAttribute('data-value'));

        if (clickedValue === weaponCurrentLevel) {
            weaponCurrentLevel = clickedValue - 1;
        } else {
            weaponCurrentLevel = clickedValue;
        }
        
        updateWeaponStars(weaponCurrentLevel);
        displayWeaponMessage(weaponCurrentLevel);
    });
});

function updateWeaponStars(level) {
    weaponStars.forEach(star => {
        const starValue = parseInt(star.getAttribute('data-value'));
        star.classList.toggle('filled', starValue <= level);
    });
}

function displayWeaponMessage(level) {
    weaponMessage.innerHTML = weaponData[level];
}