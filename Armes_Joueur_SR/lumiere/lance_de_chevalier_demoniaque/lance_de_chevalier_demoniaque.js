/* ==========================================
   LOGIQUE ARME (Lance de chevalier démoniaque)
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
        <p>Lors de l'utilisation de la compétence <strong>Lance sacrée</strong>, l'utilisateur applique l'effet <span class="buff">[Esprit corrompu]</span>.<br></p>
        <div class="detail-box">
            <h4><span class="buff">[Esprit corrompu]</span></h4>
            <p>Supprime le temps de rechargement de la compétence <strong>Lance sacrée</strong>.<br>
            Durée: 3 seconde(s)</p>
        </div>
    `,
    1: `
        <h3>1 étoile :</h3>
        <p>Lorsque <strong>Lance sacrée</strong> touche sa cible, l'utilisateur récupère <span class="stat-boost">1%</span> de ses PM.<br></p>
    `,
    2: `
        <h3>2 étoiles :</h3>
        <p>Vos dégâts de lumière augmentent de <span class="stat-boost">8%</span>.<br></p>
    `,
    3: `
        <h3>3 étoiles :</h3>
        <p>Lorsque la compétence <strong>Lance sacrée</strong> est utilisée, la durée de l'effet <span class="buff">[Esprit corrompu]</span> augmente de 4 seconde(s).<br></p>
    `,
    4: `
        <h3>4 étoiles :</h3>
        <p>Le temps de rechargement de la compétence <strong>Lance sacrée</strong> diminue de <span class="stat-boost">15%</span>.<br></p>
    `,
    5: `
        <h3>5 étoiles :</h3>
        <p>Pendant que l'effet <span class="buff">[Esprit corrompu]</span> est actif, la Vitesse d'attaque de l'utilisateur augmente de <span class="stat-boost">10%</span>.<br>
        Les dégâts de la compétence <strong>Lance sacrée</strong> augmentent de <span class="stat-boost">10%</span>.<br></p>
    `
};

// --- RÉSUMÉ (COURT) ---
const weaponSummaryData = {
    0: `
        <h3>Passif : Lance Corrompue</h3>
        <p>Lance sacrée = <span class="buff">[Esprit corrompu]</span> (Reset CD, 3s).<br></p>
    `,
    1: `
        <h3>1 étoile</h3>
        <p>Touche = Regen <span class="stat-boost">1%</span> PM.<br></p>
    `,
    2: `
        <h3>2 étoiles</h3>
        <p>Dégâts Lumière <span class="stat-boost">+8%</span>.<br></p>
    `,
    3: `
        <h3>3 étoiles</h3>
        <p>Durée [Esprit corrompu] <span class="stat-boost">+4s</span>.<br></p>
    `,
    4: `
        <h3>4 étoiles</h3>
        <p>CD Lance sacrée <span class="stat-boost">-15%</span>.<br></p>
    `,
    5: `
        <h3>5 étoiles</h3>
        <p>Sous [Esprit] : Vitesse Atk <span class="stat-boost">+10%</span>, Dégâts Lance <span class="stat-boost">+10%</span>.<br></p>
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