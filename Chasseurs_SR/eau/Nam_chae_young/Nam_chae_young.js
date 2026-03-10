/* ==========================================
   LOGIQUE PERSONNAGE (Nam Chae-young)
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
        <p>Les dégâts infligés aux cibles affectées par l'effet <span class="buff">[Gel]</span> augmentent de <span class="stat-boost">20%</span>.<br></p>
    `,
    1: `
        <h3>1 étoile :</h3>
        <p>L'efficacité de <span class="buff">[Bris]</span> de l'utilisateur augmente de <span class="stat-boost">20%</span>.<br></p>
    `,
    2: `
        <h3>2 étoiles :</h3>
        <p>Les PV de l'utilisateur augmentent de <span class="stat-boost">6 %</span>.<br></p>
    `,
    3: `
        <h3>3 étoiles :</h3>
        <p>Augmente les dégâts de <strong>Flèche détonatrice</strong> de <span class="stat-boost">80%</span>.<br></p>
    `,
    4: `
        <h3>4 étoiles :</h3>
        <p>Augmente la portée de l'explosion de <strong>K63 - Grenade de glace</strong>, <strong>Percée glaçante</strong> et <strong>Sommet de l'iceberg</strong> de <span class="stat-boost">20%</span>.<br></p>
    `,
    5: `
        <h3>5 étoiles :</h3>
        <p>La durée de l'effet <span class="buff">[Gel]</span> de <strong>K63 - Grenade de glace</strong>, <strong>Sommet de l'iceberg</strong> et <strong>Flèche détonatrice</strong> passe à 3 seconds.<br></p>
    `
};

// --- RÉSUMÉ (COURT) ---
const charSummaryData = {
    0: `
        <h3>Passif : Ranger de Glace</h3>
        <p>Dégâts sur cible <span class="buff">[Gelée]</span> <span class="stat-boost">+20%</span>.<br></p>
    `,
    1: `
        <h3>1 étoile</h3>
        <p>Efficacité Bris <span class="stat-boost">+20%</span>.<br></p>
    `,
    2: `
        <h3>2 étoiles</h3>
        <p>PV <span class="stat-boost">+6%</span>.<br></p>
    `,
    3: `
        <h3>3 étoiles</h3>
        <p>Flèche détonatrice : Dégâts <span class="stat-boost">+80%</span>.<br></p>
    `,
    4: `
        <h3>4 étoiles</h3>
        <p>Portée Explosion compétences <span class="stat-boost">+20%</span>.<br></p>
    `,
    5: `
        <h3>5 étoiles</h3>
        <p>Durée <span class="buff">[Gel]</span> passe à 3s.<br></p>
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
   LOGIQUE ARME (Miséricorde du tueur)
   ========================================== */
const weaponStarsContainer = document.getElementById('weapon-stars-container');
const weaponStars = weaponStarsContainer.querySelectorAll('.star');
const weaponMessage = document.getElementById('weapon-message');

let weaponCurrentLevel = 0;

const weaponData = {
    0: `
        <h3>Avancement 0 :</h3>
        <p>S'il n'y a aucun ennemi dans un rayon de 5 m, les dégâts de l'utilisatrice augmentent de <span class="stat-boost">2.5%</span>.<br>
        Lorsque Nam Chae-Young attaque une cible affectée par <span class="buff">[Gel]</span>, la Défense de la cible diminue de <span class="stat-boost">5%</span> pendant 5 seconde(s).<br></p>
    `,
    1: `
        <h3>Avancement 5 étoiles :</h3>
        <p>S'il n'y a aucun ennemi dans un rayon de 5 m, les dégâts de l'utilisatrice augmentent de <span class="stat-boost">10%</span>.<br>
        Lorsque Nam Chae-Young attaque une cible affectée par <span class="buff">[Gel]</span>, la Défense de la cible diminue de <span class="stat-boost">20 %</span> pendant 5 seconde(s).<br></p>
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