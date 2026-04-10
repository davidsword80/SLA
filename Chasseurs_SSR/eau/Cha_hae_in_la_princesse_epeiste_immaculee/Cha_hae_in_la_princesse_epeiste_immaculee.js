/* ==========================================
   LOGIQUE PERSONNAGE (Cha Hae-In)
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
        <p>Lorsque les compétences <strong>Danse de la princesse épéiste</strong> ou <strong>Frappe céleste</strong> touchent leur cible, l'effet <span class="buff">[Épées célestes]</span> s'active (temps de rechargement : 0,5 seconde(s)).<br>
        Lorsque ces compétences touchent leur cible, la jauge de <span class="buff">[Volonté de l'épée]</span> se remplit.<br></p>
        
        <div class="detail-box">
            <h4><span class="buff">[Épées célestes]</span></h4>
            <p>Le nombre de lames dérivées augmente en fonction de la charge de <span class="buff">[Volonté de l'épée]</span>.<br>
            Inflige des dégâts d'eau équivalents à <span class="stat-boost">175 %</span> de la défense par épée.<br>
            Considérée comme une compétence de base.</p>
        </div>

        <div class="detail-box">
            <h4><span class="buff">[Volonté de l'épée]</span></h4>
            <p>Effets par niveau de charge :<br>
            Augmente la Défense de <span class="stat-boost">5 %</span> et le Taux de coup critique de <span class="stat-boost">2 %</span>.<br>
            Augmente les Dégâts de coup critique de <span class="stat-boost">2 %</span>.<br>
            Durée : 15 seconde(s) (cumulable jusqu'à 6 fois).</p>
        </div>
    `,
    1: `
        <h3>1 étoile :</h3>
        <p><strong>Tempête d'épées</strong> devient <strong>Attaque rapide : Tempête d'épées</strong> et ses dégâts augmentent de <span class="stat-boost">60 %</span>.<br>
        Lors de l'utilisation de <strong>Frappe céleste</strong>, l'effet <span class="buff">[Maîtrise de la lame]</span> s'active et améliore l'effet <span class="buff">[Volonté de l'épée]</span>.<br></p>

        <div class="detail-box">
            <h4><span class="buff">[Maîtrise de la lame]</span></h4>
            <p>L'attaque de noyau devient <strong>Danse des lames éparses</strong>.<br>
            Accorde l'effet <span class="buff">[Super armure]</span> pendant l'utilisation.<br>
            Si activée pendant le lancer, la jauge de noyau n'est pas utilisée.<br>
            Durée : 5 seconde(s).</p>
        </div>

        <div class="detail-box">
            <h4>Amélioration <span class="buff">[Volonté de l'épée]</span></h4>
            <p>Augmente la Défense de <span class="stat-boost">10 %</span> et le Taux de Coup Critique de <span class="stat-boost">2 %</span>.<br>
            Augmente les Dégâts de Coup Critique de <span class="stat-boost">2 %</span>.<br>
            Durée : 15 seconde(s) (cumulable jusqu'à 6 fois).</p>
        </div>
    `,
    2: `
        <h3>2 étoiles :</h3>
        <p>Lorsque la <strong>Frappe céleste</strong> touche sa cible, l'effet <span class="buff">[Irrémédiable]</span> s'active.<br>
        Lorsque la compétence <strong>Épée de la destinée</strong> touche sa cible, elle la <span class="buff">[Paralyse]</span>.<br></p>

        <div class="detail-box">
            <h4><span class="buff">[Irrémédiable]</span></h4>
            <p>Les cibles ne peuvent pas récupérer de PV.<br>
            Durée : 30 seconde(s).</p>
        </div>

        <div class="detail-box">
            <h4><span class="buff">[Paralysie]</span></h4>
            <p>Interrompt la cible.<br>
            Durée : 3 seconde(s).</p>
        </div>
    `,
    3: `
        <h3>3 étoiles :</h3>
        <p>Lorsque la jauge de <span class="buff">[Volonté de l'épée]</span> se recharge à 100 %, l'effet <span class="buff">[Détermination de l'épée]</span> s'active.<br></p>

        <div class="detail-box">
            <h4><span class="buff">[Détermination de l'épée]</span></h4>
            <p><strong>Frappe céleste</strong> devient <strong>Attaque lourde : Frappe céleste</strong> (Dégâts <span class="stat-boost">+60 %</span>).<br>
            Consomme toute la jauge de <span class="buff">[Volonté de l'épée]</span> à la fin.<br>
            Durée : 6 seconde(s).</p>
        </div>
    `,
    4: `
        <h3>4 étoiles :</h3>
        <p>Le Taux de coup critique de Cha Hae-In augmente de <span class="stat-boost">7 %</span> par allié de l'élément Eau présent dans le groupe.<br>
        Ses Dégâts de coup critique augmentent de <span class="stat-boost">7 %</span> par allié Eau (cumulables jusqu'à 3 fois).</p>
    `,
    5: `
        <h3>5 étoiles :</h3>
        <p>L'effet <span class="buff">[Volonté de l'épée]</span> est amélioré.<br>
        Lorsque l'utilisatrice rejoint le niveau, l'effet <span class="buff">[Princesse épéiste immaculée]</span> s'active.<br></p>

        <div class="detail-box">
            <h4>Amélioration <span class="buff">[Volonté de l'épée]</span></h4>
            <p>Augmente la Défense de <span class="stat-boost">10 %</span> et le Taux de Coup Critique de <span class="stat-boost">4 %</span>.<br>
            Augmente les Dégâts de Coup Critique de <span class="stat-boost">4 %</span>.<br>
            Durée : 15 seconde(s) (cumulable jusqu'à 6 fois).</p>
        </div>

        <div class="detail-box">
            <h4><span class="buff">[Princesse épéiste immaculée]</span></h4>
            <p>Augmente les dégâts de <strong>Épée de la destinée</strong> de <span class="stat-boost">60 %</span>.<br>
            Augmente les dégâts de <strong>Frappe céleste</strong> et <strong>Attaque lourde : Frappe céleste</strong> de <span class="stat-boost">60 %</span>.<br>
            Durée : illimitée.</p>
        </div>
    `
};

// --- RÉSUMÉ (COURT) ---
const charSummaryData = {
    0: `
        <h3>Passif : Épées Célestes</h3>
        <p>Compétences activent <span class="buff">[Épées célestes]</span> (Dégâts = <span class="stat-boost">175% Déf</span>).<br>
        Charge la jauge <span class="buff">[Volonté de l'épée]</span> : Déf <span class="stat-boost">+5%</span>, Crit <span class="stat-boost">+2%</span>/stack (Max 6).</p>
    `,
    1: `
        <h3>1 étoile</h3>
        <p>Attaque Noyau = <strong>Danse des lames éparses</strong> (<span class="buff">Super armure</span>, gratuit).<br>
        Améliore <span class="buff">[Volonté]</span> : Déf <span class="stat-boost">+10%</span>, Crit <span class="stat-boost">+2%</span>/stack.</p>
    `,
    2: `
        <h3>2 étoiles</h3>
        <p>Frappe céleste applique <span class="buff">[Irrémédiable]</span> (Anti-heal).<br>
        Ultime applique <span class="buff">[Paralysie]</span> (3 sec).</p>
    `,
    3: `
        <h3>3 étoiles</h3>
        <p>Jauge pleine = <span class="buff">[Détermination]</span>.<br>
        Frappe céleste devient <strong>Attaque Lourde</strong> (Dégâts <span class="stat-boost">+60%</span>).</p>
    `,
    4: `
        <h3>4 étoiles</h3>
        <p>Par allié Eau : Taux/Dégâts Crit <span class="stat-boost">+7%</span> (Max 3 alliés).</p>
    `,
    5: `
        <h3>5 étoiles</h3>
        <p>Améliore <span class="buff">[Volonté]</span> : Déf <span class="stat-boost">+10%</span>, Crit <span class="stat-boost">+4%</span>/stack.<br>
        Dégâts Ultime et Frappe céleste <span class="stat-boost">+60%</span>.</p>
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
   LOGIQUE ARME (Serment de la Valkyrie)
   ========================================== */
const weaponStarsContainer = document.getElementById('weapon-stars-container');
const weaponStars = weaponStarsContainer.querySelectorAll('.star');
const weaponMessage = document.getElementById('weapon-message');

let weaponCurrentLevel = 0;

const weaponData = {
    0: `
        <h3>Avancement 0 :</h3>
        <p>La Défense de l'utilisatrice augmente de <span class="stat-boost">2 %</span>.<br>
        Lorsque l'effet <span class="buff">[Volonté de l'épée]</span> s'active, la Défense augmente de <span class="stat-boost">1 %</span> (cumulable 60 fois).<br>
        Durée : illimitée.</p>
    `,
    1: `
        <h3>Avancement 5 étoiles :</h3>
        <p>La Défense de l'utilisatrice augmente de <span class="stat-boost">12 %</span>.<br>
        Lorsque l'effet <span class="buff">[Volonté de l'épée]</span> s'active, la Défense augmente de <span class="stat-boost">6 %</span> (cumulable 60 fois).<br>
        Durée : illimitée.</p>
    `,
    2: `
        <h3>Avancement 10 étoiles :</h3>
        <p>Augmente l'Attaque, la Défense et les PV de l'utilisatrice de <span class="stat-boost">15 %</span>.</p>
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