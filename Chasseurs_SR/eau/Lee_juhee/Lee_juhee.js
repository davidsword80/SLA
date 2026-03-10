/* ==========================================
   LOGIQUE PERSONNAGE (Lee Juhee)
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
        <p>Augmente les PV de l'utilisateur et des membres de l'équipe de <span class="stat-boost">8%</span>.<br></p>
    `,
    1: `
        <h3>1 étoile :</h3>
        <p>Le Taux de récupération des PV reçus de Juhee augmente de <span class="stat-boost">20%</span>.<br></p>
    `,
    2: `
        <h3>2 étoiles :</h3>
        <p>Les PV de l'utilisateur augmentent de <span class="stat-boost">6 %</span>.<br></p>
    `,
    3: `
        <h3>3 étoiles :</h3>
        <p>Juhee et ses coéquipiers récupèrent 400 de leur mana lorsque Juhee utilise <strong>Cercle de guérison</strong>.<br></p>
    `,
    4: `
        <h3>4 étoiles :</h3>
        <p>Augmente le Taux de récupération naturel du mana de <span class="stat-boost">50%</span>.<br></p>
    `,
    5: `
        <h3>5 étoiles :</h3>
        <p><strong>Cercle de guérison</strong> s'active lorsque Juhee quitte le combat et son temps de rechargement se réinitialise (temps de rechargement: 35 seconde(s)).<br></p>
    `
};

// --- RÉSUMÉ (COURT) ---
const charSummaryData = {
    0: `
        <h3>Passif : Soutien Dévoué</h3>
        <p>PV Équipe <span class="stat-boost">+8%</span>.<br></p>
    `,
    1: `
        <h3>1 étoile</h3>
        <p>Taux récupération soins reçus <span class="stat-boost">+20%</span>.<br></p>
    `,
    2: `
        <h3>2 étoiles</h3>
        <p>PV Max <span class="stat-boost">+6%</span>.<br></p>
    `,
    3: `
        <h3>3 étoiles</h3>
        <p>Cercle de guérison rend 400 Mana à l'équipe.<br></p>
    `,
    4: `
        <h3>4 étoiles</h3>
        <p>Récupération naturelle Mana <span class="stat-boost">+50%</span>.<br></p>
    `,
    5: `
        <h3>5 étoiles</h3>
        <p>Switch out = Cercle de guérison gratuit (Reset CD, 35s CD interne).<br></p>
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
   LOGIQUE ARME (Ce qui n'a jamais été)
   ========================================== */
const weaponStarsContainer = document.getElementById('weapon-stars-container');
const weaponStars = weaponStarsContainer.querySelectorAll('.star');
const weaponMessage = document.getElementById('weapon-message');

let weaponCurrentLevel = 0;

const weaponData = {
    0: `
        <h3>Avancement 0 :</h3>
        <p>Augmente les PV de l'utilisatrice de <span class="stat-boost">2%</span>.<br>
        Lorsqu'un personnage quitte le combat, l'utilisatrice et les membres de l'équipe obtiennent un <span class="buff">[Bouclier]</span> équivalent à <span class="stat-boost">2%</span> des PV de Lee Juhee pendant 10 seconde(s).<br>
        (Temps de rechargement: 30 seconde(s))</p>
    `,
    1: `
        <h3>Avancement 5 étoiles :</h3>
        <p>Augmente les PV de l'utilisatrice de <span class="stat-boost">5%</span>.<br>
        Lorsqu'un personnage quitte le combat, l'utilisatrice et les membres de l'équipe obtiennent un <span class="buff">[Bouclier]</span> équivalent à <span class="stat-boost">5%</span> des PV de Lee Juhee pendant 10 seconde(s).<br>
        (Temps de rechargement: 30 seconde(s))</p>
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