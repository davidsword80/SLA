/* ==========================================
   LOGIQUE PERSONNAGE (Kim Chul)
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
        <p>Lors de l'utilisation des compétences <strong>Saut de bouclier</strong> ou <strong>Rugissement féroce</strong>, l'effet <span class="buff">[Impénétrable]</span> est appliqué.<br></p>
        <div class="detail-box">
            <h4><span class="buff">[Impénétrable]</span></h4>
            <p>Crée un <span class="buff">[Bouclier]</span> équivalent à <span class="stat-boost">2.5 %</span> de la Défense de l'utilisateur.<br>
            Durée: 10 seconde(s)</p>
        </div>
    `,
    1: `
        <h3>1 étoile :</h3>
        <p>Modification des effets de la compétence <strong>Saut de bouclier</strong><br>
        Peut être utilisée jusqu'à 2 fois.<br>
        Réduit le temps de rechargement de 2 secondes.<br></p>
    `,
    2: `
        <h3>2 étoiles :</h3>
        <p>Augmente la Défense de l'utilisateur de <span class="stat-boost">6%</span>.<br></p>
    `,
    3: `
        <h3>3 étoiles :</h3>
        <p>Lorsqu'un personnage <span class="buff">[quitte le combat]</span>, l'effet <span class="buff">[Impénétrable]</span> est appliqué à toute l'équipe.<br></p>
        <div class="detail-box">
            <h4><span class="buff">[Impénétrable]</span></h4>
            <p>Crée un <span class="buff">[Bouclier]</span> équivalent à <span class="stat-boost">8%</span> de la<br>
            Défense de l'utilisateur.<br>
            Durée: 10 seconde(s)<br>
            Temps de rechargement: 30 seconde(s)</p>
        </div>
    `,
    4: `
        <h3>4 étoiles :</h3>
        <p>Les PV de l'utilisateur augmentent de <span class="stat-boost">8%</span>.<br></p>
    `,
    5: `
        <h3>5 étoiles :</h3>
        <p>L'effet <span class="buff">[Défense réduite]</span> s'applique pendant <strong>Saut de bouclier</strong>.<br></p>
        <div class="detail-box">
            <h4><span class="buff">[Défense réduite]</span></h4>
            <p>Réduit la Défense de <span class="stat-boost">16%</span>.<br>
            Durée: 10 seconde(s)</p>
        </div>
    `
};

// --- RÉSUMÉ (COURT) ---
const charSummaryData = {
    0: `
        <h3>Passif : Gardien de Fer</h3>
        <p>Saut de bouclier/Rugissement = <span class="buff">[Impénétrable]</span>.<br>
        [Impénétrable] : Bouclier (<span class="stat-boost">2.5%</span> Def, 10s).</p>
    `,
    1: `
        <h3>1 étoile</h3>
        <p>Saut de bouclier : 2 charges, CD -2s.<br></p>
    `,
    2: `
        <h3>2 étoiles</h3>
        <p>Défense <span class="stat-boost">+6%</span>.<br></p>
    `,
    3: `
        <h3>3 étoiles</h3>
        <p>Switch out = <span class="buff">[Impénétrable]</span> pour l'équipe (<span class="stat-boost">8%</span> Def, 10s).<br>
        CD 30s.</p>
    `,
    4: `
        <h3>4 étoiles</h3>
        <p>PV <span class="stat-boost">+8%</span>.<br></p>
    `,
    5: `
        <h3>5 étoiles</h3>
        <p>Saut de bouclier applique <span class="buff">[Défense réduite]</span> (-16%).<br></p>
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
   LOGIQUE ARME (La volonté du gardien)
   ========================================== */
const weaponStarsContainer = document.getElementById('weapon-stars-container');
const weaponStars = weaponStarsContainer.querySelectorAll('.star');
const weaponMessage = document.getElementById('weapon-message');

let weaponCurrentLevel = 0;

const weaponData = {
    0: `
        <h3>Avancement 0 :</h3>
        <p>Augmente la Défense de l'utilisateur de <span class="stat-boost">2.5%</span>.<br>
        Lors de l'utilisation de la compétence <strong>Saut de bouclier</strong>, les dégâts subis par l'équipe diminuent de <span class="stat-boost">2%</span> pendant 20 seconde(s).<br></p>
    `,
    1: `
        <h3>Avancement 5 étoiles :</h3>
        <p>Augmente la Défense de l'utilisateur de <span class="stat-boost">10%</span>.<br>
        Lors de l'utilisation de la compétence <strong>Saut de bouclier</strong>, les dégâts subis par l'équipe diminuent de <span class="stat-boost">12%</span> pendant 20 seconde(s).<br></p>
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