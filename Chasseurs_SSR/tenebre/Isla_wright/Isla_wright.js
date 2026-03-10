/* ==========================================
   LOGIQUE PERSONNAGE (Isla Wright)
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
        <p>Lors de l'utilisation du Stade 3 de son attaque de base, l'utilisatrice charge sa jauge de puissance de <span class="stat-boost">100%</span>.<br>
        Lors de l'utilisation de <strong>Nova de la Mort</strong>, la compétence <strong>Arcane: le Monde</strong> devient <strong>Arcane : la Mort</strong>.<br>
        Lors de l'utilisation de la compétence <strong>Urgence cosmique</strong>, la compétence <strong>Arcane : la Mort</strong> devient <strong>Arcane: le Monde</strong>.<br></p>
    `,
    1: `
        <h3>1 étoile :</h3>
        <p>Lors de l'utilisation de la compétence <strong>Nova de la Mort</strong>, l'utilisatrice charge la jauge de puissance du deuxième personnage de l'équipe de <span class="stat-boost">60%</span> et réduit le temps de rechargement de sa compétence ultime de 20 seconde(s).<br>
        Améliore l'effet <span class="buff">[La Tour]</span>.<br></p>
        <div class="detail-box">
            <h4><span class="buff">[La Tour]</span></h4>
            <p>Augmente les dégâts élémentaires de ténèbres infligés par les membres de type Ténèbres de <span class="stat-boost">10%</span>.<br>
            Durée: 16 seconde(s)</p>
        </div>
    `,
    2: `
        <h3>2 étoiles :</h3>
        <p>Augmente la Vitesse de toute l'équipe de <span class="stat-boost">10%</span> et l'immunise contre l'effet <span class="buff">[Ralenti]</span>.<br>
        Augmente la Défense de toute l'équipe de <span class="stat-boost">5%</span>.<br></p>
    `,
    3: `
        <h3>3 étoiles :</h3>
        <p>Lors de l'utilisation de la compétence <strong>Horoscope, Étoiles contraires</strong>, les effets <span class="buff">[La Force, Le Magicien et La Roue de la Fortune]</span> s'activent.<br></p>
    `,
    4: `
        <h3>4 étoiles :</h3>
        <p>Les dégâts élémentaires de ténèbres des membres de type Ténèbres augmentent de <span class="stat-boost">3%</span> et les dégâts qu'ils subissent diminuent de <span class="stat-boost">3%</span> (cumulable jusqu'à 3 fois) par chasseur de l'élément Ténèbres présent dans l'équipe.<br></p>
    `,
    5: `
        <h3>5 étoiles :</h3>
        <p>Les effets <span class="buff">[Le Monde et La Mort]</span> sont améliorés.<br></p>
        <div class="detail-box">
            <h4><span class="buff">[Le Monde]</span></h4>
            <p>Des PV équivalents à <span class="stat-boost">25%</span> de la Défense d'Isla Wright sont instantanément restaurés pour toute l'équipe.<br>
            Octroie à toute l'équipe un <span class="buff">[Bouclier]</span> équivalent à <span class="stat-boost">25%</span> de la Défense d'Isla Wright.<br>
            Durée: 8 seconde(s)</p>
        </div>
        <div class="detail-box">
            <h4><span class="buff">[La Mort]</span></h4>
            <p>Augmente la stat d'augmentation des dégâts de toute l'équipe de <span class="stat-boost">12%</span> de la stat d'augmentation des dégâts d'Isla Wright.<br>
            Si un chasseur de l'élément Ténèbres est présent dans le groupe, les dégâts de compétence ultime de toute l'équipe augmentent de <span class="stat-boost">32%</span>.<br>
            L'effet <span class="buff">[Guide de la Mort]</span> est appliqué à toute l'équipe.<br>
            Durée: 16 seconde(s)</p>
        </div>
        <div class="detail-box">
            <h4><span class="buff">[Guide de la Mort]</span></h4>
            <p>Augmente les dégâts de <span class="stat-boost">0.2%</span> chaque fois que les PV de la cible baissent de 1% (cumulable jusqu'à 16 %).<br>
            Durée: 16 seconde(s)</p>
        </div>
    `
};

// --- RÉSUMÉ (COURT) ---
const charSummaryData = {
    0: `
        <h3>Passif : Maîtresse des Arcanes</h3>
        <p>Stade 3 Attaque base = <span class="stat-boost">100%</span> Jauge Puissance.<br>
        Nova de la Mort -> Active <strong>Arcane : la Mort</strong>.<br>
        Urgence cosmique -> Active <strong>Arcane : le Monde</strong>.</p>
    `,
    1: `
        <h3>1 étoile</h3>
        <p>Nova de la Mort : Jauge Puissance <span class="stat-boost">+60%</span> + Réduction CD Ultime (20s) pour le 2nd Chasseur.<br>
        <span class="buff">[La Tour]</span> : Dégâts Ténèbres <span class="stat-boost">+10%</span> pour alliés Ténèbres.</p>
    `,
    2: `
        <h3>2 étoiles</h3>
        <p>Vitesse Équipe <span class="stat-boost">+10%</span> (Immunité Ralenti).<br>
        Défense Équipe <span class="stat-boost">+5%</span>.</p>
    `,
    3: `
        <h3>3 étoiles</h3>
        <p>Horoscope : Active 3 Arcanes bonus (<span class="buff">[Force, Magicien, Fortune]</span>).</p>
    `,
    4: `
        <h3>4 étoiles</h3>
        <p>Buff Ténèbres (Dégâts/Réduction Dégâts) par allié Ténèbres (<span class="stat-boost">+/-3%</span> par allié).</p>
    `,
    5: `
        <h3>5 étoiles</h3>
        <p><span class="buff">[Le Monde]</span> : Soin + Bouclier (<span class="stat-boost">25%</span> Def Isla).<br>
        <span class="buff">[La Mort]</span> : Boost Dégâts Ultime Ténèbres (<span class="stat-boost">+32%</span>) + <span class="buff">[Guide]</span> (Exécution <span class="stat-boost">+0.2%</span> par 1% PV perdu).</p>
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
   LOGIQUE ARME (Chance impromptue)
   ========================================== */
const weaponStarsContainer = document.getElementById('weapon-stars-container');
const weaponStars = weaponStarsContainer.querySelectorAll('.star');
const weaponMessage = document.getElementById('weapon-message');

let weaponCurrentLevel = 0;

const weaponData = {
    0: `
        <h3>Avancement 0 :</h3>
        <p>Augmente la Défense de l'utilisatrice de <span class="stat-boost">0.5%</span>.<br>
        La Défense de toute l'équipe augmente de <span class="stat-boost">0.5%</span> par chasseur de l'élément Ténèbres présent dans l'équipe.<br>
        Réduit le temps de rechargement de la compétence ultime d'Isla Wright de 4 seconde(s).<br></p>
    `,
    1: `
        <h3>Avancement 5 étoiles :</h3>
        <p>Augmente la Défense de l'utilisatrice de <span class="stat-boost">4%</span>.<br>
        La Défense de toute l'équipe augmente de <span class="stat-boost">4%</span> par chasseur de l'élément Ténèbres présent dans l'équipe.<br>
        Réduit le temps de rechargement de la compétence ultime d'Isla Wright de 20 seconde(s).<br></p>
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