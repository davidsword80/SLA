/* ==========================================
   LOGIQUE ARME (Trident de dragon gardien Naga)
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
        <p>Lorsque qu'une attaque de base est portée, elle a <span class="stat-boost">75%</span> de chances de créer des explosions d'eau supplémentaires devant l'utilisateur.<br></p>
    `,
    1: `
        <h3>1 étoile :</h3>
        <p>Lorsque la compétence <strong>Tsunami naga</strong> est utilisée, elle projette 3 déferlements d'eau supplémentaires.<br>
        Inflige des dégâts équivalents à <span class="stat-boost">120%</span> de l'Attaque de l'utilisateur à chaque explosion.<br></p>
    `,
    2: `
        <h3>2 étoiles :</h3>
        <p>Vos dégâts d'eau augmentent de <span class="stat-boost">8%</span>.<br></p>
    `,
    3: `
        <h3>3 étoiles :</h3>
        <p>Lorsqu'une Attaque de noyau est utilisée, elle projette 3 déferlements d'eau supplémentaires.<br>
        Inflige des dégâts équivalents à <span class="stat-boost">120%</span> de l'Attaque de l'utilisateur à chaque explosion.<br></p>
    `,
    4: `
        <h3>4 étoiles :</h3>
        <p>Le temps de rechargement de <strong>Tsunami naga</strong> diminue de <span class="stat-boost">15%</span>.<br></p>
    `,
    5: `
        <h3>5 étoiles :</h3>
        <p>Lors de l'utilisation de la compétence <strong>Tsunami naga</strong>, l'utilisateur applique l'effet <span class="buff">[Gardien naga]</span>.<br></p>
        <div class="detail-box">
            <h4><span class="buff">[Gardien naga]</span></h4>
            <p>Augmente les dégâts d'eau de l'utilisateur de <span class="stat-boost">15%</span>.<br>
            Augmente la Vitesse d'attaque de l'utilisateur de <span class="stat-boost">12%</span>.<br>
            Durée: 15 seconde(s)</p>
        </div>
    `
};

// --- RÉSUMÉ (COURT) ---
const weaponSummaryData = {
    0: `
        <h3>Passif : Océan Furieux</h3>
        <p>Attaque de base : 75% chance explosions d'eau.<br></p>
    `,
    1: `
        <h3>1 étoile</h3>
        <p>Tsunami naga : +3 déferlements (Dégâts <span class="stat-boost">120%</span> Atk chacun).<br></p>
    `,
    2: `
        <h3>2 étoiles</h3>
        <p>Dégâts Eau <span class="stat-boost">+8%</span>.<br></p>
    `,
    3: `
        <h3>3 étoiles</h3>
        <p>Attaque noyau : +3 déferlements (Dégâts <span class="stat-boost">120%</span> Atk chacun).<br></p>
    `,
    4: `
        <h3>4 étoiles</h3>
        <p>CD Tsunami naga <span class="stat-boost">-15%</span>.<br></p>
    `,
    5: `
        <h3>5 étoiles</h3>
        <p>Tsunami naga = <span class="buff">[Gardien naga]</span> (Dégâts Eau <span class="stat-boost">+15%</span>, Vitesse <span class="stat-boost">+12%</span>, 15s).<br></p>
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