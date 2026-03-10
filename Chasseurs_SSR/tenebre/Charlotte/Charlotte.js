/* ==========================================
   LOGIQUE PERSONNAGE (Charlotte)
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
        <p>Lors de l'utilisation de <strong>Ruée</strong>, cette dernière devient une compétence à effet de charge dont la trajectoire peut être contrôlée.<br>
        Lorsque le mode d'attaque de cette Ruée est actif, Charlotte obtient un <span class="buff">[Bouclier]</span> équivalent à <span class="stat-boost">20%</span> de sa défense tant que la Ruée est activée.<br>
        <strong>Prends ça !</strong> devient disponible après avoir utilisé 2 fois des attaques de base de palier 3, contrairement à la règle habituelle qui demande de charger la jauge de puissance en utilisant des compétences et supprime le temps de rechargement.<br>
        (Temps de rechargement: 40 seconde(s))<br>
        Lors de <strong>Prends ça !</strong>, la compétence augmente les dégâts de <strong>Harper! À l'aide !</strong> de <span class="stat-boost">50 %</span> pendant 10 seconde(s)<br>
        La stat de Dégâts de coup critique de l'utilisatrice augmente à hauteur de <span class="stat-boost">10%</span> de la stat de dégâts augmentés.<br></p>
    `,
    1: `
        <h3>1 étoile :</h3>
        <p>Après avoir utilisé une attaque de base de palier 3 1 fois, <strong>Prends ça !</strong> devient disponible.<br>
        (Temps de rechargement: 20 seconde(s)).<br>
        Lors de <strong>Danse disla</strong>, cette compétence augmente les dégâts de ténèbres de <span class="stat-boost">15%</span> pendant 20 seconde(s).<br></p>
    `,
    2: `
        <h3>2 étoiles :</h3>
        <p>Augmente la Défense de l'utilisatrice de <span class="stat-boost">12%</span>.<br></p>
    `,
    3: `
        <h3>3 étoiles :</h3>
        <p><strong>Prends ça!</strong> devient <strong>Harper! Nous ne faisons qu'un!</strong> <br>
        lorsque Harper prête assistance.<br>
        Les dégâts de l'utilisatrice augmentent aussi de <span class="stat-boost">70%</span></p>
    `,
    4: `
        <h3>4 étoiles :</h3>
        <p>Les attaques de base sont plus rapides et leurs dégâts augmentent de <span class="stat-boost">60%</span>.<br></p>
    `,
    5: `
        <h3>5 étoiles :</h3>
        <p>Lors d'une attaque de base,, l'utilisatrice active l'effet <span class="buff">[Reconnaissance de la poupée]</span>.<br></p>
        <div class="detail-box">
            <h4><span class="buff">[Reconnaissance de la poupée]</span></h4>
            <p>Augmente les dégâts de <strong>Harper ! Nous ne faisons qu'un!</strong> et <strong>Harper! A l'aide !</strong> de <span class="stat-boost">8%</span>.<br>
            Durée: illimitée Cumulable jusqu'à 15 fois.)</p>
        </div>
    `
};

// --- RÉSUMÉ (COURT) ---
const charSummaryData = {
    0: `
        <h3>Passif : Duo Dynamique</h3>
        <p>Ruée contrôlable + <span class="buff">[Bouclier]</span>.<br>
        Attaques de base débloquent <strong>Prends ça !</strong> (Reset CD).<br>
        Prends ça ! booste Harper! À l'aide ! (<span class="stat-boost">+50%</span>).<br>
        Conversion Dégâts Bonus -> Dégâts Crit (<span class="stat-boost">10%</span>).</p>
    `,
    1: `
        <h3>1 étoile</h3>
        <p>Déblocage Prends ça ! plus rapide (1 attaque palier 3).<br>
        Danse disla : Dégâts Ténèbres <span class="stat-boost">+15%</span>.<br></p>
    `,
    2: `
        <h3>2 étoiles</h3>
        <p>Défense <span class="stat-boost">+12%</span>.<br></p>
    `,
    3: `
        <h3>3 étoiles</h3>
        <p>Prends ça! amélioré en <strong>Harper! Nous ne faisons qu'un!</strong>.<br>
        Dégâts globaux <span class="stat-boost">+70%</span>.</p>
    `,
    4: `
        <h3>4 étoiles</h3>
        <p>Attaques de base plus rapides et dégâts <span class="stat-boost">+60%</span>.<br></p>
    `,
    5: `
        <h3>5 étoiles</h3>
        <p>Attaques de base = <span class="buff">[Reconnaissance]</span>.<br>
        Boost dégâts compétences Harper (<span class="stat-boost">+8%</span> par cumul, max 15).</p>
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
   LOGIQUE ARME (Farceuse)
   ========================================== */
const weaponStarsContainer = document.getElementById('weapon-stars-container');
const weaponStars = weaponStarsContainer.querySelectorAll('.star');
const weaponMessage = document.getElementById('weapon-message');

let weaponCurrentLevel = 0;

const weaponData = {
    0: `
        <h3>Avancement 0 :</h3>
        <p>Augmente la Défense de l'utilisatrice de <span class="stat-boost">2%</span>.<br>
        Augmente le Taux de coup critique et les Dégâts de coup critique de <strong>Prends ça !</strong>, <strong>Harper ! Nous ne faisons qu'un!</strong> et <strong>Harper ! À l'aide !</strong> de <span class="stat-boost">4%</span>.<br></p>
    `,
    1: `
        <h3>Avancement 5 étoiles :</h3>
        <p>Augmente la Défense de l'utilisatrice de <span class="stat-boost">12%</span>.<br>
        Augmente le Taux de coup critique et les Dégâts de coup critique de <strong>Prends ça !</strong>, <strong>Harper! Nous ne faisons qu'un!</strong> et <strong>Harper! À l'aide !</strong> de <span class="stat-boost">24%</span>.<br></p>
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