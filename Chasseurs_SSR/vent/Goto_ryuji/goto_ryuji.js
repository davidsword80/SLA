/* ==========================================
   LOGIQUE PERSONNAGE (Goto Ryuji)
   ========================================== */
const charStarsContainer = document.getElementById('char-stars-container');
const charStars = charStarsContainer.querySelectorAll('.star');
const charMessage = document.getElementById('char-message');
const toggleBtn = document.getElementById('toggleBtn');

let charCurrentLevel = 0;
let isSummaryMode = false;

// --- TEXTE COMPLET (IDENTIQUE AU FICHIER SOURCE) ---
const charFullData = {
    0: `
        <h3>Passif :</h3>
        <p>Lorsque la compétence de base de l'utilisateur touche sa cible, ce dernier récupère 50 PM.<br>
        Le Taux de coup critique de l'utilisateur augmente à hauteur de <span class="stat-boost">20%</span> de ses Dégâts de coup critique.<br>
        Lorsque l'effet <span class="buff">[Exorcisme]</span> atteint 5 cumuls, il déclenche l'effet <span class="buff">[Arrogance]</span> sur tous les membres de l'équipe de l'élément <span class="buff">[Vent]</span>.<br></p>
        
        <div class="detail-box">
            <h4><span class="buff">[Arrogance]</span></h4>
            <p>Augmente les Dégâts de coup critique de <span class="stat-boost">20%</span>.<br>
            Les dégâts de la compétence de base de l'utilisateur augmentent de <span class="stat-boost">20 %</span>.<br>
            La Consommation de mana des compétences de l'utilisateur augmente de <span class="stat-boost">33%</span>.<br>
            Durée: 20 seconde(s)</p>
        </div>
    `,
    1: `
        <h3>1 étoile :</h3>
        <p>Si Goto Ryuji ou un allié parvient à mettre un ennemi en état de <span class="buff">[Bris]</span>, la durée de l'état de <span class="buff">[Bris]</span> augmente de 3 seconde(s).<br>
        L'effet <span class="buff">[Voie du tyran]</span> est appliqué aux alliés à l'arrivée dans un niveau.<br>
        Lorsque l'effet <span class="buff">[Exorcisme]</span> atteint 5 cumuls, il déclenche l'effet <span class="buff">[Âme démonique]</span>.<br>
        Lorsque Goto utilise <strong>Bourrasque mortelle</strong>, les dégâts de vent des compétences <strong>Tempête inversée</strong> et <strong>Lame tempête</strong> augmentent de <span class="stat-boost">10%</span> pendant 10 seconde(s).<br></p>

        <div class="detail-box">
            <h4><span class="buff">[Voie du tyran]</span></h4>
            <p>Augmente les dégâts infligés aux cibles en état de <span class="buff">[Bris]</span> de <span class="stat-boost">12%</span>.<br>
            Durée: illimitée</p>
        </div>

        <div class="detail-box">
            <h4><span class="buff">[Âme démonique]</span></h4>
            <p><strong>Tempête inversée</strong> devient <strong>Lame tempête</strong>, ce qui augmente ses dégâts de <span class="stat-boost">50%</span>.<br>
            Durée: 10 seconde(s)</p>
        </div>
    `,
    2: `
        <h3>2 étoiles :</h3>
        <p>L'efficacité de <span class="buff">[Bris]</span> de l'utilisateur augmente de <span class="stat-boost">20%</span>.<br></p>
    `,
    3: `
        <h3>3 étoiles :</h3>
        <p>L'utilisation des compétences <strong>Vent divin</strong> et <strong>Dévastation de proie</strong> augmente les Dégâts de coup critique de l'utilisateur de <span class="stat-boost">20%</span> pendant 12 seconde(s).<br></p>
    `,
    4: `
        <h3>4 étoiles :</h3>
        <p>Les dégâts du troisième chasseur de l'équipe augmentent de <span class="stat-boost">24%</span>, mais les dégâts qu'il subit augmentent aussi de <span class="stat-boost">12%</span>.<br></p>
    `,
    5: `
        <h3>5 étoiles :</h3>
        <p>Les compétences <strong>Ouragan céleste fantomatique</strong>, <strong>Tempête inversée</strong> et <strong>Lame tempête</strong> peuvent toucher la cible 2 fois de plus, et chaque attaque inflige des dégâts supplémentaires de <span class="stat-boost">10%</span>.<br>
        Les compétences <strong>Ouragan céleste fantomatique</strong>, <strong>Tempête inversée</strong> et <strong>Lame tempête</strong> peuvent être utilisées 2 fois supplémentaires.<br>
        Lorsque le ratio de PV de Goto Ryuji est supérieur à celui de l'ennemi, les dégâts de la compétence <strong>Dévastation de proie</strong> et les Dégâts de coup critique augmentent de <span class="stat-boost">60%</span>.<br></p>
    `
};

