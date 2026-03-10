/* ==========================================
   LOGIQUE PERSONNAGE (Yoo Soohyun)
   ========================================== */
const charStarsContainer = document.getElementById('char-stars-container');
const charStars = charStarsContainer.querySelectorAll('.star');
const charMessage = document.getElementById('char-message');
const toggleBtn = document.getElementById('toggleBtn');

let charCurrentLevel = 0;
let isSummaryMode = false;

// --- TEXTE COMPLET (FORMATÉ) ---
const charFullData = {
    0: `
        <h3>Passif :</h3>
        <p>Lors de l'utilisation de <strong>Tir astucieux</strong> ou <strong>Nuée embrasée</strong>, l'effet <span class="buff pourpre">[Projecteur]</span> s'applique à l'utilisatrice.<br>
        Lors de l'utilisation de <strong>Nuée embrasée</strong> ou <strong>Souffle de précision</strong>, l'effet <span class="buff ecarlate">[Arme à feu magique]</span> s'applique.</p>
        
        <div class="detail-box">
            <h4><span class="buff pourpre">[Projecteur]</span></h4>
            <p>Augmente la Pénétration de défense de l'utilisatrice de <span class="stat-boost">24%</span>.<br>
            Durée: 24s</p>
        </div>
        <div class="detail-box">
            <h4><span class="buff ecarlate">[Arme à feu magique]</span></h4>
            <p>Apparaissent autour de Soohyun et infligent des dégâts (160% de l'Attaque).<br>
            Inflige l'effet <span class="buff feu">[Réaction magique]</span> à la cible.<br>
            Durée: 5s</p>
        </div>
        <div class="detail-box">
            <h4><span class="buff feu">[Réaction magique]</span></h4>
            <p>Augmente les dégâts de feu subis de <span class="stat-boost">1%</span>.<br>
            Réduit le Taux de récupération de la cible de <span class="stat-boost">4%</span>.<br>
            Durée: 60s (cumulable jusqu'à 20 fois)</p>
        </div>
    `,
    1: `
        <h3>1 étoile :</h3>
        <p>Utiliser <strong>Tir mortel</strong> active l'Attaque de noyau et augmente ses dégâts de <span class="stat-boost">40%</span> (6s).<br>
        Utiliser l'Attaque de noyau octroie l'effet <span class="buff ecarlate">[Folie]</span>.</p>
        <div class="detail-box">
            <h4><span class="buff ecarlate">[Folie]</span></h4>
            <p>Réinitialise le CD de Tir mortel.<br>
            Tir mortel devient <strong>Feu de l'enfer</strong> (Dégâts +40% + [Super Super Armure]).<br>
            Utiliser Feu de l'enfer applique [Arme à feu magique] et annule [Folie].<br>
            Durée: 6s</p>
        </div>
    `,
    2: `
        <h3>2 étoiles :</h3>
        <p>La Pénétration de défense de l'utilisatrice augmente de <span class="stat-boost">12%</span>.</p>
    `,
    3: `
        <h3>3 étoiles :</h3>
        <p>Lorsque <strong>Tir astucieux</strong> est utilisé, l'effet <span class="buff instinct">[Attaque augmentée]</span> s'applique.</p>
        <div class="detail-box">
            <h4><span class="buff instinct">[Attaque augmentée]</span></h4>
            <p>Augmente l'Attaque de l'utilisatrice de <span class="stat-boost">24%</span>.<br>
            Durée: 12s</p>
        </div>
    `,
    4: `
        <h3>4 étoiles :</h3>
        <p>Augmente l'Attaque de l'utilisatrice de <span class="stat-boost">12%</span>.</p>
    `,
    5: `
        <h3>5 étoiles :</h3>
        <p>Augmente les dégâts de <strong>Tir mortel</strong> et <strong>Feu de l'enfer</strong> de <span class="stat-boost">6%</span> par cumul de [Réaction magique] sur la cible (Max <span class="stat-boost">120%</span>).</p>
    `
};

// --- RÉSUMÉ (COURT) ---
const charSummaryData = {
    0: `
        <h3>Passif : Arsenal Magique</h3>
        <p>Skills = <span class="buff pourpre">[Projecteur]</span> (Pen. Def) ou <span class="buff ecarlate">[Arme Magique]</span> (Dégâts Auto).<br>
        Armes Magiques appliquent <span class="buff feu">[Réaction]</span> (Debuff Feu/Soin).</p>
        <div class="detail-box">
            <h4><span class="buff feu">[Réaction magique]</span> (Max 20)</h4>
            <p>Dégâts Feu subis <span class="stat-boost">+1%</span> / Soin <span class="stat-boost">-4%</span> par cumul.</p>
        </div>
    `,
    1: `
        <h3>1 étoile</h3>
        <p>Tir mortel boost Atq Noyau.<br>
        Atq Noyau = <span class="buff ecarlate">[Folie]</span> (Reset CD Tir mortel).<br>
        [Folie] transforme Tir mortel en <strong>Feu de l'enfer</strong> (Dégâts <span class="stat-boost">+40%</span> + Super Armure).</p>
    `,
    2: `
        <h3>2 étoiles</h3>
        <p>Pénétration Défense <span class="stat-boost">+12%</span>.</p>
    `,
    3: `
        <h3>3 étoiles</h3>
        <p>Tir astucieux = Attaque <span class="stat-boost">+24%</span> (12s).</p>
    `,
    4: `
        <h3>4 étoiles</h3>
        <p>Attaque <span class="stat-boost">+12%</span>.</p>
    `,
    5: `
        <h3>5 étoiles</h3>
        <p>Tir mortel / Feu de l'enfer : Dégâts <span class="stat-boost">+6%</span> par cumul de [Réaction] (Max 120%).</p>
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
   LOGIQUE ARME (Overdrive)
   ========================================== */
const weaponStarsContainer = document.getElementById('weapon-stars-container');
const weaponStars = weaponStarsContainer.querySelectorAll('.star');
const weaponMessage = document.getElementById('weapon-message');

let weaponCurrentLevel = 0;

const weaponData = {
    0: `
        <h3>Avancement 0 :</h3>
        <p>Augmente la Pénétration de défense de l'utilisatrice de <span class="stat-boost">4%</span>.<br>
        Augmente les dégâts de Tir mortel, Attaque de noyau et Feu de l'enfer de <span class="stat-boost">8%</span>.</p>
    `,
    1: `
        <h3>Avancement 5 étoiles :</h3>
        <p>Augmente la Pénétration de défense de l'utilisatrice de <span class="stat-boost">12%</span>.<br>
        Augmente les dégâts de Tir mortel, Attaque de noyau et Feu de l'enfer de <span class="stat-boost">24%</span>.</p>
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