/* ==========================================
   LOGIQUE ARME (Éventail du démon de feu)
   ========================================== */
const weaponStarsContainer = document.getElementById('weapon-stars-container');
const weaponStars = weaponStarsContainer.querySelectorAll('.star');
const weaponMessage = document.getElementById('weapon-message');
const toggleBtn = document.getElementById('toggleBtn');

let weaponCurrentLevel = 0;
let isSummaryMode = false;

// --- TEXTE COMPLET (MOT POUR MOT + SAUT DE LIGNE APRES POINT) ---
const weaponFullData = {
    0: `
        <h3>Passif :</h3>
        <p>Lorsque la jauge de noyau de l'utilisateur est à <span class="stat-boost">100%</span>, la compétence <strong>Fleur de feu</strong> devient <strong>Jouvence fugace</strong>.<br>
        Lorsque les compétences <strong>Fleur de feu</strong> ou <strong>Jouvence fugace</strong> sont utilisées, l'utilisateur et les membres de son équipe reçoivent 1 cumul de l'effet <span class="buff">[Papillons]</span>.<br></p>
        <div class="detail-box">
            <h4><span class="buff">[Jouvence fugace]</span></h4>
            <p>Dégâts et consommation de PM: identiques à ceux de <strong>Fleur de feu</strong>.<br>
            Consommation de la jauge de noyau: <span class="stat-boost">100%</span>.<br>
            Lorsque cette compétence touche sa cible, le temps ralentit.<br>
            Inflige des dégâts de Bris lourds.<br>
            Lorsqu'une attaque de l'utilisateur transperce une cible, une explosion florale de flammes ardentes survient et inflige des dégâts à la cible.<br></p>
        </div>
        <div class="detail-box">
            <h4><span class="buff">[Papillons]</span></h4>
            <p>Augmente les dégâts de feu de <span class="stat-boost">3%</span>.<br>
            Augmente le Taux de récupération de PM de <span class="stat-boost">5%</span>.<br>
            Durée: 60 seconde(s) (cumulable jusqu'à 6 fois)</p>
        </div>
    `,
    1: `
        <h3>1 étoile :</h3>
        <p>Lorsqu'il utilise sa compétence de Bris de feu, l'utilisateur et les membres de son équipe reçoivent 1 cumul supplémentaire de l'effet <span class="buff">[Papillons]</span>.<br>
        Lorsque les compétences <strong>Fleur de feu</strong> ou <strong>Jouvence fugace</strong> touchent leur cible, elles lui appliquent l'effet <span class="buff">[Forte fièvre]</span>.<br></p>
        <div class="detail-box">
            <h4><span class="buff">[Forte fièvre]</span></h4>
            <p>Les dégâts de feu de Jinwoo augmentent de <span class="stat-boost">50%</span> lorsqu'il touche des cibles affectées par l'effet <span class="buff">[Forte fièvre]</span>.<br>
            L'utilisateur récupère <span class="stat-boost">10%</span> de ses PM 1 fois lorsqu'il touche une cible affectée par l'effet <span class="buff">[Forte fièvre]</span>.<br>
            Durée: 8 seconde(s) (cumulable jusqu'à 1 fois)</p>
        </div>
    `,
    2: `
        <h3>2 étoiles :</h3>
        <p>Augmente les dégâts de feu de <span class="stat-boost">10%</span>.<br></p>
    `,
    3: `
        <h3>3 étoiles :</h3>
        <p>Lorsque l'effet <span class="buff">[Papillons]</span> atteint 6 cumuls, il active l'effet <span class="buff">[Démon de feu]</span>.<br>
        (<span class="buff">[Démon de feu]</span> ne s'active que pour Sung Jinwoo.)<br></p>
        <div class="detail-box">
            <h4><span class="buff">[Démon de feu]</span></h4>
            <p>Les cumuls de l'effet <span class="buff">[Papillons]</span> sont supprimés et l'utilisateur ne peut plus en recevoir.<br>
            Augmente les dégâts de feu de l'utilisateur et le Taux de récupération de PM de <span class="stat-boost">50%</span>.<br>
            Augmente le Taux de coup critique de la compétence de noyau de feu de l'utilisateur de <span class="stat-boost">30%</span>.<br>
            Augmente les Dégâts de coup critique de la compétence de noyau de feu de l'utilisateur de <span class="stat-boost">120%</span>.<br>
            Lors de l'utilisation de sa compétence de base de feu, l'utilisateur reçoit l'effet <span class="buff">[Super armure]</span> pendant 4 seconde(s).<br>
            Consomme 5% des PM de l'utilisateur toutes les 3 seconde(s).<br>
            Si l'utilisateur a <span class="stat-boost">20%</span> de ses PM max ou moins sur le moment, l'effet est supprimé.<br>
            Durée: illimitée (cumulable jusqu'à 1 fois)</p>
        </div>
    `,
    4: `
        <h3>4 étoiles :</h3>
        <p>Réduit le temps de rechargement des compétences <strong>Fleur de feu</strong> et <strong>Jouvence fugace</strong> de <span class="stat-boost">20%</span>.<br></p>
    `,
    5: `
        <h3>5 étoiles :</h3>
        <p>Au début du niveau, la jauge de noyau de l'utilisateur est remplie à <span class="stat-boost">100%</span>.<br>
        Lorsque toutes les armes équipées sur le chasseur sont des armes de feu, les dégâts de feu augmentent de <span class="stat-boost">50%</span>.<br>
        Lorsque l'utilisateur recourt à une attaque de feu pendant que l'effet <span class="buff">[Démon de feu]</span> est actif, il récupère <span class="stat-boost">10%</span> de ses PM (temps de rechargement: 3 seconde(s)).<br></p>
    `
};

