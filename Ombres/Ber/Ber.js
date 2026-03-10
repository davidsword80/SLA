/* ==========================================
   LOGIQUE OMBRE (Ber) - 1 Étoile (Commun / Général)
   ========================================== */
const shadowStarsContainer = document.getElementById('shadow-stars-container');
const shadowStars = shadowStarsContainer.querySelectorAll('.star');
const shadowMessage = document.getElementById('shadow-message');

let shadowCurrentLevel = 0; // 0 = Commun, 1 = Général

const shadowData = {
    0: `
        <h3>Rang : Commun</h3>
        <p>L'attaque et les dégâts de coup critique de toute l'équipe augmentent de <span class="stat-boost">3%</span>.<br></p>
    `,
    1: `
        <h3>Rang : Général</h3>
        <p>L'attaque et les dégâts de coup critique de toute l'équipe augmentent de <span class="stat-boost">5%</span>.<br></p>
    `
};

// Init Shadow
renderShadowContent();

shadowStars.forEach(star => {
    star.addEventListener('click', function () {
        // Bascule simple entre 0 et 1
        shadowCurrentLevel = (shadowCurrentLevel === 1) ? 0 : 1;
        
        updateShadowStars(shadowCurrentLevel);
        renderShadowContent();
    });
});

function updateShadowStars(level) {
    shadowStars.forEach(star => {
        // Active l'étoile si level est 1
        star.classList.toggle('filled', level === 1);
    });
}

function renderShadowContent() {
    shadowMessage.innerHTML = shadowData[shadowCurrentLevel];
}


/* ==========================================
   LOGIQUE ARME (Faux de l'ombre) - 1 Étoile
   ========================================== */
const weaponStarsContainer = document.getElementById('weapon-stars-container');
const weaponStars = weaponStarsContainer.querySelectorAll('.star');
const weaponMessage = document.getElementById('weapon-message');
const toggleBtn = document.getElementById('toggleBtn');

let weaponCurrentLevel = 0; // 0 = Base, 1 = Max
let isSummaryMode = false;

// --- DONNÉES ARME ---
const weaponFullData = {
    0: `
        <h3>Passif (Base) :</h3>
        <p>Les soins prodigués à l'ombre augmentent de <span class="stat-boost">15%</span> et sa Pénétration de défense de <span class="stat-boost">2.5%</span>.<br></p>
    `,
    1: `
        <h3>Passif (Max) :</h3>
        <p>Les soins prodigués à l'ombre augmentent de <span class="stat-boost">30%</span> et sa Pénétration de défense de <span class="stat-boost">5%</span>.<br></p>
    `
};

const weaponSummaryData = {
    0: `
        <h3>Passif : Armement Ombre</h3>
        <p>Soins <span class="stat-boost">+15%</span>, Pén. Déf <span class="stat-boost">+2.5%</span>.</p>
    `,
    1: `
        <h3>Passif : Max</h3>
        <p>Soins <span class="stat-boost">+30%</span>, Pén. Déf <span class="stat-boost">+5%</span>.</p>
    `
};

// Init Weapon
renderWeaponContent();

toggleBtn.addEventListener('click', function() {
    isSummaryMode = !isSummaryMode;
    this.textContent = isSummaryMode ? "Texte Complet" : "Mode Résumé";
    this.classList.toggle('active', isSummaryMode);
    renderWeaponContent();
});

weaponStars.forEach(star => {
    star.addEventListener('click', function () {
        // Bascule simple entre 0 et 1
        weaponCurrentLevel = (weaponCurrentLevel === 1) ? 0 : 1;
        
        updateWeaponStars(weaponCurrentLevel);
        renderWeaponContent();
    });
});

function updateWeaponStars(level) {
    weaponStars.forEach(star => {
        star.classList.toggle('filled', level === 1);
    });
}

function renderWeaponContent() {
    const dataSource = isSummaryMode ? weaponSummaryData : weaponFullData;
    weaponMessage.innerHTML = dataSource[weaponCurrentLevel];
}