/* ==========================================
   LOGIQUE PERSONNAGE (Lennart Niermann)
   ========================================== */
const charStarsContainer = document.getElementById('char-stars-container');
const charStars = charStarsContainer.querySelectorAll('.star');
const charMessage = document.getElementById('char-message');
const toggleBtn = document.getElementById('toggleBtn');

let charCurrentLevel = 0;
let isSummaryMode = false;

// --- TEXTE COMPLET ---
const charFullData = {
    0: `
        <h3>Passif :</h3>
        <p>Lorsque <strong>Todessinfonie</strong> touche sa cible, l'effet <span class="buff">[Marque du chasseur]</span> est activé.<br>
        Lors de l'utilisation des compétences <strong>Fenriszahn</strong> ou <strong>Kaisers Rache</strong>, l'utilisateur reçoit 6 cumuls de l'effet <span class="buff">[Analyse]</span>.<br>
        Lors de l'utilisation de <strong>Todessinfonie</strong>, l'utilisateur reçoit 12 cumuls de l'effet <span class="buff">[Analyse]</span>.<br>
        La Défense de l'utilisateur augmente de <span class="stat-boost">20 %</span> tant que l'effet <span class="buff">[Analyse]</span> est actif.<br></p>
        
        <div class="detail-box">
            <h4><span class="buff">[Marque du chasseur]</span></h4>
            <p>Lorsque la cible récupère des PV ou est sous l'effet <span class="buff">[Irrémédiable]</span>, l'effet <span class="buff">[Marque du chasseur]</span> devient <span class="buff">[Cage du chasseur]</span>.<br>
            Durée : 20 seconde(s).</p>
        </div>

        <div class="detail-box">
            <h4><span class="buff">[Cage du chasseur]</span></h4>
            <p>Augmente les dégâts infligés par Lennart Niermann de <span class="stat-boost">15 %</span>.<br>
            Durée : 20 seconde(s).</p>
        </div>

        <div class="detail-box">
            <h4><span class="buff">[Analyse]</span></h4>
            <p>Octroie <span class="buff">[Super armure]</span>. Lorsque l'utilisateur est touché par une attaque ennemie, il perd 1 cumul de l'effet <span class="buff">[Analyse]</span>.<br>
            Durée : illimitée (cumulable jusqu'à 20 fois).</p>
        </div>
    `,
    1: `
        <h3>1 étoile :</h3>
        <p>Lors de l'utilisation des compétences <strong>Fenriszahn</strong>, <strong>Kaisers Rache</strong> ou <strong>Todessinfonie</strong>, la durée d'effet de l'attaque de zone créée augmente de 3 seconde(s).<br>
        Lorsque les membres de l'équipe de l'élément Vent, y compris l'utilisateur, utilisent leur compétence de base, Lennart Niermann récupère <span class="stat-boost">3 %</span> de ses PM et sa jauge de puissance se remplit de <span class="stat-boost">5 %</span>.<br></p>
    `,
    2: `
        <h3>2 étoiles :</h3>
        <p>Les dégâts élémentaires de vent de l'utilisateur augmentent de <span class="stat-boost">30 %</span>.<br></p>
    `,
    3: `
        <h3>3 étoiles :</h3>
        <p>Lorsque l'effet <span class="buff">[Analyse]</span> a 20 cumuls, il active l'effet <span class="buff">[Cercle magique défensif]</span> sur l'ensemble de l'équipe.<br></p>

        <div class="detail-box">
            <h4><span class="buff">[Cercle magique défensif]</span></h4>
            <p>Empêche de gagner ou de perdre des cumuls de l'effet <span class="buff">[Analyse]</span>. Octroie <span class="buff">[Super armure]</span>.<br>
            Augmente les Dégâts de coup critique de l'utilisateur de <span class="stat-boost">30 %</span>. Augmente la Défense de l'utilisateur de <span class="stat-boost">30 %</span>.<br>
            Durée : 20 seconde(s).</p>
        </div>
    `,
    4: `
        <h3>4 étoiles :</h3>
        <p>La Défense des membres de l'équipe de l'élément Vent augmente de <span class="stat-boost">14 %</span> par allié de l'élément Vent.<br>
        Augmente les PV de l'ensemble de l'équipe de <span class="stat-boost">8 %</span>.<br></p>
    `,
    5: `
        <h3>5 étoiles :</h3>
        <p>L'effet <span class="buff">[Cage du chasseur]</span> est amélioré.<br>
        Au début du niveau, l'utilisateur reçoit 100 cumuls de l'effet <span class="buff">[Analyse]</span>.<br>
        Le temps de rechargement de <strong>Todessinfonie</strong> diminue de 25 seconde(s).<br></p>

        <div class="detail-box">
            <h4><span class="buff">[Cage du chasseur]</span> (Amélioré)</h4>
            <p>Augmente les dégâts infligés par Lennart Niermann de <span class="stat-boost">30 %</span>.<br>
            Durée : 40 seconde(s).</p>
        </div>
    `
};

