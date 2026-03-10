/* ==========================================
   LOGIQUE PERSONNAGE (Emma Laurent)
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
        <p>L'effet <span class="buff feu">[Absorption de chaleur]</span> s'applique pour chaque action spécifique.<br>
        Lorsque l'utilisatrice lance <strong>Rapière de feu</strong>, applique l'effet <span class="buff ecarlate">[Radiation de chaleur]</span> en fonction du nombre de cumuls d'[Absorption de chaleur].</p>
        <ul>
            <li>Attaque de base ou Dégâts subis : <strong>+2 cumuls</strong> [Absorption].</li>
            <li>Compétences (Attaque de noyau, Traînée brûlante, Jugement incandescent, Évasion) : <strong>+5 cumuls</strong> [Absorption].</li>
            <li>Fierté incandescente : <strong>+10 cumuls</strong> [Absorption].</li>
        </ul>
        <p>Lorsque l'effet [Radiation de chaleur] est activé, l'effet [Absorption de chaleur] appliqué est consumé.</p>
        
        <div class="detail-box">
            <h4><span class="buff feu">[Absorption de chaleur]</span></h4>
            <p><strong>5 cumuls :</strong> Défense <span class="stat-boost">+7.77%</span>.<br>
            <strong>10 cumuls :</strong> Récupère des PV à hauteur de 7.77% des dégâts subis (15s).<br>
            <strong>15 cumuls :</strong> Applique un <span class="buff">[Bouclier]</span> (7.77% des PV max).<br>
            Durée: 15s</p>
        </div>
        <div class="detail-box">
            <h4><span class="buff ecarlate">[Radiation de chaleur]</span></h4>
            <p><strong>5 cumuls :</strong> Pénétration de défense <span class="stat-boost">+7.77%</span>.<br>
            <strong>10 cumuls :</strong> Dégâts de feu de l'utilisatrice <span class="stat-boost">+7.77%</span>.<br>
            <strong>15 cumuls :</strong> Dégâts de feu de l'équipe <span class="stat-boost">+7.77%</span>.<br>
            Durée: 20s</p>
        </div>
    `,
    1: `
        <h3>1 étoile :</h3>
        <p>Augmente les dégâts de Bris de <strong>Traînée brûlante</strong> de <span class="stat-boost">77.77%</span>.</p>
    `,
    2: `
        <h3>2 étoiles :</h3>
        <p>L'efficacité de <span class="buff">[Bris]</span> de l'utilisateur augmente de <span class="stat-boost">10%</span>.<br>
        Augmente les dégâts infligés aux cibles avec le statut [Bris] de <span class="stat-boost">20%</span>.</p>
    `,
    3: `
        <h3>3 étoiles :</h3>
        <p>L'effet <span class="buff feu">[Absorption de chaleur]</span> s'applique aux membres de l'équipe.<br>
        Applique 5 cumuls d'[Absorption de chaleur] à l'arrivée dans le niveau.</p>
    `,
    4: `
        <h3>4 étoiles :</h3>
        <p>Les PV de l'utilisateur augmentent de <span class="stat-boost">10%</span>.</p>
    `,
    5: `
        <h3>5 étoiles :</h3>
        <p>Lorsque la cible entre en état de <span class="buff">[Bris]</span> :<br>
        - Réinitialise le temps de rechargement de toutes les compétences.<br>
        - Récupère <strong>100%</strong> de la jauge de noyau et de la jauge de puissance.<br>
        - Applique l'effet <span class="buff ecarlate">[Augmentation des dégâts]</span>.</p>
        <div class="detail-box">
            <h4><span class="buff ecarlate">[Augmentation des dégâts]</span></h4>
            <p>Augmente les dégâts de <span class="stat-boost">77.77%</span>.<br>Durée: 15s</p>
        </div>
    `
};

// --- RÉSUMÉ (COURT) ---
const charSummaryData = {
    0: `
        <h3>Passif : Maîtrise de la Chaleur</h3>
        <p>Génère <span class="buff feu">[Absorption]</span> via Attaques/Compétences.<br>
        Consomme [Absorption] via <strong>Rapière de feu</strong> pour activer <span class="buff ecarlate">[Radiation]</span>.</p>
        <div class="detail-box">
            <h4><span class="buff feu">[Absorption]</span> (Max 15)</h4>
            <p>Bonus Def, Regen PV, Bouclier (7.77%).</p>
        </div>
        <div class="detail-box">
            <h4><span class="buff ecarlate">[Radiation]</span> (Max 15)</h4>
            <p>Pen Def, Dégâts Feu Perso/Équipe (7.77%).</p>
        </div>
    `,
    1: `
        <h3>1 étoile</h3>
        <p>Dégâts Bris (Traînée brûlante) <span class="stat-boost">+77.77%</span>.</p>
    `,
    2: `
        <h3>2 étoiles</h3>
        <p>Efficacité Bris <span class="stat-boost">+10%</span>. Dégâts sur [Bris] <span class="stat-boost">+20%</span>.</p>
    `,
    3: `
        <h3>3 étoiles</h3>
        <p>[Absorption] partagé avec l'équipe. Début combat : +5 cumuls.</p>
    `,
    4: `
        <h3>4 étoiles</h3>
        <p>PV Max <span class="stat-boost">+10%</span>.</p>
    `,
    5: `
        <h3>5 étoiles</h3>
        <p>Sur inflige [Bris] : Reset CD skills, Jauges 100%, Dégâts <span class="stat-boost">+77.77%</span> (15s).</p>
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
   LOGIQUE ARME (Pensées Nocturnes)
   ========================================== */
const weaponStarsContainer = document.getElementById('weapon-stars-container');
const weaponStars = weaponStarsContainer.querySelectorAll('.star');
const weaponMessage = document.getElementById('weapon-message');

let weaponCurrentLevel = 0;

const weaponData = {
    0: `
        <h3>Avancement 0 :</h3>
        <p>Augmente les dégâts infligés aux cibles affectées par l'effet <span class="buff">[Bris]</span> de <span class="stat-boost">4%</span>.<br>
        Lorsque l'effet <span class="buff feu">[Absorption de chaleur]</span> s'active, les dégâts infligés par l'utilisateur augmentent de <span class="stat-boost">1.5%</span> (cumulable jusqu'à 4 fois).</p>
    `,
    1: `
        <h3>Avancement 5 étoiles :</h3>
        <p>Augmente les dégâts infligés aux cibles affectées par l'effet <span class="buff">[Bris]</span> de <span class="stat-boost">12%</span>.<br>
        Lorsque l'effet <span class="buff feu">[Absorption de chaleur]</span> s'active, les dégâts infligés par l'utilisateur augmentent de <span class="stat-boost">1.5%</span> (cumulable jusqu'à 15 fois).</p>
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