/* ==========================================
   LOGIQUE ARME (Fauchon gelé)
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
        <p>Lorsque la compétence <strong>Bourrasque glaciale</strong> touche sa cible, elle a <span class="stat-boost">20%</span> de chances de lui appliquer l'effet <span class="buff">[Gel]</span>.<br></p>
        <div class="detail-box">
            <h4><span class="buff">[Gel]</span></h4>
            <p>Cette compétence interrompt la cible.<br>
            Durée: 2 seconde(s)</p>
        </div>
    `,
    1: `
        <h3>1 étoile :</h3>
        <p>Lorsque la compétence <strong>Bourrasque glaciale</strong> est utilisée sur des cibles affectées par <span class="buff">[Gel]</span>, l'effet <span class="buff">[Érosion]</span> s'applique.<br></p>
        <div class="detail-box">
            <h4><span class="buff">[Érosion]</span></h4>
            <p>Augmente les dégâts infligés aux cibles dotées d'une faiblesse élémentaire de <span class="stat-boost">12%</span>.<br>
            Durée: 15 seconde(s)</p>
        </div>
    `,
    2: `
        <h3>2 étoiles :</h3>
        <p>Vos dégâts d'eau augmentent de <span class="stat-boost">8%</span>.<br></p>
    `,
    3: `
        <h3>3 étoiles :</h3>
        <p>Modification des effets de la compétence <span class="buff">[Bourrasque glaciale]</span>: Peut être utilisée jusqu'à 2 fois Réduit le temps de rechargement de 3 seconde(s).<br></p>
    `,
    4: `
        <h3>4 étoiles :</h3>
        <p>Le temps de rechargement de <span class="buff">[Bourrasque glaciale]</span> diminue de <span class="stat-boost">15 %</span>.<br></p>
    `,
    5: `
        <h3>5 étoiles :</h3>
        <p>L'effet <span class="buff">[Erosion]</span> peut se cumuler jusqu'à 2 fois.<br></p>
    `
};

// --- RÉSUMÉ (COURT) ---
const weaponSummaryData = {
    0: `
        <h3>Passif : Lame de Givre</h3>
        <p>Bourrasque glaciale : 20% chance <span class="buff">[Gel]</span> (Stun 2s).<br></p>
    `,
    1: `
        <h3>1 étoile</h3>
        <p>Bourrasque sur Gel = <span class="buff">[Érosion]</span>.<br>
        [Érosion] : Dégâts faiblesse élémentaire <span class="stat-boost">+12%</span> (15s).</p>
    `,
    2: `
        <h3>2 étoiles</h3>
        <p>Dégâts Eau <span class="stat-boost">+8%</span>.<br></p>
    `,
    3: `
        <h3>3 étoiles</h3>
        <p>Bourrasque glaciale : 2 charges max, CD <span class="stat-boost">-3s</span>.<br></p>
    `,
    4: `
        <h3>4 étoiles</h3>
        <p>CD Bourrasque glaciale <span class="stat-boost">-15%</span>.<br></p>
    `,
    5: `
        <h3>5 étoiles</h3>
        <p>[Érosion] cumulable 2 fois (Max Dégâts faiblesse <span class="stat-boost">+24%</span>).<br></p>
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