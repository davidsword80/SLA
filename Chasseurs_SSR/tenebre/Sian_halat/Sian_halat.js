/* ==========================================
   LOGIQUE PERSONNAGE (Sian Halat)
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
        <p>Chaque fois que les compétences <strong>Épéiste royal : Jugement</strong>, <strong>Épéiste royal : Flash noir</strong> ou <strong>Épéiste royal : Ruade</strong> touchent leur cible, elles remplissent la jauge de <span class="buff">[Maîtrise impeccable de l'épée]</span>.<br>
        Lorsque la jauge de <span class="buff">[Maîtrise impeccable de l'épée]</span> atteint 50 % ou plus, l'effet <span class="buff">[Danse de l'épée pourpre]</span> est activé.<br>
        Lorsque les compétences <strong>Épéiste royal : Flash noir</strong> ou <strong>Épéiste royal : Ruade</strong> touchent leur cible, l'effet <span class="buff">[Furie pourpre]</span> est activé.<br></p>
        
        <div class="detail-box">
            <h4><span class="buff">[Danse de l'épée pourpre]</span></h4>
            <p>Augmente l'effet d'<span class="buff">[Accumulation élémentaire]</span> de ténèbres de <span class="stat-boost">10 %</span>.<br>
            Augmente les dégâts de ténèbres de <span class="stat-boost">5 %</span>. Augmente l'Attaque de <span class="stat-boost">5 %</span>. Durée : 15 seconde(s).</p>
        </div>

        <div class="detail-box">
            <h4><span class="buff">[Furie pourpre]</span></h4>
            <p>Restaure instantanément les PV à hauteur de <span class="stat-boost">5 %</span> de l'Attaque de Sian Halat.<br>
            Augmente le Taux de récupération de PV de <span class="stat-boost">5 %</span>. Durée : 5 seconde(s).</p>
        </div>
    `,
    1: `
        <h3>1 étoile :</h3>
        <p>Lorsque la jauge de <span class="buff">[Maîtrise impeccable de l'épée]</span> atteint 50 % ou plus, les compétences <strong>Épéiste royal : Flash noir</strong> et <strong>Épéiste royal : Ruade</strong> deviennent <strong>Épéiste royal : Pleine lune</strong> et <strong>Épéiste royal : Tempête de sang</strong>, ce qui augmente leurs dégâts de <span class="stat-boost">100 %</span>.<br>
        L'utilisation des compétences <strong>Épéiste royal : Pleine lune</strong> ou <strong>Épéiste royal : Tempête de sang</strong> consomme 50 % de la jauge de <span class="buff">[Maîtrise impeccable de l'épée]</span>.<br>
        Lorsque les compétences <strong>Épéiste royal : Flash noir</strong>, <strong>Épéiste royal : Ruade</strong>, <strong>Épéiste royal : Pleine lune</strong> ou <strong>Épéiste royal : Tempête de sang</strong> touchent leur cible, elles lui appliquent l'effet <span class="buff">[Domination écarlate]</span>.<br>
        L'effet <span class="buff">[Furie pourpre]</span> qui est activé lorsque les compétences <strong>Épéiste royal : Flash noir</strong> ou <strong>Épéiste royal : Ruade</strong> touchent leur cible devient <span class="buff">[Furie insatiable]</span>.<br>
        Lorsque les compétences <strong>Épéiste royal : Pleine lune</strong> ou <strong>Épéiste royal : Tempête de sang</strong> touchent leur cible, elles appliquent l'effet <span class="buff">[Furie insatiable]</span>.<br>
        Lorsque les PV de Sian Halat atteignent 1 ou moins, il devient <span class="buff">[Immortel]</span> pendant 2 seconde(s).<br>
        Lorsque l'effet <span class="buff">[Immortel]</span> prend fin, il récupère des PV équivalents à <span class="stat-boost">50 %</span> de son Attaque.<br>
        Cet effet ne s'active qu'une fois pendant le combat.<br></p>

        <div class="detail-box">
            <h4><span class="buff">[Domination écarlate]</span></h4>
            <p>Augmente les dégâts de ténèbres subis de <span class="stat-boost">5 %</span>.<br>
            Augmente les dégâts de <span class="buff">[Surcharge]</span> de ténèbres subis de <span class="stat-boost">5 %</span>. Durée : 10 seconde(s) (cumulable jusqu'à 2 fois).</p>
        </div>

        <div class="detail-box">
            <h4><span class="buff">[Furie insatiable]</span></h4>
            <p>Restaure instantanément des PV équivalents à <span class="stat-boost">10 %</span> de l'Attaque de Sian Halat.<br>
            Augmente le Taux de récupération de PV de <span class="stat-boost">10 %</span>. Durée : 5 seconde(s).</p>
        </div>
    `,
    2: `
        <h3>2 étoiles :</h3>
        <p>Applique l'effet <span class="buff">[Serment de la victoire]</span> à toute l'équipe au début du niveau.<br>
        Augmente l'effet d'<span class="buff">[Accumulation élémentaire]</span> de ténèbres de <span class="stat-boost">20 %</span>.<br></p>

        <div class="detail-box">
            <h4><span class="buff">[Serment de la victoire]</span></h4>
            <p>Augmente les dégâts de <span class="buff">[Surcharge]</span> de ténèbres subis par les cibles affectées de <span class="stat-boost">20 %</span>.<br>
            Durée : illimitée.</p>
        </div>
    `,
    3: `
        <h3>3 étoiles :</h3>
        <p>Améliore l'effet <span class="buff">[Danse de l'épée pourpre]</span>.<br>
        Lorsque les compétences <strong>Épéiste royal : Flash noir</strong>, <strong>Épéiste royal : Ruade</strong>, <strong>Épéiste royal : Pleine lune</strong> ou <strong>Épéiste royal : Tempête de sang</strong> touchent leur cible, elles activent l'effet <span class="buff">[Résolution du gardien]</span>.<br></p>

        <div class="detail-box">
            <h4><span class="buff">[Danse de l'épée pourpre]</span> (Amélioré)</h4>
            <p>Augmente l'effet d'<span class="buff">[Accumulation élémentaire]</span> de ténèbres de <span class="stat-boost">20 %</span>.<br>
            Augmente les dégâts de ténèbres de <span class="stat-boost">10 %</span>. Augmente l'Attaque de <span class="stat-boost">10 %</span>. Durée : 30 seconde(s).</p>
        </div>

        <div class="detail-box">
            <h4><span class="buff">[Résolution du gardien]</span></h4>
            <p>Augmente l'effet d'<span class="buff">[Accumulation élémentaire]</span> de ténèbres de <span class="stat-boost">1 %</span>.<br>
            Augmente les dégâts de ténèbres de <span class="stat-boost">1.6 %</span>. Augmente l'Attaque de <span class="stat-boost">1 %</span>. Durée : illimitée (cumulable jusqu'à 20 fois).</p>
        </div>
    `,
    4: `
        <h3>4 étoiles :</h3>
        <p>La Pénétration de défense des membres de l'équipe de l'élément Ténèbres augmente de <span class="stat-boost">3 %</span> par membre de l'élément Ténèbres présent dans le groupe.<br></p>
    `,
    5: `
        <h3>5 étoiles :</h3>
        <p>Les effets <span class="buff">[Domination écarlate]</span> et <span class="buff">[Furie insatiable]</span> sont améliorés.<br>
        Le taux de remplissage de la jauge de <span class="buff">[Maîtrise impeccable de l'épée]</span> augmente de <span class="stat-boost">100 %</span>.<br>
        Lorsque les compétences <strong>Épéiste royal : Flash noir</strong>, <strong>Épéiste royal : Ruade</strong>, <strong>Épéiste royal : Pleine lune</strong> ou <strong>Épéiste royal : Tempête de sang</strong> touchent leur cible, elles restaurent <span class="stat-boost">20 %</span> de la jauge de puissance de l'utilisateur et réduisent le temps de rechargement de <strong>Fierté du chevalier</strong> de 3 seconde(s) (temps de rechargement : 0.5 seconde(s)).<br>
        Lorsque <strong>Fierté du chevalier</strong> touche sa cible, elle applique l'effet <span class="buff">[Épée du zénith]</span> aux membres de l'équipe de l'élément Ténèbres.<br></p>

        <div class="detail-box">
            <h4><span class="buff">[Domination écarlate]</span> (Amélioré)</h4>
            <p>Augmente les dégâts de ténèbres subis de <span class="stat-boost">10 %</span>.<br>
            Augmente les dégâts de <span class="buff">[Surcharge]</span> de ténèbres subis de <span class="stat-boost">10 %</span>. Durée : 20 seconde(s) (cumulable jusqu'à 4 fois).</p>
        </div>

        <div class="detail-box">
            <h4><span class="buff">[Furie insatiable]</span> (Amélioré)</h4>
            <p>Restaure instantanément des PV équivalents à <span class="stat-boost">20 %</span> de l'Attaque de Sian Halat.<br>
            Augmente le Taux de récupération de PV de <span class="stat-boost">20 %</span>. Augmente les dégâts de <span class="buff">[Surcharge]</span> de ténèbres de <span class="stat-boost">30 %</span>.<br>
            Augmente la Pénétration de défense de <span class="stat-boost">10 %</span>. Augmente l'Attaque de <span class="stat-boost">15 %</span>. Durée : 30 seconde(s).</p>
        </div>
    `
};

// --- RÉSUMÉ (COURT) ---
const charSummaryData = {
    0: `
        <h3>Passif : Maître des Ténèbres</h3>
        <p>Compétences remplissent <span class="buff">[Maîtrise]</span>.<br>
        Jauge > 50% = <span class="buff">[Danse de l'épée]</span> (Accumulation +10%, Atk +5%).<br>
        Compétences activent <span class="buff">[Furie pourpre]</span> (Soin 5%).</p>
    `,
    1: `
        <h3>1 étoile</h3>
        <p>Jauge > 50% : Compétences améliorées (Dégâts <span class="stat-boost">+100%</span>).<br>
        Applique <span class="buff">[Domination écarlate]</span> (Debuff Dégâts/Surcharge Ténèbres).<br>
        <span class="buff">[Furie insatiable]</span> : Soin 10%.<br>
        Mécanique d'<span class="buff">[Immortel]</span> (1 HP -> Invincible 2s -> Soin 50%).</p>
    `,
    2: `
        <h3>2 étoiles</h3>
        <p>Entrée : <span class="buff">[Serment de la victoire]</span> (Debuff Surcharge Ténèbres <span class="stat-boost">+20%</span>).<br>
        Accumulation Ténèbres <span class="stat-boost">+20%</span>.</p>
    `,
    3: `
        <h3>3 étoiles</h3>
        <p>Améliore <span class="buff">[Danse]</span> : Accumulation <span class="stat-boost">+20%</span>, Dégâts/Atk <span class="stat-boost">+10%</span>.<br>
        Active <span class="buff">[Résolution du gardien]</span> (Stack Dégâts/Atk illimité).</p>
    `,
    4: `
        <h3>4 étoiles</h3>
        <p>Pénétration défense équipe Ténèbres <span class="stat-boost">+3%</span> par allié Ténèbres.</p>
    `,
    5: `
        <h3>5 étoiles</h3>
        <p>Remplissage Jauge <span class="stat-boost">+100%</span>.<br>
        Compétences : Jauge Puissance <span class="stat-boost">+20%</span> + CD Fierté réduit.<br>
        Améliore <span class="buff">[Domination]</span> (Debuff 10%, x4) et <span class="buff">[Furie]</span> (Soin 20%, Buffs Atk/Pen/Surcharge).</p>
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
   LOGIQUE ARME (Ombre pourpre)
   ========================================== */
