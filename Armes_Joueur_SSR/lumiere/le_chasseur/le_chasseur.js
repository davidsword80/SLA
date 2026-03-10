/* ==========================================
   LOGIQUE ARME (Le Chasseur)
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
        <p>Lors de l'utilisation de <strong>Jugement</strong>, l'utilisateur active son Attaque de noyau.<br>
        Lors de l'utilisation de <strong>Jugement</strong>, l'Attaque de noyau devient <strong>Que la chasse commence</strong> pendant 6 seconde(s) et les dégâts augmentent de <span class="stat-boost">100%</span>.<br>
        Lorsque l'Attaque de base, l'Attaque de noyau ou la compétence <strong>Que la chasse commence</strong> touchent des cibles dans un rayon de 4 m, les dégâts augmentent de <span class="stat-boost">50%</span>.<br></p>
    `,
    1: `
        <h3>1 étoile :</h3>
        <p>Lorsque la dernière attaque de <strong>Jugement</strong> touche sa cible, elle inflige l'effet <span class="buff">[Cission]</span>.<br>
        Lorsque la cible entre en état de <span class="buff">[Bris]</span> alors que l'effet <span class="buff">[Cission]</span> est actif, l'effet <span class="buff">[Destruction]</span> s'applique à la cible.<br></p>
        <div class="detail-box">
            <h4><span class="buff">[Faille]</span></h4>
            <p>Augmente l'effet <span class="buff">[Bris]</span> de <span class="stat-boost">25%</span>.<br>
            Durée: 3 seconde(s)</p>
        </div>
        <div class="detail-box">
            <h4><span class="buff">[Destruction]</span></h4>
            <p>Augmente les dégâts subis de <span class="stat-boost">8%</span>.<br>
            Durée: infinie</p>
        </div>
    `,
    2: `
        <h3>2 étoiles :</h3>
        <p>Vos dégâts de lumière augmentent de <span class="stat-boost">10%</span>.<br></p>
    `,
    3: `
        <h3>3 étoiles :</h3>
        <p>Lorsque la première attaque de <strong>Jugement</strong> touche sa cible, elle lui applique l'effet <span class="buff">[Halte]</span>.<br></p>
        <div class="detail-box">
            <h4><span class="buff">[Prise]</span></h4>
            <p>Interrompt la cible.<br>
            Durée: 2 seconde(s)</p>
        </div>
    `,
    4: `
        <h3>4 étoiles :</h3>
        <p>Le temps de rechargement de <strong>Jugement</strong> diminue de <span class="stat-boost">20%</span>.<br></p>
    `,
    5: `
        <h3>5 étoiles :</h3>
        <p>Modification de l'effet <span class="buff">[Destruction]</span><br>
        Augmente les dégâts subis de <span class="stat-boost">16%</span> (cumulable jusqu'à 99 fois).<br>
        Une fois que <strong>Jugement</strong> touche sa cible et si une a Attaque de noyau suit directement la compétence, l'effet <span class="buff">[Ouverture au jugement]</span> s'applique à la cible.<br>
        Au bout de 3 cumuls de l'effet <span class="buff">[Ouverture au jugement)</span>, 1 cumul de <span class="buff">[Destruction]</span> est créé (cumulable 1 fois).<br></p>
    `
};

// --- RÉSUMÉ (COURT) ---
const weaponSummaryData = {
    0: `
        <h3>Passif : Danseuse à l'Épée</h3>
        <p>Jugement active Attaque noyau (buffée <strong>Que la chasse commence</strong>, Dégâts <span class="stat-boost">+100%</span>).<br>
        Attaques (4m) = Dégâts <span class="stat-boost">+50%</span>.</p>
    `,
    1: `
        <h3>1 étoile</h3>
        <p>Jugement = <span class="buff">[Cission]</span>.<br>
        Bris sous Cission = <span class="buff">[Destruction]</span> (Dégâts subis <span class="stat-boost">+8%</span>, infini).</p>
    `,
    2: `
        <h3>2 étoiles</h3>
        <p>Dégâts Lumière <span class="stat-boost">+10%</span>.<br></p>
    `,
    3: `
        <h3>3 étoiles</h3>
        <p>Jugement = <span class="buff">[Halte]</span> (Interruption 2s).<br></p>
    `,
    4: `
        <h3>4 étoiles</h3>
        <p>CD Jugement <span class="stat-boost">-20%</span>.<br></p>
    `,
    5: `
        <h3>5 étoiles</h3>
        <p>[Destruction] améliorée : Dégâts subis <span class="stat-boost">+16%</span> (max 99 stacks).<br>
        Combo Jugement -> Attaque noyau génère [Destruction].</p>
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