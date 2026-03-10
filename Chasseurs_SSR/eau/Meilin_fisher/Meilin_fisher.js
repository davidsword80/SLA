/* ==========================================
   LOGIQUE PERSONNAGE (Meilin Fisher)
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
        <p>Lorsque les compétences <strong>Retour de fouet</strong> ou <strong>Ruade féline</strong> touchent leur cible, elles leur infligent l'effet <span class="buff">[Étreinte liquide]</span>.<br>
        Lors de l'utilisation des compétences <strong>Fouet latéral</strong> ou <strong>Au-dessus!</strong> ou si l'utilisatrice quitte le combat, l'effet <span class="buff">[Salut, miaou!]</span> s'applique à tous les membres de l'équipe.<br></p>
        <div class="detail-box">
            <h4><span class="buff">[Étreinte liquide]</span></h4>
            <p>Augmente les dégâts d'eau subis de <span class="stat-boost">8%</span>.<br>
            Durée: 16 seconde(s)<br></p>
        </div>
        <div class="detail-box">
            <h4><span class="buff">[Salut, miaou!]</span></h4>
            <p>L'Attaque augmente de <span class="stat-boost">8%</span>.<br>
            La Défense augmente de <span class="stat-boost">8%</span>.<br>
            Durée: 16 seconde(s) (cumulable jusqu'à 3 fois)</p>
        </div>
    `,
    1: `
        <h3>1 étoile :</h3>
        <p>Augmente les dégâts de la compétence <strong>Au-dessus!</strong> de <span class="stat-boost">64%</span>.<br>
        Lors de l'utilisation de la compétence <strong>Au-dessus!</strong>, l'effet <span class="buff">[Serviteur félin]</span> s'applique à l'allié ayant l'Attaque la plus élevée.<br>
        Amélioration de l'effet <span class="buff">[Trop mignon!]</span><br></p>
        <div class="detail-box">
            <h4><span class="buff">[Serviteur félin]</span></h4>
            <p>Meilin Fisher encaisse <span class="stat-boost">64%</span> de dégâts lorsque l'utilisateur subit directement des dégâts.<br>
            Octroie l'effet <span class="buff">[Super armure]</span>.<br>
            Durée: 8 seconde(s)<br>
            ([Serviteur félin] ne peut s'appliquer à Sung Jinwoo et Meilin Fisher ne subit pas de dégâts continus ou de dégâts dus à certains effets d'autres membres de l'équipe.)<br></p>
        </div>
        <div class="detail-box">
            <h4><span class="buff">[Trop mignon!]</span></h4>
            <p>Augmente les dégâts des Attaques de noyau de <span class="stat-boost">32%</span>.<br>
            Durée: 8 seconde(s)</p>
        </div>
    `,
    2: `
        <h3>2 étoiles :</h3>
        <p>L'Attaque et la Défense de tous les membres de l'équipe augmentent de <span class="stat-boost">8%</span>.<br>
        L'Attaque et la Défense de tous les membres de l'équipe de l'élément Eau augmentent de <span class="stat-boost">8%</span>.<br></p>
    `,
    3: `
        <h3>3 étoiles :</h3>
        <p>Lorsque <strong>Retour de fouet</strong> touche sa cible, les jauges de puissance de tous les membres de l'équipe se remplissent de <span class="stat-boost">8%</span>.<br>
        Lorsque <strong>Retour de fouet</strong> touche un monstre Élite ou supérieur, les jauges de puissance de tous les membres de l'équipe se remplissent de <span class="stat-boost">8%</span>.<br></p>
    `,
    4: `
        <h3>4 étoiles :</h3>
        <p>Les PV de l'utilisatrice augmentent de <span class="stat-boost">8%</span>.<br></p>
    `,
    5: `
        <h3>5 étoiles :</h3>
        <p>Amélioration des effets de <span class="buff">[Remonté à bloc!]</span><br></p>
        <div class="detail-box">
            <h4><span class="buff">[Remonté à bloc !]</span></h4>
            <p>Augmente l'Attaque de l'utilisatrice de <span class="stat-boost">16%</span>.<br>
            Augmente la Défense de l'utilisatrice de <span class="stat-boost">16%</span>.<br>
            Augmente le Taux de coup critique de l'utilisatrice de <span class="stat-boost">16%</span>.<br>
            Augmente les dégâts des Attaques de noyau de l'utilisatrice de <span class="stat-boost">16%</span>.<br>
            Réduit les dégâts subis par l'utilisatrice de <span class="stat-boost">16%</span>.<br>
            Durée: 24 seconde(s).<br></p>
        </div>
    `
};

// --- RÉSUMÉ (COURT) ---
const charSummaryData = {
    0: `
        <h3>Passif : Soutien Félin</h3>
        <p>Compétences offensives = <span class="buff">[Étreinte liquide]</span> (Cible : Dégâts Eau +8%).<br>
        Soutien / Switch = <span class="buff">[Salut, miaou!]</span> (Équipe : Atk/Def +8%).</p>
    `,
    1: `
        <h3>1 étoile</h3>
        <p>Au-dessus! : Dégâts <span class="stat-boost">+64%</span> + <span class="buff">[Serviteur félin]</span> sur DPS (Partage dégâts + Super Armure).<br>
        [Trop mignon!] : Dégâts Attaque Noyau <span class="stat-boost">+32%</span>.</p>
    `,
    2: `
        <h3>2 étoiles</h3>
        <p>Atk/Def Équipe <span class="stat-boost">+8%</span> (Doublé si élément Eau).</p>
    `,
    3: `
        <h3>3 étoiles</h3>
        <p>Retour de fouet : Remplissage Jauge Puissance Équipe <span class="stat-boost">+8%</span> (ou plus sur Élite).</p>
    `,
    4: `
        <h3>4 étoiles</h3>
        <p>PV <span class="stat-boost">+8%</span>.</p>
    `,
    5: `
        <h3>5 étoiles</h3>
        <p>[Remonté à bloc!] amélioré : Boost complet stats perso (Atk, Def, Crit, Noyau, Res) de <span class="stat-boost">16%</span>.</p>
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
   LOGIQUE ARME (Contre toute attente)
   ========================================== */
const weaponStarsContainer = document.getElementById('weapon-stars-container');
const weaponStars = weaponStarsContainer.querySelectorAll('.star');
const weaponMessage = document.getElementById('weapon-message');

let weaponCurrentLevel = 0;

const weaponData = {
    0: `
        <h3>Avancement 0 :</h3>
        <p>Lors de l'utilisation de la compétence <strong>Fouet latéral</strong>, les dégâts du membre de l'équipe ayant l'Attaque la plus élevée augmentent de <span class="stat-boost">1%</span> tous les 2000 de PV max de Meilin Fisher pendant 12 seconde(s) (avec un taux d'augmentation maximal des dégâts de <span class="stat-boost">6 %</span>).<br>
        Réduit le temps de rechargement de la Compétence ultime de <span class="stat-boost">5%</span>.<br></p>
    `,
    1: `
        <h3>Avancement 5 étoiles :</h3>
        <p>Lors de l'utilisation de la compétence <strong>Fouet latéral</strong>, les dégâts du membre de l'équipe ayant l'Attaque la plus élevée augmentent de <span class="stat-boost">1%</span> tous les 2000 de PV max de Meilin Fisher pendant 12 seconde(s) (avec un taux d'augmentation maximal des dégâts de <span class="stat-boost">16%</span>).<br>
        Réduit le temps de rechargement de la Compétence ultime de <span class="stat-boost">20 %</span>.<br></p>
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