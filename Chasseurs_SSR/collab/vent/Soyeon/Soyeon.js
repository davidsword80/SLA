/* ==========================================
   LOGIQUE PERSONNAGE (Soyeon)
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
        <p>Lorsque les compétences QTE, ultime ou l'attaque de noyau touchent leur cible, la jauge d'<span class="buff">[Énergie du flash]</span> se remplit.<br>
        Lorsque la jauge d'<span class="buff">[Énergie du flash]</span> est remplie au maximum, l'effet <span class="buff">[Énergie du flash]</span> est activé.<br></p>
        
        <div class="detail-box">
            <h4><span class="buff">[Énergie du flash]</span></h4>
            <p>Augmente la Vitesse d'attaque, le Taux de coup critique et les Dégâts de coup critique de <span class="stat-boost">10 %</span>.<br>
            Durée : 20 seconde(s)</p>
        </div>
    `,
    1: `
        <h3>1 étoile :</h3>
        <p>Lorsque l'attaque de noyau est utilisée alors que la jauge d'<span class="buff">[Énergie du flash]</span> est remplie au maximum, l'effet <span class="buff">[Décharge]</span> est activé et la jauge d'<span class="buff">[Énergie du flash]</span> se vide entièrement.<br>
        L'effet <span class="buff">[Énergie du flash]</span> est activé lorsque l'utilisatrice arrive dans le niveau.<br>
        Les compétences <strong>Éclair de brèche</strong> et <strong>Entaille tournoyante</strong> deviennent respectivement <strong>Flash d'acier</strong> et <strong>Entaille tournoyante double</strong>, et leurs dégâts augmentent de <span class="stat-boost">100 %</span>.<br></p>

        <div class="detail-box">
            <h4><span class="buff">[Décharge]</span></h4>
            <p>Augmente les dégâts infligés de <span class="stat-boost">30 %</span>.<br>
            Durée : 15 seconde(s)</p>
        </div>
    `,
    2: `
        <h3>2 étoiles :</h3>
        <p>Augmente les dégâts de vent de l'utilisatrice de <span class="stat-boost">30 %</span>.<br></p>
    `,
    3: `
        <h3>3 étoiles :</h3>
        <p>L'effet <span class="buff">[Décharge]</span> n'active pas l'effet <span class="buff">[Énergie du flash]</span>, mais active l'effet <span class="buff">[Vitesse maximale]</span> à la place.<br></p>

        <div class="detail-box">
            <h4><span class="buff">[Vitesse maximale]</span></h4>
            <p>Augmente les dégâts infligés de <span class="stat-boost">50 %</span>.<br>
            Augmente la Vitesse d'attaque de <span class="stat-boost">30 %</span>.<br>
            Confère l'effet <span class="buff">[Super armure]</span>.<br>
            Durée : 15 seconde(s)</p>
        </div>
    `,
    4: `
        <h3>4 étoiles :</h3>
        <p>Le taux de remplissage de la jauge de puissance des membres de l'équipe de l'élément Vent augmente de <span class="stat-boost">20 %</span>.<br></p>
    `,
    5: `
        <h3>5 étoiles :</h3>
        <p>Les compétences <strong>Angle mort</strong> et <strong>Entaille tournoyante</strong> deviennent respectivement <strong>Angle mort instantané</strong> et <strong>Entaille tournoyante double</strong>, et leurs dégâts augmentent de <span class="stat-boost">50 %</span>.<br>
        Lorsque l'effet <span class="buff">[Décharge]</span> est activé, les temps de rechargement des compétences <strong>Angle mort instantané</strong> et <strong>Entaille tournoyante double</strong> sont réinitialisés.<br></p>
    `
};

// --- RÉSUMÉ (COURT) ---
const charSummaryData = {
    0: `
        <h3>Passif : Vitesse Lumière</h3>
        <p>Remplissage Jauge <span class="buff">[Énergie du flash]</span> via QTE, Ultime ou Attaque Noyau.<br>
        Jauge Max active <span class="buff">[Énergie du flash]</span> : Vitesse Atk, Taux Crit et Dégâts Crit <span class="stat-boost">+10%</span> (20s).</p>
    `,
    1: `
        <h3>1 étoile</h3>
        <p>Entrée : Active <span class="buff">[Énergie du flash]</span>.<br>
        Attaque Noyau avec Jauge Max = <span class="buff">[Décharge]</span> (Dégâts <span class="stat-boost">+30%</span>, vide la jauge).<br>
        Compétences améliorées : Flash d'acier et Entaille double (Dégâts <span class="stat-boost">+100%</span>).</p>
    `,
    2: `
        <h3>2 étoiles</h3>
        <p>Dégâts Vent <span class="stat-boost">+30%</span>.<br></p>
    `,
    3: `
        <h3>3 étoiles</h3>
        <p>[Décharge] active <span class="buff">[Vitesse maximale]</span> au lieu de [Énergie du flash].<br>
        <span class="buff">[Vitesse maximale]</span> : Dégâts <span class="stat-boost">+50%</span>, Vitesse Atk <span class="stat-boost">+30%</span>, Super armure.</p>
    `,
    4: `
        <h3>4 étoiles</h3>
        <p>Taux remplissage Jauge Puissance équipe Vent <span class="stat-boost">+20%</span>.<br></p>
    `,
    5: `
        <h3>5 étoiles</h3>
        <p>Compétences améliorées : Angle mort instantané et Entaille double (Dégâts <span class="stat-boost">+50%</span>).<br>
        Activation de <span class="buff">[Décharge]</span> réinitialise le TdR de ces compétences.</p>
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
   LOGIQUE ARME (Flash flamboyant)
   ========================================== */
const weaponStarsContainer = document.getElementById('weapon-stars-container');
const weaponStars = weaponStarsContainer.querySelectorAll('.star');
const weaponMessage = document.getElementById('weapon-message');

let weaponCurrentLevel = 0;

const weaponData = {
    0: `
        <h3>Avancement 0 :</h3>
        <p>Augmente le Taux de coup critique de l'utilisatrice de <span class="stat-boost">4 %</span>.<br>
        Lorsque l'effet <span class="buff">[Décharge]</span> est activé, les dégâts des compétences de base augmentent de <span class="stat-boost">15 %</span> pendant 15 seconde(s).</p>
    `,
    1: `
        <h3>Avancement 5 étoiles :</h3>
        <p>Augmente le Taux de coup critique de l'utilisatrice de <span class="stat-boost">12 %</span>.<br>
        Lorsque l'effet <span class="buff">[Décharge]</span> est activé, les dégâts des compétences de base augmentent de <span class="stat-boost">50 %</span> pendant 15 seconde(s).</p>
    `,
    2: `
        <h3>Avancement 10 étoiles :</h3>
        <p>L'Attaque, la Défense et les PV de l'utilisatrice augmentent de <span class="stat-boost">15 %</span>.</p>
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