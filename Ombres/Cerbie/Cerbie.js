/* ==========================================
   LOGIQUE OMBRE (Cerbie) - 1 ÉTOILE
   ========================================== */
const shadowStarsContainer = document.getElementById('shadow-stars-container');
const shadowStars = shadowStarsContainer.querySelectorAll('.star');
const shadowMessage = document.getElementById('shadow-message');

let shadowCurrentLevel = 0; // 0 = Commun, 1 = Général

const shadowData = {
    0: `
        <h3>Rang : Commun</h3>
        <p>Le Taux de coup critique de tous les membres de l'équipe augmente de <span class="stat-boost">4%</span>.<br></p>
    `,
    1: `
        <h3>Rang : Général</h3>
        <p>Le Taux de coup critique de tous les membres de l'équipe augmente de <span class="stat-boost">8%</span>.<br></p>
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
   LOGIQUE ARME (Chasseur de lycans) - 1 ÉTOILE
   ========================================== */
const weaponStarsContainer = document.getElementById('weapon-stars-container');
const weaponStars = weaponStarsContainer.querySelectorAll('.star');
const weaponMessage = document.getElementById('weapon-message');
const toggleBtn = document.getElementById('toggleBtn');

let weaponCurrentLevel = 0; // 0 = Base, 1 = Étoile cliquée
let isSummaryMode = false;

const passifTexte = `
    <p>Lorsque Cerbie atteint une cible avec l'effet <span class="buff">[Combustion]</span> appliqué, les dégâts de ses compétences augmentent de <span class="stat-boost">8%</span> pendant 10 seconde(s).<br></p>
`;

const weaponFullData = {
    0: `<h3>Passif (Base) :</h3>` + passifTexte,
    1: `<h3>Passif (Max) :</h3>` + passifTexte
};

const weaponSummaryData = {
    0: `<h3>Résumé : Base</h3><p>Cible [Combustion] : Dégâts compétences <span class="stat-boost">+8%</span> (10s).</p>`,
    1: `<h3>Résumé : Étoile</h3><p>Cible [Combustion] : Dégâts compétences <span class="stat-boost">+8%</span> (10s).</p>`
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