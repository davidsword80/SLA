/* ==========================================
   LOGIQUE ARME (Winchester Roke)
   ========================================== */
const weaponStarsContainer = document.getElementById('weapon-stars-container');
const weaponStars = weaponStarsContainer.querySelectorAll('.star');
const weaponMessage = document.getElementById('weapon-message');
const toggleBtn = document.getElementById('toggleBtn');

let weaponCurrentLevel = 0;
let isSummaryMode = false;

// --- TEXTE COMPLET (MOT POUR MOT) ---
const weaponFullData = {
    0: `
        <h3>Passif :</h3>
        <p>L'utilisation de la compétence <strong>[Apocalypse]</strong> active <span class="buff">[Rechargement rotatif]</span>.<br></p>
        <div class="detail-box">
            <h4><span class="buff">[Rechargement rotatif]</span></h4>
            <p>Active l'attaque de noyau de l'utilisateur.<br>
            Transforme l'attaque de noyau de Winchester Roke en Condamnation et augmente ses dégâts de <span class="stat-boost">20 %</span>.<br>
            L'effet <strong>[Rechargement rotatif]</strong> ne peut être appliqué qu'avec un maximum de 2 utilisations de Condamnation.<br>
            Durée : 4 seconde(s)</p>
        </div>
    `,
    1: `
        <h3>1 étoile :</h3>
        <p>Augmente les dégâts de la compétence <strong>[Apocalypse]</strong> de l'utilisateur de <span class="stat-boost">100 %</span> face aux cibles se trouvant à une portée de 5 m.<br>
        Améliore l'effet <span class="buff">[Rechargement rotatif]</span>.<br></p>
        <div class="detail-box">
            <h4><span class="buff">[Rechargement rotatif]</span></h4>
            <p>Active l'attaque de noyau de l'utilisateur.<br>
            Transforme l'attaque de noyau de Winchester Roke en Condamnation et augmente ses dégâts de <span class="stat-boost">40 %</span>.<br>
            L'effet <strong>[Rechargement rotatif]</strong> ne peut être appliqué qu'avec un maximum de 3 utilisations de Condamnation.<br>
            Durée : 5 seconde(s)</p>
        </div>
    `,
    2: `
        <h3>2 étoiles :</h3>
        <p>Les dégâts de ténèbres infligés par l'utilisateur augmentent de <span class="stat-boost">10 %</span>.<br></p>
    `,
    3: `
        <h3>3 étoiles :</h3>
        <p>L'utilisation de la compétence <strong>[Apocalypse]</strong> active <span class="buff">[Prêt ou non]</span>.<br></p>
        <div class="detail-box">
            <h4><span class="buff">[Prêt ou non]</span></h4>
            <p>Augmente les dégâts de ténèbres de la compétence Condamnation de <span class="stat-boost">15 %</span>.<br>
            Augmente les Dégâts de coup critique de la compétence Condamnation de <span class="stat-boost">30 %</span>.<br>
            Confère à l'utilisateur [Super armure].<br>
            Durée : 6 seconde(s)</p>
        </div>
    `,
    4: `
        <h3>4 étoiles :</h3>
        <p>Le temps de rechargement de la compétence <strong>[Apocalypse]</strong> diminue de <span class="stat-boost">20 %</span>.<br></p>
    `,
    5: `
        <h3>5 étoiles :</h3>
        <p>Les compétences <span class="buff">[Rechargement rotatif et Prêt ou non]</span> sont améliorées.<br></p>
        <div class="detail-box">
            <h4><span class="buff">[Rechargement rotatif]</span></h4>
            <p>Active l'attaque de noyau de l'utilisateur.<br>
            Transforme l'attaque de noyau de Winchester Roke en Condamnation, et ses dégâts augmentent de <span class="stat-boost">80 %</span>.<br>
            Augmente les dégâts de Surcharge de Condamnation de <span class="stat-boost">70 %</span>.<br>
            L'effet <strong>[Rechargement rotatif]</strong> ne peut être appliqué qu'avec un maximum de 4 utilisations de Condamnation.<br>
            Durée : 6 seconde(s)</p>
            <h4><span class="buff">[Prêt ou non]</span></h4>
            <p>Augmente les dégâts de ténèbres de Condamnation de <span class="stat-boost">30 %</span>.<br>
            Augmente les Dégâts de coup critique de la compétence Condamnation de <span class="stat-boost">60 %</span>.<br>
            Confère à l'utilisateur [Super armure].<br>
            Durée : 6 seconde(s)</p>
        </div>
    `
};

// --- RÉSUMÉ (COURT) ---
const weaponSummaryData = {
    0: `
        <h3>Passif</h3>
        <p>[Apocalypse] active <span class="buff">[Rechargement]</span>.<br>
        Noyau devient Condamnation (Dégâts <span class="stat-boost">+20 %</span>, 2 tirs max).</p>
    `,
    1: `
        <h3>1 étoile</h3>
        <p>Dégâts [Apocalypse] <span class="stat-boost">+100 %</span> au corps à corps.<br>
        [Rechargement] UP : Dégâts <span class="stat-boost">+40 %</span>, 3 tirs max.</p>
    `,
    2: `
        <h3>2 étoiles</h3>
        <p>Dégâts Ténèbres <span class="stat-boost">+10 %</span>.<br></p>
    `,
    3: `
        <h3>3 étoiles</h3>
        <p>[Apocalypse] active <span class="buff">[Prêt ou non]</span>.<br>
        Condamnation : Dégâts Ténèbres <span class="stat-boost">+15 %</span>, Dégâts Crit <span class="stat-boost">+30 %</span> + Super Armure.</p>
    `,
    4: `
        <h3>4 étoiles</h3>
        <p>CD [Apocalypse] <span class="stat-boost">-20 %</span>.<br></p>
    `,
    5: `
        <h3>5 étoiles</h3>
        <p>[Rechargement] UP : Dégâts <span class="stat-boost">+80 %</span>, Surcharge <span class="stat-boost">+70 %</span>, 4 tirs max.<br>
        [Prêt ou non] UP : Dégâts Ténèbres <span class="stat-boost">+30 %</span>, Dégâts Crit <span class="stat-boost">+60 %</span>.</p>
    `
};

// --- LOGIQUE D'AFFICHAGE ---
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