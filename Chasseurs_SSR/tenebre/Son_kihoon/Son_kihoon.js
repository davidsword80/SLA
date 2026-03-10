/* ==========================================
   LOGIQUE PERSONNAGE (Son Kihoon)
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
        <p>L'effet <span class="buff">[Posture de combat]</span> est activé lorsque l'utilisateur arrive dans le niveau.<br>
        Lorsqu'une attaque touche une cible avec une jauge de Bris, elle active l'effet <span class="buff">[Posture de garde]</span>.<br>
        Si Son Kihoon ou un allié parvient à mettre la cible en état de <span class="buff">[Bris]</span>, la durée de Bris augmente de 3 secondes, les jauges de noyau et de puissance de Kihoon se remplissent à 100 % et l'effet <span class="buff">[Posture de combat]</span> est activé.<br></p>
        
        <div class="detail-box">
            <h4><span class="buff">[Posture de combat]</span></h4>
            <p>Supprime <span class="buff">[Posture de garde]</span>.<br>
            Augmente les dégâts de ténèbres de <span class="stat-boost">20 %</span>.<br>
            Augmente les dégâts de <strong>Charge féroce</strong> de <span class="stat-boost">50 %</span>.<br>
            Durée : illimitée.</p>
        </div>

        <div class="detail-box">
            <h4><span class="buff">[Posture de garde]</span></h4>
            <p>Supprime <span class="buff">[Posture de combat]</span>.<br>
            Augmente les dégâts infligés de <span class="stat-boost">10 %</span>.<br>
            Augmente l'efficacité de Bris de <span class="stat-boost">10 %</span>.<br>
            Durée : illimitée.</p>
        </div>
    `,
    1: `
        <h3>1 étoile :</h3>
        <p>L'utilisation des compétences <strong>Drapeau d'autorité</strong> ou <strong>Charge féroce</strong> active l'effet <span class="buff">[Bouclier robuste]</span>.<br>
        L'utilisation des compétences <strong>Drapeau d'autorité</strong> ou <strong>Charge féroce</strong> transforme <strong>Motivation</strong> en <strong>Esprit combatif : Motivation</strong> et l'active.<br>
        L'utilisation de la compétence <strong>Esprit combatif : Motivation</strong> remplit <span class="stat-boost">35 %</span> de la jauge de puissance de l'utilisateur.<br>
        Lorsque l'utilisateur quitte le combat, il applique l'effet <span class="buff">[Esprit vertueux]</span> aux membres de l'équipe de la classe Attaquant et de l'élément Ténèbres.<br></p>

        <div class="detail-box">
            <h4><span class="buff">[Bouclier robuste]</span></h4>
            <p>Confère un Bouclier équivalent à <span class="stat-boost">30 %</span> des PV de Son Kihoon.<br>
            Durée : 30 seconde(s).</p>
        </div>

        <div class="detail-box">
            <h4><span class="buff">[Esprit vertueux]</span></h4>
            <p>Lorsqu'une compétence de base touche sa cible, elle inflige des dégâts de Bris faibles.<br>
            L'utilisateur reçoit <span class="buff">[Super armure]</span> tant que l'effet est actif.<br>
            Lorsque l'effet <span class="buff">[Esprit vertueux]</span> prend fin, il restaure <span class="stat-boost">25 %</span> des PM de l'utilisateur.<br>
            Durée : 25 seconde(s) (temps de rechargement : 30 seconde(s)).</p>
        </div>
    `,
    2: `
        <h3>2 étoiles :</h3>
        <p>L'efficacité de Bris de l'utilisateur augmente de <span class="stat-boost">10 %</span>.<br></p>
    `,
    3: `
        <h3>3 étoiles :</h3>
        <p>Inflige des dégâts de Bris lourds lorsque la compétence <strong>Esprit combatif : Motivation</strong> touche sa cible.<br>
        Inflige des dégâts de Bris tout-puissants lorsque la compétence <strong>Charge féroce</strong> touche sa cible.<br>
        Améliore l'effet <span class="buff">[Esprit combatif affaibli]</span>.<br></p>

        <div class="detail-box">
            <h4><span class="buff">[Esprit combatif affaibli]</span> (Amélioré)</h4>
            <p>Les effets suivants sont appliqués aux cibles qui entrent dans la zone :<br>
            Diminue l'Attaque de <span class="stat-boost">12.5 %</span>.<br>
            Augmente les dégâts de ténèbres subis de <span class="stat-boost">10 %</span>.<br>
            L'effet <span class="buff">[Irrémédiable]</span> est activé.</p>
        </div>
    `,
    4: `
        <h3>4 étoiles :</h3>
        <p>L'Attaque et les PV de toute l'équipe augmentent de <span class="stat-boost">10 %</span>.<br></p>
    `,
    5: `
        <h3>5 étoiles :</h3>
        <p>L'effet <span class="buff">[Chef de l'escadron d'attaque]</span> est appliqué à toute l'équipe lorsque l'utilisateur arrive dans le niveau.<br>
        Lorsque la compétence <strong>Esprit combatif palpitant</strong> touche une cible sans jauge de Bris, elle active l'effet <span class="buff">[Esprit brisé]</span> et applique l'effet <span class="buff">[Frappe de Berserker]</span> à toute l'équipe.<br></p>

        <div class="detail-box">
            <h4><span class="buff">[Chef de l'escadron d'attaque]</span></h4>
            <p>Augmente l'Attaque de <span class="stat-boost">10 %</span>.<br>
            Augmente les PV de <span class="stat-boost">10 %</span>.<br>
            Augmente les dégâts infligés de <span class="stat-boost">10 %</span>.<br>
            Durée : illimitée.</p>
        </div>

        <div class="detail-box">
            <h4><span class="buff">[Esprit brisé]</span></h4>
            <p>Diminue l'Attaque de <span class="stat-boost">12.5 %</span>.<br>
            Augmente les chances de recevoir des Dégâts de coup critique de <span class="stat-boost">15 %</span>.<br>
            Durée : 60 seconde(s).</p>
        </div>

        <div class="detail-box">
            <h4><span class="buff">[Frappe de Berserker]</span></h4>
            <p>Augmente les Dégâts de coup critique de <span class="stat-boost">30 %</span>.<br>
            Augmente les dégâts de ténèbres de <span class="stat-boost">15 %</span>.<br>
            Durée : 60 seconde(s).</p>
        </div>
    `
};

// --- RÉSUMÉ (COURT) ---
const charSummaryData = {
    0: `
        <h3>Passif : Maître du Bris</h3>
        <p>Cible avec Jauge Bris = <span class="buff">[Posture de garde]</span> (Efficacité Bris +10%).<br>
        Cible mise en Bris = <span class="buff">[Posture de combat]</span> (Dégâts Ténèbres +20%) + Reset Jauges.<br>
        Prolonge durée Bris de 3s.</p>
    `,
    1: `
        <h3>1 étoile</h3>
        <p>Compétences = <span class="buff">[Bouclier robuste]</span> (30% PV).<br>
        Motivation remplit Jauge Puissance.<br>
        Sortie combat = Buff <span class="buff">[Esprit vertueux]</span> aux Attaquants Ténèbres (Super armure, Regen PM, Dégâts Bris).</p>
    `,
    2: `
        <h3>2 étoiles</h3>
        <p>Efficacité de Bris de l'utilisateur <span class="stat-boost">+10%</span>.<br></p>
    `,
    3: `
        <h3>3 étoiles</h3>
        <p>Compétences infligent Bris Lourds/Tout-puissants.<br>
        Zone : Atk ennemie <span class="stat-boost">-12.5%</span>, Dégâts Ténèbres subis <span class="stat-boost">+10%</span>, <span class="buff">[Irrémédiable]</span>.</p>
    `,
    4: `
        <h3>4 étoiles</h3>
        <p>Attaque et PV de toute l'équipe <span class="stat-boost">+10%</span>.<br></p>
    `,
    5: `
        <h3>5 étoiles</h3>
        <p>Entrée = Buff <span class="buff">[Chef]</span> (Atk/PV/Dégâts <span class="stat-boost">+10%</span>).<br>
        Ultime sur cible sans Bris = Debuff <span class="buff">[Esprit brisé]</span> (Atk down, Crit reçu up) + Buff équipe <span class="buff">[Berserker]</span> (Crit Dmg/Ténèbres up).</p>
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
   LOGIQUE ARME (Détermination de fer)
   ========================================== */
const weaponStarsContainer = document.getElementById('weapon-stars-container');
const weaponStars = weaponStarsContainer.querySelectorAll('.star');
const weaponMessage = document.getElementById('weapon-message');

let weaponCurrentLevel = 0;

const weaponData = {
    0: `
        <h3>Avancement 0 :</h3>
        <p>Les PV de Kihoon augmentent de <span class="stat-boost">5 %</span>.<br>
        Lorsque Kihoon ou un membre de l'équipe parvient à mettre la cible en état de <span class="buff">[Bris]</span>, les dégâts de ténèbres de toute l'équipe augmentent de <span class="stat-boost">2.5 %</span>.<br>
        Durée: illimitée</p>
    `,
    1: `
        <h3>Avancement 5 étoiles :</h3>
        <p>Les PV de Kihoon augmentent de <span class="stat-boost">12 %</span>.<br>
        Lorsque Kihoon ou un membre de l'équipe parvient à mettre la cible en état de <span class="buff">[Bris]</span>, les dégâts de ténèbres de toute l'équipe augmentent de <span class="stat-boost">15 %</span>.<br>
        Durée: illimitée</p>
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