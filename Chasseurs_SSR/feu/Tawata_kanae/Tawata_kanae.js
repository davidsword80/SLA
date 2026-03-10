/* ==========================================
   LOGIQUE PERSONNAGE (Tawata Kanae)
   ========================================== */
const charStarsContainer = document.getElementById('char-stars-container');
const charStars = charStarsContainer.querySelectorAll('.star');
const charMessage = document.getElementById('char-message');
const toggleBtn = document.getElementById('toggleBtn');

let charCurrentLevel = 0;
let isSummaryMode = false;

// --- TEXTE COMPLET (ORIGINAL) ---
const charFullData = {
    0: `
        <h3>Passif :</h3>
        <p>L'utilisatrice reçoit l'effet <span class="buff pourpre">[Pourpre]</span> lorsqu'elle utilise Munechika.<br>
        L'utilisatrice reçoit l'effet <span class="buff ecarlate">[Écarlate]</span> lorsqu'elle utilise son attaque de noyau améliorée.<br>
        Lorsque les effets <span class="buff pourpre">[Pourpre]</span>, <span class="buff ecarlate">[Écarlate]</span> ou <span class="buff feu">[Feu]</span> sont appliqués, les compétences Kamaitachi de l'utilisatrice deviennent sa compétence ultime.<br>
        Les dégâts infligés par l'utilisatrice aux cibles en état de [Bris] augmentent de <span class="stat-boost">24 %</span>.</p>
        
        <div class="detail-box">
            <h4><span class="buff pourpre">[Pourpre]</span></h4>
            <p>Lorsqu'elle utilise Kamaitachi, l'utilisatrice active automatiquement son attaque de noyau améliorée, aux dégâts bonus équivalents à 50% des dégâts infligés par la compétence.</p>
            <small>Durée: illimitée</small>
        </div>
        <div class="detail-box">
            <h4><span class="buff ecarlate">[Écarlate]</span></h4>
            <p>Lors de l'utilisation de Kamaitachi, l'effet <span class="buff feu">[Feu]</span> est activé.</p>
            <small>Durée: illimitée</small>
        </div>
        <div class="detail-box">
            <h4><span class="buff feu">[Feu]</span></h4>
            <p>Augmente les dégâts de Tsuchigumo de 70%.<br>
            L'utilisatrice reçoit [Super armure] lors de l'utilisation de Kamaitachi.<br>
            L'utilisation de Kamaitachi supprime les effets [Pourpre], [Écarlate] et [Feu].</p>
            <small>Durée: illimitée</small>
        </div>
    `,
    1: `
        <h3>1 étoile :</h3>
        <p>Lorsqu'un ennemi meurt près de l'utilisatrice, celle-ci reçoit 1 cumuls de l'effet <span class="buff instinct">[Instinct]</span>. <br>
        Lorsqu'elle met une cible en état de [Bris], elle reçoit 5 cumuls de l'effet <span class="buff instinct">[Instinct]</span>.</p>
        <div class="detail-box">
            <h4><span class="buff instinct">[Instinct]</span></h4>
            <p>Augmente le Taux de coup critique de l'utilisatrice de 1%.<br>
            Lorsque l'effet [Instinct] se cumule 10 fois, il devient l'effet <span class="buff sixieme">[Sixième sens]</span>.</p>
            <small>Durée: illimitée (cumulable jusqu'à 10 fois)</small>
        </div>
        <div class="detail-box">
            <h4><span class="buff sixieme">[Sixième sens]</span></h4>
            <p>Augmente le Taux de coup critique de 20%.<br>
            Si les PM de l'utilisatrice tombent à 20% ou moins, sa Consommation de PM diminue de 40 %.</p>
            <small>Durée: illimitée</small>
        </div>
    `,
    2: `
        <h3>2 étoiles :</h3>
        <p>Les dégâts de coup critique de l'utilisatrice augmentent de <span class="stat-boost">16%</span>.</p>
    `,
    3: `
        <h3>3 étoiles :</h3>
        <p>Lors de l'utilisation de Munechika, l'utilisatrice reçoit l'effet [Super armure] pendant 5 seconde(s).<br>
        L'utilisation de Feu: Kamaitachi réduit le temps de rechargement de Munechika de 5 seconde(s).</p>
    `,
    4: `
        <h3>4 étoiles :</h3>
        <p>Les dégâts de feu de Tawata Kanae augmentent de <span class="stat-boost">12%</span> par chasseur de l'élément Feu présent dans le groupe (cumulable jusqu'à 3 fois).</p>
    `,
    5: `
        <h3>5 étoiles :</h3>
        <p>Les effets <span class="buff instinct">[Instinct]</span> et <span class="buff sixieme">[Sixième sens]</span> sont améliorés.</p>
        <div class="detail-box">
            <h4><span class="buff instinct">[Instinct]</span></h4>
            <p>L'Attaque de l'utilisatrice augmente de 5%.<br>
            Le Taux de coup critique et les Dégâts de coup critique de l'utilisatrice augmentent de 1.5%.<br>
            Lorsque l'effet [Instinct] se cumule 10 fois, il devient l'effet <span class="buff sixieme">[Sixième sens]</span>.</p>
            <small>Durée: illimitée (cumulable jusqu'à 10 fois)</small>
        </div>
        <div class="detail-box">
            <h4><span class="buff sixieme">[Sixième sens]</span></h4>
            <p>Augmente l'Attaque de l'utilisatrice de 77%.<br>
            Augmente le Taux de coup critique et les Dégâts de coup critique de l'utilisatrice de 20%.<br>
            Si les PM de l'utilisatrice tombent à 30% ou moins, sa Consommation de PM diminue de 50%.</p>
            <small>Durée: illimitée</small>
        </div>
    `
};

