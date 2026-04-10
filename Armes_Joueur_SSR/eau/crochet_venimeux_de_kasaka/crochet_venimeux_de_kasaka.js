/* ==========================================
   LOGIQUE ARME (Crochet venimeux de Kasaka)
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
        <p>Lorsque la compétence <strong>Ombrin fugace</strong> est utilisée, un <span class="buff">[Voile de poison]</span> est créé autour de l'utilisateur.<br></p>
        <div class="detail-box">
            <h4><span class="buff">[Voile de poison]</span></h4>
            <p>Applique les effets <span class="buff">[Poison mortel de Kasaka et Spasmes]</span> aux cibles se trouvant dans la zone toxique (temps de rechargement: 1 seconde(s)).<br>
            Durée: 7 seconde(s)</p>
        </div>
        <div class="detail-box">
            <h4><span class="buff">[Poison mortel de Kasaka]</span></h4>
            <p>Inflige des dégâts équivalents à <span class="stat-boost">110%</span> de l'Attaque de l'utilisateur toutes les 3 seconde(s).<br>
            Réduit le Taux de récupération de PV de la cible de <span class="stat-boost">70%</span>.<br>
            Durée: 20 seconde(s)</p>
        </div>
        <div class="detail-box">
            <h4><span class="buff">[Spasmes]</span></h4>
            <p>Lorsque l'effet atteint 5 cumuls, il active l'effet <span class="buff">[Paralysie]</span>.<br>
            Réduit l'Attaque de la cible de <span class="stat-boost">3%</span>.<br>
            Durée: 3 seconde(s) (cumulable jusqu'à 5 fois)</p>
        </div>
        <div class="detail-box">
            <h4><span class="buff">[Paralysie]</span></h4>
            <p>Interrompt la cible.<br>
            Durée: 1 seconde(s)</p>
        </div>
    `,
    1: `
        <h3>1 étoile :</h3>
        <p>Lors de l'utilisation de la compétence <strong>Ombrin fugace</strong>, l'utilisateur reçoit un <span class="buff">[Bouclier]</span>.<br>
        L'entrée dans le donjon éphémère active l'effet <span class="buff">[Exterminateur de donjon]</span>.<br>
        Lorsque la pierre de bénédiction <span class="buff">[Titre: Massacreur de lycans]</span> est équipée, elle active l'effet <span class="buff">[Regard de Kasaka]</span>.<br></p>
        <div class="detail-box">
            <h4><span class="buff">[Bouclier]</span></h4>
            <p>Applique un <span class="buff">[Bouclier]</span> équivalent à <span class="stat-boost">30%</span> des PV max de l'utilisateur.<br>
            Durée: 10 seconde(s)</p>
        </div>
        <div class="detail-box">
            <h4><span class="buff">[Exterminateur de donjon]</span></h4>
            <p>Augmente le Taux de coup critique et les Dégâts de coup critique de <span class="stat-boost">20%</span>.<br>
            <strong>Ombrin fugace</strong> inflige toujours des dégâts élémentaires d'eau, comme si c'était la faiblesse élémentaire de la cible, et ce quelle que soit sa véritable faiblesse élémentaire.<br>
            Durée: illimitée</p>
        </div>
        <div class="detail-box">
            <h4><span class="buff">[Regard de Kasaka]</span></h4>
            <p>Augmente les dégâts infligés aux boss dans les mêmes proportions que les dégâts infligés aux monstres normaux grâce au bonus <span class="buff">[Titre: Massacreur de lycans]</span>.<br>
            Durée: illimitée</p>
        </div>
    `,
    2: `
        <h3>2 étoiles :</h3>
        <p>Les dégâts d'eau de l'utilisateur augmentent de <span class="stat-boost">10%</span>.<br></p>
    `,
    3: `
        <h3>3 étoiles :</h3>
        <p>Lorsque la compétence <strong>Ombrin fugace</strong> est utilisée, elle active l'effet <span class="buff">[Kasaka majestueux]</span>.<br>
        L'effet <span class="buff">[Poison mortel de Kasaka]</span> est amélioré.<br></p>
        <div class="detail-box">
            <h4><span class="buff">[Kasaka majestueux]</span></h4>
            <p>Augmente l'Attaque de <span class="stat-boost">20 %</span>.<br>
            Durée: 10 seconde(s)</p>
        </div>
        <div class="detail-box">
            <h4><span class="buff">[Poison mortel de Kasaka]</span></h4>
            <p>Inflige des dégâts équivalents à <span class="stat-boost">200 %</span> de l'Attaque de l'utilisateur toutes les 3 seconde(s).<br>
            Réduit le Taux de récupération de PV de la cible de <span class="stat-boost">70%</span>.<br>
            Durée: 20 seconde(s)</p>
        </div>
    `,
    4: `
        <h3>4 étoiles :</h3>
        <p>Le temps de rechargement de la compétence <strong>Ombrin fugace</strong> diminue de <span class="stat-boost">20 %</span>.<br></p>
    `,
    5: `
        <h3>5 étoiles :</h3>
        <p>Les dégâts de la compétence <strong>Ombrin fugace</strong> augmentent de <span class="stat-boost">150%</span>.<br></p>
    `
};

// --- RÉSUMÉ (COURT) ---
const weaponSummaryData = {
    0: `
        <h3>Passif : Venin de Kasaka</h3>
        <p>Ombrin fugace = <span class="buff">[Voile de poison]</span> (Zone toxique).<br>
        [Poison mortel] : DOT (<span class="stat-boost">110%</span> Atk) + Debuff Soin (<span class="stat-boost">-70%</span>).<br>
        [Spasmes] : Debuff Atk (<span class="stat-boost">-3%</span>/stack) -> [Paralysie] à 5 stacks.</p>
    `,
    1: `
        <h3>1 étoile</h3>
        <p>Ombrin fugace = <span class="buff">[Bouclier]</span> (30% PV).<br>
        Donjon éphémère = Crit/Crit Dmg <span class="stat-boost">+20%</span> + Faiblesse Eau forcée.<br>
        Avec Titre Massacreur = Bonus Dégâts Boss.</p>
    `,
    2: `
        <h3>2 étoiles</h3>
        <p>Dégâts Eau <span class="stat-boost">+10%</span>.<br></p>
    `,
    3: `
        <h3>3 étoiles</h3>
        <p>Ombrin fugace = <span class="buff">[Kasaka majestueux]</span> (Atk <span class="stat-boost">+20%</span>).<br>
        Poison amélioré : Dégâts <span class="stat-boost">200%</span> Atk.</p>
    `,
    4: `
        <h3>4 étoiles</h3>
        <p>CD Ombrin fugace <span class="stat-boost">-20%</span>.<br></p>
    `,
    5: `
        <h3>5 étoiles</h3>
        <p>Dégâts Ombrin fugace <span class="stat-boost">+150%</span>.<br></p>
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