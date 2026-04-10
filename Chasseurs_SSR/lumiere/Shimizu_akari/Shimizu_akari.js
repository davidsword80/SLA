const charStarsContainer = document.getElementById('char-stars-container');
const charStars = charStarsContainer.querySelectorAll('.star');
const charMessage = document.getElementById('char-message');
const toggleBtn = document.getElementById('toggleBtn');
let charCurrentLevel = 0;
let isSummaryMode = false;

const charFullData = {
    0: `<h3>Passif :</h3>Au début du combat, l'effet <span class="buff">[Investigatrice de la flamme divine]</span> est activé.<br> Lorsque la compétence <strong>Lumière de l'aube</strong> est utilisée, Dévastation devient <strong>Attaque lourde: Dévastation</strong>, qui augmente les dégâts infligés par l'utilisatrice de <span class="stat-boost">100%</span>.<br> Si l'utilisatrice est touchée lors d'une <strong>Ruée</strong>, <strong>Évasion extrême</strong> est activée, les ennemis proches subissent des dégâts, et ces derniers sont <span class="buff">[étourdis]</span>.<br> <br><div class="detail-box"><h4><span class="buff">[Investigatrice de la flamme divine]</span></h4>Lorsque les compétences Lumière de l'aube ou Attaque lourde: Dévastation touchent leur cible, elles leur appliquent l'effet <span class="buff">[Flamme divine]</span> 1 fois.<br> Durée: illimitée</div><div class="detail-box"><h4><span class="buff">[Flamme divine]</span></h4>Augmente les dégâts de lumière subis par la cible de <span class="stat-boost">1%</span> (cumulable jusqu'à 10 fois).<br> Durée: 24 seconde(s)</div><div class="detail-box"><h4><span class="buff">[étourdissement]</span></h4>Immobilise la cible.<br> Durée: 2 seconde(s)</div>`,
    1: `<h3>1 étoile :</h3>Améliore l'effet <span class="buff">[Investigatrice de la flamme divin]</span>.<br> Améliore l'effet <span class="buff">[Feu sacré]</span>.<br> <br><div class="detail-box"><h4><span class="buff">[Investigatrice de la flamme divine]</span></h4>Lorsque les compétences Lumière de l'aube ou Attaque lourde: Dévastation touchent leur cible, elles lui appliquent 2 cumuls de l'effet <span class="buff">[Flamme divine]</span>.<br> Quand l'attaque d'un membre de l'équipe de type Lumière touche sa cible, elle active l'effet <span class="buff">[Echo de lumière]</span> (temps de rechargement: 20 seconde(s)).<br> Durée: illimitée</div><div class="detail-box"><h4><span class="buff">[Feu sacré]</span></h4>Active l'effet <span class="buff">[Écho de lumière]</span>.<br> Charge la jauge de puissance de l'utilisatrice de <span class="stat-boost">1.6%</span> toutes les 1 seconde(s).<br> Réduit les dégâts subis de <span class="stat-boost">12%</span>.<br> Durée: 24 Seconde(s)</div>`,
    2: `<h3>2 étoiles :</h3>Augmente les PV de l'utilisatrice de <span class="stat-boost">5%</span>.<br> Améliore le bouclier obtenu par les coéquipiers de type Lumière de <span class="stat-boost">5%</span>.<br>`,
    3: `<h3>3 étoiles :</h3>Améliore l'effet <span class="buff">[Flamme divine]</span>.<br> Améliore l'effet <span class="buff">[Anneau de feu]</span>.<br> <br><div class="detail-box"><h4><span class="buff">[Flamme divine]</span></h4>Augmente les dégâts de lumière subis de <span class="stat-boost">1.6%</span> (cumulable jusqu'à 10 fois).<br> Lorsque le maximum de cumuls est atteint, l'effet <span class="buff">[Anneau de feu]</span> s'active.<br> Durée: 24 seconde(s)</div><div class="detail-box"><h4><span class="buff">[Anneau de feu]</span></h4>Augmente les dégâts de lumière subis de <span class="stat-boost">20%</span>.<br> Lorsque cet effet est appliqué, il dissipe tous les effets [Flamme divine] qui ne peuvent plus être réactivés.<br> Lorsque cet effet se dissipe, l'utilisatrice récupère 5 cumuls de l'effet [Flamme divine].<br> Durée: 24 seconde(s)</div>`,
    4: `<h3>4 étoiles :</h3>Augmente les dégâts de lumière des coéquipiers de type Lumière de <span class="stat-boost">3%</span> par coéquipier de type Lumière présent dans le groupe.<br> Augmente la défense du coéquipier doté de la défense la plus élevée de <span class="stat-boost">3%</span>.<br>`,
    5: `<h3>5 étoiles :</h3>Améliore l'effet <span class="buff">[Brillance]</span>.<br> <br><div class="detail-box"><h4><span class="buff">[Brillance]</span></h4>Augmente les dégâts infligés par l'utilisatrice de <span class="stat-boost">16%</span>.<br> Augmente le Taux de coup critique de la compétence de base et de la compétence ultime de l'utilisatrice de <span class="stat-boost">16%</span>.<br> Redonne instantanément des PV équivalents à <span class="stat-boost">16%</span> des PV max de Shimizu Akari.<br> Durée: 24 seconde(s)</div>`
};

