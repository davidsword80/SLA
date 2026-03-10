/* ==========================================
   LOGIQUE PERSONNAGE (Choi Jongin)
   ========================================== */
const charStarsContainer = document.getElementById('char-stars-container');
const charStars = charStarsContainer.querySelectorAll('.star');
const charMessage = document.getElementById('char-message');
const toggleBtn = document.getElementById('toggleBtn');

let charCurrentLevel = 0;
let isSummaryMode = false;

// --- TEXTE COMPLET (MOT POUR MOT AVEC DESIGN) ---
const charFullData = {
    0: `
        <h3>Passif :</h3>
        <p>Choi Jongin ne peut pas infliger de coups critiques, mais son Attaque augmente de <span class="stat-boost">50%</span>.<br>
        Lorsque l'utilisateur lance <strong>Fin des temps</strong>, applique l'effet <span class="buff feu">[L'Arme Ultime]</span>.</p>
        
        <div class="detail-box">
            <h4><span class="buff feu">[L'Arme Ultime]</span></h4>
            <p>Réinitialise le temps de rechargement de <strong>Pluie de flammes</strong> et de <strong>Lance de feu</strong>.<br>
            Augmente l'Attaque et la Pénétration de défense de l'utilisateur de <span class="stat-boost">20%</span>.<br>
            Durée: 15 seconde(s)</p>
        </div>
    `,
    1: `
        <h3>1 étoile :</h3>
        <p>Les dégâts de <strong>Pluie de flammes</strong> triplent pendant la durée de <span class="buff feu">[L'Arme Ultime]</span>, et la compétence devient <strong>Méga cratère</strong>.</p>
    `,
    2: `
        <h3>2 étoiles :</h3>
        <p>Augmente l'Attaque de l'utilisateur de <span class="stat-boost">12%</span>.</p>
    `,
    3: `
        <h3>3 étoiles :</h3>
        <p>Augmente les dégâts de <strong>Fin des temps</strong> de <span class="stat-boost">60%</span>.</p>
    `,
    4: `
        <h3>4 étoiles :</h3>
        <p>Augmente les dégâts de <span class="buff ecarlate">[Brûlure]</span> de l'utilisateur de <span class="stat-boost">100%</span>.<br>
        Augmente les dégâts de feu infligés par l'utilisateur de <span class="stat-boost">16%</span>.</p>
    `,
    5: `
        <h3>5 étoiles :</h3>
        <p>Lorsqu'un personnage <span class="buff">[quitte le combat]</span>, le temps de rechargement de la compétence <strong>Fin des temps</strong> est divisé par 3 et la jauge de puissance se charge de <span class="stat-boost">0.8%</span> toutes les secondes.<br>
        En mode Combat d'équipe, le temps de rechargement de <strong>Fin des temps</strong>, <strong>Pluie de flammes</strong> et <strong>Lance de feu</strong> est divisé par 2 et la jauge de puissance se charge de <span class="stat-boost">0.4%</span> toutes les secondes.</p>
    `
};

// --- RÉSUMÉ (COURT) ---
const charSummaryData = {
    0: `
        <h3>Passif : Le Mage Ultime</h3>
        <p>Pas de Critique, mais Attaque <span class="stat-boost">+50%</span>.<br>
        Ultime = <span class="buff feu">[L'Arme Ultime]</span>.</p>
        <div class="detail-box">
            <h4><span class="buff feu">[L'Arme Ultime]</span></h4>
            <p>Reset CD Compétences.<br>
            Attaque et Pen. Def <span class="stat-boost">+20%</span> (15s).</p>
        </div>
    `,
    1: `
        <h3>1 étoile</h3>
        <p>Sous [L'Arme Ultime] : Dégâts Pluie de flammes <span class="stat-boost">x3</span> (Devient Méga cratère).</p>
    `,
    2: `
        <h3>2 étoiles</h3>
        <p>Attaque <span class="stat-boost">+12%</span>.</p>
    `,
    3: `
        <h3>3 étoiles</h3>
        <p>Dégâts Ultime <span class="stat-boost">+60%</span>.</p>
    `,
    4: `
        <h3>4 étoiles</h3>
        <p>Dégâts Brûlure <span class="stat-boost">+100%</span>. Dégâts Feu <span class="stat-boost">+16%</span>.</p>
    `,
    5: `
        <h3>5 étoiles</h3>
        <p>Switch Out : CD Ultime divisé par 3, Regen Jauge ++.<br>
        Mode Équipe : CD skills divisés par 2, Regen Jauge +.</p>
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
        // Logique toggle : si on clique sur l'étoile active, on revient au niveau précédent
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
   LOGIQUE ARME (Échange Équivalent)
   ========================================== */
const weaponStarsContainer = document.getElementById('weapon-stars-container');
const weaponStars = weaponStarsContainer.querySelectorAll('.star');
const weaponMessage = document.getElementById('weapon-message');

let weaponCurrentLevel = 0;

const weaponData = {
    0: `
        <h3>Avancement 0 :</h3>
        <p>Augmente l'Attaque de l'utilisateur de <span class="stat-boost">5%</span>.<br>
        Lorsque des cibles affectées par l'effet <span class="buff ecarlate">[Brûlure]</span> de Choi Jongin sont attaquées, leur Défense diminue de <span class="stat-boost">7%</span> pendant 5 seconde(s).</p>
    `,
    1: `
        <h3>Avancement 5 étoiles :</h3>
        <p>Augmente l'Attaque de l'utilisateur de <span class="stat-boost">20%</span>.<br>
        Lorsque des cibles affectées par l'effet <span class="buff ecarlate">[Brûlure]</span> de Choi Jongin sont attaquées, leur Défense diminue de <span class="stat-boost">20%</span> pendant 5 seconde(s).</p>
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