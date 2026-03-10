/* ==========================================
   LOGIQUE ARME (Ce qui n'a jamais été)
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
        <p>Augmente les PV de l'utilisatrice de <span class="stat-boost">2%</span>.<br>
        Lorsqu'un personnage quitte le combat, l'utilisatrice et les membres de l'équipe obtiennent un <span class="buff">[Bouclier]</span> équivalent à <span class="stat-boost">2%</span> des PV de Lee Juhee pendant 10 seconde(s). (Temps de rechargement: 30 seconde(s))<br></p>
    `,
    1: `
        <h3>5 étoiles :</h3>
        <p>Augmente les PV de l'utilisatrice de <span class="stat-boost">5%</span>.<br>
        Lorsqu'un personnage quitte le combat, l'utilisatrice et les membres de l'équipe obtiennent un <span class="buff">[Bouclier]</span> équivalent à <span class="stat-boost">5%</span> des PV de Lee Juhee pendant 10 seconde(s). (Temps de rechargement: 30 seconde(s))<br></p>
    `,
    2: `
        <h3>10 étoiles :</h3>
        <p>Augmente l'Attaque, la Défense et les PV de l'utilisateur de <span class="stat-boost">15%</span>.<br></p>
    `
};

// --- RÉSUMÉ ---
const weaponSummaryData = {
    0: `
        <h3>Passif : Souvenir Protecteur</h3>
        <p>PV <span class="stat-boost">+2%</span>.<br>
        Sortie combat : <span class="buff">[Bouclier]</span> équipe (<span class="stat-boost">2%</span> PV Juhee, 10s, CD 30s).</p>
    `,
    1: `
        <h3>5 étoiles</h3>
        <p>PV <span class="stat-boost">+5%</span>.<br>
        Bouclier : <span class="stat-boost">5%</span> PV Juhee.</p>
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