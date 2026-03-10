/* ==========================================
   LOGIQUE ARME (Brochette grillée juteuse)
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
        <p>Lorsque la compétence <strong>Fumant et juteux</strong> est utilisée, l'effet <span class="buff">[Grill bien saisi]</span> est appliqué.<br>
        Lorsque la compétence <strong>Fumant et juteux</strong> est utilisée, elle crée 3 cumuls de <span class="buff">[Viande juteuse et Oignon vert fumant XL]</span>.<br>
        Accorde des effets supplémentaires pour chaque cumul de <span class="buff">[Viande juteuse ou Oignon vert fumant XL]</span>.<br></p>
        <div class="detail-box">
            <h4><span class="buff">[Grill saisi]</span></h4>
            <p>Les dégâts élémentaires de feu des membres de l'équipe augmentent de <span class="stat-boost">5%</span> lorsqu'ils se trouvent dans la zone.<br>
            Les dégâts infligés par les membres de l'équipe augmentent de <span class="stat-boost">5%</span> lorsqu'ils se trouvent dans la zone.<br>
            Durée: 7 secondes</p>
        </div>
        <div class="detail-box">
            <h4><span class="buff">[Viande juteuse]</span></h4>
            <p>L'utilisateur récupère <span class="stat-boost">3%</span> de PV en mangeant ça.<br>
            Augmente l'Attaque de l'utilisateur de <span class="stat-boost">1%</span>.<br>
            Durée: 10 seconde(s)</p>
        </div>
        <div class="detail-box">
            <h4><span class="buff">[Oignon vert fumant XL]</span></h4>
            <p>L'utilisateur récupère <span class="stat-boost">3%</span> de PM en mangeant ça.<br>
            Augmente la Défense de l'utilisateur de <span class="stat-boost">1%</span>.<br>
            Durée: 10 seconde(s)</p>
        </div>
    `,
    1: `
        <h3>1 étoile :</h3>
        <p>Le nombre de cumuls de <span class="buff">[Viande juteuse et Oignon vert fumant XL]</span> créés augmente de 4 à chaque fois.<br>
        Lorsque les cumuls de <span class="buff">[Viande juteuse et Oignon vert fumant XL]</span> sont épuisés, la flamme du grill se ravive pour infliger des dégâts équivalents à <span class="stat-boost">50%</span> des dégâts d'origine infligés lors de la première flambée.<br></p>
    `,
    2: `
        <h3>2 étoiles :</h3>
        <p>Augmente les dégâts de feu de l'utilisateur de <span class="stat-boost">10%</span>.<br></p>
    `,
    3: `
        <h3>3 étoiles :</h3>
        <p>Augmente les effets de <span class="buff">[Viande juteuse et Oignon vert fumant XL]</span>.<br></p>
        <div class="detail-box">
            <h4><span class="buff">[Viande juteuse]</span></h4>
            <p>L'utilisateur récupère <span class="stat-boost">5%</span> de PV.<br>
            Augmente l'Attaque de l'utilisateur de <span class="stat-boost">3%</span>.<br>
            Durée: 10 seconde(s)</p>
        </div>
        <div class="detail-box">
            <h4><span class="buff">[Oignon vert fumant XL]</span></h4>
            <p>L'utilisateur récupère <span class="stat-boost">5%</span> de PV.<br>
            Augmente la Défense de l'utilisateur de <span class="stat-boost">3%</span>.<br>
            Durée: 10 seconde(s)</p>
        </div>
    `,
    4: `
        <h3>4 étoiles :</h3>
        <p>Le temps de rechargement de <strong>Fumant et juteux</strong> diminue de <span class="stat-boost">20%</span>.<br></p>
    `,
    5: `
        <h3>5 étoiles :</h3>
        <p>Augmente les effets de <span class="buff">[Grill bien saisi]</span>.<br></p>
        <div class="detail-box">
            <h4><span class="buff">[Grill saisi]</span></h4>
            <p>Augmente les dégâts de feu de <span class="stat-boost">10%</span> dans la zone.<br>
            Augmente les dégâts infligés de <span class="stat-boost">10%</span> dans la zone.<br>
            Durée: 7 secondes</p>
        </div>
    `
};

// --- RÉSUMÉ (COURT) ---
const weaponSummaryData = {
    0: `
        <h3>Passif : Barbecue Démonique</h3>
        <p>Fumant et juteux = <span class="buff">[Grill bien saisi]</span> + Consommables.<br>
        [Grill] : Zone buff Feu/Dégâts <span class="stat-boost">+5%</span>.<br>
        [Viande] : Soin PV <span class="stat-boost">3%</span>, Atk <span class="stat-boost">+1%</span>.<br>
        [Oignon] : Soin PM <span class="stat-boost">3%</span>, Def <span class="stat-boost">+1%</span>.</p>
    `,
    1: `
        <h3>1 étoile</h3>
        <p>+4 cumuls Viande/Oignon.<br>
        Explosion finale du grill (50% dégâts initiaux).</p>
    `,
    2: `
        <h3>2 étoiles</h3>
        <p>Dégâts Feu <span class="stat-boost">+10%</span>.<br></p>
    `,
    3: `
        <h3>3 étoiles</h3>
        <p>Consommables améliorés : Soin <span class="stat-boost">5%</span>, Atk/Def <span class="stat-boost">+3%</span>.<br></p>
    `,
    4: `
        <h3>4 étoiles</h3>
        <p>CD Fumant et juteux <span class="stat-boost">-20%</span>.<br></p>
    `,
    5: `
        <h3>5 étoiles</h3>
        <p>[Grill bien saisi] amélioré : Dégâts Feu/Dégâts <span class="stat-boost">+10%</span> dans la zone.<br></p>
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