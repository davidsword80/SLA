/* ==========================================
   LOGIQUE PERSONNAGE (Sung Jinah)
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
        <p>Lors de l'utilisation des compétences <strong>Rapière de tempête inversée</strong>, <strong>Tourbillon convergent</strong>, <strong>Torrent</strong>, <strong>Parapluie : Rapière de tempête inversée</strong>, <strong>Parapluie : Tourbillon convergent</strong> ou <strong>Parapluie : Torrent</strong>, l'effet <span class="buff">[Vent]</span> est activé.<br></p>
        
        <div class="detail-box">
            <h4><span class="buff">[Vent]</span></h4>
            <p>Augmente les dégâts des compétences <strong>Rapière de tempête inversée</strong>, <strong>Tourbillon convergent</strong>, <strong>Parapluie : Rapière de tempête inversée</strong>, <strong>Parapluie : Tourbillon convergent</strong>, <strong>Sérénade tempétueuse</strong> et <strong>Sérénade : Perturbation aéro</strong> de <span class="stat-boost">50 %</span>.<br>
            À 3 cumuls, octroie à toute l'équipe le maximum de cumuls de l'effet <span class="buff">[Ailes de bourrasque]</span> à l'exception de Sung Jinah.<br>
            Lorsque l'utilisatrice quitte le combat, cet effet est supprimé. En mode Combat d'équipe, cet effet est supprimé toutes les 15 seconde(s).<br>
            Durée : 60 seconde(s) (cumulable jusqu'à 3 fois).</p>
        </div>

        <div class="detail-box">
            <h4><span class="buff">[Ailes de bourrasque]</span></h4>
            <p>Lors de l'utilisation de la compétence de base ou de la compétence ultime, 1 cumul de l'effet <span class="buff">[Ailes de bourrasque]</span> est supprimé et l'effet <span class="buff">[Ailes de la liberté]</span> est activé.<br>
            Durée : 60 seconde(s) (cumulable jusqu'à 3 fois).</p>
        </div>

        <div class="detail-box">
            <h4><span class="buff">[Ailes de la liberté]</span></h4>
            <p>Augmente les dégâts des compétences de base et ultime de l'utilisatrice de <span class="stat-boost">10 %</span>.<br>
            Durée : 5 seconde(s) (cumulable jusqu'à 1 fois).</p>
        </div>
    `,
    1: `
        <h3>1 étoile :</h3>
        <p>Lorsque l'effet <span class="buff">[Vent]</span> est activé, l'effet <span class="buff">[Toucher du vent]</span> est appliqué à toute l'équipe.<br></p>

        <div class="detail-box">
            <h4><span class="buff">[Toucher du vent]</span></h4>
            <p>Augmente l'Attaque de l'utilisatrice de <span class="stat-boost">1 %</span>. Augmente la Défense de <span class="stat-boost">1 %</span>.<br>
            Augmente les dégâts de la compétence de base de <span class="stat-boost">0.5 %</span>.<br>
            Augmente en plus l'Attaque des membres de l'équipe de l'élément Vent de <span class="stat-boost">1 %</span>.<br>
            Augmente en plus la Défense des membres de l'équipe de l'élément Vent de <span class="stat-boost">1 %</span>.<br>
            Augmente en plus les dégâts de la compétence de base des membres de l'équipe de l'élément Vent de <span class="stat-boost">0.5 %</span>.<br>
            Durée : illimitée (cumulable jusqu'à 10 fois).</p>
        </div>
    `,
    2: `
        <h3>2 étoiles :</h3>
        <p>Lorsque l'effet <span class="buff">[Ailes de bourrasque]</span> est activé, toute l'équipe récupère des PM à hauteur de 100 par cumul appliqué.<br>
        L'effet <span class="buff">[Ailes de la liberté]</span> est amélioré.<br></p>

        <div class="detail-box">
            <h4><span class="buff">[Ailes de la liberté]</span> (Amélioré)</h4>
            <p>Les dégâts des compétences de base et ultime de l'utilisatrice augmentent de <span class="stat-boost">20 %</span>.<br>
            Les dégâts de vent de l'utilisatrice augmentent de <span class="stat-boost">10 %</span>.<br>
            Durée : 10 seconde(s) (cumulable jusqu'à 1 fois).</p>
        </div>
    `,
    3: `
        <h3>3 étoiles :</h3>
        <p>Améliore l'effet <span class="buff">[Ailes de la liberté]</span>.<br></p>

        <div class="detail-box">
            <h4><span class="buff">[Ailes de la liberté]</span> (Amélioré - 3 Étoiles)</h4>
            <p>Augmente les dégâts des compétences de base et ultime de l'utilisatrice de <span class="stat-boost">20 %</span>.<br>
            Augmente les dégâts de vent de <span class="stat-boost">10 %</span>.<br>
            Lorsque la compétence ultime de l'utilisatrice touche sa cible, elle lui applique l'effet <span class="buff">[Irrémédiable]</span>.<br>
            Durée : 10 seconde(s) (cumulable jusqu'à 1 fois).</p>
        </div>

        <div class="detail-box">
            <h4><span class="buff">[Irrémédiable]</span></h4>
            <p>La cible n'est pas en mesure de récupérer des PV.<br>
            Durée : 30 seconde(s).</p>
        </div>
    `,
    4: `
        <h3>4 étoiles :</h3>
        <p>Les dégâts de vent des membres de l'équipe de l'élément Vent augmentent de <span class="stat-boost">5 %</span> par allié de l'élément Vent.<br></p>
    `,
    5: `
        <h3>5 étoiles :</h3>
        <p>L'utilisation des compétences <strong>Perturbation aéro</strong> ou <strong>Sérénade : Perturbation aéro</strong> confère 1 cumul(s) de l'effet <span class="buff">[Aéro]</span> à toute l'équipe.<br>
        Après l'utilisation de la compétence <strong>Sérénade tempétueuse</strong> en mode Combat d'équipe, la compétence <strong>Sérénade : Perturbation aéro</strong> peut à nouveau être utilisée.<br>
        Lorsque Sung Jinah ou un membre de l'équipe quitte le combat, 1 cumuls supplémentaires de l'effet <span class="buff">[Aéro]</span> sont conférés à toute l'équipe.<br></p>

        <div class="detail-box">
            <h4><span class="buff">[Sérénade : Perturbation aéro]</span></h4>
            <p>Dégâts : inflige des dégâts équivalents à <span class="stat-boost">300 %</span> de ceux de <strong>Sérénade tempétueuse</strong>.<br>
            Lors de l'utilisation de cette compétence, le temps de rechargement de la compétence <strong>Sérénade tempétueuse</strong> diminue de <span class="stat-boost">60 %</span> et l'effet <span class="buff">[Averses soudaines]</span> est réactivé sur Sung Jinah.</p>
        </div>

        <div class="detail-box">
            <h4><span class="buff">[Aéro]</span></h4>
            <p>Augmente les dégâts de vent de <span class="stat-boost">2 %</span>.<br>
            Durée : 60 seconde(s) (cumulable jusqu'à 5 fois).</p>
        </div>
    `
};

// --- RÉSUMÉ (COURT) ---
const charSummaryData = {
    0: `
        <h3>Passif : Maîtrise du Vent</h3>
        <p>Compétences activent <span class="buff">[Vent]</span> (Dégâts compétences <span class="stat-boost">+50%</span>).<br>
        3 stacks [Vent] = Buff équipe <span class="buff">[Ailes de bourrasque]</span>.<br>
        [Ailes de bourrasque] -> Active <span class="buff">[Ailes de la liberté]</span> sur Basic/Ult (Dégâts <span class="stat-boost">+10%</span>).</p>
    `,
    1: `
        <h3>1 étoile</h3>
        <p>[Vent] active <span class="buff">[Toucher du vent]</span> (Stackable x10) :<br>
        Boost Self: Atk/Def +1%, Basic Dmg +0.5%.<br>
        Boost Équipe Vent: Atk/Def +1%, Basic Dmg +0.5%.</p>
    `,
    2: `
        <h3>2 étoiles</h3>
        <p>[Ailes de bourrasque] rend 100 PM/stack à l'équipe.<br>
        Améliore <span class="buff">[Ailes de la liberté]</span> : Dégâts Basic/Ult <span class="stat-boost">+20%</span>, Vent <span class="stat-boost">+10%</span>.</p>
    `,
    3: `
        <h3>3 étoiles</h3>
        <p>Ultime applique <span class="buff">[Irrémédiable]</span> (Anti-heal).</p>
    `,
    4: `
        <h3>4 étoiles</h3>
        <p>Dégâts Vent équipe <span class="stat-boost">+5%</span> par allié Vent.<br></p>
    `,
    5: `
        <h3>5 étoiles</h3>
        <p>Perturbation/Tag out = Buff <span class="buff">[Aéro]</span> (Dégâts Vent <span class="stat-boost">+2%</span>/stack).<br>
        Sérénade : Perturbation aéro reset CD Ult et boost dégâts.</p>
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
   LOGIQUE ARME (Mousson bleue)
   ========================================== */