const weaponStarsContainer = document.getElementById('weapon-stars-container');
const weaponStars = weaponStarsContainer.querySelectorAll('.star');
const weaponMessage = document.getElementById('weapon-message');

let weaponCurrentLevel = 0;

const weaponData = {
    0: `
        <h3>Avancement 0 :</h3>
        <p>Augmente la Pénétration de défense de <span class="stat-boost">2 %</span>.<br>
        Lorsqu'un ennemi est affecté par une <span class="buff">[Surcharge]</span> de ténèbres, un effet qui augmente les dégats de ténèbres de toute l'équipe de <span class="stat-boost">2 %</span> est activé (cumulable jusqu'a 4 fois).<br>
        Durée: illimitée</p>
    `,
    1: `
        <h3>Avancement 5 étoiles :</h3>
        <p>Augmente la Pénétration de défense de <span class="stat-boost">15 %</span>.<br>
        Lorsqu'un ennemi est affecté par une <span class="buff">[Surcharge]</span> de ténèbres, un effet qui augmente les dégats de ténèbres de toute l'équipe de <span class="stat-boost">12 %</span> est activé (cumulable jusqu'a 4 fois).<br>
        Durée: illimitée</p>
    `,
    2: `
        <h3>Avancement 10 étoiles :</h3>
        <p>Augmente l'Attaque, la Défense et les PV de <span class="stat-boost">15 %</span>.</p>
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