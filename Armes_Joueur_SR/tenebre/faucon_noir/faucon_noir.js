/* ==========================================
   LOGIQUE ARME (Faucon noir)
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
        <p>Si <strong>Évasion</strong> s'active pendant une glissade de l'utilisateur, l'effet <span class="buff">[Évasion extrême]</span> se déclenche.<br>
        L'activation de l'effet <span class="buff">[Évasion extrême]</span> applique l'effet <span class="buff">[Partie de chasse]</span>.<br></p>
        <div class="detail-box">
            <h4><span class="buff">[Partie de chasse]</span></h4>
            <p>Augmente l'Attaque de l'utilisateur de <span class="stat-boost">7%</span> (cumulable jusqu'à 3 fois).<br>
            Durée: 30 seconde(s)</p>
        </div>
    `,
    1: `
        <h3>1 étoile :</h3>
        <p>Lors de l'utilisation de la compétence <strong>Faucon chasseur</strong>, le temps de rechargement des compétences <strong>Foulée de l'ombre</strong>, <strong>Mort</strong> ou <strong>Effondrement</strong> est réinitialisé et activé.<br>
        Taux de réinitialisation: <span class="stat-boost">20%</span> pour <strong>Foulée de l'ombre</strong>, <span class="stat-boost">40%</span> pour <strong>Mort</strong>, <span class="stat-boost">40%</span> pour <strong>Effondrement</strong></p>
    `,
    2: `
        <h3>2 étoiles :</h3>
        <p>Vos dégâts de ténèbres augmentent de <span class="stat-boost">8 %</span>.<br></p>
    `,
    3: `
        <h3>3 étoiles :</h3>
        <p>Modification des effets de la compétence <strong>Faucon chasseur</strong>:<br>
        La compétence peut être utilisée jusqu'à 2 fois.<br></p>
    `,
    4: `
        <h3>4 étoiles :</h3>
        <p>Le temps de rechargement de <strong>Faucon chasseur</strong> diminue de <span class="stat-boost">15%</span>.<br></p>
    `,
    5: `
        <h3>5 étoiles :</h3>
        <p>Lorsque la compétence <strong>Faucon chasseur</strong> est utilisée, elle applique l'effet <span class="buff">[Œil de faucon]</span>.<br></p>
        <div class="detail-box">
            <h4><span class="buff">[Œil de faucon]</span></h4>
            <p>Augmente les dégâts des compétences <strong>Effondrement</strong>, <strong>Mort</strong> et <strong>Foulée de l'ombre</strong> de <span class="stat-boost">30%</span>.<br>
            Durée: 3 seconde(s)</p>
        </div>
    `
};

// --- RÉSUMÉ (COURT) ---
const weaponSummaryData = {
    0: `
        <h3>Passif : Prédateur Silencieux</h3>
        <p>Évasion (glissade) -> <span class="buff">[Évasion extrême]</span> -> <span class="buff">[Partie de chasse]</span>.<br>
        [Partie de chasse] : Attaque <span class="stat-boost">+7%</span> (Max 3 stacks, 30s).</p>
    `,
    1: `
        <h3>1 étoile</h3>
        <p>Faucon chasseur reset CD : Foulée (20%), Mort (40%), Effondrement (40%).<br></p>
    `,
    2: `
        <h3>2 étoiles</h3>
        <p>Dégâts Ténèbres <span class="stat-boost">+8%</span>.<br></p>
    `,
    3: `
        <h3>3 étoiles</h3>
        <p>Faucon chasseur : 2 charges max.<br></p>
    `,
    4: `
        <h3>4 étoiles</h3>
        <p>CD Faucon chasseur <span class="stat-boost">-15%</span>.<br></p>
    `,
    5: `
        <h3>5 étoiles</h3>
        <p>Faucon chasseur = <span class="buff">[Œil de faucon]</span>.<br>
        [Œil] : Dégâts Effondrement/Mort/Foulée <span class="stat-boost">+30%</span> (3s).</p>
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