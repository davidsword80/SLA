/* ==========================================
   LOGIQUE PERSONNAGE (Lame Fantôme)
   ========================================== */
const charStarsContainer = document.getElementById('char-stars-container');
const charStars = charStarsContainer.querySelectorAll('.star');
const charMessage = document.getElementById('char-message');
const toggleBtn = document.getElementById('toggleBtn');

let charCurrentLevel = 0;
let isSummaryMode = false;

// --- TEXTE COMPLET ---
const charFullData = {
    0: `
        <h3>Passif :</h3>
        <p>L'effet <span class="buff">[Projection]</span> est activé lorsque l'utilisateur arrive dans le niveau.<br>
        L'effet <span class="buff">[Lumina]</span> s'active lorsque l'utilisateur est équipé d'armes de l'élément Lumière.<br>
        Après l'utilisation de la compétence <strong>Entaille spirituelle fantôme</strong>, celle-ci devient <strong>Entaille enchaînée fantôme</strong>.<br></p>
        
        <div class="detail-box">
            <h4><span class="buff">[Entaille enchaînée fantôme]</span></h4>
            <p>Lance rapidement une lame d'énergie sur l'ennemi.<br>
            Dégâts et Consommation de PM : identiques à ceux de la compétence <strong>Entaille spirituelle fantôme</strong>.<br>
            Lance une lame d'énergie à haute vélocité sur l'ennemi. Peut être utilisée jusqu'à 3 fois.<br>
            La compétence redevient <strong>Entaille spirituelle fantôme</strong> après un certain temps ou après avoir été utilisée le nombre maximum de fois possible.</p>
        </div>

        <div class="detail-box">
            <h4><span class="buff">[Projection]</span></h4>
            <p>Augmente l'Attaque de <span class="stat-boost">5 %</span>.<br>
            Augmente la Vitesse de <span class="stat-boost">5 %</span>.<br>
            Durée : illimitée.</p>
        </div>

        <div class="detail-box">
            <h4><span class="buff">[Lumina]</span></h4>
            <p>Augmente les dégâts de lumière de <span class="stat-boost">5 %</span>.<br>
            Augmente les Dégâts de coup critique de <span class="stat-boost">10 %</span>.<br>
            Durée : illimitée.</p>
        </div>
    `,
    1: `
        <h3>1 étoile :</h3>
        <p>Lorsque la compétence <strong>Entaille spirituelle fantôme</strong> porte un Coup critique, le nombre d'utilisations de la compétence <strong>Entaille enchaînée fantôme</strong> augmente de 2 (Entaille enchaînée fantôme peut ainsi être utilisée jusqu'à 5 fois).<br>
        L'utilisation de la compétence <strong>Entaille spirituelle fantôme</strong> active <span class="buff">[Écho de lumière]</span>.<br>
        L'utilisateur reçoit <span class="buff">[Super armure]</span> lors de l'utilisation de la compétence <strong>Entaille enchaînée fantôme</strong>.<br></p>

        <div class="detail-box">
            <h4><span class="buff">[Écho de lumière]</span></h4>
            <p>Augmente le Taux de coup critique de <span class="stat-boost">5 %</span>.<br>
            Augmente les Dégâts de coup critique de <span class="stat-boost">10 %</span>.<br>
            Durée : 7 seconde(s).</p>
        </div>
    `,
    2: `
        <h3>2 étoiles :</h3>
        <p>Augmente les dégâts de lumière de <span class="stat-boost">10 %</span>.<br></p>
    `,
    3: `
        <h3>3 étoiles :</h3>
        <p>L'utilisation de la compétence <strong>Entaille spirituelle fantôme</strong> active l'effet <span class="buff">[Fantôme]</span>.<br>
        L'effet <span class="buff">[Projection]</span> est amélioré.<br></p>

        <div class="detail-box">
            <h4><span class="buff">[Fantôme]</span></h4>
            <p>Augmente les dégâts de la compétence <strong>Entaille enchaînée fantôme</strong> de <span class="stat-boost">100 %</span>.<br>
            Lorsque les dégâts subis représentent 5 % des PV max de l'utilisateur ou plus, l'effet <span class="buff">[Camouflage]</span> est activé pendant 4.5 seconde(s).<br>
            Durée : 4.5 seconde(s).</p>
        </div>

        <div class="detail-box">
            <h4>Amélioration <span class="buff">[Projection]</span></h4>
            <p>Augmente l'Attaque de <span class="stat-boost">10 %</span>.<br>
            Augmente la Vitesse de <span class="stat-boost">10 %</span>.<br>
            Durée : illimitée.</p>
        </div>
    `,
    4: `
        <h3>4 étoiles :</h3>
        <p>Le temps de rechargement de la compétence <strong>Entaille spirituelle fantôme</strong> diminue de <span class="stat-boost">20 %</span>.<br></p>
    `,
    5: `
        <h3>5 étoiles :</h3>
        <p>Si les PM de l'utilisateur sont à 50 % ou moins, sa Consommation de PM diminue de <span class="stat-boost">25 %</span>.<br>
        L'effet <span class="buff">[Écho de lumière]</span> est amélioré.<br>
        Chaque fois que la compétence <strong>Entaille spirituelle fantôme</strong> est utilisée, les dégâts de la compétence <strong>Entaille enchaînée fantôme</strong> augmentent de <span class="stat-boost">25 %</span> (cumulable jusqu'à 10 fois).<br></p>

        <div class="detail-box">
            <h4>Amélioration <span class="buff">[Écho de lumière]</span></h4>
            <p>Augmente le Taux de coup critique de <span class="stat-boost">10 %</span>.<br>
            Augmente les Dégâts de coup critique de <span class="stat-boost">20 %</span>.<br>
            Augmente les dégâts infligés de <span class="stat-boost">10 %</span>.<br>
            Durée : 7 seconde(s).</p>
        </div>
    `
};

