// --- INITIALISATION VIA URL ---
const urlParams = new URLSearchParams(window.location.search);
const shadowId = urlParams.get('id');
const shadow = shadowsData[shadowId];

if (shadow) {
    // 1. Remplissage des infos visuelles et textes de l'Ombre
    const pageTitle = document.getElementById('page-title');
    if (pageTitle) {
        pageTitle.textContent = `Statistiques : ${shadow.shadowName.replace('Ombre : ', '')}`;
    }
    
    document.getElementById('shadow-name-display').textContent = shadow.shadowName;
    document.getElementById('shadow-rarity-display').textContent = shadow.shadowRarity;
    document.getElementById('shadow-img-display').src = shadow.shadowImage;
    document.getElementById('shadow-card-header').style.background = shadow.shadowGradient;

    // 2. Remplissage des infos visuelles et textes de l'Arme
    document.getElementById('weapon-name-display').textContent = shadow.weaponName;
    document.getElementById('weapon-rarity-display').textContent = shadow.weaponRarity;
    document.getElementById('weapon-img-display').src = shadow.weaponImage;
    document.getElementById('weapon-card-header').style.background = shadow.weaponGradient;

    /* ==========================================
       LOGIQUE OMBRE (Étoiles)
       ========================================== */
    const shadowStars = document.querySelectorAll('#shadow-stars-container .star');
    const shadowMessage = document.getElementById('shadow-message');
    let shadowCurrentLevel = 0;

    function renderShadowContent() {
        if (shadowMessage) {
            shadowMessage.innerHTML = shadow.shadowData[shadowCurrentLevel];
        }
    }

    shadowStars.forEach(star => {
        star.addEventListener('click', function () {
            shadowCurrentLevel = (shadowCurrentLevel === 1) ? 0 : 1;
            shadowStars.forEach(s => s.classList.toggle('filled', shadowCurrentLevel === 1));
            renderShadowContent();
        });
    });

    renderShadowContent();

    /* ==========================================
       LOGIQUE ARME (Étoiles et Bouton Résumé)
       ========================================== */
    const weaponStars = document.querySelectorAll('#weapon-stars-container .star');
    const weaponMessage = document.getElementById('weapon-message');
    const toggleBtn = document.getElementById('toggleBtn');
    let weaponCurrentLevel = 0;
    let isSummaryMode = false;

    function renderWeaponContent() {
        if (weaponMessage) {
            const dataSource = isSummaryMode ? shadow.weaponSummaryData : shadow.weaponFullData;
            weaponMessage.innerHTML = dataSource[weaponCurrentLevel];
        }
    }

    if (toggleBtn) {
        toggleBtn.addEventListener('click', function() {
            isSummaryMode = !isSummaryMode;
            this.textContent = isSummaryMode ? "Texte Complet" : "Mode Résumé";
            this.classList.toggle('active', isSummaryMode);
            renderWeaponContent();
        });
    }

    weaponStars.forEach(star => {
        star.addEventListener('click', function () {
            weaponCurrentLevel = (weaponCurrentLevel === 1) ? 0 : 1;
            weaponStars.forEach(s => s.classList.toggle('filled', weaponCurrentLevel === 1));
            renderWeaponContent();
        });
    });

    renderWeaponContent();

} else {
    console.error("Ombre non trouvée. Assure-toi que l'URL contient ?id=ber ou ?id=beste.");
}