// --- RÉSUMÉ (COURT) ---
const charSummaryData = {
    0: `
        <h3>Passif : Roi du Vent</h3>
        <p>Récupère des PM sur touche.<br>
        Taux Critique augmente selon Dégâts Critique (20%).<br>
        5 stacks [Exorcisme] = Buff <span class="buff">[Arrogance]</span> équipe Vent (Dégâts Crit/Compétence <span class="stat-boost">+20%</span>, mais Coût Mana <span class="stat-boost">+33%</span>).</p>
    `,
    1: `
        <h3>1 étoile</h3>
        <p>Durée Bris +3s.<br>
        Entrée : Buff <span class="buff">[Voie du tyran]</span> (Dégâts sur Bris <span class="stat-boost">+12%</span>).<br>
        5 stacks [Exorcisme] = Buff <span class="buff">[Âme démonique]</span> (Améliore Tempête inversée).</p>
    `,
    2: `
        <h3>2 étoiles</h3>
        <p>Efficacité de <span class="buff">[Bris]</span> augmentée de <span class="stat-boost">20%</span>.<br></p>
    `,
    3: `
        <h3>3 étoiles</h3>
        <p>Utilisation compétences majeures = Dégâts Crit <span class="stat-boost">+20%</span> (12s).<br></p>
    `,
    4: `
        <h3>4 étoiles</h3>
        <p>Le 3ème Chasseur : Dégâts infligés <span class="stat-boost">+24%</span>, Dégâts subis <span class="stat-boost">+12%</span>.<br></p>
    `,
    5: `
        <h3>5 étoiles</h3>
        <p>Compétences ultimes frappent +2 fois (Bonus Dégâts).<br>
        Utilisations max +2 pour Ouragan/Tempête.<br>
        Si PV Goto > PV Ennemi : Dévastation/Crit Dmg <span class="stat-boost">+60%</span>.</p>
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
   LOGIQUE ARME (Rêves distordus)
   ========================================== */
const weaponStarsContainer = document.getElementById('weapon-stars-container');
const weaponStars = weaponStarsContainer.querySelectorAll('.star');
const weaponMessage = document.getElementById('weapon-message');

let weaponCurrentLevel = 0;

const weaponData = {
    0: `
        <h3>Avancement 0 :</h3>
        <p>Les PV de l'utilisateur augmentent de <span class="stat-boost">5%</span>.<br>
        L'utilisation des compétences <strong>Tempête inversée</strong> ou <strong>Lame tempête</strong> augmente les Dégâts de coup critique de l'utilisateur de <span class="stat-boost">5%</span> pendant 15 seconde(s).</p>
    `,
    1: `
        <h3>Avancement 5 étoiles :</h3>
        <p>Les PV de l'utilisateur augmentent de <span class="stat-boost">12%</span>.<br>
        L'utilisation des compétences <strong>Tempête inversée</strong> ou <strong>Lame tempête</strong> augmente les Dégâts de coup critique de l'utilisateur de <span class="stat-boost">30%</span> pendant 15 seconde(s).</p>
    `,
    2: `
        <h3>Avancement 10 étoiles :</h3>
        <p>L'Attaque, la Défense et les PV augmentent de <span class="stat-boost">15%</span>.</p>
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