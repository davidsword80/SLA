/* ==========================================
   LOGIQUE ARME (Cube de tempête de sable)
   ========================================== */
const weaponStarsContainer = document.getElementById('weapon-stars-container');
const weaponStars = weaponStarsContainer.querySelectorAll('.star');
const weaponMessage = document.getElementById('weapon-message');
const toggleBtn = document.getElementById('toggleBtn');

let weaponCurrentLevel = 0;
let isSummaryMode = false;

// --- TEXTE COMPLET ---
const weaponFullData = {
    0: `
        <h3>Passif :</h3>
        <p>Lorsque la compétence <strong>Yeux luisants</strong> touche sa cible, elle lui inflige l'effet <span class="buff">[Écran de fumée]</span>.<br></p>
        <div class="detail-box">
            <h4><span class="buff">[Écran de fumée]</span></h4>
            <p>Réduit la Précision de <span class="stat-boost">5 %</span> (cumulable jusqu'à 3 fois).<br>
            Durée : 20 seconde(s)</p>
        </div>
    `,
    1: `
        <h3>1 étoile :</h3>
        <p>Lorsqu'une cible affectée par <span class="buff">[Écran de fumée]</span> est attaquée, la Précision augmente de <span class="stat-boost">5 %</span>.<br></p>
    `,
    2: `
        <h3>2 étoiles :</h3>
        <p>Vos dégâts de lumière augmentent de <span class="stat-boost">6 %</span>.<br></p>
    `,
    3: `
        <h3>3 étoiles :</h3>
        <p>Lors de l'utilisation de la compétence <strong>Yeux luisants</strong>, si l'utilisateur subit une attaque ou si son Attaque de noyau touche sa cible dans les 10 seconde(s), ce dernier inflige à la cible des dégâts supplémentaires équivalents à <span class="stat-boost">150 %</span> de son Attaque et lui applique l'effet <span class="buff">[Écran de fumée]</span>.<br></p>
    `,
    4: `
        <h3>4 étoiles :</h3>
        <p>Réduit les temps de rechargement de la compétence <strong>Yeux luisants</strong> de <span class="stat-boost">10 %</span>.<br></p>
    `,
    5: `
        <h3>5 étoiles :</h3>
        <p>Lorsque l'effet <span class="buff">[Écran de fumée]</span> se cumule 3 fois, il se transforme en effet <span class="buff">[Écran de fumée amélioré]</span>.<br></p>
        <div class="detail-box">
            <h4><span class="buff">[Écran de fumée amélioré]</span></h4>
            <p>Réduit la Précision de <span class="stat-boost">50 %</span>. <span class="buff">[Écran de fumée]</span> ne peut pas s'activer.<br>
            Durée : 20 seconde(s)</p>
        </div>
    `
};

// --- RÉSUMÉ ---
const weaponSummaryData = {
    0: `
        <h3>Passif : Brouillard</h3>
        <p>Yeux luisants = <span class="buff">[Écran de fumée]</span>.<br>
        Précision <span class="stat-boost">-5 %</span> (max 3 piles).</p>
    `,
    1: `
        <h3>1 étoile</h3>
        <p>Cible sous fumée attaquée : Précision <span class="stat-boost">+5 %</span>.<br></p>
    `,
    2: `
        <h3>2 étoiles</h3>
        <p>Dégâts Lumière <span class="stat-boost">+6 %</span>.<br></p>
    `,
    3: `
        <h3>3 étoiles</h3>
        <p>Contre ou Atk de noyau = <span class="stat-boost">150 %</span> de dégâts sup + <span class="buff">[Écran de fumée]</span>.<br></p>
    `,
    4: `
        <h3>4 étoiles</h3>
        <p>CD Yeux luisants <span class="stat-boost">-10 %</span>.<br></p>
    `,
    5: `
        <h3>5 étoiles</h3>
        <p>3 piles = <span class="buff">[Écran de fumée amélioré]</span>.<br>
        Précision ennemie <span class="stat-boost">-50 %</span>.</p>
    `
};

// --- LOGIQUE COMMUNE ---
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
        weaponCurrentLevel = (clickedValue === weaponCurrentLevel) ? clickedValue - 1 : clickedValue;
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