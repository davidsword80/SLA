/* ==========================================
   LOGIQUE OMBRE (Bigrock) - 1 ÉTOILE
   ========================================== */
const shadowStarsContainer = document.getElementById('shadow-stars-container');
const shadowStars = shadowStarsContainer.querySelectorAll('.star');
const shadowMessage = document.getElementById('shadow-message');

let shadowCurrentLevel = 0; // 0 = Commun, 1 = Général

const shadowData = {
    0: `
        <h3>Rang : Commun</h3>
        <p>Les dégâts de compétence infligés par tous les membres de l'équipe augmentent de <span class="stat-boost">8%</span>.<br></p>
    `,
    1: `
        <h3>Rang : Général</h3>
        <p>Les dégâts de compétence infligés par tous les membres de l'équipe augmentent de <span class="stat-boost">12%</span>.<br></p>
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
   LOGIQUE ARME (Marteau - Reproduction) - 1 ÉTOILE
   ========================================== */
const weaponStarsContainer = document.getElementById('weapon-stars-container');
const weaponStars = weaponStarsContainer.querySelectorAll('.star');
const weaponMessage = document.getElementById('weapon-message');
const toggleBtn = document.getElementById('toggleBtn');

let weaponCurrentLevel = 0; // 0 = Base, 1 = Étoile cliquée
let isSummaryMode = false;

// Passif identique pour les deux états (à modifier plus tard)
const passifTexte = `
    <p>Lorsque l'ombre est touchée, l'Attaque de la cible diminue de <span class="stat-boost">2.5%</span> pendant 5 seconde(s).<br>
    Lorsque l'ombre est touchée, la Défense de l'attaquant diminue de <span class="stat-boost">30%</span> pendant 5 seconde(s).<br></p>
`;

const weaponFullData = {
    0: `<h3>Passif (Base) :</h3>` + passifTexte,
    1: `<h3>Passif (Max) :</h3>` + passifTexte
};

const weaponSummaryData = {
    0: `<h3>Résumé : Base</h3><p>Debuff Atk cible (-2.5%) et Def attaquant (-30%) si touché.</p>`,
    1: `<h3>Résumé : Étoile</h3><p>Debuff Atk cible (-2.5%) et Def attaquant (-30%) si touché.</p>`
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