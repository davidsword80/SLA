/* ==========================================
   LOGIQUE PERSONNAGE (Go Gunhee)
   ========================================== */
const charStarsContainer = document.getElementById('char-stars-container');
const charStars = charStarsContainer.querySelectorAll('.star');
const charMessage = document.getElementById('char-message');
const toggleBtn = document.getElementById('toggleBtn');

let charCurrentLevel = 0;
let isSummaryMode = false;

// --- TEXTE COMPLET (MOT POUR MOT + SAUT DE LIGNE APRES POINT) ---
const charFullData = {
    0: `
        <h3>Passif :</h3>
        <p>L'effet <span class="buff">[Vaisseau brisé]</span> est appliqué lorsque l'utilisateur arrive dans le niveau.<br>
        Lorsqu'il utilise les compétences <strong>Balayage</strong> ou <strong>Esprit combatif</strong>, l'effet <span class="buff">[Aura de dirigeant]</span> est appliqué.<br>
        Lors de l'utilisation de la compétence <strong>Pouvoir de la lumière brillante</strong>, l'effet <span class="buff">[Fragment de lumière brillante]</span> est appliqué.<br></p>
        <div class="detail-box">
            <h4><span class="buff">[Vaisseau brisé]</span></h4>
            <p>Diminue le taux de récupération de PV de <span class="stat-boost">50%</span>.<br>
            Durée: illimitée<br></p>
        </div>
        <div class="detail-box">
            <h4><span class="buff">[Aura de dirigeant]</span></h4>
            <p>Augmente la Défense de l'utilisateur de <span class="stat-boost">30%</span>.<br>
            L'utilisateur bénéficie d'un <span class="buff">[Bouclier]</span> équivalent à <span class="stat-boost">20%</span> de la Défense de Go Gunhee.<br>
            Durée: 10 seconde(s)<br></p>
        </div>
        <div class="detail-box">
            <h4><span class="buff">[Fragment de lumière brillante]</span></h4>
            <p>Active l'Attaque de noyau de l'utilisateur 1 fois.<br>
            L'Attaque de noyau de l'utilisateur devient <strong>Attaque lourde: Écrasement abdominal</strong> et ses dégâts augmentent de <span class="stat-boost">60%</span>.<br>
            Esprit combatif devient <strong>Attaque lourde: Esprit combatif</strong> et les dégâts infligés par l'utilisateur augmentent de <span class="stat-boost">60%</span>.<br>
            Durée: 15 seconde(s)</p>
        </div>
    `,
    1: `
        <h3>1 étoile :</h3>
        <p>Lors de l'utilisation des compétences <strong>Esprit combatif</strong> ou <strong>Attaque lourde: Esprit combatif</strong>, l'Attaque de noyau s'active.<br>
        Lors de l'utilisation des compétences <strong>Esprit combatif</strong> ou <strong>Attaque lourde: Esprit combatif</strong>, l'Attaque de noyau devient <strong>Attaque lourde: Écrasement abdominal</strong> pendant 15 seconde(s).<br>
        Lors de l'utilisation de la compétence <strong>Pouvoir de la lumière brillante</strong>, l'effet <span class="buff">[Volonté de lumière brillante]</span> est appliqué à tous les membres de l'équipe.<br></p>
        <div class="detail-box">
            <h4><span class="buff">[Volonté de lumière brillante]</span></h4>
            <p>Pour chaque membre de l'équipe de l'élément Lumière présent, les dégâts élémentaires de lumière infligés par l'utilisateur augmentent de <span class="stat-boost">8%</span>, et ses Dégâts de coup critique augmentent de <span class="stat-boost">8%</span>.<br></p>
        </div>
    `,
    2: `
        <h3>2 étoiles :</h3>
        <p>L'efficacité de <span class="buff">[Bris]</span> est augmentée de <span class="stat-boost">20%</span>.<br></p>
    `,
    3: `
        <h3>3 étoiles :</h3>
        <p>L'utilisation de la compétence <strong>Supernova</strong> inflige des dégâts de Bris tout-puissants.<br>
        L'effet <span class="buff">[Aura de dirigeant]</span> est amélioré.<br></p>
        <div class="detail-box">
            <h4><span class="buff">[Aura de dirigeant]</span> (Amélioré)</h4>
            <p>Augmente la Défense de l'utilisateur de <span class="stat-boost">50%</span>.<br>
            L'utilisateur bénéficie d'un Bouclier équivalent à <span class="stat-boost">20%</span> de la Défense de Go Gunhee.<br>
            Les dégâts subis par l'utilisateur diminuent de <span class="stat-boost">20%</span>.<br>
            Durée: 15 seconde(s)</p>
        </div>
    `,
    4: `
        <h3>4 étoiles :</h3>
        <p>Augmente la Défense de l'utilisateur de <span class="stat-boost">12%</span>.<br></p>
    `,
    5: `
        <h3>5 étoiles :</h3>
        <p>Les dégâts de la compétence <strong>Supernova</strong> augmentent de <span class="stat-boost">60%</span> lors d'une utilisation contre des cibles disposant d'une jauge de bris.<br>
        Lorsque la compétence Supernova touche une cible ne disposant pas de jauge de bris, l'effet <span class="buff">[Volonté du fragment]</span> est appliqué à tous les membres de l'équipe.<br></p>
        <div class="detail-box">
            <h4><span class="buff">[Volonté du fragment]</span></h4>
            <p>Augmente les Dégâts de coup critique de <span class="stat-boost">30%</span> et les dégâts de la Compétence QTE de <span class="stat-boost">150%</span>.<br>
            Durée: 20 seconde(s)</p>
        </div>
    `
};

