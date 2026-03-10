/* ==========================================
   LOGIQUE PERSONNAGE (Stark)
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
        <p>L'utilisateur reçoit l'effet <span class="buff">[Timidité]</span> à l'arrivée dans le niveau.<br>
        Lorsque Stark ou un allié parvient à mettre un ennemi en état de Bris, la durée de l'état de Bris augmente de 3 secondes.<br>
        La jauge de puissance de l'utilisateur ne peut pas se remplir, mais si l'effet <span class="buff">[Courage]</span> est actif, elle se remplit à 100 %.<br></p>
        
        <div class="detail-box">
            <h4><span class="buff">[Timidité]</span></h4>
            <p>L'utilisation des compétences <strong>Frappe spiralée</strong>, <strong>Frappe foudroyante</strong>, <strong>Frappe foudroyante : Attaque lourde</strong> ou <strong>Frappe foudroyante : Attaque extrême</strong> active l'effet <span class="buff">[Confiance]</span> et déclenche <strong>Frappe tourbillonnante</strong>.<br>
            L'effet <span class="buff">[Détermination]</span> s'active lors de l'utilisation de la compétence <strong>Frappe tourbillonnante</strong>.<br>
            Lorsque l'effet <span class="buff">[Courage]</span> est activé, il supprime l'effet <span class="buff">[Timidité]</span>.<br>
            Durée : illimitée.</p>
        </div>

        <div class="detail-box">
            <h4><span class="buff">[Confiance]</span></h4>
            <p>Augmente les dégâts de feu de <span class="stat-boost">3 %</span>.<br>
            Augmente la Pénétration de défense de <span class="stat-boost">3 %</span>.<br>
            Lorsque l'effet atteint le maximum de cumuls, l'effet <span class="buff">[Confiance]</span> est supprimé et l'effet <span class="buff">[Courage]</span> est activé.<br>
            Durée : illimitée (cumulable jusqu'à 4 fois).</p>
        </div>

        <div class="detail-box">
            <h4><span class="buff">[Détermination]</span></h4>
            <p>Augmente les dégâts des compétences <strong>Frappe foudroyante</strong>, <strong>Frappe foudroyante : Attaque lourde</strong> et <strong>Frappe foudroyante : Attaque extrême</strong> de <span class="stat-boost">10 %</span>.<br>
            Augmente le Taux de coup critique de <span class="stat-boost">10 %</span>.<br>
            Durée : 3 seconde(s).</p>
        </div>

        <div class="detail-box">
            <h4><span class="buff">[Courage]</span></h4>
            <p>Augmente les dégâts de feu de <span class="stat-boost">20 %</span>.<br>
            Augmente la Pénétration de défense de <span class="stat-boost">20 %</span>.<br>
            L'effet <span class="buff">[Confiance]</span> ne peut pas être activé tant que cet effet est actif.<br>
            Active l'effet <span class="buff">[Timidité]</span> lorsque cet effet est supprimé.<br>
            Durée : 5 seconde(s).</p>
        </div>
    `,
    1: `
        <h3>1 étoile :</h3>
        <p>L'effet <span class="buff">[Esprit combatif]</span> s'active lorsque l'utilisateur arrive dans un combat d'histoire.<br>
        Lorsque la compétence <strong>Frappe tourbillonnante</strong> touche sa cible, elle lui applique l'effet <span class="buff">[Aura du guerrier]</span>.<br>
        L'effet <span class="buff">[Détermination]</span> est amélioré.<br></p>

        <div class="detail-box">
            <h4><span class="buff">[Esprit combatif]</span></h4>
            <p>Les dégâts subis diminuent de <span class="stat-boost">20 %</span>.<br>
            Tant que l'effet reste actif, si les PV de l'utilisateur tombent à 10 % ou moins, il récupère <span class="stat-boost">40 %</span> de ses PV max (temps de rechargement : 60 secondes).<br>
            Durée : illimitée.</p>
        </div>

        <div class="detail-box">
            <h4><span class="buff">[Aura du guerrier]</span></h4>
            <p>Les dégâts infligés par Stark augmentent de <span class="stat-boost">15 %</span>.<br>
            Durée : 15 seconde(s).</p>
        </div>

        <div class="detail-box">
            <h4><span class="buff">[Détermination]</span> (Amélioré)</h4>
            <p>Les dégâts de la compétence de base augmentent de <span class="stat-boost">15 %</span>.<br>
            Le Taux de coup critique augmente de <span class="stat-boost">15 %</span>.<br>
            Durée : 10 seconde(s).</p>
        </div>
    `,
    2: `
        <h3>2 étoiles :</h3>
        <p>Les PV de l'utilisateur augmentent de <span class="stat-boost">15 %</span>.<br></p>
    `,
    3: `
        <h3>3 étoiles :</h3>
        <p>L'effet <span class="buff">[Aura du guerrier]</span> est amélioré.<br>
        Augmente la Pénétration de défense de toute l'équipe à hauteur de <span class="stat-boost">20 %</span> de la stat augmentée de Pénétration de défense de Stark.<br></p>

        <div class="detail-box">
            <h4><span class="buff">[Aura du guerrier]</span> (Amélioré)</h4>
            <p>Augmente les dégâts infligés par Stark de <span class="stat-boost">30 %</span>.<br>
            Durée : 15 seconde(s).</p>
        </div>
    `,
    4: `
        <h3>4 étoiles :</h3>
        <p>L'efficacité de Bris de l'utilisateur augmente de <span class="stat-boost">36 %</span>.<br></p>
    `,
    5: `
        <h3>5 étoiles :</h3>
        <p>Les effets <span class="buff">[Confiance]</span> et <span class="buff">[Courage]</span> sont améliorés.<br>
        L'utilisation de <strong>Frappe spiralée</strong> active l'effet <span class="buff">[Détermination]</span>.<br>
        Lorsque les compétences <strong>Frappe tourbillonnante</strong>, <strong>Frappe foudroyante</strong>, <strong>Frappe foudroyante : Attaque lourde</strong> ou <strong>Frappe foudroyante : Attaque extrême</strong> touchent leur cible, le temps de rechargement de <strong>Frappe foudroyante : Annihilation</strong> diminue de 4 seconde(s) (temps de rechargement : 0.5 seconde(s)).<br>
        Lorsque les compétences <strong>Frappe foudroyante</strong>, <strong>Frappe foudroyante : Attaque lourde</strong> ou <strong>Frappe foudroyante : Attaque extrême</strong> touchent une cible affectée par l'effet <span class="buff">[Aura du guerrier]</span>, elles activent l'effet <span class="buff">[Talent du guerrier]</span>.<br></p>

        <div class="detail-box">
            <h4>Amélioration <span class="buff">[Confiance]</span></h4>
            <p>Augmente les dégâts de feu de <span class="stat-boost">5 %</span>.<br>
            Augmente la Pénétration de défense de <span class="stat-boost">5 %</span>.<br>
            Une fois que cet effet a atteint le maximum de cumuls, si l'effet <span class="buff">[Confiance]</span> est supprimé, il active l'effet <span class="buff">[Courage]</span>.<br>
            Durée : illimitée (cumulable jusqu'à 4 fois).</p>
        </div>

        <div class="detail-box">
            <h4>Amélioration <span class="buff">[Courage]</span></h4>
            <p>Augmente les dégâts de feu de <span class="stat-boost">30 %</span>.<br>
            Augmente la Pénétration de défense de <span class="stat-boost">30 %</span>.<br>
            Augmente les dégâts de la compétence <strong>Frappe foudroyante : Annihilation</strong> de <span class="stat-boost">50 %</span>.<br>
            Il est impossible d'activer l'effet <span class="buff">[Confiance]</span> tant que l'effet est actif. Active l'effet <span class="buff">[Timidité]</span> lorsque l'effet est supprimé.<br>
            Durée : 5 seconde(s).</p>
        </div>

        <div class="detail-box">
            <h4><span class="buff">[Talent du guerrier]</span></h4>
            <p>Inflige des dégâts équivalents à <span class="stat-boost">1000 %</span> des PV max de l'utilisateur.</p>
        </div>
    `
};

// --- RÉSUMÉ (COURT) ---
const charSummaryData = {
    0: `
        <h3>Passif : Guerrier Timide</h3>
        <p>Entrée : <span class="buff">[Timidité]</span>. Jauge Puissance bloquée sauf sous <span class="buff">[Courage]</span>.<br>
        Compétences activent <span class="buff">[Confiance]</span> (Stats Feu/Péné +3%/stack).<br>
        Max <span class="buff">[Confiance]</span> = <span class="buff">[Courage]</span> (Stats +20%, Jauge 100%, supprime Timidité).</p>
    `,
    1: `
        <h3>1 étoile</h3>
        <p>Entrée (Histoire) : <span class="buff">[Esprit combatif]</span> (Réduc Dégâts, Soin urgence).<br>
        Frappe tourbillonnante applique <span class="buff">[Aura du guerrier]</span> (Dégâts +15%).<br>
        Améliore <span class="buff">[Détermination]</span> (Crit Rate/Dégâts Base +15%).</p>
    `,
    2: `
        <h3>2 étoiles</h3>
        <p>Les PV de l'utilisateur augmentent de <span class="stat-boost">15 %</span>.<br></p>
    `,
    3: `
        <h3>3 étoiles</h3>
        <p>Améliore <span class="buff">[Aura du guerrier]</span> (Dégâts +30%).<br>
        Partage Pénétration de défense avec l'équipe (20% de celle de Stark).</p>
    `,
    4: `
        <h3>4 étoiles</h3>
        <p>L'efficacité de Bris de l'utilisateur augmente de <span class="stat-boost">36 %</span>.<br></p>
    `,
    5: `
        <h3>5 étoiles</h3>
        <p>Améliore <span class="buff">[Confiance]</span> (+5%/stack) et <span class="buff">[Courage]</span> (+30%, Ult Dmg +50%).<br>
        Compétences réduisent CD Ultime.<br>
        Active <span class="buff">[Talent du guerrier]</span> (Dégâts 1000% PV Max).</p>
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
   LOGIQUE ARME (Hache de Stark)
   ========================================== */
