/* ==========================================
   LOGIQUE ARME (Arc long de la famille Radir)
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
        <p>Chaque fois que la flèche d'<strong>Éclat de lumière</strong> pénètre une cible, les dégâts infligés par l'utilisateur augmentent de <span class="stat-boost">4%</span> (cumulable jusqu'à 20 fois).<br></p>
    `,
    1: `
        <h3>1 étoile :</h3>
        <p>Lorsque la compétence <strong>Éclat de lumière</strong> est utilisée, la Défense de la cible est ignorée à hauteur de <span class="stat-boost">50%</span>.<br></p>
    `,
    2: `
        <h3>2 étoiles :</h3>
        <p>Vos dégâts de lumière augmentent de <span class="stat-boost">8%</span>.<br></p>
    `,
    3: `
        <h3>3 étoiles :</h3>
        <p>Modification des effets de la compétence <strong>Éclat de lumière</strong>:<br>
        Lorsque les cibles sont touchées par l'onde de choc d'<strong>Éclat de lumière</strong>, elles sont repoussées de 3m et subissent l'effet <span class="buff">[Étourdissement]</span>.<br></p>
        <div class="detail-box">
            <h4><span class="buff">[Étourdissement]</span></h4>
            <p>Cet effet immobilise la cible.<br>
            Durée: 2 seconde(s)</p>
        </div>
    `,
    4: `
        <h3>4 étoiles :</h3>
        <p>Le temps de rechargement d'<strong>Éclat de lumière</strong> diminue de <span class="stat-boost">15%</span>.<br></p>
    `,
    5: `
        <h3>5 étoiles :</h3>
        <p>Augmente les dégâts de toutes les attaques de <span class="stat-boost">25%</span> sur les cibles <span class="buff">[étourdies]</span>.<br></p>
    `
};

// --- RÉSUMÉ (COURT) ---
const weaponSummaryData = {
    0: `
        <h3>Passif : Tir Perçant</h3>
        <p>Flèche pénètre = Dégâts <span class="stat-boost">+4%</span> (max 20 stacks).<br></p>
    `,
    1: `
        <h3>1 étoile</h3>
        <p>Éclat de lumière : Ignore <span class="stat-boost">50%</span> Défense.<br></p>
    `,
    2: `
        <h3>2 étoiles</h3>
        <p>Dégâts Lumière <span class="stat-boost">+8%</span>.<br></p>
    `,
    3: `
        <h3>3 étoiles</h3>
        <p>Éclat de lumière : Repousse 3m + <span class="buff">[Étourdissement]</span> (2s).<br></p>
    `,
    4: `
        <h3>4 étoiles</h3>
        <p>CD Éclat de lumière <span class="stat-boost">-15%</span>.<br></p>
    `,
    5: `
        <h3>5 étoiles</h3>
        <p>Dégâts sur étourdis <span class="stat-boost">+25%</span>.<br></p>
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