/* ==========================================
   LOGIQUE ARME SSR (Porte-tempête)
   ========================================== */
const weaponStarsContainer = document.getElementById('weapon-stars-container');
const weaponStars = weaponStarsContainer.querySelectorAll('.star');
const weaponMessage = document.getElementById('weapon-message');
const toggleBtn = document.getElementById('toggleBtn');

let weaponCurrentLevel = 0;
let isSummaryMode = false;

// --- TEXTE COMPLET (Source: passif.txt) ---
const weaponFullData = {
    0: `
        <h3>Passif :</h3>
        <p><span class="buff">[Pouvoir scellé]</span> s'active en début de niveau.</p>
        <div class="detail-box">
            <h4><span class="buff">[Pouvoir scellé]</span></h4>
            <p>Lorsque Jinwoo utilise <strong>Tempête de grêle</strong>, aucun coup critique ne se déclenche, mais ses dégâts augmentent de <span class="stat-boost">120%</span>.<br>
            La Précision de Sung Jinwoo diminue de <span class="stat-boost">24%</span>.<br>
            L'Attaque et la Précision de Jinwoo augmentent de <span class="stat-boost">0.8%</span> par tranche de 10 point(s) de Force (jusqu'à <span class="stat-boost">24%</span>).<br>
            Si la Force de Sung Jinwoo est de 300 ou plus, l'effet devient <span class="buff">[Tempête éveillée]</span>.</p>
        </div>
        <div class="detail-box">
            <h4><span class="buff">[Tempête éveillée]</span></h4>
            <p>Lorsque <strong>Tempête de grêle</strong> touche sa cible, le tourbillon créé déclenche un effet qui attire les ennemis.<br>
            Lorsque Jinwoo utilise <strong>Tempête de grêle</strong>, il bénéficie de <span class="buff">[Super armure]</span> pendant 3 seconde(s).<br>
            Lorsque Jinwoo utilise <strong>Tempête de grêle</strong>, aucun coup critique ne se déclenche, mais ses dégâts augmentent de <span class="stat-boost">200%</span>.<br>
            Son Attaque augmente de <span class="stat-boost">30%</span>.<br>
            Sa Précision augmente de <span class="stat-boost">5%</span>.<br>
            La Vitesse d'attaque de Tempête de grêle, de l'attaque de base et de l'attaque de noyau de Porte-tempête augmente significativement.<br>
            Durée: illimitée</p>
        </div>
    `,
    1: `
        <h3>1 étoile :</h3>
        <p>Lorsque <strong>Tempête de grêle</strong> touche sa cible, <span class="buff">[Tempête menaçante]</span> s'active.</p>
        <div class="detail-box">
            <h4><span class="buff">[Tempête menaçante]</span></h4>
            <p>Lorsque la compétence de base de vent de l'utilisateur touche sa cible, elle lui applique l'effet <span class="buff">[Frappe tempête]</span>.<br>
            Durée: 4 seconde(s)</p>
        </div>
        <div class="detail-box">
            <h4><span class="buff">[Frappe tempête]</span></h4>
            <p>L'utilisateur inflige des dégâts équivalents à <span class="stat-boost">1600%</span> de l'Attaque (temps de rechargement: 0.5 seconde(s)).<br>
            Lorsque cet effet s'active, il déclenche <span class="buff">[Marque de la tempête]</span> sur la cible.</p>
        </div>
        <div class="detail-box">
            <h4><span class="buff">[Marque de la tempête]</span></h4>
            <p>Augmente les dégâts subis de <span class="stat-boost">5%</span>.<br>
            Augmente les dégâts de vent subis de <span class="stat-boost">5%</span>.<br>
            Durée: 10 seconde(s) (cumulable jusqu'à 2 fois)</p>
        </div>
    `,
    2: `
        <h3>2 étoiles :</h3>
        <p>Les dégâts élémentaires de vent de l'utilisateur augmentent de <span class="stat-boost">10%</span>.</p>
    `,
    3: `
        <h3>3 étoiles :</h3>
        <p>L'utilisation de <strong>Tempête de grêle</strong> diminue les dégâts subis par l'utilisateur de <span class="stat-boost">50%</span> pendant 3 seconde(s).</p>
        <p>Améliore l'effet <span class="buff">[Marque de la tempête]</span>.</p>
        <div class="detail-box">
            <h4><span class="buff">[Marque de la tempête]</span> (Amélioré)</h4>
            <p>Augmente les dégâts subis de <span class="stat-boost">10%</span>.<br>
            Augmente les dégâts de vent subis de <span class="stat-boost">15%</span>.<br>
            Durée: 20 seconde(s) (cumulable jusqu'à 2 fois)</p>
        </div>
    `,
    4: `
        <h3>4 étoiles :</h3>
        <p>Le temps de rechargement de la compétence <strong>Tempête de grêle</strong> diminue de <span class="stat-boost">20%</span>.</p>
    `,
    5: `
        <h3>5 étoiles :</h3>
        <p>L'effet <span class="buff">[Frappe tempête]</span> est amélioré.</p>
        <div class="detail-box">
            <h4><span class="buff">[Frappe tempête]</span> (Amélioré)</h4>
            <p>Inflige des dégâts équivalents à <span class="stat-boost">3200%</span> de l'Attaque de l'utilisateur (temps de rechargement: 0.5 seconde(s)).<br>
            Lorsque cet effet s'active, il déclenche <span class="buff">[Marque de la tempête]</span> sur la cible.<br>
            Lorsque cet effet s'active, Jinwoo récupère <span class="stat-boost">25 PM</span>.</p>
        </div>
        <div class="detail-box">
            <h4><span class="buff">[Marque de la tempête]</span></h4>
            <p>Augmente les dégâts subis de <span class="stat-boost">10%</span>.<br>
            Augmente les dégâts de vent subis de <span class="stat-boost">15%</span>.<br>
            Durée: 20 seconde(s) (cumulable jusqu'à 2 fois)</p>
        </div>
    `
};

