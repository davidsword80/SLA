/* ==========================================
   LOGIQUE ARME (Renard à queue dorée)
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
        <p>Lorsque l'utilisateur rejoint le niveau, il obtient 9 cumuls de l'effet <span class="buff">[Queue de renard]</span>.<br>
        Lorsque l'utilisateur lance la compétence <strong>Prélude</strong>, il obtient 1 cumul de l'effet <span class="buff">[Queue de renard]</span>.<br>
        Si l'utilisateur parvient à esquiver pendant la charge de cette compétence, il active l'effet <span class="buff">[Évasion extrême]</span>.<br></p>
        <div class="detail-box">
            <h4><span class="buff">[Queue de renard]</span></h4>
            <p>Augmente le Taux de coup critique et les Dégâts de coup critique de la compétence de base de lumière de <span class="stat-boost">12.25%</span> (cumulable jusqu'à 1 fois).<br>
            Cet effet se dissipe lorsque l'utilisateur lance une compétence de base de lumière.<br>
            Durée: illimitée (cumulable jusqu'à 9 fois)</p>
        </div>
    `,
    1: `
        <h3>1 étoile :</h3>
        <p>Lorsque la compétence <strong>Prélude</strong> touche sa cible, elle lui applique l'effet <span class="buff">[Plaie dorée]</span>.<br></p>
        <div class="detail-box">
            <h4><span class="buff">[Plaie dorée]</span></h4>
            <p>Lorsque l'utilisateur attaque une cible affectée par <span class="buff">[Plaie Dorée]</span>, ses dégâts de lumière augmentent de <span class="stat-boost">99.99%</span>.<br>
            Lorsque l'utilisateur attaque une cible avec l'effet <span class="buff">[Plaie Dorée]</span>, il récupère <span class="stat-boost">9.99%</span> de ses PV 1 fois.<br>
            Subir une attaque de lumière dissipe cet effet.<br>
            Durée: 9.9 seconde(s)</p>
        </div>
    `,
    2: `
        <h3>2 étoiles :</h3>
        <p>Augmente les dégâts de lumière de <span class="stat-boost">10%</span>.<br></p>
    `,
    3: `
        <h3>3 étoiles :</h3>
        <p>Lorsqu'<span class="buff">[Évasion extrême]</span> est activée, l'utilisateur obtient 1 cumul de l'effet <span class="buff">[Queue de renard]</span>.<br>
        Lorsque l'utilisateur lance <strong>Prélude</strong>, il obtient 1 cumul supplémentaire de l'effet <span class="buff">[Queue de renard]</span> et un <span class="buff">[Bouclier]</span>.<br></p>
        <div class="detail-box">
            <h4><span class="buff">[Bouclier]</span></h4>
            <p>Confère un <span class="buff">[Bouclier]</span> équivalent à <span class="stat-boost">12.25%</span> des PV max de l'utilisateur.<br>
            Durée: 9.9 seconde(s)</p>
        </div>
    `,
    4: `
        <h3>4 étoiles :</h3>
        <p>Le temps de rechargement de <strong>Prélude</strong> diminue de <span class="stat-boost">20%</span>.<br></p>
    `,
    5: `
        <h3>5 étoiles :</h3>
        <p>Lorsque l'utilisateur lance <strong>Prélude</strong> alors qu'un ennemi se trouve dans un rayon de 5 m, il charge immédiatement.<br>
        Lorsque seules des armes de type Lumière sont équipées, les dégâts de lumière de l'utilisateur augmentent de <span class="stat-boost">20.24 %</span> et son Attaque augmente de <span class="stat-boost">12.25%</span>.<br>
        L'effet <span class="buff">[Queue de renard]</span> est amélioré.<br></p>
        <div class="detail-box">
            <h4><span class="buff">[Queue de renard]</span></h4>
            <p>Augmente le Taux de coup critique et les Dégâts de coup critique de la compétence de base de lumière de l'utilisateur de <span class="stat-boost">20.24 %</span> (cumulable jusqu'à 1 fois).<br>
            Lorsque l'utilisateur lance une compétence de base de lumière, cet effet est dissipé.<br>
            Durée: illimitée (cumulable jusqu'à 9 fois)</p>
        </div>
    `
};

// --- RÉSUMÉ (COURT) ---
const weaponSummaryData = {
    0: `
        <h3>Passif : Esprit du Renard</h3>
        <p>Entrée/Prélude = <span class="buff">[Queue de renard]</span> (max 9).<br>
        Esquive charge = Évasion extrême.<br>
        [Queue] : Crit/Crit Dmg skill lumière <span class="stat-boost">+12.25%</span> (conso 1 stack).</p>
    `,
    1: `
        <h3>1 étoile</h3>
        <p>Prélude touche = <span class="buff">[Plaie dorée]</span>.<br>
        [Plaie] : Prochaine attaque lumière <span class="stat-boost">+99.99%</span> Dégâts + Soin <span class="stat-boost">9.99%</span> PV.</p>
    `,
    2: `
        <h3>2 étoiles</h3>
        <p>Dégâts Lumière <span class="stat-boost">+10%</span>.<br></p>
    `,
    3: `
        <h3>3 étoiles</h3>
        <p>Évasion extrême / Prélude = +Stacks Queue.<br>
        Prélude = <span class="buff">[Bouclier]</span> (<span class="stat-boost">12.25%</span> PV, 9.9s).</p>
    `,
    4: `
        <h3>4 étoiles</h3>
        <p>CD Prélude <span class="stat-boost">-20%</span>.<br></p>
    `,
    5: `
        <h3>5 étoiles</h3>
        <p>Prélude charge instantanée (si ennemi < 5m).<br>
        Full Lumière : Dégâts Lumière <span class="stat-boost">+20.24%</span>, Atk <span class="stat-boost">+12.25%</span>.<br>
        [Queue] améliorée : Crit/Crit Dmg <span class="stat-boost">+20.24%</span>.</p>
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