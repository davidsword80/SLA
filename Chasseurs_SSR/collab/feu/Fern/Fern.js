/* ==========================================
   LOGIQUE PERSONNAGE (Fern)
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
        <p>L'utilisation de l'attaque de base initie les attaques de niveau 1, 2 et 3 à la suite.<br>
        L'utilisation de l'attaque de base de niveau 3 active l'attaque de noyau de l'utilisatrice une fois.<br>
        Les effets <span class="buff">[Prodige magique]</span> et <span class="buff">[Recherche d'énergie de mana]</span> s'activent lorsque l'utilisatrice arrive dans un niveau.<br></p>
        
        <div class="detail-box">
            <h4><span class="buff">[Prodige magique]</span></h4>
            <p>Augmente l'Attaque de <span class="stat-boost">10 %</span>.<br>
            Lorsque l'utilisatrice a <span class="stat-boost">50 %</span> de PM ou plus, son Attaque augmente de <span class="stat-boost">10 %</span>.<br>
            Réduit la Consommation de mana pour les compétences de <span class="stat-boost">5 %</span>.<br>
            Durée : illimitée</p>
        </div>

        <div class="detail-box">
            <h4><span class="buff">[Recherche d'énergie de mana]</span></h4>
            <p>Augmente les dégâts infligés aux boss par l'utilisatrice de <span class="stat-boost">30 %</span>.<br>
            Augmente la Précision de l'utilisatrice de <span class="stat-boost">5 %</span>.<br>
            Durée : illimitée</p>
        </div>
    `,
    1: `
        <h3>1 étoile :</h3>
        <p>L'effet <span class="buff">[Coup rapide de base]</span> s'active lorsque l'utilisatrice arrive dans un niveau.<br>
        L'utilisation de ses compétences de base 1 ou 2 active l'effet <span class="buff">[Concentration de base]</span>.<br>
        Les effets <span class="buff">[Prodige magique]</span> et <span class="buff">[Recherche d'énergie de mana]</span> sont améliorés.<br></p>

        <div class="detail-box">
            <h4><span class="buff">[Coup rapide de base]</span></h4>
            <p>Augmente la Vitesse d'attaque de l'attaque de base, de l'attaque de noyau et des compétences de base 1 et 2.<br>
            L'utilisation des compétences de base 1 ou 2 active l'attaque de noyau de l'utilisatrice une fois.<br>
            L'utilisation de l'attaque de noyau diminue le temps de rechargement des compétences de base 1 et 2 de <span class="stat-boost">25 %</span>.<br>
            L'utilisation de la compétence de base 1 diminue le temps de rechargement des compétences de base 1 et 2 de <span class="stat-boost">25 %</span>.<br>
            L'utilisation de la compétence de base 2 réduit le temps de rechargement des compétences de base 1 et 2 de <span class="stat-boost">25 %</span>.<br>
            Durée : illimitée</p>
        </div>

        <div class="detail-box">
            <h4><span class="buff">[Concentration de base]</span></h4>
            <p>L'utilisation des compétences de base 1 ou 2 augmente la consommation de PM de <span class="stat-boost">12 %</span>.<br>
            L'utilisation des compétences de base 1 ou 2 augmente les dégâts de la compétence de base de <span class="stat-boost">25 %</span>.<br>
            Durée : 20 seconde(s) (cumulable jusqu'à 4 fois)</p>
        </div>

        <div class="detail-box">
            <h4>Amélioration <span class="buff">[Prodige magique]</span></h4>
            <p>Augmente l'Attaque de <span class="stat-boost">20 %</span>.<br>
            Lorsque l'utilisatrice a <span class="stat-boost">50 %</span> de ses PM ou plus, son Attaque augmente de <span class="stat-boost">20 %</span>.<br>
            Réduit la Consommation de mana pour ses compétences de <span class="stat-boost">10 %</span>.<br>
            Durée : illimitée</p>
        </div>

        <div class="detail-box">
            <h4>Amélioration <span class="buff">[Recherche d'énergie de mana]</span></h4>
            <p>Augmente les dégâts infligés aux boss de <span class="stat-boost">60 %</span>.<br>
            Augmente la Précision de <span class="stat-boost">10 %</span>.<br>
            Durée : illimitée</p>
        </div>
    `,
    2: `
        <h3>2 étoiles :</h3>
        <p>Augmente les dégâts de feu de l'utilisatrice de <span class="stat-boost">20 %</span>.<br>
        Chaque fois que sa compétence de base 2 touche une cible, applique l'effet <span class="buff">[Dégâts de feu subis augmentés]</span>.<br></p>

        <div class="detail-box">
            <h4><span class="buff">[Dégâts de feu subis augmentés]</span></h4>
            <p>Augmente les dégâts de feu subis de <span class="stat-boost">0.3 %</span>.<br>
            Durée : 30 seconde(s) (cumulable jusqu'à 60 fois)</p>
        </div>
    `,
    3: `
        <h3>3 étoiles :</h3>
        <p>L'effet <span class="buff">[Vision véritable]</span> s'active lorsque l'utilisatrice arrive dans un niveau.<br>
        Les effets <span class="buff">[Magie de dissipation]</span> et <span class="buff">[Magie défensive]</span> s'activent lorsque l'utilisatrice rejoint le combat (temps de rechargement : 10 seconde(s)).<br></p>

        <div class="detail-box">
            <h4><span class="buff">[Vision véritable]</span></h4>
            <p>Augmente le Taux de coup critique de <span class="stat-boost">5 %</span> et les Dégâts de coup critique de <span class="stat-boost">10 %</span>.<br>
            Durée : illimitée</p>
        </div>

        <div class="detail-box">
            <h4><span class="buff">[Magie de dissipation]</span></h4>
            <p>Supprime les débuffs de toute l'équipe.</p>
        </div>

        <div class="detail-box">
            <h4><span class="buff">[Magie défensive]</span></h4>
            <p>Confère un <span class="buff">[Bouclier]</span> équivalent à <span class="stat-boost">20 %</span> de l'Attaque de Fern.<br>
            Diminue les dégâts subis de <span class="stat-boost">20 %</span>.<br>
            Durée : 20 seconde(s)</p>
        </div>
    `,
    4: `
        <h3>4 étoiles :</h3>
        <p>Le Taux de coup critique de l'utilisatrice augmente de <span class="stat-boost">10 %</span>, et ses Dégâts de coup critique de <span class="stat-boost">20 %</span>.<br>
        L'effet <span class="buff">[Dégâts de feu subis augmentés]</span>, qui est appliqué chaque fois que la compétence de base 2 de l'utilisatrice touche une cible, change de 0.3 % à 0.5 %.<br></p>

        <div class="detail-box">
            <h4><span class="buff">[Dégâts de feu subis augmentés]</span></h4>
            <p>Augmente les dégâts de feu subis de <span class="stat-boost">0.5 %</span>.<br>
            Durée : 30 seconde(s) (cumulable jusqu'à 60 fois)</p>
        </div>
    `,
    5: `
        <h3>5 étoiles :</h3>
        <p>Lorsque la compétence ultime de l'utilisatrice touche sa cible, les dégâts de faiblesse élémentaire de feu de l'utilisatrice la touchent également, quel que soit son élément.<br>
        L'effet <span class="buff">[Vision véritable]</span> est amélioré.<br></p>

        <div class="detail-box">
            <h4>Amélioration <span class="buff">[Vision véritable]</span></h4>
            <p>Augmente le Taux de coup critique de <span class="stat-boost">10 %</span> et les Dégâts de coup critique de <span class="stat-boost">20 %</span>.<br>
            Lorsque la compétence de base 1 ou 2 de l'utilisatrice touche sa cible, l'effet <span class="buff">[Alerte sismique]</span> s'active (uniquement une fois à l'impact).<br>
            Durée : illimitée</p>
        </div>

        <div class="detail-box">
            <h4><span class="buff">[Alerte sismique]</span></h4>
            <p>Augmente les dégâts de feu de <span class="stat-boost">10 %</span>.<br>
            L'effet <span class="buff">[Regard de la chercheuse]</span> s'active lorsqu'il atteint le maximum de cumuls.<br>
            Durée : 5 seconde(s) (cumulable jusqu'à 6 fois)</p>
        </div>

        <div class="detail-box">
            <h4><span class="buff">[Regard de la chercheuse]</span></h4>
            <p>L'effet <span class="buff">[Alerte sismique]</span> est supprimé et ne peut plus être activé.<br>
            Augmente les dégâts de feu de <span class="stat-boost">60 %</span>.<br>
            Augmente la Pénétration de défense de <span class="stat-boost">10 %</span>.<br>
            Durée : 20 seconde(s)</p>
        </div>
    `
};

// --- RÉSUMÉ (COURT) ---
const charSummaryData = {
    0: `
        <h3>Passif : Mage de Frieren</h3>
        <p>Attaque Base 3 déclenche Attaque Noyau.<br>
        Entrée = <span class="buff">[Prodige magique]</span> (Atk +10-20%, Éco Mana) et <span class="buff">[Recherche]</span> (Dégâts Boss +30%, Précision).</p>
    `,
    1: `
        <h3>1 étoile</h3>
        <p>Entrée : <span class="buff">[Coup rapide]</span> (Vitesse Atk, Reset CD sur Core/Skills).<br>
        Compétences activent <span class="buff">[Concentration]</span> (Dégâts +25%, Coût Mana +12%).<br>
        Buffs améliorés : Atk +20-40%, Dégâts Boss +60%.</p>
    `,
    2: `
        <h3>2 étoiles</h3>
        <p>Dégâts Feu <span class="stat-boost">+20%</span>.<br>
        Compétence 2 applique Débuff <span class="buff">[Dégâts Feu subis +0.3%]</span> (Max 18%).</p>
    `,
    3: `
        <h3>3 étoiles</h3>
        <p>Entrée : <span class="buff">[Vision véritable]</span> (Crit Rate/Dmg).<br>
        Rejoint combat : Cleanse équipe + <span class="buff">[Bouclier]</span> (20% Atk, -20% Dégâts subis).</p>
    `,
    4: `
        <h3>4 étoiles</h3>
        <p>Crit Rate +10%, Crit Dmg +20%.<br>
        Débuff Feu amélioré à <span class="stat-boost">0.5%</span> (Max 30%).</p>
    `,
    5: `
        <h3>5 étoiles</h3>
        <p>Ultime tape toujours en Faiblesse Feu.<br>
        Améliore <span class="buff">[Vision]</span>. Compétences stack <span class="buff">[Alerte]</span> (Dégâts Feu).<br>
        Max stack = <span class="buff">[Regard]</span> (Dégâts Feu <span class="stat-boost">+60%</span>, Pénétration <span class="stat-boost">+10%</span>).</p>
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
   LOGIQUE ARME (Bâton de Fern)
   ========================================== */
