/* ==========================================
   LOGIQUE PERSONNAGE (Thomas André)
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
        <p>Lorsque les compétences <strong>Démolition absolue</strong>, <strong>Écrasement colossal</strong>, <strong>Coup de marteau géant</strong> ou <strong>Coup à la volée</strong> sont utilisées, elles activent l'effet <span class="buff">[Puissance écrasante]</span>.<br>
        La jauge de puissance de l'utilisateur ne se remplira pas et il n'y aura plus de temps de rechargement.<br>
        À la place, <strong>Jugement du chef</strong> sera disponible au bout de 5 cumuls de [Puissance écrasante] (temps de rechargement: 36 seconde(s)).<br>
        En mode [Combat d'équipe], les dégâts infligés par l'utilisateur augmentent de <span class="stat-boost">24 %</span>.<br></p>
        <div class="detail-box">
            <h4><span class="buff">[Puissance écrasante]</span></h4>
            <p>Augmente la Défense de l'utilisateur de <span class="stat-boost">10%</span>.<br>
            Augmente les probabilités d'acquisition de bouclier de l'utilisateur de <span class="stat-boost">2%</span>.<br>
            Durée: 25 seconde(s) (cumulable jusqu'à 5 fois)</p>
        </div>
    `,
    1: `
        <h3>1 étoile :</h3>
        <p>Lorsque l'utilisateur bénéficie d'un effet <span class="buff">[Bouclier]</span>, l'effet <span class="buff">[Puissance écrasante]</span> est activé.<br></p>
    `,
    2: `
        <h3>2 étoiles :</h3>
        <p>Augmente les probabilités d'acquisition de bouclier de <span class="stat-boost">8%</span>.<br>
        Lorsqu'un effet <span class="buff">[Bouclier]</span> est actif, les Dégâts de coup critique et le Taux de coup critique de l'utilisateur augmentent de <span class="stat-boost">10%</span>.<br></p>
    `,
    3: `
        <h3>3 étoiles :</h3>
        <p>L'effet <span class="buff">[Surcroissance]</span> est appliqué lorsqu'un effet [Bouclier] est actif.<br>
        (temps de rechargement: 0,5 seconde)<br>
        Si le dernier coup de la compétence <strong>Écrasement colossal</strong> touche sa cible pendant que l'effet <span class="buff">[Tyran d'acier]</span> est actif, l'effet <span class="buff">[Surcroissance]</span> est activé.<br></p>
        <div class="detail-box">
            <h4><span class="buff">[Surcroissance]</span></h4>
            <p>Le Bouclier de l'utilisateur vole en éclats de mana qui infligent des dégâts de zone de lumière équivalents à <span class="stat-boost">200 %</span> de la Défense de Thomas André.<br>
            Pour chaque tranche de 1.000 points d'effet de [Bouclier] appliqués, les dégâts de Surcroissance augmentent de <span class="stat-boost">100%</span> (cumulable jusqu'à 1000%).<br></p>
        </div>
    `,
    4: `
        <h3>4 étoiles :</h3>
        <p>Augmente la Défense de <span class="stat-boost">16%</span>.<br></p>
    `,
    5: `
        <h3>5 étoiles :</h3>
        <p>Lorsque l'effet <span class="buff">[Tyran d'acier]</span> est actif, il augmente les dégâts de <strong>Collision de trou noir</strong> de <span class="stat-boost">125%</span>.<br></p>
    `
};

// --- RÉSUMÉ (COURT) ---
const charSummaryData = {
    0: `
        <h3>Passif : Le Goliath</h3>
        <p>Compétences = <span class="buff">[Puissance écrasante]</span> (Def +10%, Chance Bouclier +2%, Max 5).<br>
        Pas de Jauge/CD normal.<br> 5 cumuls = Ultime dispo.<br>
        Combat équipe : Dégâts <span class="stat-boost">+24%</span>.</p>
    `,
    1: `
        <h3>1 étoile</h3>
        <p>Si <span class="buff">[Bouclier]</span> actif = active [Puissance écrasante].<br></p>
    `,
    2: `
        <h3>2 étoiles</h3>
        <p>Chance Bouclier <span class="stat-boost">+8%</span>.<br>
        Si Bouclier : Crit Rate/Dmg <span class="stat-boost">+10%</span>.<br></p>
    `,
    3: `
        <h3>3 étoiles</h3>
        <p>Bouclier actif = <span class="buff">[Surcroissance]</span> (Explosion du bouclier en dégâts).<br>
        Dégâts Explosion basés sur la valeur du Bouclier (<span class="stat-boost">+100%</span> par 1000 pts).<br></p>
    `,
    4: `
        <h3>4 étoiles</h3>
        <p>Défense <span class="stat-boost">+16%</span>.<br></p>
    `,
    5: `
        <h3>5 étoiles</h3>
        <p>Sous [Tyran d'acier] : Dégâts Collision de trou noir <span class="stat-boost">+125%</span>.<br></p>
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
   LOGIQUE ARME (Le véritable roi)
   ========================================== */
const weaponStarsContainer = document.getElementById('weapon-stars-container');
const weaponStars = weaponStarsContainer.querySelectorAll('.star');
const weaponMessage = document.getElementById('weapon-message');

let weaponCurrentLevel = 0;

const weaponData = {
    0: `
        <h3>Avancement 0 :</h3>
        <p>Augmente la Défense de <span class="stat-boost">4%</span>.<br>
        Augmente les probabilités d'acquisition de bouclier de <span class="stat-boost">6%</span>.<br></p>
    `,
    1: `
        <h3>Avancement 5 étoiles :</h3>
        <p>Augmente la Défense de <span class="stat-boost">16%</span>.<br>
        Augmente les probabilités d'acquisition de bouclier de <span class="stat-boost">24%</span>.<br></p>
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