/* ==========================================
   LOGIQUE ARME (Épée longue en écailles de dragon)
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
        <p>Lorsque l'utilisateur réalise une frappe descendante avec <strong>Entaille du dragon de feu</strong>, il crée un <strong>Domaine du dragon</strong>.<br></p>
        <div class="detail-box">
            <h4><span class="buff">[Domaine du dragon]</span></h4>
            <p>Réduit de <span class="stat-boost">30%</span> les dégâts subis par les alliés se trouvant dans la zone et ajoute l'effet <span class="buff">[Super armure]</span>.<br>
            Inflige des dégâts supplémentaires équivalents à <span class="stat-boost">100%</span> de l'Attaque lorsque des attaques touchent leur cible dans la zone (s'active toutes les 2 seconde(s)).<br>
            Durée: 10 secondes</p>
        </div>
    `,
    1: `
        <h3>1 étoile :</h3>
        <p>Applique l'effet <span class="buff">[Pouvoir du sang de dragon]</span> aux alliés se trouvant dans la zone de <span class="buff">[Domaine du dragon]</span>.<br></p>
        <div class="detail-box">
            <h4><span class="buff">[Le pouvoir du sang de dragon]</span></h4>
            <p>Augmente l'Attaque de l'utilisateur de <span class="stat-boost">12%</span>.<br>
            Durée: 10 seconde(s)</p>
        </div>
    `,
    2: `
        <h3>2 étoiles :</h3>
        <p>Vos dégâts de feu augmentent de <span class="stat-boost">8 %</span>.<br></p>
    `,
    3: `
        <h3>3 étoiles :</h3>
        <p>Augmente la zone d'effet et la durée de <span class="buff">[Domaine du dragon]</span> de <span class="stat-boost">50%</span>.<br></p>
    `,
    4: `
        <h3>4 étoiles :</h3>
        <p>Réduit le temps de rechargement d'<strong>Entaille du dragon de feu</strong> de <span class="stat-boost">15%</span>.<br></p>
    `,
    5: `
        <h3>5 étoiles :</h3>
        <p>Augmente les dégâts de <span class="stat-boost">100%</span> lorsque la compétence <strong>Entaille du dragon de feu</strong> est utilisée dans la zone d'effet de <span class="buff">[Domaine du dragon]</span>.<br></p>
    `
};

// --- RÉSUMÉ (COURT) ---
const weaponSummaryData = {
    0: `
        <h3>Passif : Domaine Draconique</h3>
        <p>Entaille du dragon de feu = <span class="buff">[Domaine du dragon]</span>.<br>
        [Domaine] : Réduc Dégâts <span class="stat-boost">30%</span>, Super armure, Dégâts Zone (100% Atk/2s).<br>
        Durée : 10s.</p>
    `,
    1: `
        <h3>1 étoile</h3>
        <p>Domaine applique <span class="buff">[Le pouvoir du sang de dragon]</span>.<br>
        [Pouvoir] : Attaque <span class="stat-boost">+12%</span>.</p>
    `,
    2: `
        <h3>2 étoiles</h3>
        <p>Dégâts Feu <span class="stat-boost">+8%</span>.<br></p>
    `,
    3: `
        <h3>3 étoiles</h3>
        <p>Zone et Durée de [Domaine du dragon] <span class="stat-boost">+50%</span>.<br></p>
    `,
    4: `
        <h3>4 étoiles</h3>
        <p>CD Entaille du dragon de feu <span class="stat-boost">-15%</span>.<br></p>
    `,
    5: `
        <h3>5 étoiles</h3>
        <p>Entaille dans le Domaine : Dégâts <span class="stat-boost">+100%</span>.<br></p>
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