/* ==========================================
   LOGIQUE ARME (Premières fleurs)
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
        <p>Augmente les dégâts d'eau infligés par l'utilisatrice de <span class="stat-boost">2.5%</span>.<br>
        Lorsque l'utilisatrice place une arme d'ombre, à l'exception de celles placées à l'aide de <strong>Récupération</strong>, l'effet <span class="buff">[Assassinat prêt]</span> s'active.<br>
        Lorsque l'effet <span class="buff">[Assassinat prêt]</span> s'active, les dégâts de <strong>Récupération</strong> augmentent à hauteur de <span class="stat-boost">10%</span> par cumul pendant 15 seconde(s) (cumulable jusqu'à 3 fois).<br></p>
    `,
    1: `
        <h3>5 étoiles :</h3>
        <p>Augmente les dégâts d'eau infligés par l'utilisatrice de <span class="stat-boost">10%</span>.<br>
        Lorsque l'utilisatrice place une arme d'ombre, à l'exception de celles placées à l'aide de <strong>Récupération</strong>, l'effet <span class="buff">[Assassinat prêt]</span> s'active.<br>
        Lorsque l'effet <span class="buff">[Assassinat prêt]</span> s'active, les dégâts de <strong>Récupération</strong> augmentent à hauteur de <span class="stat-boost">20%</span> par cumul pendant 15 seconde(s) (cumulable jusqu'à 3 fois).<br></p>
    `,
    2: `
        <h3>10 étoiles :</h3>
        <p>Augmente l'Attaque, la Défense et les PV de l'utilisatrice de <span class="stat-boost">15%</span>.<br></p>
    `
};

// --- RÉSUMÉ ---
const weaponSummaryData = {
    0: `
        <h3>Passif : Fleur d'Ombre</h3>
        <p>Dégâts Eau <span class="stat-boost">+2.5%</span>.<br>
        Arme d'ombre = <span class="buff">[Assassinat prêt]</span>.<br>
        [Assassinat prêt] : Dégâts Récupération <span class="stat-boost">+10%</span>/cumul (15s, max 3).</p>
    `,
    1: `
        <h3>5 étoiles</h3>
        <p>Dégâts Eau <span class="stat-boost">+10%</span>.<br>
        [Assassinat prêt] : Dégâts Récupération <span class="stat-boost">+20%</span>/cumul.</p>
    `,
    2: `
        <h3>10 étoiles</h3>
        <p>Atk/Def/PV <span class="stat-boost">+15%</span>.<br></p>
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