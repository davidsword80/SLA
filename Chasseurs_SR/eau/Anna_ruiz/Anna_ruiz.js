/* ==========================================
   LOGIQUE PERSONNAGE (Anna Ruiz)
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
        <p>Lorsque l'une des compétences d'Anna touche sa cible, a 6% de chances d'infliger <span class="buff">[Poison corrosif]</span>.<br></p>
        <div class="detail-box">
            <h4><span class="buff">[Poison corrosif]</span></h4>
            <p>Inflige 100 dégâts de Bris toutes les 3 seconde(s).<br>
            Inflige des dégâts équivalents à <span class="stat-boost">30%</span> de l'Attaque toutes les 3 seconde(s) (cumulable jusqu'à 10 fois).<br>
            Durée: 30 seconde(s)</p>
        </div>
    `,
    1: `
        <h3>1 étoile :</h3>
        <p>Les ennemis se trouvant dans la <span class="buff">[Zone toxique]</span> se voient infliger l'effet <span class="buff">[Entrave]</span> 1 fois.<br></p>
        <div class="detail-box">
            <h4><span class="buff">[Entrave]</span></h4>
            <p>Immobilise la cible.<br>
            Durée: 1.5 seconde(s)</p>
        </div>
    `,
    2: `
        <h3>2 étoiles :</h3>
        <p>Augmente les dégâts de Bris de l'utilisateur de <span class="stat-boost">10%</span>.<br></p>
    `,
    3: `
        <h3>3 étoiles :</h3>
        <p>Applique <span class="buff">[Poison corrosif amélioré]</span> et réduit la Défense de la cible.<br></p>
        <div class="detail-box">
            <h4><span class="buff">[Poison corrosif amélioré]</span></h4>
            <p>Inflige 100 dégâts de Bris toutes les 3 seconde(s).<br>
            Inflige des dégâts équivalents à <span class="stat-boost">30%</span> de l'Attaque toutes les 3 seconde(s).<br>
            Réduit la défense de <span class="stat-boost">1%</span> (cumulable jusqu'à 10 fois).<br>
            Durée: 30 seconde(s)</p>
        </div>
    `,
    4: `
        <h3>4 étoiles :</h3>
        <p>Augmente l'Attaque de l'utilisateur de <span class="stat-boost">10%</span>.<br></p>
    `,
    5: `
        <h3>5 étoiles :</h3>
        <p>Augmente les dégâts de <strong>Vague venimeuse</strong> de <span class="stat-boost">100%</span>.<br></p>
    `
};

// --- RÉSUMÉ (COURT) ---
const charSummaryData = {
    0: `
        <h3>Passif : Ranger Toxique</h3>
        <p>6% chance d'infliger <span class="buff">[Poison corrosif]</span> sur touche.<br>
        [Poison] : Dégâts Bris + DOT (<span class="stat-boost">30%</span> Atk, 30s).</p>
    `,
    1: `
        <h3>1 étoile</h3>
        <p>Zone toxique = <span class="buff">[Entrave]</span> (Immobilisation 1.5s).<br></p>
    `,
    2: `
        <h3>2 étoiles</h3>
        <p>Dégâts de Bris <span class="stat-boost">+10%</span>.<br></p>
    `,
    3: `
        <h3>3 étoiles</h3>
        <p>[Poison corrosif amélioré] : Ajoute Réduction Défense (<span class="stat-boost">-1%</span> par cumul, max 10).</p>
    `,
    4: `
        <h3>4 étoiles</h3>
        <p>Attaque <span class="stat-boost">+10%</span>.<br></p>
    `,
    5: `
        <h3>5 étoiles</h3>
        <p>Dégâts Vague venimeuse <span class="stat-boost">+100%</span>.<br></p>
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
   LOGIQUE ARME (Vagabon Solitaire)
   ========================================== */
const weaponStarsContainer = document.getElementById('weapon-stars-container');
const weaponStars = weaponStarsContainer.querySelectorAll('.star');
const weaponMessage = document.getElementById('weapon-message');

let weaponCurrentLevel = 0;

const weaponData = {
    0: `
        <h3>Avancement 0 :</h3>
        <p>Augmente l'Attaque de l'utilisateur de <span class="stat-boost">2.5%</span>.<br>
        Lorsque la compétence <strong>Pluie venimeuse</strong> touche sa cible, sa Défense diminue de <span class="stat-boost">2.5%</span> pendant 5 seconde(s).<br></p>
    `,
    1: `
        <h3>Avancement 5 étoiles :</h3>
        <p>Augmente l'Attaque de l'utilisateur de <span class="stat-boost">10%</span>.<br>
        Lorsque la compétence <strong>Pluie venimeuse</strong> touche sa cible, sa Défense diminue de <span class="stat-boost">10%</span> pendant 5 seconde(s).<br></p>
    `,
    2: `
        <h3>Avancement 10 étoiles :</h3>
        <p>Augmente l'Attaque, la Défense et les PV de <span class="stat-boost">15%</span>.<br></p>
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