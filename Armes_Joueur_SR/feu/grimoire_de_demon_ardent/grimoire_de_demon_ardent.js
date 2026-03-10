/* ==========================================
   LOGIQUE ARME (Grimoire de démon ardent)
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
        <p>Lorsque l'utilisateur applique <strong>Éclatement</strong>, les effets <span class="buff">[Insufflation de points de mana]</span> ou <span class="buff">[Récupération de points de mana]</span> s'appliquent selon la quantité de PM restante.<br></p>
        <div class="detail-box">
            <h4><span class="buff">[Insufflation de points de mana]</span></h4>
            <p>Si les PM de l'utilisateur sont de <span class="stat-boost">51%</span> ou plus, l'effet est activé.<br>
            Lorsque l'utilisateur applique <strong>Éclatement</strong>, ses dégâts de compétence augmentent de <span class="stat-boost">30%</span>, mais <span class="stat-boost">10%</span> de ses PM max sont consommés.<br></p>
        </div>
        <div class="detail-box">
            <h4><span class="buff">[Récupération de points de mana]</span></h4>
            <p>Si les PM de l'utilisateur sont de <span class="stat-boost">50%</span> ou moins, l'effet est activé.<br>
            L'utilisateur récupère <span class="stat-boost">5%</span> de ses PM pour chaque cible touchée par <strong>Éclatement</strong>.<br></p>
        </div>
    `,
    1: `
        <h3>1 étoile :</h3>
        <p>Lors de l'utilisation de la compétence <strong>Éclatement</strong>, l'effet <strong>Éclatement</strong> s'active à nouveau à l'emplacement de la première explosion.<br></p>
    `,
    2: `
        <h3>2 étoiles :</h3>
        <p>Augmente les dégâts de feu de <span class="stat-boost">8%</span>.<br></p>
    `,
    3: `
        <h3>3 étoiles :</h3>
        <p>Lorsque les PM de l'utilisateur sont supérieurs à <span class="stat-boost">51%</span>, son Attaque augmente à hauteur de <span class="stat-boost">60%</span> de ses PM.<br></p>
    `,
    4: `
        <h3>4 étoiles :</h3>
        <p>Réduit le temps de rechargement d'<strong>Éclatement</strong> de <span class="stat-boost">15%</span>.<br></p>
    `,
    5: `
        <h3>5 étoiles :</h3>
        <p>Augmente les PM max de <span class="stat-boost">400</span>.<br></p>
    `
};

// --- RÉSUMÉ (COURT) ---
const weaponSummaryData = {
    0: `
        <h3>Passif : Gestion de Mana</h3>
        <p>Éclatement déclenche un effet selon les PM restants :<br>
        > 51% PM : <span class="buff">[Insufflation]</span> (Dégâts <span class="stat-boost">+30%</span>, Coût <span class="stat-boost">-10%</span> PM).<br>
        <= 50% PM : <span class="buff">[Récupération]</span> (Regen <span class="stat-boost">5%</span> PM par cible).</p>
    `,
    1: `
        <h3>1 étoile</h3>
        <p>Éclatement s'active une seconde fois (Double explosion).<br></p>
    `,
    2: `
        <h3>2 étoiles</h3>
        <p>Dégâts Feu <span class="stat-boost">+8%</span>.<br></p>
    `,
    3: `
        <h3>3 étoiles</h3>
        <p>Si PM > 51% : Attaque augmentée de <span class="stat-boost">60%</span> des PM.<br></p>
    `,
    4: `
        <h3>4 étoiles</h3>
        <p>CD Éclatement <span class="stat-boost">-15%</span>.<br></p>
    `,
    5: `
        <h3>5 étoiles</h3>
        <p>PM Max <span class="stat-boost">+400</span>.<br></p>
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