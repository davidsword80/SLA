/* ==========================================
   LOGIQUE PERSONNAGE (Hwang Dongsoo)
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
        <p>Lors de l'utilisation des compétences <strong>Soif de tuer</strong>, <strong>Frappe de fer</strong> ou <strong>Influence de rang S</strong> ou après que l'utilisateur a subi une attaque, l'effet <span class="buff">[Impulsion]</span> s'applique.<br>
        Lorsque l'effet <span class="buff">[Impulsion]</span> atteint son nombre de cumuls maximum, l'effet <span class="buff">[Vengeance impulsive]</span> s'applique.<br></p>
        <div class="detail-box">
            <h4><span class="buff">[Impulsion]</span></h4>
            <p>Augmente la Défense de l'utilisateur de <span class="stat-boost">3%</span> (cumulable jusqu'à 5 fois).<br>
            Durée: illimitée</p>
        </div>
        <div class="detail-box">
            <h4><span class="buff">[Vengeance impulsive]</span></h4>
            <p>Lorsque cet effet est actif, il dissipe l'effet <span class="buff">[Impulsion]</span>.<br>
            Augmente la Défense de l'utilisateur de <span class="stat-boost">24%</span>.<br>
            Crée un <span class="buff">[Bouclier]</span> équivalent à <span class="stat-boost">12%</span> de la Défense de l'utilisateur.<br>
            Lorsque l'effet est appliqué pour la première fois, améliore <strong>Scavenger d'avarice</strong>, double les dégâts et réinitialise le temps de rechargement.<br>
            Durée: 10 seconde(s)</p>
        </div>
    `,
    1: `
        <h3>1 étoile :</h3>
        <p>La compétence <strong>Scavenger d'avarice</strong> peut être chargée jusqu'au palier 2, augmentant ainsi ses dégâts de <span class="stat-boost">150%</span> maximum selon le temps de charge.<br>
        L'utilisation de <strong>Scavenger d'avarice</strong> applique l'effet <span class="buff">[Super armure]</span>.<br></p>
    `,
    2: `
        <h3>2 étoiles :</h3>
        <p>Augmente la Défense de l'utilisateur de <span class="stat-boost">8%</span>.<br></p>
    `,
    3: `
        <h3>3 étoiles :</h3>
        <p>À chaque utilisation des compétences <strong>Soif de tuer</strong> ou <strong>Scavenger d'avarice</strong>, l'utilisateur obtient l'effet <span class="buff">[Folie]</span>.<br></p>
        <div class="detail-box">
            <h4><span class="buff">[Folie]</span></h4>
            <p>Augmente la Défense et la Pénétration de défense de l'utilisateur de <span class="stat-boost">4%</span> (cumulable Jusqu'a 3 fois)<br>
            Durée: 6 seconde(s)</p>
        </div>
    `,
    4: `
        <h3>4 étoiles :</h3>
        <p>Augmente les dégâts de <strong>Sans pitié</strong> de l'utilisateur de <span class="stat-boost">40 %</span>.<br></p>
    `,
    5: `
        <h3>5 étoiles :</h3>
        <p>Les dégâts de <strong>Sans pitié</strong> infligés par l'utilisateur augmentent de <span class="stat-boost">80%</span> lorsque <strong>Vengeance Impulsive</strong> est active.<br></p>
    `
};

// --- RÉSUMÉ (COURT) ---
const charSummaryData = {
    0: `
        <h3>Passif : Le Chasseur Implacable</h3>
        <p>Compétences / Subir attaque = <span class="buff">[Impulsion]</span> (Def <span class="stat-boost">+3%</span>, Max 5).<br>
        Max Impulsion = <span class="buff">[Vengeance impulsive]</span> (Def <span class="stat-boost">+24%</span>, Bouclier).<br>
        1ère Vengeance : Reset + Boost Scavenger d'avarice.</p>
    `,
    1: `
        <h3>1 étoile</h3>
        <p>Scavenger d'avarice : Chargeable (Palier 2, Dégâts <span class="stat-boost">+150%</span>).<br>
        Applique <span class="buff">[Super armure]</span>.<br></p>
    `,
    2: `
        <h3>2 étoiles</h3>
        <p>Défense <span class="stat-boost">+8%</span>.<br></p>
    `,
    3: `
        <h3>3 étoiles</h3>
        <p>Compétences = <span class="buff">[Folie]</span>.<br>
        [Folie] : Def/Pen Def <span class="stat-boost">+4%</span> (Max 3).<br></p>
    `,
    4: `
        <h3>4 étoiles</h3>
        <p>Dégâts Sans pitié <span class="stat-boost">+40%</span>.<br></p>
    `,
    5: `
        <h3>5 étoiles</h3>
        <p>Si Vengeance active : Dégâts Sans pitié <span class="stat-boost">+80%</span>.<br></p>
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
   LOGIQUE ARME (Une touche de douceur)
   ========================================== */
const weaponStarsContainer = document.getElementById('weapon-stars-container');
const weaponStars = weaponStarsContainer.querySelectorAll('.star');
const weaponMessage = document.getElementById('weapon-message');

let weaponCurrentLevel = 0;

const weaponData = {
    0: `
        <h3>Avancement 0 :</h3>
        <p>Les dégâts de vent infligés par l'utilisateur augmentent de <span class="stat-boost">4%</span>.<br>
        Les dégâts de compétence de base de l'utilisateur augmentent de <span class="stat-boost">3%</span> lorsque les effets <span class="buff">[Vengeance impulsive ou Folie]</span> s'activent (cumulable jusqu'à 4 fois).<br></p>
    `,
    1: `
        <h3>Avancement 5 étoiles :</h3>
        <p>Les dégâts de vent infligés par l'utilisateur augmentent de <span class="stat-boost">12%</span>.<br>
        Les dégâts de compétence de base de l'utilisateur augmentent de <span class="stat-boost">3%</span> lorsque les effets <span class="buff">[Vengeance impulsive ou Folie]</span> s'activent (cumulable jusqu'à 15 fois).<br></p>
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