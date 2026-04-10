/* ==========================================
   LOGIQUE PERSONNAGE (Harper)
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
        <p>L'effet <span class="buff">[Super boost magique]</span> est activé au début du combat.<br>
        Lors de <strong>Dérapage au marteau!</strong>, cette compétence active l'effet <span class="buff">[London Drift]</span>.<br></p>
        <div class="detail-box">
            <h4><span class="buff">[Super boost magique]</span></h4>
            <p>Lors de <strong>Dérapage au marteau!</strong>, cette compétence augmente le Taux de coup critique et les Dégâts de coup critique de <span class="stat-boost">5%</span>.<br>
            (Cumulable jusqu'à 4 fois.)<br>
            Durée: illimitée</p>
        </div>
        <div class="detail-box">
            <h4><span class="buff">[La dérive de Londres]</span></h4>
            <p>Augmente les dégâts infligés de <span class="stat-boost">20 %</span>.<br>
            Durée: 10 seconde(s)</p>
        </div>
    `,
    1: `
        <h3>1 étoile :</h3>
        <p>L'utilisation de <strong>L'attendrisseur!</strong> octroie un <span class="buff">[Bouclier]</span> équivalent à <span class="stat-boost">50%</span> des PV de l'utilisatrice.<br>
        Le nombre max de coups de <strong>L'attendrisseur!</strong> augmente de 4 et les dégâts de compétence augmentent de <span class="stat-boost">120%</span>.<br></p>
    `,
    2: `
        <h3>2 étoiles :</h3>
        <p>L'efficacité de <span class="buff">[Bris]</span> augmente de <span class="stat-boost">20%</span>.<br></p>
    `,
    3: `
        <h3>3 étoiles :</h3>
        <p>Lors de <strong>Dérapage au marteau !</strong>, l'utilisatrice attaque instantanément les ennemis dans un rayon de 5 m.<br>
        <span class="buff">[London Drift]</span> est amélioré.<br>
        <strong>Mjöllnir de Harper</strong> devient <strong>Mjöllnir de Harper et Charlotte</strong>.<br>
        Les dégâts de compétence ultime de l'utilisatrice augmentent de <span class="stat-boost">70%</span>.<br></p>
        <div class="detail-box">
            <h4><span class="buff">[La dérive de Londres]</span></h4>
            <p>Augmente les dégâts infligés de <span class="stat-boost">60%</span>.<br>
            Durée: 15 seconde(s)</p>
        </div>
    `,
    4: `
        <h3>4 étoiles :</h3>
        <p>La Défense et les PV de tous les membres de l'équipe augmentent de <span class="stat-boost">8%</span>.<br></p>
    `,
    5: `
        <h3>5 étoiles :</h3>
        <p><strong>Petits morceaux</strong> est amélioré.<br>
        <span class="buff">[Super boost magique]</span> devient <span class="buff">[Super boost magique des jumelles]</span>.<br></p>
        <div class="detail-box">
            <h4><span class="buff">[Petits morceaux]</span></h4>
            <p>Les dégâts de compétence ultime subis par les chasseurs d'élément Ténèbres augmentent de <span class="stat-boost">2%</span>.<br>
            (Cumulable jusqu'à 16 fois.)<br>
            Durée: 30 seconde(s)</p>
        </div>
        <div class="detail-box">
            <h4><span class="buff">[Super boost magique des jumelles]</span></h4>
            <p>Lors de <strong>Dérapage au marteau !</strong>, la compétence augmente le Taux de coup critique et les Dégâts de coup critique de l'utilisatrice de <span class="stat-boost">6%</span>.<br>
            (Cumulable jusqu'à 7 fois.)<br>
            Durée: illimitée</p>
        </div>
    `
};

// --- RÉSUMÉ (COURT) ---
const charSummaryData = {
    0: `
        <h3>Passif : La Petite Terreur</h3>
        <p>Début : <span class="buff">[Super boost]</span>.<br>
        Dérapage = <span class="buff">[London Drift]</span>.<br>
        [Super boost] : Crit Rate/Dmg <span class="stat-boost">+5%</span> (Max 4).<br>
        [London Drift] : Dégâts <span class="stat-boost">+20%</span>.</p>
    `,
    1: `
        <h3>1 étoile</h3>
        <p>L'attendrisseur! = <span class="buff">[Bouclier]</span> (50% PV).<br>
        Coups +4, Dégâts <span class="stat-boost">+120%</span>.<br></p>
    `,
    2: `
        <h3>2 étoiles</h3>
        <p>Efficacité Bris <span class="stat-boost">+20%</span>.<br></p>
    `,
    3: `
        <h3>3 étoiles</h3>
        <p>Dérapage : AoE instantanée.<br>
        Ulti : Dégâts <span class="stat-boost">+70%</span>.<br>
        [London Drift] amélioré (<span class="stat-boost">+60%</span> dégâts).<br></p>
    `,
    4: `
        <h3>4 étoiles</h3>
        <p>Def/PV Équipe <span class="stat-boost">+8%</span>.<br></p>
    `,
    5: `
        <h3>5 étoiles</h3>
        <p><span class="buff">[Petits morceaux]</span> : Debuff Ulti Ténèbres (<span class="stat-boost">+2%</span> par cumul, max 16).<br>
        <span class="buff">[Super boost jumelles]</span> : Crit Rate/Dmg <span class="stat-boost">+6%</span> (Max 7).<br></p>
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
   LOGIQUE ARME (Espiègle)
   ========================================== */
const weaponStarsContainer = document.getElementById('weapon-stars-container');
const weaponStars = weaponStarsContainer.querySelectorAll('.star');
const weaponMessage = document.getElementById('weapon-message');

let weaponCurrentLevel = 0;

const weaponData = {
    0: `
        <h3>Avancement 0 :</h3>
        <p>Les PV de l'utilisatrice augmentent de <span class="stat-boost">4%</span>.<br>
        Lors de l'utilisation de la Compétence ultime, les dégâts de ténèbres des membres de son équipe augmentent de <span class="stat-boost">4%</span> pendant 30 seconde(s).<br></p>
    `,
    1: `
        <h3>Avancement 5 étoiles :</h3>
        <p>Les PV de l'utilisatrice augmentent de <span class="stat-boost">12%</span>.<br>
        Lors de l'utilisation de la Compétence ultime, les dégâts de ténèbres des membres de son équipe augmentent de <span class="stat-boost">12%</span> pendant 30 seconde(s).<br></p>
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