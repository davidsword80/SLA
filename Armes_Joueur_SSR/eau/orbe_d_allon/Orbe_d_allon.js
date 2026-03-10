/* ==========================================
   LOGIQUE ARME (Orbe d'Allon)
   ========================================== */
const weaponStarsContainer = document.getElementById('weapon-stars-container');
const weaponStars = weaponStarsContainer.querySelectorAll('.star');
const weaponMessage = document.getElementById('weapon-message');

let weaponCurrentLevel = 0;

const weaponData = {
    0: `
        <h3>Passif :</h3>
        <p>La Précision augmente de <span class="stat-boost">0.5 %</span> par tranche de 20 point(s) d'Intelligence de Sung Jinwoo (jusqu'à 5 %).<br>
        L'utilisation de <strong>Tempête de dominion</strong> confère un <span class="buff">[Bouclier]</span> et active l'effet <span class="buff">[Marée roulante]</span>.<br>
        Lorsque la compétence <strong>Tempête de dominion</strong> touche sa cible, elle lui applique l'effet <span class="buff">[Maelstrom]</span>.<br></p>
        
        <div class="detail-box">
            <h4><span class="buff">[Bouclier]</span></h4>
            <p>Confère un <span class="buff">[Bouclier]</span> équivalent à <span class="stat-boost">10 %</span> des PV max.<br>
            Durée : 10 seconde(s).</p>
        </div>

        <div class="detail-box">
            <h4><span class="buff">[Marée roulante]</span></h4>
            <p>Augmente les dégâts infligés de <span class="stat-boost">10 %</span>.<br>
            Augmente les dégâts d'eau de <span class="stat-boost">10 %</span>.<br>
            Durée : 20 seconde(s).</p>
        </div>

        <div class="detail-box">
            <h4><span class="buff">[Maelstrom]</span></h4>
            <p>Augmente les dégâts d'eau subis de <span class="stat-boost">8 %</span>.<br>
            Durée : 20 seconde(s).</p>
        </div>
    `,
    1: `
        <h3>1 étoile :</h3>
        <p>Les dégâts d'eau augmentent de <span class="stat-boost">1 %</span> par tranche de 10 point(s) d'Intelligence de Sung Jinwoo (jusqu'à 20 %).<br>
        Si la stat Intelligence de Sung Jinwoo est à 200 ou plus, l'effet <span class="buff">[Dérive lunaire]</span> s'active.<br></p>

        <div class="detail-box">
            <h4><span class="buff">[Dérive lunaire]</span></h4>
            <p>Si les PM de l'utilisateur sont à 41 % ou plus, les dégâts d'eau augmentent de <span class="stat-boost">20 %</span>.<br>
            Si les PM de l'utilisateur sont à 41 % ou plus, les dégâts des compétences d'arme de l'élément Eau augmentent de <span class="stat-boost">30 %</span>.<br>
            Durée : illimitée.</p>
        </div>
    `,
    2: `
        <h3>2 étoiles :</h3>
        <p>Les dégâts d'eau de l'utilisateur augmentent de <span class="stat-boost">10 %</span>.<br></p>
    `,
    3: `
        <h3>3 étoiles :</h3>
        <p>Améliore l'effet <span class="buff">[Marée roulante]</span>.<br>
        Améliore l'effet <span class="buff">[Maelstrom]</span>.<br></p>

        <div class="detail-box">
            <h4><span class="buff">[Marée roulante]</span> (Amélioré)</h4>
            <p>Augmente les dégâts infligés de <span class="stat-boost">20 %</span>.<br>
            Augmente les dégâts d'eau de <span class="stat-boost">20 %</span>.<br>
            Lorsqu'une compétence d'arme de l'élément Eau touche sa cible, elle lui applique l'effet <span class="buff">[Maelstrom]</span>.<br>
            Durée : 20 seconde(s).</p>
        </div>

        <div class="detail-box">
            <h4><span class="buff">[Maelstrom]</span> (Amélioré)</h4>
            <p>Augmente les dégâts d'eau subis de <span class="stat-boost">8 %</span>.<br>
            Durée : 20 seconde(s) (cumulable jusqu'à 3 fois).</p>
        </div>
    `,
    4: `
        <h3>4 étoiles :</h3>
        <p>Diminue le temps de rechargement de la compétence <strong>Tempête de dominion</strong> de <span class="stat-boost">15 %</span>.<br></p>
    `,
    5: `
        <h3>5 étoiles :</h3>
        <p>Les dégâts d'eau augmentent de <span class="stat-boost">30 %</span>.<br>
        Améliore l'effet <span class="buff">[Dérive lunaire]</span>.<br></p>

        <div class="detail-box">
            <h4><span class="buff">[Dérive lunaire]</span> (Amélioré)</h4>
            <p>Si les PM de l'utilisateur sont à 41 % ou plus, les dégâts d'eau augmentent de <span class="stat-boost">50 %</span>.<br>
            Si les PM de l'utilisateur sont à 41 % ou plus, les dégâts des compétences d'arme de l'élément Eau augmentent de <span class="stat-boost">60 %</span>.<br>
            Durée : illimitée.</p>
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