/* ==========================================
   LOGIQUE PERSONNAGE (Park Heejin)
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
        <p>Lors de l'utilisation des compétences <strong>Balle d'air</strong>, <strong>Cisaille venteuse</strong>, <strong>Bourrasque tranchante</strong> ou <strong>Vortex venteux</strong>, la jauge de puissance de l'utilisateur se remplit de <span class="stat-boost">8%</span>.<br>
        Réduit le temps de rechargement de <strong>Tempête venteuse</strong> de <span class="stat-boost">30%</span>.<br></p>
    `,
    1: `
        <h3>1 étoile :</h3>
        <p>Lorsque Heejin utilise la compétence <strong>Bourrasque tranchante</strong>, elle supprime les <span class="buff">[débuffs]</span> appliqués à elle et son équipe.<br></p>
    `,
    2: `
        <h3>2 étoiles :</h3>
        <p>Le temps de rechargement de <strong>Tempête venteuse</strong> diminue de <span class="stat-boost">10%</span>.<br></p>
    `,
    3: `
        <h3>3 étoiles :</h3>
        <p>Lors de l'utilisation des compétences <strong>Balle d'air</strong>, <strong>Cisaille venteuse</strong>, <strong>Bourrasque tranchante</strong> ou<br>
        <strong>Vortex venteux</strong>, la jauge de puissance de l'utilisateur se remplit de <span class="stat-boost">10%</span>.<br></p>
    `,
    4: `
        <h3>4 étoiles :</h3>
        <p>Les dégâts de la compétence <strong>Tempête venteuse</strong> augmentent de <span class="stat-boost">30%</span>.<br></p>
    `,
    5: `
        <h3>5 étoiles :</h3>
        <p>Au début du combat, la jauge de puissance de Heejin se remplit de <span class="stat-boost">100%</span>.<br></p>
    `
};

// --- RÉSUMÉ (COURT) ---
const charSummaryData = {
    0: `
        <h3>Passif : Vent de l'Esprit</h3>
        <p>Skills Vent = Jauge Puissance <span class="stat-boost">+8%</span>.<br>
        CD Tempête venteuse <span class="stat-boost">-30%</span>.<br></p>
    `,
    1: `
        <h3>1 étoile</h3>
        <p>Bourrasque tranchante : Purge débuffs (Soi + Équipe).<br></p>
    `,
    2: `
        <h3>2 étoiles</h3>
        <p>CD Tempête venteuse <span class="stat-boost">-10%</span>.<br></p>
    `,
    3: `
        <h3>3 étoiles</h3>
        <p>Skills Vent = Jauge Puissance <span class="stat-boost">+10%</span>.<br></p>
    `,
    4: `
        <h3>4 étoiles</h3>
        <p>Dégâts Tempête venteuse <span class="stat-boost">+30%</span>.<br></p>
    `,
    5: `
        <h3>5 étoiles</h3>
        <p>Début combat : Jauge Puissance 100%.<br></p>
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
   LOGIQUE ARME (Intuition)
   ========================================== */
const weaponStarsContainer = document.getElementById('weapon-stars-container');
const weaponStars = weaponStarsContainer.querySelectorAll('.star');
const weaponMessage = document.getElementById('weapon-message');

let weaponCurrentLevel = 0;

const weaponData = {
    0: `
        <h3>Avancement 0 :</h3>
        <p>Augmente les dégâts de Compétence ultime de l'utilisatrice de <span class="stat-boost">5%</span>.<br>
        Lors de l'utilisation de la compétence ultime, les dégâts de Compétence ultime du membre de son équipe ayant la Puissance totale la plus élevée augmentent de <span class="stat-boost">5%</span> pendant 20 seconde(s).<br></p>
    `,
    1: `
        <h3>Avancement 5 étoiles :</h3>
        <p>Augmente les dégâts de Compétence ultime de l'utilisatrice de <span class="stat-boost">20%</span>.<br>
        Lors de l'utilisation de la compétence ultime, les dégâts de Compétence ultime du membre de son équipe ayant la Puissance totale la plus élevée augmentent de <span class="stat-boost">20%</span> pendant 20 seconde(s).<br></p>
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