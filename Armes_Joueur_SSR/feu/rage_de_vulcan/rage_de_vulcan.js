/* ==========================================
   LOGIQUE ARME (Rage de Vulcan)
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
        <p>Lors de l'utilisation de <strong>Feu destructeur</strong>, l'effet <span class="buff">[Bénédiction de Vulcan]</span> s'applique.<br></p>
        <div class="detail-box">
            <h4><span class="buff">[Bénédiction de Vulcan]</span></h4>
            <p>Cet effet crée un <span class="buff">[Bouclier]</span> équivalent à <span class="stat-boost">10%</span> de l'Attaque de l'utilisateur et applique l'effet <span class="buff">[Concentration]</span> à chaque Attaque de base et de noyau que subit l'ennemi.<br>
            Durée: 10 seconde(s)</p>
        </div>
        <div class="detail-box">
            <h4><span class="buff">[Concentration]</span></h4>
            <p>Si l'effet expire ou est dissipé, <span class="buff">[Bénédiction de Vulcan]</span> explose et inflige des dégâts équivalents à <span class="stat-boost">400%</span> de l'Attaque de l'utilisateur (cumulable jusqu'à 20 fois).<br>
            L'explosion inflige <span class="stat-boost">20%</span> de dégâts supplémentaires par cumul de <span class="buff">[Concentration]</span>.<br>
            En explosant, <span class="buff">[Bénédiction de Vulcan]</span> supprime toutes les instances de l'effet <span class="buff">[Concentration]</span>.<br>
            À 20 cumuls de l'effet <span class="buff">[Concentration]</span>, <span class="buff">[Bénédiction de Vulcan]</span> explose instantanément et recrée un <span class="buff">[Bouclier]</span> équivalent à <span class="stat-boost">10%</span> de l'Attaque de l'utilisateur.<br>
            Durée: illimitée</p>
        </div>
    `,
    1: `
        <h3>1 étoile :</h3>
        <p>Lorsque l'effet <span class="buff">[Bénédiction de Vulcan]</span> provoque l'explosion, il applique l'effet <span class="buff">[Rage]</span>.<br></p>
        <div class="detail-box">
            <h4><span class="buff">[Rage]</span></h4>
            <p>Augmente l'Attaque de l'utilisateur de <span class="stat-boost">12%</span>.<br>
            Augmente la Vitesse d'attaque de <span class="stat-boost">6%</span>.<br>
            Durée: 15 seconde(s)</p>
        </div>
    `,
    2: `
        <h3>2 étoiles :</h3>
        <p>Vos dégâts de feu augmentent de <span class="stat-boost">10%</span>.<br></p>
    `,
    3: `
        <h3>3 étoiles :</h3>
        <p>Améliore l'effet <span class="buff">[Rage]</span>.<br></p>
        <div class="detail-box">
            <h4><span class="buff">[Rage]</span></h4>
            <p>S'applique même lors de l'utilisation de <strong>Feu destructeur</strong>.<br>
            Augmente l'Attaque de l'utilisateur de <span class="stat-boost">20%</span>.<br>
            Augmente la Vitesse d'attaque de <span class="stat-boost">10%</span>.<br>
            Durée: 15 seconde(s)</p>
        </div>
    `,
    4: `
        <h3>4 étoiles :</h3>
        <p>Le temps de rechargement de <strong>Feu destructeur</strong> diminue de <span class="stat-boost">20%</span>.<br></p>
    `,
    5: `
        <h3>5 étoiles :</h3>
        <p>Pendant que l'effet <span class="buff">[Bouclier]</span> est actif, les dégâts de la compétence <strong>Feu destructeur</strong> augmentent de <span class="stat-boost">50%</span>.<br></p>
    `
};

// --- RÉSUMÉ (COURT) ---
const weaponSummaryData = {
    0: `
        <h3>Passif : Colère Magmatique</h3>
        <p>Feu destructeur = <span class="buff">[Bénédiction]</span> + <span class="buff">[Concentration]</span>.<br>
        [Bénédiction] : Bouclier (<span class="stat-boost">10%</span> Atk).<br>
        [Concentration] : Explosion cumulable à la fin (max 20 stacks, dégâts massifs).</p>
    `,
    1: `
        <h3>1 étoile</h3>
        <p>Explosion = <span class="buff">[Rage]</span> (Atk <span class="stat-boost">+12%</span>, Vitesse <span class="stat-boost">+6%</span>, 15s).</p>
    `,
    2: `
        <h3>2 étoiles</h3>
        <p>Dégâts Feu <span class="stat-boost">+10%</span>.<br></p>
    `,
    3: `
        <h3>3 étoiles</h3>
        <p>[Rage] améliorée : Atk <span class="stat-boost">+20%</span>, Vitesse <span class="stat-boost">+10%</span>.<br>
        S'active aussi sur Feu destructeur.</p>
    `,
    4: `
        <h3>4 étoiles</h3>
        <p>CD Feu destructeur <span class="stat-boost">-20%</span>.<br></p>
    `,
    5: `
        <h3>5 étoiles</h3>
        <p>Sous Bouclier : Dégâts Feu destructeur <span class="stat-boost">+50%</span>.<br></p>
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