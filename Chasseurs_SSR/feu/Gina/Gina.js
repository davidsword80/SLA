/* ==========================================
   LOGIQUE PERSONNAGE (Gina)
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
        <p>Lors de l'utilisation de <strong>Descente forcée</strong>, <strong>Masse gravitationnelle</strong> ou <strong>Voie d'extinction</strong>, l'effet <span class="buff ecarlate">[Contre-courant]</span> est appliqué.<br>
        Lorsque [Contre-courant] atteint son maximum, l'effet <span class="buff feu">[Circulation de mana]</span> est appliqué à toute l'équipe.<br>
        Après la création du [Champ gravitationnel], l'effet <span class="buff pourpre">[Rétrogradation corporelle]</span> est appliqué à l'équipe.</p>
        
        <div class="detail-box">
            <h4><span class="buff ecarlate">[Contre-courant]</span></h4>
            <p>Durée: illimitée (cumulable jusqu'à 5 fois).</p>
        </div>
        <div class="detail-box">
            <h4><span class="buff feu">[Circulation de mana]</span></h4>
            <p>Augmente l'Attaque de <span class="stat-boost">15%</span>.<br>
            Augmente les dégâts de feu de <span class="stat-boost">15%</span>.<br>
            Active : Supprime l'effet [Contre-courant].<br>
            Durée: 15s</p>
        </div>
        <div class="detail-box">
            <h4><span class="buff pourpre">[Rétrogradation corporelle]</span></h4>
            <p>Toute l'équipe récupère des PV (2% de l'Attaque de Gina) toutes les 3s.<br>
            La jauge de puissance de l'équipe se remplit de <span class="stat-boost">2%</span> toutes les 3s.<br>
            Durée: 15s</p>
        </div>
    `,
    1: `
        <h3>1 étoile :</h3>
        <p>Lorsque l'effet <span class="buff feu">[Circulation de mana]</span> s'active, l'effet <span class="buff instinct">[Transformation de mana]</span> est également appliqué à tous les membres de l'équipe.</p>
        <div class="detail-box">
            <h4><span class="buff instinct">[Transformation de mana]</span></h4>
            <p>Octroie un <span class="buff">[Bouclier]</span> équivalent à 12% de l'Attaque.<br>
            Augmente les dégâts infligés de <span class="stat-boost">12%</span>.<br>
            Réduit les dégâts subis de <span class="stat-boost">12%</span>.<br>
            Durée: 20s</p>
        </div>
    `,
    2: `
        <h3>2 étoiles :</h3>
        <p>Augmente la valeur du [Bouclier] appliqué à l'équipe de <span class="stat-boost">20%</span>.<br>
        Lorsqu'un [Bouclier] est appliqué à un membre de l'équipe, ses dégâts augmentent de <span class="stat-boost">10%</span>.</p>
    `,
    3: `
        <h3>3 étoiles :</h3>
        <p>Lors de l'utilisation de <strong>Masse gravitationnelle</strong>, un <span class="buff pourpre">[Champ gravitationnel]</span> est créé.<br>
        Applique l'effet <span class="buff ecarlate">[Boost gravitationnel]</span> aux cibles touchées.</p>
        <div class="detail-box">
            <h4><span class="buff pourpre">[Champ gravitationnel]</span></h4>
            <p>Dégâts: 20% de Masse gravitationnelle.<br>
            Applique <span class="buff">[Halte]</span> (Interruption, CD 20s) sur les ennemis dans la zone.<br>
            Durée: 3s</p>
        </div>
        <div class="detail-box">
            <h4><span class="buff ecarlate">[Boost gravitationnel]</span></h4>
            <p>Augmente les dégâts de feu subis par la cible de <span class="stat-boost">10%</span>.<br>
            Durée: 20s</p>
        </div>
    `,
    4: `
        <h3>4 étoiles :</h3>
        <p>La Pénétration de défense de tous les membres de l'équipe augmente de <span class="stat-boost">4%</span>.<br>
        La Pénétration de défense des membres de l'équipe de l'élément Feu augmente de <span class="stat-boost">4%</span> supplémentaires.</p>
    `,
    5: `
        <h3>5 étoiles :</h3>
        <p>Lorsqu'un [Champ gravitationnel] est créé, l'effet <span class="buff feu">[Singularité spatio-temporelle]</span> est appliqué.</p>
        <div class="detail-box">
            <h4><span class="buff feu">[Singularité spatio-temporelle]</span></h4>
            <p>Augmente les dégâts de <strong>Voie d'extinction</strong> de <span class="stat-boost">60%</span>.<br>
            Augmente les dégâts de Voie d'extinction de <span class="stat-boost">60%</span> supp. sur les cibles affectées par [Boost gravitationnel].<br>
            Consumé après utilisation.<br>
            Durée: 10s</p>
        </div>
    `
};

// --- RÉSUMÉ (COURT) ---
const charSummaryData = {
    0: `
        <h3>Passif : Support Gravitationnel</h3>
        <p>Compétences = <span class="buff ecarlate">[Contre-courant]</span>.<br>
        Max [Contre-courant] = <span class="buff feu">[Circulation de mana]</span> (Buff Atk/Feu Équipe).<br>
        [Champ Gravitationnel] = <span class="buff pourpre">[Rétrogradation]</span> (Soin/Jauge Équipe).</p>
    `,
    1: `
        <h3>1 étoile</h3>
        <p>[Circulation de mana] donne <span class="buff instinct">[Transformation]</span> :<br>
        <span class="buff">[Bouclier]</span> (12% Atk) + Dégâts infligés/subis <span class="stat-boost">+/-12%</span>.</p>
    `,
    2: `
        <h3>2 étoiles</h3>
        <p>Bouclier Équipe <span class="stat-boost">+20%</span>.<br>
        Si Bouclier actif : Dégâts <span class="stat-boost">+10%</span>.</p>
    `,
    3: `
        <h3>3 étoiles</h3>
        <p>Masse gravitationnelle crée une zone [Halte] (Interruption).<br>
        Cibles touchées : Dégâts Feu subis <span class="stat-boost">+10%</span>.</p>
    `,
    4: `
        <h3>4 étoiles</h3>
        <p>Pénétration Défense Équipe <span class="stat-boost">+4%</span> (+4% si Feu).</p>
    `,
    5: `
        <h3>5 étoiles</h3>
        <p>Champ Gravitationnel = <span class="buff feu">[Singularité]</span>.<br>
        Dégâts Voie d'extinction <span class="stat-boost">+60%</span> (ou <span class="stat-boost">+120%</span> si cible debuff).</p>
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
   LOGIQUE ARME (Glamour et Auto-reconnaissance)
   ========================================== */
const weaponStarsContainer = document.getElementById('weapon-stars-container');
const weaponStars = weaponStarsContainer.querySelectorAll('.star');
const weaponMessage = document.getElementById('weapon-message');

let weaponCurrentLevel = 0;

const weaponData = {
    0: `
        <h3>Avancement 0 :</h3>
        <p>L'Attaque de l'utilisatrice augmente de <span class="stat-boost">2%</span>.<br>
        Lorsque <span class="buff feu">[Circulation de mana]</span> est activé :<br>
        - L'équipe récupère <strong>50 PM</strong>.<br>
        - Attaque et Dégâts de feu équipe <span class="stat-boost">+1%</span> (Max 4 fois).</p>
    `,
    1: `
        <h3>Avancement 5 étoiles :</h3>
        <p>L'Attaque de l'utilisatrice augmente de <span class="stat-boost">12%</span>.<br>
        Lorsque <span class="buff feu">[Circulation de mana]</span> est activé :<br>
        - L'équipe récupère <strong>250 PM</strong>.<br>
        - Attaque et Dégâts de feu équipe <span class="stat-boost">+1%</span> (Max 10 fois).</p>
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