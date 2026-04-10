/* ==========================================
   LOGIQUE PERSONNAGE (Lee Bora)
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
        <p>Lorsque l'Attaque de noyau ou la compétence <strong>Tempête</strong> touchent leur cible, l'effet <span class="buff">[Talisman]</span> est infligé à la cible.<br></p>
        <div class="detail-box">
            <h4><span class="buff">[Talisman]</span></h4>
            <p>Les dégâts subis par la cible augmentent de <span class="stat-boost">15%</span>.<br>
            Durée: 15 seconde(s)</p>
        </div>
    `,
    1: `
        <h3>1 étoile :</h3>
        <p>Modification des effets de la compétence <strong>Talisman d'invocation: Renard fantomatique</strong> Lors de l'utilisation de <span class="buff">[Renards fantomatiques]</span>, 3 renards sont invoqués.<br>
        Augmente les dégâts de chaque Renard fantomatique de <span class="stat-boost">50%</span>.<br></p>
    `,
    2: `
        <h3>2 étoiles :</h3>
        <p>Les dégâts de coup critique et le Taux de coup critique de l'utilisatrice augmentent de <span class="stat-boost">6 %</span>.<br></p>
    `,
    3: `
        <h3>3 étoiles :</h3>
        <p>Modification des effets de la compétence <strong>Talisman de renforcement</strong> Peut être utilisée jusqu'à 2 fois.<br>
        La portée et les dégâts de la compétence augmentent de <span class="stat-boost">40%</span>.<br></p>
    `,
    4: `
        <h3>4 étoiles :</h3>
        <p>Réduit le temps de rechargement de <strong>Talisman de ténèbres: Meg</strong> de <span class="stat-boost">25%</span>.<br></p>
    `,
    5: `
        <h3>5 étoiles :</h3>
        <p>Les dégâts de base des petits Meg de <strong>Talisman de ténèbres: Meg</strong> augmentent de <span class="stat-boost">75%</span>.<br></p>
    `
};

// --- RÉSUMÉ (COURT) ---
const charSummaryData = {
    0: `
        <h3>Passif : Maîtresse des Talismans</h3>
        <p>Tempête / Attaque noyau = <span class="buff">[Talisman]</span>.<br>
        [Talisman] : Dégâts subis par la cible <span class="stat-boost">+15%</span> (15s).</p>
    `,
    1: `
        <h3>1 étoile</h3>
        <p>Renards fantomatiques : Invoque 3 renards.<br>
        Dégâts Renards <span class="stat-boost">+50%</span>.<br></p>
    `,
    2: `
        <h3>2 étoiles</h3>
        <p>Crit Rate/Dmg <span class="stat-boost">+6%</span>.<br></p>
    `,
    3: `
        <h3>3 étoiles</h3>
        <p>Talisman de renforcement : 2 charges.<br>
        Portée et Dégâts <span class="stat-boost">+40%</span>.<br></p>
    `,
    4: `
        <h3>4 étoiles</h3>
        <p>CD Talisman de ténèbres: Meg <span class="stat-boost">-25%</span>.<br></p>
    `,
    5: `
        <h3>5 étoiles</h3>
        <p>Dégâts petits Meg <span class="stat-boost">+75%</span>.<br></p>
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
   LOGIQUE ARME (Logique Imparable)
   ========================================== */
const weaponStarsContainer = document.getElementById('weapon-stars-container');
const weaponStars = weaponStarsContainer.querySelectorAll('.star');
const weaponMessage = document.getElementById('weapon-message');

let weaponCurrentLevel = 0;

const weaponData = {
    0: `
        <h3>Avancement 0 :</h3>
        <p>Augmente l'Attaque de l'utilisateur de <span class="stat-boost">2.5%</span>.<br>
        Lorsque l'utilisateur touche des cibles avec <strong>Talisman de renforcement</strong>, ses Dégâts de coup critique et son Taux de coup critique augmentent de <span class="stat-boost">2.5%</span> pendant 10 seconde(s) face à celles-ci.<br></p>
    `,
    1: `
        <h3>Avancement 5 étoiles :</h3>
        <p>Augmente l'Attaque de l'utilisateur de <span class="stat-boost">10%</span>.<br>
        Les Dégâts de coup critique et le Taux de coup critique augmentent de <span class="stat-boost">10%</span> pendant 10 seconde(s) face aux cibles touchées par <strong>Talisman de renforcement</strong>.<br></p>
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