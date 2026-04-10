/* ==========================================
   LOGIQUE ARME (Serment de la Valkyrie)
   ========================================== */
const weaponStarsContainer = document.getElementById('weapon-stars-container');
const weaponStars = weaponStarsContainer.querySelectorAll('.star');
const weaponMessage = document.getElementById('weapon-message');
const toggleBtnWeapon = document.getElementById('toggleBtnWeapon');

let weaponCurrentLevel = 0;
let isWeaponSummary = false;

// --- TEXTE COMPLET ---
const weaponFullData = {
    0: `
        <h3>0 étoile :</h3>
        <p>La Défense de l'utilisatrice augmente de <span class="stat-boost">2%</span>.<br>
        Lorsque l'effet <span class="buff">[Volonté de l'épée]</span> s'active, un effet d'augmentation de la Défense de l'utilisatrice de <span class="stat-boost">1%</span> se déclenche (cumulable jusqu'à 60 fois).<br>
        Durée : illimitée</p>
    `,
    1: `
        <h3>5 étoiles :</h3>
        <p>La Défense de l'utilisatrice augmente de <span class="stat-boost">12%</span>.<br>
        Lorsque l'effet <span class="buff">[Volonté de l'épée]</span> s'active, un effet d'augmentation de la Défense de l'utilisatrice de <span class="stat-boost">6%</span> se déclenche (cumulable jusqu'à 60 fois).<br>
        Durée : illimitée</p>
    `,
    2: `
        <h3>10 étoiles :</h3>
        <p>Augmente l'Attaque, la Défense et les PV de l'utilisatrice de <span class="stat-boost">15%</span>.</p>
    `
};

// --- RÉSUMÉ ---
const weaponSummaryData = {
    0: `
        <h3>0 étoile : Base</h3>
        <p>Défense <span class="stat-boost">+2%</span>.<br>
        Stack Volonté : Défense <span class="stat-boost">+1%</span> (max 60 stacks).</p>
    `,
    1: `
        <h3>5 étoiles</h3>
        <p>Défense <span class="stat-boost">+12%</span>.<br>
        Stack Volonté : Défense <span class="stat-boost">+6%</span> (max 60 stacks).</p>
    `,
    2: `
        <h3>10 étoiles</h3>
        <p>Atk/Def/PV <span class="stat-boost">+15%</span>.</p>
    `
};

// --- EVENTS ---
renderWeaponContent();

toggleBtnWeapon.addEventListener('click', function() {
    isWeaponSummary = !isWeaponSummary;
    this.textContent = isWeaponSummary ? "Texte Complet" : "Mode Résumé";
    this.classList.toggle('active', isWeaponSummary);
    renderWeaponContent();
});

weaponStars.forEach(star => {
    star.addEventListener('click', function () {
        const clickedValue = parseInt(this.getAttribute('data-value'));
        
        // Toggle logic: click on same star to deselect (go back to previous level)
        // Level 0 (Base) -> index 0
        // Star 1 (5*) -> index 1
        // Star 2 (10*) -> index 2
        
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
    const dataSource = isWeaponSummary ? weaponSummaryData : weaponFullData;
    weaponMessage.innerHTML = dataSource[weaponCurrentLevel];
}