/* ==========================================
   LOGIQUE PERSONNAGE (Woo Jincheol)
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
        <p>Lorsque la compétence <strong>Ruée</strong> est utilisée, les dégâts des compétences <strong>Suppression</strong>, <strong>Médiation de puissance</strong> et <strong>Poing de fer</strong> augmentent de <span class="stat-boost">30%</span> pendant 6 seconde(s) et l'effet <span class="buff">[Super armure]</span> est appliqué.<br>
        Le temps de rechargement de <strong>Ruée</strong> est réduit de 1 seconde(s).<br></p>
    `,
    1: `
        <h3>1 étoile :</h3>
        <p>Modification de l'effet de la compétence<br>
        <strong>[Médiation de puissance]</strong><br>
        Augmente l'effet et les dégâts de <span class="buff">[Bris]</span> de <span class="stat-boost">100%</span>.<br>
        Peut être utilisée jusqu'à 3 fois.<br></p>
    `,
    2: `
        <h3>2 étoiles :</h3>
        <p>La Pénétration de défense de l'utilisateur augmente de <span class="stat-boost">10%</span>.<br></p>
    `,
    3: `
        <h3>3 étoiles :</h3>
        <p>Lors de l'utilisation des compétences <strong>Ruée</strong>, <strong>Évasion extrême</strong> ou <strong>Verdict</strong>, le temps de rechargement des compétences <strong>Médiation de puissance</strong> et <strong>Poing de fer</strong> est réduit de 2 seconde(s), et l'Attaque de noyau de l'utilisateur est activée.<br>
        Lors de l'utilisation de <strong>Verdict</strong>, la compétence passive de base de l'utilisateur s'active et l'effet est amélioré.<br>
        L'effet d'augmentation des dégâts de l'utilisateur passe à <span class="stat-boost">35%</span>.<br>
        Augmente sa durée à 7 seconde(s).<br></p>
    `,
    4: `
        <h3>4 étoiles :</h3>
        <p>Les dégâts de vent infligés par l'utilisateur augmentent de <span class="stat-boost">16%</span>.<br></p>
    `,
    5: `
        <h3>5 étoiles :</h3>
        <p>Lorsque l'Attaque de base est utilisée 4 fois, l'utilisateur active sa compétence passive de palier 31.<br>
        Lors de l'utilisation de la compétence <strong>Médiation de puissance</strong>, la Défense de l'utilisateur augmente de <span class="stat-boost">5%</span> <br>
        (cumulable jusqu'à 12 fois).<br></p>
    `
};

// --- RÉSUMÉ (COURT) ---
const charSummaryData = {
    0: `
        <h3>Passif : Le Médiateur</h3>
        <p>Ruée = Buff dégâts (+30% pour Suppression/Médiation/Poing) + [Super armure].<br>
        Réduit CD Ruée de 1s.</p>
    `,
    1: `
        <h3>1 étoile</h3>
        <p>[Médiation de puissance] améliorée : Effet/Dégâts Bris <span class="stat-boost">+100%</span>.<br>
        3 charges disponibles.</p>
    `,
    2: `
        <h3>2 étoiles</h3>
        <p>Pénétration de défense <span class="stat-boost">+10%</span>.<br></p>
    `,
    3: `
        <h3>3 étoiles</h3>
        <p>Skills mouvement/Verdict = Réduction CD Médiation/Poing (-2s) + Attaque noyau.<br>
        Verdict améliore passif : Dégâts <span class="stat-boost">+35%</span> (7s).</p>
    `,
    4: `
        <h3>4 étoiles</h3>
        <p>Dégâts Vent <span class="stat-boost">+16%</span>.<br></p>
    `,
    5: `
        <h3>5 étoiles</h3>
        <p>4 Attaques base = Active passif.<br>
        Médiation de puissance = Défense <span class="stat-boost">+5%</span> (Max 12 cumuls).</p>
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
   LOGIQUE ARME (Un autre niveau)
   ========================================== */
const weaponStarsContainer = document.getElementById('weapon-stars-container');
const weaponStars = weaponStarsContainer.querySelectorAll('.star');
const weaponMessage = document.getElementById('weapon-message');

let weaponCurrentLevel = 0;

const weaponData = {
    0: `
        <h3>Avancement 0 :</h3>
        <p>L'utilisateur attaque en ignorant <span class="stat-boost">2 %</span> de la Défense.<br>
        Lors de l'utilisation de la compétence <strong>Médiation de puissance</strong>, les dégâts infligés par l'utilisateur à la cible augmentent de <span class="stat-boost">5%</span> pendant 5 seconde(s) (cumulable jusqu'à 3 fois).<br>
        Lorsque l'ennemi entre en état de <span class="buff">[Bris]</span>, les dégâts élémentaires de vent de toute l'équipe augmentent de <span class="stat-boost">4%</span>, à l'exception de l'utilisateur de cette compétence.<br>
        Durée: infinie<br></p>
    `,
    1: `
        <h3>Avancement 5 étoiles :</h3>
        <p>L'utilisateur attaque en ignorant <span class="stat-boost">6 %</span> de la Défense.<br>
        Lors de l'utilisation de la compétence <strong>Médiation de puissance</strong>, les dégâts infligés par l'utilisateur à la cible augmentent de <span class="stat-boost">20%</span> pendant 5 seconde(s) (cumulable jusqu'à 3 fois).<br>
        Lorsque l'ennemi entre en état de <span class="buff">[Bris]</span>, les dégâts élémentaires de vent de toute l'équipe augmentent de <span class="stat-boost">12%</span>, à l'exception de l'utilisateur de cette compétence.<br>
        Durée: infinie<br></p>
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