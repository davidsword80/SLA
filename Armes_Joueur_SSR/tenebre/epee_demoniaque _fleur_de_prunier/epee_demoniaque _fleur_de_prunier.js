/* ==========================================
   LOGIQUE ARME (Épée démoniaque : Fleur de prunier)
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
        <p>Après l'utilisation de <strong>Fleur de prunier : Vol prompt</strong>, l'effet <span class="buff">[Fleur de prunier]</span> s'applique.<br>
        Lorsque l'utilisateur réussit une <strong>Ruée</strong> suivie de <strong>Fleur de prunier: Vol prompt</strong>, l'effet <span class="buff">[Éclosion]</span> s'applique.<br></p>
        <div class="detail-box">
            <h4><span class="buff">[Fleur de prunier]</span></h4>
            <p>Augmente les dégâts de coup critique de <span class="stat-boost">12%</span> (cumulable jusqu'à 3 fois).<br>
            Durée: illimitée</p>
        </div>
        <div class="detail-box">
            <h4><span class="buff">[Éclosion]</span></h4>
            <p>Augmente également la vitesse d'utilisation de <strong>Fleur de prunier : Vol prompt</strong> de <span class="stat-boost">20%</span>.<br>
            L'Attaque de l'utilisateur augmente de <span class="stat-boost">4%</span>.<br>
            Le Taux de coup critique de l'utilisateur augmente de <span class="stat-boost">4%</span>.<br>
            Durée: 8 seconde(s)</p>
        </div>
    `,
    1: `
        <h3>1 étoile :</h3>
        <p>Lorsque l'utilisateur rengaine après avoir utilisé la compétence <strong>Fleur de prunier: Vol prompt</strong>, l'effet <span class="buff">[Tirage amplificateur]</span> s'applique.<br></p>
        <div class="detail-box">
            <h4><span class="buff">[Tirage amplificateur]</span></h4>
            <p>Augmente les chances de l'utilisateur de porter un coup critique à la prochaine attaque de <span class="stat-boost">32 %</span>.<br>
            Augmente les dégâts de compétence de <span class="stat-boost">32%</span>.<br>
            Durée: 3 seconde(s)</p>
        </div>
    `,
    2: `
        <h3>2 étoiles :</h3>
        <p>Vos dégâts de ténèbres augmentent de <span class="stat-boost">10%</span>.<br></p>
    `,
    3: `
        <h3>3 étoiles :</h3>
        <p>Lors de l'utilisation de <strong>Ruée</strong>, <span class="buff">[Tirage amplificateur]</span> dure 5 seconde(s) et les Dégâts de coup critique augmentent de <span class="stat-boost">32%</span>.<br></p>
    `,
    4: `
        <h3>4 étoiles :</h3>
        <p>Le temps de rechargement de <strong>Fleur de prunier: Vol prompt</strong> est réduit de <span class="stat-boost">20%</span>.<br></p>
    `,
    5: `
        <h3>5 étoiles :</h3>
        <p>Ajoute l'effet <span class="buff">[Fleur de prunier]</span>.<br>
        Les dégâts de ténèbres de l'utilisateur augmentent de <span class="stat-boost">5%</span>.<br>
        Applique 2 cumuls de <span class="buff">[Fleur De Prunier]</span> au début du niveau (cumulable jusqu'à 5 fois).<br></p>
    `
};

// --- RÉSUMÉ (COURT) ---
const weaponSummaryData = {
    0: `
        <h3>Passif : Lame du Prunier</h3>
        <p>Vol prompt = <span class="buff">[Fleur de prunier]</span> (Dégâts Crit <span class="stat-boost">+12%</span>, max 3).<br>
        Ruée + Vol prompt = <span class="buff">[Éclosion]</span> (Vitesse skill +20%, Atk/Crit <span class="stat-boost">+4%</span>, 8s).</p>
    `,
    1: `
        <h3>1 étoile</h3>
        <p>Rengaine après Vol prompt = <span class="buff">[Tirage amplificateur]</span>.<br>
        [Tirage] : Prochain Crit Rate <span class="stat-boost">+32%</span>, Dégâts Skill <span class="stat-boost">+32%</span>.</p>
    `,
    2: `
        <h3>2 étoiles</h3>
        <p>Dégâts Ténèbres <span class="stat-boost">+10%</span>.<br></p>
    `,
    3: `
        <h3>3 étoiles</h3>
        <p>Ruée étend [Tirage] à 5s + Dégâts Crit <span class="stat-boost">+32%</span>.<br></p>
    `,
    4: `
        <h3>4 étoiles</h3>
        <p>CD Fleur de prunier: Vol prompt <span class="stat-boost">-20%</span>.<br></p>
    `,
    5: `
        <h3>5 étoiles</h3>
        <p>Dégâts Ténèbres <span class="stat-boost">+5%</span>.<br>
        Début niveau : +2 cumuls [Fleur de prunier] (Max cumul passe à 5).</p>
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