/* ==========================================
   LOGIQUE ARME (Orbe d'avarice)
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
        <p>Les dégâts infligés par <strong>Purgatoire</strong> augmentent de <span class="stat-boost">50%</span> et la consommation de PM augmente de <span class="stat-boost">10%</span>.<br></p>
    `,
    1: `
        <h3>1 étoile :</h3>
        <p>Lorsque l'utilisateur rejoint le niveau, applique 20 cumuls de l'effet <span class="buff">[Flamme noire tonitruante)</span>.<br>
        Augmente le temps de rechargement de <strong>Purgatoire</strong> de 5 seconde(s).<br></p>
        <div class="detail-box">
            <h4><span class="buff">[Flamme noire tonitruante]</span></h4>
            <p>Augmente les dégâts de <strong>Purgatoire</strong> de <span class="stat-boost">8%</span>.<br>
            Lorsque l'utilisateur lance <strong>Purgatoire</strong>, consomme 4 cumuls.<br>
            Durée: illimitée</p>
        </div>
    `,
    2: `
        <h3>2 étoiles :</h3>
        <p>Vos dégâts de feu augmentent de <span class="stat-boost">8%</span>.<br></p>
    `,
    3: `
        <h3>3 étoiles :</h3>
        <p>Restaure les PM à hauteur des cumuls de <span class="buff">[Flamme noire tonitruante]</span> x 2 toutes les 3 seconde(s).<br></p>
    `,
    4: `
        <h3>4 étoiles :</h3>
        <p>Le temps de rechargement de <strong>Purgatoire</strong> diminue de <span class="stat-boost">15%</span>.<br></p>
    `,
    5: `
        <h3>5 étoiles :</h3>
        <p>Lorsque l'utilisateur rejoint le niveau, applique 30 cumuls de l'effet <span class="buff">[Flamme noire tonitruante]</span>.<br></p>
    `
};

// --- RÉSUMÉ (COURT) ---
const weaponSummaryData = {
    0: `
        <h3>Passif : Purgatoire Infernal</h3>
        <p>Purgatoire : Dégâts <span class="stat-boost">+50%</span>, Conso PM <span class="stat-boost">+10%</span>.<br></p>
    `,
    1: `
        <h3>1 étoile</h3>
        <p>Début niveau : 20 cumuls <span class="buff">[Flamme noire]</span>.<br>
        CD Purgatoire +5s.<br>
        [Flamme] : Dégâts Purgatoire <span class="stat-boost">+8%</span> (Conso 4 cumuls/tir).</p>
    `,
    2: `
        <h3>2 étoiles</h3>
        <p>Dégâts Feu <span class="stat-boost">+8%</span>.<br></p>
    `,
    3: `
        <h3>3 étoiles</h3>
        <p>Regen PM = Cumuls [Flamme] x 2 toutes les 3s.<br></p>
    `,
    4: `
        <h3>4 étoiles</h3>
        <p>CD Purgatoire <span class="stat-boost">-15%</span>.<br></p>
    `,
    5: `
        <h3>5 étoiles</h3>
        <p>Début niveau : 30 cumuls <span class="buff">[Flamme noire]</span>.<br></p>
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