/* ==========================================
   LOGIQUE ARME (Vagabond solitaire)
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
        <p>Augmente l'Attaque de l'utilisateur de <span class="stat-boost">2.5%</span>.<br>
        Lorsque la compétence <strong>Pluie venimeuse</strong> touche sa cible, sa Défense diminue de <span class="stat-boost">2.5%</span> pendant 5 seconde(s).<br></p>
    `,
    1: `
        <h3>5 étoiles :</h3>
        <p>Augmente l'Attaque de l'utilisateur de <span class="stat-boost">10%</span>.<br>
        Lorsque la compétence <strong>Pluie venimeuse</strong> touche sa cible, sa Défense diminue de <span class="stat-boost">10%</span> pendant 5 seconde(s).<br></p>
    `,
    2: `
        <h3>10 étoiles :</h3>
        <p>Augmente l'Attaque, la Défense et les PV de l'utilisateur de <span class="stat-boost">15%</span>.<br></p>
    `
};

// --- RÉSUMÉ ---
const weaponSummaryData = {
    0: `
        <h3>Passif : Pluie Acide</h3>
        <p>Attaque <span class="stat-boost">+2.5%</span>.<br>
        Pluie venimeuse : Debuff Défense <span class="stat-boost">-2.5%</span> (5s).</p>
    `,
    1: `
        <h3>5 étoiles</h3>
        <p>Attaque <span class="stat-boost">+10%</span>.<br>
        Pluie venimeuse : Debuff Défense <span class="stat-boost">-10%</span> (5s).</p>
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