/* ==========================================
   LOGIQUE ARME (Fragment de Zeke)
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
        <p>Lors d'une nouvelle utilisation de l'<strong>Avènement de Zeke</strong> après une <strong>Attaque au javelot</strong>, l'utilisateur réalise immédiatement une <strong>Attaque tombante</strong>.<br>
        Lors de l'utilisation d'<strong>Attaque au javelot</strong>, l'effet <span class="buff">[Récupération de fragment]</span> est appliqué.<br>
        Après l'utilisation d'<strong>Attaque tombante</strong>, l'utilisateur obtient <span class="buff">[Super armure]</span> et les dégâts qu'il subit diminuent de <span class="stat-boost">50%</span> pendant 5 seconde(s).<br></p>
        <div class="detail-box">
            <h4><span class="buff">[Récupération de fragment]</span></h4>
            <p>Lorsque l'effet se dissipe, l'effet <span class="buff">[Fragment amélioré]</span> est appliqué.<br>
            Durée: 3 seconde(s)</p>
        </div>
        <div class="detail-box">
            <h4><span class="buff">[Fragment amélioré]</span></h4>
            <p>Augmente les dégâts d'<strong>Avènement de Zeke</strong> et de <strong>Retour de Zeke</strong> de <span class="stat-boost">50%</span>.<br>
            Durée: 3 seconde(s)</p>
        </div>
    `,
    1: `
        <h3>1 étoile :</h3>
        <p><strong>Retour de Zeke</strong> s'active après l'utilisation d'une <strong>Attaque tombante</strong>.<br></p>
        <div class="detail-box">
            <h4><span class="buff">[Renvoyez le Zeke]</span></h4>
            <p>Dégâts et consommation de PM: identiques à ceux d'<strong>Attaque tombante</strong><br>
            L'utilisateur réalise une puissante attaque de taille vers l'avant et crée un tonnerre noir.<br>
            Lors de l'utilisation de <strong>Retour de Zeke</strong> à la suite d'<strong>Attaque tombante</strong>, les dégâts d'attaque augmentent de <span class="stat-boost">50%</span>.<br></p>
        </div>
    `,
    2: `
        <h3>2 étoiles :</h3>
        <p>Vos dégâts de ténèbres augmentent de <span class="stat-boost">10%</span>.<br></p>
    `,
    3: `
        <h3>3 étoiles :</h3>
        <p>L'utilisation d'<strong>Attaque tombante</strong> peut se faire plus rapidement.<br>
        Lors de l'utilisation d'<strong>Attaque tombante</strong>, l'effet <span class="buff">[Fragment amélioré]</span> est appliqué immédiatement.<br>
        Lors de l'utilisation à la suite d'<strong>Attaque tombante</strong> puis de <strong>Retour de Zeke</strong>, le temps de rechargement d'<strong>Avènement de Zeke</strong> diminue de 2 seconde(s).<br></p>
    `,
    4: `
        <h3>4 étoiles :</h3>
        <p>Le temps de rechargement d'<strong>Avènement de Zeke</strong> diminue de <span class="stat-boost">20%</span>.<br></p>
    `,
    5: `
        <h3>5 étoiles :</h3>
        <p>Lors de l'utilisation à la suite d'<strong>Attaque tombante</strong> puis de <strong>Retour de Zeke</strong>, l'effet <span class="buff">[Fragment amélioré]</span> est amélioré et l'effet <span class="buff">[Fragment de foudre noire]</span> est appliqué.<br></p>
        <div class="detail-box">
            <h4><span class="buff">[Fragment de foudre noire]</span></h4>
            <p>Augmente les dégâts d'<strong>Avènement de Zeke</strong> et de <strong>Retour de Zeke</strong> de <span class="stat-boost">80%</span>.<br>
            Augmente le Taux de coup critique d'<strong>Avènement de Zeke</strong> et de <strong>Retour de Zeke</strong> de <span class="stat-boost">20%</span>.<br>
            Durée: 3 seconde(s)</p>
        </div>
    `
};

// --- RÉSUMÉ (COURT) ---
const weaponSummaryData = {
    0: `
        <h3>Passif : Héritage de Zeke</h3>
        <p>Avènement après Javelot = <strong>Attaque tombante</strong> auto.<br>
        Javelot = <span class="buff">[Récupération]</span> -> <span class="buff">[Amélioré]</span> (3s).<br>
        Attaque tombante = <span class="buff">[Super armure]</span> + Réduc Dégâts <span class="stat-boost">50%</span>.<br>
        [Amélioré] : Dégâts Zeke <span class="stat-boost">+50%</span>.</p>
    `,
    1: `
        <h3>1 étoile</h3>
        <p>Attaque tombante active <strong>Retour de Zeke</strong>.<br>
        Combo Tombante -> Retour = Dégâts <span class="stat-boost">+50%</span>.</p>
    `,
    2: `
        <h3>2 étoiles</h3>
        <p>Dégâts Ténèbres <span class="stat-boost">+10%</span>.<br></p>
    `,
    3: `
        <h3>3 étoiles</h3>
        <p>Tombante plus rapide + [Amélioré] immédiat.<br>
        Combo Tombante -> Retour = CD Avènement -2s.</p>
    `,
    4: `
        <h3>4 étoiles</h3>
        <p>CD Avènement de Zeke <span class="stat-boost">-20%</span>.<br></p>
    `,
    5: `
        <h3>5 étoiles</h3>
        <p>Combo complet = [Amélioré] boosté + <span class="buff">[Foudre noire]</span>.<br>
        [Foudre noire] : Dégâts <span class="stat-boost">+80%</span>, Crit <span class="stat-boost">+20%</span> (3s).</p>
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