/* ==========================================
   LOGIQUE ARME (Épée de dragon étincelante)
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
        <p>Lorsque les PV de l'utilisateur sont supérieurs à <span class="stat-boost">80%</span>, applique l'effet <span class="buff">[Énergie du dragon de lumière]</span>.<br></p>
        <div class="detail-box">
            <h4><span class="buff">[Énergie du dragon de lumière]</span></h4>
            <p>Augmente l'attaque de <span class="stat-boost">8%</span>.<br></p>
        </div>
    `,
    1: `
        <h3>1 étoile :</h3>
        <p>Applique un effet d'augmentation de <span class="stat-boost">30%</span> des Dégâts de coup critique de la compétence <span class="buff">[Énergie du dragon de lumière]</span>.<br></p>
    `,
    2: `
        <h3>2 étoiles :</h3>
        <p>Vos dégâts de lumière augmentent de <span class="stat-boost">8%</span>.<br></p>
    `,
    3: `
        <h3>3 étoiles :</h3>
        <p>Modification des effets de la compétence <strong>Éclat du dragon</strong>: Un éclair supplémentaire frappe successivement devant l'utilisateur.<br></p>
    `,
    4: `
        <h3>4 étoiles :</h3>
        <p>Le temps de rechargement de la compétence <strong>Éclat du dragon</strong> diminue de <span class="stat-boost">15%</span>.<br></p>
    `,
    5: `
        <h3>5 étoiles :</h3>
        <p>Lorsque les PV sont à 60% ou au-dessus, l'effet <span class="buff">[Énergie du dragon de lumière]</span> s'applique.<br>
        Lorsque la compétence <strong>Éclat du dragon</strong> est utilisée, le Taux de coup critique passe à <span class="stat-boost">100%</span>.<br></p>
    `
};

// --- RÉSUMÉ (COURT) ---
const weaponSummaryData = {
    0: `
        <h3>Passif : Lumière Draconique</h3>
        <p>PV > 80% = <span class="buff">[Énergie du dragon de lumière]</span>.<br>
        [Énergie] : Attaque <span class="stat-boost">+8%</span>.</p>
    `,
    1: `
        <h3>1 étoile</h3>
        <p>[Énergie] : Dégâts Coup critique <span class="stat-boost">+30%</span>.<br></p>
    `,
    2: `
        <h3>2 étoiles</h3>
        <p>Dégâts Lumière <span class="stat-boost">+8%</span>.<br></p>
    `,
    3: `
        <h3>3 étoiles</h3>
        <p>Éclat du dragon : +1 éclair supplémentaire.<br></p>
    `,
    4: `
        <h3>4 étoiles</h3>
        <p>CD Éclat du dragon <span class="stat-boost">-15%</span>.<br></p>
    `,
    5: `
        <h3>5 étoiles</h3>
        <p>Condition PV [Énergie] réduite à > 60%.<br>
        Éclat du dragon : Taux critique <span class="stat-boost">100%</span>.</p>
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