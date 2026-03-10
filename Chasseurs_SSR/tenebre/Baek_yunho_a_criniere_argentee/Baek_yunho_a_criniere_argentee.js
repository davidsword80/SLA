/* ==========================================
   LOGIQUE PERSONNAGE (Baek Yunho à crinière argentée)
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
        <p>Les dégâts de compétence de l'utilisateur augmentent proportionnellement à hauteur de <span class="stat-boost">50%</span> du ratio de PV perdus par l'utilisateur.<br>
        Lorsque les compétences <strong>Massacre</strong> ou <strong>Approche violente</strong> touchent leur cible, elles lui appliquent l'effet <span class="buff">[Hémorragie]</span>.<br>
        Applique l'effet <span class="buff">[Malédiction de la bête magique]</span> aux cibles immunisées contre l'effet <span class="buff">[Hémorragie]</span>.<br>
        Les dégâts des compétences <strong>Griffes de bête magique</strong> et <strong>Massacre</strong> augmentent de <span class="stat-boost">60%</span> face à des cibles affectées par les effets <span class="buff">[Hémorragie ou Malédiction de la bête magique]</span>.<br></p>
        <div class="detail-box">
            <h4><span class="buff">[Hémorragie]</span></h4>
            <p>Inflige des dégâts équivalents à <span class="stat-boost">1%</span> des PV actuels de l'utilisateur toutes les 3 secondes.<br>
            Durée: 30 seconde(s)</p>
        </div>
        <div class="detail-box">
            <h4><span class="buff">[Malédiction de la bête magique]</span></h4>
            <p>Inflige des dégâts équivalents à <span class="stat-boost">200 %</span> des PV max de Baek Yunho à crinière argentée toutes les 3 secondes.<br>
            Durée: 30 seconde(s)</p>
        </div>
    `,
    1: `
        <h3>1 étoile :</h3>
        <p>Lors de l'utilisation de la compétence <strong>Attaque extrême: Forme animale</strong>, le Taux de coup critique et les Dégâts de coup critique augmentent de <span class="stat-boost">3%</span> toutes les 1 seconde(s) pendant 12 seconde(s).<br>
        Lors de l'utilisation de la compétence <strong>Attaque extrême: Forme animale</strong>, les dégâts subis augmentent à hauteur de <span class="stat-boost">10%</span> des PV actuels de l'utilisateur, mais il profite d'un <span class="buff">[Bouclier]</span> équivalent à <span class="stat-boost">20%</span> de ses PV max.<br>
        <strong>Attaque extrême: Forme animale</strong> ignore l'effet de <span class="buff">[Bouclier]</span> de l'utilisateur et inflige des dégâts à l'utilisateur.<br>
        Lorsque les PV de l'utilisateur sont à <span class="stat-boost">30%</span> ou moins, les dégâts subis par l'utilisateur de <span class="stat-boost">15%</span>.<br></p>
    `,
    2: `
        <h3>2 étoiles :</h3>
        <p>Les PV de l'utilisateur augmentent de <span class="stat-boost">16%</span>.<br></p>
    `,
    3: `
        <h3>3 étoiles :</h3>
        <p>L'utilisateur débute le combat avec <span class="stat-boost">50%</span> de PV en moins.<br>
        Au début du combat, l'utilisateur bénéficie d'un <span class="buff">[Bouclier]</span> équivalent à <span class="stat-boost">60%</span> de ses PV max.<br>
        Durée: illimitée</p>
    `,
    4: `
        <h3>4 étoiles :</h3>
        <p>Les dégâts de l'Attaque de base de l'utilisateur augmentent de <span class="stat-boost">80%</span>.<br></p>
    `,
    5: `
        <h3>5 étoiles :</h3>
        <p>L'augmentation des dégâts de compétence de l'utilisateur passent à <span class="stat-boost">120%</span> du ratio de PV perdus.<br></p>
    `
};

// --- RÉSUMÉ (COURT) ---
const charSummaryData = {
    0: `
        <h3>Passif : Berserker Sauvage</h3>
        <p>Moins de PV = Plus de Dégâts (max <span class="stat-boost">50%</span>).<br>
        Compétences = <span class="buff">[Hémorragie]</span> ou <span class="buff">[Malédiction]</span> (DOT).<br>
        Bonus dégâts <span class="stat-boost">+60%</span> sur cibles saignantes.</p>
    `,
    1: `
        <h3>1 étoile</h3>
        <p>Attaque extrême : Crit Rate/Dmg progressif (<span class="stat-boost">+3%</span>/s).<br>
        Coût PV pour activer, mais <span class="buff">[Bouclier]</span> (20% PV Max).<br>
        Sous 30% PV : Réduction dégâts subis <span class="stat-boost">15%</span>.</p>
    `,
    2: `
        <h3>2 étoiles</h3>
        <p>PV Max <span class="stat-boost">+16%</span>.</p>
    `,
    3: `
        <h3>3 étoiles</h3>
        <p>Début combat : -50% PV, mais gros <span class="buff">[Bouclier]</span> (<span class="stat-boost">60%</span> PV Max).</p>
    `,
    4: `
        <h3>4 étoiles</h3>
        <p>Dégâts Attaque base <span class="stat-boost">+80%</span>.</p>
    `,
    5: `
        <h3>5 étoiles</h3>
        <p>Bonus dégâts sur PV perdus passe à <span class="stat-boost">120%</span>.</p>
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
   LOGIQUE ARME (Âme d'un tigre blanc hurlant)
   ========================================== */
const weaponStarsContainer = document.getElementById('weapon-stars-container');
const weaponStars = weaponStarsContainer.querySelectorAll('.star');
const weaponMessage = document.getElementById('weapon-message');

let weaponCurrentLevel = 0;

const weaponData = {
    0: `
        <h3>Avancement 0 :</h3>
        <p>Augmente les dégâts de lumière de l'utilisateur de <span class="stat-boost">4%</span>.<br>
        Face à des cibles affectées par l'effet <span class="buff">[Flammes blanches]</span>, la Défense de l'utilisateur augmente de <span class="stat-boost">5%</span> pendant 20 seconde(s).<br>
        (Temps de rechargement: 30 seconde(s))</p>
    `,
    1: `
        <h3>Avancement 5 étoiles :</h3>
        <p>Augmente les dégâts de lumière de l'utilisateur de <span class="stat-boost">12%</span>.<br>
        Face à des cibles affectées par l'effet <span class="buff">[Flammes blanches]</span>, la Défense de l'utilisateur augmente de <span class="stat-boost">20 %</span> pendant 20 seconde(s).<br>
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