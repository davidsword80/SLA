/* ==========================================
   LOGIQUE PERSONNAGE (Cho_GyuHwan)
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
        <p>Augmente l'Attaque de l'utilisateur face aux cibles affectées par <span class="buff">[Brûlure]</span>.<br></p>
        <div class="detail-box">
            <h4><span class="buff">[Attaque augmentée]</span></h4>
            <p>Augmente l'Attaque de <span class="stat-boost">25%</span>.<br>
            Durée: 10 seconde(s)<br>
            Temps de rechargement: 20 seconde(s)</p>
        </div>
    `,
    1: `
        <h3>1 étoile :</h3>
        <p>L'effet passif de Kyuhwan s'applique même s'il touche une cible affectée par <span class="buff">[Brûlure]</span>.<br></p>
    `,
    2: `
        <h3>2 étoiles :</h3>
        <p>Les Points de mana de Kyuhwan augmentent de <span class="stat-boost">30%</span>.<br></p>
    `,
    3: `
        <h3>3 étoiles :</h3>
        <p>La consommation de PM des compétences de lumière augmente de <span class="stat-boost">25%</span>, mais leur portée et leurs dégâts augmentent de <span class="stat-boost">50%</span>.<br></p>
    `,
    4: `
        <h3>4 étoiles :</h3>
        <p>Augmente le Taux de récupération naturel du mana de <span class="stat-boost">50%</span>.<br></p>
    `,
    5: `
        <h3>5 étoiles :</h3>
        <p>Augment la portée de la compétence <strong>Rayon irradiant</strong> de <span class="stat-boost">20%</span> et lorsque la première attaque touche sa cible, elle lui applique l'effet <span class="buff">[étourdissement]</span>.<br></p>
        <div class="detail-box">
            <h4><span class="buff">[étourdissement]</span></h4>
            <p>La cible est immobilisée.<br>
            Durée: 1 seconde(s)</p>
        </div>
    `
};

// --- RÉSUMÉ (COURT) ---
const charSummaryData = {
    0: `
        <h3>Passif : Mage de Lumière</h3>
        <p>Cible Brûlée = <span class="buff">[Attaque augmentée]</span>.<br>
        [Attaque] : <span class="stat-boost">+25%</span> (10s).</p>
    `,
    1: `
        <h3>1 étoile</h3>
        <p>Passif s'applique sur touche de Brûlure.<br></p>
    `,
    2: `
        <h3>2 étoiles</h3>
        <p>PM Max <span class="stat-boost">+30%</span>.<br></p>
    `,
    3: `
        <h3>3 étoiles</h3>
        <p>Compétences Lumière : Conso PM +25%, mais Portée/Dégâts <span class="stat-boost">+50%</span>.<br></p>
    `,
    4: `
        <h3>4 étoiles</h3>
        <p>Récupération naturelle Mana <span class="stat-boost">+50%</span>.<br></p>
    `,
    5: `
        <h3>5 étoiles</h3>
        <p>Rayon irradiant : Portée +20% + <span class="buff">[Étourdissement]</span> (1s).<br></p>
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
   LOGIQUE ARME (La belle vie)
   ========================================== */
const weaponStarsContainer = document.getElementById('weapon-stars-container');
const weaponStars = weaponStarsContainer.querySelectorAll('.star');
const weaponMessage = document.getElementById('weapon-message');

let weaponCurrentLevel = 0;

const weaponData = {
    0: `
        <h3>Avancement 0 :</h3>
        <p>Augmente l'Attaque de l'utilisateur de <span class="stat-boost">2%</span>.<br>
        Si les PM de l'utilisateur sont à <span class="stat-boost">50%</span> ou au-dessus, les dégâts de son Attaque de noyau, de sa Compétence de base et de sa Compétence QTE augmentent de <span class="stat-boost">10%</span>.<br></p>
    `,
    1: `
        <h3>Avancement 5 étoiles :</h3>
        <p>Augmente l'Attaque de l'utilisateur de <span class="stat-boost">8%</span>.<br>
        Si les PM de l'utilisateur sont à <span class="stat-boost">50%</span> ou au-dessus, les dégâts de son Attaque de noyau, de sa Compétence de base et de sa Compétence QTE augmentent de <span class="stat-boost">40 %</span>.<br></p>
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