// --- RÉSUMÉ (COURT) ---
const charSummaryData = {
    0: `
        <h3>Passif : Analyse Tactique</h3>
        <p>Compétences génèrent <span class="buff">[Analyse]</span> (Super armure, Défense <span class="stat-boost">+20%</span>).<br>
        <strong>Todessinfonie</strong> applique <span class="buff">[Marque du chasseur]</span>.<br>
        Si cible Heal/Irrémédiable : Marque -> <span class="buff">[Cage du chasseur]</span> (Dégâts <span class="stat-boost">+15%</span>).</p>
    `,
    1: `
        <h3>1 étoile</h3>
        <p>Durée zones de compétences +3s.<br>
        Compétences de base alliés Vent : Regen PM <span class="stat-boost">3%</span> + Jauge Puissance <span class="stat-boost">5%</span>.<br></p>
    `,
    2: `
        <h3>2 étoiles</h3>
        <p>Dégâts Vent <span class="stat-boost">+30%</span>.<br></p>
    `,
    3: `
        <h3>3 étoiles</h3>
        <p>20 cumuls Analyse = <span class="buff">[Cercle magique défensif]</span> équipe.<br>
        Effet : Super armure, Dégâts Crit/Défense <span class="stat-boost">+30%</span>.</p>
    `,
    4: `
        <h3>4 étoiles</h3>
        <p>Défense équipe Vent <span class="stat-boost">+14%</span> par allié Vent.<br>
        PV équipe <span class="stat-boost">+8%</span>.</p>
    `,
    5: `
        <h3>5 étoiles</h3>
        <p>Début niveau : 100 cumuls <span class="buff">[Analyse]</span>.<br>
        CD Todessinfonie -25s.<br>
        <span class="buff">[Cage]</span> améliorée : Dégâts <span class="stat-boost">+30%</span> (40s).</p>
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
   LOGIQUE ARME (Le poid des responsabilités)
   ========================================== */
const weaponStarsContainer = document.getElementById('weapon-stars-container');
const weaponStars = weaponStarsContainer.querySelectorAll('.star');
const weaponMessage = document.getElementById('weapon-message');

let weaponCurrentLevel = 0;

const weaponData = {
    0: `
        <h3>Avancement 0 :</h3>
        <p>Augmente la Défense de l'utilisateur de <span class="stat-boost">5 %</span>.<br>
        Lors de l'utilisation des compétences <strong>Fenriszahn</strong>, <strong>Kaisers Rache</strong>, <strong>Todessinfonie</strong> ou <strong>Wolfspranke</strong>, l'effet <span class="buff">[Paralysie]</span> est appliqué pendant 0.5 seconde(s) aux ennemis se trouvant à moins de 10 m (temps de rechargement : 20 seconde(s)).</p>
    `,
    1: `
        <h3>Avancement 5 étoiles :</h3>
        <p>Augmente la Défense de l'utilisateur de <span class="stat-boost">50 %</span>.<br>
        Lors de l'utilisation des compétences <strong>Fenriszahn</strong>, <strong>Kaisers Rache</strong>, <strong>Todessinfonie</strong> ou <strong>Wolfspranke</strong>, l'effet <span class="buff">[Paralysie]</span> est appliqué pendant 5 seconde(s) aux ennemis se trouvant à moins de 10 m (temps de rechargement : 20 seconde(s)).</p>
    `,
    2: `
        <h3>Avancement 10 étoiles :</h3>
        <p>Augmente l'Attaque, la Défense et les PV de l'utilisateur de <span class="stat-boost">15 %</span>.</p>
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