/* ==========================================
   LOGIQUE PERSONNAGE (Baek Yunho)
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
        <p>Le dernier coup de toutes les compétences, à l'exception des attaques de base, applique l'effet <span class="buff">[Flammes blanches]</span>.<br></p>
        <div class="detail-box">
            <h4><span class="buff">[Flammes blanches]</span></h4>
            <p>Lorsque l'effet atteint 2 cumuls, il active l'effet <span class="buff">[Violente explosion]</span> qui inflige des dégâts équivalents à <span class="stat-boost">600%</span> de la Défense de l'utilisateur et applique <span class="buff">[Défense réduite]</span> à la cible.<br>
            Lorsque l'effet Violente explosion est utilisé sur la cible, sa Défense est réduite de <span class="stat-boost">5%</span> supplémentaires.<br>
            Durée: illimitée (jusqu'à 1 cumul)</p>
        </div>
        <div class="detail-box">
            <h4><span class="buff">[Défense réduite]</span></h4>
            <p>Réduit la Défense de <span class="stat-boost">20%</span>.<br>
            Durée: 12 secondes</p>
        </div>
    `,
    1: `
        <h3>1 étoile :</h3>
        <p>Augmente les dégâts de <strong>Coup de pied perçant de la flamme blanche</strong> de <span class="stat-boost">150%</span>.<br></p>
    `,
    2: `
        <h3>2 étoiles :</h3>
        <p>Augmente l'efficacité de [Bris] de l'utilisateur de <span class="stat-boost">20%</span></p>
    `,
    3: `
        <h3>3 étoiles :</h3>
        <p>Lors de l'utilisation de la compétence <strong>Vérité: Frappe de la flamme blanche</strong>, l'effet <span class="buff">[Bris lourd]</span> est appliqué.<br>
        Lors de l'utilisation des compétences <strong>Fosse sans fond</strong> ou <strong>Coup de pied perçant de la flamme blanche</strong>, l'effet <span class="buff">[Flammes blanches débloquées]</span> s'applique.<br></p>
        <div class="detail-box">
            <h4><span class="buff">[Débloquer Flammes blanches]</span></h4>
            <p>Augmente les dégâts de lumière de l'utilisateur de <span class="stat-boost">40%</span> et octroie <span class="buff">[Super armure]</span>.<br>
            Durée: 15 secondes</p>
        </div>
    `,
    4: `
        <h3>4 étoiles :</h3>
        <p>Le Taux de coup critique de l'utilisatrice augmente de <span class="stat-boost">16%</span>.<br></p>
    `,
    5: `
        <h3>5 étoiles :</h3>
        <p>Lorsque l'utilisateur rejoint le niveau, il récupère <span class="stat-boost">100 %</span> de sa jauge de puissance et les dégâts de <strong>Violente explosion</strong> augmentent de <span class="stat-boost">200%</span>.<br></p>
    `
};

// --- RÉSUMÉ (COURT) ---
const charSummaryData = {
    0: `
        <h3>Passif : Instinct Sauvage</h3>
        <p>Compétences = [Flammes blanches].<br>
        2 Cumuls = [Violente explosion] (Dégâts via Défense) + [Défense réduite].<br></p>
        <div class="detail-box">
            <h4>[Défense réduite]</h4>
            <p>Défense cible <span class="stat-boost">-20%</span> (12s).<br></p>
        </div>
    `,
    1: `
        <h3>1 étoile</h3>
        <p>Dégâts Coup de pied perçant <span class="stat-boost">+150%</span>.<br></p>
    `,
    2: `
        <h3>2 étoiles</h3>
        <p>Efficacité Bris <span class="stat-boost">+20%</span>.<br></p>
    `,
    3: `
        <h3>3 étoiles</h3>
        <p>Vérité = [Bris lourd].<br>
        Autres skills = [Flammes débloquées] (Dégâts Lumière <span class="stat-boost">+40%</span> + Super Armure).<br></p>
    `,
    4: `
        <h3>4 étoiles</h3>
        <p>Taux Critique <span class="stat-boost">+16%</span>.<br></p>
    `,
    5: `
        <h3>5 étoiles</h3>
        <p>Entrée en combat : Jauge 100%.<br>
        Dégâts Violente explosion <span class="stat-boost">+200%</span>.<br></p>
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
   LOGIQUE ARME (Âme de tigre blanc réprimée)
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
        Face à des cibles affectées par l'effet <span class="buff">[Flammes blanches]</span>, la Défense de l'utilisateur augmente de <span class="stat-boost">20%</span> pendant 20 seconde(s).<br>
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