// --- RÉSUMÉ (COURT) ---
const charSummaryData = {
    0: `
        <h3>Passif : Kunoichi</h3>
        <p>Reçoit <span class="buff pourpre">[Pourpre]</span> via Munechika et <span class="buff ecarlate">[Écarlate]</span> via Atq Noyau.<br>
        Kamaitachi devient Ultime si buffs actifs.<br>
        Dégâts sur [Bris] <span class="stat-boost">+24%</span>.</p>
        <div class="detail-box">
            <h4><span class="buff pourpre">[Pourpre]</span> / <span class="buff ecarlate">[Écarlate]</span></h4>
            <p>Active Atq Noyau (Bonus 50%) ou l'effet <span class="buff feu">[Feu]</span>.</p>
        </div>
        <div class="detail-box">
            <h4><span class="buff feu">[Feu]</span></h4>
            <p>Dégâts Tsuchigumo <span class="stat-boost">+70%</span> + [Super Armure]. Consomme les effets.</p>
        </div>
    `,
    1: `
        <h3>1 étoile</h3>
        <p>Mort ennemi = +1 <span class="buff instinct">[Instinct]</span>. État [Bris] = +5 <span class="buff instinct">[Instinct]</span>.</p>
        <div class="detail-box">
            <h4><span class="buff instinct">[Instinct]</span></h4>
            <p>Crit <span class="stat-boost">+1%</span> (Max 10). Devient [Sixième sens] à 10.</p>
        </div>
        <div class="detail-box">
            <h4><span class="buff sixieme">[Sixième sens]</span></h4>
            <p>Crit <span class="stat-boost">+20%</span>. Si PM ≤ 20%, Conso <span class="stat-boost">-40%</span>.</p>
        </div>
    `,
    2: `
        <h3>2 étoiles</h3>
        <p>Dégâts Critique <span class="stat-boost">+16%</span>.</p>
    `,
    3: `
        <h3>3 étoiles</h3>
        <p>Munechika : <span class="buff">[Super armure]</span> (5s).<br>
        Kamaitachi : CD Munechika <span class="stat-boost">-5s</span>.</p>
    `,
    4: `
        <h3>4 étoiles</h3>
        <p>Dégâts Feu <span class="stat-boost">+12%</span> par allié Feu (Max 3).</p>
    `,
    5: `
        <h3>5 étoiles</h3>
        <p>Amélioration Instinct et Sixième sens.</p>
        <div class="detail-box">
            <h4><span class="buff instinct">[Instinct]</span></h4>
            <p>Atq <span class="stat-boost">+5%</span>. Crit/DmgCrit <span class="stat-boost">+1.5%</span>.</p>
        </div>
        <div class="detail-box">
            <h4><span class="buff sixieme">[Sixième sens]</span></h4>
            <p>Atq <span class="stat-boost">+77%</span>. Crit/DmgCrit <span class="stat-boost">+20%</span>. Si PM ≤ 30%, Conso <span class="stat-boost">-50%</span>.</p>
        </div>
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


/* ==========================================
   LOGIQUE ARME (La Voix du Héros)
   ========================================== */
const weaponStarsContainer = document.getElementById('weapon-stars-container');
const weaponStars = weaponStarsContainer.querySelectorAll('.star');
const weaponMessage = document.getElementById('weapon-message');

let weaponCurrentLevel = 0;

// Données Arme (Texte formaté)
const weaponData = {
    0: `
        <h3>Avancement 0 :</h3>
        <p>L'Attaque de l'utilisatrice augmente de <span class="stat-boost">2%</span>.<br>
        Le Taux de coup critique de l'utilisatrice augmente de <span class="stat-boost">10%</span>.</p>
    `,
    1: `
        <h3>Avancement 5 étoiles :</h3>
        <p>L'Attaque de l'utilisatrice augmente de <span class="stat-boost">12%</span>.<br>
        Le Taux de coup critique de l'utilisatrice augmente de <span class="stat-boost">20%</span>.</p>
    `,
    2: `
        <h3>Avancement 10 étoiles :</h3>
        <p>Augmente l'Attaque, la Défense et les PV de l'utilisateur de <span class="stat-boost">15%</span>.</p>
    `
};

// Initialisation
displayWeaponMessage(0);

weaponStars.forEach(star => {
    star.addEventListener('click', function () {
        const clickedValue = parseInt(this.getAttribute('data-value'));

        // Logique de toggle identique au personnage
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
        star.classList.toggle('filled', starValue <= level);
    });
}

function displayWeaponMessage(level) {
    weaponMessage.innerHTML = weaponData[level];
}