/* ==========================================
   LOGIQUE ARME (Lame de Razan)
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
        <p>Lorsque la compétence <strong>Entaille ardente</strong> touche sa cible, elle lui inflige l'effet <span class="buff">[Brûlure]</span>.<br></p>
        <div class="detail-box">
            <h4><span class="buff">[Brûlure]</span></h4>
            <p>Inflige des dégâts équivalents à <span class="stat-boost">44 %</span> de l'Attaque toutes les 3 seconde(s) (cumulable jusqu'à 5 fois).<br>
            Durée : 30 seconde(s)</p>
        </div>
    `,
    1: `
        <h3>1 étoile :</h3>
        <p>Les dégâts de la compétence <strong>Entaille ardente</strong> augmentent de <span class="stat-boost">44 %</span> lorsque Jinwoo attaque des cibles affectées par <span class="buff">[Brûlure]</span>.<br></p>
    `,
    2: `
        <h3>2 étoiles :</h3>
        <p>Vos dégâts de feu augmentent de <span class="stat-boost">6 %</span>.<br></p>
    `,
    3: `
        <h3>3 étoiles :</h3>
        <p>Augmente les dégâts de brûlure de la compétence <strong>Entaille ardente</strong> de <span class="stat-boost">44 %</span>.<br></p>
    `,
    4: `
        <h3>4 étoiles :</h3>
        <p>Le temps de rechargement d'<strong>Entaille ardente</strong> diminue de <span class="stat-boost">10 %</span>.<br></p>
    `,
    5: `
        <h3>5 étoiles :</h3>
        <p>Les dégâts infligés aux monstres de type Boss avec <strong>Entaille ardente</strong> augmentent de <span class="stat-boost">44 %</span>.<br></p>
    `
};

// --- RÉSUMÉ ---
const weaponSummaryData = {
    0: `
        <h3>Passif : Ignition</h3>
        <p>Entaille ardente = <span class="buff">[Brûlure]</span>.<br>
        44 % Atk/3s (max 5 piles).</p>
    `,
    1: `
        <h3>1 étoile</h3>
        <p>Dégâts Entaille ardente <span class="stat-boost">+44 %</span> sur cible brûlée.<br></p>
    `,
    2: `
        <h3>2 étoiles</h3>
        <p>Dégâts Feu <span class="stat-boost">+6 %</span>.<br></p>
    `,
    3: `
        <h3>3 étoiles</h3>
        <p>Dégâts de l'effet <span class="buff">[Brûlure]</span> <span class="stat-boost">+44 %</span>.<br></p>
    `,
    4: `
        <h3>4 étoiles</h3>
        <p>CD Entaille ardente <span class="stat-boost">-10 %</span>.<br></p>
    `,
    5: `
        <h3>5 étoiles</h3>
        <p>Dégâts sur Boss (via compétence) <span class="stat-boost">+44 %</span>.<br></p>
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