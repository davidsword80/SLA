/* ==========================================
   LOGIQUE ARME (Épée du chevalier)
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
        <p>Lors de l'utilisation de la compétence <strong>Épéiste royal : Épée du jugement</strong>, l'effet <span class="buff">[Chevalerie]</span> est appliqué.<br></p>
        <div class="detail-box">
            <h4><span class="buff">[Chevalerie]</span></h4>
            <p>Augmente la Défense de l'utilisateur de <span class="stat-boost">400</span> (cumulable jusqu'à 7 fois).<br>
            Durée : 15 seconde(s)</p>
        </div>
    `,
    1: `
        <h3>1 étoile :</h3>
        <p>Augmente l'Attaque de l'utilisateur de <span class="stat-boost">400</span> lorsque l'effet <span class="buff">[Chevalerie]</span> se cumule 3 fois.<br></p>
    `,
    2: `
        <h3>2 étoiles :</h3>
        <p>Les dégâts de vent infligés par l'utilisateur augmentent de <span class="stat-boost">6 %</span>.<br></p>
    `,
    3: `
        <h3>3 étoiles :</h3>
        <p>Lorsque l'effet <span class="buff">[Chevalerie]</span> se cumule 5 fois, l'utilisateur récupère des PV à hauteur de <span class="stat-boost">20</span> pour chaque ennemi touché par la compétence.<br>
        (Temps de rechargement : 0.5 seconde(s))</p>
    `,
    4: `
        <h3>4 étoiles :</h3>
        <p>Réduit le temps de rechargement de la compétence <strong>Épéiste royal : Épée du jugement</strong> de <span class="stat-boost">10 %</span>.<br></p>
    `,
    5: `
        <h3>5 étoiles :</h3>
        <p>Applique l'effet <span class="buff">[Purification]</span> toutes les 10 secondes lorsque l'effet <span class="buff">[Chevalerie]</span> se cumule 7 fois.<br>
        La durée de <span class="buff">[Chevalerie]</span> devient illimitée.</p>
    `
};

// --- RÉSUMÉ ---
const weaponSummaryData = {
    0: `
        <h3>Passif : Chevalerie</h3>
        <p>Compétence = <span class="buff">[Chevalerie]</span>.<br>
        Défense <span class="stat-boost">+400</span> par pile (max 7).</p>
    `,
    1: `
        <h3>1 étoile</h3>
        <p>À 3 piles : Attaque <span class="stat-boost">+400</span>.<br></p>
    `,
    2: `
        <h3>2 étoiles</h3>
        <p>Dégâts Vent <span class="stat-boost">+6 %</span>.<br></p>
    `,
    3: `
        <h3>3 étoiles</h3>
        <p>À 5 piles : Soin <span class="stat-boost">20 PV</span> par ennemi touché.<br></p>
    `,
    4: `
        <h3>4 étoiles</h3>
        <p>CD Épée du jugement <span class="stat-boost">-10 %</span>.<br></p>
    `,
    5: `
        <h3>5 étoiles</h3>
        <p>À 7 piles : <span class="buff">[Purification]</span> (10s) + Durée <span class="buff">[Chevalerie]</span> infinie.<br></p>
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