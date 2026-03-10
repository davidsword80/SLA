/* ==========================================
   LOGIQUE PERSONNAGE (Christopher Reed)
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
        <p>L'utilisation des compétences <strong>Étoile montante</strong>, <strong>Passe offensive</strong>, <strong>Coup de pied nitro</strong> ou <strong>Faute de jeu</strong> remplit la jauge d'<span class="buff">[Apparition de corps spirituel]</span> de l'utilisateur.<br>
        L'utilisation de la compétence <strong>0 à 100</strong> vide la jauge d'<span class="buff">[Apparition de corps spirituel]</span>.<br>
        Lorsque la jauge d'<span class="buff">[Apparition de corps spirituel]</span> atteint 100 %, elle active l'attaque de noyau spéciale de l'utilisateur.<br>
        L'utilisation de l'attaque de noyau spéciale active l'effet <span class="buff">[Apparition de corps spirituel]</span>.<br>
        La compétence <strong>Interception décisive</strong> devient disponible en cas d'Évasion extrême réussie.<br>
        Lorsque les compétences <strong>Performance montante</strong>, <strong>Coup de pied rapide</strong> ou <strong>0 à 100</strong> touchent leur cible, elles lui appliquent l'effet <span class="buff">[Brûlure]</span>.<br>
        L'utilisation des compétences <strong>Coup de pied nitro</strong> ou <strong>Faute de jeu</strong> dans le mode <span class="buff">[Combat d'équipe]</span> active l'effet <span class="buff">[Touchdown]</span>.<br></p>
        
        <div class="detail-box">
            <h4><span class="buff">[Interception décisive]</span></h4>
            <p>L'utilisateur attrape un ballon devant l'ennemi et le frappe au sol pour faire un touchdown.<br>
            Inflige des dégâts élémentaires de feu équivalents à <span class="stat-boost">1500 %</span> de la Défense de l'utilisateur.<br>
            L'utilisation de cette compétence active l'effet <span class="buff">[Touchdown]</span>.<br>
            Compte comme une compétence de base. (temps de rechargement : 15 seconde(s)).</p>
        </div>

        <div class="detail-box">
            <h4><span class="buff">[Apparition de corps spirituel]</span></h4>
            <p>Transforme l'attaque de base, l'attaque de noyau et la compétence de base de l'utilisateur en versions améliorées, et les temps de rechargement de ces compétences sont réinitialisés.<br>
            Augmente l'effet d'<span class="buff">[Accumulation élémentaire]</span> de feu de <span class="stat-boost">25 %</span>.<br>
            Augmente les dégâts de l'attaque de base, de l'attaque de noyau et de la compétence de base de <span class="stat-boost">150 %</span>.<br>
            L'utilisation de la compétence <strong>0 à 100</strong> supprime l'effet.<br>
            Durée : 30 seconde(s)</p>
        </div>

        <div class="detail-box">
            <h4><span class="buff">[Touchdown]</span></h4>
            <p>Augmente les dégâts de <span class="buff">[Surcharge]</span> de feu de <span class="stat-boost">15 %</span>.<br>
            Augmente l'effet d'<span class="buff">[Accumulation élémentaire]</span> de feu de <span class="stat-boost">5 %</span>.<br>
            Durée : 60 seconde(s) (cumulable jusqu'à 3 fois)</p>
        </div>

        <div class="detail-box">
            <h4><span class="buff">[Brûlure]</span></h4>
            <p>Inflige des dégâts équivalents à <span class="stat-boost">200 %</span> de la Défense de l'utilisateur toutes les 3 secondes.<br>
            Durée : 30 seconde(s)</p>
        </div>
    `,
    1: `
        <h3>1 étoile :</h3>
        <p>Augmente l'effet de l'<span class="buff">[Accumulation élémentaire]</span> de feu de <span class="stat-boost">20 %</span>.<br></p>
    `,
    2: `
        <h3>2 étoiles :</h3>
        <p>Si l'effet <span class="buff">[Immunité contre l'Accumulation élémentaire]</span> de feu est actif sur la cible lorsque l'utilisateur porte une attaque, sa jauge d'<span class="buff">[Apparition de corps spirituel]</span> se remplit (temps de rechargement : 15 seconde(s)).<br>
        Lorsque des membres de l'équipe de l'élément Feu, y compris l'utilisateur, utilisent leurs compétences de base ou ultime, la jauge d'<span class="buff">[Apparition de corps spirituel]</span> de l'utilisateur se remplit.<br>
        Augmente les dégâts de la compétence <strong>Interception décisive</strong> de <span class="stat-boost">25 %</span> contre les cibles affectées par <span class="buff">[Brûlure]</span>.<br></p>
    `,
    3: `
        <h3>3 étoiles :</h3>
        <p>Lorsque l'effet <span class="buff">[Apparition de corps spirituel]</span> est activé, l'utilisateur récupère <span class="stat-boost">30 %</span> de ses PV et reçoit un <span class="buff">[Bouclier]</span>.<br>
        Lorsque l'attaque de l'utilisateur touche une cible affectée par <span class="buff">[Brûlure]</span>, l'utilisateur reçoit l'effet <span class="buff">[Esprit de compétition]</span> (temps de rechargement : 2 seconde(s)).<br></p>

        <div class="detail-box">
            <h4><span class="buff">[Esprit de compétition]</span></h4>
            <p>Augmente les dégâts de feu de <span class="stat-boost">165 %</span>.<br>
            Augmente les dégâts de la compétence <strong>Interception décisive</strong> de <span class="stat-boost">15 %</span>.<br>
            Durée : 15 seconde(s)</p>
        </div>

        <div class="detail-box">
            <h4><span class="buff">[Bouclier]</span></h4>
            <p>Confère un <span class="buff">[Bouclier]</span> équivalent à <span class="stat-boost">100 %</span> de la Défense de l'utilisateur.<br>
            Durée : 20 seconde(s)</p>
        </div>
    `,
    4: `
        <h3>4 étoiles :</h3>
        <p>Les dégâts de feu des membres de l'équipe de l'élément Feu augmentent de <span class="stat-boost">5 %</span> par allié de l'élément Feu présent dans le groupe.<br></p>
    `,
    5: `
        <h3>5 étoiles :</h3>
        <p>Lorsque Christopher Reed ou un allié parvient à déclencher l'effet <span class="buff">[Surcharge]</span> de feu, sa jauge de puissance se remplit de <span class="stat-boost">20 %</span> et le temps de rechargement de la compétence <strong>0 à 100</strong> est réinitialisé (temps de rechargement : 30 seconde(s)).<br>
        Lorsqu'une attaque de Christopher Reed touche une cible affectée par l'effet <span class="buff">[Surcharge]</span> de feu, elle lui applique <span class="buff">[Choc flamboyant]</span> (temps de rechargement : 30 seconde(s)).<br>
        Lorsque l'effet <span class="buff">[Apparition de corps spirituel]</span> est activé, l'effet <span class="buff">[Esprit du vainqueur]</span> est activé.<br></p>

        <div class="detail-box">
            <h4><span class="buff">[Choc flamboyant]</span></h4>
            <p>Augmente les dégâts de <span class="buff">[Surcharge]</span> de feu infligés de <span class="stat-boost">20 %</span>.<br>
            L'effet <span class="buff">[Irrémédiable]</span> est activé.<br>
            Durée : 30 seconde(s)</p>
        </div>

        <div class="detail-box">
            <h4><span class="buff">[Esprit du vainqueur]</span></h4>
            <p>Augmente les dégâts de la compétence <strong>0 à 100</strong> de <span class="stat-boost">250 %</span>.<br>
            Les effets sont supprimés lors de l'utilisation de la compétence <strong>0 à 100</strong>.<br>
            (Les compétences QTE des alliés ne peuvent pas être utilisées automatiquement en <span class="buff">[Mode Chasseur]</span> pendant 25 seconde(s).)<br>
            Durée : 60 seconde(s)</p>
        </div>
    `
};

// --- RÉSUMÉ (COURT) ---
const charSummaryData = {
    0: `
        <h3>Passif : Esprit du Feu</h3>
        <p>Compétences = Charge la jauge <span class="buff">[Apparition]</span>.<br>
        Jauge 100% = Attaque Noyau Spéciale qui active <span class="buff">[Apparition de corps spirituel]</span>.<br>
        <strong>[Apparition]</strong> : Reset CD, Dégâts Compétences <span class="stat-boost">+150%</span>, Accumulation <span class="stat-boost">+25%</span>.<br>
        Compétences appliquent <span class="buff">[Brûlure]</span> et <span class="buff">[Touchdown]</span> (Buff Surcharge).</p>
    `,
    1: `
        <h3>1 étoile</h3>
        <p>Effet d'<span class="buff">[Accumulation élémentaire]</span> de feu <span class="stat-boost">+20%</span>.<br></p>
    `,
    2: `
        <h3>2 étoiles</h3>
        <p>Jauge se remplit si cible immunisée ou alliés utilisent compétences.<br>
        Dégâts <strong>Interception décisive</strong> sur cible Brûlée <span class="stat-boost">+25%</span>.<br></p>
    `,
    3: `
        <h3>3 étoiles</h3>
        <p>Activation [Apparition] = Soin <span class="stat-boost">30%</span> + <span class="buff">[Bouclier]</span>.<br>
        Toucher cible Brûlée = <span class="buff">[Esprit de compétition]</span> (Dégâts Feu <span class="stat-boost">+165%</span>).</p>
    `,
    4: `
        <h3>4 étoiles</h3>
        <p>Dégâts Feu équipe <span class="stat-boost">+5%</span> par allié Feu.<br></p>
    `,
    5: `
        <h3>5 étoiles</h3>
        <p>Surcharge (Soi/Allié) = Jauge Puissance <span class="stat-boost">+20%</span> + Reset <strong>0 à 100</strong>.<br>
        Toucher cible Surchargée = <span class="buff">[Choc flamboyant]</span> (Dégâts Surcharge <span class="stat-boost">+20%</span>, Anti-heal).<br>
        [Apparition] active <span class="buff">[Esprit du vainqueur]</span> (Dégâts "0 à 100" <span class="stat-boost">+250%</span>).</p>
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
   LOGIQUE ARME (Stratégie Victorieuse)
   ========================================== */
