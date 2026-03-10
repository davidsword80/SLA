/* ==========================================
   LOGIQUE ARME (Planche de surf de marlin gelé)
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
        <p>Lorsque la compétence <strong>Rêve de marlin</strong> est utilisée à la suite de <strong>Ruée</strong>, elle devient <strong>Marlin volant</strong> et augmente les dégâts de l'utilisateur de <span class="stat-boost">30%</span>.<br>
        Lorsque les compétences <strong>Rêve de marlin</strong> ou <strong>Marlin volant</strong> touchent leur cible, l'effet <span class="buff">[Voie du surfeur]</span> est appliqué.<br>
        Lorsque les compétences <strong>Rêve de marlin</strong> ou <strong>Marlin volant</strong> sont utilisées, l'effet <span class="buff">[Super armure]</span> est appliqué.<br></p>
        <div class="detail-box">
            <h4><span class="buff">[Voie du surfeur]</span></h4>
            <p>Augmente les dégâts face aux monstres de type Normal de <span class="stat-boost">1%</span>.<br>
            Durée: infinie (cumulable jusqu'à 999 fois)</p>
        </div>
    `,
    1: `
        <h3>1 étoile :</h3>
        <p>Lorsque la compétence <strong>Rêve de marlin</strong> est utilisée à la suite de <strong>Ruée</strong>, le temps de rechargement des compétences <strong>Rêve de marlin</strong> et <strong>Marlin volant</strong> se réinitialise (temps de rechargement: 30 seconde(s)).<br></p>
    `,
    2: `
        <h3>2 étoiles :</h3>
        <p>Les dégâts d'eau de l'utilisateur augmentent de <span class="stat-boost">10%</span>.<br></p>
    `,
    3: `
        <h3>3 étoiles :</h3>
        <p>Lorsque la compétence <strong>Marlin volant</strong> est utilisée, la compétence <strong>Ruée</strong> se charge 1 fois.<br>
        Augmente les dégâts des compétences <strong>Rêve de marlin</strong> et <strong>Marlin volant</strong> de <span class="stat-boost">30%</span>.<br></p>
    `,
    4: `
        <h3>4 étoiles :</h3>
        <p>Réduit le temps de rechargement des compétences <strong>Rêve de marlin</strong> et <strong>Marlin volant</strong> de <span class="stat-boost">20%</span>.<br></p>
    `,
    5: `
        <h3>5 étoiles :</h3>
        <p>Lorsque l'utilisateur terrasse un ennemi avec <strong>Rêve de marlin</strong> ou <strong>Marlin volant</strong>, l'effet <span class="buff">[Shaka]</span> est appliqué.<br></p>
        <div class="detail-box">
            <h4><span class="buff">[Shaka]</span></h4>
            <p>Augmente l'Attaque de l'utilisateur de <span class="stat-boost">1%</span>.<br>
            Durée: infinie (cumulable jusqu'à 20 fois)</p>
        </div>
    `
};

// --- RÉSUMÉ (COURT) ---
const weaponSummaryData = {
    0: `
        <h3>Passif : Surfeur des Mers</h3>
        <p>Ruée -> Rêve de marlin = <strong>Marlin volant</strong> (Dégâts <span class="stat-boost">+30%</span>).<br>
        Touche = <span class="buff">[Voie du surfeur]</span> (Dégâts monstres normaux <span class="stat-boost">+1%</span>, max 999).<br>
        Utilisation = <span class="buff">[Super armure]</span>.</p>
    `,
    1: `
        <h3>1 étoile</h3>
        <p>Combo Ruée -> Rêve de marlin réinitialise le CD (30s).<br></p>
    `,
    2: `
        <h3>2 étoiles</h3>
        <p>Dégâts Eau <span class="stat-boost">+10%</span>.<br></p>
    `,
    3: `
        <h3>3 étoiles</h3>
        <p>Marlin volant recharge Ruée (1 fois).<br>
        Dégâts Rêve de marlin / Marlin volant <span class="stat-boost">+30%</span>.</p>
    `,
    4: `
        <h3>4 étoiles</h3>
        <p>CD Rêve de marlin / Marlin volant <span class="stat-boost">-20%</span>.<br></p>
    `,
    5: `
        <h3>5 étoiles</h3>
        <p>Kill avec compétence = <span class="buff">[Shaka]</span>.<br>
        [Shaka] : Attaque <span class="stat-boost">+1%</span> (infinie, max 20).</p>
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