const weaponStarsContainer = document.getElementById('weapon-stars-container');
const weaponStars = weaponStarsContainer.querySelectorAll('.star');
const weaponMessage = document.getElementById('weapon-message');

let weaponCurrentLevel = 0;

const weaponData = {
    0: `
        <h3>Avancement 0 :</h3>
        <p>Augmente la Défense de <span class="stat-boost">2 %</span>.<br>
        Lors de l'utilisation des compétences <strong>Rapière de tempête inversée</strong> ou <strong>Parapluie : Rapière de tempête inversée</strong>, les dégâts de compétence de base des membres de l'équipe augmentent de <span class="stat-boost">0.5 %</span>.</p>
    `,
    1: `
        <h3>Avancement 5 étoiles :</h3>
        <p>Augmente la Défense de <span class="stat-boost">12 %</span>.<br>
        Lors de l'utilisation des compétences <strong>Rapière de tempête inversée</strong> ou <strong>Parapluie : Rapière de tempête inversée</strong>, les dégâts de compétence de base des membres de l'équipe augmentent de <span class="stat-boost">2 %</span>.<br>
        Durée : illimitée (cumulable jusqu'à 5 fois)</p>
    `,
    2: `
        <h3>Avancement 10 étoiles :</h3>
        <p>Augmente l'Attaque, la Défense et les PV de l'utilisatrice de <span class="stat-boost">15 %</span>.</p>
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