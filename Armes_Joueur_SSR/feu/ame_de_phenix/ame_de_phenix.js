/* ==========================================
   LOGIQUE ARME (Âme de Phénix)
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
        <p>Lors de l'utilisation de <strong>Tir rapide de phénix</strong>, l'effet <span class="buff">[Âme de l'oiseau de feu]</span> s'applique aux 3e, 6e et 9e flèches.<br>
        Lorsque l'Attaque de base de l'arme touche 3 fois sa cible, elle applique l'effet <span class="buff">[Âme de l'oiseau de feu]</span>.<br></p>
        <div class="detail-box">
            <h4><span class="buff">[Âme de l'oiseau de feu]</span></h4>
            <p>L'Attaque de noyau de l'utilisateur devient <strong>Tir de flamme</strong>.<br>
            Augmente les dégâts de <strong>Tir de flamme</strong> de <span class="stat-boost">80%</span> par cumul d'âme de l'oiseau de feu (cumulable jusqu'à 3 fois).<br>
            Lors de l'utilisation de <strong>Tir de flamme</strong>, tous les cumuls d'âme de l'oiseau de feu sont consumés.<br>
            Durée: infinie</p>
        </div>
    `,
    1: `
        <h3>1 étoile :</h3>
        <p>Remplit <span class="stat-boost">34 %</span> de la jauge de noyau de l'utilisateur aux 3e, 6e et 9e flèches de <strong>Tir rapide de phénix</strong>.<br>
        Lorsque <strong>Tir de flamme</strong> touche sa cible, la jauge de noyau de l'utilisateur se remplit de <span class="stat-boost">50%</span>.<br></p>
    `,
    2: `
        <h3>2 étoiles :</h3>
        <p>Augmente les dégâts de feu de l'utilisateur de <span class="stat-boost">10%</span>.<br></p>
    `,
    3: `
        <h3>3 étoiles :</h3>
        <p>La dernière flèche de <strong>Tir rapide de phénix</strong> octroie 2 cumuls de l'effet <span class="buff">[Âme de l'oiseau de feu]</span>.<br>
        Fait passer le maximum de cumuls de <strong>Tir de flamme</strong> à 4.<br></p>
    `,
    4: `
        <h3>4 étoiles :</h3>
        <p>Réduit le temps de rechargement de <strong>Tir rapide de phénix</strong> de <span class="stat-boost">20%</span>.<br></p>
    `,
    5: `
        <h3>5 étoiles :</h3>
        <p>Après l'obtention de l'effet <span class="buff">[Ame de l'oiseau de feu]</span> suite à l'utilisation de <strong>Tir rapide de phénix</strong> ou de l'Attaque de base, l'utilisateur récupère les cumuls consommés de l'effet <span class="buff">[Âme de l'oiseau de feu]</span> et <span class="stat-boost">100%</span> de sa jauge de noyau dès qu'il utilise <strong>Tir de flamme</strong>.<br></p>
    `
};

// --- RÉSUMÉ (COURT) ---
const weaponSummaryData = {
    0: `
        <h3>Passif : Archer du Phénix</h3>
        <p>Tir rapide / 3x Attaque base = <span class="buff">[Âme de l'oiseau de feu]</span>.<br>
        [Âme] : Attaque noyau -> <strong>Tir de flamme</strong>.<br>
        Dégâts Tir de flamme <span class="stat-boost">+80%</span>/cumul (max 3).</p>
    `,
    1: `
        <h3>1 étoile</h3>
        <p>Tir rapide = Regen Jauge (34% x3).<br>
        Tir de flamme = Regen Jauge <span class="stat-boost">50%</span>.<br></p>
    `,
    2: `
        <h3>2 étoiles</h3>
        <p>Dégâts Feu <span class="stat-boost">+10%</span>.<br></p>
    `,
    3: `
        <h3>3 étoiles</h3>
        <p>Dernière flèche Tir rapide = +2 cumuls Âme.<br>
        Max cumuls Tir de flamme passe à 4.</p>
    `,
    4: `
        <h3>4 étoiles</h3>
        <p>CD Tir rapide de phénix <span class="stat-boost">-20%</span>.<br></p>
    `,
    5: `
        <h3>5 étoiles</h3>
        <p>Après obtention Âme : Utiliser Tir de flamme rend les cumuls + Jauge 100% (Boucle infinie potentielle).</p>
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