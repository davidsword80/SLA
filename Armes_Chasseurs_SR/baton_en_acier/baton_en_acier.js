/* ==========================================
   LOGIQUE ARME (Bâton en acier)
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
        <p>Lorsque vous utilisez la compétence <strong>QTE</strong>, votre jauge de puissance se charge de <span class="stat-boost">4.5%</span>.<br></p>
    `,
    1: `
        <h3>5 étoiles :</h3>
        <p>Lors de l'utilisation d'une compétence <strong>QTE</strong>, la jauge de puissance se charge de <span class="stat-boost">12%</span>.<br></p>
    `,
    2: `
        <h3>10 étoiles :</h3>
        <p>Augmente l'Attaque, la Défense et les PV de l'utilisateur de <span class="stat-boost">10%</span>.<br></p>
    `
};

// --- RÉSUMÉ ---
const weaponSummaryData = {
    0: `
        <h3>Passif : Charge QTE</h3>
        <p>QTE : Charge Jauge <span class="stat-boost">+4.5%</span>.<br></p>
    `,
    1: `
        <h3>5 étoiles</h3>
        <p>QTE : Charge Jauge <span class="stat-boost">+12%</span>.<br></p>
    `,
    2: `
        <h3>10 étoiles</h3>
        <p>Atk/Def/PV <span class="stat-boost">+10%</span>.<br></p>
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