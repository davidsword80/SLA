/* ==========================================
   LOGIQUE PERSONNAGE (Yoo Jinho)
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
        <p>Lorsque <strong>[À mon tour!, Fais-moi confiance! ou Je vais te protéger!]</strong> touche sa cible, une potion est créée près de l'utilisateur.<br></p>
        <div class="detail-box">
            <h4><span class="buff">[Potion]</span></h4>
            <p>En obtenant une potion, les PV sont restaurés à hauteur de <span class="stat-boost">8%</span> des PV max de Yoo Jinho.<br>
            Temps de rechargement: 20 seconde(s)</p>
        </div>
    `,
    1: `
        <h3>1 étoile :</h3>
        <p>Lors de l'utilisation de la compétence <strong>Fais-moi confiance!</strong>, l'utilisateur crée une aura qui inflige toutes les secondes des dégâts équivalents à <span class="stat-boost">70%</span> de sa Défense pendant la durée d'application du buff de Fais-moi confiance !.<br></p>
    `,
    2: `
        <h3>2 étoiles :</h3>
        <p>Les PV de l'utilisateur augmentent de <span class="stat-boost">8%</span>.<br></p>
    `,
    3: `
        <h3>3 étoiles :</h3>
        <p>Lors de l'utilisation de la compétence <strong>Fais-moi confiance!</strong>, un <span class="buff">[Bouclier]</span> est appliqué.<br></p>
        <div class="detail-box">
            <h4><span class="buff">[Bouclier]</span></h4>
            <p>Crée un <span class="buff">[Bouclier]</span> équivalent à <span class="stat-boost">20%</span> des PV de l'utilisateur.<br>
            Durée: 8 seconde(s)</p>
        </div>
    `,
    4: `
        <h3>4 étoiles :</h3>
        <p>Augmente la Défense de l'utilisateur de <span class="stat-boost">6 %</span>.<br></p>
    `,
    5: `
        <h3>5 étoiles :</h3>
        <p>Tous les effets ci-dessous s'appliquent à l'obtention d'une <span class="buff">[Potion]</span>.<br>
        Restauration de <span class="stat-boost">12%</span> des PV max de Yoo Jinho.<br>
        Applique l'effet <span class="buff">[Attaque augmentée]</span>.<br>
        Applique un <span class="buff">[Bouclier]</span>.<br></p>
        <div class="detail-box">
            <h4><span class="buff">[Attaque augmentée]</span></h4>
            <p>Augmente l'Attaque de <span class="stat-boost">12%</span>.<br>
            Durée: 10 seconde(s)</p>
        </div>
        <div class="detail-box">
            <h4><span class="buff">[Bouclier]</span></h4>
            <p>Crée un <span class="buff">[Bouclier]</span> équivalent à <span class="stat-boost">12%</span> des PV max de Yoo Jinho.<br>
            Durée: 10 seconde(s)</p>
        </div>
    `
};

// --- RÉSUMÉ (COURT) ---
const charSummaryData = {
    0: `
        <h3>Passif : Alchimiste de Terrain</h3>
        <p>Compétences = Création <span class="buff">[Potion]</span>.<br>
        [Potion] : Soin <span class="stat-boost">8%</span> PV Max.<br>
        CD 20s.</p>
    `,
    1: `
        <h3>1 étoile</h3>
        <p>Fais-moi confiance! : Aura de dégâts (<span class="stat-boost">70%</span> Défense/sec).<br></p>
    `,
    2: `
        <h3>2 étoiles</h3>
        <p>PV <span class="stat-boost">+8%</span>.<br></p>
    `,
    3: `
        <h3>3 étoiles</h3>
        <p>Fais-moi confiance! = <span class="buff">[Bouclier]</span> (20% PV).<br></p>
    `,
    4: `
        <h3>4 étoiles</h3>
        <p>Défense <span class="stat-boost">+6%</span>.<br></p>
    `,
    5: `
        <h3>5 étoiles</h3>
        <p>[Potion] Améliorée :<br>
        - Soin <span class="stat-boost">12%</span> PV.<br>
        - Attaque <span class="stat-boost">+12%</span> (10s).<br>
        - Bouclier <span class="stat-boost">12%</span> PV Max (10s).</p>
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
   LOGIQUE ARME (Enchanté)
   ========================================== */
const weaponStarsContainer = document.getElementById('weapon-stars-container');
const weaponStars = weaponStarsContainer.querySelectorAll('.star');
const weaponMessage = document.getElementById('weapon-message');

let weaponCurrentLevel = 0;

const weaponData = {
    0: `
        <h3>Avancement 0 :</h3>
        <p>Augmente l'Attaque, la Défense et les PV de l'utilisateur de <span class="stat-boost">2%</span>.<br>
        Lorsque l'utilisateur obtient une <span class="buff">[Potion]</span> de Yoo Jinho, l'Attaque, la Défense et les PV des membres de l'équipe augmentent de <span class="stat-boost">1.5%</span> supplémentaires pendant 10 seconde(s).<br></p>
    `,
    1: `
        <h3>Avancement 5 étoiles :</h3>
        <p>Augmente l'Attaque, la Défense et les PV de l'utilisateur de <span class="stat-boost">5%</span>.<br>
        Lorsque l'utilisateur obtient une <span class="buff">[Potion]</span> de Yoo Jinho, l'Attaque, la Défense et les PV des membres de l'équipe augmentent de <span class="stat-boost">3%</span> supplémentaires pendant 10 seconde(s).<br></p>
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