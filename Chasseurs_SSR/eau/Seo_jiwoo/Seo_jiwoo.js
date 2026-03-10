/* ==========================================
   LOGIQUE PERSONNAGE (Seo Jiwoo)
   ========================================== */
const charStarsContainer = document.getElementById('char-stars-container');
const charStars = charStarsContainer.querySelectorAll('.star');
const charMessage = document.getElementById('char-message');
const toggleBtn = document.getElementById('toggleBtn');

let charCurrentLevel = 0;
let isSummaryMode = false;

// --- TEXTE COMPLET (MOT POUR MOT + SAUT DE LIGNE APRES POINT) ---
const charFullData = {
    0: `
        <h3>Passif :</h3>
        <p>Lors de l'utilisation des compétences <strong>Frappe du dragon jumeau</strong>, <strong>Ruade du dragon d'eau</strong>, <strong>Coup de pied foudroyant</strong> ou de <strong>Coup de poing éclatant</strong>, l'effet <span class="buff">[Entraînement]</span> se cumule 1 fois.<br>
        Lorsque l'effet <span class="buff">[Entraînement]</span> se cumule 3 fois, l'effet <span class="buff">[Entraînement du dragon d'eau]</span> s'applique.<br>
        Lorsque l'effet <span class="buff">[Entraînement du dragon d'eau]</span> est actif, le temps de rechargement de <strong>Ruade du dragon d'eau</strong> et <strong>Coup de pied foudroyant</strong> se réinitialise, et ces compétences deviennent respectivement <strong>Attaque lourde : Ruade du dragon d'eau</strong> et <strong>Attaque lourde: Coup de pied foudroyant</strong>.<br></p>
        <div class="detail-box">
            <h4><span class="buff">[Entraînement]</span></h4>
            <p>Durée: infinie (cumulable jusqu'à 3 fois)</p>
        </div>
        <div class="detail-box">
            <h4><span class="buff">[Entraînement du dragon d'eau]</span></h4>
            <p>Lors de l'utilisation des compétences <strong>Attaque lourde: Ruade du dragon d'eau</strong> ou <strong>Attaque lourde: Coup de pied foudroyant</strong>, l'effet se dissipe.<br>
            Durée: infinie</p>
        </div>
    `,
    1: `
        <h3>1 étoile :</h3>
        <p>Les dégâts des compétences <strong>Attaque lourde: Ruade du dragon d'eau</strong> et <strong>Attaque lourde: Coup de pied foudroyant</strong> augmentent de <span class="stat-boost">150%</span>.<br></p>
    `,
    2: `
        <h3>2 étoiles :</h3>
        <p>Augmente l'efficacité de <span class="buff">[Bris]</span> de l'utilisateur de <span class="stat-boost">15%</span>.<br>
        Augmente l'efficacité de <span class="buff">[Bris]</span> de la compétence <strong>Attaque lourde: Coup de pied foudroyant</strong> de l'utilisateur de <span class="stat-boost">50%</span>.<br></p>
    `,
    3: `
        <h3>3 étoiles :</h3>
        <p>L'utilisateur récupère <strong>50 PM</strong> en appliquant <span class="buff">[Entraînement du dragon d'eau]</span>.<br></p>
    `,
    4: `
        <h3>4 étoiles :</h3>
        <p>Les PV max de l'utilisatrice augmentent à hauteur de <span class="stat-boost">15%</span> de ses Dégâts de coup critique supplémentaires.<br></p>
    `,
    5: `
        <h3>5 étoiles :</h3>
        <p>Le Taux de coup critique et les Dégâts de compétence de <strong>Attaque lourde : Ruade du dragon d'eau</strong>, <strong>Attaque lourde: Coup de pied foudroyant</strong> et <strong>Coup létal: Frappe de transformation du dragon d'eau</strong> augmentent de <span class="stat-boost">32%</span>.<br></p>
    `
};