// --- RÉSUMÉ (COURT) ---
const charSummaryData = {
    0: `
        <h3>Passif : Le Dirigeant Illuminé</h3>
        <p>Début : <span class="buff">[Vaisseau brisé]</span> (Regen PV <span class="stat-boost">-50%</span>).<br>
        Compétences = <span class="buff">[Aura de dirigeant]</span> (Def/Bouclier).<br>
        Pouvoir lumière = <span class="buff">[Fragment]</span> (Boost Compétences/Core <span class="stat-boost">+60%</span>).</p>
    `,
    1: `
        <h3>1 étoile</h3>
        <p>Compétences activent Attaque Noyau (Lourde).<br>
        Pouvoir lumière = <span class="buff">[Volonté]</span> (Buff Dégâts Lumière/Crit Équipe par allié Lumière).</p>
    `,
    2: `
        <h3>2 étoiles</h3>
        <p>Efficacité Bris <span class="stat-boost">+20%</span>.</p>
    `,
    3: `
        <h3>3 étoiles</h3>
        <p>Supernova = Bris tout-puissant.<br>
        [Aura] Améliorée : Def <span class="stat-boost">+50%</span>, Réduction dégâts <span class="stat-boost">-20%</span>.</p>
    `,
    4: `
        <h3>4 étoiles</h3>
        <p>Défense <span class="stat-boost">+12%</span>.</p>
    `,
    5: `
        <h3>5 étoiles</h3>
        <p>Supernova sur Bris : Dégâts <span class="stat-boost">+60%</span>.<br>
        Supernova sans Bris : <span class="buff">[Volonté du fragment]</span> (Crit Dmg <span class="stat-boost">+30%</span>, QTE <span class="stat-boost">+150%</span> Équipe).</p>
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
   LOGIQUE ARME (Une conviction et une vocation)
   ========================================== */
const weaponStarsContainer = document.getElementById('weapon-stars-container');
const weaponStars = weaponStarsContainer.querySelectorAll('.star');
const weaponMessage = document.getElementById('weapon-message');

let weaponCurrentLevel = 0;

const weaponData = {
    0: `
        <h3>Avancement 0 :</h3>
        <p>La Défense de l'utilisateur augmente de <span class="stat-boost">4%</span>.<br>
        Lorsque les compétences <strong>Esprit combatif</strong> ou <strong>Attaque lourde: Esprit combatif</strong> touchent leur cible, les dégâts élémentaires de lumière infligés à la cible augmentent de <span class="stat-boost">4%</span> pendant 15 seconde(s).<br></p>
    `,
    1: `
        <h3>Avancement 5 étoiles :</h3>
        <p>La Défense de l'utilisateur augmente de <span class="stat-boost">12%</span>.<br>
        Lorsque les compétences <strong>Esprit combatif</strong> ou <strong>Attaque lourde: Esprit combatif</strong> touchent leur cible, les dégâts élémentaires de lumière infligés à la cible augmentent de <span class="stat-boost">12%</span> pendant 15 seconde(s).<br></p>
    `,
    2: `
        <h3>Avancement 10 étoiles :</h3>
        <p>Augmente l'Attaque, la Défense et les PV de l'utilisateur de <span class="stat-boost">15%</span>.<br></p>
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