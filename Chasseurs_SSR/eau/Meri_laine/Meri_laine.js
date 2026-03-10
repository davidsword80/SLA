/* ==========================================
   LOGIQUE PERSONNAGE (Meri Laine)
   ========================================== */
const charStarsContainer = document.getElementById('char-stars-container');
const charStars = charStarsContainer.querySelectorAll('.star');
const charMessage = document.getElementById('char-message');
const toggleBtn = document.getElementById('toggleBtn');

let charCurrentLevel = 0;
let isSummaryMode = false;

const charFullData = {
    0: `
        <h3>Passif :</h3>
        <p>L'effet <span class="buff">[Mode Pingqueen normale]</span> s'active au début du niveau.<br>
        La jauge de puissance de l'utilisatrice ne peut pas se remplir, mais si la jauge de <span class="buff">[Boost de Pingqueen]</span> atteint 100%, l'utilisatrice récupère 100% de sa jauge de puissance, et le temps de recharge d'<strong>Élan glacial</strong> est réinitialisé.<br>
        Lorsque <strong>Ruade grinçante</strong> touche sa cible, elle lui applique 1 cumuls de l'effet <span class="buff">[Froid hivernal]</span>.<br>
        Lorsque la compétence <strong>Claque montante</strong> touche une cible affectée par <span class="buff">[Froid hivernal]</span>, l'effet <span class="buff">[Souvenirs d'hiver]</span> est activé.<br></p>
        
        <div class="detail-box">
            <h4><span class="buff">[Mode Pingqueen normale]</span></h4>
            <p>Chaque fois que les compétences <strong>Claque montante</strong> ou <strong>Balayage de lame</strong> touchent leur cible, elles remplissent la jauge de <span class="buff">[Boost de Pingqueen]</span>.<br>
            L'utilisation de la compétence <strong>Élan glacial</strong> supprime l'effet <span class="buff">[Mode Pingqueen normale]</span> et active l'effet <span class="buff">[Mode Pingqueen boostée]</span>.<br>
            Durée : illimitée</p>
        </div>

        <div class="detail-box">
            <h4><span class="buff">[Mode Pingqueen boostée]</span></h4>
            <p>La compétence <strong>Balayage de lame</strong> devient <strong>Balayage enragé</strong>, et son temps de recharge est réinitialisé.<br>
            L'utilisatrice peut bouger lors de l'utilisation de la compétence <strong>Balayage enragé</strong>.<br>
            Augmente les dégâts infligés par les compétences <strong>Balayage de lame</strong> et <strong>Élan glacial</strong> aux cibles affectées par <span class="buff">[Froid hivernal]</span> de 25%.<br>
            Augmente l'effet d' <span class="buff">[Accumulation élémentaire]</span> d'Eau de 5%.<br>
            Confère <span class="buff">[Super armure]</span> à l'utilisatrice jusqu'à la fin de l'activation.<br>
            Active l'effet <span class="buff">[Mode Pingqueen normale]</span> à la fin de l'activation.<br>
            Durée : 10 seconde(s)</p>
        </div>

        <div class="detail-box">
            <h4><span class="buff">[Souvenirs d'hiver]</span></h4>
            <p>Augmente les dégâts d'eau de 15%.<br>
            Augmente les dégâts des compétences <strong>Balayage de lame</strong> et <strong>Balayage enragé</strong> de 15%.<br>
            Durée : 30 seconde(s)</p>
        </div>

        <div class="detail-box">
            <h4><span class="buff">[Froid hivernal]</span></h4>
            <p>Inflige des dégâts équivalents à 50% des PV max de Meri Laine toutes les 3 secondes.<br>
            Durée : 30 seconde(s) (cumulable jusqu'à 10 fois)</p>
        </div>
    `,
    1: `
        <h3>1 étoile :</h3>
        <p>Lorsque la compétence <strong>Ruade grinçante</strong> touche une cible, elle lui applique 2 cumuls de <span class="buff">[Froid hivernal]</span>.<br>
        Chaque fois que les compétences <strong>Balayage de lame</strong> ou <strong>Balayage enragé</strong> touchent une cible affectée par <span class="buff">[Froid hivernal]</span>, l'effet <span class="buff">[Gel du sang]</span> est activé.<br>
        Augmente considérablement la Vitesse d'attaque des compétences <strong>Balayage de lame</strong> et <strong>Balayage enragé</strong>.<br>
        Augmente de 25% le nombre d'utilisations possibles de la compétence <strong>Balayage enragé</strong>.<br></p>
        <div class="detail-box">
            <h4><span class="buff">[Gel de sang]</span></h4>
            <p>Augmente les dégâts d'eau subis de 0.6%.<br>
            Augmente les dégâts de Surcharge d'eau subis de 0.6%.<br>
            Durée : 30 seconde(s) (cumulable jusqu'à 70 fois).</p>
        </div>
    `,
    2: `
        <h3>2 étoiles :</h3>
        <p>Augmente l'effet d'<span class="buff">[Accumulation élémentaire]</span> d'eau de 20%.</p>
    `,
    3: `
        <h3>3 étoiles :</h3>
        <p>L'effet <span class="buff">[Souvenirs d'hiver]</span> est amélioré.<br>
        L'utilisation de la compétence <strong>Élan glacial</strong> active l'effet <span class="buff">[Glace façon Pingqueen]</span>.<br></p>
        <div class="detail-box">
            <h4><span class="buff">[Souvenirs d'hiver] (Amélioré)</span></h4>
            <p>Augmente les dégâts d'eau de 30%.<br>
            Augmente les dégâts des compétences <strong>Balayage de lame</strong> et <strong>Balayage enragé</strong> de 30%.<br>
            Durée : 30 seconde(s).</p>
        </div>
        <div class="detail-box">
            <h4><span class="buff">[Glace façon Pingqueen]</span></h4>
            <p>Augmente les dégâts infligés aux cibles affectées par <span class="buff">[Froid hivernal]</span> de 20%.<br>
            Augmente les dégâts de Surcharge d'eau de 10%.<br>
            Augmente l'effet d'<span class="buff">[Accumulation élémentaire]</span> d'Eau de 10%.<br>
            Durée : 30 seconde(s).</p>
        </div>
    `,
    4: `
        <h3>4 étoiles :</h3>
        <p>La Pénétration de défense des membres de l'équipe de l'élément Eau augmente de 5% par membre de l'élément Eau présent dans le groupe.</p>
    `,
    5: `
        <h3>5 étoiles :</h3>
        <p>L'effet <span class="buff">[Mode Pingqueen boostée]</span> est amélioré.<br>
        L'effet <span class="buff">[Gel de sang]</span> est amélioré.<br>
        Lorsque la compétence <strong>Balayage enragé</strong> touche sa cible, elle lui applique 3 cumuls de <span class="buff">[Froid hivernal]</span>.<br></p>
        <div class="detail-box">
            <h4><span class="buff">[Mode Pingqueen boostée] (Amélioré)</span></h4>
            <p>Balayage de lame devient Balayage enragé et le temps de recharge est réinitialisé.<br>
            L'utilisatrice peut bouger pendant l'utilisation de la compétence Balayage enragé.<br>
            Les dégâts des compétences Balayage de lame et Balayage enragé infligés aux cibles affectées par <span class="buff">[Froid hivernal]</span> augmentent de 50%.<br>
            Augmente l'effet d'<span class="buff">[Accumulation élémentaire]</span> d'Eau de 10%.<br>
            Confère à l'utilisatrice <span class="buff">[Super armure]</span> tant que l'effet est actif.<br>
            Active l'effet <span class="buff">[Mode Pingqueen normale]</span> à la fin de l'effet.<br>
            Durée : 10 seconde(s)</p>
        </div>
        <div class="detail-box">
            <h4><span class="buff">[Gel de sang] (Amélioré)</span></h4>
            <p>Augmente les dégâts d'eau subis de 1%.<br>
            Augmente les dégâts de Surcharge d'eau subis de 1%.<br>
            Durée : 45 seconde(s) (cumulable jusqu'à 70 fois)</p>
        </div>
        <div class="detail-box">
            <h4><span class="buff">[Froid hivernal]</span></h4>
            <p>Inflige des dégâts équivalents à 50% des PV max de l'utilisatrice toutes les 3 secondes.<br>
            Durée : 30 seconde(s) (cumulable jusqu'à 10 fois)</p>
        </div>
    `
};

