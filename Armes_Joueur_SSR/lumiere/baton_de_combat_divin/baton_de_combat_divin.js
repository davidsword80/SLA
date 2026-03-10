/* ==========================================
   LOGIQUE ARME (Bâton de combat divin)
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
        <p>La compétence <strong>Frappe de l'Ordre céleste</strong> peut être chargée jusqu'au Stade 3, et lorsque chaque stade est chargé, elle active l'effet <span class="buff">[Concentration d'énergie de mana]</span>.<br>
        En cas d'utilisation de <strong>Ruée</strong> pendant la charge de la compétence, le temps de rechargement de <strong>Frappe de l'Ordre céleste</strong> diminue de 18 seconde(s) et l'effet <span class="buff">[Concentration d'énergie de mana]</span> est supprimé.<br></p>
        <div class="detail-box">
            <h4><span class="buff">[Concentration d'énergie de mana]</span></h4>
            <p>Augmente les dégâts de <strong>Frappe de l'Ordre céleste</strong> de <span class="stat-boost">100%</span> (cumulable jusqu'à 3 fois).<br>
            Cet effet est supprimé après une attaque avec <strong>Frappe de l'Ordre céleste</strong>.<br></p>
        </div>
    `,
    1: `
        <h3>1 étoile :</h3>
        <p>Lors de l'utilisation de <strong>Frappe de l'Ordre céleste</strong> avec 3 cumuls de l'effet <span class="buff">[Concentration d'énergie de mana]</span> appliqués, l'effet <span class="buff">[Lâché de Bâton de combat divin]</span> est activé.<br></p>
        <div class="detail-box">
            <h4><span class="buff">[Lâché de bâton de combat divin]</span></h4>
            <p>Crée un Bâton de combat divin géant qui inflige des dégâts équivalents à <span class="stat-boost">800%</span> de l'Attaque de l'utilisateur.<br></p>
        </div>
    `,
    2: `
        <h3>2 étoiles :</h3>
        <p>Augmente les dégâts de lumière de <span class="stat-boost">10%</span>.<br></p>
    `,
    3: `
        <h3>3 étoiles :</h3>
        <p>La compétence <strong>Frappe de l'Ordre céleste</strong> peut être chargée jusqu'au Stade 5, et lorsque chaque stade est chargé, elle active l'effet <span class="buff">[Concentration d'énergie de mana]</span>.<br>
        <span class="buff">[Concentration d'énergie de mana]</span> peut désormais se cumuler jusqu'à 5 fois.<br>
        Un effet <span class="buff">[Bouclier]</span> s'active lors de la charge.<br>
        Au bout de 5 cumuls, si l'effet <span class="buff">[Concentration d'énergie de mana]</span> s'est activé et si l'utilisateur est touché pendant la charge, la compétence <strong>Frappe de l'Ordre céleste</strong> est instantanément activée.<br></p>
        <div class="detail-box">
            <h4><span class="buff">[Bouclier]</span></h4>
            <p>Octroie un <span class="buff">[Bouclier]</span> équivalent à <span class="stat-boost">50%</span> des PV max de l'utilisateur.<br>
            Une fois que <strong>Frappe de l'Ordre céleste</strong> a fini de se charger, cet effet est supprimé.</p>
        </div>
    `,
    4: `
        <h3>4 étoiles :</h3>
        <p>Le temps de rechargement de <strong>Frappe de l'Ordre céleste</strong> diminue de <span class="stat-boost">20%</span>.<br></p>
    `,
    5: `
        <h3>5 étoiles :</h3>
        <p>Lorsque l'effet <span class="buff">[Concentration d'énergie de mana]</span> atteint 5 cumuls, les dégâts de l'effet <span class="buff">[Lâché de bâton de combat divin]</span> augmentent de <span class="stat-boost">150%</span>.<br></p>
    `
};

// --- RÉSUMÉ (COURT) ---
const weaponSummaryData = {
    0: `
        <h3>Passif : Ordre Céleste</h3>
        <p>Frappe chargée (3 stades) = <span class="buff">[Concentration]</span>.<br>
        Ruée annule charge = CD -18s.<br>
        [Concentration] : Dégâts Frappe <span class="stat-boost">+100%</span>/cumul (max 3).</p>
    `,
    1: `
        <h3>1 étoile</h3>
        <p>3 cumuls Concentration = <span class="buff">[Lâché de Bâton]</span> (Dégâts <span class="stat-boost">800%</span> Atk).<br></p>
    `,
    2: `
        <h3>2 étoiles</h3>
        <p>Dégâts Lumière <span class="stat-boost">+10%</span>.<br></p>
    `,
    3: `
        <h3>3 étoiles</h3>
        <p>Charge max passe à 5 stades (Max 5 Concentr.).<br>
        Charge = <span class="buff">[Bouclier]</span> (<span class="stat-boost">50%</span> PV).<br>
        Touché à 5 stacks = Instant Cast.</p>
    `,
    4: `
        <h3>4 étoiles</h3>
        <p>CD Frappe de l'Ordre céleste <span class="stat-boost">-20%</span>.<br></p>
    `,
    5: `
        <h3>5 étoiles</h3>
        <p>À 5 cumuls Concentration : Dégâts [Lâché de Bâton] <span class="stat-boost">+150%</span>.<br></p>
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