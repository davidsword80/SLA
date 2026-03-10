/* ==========================================
   LOGIQUE ARME (Tueuse de chevalier)
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
        <p>Lors de l'utilisation de la compétence <strong>Télékinésie</strong>, l'utilisateur inflige l'effet <span class="buff">[Tueuse de chevaliers]</span> tous les 5 coup(s).<br></p>
        <div class="detail-box">
            <h4><span class="buff">[Tueuse de chevaliers]</span></h4>
            <p>Augmente la Pénétration de défense de l'utilisateur de <span class="stat-boost">2.4%</span> (cumulable jusqu'à 10 fois).<br>
            Durée: 20 seconde(s)</p>
        </div>
    `,
    1: `
        <h3>1 étoile :</h3>
        <p>Lors de l'utilisation de la compétence <strong>Télékinésie</strong>, l'utilisateur inflige l'effet <span class="buff">[Décomposition]</span> tous les 5 coup(s).<br></p>
        <div class="detail-box">
            <h4><span class="buff">[Décomposition]</span></h4>
            <p>Lorsque la dernière attaque de <strong>Télékinésie</strong> touche sa cible, elle crée une explosion après 1 seconde.<br>
            Inflige des dégâts équivalents à <span class="stat-boost">40%</span> de l'Attaque par cumul (cumulable jusqu'à 10 fois).<br>
            Durée: 2 seconde(s)</p>
        </div>
    `,
    2: `
        <h3>2 étoiles :</h3>
        <p>Vos dégâts de feu augmentent de <span class="stat-boost">8%</span>.<br></p>
    `,
    3: `
        <h3>3 étoiles :</h3>
        <p>Lors de l'utilisation de la compétence <strong>Télékinésie</strong>, l'effet <span class="buff">[Voile de flammes]</span> est appliqué.<br></p>
        <div class="detail-box">
            <h4><span class="buff">[Voile de flammes]</span></h4>
            <p>Applique un <span class="buff">[Bouclier]</span> équivalent à <span class="stat-boost">15%</span> des PV max de l'utilisateur.<br>
            Durée: 5 seconde(s)</p>
        </div>
    `,
    4: `
        <h3>4 étoiles :</h3>
        <p>Le temps de rechargement de <strong>Télékinésie</strong> diminue de <span class="stat-boost">15%</span>.<br></p>
    `,
    5: `
        <h3>5 étoiles :</h3>
        <p>Lorsque <span class="buff">[Décomposition]</span> explose avec le maximum de cumuls, l'effet <span class="buff">[Destruction amorcée]</span> s'applique sur la cible.<br></p>
        <div class="detail-box">
            <h4><span class="buff">[Destruction amorcée]</span></h4>
            <p>Les dégâts qu'elle subit augmentent de <span class="stat-boost">2%</span> (cumulable jusqu'à 5 fois).<br>
            Durée: infinie</p>
        </div>
    `
};

// --- RÉSUMÉ (COURT) ---
const weaponSummaryData = {
    0: `
        <h3>Passif : Brise-Armure</h3>
        <p>Télékinésie (5 coups) = <span class="buff">[Tueuse de chevaliers]</span>.<br>
        [Tueuse] : Pénétration Défense <span class="stat-boost">+2.4%</span>/cumul (max 10).</p>
    `,
    1: `
        <h3>1 étoile</h3>
        <p>Télékinésie (5 coups) = <span class="buff">[Décomposition]</span>.<br>
        [Décomposition] : Explosion finale (Dégâts <span class="stat-boost">40%</span> Atk/cumul, max 10).</p>
    `,
    2: `
        <h3>2 étoiles</h3>
        <p>Dégâts Feu <span class="stat-boost">+8%</span>.<br></p>
    `,
    3: `
        <h3>3 étoiles</h3>
        <p>Télékinésie = <span class="buff">[Voile de flammes]</span> (Bouclier <span class="stat-boost">15%</span> PV).<br></p>
    `,
    4: `
        <h3>4 étoiles</h3>
        <p>CD Télékinésie <span class="stat-boost">-15%</span>.<br></p>
    `,
    5: `
        <h3>5 étoiles</h3>
        <p>Explosion max [Décomposition] = <span class="buff">[Destruction amorcée]</span>.<br>
        [Destruction] : Dégâts subis <span class="stat-boost">+2%</span>/cumul (max 5, infini).</p>
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