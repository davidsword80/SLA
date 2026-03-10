/* ==========================================
   LOGIQUE PERSONNAGE (Amamiya Mirei)
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
        <p>Lorsque l'utilisatrice a 66% de PM ou au-dessus, l'effet <span class="buff">[Noirceur de Kuroha]</span> s'applique.<br>
        L'Attaque de l'utilisatrice augmente de <span class="stat-boost">4%</span> par tranche de 150 PM supplémentaires <br>(jusqu'à <span class="stat-boost">40%</span>)..<br></p>
        <div class="detail-box">
            <h4><span class="buff">[Noirceur de Kuroha]</span></h4>
            <p>Les dégâts des compétences <br><strong>Technique à l'épée de Kuroha type 3: Ailes de la nuit</strong> <br> et <strong>Technique à l'épée de Kuroha type 4: Cri de la corneille</strong> <br> augmentent de <span class="stat-boost">30%</span></p>
        </div>
    `,
    1: `
        <h3>1 étoile :</h3>
        <p><img src='icon mirei.png' > Lorsque l'effet <span class="buff">[Possession]</span> est actif, le Taux de coup critique et les Dégâts de coup critique de l'utilisatrice augmentent de <span class="stat-boost">20%</span>.<br>
        Lors de l'utilisation de la compétence <strong>Technique à l'épée de Kuroha type 3: Ailes de la nuit</strong> tandis que l'effet <span class="buff">[Possession]</span> est actif, l'effet <span class="buff">[Ténèbres profondes]</span> s'applique.<br></p>
        <div class="detail-box">
            <h4><span class="buff">[Ténèbres profondes]</span></h4>
            <p>L'Attaque et le Taux de coup critique de l'utilisatrice augmentent de <span class="stat-boost">12%</span> <br>
            (cumulable jusqu'à 2 fois).<br>
            Durée: 10 seconde(s)</p>
        </div>
    `,
    2: `
        <h3>2 étoiles :</h3>
        <p>Remplit la jauge de puissance de l'utilisatrice de <span class="stat-boost">40%</span> en accédant au niveau.<br></p>
    `,
    3: `
        <h3>3 étoiles :</h3>
        <p>Lors de l'utilisation des Attaques de base ou de noyau, les PM et la jauge de puissance se remplissent de <span class="stat-boost">1%</span>, et le temps de rechargement de la compétence <strong>Technique à l'épée de Kuroha Coup létal : Ouverture spéciale de la nuit sans lune</strong> diminue de 2 seconde(s).<br></p>
    `,
    4: `
        <h3>4 étoiles :</h3>
        <p>Augmente les dégâts de vent d'Amamiya Mirei de <span class="stat-boost">10%</span> pour chaque membre de l'équipe de l'élément vent <br>
        (cumulable jusqu'à 3 fois).<br></p>
    `,
    5: `
        <h3>5 étoiles :</h3>
        <p>Lorsque l'effet <span class="buff">[Possession]</span> est actif, l'effet <span class="buff">[Confession de la corneille]</span> s'applique à l'utilisatrice..<br></p>
        <div class="detail-box">
            <h4><span class="buff">[Confession de la corneille]</span></h4>
            <p>Les dégâts des compétences <strong>Technique à l'épée de Kuroha type 3: Ailes de la nuit</strong> et <strong>Technique à l'épée de Kuroha type 4 : Cri de la corneille</strong> augmentent de <span class="stat-boost">80%</span></p>
        </div>
    `
};

// --- RÉSUMÉ (COURT) ---
const charSummaryData = {
    0: `
        <h3>Passif : Noirceur de Kuroha</h3>
        <p>>66% PM = <span class="buff">[Noirceur]</span>.<br>
        Attaque <span class="stat-boost">+4%</span> par 150 PM (Max 40%).<br>
        [Noirceur] : Dégâts Compétences Kuroha <span class="stat-boost">+30%</span>.</p>
    `,
    1: `
        <h3>1 étoile</h3>
        <p>Sous [Possession] : Crit Rate/Dmg <span class="stat-boost">+20%</span>.<br>
        Skill Kuroha 3 = <span class="buff">[Ténèbres profondes]</span> (Atk/Crit <span class="stat-boost">+12%</span>, x2).</p>
    `,
    2: `
        <h3>2 étoiles</h3>
        <p>Entrée niveau : Jauge Puissance <span class="stat-boost">+40%</span>.<br></p>
    `,
    3: `
        <h3>3 étoiles</h3>
        <p>Attaque Base/Noyau : Regen PM/Jauge <span class="stat-boost">+1%</span> + Réduction CD Ultime (2s).<br></p>
    `,
    4: `
        <h3>4 étoiles</h3>
        <p>Dégâts Vent <span class="stat-boost">+10%</span> par allié Vent (Max 3).<br></p>
    `,
    5: `
        <h3>5 étoiles</h3>
        <p>Sous [Possession] : <span class="buff">[Confession]</span>.<br>
        Dégâts Compétences Kuroha <span class="stat-boost">+80%</span>.</p>
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
   LOGIQUE ARME (Lapin Bunbun)
   ========================================== */
const weaponStarsContainer = document.getElementById('weapon-stars-container');
const weaponStars = weaponStarsContainer.querySelectorAll('.star');
const weaponMessage = document.getElementById('weapon-message');

let weaponCurrentLevel = 0;

const weaponData = {
    0: `
        <h3>Avancement 0 :</h3>
        <p>Lorsque l'utilisatrice entre dans un niveau, sa jauge de puissance se remplit de <span class="stat-boost">10%</span>.<br>
        Le Taux de coup critique et les Dégâts de coup critique des compétences <strong>Technique à l'épée de Kuroha type 3: Ailes de la nuit</strong> et <strong>Technique à l'épée de Kuroha type 4: Cri de la corneille</strong> augmentent de <span class="stat-boost">5%</span>.<br></p>
    `,
    1: `
        <h3>Avancement 5 étoiles :</h3>
        <p>Lorsque l'utilisatrice entre dans un niveau, sa jauge de puissance se remplit de <span class="stat-boost">60%</span>.<br>
        Le Taux de coup critique et les Dégâts de coup critique des compétences <strong>Technique à l'épée de Kuroha type 3: Ailes de la nuit</strong> et <strong>Technique à l'épée de Kuroha type 4: Cri de la corneille</strong> augmentent de <span class="stat-boost">30%</span>.<br></p>
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