/* ==========================================
   LOGIQUE ARME SSR (Croc du frimas)
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
        <p>Lorsque l'utilisateur a équipé la Pierre de bénédiction <strong>[Titre: Massacreur de lycans]</strong>, l'effet <span class="buff">[Isolation]</span> s'active.</p>
        <p>Si la jauge de puissance est à <span class="stat-boost">30%</span> ou plus lors de l'utilisation d'<strong>Ombre du loup</strong>, elle devient <strong>Sillage du loup</strong> pendant 3s.</p>
        <div class="detail-box">
            <h4><span class="buff">[Isolement]</span></h4>
            <p>Augmente les dégâts infligés de <span class="stat-boost">30%</span> et les dégâts de coup critique de <span class="stat-boost">30%</span> (Durée: illimitée).</p>
        </div>
    `,
    1: `
        <h3>1 étoile :</h3>
        <p><strong>Sillage du loup</strong> devient <strong>Nuit du loup blanc</strong> pendant 3s.</p>
        <p>Utiliser une compétence Eau remplit la jauge de puissance de <span class="stat-boost">10%</span> (CD: 1s).</p>
        <p>Toucher une cible applique l'effet <span class="buff">[Marquage d'argent]</span> (CD: 0.5s).</p>
        <div class="detail-box">
            <h4><span class="buff">[Marquage d'argent]</span></h4>
            <p>Augmente les dégâts de <strong>Nuit du loup blanc</strong> de <span class="stat-boost">55%</span> (Durée: 3s).</p>
        </div>
    `,
    2: `
        <h3>2 étoiles :</h3>
        <p>Les dégâts d'eau de l'utilisateur augmentent de <span class="stat-boost">10%</span>.</p>
    `,
    3: `
        <h3>3 étoiles :</h3>
        <p>Rejoindre le niveau remplit la jauge de puissance de <span class="stat-boost">50%</span>.</p>
        <p>Utiliser <strong>Ombre du loup</strong> ou <strong>Sillage du loup</strong> active l'effet <span class="buff">[Crépuscule]</span>.</p>
        <div class="detail-box">
            <h4><span class="buff">[Crépuscule]</span></h4>
            <p>Augmente le Taux crit de <span class="stat-boost">15%</span> et les Dégâts crit de <span class="stat-boost">40%</span> pour les compétences de loup (Durée: 3s).</p>
        </div>
    `,
    4: `
        <h3>4 étoiles :</h3>
        <p>Le temps de rechargement d'<strong>Ombre du loup</strong> diminue de <span class="stat-boost">20%</span>.</p>
    `,
    5: `
        <h3>5 étoiles :</h3>
        <p>Améliore les effets <span class="buff">[Crépuscule]</span> et <span class="buff">[Marquage d'argent]</span>.</p>
        <div class="detail-box">
            <h4>Améliorations :</h4>
            <p><strong>[Crépuscule] :</strong> Taux crit <span class="stat-boost">+25%</span>, Dégâts crit <span class="stat-boost">+80%</span>, Dégâts Eau <span class="stat-boost">+80%</span>.</p>
            <p><strong>[Marquage d'argent] :</strong> Dégâts <strong>Nuit du loup blanc</strong> <span class="stat-boost">+55%</span> (cumulable 2 fois).</p>
        </div>
    `
};

// --- RÉSUMÉ ---
const weaponSummaryData = {
    0: `<h3>Passif : Isolement</h3><p>Buff dégâts/crit <span class="stat-boost">+30%</span> permanent avec titre. Mode Sillage activé.</p>`,
    1: `<h3>1 étoile : Nuit du loup</h3><p>Nouvelle compétence. Charge jauge <span class="stat-boost">+10%</span> (Eau). [Marquage] : Dégâts comp <span class="stat-boost">+55%</span>.</p>`,
    2: `<h3>2 étoiles : Glace</h3><p>Dégâts Eau <span class="stat-boost">+10%</span>.</p>`,
    3: `<h3>3 étoiles : Crépuscule</h3><p>Charge initiale <span class="stat-boost">50%</span>. Buff Crit Rate/Dmg sur compétences de loup.</p>`,
    4: `<h3>4 étoiles : Rapidité</h3><p>CD Ombre du loup <span class="stat-boost">-20%</span>.</p>`,
    5: `<h3>5 étoiles : Éveil</h3><p>Buffs Crépuscule/Marquage massifs (Crit <span class="stat-boost">+25%</span>, Dégâts Eau <span class="stat-boost">+80%</span>).</p>`
};

// --- LOGIQUE COMMUNE ---
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

// Initialisation
renderWeaponContent();