// --- RÉSUMÉ (COURT) ---
const weaponSummaryData = {
    0: `
        <h3>Passif : Fleur Infernale</h3>
        <p>Jauge 100% = <strong>Jouvence fugace</strong> (Ralenti, Bris lourd).<br>
        Compétences feu = <span class="buff">[Papillons]</span> (Équipe, Dégâts Feu <span class="stat-boost">+3%</span>, Regen PM <span class="stat-boost">+5%</span>, max 6).</p>
    `,
    1: `
        <h3>1 étoile</h3>
        <p>Bris de feu = +1 cumul [Papillons].<br>
        Touche = <span class="buff">[Forte fièvre]</span> (Dégâts Feu <span class="stat-boost">+50%</span>, Regen 10% PM).</p>
    `,
    2: `
        <h3>2 étoiles</h3>
        <p>Dégâts Feu <span class="stat-boost">+10%</span>.<br></p>
    `,
    3: `
        <h3>3 étoiles</h3>
        <p>6 Papillons = <span class="buff">[Démon de feu]</span>.<br>
        Dégâts Feu/Regen PM <span class="stat-boost">+50%</span>.<br>
        Crit/Dégâts Crit noyau feu <span class="stat-boost">+30%/+120%</span>.<br>
        Super armure sur skill base.<br>
        Conso PM 5%/3s.</p>
    `,
    4: `
        <h3>4 étoiles</h3>
        <p>CD Fleur de feu/Jouvence <span class="stat-boost">-20%</span>.<br></p>
    `,
    5: `
        <h3>5 étoiles</h3>
        <p>Début niveau : Jauge Noyau <span class="stat-boost">100%</span>.<br>
        Full armes Feu : Dégâts Feu <span class="stat-boost">+50%</span>.<br>
        Attaque feu sous Démon : Regen 10% PM (CD 3s).</p>
    `
};

// --- EVENTS ARME ---
renderWeaponContent();

toggleBtn.addEventListener('click', function() {
    isSummaryMode = !isSummaryMode;
    this.textContent = isSummaryMode ? "Texte Complet" : "Mode Résumé";
    this.classList.toggle('active', isSummaryMode);
    renderWeaponContent();
});

weaponStars.forEach(star => {
    star.addEventListener('click', function () {
        const clickedValue = parseInt(this.getAttribute('data-value'));
        
        if (clickedValue === weaponCurrentLevel) {
            weaponCurrentLevel = clickedValue - 1;
        } else {
            weaponCurrentLevel = clickedValue;
        }
        
        updateWeaponStars(weaponCurrentLevel);
        renderWeaponContent();
    });
});

function updateWeaponStars(level) {
    weaponStars.forEach(star => {
        const starValue = parseInt(star.getAttribute('data-value'));
        star.classList.toggle('filled', starValue <= level);
    });
}

function renderWeaponContent() {
    const dataSource = isSummaryMode ? weaponSummaryData : weaponFullData;
    weaponMessage.innerHTML = dataSource[weaponCurrentLevel];
}