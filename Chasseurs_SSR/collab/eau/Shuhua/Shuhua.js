/* ==========================================
   LOGIQUE PERSONNAGE (Shuhua)
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
        L'utilisation de la compétence <strong>Atterrissage de pop-star</strong> active l'effet <span class="buff">[Sur scène]</span>.<br>
        Les compétences <strong>Grognement aux étoiles</strong> et <strong>Hurlement aux étoiles</strong> activent l'effet <span class="buff">[Intensité]</span>.<br></p>
        
        <div class="detail-box">
            <h4><span class="buff">[Sur scène]</span></h4>
            <p>Active l'effet <span class="buff">[Représentation]</span> sur SHUHUA toutes les 3 seconde(s).<br>
            Durée : 15 seconde(s)</p>
        </div>

        <div class="detail-box">
            <h4><span class="buff">[FOREVER]</span></h4>
            <p>Augmente les dégâts infligés de <span class="stat-boost">5 %</span>.<br>
            Durée : illimitée (cumulable jusqu'à 3 fois)</p>
        </div>

        <div class="detail-box">
            <h4><span class="buff">[Représentation]</span></h4>
            <p>Augmente les dégâts de l'attaque de noyau de l'utilisatrice de <span class="stat-boost">50 %</span>.<br>
            Confère un <span class="buff">[Bouclier]</span>. Durée : 3 seconde(s)</p>
        </div>

        <div class="detail-box">
            <h4><span class="buff">[Intensité]</span></h4>
            <p><strong>Tempo double</strong> devient <strong>Rythme intense</strong> et augmente les dégâts de la compétence de <span class="stat-boost">50 %</span>.<br>
            Lorsque l'attaque de noyau de l'utilisatrice s'active et qu'elle utilise <strong>Rythme intense</strong>, sa jauge de noyau ne se consume pas.<br>
            Lorsque l'attaque de noyau de l'utilisatrice touche sa cible, le temps de rechargement des compétences <strong>Atterrissage de pop-star</strong>, <strong>Grognement aux étoiles</strong> et <strong>Hurlement aux étoiles</strong> est réduit de 3 seconde(s) (temps de rechargement : 1 seconde(s)).<br>
            L'effet <span class="buff">[Intensité]</span> est appliqué au moyen d'une [attaque de noyau], 6 fois de suite au maximum.<br>
            Durée : 3.5 seconde(s)</p>
        </div>

        <div class="detail-box">
            <h4><span class="buff">[Bouclier]</span></h4>
            <p>Confère un <span class="buff">[Bouclier]</span> équivalent à <span class="stat-boost">10 %</span> de l'Attaque de l'utilisatrice.<br>
            Durée : 3 seconde(s)</p>
        </div>
    `,
    1: `
        <h3>1 étoile :</h3>
        <p>L'effet <span class="buff">[Intensité]</span> est amélioré.<br>
        Chaque fois que <strong>Rythme intense</strong> touche sa cible, l'effet <span class="buff">[Chute de tension]</span> est appliqué.<br></p>

        <div class="detail-box">
            <h4><span class="buff">[Intensité]</span> (Amélioré)</h4>
            <p><strong>Tempo double</strong> devient <strong>Rythme intense</strong>, ce qui augmente les dégâts de l'utilisatrice de <span class="stat-boost">100 %</span>.<br>
            Lorsque l'attaque de noyau de l'utilisatrice s'active et qu'elle utilise <strong>Rythme intense</strong>, aucune charge de sa jauge de noyau n'est consumée.<br>
            Lorsque l'attaque de noyau de l'utilisatrice touche sa cible, le temps de rechargement des compétences <strong>Atterrissage de pop-star</strong>, <strong>Grognement aux étoiles</strong> et <strong>Hurlement aux étoiles</strong> diminue de 5 seconde(s) (temps de rechargement : 1 seconde(s)).<br>
            L'effet <span class="buff">[Intensité]</span> est appliqué au moyen d'une [attaque de noyau], 6 fois de suite au maximum.<br>
            Durée : 3.5 seconde(s)</p>
        </div>

        <div class="detail-box">
            <h4><span class="buff">[Chute de tension]</span></h4>
            <p>Augmente les dégâts d'eau infligés par SHUHUA de <span class="stat-boost">1 %</span>.<br>
            Durée : 30 seconde(s) (cumulable jusqu'à 10 fois)</p>
        </div>
    `,
    2: `
        <h3>2 étoiles :</h3>
        <p><strong>Grognement aux étoiles</strong> devient <strong>Hurlement aux étoiles</strong>, ce qui augmente les dégâts de l'utilisatrice de <span class="stat-boost">100 %</span>.<br></p>
    `,
    3: `
        <h3>3 étoiles :</h3>
        <p>Améliore <span class="buff">[Représentation]</span>.<br></p>

        <div class="detail-box">
            <h4><span class="buff">[Représentation]</span> (Amélioré)</h4>
            <p>Augmente les dégâts de l'attaque de noyau de l'utilisatrice de <span class="stat-boost">55 %</span>.<br>
            Confère un <span class="buff">[Bouclier]</span>. Remplit la jauge de puissance de <span class="stat-boost">10 %</span>. Active l'effet <span class="buff">[Hausse de tension]</span>.<br>
            Durée : 3 seconde(s)</p>
        </div>

        <div class="detail-box">
            <h4><span class="buff">[Hausse de tension]</span></h4>
            <p>Augmente les dégâts d'eau infligés par l'utilisatrice de <span class="stat-boost">20 %</span>.<br>
            Durée : 3 seconde(s)</p>
        </div>

        <div class="detail-box">
            <h4><span class="buff">[Bouclier]</span> (Amélioré)</h4>
            <p>Confère un <span class="buff">[Bouclier]</span> équivalent à <span class="stat-boost">15 %</span> de l'Attaque de l'utilisatrice.<br>
            Durée : 3 seconde(s)</p>
        </div>
    `,
    4: `
        <h3>4 étoiles :</h3>
        <p>L'Attaque augmente de <span class="stat-boost">16 %</span>.<br></p>
    `,
    5: `
        <h3>5 étoiles :</h3>
        <p>L'utilisation de <strong>Hurlement aux étoiles</strong> active l'effet <span class="buff">[Plus fort !]</span>.<br>
        La Vitesse d'attaque de <strong>Rythme intense</strong> augmente considérablement.<br></p>

        <div class="detail-box">
            <h4><span class="buff">[Plus fort !]</span></h4>
            <p>Augmente les dégâts infligés par l'utilisatrice de <span class="stat-boost">30 %</span>.<br>
            Augmente le Taux de coup critique de l'utilisatrice de <span class="stat-boost">30 %</span>. Durée : 10 seconde(s)</p>
        </div>
    `
};

// --- RÉSUMÉ (COURT) ---
const charSummaryData = {
    0: `
        <h3>Passif : Star de la Scène</h3>
        <p>Buffs modes spéciaux : <span class="buff">[FOREVER]</span> (+5% dégâts).<br>
        Compétences activent <span class="buff">[Sur scène]</span> (Active <span class="buff">[Représentation]</span>) et <span class="buff">[Intensité]</span> (Améliore Noyau/Rythme intense).<br>
        <span class="buff">[Représentation]</span> : Dégâts Noyau +50% + Bouclier.</p>
    `,
    1: `
        <h3>1 étoile</h3>
        <p>Rythme intense applique <span class="buff">[Chute de tension]</span> (Dégâts Eau +1%/stack).<br>
        Améliore <span class="buff">[Intensité]</span> : Dégâts +100%, Reset CD, Pas de coût Jauge.</p>
    `,
    2: `
        <h3>2 étoiles</h3>
        <p>Grognement devient <strong>Hurlement aux étoiles</strong> (Dégâts +100%).<br></p>
    `,
    3: `
        <h3>3 étoiles</h3>
        <p>Améliore <span class="buff">[Représentation]</span> : Dégâts Noyau +55%, Jauge Puissance +10%, <span class="buff">[Hausse de tension]</span> (Dégâts Eau +20%).<br>
        Bouclier renforcé (15% Atk).</p>
    `,
    4: `
        <h3>4 étoiles</h3>
        <p>L'Attaque augmente de <span class="stat-boost">16 %</span>.<br></p>
    `,
    5: `
        <h3>5 étoiles</h3>
        <p>Hurlement active <span class="buff">[Plus fort !]</span> : Dégâts/Crit Rate <span class="stat-boost">+30%</span>.<br>
        Vitesse Attaque augmentée pour Rythme intense.</p>
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
   LOGIQUE ARME (Sous le clair de lune)
   ========================================== */
