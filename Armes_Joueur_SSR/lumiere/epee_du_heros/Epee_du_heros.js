/* ==========================================
   LOGIQUE ARME (Épée du héros)
   ========================================== */
const charStarsContainer = document.getElementById('char-stars-container');
const charStars = charStarsContainer.querySelectorAll('.star');
const charMessage = document.getElementById('char-message');
const toggleBtn = document.getElementById('toggleBtn');

let charCurrentLevel = 0;
let isSummaryMode = false;

// --- TEXTE COMPLET (Basé sur passifarme.txt) ---
const charFullData = {
    0: `
        <h3>Passif :</h3>
        <p>L'effet <span class="buff">[Détermination inébranlable]</span> s'active lorsque l'utilisateur arrive dans un niveau.<br>
        Lorsque la compétence <strong>Épée porte-paix</strong> touche sa cible, les dégâts de compétence d'arme de l'élément Lumière augmentent de <span class="stat-boost">45 %</span> pendant 15 seconde(s).</p>
        
        <div class="detail-box">
            <h4><span class="buff">[Détermination inébranlable]</span></h4>
            <p>Augmente les dégâts de lumière de <span class="stat-boost">25 %</span>.<br>
            Réduit la Consommation de mana pour les compétences de <span class="stat-boost">20 %</span>.<br>
            Durée : illimitée.</p>
        </div>
        
    `,
    1: `
        <h3>1 étoile :</h3>
        <p>Lorsque l'utilisateur arrive dans le niveau, l'effet <span class="buff">[Perception extraordinaire]</span> s'active.</p>
        <div class="detail-box">
            <h4><span class="buff">[Perception extraordinaire]</span></h4>
            <p>Augmente la Précision de <span class="stat-boost">5 %</span>.<br>
            Augmente le Taux de coup critique de <span class="stat-boost">5 %</span>.</p>
            <p>Augmente les Dégâts de coup critique de <span class="stat-boost">60 %</span>.<br>
            Durée : illimitée.</p>
        </div>
    `,
    2: `
        <h3>2 étoiles :</h3>
        <p>Augmente les dégâts de lumière de <span class="stat-boost">10 %</span>.</p>
    `,
    3: `
        <h3>3 étoiles :</h3>
        <p>L'effet <span class="buff">[Volonté du héros]</span> s'active lorsque l'utilisateur arrive dans un niveau.<br>
        Lorsque la compétence <strong>Épée porte-paix</strong> touche une cible bénéficiant d'un <strong>[Bouclier]</strong>, les dégâts qu'elle inflige augmentent de <span class="stat-boost">20 %</span> pendant 15 seconde(s).</p>
        <div class="detail-box">
            <h4><span class="buff">[Volonté du héros]</span></h4>
            <p>Lorsque la compétence <strong>Épée porte-paix</strong> touche sa cible, elle inflige des dégâts de <strong>Bris lourds</strong>.<br>
            L'utilisateur bénéficie de <span class="buff">[Super armure]</span> lors de l'utilisation de la compétence.<br>
            Durée : illimitée.</p>
        </div>
    `,
    4: `
        <h3>4 étoiles :</h3>
        <p>Diminue le temps de rechargement de la compétence <strong>Épée porte-paix</strong> de <span class="stat-boost">20 %</span>.</p>
    `,
    5: `
        <h3>5 étoiles :</h3>
        <p>L'utilisation de la compétence <strong>Épée porte-paix</strong> ralentit le temps pendant 2 seconde(s) et active l'effet <span class="buff">[Épée démono-régicide]</span>.<br>
        <div class="detail-box">
            <h4><span class="buff">[Épée démono-régicide]</span></h4>
            <p>Augmente les dégâts infligés aux boss de <span class="stat-boost">50 %</span>.<br>
            Augmente les dégâts de lumière de <span class="stat-boost">35 %</span>.</p>
            Augmente les dégâts de compétence ultime de <span class="stat-boost">50 %</span> pendant 8 seconde(s).</p>
        </div>
    `
};

// --- RÉSUMÉ ---
const charSummaryData = {
    0: `
        <h3>Passif : Détermination</h3>
        <p>Entrée : <span class="buff">[Détermination]</span> (Dégâts Lumière +25%, Mana -20%).<br>
        Touche Épée porte-paix : Dégâts arme Lumière +45%.<br>
        Permanent : Dégâts Critiques +60%.</p>
    `,
    1: `
        <h3>1 étoile</h3>
        <p>Entrée : <span class="buff">[Perception]</span> (Précision +5%, Taux Crit +5%).</p>
    `,
    2: `
        <h3>2 étoiles</h3>
        <p>Dégâts Lumière <span class="stat-boost">+10%</span>.</p>
    `,
    3: `
        <h3>3 étoiles</h3>
        <p>Entrée : <span class="buff">[Volonté]</span> (Bris lourds et Super armure sur Épée porte-paix).<br>
        Bonus Bouclier : Dégâts +20% contre ennemis protégés.</p>
    `,
    4: `
        <h3>4 étoiles</h3>
        <p>CD Épée porte-paix <span class="stat-boost">-20%</span>.</p>
    `,
    5: `
        <h3>5 étoiles</h3>
        <p>Épée porte-paix : Slow-mo (2s) et <span class="buff">[Démono-régicide]</span> (Dégâts Boss +50%, Lumière +35%).<br>
        Ultime : Dégâts +50% (8s).</p>
    `
};

// --- LOGIQUE D'AFFICHAGE ---
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
        charCurrentLevel = (clickedValue === charCurrentLevel) ? clickedValue - 1 : clickedValue;
        updateCharStars(charCurrentLevel);
        renderCharContent();
    });
});