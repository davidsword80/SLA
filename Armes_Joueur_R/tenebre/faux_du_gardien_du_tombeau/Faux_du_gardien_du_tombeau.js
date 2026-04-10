/* ==========================================
   LOGIQUE ARME (Faux du gardien du tombeau)
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
        <p>Lorsque l'utilisateur terrasse un ennemi, applique l'effet <span class="buff">[Sanctuaire]</span>.<br></p>
        <div class="detail-box">
            <h4><span class="buff">[Sanctuaire]</span></h4>
            <p>Augmente l'Attaque de l'utilisateur de <span class="stat-boost">2 %</span> (cumulable jusqu'à 10 fois).<br>
            Durée : 20 seconde(s)</p>
        </div>
    `,
    1: `
        <h3>1 étoile :</h3>
        <p>Les dégâts infligés aux monstres non-boss avec <strong>Lame de retour</strong> augmentent de <span class="stat-boost">30 %</span>.<br></p>
    `,
    2: `
        <h3>2 étoiles :</h3>
        <p>Augmente les dégâts de ténèbres de l'utilisateur de <span class="stat-boost">6 %</span>.<br></p>
    `,
    3: `
        <h3>3 étoiles :</h3>
        <p>Les dégâts de la lame qui revient pendant <strong>Lame de retour</strong> augmentent de <span class="stat-boost">100 %</span>.<br></p>
    `,
    4: `
        <h3>4 étoiles :</h3>
        <p>Réduit le temps de rechargement de <strong>Lame de retour</strong> de <span class="stat-boost">10 %</span>.<br></p>
    `,
    5: `
        <h3>5 étoiles :</h3>
        <p>Lorsque l'utilisateur terrasse un ennemi, réduit le temps de rechargement de <strong>Lame de retour</strong> de <span class="stat-boost">3</span> seconde(s).<br></p>
    `
};

// --- RÉSUMÉ ---
const weaponSummaryData = {
    0: `
        <h3>Passif : Sanctuaire</h3>
        <p>Ennemi terrassé = <span class="buff">[Sanctuaire]</span>.<br>
        Attaque <span class="stat-boost">+2 %</span> par pile (max 10).</p>
    `,
    1: `
        <h3>1 étoile</h3>
        <p>Dégâts aux monstres (non-boss) <span class="stat-boost">+30 %</span> avec Lame de retour.<br></p>
    `,
    2: `
        <h3>2 étoiles</h3>
        <p>Dégâts Ténèbres <span class="stat-boost">+6 %</span>.<br></p>
    `,
    3: `
        <h3>3 étoiles</h3>
        <p>Dégâts de la lame (retour) <span class="stat-boost">+100 %</span>.<br></p>
    `,
    4: `
        <h3>4 étoiles</h3>
        <p>CD Lame de retour <span class="stat-boost">-10 %</span>.<br></p>
    `,
    5: `
        <h3>5 étoiles</h3>
        <p>Ennemi terrassé = CD Lame de retour <span class="stat-boost">-3s</span>.<br></p>
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