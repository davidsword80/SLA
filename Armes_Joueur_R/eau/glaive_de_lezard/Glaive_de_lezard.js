/* ==========================================
   LOGIQUE ARME (Glaive de lézard)
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
        <p>Lors de l'utilisation de la compétence <strong>Transpercement de lézard</strong>, l'utilisateur applique l'effet <span class="buff">[Protection de lézard]</span>.<br></p>
        <div class="detail-box">
            <h4><span class="buff">[Protection de lézard]</span></h4>
            <p>Les dégâts de la compétence <strong>Transpercement de lézard</strong> augmentent de <span class="stat-boost">0.3 %</span> (cumulable jusqu'à 999 fois).<br>
            Durée : infinie</p>
        </div>
    `,
    1: `
        <h3>1 étoile :</h3>
        <p>Lors de l'utilisation de la compétence <strong>Transpercement de lézard</strong>, l'utilisateur a <span class="stat-boost">80 %</span> de chances de réinitialiser son temps de rechargement.<br>
        Réduit le prochain taux de réinitialisation du temps de rechargement en cas de réussite.</p>
    `,
    2: `
        <h3>2 étoiles :</h3>
        <p>Vos dégâts d'eau augmentent de <span class="stat-boost">6 %</span>.<br></p>
    `,
    3: `
        <h3>3 étoiles :</h3>
        <p>L'effet <strong>Protection de lézard</strong> s'active tous les 2 cumuls.<br></p>
    `,
    4: `
        <h3>4 étoiles :</h3>
        <p>Le temps de rechargement de <strong>Transpercement de lézard</strong> diminue de <span class="stat-boost">10 %</span>.<br></p>
    `,
    5: `
        <h3>5 étoiles :</h3>
        <p>Les dégâts infligés aux monstres de type Boss avec <strong>Transpercement de lézard</strong> augmentent de <span class="stat-boost">40 %</span>.<br></p>
    `
};

// --- RÉSUMÉ ---
const weaponSummaryData = {
    0: `
        <h3>Passif : Protection lézard</h3>
        <p>Utilisation compétence = <span class="buff">[Protection de lézard]</span>.<br>
        Dégâts compétence <span class="stat-boost">+0.3 %</span> (max 999 piles, durée infinie).</p>
    `,
    1: `
        <h3>1 étoile</h3>
        <p>80 % de chances de reset CD sur <strong>Transpercement de lézard</strong> (taux réduit après réussite).<br></p>
    `,
    2: `
        <h3>2 étoiles</h3>
        <p>Dégâts Eau <span class="stat-boost">+6 %</span>.<br></p>
    `,
    3: `
        <h3>3 étoiles</h3>
        <p>Activation de <strong>Protection de lézard</strong> doublée (tous les 2 cumuls).<br></p>
    `,
    4: `
        <h3>4 étoiles</h3>
        <p>CD Transpercement de lézard <span class="stat-boost">-10 %</span>.<br></p>
    `,
    5: `
        <h3>5 étoiles</h3>
        <p>Dégâts sur Boss (via compétence) <span class="stat-boost">+40 %</span>.<br></p>
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