// --- RÉSUMÉ (COURT) ---
const charSummaryData = {
    0: `
        <h3>Passif : L'Héritière du Dragon</h3>
        <p>Compétences = cumuls <span class="buff">[Entraînement]</span>.<br>
        3 cumuls = <span class="buff">[Entraînement du dragon d'eau]</span> (Reset CD + Compétences deviennent <strong>Attaque Lourde</strong>).<br>
        Consommé à l'utilisation.</p>
    `,
    1: `
        <h3>1 étoile</h3>
        <p>Dégâts Attaques Lourdes <span class="stat-boost">+150%</span>.<br></p>
    `,
    2: `
        <h3>2 étoiles</h3>
        <p>Efficacité Bris <span class="stat-boost">+15%</span>.<br>
        Efficacité Bris (Coup de pied foudroyant lourd) <span class="stat-boost">+50%</span>.<br></p>
    `,
    3: `
        <h3>3 étoiles</h3>
        <p>Activation [Entraînement du dragon d'eau] rend <strong>50 PM</strong>.<br></p>
    `,
    4: `
        <h3>4 étoiles</h3>
        <p>PV Max augmentent selon Dégâts Crit supp (<span class="stat-boost">15%</span> ratio).<br></p>
    `,
    5: `
        <h3>5 étoiles</h3>
        <p>Taux Crit et Dégâts Compétences (Lourdes/Ultime) <span class="stat-boost">+32%</span>.<br></p>
    `
};

// --- EVENTS PERSONNAGE ---
renderCharContent();

toggleBtn.addEventListener('click', function() {
    isSummaryMode = !isSummaryMode;
    this.textContent = isSummaryMode ? "Texte Complet" : "Mode Résumé";
    this.classList.toggle('active', isSummaryMode);
    renderCharContent();
});

charStars.forEach(star => {
    star.addEventListener('click', function () {
        const clickedValue = parseInt(this.getAttribute('data-value'));
        
        if (clickedValue === charCurrentLevel) {
            charCurrentLevel = clickedValue - 1;
        } else {
            charCurrentLevel = clickedValue;
        }
        
        updateCharStars(charCurrentLevel);
        renderCharContent();
    });
});

function updateCharStars(level) {
    charStars.forEach(star => {
        const starValue = parseInt(star.getAttribute('data-value'));
        star.classList.toggle('filled', starValue <= level);
    });
}

function renderCharContent() {
    const dataSource = isSummaryMode ? charSummaryData : charFullData;
    charMessage.innerHTML = dataSource[charCurrentLevel];
}


/* ==========================================
   LOGIQUE ARME (Bravoure Inégalée)
   ========================================== */
const weaponStarsContainer = document.getElementById('weapon-stars-container');
const weaponStars = weaponStarsContainer.querySelectorAll('.star');
const weaponMessage = document.getElementById('weapon-message');

let weaponCurrentLevel = 0;

const weaponData = {
    0: `
        <h3>Avancement 0 :</h3>
        <p>Augmente les dégâts de coup critique de l'utilisateur de <span class="stat-boost">5%</span>.<br>
        Lorsque l'utilisatrice lance <strong>Ruade du dragon d'eau</strong>, <strong>Coup de pied foudroyant</strong>, <strong>Attaque lourde: Ruade du dragon d'eau</strong> ou <strong>Attaque lourde: Coup de pied foudroyant</strong>, augmente les dégâts de coup critique de <span class="stat-boost">1%</span> (cumulable jusqu'à 20 fois).<br></p>
    `,
    1: `
        <h3>Avancement 5 étoiles :</h3>
        <p>Augmente les dégâts de coup critique de l'utilisatrice de <span class="stat-boost">20%</span>.<br>
        Lorsque l'utilisatrice lance <strong>Ruade du dragon d'eau</strong>, <strong>Coup de pied foudroyant</strong>, <strong>Attaque lourde: Ruade du dragon d'eau</strong> ou <strong>Attaque lourde: Coup de pied foudroyant</strong>, augmente les dégâts de coup critique de <span class="stat-boost">6 %</span> (cumulable jusqu'à 20 fois).<br></p>
    `,
    2: `
        <h3>Avancement 10 étoiles :</h3>
        <p>Augmente l'Attaque, la Défense et les PV de l'utilisateur de <span class="stat-boost">15%</span>.<br></p>
    `
};

// Initialisation
displayWeaponMessage(0);

weaponStars.forEach(star => {
    star.addEventListener('click', function () {
        const clickedValue = parseInt(this.getAttribute('data-value'));

        if (clickedValue === weaponCurrentLevel) {
            weaponCurrentLevel = clickedValue - 1;
        } else {
            weaponCurrentLevel = clickedValue;
        }
        
        updateWeaponStars(weaponCurrentLevel);
        displayWeaponMessage(weaponCurrentLevel);
    });
});

function updateWeaponStars(level) {
    weaponStars.forEach(star => {
        const starValue = parseInt(star.getAttribute('data-value'));
        star.classList.toggle('filled', starValue <= level);
    });
}

function displayWeaponMessage(level) {
    weaponMessage.innerHTML = weaponData[level];
}