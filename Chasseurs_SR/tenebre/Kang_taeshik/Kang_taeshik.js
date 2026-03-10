/* ==========================================
   LOGIQUE PERSONNAGE (Kang Taeshik)
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
        <p>Lorsque les compétences <strong>Lancer de dague</strong>, <strong>Recherche</strong> ou <strong>Assaut</strong> touchent leurs cibles, elles leur appliquent l'effet <span class="buff">[Hémorragie]</span>.<br></p>
        <div class="detail-box">
            <h4><span class="buff">[Hémorragie]</span></h4>
            <p>L'utilisateur inflige des dégâts équivalents à <span class="stat-boost">0.6%</span> des PV actuels de la cible toutes les 3 seconde(s).<br>
            Durée: 30 seconde(s)</p>
        </div>
    `,
    1: `
        <h3>1 étoile :</h3>
        <p>Augmente l'Attaque face aux cibles affectées par <span class="buff">[Hémorragie]</span>.<br></p>
        <div class="detail-box">
            <h4><span class="buff">[Attaque augmentée]</span></h4>
            <p>Augmente l'Attaque de l'utilisateur de <span class="stat-boost">15%</span>.<br>
            Durée: 10 seconde(s)</p>
        </div>
    `,
    2: `
        <h3>2 étoiles :</h3>
        <p>Augmente l'Attaque de l'utilisateur de <span class="stat-boost">5%</span>.<br></p>
    `,
    3: `
        <h3>3 étoiles :</h3>
        <p>Lorsque la compétence <strong>Recherche</strong> touche une cible affectée par <span class="buff">[Hémorragie]</span>, elle lui applique l'effet Augmentation des dégâts subis.<br></p>
        <div class="detail-box">
            <h4><span class="buff">[Dégâts subis augmentés]</span></h4>
            <p>Les dégâts subis par la cible augmentent de <span class="stat-boost">15%</span>.<br>
            Durée: 10 seconde(s)</p>
        </div>
    `,
    4: `
        <h3>4 étoiles :</h3>
        <p>Le temps de rechargement des compétences de Taeshik diminue de <span class="stat-boost">10%</span>.<br></p>
    `,
    5: `
        <h3>5 étoiles :</h3>
        <p>Lorsque Taeshik utilise <strong>Camouflage</strong> face à une cible affectée par <span class="buff">[Hémorragie]</span>, les dégâts augmentent de <span class="stat-boost">100%</span>.<br></p>
    `
};

// --- RÉSUMÉ (COURT) ---
const charSummaryData = {
    0: `
        <h3>Passif : Assassin Sanglant</h3>
        <p>Compétences = <span class="buff">[Hémorragie]</span>.<br>
        [Hémorragie] : DOT (<span class="stat-boost">0.6%</span> PV actuels cible, 30s).</p>
    `,
    1: `
        <h3>1 étoile</h3>
        <p>Contre Hémorragie = <span class="buff">[Attaque augmentée]</span> (<span class="stat-boost">+15%</span>, 10s).</p>
    `,
    2: `
        <h3>2 étoiles</h3>
        <p>Attaque <span class="stat-boost">+5%</span>.<br></p>
    `,
    3: `
        <h3>3 étoiles</h3>
        <p>Recherche sur Hémorragie = <span class="buff">[Debuff Dégâts Subis]</span> (<span class="stat-boost">+15%</span>, 10s).</p>
    `,
    4: `
        <h3>4 étoiles</h3>
        <p>CD Compétences <span class="stat-boost">-10%</span>.<br></p>
    `,
    5: `
        <h3>5 étoiles</h3>
        <p>Camouflage sur Hémorragie = Dégâts <span class="stat-boost">+100%</span>.<br></p>
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
   LOGIQUE ARME (Frénésie Inarrêtable)
   ========================================== */
const weaponStarsContainer = document.getElementById('weapon-stars-container');
const weaponStars = weaponStarsContainer.querySelectorAll('.star');
const weaponMessage = document.getElementById('weapon-message');

let weaponCurrentLevel = 0;

const weaponData = {
    0: `
        <h3>Avancement 0 :</h3>
        <p>Augmente les dégâts des attaques dans le dos de l'utilisateur de <span class="stat-boost">2.5 %</span>.<br>
        Les dégâts de Kang Taeshik face aux cibles affectées par <span class="buff">[Hémorragie]</span> augmentent de <span class="stat-boost">2.5%</span>.<br></p>
    `,
    1: `
        <h3>Avancement 5 étoiles :</h3>
        <p>Augmente les dégâts des attaques dans le dos de l'utilisateur de <span class="stat-boost">10%</span>.<br>
        Les dégâts de Kang Taeshik face aux cibles affectées par <span class="buff">[Hémorragie]</span> augmentent de <span class="stat-boost">10%</span>.<br></p>
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