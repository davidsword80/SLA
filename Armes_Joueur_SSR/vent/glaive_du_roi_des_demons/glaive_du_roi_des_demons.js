/* ==========================================
   LOGIQUE ARME (Glaive du roi des démons)
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
        <p>Lors de l'utilisation de la compétence <strong>Foudre</strong>, l'utilisateur applique un <span class="buff">[Bouclier]</span> et réalise une <span class="buff">[contre-attaque]</span>.<br>
        Les effets <span class="buff">[Étourdissement]</span> et <span class="buff">[Foudre tonitruante]</span> s'appliquent en cas de contre-attaque réussie.<br></p>
        <div class="detail-box">
            <h4><span class="buff">[Bouclier]</span></h4>
            <p>Crée un <span class="buff">[Bouclier]</span> équivalent à <span class="stat-boost">50%</span> des PV max de l'utilisateur.<br>
            Durée: 3 seconde(s)</p>
        </div>
        <div class="detail-box">
            <h4><span class="buff">[étourdi]</span></h4>
            <p>Immobilise la cible.<br>
            Durée: 3 seconde(s)</p>
        </div>
        <div class="detail-box">
            <h4><span class="buff">[Foudre tonitruante]</span></h4>
            <p>Augmente l'Attaque de l'utilisateur de <span class="stat-boost">12%</span>.<br>
            Crée un éclair qui inflige toutes les secondes des dégâts équivalents à <span class="stat-boost">200%</span> de l'Attaque de l'utilisateur dans les zones proches toutes les 0,75 secondes.<br>
            Durée: 10 seconde(s)</p>
        </div>
    `,
    1: `
        <h3>1 étoile :</h3>
        <p>Inflige l'effet <span class="buff">[Coup de tonnerre]</span> à une même cible toutes les 5 attaques.<br></p>
        <div class="detail-box">
            <h4><span class="buff">[Coup de tonnerre]</span></h4>
            <p>Inflige des dégâts équivalents à <span class="stat-boost">100%</span> de l'Attaque.<br>
            Temps de rechargement: 0.5 seconde(s)</p>
        </div>
    `,
    2: `
        <h3>2 étoiles :</h3>
        <p>Vos dégâts de vent augmentent de <span class="stat-boost">10 %</span>.<br></p>
    `,
    3: `
        <h3>3 étoiles :</h3>
        <p>Lorsque la compétence <strong>Foudre</strong> est utilisée, l'effet <span class="buff">[Foudre tonitruante]</span> s'applique, qu'une contre-attaque soit réussie ou non.<br>
        Les dégâts de <span class="buff">[Foudre tonitruante]</span> augmentent de <span class="stat-boost">30%</span>.<br>
        Les dégâts de vent augmentent de <span class="stat-boost">10%</span> tant que l'effet <span class="buff">[Foudre tonitruante]</span> est actif.<br></p>
    `,
    4: `
        <h3>4 étoiles :</h3>
        <p>Le temps de rechargement de <strong>Foudre</strong> diminue de <span class="stat-boost">20%</span>.<br></p>
    `,
    5: `
        <h3>5 étoiles :</h3>
        <p>L'effet <span class="buff">[Coup de tonnerre]</span> est amélioré.<br>
        Chaque fois que l'utilisateur touche une même cible 3 fois, l'effet <span class="buff">[Coup de tonnerre]</span> est appliqué à la cible.<br>
        Lorsque la compétence <strong>Foudre</strong> touche sa cible, les effets <span class="buff">[Bénédiction des Flammes blanches]</span> et <span class="buff">[Éclair final]</span> sont appliqués.<br></p>
        <div class="detail-box">
            <h4><span class="buff">[Coup de tonnerre]</span></h4>
            <p>Inflige des dégâts équivalents à <span class="stat-boost">200 %</span> de l'Attaque de l'utilisateur.<br>
            Temps de rechargement: 0.3 seconde(s)</p>
        </div>
        <div class="detail-box">
            <h4><span class="buff">[Éclair final]</span></h4>
            <p>Un énorme éclair s'abat sur la cible et inflige des dégâts équivalents à <span class="stat-boost">1600%</span> de l'Attaque de l'utilisateur aux ennemis proches.<br></p>
        </div>
        <div class="detail-box">
            <h4><span class="buff">[Bénédiction des Flammes blanches]</span></h4>
            <p>Octroie un <span class="buff">[Bouclier]</span> équivalent à <span class="stat-boost">10%</span> des PV max de l'utilisateur.<br>
            Lorsque l'utilisateur est touché, l'assaillant est <span class="buff">[étourdi]</span> pendant 2 seconde(s) (ne s'active qu'une fois par cible).<br>
            Durée: 10 seconde(s)</p>
        </div>
    `
};

// --- RÉSUMÉ (COURT) ---
const weaponSummaryData = {
    0: `
        <h3>Passif : Gardien de l'Orage</h3>
        <p>Foudre = <span class="buff">[Bouclier]</span> (50% PV, 3s) + Contre-attaque.<br>
        Contre réussi = <span class="buff">[Étourdi]</span> + <span class="buff">[Foudre tonitruante]</span>.<br>
        [Foudre] : Attaque <span class="stat-boost">+12%</span> + DOT Éclair (200% Atk/s).</p>
    `,
    1: `
        <h3>1 étoile</h3>
        <p>5 attaques = <span class="buff">[Coup de tonnerre]</span>.<br>
        [Coup] : Dégâts <span class="stat-boost">100%</span> Atk (CD 0.5s).</p>
    `,
    2: `
        <h3>2 étoiles</h3>
        <p>Dégâts Vent <span class="stat-boost">+10%</span>.<br></p>
    `,
    3: `
        <h3>3 étoiles</h3>
        <p>Foudre active [Foudre tonitruante] sans condition.<br>
        Dégâts Foudre tonitruante <span class="stat-boost">+30%</span>.<br>
        Dégâts Vent <span class="stat-boost">+10%</span> sous Foudre.</p>
    `,
    4: `
        <h3>4 étoiles</h3>
        <p>CD Foudre <span class="stat-boost">-20%</span>.<br></p>
    `,
    5: `
        <h3>5 étoiles</h3>
        <p>3 attaques = [Coup de tonnerre] amélioré (200% Atk, CD 0.3s).<br>
        Foudre touche = <span class="buff">[Éclair final]</span> (1600% Atk) + <span class="buff">[Bénédiction]</span> (Bouclier + Stun sur coup reçu).</p>
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