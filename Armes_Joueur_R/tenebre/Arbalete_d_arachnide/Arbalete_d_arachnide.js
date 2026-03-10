/* ==========================================
   LOGIQUE ARME (Arbalète d'Arachnide)
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
        <p>Lorsque <strong>Barrage d'aiguilles empoisonnées</strong> touche sa cible, l'utilisateur lui inflige l'effet <span class="buff">[Empoisonnement]</span>.<br></p>
        <div class="detail-box">
            <h4><span class="buff">[Empoisonnement]</span></h4>
            <p>L'utilisateur inflige des dégâts équivalents à <span class="stat-boost">50%</span> de son Attaque toutes les 3 seconde(s).<br>
            Réduit le Taux de récupération des PV de <span class="stat-boost">70%</span>.<br>
            Durée: 30 seconde(s)</p>
        </div>
    `,
    1: `
        <h3>1 étoile :</h3>
        <p>Lorsque la compétence <strong>Barrage d'aiguilles empoisonnées</strong> est utilisée, <strong>Ruée</strong> gagne 1 charge.<br></p>
    `,
    2: `
        <h3>2 étoiles :</h3>
        <p>Vos dégâts de ténèbres augmentent de <span class="stat-boost">6%</span>.<br></p>
    `,
    3: `
        <h3>3 étoiles :</h3>
        <p>Les dégâts de <span class="buff">[Poison]</span> de la compétence <strong>Barrage d'aiguilles empoisonnées</strong> augmentent de <span class="stat-boost">50%</span>.<br></p>
    `,
    4: `
        <h3>4 étoiles :</h3>
        <p>Le temps de rechargement de <strong>Barrage d'aiguilles empoisonnées</strong> diminue de <span class="stat-boost">10%</span>.<br></p>
    `,
    5: `
        <h3>5 étoiles :</h3>
        <p>Si Jinwoo est touché dans les airs pendant qu'il utilise <strong>Barrage d'aiguilles empoisonnées</strong>, <strong>Évasion extrême</strong> s'active.<br></p>
    `
};

// --- RÉSUMÉ ---
const weaponSummaryData = {
    0: `
        <h3>Passif : Venin d'Arachnide</h3>
        <p>Barrage d'aiguilles = <span class="buff">[Empoisonnement]</span>.<br>
        50% Atk/3s & Récup. PV <span class="stat-boost">-70%</span>.</p>
    `,
    1: `
        <h3>1 étoile</h3>
        <p>Utilisation compétence = <strong>+1 charge de Ruée</strong>.<br></p>
    `,
    2: `
        <h3>2 étoiles</h3>
        <p>Dégâts Ténèbres <span class="stat-boost">+6%</span>.<br></p>
    `,
    3: `
        <h3>3 étoiles</h3>
        <p>Dégâts du Poison <span class="stat-boost">+50%</span>.<br></p>
    `,
    4: `
        <h3>4 étoiles</h3>
        <p>CD Barrage d'aiguilles <span class="stat-boost">-10%</span>.<br></p>
    `,
    5: `
        <h3>5 étoiles</h3>
        <p>Auto-trigger <strong>Évasion extrême</strong> si touché en l'air pendant la compétence.<br></p>
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