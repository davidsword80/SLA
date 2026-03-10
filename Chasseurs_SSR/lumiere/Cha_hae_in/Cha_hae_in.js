/* ==========================================
   LOGIQUE PERSONNAGE (Cha Hae-in)
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
        <p>Lorsque la compétence La danseuse touche sa cible, l'utilisateur a <span class="stat-boost">66%</span> de chances de la <span class="buff">[marquer]</span>.<br>
        <div class="detail-box">
            <h4><span class="buff">[Marquage]</span></h4>
            <p>Le Taux de coup critique et les Dégâts de coup critique de la cible touchée augmentent de <span class="stat-boost">12%</span>.<br>
            Durée: 15 seconde(s)</p>
        </div>
    `,
    1: `
        <h3>1 étoile :</h3>
        <p>L'effet <span class="buff">[La danseuse]</span> peut se cumuler jusqu'à 5 fois.<br>
        Confère <span class="buff">[Super armure]</span> tant que l'effet <span class="buff">[Valse de l'épée]</span> est actif.</p>
    `,
    2: `
        <h3>2 étoiles :</h3>
        <p>Le Taux de coup critique de l'utilisatrice augmente de <span class="stat-boost">16%</span>.</p>
    `,
    3: `
        <h3>3 étoiles :</h3>
        <p>Face à une cible affectée par l'effet <span class="buff">[Marquage]</span>, les dégâts des compétences La danseuse et Épée de lumière augmentent de <span class="stat-boost">50%</span>.</p>
    `,
    4: `
        <h3>4 étoiles :</h3>
        <p>Les dégâts de coup critique de l'utilisatrice augmentent de <span class="stat-boost">16%</span>.</p>
    `,
    5: `
        <h3>5 étoiles :</h3>
        <p>Les dégâts et le Taux de coup critique de Lumière finale augmentent de <span class="stat-boost">20%</span> et <span class="stat-boost">2%</span> respectivement, en fonction du nombre de fois où l'utilisatrice applique l'effet de <span class="buff">[La danseuse]</span> (cumulable jusqu'à 5 fois).</p>
    `
};

// --- RÉSUMÉ (COURT) ---
const charSummaryData = {
    0: `
        <h3>Passif : L'Odeur de Mana</h3>
        <p>La danseuse applique <span class="buff">[Marquage]</span> (66% chance).<br>
        [Marquage] : La cible subit + de Critiques (Taux/Dégâts <span class="stat-boost">+12%</span>).</p>
    `,
    1: `
        <h3>1 étoile</h3>
        <p>[La danseuse] cumulable 5 fois.<br>
        [Valse de l'épée] = <span class="buff">[Super Armure]</span>.</p>
    `,
    2: `
        <h3>2 étoiles</h3>
        <p>Taux Critique <span class="stat-boost">+16%</span>.</p>
    `,
    3: `
        <h3>3 étoiles</h3>
        <p>Contre cible [Marquée] : Dégâts Compétences <span class="stat-boost">+50%</span>.</p>
    `,
    4: `
        <h3>4 étoiles</h3>
        <p>Dégâts Critique <span class="stat-boost">+16%</span>.</p>
    `,
    5: `
        <h3>5 étoiles</h3>
        <p>Lumière finale (Ultime) boostée par cumuls de [La danseuse] (Dégâts/Crit <span class="stat-boost">+20%/+2%</span> par cumul).</p>
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
   LOGIQUE ARME (Épée de lumière)
   ========================================== */
const weaponStarsContainer = document.getElementById('weapon-stars-container');
const weaponStars = weaponStarsContainer.querySelectorAll('.star');
const weaponMessage = document.getElementById('weapon-message');

let weaponCurrentLevel = 0;

const weaponData = {
    0: `
        <h3>Avancement 0 :</h3>
        <p>Augmente les dégâts de compétence de base de l'utilisateur de <span class="stat-boost">5%</span>.<br>
        Lors de l'utilisation d'une compétence de base, les Dégâts de coup critique de l'utilisateur augmentent de <span class="stat-boost">2%</span> pendant 12 seconde(s) (cumulable jusqu'à 6 fois).</p>
    `,
    1: `
        <h3>Avancement 5 étoiles :</h3>
        <p>Augmente les dégâts de Compétence de base de l'utilisateur de <span class="stat-boost">20 %</span>.<br>
        Lors de l'utilisation d'une Compétence de base, les Dégâts de coup critique de l'utilisateur augmentent de <span class="stat-boost">8%</span> pendant 12 seconde(s) (cumulable jusqu'à 6 fois).</p>
    `,
    2: `
        <h3>Avancement 10 étoiles :</h3>
        <p>Augmente l'Attaque, la Défense et les PV de l'utilisateur de <span class="stat-boost">15%</span>.</p>
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