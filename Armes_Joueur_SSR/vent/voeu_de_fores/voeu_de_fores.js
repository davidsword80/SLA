/* ==========================================
   LOGIQUE ARME SSR (Vœu de fores)
   ========================================== */
const weaponStarsContainer = document.getElementById('weapon-stars-container');
const weaponStars = weaponStarsContainer.querySelectorAll('.star');
const weaponMessage = document.getElementById('weapon-message');
const toggleBtn = document.getElementById('toggleBtn');

let weaponCurrentLevel = 0;
let isSummaryMode = false;

// --- TEXTE COMPLET (Source: passif.txt) ---
const weaponFullData = {
    0: `
        <h3>Passif :</h3>
        <p>Lorsque l'attaque de noyau touche sa cible, l'utilisateur reçoit l'effet <span class="buff">[Vœu]</span>.</p>
        <div class="detail-box">
            <h4><span class="buff">[Vœu]</span></h4>
            <p>Augmente les dégâts infligés de <span class="stat-boost">20%</span>.<br>
            Lorsque la compétence <strong>Chant de l'arbre du vent</strong> touche sa cible, l'effet <span class="buff">[Vœu]</span> est supprimé.<br>
            Durée: 20 seconde(s)</p>
        </div>
    `,
    1: `
        <h3>1 étoile :</h3>
        <p>Lorsque l'utilisateur rejoint un niveau, sa jauge de noyau est chargée à <span class="stat-boost">100%</span>.</p>
        <p>Améliore l'effet <span class="buff">[Vœu]</span> : augmente les dégâts infligés de <span class="stat-boost">20%</span>. Lorsque <strong>Chant de l'arbre du vent</strong> touche sa cible, l'utilisateur a <span class="stat-boost">100%</span> de chances d'activer son attaque de noyau (CD: 20s).</p>
        <p>L'utilisateur reçoit également l'effet <span class="buff">[Détachement]</span> lors de l'utilisation de la compétence.</p>
        <div class="detail-box">
            <h4><span class="buff">[Détachement]</span></h4>
            <p>Lorsque l'attaque de noyau touche sa cible, le temps de rechargement de <strong>Chant de l'arbre du vent</strong> est réinitialisé (CD: 20s).<br>
            L'effet est supprimé après activation. Durée: 20 seconde(s)</p>
        </div>
    `,
    2: `
        <h3>2 étoiles :</h3>
        <p>Les dégâts élémentaires de vent de l'utilisateur augmentent de <span class="stat-boost">10%</span>.</p>
    `,
    3: `
        <h3>3 étoiles :</h3>
        <p>L'effet <span class="buff">[Vœu]</span> est amélioré : augmente les dégâts infligés de <span class="stat-boost">40%</span>.</p>
        <p>L'attaque de noyau inflige des dégâts supplémentaires équivalents à <span class="stat-boost">500%</span> de l'Attaque à la première cible.</p>
        <p>Lorsque <strong>Chant de l'arbre du vent</strong> touche sa cible, l'effet <span class="buff">[Dispersion racinaire]</span> s'active (dégâts zone <span class="stat-boost">100%</span> Atk) et applique <span class="buff">[Poison]</span>.</p>
        <div class="detail-box">
            <h4><span class="buff">[Empoisonnement]</span></h4>
            <p>Inflige des dégâts équivalents à <span class="stat-boost">50%</span> de l'Attaque toutes les 3s.<br>
            Diminue le Taux de récupération de la cible de <span class="stat-boost">70%</span>. Durée: 30s</p>
        </div>
    `,
    4: `
        <h3>4 étoiles :</h3>
        <p>Le temps de rechargement de <strong>Chant de l'arbre du vent</strong> diminue de <span class="stat-boost">20%</span>.</p>
    `,
    5: `
        <h3>5 étoiles :</h3>
        <p>Les dégâts de <strong>Chant de l'arbre du vent</strong> augmentent de <span class="stat-boost">50%</span>.</p>
        <p>Les dégâts de <span class="buff">[Dispersion racinaire]</span> augmentent de <span class="stat-boost">150%</span>.</p>
    `
};

// --- RÉSUMÉ ---
const weaponSummaryData = {
    0: `<h3>Passif : Vœu</h3><p>Noyau -> <span class="buff">[Vœu]</span> : Dégâts <span class="stat-boost">+20%</span> (20s). Consommé par Chant de l'arbre.</p>`,
    1: `<h3>1 étoile : Détachement</h3><p>Début niveau : Noyau <span class="stat-boost">100%</span>. Chant de l'arbre -> Active Noyau et réinitialise CD (CD 20s).</p>`,
    2: `<h3>2 étoiles : Vent</h3><p>Dégâts Vent <span class="stat-boost">+10%</span>.</p>`,
    3: `<h3>3 étoiles : Floraison</h3><p><span class="buff">[Vœu]</span> <span class="stat-boost">+40%</span> dégâts. Noyau <span class="stat-boost">+500%</span> Atk. Chant de l'arbre : Dégâts zone et <span class="buff">[Poison]</span>.</p>`,
    4: `<h3>4 étoiles : Rapidité</h3><p>CD Chant de l'arbre <span class="stat-boost">-20%</span>.</p>`,
    5: `<h3>5 étoiles : Puissance</h3><p>Dégâts Chant de l'arbre <span class="stat-boost">+50%</span>. Dégâts zone <span class="stat-boost">+150%</span>.</p>`
};

function renderWeaponContent() {
    const dataSource = isSummaryMode ? weaponSummaryData : weaponFullData;
    weaponMessage.innerHTML = dataSource[weaponCurrentLevel];
}

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

renderWeaponContent();