/* ==========================================
   LOGIQUE PERSONNAGE (Hwang Dongsuk)
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
        <p>Si les PV de l'utilisateur sont à 75% ou au-dessus, les dégâts de compétence augmentent de <span class="stat-boost">16%</span>.<br>
        Si les PV de l'utilisateur sont inférieurs à 50%, applique l'effet <span class="buff">[Vitalité du lézard]</span>.<br></p>
        <div class="detail-box">
            <h4><span class="buff">[Vitalité du lézard]</span></h4>
            <p>Récupère <span class="stat-boost">2.5%</span> de ses PV toutes les 1 seconde(s) (s'active une fois par niveau).<br>
            Durée: 10 seconde(s)</p>
        </div>
    `,
    1: `
        <h3>1 étoile :</h3>
        <p>Lors de l'utilisation de la compétence <strong>Amélioration</strong>, le temps de rechargement de la compétence <strong>Bouclier ardent</strong> se réinitialise.<br>
        Tant que la compétence <span class="buff">[Amélioration]</span> reste activé, le temps de rechargement de la compétence <strong>Bouclier ardent</strong> diminue de <span class="stat-boost">50%</span>.<br></p>
    `,
    2: `
        <h3>2 étoiles :</h3>
        <p>Les PV de l'utilisateur augmentent de <span class="stat-boost">8%</span>.<br></p>
    `,
    3: `
        <h3>3 étoiles :</h3>
        <p>Lors de l'utilisation de la compétence <strong>Amélioration</strong>, un <span class="buff">[Bouclier]</span> est appliqué.<br></p>
        <div class="detail-box">
            <h4><span class="buff">[Bouclier]</span></h4>
            <p>Crée un <span class="buff">[Bouclier]</span> équivalent à <span class="stat-boost">20%</span> des PV max de l'utilisateur.<br>
            Durée: 10 seconde(s)</p>
        </div>
    `,
    4: `
        <h3>4 étoiles :</h3>
        <p>Le temps de rechargement de <strong>Attaque redoutable</strong> diminue de <span class="stat-boost">25%</span>.<br></p>
    `,
    5: `
        <h3>5 étoiles :</h3>
        <p>Lors de l'utilisation de <strong>Attaque redoutable</strong>, l'utilisateur a <span class="stat-boost">50%</span> de chances de réinitialiser le temps de rechargement de la compétence <strong>Attaque redoutable</strong>.<br>
        (Temps de rechargement: 30 seconde(s))</p>
    `
};

// --- RÉSUMÉ (COURT) ---
const charSummaryData = {
    0: `
        <h3>Passif : Ténacité du Lézard</h3>
        <p>PV > 75% = Dégâts Compétence <span class="stat-boost">+16%</span>.<br>
        PV < 50% = <span class="buff">[Vitalité du lézard]</span> (Regen PV <span class="stat-boost">2.5%</span>/sec, 10s).</p>
    `,
    1: `
        <h3>1 étoile</h3>
        <p>Amélioration : Reset CD Bouclier ardent.<br>
        Sous Amélioration : CD Bouclier ardent <span class="stat-boost">-50%</span>.<br></p>
    `,
    2: `
        <h3>2 étoiles</h3>
        <p>PV <span class="stat-boost">+8%</span>.<br></p>
    `,
    3: `
        <h3>3 étoiles</h3>
        <p>Amélioration = <span class="buff">[Bouclier]</span> (20% PV Max, 10s).<br></p>
    `,
    4: `
        <h3>4 étoiles</h3>
        <p>CD Attaque redoutable <span class="stat-boost">-25%</span>.<br></p>
    `,
    5: `
        <h3>5 étoiles</h3>
        <p>Attaque redoutable : 50% chance Reset CD.<br></p>
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
   LOGIQUE ARME (Pilleur d'âme)
   ========================================== */
const weaponStarsContainer = document.getElementById('weapon-stars-container');
const weaponStars = weaponStarsContainer.querySelectorAll('.star');
const weaponMessage = document.getElementById('weapon-message');

let weaponCurrentLevel = 0;

const weaponData = {
    0: `
        <h3>Avancement 0 :</h3>
        <p>Augmente les PV de l'utilisateur de <span class="stat-boost">2%</span>.<br>
        Lorsque l'utilisateur arrive dans un niveau, sa jauge de puissance se remplit de <span class="stat-boost">25%</span>.<br>
        Lorsqu'<strong>Attaque redoutable</strong> touche sa cible, les dégâts de ténèbres subis par la cible augmentent de <span class="stat-boost">1%</span> pendant 15 seconde(s) (cumulable jusqu'à 2 fois).<br></p>
    `,
    1: `
        <h3>Avancement 5 étoiles :</h3>
        <p>Augmente les PV de l'utilisateur de <span class="stat-boost">8 %</span>.<br>
        Lorsque l'utilisateur arrive dans un niveau, sa jauge de puissance se remplit de <span class="stat-boost">100%</span>.<br>
        Lorsqu'<strong>Attaque redoutable</strong> touche sa cible, les dégâts de ténèbres subis par la cible augmentent de <span class="stat-boost">6 %</span> pendant 15 seconde(s) (cumulable jusqu'à 2 fois).<br></p>
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