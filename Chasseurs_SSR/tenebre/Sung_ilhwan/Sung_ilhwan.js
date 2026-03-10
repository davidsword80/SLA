/* ==========================================
   LOGIQUE PERSONNAGE (Sung Ilhwan)
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
        <p>Lorsque la compétence <strong>Entaille fantôme</strong> touche sa cible, l'effet <span class="buff">[Balance du Dominateur]</span> est activé.<br>
        Les PM ne se régénèrent ni naturellement, ni avec une attaque de base ou une attaque de noyau.<br>
        L'utilisation de la compétence <strong>Puissance apocalyptique</strong> restaure <span class="stat-boost">14 %</span> des PM actuels de l'utilisateur, proportionnellement au nombre de cumuls de l'effet <span class="buff">[Amélioration du Dominateur]</span> appliqués, à la suite de quoi les cumuls sont supprimés.<br>
        L'utilisation des compétences <strong>Entaille fantôme</strong> ou <strong>Courroux de la condamnation</strong> applique l'effet <span class="buff">[Amélioration du Dominateur]</span>.<br>
        Lorsque les membres de l'équipe, à l'exception de Sung Ilhwan, utilisent leur compétence de base, ce dernier récupère <span class="stat-boost">2 %</span> de ses PM et sa jauge de puissance se remplit de <span class="stat-boost">1 %</span>.<br></p>
        
        <div class="detail-box">
            <h4><span class="buff">[Amélioration du Dominateur]</span></h4>
            <p>Augmente les dégâts de la compétence de base de <span class="stat-boost">5 %</span>.<br>
            Augmente les dégâts de la compétence ultime de <span class="stat-boost">25 %</span>.<br>
            Durée : illimitée (cumulable jusqu'à 7 fois).</p>
        </div>

        <div class="detail-box">
            <h4><span class="buff">[Balance du Dominateur]</span></h4>
            <p>Augmente les dégâts de la compétence <strong>Courroux de la condamnation</strong> de <span class="stat-boost">1 %</span>.<br>
            Lors de l'utilisation de <strong>Courroux de la condamnation</strong>, l'effet <span class="buff">[Balance du Dominateur]</span> est supprimé.<br>
            Durée : illimitée (cumulable jusqu'à 160 fois).</p>
        </div>
    `,
    1: `
        <h3>1 étoile :</h3>
        <p>L'utilisation de l'attaque de base ou de l'attaque de noyau diminue le temps de rechargement de la compétence <strong>Entaille fantôme</strong> de 1 seconde(s).<br>
        L'utilisation de la compétence <strong>Puissance apocalyptique</strong> réinitialise la durée des buffs actifs sur l'utilisateur (temps de rechargement : 30 seconde(s)).<br>
        Les dégâts de ténèbres augmentent de <span class="stat-boost">150 %</span> pendant 15 seconde(s) lorsque l'utilisateur arrive sur le champ de bataille en <span class="buff">[Mode Chasseur]</span>.<br>
        (Lorsque le chasseur arrive sur le champ de bataille en <span class="buff">[Mode Chasseur]</span>, il est impossible d'utiliser automatiquement les compétences QTE des alliés pendant 15 seconde(s)).<br>
        Lorsque les compétences <strong>Grand final ténébreux</strong> ou <strong>Puissance apocalyptique</strong> touchent leur cible, elles lui appliquent l'effet <span class="buff">[Marqué]</span>.<br>
        Lorsque la compétence <strong>Puissance apocalyptique</strong> touche une cible sous l'effet <span class="buff">[Réprimé]</span>, la durée de l'effet <span class="buff">[Réprimé]</span> est réinitialisée.<br></p>

        <div class="detail-box">
            <h4><span class="buff">[Marqué]</span></h4>
            <p>Augmente les dégâts infligés par Sung Ilhwan de <span class="stat-boost">35 %</span>.<br>
            Si la cible est mise en état de <span class="buff">[Bris]</span>, l'effet devient l'effet <span class="buff">[Réprimé]</span>.<br>
            Durée : 30 seconde(s).</p>
        </div>

        <div class="detail-box">
            <h4><span class="buff">[Réprimé]</span></h4>
            <p>Augmente les dégâts infligés par Sung Ilhwan de <span class="stat-boost">50 %</span>.<br>
            Augmente les dégâts des compétences ultimes de l'élément Ténèbres de <span class="stat-boost">20 %</span>.<br>
            Durée : 30 seconde(s).</p>
        </div>
    `,
    2: `
        <h3>2 étoiles :</h3>
        <p>Les dégâts de ténèbres de l'utilisateur augmentent de <span class="stat-boost">30 %</span>.<br></p>
    `,
    3: `
        <h3>3 étoiles :</h3>
        <p>Le nombre d'attaques pour les compétences <strong>Entaille fantôme</strong>, <strong>Courroux de la condamnation</strong> et <strong>Puissance apocalyptique</strong> est doublé.<br>
        Lors de l'utilisation de la compétence <strong>Transperce-ciel</strong>, s'il y a un ennemi dans un rayon de 5 m, l'utilisateur attaque instantanément.<br></p>
    `,
    4: `
        <h3>4 étoiles :</h3>
        <p>L'Attaque des coéquipiers de l'élément Ténèbres augmente de <span class="stat-boost">10 %</span> par membre de l'élément Ténèbres présent dans le groupe.<br></p>
    `,
    5: `
        <h3>5 étoiles :</h3>
        <p>L'utilisation de l'attaque de base ou de l'attaque de noyau diminue le temps de rechargement de la compétence <strong>Entaille fantôme</strong> de 1.7 seconde(s).<br>
        L'utilisation de la compétence <strong>Courroux de la condamnation</strong> active l'effet <span class="buff">[Protection du Dominateur]</span>.<br>
        L'utilisateur reçoit un <span class="buff">[Bouclier]</span>, et l'Attaque ainsi que le Taux de coup critique augmentent de <span class="stat-boost">12 %</span> pendant 30 seconde(s) (cumulable jusqu'à 3 fois).<br>
        Lorsqu'un membre du groupe de l'élément Ténèbres, hormis Sung Ilhwan, utilise sa compétence de base, Sung Ilhwan récupère <span class="stat-boost">8 %</span> de ses PM et remplit sa jauge de puissance de <span class="stat-boost">4 %</span>.<br></p>

        <div class="detail-box">
            <h4><span class="buff">[Protection du Dominateur]</span></h4>
            <p>Confère un <span class="buff">[Bouclier]</span> équivalent à <span class="stat-boost">100 %</span> de l'Attaque de Sung Ilhwan.<br>
            Durée : 20 seconde(s).</p>
        </div>
    `
};

// --- RÉSUMÉ (COURT) ---
const charSummaryData = {
    0: `
        <h3>Passif : Le Dominateur</h3>
        <p>Pas de regen PM naturelle. L'équipe recharge ses PM/Jauge.<br>
        Compétences cumulent <span class="buff">[Amélioration]</span> (Buff Dégâts Base/Ultime) et <span class="buff">[Balance]</span> (Buff Dégâts Courroux).<br>
        <strong>Puissance apocalyptique</strong> consomme <span class="buff">[Amélioration]</span> pour restaurer les PM.</p>
    `,
    1: `
        <h3>1 étoile</h3>
        <p>Réduction CD <strong>Entaille fantôme</strong> sur attaques.<br>
        Entrée Mode Chasseur : Dégâts Ténèbres <span class="stat-boost">+150%</span> (15s).<br>
        Applique <span class="buff">[Marqué]</span> (Dégâts subis +35%) -> Sur Bris devient <span class="buff">[Réprimé]</span> (Dégâts subis +50%, Ult Ténèbres +20%).</p>
    `,
    2: `
        <h3>2 étoiles</h3>
        <p>Les dégâts de ténèbres de l'utilisateur augmentent de <span class="stat-boost">30 %</span>.<br></p>
    `,
    3: `
        <h3>3 étoiles</h3>
        <p>Double le nombre d'attaques des compétences principales.<br>
        <strong>Transperce-ciel</strong> attaque instantanément si ennemi proche.<br></p>
    `,
    4: `
        <h3>4 étoiles</h3>
        <p>Attaque équipe Ténèbres <span class="stat-boost">+10%</span> par allié Ténèbres.<br></p>
    `,
    5: `
        <h3>5 étoiles</h3>
        <p>Réduction CD <strong>Entaille fantôme</strong> améliorée (-1.7s).<br>
        <strong>Courroux</strong> active <span class="buff">[Protection]</span> : Bouclier + Buff Atk/Crit (<span class="stat-boost">+12%</span>/stack).<br>
        Recharge PM/Jauge par l'équipe augmentée (8%/4%).</p>
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
   LOGIQUE ARME (Volonté implacable)
   ========================================== */
const weaponStarsContainer = document.getElementById('weapon-stars-container');
const weaponStars = weaponStarsContainer.querySelectorAll('.star');
const weaponMessage = document.getElementById('weapon-message');

let weaponCurrentLevel = 0;

const weaponData = {
    0: `
        <h3>Avancement 0 :</h3>
        <p>Augmente l'Attaque de l'utilisateur de <span class="stat-boost">5 %</span>.<br>
        Augmente les Dégâts de coup critique de l'utilisateur de <span class="stat-boost">5 %</span>.</p>
    `,
    1: `
        <h3>Avancement 5 étoiles :</h3>
        <p>Augmente l'Attaque de l'utilisateur de <span class="stat-boost">30 %</span>.<br>
        Augmente les Dégâts de coup critique de l'utilisateur de <span class="stat-boost">30 %</span>.</p>
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