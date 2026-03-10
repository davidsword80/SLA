/* ==========================================
   LOGIQUE ARME (Vérité : Lance de chevalier démoniaque)
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
        <p>Lors de l'utilisation de la compétence <strong>Furie de chevalier sacré</strong>, l'utilisateur applique l'effet <span class="buff">[Règles corrompues]</span>.<br></p>
        <div class="detail-box">
            <h4><span class="buff">[Règles corrompues]</span></h4>
            <p>Supprime le temps de rechargement de la compétence <strong>Furie de chevalier sacré</strong>.<br>
            (temps de rechargement: 20 seconde(s))<br>
            Augmente les dégâts élémentaires de lumière de <span class="stat-boost">10%</span>.<br>
            Durée: 4 seconde(s)</p>
        </div>
    `,
    1: `
        <h3>1 étoile :</h3>
        <p>Augmente la Vitesse d'attaque de l'utilisateur de <span class="stat-boost">15%</span> et les dégâts de <strong>Furie de chevalier sacré</strong> de <span class="stat-boost">15%</span> tant que l'effet <strong>Règles corrompues</strong> reste actif.<br>
        Lorsque <strong>Furie de chevalier sacré</strong> touche une cible, l'utilisateur récupère <span class="stat-boost">1%</span> de PM.<br></p>
    `,
    2: `
        <h3>2 étoiles :</h3>
        <p>Augmente les dégâts de lumière de <span class="stat-boost">10%</span>.<br></p>
    `,
    3: `
        <h3>3 étoiles :</h3>
        <p>Lorsque <strong>Furie de chevalier sacré</strong> touche une cible, elle lui inflige l'effet <span class="buff">[Rage du chevalier sacré corrompu]</span>.<br></p>
        <div class="detail-box">
            <h4><span class="buff">[Rage du chevalier sacré corrompu]</span></h4>
            <p>Augmente les dégâts de <strong>Furie de chevalier sacré</strong> de <span class="stat-boost">2%</span> (cumulable jusqu'à 50 fois).<br>
            Durée: illimitée</p>
        </div>
    `,
    4: `
        <h3>4 étoiles :</h3>
        <p>Le temps de rechargement de la compétence <strong>Furie de chevalier sacré</strong> diminue de <span class="stat-boost">20 %</span>.<br></p>
    `,
    5: `
        <h3>5 étoiles :</h3>
        <p>Lorsque <strong>Furie de chevalier sacré</strong> touche une cible, elle lui inflige l'effet <span class="buff">[Malédiction du chevalier sacré]</span>.<br></p>
        <div class="detail-box">
            <h4><span class="buff">[Malédiction du chevalier sacré]</span></h4>
            <p>Au bout de 3 cumuls, elle inflige des dégâts supplémentaires équivalents à <span class="stat-boost">2000 %</span> de l'Attaque de l'utilisateur.<br>
            Lorsque les dégâts supplémentaires sont subis, l'effet se dissipe.<br>
            Durée: 60 seconde(s)</p>
        </div>
    `
};

// --- RÉSUMÉ (COURT) ---
const weaponSummaryData = {
    0: `
        <h3>Passif : Ordre du Chaos</h3>
        <p>Furie de chevalier sacré = <span class="buff">[Règles corrompues]</span>.<br>
        [Règles] : Reset CD Furie + Dégâts Lumière <span class="stat-boost">+10%</span> (4s, CD 20s).</p>
    `,
    1: `
        <h3>1 étoile</h3>
        <p>Sous Règles corrompues : Vitesse Atk <span class="stat-boost">+15%</span>, Dégâts Furie <span class="stat-boost">+15%</span>.<br>
        Touche Furie = Regen 1% PM.</p>
    `,
    2: `
        <h3>2 étoiles</h3>
        <p>Dégâts Lumière <span class="stat-boost">+10%</span>.<br></p>
    `,
    3: `
        <h3>3 étoiles</h3>
        <p>Touche Furie = <span class="buff">[Rage du chevalier sacré corrompu]</span>.<br>
        [Rage] : Dégâts Furie <span class="stat-boost">+2%</span> (max 50, infini).</p>
    `,
    4: `
        <h3>4 étoiles</h3>
        <p>CD Furie de chevalier sacré <span class="stat-boost">-20%</span>.<br></p>
    `,
    5: `
        <h3>5 étoiles</h3>
        <p>Touche Furie = <span class="buff">[Malédiction]</span>.<br>
        3 cumuls = Dégâts <span class="stat-boost">2000%</span> Atk.</p>
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