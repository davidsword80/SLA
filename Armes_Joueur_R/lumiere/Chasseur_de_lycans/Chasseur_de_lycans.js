/* ==========================================
   LOGIQUE ARME (Chasseur de lycans)
   ========================================== */
const weaponStarsContainer = document.getElementById('weapon-stars-container');
const weaponStars = weaponStarsContainer.querySelectorAll('.star');
const weaponMessage = document.getElementById('weapon-message');
const toggleBtn = document.getElementById('toggleBtn');

let weaponCurrentLevel = 0;
let isSummaryMode = false;

// --- TEXTE COMPLET ---
const weaponFullData = {
    0: `
        <h3>Passif :</h3>
        <p>Lorsque l'Attaque de noyau de l'utilisateur touche sa cible, elle lui applique l'effet <span class="buff">[Cible]</span>.<br></p>
        <div class="detail-box">
            <h4><span class="buff">[Cible]</span></h4>
            <p>Les dégâts infligés avec <strong>Chasse aux lycans</strong> augmentent de <span class="stat-boost">50 %</span>.<br>
            Durée : 8 seconde(s)</p>
        </div>
    `,
    1: `
        <h3>1 étoile :</h3>
        <p>L'utilisateur inflige des dégâts supplémentaires équivalents à <span class="stat-boost">100 %</span> de l'Attaque tous les 10 coup(s).<br></p>
    `,
    2: `
        <h3>2 étoiles :</h3>
        <p>Vos dégâts de lumière augmentent de <span class="stat-boost">6 %</span>.<br></p>
    `,
    3: `
        <h3>3 étoiles :</h3>
        <p>Les dégâts des attaques de noyau de Jinwoo augmentent de <span class="stat-boost">40 %</span>.<br></p>
    `,
    4: `
        <h3>4 étoiles :</h3>
        <p>Le temps de rechargement de <strong>Chasse aux lycans</strong> diminue de <span class="stat-boost">10 %</span>.<br></p>
    `,
    5: `
        <h3>5 étoiles :</h3>
        <p>Lorsque <strong>Chasse aux lycans</strong> est utilisée sur des cibles affectées par l'effet <span class="buff">[Cible]</span>, l'effet Dégâts subis augmentés passe à <span class="stat-boost">200 %</span>.<br></p>
    `
};

// --- RÉSUMÉ ---
const weaponSummaryData = {
    0: `
        <h3>Passif : Marquage</h3>
        <p>Atk de noyau = <span class="buff">[Cible]</span>.<br>
        Dégâts Chasse aux lycans <span class="stat-boost">+50 %</span>.</p>
    `,
    1: `
        <h3>1 étoile</h3>
        <p>Dégâts sup. <span class="stat-boost">100 % Atk</span> tous les 10 coups.<br></p>
    `,
    2: `
        <h3>2 étoiles</h3>
        <p>Dégâts Lumière <span class="stat-boost">+6 %</span>.<br></p>
    `,
    3: `
        <h3>3 étoiles</h3>
        <p>Dégâts Atk de noyau <span class="stat-boost">+40 %</span>.<br></p>
    `,
    4: `
        <h3>4 étoiles</h3>
        <p>CD Chasse aux lycans <span class="stat-boost">-10 %</span>.<br></p>
    `,
    5: `
        <h3>5 étoiles</h3>
        <p>Chasse aux lycans sur <span class="buff">[Cible]</span> : Dégâts subis <span class="stat-boost">200 %</span>.<br></p>
    `
};

// --- LOGIQUE COMMUNE ---
renderWeaponContent();

toggleBtn.addEventListener('click', function() {
    isSummaryMode = !isSummaryMode;
    this.textContent = isSummaryMode ? "Texte Complet" : "Mode Résumé";
    this.classList.toggle('active', isSummaryMode);
    renderWeaponContent();
});

weaponStars.forEach(star => {
    star.addEventListener('click', function () {
        const clickedValue = parseInt(this.getAttribute('data-value'));
        weaponCurrentLevel = (clickedValue === weaponCurrentLevel) ? clickedValue - 1 : clickedValue;
        updateWeaponStars(weaponCurrentLevel);
        renderWeaponContent();
    });
});

function updateWeaponStars(level) {
    weaponStars.forEach(star => {
        const starValue = parseInt(star.getAttribute('data-value'));
        star.classList.toggle('filled', starValue <= level);
    });
}

function renderWeaponContent() {
    const dataSource = isSummaryMode ? weaponSummaryData : weaponFullData;
    weaponMessage.innerHTML = dataSource[weaponCurrentLevel];
}