const charSummaryData = {
    0: "<h3>Passif : Mode Pingqueen</h3><p>Mécanique de jauge [Boost] pour reset l'Ultime. Applique [Froid hivernal] (DoT PV max) et [Souvenirs d'hiver].</p>",
    1: "<h3>1 étoile</h3><p>Plus de cumuls de Froid. Active [Gel du sang] (Dégâts Eau subis +0.6%). Boost Balayage enragé.</p>",
    2: "<h3>2 étoiles</h3><p>Accumulation élémentaire Eau +20%.</p>",
    3: "<h3>3 étoiles</h3><p>Buff Souvenirs d'hiver (30%). Ajoute [Glace façon Pingqueen] (Dégâts vs Froid +20%).</p>",
    4: "<h3>4 étoiles</h3><p>Pénétration de Défense équipe Eau +5% par membre Eau.</p>",
    5: "<h3>5 étoiles</h3><p>Modes Boostée et Gel de sang améliorés (1% par cumul). Balayage enragé applique 3 cumuls de Froid.</p>"
};

// --- LOGIQUE COMMUNE ---
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
   LOGIQUE ARME (Brise-hiver)
   ========================================== */
const weaponStarsContainer = document.getElementById('weapon-stars-container');
const weaponStars = weaponStarsContainer.querySelectorAll('.star');
const weaponMessage = document.getElementById('weapon-message');

let weaponCurrentLevel = 0;

const weaponData = {
    0: `
        <h3>Avancement 0 :</h3>
        <p>Augmente les PV de l'utilisatrice de 5%.<br>
        Chaque fois que les compétences <strong>Balayage de lame</strong> ou <strong>Balayage enragé</strong> touchent leur cible, les dégats d' de toute L'équipe augmentent de 0.1%.<br>
        Durée: 45 seconde(s) (cumulable jusqu'à 50 fois)</p>
    `,
    1: `
        <h3>Avancement 5 étoiles :</h3>
        <p>Augmente les PV de l'utilisatrice de 12%.<br>
        Chaque fois que les compétences <strong>Balayage de lame</strong> ou <strong>Balayage enragé</strong> touchent leur cible, les dégats d' de toute L'équipe augmentent de 0.6%.<br>
        Durée: 45 seconde(s) (cumulable jusqu'à 50 fois)</p>
    `,
    2: `
        <h3>Avancement 10 étoiles :</h3>
        <p>Augmente L'attaque, la Défense et les PV de L'utilisatrice de 15%.</p>
    `
};

displayWeaponMessage(0);

weaponStars.forEach(star => {
    star.addEventListener('click', function () {
        const clickedValue = parseInt(this.getAttribute('data-value'));
        weaponCurrentLevel = (clickedValue === weaponCurrentLevel) ? clickedValue - 1 : clickedValue;
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