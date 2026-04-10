/* ==========================================
   LOGIQUE OMBRE (Crâne) - 1 ÉTOILE
   ========================================== */
const shadowStarsContainer = document.getElementById('shadow-stars-container');
const shadowStars = shadowStarsContainer.querySelectorAll('.star');
const shadowMessage = document.getElementById('shadow-message');

let shadowCurrentLevel = 0; // 0 = Commun, 1 = Général

const shadowData = {
    0: `
        <h3>Rang : Commun</h3>
        <p>Les PM de toute l'équipe augmentent de <span class="stat-boost">6%</span>.<br>
        La consommation de mana des compétences diminue de <span class="stat-boost">5%</span>.</p>
    `,
    1: `
        <h3>Rang : Général</h3>
        <p>Les PM de toute l'équipe augmentent de <span class="stat-boost">12%</span>.<br>
        La consommation de mana des compétences diminue de <span class="stat-boost">5%</span>.</p>
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
   LOGIQUE ARME (Faux du gardien du tombeau)
   ========================================== */
const weaponStarsContainer = document.getElementById('weapon-stars-container');
const weaponStars = weaponStarsContainer.querySelectorAll('.star');
const weaponMessage = document.getElementById('weapon-message');
const toggleBtn = document.getElementById('toggleBtn');

let weaponCurrentLevel = 0; // 0 = Base, 1 = 5 Étoiles
let isSummaryMode = false;

const weaponFullData = {
    0: `<h3>Passif (Base) :</h3>
        <p>Lors d'une attaque avec la compétence <span class="stat-boost">[Flamme de la mort]</span> de Crâne, les dégâts infligés par l'utilisateur augmentent de <span class="stat-boost">4%</span> pendant 10s.</p>
        <p><small>Attaque +400 | Précision +500</small></p>`,
    1: `<h3>Passif (5 Étoiles) :</h3>
        <p>Lors d'une attaque avec la compétence <span class="stat-boost">[Flamme de la mort]</span> de Crâne, les dégâts infligés par l'utilisateur augmentent de <span class="stat-boost">24%</span> pendant 10s.</p>
        <p><small>Attaque +2400 | Précision +3000</small></p>`
};

const weaponSummaryData = {
    0: `<h3>Résumé : Base</h3><p>[Flamme de la mort] → Dégâts <span class="stat-boost">+4%</span> (10s).</p>`,
    1: `<h3>Résumé : 5★</h3><p>[Flamme de la mort] → Dégâts <span class="stat-boost">+24%</span> (10s).</p>`
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