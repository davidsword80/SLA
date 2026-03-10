/* ==========================================
   LOGIQUE PERSONNAGE (Alicia Blanche)
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
        <p>Lorsqu'elles sont lancées, les compétences <strong>Givre éternel</strong>, <strong>Tempête hivernale</strong> ou <strong>Aiguille de glace</strong> appliquent l'effet <span class="buff">[Gel]</span> à l'utilisateur, ce qui active la modification de son <span class="buff">[Givre]</span> Attaque de noyau.<br>
        L'Attaque de noyau de l'utilisateur devient <strong>Lance de froid glacial</strong>.<br>
        L'utilisation de Lance de froid glacial consomme des instances de <span class="buff">[Givre]</span> (jusqu'à 3 instances à la fois).<br>
        Les dégâts de Lance de froid glacial augmentent de <span class="stat-boost">60%</span> par instance de <span class="buff">[Givre]</span> consommée (augmentant jusqu'à <span class="stat-boost">180%</span>).<br>
        Durée: permanent (cumulable jusqu'à 5 fois)</p>
    `,
    1: `
        <h3>1 étoile :</h3>
        <p>Lorsque <span class="buff">[Bouclier]</span> est actif, les Dégâts de coup critique et le Taux de coup critique de l'utilisateur augmentent de <span class="stat-boost">20%</span>.<br></p>
    `,
    2: `
        <h3>2 étoiles :</h3>
        <p>Lors de l'utilisation des compétences <strong>Givre éternel</strong>, <strong>Tempête hivernale</strong> ou <strong>Aiguille de glace</strong>, 1 effet <span class="buff">[Givre]</span> supplémentaire est appliqué.<br></p>
    `,
    3: `
        <h3>3 étoiles :</h3>
        <p>Les dégâts infligés aux cibles affectées par l'effet <span class="buff">[Gel]</span> augmentent de <span class="stat-boost">30%</span>.<br></p>
    `,
    4: `
        <h3>4 étoiles :</h3>
        <p>Les dégâts d'eau de l'utilisateur augmentent de <span class="stat-boost">16%</span>.<br></p>
    `,
    5: `
        <h3>5 étoiles :</h3>
        <p>Augmente les dégâts de <strong>Lance de froid glacial</strong> de <span class="stat-boost">50%</span>.<br>
        Lorsque la Lance de froid glacial touche sa cible, elle lui applique l'effet <span class="buff">[Gel]</span>.<br></p>
        <div class="detail-box">
            <h4><span class="buff">[Gel]</span></h4>
            <p>Interrompt la cible.<br>
            Durée: 3 seconde(s)</p>
        </div>
    `
};

// --- RÉSUMÉ (COURT) ---
const charSummaryData = {
    0: `
        <h3>Passif : Maîtrise du Givre</h3>
        <p>Compétences = <span class="buff">[Givre]</span> sur soi.<br>
        Attaque Noyau = <strong>Lance de froid glacial</strong>.<br>
        Lance de froid consomme [Givre] pour dégâts <span class="stat-boost">+60%</span> par cumul (Max 180%).</p>
    `,
    1: `
        <h3>1 étoile</h3>
        <p>Si Bouclier actif : Crit Rate/Dmg <span class="stat-boost">+20%</span>.<br></p>
    `,
    2: `
        <h3>2 étoiles</h3>
        <p>Compétences génèrent +1 cumul de <span class="buff">[Givre]</span>.<br></p>
    `,
    3: `
        <h3>3 étoiles</h3>
        <p>Dégâts sur cibles <span class="buff">[Gelées]</span> <span class="stat-boost">+30%</span>.<br></p>
    `,
    4: `
        <h3>4 étoiles</h3>
        <p>Dégâts Eau <span class="stat-boost">+16%</span>.<br></p>
    `,
    5: `
        <h3>5 étoiles</h3>
        <p>Lance de froid : Dégâts <span class="stat-boost">+50%</span> + Applique <span class="buff">[Gel]</span> (Interruption).<br></p>
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
   LOGIQUE ARME (Sorcière des glaces)
   ========================================== */
const weaponStarsContainer = document.getElementById('weapon-stars-container');
const weaponStars = weaponStarsContainer.querySelectorAll('.star');
const weaponMessage = document.getElementById('weapon-message');

let weaponCurrentLevel = 0;

const weaponData = {
    0: `
        <h3>Avancement 0 :</h3>
        <p>Les dégâts de l'Attaque de noyau de l'utilisateur augmentent de <span class="stat-boost">10%</span>.<br>
        Lorsque l'effet <span class="buff">[Armure de givre]</span> s'active, les dégâts d'eau augmentent de <span class="stat-boost">5%</span> pendant 20 seconde(s).<br>
        (Temps de rechargement: 30 seconde(s))</p>
    `,
    1: `
        <h3>Avancement 5 étoiles :</h3>
        <p>Les dégâts de l'Attaque de noyau de l'utilisateur augmentent de <span class="stat-boost">40%</span>.<br>
        Lorsque l'effet <span class="buff">[Armure de givre]</span> s'active, les dégâts d'eau augmentent de <span class="stat-boost">20%</span> pendant 20 seconde(s).<br>
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