/* ==========================================
   LOGIQUE ARME (Skadi)
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
        <p>Lorsque la compétence <strong>Chasse hivernale</strong> est utilisée, elle active la compétence <strong>Dernière chasse</strong> et applique l'effet <span class="buff">[Bénédiction de Skadi]</span> pendant 7 secondes.<br>
        Lorsque la compétence <strong>[Chasse hivernale]</strong> touche sa cible, elle lui inflige l'effet <span class="buff">[Malédiction de Skadi]</span>.<br></p>
        <div class="detail-box">
            <h4><span class="buff">[Dernière chasse]</span></h4>
            <p>Inflige des dégâts équivalents à <span class="stat-boost">200 %</span> de l'Attaque de l'utilisateur aux cibles affectées par <span class="buff">[Malédiction de Skadi]</span>.<br>
            Inflige l'effet <span class="buff">[Gel]</span>.<br>
            Lorsque la compétence <strong>Dernière chasse</strong> touche sa cible, l'effet <span class="buff">[Malédiction de Skadi]</span> est dissipé.<br></p>
        </div>
        <div class="detail-box">
            <h4><span class="buff">[Bénédiction de Skadi]</span></h4>
            <p>Augmente l'Attaque de l'utilisateur de <span class="stat-boost">3%</span>.<br>
            Augmente la Pénétration de défense de l'utilisateur de <span class="stat-boost">3%</span>.<br>
            Durée: 10 seconde(s)</p>
        </div>
        <div class="detail-box">
            <h4><span class="buff">[Malédiction de Skadi]</span></h4>
            <p>Durée: 7 seconde(s)</p>
        </div>
        <div class="detail-box">
            <h4><span class="buff">[Gel]</span></h4>
            <p>Interrompt la cible.<br>
            Durée: 2 seconde(s)</p>
        </div>
    `,
    1: `
        <h3>1 étoile :</h3>
        <p>Lorsque la compétence <strong>Dernière chasse</strong> est utilisée, elle matérialise <span class="buff">[Domaine de Skadi]</span> pendant 7 seconde(s).<br></p>
        <div class="detail-box">
            <h4><span class="buff">[Domaine de Skadi]</span></h4>
            <p>Lorsqu'une attaque est portée dans le domaine, elle inflige des dégâts équivalents à <span class="stat-boost">50%</span> de l'Attaque de l'assaillant (temps de rechargement: 0.5 seconde(s)).<br>
            Augmente les dégâts élémentaires d'eau des membres de l'équipe de <span class="stat-boost">10%</span> dans le domaine.<br></p>
        </div>
    `,
    2: `
        <h3>2 étoiles :</h3>
        <p>Augmente les dégâts d'eau de <span class="stat-boost">10%</span>.<br></p>
    `,
    3: `
        <h3>3 étoiles :</h3>
        <p>Améliore <span class="buff">[Bénédiction de Skadi]</span>.<br></p>
        <div class="detail-box">
            <h4><span class="buff">[Bénédiction de Skadi]</span></h4>
            <p>Augmente l'Attaque de <span class="stat-boost">3%</span>.<br>
            Augmente la Pénétration de défense de <span class="stat-boost">3%</span>.<br>
            Durée: infinie (cumulable jusqu'à 4 fois)</p>
        </div>
    `,
    4: `
        <h3>4 étoiles :</h3>
        <p>Le temps de rechargement de <strong>Chasse hivernale</strong> diminue de <span class="stat-boost">20%</span>.<br></p>
    `,
    5: `
        <h3>5 étoiles :</h3>
        <p>Améliore la compétence <strong>Dernière chasse</strong>.<br>
        Inflige des dégâts équivalents à <span class="stat-boost">1000 %</span> de l'Attaque de l'utilisateur aux cibles affectées par <span class="buff">[Malédiction de Skadi]</span>.<br>
        Inflige l'effet <span class="buff">[Gel]</span>.<br>
        Lorsque la compétence <strong>Dernière chasse</strong> touche sa cible, l'effet <span class="buff">[Malédiction de Skadi]</span> est dissipé.<br></p>
        <div class="detail-box">
            <h4><span class="buff">[Gel]</span></h4>
            <p>Interrompt la cible.<br>
            Durée: 3 seconde(s)</p>
        </div>
    `
};

// --- RÉSUMÉ (COURT) ---
const weaponSummaryData = {
    0: `
        <h3>Passif : Courroux Hivernal</h3>
        <p>Chasse hivernale active <strong>Dernière chasse</strong> + <span class="buff">[Bénédiction]</span>.<br>
        Touche = <span class="buff">[Malédiction]</span>.<br>
        <strong>Dernière chasse</strong> : Dégâts <span class="stat-boost">200%</span> sur maudit + <span class="buff">[Gel]</span> (2s).<br>
        [Bénédiction] : Atk/Pene Def <span class="stat-boost">+3%</span> (10s).</p>
    `,
    1: `
        <h3>1 étoile</h3>
        <p>Dernière chasse = <span class="buff">[Domaine de Skadi]</span> (7s).<br>
        Domaine : Dégâts zone (<span class="stat-boost">50%</span>/0.5s) + Buff Eau équipe (<span class="stat-boost">+10%</span>).</p>
    `,
    2: `
        <h3>2 étoiles</h3>
        <p>Dégâts Eau <span class="stat-boost">+10%</span>.<br></p>
    `,
    3: `
        <h3>3 étoiles</h3>
        <p>[Bénédiction de Skadi] améliorée : Durée infinie, cumulable 4 fois (Max Atk/Pene <span class="stat-boost">+12%</span>).<br></p>
    `,
    4: `
        <h3>4 étoiles</h3>
        <p>CD Chasse hivernale <span class="stat-boost">-20%</span>.<br></p>
    `,
    5: `
        <h3>5 étoiles</h3>
        <p>Dernière chasse améliorée : Dégâts <span class="stat-boost">1000%</span> sur maudit.<br>
        Durée [Gel] passe à 3s.</p>
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