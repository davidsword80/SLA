/* ==========================================
   LOGIQUE ARME (Épée longue d'orc)
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
        <p>Lorsque l'utilisateur tue un ennemi avec <strong>Épée longue d'orc</strong>, l'effet <span class="buff">[Force d'orc]</span> s'applique.<br></p>
        <div class="detail-box">
            <h4><span class="buff">[Force d'orc]</span></h4>
            <p>Augmente les dégâts d'<strong>Épée longue d'orc</strong> de <span class="stat-boost">40%</span>.<br>
            Réduit le temps de rechargement de 8 seconde(s).<br>
            Durée: 20 seconde(s)</p>
        </div>
    `,
    1: `
        <h3>1 étoile :</h3>
        <p>Lors de l'utilisation de la compétence <strong>Épée longue d'orc</strong>, l'effet <span class="buff">[Armure d'orc]</span> est appliqué.<br></p>
        <div class="detail-box">
            <h4><span class="buff">[Armure d'orc]</span></h4>
            <p>Crée un <span class="buff">[Bouclier]</span> équivalent à <span class="stat-boost">12%</span> des PV max de l'utilisateur.<br>
            Durée: 3 seconde(s)</p>
        </div>
    `,
    2: `
        <h3>2 étoiles :</h3>
        <p>Les dégâts élémentaires de ténèbres augmentent de <span class="stat-boost">8%</span>.<br></p>
    `,
    3: `
        <h3>3 étoiles :</h3>
        <p>L'effet <span class="buff">[Force d'orc]</span> s'applique également en cas de Coup critique réussi.<br>
        Augmente les chance qu'<strong>Épée longue d'orc</strong> inflige un Coup critique de <span class="stat-boost">40 %</span>.<br></p>
    `,
    4: `
        <h3>4 étoiles :</h3>
        <p>Réduit le temps de rechargement de la compétence de l'<strong>Épée longue d'orc</strong> de <span class="stat-boost">15%</span>.<br></p>
    `,
    5: `
        <h3>5 étoiles :</h3>
        <p>Lorsque l'effet <span class="buff">[Armure d'orc]</span> est appliqué pendant que l'effet <span class="buff">[Force d'orc]</span> est actif, les deux effets se combinent pour devenir <span class="buff">[Prestige de haut orc]</span>.<br></p>
        <div class="detail-box">
            <h4><span class="buff">[Prestige de haut orc]</span></h4>
            <p>L'utilisateur crée un <span class="buff">[Bouclier]</span> équivalent à <span class="stat-boost">25%</span> de ses PV max.<br>
            Lorsque l'effet est appliqué pour la première fois, le temps de rechargement d'<strong>Épée longue d'orc</strong> se réinitialise, puis il est réduit de <span class="stat-boost">40%</span>.<br>
            Augmente les dégâts d'<strong>Épée longue d'orc</strong> de <span class="stat-boost">75%</span>.<br>
            Durée: 15 seconde(s)</p>
        </div>
    `
};

// --- RÉSUMÉ (COURT) ---
const weaponSummaryData = {
    0: `
        <h3>Passif : Guerrier Orc</h3>
        <p>Kill = <span class="buff">[Force d'orc]</span>.<br>
        [Force] : Dégâts arme <span class="stat-boost">+40%</span>, CD -8s (20s).</p>
    `,
    1: `
        <h3>1 étoile</h3>
        <p>Compétence = <span class="buff">[Armure d'orc]</span> (Bouclier <span class="stat-boost">12%</span> PV, 3s).<br></p>
    `,
    2: `
        <h3>2 étoiles</h3>
        <p>Dégâts Ténèbres <span class="stat-boost">+8%</span>.<br></p>
    `,
    3: `
        <h3>3 étoiles</h3>
        <p>Critique active aussi [Force d'orc].<br>
        Taux critique arme <span class="stat-boost">+40%</span>.</p>
    `,
    4: `
        <h3>4 étoiles</h3>
        <p>CD Épée longue d'orc <span class="stat-boost">-15%</span>.<br></p>
    `,
    5: `
        <h3>5 étoiles</h3>
        <p>Armure + Force = <span class="buff">[Prestige de haut orc]</span>.<br>
        [Prestige] : Bouclier <span class="stat-boost">25%</span> PV, Reset CD puis <span class="stat-boost">-40%</span>, Dégâts <span class="stat-boost">+75%</span>.</p>
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