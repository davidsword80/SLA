/* ==========================================
   LOGIQUE PERSONNAGE (Han Se-Mi)
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
        <p>Lors de l'utilisation des compétences <strong>Pousses affûtées</strong>, <strong>Prairie dorée</strong> ou <strong>Lianes de vitalité</strong>, le buff <span class="buff">[Souffle]</span> est appliqué à tous les membres de l'équipe (Temps de rechargement: 15 seconde(s)).<br></p>
        <div class="detail-box">
            <h4><span class="buff">[Souffle]</span></h4>
            <p>Augmente les dégâts de Compétence de base de l'utilisatrice de <span class="stat-boost">10%</span>.<br>
            Augmente également les dégâts de Compétence de base des coéquipiers l'élément Vent de <span class="stat-boost">5%</span>.<br>
            Durée: 25 seconde(s)<br>
            (Cumuls max :2).<br></p>
        </div>
    `,
    1: `
        <h3>1 étoile :</h3>
        <p>Les membres de l'équipe bénéficient de l'effet <span class="buff">[Souffle robuste]</span> lorsqu'ils utilisent leur Compétence ultime.<br></p>
        <div class="detail-box">
            <h4><span class="buff">[Souffle tranchant]</span></h4>
            <p>Applique l'effet ci-dessous à chaque seconde.<br>
            Taux de coup critique: <span class="stat-boost">1%</span> (cumulable jusqu'à 10%) <br>
            Dégâts de coup critique: <span class="stat-boost">1%</span> (cumulable jusqu'à 10%)<br>
            Charge la jauge de puissance de <span class="stat-boost">1%</span><br>
            Durée: 20 seconde(s)</p>
        </div>
    `,
    2: `
        <h3>2 étoiles :</h3>
        <p>Les PV de l'utilisatrice augmentent de <span class="stat-boost">10%</span>.<br></p>
    `,
    3: `
        <h3>3 étoiles :</h3>
        <p>Lorsque les PV de l'utilisatrice sont à 1 ou en dessous de la zone de la compétence <strong>Prairie dorée</strong>, elle devient <span class="buff">[immortelle]</span> pendant 2 seconde(s)<br>
        Lorsque l'effet <span class="buff">[Immortel]</span> se dissipe, elle récupère des PV à hauteur de <span class="stat-boost">30%</span> des PV max de Han Se-Mi.<br>
        Cet effet ne s'active qu'une fois par combat.<br></p>
    `,
    4: `
        <h3>4 étoiles :</h3>
        <p>Les dégâts de vent infligés par tous les membres de l'équipe augmentent de <span class="stat-boost">10%</span>.<br></p>
    `,
    5: `
        <h3>5 étoiles :</h3>
        <p>Lorsque l'utilisatrice quitte le combat ou utilise <strong>Lianes de vitalité</strong>, l'effet <span class="buff">[Unité de la nature]</span> est octroyé à tous les membres de son équipe.<br></p>
        <div class="detail-box">
            <h4><span class="buff">[Unité de la nature]</span></h4>
            <p>Augmente l'Attaque de l'utilisatrice de <span class="stat-boost">10%</span>.<br>
            Augmente les dégâts de vent de <span class="stat-boost">20%</span>.<br>
            Durée: 25 seconde(s)</p>
        </div>
    `
};

// --- RÉSUMÉ (COURT) ---
const charSummaryData = {
    0: `
        <h3>Passif : Gardienne de la Forêt</h3>
        <p>Compétences = <span class="buff">[Souffle]</span> (Équipe).<br>
        [Souffle] : Dégâts Compétence base <span class="stat-boost">+10%</span> (Vent +5%).<br>
        Max 2 cumuls.</p>
    `,
    1: `
        <h3>1 étoile</h3>
        <p>Ultime alliés = <span class="buff">[Souffle tranchant]</span>.<br>
        Stack progressif : Crit Rate/Dmg <span class="stat-boost">+1%</span>/sec (Max 10%).<br>
        Regen Jauge <span class="stat-boost">+1%</span>/sec.</p>
    `,
    2: `
        <h3>2 étoiles</h3>
        <p>PV Max <span class="stat-boost">+10%</span>.<br></p>
    `,
    3: `
        <h3>3 étoiles</h3>
        <p>Mort évitée dans Prairie dorée = <span class="buff">[Immortel]</span> (2s).<br>
        Soin <span class="stat-boost">30%</span> après effet.<br>
        1 fois par combat.</p>
    `,
    4: `
        <h3>4 étoiles</h3>
        <p>Dégâts Vent Équipe <span class="stat-boost">+10%</span>.<br></p>
    `,
    5: `
        <h3>5 étoiles</h3>
        <p>Switch out / Lianes = <span class="buff">[Unité de la nature]</span> (Équipe).<br>
        Attaque <span class="stat-boost">+10%</span>, Dégâts Vent <span class="stat-boost">+20%</span>.</p>
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
   LOGIQUE ARME (L'âge adulte)
   ========================================== */
const weaponStarsContainer = document.getElementById('weapon-stars-container');
const weaponStars = weaponStarsContainer.querySelectorAll('.star');
const weaponMessage = document.getElementById('weapon-message');

let weaponCurrentLevel = 0;

const weaponData = {
    0: `
        <h3>Avancement 0 :</h3>
        <p>Augmente les PV de l'utilisatrice de <span class="stat-boost">4 %</span>.<br>
        Augmente les dégâts subis de <span class="stat-boost">5%</span> pendant 4 seconde(s) face aux cibles touchées par une compétence de Han Se-Mi.<br></p>
    `,
    1: `
        <h3>Avancement 5 étoiles :</h3>
        <p>Augmente les PV de l'utilisatrice de <span class="stat-boost">10%</span>.<br>
        Augmente les dégâts subis de <span class="stat-boost">5%</span> pendant 10 seconde(s) face aux cibles touchées par une compétence de Han Se-Mi.<br></p>
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