/* ==========================================
   LOGIQUE PERSONNAGE (Han Songyi)
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
        <p>Les dégâts de l'arme de l'ombre récupérée augmentent de <span class="stat-boost">30%</span> lorsque Songyi utilise la compétence <strong>Récupération</strong> sur les cibles <span class="buff">[empoisonnées]</span>.<br></p>
    `,
    1: `
        <h3>1 étoile :</h3>
        <p>Lors de l'utilisation de la compétence <strong>Récupération</strong>, un <span class="buff">[Bouclier]</span> est appliqué.<br></p>
        <div class="detail-box">
            <h4><span class="buff">[Bouclier]</span></h4>
            <p>Crée un <span class="buff">[Bouclier]</span> équivalent à <span class="stat-boost">15%</span> de l'Attaque de l'utilisateur.<br>
            Durée: 3 seconde(s)</p>
        </div>
    `,
    2: `
        <h3>2 étoiles :</h3>
        <p>Le Taux de coup critique et les Dégâts de coup critique de Songyi augmentent de <span class="stat-boost">5%</span>.<br></p>
    `,
    3: `
        <h3>3 étoiles :</h3>
        <p>Modification des effets de la compétence <strong>Vol prompt</strong>.<br>
        Le nombre d'armes de l'ombre lancées augmente de 3.<br></p>
    `,
    4: `
        <h3>4 étoiles :</h3>
        <p>Augmente l'Attaque de l'utilisateur de <span class="stat-boost">6%</span>.<br></p>
    `,
    5: `
        <h3>5 étoiles :</h3>
        <p>Le temps de rechargement des compétences <strong>Vol prompt</strong> et <strong>Récupération</strong> se réinitialise en utilisant <strong>Rakshasa</strong>.<br></p>
    `
};

// --- RÉSUMÉ (COURT) ---
const charSummaryData = {
    0: `
        <h3>Passif : Assassin de l'Ombre</h3>
        <p>Dégâts arme ombre <span class="stat-boost">+30%</span> sur cibles empoisonnées.<br></p>
    `,
    1: `
        <h3>1 étoile</h3>
        <p>Récupération = <span class="buff">[Bouclier]</span> (<span class="stat-boost">15%</span> Attaque).<br></p>
    `,
    2: `
        <h3>2 étoiles</h3>
        <p>Crit Rate/Dmg <span class="stat-boost">+5%</span>.<br></p>
    `,
    3: `
        <h3>3 étoiles</h3>
        <p>Vol prompt : +3 armes d'ombre lancées.<br></p>
    `,
    4: `
        <h3>4 étoiles</h3>
        <p>Attaque <span class="stat-boost">+6%</span>.<br></p>
    `,
    5: `
        <h3>5 étoiles</h3>
        <p>Rakshasa (Ultime) réinitialise CD Vol prompt & Récupération.<br></p>
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
   LOGIQUE ARME (Premières fleurs)
   ========================================== */
const weaponStarsContainer = document.getElementById('weapon-stars-container');
const weaponStars = weaponStarsContainer.querySelectorAll('.star');
const weaponMessage = document.getElementById('weapon-message');

let weaponCurrentLevel = 0;

const weaponData = {
    0: `
        <h3>Avancement 0 :</h3>
        <p>Augmente les dégâts d'eau infligés par l'utilisatrice de <span class="stat-boost">2.5%</span>.<br>
        Lorsque l'utilisatrice place une arme d'ombre, à l'exception de celles placées à l'aide de <strong>Récupération</strong>, l'effet <span class="buff">[Assassinat prêt]</span> s'active.<br>
        Lorsque l'effet <span class="buff">[Assassinat prêt]</span> s'active, les dégâts de <strong>Récupération</strong> augmentent à hauteur de <span class="stat-boost">10%</span> par cumul pendant 15 seconde(s) (cumulable jusqu'à 3 fois).<br></p>
    `,
    1: `
        <h3>Avancement 5 étoiles :</h3>
        <p>Augmente les dégâts d'eau infligés par l'utilisatrice de <span class="stat-boost">10%</span>.<br>
        Lorsque l'utilisatrice place une arme d'ombre, à l'exception de celles placées à l'aide de <strong>Récupération</strong>, l'effet <span class="buff">[Assassinat prêt]</span> s'active.<br>
        Lorsque l'effet <span class="buff">[Assassinat prêt]</span> s'active, les dégâts de <strong>Récupération</strong> augmentent à hauteur de <span class="stat-boost">20%</span> par cumul pendant 15 seconde(s) (cumulable jusqu'à 3 fois).<br></p>
    `,
    2: `
        <h3>Avancement 10 étoiles :</h3>
        <p>Augmente l'Attaque, la Défense et les PV de l'utilisatrice de <span class="stat-boost">15%</span>.<br></p>
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