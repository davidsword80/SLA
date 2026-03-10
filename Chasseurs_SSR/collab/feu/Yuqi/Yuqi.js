/* ==========================================
   LOGIQUE PERSONNAGE (Yuqi)
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
        <p>Toute l'équipe reçoit l'effet <span class="buff">[FOREVER]</span> en arrivant dans les modes Mission Rappel et Donjon éphémère.<br>
        Lorsque YUQI ou un allié parvient à mettre un ennemi en état de <span class="buff">[Bris]</span>, la durée de l'état de <span class="buff">[Bris]</span> augmente de 3 seconde(s).<br>
        L'utilisation des compétences <strong>Fracas d'ampli</strong>, <strong>Cri crescendo</strong>, <strong>Coup de pied rotatif montant</strong> ou <strong>Cri sans limite</strong> active <strong>Coup de pied hurlant</strong>.<br>
        Chaque fois que les compétences <strong>Coup de pied hurlant</strong>, <strong>Fracas d'ampli</strong> ou <strong>Coup de pied rotatif montant</strong> touchent leur cible, l'utilisatrice active l'effet <span class="buff">[Tempo]</span> et recharge la jauge <span class="buff">[Éclatement total]</span>.<br>
        Lorsque la jauge <span class="buff">[Éclatement total]</span> atteint 100 % de sa charge, elle active l'effet <span class="buff">[Éclatement total]</span>.<br></p>
        
        <div class="detail-box">
            <h4><span class="buff">[FOREVER]</span></h4>
            <p>Augmente les dégâts infligés de <span class="stat-boost">5 %</span>.<br>
            Durée : illimitée (cumulable jusqu'à 3 fois)</p>
        </div>

        <div class="detail-box">
            <h4><span class="buff">[Tempo]</span></h4>
            <p>Augmente les PV max de <span class="stat-boost">0.5 %</span>.<br>
            Augmente les dégâts de la compétence <strong>Coup de pied hurlant</strong> de <span class="stat-boost">0.5 %</span>.<br>
            Durée : 10 seconde(s) (cumulable jusqu'à 15 fois)</p>
        </div>

        <div class="detail-box">
            <h4><span class="buff">[Éclatement total]</span></h4>
            <p>Les compétences <strong>Fracas d'ampli</strong> et <strong>Coup de pied rotatif montant</strong> deviennent <strong>Cri crescendo</strong> et <strong>Cri sans limite</strong>, ce qui réinitialise leur temps de rechargement.<br>
            Augmente l'efficacité de <span class="buff">[Bris]</span> de <strong>Coup de pied hurlant</strong> de <span class="stat-boost">25 %</span>.<br>
            Augmente les dégâts de la compétence <strong>Coup de pied hurlant</strong> de <span class="stat-boost">10 %</span>. Augmente les PV max de <span class="stat-boost">10 %</span>.<br>
            Confère <span class="buff">[Super armure]</span> tant que l'effet est actif. Tant que l'effet est actif, l'effet <span class="buff">[Tempo]</span> est supprimé et ne peut plus être activé.<br>
            Durée : 10 seconde(s)</p>
        </div>
    `,
    1: `
        <h3>1 étoile :</h3>
        <p>Le taux de recharge de la jauge <span class="buff">[Éclatement total]</span> augmente de <span class="stat-boost">100%</span>.<br>
        Lorsque les compétences <strong>Fracas d'ampli</strong>, <strong>Cri crescendo</strong>, <strong>Coup de pied rotatif montant</strong> ou <strong>Cri sans limite</strong> touchent leur cible, elles leur appliquent l'effet <span class="buff">[Distorsion]</span>.<br>
        Lorsque la compétence <strong>Bête de scène</strong> touche sa cible, elle lui applique l'effet <span class="buff">[Craquage]</span>.<br></p>

        <div class="detail-box">
            <h4><span class="buff">[Distorsion]</span></h4>
            <p>Augmente les dégâts subis de <span class="stat-boost">3 %</span>. Lorsque l'effet atteint le nombre maximal de cumuls, l'effet <span class="buff">[Craquage]</span> s'active.<br>
            Durée : 10 seconde(s) (cumulable jusqu'à 3 fois)</p>
        </div>

        <div class="detail-box">
            <h4><span class="buff">[Craquage]</span></h4>
            <p>Augmente les dégâts subis de <span class="stat-boost">15 %</span>.<br>
            Augmente les dégâts de feu subis de <span class="stat-boost">20 %</span>. L'effet <span class="buff">[Distorsion]</span> est supprimé et ne peut plus être activé tant que cet effet est actif.<br>
            Durée : 20 seconde(s)</p>
        </div>
    `,
    2: `
        <h3>2 étoiles :</h3>
        <p>L'efficacité de <span class="buff">[Bris]</span> augmente de <span class="stat-boost">20 %</span>.<br></p>
    `,
    3: `
        <h3>3 étoiles :</h3>
        <p>L'effet <span class="buff">[Éclatement total]</span> est amélioré. L'utilisation de l'effet <strong>Bête de scène</strong> active l'effet <span class="buff">[Postluminescence]</span> sur toute l'équipe.<br></p>

        <div class="detail-box">
            <h4><span class="buff">[Éclatement total]</span> (Amélioré)</h4>
            <p>Les compétences <strong>Fracas d'ampli</strong> et <strong>Coup de pied rotatif montant</strong> deviennent <strong>Cri crescendo</strong> et <strong>Cri sans limite</strong>, et leurs temps de rechargement sont réinitialisés.<br>
            Augmente l'efficacité de <span class="buff">[Bris]</span> de <strong>Coup de pied hurlant</strong> de <span class="stat-boost">50 %</span>.<br>
            Augmente les dégâts de la compétence <strong>Coup de pied hurlant</strong> de <span class="stat-boost">40 %</span>. Augmente les PV max de <span class="stat-boost">25 %</span>.<br>
            Lorsque les compétences <strong>Coup de pied hurlant</strong>, <strong>Cri crescendo</strong> ou <strong>Cri sans limite</strong> touchent leur cible, la jauge de puissance se recharge de <span class="stat-boost">20 %</span> (ne s'active qu'une fois lorsque la compétence touche sa cible).<br>
            Confère <span class="buff">[Super armure]</span> tant que l'effet est actif. L'effet <span class="buff">[Tempo]</span> est supprimé et ne peut plus être activé tant que l'effet est actif.<br>
            Durée : 10 seconde(s).</p>
        </div>

        <div class="detail-box">
            <h4><span class="buff">[Postluminescence]</span></h4>
            <p>Augmente les dégâts infligés aux cibles en état de <span class="buff">[Bris]</span> de <span class="stat-boost">12 %</span>.<br>
            Augmente les dégâts de compétence de base et de compétence ultime de <span class="stat-boost">15 %</span>.<br>
            Augmente les Dégâts de coup critique de <span class="stat-boost">15 %</span>. Durée : 20 seconde(s)</p>
        </div>
    `,
    4: `
        <h3>4 étoiles :</h3>
        <p>Les dégâts de feu des membres de l'équipe de l'élément Feu augmentent de <span class="stat-boost">5 %</span> par allié de l'élément Feu présent dans le groupe.<br></p>
    `,
    5: `
        <h3>5 étoiles :</h3>
        <p>Les effets <span class="buff">[Distorsion]</span>, <span class="buff">[Craquage]</span> et <span class="buff">[Postluminescence]</span> sont améliorés.<br></p>

        <div class="detail-box">
            <h4><span class="buff">[Distorsion]</span> (Amélioré)</h4>
            <p>Augmente les dégâts infligés de <span class="stat-boost">6 %</span>.<br>
            Active l'effet <span class="buff">[Craquage]</span> une fois le nombre de cumuls maximum atteint.<br>
            Durée : 15 seconde(s) (cumulable jusqu'à 3 fois)</p>
        </div>

        <div class="detail-box">
            <h4><span class="buff">[Craquage]</span> (Amélioré)</h4>
            <p>Augmente les dégâts infligés de <span class="stat-boost">20 %</span>.<br>
            Augmente les dégâts de feu infligés de <span class="stat-boost">25 %</span>. L'effet <span class="buff">[Distorsion]</span> est supprimé et ne peut plus être activé tant que cet effet est actif.<br>
            Durée : 30 seconde(s)</p>
        </div>

        <div class="detail-box">
            <h4><span class="buff">[Postluminescence]</span> (Amélioré)</h4>
            <p>Augmente les dégâts subis par une cible en état de <span class="buff">[Bris]</span> de <span class="stat-boost">12 %</span>.<br>
            Augmente les dégâts de compétence de base et de compétence ultime de <span class="stat-boost">30 %</span>.<br>
            Augmente les Dégâts de coup critique de <span class="stat-boost">20 %</span>. Durée : 30 seconde(s)</p>
        </div>
    `
};

// --- RÉSUMÉ (COURT) ---
const charSummaryData = {
    0: `
        <h3>Passif : Star du Rock</h3>
        <p>Bris durée +3s. Mode spécial : Buff <span class="buff">[FOREVER]</span> (+5% dégâts).<br>
        Compétences stack <span class="buff">[Tempo]</span> (PV/Dégâts skill).<br>
        Jauge pleine = <span class="buff">[Éclatement total]</span> (Reset CD, Boost Bris/Dégâts/PV, Super armure).</p>
    `,
    1: `
        <h3>1 étoile</h3>
        <p>Recharge Jauge +100%.<br>
        Compétences appliquent <span class="buff">[Distorsion]</span> (Dégâts subis +3%).<br>
        Bête de scène applique <span class="buff">[Craquage]</span> (Dégâts subis +15%, Feu +20%).</p>
    `,
    2: `
        <h3>2 étoiles</h3>
        <p>L'efficacité de <span class="buff">[Bris]</span> augmente de <span class="stat-boost">20 %</span>.<br></p>
    `,
    3: `
        <h3>3 étoiles</h3>
        <p><span class="buff">[Éclatement total]</span> amélioré : Boost Bris +50%, Dégâts +40%, PV +25%, Recharge Jauge Puissance.<br>
        Bête de scène active <span class="buff">[Postluminescence]</span> équipe (Bonus sur cible Bris, Skill Dmg, Crit Dmg).</p>
    `,
    4: `
        <h3>4 étoiles</h3>
        <p>Dégâts Feu équipe <span class="stat-boost">+5%</span> par allié Feu.<br></p>
    `,
    5: `
        <h3>5 étoiles</h3>
        <p>Améliore <span class="buff">[Distorsion]</span> (Dégâts infligés +6%) et <span class="buff">[Craquage]</span> (Dégâts infligés +20%, Feu +25%).<br>
        Améliore <span class="buff">[Postluminescence]</span> (Bonus Skill Dmg +30%, Crit Dmg +20%).</p>
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
   LOGIQUE ARME (Soleil vertueux)
   ========================================== */
const weaponStarsContainer = document.getElementById('weapon-stars-container');
const weaponStars = weaponStarsContainer.querySelectorAll('.star');
const weaponMessage = document.getElementById('weapon-message');

let weaponCurrentLevel = 0;

const weaponData = {
    0: `
        <h3>Avancement 0 :</h3>
        <p>Les PV de l'utilisatrice augmentent de <span class="stat-boost">5 %</span>.<br>
        Les dégâts de l'utilisatrice augmentent de <span class="stat-boost">5 %</span> pendant 15 seconde(s) lorsque l'effet <span class="buff">[Éclatement total]</span> est activé.</p>
    `,
    1: `
        <h3>Avancement 5 étoiles :</h3>
        <p>Les PV de l'utilisatrice augmentent de <span class="stat-boost">12 %</span>.<br>
        Les dégâts de l'utilisatrice augmentent de <span class="stat-boost">30 %</span> pendant 15 seconde(s) lorsque l'effet <span class="buff">[Éclatement total]</span> est activé.</p>
    `,
    2: `
        <h3>Avancement 10 étoiles :</h3>
        <p>Augmente l'Attaque, la Défense et les PV de l'utilisateur de <span class="stat-boost">15 %</span>.</p>
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