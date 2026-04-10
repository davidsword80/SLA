const stars = document.querySelectorAll('.star');
const message = document.getElementById('message');
let currentLevel = 0;

// CONTENU HTML : Passif de base (0 étoile)
// Note : J'ai simplifié la structure HTML ici pour coller au nouveau design
const defaultPassiveHTML = `
    <h3 style="margin-top:0; color:#fff; border-bottom: 1px solid #444; padding-bottom:5px;">Passif : Kunoichi</h3>
    <p>
        L'utilisatrice reçoit l'effet <span class="buff pourpre">[Pourpre]</span> lorsqu'elle utilise Munechika.<br>
        L'utilisatrice reçoit l'effet <span class="buff ecarlate">[Écarlate]</span> lorsqu'elle utilise son attaque de noyau améliorée.<br>
        Lorsque les effets <span class="buff pourpre">[Pourpre]</span>, <span class="buff ecarlate">[Écarlate]</span> ou <span class="buff feu">[Feu]</span> sont appliqués, les compétences Kamaitachi de l'utilisatrice deviennent sa compétence ultime.<br>
        Les dégâts infligés par l'utilisatrice aux cibles en état de <span class="buff">[Bris]</span> augmentent de 24 %.
    </p>

    <div class="detail-box">
        <h4><span class="buff pourpre">[Pourpre]</span></h4>
        <p>Lorsqu'elle utilise Kamaitachi, l'utilisatrice active automatiquement son attaque de noyau améliorée (Bonus Dégâts : 50%).</p>
        <small>Durée: illimitée</small>
    </div>
    <div class="detail-box">
        <h4><span class="buff ecarlate">[Écarlate]</span></h4>
        <p>Lors de l'utilisation de Kamaitachi, l'effet <span class="buff feu">[Feu]</span> est activé.</p>
        <small>Durée: illimitée</small>
    </div>
    <div class="detail-box">
        <h4><span class="buff feu">[Feu]</span></h4>
        <p>
            Dégâts Tsuchigumo <span class="stat-boost">+70%</span>.<br>
            Accorde <span class="buff">[Super armure]</span>.<br>
            Utiliser Kamaitachi consomme les effets.
        </p>
        <small>Durée: illimitée</small>
    </div>
`;

const messages = [
    // 1 Étoile
    `
    <h3 style="margin-top:0; color:#fff; border-bottom: 1px solid #444; padding-bottom:5px;">Évolution 1 étoile</h3>
    <p>
        Mort d'un ennemi proche : +1 cumul <span class="buff instinct">[Instinct]</span>. <br>
        Infliger l'état <span class="buff">[Bris]</span> : +5 cumuls <span class="buff instinct">[Instinct]</span>.
    </p>
    <div class="detail-box">
        <h4><span class="buff instinct">[Instinct]</span></h4>
        <p>Taux critique <span class="stat-boost">+1%</span> (Max 10 fois).<br>À 10 cumuls, devient [Sixième sens].</p>
    </div>
    <div class="detail-box">
        <h4><span class="buff sixieme">[Sixième sens]</span></h4>
        <p>Taux critique <span class="stat-boost">+20%</span>.<br>Si PM ≤ 20%, Conso PM -40%.</p>
    </div>
    `,

    // 2 Étoiles
    `
    <h3 style="margin-top:0; color:#fff; border-bottom: 1px solid #444; padding-bottom:5px;">Évolution 2 étoiles</h3>
    <p>Les dégâts de coup critique de l'utilisatrice augmentent de <span class="stat-boost">16%</span>.</p>
    `,

    // 3 Étoiles
    `
    <h3 style="margin-top:0; color:#fff; border-bottom: 1px solid #444; padding-bottom:5px;">Évolution 3 étoiles</h3>
    <p>
        Utilisation de <strong>Munechika</strong> : <span class="buff">[Super armure]</span> (<span class="stat-boost">5s</span>).<br>
        Utilisation de <strong>Feu: Kamaitachi</strong> : CD Munechika réduit de <span class="stat-boost">5s</span>.
    </p>
    `,

    // 4 Étoiles
    `
    <h3 style="margin-top:0; color:#fff; border-bottom: 1px solid #444; padding-bottom:5px;">Évolution 4 étoiles</h3>
    <p>Dégâts de feu <span class="stat-boost">+12%</span> par chasseur Feu dans le groupe (Max 3 fois).</p>
    `,

    // 5 Étoiles
    `
    <h3 style="margin-top:0; color:#fff; border-bottom: 1px solid #444; padding-bottom:5px;">Évolution 5 étoiles</h3>
    <p>Les effets <span class="buff instinct">[Instinct]</span> et <span class="buff sixieme">[Sixième sens]</span> sont améliorés.</p>
    <div class="detail-box">
        <h4><span class="buff instinct">[Instinct]</span></h4>
        <p>Attaque <span class="stat-boost">+5%</span>. Taux/Dégâts Crit <span class="stat-boost">+1.5%</span>.<br>(Max 10 cumuls).</p>
    </div>
    <div class="detail-box">
        <h4><span class="buff sixieme">[Sixième sens]</span></h4>
        <p>Attaque <span class="stat-boost">+77%</span>. Taux/Dégâts Crit <span class="stat-boost">+20%</span>.<br>Si PM ≤ 30%, Conso PM -50%.</p>
    </div>
    `
];

// --- LOGIQUE IDENTIQUE AU CODE PRÉCÉDENT ---

// Initialisation au chargement de la page
window.onload = function() {
    message.innerHTML = defaultPassiveHTML;
};

stars.forEach(star => {
    star.addEventListener('click', function () {
        const clickedValue = parseInt(this.getAttribute('data-value'));

        if (clickedValue === currentLevel) {
            currentLevel = clickedValue - 1;
        } else {
            currentLevel = clickedValue;
        }

        updateStars(currentLevel);
        displayMessage(currentLevel);
    });
});

function updateStars(level) {
    stars.forEach(star => {
        const starValue = parseInt(star.getAttribute('data-value'));
        if (starValue <= level) {
            star.classList.add('filled');
        } else {
            star.classList.remove('filled');
        }
    });
}

function displayMessage(level) {
    if (level === 0) {
        message.innerHTML = defaultPassiveHTML;
    } else {
        message.innerHTML = messages[level - 1];
    }
}