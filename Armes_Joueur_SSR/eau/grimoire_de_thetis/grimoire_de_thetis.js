/* ==========================================
   LOGIQUE ARME (Grimoire de Thetis)
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
        <p>Lorsque la compétence <strong>Jet d'eau</strong> touche sa cible, elle a <span class="stat-boost">100%</span> de chances de lui appliquer l'effet <span class="buff">[Glace gelée]</span>.<br></p>
        <div class="detail-box">
            <h4><span class="buff">[Glace gelée]</span></h4>
            <p>Applique l'effet <span class="buff">[Gel]</span> à la cible et l'interrompt.<br>
            Lorsque cet effet expire, il inflige des dégâts supplémentaires équivalents à <span class="stat-boost">10%</span> des dégâts subis pendant la durée de l'effet.<br>
            Durée: 4 seconde(s)</p>
        </div>
    `,
    1: `
        <h3>1 étoile :</h3>
        <p>L'effet <span class="buff">[Erosion profonde]</span> s'applique également aux cibles affectées par l'effet <span class="buff">[Glace gelée]</span>.<br></p>
        <div class="detail-box">
            <h4><span class="buff">[Érosion profonde]</span></h4>
            <p>Augmente les dégâts de Faiblesse élémentaire subis par l'ennemi de <span class="stat-boost">24%</span>.<br>
            Durée: 15 seconde(s)</p>
        </div>
    `,
    2: `
        <h3>2 étoiles :</h3>
        <p>Vos dégâts d'eau augmentent de <span class="stat-boost">10%</span>.<br></p>
    `,
    3: `
        <h3>3 étoiles :</h3>
        <p>Lorsque l'effet <span class="buff">[Glace gelée]</span> expire, les dégâts supplémentaires de l'utilisateur passent à <span class="stat-boost">20%</span>.<br></p>
    `,
    4: `
        <h3>4 étoiles :</h3>
        <p>Le temps de rechargement de <strong>Jet d'eau</strong> diminue de <span class="stat-boost">20%</span>.<br></p>
    `,
    5: `
        <h3>5 étoiles :</h3>
        <p>Les dégâts infligés aux cibles affectées par <span class="buff">[Gel]</span> augmentent de <span class="stat-boost">50%</span>.<br></p>
    `
};

// --- RÉSUMÉ (COURT) ---
const weaponSummaryData = {
    0: `
        <h3>Passif : Prison de Glace</h3>
        <p>Jet d'eau = <span class="buff">[Glace gelée]</span> (Gel, Interruption).<br>
        Explosion finale : 10% des dégâts subis pendant l'effet.</p>
    `,
    1: `
        <h3>1 étoile</h3>
        <p>Glace gelée = <span class="buff">[Érosion profonde]</span>.<br>
        [Érosion] : Dégâts Faiblesse élémentaire <span class="stat-boost">+24%</span>.</p>
    `,
    2: `
        <h3>2 étoiles</h3>
        <p>Dégâts Eau <span class="stat-boost">+10%</span>.<br></p>
    `,
    3: `
        <h3>3 étoiles</h3>
        <p>Dégâts explosion Glace gelée passent à <span class="stat-boost">20%</span>.<br></p>
    `,
    4: `
        <h3>4 étoiles</h3>
        <p>CD Jet d'eau <span class="stat-boost">-20%</span>.<br></p>
    `,
    5: `
        <h3>5 étoiles</h3>
        <p>Dégâts sur cible Gelée <span class="stat-boost">+50%</span>.<br></p>
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