/* ==========================================
   LOGIQUE ARME (Épée de Kim Sangshink)
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
        <p>Lorsque la compétence <strong>Énergie d'épée à 3 millions de wons</strong> est utilisée, l'effet <span class="buff">[Un nouveau départ]</span> s'applique.<br></p>
        <div class="detail-box">
            <h4><span class="buff">[Un nouveau départ]</span></h4>
            <p>La Vitesse d'attaque et la Vitesse de l'utilisateur augmentent de <span class="stat-boost">12 %</span>.<br>
            Durée : 8 seconde(s)</p>
        </div>
    `,
    1: `
        <h3>1 étoile :</h3>
        <p>Lorsque les PV de l'utilisateur sont supérieurs à <span class="stat-boost">70 %</span>, applique l'effet <span class="buff">[Taux de coup critique augmenté]</span>.<br></p>
        <div class="detail-box">
            <h4><span class="buff">[Taux de coup critique augmenté]</span></h4>
            <p>Augmente le Taux de coup critique de <span class="stat-boost">8 %</span>.</p>
        </div>
    `,
    2: `
        <h3>2 étoiles :</h3>
        <p>Vos dégâts de vent augmentent de <span class="stat-boost">6 %</span>.<br></p>
    `,
    3: `
        <h3>3 étoiles :</h3>
        <p>Lorsque l'effet <span class="buff">[Un nouveau départ]</span> est appliqué, un <span class="buff">[Bouclier]</span> équivalent à <span class="stat-boost">50 %</span> de la Défense de l'utilisateur est créé.<br></p>
    `,
    4: `
        <h3>4 étoiles :</h3>
        <p>Réduit le temps de rechargement de la compétence <strong>Énergie d'épée à 3 millions de wons</strong> de <span class="stat-boost">10 %</span>.<br></p>
    `,
    5: `
        <h3>5 étoiles :</h3>
        <p>Lorsque l'effet <span class="buff">[Un nouveau départ]</span> est appliqué, les dégâts des Attaques de base et de noyau augmentent de <span class="stat-boost">50 %</span>.<br></p>
    `
};

// --- RÉSUMÉ ---
const weaponSummaryData = {
    0: `
        <h3>Passif : Nouveau Départ</h3>
        <p>Compétence = <span class="buff">[Un nouveau départ]</span>.<br>
        Vitesse Atk et déplacement <span class="stat-boost">+12 %</span>.</p>
    `,
    1: `
        <h3>1 étoile</h3>
        <p>PV > 70 % = Taux de coup critique <span class="stat-boost">+8 %</span>.<br></p>
    `,
    2: `
        <h3>2 étoiles</h3>
        <p>Dégâts Vent <span class="stat-boost">+6 %</span>.<br></p>
    `,
    3: `
        <h3>3 étoiles</h3>
        <p><span class="buff">[Un nouveau départ]</span> = <span class="buff">[Bouclier]</span> (50 % Défense).<br></p>
    `,
    4: `
        <h3>4 étoiles</h3>
        <p>CD Énergie d'épée <span class="stat-boost">-10 %</span>.<br></p>
    `,
    5: `
        <h3>5 étoiles</h3>
        <p><span class="buff">[Un nouveau départ]</span> = Dégâts Base/Noyau <span class="stat-boost">+50 %</span>.<br></p>
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