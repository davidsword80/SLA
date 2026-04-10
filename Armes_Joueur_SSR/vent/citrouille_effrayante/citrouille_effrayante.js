/* ==========================================
   LOGIQUE ARME (Citrouille effrayante)
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
        <p>Lors de l'utilisation de <strong>Farce et attaque</strong>, 1 à 10 cumuls de l'effet <span class="buff">[Bonbon citrouille]</span> sont appliqués.<br>
        Lorsque l'attaque de base Stade 3 de l'arme <strong>Citrouille effrayante</strong> touche sa cible, elle applique 2 cumuls de l'effet <span class="buff">[Bonbon citrouille]</span>.<br>
        Dès lors que 10 cumuls de l'effet <span class="buff">[Bonbon citrouille]</span> ont été appliqués, l'effet <span class="buff">[Des bonbons ou un sort!]</span> est appliqué.<br></p>
        <div class="detail-box">
            <h4><span class="buff">[Bonbon citrouille]</span></h4>
            <p>Augmente les dégâts élémentaires de vent de <span class="stat-boost">1%</span>.<br>
            Durée: illimitée (cumulable jusqu'à 10 fois)</p>
        </div>
        <div class="detail-box">
            <h4><span class="buff">[Des bonbons ou un sort!]</span></h4>
            <p>Supprime les cumuls de l'effet <span class="buff">[Bonbon citrouille]</span> et empêche la cible d'en recevoir de nouveaux.<br>
            Augmente les dégâts élémentaires de vent de l'utilisateur de <span class="stat-boost">10%</span>.<br>
            Augmente les dégâts infligés de <span class="stat-boost">10%</span>.<br>
            Durée: 10 seconde(s)</p>
        </div>
    `,
    1: `
        <h3>1 étoile :</h3>
        <p>Lors de l'utilisation de <strong>Farce et attaque</strong>, l'attaque de noyau a <span class="stat-boost">50%</span> de chances de s'activer.<br>
        Lorsque l'attaque de noyau touche sa cible, elle active 2 cumuls pour l'effet <span class="buff">[Bonbon citrouille]</span>.<br></p>
    `,
    2: `
        <h3>2 étoiles :</h3>
        <p>Les dégâts élémentaires de vent de l'utilisateur augmentent de <span class="stat-boost">10%</span>.<br></p>
    `,
    3: `
        <h3>3 étoiles :</h3>
        <p>Lors de l'utilisation de <strong>Farce et attaque</strong>, 3 cumuls supplémentaires de l'effet <span class="buff">[Bonbon citrouille]</span> sont activés.<br>
        L'effet <span class="buff">[Des bonbons ou un sort!]</span> est également amélioré.<br></p>
        <div class="detail-box">
            <h4><span class="buff">[Des bonbons ou un sort!]</span></h4>
            <p>Supprime les cumuls de l'effet <span class="buff">[Bonbon citrouille]</span> et empêche la cible d'en recevoir de nouveaux.<br>
            Augmente les dégâts élémentaires de vent de l'utilisateur de <span class="stat-boost">20 %</span>.<br>
            Augmente les dégâts infligés de <span class="stat-boost">20%</span>.<br>
            Durée: 10 seconde(s)</p>
        </div>
    `,
    4: `
        <h3>4 étoiles :</h3>
        <p>Le temps de rechargement de <strong>Farce et attaque</strong> diminue de <span class="stat-boost">20%</span>.<br></p>
    `,
    5: `
        <h3>5 étoiles :</h3>
        <p>Lors de l'utilisation de <strong>Farce et attaque</strong>, l'attaque de noyau a <span class="stat-boost">100%</span> de chances de s'activer.<br>
        Lorsque l'attaque de base Stade 3 de l'arme <strong>Citrouille effrayante</strong> touche sa cible, le temps de rechargement de <strong>Farce et attaque</strong> diminue de 2 seconde(s).<br>
        Lorsque l'attaque de noyau de l'arme <strong>Citrouille effrayante</strong> touche sa cible, le temps de rechargement de <strong>Farce et attaque</strong> diminue de 2 seconde(s).<br></p>
    `
};

// --- RÉSUMÉ (COURT) ---
const weaponSummaryData = {
    0: `
        <h3>Passif : Festival de la Citrouille</h3>
        <p>Attaques -> <span class="buff">[Bonbon citrouille]</span> (Dégâts Vent <span class="stat-boost">+1%</span>, max 10).<br>
        10 Bonbons = <span class="buff">[Des bonbons ou un sort!]</span>.<br>
        [Sort!] : Dégâts Vent/Infligés <span class="stat-boost">+10%</span> (10s, reset stacks).</p>
    `,
    1: `
        <h3>1 étoile</h3>
        <p>Farce et attaque : 50% chance activer Attaque noyau.<br>
        Attaque noyau : +2 cumuls [Bonbon].<br></p>
    `,
    2: `
        <h3>2 étoiles</h3>
        <p>Dégâts Vent <span class="stat-boost">+10%</span>.<br></p>
    `,
    3: `
        <h3>3 étoiles</h3>
        <p>Farce et attaque : +3 cumuls [Bonbon].<br>
        [Sort!] amélioré : Dégâts Vent/Infligés <span class="stat-boost">+20%</span>.<br></p>
    `,
    4: `
        <h3>4 étoiles</h3>
        <p>CD Farce et attaque <span class="stat-boost">-20%</span>.<br></p>
    `,
    5: `
        <h3>5 étoiles</h3>
        <p>Farce et attaque : 100% chance activer Attaque noyau.<br>
        Attaque base 3 / Attaque noyau : CD Farce et attaque -2s.<br></p>
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