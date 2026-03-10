/* ==========================================
   LOGIQUE PERSONNAGE (Kim Sangshik)
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
        <p>Le temps de rechargement de <strong>Choc véloce</strong> diminue de 1 seconde(s) et la jauge de noyau se remplit de <span class="stat-boost">50%</span> lors de l'utilisation de <strong>Tempête tranchante</strong>.<br>
        Le temps de rechargement de <strong>Tempête tranchante</strong> diminue de 1 seconde(s) et la jauge de noyau se remplit de <span class="stat-boost">50%</span> lors de l'utilisation de <strong>Choc véloce</strong>.<br>
        Le temps de rechargement de <strong>Tempête tranchante</strong> et <strong>Choc véloce</strong> diminue de 1 seconde(s) lors de l'utilisation de <strong>Bourrasque perçante</strong>.<br></p>
    `,
    1: `
        <h3>1 étoile :</h3>
        <p>Lorsque Sangshik utilise les compétences <strong>Tempête tranchante</strong>, <strong>Choc véloce</strong> ou <strong>Bourrasque perçante</strong>, son effet de Réduction du temps de rechargement fait passer le temps de rechargement à 2 seconde(s).<br>
        Lorsque Sangshik utilise les compétences <strong>Tempête tranchante</strong> ou <strong>Choc véloce</strong>, <strong>Bourrasque perçante</strong> s'active.<br></p>
    `,
    2: `
        <h3>2 étoiles :</h3>
        <p>Les PV de l'utilisateur augmentent de <span class="stat-boost">10%</span>.<br></p>
    `,
    3: `
        <h3>3 étoiles :</h3>
        <p>L'efficacité de <span class="buff">[Bris]</span> de l'utilisateur augmente de <span class="stat-boost">20%</span>.<br></p>
    `,
    4: `
        <h3>4 étoiles :</h3>
        <p>Augmente la Défense de l'utilisateur de <span class="stat-boost">6 %</span>.<br></p>
    `,
    5: `
        <h3>5 étoiles :</h3>
        <p>Lors de l'utilisation de <strong>Bourrasque perçante</strong>, l'utilisateur récupère 60 des PV de Sangshik.<br></p>
    `
};

// --- RÉSUMÉ (COURT) ---
const charSummaryData = {
    0: `
        <h3>Passif : Maître de l'Épée Rapide</h3>
        <p>Skills = Réduction CD mutuelle (1s) + Regen Jauge (<span class="stat-boost">50%</span>).<br></p>
    `,
    1: `
        <h3>1 étoile</h3>
        <p>Réduction CD forcée à 2s.<br>
        Tempête/Choc = Active <strong>Bourrasque perçante</strong>.<br></p>
    `,
    2: `
        <h3>2 étoiles</h3>
        <p>PV <span class="stat-boost">+10%</span>.<br></p>
    `,
    3: `
        <h3>3 étoiles</h3>
        <p>Efficacité Bris <span class="stat-boost">+20%</span>.<br></p>
    `,
    4: `
        <h3>4 étoiles</h3>
        <p>Défense <span class="stat-boost">+6%</span>.<br></p>
    `,
    5: `
        <h3>5 étoiles</h3>
        <p>Bourrasque perçante = Soin (60 PV).<br></p>
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
   LOGIQUE ARME (La chute de quelqu'un)
   ========================================== */
const weaponStarsContainer = document.getElementById('weapon-stars-container');
const weaponStars = weaponStarsContainer.querySelectorAll('.star');
const weaponMessage = document.getElementById('weapon-message');

let weaponCurrentLevel = 0;

const weaponData = {
    0: `
        <h3>Avancement 0 :</h3>
        <p>Augmente les dégâts de l'Attaque de noyau de l'utilisateur de <span class="stat-boost">4%</span>.<br>
        Lors de l'utilisation d'une Attaque de noyau, les dégâts de la prochaine compétence de base de l'utilisateur augmentent de <span class="stat-boost">4%</span>.<br></p>
    `,
    1: `
        <h3>Avancement 5 étoiles :</h3>
        <p>Augmente les dégâts de l'Attaque de noyau de l'utilisateur de <span class="stat-boost">24%</span>.<br>
        Lors de l'utilisation d'une Attaque de noyau, les dégâts de la prochaine compétence de base de l'utilisateur augmentent de <span class="stat-boost">24%</span>.<br></p>
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