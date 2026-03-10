/* ==========================================
   LOGIQUE ARME (Vent d'ouest)
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
        <p>S'il n'y a aucune cible dans un rayon de 5 m, les dégâts de la compétence <strong>Balle secrète</strong> lancée par l'utilisateur augmentent de <span class="stat-boost">75%</span>.<br></p>
    `,
    1: `
        <h3>1 étoile :</h3>
        <p>Modification des effets de la compétence <strong>Balle secrète</strong>.<br>
        Il s'agit désormais d'une compétence à effet de charge.<br>
        Les dégâts augmentent de <span class="stat-boost">130 %</span> maximum suivant le temps passé à la charger.<br></p>
    `,
    2: `
        <h3>2 étoiles :</h3>
        <p>Vos dégâts de vent augmentent de <span class="stat-boost">8 %</span>.<br></p>
    `,
    3: `
        <h3>3 étoiles :</h3>
        <p>Lorsque <strong>Balle secrète</strong> touche sa cible, elle applique l'effet <span class="buff">[Vent d'ouest]</span>.<br></p>
        <div class="detail-box">
            <h4><span class="buff">[Vent d'ouest]</span></h4>
            <p>Augmente les dégâts de la compétence <strong>Balle secrète</strong> de <span class="stat-boost">30%</span> (cumulable jusqu'à 5 fois).<br>
            Si la compétence <strong>Balle secrète</strong> manque sa cible, tous les cumuls sont annulés.<br>
            Durée: 30 seconde(s) (Temps de rechargement: 10 seconde(s))</p>
        </div>
    `,
    4: `
        <h3>4 étoiles :</h3>
        <p>Le temps de rechargement de <strong>Balle secrète</strong> diminue de <span class="stat-boost">15%</span>.<br></p>
    `,
    5: `
        <h3>5 étoiles :</h3>
        <p>Lorsque <strong>Balle secrète</strong> inflige un Coup critique, le temps de rechargement diminue de 9 seconde(s) (Temps de rechargement: 10 seconde(s)).<br></p>
    `
};

// --- RÉSUMÉ (COURT) ---
const weaponSummaryData = {
    0: `
        <h3>Passif : Tireur d'Élite</h3>
        <p>Si aucune cible < 5m : Dégâts Balle secrète <span class="stat-boost">+75%</span>.<br></p>
    `,
    1: `
        <h3>1 étoile</h3>
        <p>Balle secrète devient Chargée (Max Dégâts <span class="stat-boost">+130%</span>).<br></p>
    `,
    2: `
        <h3>2 étoiles</h3>
        <p>Dégâts Vent <span class="stat-boost">+8%</span>.<br></p>
    `,
    3: `
        <h3>3 étoiles</h3>
        <p>Touche = <span class="buff">[Vent d'ouest]</span> (Dégâts Balle <span class="stat-boost">+30%</span>, max 5).<br>
        Manqué = Perte cumuls.</p>
    `,
    4: `
        <h3>4 étoiles</h3>
        <p>CD Balle secrète <span class="stat-boost">-15%</span>.<br></p>
    `,
    5: `
        <h3>5 étoiles</h3>
        <p>Critique Balle secrète : CD -9s (CD effet 10s).<br></p>
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