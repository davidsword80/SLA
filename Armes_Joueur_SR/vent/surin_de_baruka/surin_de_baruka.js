/* ==========================================
   LOGIQUE ARME (Surin de Baruka)
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
        <p>Lors de l'utilisation de la compétence <strong>Tueur de marcheurs blancs</strong>, l'utilisateur applique l'effet <span class="buff">[Vivacité]</span>.<br></p>
        <div class="detail-box">
            <h4><span class="buff">[Vivacité]</span></h4>
            <p>Augmente les dégâts des attaques dans le dos de <span class="stat-boost">30%</span>.<br>
            Durée: 8 seconde(s)</p>
        </div>
    `,
    1: `
        <h3>1 étoile :</h3>
        <p>Modification des effets de <strong>Tueur de marcheurs blancs</strong>:<br>
        Lorsque cette compétence touche sa cible, l'utilisateur se téléporte derrière elle.<br></p>
    `,
    2: `
        <h3>2 étoiles :</h3>
        <p>Vos dégâts de vent augmentent de <span class="stat-boost">8 %</span>.<br></p>
    `,
    3: `
        <h3>3 étoiles :</h3>
        <p>Lorsque l'utilisateur réussit une attaque dans le dos, il applique l'effet <span class="buff">[Attaque surprise]</span>.<br></p>
        <div class="detail-box">
            <h4><span class="buff">[Attaque surprise]</span></h4>
            <p>Augmente le Taux de coup critique de <span class="stat-boost">20%</span>.<br>
            Durée: 5 seconde(s)<br>
            Temps de rechargement: 5 seconde(s)</p>
        </div>
    `,
    4: `
        <h3>4 étoiles :</h3>
        <p>Le temps de rechargement de <strong>Tueur de marcheurs blancs</strong> diminue de <span class="stat-boost">15%</span>.<br></p>
    `,
    5: `
        <h3>5 étoiles :</h3>
        <p>Fait passer le Taux de coup critique de l'effet <strong>Attaque surprise</strong> à <span class="stat-boost">40%</span>.<br>
        Lorsque la compétence <strong>Foulée de l'ombre</strong> est utilisée, elle applique les effets <span class="buff">[Vivacité et Attaque surprise]</span>.<br></p>
    `
};

// --- RÉSUMÉ (COURT) ---
const weaponSummaryData = {
    0: `
        <h3>Passif : Assassin du Givre</h3>
        <p>Tueur de marcheurs blancs = <span class="buff">[Vivacité]</span>.<br>
        [Vivacité] : Dégâts attaque dos <span class="stat-boost">+30%</span> (8s).</p>
    `,
    1: `
        <h3>1 étoile</h3>
        <p>Tueur de marcheurs blancs : Téléporte derrière la cible.<br></p>
    `,
    2: `
        <h3>2 étoiles</h3>
        <p>Dégâts Vent <span class="stat-boost">+8%</span>.<br></p>
    `,
    3: `
        <h3>3 étoiles</h3>
        <p>Attaque dos = <span class="buff">[Attaque surprise]</span>.<br>
        [Attaque surprise] : Crit Rate <span class="stat-boost">+20%</span> (5s, CD 5s).</p>
    `,
    4: `
        <h3>4 étoiles</h3>
        <p>CD Tueur de marcheurs blancs <span class="stat-boost">-15%</span>.<br></p>
    `,
    5: `
        <h3>5 étoiles</h3>
        <p>[Attaque surprise] améliorée : Crit Rate <span class="stat-boost">+40%</span>.<br>
        Foulée de l'ombre active [Vivacité] + [Attaque surprise].</p>
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