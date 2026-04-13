// ============================================================
// logic-armes-chasseurs.js
// Gère deux modes selon les données disponibles :
//   - Mode CHASSEUR  : si huntersData[id] existe
//   - Mode ARME      : si weaponsData[id] existe
// ============================================================

// --- MAPPINGS D'IMAGES (communs aux deux modes) ---
const elementImages = {
    "Feu":      "Fire_Element.png",
    "Ténèbres": "Dark_Element.png",
    "Ténèbre":  "Dark_Element.png",
    "Lumière":  "Light_Element.png",
    "Eau":      "Water_Element.png",
    "Vent":     "Wind_Element.png"
};

const rarityImages = {
    "SSR": "SSR.png",
    "SR":  "SR.png",
    "R":   "R.png"
};

// --- RÉCUPÉRATION DE L'ID DANS L'URL ---
const urlParams = new URLSearchParams(window.location.search);
const entityId  = urlParams.get('id');

// ============================================================
// UTILITAIRE : affiche une icône de rareté dans un élément DOM
// ============================================================
function setRarityImg(elementId, rarity) {
    const el = document.getElementById(elementId);
    if (el && rarity && rarityImages[rarity]) {
        el.src   = "img/rarete/" + rarityImages[rarity];
        el.style.display = 'block';
    }
}

// ============================================================
// UTILITAIRE : affiche une icône d'élément dans un élément DOM
// ============================================================
function setElementImg(elementId, element) {
    const el = document.getElementById(elementId);
    if (el && element && elementImages[element]) {
        el.src   = "img/Element/" + elementImages[element];
        el.style.display = 'block';
    }
}

// ============================================================
// UTILITAIRE : gestion des étoiles (clic + remplissage)
// ============================================================
function initStars(containerSelector, onLevelChange) {
    const stars = document.querySelectorAll(containerSelector + ' .star');
    let currentLevel = 0;

    function updateStars(level) {
        stars.forEach(star => {
            const val = parseInt(star.getAttribute('data-value'));
            star.classList.toggle('filled', val <= level);
        });
    }

    stars.forEach(star => {
        star.addEventListener('click', function () {
            const clicked = parseInt(this.getAttribute('data-value'));
            // Désélectionne si on reclique sur l'étoile active
            currentLevel = (clicked === currentLevel) ? clicked - 1 : clicked;
            updateStars(currentLevel);
            onLevelChange(currentLevel);
        });
    });

    // Niveau initial
    updateStars(0);
    onLevelChange(0);
}


// ============================================================
// MODE CHASSEUR
// ============================================================
function initHunterMode(hunter) {

    // --- Infos du chasseur ---
    const charNameEl = document.getElementById('char-name-display');
    if (charNameEl) charNameEl.textContent = hunter.name;

    const charImgEl = document.getElementById('char-img-display');
    if (charImgEl) charImgEl.src = hunter.image;

    const charHeaderEl = document.getElementById('char-header');
    if (charHeaderEl) charHeaderEl.style.background = hunter.gradient;

    setElementImg('char-element-display', hunter.element);
    setRarityImg('char-rarity-img-display', hunter.rarity);

    // --- Infos de l'arme du chasseur ---
    const weaponNameEl = document.getElementById('weapon-name-display');
    if (weaponNameEl) weaponNameEl.textContent = `Arme : ${hunter.weaponName}`;

    const weaponImgEl = document.getElementById('weapon-img-display');
    if (weaponImgEl) weaponImgEl.src = hunter.weaponImage;

    const weaponHeaderEl = document.getElementById('weapon-header');
    if (weaponHeaderEl) weaponHeaderEl.style.background = hunter.gradient;

    setRarityImg('weapon-rarity-img-display', hunter.rarity);

    // --- Étoiles du chasseur (0 à 5) ---
    const charMsgEl = document.getElementById('char-message');
    initStars('#char-stars-container', level => {
        if (charMsgEl) charMsgEl.innerHTML = hunter.fullData[level] || hunter.fullData[0];
    });

    // --- Étoiles de l'arme (0 à 2) ---
    const weaponMsgEl = document.getElementById('weapon-message');
    initStars('#weapon-stars-container', level => {
        if (weaponMsgEl) weaponMsgEl.innerHTML = hunter.weaponData[level] || hunter.weaponData[0];
    });
}


// ============================================================
// MODE ARME
// ============================================================
function initWeaponMode(weapon) {

    // --- Infos de base de l'arme ---
    const cardTitleEl = document.getElementById('weapon-name-display');
    if (cardTitleEl) cardTitleEl.textContent = `Arme : ${weapon.name}`;

    const weaponImgEl = document.getElementById('weapon-img-display');
    if (weaponImgEl) {
        weaponImgEl.src = weapon.image;
        weaponImgEl.alt = weapon.name;
    }

    const weaponHeaderEl = document.getElementById('weapon-header');
    if (weaponHeaderEl) weaponHeaderEl.style.background = weapon.gradient;

    setElementImg('weapon-element-display', weapon.element);
    setRarityImg('weapon-rarity-img-display', weapon.rarity);

    // --- Mode Résumé / Texte Complet ---
    let isSummaryMode = false;

    const toggleBtn = document.getElementById('toggleBtn');
    if (toggleBtn) {
        toggleBtn.addEventListener('click', function () {
            isSummaryMode = !isSummaryMode;
            this.textContent = isSummaryMode ? "Texte Complet" : "Mode Résumé";
            this.classList.toggle('active', isSummaryMode);
            renderWeaponContent(currentWeaponLevel);
        });
    }

    // --- Étoiles de l'arme (0 à 2) ---
    let currentWeaponLevel = 0;
    const weaponMsgEl = document.getElementById('weapon-message');

    function renderWeaponContent(level) {
        const dataSource = isSummaryMode ? weapon.summaryData : weapon.fullData;
        if (weaponMsgEl) weaponMsgEl.innerHTML = dataSource[level] || dataSource[0];
    }

    initStars('#weapon-stars-container', level => {
        currentWeaponLevel = level;
        renderWeaponContent(level);
    });
}


// ============================================================
// POINT D'ENTRÉE : détection automatique du mode
// ============================================================
if (!entityId) {
    console.error("Aucun id trouvé dans l'URL. Ajoute ?id=nom-de-l-entite");
} else {
    // Priorité : chasseur > arme
    const hunter = (typeof huntersData !== 'undefined') ? huntersData[entityId] : undefined;
    const weapon = (typeof weaponsData !== 'undefined') ? weaponsData[entityId] : undefined;

    if (hunter) {
        initHunterMode(hunter);
    } else if (weapon) {
        initWeaponMode(weapon);
    } else {
        console.error(`Aucune donnée trouvée pour l'id "${entityId}". Vérifie les fichiers data chargés.`);

        // Affichage d'un message d'erreur dans l'interface si possible
        const nameEl = document.getElementById('weapon-name-display') || document.getElementById('char-name-display');
        if (nameEl) nameEl.textContent = "Entité introuvable";
    }
}