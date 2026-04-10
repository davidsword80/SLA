/* ==========================================
   LOGIQUE PERSONNAGE (Miyeon)
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
        <p>Tout l'équipe reçoit l'effet <span class="buff">[FOREVER]</span> en arrivant dans les modes Mission Rappel et Donjon éphémère.<br>
        Lors de l'utilisation de la compétence <strong>Tête d'affiche</strong>, l'effet <span class="buff">[Coup de projecteur]</span> s'active.<br></p>
        
        <div class="detail-box">
            <h4><span class="buff">[FOREVER]</span></h4>
            <p>Augmente les dégâts infligés de <span class="stat-boost">5 %</span>.<br>
            Durée : illimitée (cumulable jusqu'à 3 fois)</p>
        </div>

        <div class="detail-box">
            <h4><span class="buff">[Coup de projecteur]</span></h4>
            <p>Lors de l'utilisation de son attaque de noyau, l'utilisatrice place un <span class="buff">[Cristal d'énergie de mana noir]</span>.<br>
            Augmente les dégâts de lumière de l'utilisatrice de <span class="stat-boost">15 %</span>.<br>
            Confère un <span class="buff">[Bouclier]</span> équivalent à <span class="stat-boost">5 %</span> des PV max de MIYEON. Augmente la Défense de l'utilisatrice de <span class="stat-boost">30 %</span>.<br>
            Durée : 15 seconde(s)</p>
        </div>

        <div class="detail-box">
            <h4><span class="buff">[Cristal d'énergie de mana noir]</span></h4>
            <p>Dégâts : inflige des dégâts équivalents à <span class="stat-boost">250 %</span> des dégâts de l'attaque de noyau de l'utilisatrice.</p>
        </div>
    `,
    1: `
        <h3>1 étoile :</h3>
        <p>Lorsque l'utilisatrice rejoint un niveau, sa jauge de puissance se remplit de <span class="stat-boost">50 %</span>.<br>
        Lors de l'utilisation de <strong>Tête d'affiche</strong>, l'attaque de noyau de l'utilisatrice s'active et elle récupère ses PM à hauteur de 600.<br></p>
    `,
    2: `
        <h3>2 étoiles :</h3>
        <p>Augmente les dégâts de lumière de <span class="stat-boost">15 %</span>.<br></p>
    `,
    3: `
        <h3>3 étoiles :</h3>
        <p>L'utilisation des compétences <strong>Glissando decrescendo</strong>, <strong>Fente en deux temps</strong> ou <strong>Entaille critique</strong> confère un <span class="buff">[Bouclier]</span> équivalent à <span class="stat-boost">5 %</span> des PV max de MIYEON pendant 15 seconde(s) (cumulable jusqu'à 10 fois).<br>
        Tant que le <span class="buff">[Bouclier]</span> est actif, la Défense de l'utilisatrice augmente de <span class="stat-boost">6 %</span> pendant 30 seconde(s) (cumulable jusqu'à 10 fois).<br></p>
    `,
    4: `
        <h3>4 étoiles :</h3>
        <p>La Défense des membres de l'équipe de l'élément Lumière augmente de <span class="stat-boost">3 %</span> par allié de l'élément Lumière.<br></p>
    `,
    5: `
        <h3>5 étoiles :</h3>
        <p>L'utilisation de la compétence <strong>Tête d'affiche</strong> augmente le Taux de coup critique de l'utilisatrice de <span class="stat-boost">10 %</span> et ses Dégâts de coup critique de <span class="stat-boost">20 %</span> pendant 15 seconde(s).<br>
        Lors de l'utilisation des compétences <strong>Glissando decrescendo</strong>, <strong>Fente en deux temps</strong> ou <strong>Entaille critique</strong>, la jauge de puissance de MIYEON se remplit de <span class="stat-boost">3 %</span> et le temps de rechargement de <strong>Tête d'affiche</strong> de 4.5 seconde(s).<br></p>
    `
};

// --- RÉSUMÉ (COURT) ---
const charSummaryData = {
    0: `
        <h3>Passif : Idol de Lumière</h3>
        <p>Modes spéciaux : Buff <span class="buff">[FOREVER]</span> (Dégâts +5%).<br>
        <strong>Tête d'affiche</strong> active <span class="buff">[Coup de projecteur]</span> : Dégâts Lumière <span class="stat-boost">+15%</span>, Défense <span class="stat-boost">+30%</span>, Bouclier.<br>
        Pose un <span class="buff">[Cristal]</span> (Dégâts de zone).</p>
    `,
    1: `
        <h3>1 étoile</h3>
        <p>Entrée : Jauge 50%.<br>
        <strong>Tête d'affiche</strong> déclenche Attaque Noyau + Regen 600 PM.</p>
    `,
    2: `
        <h3>2 étoiles</h3>
        <p>Dégâts Lumière <span class="stat-boost">+15%</span>.<br></p>
    `,
    3: `
        <h3>3 étoiles</h3>
        <p>Compétences confèrent <span class="buff">[Bouclier]</span> (Stackable).<br>
        Sous Bouclier : Défense <span class="stat-boost">+6%</span> par stack.</p>
    `,
    4: `
        <h3>4 étoiles</h3>
        <p>Défense équipe Lumière <span class="stat-boost">+3%</span> par allié Lumière.<br></p>
    `,
    5: `
        <h3>5 étoiles</h3>
        <p><strong>Tête d'affiche</strong> : Crit Rate <span class="stat-boost">+10%</span>, Crit Dmg <span class="stat-boost">+20%</span>.<br>
        Compétences : Jauge <span class="stat-boost">+3%</span>, CD Tête d'affiche <span class="stat-boost">-4.5s</span>.</p>
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
   LOGIQUE ARME (L'étoile guide du champ de bataille)
   ========================================== */
const weaponStarsContainer = document.getElementById('weapon-stars-container');
const weaponStars = weaponStarsContainer.querySelectorAll('.star');
const weaponMessage = document.getElementById('weapon-message');

let weaponCurrentLevel = 0;

const weaponData = {
    0: `
        <h3>Avancement 0 :</h3>
        <p>La Défense de l'utilisatrice augmente de <span class="stat-boost">2 %</span>.<br>
        L'utilisation de l'attaque de noyau applique aux ennemis se trouvant dans un rayon de 20 m un effet d'augmentation des dégats infligés par MIYEON de <span class="stat-boost">5 %</span> pendant 5 seconde(s) (temps de rechargement: 20 seconde(s)).</p>
    `,
    1: `
        <h3>Avancement 5 étoiles :</h3>
        <p>La Défense de l'utilisatrice augmente de <span class="stat-boost">12 %</span>.<br>
        L'utilisation de l'attaque de noyau applique aux ennemis se trouvant dans un rayon de 20 m un effet d'augmentation des dégats infligés par MIYEON de <span class="stat-boost">30 %</span> pendant 30 seconde(s) (temps de rechargement: 20 seconde(s)).</p>
    `,
    2: `
        <h3>Avancement 10 étoiles :</h3>
        <p>Augmente l'Attaque, la Défense et les PV de l'utilisatrice de <span class="stat-boost">15 %</span>.</p>
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