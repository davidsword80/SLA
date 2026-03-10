/* ==========================================
   LOGIQUE PERSONNAGE (Minnie)
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
        <p>Tout l'équipe reçoit l'effet <span class="buff">[FOREVER]</span> en arrivant dans les modes Mission Rappel et Donjon éphémère.<br>
        L'utilisation de la compétence <strong>Iris</strong> réduit le temps de rechargement de la compétence <strong>Edelweiss</strong> de 25 seconde(s) et remplit la jauge de puissance de l'utilisatrice de 100 % (temps de rechargement : 20 seconde(s)).<br>
        Lorsque la compétence <strong>Iris</strong> touche sa cible, elle applique l'effet <span class="buff">[Lis araignée rouge]</span>.<br>
        L'utilisation de la compétence <strong>Edelweiss</strong> active l'effet <span class="buff">[Papillon mauve]</span> et confère 3 <span class="buff">[Pétales fanés]</span>.<br>
        Lorsque l'utilisatrice quitte le combat, l'effet <span class="buff">[Papillon mauve]</span> est supprimé.<br></p>
        
        <div class="detail-box">
            <h4><span class="buff">[FOREVER]</span></h4>
            <p>Augmente les dégâts infligés de <span class="stat-boost">5 %</span>.<br>
            Durée : illimitée (cumulable jusqu'à 3 fois)</p>
        </div>

        <div class="detail-box">
            <h4><span class="buff">[Lis araignée rouge]</span></h4>
            <p>Augmente les dégâts de ténèbres infligés par MINNIE de <span class="stat-boost">30 %</span>.<br>
            Durée : 20 seconde(s)</p>
        </div>

        <div class="detail-box">
            <h4><span class="buff">[Papillon mauve]</span></h4>
            <p>Active l'attaque de noyau 1 fois.<br>
            Lorsque les compétences <strong>Iris</strong>, <strong>Acacia</strong> ou <strong>Allium</strong> touchent leur cible, elles infligent des dégâts supplémentaires équivalents à <span class="stat-boost">50 %</span> des dégâts de base.<br>
            L'utilisation des compétences <strong>Iris</strong>, <strong>Acacia</strong> ou <strong>Allium</strong> supprime 1 cumul de <span class="buff">[Pétales fanés]</span>.<br>
            Confère <span class="buff">[Super armure]</span> lors de l'utilisation des compétences <strong>Iris</strong>, <strong>Acacia</strong> ou <strong>Allium</strong>.<br>
            Lorsque l'effet est supprimé, les effets <span class="buff">[Papillon mauve]</span>, <span class="buff">[Pétales fanés]</span>, <span class="buff">[Floraison]</span> et <span class="buff">[Floraison totale]</span> sont supprimés.<br>
            Durée : 20 seconde(s)</p>
        </div>

        <div class="detail-box">
            <h4><span class="buff">[Pétales fanés]</span></h4>
            <p>Lorsque les effets sont supprimés, les temps de rechargement des compétences <strong>Acacia</strong> et <strong>Allium</strong> sont réinitialisés.<br>
            Durée : illimitée (cumulable jusqu'à 5 fois)</p>
        </div>
    `,
    1: `
        <h3>1 étoile :</h3>
        <p>Lorsque l'utilisatrice rejoint le niveau, sa jauge de puissance se remplit de 100 % de sa charge maximale.<br>
        L'effet <span class="buff">[Pétales fanés]</span> est amélioré.<br></p>

        <div class="detail-box">
            <h4><span class="buff">[Pétales fanés]</span></h4>
            <p>Lorsque cet effet est supprimé, il réinitialise le temps de rechargement des compétences <strong>Acacia</strong> et <strong>Allium</strong>.<br>
            Lorsque cet effet est supprimé, il active l'effet <span class="buff">[Message des fleurs : Fragment de souvenirs]</span>.<br>
            Durée : illimitée (cumulable jusqu'à 5 fois)</p>
        </div>

        <div class="detail-box">
            <h4><span class="buff">[Message des fleurs : Fragment de souvenirs]</span></h4>
            <p>Augmente la Défense de <span class="stat-boost">10 %</span>.<br>
            Augmente les Dégâts de coup critique de <span class="stat-boost">10 %</span>.<br>
            Durée : 20 seconde(s) (cumulable jusqu'à 3 fois)</p>
        </div>
    `,
    2: `
        <h3>2 étoiles :</h3>
        <p>La Défense de l'utilisatrice augmente de <span class="stat-boost">15 %</span>.<br></p>
    `,
    3: `
        <h3>3 étoiles :</h3>
        <p>L'effet <span class="buff">[Lis araignée rouge]</span> est amélioré.<br>
        L'utilisation de la compétence <strong>Acacia</strong> active l'effet <span class="buff">[Taux de coup critique augmenté]</span>, que l'utilisatrice réussisse ou non une Contre-attaque.<br></p>

        <div class="detail-box">
            <h4>Amélioration <span class="buff">[Lis araignée rouge]</span></h4>
            <p>Augmente les dégâts de ténèbres infligés par MINNIE de <span class="stat-boost">50 %</span>.<br>
            Durée : 20 seconde(s)</p>
        </div>

        <div class="detail-box">
            <h4><span class="buff">[Taux de coup critique augmenté]</span></h4>
            <p>Augmente le taux de coup critique de <span class="stat-boost">30 %</span>.<br>
            Durée : 20 seconde(s)</p>
        </div>
    `,
    4: `
        <h3>4 étoiles :</h3>
        <p>Les dégâts de compétence de base de l'utilisatrice augmentent de <span class="stat-boost">20 %</span>.<br></p>
    `,
    5: `
        <h3>5 étoiles :</h3>
        <p>L'utilisation de la compétence <strong>Edelweiss</strong> confère désormais 5 <span class="buff">[Pétales fanés]</span>.<br>
        L'effet <span class="buff">[Message des fleurs : Fragment de souvenirs]</span> est amélioré.<br></p>

        <div class="detail-box">
            <h4>Amélioration <span class="buff">[Message des fleurs : Fragment de souvenirs]</span></h4>
            <p>Augmente la Défense de <span class="stat-boost">20 %</span>.<br>
            Augmente les Dégâts de coup critique de <span class="stat-boost">20 %</span>.<br>
            Durée : 20 seconde(s) (cumulable jusqu'à 3 fois)</p>
        </div>
    `
};

// --- RÉSUMÉ (COURT) ---
const charSummaryData = {
    0: `
        <h3>Passif : Rêve Floral</h3>
        <p>Mode spécial : Buff <span class="buff">[FOREVER]</span> (Dégâts +5%).<br>
        Iris reset Edelweiss + 100% Jauge + <span class="buff">[Lis araignée rouge]</span> (Dégâts Ténèbres +30%).<br>
        Edelweiss active <span class="buff">[Papillon mauve]</span> (Dégâts bonus, Super armure) + 3 <span class="buff">[Pétales fanés]</span>.</p>
    `,
    1: `
        <h3>1 étoile</h3>
        <p>Entrée : Jauge 100%.<br>
        <span class="buff">[Pétales fanés]</span> (fin) active <span class="buff">[Message des fleurs]</span> (Déf +10%, Crit Dmg +10%).</p>
    `,
    2: `
        <h3>2 étoiles</h3>
        <p>La Défense de l'utilisatrice augmente de <span class="stat-boost">15 %</span>.<br></p>
    `,
    3: `
        <h3>3 étoiles</h3>
        <p><span class="buff">[Lis araignée rouge]</span> amélioré : Dégâts Ténèbres <span class="stat-boost">+50%</span>.<br>
        Acacia active <span class="buff">[Taux Crit augmenté]</span> (+30%).</p>
    `,
    4: `
        <h3>4 étoiles</h3>
        <p>Dégâts compétence de base <span class="stat-boost">+20%</span>.<br></p>
    `,
    5: `
        <h3>5 étoiles</h3>
        <p>Edelweiss donne 5 <span class="buff">[Pétales]</span>.<br>
        <span class="buff">[Message des fleurs]</span> amélioré : Déf +20%, Crit Dmg +20%.</p>
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
   LOGIQUE ARME (Rêve du papillon mauve)
   ========================================== */
const weaponStarsContainer = document.getElementById('weapon-stars-container');
const weaponStars = weaponStarsContainer.querySelectorAll('.star');
const weaponMessage = document.getElementById('weapon-message');

let weaponCurrentLevel = 0;

const weaponData = {
    0: `
        <h3>Avancement 0 :</h3>
        <p>La Défense de l'utilisatrice augmente de <span class="stat-boost">5 %</span>, et son Taux de coup critique ainsi que ses Dégâts de coup critique augmentent de <span class="stat-boost">2.5 %</span>.</p>
    `,
    1: `
        <h3>Avancement 5 étoiles :</h3>
        <p>La Défense de l'utilisatrice augmente de <span class="stat-boost">12 %</span>, et son Taux de coup critique ainsi que ses Dégâts de coup critique augmentent de <span class="stat-boost">15 %</span>.</p>
    `,
    2: `
        <h3>Avancement 10 étoiles :</h3>
        <p>Augmente l'Attaque, la Défense et les PV de <span class="stat-boost">15 %</span>.</p>
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