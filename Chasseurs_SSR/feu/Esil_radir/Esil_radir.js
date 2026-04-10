/* ==========================================
   LOGIQUE PERSONNAGE (Esil Radir) - Inchangée
   ========================================== */
const charStarsContainer = document.getElementById('char-stars-container');
const charStars = charStarsContainer.querySelectorAll('.star');
const charMessage = document.getElementById('char-message');
const toggleBtn = document.getElementById('toggleBtn');

let charCurrentLevel = 0;
let isSummaryMode = false;

// Données Personnage (Texte Complet)
const charFullData = {
    0: `<h3>Passif :</h3><p>Lorsqu'Esil Radir parvient à mettre une cible en état de <span class="buff">[Bris]</span>, la durée de l'état de [Bris] augmente de <span class="stat-boost">3 seconde(s)</span>.<br>Lorsqu'elle utilise <strong>Impatience de la mort</strong> ou qu'<strong>Évasion extrême</strong> est activée, <strong>Jet de lance</strong> s'active.<br>Lorsqu'elle utilise <strong>Pics transperçants</strong> ou <strong>Gloire à la chaîne</strong>, elle reçoit l'effet <span class="buff pourpre">[Jet de lance amélioré]</span>.<br>Lorsque la compétence <strong>Jet de lance</strong> est activée, son efficacité augmente en fonction du nombre de cumuls de [Jet de lance amélioré] appliqués.<br>L'efficacité de [Bris] dans l'[Atelier de la lumière brillante] augmente de <span class="stat-boost">24 %</span>.</p><div class="detail-box"><h4>[Jet de lance]</h4><p>Esil projette une lance qui transperce les armures magiques (Dégâts: 800% de l'Attaque).<br>Inflige des dégâts de [Bris] légers et active l'effet <span class="buff ecarlate">[Proie]</span> (Max 5 fois).</p></div><div class="detail-box"><h4><span class="buff pourpre">[Jet de lance amélioré]</span></h4><p>Augmente les dégâts de Jet de lance et l'efficacité de [Bris] de <span class="stat-boost">80%</span> (cumulable 5 fois).<br>Supprimé après l'utilisation de Jet de lance.</p></div><div class="detail-box"><h4><span class="buff ecarlate">[Proie]</span></h4><p>Si la cible passe en état de [Bris], elle reçoit <span class="buff feu">[Mort aux faibles]</span> selon le nombre de cumuls de [Proie].<br>Durée: 60s (cumulable 50 fois).</p></div><div class="detail-box"><h4><span class="buff feu">[Mort aux faibles]</span></h4><p>Augmente les dégâts de feu subis de <span class="stat-boost">0.3%</span>.<br>Augmente les dégâts subis de <span class="stat-boost">0.3%</span>.<br>Durée: 60s (cumulable 50 fois).</p></div>`,
    1: `<h3>1 étoile :</h3><p>Tant que les effets de <strong>Victoire annoncée</strong> sont actifs, les effets de <strong>Jet de lance</strong> sont améliorés.<br>Les dégâts de Jet de lance augmentent de <span class="stat-boost">100 %</span>. <br>Lorsque Jet de lance touche sa cible, l'effet <span class="buff ecarlate">[Proie]</span> est appliqué 2 fois.<br>L'effet [Proie] déclenché par Jet de lance ne peut s'appliquer que 10 fois au maximum.</p>`,
    2: `<h3>2 étoiles :</h3><p>L'Attaque des membres de l'équipe augmente de <span class="stat-boost">3%</span> par membre de l'équipe de l'élément feu présent dans le groupe (cumulable jusqu'à 3 fois).</p>`,
    3: `<h3>3 étoiles :</h3><p>Au début du niveau, l'utilisatrice commence le combat avec sa jauge de puissance à <span class="stat-boost">100%</span>.<br>Lorsque Jet de lance touche sa cible, la jauge de puissance de l'utilisatrice se remplit de <span class="stat-boost">1%</span> et le temps de rechargement de la compétence <strong>Victoire annoncée</strong> diminue de 1 seconde (CD: 1s).<br>Lorsque Victoire annoncée touche une cible dont la jauge de [bris] est à 10% ou moins, la cible est instantanément mise en état de <span class="buff">[Bris]</span>.</p>`,
    4: `<h3>4 étoiles :</h3><p>La Pénétration de défense des membres de l'équipe augmente de <span class="stat-boost">4%</span> par membre de l'équipe de l'élément feu présent dans le groupe (cumulable jusqu'à 3 fois).</p>`,
    5: `<h3>5 étoiles :</h3><p>Lors de l'utilisation de la compétence <strong>Impatience de la mort améliorée</strong>, la compétence <strong>Jet de lance</strong> est activée une fois de plus.<br>Lorsque Jet de lance touche une cible en état de [Bris] dans les 10s, l'effet <span class="buff feu">[Mort aux faibles]</span> est déclenché au lieu de l'effet [Proie].</p><div class="detail-box"><h4><span class="buff feu">[Mort aux faibles] (Amélioré)</span></h4><p>Augmente les dégâts de feu subis de <span class="stat-boost">0.3%</span>.<br>Augmente les dégâts subis de <span class="stat-boost">0.3%</span>.<br>Durée: 90s (cumulable 100 fois).</p></div>`
};

