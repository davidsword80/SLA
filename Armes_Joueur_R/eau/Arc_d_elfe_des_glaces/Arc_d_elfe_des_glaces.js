/* ==========================================
   LOGIQUE ARME (Arc d'elfe des glaces)
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
        <p>Lorsque la compétence <strong>Explosion glacée</strong> touche sa cible, elle lui applique l'effet <span class="buff">[Gel]</span>.<br></p>
        <div class="detail-box">
            <h4><span class="buff">[Gel]</span></h4>
            <p>Cette compétence interrompt la cible.<br>
            Durée : <span class="stat-boost">0,5</span> seconde(s)</p>
        </div>
    `,
    1: `
        <h3>1 étoile :</h3>
        <p>La durée de l'effet <span class="buff">[Gel]</span> provoqué par <strong>Explosion glacée</strong> augmente de <span class="stat-boost">1</span> seconde(s).<br></p>
    `,
    2: `
        <h3>2 étoiles :</h3>
        <p>Vos dégâts d'eau augmentent de <span class="stat-boost">6 %</span>.<br></p>
    `,
    3: `
        <h3>3 étoiles :</h3>
        <p>La portée de la compétence <strong>Explosion glacée</strong> augmente de <span class="stat-boost">25 %</span>.<br></p>
    `,
    4: `
        <h3>4 étoiles :</h3>
        <p>Le temps de rechargement de la compétence <strong>Explosion glacée</strong> diminue de <span class="stat-boost">10 %</span>.<br></p>
    `,
    5: `
        <h3>5 étoiles :</h3>
        <p>Lorsque la compétence <strong>Explosion glacée</strong> touche sa cible, elle lui applique l'effet <span class="buff">[Engelure]</span>.<br></p>
        <div class="detail-box">
            <h4><span class="buff">[Engelure]</span></h4>
            <p>Inflige des dégâts équivalents à <span class="stat-boost">50 %</span> de l'Attaque toutes les 3 seconde(s) (cumulable jusqu'à 5 fois).<br>
            Après 5 cumuls, la compétence applique l'effet <span class="buff">[Gel]</span> à la cible pendant <span class="stat-boost">2</span> seconde(s).<br>
            Durée : 30 seconde(s)</p>
        </div>
    `
};

// --- RÉSUMÉ ---
const weaponSummaryData = {
    0: `
        <h3>Passif : Explosion Glacée</h3>
        <p>Touche = <span class="buff">[Gel]</span> (Interruption).<br>
        Durée : <span class="stat-boost">0,5s</span>.</p>
    `,
    1: `
        <h3>1 étoile</h3>
        <p>Durée <span class="buff">[Gel]</span> <span class="stat-boost">+1s</span>.<br></p>
    `,
    2: `
        <h3>2 étoiles</h3>
        <p>Dégâts Eau <span class="stat-boost">+6 %</span>.<br></p>
    `,
    3: `
        <h3>3 étoiles</h3>
        <p>Portée Explosion glacée <span class="stat-boost">+25 %</span>.<br></p>
    `,
    4: `
        <h3>4 étoiles</h3>
        <p>CD Explosion glacée <span class="stat-boost">-10 %</span>.<br></p>
    `,
    5: `
        <h3>5 étoiles</h3>
        <p>Applique <span class="buff">[Engelure]</span> (DoT cumulable).<br>
        À 5 cumuls = <span class="buff">[Gel]</span> (2s).</p>
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