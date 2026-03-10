/* ==========================================
   LOGIQUE PERSONNAGE (Min Byeonggu)
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
        <p>Lors de l'appel d'un chasseur ou de l'utilisation de <strong>Châtiment divin</strong>, l'effet <span class="buff">[Dissimulation]</span>s'applique.<br></p>
        <div class="detail-box">
            <h4><span class="buff">[Dissimulation]</span></h4>
            <p>Réduit les dégâts subis de <span class="stat-boost">50%</span>.<br>
            Améliore un effet de compétence spécifique.<br>
            Si l'utilisateur est touché, l'effet [Dissimulation] se dissipe.<br>
            Durée: 10 seconde(s)</p>
        </div>
    `,
    1: `
        <h3>1 étoile :</h3>
        <p>Le Taux de coup critique et les Dégâts de coup critique de tous les membres de l'équipe augmentent de <span class="stat-boost">12%</span>.<br></p>
    `,
    2: `
        <h3>2 étoiles :</h3>
        <p>Les PV de l'utilisateur augmentent de <span class="stat-boost">8%</span>.<br></p>
    `,
    3: `
        <h3>3 étoiles :</h3>
        <p>Lors de l'utilisation de <strong>Lueur vive</strong>, toute l'équipe récupère instantanément des PV à hauteur de <span class="stat-boost">2%</span> des PV max de Min Byeonggu.<br></p>
    `,
    4: `
        <h3>4 étoiles :</h3>
        <p>Le Taux de remplissage de la jauge de puissance de Min Byeonggu augmente de <span class="stat-boost">10%</span>.<br></p>
    `,
    5: `
        <h3>5 étoiles :</h3>
        <p>Lors de l'utilisation de <strong>Bénédiction céleste</strong>, les dégâts de la prochaine compétence ultime du membre de l'équipe ayant la Puissance totale la plus élevée augmentent de <span class="stat-boost">50%</span>.<br></p>
    `
};

// --- RÉSUMÉ (COURT) ---
const charSummaryData = {
    0: `
        <h3>Passif : Soutien de l'Ombre</h3>
        <p>Châtiment divin / Appel = <span class="buff">[Dissimulation]</span>.<br>
        [Dissimulation] : Réduction dégâts subis <span class="stat-boost">50%</span> + Amélioration compétence.<br>
        Se dissipe si touché (10s).</p>
    `,
    1: `
        <h3>1 étoile</h3>
        <p>Buff Équipe : Taux Critique et Dégâts Critique <span class="stat-boost">+12%</span>.<br></p>
    `,
    2: `
        <h3>2 étoiles</h3>
        <p>PV Max <span class="stat-boost">+8%</span>.<br></p>
    `,
    3: `
        <h3>3 étoiles</h3>
        <p>Lueur vive : Soin instantané Équipe (<span class="stat-boost">2%</span> PV Max de Min).<br></p>
    `,
    4: `
        <h3>4 étoiles</h3>
        <p>Gain Jauge de Puissance <span class="stat-boost">+10%</span>.<br></p>
    `,
    5: `
        <h3>5 étoiles</h3>
        <p>Bénédiction céleste : Boost Ultime du meilleur allié (<span class="stat-boost">+50%</span> Dégâts).<br></p>
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
   LOGIQUE ARME (Sommeil éternel)
   ========================================== */
const weaponStarsContainer = document.getElementById('weapon-stars-container');
const weaponStars = weaponStarsContainer.querySelectorAll('.star');
const weaponMessage = document.getElementById('weapon-message');

let weaponCurrentLevel = 0;

const weaponData = {
    0: `
        <h3>Avancement 0 :</h3>
        <p>Augmente les PV de l'utilisateur de <span class="stat-boost">2.5%</span>.<br>
        Lorsque l'utilisateur lance <strong>Bénédiction céleste</strong>, les dégâts infligés par l'utilisateur et les membres de l'équipe augmentent de <span class="stat-boost">4%</span> pendant 16 seconde(s)</p>
    `,
    1: `
        <h3>Avancement 5 étoiles :</h3>
        <p>Augmente les PV de l'utilisateur de <span class="stat-boost">10%</span>.<br>
        Lorsque l'utilisateur lance <strong>Bénédiction céleste</strong>, les dégâts infligés par l'utilisateur et les membres de l'équipe augmentent de <span class="stat-boost">16%</span> pendant 16 seconde(s)</p>
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