// --- RÉSUMÉ (COURT) ---
const charSummaryData = {
    0: `
        <h3>Passif : Lame Spirituelle</h3>
        <p>Entrée : <span class="buff">[Projection]</span> (Atk/Vitesse +5%).<br>
        Arme Lumière : <span class="buff">[Lumina]</span> (Dégâts Lumière +5%, Crit Dmg +10%).<br>
        Entaille spirituelle -> <strong>Entaille enchaînée</strong> (3 utilisations).</p>
    `,
    1: `
        <h3>1 étoile</h3>
        <p>Critique sur Entaille spirituelle = +2 utilisations Enchaînée (Max 5).<br>
        Active <span class="buff">[Écho de lumière]</span> (Crit Rate +5%, Crit Dmg +10%).<br>
        Super armure sur Entaille enchaînée.</p>
    `,
    2: `
        <h3>2 étoiles</h3>
        <p>Dégâts Lumière <span class="stat-boost">+10%</span>.<br></p>
    `,
    3: `
        <h3>3 étoiles</h3>
        <p>Entaille spirituelle active <span class="buff">[Fantôme]</span> (Dégâts Enchaînée +100%, Camouflage si dégâts subis).<br>
        Améliore <span class="buff">[Projection]</span> (Atk/Vitesse +10%).</p>
    `,
    4: `
        <h3>4 étoiles</h3>
        <p>CD Entaille spirituelle <span class="stat-boost">-20%</span>.<br></p>
    `,
    5: `
        <h3>5 étoiles</h3>
        <p>PM < 50% = Conso PM -25%.<br>
        Stack Dégâts Enchaînée (+25%/stack).<br>
        Améliore <span class="buff">[Écho]</span> (Crit Rate 10%, Crit Dmg 20%, Dégâts 10%).</p>
    `
};

// --- EVENTS PERSONNAGE ---
renderCharContent();

toggleBtn.addEventListener('click', function() {
    isSummaryMode = !isSummaryMode;
    this.textContent = isSummaryMode ? "Texte Complet" : "Mode Résumé";
    this.classList.toggle('active', isSummaryMode);
    renderCharContent();
});

charStars.forEach(star => {
    star.addEventListener('click', function () {
        const clickedValue = parseInt(this.getAttribute('data-value'));
        
        if (clickedValue === charCurrentLevel) {
            charCurrentLevel = clickedValue - 1;
        } else {
            charCurrentLevel = clickedValue;
        }
        
        updateCharStars(charCurrentLevel);
        renderCharContent();
    });
});

function updateCharStars(level) {
    charStars.forEach(star => {
        const starValue = parseInt(star.getAttribute('data-value'));
        star.classList.toggle('filled', starValue <= level);
    });
}

function renderCharContent() {
    const dataSource = isSummaryMode ? charSummaryData : charFullData;
    charMessage.innerHTML = dataSource[charCurrentLevel];
}