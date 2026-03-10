/* ==========================================
   LOGIQUE ARME (Clé de transfiguration)
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
        <p>L'utilisation de <strong>Frappe de morphobête</strong> restaure <span class="stat-boost">100 %</span> de la jauge de noyau de l'utilisateur et active l'effet <span class="buff">[Regard de morphobête]</span>.<br></p>
        <div class="detail-box">
            <h4><span class="buff">[Regard de morphobête]</span></h4>
            <p>L'utilisation d'une attaque de noyau de ténèbres active <span class="stat-boost">[Flux instable de morphobête]</span> devant l'utilisateur (temps de rechargement : 2 seconde(s)).<br>
            Durée : 15 seconde(s)</p>
            <h4><span class="stat-boost">[Flux instable de morphobête]</span></h4>
            <p>Inflige des dégâts élémentaires de <strong>ténèbres</strong> équivalents à <span class="stat-boost">900 %</span> de l'Attaque de Sung Jinwoo.<br>
            Compte comme une <strong>attaque de noyau</strong>.</p>
        </div>
    `,
    1: `
        <h3>1 étoile :</h3>
        <p>Lorsque toutes les armes dont l'utilisateur est équipé sont de l'élément Ténèbres, l'effet <span class="buff">[Esprit de morphobête]</span> est activé.<br></p>
        <div class="detail-box">
            <h4><span class="buff">[Esprit de morphobête]</span></h4>
            <p>Augmente les dégâts de Surcharge de ténèbres de <span class="stat-boost">10 %</span>.<br>
            Augmente l'effet d'[Accumulation élémentaire] de [Ténèbres] de <span class="stat-boost">20 %</span>.<br>
            Durée : illimitée</p>
        </div>
    `,
    2: `
        <h3>2 étoiles :</h3>
        <p>Les dégâts de ténèbres infligés par l'utilisateur augmentent de <span class="stat-boost">10 %</span>.<br></p>
    `,
    3: `
        <h3>3 étoiles :</h3>
        <p>L'activation de <strong>[Flux instable de morphobête]</strong> active <span class="buff">[Énergie de la transfiguration]</span>.<br></p>
        <div class="detail-box">
            <h4><span class="buff">[Énergie de la transfiguration]</span></h4>
            <p>Augmente les dégâts de l'attaque de noyau et de la compétence d'arme de ténèbres de <span class="stat-boost">15 %</span>.<br>
            Augmente le Taux de coup critique de l'attaque de noyau et de la compétence d'arme de ténèbres de <span class="stat-boost">3 %</span>.<br>
            Augmente les Dégâts de coup critique de l'attaque de noyau et de la compétence d'arme de ténèbres de <span class="stat-boost">10 %</span>.<br>
            Durée : 10 seconde(s) (cumulable jusqu'à 2 fois)</p>
        </div>
    `,
    4: `
        <h3>4 étoiles :</h3>
        <p>Diminue le temps de rechargement de <strong>Frappe de morphobête</strong> de <span class="stat-boost">20 %</span>.<br></p>
    `,
    5: `
        <h3>5 étoiles :</h3>
        <p>Les effets <span class="buff">[Esprit de morphobête et Énergie de la transfiguration]</span> sont améliorés.<br></p>
        <div class="detail-box">
            <h4><span class="buff">[Esprit de morphobête]</span></h4>
            <p>Augmente les dégâts de Surcharge de ténèbres de <span class="stat-boost">20 %</span>.<br>
            Augmente l'effet d'[Accumulation élémentaire] de [Ténèbres] de <span class="stat-boost">40 %</span>.<br>
            Lorsque l'effet [Surcharge] de [Ténèbres] est activé, les dégâts de compétence d'arme de ténèbres augmentent de <span class="stat-boost">100 %</span> pendant 3 seconde(s), et le nombre de cumuls d'Énergie de la transfiguration passe à 5 (temps de rechargement : 15 seconde(s)).<br>
            Durée : illimitée</p>
            <h4><span class="buff">[Énergie de la transfiguration]</span></h4>
            <p>Augmente les dégâts de l'attaque de noyau et de la compétence d'arme de ténèbres de <span class="stat-boost">15 %</span>.<br>
            Augmente le Taux de coup critique de l'attaque de noyau et de la compétence d'arme de ténèbres de <span class="stat-boost">3 %</span>.<br>
            Augmente les Dégâts de coup critique de l'attaque de noyau et de la compétence d'arme de ténèbres de <span class="stat-boost">10 %</span>.<br>
            Durée : <span class="stat-boost">15 seconde(s)</span> (cumulable jusqu'à 5 fois)</p>
        </div>
    `
};

// --- RÉSUMÉ (COURT) ---
const weaponSummaryData = {
    0: `
        <h3>Passif</h3>
        <p>Frappe de morphobête : Jauge de noyau <span class="stat-boost">+100 %</span> + <span class="buff">[Regard]</span>.<br>
        [Regard] : Noyau Ténèbres déclenche <span class="stat-boost">[Flux instable]</span> (900 % Attaque).</p>
    `,
    1: `
        <h3>1 étoile</h3>
        <p>Full Ténèbres = <span class="buff">[Esprit de morphobête]</span>.<br>
        [Esprit] : Surcharge +10 %, Accumulation +20 %.</p>
    `,
    2: `
        <h3>2 étoiles</h3>
        <p>Dégâts Ténèbres <span class="stat-boost">+10 %</span>.<br></p>
    `,
    3: `
        <h3>3 étoiles</h3>
        <p>[Flux] active <span class="buff">[Énergie de la transfiguration]</span>.<br>
        [Énergie] : Dégâts Noyau/Arme +15 %, Taux Crit +3 %, Dégâts Crit +10 % (Max x2).</p>
    `,
    4: `
        <h3>4 étoiles</h3>
        <p>CD Frappe de morphobête <span class="stat-boost">-20 %</span>.<br></p>
    `,
    5: `
        <h3>5 étoiles</h3>
        <p>[Esprit] & [Énergie] UP.<br>
        Surcharge active = Dégâts Arme <span class="stat-boost">+100 %</span> et <span class="stat-boost">5 cumuls</span> Énergie.<br>
        [Énergie] : Max x5, Durée 15s.</p>
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