// --- RÉSUMÉ ---
const weaponSummaryData = {
    0: `
        <h3>Passif : Force Brute</h3>
        <p>Tempête de grêle : Dégâts <span class="stat-boost">+120%</span> (ou <span class="stat-boost">+200%</span> si Force > 300).<br>
        Pas de critique possible, mais bonus massifs d'Attaque/Précision basés sur la Force.</p>
    `,
    1: `
        <h3>1 étoile : Frappe Tempête</h3>
        <p>Compétences Vent -> Frappe extra (<span class="stat-boost">1600%</span> Atk) + Debuff (<span class="stat-boost">+5%</span> dégâts subis).</p>
    `,
    2: `
        <h3>2 étoiles : Vent</h3>
        <p>Dégâts Vent <span class="stat-boost">+10%</span>.</p>
    `,
    3: `
        <h3>3 étoiles : Protection & Marque</h3>
        <p>Réduction dégâts <span class="stat-boost">50%</span> après Tempête.<br>
        Debuff Marque amélioré (<span class="stat-boost">+10%</span> subis, <span class="stat-boost">+15%</span> vent).</p>
    `,
    4: `
        <h3>4 étoiles : Rapidité</h3>
        <p>CD Tempête de grêle <span class="stat-boost">-20%</span>.</p>
    `,
    5: `
        <h3>5 étoiles : Éveil PM</h3>
        <p>Dégâts Frappe doublés (<span class="stat-boost">3200%</span>).<br>
        Récupère <span class="stat-boost">25 PM</span> par frappe.</p>
    `
};

// --- EVENTS & LOGIQUE ---

// Fonction d'affichage
function renderWeaponContent() {
    const dataSource = isSummaryMode ? weaponSummaryData : weaponFullData;
    // Sécurité si le niveau n'existe pas
    weaponMessage.innerHTML = dataSource[weaponCurrentLevel] || dataSource[0];
}

// Bouton Toggle Résumé/Complet
toggleBtn.addEventListener('click', function() {
    isSummaryMode = !isSummaryMode;
    this.textContent = isSummaryMode ? "Texte Complet" : "Mode Résumé";
    this.classList.toggle('active', isSummaryMode);
    renderWeaponContent();
});

// Gestion des étoiles (0 à 5)
weaponStars.forEach(star => {
    star.addEventListener('click', function () {
        const clickedValue = parseInt(this.getAttribute('data-value'));
        
        // Si on clique sur le niveau actuel, on descend d'un niveau (désélection)
        // Sinon on va au niveau cliqué
        if (clickedValue === weaponCurrentLevel) {
            weaponCurrentLevel = clickedValue - 1;
        } else {
            weaponCurrentLevel = clickedValue;
        }
        
        updateWeaponStars(weaponCurrentLevel);
        renderWeaponContent();
    });
});

// Mise à jour visuelle des étoiles
function updateWeaponStars(level) {
    weaponStars.forEach(star => {
        const starValue = parseInt(star.getAttribute('data-value'));
        star.classList.toggle('filled', starValue <= level);
    });
}

// Initialisation au chargement
renderWeaponContent();