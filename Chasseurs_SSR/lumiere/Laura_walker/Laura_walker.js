/* ==========================================
   LOGIQUE PERSONNAGE (Laura Walker)
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
        <p>L'utilisation de la compétence <strong>Point de contrôle</strong> active l'effet <span class="buff">[Échéance]</span> 1 fois.<br>
        L'utilisation des compétences <strong>Escorte d'entreprise</strong> ou <strong>Administratrice en chef</strong> lorsque l'équipe est composée de chasseurs de l'élément Lumière applique l'effet <span class="buff">[Élan]</span> à toute l'équipe.<br>
        L'utilisation de la compétence <strong>Boucle de tâche</strong> applique l'effet <span class="buff">[Éclaireuse]</span> à tous les membres de l'équipe de l'élément Lumière.<br></p>
        
        <div class="detail-box">
            <h4><span class="buff">[Élan]</span></h4>
            <p>Augmente la Pénétration de défense de <span class="stat-boost">10 %</span>. Réduit les dégâts subis de <span class="stat-boost">10 %</span>.<br>
            Durée : 60 seconde(s).</p>
        </div>

        <div class="detail-box">
            <h4><span class="buff">[Éclaireuse]</span></h4>
            <p>Restaure en continu les PV à hauteur de <span class="stat-boost">2 %</span> de l'Attaque de Laura Walker toutes les 3 seconde(s).<br>
            Confère un Bouclier équivalent à <span class="stat-boost">3 %</span> de l'Attaque de Laura Walker toutes les 3 seconde(s).<br>
            Lorsque le Bouclier est actif, il active l'effet <span class="buff">[Secrétaire]</span>. Durée : 60 seconde(s).</p>
        </div>

        <div class="detail-box">
            <h4><span class="buff">[Secrétaire]</span></h4>
            <p>L'Attaque et la Défense augmentent de <span class="stat-boost">1 %</span>. Durée : 10 seconde(s) (cumulable jusqu'à 10 fois).</p>
        </div>
    `,
    1: `
        <h3>1 étoile :</h3>
        <p>L'Attaque et la Défense de tous les membres de l'équipe augmentent de <span class="stat-boost">9 %</span>.<br></p>
    `,
    2: `
        <h3>2 étoiles :</h3>
        <p>Lorsque l'utilisatrice quitte le combat, l'effet <span class="buff">[Entreprise]</span> est appliqué à tous les membres de l'équipe de l'élément Lumière, sauf Laura Walker, au bout de 3.5 seconde(s).<br>
        Chaque fois que les compétences <strong>Échéance</strong>, <strong>Boucle de tâche</strong> ou <strong>Officieusement</strong> touchent leur cible, elles leur appliquent l'effet <span class="buff">[Date butoir]</span>.<br>
        L'utilisation de la compétence <strong>Escorte d'entreprise</strong> améliore l'effet <span class="buff">[Développement]</span>.<br></p>

        <div class="detail-box">
            <h4><span class="buff">[Officieusement]</span></h4>
            <p>Laura Walker apparaît et fait claquer son fouet.<br>
            Elle inflige des dégâts élémentaires de lumière équivalents à <span class="stat-boost">1000 %</span> de son Attaque.<br>
            L'utilisation de cette compétence supprime les débuffs sur toute l'équipe. Compte comme une compétence de base.</p>
        </div>

        <div class="detail-box">
            <h4><span class="buff">[Entreprise]</span></h4>
            <p>Lorsqu'une attaque de lumière touche sa cible, elle lui applique l'effet <span class="buff">[Officieusement]</span> (temps de rechargement : 5 seconde(s)).<br>
            Durée : 60 seconde(s).</p>
        </div>

        <div class="detail-box">
            <h4><span class="buff">[Date butoir]</span></h4>
            <p>Augmente les dégâts subis de lumière de <span class="stat-boost">1 %</span>.<br>
            Durée : 60 seconde(s) (cumulable jusqu'à 20 fois).</p>
        </div>

        <div class="detail-box">
            <h4><span class="buff">[Développement]</span></h4>
            <p>Augmente les dégâts infligés de <span class="stat-boost">30 %</span>. Supprime les débuffs.<br>
            Durée : 30 seconde(s).</p>
        </div>
    `,
    3: `
        <h3>3 étoiles :</h3>
        <p>Les effets <span class="buff">[Éclaireuse]</span> et <span class="buff">[Secrétaire]</span> sont améliorés.<br>
        L'utilisation de <strong>Point de contrôle</strong> remplit la jauge de puissance de l'utilisatrice de <span class="stat-boost">50 %</span>.<br></p>

        <div class="detail-box">
            <h4>Amélioration <span class="buff">[Éclaireuse]</span></h4>
            <p>Restaure en continu les PV à hauteur de <span class="stat-boost">4 %</span> de l'Attaque de Laura Walker toutes les 3 seconde(s).<br>
            Confère un Bouclier équivalent à <span class="stat-boost">6 %</span> de l'Attaque de Laura Walker toutes les 3 seconde(s).<br>
            Lorsque le Bouclier est actif, il active l'effet <span class="buff">[Secrétaire]</span>. Durée : 60 seconde(s).</p>
        </div>

        <div class="detail-box">
            <h4>Amélioration <span class="buff">[Secrétaire]</span></h4>
            <p>Augmente l'Attaque et la Défense de <span class="stat-boost">1.7 %</span>. Durée : 10 seconde(s) (cumulable jusqu'à 10 fois).</p>
        </div>
    `,
    4: `
        <h3>4 étoiles :</h3>
        <p>Les dégâts infligés par les membres de l'équipe de l'élément Lumière augmentent de <span class="stat-boost">30 %</span>.<br></p>
    `,
    5: `
        <h3>5 étoiles :</h3>
        <p>L'effet <span class="buff">[Professionnelle]</span> est activé lorsque l'utilisatrice arrive dans le niveau.<br>
        Les effets <span class="buff">[Date butoir]</span> et <span class="buff">[Élan]</span> sont améliorés.<br></p>

        <div class="detail-box">
            <h4><span class="buff">[Professionnelle]</span></h4>
            <p>Augmente les dégâts de <strong>Boucle de tâche</strong> de <span class="stat-boost">250 %</span>.<br>
            Augmente les dégâts infligés de <span class="stat-boost">200 %</span>. L'utilisation de la compétence <strong>Boucle de tâche</strong> confère à l'utilisatrice un Bouclier équivalent à <span class="stat-boost">10 %</span> de l'Attaque de Laura Walker pendant 3 seconde(s).<br>
            Durée : illimitée.</p>
        </div>

        <div class="detail-box">
            <h4>Amélioration <span class="buff">[Date butoir]</span></h4>
            <p>Augmente les dégâts de lumière subis par la cible de <span class="stat-boost">1.5 %</span>.<br>
            Durée : 60 seconde(s) (cumulable jusqu'à 20 fois).</p>
        </div>

        <div class="detail-box">
            <h4>Amélioration <span class="buff">[Élan]</span></h4>
            <p>Augmente la Pénétration de défense de <span class="stat-boost">20 %</span>.<br>
            Réduit les dégâts subis de <span class="stat-boost">20 %</span>. Durée : 60 seconde(s).</p>
        </div>
    `
};

// --- RÉSUMÉ (COURT) ---
const charSummaryData = {
    0: `
        <h3>Passif : Assistante Lumière</h3>
        <p>Buffs Équipe Lumière : <span class="buff">[Élan]</span> (Pénétration/Défense) et <span class="buff">[Éclaireuse]</span> (Soin/Bouclier).<br>
        Bouclier active <span class="buff">[Secrétaire]</span> (Att/Déf <span class="stat-boost">+1%</span>/stack).</p>
    `,
    1: `
        <h3>1 étoile</h3>
        <p>Attaque et Défense de toute l'équipe <span class="stat-boost">+9%</span>.<br></p>
    `,
    2: `
        <h3>2 étoiles</h3>
        <p>Sortie combat = <span class="buff">[Entreprise]</span> sur alliés (Active Officieusement : Dégâts/Cleanse).<br>
        Applique <span class="buff">[Date butoir]</span> (Debuff Dégâts Lumière <span class="stat-boost">1%</span>/stack).<br>
        Escorte améliore <span class="buff">[Développement]</span> (Dégâts <span class="stat-boost">+30%</span>, Cleanse).</p>
    `,
    3: `
        <h3>3 étoiles</h3>
        <p>Améliore <span class="buff">[Éclaireuse]</span> (Soin 4%, Bouclier 6%) et <span class="buff">[Secrétaire]</span> (Att/Def 1.7%).<br>
        Point de contrôle = Jauge Puissance <span class="stat-boost">+50%</span>.</p>
    `,
    4: `
        <h3>4 étoiles</h3>
        <p>Dégâts de l'équipe Lumière <span class="stat-boost">+30%</span>.<br></p>
    `,
    5: `
        <h3>5 étoiles</h3>
        <p>Entrée = <span class="buff">[Professionnelle]</span> (Dégâts massifs, Bouclier).<br>
        Améliore <span class="buff">[Date butoir]</span> (1.5%) et <span class="buff">[Élan]</span> (Pénétration/Réduc 20%).</p>
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
   LOGIQUE ARME (Éclair déchire-nuit)
   ========================================== */
