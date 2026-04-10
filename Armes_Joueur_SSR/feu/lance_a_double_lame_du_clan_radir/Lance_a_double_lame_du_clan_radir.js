/* ==========================================
   LOGIQUE ARME (Lance à double lame du clan Radir)
   ========================================== */
const weaponStarsContainer = document.getElementById('weapon-stars-container');
const weaponStars = weaponStarsContainer.querySelectorAll('.star');
const weaponMessage = document.getElementById('weapon-message');

let weaponCurrentLevel = 0;

const weaponData = {
    0: `
        <h3>Passif :</h3>
        <p>L'utilisation de la compétence <strong>Soutien du clan Radish</strong> applique 10 fois l'effet <span class="buff">[Moral]</span> sur l'utilisateur.<br></p>
        
        <div class="detail-box">
            <h4><span class="buff">[Moral]</span></h4>
            <p>Augmente les dégâts infligés de <span class="stat-boost">0.5 %</span>.<br>
            Durée : illimitée (cumulable jusqu'à 30 fois).</p>
        </div>
    `,
    1: `
        <h3>1 étoile :</h3>
        <p>Lorsque l'utilisateur touche une cible avec une attaque de feu, il applique 1 effet <span class="buff">[Moral]</span> (ne s'active qu'une fois lorsque l'attaque touche sa cible).<br>
        Lorsque l'utilisateur touche une cible avec une attaque de feu tout en ayant 30 cumuls de l'effet <span class="buff">[Moral]</span> appliqués, une petite zone <span class="buff">[Feu de soutien]</span> est créée autour de la cible (temps de rechargement : 10 seconde(s)).<br></p>

        <div class="detail-box">
            <h4><span class="buff">[Feu de soutien]</span></h4>
            <p>Inflige des dégâts élémentaires de feu équivalents à <span class="stat-boost">600 %</span> de l'Attaque de Sung Jinwoo.<br>
            Compte comme une compétence de base. Inflige des dégâts de Bris légers.</p>
        </div>
    `,
    2: `
        <h3>2 étoiles :</h3>
        <p>Augmente les dégâts de feu de l'utilisateur de <span class="stat-boost">10 %</span>.<br></p>
    `,
    3: `
        <h3>3 étoiles :</h3>
        <p>Lorsque l'attaque de l'utilisateur touche une cible avec un effet Brûlure, l'effet <span class="buff">[Volonté brûlante]</span> est activé sur l'utilisateur (temps de rechargement : 2 seconde(s)).<br></p>

        <div class="detail-box">
            <h4><span class="buff">[Volonté brûlante]</span></h4>
            <p>Augmente les dégâts de feu de <span class="stat-boost">6 %</span>.<br>
            Augmente les Dégâts de coup critique de <span class="stat-boost">12 %</span>.<br>
            Durée : 15 seconde(s) (cumulable jusqu'à 5 fois).</p>
        </div>
    `,
    4: `
        <h3>4 étoiles :</h3>
        <p>Diminue le temps de rechargement de <strong>Soutien du clan Radish</strong> de <span class="stat-boost">20 %</span>.<br></p>
    `,
    5: `
        <h3>5 étoiles :</h3>
        <p>La portée d'attaque de <span class="buff">[Feu de soutien]</span> augmente de <span class="stat-boost">50 %</span>, et son temps de rechargement passe à 5 seconde(s).<br>
        Lorsqu'une attaque de feu de l'utilisateur touche une cible et si toutes les armes équipées sont de l'élément Feu, un cumul supplémentaire de l'effet <span class="buff">[Moral]</span> est activé (lorsque cette compétence touche sa cible, il ne s'active qu'une fois).<br>
        Améliore l'effet <span class="buff">[Moral]</span>.<br></p>

        <div class="detail-box">
            <h4><span class="buff">[Moral]</span> (Amélioré)</h4>
            <p>Augmente les dégâts infligés de <span class="stat-boost">1.2 %</span>.<br>
            Augmente les dégâts de feu de la compétence de base de <span class="stat-boost">0.5 %</span> et les dégâts de la Compétences d'arme de <span class="stat-boost">1 %</span> lorsque toutes les armes équipées sont de l'élément Feu.<br>
            Durée : illimitée (cumulable jusqu'à 30 fois).</p>
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