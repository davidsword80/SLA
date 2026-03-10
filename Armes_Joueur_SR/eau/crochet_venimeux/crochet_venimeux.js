/* ==========================================
   LOGIQUE ARME (Crochet venimeux)
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
        <p>Il y a <span class="stat-boost">30%</span> de chances d'appliquer l'effet <span class="buff">[Hémorragie]</span> à la cible lorsque le compétence <strong>Vile attaque sournoise</strong> la touche.<br></p>
        <div class="detail-box">
            <h4><span class="buff">[Hémorragie]</span></h4>
            <p>Inflige des dégâts équivalents à <span class="stat-boost">0.8%</span> des PV actuels de la cible toutes les 3 seconde(s).<br>
            Durée: 30 seconde(s)</p>
        </div>
    `,
    1: `
        <h3>1 étoile :</h3>
        <p>Lorsque la compétence <strong>Attaque de noyau</strong> ou <strong>Vile attaque sournoise</strong> touche sa cible, elle a <span class="stat-boost">30%</span> de chances de lui appliquer l'effet <span class="buff">[Paralysie]</span>.<br></p>
        <div class="detail-box">
            <h4><span class="buff">[Paralysie]</span></h4>
            <p>Cette compétence interrompt la cible.<br>
            Durée: 1 seconde(s)</p>
        </div>
    `,
    2: `
        <h3>2 étoiles :</h3>
        <p>Vos dégâts d'eau augmentent de <span class="stat-boost">8 %</span>.<br></p>
    `,
    3: `
        <h3>3 étoiles :</h3>
        <p>Ajoute l'effet <span class="buff">[Venin de Kasaka]</span> à la compétence <strong>Vile attaque sournoise</strong>.<br></p>
        <div class="detail-box">
            <h4><span class="buff">[Poison de Kasaka]</span></h4>
            <p>Crée une flaque de venin au sol pendant 5 secondes qui inflige des dégâts supplémentaires aux cibles se trouvant dans la zone.</p>
        </div>
    `,
    4: `
        <h3>4 étoiles :</h3>
        <p>Le temps de rechargement de <strong>Vile attaque sournoise</strong> diminue de <span class="stat-boost">15%</span>.<br></p>
    `,
    5: `
        <h3>5 étoiles :</h3>
        <p>Applique l'effet <span class="buff">[Poison mortel de Kasaka]</span> aux cibles touchées par <strong>Vile attaque sournoise</strong>.<br></p>
        <div class="detail-box">
            <h4><span class="buff">[Poison mortel de Kasaka]</span></h4>
            <p>L'utilisateur inflige des dégâts équivalents à <span class="stat-boost">75%</span> de l'Attaque toutes les 3 seconde(s).<br>
            Réduit le Taux de récupération des PV de la cible de <span class="stat-boost">70%</span>.<br>
            Durée: 30 seconde(s)</p>
        </div>
    `
};

// --- RÉSUMÉ (COURT) ---
const weaponSummaryData = {
    0: `
        <h3>Passif : Dent de Vipère</h3>
        <p>Vile attaque sournoise : 30% chance <span class="buff">[Hémorragie]</span>.<br>
        [Hémorragie] : DOT (<span class="stat-boost">0.8%</span> PV actuels, 30s).</p>
    `,
    1: `
        <h3>1 étoile</h3>
        <p>Noyau / Vile attaque : 30% chance <span class="buff">[Paralysie]</span> (Stun 1s).<br></p>
    `,
    2: `
        <h3>2 étoiles</h3>
        <p>Dégâts Eau <span class="stat-boost">+8%</span>.<br></p>
    `,
    3: `
        <h3>3 étoiles</h3>
        <p>Vile attaque = Zone <span class="buff">[Poison de Kasaka]</span> (Flaque dégâts 5s).<br></p>
    `,
    4: `
        <h3>4 étoiles</h3>
        <p>CD Vile attaque sournoise <span class="stat-boost">-15%</span>.<br></p>
    `,
    5: `
        <h3>5 étoiles</h3>
        <p>Vile attaque = <span class="buff">[Poison mortel]</span>.<br>
        [Poison mortel] : DOT (<span class="stat-boost">75%</span> Atk) + Debuff Soin (<span class="stat-boost">-70%</span>).</p>
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