const charSummaryData = {
    0: `<h3>Passif : Prêtresse de la Flamme</h3>Début combat : [Investigatrice].<br> Lumière de l'aube = Attaque Lourde (+100% dégâts).<br> Ruée touchée = Évasion + [Étourdis].<br> [Flamme divine] : Dégâts Lumière subis +1% (Max 10).`,
    1: `<h3>1 étoile</h3>[Investigatrice] : Applique 2 cumuls.<br> Attaque allié Lumière = [Echo de lumière].<br> [Feu sacré] : Regen Jauge, Réduction Dégâts.`,
    2: `<h3>2 étoiles</h3>PV +5%.<br> Bouclier alliés Lumière +5%.`,
    3: `<h3>3 étoiles</h3>[Flamme divine] améliorée (+1.6%).<br> Max cumuls = [Anneau de feu] (+20% Dégâts Lumière subis).`,
    4: `<h3>4 étoiles</h3>Dégâts Lumière équipe +3% par allié Lumière.<br> Def +3% pour le tank.`,
    5: `<h3>5 étoiles</h3>[Brillance] améliorée : Dégâts +16%, Crit +16%, Soin 16%.`
};

function renderCharContent() { charMessage.innerHTML = isSummaryMode ? charSummaryData[charCurrentLevel] : charFullData[charCurrentLevel]; }
renderCharContent();
toggleBtn.addEventListener('click', function() { isSummaryMode = !isSummaryMode; this.textContent = isSummaryMode ? "Texte Complet" : "Mode Résumé"; this.classList.toggle('active', isSummaryMode); renderCharContent(); });
charStars.forEach(star => { star.addEventListener('click', function () { const clickedValue = parseInt(this.getAttribute('data-value')); charCurrentLevel = (clickedValue === charCurrentLevel) ? clickedValue - 1 : clickedValue; updateStars(charStars, charCurrentLevel); renderCharContent(); }); });
function updateStars(list, level) { list.forEach(star => { const val = parseInt(star.getAttribute('data-value')); star.classList.toggle('filled', val <= level); }); }

const weaponStarsContainer = document.getElementById('weapon-stars-container');
const weaponStars = weaponStarsContainer.querySelectorAll('.star');
const weaponMessage = document.getElementById('weapon-message');
let weaponCurrentLevel = 0;

const weaponData = {
    0: `<h3>0 étoile :</h3>Augmente les PV de l'utilisatrice de <span class="stat-boost">4%</span>.<br> Lorsque l'effet <span class="buff">[Écho de lumière]</span> est activé sur les coéquipiers de type Lumière, augmente les dégâts de lumière de tous les membres de l'équipe de <span class="stat-boost">2%</span> pendant 8 seconde(s).<br>`,
    1: `<h3>5 étoiles :</h3>Augmente les PV de l'utilisatrice de <span class="stat-boost">12%</span>.<br> Lorsque l'effet <span class="buff">[Écho de lumière]</span> est activé sur les coéquipiers de type Lumière, augmente les dégâts de lumière de tous les membres de l'équipe de <span class="stat-boost">8%</span> pendant 8 seconde(s).<br>`,
    2: `<h3>10 étoiles :</h3>Augmente l'Attaque, la Défense et les PV de l'utilisateur de 15%.<br>`
};

displayWeaponMessage(0);
weaponStars.forEach(star => { star.addEventListener('click', function () { const clickedValue = parseInt(this.getAttribute('data-value')); weaponCurrentLevel = (clickedValue === weaponCurrentLevel) ? clickedValue - 1 : clickedValue; updateStars(weaponStars, weaponCurrentLevel); displayWeaponMessage(weaponCurrentLevel); }); });
function displayWeaponMessage(level) { weaponMessage.innerHTML = weaponData[level]; }