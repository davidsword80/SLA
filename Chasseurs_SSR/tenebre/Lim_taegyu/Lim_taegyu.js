/* ==========================================
   LOGIQUE PERSONNAGE (Lim Taegyu)
   ========================================== */
const charStarsContainer = document.getElementById('char-stars-container');
const charStars = charStarsContainer.querySelectorAll('.star');
const charMessage = document.getElementById('char-message');
const toggleBtn = document.getElementById('toggleBtn');

let charCurrentLevel = 0;
let isSummaryMode = false;

// --- TEXTE COMPLET (MOT POUR MOT + SAUT DE LIGNE APRES POINT) ---
const charFullData = {
    0: `
        <h3>Passif :</h3>
        <p>Lors de l'utilisation d'<strong>Explosion aérienne</strong>, l'utilisateur applique l'effet <span class="buff">[Boost magique]</span>.<br></p>
        <div class="detail-box">
            <h4><span class="buff">[Boost magique]</span></h4>
            <p>Lorsque la compétence touche sa cible, l'utilisateur tire 3 flèches magiques.<br>
            Lorsque l'Attaque de base de l'utilisateur touche sa cible, 2 flèches magiques sont tirées.<br>
            Dégâts: inflige des dégâts équivalents à <span class="stat-boost">120 %</span> de l'Attaque de l'utilisateur par flèche.<br>
            Les dégâts des Attaques de noyau, de <strong>Typhon ardent</strong> et d'<strong>Attaque rapide : Typhon ardent</strong> augmentent de <span class="stat-boost">30%</span>.<br>
            Durée: 15 seconde(s)</p>
        </div>
    `,
    1: `
        <h3>1 étoile :</h3>
        <p>Améliore l'effet de compétence <strong>Manœuvre de tir</strong>.<br>
        La vitesse et les dégâts de compétence de l'utilisateur augmentent de <span class="stat-boost">25%</span>, et l'effet est utilisable jusqu'à 3 fois.<br></p>
    `,
    2: `
        <h3>2 étoiles :</h3>
        <p>Augmente l'efficacité de <span class="buff">[Bris]</span> de l'utilisateur de <span class="stat-boost">20%</span>.<br></p>
    `,
    3: `
        <h3>3 étoiles :</h3>
        <p>Lorsque l'effet <span class="buff">[Boost magique]</span> est actif, les effets des Attaques de noyau, de <strong>Typhon ardent</strong> et d'<strong>Attaque rapide: Typhon ardent</strong> augmentent de <span class="stat-boost">50%</span>.<br>
        Lors de l'utilisation de <strong>Manœuvre de tir</strong>, l'effet <span class="buff">[Boost magique]</span> s'applique (temps de rechargement: 20 seconde(s)).<br></p>
    `,
    4: `
        <h3>4 étoiles :</h3>
        <p>Augmente l'Attaque de l'utilisateur de <span class="stat-boost">12%</span>.<br></p>
    `,
    5: `
        <h3>5 étoiles :</h3>
        <p>Chaque fois que l'Attaque de noyau de l'utilisateur touche sa cible, l'Attaque augmente de <span class="stat-boost">4%</span> (cumulable jusqu'à 10 fois).<br>
        Durée: infinie</p>
    `
};

// --- RÉSUMÉ (COURT) ---
const charSummaryData = {
    0: `
        <h3>Passif : Archer Magique</h3>
        <p>Explosion aérienne = <span class="buff">[Boost magique]</span>.<br>
        [Boost magique] : Tirs de flèches supplémentaires + Boost dégâts Noyau/Typhon (<span class="stat-boost">+30%</span>).</p>
    `,
    1: `
        <h3>1 étoile</h3>
        <p>Manœuvre de tir améliorée : 3 charges, Vitesse/Dégâts <span class="stat-boost">+25%</span>.<br></p>
    `,
    2: `
        <h3>2 étoiles</h3>
        <p>Efficacité Bris <span class="stat-boost">+20%</span>.<br></p>
    `,
    3: `
        <h3>3 étoiles</h3>
        <p>Sous [Boost magique] : Effets Noyau/Typhon <span class="stat-boost">+50%</span>.<br>
        Manœuvre de tir active [Boost magique].<br></p>
    `,
    4: `
        <h3>4 étoiles</h3>
        <p>Attaque <span class="stat-boost">+12%</span>.<br></p>
    `,
    5: `
        <h3>5 étoiles</h3>
        <p>Touche Attaque Noyau = Attaque <span class="stat-boost">+4%</span> (Max 10 fois, infini).<br></p>
    `
};

// --- EVENTS PERSONNAGE ---
renderCharContent();

toggleBtn.addEventListener('click', function() {
    isSummaryMode = !isSummaryMode;
    this.textContent = isSummaryMode ? "Texte Complet" : "Mode Résumé";
    this.classList.toggle('active', isSummaryMode);
    renderCharContent();
});

charStars.forEach(star => {
    star.addEventListener('click', function () {
        const clickedValue = parseInt(this.getAttribute('data-value'));
        
        if (clickedValue === charCurrentLevel) {
            charCurrentLevel = clickedValue - 1;
        } else {
            charCurrentLevel = clickedValue;
        }
        
        updateCharStars(charCurrentLevel);
        renderCharContent();
    });
});

function updateCharStars(level) {
    charStars.forEach(star => {
        const starValue = parseInt(star.getAttribute('data-value'));
        star.classList.toggle('filled', starValue <= level);
    });
}

function renderCharContent() {
    const dataSource = isSummaryMode ? charSummaryData : charFullData;
    charMessage.innerHTML = dataSource[charCurrentLevel];
}


/* ==========================================
   LOGIQUE ARME (Interception)
   ========================================== */
const weaponStarsContainer = document.getElementById('weapon-stars-container');
const weaponStars = weaponStarsContainer.querySelectorAll('.star');
const weaponMessage = document.getElementById('weapon-message');

let weaponCurrentLevel = 0;

const weaponData = {
    0: `
        <h3>Avancement 0 :</h3>
        <p>Augmente les dégâts de ténèbres de l'utilisateur de <span class="stat-boost">4%</span>.<br>
        Lors de l'utilisation d'une Attaque de base moins de 10 seconde(s) après l'utilisation de <strong>Attaque rapide: Typhon ardent</strong>, l'Attaque de l'utilisateur augmente de <span class="stat-boost">8%</span> pendant 30 seconde(s) (cumulable jusqu'à 2 fois).<br></p>
    `,
    1: `
        <h3>Avancement 5 étoiles :</h3>
        <p>Augmente les dégâts de ténèbres de l'utilisateur de <span class="stat-boost">12%</span>.<br>
        Lors de l'utilisation d'une Attaque de base moins de 10 seconde(s) après l'utilisation de <strong>Attaque rapide: Typhon ardent</strong>, l'Attaque de l'utilisateur augmente de <span class="stat-boost">8%</span> pendant 30 seconde(s) (cumulable jusqu'à 8 fois).<br></p>
    `,
    2: `
        <h3>Avancement 10 étoiles :</h3>
        <p>Augmente l'Attaque, la Défense et les PV de l'utilisateur de <span class="stat-boost">15%</span>.<br></p>
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