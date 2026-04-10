/* ==========================================
   LOGIQUE ARME (Marteau de golem de roche)
   ========================================== */
const weaponStarsContainer = document.getElementById('weapon-stars-container');
const weaponStars = weaponStarsContainer.querySelectorAll('.star');
const weaponMessage = document.getElementById('weapon-message');
const toggleBtn = document.getElementById('toggleBtn');

let weaponCurrentLevel = 0;
let isSummaryMode = false;

// --- TEXTE COMPLET (MOT POUR MOT + SAUT DE LIGNE APRES POINT) ---
const weaponFullData = {
    0: `
        <h3>Passif :</h3>
        <p>Lors de l'utilisation de la compétence <strong>Destruction terrestre</strong>, l'effet <span class="buff">[Protection terrestre]</span> est appliqué.<br></p>
        <div class="detail-box">
            <h4><span class="buff">[Protection terrestre]</span></h4>
            <p>Crée un <span class="buff">[Bouclier]</span> équivalent à <span class="stat-boost">40%</span> de la Défense de l'utilisateur.<br>
            Durée: 4 seconde(s)</p>
        </div>
    `,
    1: `
        <h3>1 étoile :</h3>
        <p>Modification de l'effet <span class="buff">[Protection terrestre]</span><br>
        L'effet de <span class="buff">[Bouclier]</span> bénéficie d'une augmentation équivalente à <span class="stat-boost">80%</span> de la Défense.<br>
        Augmente sa durée à 6 seconde(s).<br></p>
    `,
    2: `
        <h3>2 étoiles :</h3>
        <p>Vos dégâts de vent augmentent de <span class="stat-boost">8 %</span>.<br></p>
    `,
    3: `
        <h3>3 étoiles :</h3>
        <p>Lorsque l'effet <span class="buff">[Protection terrestre]</span> est actif, il applique aussi l'effet <span class="buff">[Tempête terrestre]</span>.<br></p>
        <div class="detail-box">
            <h4><span class="buff">[Tempête terrestre]</span></h4>
            <p>L'utilisateur invoque un rocher qui inflige des dégâts équivalents à <span class="stat-boost">200%</span> de sa Défense dans un rayon de 5 m toutes les secondes.<br>
            Durée: 10 seconde(s)</p>
        </div>
    `,
    4: `
        <h3>4 étoiles :</h3>
        <p>Le temps de rechargement de <strong>Destruction terrestre</strong> diminue de <span class="stat-boost">15%</span>.<br></p>
    `,
    5: `
        <h3>5 étoiles :</h3>
        <p>Pendant que l'effet <span class="buff">[Bouclier]</span> est actif, l'Attaque augmente de <span class="stat-boost">10%</span> et la Défense de <span class="stat-boost">10%</span>.<br></p>
    `
};

// --- RÉSUMÉ (COURT) ---
const weaponSummaryData = {
    0: `
        <h3>Passif : Gardien de Pierre</h3>
        <p>Destruction terrestre = <span class="buff">[Protection terrestre]</span> (Bouclier <span class="stat-boost">40%</span> Def, 4s).<br></p>
    `,
    1: `
        <h3>1 étoile</h3>
        <p>[Protection] améliorée : Bouclier <span class="stat-boost">80%</span> Def, Durée 6s.<br></p>
    `,
    2: `
        <h3>2 étoiles</h3>
        <p>Dégâts Vent <span class="stat-boost">+8%</span>.<br></p>
    `,
    3: `
        <h3>3 étoiles</h3>
        <p>Sous Protection = <span class="buff">[Tempête terrestre]</span>.<br>
        [Tempête] : Dégâts zone (<span class="stat-boost">200%</span> Def/s, 10s).</p>
    `,
    4: `
        <h3>4 étoiles</h3>
        <p>CD Destruction terrestre <span class="stat-boost">-15%</span>.<br></p>
    `,
    5: `
        <h3>5 étoiles</h3>
        <p>Sous Bouclier : Attaque/Défense <span class="stat-boost">+10%</span>.<br></p>
    `
};

// --- EVENTS ARME ---
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
        
        if (clickedValue === weaponCurrentLevel) {
            weaponCurrentLevel = clickedValue - 1;
        } else {
            weaponCurrentLevel = clickedValue;
        }
        
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