const weaponStarsContainer = document.getElementById('weapon-stars-container');
const weaponStars = weaponStarsContainer.querySelectorAll('.star');
const weaponMessage = document.getElementById('weapon-message');

let weaponCurrentLevel = 0;

const weaponData = {
    0: `
        <h3>Avancement 0 :</h3>
        <p>L'Attaque de l'utilisatrice augmente de <span class="stat-boost">5 %</span>.<br>
        Lorsque les compétences <strong>Tempo double</strong> ou <strong>Rythme intense</strong> touchent leur cible, les dégats de <strong>Catharsis en harmonie</strong> augmentent de <span class="stat-boost">5 %</span> (cumulable jusqu'a 10 fois).<br>
        Lorsque <strong>Catharsis en harmonie</strong> s'estompe, tous les cumuls de l'effet sont supprimés.<br>
        Durée: 30 seconde(s)</p>
    `,
    1: `
        <h3>Avancement 5 étoiles :</h3>
        <p>L'Attaque de l'utilisatrice augmente de <span class="stat-boost">12 %</span>.<br>
        Lorsque les compétences <strong>Tempo double</strong> ou <strong>Rythme intense</strong> touchent leur cible, les dégats de <strong>Catharsis en harmonie</strong> augmentent de <span class="stat-boost">30 %</span> (cumulable jusqu'a 10 fois).<br>
        Lorsque <strong>Catharsis en harmonie</strong> s'estompe, tous les cumuls de l'effet sont supprimés.<br>
        Durée: 30 seconde(s)</p>
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