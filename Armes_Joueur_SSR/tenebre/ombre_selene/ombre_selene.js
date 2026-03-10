/* ==========================================
   LOGIQUE ARME (Ombre Sélène)
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
        <p>Lors de l'utilisation de la compétence <strong>Éclat lunaire dans la nuit</strong>, l'effet <span class="buff">[Pleine lune]</span> est appliqué aux cibles sur la lune.<br>
        Lorsque la dernière attaque d'<strong>Éclat lunaire dans la nuit</strong> touche sa cible, le temps ralentit pendant 3 seconds et 1 cumul d'<span class="buff">[Éclipse lunaire]</span> est appliqué à la cible par cumul de <span class="buff">[Pleine lune]</span>.<br></p>
        <div class="detail-box">
            <h4><span class="buff">[Pleine lune]</span></h4>
            <p>Durée: illimitée (cumulable jusqu'à 1 fois)</p>
        </div>
        <div class="detail-box">
            <h4><span class="buff">[Éclipse lunaire]</span></h4>
            <p>Augmente les dégâts subis de <span class="stat-boost">10%</span>.<br>
            Augmente les dégâts de ténèbres de l'utilisateur de <span class="stat-boost">10%</span>.<br>
            Durée: 3 seconde(s)</p>
        </div>
    `,
    1: `
        <h3>1 étoile :</h3>
        <p>Améliore les effets de <span class="buff">[Pleine lune et Éclipse lunaire]</span><br></p>
        <div class="detail-box">
            <h4><span class="buff">[Pleine lune]</span></h4>
            <p>Durée: infinie (cumulable jusqu'à 3 fois).<br></p>
        </div>
        <div class="detail-box">
            <h4><span class="buff">[Éclipse lunaire]</span></h4>
            <p>Les dégâts subis par la cible augmentent de <span class="stat-boost">15%</span>.<br>
            Les dégâts de ténèbres subis par la cible augmentent de <span class="stat-boost">15%</span>.<br>
            Durée: 3 seconde(s)</p>
        </div>
    `,
    2: `
        <h3>2 étoiles :</h3>
        <p>Vos dégâts de ténèbres augmentent de <span class="stat-boost">10%</span>.<br></p>
    `,
    3: `
        <h3>3 étoiles :</h3>
        <p>Lorsque la compétence <strong>Foulée de l'ombre</strong> touche sa cible, elle lui applique 1 instance d'<span class="buff">[Éclipse lunaire]</span> par instance de <span class="buff">[Pleine lune]</span>.<br></p>
    `,
    4: `
        <h3>4 étoiles :</h3>
        <p>Réduit le temps de rechargement de la compétence <strong>Éclat lunaire dans la nuit</strong> de <span class="stat-boost">20%</span>.<br></p>
    `,
    5: `
        <h3>5 étoiles :</h3>
        <p>Les dégâts de l'utilisateur et des membres de son équipe augmentent de <span class="stat-boost">15%</span> lorsque l'effet de ralentissement du temps est actif.<br></p>
    `
};

// --- RÉSUMÉ (COURT) ---
const weaponSummaryData = {
    0: `
        <h3>Passif : Lune Noire</h3>
        <p>Éclat lunaire = <span class="buff">[Pleine lune]</span> (1 stack max).<br>
        Touche finale = Ralenti (3s) + <span class="buff">[Éclipse lunaire]</span>.<br>
        [Éclipse] : Dégâts subis/Ténèbres <span class="stat-boost">+10%</span> (3s).</p>
    `,
    1: `
        <h3>1 étoile</h3>
        <p>Max [Pleine lune] passe à 3.<br>
        [Éclipse] améliorée : Dégâts subis/Ténèbres <span class="stat-boost">+15%</span>.</p>
    `,
    2: `
        <h3>2 étoiles</h3>
        <p>Dégâts Ténèbres <span class="stat-boost">+10%</span>.<br></p>
    `,
    3: `
        <h3>3 étoiles</h3>
        <p>Foulée de l'ombre déclenche [Éclipse lunaire] selon stacks [Pleine lune].<br></p>
    `,
    4: `
        <h3>4 étoiles</h3>
        <p>CD Éclat lunaire dans la nuit <span class="stat-boost">-20%</span>.<br></p>
    `,
    5: `
        <h3>5 étoiles</h3>
        <p>Sous Ralenti : Dégâts Équipe <span class="stat-boost">+15%</span>.<br></p>
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