// Données Personnage (Résumé)
const charSummaryData = {
    0: `<h3>Passif : Esil</h3><p>Met en [Bris] = durée [Bris] <span class="stat-boost">+3s</span>.<br>Actions spécifiques activent <strong>Jet de lance</strong>.<br><strong>Jet de lance</strong> inflige [Bris] et applique <span class="buff ecarlate">[Proie]</span>.</p><div class="detail-box"><h4><span class="buff pourpre">[Jet de lance amélioré]</span></h4><p>Dégâts et efficacité [Bris] <span class="stat-boost">+80%</span> (Max 5).</p></div><div class="detail-box"><h4><span class="buff ecarlate">[Proie]</span> / <span class="buff feu">[Mort aux faibles]</span></h4><p>Si cible [Bris], convertit [Proie] en [Mort aux faibles] : Dégâts subis/Feu <span class="stat-boost">+0.3%</span> par cumul.</p></div>`,
    1: `<h3>1 étoile</h3><p>Sous <strong>Victoire annoncée</strong> : Dégâts Jet de lance <span class="stat-boost">+100%</span>.<br>Applique <span class="buff ecarlate">[Proie]</span> x2 (Max 10 cumuls).</p>`,
    2: `<h3>2 étoiles</h3><p>Attaque équipe <span class="stat-boost">+3%</span> par allié Feu (Max 3).</p>`,
    3: `<h3>3 étoiles</h3><p>Début combat : Jauge Puissance <span class="stat-boost">100%</span>.<br>Jet de lance : Puissance +1%, CD Victoire annoncée -1s.<br>Victoire annoncée : [Bris] instantané si jauge ≤ 10%.</p>`,
    4: `<h3>4 étoiles</h3><p>Pénétration Défense équipe <span class="stat-boost">+4%</span> par allié Feu (Max 3).</p>`,
    5: `<h3>5 étoiles</h3><p>Impatience de la mort améliorée active Jet de lance supplémentaire.<br>Sur cible [Bris] : Applique directement <span class="buff feu">[Mort aux faibles]</span> (Max 100 cumuls, durée 90s).</p>`
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


/* ==========================================
   LOGIQUE ARME (Mort Glorieuse) - CORRIGÉE
   ========================================== */
const weaponStarsContainer = document.getElementById('weapon-stars-container');
const weaponStars = weaponStarsContainer.querySelectorAll('.star');
const weaponMessage = document.getElementById('weapon-message');

// Ajout d'une variable d'état pour l'arme (comme pour le perso)
let weaponCurrentLevel = 0;

const weaponData = {
    0: `<h3>Avancement 0 :</h3><p>L'Attaque de l'utilisatrice augmente de <span class="stat-boost">4%</span>.<br>Augmente l'Attaque supplémentaire du membre de l'équipe au Taux de coup critique le plus élevé de <span class="stat-boost">300 pts</span> par tranche de 1000 pts d'Attaque supplémentaire d'Esil Radir (Max <span class="stat-boost">600</span>).</p>`,
    1: `<h3>Avancement 5 étoiles :</h3><p>L'Attaque de l'utilisatrice augmente de <span class="stat-boost">12%</span>.<br>Augmente l'Attaque supplémentaire du membre de l'équipe au Taux de coup critique le plus élevé de <span class="stat-boost">300 pts</span> par tranche de 1000 pts d'Attaque supplémentaire d'Esil Radir (Max <span class="stat-boost">2400</span>).</p>`,
    2: `<h3>Avancement 10 étoiles :</h3><p>Augmente l'Attaque, la Défense et les PV de l'utilisateur de <span class="stat-boost">15%</span>.</p>`
};

// Initialisation
updateWeaponStars(weaponCurrentLevel);
displayWeaponMessage(weaponCurrentLevel);

weaponStars.forEach(star => {
    star.addEventListener('click', function () {
        const clickedValue = parseInt(this.getAttribute('data-value'));

        // NOUVELLE LOGIQUE : Identique à celle du personnage
        // Si on clique sur l'étoile du niveau actuel, on désactive (niveau - 1)
        // Sinon, on active jusqu'à cette étoile.
        if (clickedValue === weaponCurrentLevel) {
            weaponCurrentLevel = clickedValue - 1;
        } else {
            weaponCurrentLevel = clickedValue;
        }
        
        updateWeaponStars(weaponCurrentLevel);
        displayWeaponMessage(weaponCurrentLevel);
    });
});

function updateWeaponStars(level) {
    weaponStars.forEach(star => {
        const starValue = parseInt(star.getAttribute('data-value'));
        // Remplit si la valeur est inférieure ou égale au niveau actuel
        star.classList.toggle('filled', starValue <= level);
    });
}

function displayWeaponMessage(level) {
    weaponMessage.innerHTML = weaponData[level];
}