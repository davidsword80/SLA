/* ==========================================
   LOGIQUE PERSONNAGE (Song Chiyul)
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
        <p>Lorsque la compétence <strong>Iaido de type 4: Fleur de lotus rouge</strong> touche sa cible, les dégâts d'<strong>Incinération</strong> augmentent de <span class="stat-boost">20%</span> pendant 10 seconde(s) (cumulable jusqu'à 3 fois) et la jauge de noyau se charge à <span class="stat-boost">100%</span>.<br></p>
    `,
    1: `
        <h3>1 étoile :</h3>
        <p>La consommation de PM de Chiyul augmente de <span class="stat-boost">50%</span>, mais les dégâts qu'il inflige aux monstres de type Normal augmentent de <span class="stat-boost">50%</span>.<br></p>
    `,
    2: `
        <h3>2 étoiles :</h3>
        <p>Augmente les PM de l'utilisateur de <span class="stat-boost">20 %</span>.<br></p>
    `,
    3: `
        <h3>3 étoiles :</h3>
        <p>La portée et la durée du tourbillon de flammes de la compétence <strong>Feu de l'enfer</strong> augmentent de <span class="stat-boost">50%</span>.<br></p>
    `,
    4: `
        <h3>4 étoiles :</h3>
        <p>Les dégâts d'<strong>Incinération</strong> augmentent de <span class="stat-boost">20%</span>.<br></p>
    `,
    5: `
        <h3>5 étoiles :</h3>
        <p>Les dégâts infligés par l'utilisateur augmentent de <span class="stat-boost">50%</span> lorsqu'il utilise la compétence <strong>Incinération</strong> sur des cibles affectées par <span class="buff">[Brûlure]</span>.<br></p>
    `
};

// --- RÉSUMÉ (COURT) ---
const charSummaryData = {
    0: `
        <h3>Passif : Maître du Lotus Rouge</h3>
        <p>Iaido 4 touche = Dégâts Incinération <span class="stat-boost">+20%</span> (max 3) + Jauge Noyau 100%.<br></p>
    `,
    1: `
        <h3>1 étoile</h3>
        <p>Conso PM <span class="stat-boost">+50%</span>, Dégâts vs Monstres Normaux <span class="stat-boost">+50%</span>.<br></p>
    `,
    2: `
        <h3>2 étoiles</h3>
        <p>PM Max <span class="stat-boost">+20%</span>.<br></p>
    `,
    3: `
        <h3>3 étoiles</h3>
        <p>Feu de l'enfer : Portée/Durée <span class="stat-boost">+50%</span>.<br></p>
    `,
    4: `
        <h3>4 étoiles</h3>
        <p>Dégâts Incinération <span class="stat-boost">+20%</span>.<br></p>
    `,
    5: `
        <h3>5 étoiles</h3>
        <p>Incinération sur cible Brûlée = Dégâts <span class="stat-boost">+50%</span>.<br></p>
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
   LOGIQUE ARME (Talent intact)
   ========================================== */
const weaponStarsContainer = document.getElementById('weapon-stars-container');
const weaponStars = weaponStarsContainer.querySelectorAll('.star');
const weaponMessage = document.getElementById('weapon-message');

let weaponCurrentLevel = 0;

const weaponData = {
    0: `
        <h3>Avancement 0 :</h3>
        <p>Augmente les dégâts de feu de l'utilisateur de <span class="stat-boost">2%</span>.<br>
        Lors de l'utilisation d'une Compétence de base ou d'une Attaque de noyau, les dégâts infligés aux monstres de type Normal augmentent de <span class="stat-boost">2%</span> pendant 10 seconde(s) (cumulable jusqu'à 5 fois).<br></p>
    `,
    1: `
        <h3>Avancement 5 étoiles :</h3>
        <p>Augmente les dégâts de feu de l'utilisateur de <span class="stat-boost">8%</span>.<br>
        Lors de l'utilisation d'une Attaque de base ou de noyau, les dégâts infligés aux monstres de type Normal augmentent de <span class="stat-boost">8%</span> pendant 10 seconde(s) (cumulable jusqu'à 5 fois).<br></p>
    `,
    2: `
        <h3>Avancement 10 étoiles :</h3>
        <p>Augmente l'Attaque, la Défense et les PV de <span class="stat-boost">15%</span>.<br></p>
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