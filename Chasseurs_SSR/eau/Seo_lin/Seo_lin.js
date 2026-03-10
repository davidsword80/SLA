/* ==========================================
   LOGIQUE PERSONNAGE (Seo Lin)
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
        <p>Lorsque Seo Lin ou un allié parvient à mettre un ennemi en état de <span class="buff">[Bris]</span>, la durée de l'état de Bris augmente de 3 seconde(s).<br>
        Lorsque Seo Lin utilise les compétences <strong>Tornade glaçante</strong>, <strong>Déflagration polaire</strong>, <strong>Énorme éclat de glace</strong> ou <strong>Tornade congelante</strong>, l'effet <span class="buff">[Missile guidé]</span> est activé.<br></p>
        
        <div class="detail-box">
            <h4><span class="buff">[Missile guidé]</span></h4>
            <p><strong>Tornade glaçante</strong>, <strong>Énorme éclat de glace</strong> ou <strong>Tornade congelante</strong> tirent 2 missile(s).<br>
            <strong>Déflagration polaire</strong> tire 4 missile(s).<br>
            Chaque missile inflige des dégâts d'eau équivalents à <span class="stat-boost">150%</span> des PV max de Seo Lin.<br>
            Applique l'effet <span class="buff">[En dessous de zéro]</span> à la cible.</p>
        </div>

        <div class="detail-box">
            <h4><span class="buff">[En dessous de zéro]</span></h4>
            <p>Augmente les dégâts d'eau subis par la cible de <span class="stat-boost">1%</span>.<br>
            Durée : 30 seconde(s) (cumulable jusqu'à 10 fois).</p>
        </div>
    `,
    1: `
        <h3>1 étoile :</h3>
        <p>La compétence <strong>Tornade glaçante</strong> permet désormais de tirer 4 missile(s).<br>
        Lorsque l'utilisatrice rejoint le niveau, l'effet <span class="buff">[Surpassement]</span> s'active.<br>
        Lorsque Seo Lin ou un allié parvient à mettre un ennemi en état de <span class="buff">[Bris]</span>, l'effet <span class="buff">[Bris limité]</span> s'active (temps de rechargement : 120 seconde(s)).<br></p>

        <div class="detail-box">
            <h4><span class="buff">[Surpassement]</span></h4>
            <p>Augmente l'efficacité de <span class="buff">[Bris]</span> de <span class="stat-boost">50%</span>.<br>
            Réduit les dégâts infligés (reçus) de <span class="stat-boost">30%</span>.</p>
        </div>

        <div class="detail-box">
            <h4><span class="buff">[Bris limité]</span></h4>
            <p>Réinitialise le temps de rechargement de toutes les compétences et restaure les jauges à 100%.<br>
            Supprime l'effet <span class="buff">[Surpassement]</span>.<br>
            Réduit l'efficacité de <span class="buff">[Bris]</span> de <span class="stat-boost">50%</span>.<br>
            Augmente les dégâts infligés, les dégâts des missiles et les Dégâts Critiques de <span class="stat-boost">30%</span>.<br>
            Durée : 15 seconde(s) (30s dans l'Atelier de la lumière brillante).<br>
            À la fin de l'effet, <span class="buff">[Surpassement]</span> se réactive.</p>
        </div>
    `,
    2: `
        <h3>2 étoiles :</h3>
        <p><strong>Énorme éclat de glace</strong> ou <strong>Tornade congelante</strong> permettent désormais de tirer 4 missile(s) à la fois.<br></p>
    `,
    3: `
        <h3>3 étoiles :</h3>
        <p>Lorsque l'utilisatrice rejoint le niveau, l'effet <span class="buff">[Thé noir ?]</span> s'applique à toute l'équipe.<br></p>

        <div class="detail-box">
            <h4><span class="buff">[Thé noir ?]</span></h4>
            <p>Augmente la Défense de <span class="stat-boost">20%</span>.<br>
            Augmente les PV max de <span class="stat-boost">20%</span>.<br>
            Restaure 1.5% de PM toutes les 5 seconde(s).<br>
            Durée : illimitée.</p>
        </div>
    `,
    4: `
        <h3>4 étoiles :</h3>
        <p>Les dégâts d'eau des membres de l'équipe de l'élément Eau augmentent de <span class="stat-boost">10%</span> (cumulable jusqu'à 3 fois) par membre de l'équipe de l'élément Eau présent dans la formation.<br></p>
    `,
    5: `
        <h3>5 étoiles :</h3>
        <p>Le Taux de coup critique des missiles augmente de <span class="stat-boost">100%</span> et les Dégâts de coup critique des missiles augmentent de <span class="stat-boost">30%</span>.<br>
        Améliore les effets <span class="buff">[En dessous de zéro]</span> et <span class="buff">[Bris limité]</span>.<br></p>

        <div class="detail-box">
            <h4>Amélioration <span class="buff">[En dessous de zéro]</span></h4>
            <p>Augmente les dégâts d'eau subis de <span class="stat-boost">2%</span> (au lieu de 1%).<br>
            Durée : 30 seconde(s) (cumulable jusqu'à 10 fois).</p>
        </div>

        <div class="detail-box">
            <h4>Amélioration <span class="buff">[Bris limité]</span></h4>
            <p>Réduit l'efficacité de <span class="buff">[Bris]</span> de <span class="stat-boost">30%</span>.<br>
            Augmente les dégâts infligés, les dégâts des missiles et les Dégâts Critiques de <span class="stat-boost">50%</span>.</p>
        </div>
    `
};

// --- RÉSUMÉ (COURT) ---
const charSummaryData = {
    0: `
        <h3>Passif : Missiles Guidés</h3>
        <p>Bris (Seo/Allié) = Durée Bris +3s.<br>
        Compétences tirent des <span class="buff">[Missiles]</span> (Dégâts Eau basés sur PV Max).<br>
        Missiles appliquent <span class="buff">[En dessous de zéro]</span> (Debuff Dégâts Eau).</p>
    `,
    1: `
        <h3>1 étoile</h3>
        <p>Entrée : <span class="buff">[Surpassement]</span> (Efficacité Bris <span class="stat-boost">+50%</span>, Tankiness).<br>
        Sur Bris : Active <span class="buff">[Bris limité]</span> (Reset CD, Full Jauge, Dégâts/Crit <span class="stat-boost">+30%</span>).</p>
    `,
    2: `
        <h3>2 étoiles</h3>
        <p>Énorme éclat de glace et Tornade congelante tirent 4 missiles (au lieu de 2).<br></p>
    `,
    3: `
        <h3>3 étoiles</h3>
        <p>Buff Équipe <span class="buff">[Thé noir ?]</span> : Déf/PV <span class="stat-boost">+20%</span> + Regen PM.<br></p>
    `,
    4: `
        <h3>4 étoiles</h3>
        <p>Dégâts Eau équipe <span class="stat-boost">+10%</span> par allié Eau (Max 30%).<br></p>
    `,
    5: `
        <h3>5 étoiles</h3>
        <p>Missiles : Taux Crit <span class="stat-boost">+100%</span>, Dégâts Crit <span class="stat-boost">+30%</span>.<br>
        Améliore <span class="buff">[Bris limité]</span> : Bonus Dégâts passent à <span class="stat-boost">50%</span>.<br>
        Améliore <span class="buff">[En dessous de zéro]</span> : Debuff <span class="stat-boost">2%</span>/stack.</p>
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
   LOGIQUE ARME (Ode au fer et au sang)
   ========================================== */
const weaponStarsContainer = document.getElementById('weapon-stars-container');
const weaponStars = weaponStarsContainer.querySelectorAll('.star');
const weaponMessage = document.getElementById('weapon-message');

let weaponCurrentLevel = 0;

const weaponData = {
    0: `
        <h3>Avancement 0 :</h3>
        <p>Augmente les PV de <span class="stat-boost">5%</span>.<br>
        Augmente les dégâts des missiles de <span class="stat-boost">30%</span>.</p>
    `,
    1: `
        <h3>Avancement 5 étoiles :</h3>
        <p>Augmente les PV de <span class="stat-boost">12%</span>.<br>
        Augmente les dégâts des missiles de <span class="stat-boost">100%</span>.</p>
    `,
    2: `
        <h3>Avancement 10 étoiles :</h3>
        <p>Augmente l'Attaque, la Défense et les PV de <span class="stat-boost">15%</span>.</p>
    `
};

// Initialisation
displayWeaponMessage(0);

weaponStars.forEach(star => {
    star.addEventListener('click', function () {
        const clickedValue = parseInt(this.getAttribute('data-value'));

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