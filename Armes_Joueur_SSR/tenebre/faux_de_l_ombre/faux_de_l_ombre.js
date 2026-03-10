/* ==========================================
   LOGIQUE ARME (Faux de l'ombre)
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
        <p>Lorsque la compétence <strong>Récolte d'esprits</strong> est utilisée, elle consomme <span class="stat-boost">5%</span> des PV actuels et augmente les dégâts de compétence de <span class="stat-boost">100%</span>.<br></p>
    `,
    1: `
        <h3>1 étoile :</h3>
        <p>Lorsque les PV actuels de l'utilisateur sont inférieurs à 70%, l'effet <span class="buff">[Tranchant des ténèbres]</span> s'applique.<br></p>
        <div class="detail-box">
            <h4><span class="buff">[Tranchant des ténèbres]</span></h4>
            <p>Augmente le Taux de coup critique de l'utilisateur de <span class="stat-boost">25%</span>.<br></p>
        </div>
    `,
    2: `
        <h3>2 étoiles :</h3>
        <p>Vos dégâts de ténèbres augmentent de <span class="stat-boost">10%</span>.<br></p>
    `,
    3: `
        <h3>3 étoiles :</h3>
        <p>Lorsque les PV actuels de l'utilisateur sont à 60% ou en dessous, <span class="stat-boost">0.4%</span> des PV actuels sont restaurés dès que la compétence touche sa cible.<br></p>
    `,
    4: `
        <h3>4 étoiles :</h3>
        <p>Le temps de rechargement de la compétence <strong>Récolte d'esprits</strong> diminue de <span class="stat-boost">20 %</span>.<br></p>
    `,
    5: `
        <h3>5 étoiles :</h3>
        <p>Les dégâts subis augmentent de <span class="stat-boost">15%</span>, mais l'Attaque augmente de <span class="stat-boost">15%</span>.<br></p>
    `
};

// --- RÉSUMÉ (COURT) ---
const weaponSummaryData = {
    0: `
        <h3>Passif : Moissonneur d'Âmes</h3>
        <p>Récolte d'esprits : Coût 5% PV = Dégâts <span class="stat-boost">+100%</span>.<br></p>
    `,
    1: `
        <h3>1 étoile</h3>
        <p>PV < 70% = <span class="buff">[Tranchant des ténèbres]</span>.<br>
        [Tranchant] : Crit Rate <span class="stat-boost">+25%</span>.</p>
    `,
    2: `
        <h3>2 étoiles</h3>
        <p>Dégâts Ténèbres <span class="stat-boost">+10%</span>.<br></p>
    `,
    3: `
        <h3>3 étoiles</h3>
        <p>PV <= 60% : Touche = Regen <span class="stat-boost">0.4%</span> PV actuels.<br></p>
    `,
    4: `
        <h3>4 étoiles</h3>
        <p>CD Récolte d'esprits <span class="stat-boost">-20%</span>.<br></p>
    `,
    5: `
        <h3>5 étoiles</h3>
        <p>Sacrifice : Dégâts subis <span class="stat-boost">+15%</span> pour Attaque <span class="stat-boost">+15%</span>.<br></p>
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