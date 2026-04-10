/* ==========================================
   LOGIQUE PERSONNAGE (Frieren)
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
        <p>Les Niveaux 1, 2 et 3 de la compétence <strong>Magie d'attaque normale (Zoltraak) - Coups multiples</strong> s'activent à la suite.<br>
        Le Niveau 3 de la compétence <strong>Magie d'attaque normale (Zoltraak) - Coups multiples</strong> active <strong>Magie d'attaque normale (Zoltraak) - Concentration</strong> une fois.<br>
        Les effets <span class="buff">[Contrôle de l'énergie de mana]</span> et <span class="buff">[Magie défensive]</span> s'activent lorsque l'utilisatrice arrive dans le niveau.<br>
        <strong>Magie d'attaque normale (Zoltraak) - Ultime</strong> active l'effet <span class="buff">[Libération de l'énergie de mana]</span> tant qu'il est actif.<br></p>
        
        <div class="detail-box">
            <h4><span class="buff">[Contrôle de l'énergie de mana]</span></h4>
            <p>Augmente la Défense de l'utilisatrice de <span class="stat-boost">25 %</span>.<br>
            Lorsque les PM de l'utilisatrice sont à 50 % ou plus, sa Défense augmente de <span class="stat-boost">25 %</span>.<br>
            Réduit la Consommation de mana pour les compétences de <span class="stat-boost">20 %</span>.<br>
            Durée : illimitée</p>
        </div>

        <div class="detail-box">
            <h4><span class="buff">[Libération de l'énergie de mana]</span></h4>
            <p>Applique l'effet <span class="buff">[Magie défensive]</span> à toute l'équipe.<br>
            Augmente le Taux de coup critique de <span class="stat-boost">100 %</span>. Supprime l'effet <span class="buff">[Contrôle de l'énergie de mana]</span>.<br>
            Lorsque l'effet <span class="buff">[Libération de l'énergie de mana]</span> est supprimé, l'effet <span class="buff">[Contrôle de l'énergie de mana]</span> est activé sur l'utilisatrice.<br>
            Durée : illimitée</p>
        </div>

        <div class="detail-box">
            <h4><span class="buff">[Magie défensive]</span></h4>
            <p>Confère un <span class="buff">[Bouclier]</span> équivalent à <span class="stat-boost">20 %</span> de la Défense de Frieren.<br>
            Réduit les dégâts subis de <span class="stat-boost">5 %</span>. Durée : 30 seconde(s)</p>
        </div>
    `,
    1: `
        <h3>1 étoile :</h3>
        <p>Lorsque la compétence <strong>Magie d'attaque normale (Zoltraak) - Ultime</strong> touche sa cible, son <span class="buff">[Bouclier]</span> est supprimé.<br>
        Lorsque l'effet <span class="buff">[Magie défensive]</span> de Frieren est activé, toute l'équipe récupère des PV équivalents à <span class="stat-boost">20 %</span> de la Défense de Frieren (temps de rechargement : 10 seconde(s)).<br>
        Lorsque la compétence <strong>Magie de foudre destructrice (Judradjim)</strong> touche sa cible, elle la <span class="buff">[Paralyse]</span>.<br>
        Lorsque la compétence <strong>Magie des flammes de l'enfer (Vollzanbel)</strong> touche sa cible, elle lui applique l'effet <span class="buff">[Vollzanbel]</span>.<br></p>

        <div class="detail-box">
            <h4><span class="buff">[Paralysie]</span></h4>
            <p>Interrompt la cible. Durée : 3 seconde(s)</p>
        </div>

        <div class="detail-box">
            <h4><span class="buff">[Vollzanbel]</span></h4>
            <p>Diminue la Défense de <span class="stat-boost">5 %</span>.<br>
            Augmente le risque de subir des Dégâts de coup critique de <span class="stat-boost">5 %</span>.<br>
            Augmente les Dégâts de coup critique subis de <span class="stat-boost">5 %</span>.<br>
            Augmente les dégâts infligés par Frieren de <span class="stat-boost">35 %</span>.<br>
            Durée : 20 seconde(s)</p>
        </div>
    `,
    2: `
        <h3>2 étoiles :</h3>
        <p>L'Attaque, la Défense et les PV de toute l'équipe augmentent de <span class="stat-boost">9 %</span>.<br></p>
    `,
    3: `
        <h3>3 étoiles :</h3>
        <p>Améliore les effets <span class="buff">[Contrôle de l'énergie de mana]</span> et <span class="buff">[Magie défensive]</span>.<br></p>

        <div class="detail-box">
            <h4>Amélioration <span class="buff">[Contrôle de l'énergie de mana]</span></h4>
            <p>Augmente la Défense de <span class="stat-boost">50 %</span>.<br>
            Lorsque les PM de l'utilisatrice sont à 50 % ou plus, sa Défense augmente de <span class="stat-boost">50 %</span>.<br>
            La Consommation de mana des compétences diminue de <span class="stat-boost">30 %</span>.<br>
            Durée : illimitée</p>
        </div>

        <div class="detail-box">
            <h4>Amélioration <span class="buff">[Magie défensive]</span></h4>
            <p>Confère un <span class="buff">[Bouclier]</span> équivalent à <span class="stat-boost">30 %</span> de la Défense de Frieren.<br>
            Réduit les dégâts subis de <span class="stat-boost">10 %</span>. Durée : 60 seconde(s)</p>
        </div>
    `,
    4: `
        <h3>4 étoiles :</h3>
        <p>Les Dégâts de coup critique de toute l'équipe augmentent de <span class="stat-boost">20 %</span>.<br></p>
    `,
    5: `
        <h3>5 étoiles :</h3>
        <p>Améliore les effets <span class="buff">[Vollzanbel]</span>.<br>
        L'utilisation de la compétence <strong>Magie de foudre destructrice (Judradjim)</strong> remplit <span class="stat-boost">80 %</span> de la jauge de puissance de l'utilisatrice.<br></p>

        <div class="detail-box">
            <h4>Amélioration <span class="buff">[Vollzanbel]</span></h4>
            <p>Diminue la Défense de <span class="stat-boost">10 %</span>. Augmente le risque de subir des Dégâts de coup critique de <span class="stat-boost">15 %</span>.<br>
            Augmente les Dégâts de coup critique subis de <span class="stat-boost">15 %</span>. Augmente les dégâts infligés par Frieren de <span class="stat-boost">70 %</span>.<br>
            Durée : 30 seconde(s)</p>
        </div>
    `
};

// --- RÉSUMÉ (COURT) ---
const charSummaryData = {
    0: `
        <h3>Passif : Mage Légendaire</h3>
        <p>Entrée = <span class="buff">[Contrôle Mana]</span> (Déf +25-50%, Éco Mana).<br>
        Ultime active <span class="buff">[Libération]</span> : Bouclier équipe + Crit Rate <span class="stat-boost">100%</span>.<br>
        <span class="buff">[Magie défensive]</span> : Bouclier (20% Déf) + Réduction Dégâts.</p>
    `,
    1: `
        <h3>1 étoile</h3>
        <p>Ultime brise les Boucliers ennemis.<br>
        Si Bouclier actif : Soin équipe (<span class="stat-boost">20%</span> Déf).<br>
        Foudre = <span class="buff">[Paralysie]</span>. Feu = <span class="buff">[Vollzanbel]</span> (Debuff Déf/Crit, Frieren Dmg +35%).</p>
    `,
    2: `
        <h3>2 étoiles</h3>
        <p>Stats de toute l'équipe <span class="stat-boost">+9%</span>.<br></p>
    `,
    3: `
        <h3>3 étoiles</h3>
        <p>Améliore <span class="buff">[Contrôle Mana]</span> (Déf +50-100%, Mana -30%).<br>
        Améliore <span class="buff">[Magie défensive]</span> (Bouclier 30% Déf, Réduction Dégâts 10%).</p>
    `,
    4: `
        <h3>4 étoiles</h3>
        <p>Dégâts Crit de toute l'équipe <span class="stat-boost">+20%</span>.<br></p>
    `,
    5: `
        <h3>5 étoiles</h3>
        <p>Foudre (Judradjim) remplit Jauge Puissance <span class="stat-boost">80%</span>.<br>
        Améliore <span class="buff">[Vollzanbel]</span> : Déf -10%, Frieren Dmg <span class="stat-boost">+70%</span>.</p>
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
   LOGIQUE ARME (Bâton de Frieren)
   ========================================== */
const weaponStarsContainer = document.getElementById('weapon-stars-container');
const weaponStars = weaponStarsContainer.querySelectorAll('.star');
const weaponMessage = document.getElementById('weapon-message');

let weaponCurrentLevel = 0;

const weaponData = {
    0: `
        <h3>Avancement 0 :</h3>
        <p>La Défense de l'utilisatrice augmente de <span class="stat-boost">5 %</span>.<br>
        Les dégats de compétence de base et de la compétence ultime de tous les membres de l'équipe augmentent de <span class="stat-boost">5 %</span>.</p>
    `,
    1: `
        <h3>Avancement 5 étoiles :</h3>
        <p>La Défense de l'utilisatrice augmente de <span class="stat-boost">50 %</span>.<br>
        Les dégats de compétence de base et de la compétence ultime de tous les membres de l'équipe augmentent de <span class="stat-boost">30 %</span>.</p>
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