const weaponStarsContainer = document.getElementById('weapon-stars-container');
const weaponStars = weaponStarsContainer.querySelectorAll('.star');
const weaponMessage = document.getElementById('weapon-message');

let weaponCurrentLevel = 0;

const weaponData = {
    0: `
        <h3>Avancement 0 :</h3>
        <p>Augmente l'Attaque de l'utilisatrice de <span class="stat-boost">5 %</span>.<br>
        Le Taux de coup critique de <strong>Magie démonicide (Zoltraak) - Barrage</strong> et <strong>Magie démonicide (Zoltraak) - Tir rapide</strong> augmente de <span class="stat-boost">5 %</span>, et les Dégâts de coup critique augmentent de <span class="stat-boost">10 %</span>.<br>
        L'utilisation de la compétence <strong>Magie démonicide (Zoltraak) - Équilibre</strong> restaure <span class="stat-boost">10 %</span> des PM de l'utilisatrice (temps de rechargement : 30 seconde(s)).</p>
    `,
    1: `
        <h3>Avancement 5 étoiles :</h3>
        <p>Augmente l'Attaque de l'utilisatrice de <span class="stat-boost">12 %</span>.<br>
        Le Taux de coup critique de <strong>Magie démonicide (Zoltraak) - Barrage</strong> et <strong>Magie démonicide (Zoltraak) - Tir rapide</strong> augmente de <span class="stat-boost">10 %</span>, et les Dégâts de coup critique augmentent de <span class="stat-boost">20 %</span>.<br>
        L'utilisation de la compétence <strong>Magie démonicide (Zoltraak) - Équilibre</strong> restaure <span class="stat-boost">100 %</span> des PM de l'utilisatrice (temps de rechargement : 30 seconde(s)).</p>
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