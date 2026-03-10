// --- INITIALISATION VIA URL ---
const urlParams = new URLSearchParams(window.location.search);
const charId = urlParams.get('id'); // Ex: ?id=alicia-blanche
const hunter = huntersData[charId];

if (hunter) {
    // ==========================================
    // 1. REMPLISSAGE DES INFOS DE BASE
    // ==========================================
    
    // --- 1a. MAPPINGS D'IMAGES ---

    // Mapping des éléments vers leurs images respectives (Vent, Eau, Feu...)
    const elementImages = {
        "Feu": "Fire_Element.png",
        "Ténèbres": "Dark_Element.png",
        "Lumière": "Light_Element.png",
        "Eau": "Water_Element.png",
        "Vent": "Wind_Element.png"
    };

    // Mapping des raretés vers leurs images respectives (SSR, SR, R...)
    // Assure-toi que ces fichiers existent bien dans img/rarete/
    const rarityImages = {
        "SSR": "SSR.png",
        "SR": "SR.png",
        "R": "R.png"
    };


    // --- 1b. INFOS DU CHASSEUR ---

    // Nom
    document.getElementById('char-name-display').textContent = hunter.name;
    
    // Icône de l'élément (chemin: img/Element/)
    const elementImgDisplay = document.getElementById('char-element-display');
    if (elementImgDisplay && hunter.element && elementImages[hunter.element]) {
        elementImgDisplay.src = "img/Element/" + elementImages[hunter.element];
        elementImgDisplay.style.display = 'block';
    }

    // Image & Dégradé
    document.getElementById('char-img-display').src = hunter.image;
    document.getElementById('char-header').style.background = hunter.gradient;
    
    // Icône de rareté (chemin: img/rarete/)
    const charRarityImgDisplay = document.getElementById('char-rarity-img-display');
    if (charRarityImgDisplay && hunter.rarity && rarityImages[hunter.rarity]) {
        charRarityImgDisplay.src = "img/rarete/" + rarityImages[hunter.rarity];
        charRarityImgDisplay.style.display = 'block';
    }


    // --- 1c. INFOS DE L'ARME ---

    // Nom
    document.getElementById('weapon-name-display').textContent = `Arme : ${hunter.weaponName}`;
    
    // Image & Dégradé (calqué sur le chasseur)
    document.getElementById('weapon-img-display').src = hunter.weaponImage;
    document.getElementById('weapon-header').style.background = hunter.gradient;

    // Icône de rareté (chemin: img/rarete/) (calquée sur le chasseur)
    const weaponRarityImgDisplay = document.getElementById('weapon-rarity-img-display');
    if (weaponRarityImgDisplay && hunter.rarity && rarityImages[hunter.rarity]) {
        weaponRarityImgDisplay.src = "img/rarete/" + rarityImages[hunter.rarity];
        weaponRarityImgDisplay.style.display = 'block';
    }


    // ==========================================
    // 2. LOGIQUE DES ÉTOILES DU CHASSEUR (0 à 5)
    // ==========================================
    let charLevel = 0;
    // On cible UNIQUEMENT les étoiles dans #char-stars-container
    const charStars = document.querySelectorAll('#char-stars-container .star');
    const charMsg = document.getElementById('char-message');

    function updateChar(level) {
        charMsg.innerHTML = hunter.fullData[level] || hunter.fullData[0];
        
        charStars.forEach(star => {
            const starValue = parseInt(star.getAttribute('data-value'));
            star.classList.toggle('filled', starValue <= level);
        });
    }

    charStars.forEach(star => {
        star.addEventListener('click', function() {
            const clickedValue = parseInt(this.getAttribute('data-value'));
            // Permet de désélectionner si on clique sur l'étoile active
            charLevel = (clickedValue === charLevel) ? clickedValue - 1 : clickedValue;
            updateChar(charLevel);
        });
    });


    // ==========================================
    // 3. LOGIQUE DES ÉTOILES DE L'ARME (0 à 2)
    // ==========================================
    let weaponLevel = 0;
    // On cible UNIQUEMENT les étoiles dans #weapon-stars-container
    const weaponStars = document.querySelectorAll('#weapon-stars-container .star');
    const weaponMsg = document.getElementById('weapon-message');

    function updateWeapon(level) {
        weaponMsg.innerHTML = hunter.weaponData[level] || hunter.weaponData[0];
        
        weaponStars.forEach(star => {
            const starValue = parseInt(star.getAttribute('data-value'));
            star.classList.toggle('filled', starValue <= level);
        });
    }

    weaponStars.forEach(star => {
        star.addEventListener('click', function() {
            const clickedValue = parseInt(this.getAttribute('data-value'));
            // Permet de désélectionner si on clique sur l'étoile active
            weaponLevel = (clickedValue === weaponLevel) ? clickedValue - 1 : clickedValue;
            updateWeapon(weaponLevel);
        });
    });


    // ==========================================
    // 4. LANCEMENT INITIAL (Niveau 0 pour tout)
    // ==========================================
    updateChar(0);
    updateWeapon(0);

} else {
    // Si l'ID de l'URL ne correspond à rien dans les data
    console.error("Erreur : Chasseur introuvable dans les données. Vérifie l'ID dans l'URL.");
    const charNameDisplay = document.getElementById('char-name-display');
    if (charNameDisplay) charNameDisplay.textContent = "Chasseur introuvable";
}