const weaponStarsContainer = document.getElementById('weapon-stars-container');
const weaponStars = weaponStarsContainer.querySelectorAll('.star');
const weaponMessage = document.getElementById('weapon-message');

let weaponCurrentLevel = 0;

const weaponData = {
    0: `
        <h3>Avancement 0 :</h3>
        <p>L'Attaque de l'utilisatrice augmente de <span class="stat-boost">5%</span>.<br>
        L'utilisation des compétences <strong>Escorte d'entreprise</strong> ou <strong>Administratrice en chef</strong> augmente les dégâts de lumière de toute l'équipe de <span class="stat-boost">5%</span> pendant 30 seconde(s).</p>
    `,
    1: `
        <h3>Avancement 5 étoiles :</h3>
        <p>L'Attaque de l'utilisatrice augmente de <span class="stat-boost">12 %</span>.<br>
        L'utilisation des compétences <strong>Escorte d'entreprise</strong> ou <strong>Administratrice en chef</strong> augmente les dégâts de lumière de toute l'équipe de <span class="stat-boost">30%</span> pendant 30 seconde(s).</p>
    `,
    2: `
        <h3>Avancement 10 étoiles :</h3>
        <p>Augmente l'Attaque, la Défense et les PV de <span class="stat-boost">15%</span>.</p>
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