const weaponStarsContainer = document.getElementById('weapon-stars-container');
const weaponStars = weaponStarsContainer.querySelectorAll('.star');
const weaponMessage = document.getElementById('weapon-message');

let weaponCurrentLevel = 0;

const weaponData = {
    0: `
        <h3>Avancement 0 :</h3>
        <p>Les PV de l'utilisateur augmentent de <span class="stat-boost">5 %</span>.<br>
        Lorsque les compétences <strong>Frappe foudroyante</strong>, <strong>Frappe foudroyante : Attaque lourde</strong> ou <strong>Frappe foudroyante : Attaque extrême</strong> touchent leur cible, les dégâts de feu et la Pénétration de défense augmentent de <span class="stat-boost">1 %</span> (cumulable jusqu'à 3 fois).<br>
        Durée : 20 seconde(s)</p>
    `,
    1: `
        <h3>Avancement 5 étoiles :</h3>
        <p>Les PV de l'utilisateur augmentent de <span class="stat-boost">12 %</span>.<br>
        Lorsque les compétences <strong>Frappe foudroyante</strong>, <strong>Frappe foudroyante : Attaque lourde</strong> ou <strong>Frappe foudroyante : Attaque extrême</strong> touchent leur cible, les dégâts de feu et la Pénétration de défense augmentent de <span class="stat-boost">5 %</span> (cumulable jusqu'à 3 fois).<br>
        Durée : 20 seconde(s)</p>
    `,
    2: `
        <h3>Avancement 10 étoiles :</h3>
        <p>L'Attaque, la Défense et les PV de l'utilisateur augmentent de <span class="stat-boost">15 %</span>.</p>
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