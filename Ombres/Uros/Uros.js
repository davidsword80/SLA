/* ==========================================
   LOGIQUE OMBRE (Uros) - 1 ÉTOILE
   ========================================== */
const shadowStarsContainer = document.getElementById('shadow-stars-container');
const shadowStars = shadowStarsContainer.querySelectorAll('.star');
const shadowMessage = document.getElementById('shadow-message');

let shadowCurrentLevel = 0; // 0 = Commun, 1 = Général

const shadowData = {
    0: `
        <h3>Rang : Commun</h3>
        <p>Les dégâts de ténèbres de toute l'équipe augmentent de <span class="stat-boost">5%</span>.</p>
    `,
    1: `
        <h3>Rang : Général</h3>
        <p>Les dégâts de ténèbres de toute l'équipe augmente de <span class="stat-boost">9%</span>.</p>
    `
};

renderShadowContent();

shadowStars.forEach(star => {
    star.addEventListener('click', function () {
        shadowCurrentLevel = (shadowCurrentLevel === 1) ? 0 : 1;
        updateShadowStars(shadowCurrentLevel);
        renderShadowContent();
    });
});

function updateShadowStars(level) {
    shadowStars.forEach(star => {
        star.classList.toggle('filled', level === 1);
    });
}

function renderShadowContent() {
    shadowMessage.innerHTML = shadowData[shadowCurrentLevel];
}

/* ==========================================
   LOGIQUE ARME (Fragment de Zeke : Reproduction)
   ========================================== */
const weaponStarsContainer = document.getElementById('weapon-stars-container');
const weaponStars = weaponStarsContainer.querySelectorAll('.star');
const weaponMessage = document.getElementById('weapon-message');
const toggleBtn = document.getElementById('toggleBtn');

let weaponCurrentLevel = 0; // 0 = Base, 1 = 5 Étoiles
let isSummaryMode = false;

const weaponFullData = {
    0: `<h3>Passif (Base) :</h3>
        <p>Armement d'ombre exclusif pour Uros.<br>
        La Pénétration de défense de l'utilisateur augmente de <span class="stat-boost">4%</span>.</p>`,
    1: `<h3>Passif (5 Étoiles) :</h3>
        <p>Armement d'ombre exclusif pour Uros.<br>
        La Pénétration de défense de l'utilisateur augmente de <span class="stat-boost">24%</span>.</p>`
};

const weaponSummaryData = {
    0: `<h3>Résumé : Base</h3><p>Pénétration de défense <span class="stat-boost">+4%</span>.</p>`,
    1: `<h3>Résumé : 5★</h3><p>Pénétration de défense <span class="stat-boost">+24%</span>.</p>`
};

renderWeaponContent();

toggleBtn.addEventListener('click', function() {
    isSummaryMode = !isSummaryMode;
    this.textContent = isSummaryMode ? "Texte Complet" : "Mode Résumé";
    this.classList.toggle('active', isSummaryMode);
    renderWeaponContent();
});

weaponStars.forEach(star => {
    star.addEventListener('click', function () {
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