const weaponStarsContainer = document.getElementById('weapon-stars-container');
const weaponStars = weaponStarsContainer.querySelectorAll('.star');
const weaponMessage = document.getElementById('weapon-message');

let weaponCurrentLevel = 0;

const weaponData = {
    0: `
        <h3>Avancement 0 :</h3>
        <p>La Défense de l'utilisateur augmente de <span class="stat-boost">5%</span>.<br>
        Le temps de rechargement de la Ruée de l'utilisateur diminue de <span class="stat-boost">5%</span>.<br>
        L'utilisation de la compétence <strong>0 à 100</strong> augmente la Pénétration de défense de l'utilisateur de <span class="stat-boost">2%</span> pendant 20 seconde(s).</p>
    `,
    1: `
        <h3>Avancement 5 étoiles :</h3>
        <p>La Défense de l'utilisateur augmente de <span class="stat-boost">50%</span>.<br>
        Le temps de rechargement de la Ruée de l'utilisateur diminue de <span class="stat-boost">20%</span>.<br>
        L'utilisation de la compétence <strong>0 à 100</strong> augmente la Pénétration de défense de l'utilisateur de <span class="stat-boost">15%</span> pendant 20 seconde(s).</p>
    `,
    2: `
        <h3>Avancement 10 étoiles :</h3>
        <p>L'Attaque, la Défense et les PV de l'utilisateur augmentent de <span class="stat-boost">15%</span>.</p>
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