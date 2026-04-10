/* ==========================================
   LOGIQUE PERSONNAGE (Park Beom-shik)
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
        <p>Lors de l'utilisation des compétences <strong>Frappe tournoyante!</strong>, <strong>Frappe descendante!</strong> ou <strong>Attaque de charge!</strong>, l'utilisateur applique l'effet <span class="buff">[Père de deux enfants]</span>.<br>
        Si les PV de l'utilisateur sont inférieurs à 30%, l'effet <span class="buff">[Détermination du père]</span> s'applique.<br></p>
        <div class="detail-box">
            <h4><span class="buff">[Père de deux enfants]</span></h4>
            <p>Augmente la Défense de <span class="stat-boost">4%</span> (cumulable jusqu'à 10 fois).<br>
            Durée: 30 seconde(s)</p>
        </div>
        <div class="detail-box">
            <h4><span class="buff">[Détermination du père]</span></h4>
            <p>La compétence <strong>Frappe tournoyante!</strong> peut être utilisée indéfiniment.<br>
            Applique l'effet <span class="buff">[Super armure]</span>.<br>
            Augmente la Vitesse d'attaque de <span class="stat-boost">8%</span>.<br>
            Augmente la Défense de l'utilisateur de <span class="stat-boost">8%</span>.<br>
            Durée: 4 seconde(s) (ne s'active qu'une fois la première fois)</p>
        </div>
    `,
    1: `
        <h3>1 étoile :</h3>
        <p>Les dégâts infligés aux cibles ayant moins de PV que l'utilisateur augmentent de <span class="stat-boost">15%</span>.<br></p>
    `,
    2: `
        <h3>2 étoiles :</h3>
        <p>Votre Défense augmente de <span class="stat-boost">6%</span>.<br></p>
    `,
    3: `
        <h3>3 étoiles :</h3>
        <p>Améliore la compétence <strong>Frappe descendante !</strong>.<br>
        Réduit le temps de charge de l'utilisateur de <span class="stat-boost">30%</span>.<br>
        Augmente la portée de la compétence de <span class="stat-boost">30%</span>.<br>
        Augmente les dégâts de l'utilisateur de <span class="stat-boost">60%</span>.<br></p>
    `,
    4: `
        <h3>4 étoiles :</h3>
        <p>Les PV de l'utilisateur augmentent de <span class="stat-boost">10%</span>.<br></p>
    `,
    5: `
        <h3>5 étoiles :</h3>
        <p>Lors de l'utilisation de la compétence <strong>Une autre ligne temporelle</strong>, l'utilisateur applique l'effet <span class="buff">[Détermination du père]</span>.<br></p>
    `
};

// --- RÉSUMÉ (COURT) ---
const charSummaryData = {
    0: `
        <h3>Passif : Force Paternelle</h3>
        <p>Compétences = <span class="buff">[Père de deux enfants]</span> (Def <span class="stat-boost">+4%</span>, max 10).<br>
        PV < 30% = <span class="buff">[Détermination du père]</span> (Frappe tournoyante infinie, Super armure, Buff Def/Vitesse).</p>
    `,
    1: `
        <h3>1 étoile</h3>
        <p>Dégâts vs PV inférieurs <span class="stat-boost">+15%</span>.<br></p>
    `,
    2: `
        <h3>2 étoiles</h3>
        <p>Défense <span class="stat-boost">+6%</span>.<br></p>
    `,
    3: `
        <h3>3 étoiles</h3>
        <p>Frappe descendante ! améliorée : Charge/Portée/Dégâts boostés.<br></p>
    `,
    4: `
        <h3>4 étoiles</h3>
        <p>PV <span class="stat-boost">+10%</span>.<br></p>
    `,
    5: `
        <h3>5 étoiles</h3>
        <p>Une autre ligne temporelle active <span class="buff">[Détermination du père]</span>.<br></p>
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
   LOGIQUE ARME (Décisions)
   ========================================== */
const weaponStarsContainer = document.getElementById('weapon-stars-container');
const weaponStars = weaponStarsContainer.querySelectorAll('.star');
const weaponMessage = document.getElementById('weapon-message');

let weaponCurrentLevel = 0;

const weaponData = {
    0: `
        <h3>Avancement 0 :</h3>
        <p>Augmente la Défense de l'utilisateur de <span class="stat-boost">2%</span>.<br>
        Lorsque l'effet <span class="buff">[Détermination du père]</span> s'active, un <span class="buff">[Bouclier]</span> supplémentaire équivalent à <span class="stat-boost">2%</span> de la Défense de l'utilisateur est créé, et les dégâts de ses Compétences de base augmentent de <span class="stat-boost">10%</span>.<br></p>
    `,
    1: `
        <h3>Avancement 5 étoiles :</h3>
        <p>Augmente la Défense de l'utilisateur de <span class="stat-boost">8%</span>.<br>
        Lorsque l'effet <span class="buff">[Détermination du père]</span> s'active, un <span class="buff">[Bouclier]</span> supplémentaire équivalent à <span class="stat-boost">8%</span> de la Défense de l'utilisateur est créé, et les dégâts de ses Compétences de base augmentent de <span class="stat-boost">35%</span>.<br></p>
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