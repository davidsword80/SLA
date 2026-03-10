/* ==========================================
   LOGIQUE ARME (Dagues du roi des démons)
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
        <p>Applique l'effet <span class="buff">[Deux en un]</span> lorsque les Dagues du roi des démons sont équipées.<br>
        Le Taux de coup critique et les Dégâts de coup critique de <strong>Tonnerre tonitruant</strong> augmentent de <span class="stat-boost">30%</span>.<br></p>
        <div class="detail-box">
            <h4><span class="buff">[Deux en un]</span></h4>
            <p>Augmente les dégâts de <strong>Tonnerre tonitruant</strong> proportionnellement à la Force de Sung Jinwoo.<br>
            Augmente les dégâts de <strong>Tonnerre tonitruant</strong> de <span class="stat-boost">1%</span> par tranche de 10 points de Force (cumulable jusqu'à 50%).<br>
            Durée: illimitée</p>
        </div>
    `,
    1: `
        <h3>1 étoile :</h3>
        <p>Après l'utilisation de <strong>Tonnerre tonitruant</strong>, il est possible de réutiliser immédiatement <strong>Tonnerre tonitruant</strong> une fois dans une version plus puissante.<br>
        Lorsque la compétence <strong>Tonnerre tonitruant</strong> est utilisée, elle applique l'effet <span class="buff">[Éclair concentré]</span>.<br></p>
        <div class="detail-box">
            <h4><span class="buff">[Éclair concentré]</span></h4>
            <p>Un cumul de l'effet <span class="buff">[Éclair concentré]</span> s'ajoute toutes les secondes.<br>
            Chaque attaque de Sung Jinwoo ajoute un cumul supplémentaire d'<span class="buff">[Éclair concentré]</span>.<br>
            Lorsque le maximum de cumuls est atteint, l'effet <span class="buff">[Ruade foudroyante]</span> s'applique et l'effet <span class="buff">[Éclair concentré]</span> est supprimé.<br>
            Durée: illimitée (cumulable jusqu'à 40 fois)</p>
        </div>
        <div class="detail-box">
            <h4><span class="buff">[Ruade foudroyante]</span></h4>
            <p>Lorsque la compétence <strong>Tonnerre tonitruant</strong> est utilisée, elle consomme 1 cumul(s) de l'effet <span class="buff">[Ruade foudroyante]</span> et augmente les dégâts de compétence de <span class="stat-boost">50%</span>.<br>
            Durée: illimitée</p>
        </div>
    `,
    2: `
        <h3>2 étoiles :</h3>
        <p>Les dégâts de vent infligés par l'utilisateur augmentent de <span class="stat-boost">10%</span>.<br></p>
    `,
    3: `
        <h3>3 étoiles :</h3>
        <p>Améliore les effets <span class="buff">[Deux en un, Éclair concentré et Ruade foudroyante]</span>.<br></p>
        <div class="detail-box">
            <h4><span class="buff">[Deux en un]</span></h4>
            <p>Augmente les dégâts de <strong>Tonnerre tonitruant</strong> proportionnellement à la Force de Sung Jinwoo.<br>
            Augmente les dégâts de <strong>Tonnerre tonitruant</strong> de <span class="stat-boost">5%</span> par tranche de 10 points de Force (cumulable jusqu'à 150%).<br>
            Durée: illimitée</p>
        </div>
        <div class="detail-box">
            <h4><span class="buff">[Éclair concentré]</span></h4>
            <p>Un effet <span class="buff">[Éclair concentré]</span> est ajouté aux cumuls toutes les secondes.<br>
            Toutes les attaques de Sung Jinwoo ajoutent un cumul supplémentaire d'<span class="buff">[Éclair concentré]</span>.<br>
            Lorsque le maximum de cumuls est atteint, l'effet <span class="buff">[Ruade foudroyante]</span> s'applique et l'effet <span class="buff">[Éclair concentré]</span> est supprimé.<br>
            Durée: illimitée (cumulable jusqu'à 20 fois)</p>
        </div>
        <div class="detail-box">
            <h4><span class="buff">[Ruade foudroyante]</span></h4>
            <p>2 cumuls d'effet sont obtenus lors de l'application de <span class="buff">[Ruade foudroyante]</span>.<br>
            Lorsque la compétence <strong>Tonnerre tonitruant</strong> est utilisée, elle consomme 1 cumul(s) de <span class="buff">[Ruade foudroyante]</span> et augmente les dégâts de compétence de <span class="stat-boost">150%</span>.<br>
            Durée: illimitée</p>
        </div>
    `,
    4: `
        <h3>4 étoiles :</h3>
        <p>Le temps de rechargement de <strong>Tonnerre tonitruant</strong> diminue de <span class="stat-boost">20%</span>.<br></p>
    `,
    5: `
        <h3>5 étoiles :</h3>
        <p><strong>Tonnerre tonitruant</strong> augmente les dégâts de vent de <span class="stat-boost">30%</span>.<br>
        La zone d'effet de <strong>Tonnerre Tonitruant</strong> augmente de <span class="stat-boost">20%</span>.<br>
        La distance de charge de <strong>Tonnerre Tonitruant</strong> augmente de <span class="stat-boost">50%</span>.<br>
        Les dégâts de <strong>Tonnerre Tonitruant</strong> augmentent de <span class="stat-boost">150%</span>.<br></p>
    `
};

// --- RÉSUMÉ (COURT) ---
const weaponSummaryData = {
    0: `
        <h3>Passif : Roi des Démons</h3>
        <p><span class="buff">[Deux en un]</span> : Boost Dégâts Tonnerre (1% / 10 Force, max 50%).<br>
        Crit/Crit Dmg Tonnerre <span class="stat-boost">+30%</span>.</p>
    `,
    1: `
        <h3>1 étoile</h3>
        <p>Double Tonnerre possible.<br>
        <span class="buff">[Éclair concentré]</span> (Stacks) -> <span class="buff">[Ruade foudroyante]</span>.<br>
        [Ruade] : Boost dégâts Tonnerre <span class="stat-boost">+50%</span>.</p>
    `,
    2: `
        <h3>2 étoiles</h3>
        <p>Dégâts Vent <span class="stat-boost">+10%</span>.<br></p>
    `,
    3: `
        <h3>3 étoiles</h3>
        <p>[Deux en un] : Max <span class="stat-boost">150%</span>.<br>
        [Éclair] : Max stack réduit à 20.<br>
        [Ruade] : +2 Stacks, Dégâts Tonnerre <span class="stat-boost">+150%</span>.</p>
    `,
    4: `
        <h3>4 étoiles</h3>
        <p>CD Tonnerre tonitruant <span class="stat-boost">-20%</span>.<br></p>
    `,
    5: `
        <h3>5 étoiles</h3>
        <p>Tonnerre tonitruant amélioré :<br>
        Dégâts Vent <span class="stat-boost">+30%</span>, Zone <span class="stat-boost">+20%</span>, Charge <span class="stat-boost">+50%</span>, Dégâts <span class="stat-boost">+150%</span>.</p>
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