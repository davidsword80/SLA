// --- ELEMENTS DOM ---
const weaponStarsContainer = document.getElementById('weapon-stars-container');
const weaponStars = weaponStarsContainer.querySelectorAll('.star');
const weaponMessage = document.getElementById('weapon-message');
const toggleBtn = document.getElementById('toggleBtn');
const weaponImg = document.getElementById('weapon-img-display');
const cardTitle = document.getElementById('weapon-name-display');
const cardHeader = document.getElementById('card-header');

// NOUVEAUX ELEMENTS DOM POUR LES IMAGES
const cardRarityImg = document.getElementById('weapon-rarity-img-display');
const cardElementImg = document.getElementById('weapon-element-display');

// --- INITIALISATION VIA URL ---
const urlParams = new URLSearchParams(window.location.search);
const weaponId = urlParams.get('id');
const weapon = weaponsData[weaponId];

if (weapon) {
    // --- MAPPINGS D'IMAGES ---
    const elementImages = {
        "Feu": "Fire_Element.png",
        "Ténèbre": "Dark_Element.png",
        "Lumière": "Light_Element.png",
        "Eau": "Water_Element.png",
        "Vent": "Wind_Element.png"
    };

    const rarityImages = {
        "SSR": "SSR.png",
        "SR": "SR.png",
        "R": "R.png"
    };

    // --- REMPLISSAGE DYNAMIQUE DE BASE ---
    cardTitle.textContent = `Arme : ${weapon.name}`;
    weaponImg.src = weapon.image;
    weaponImg.alt = weapon.name;
    cardHeader.style.background = weapon.gradient;
    
    // --- GESTION DE L'ICÔNE DE L'ÉLÉMENT ---
    if (cardElementImg && weapon.element && elementImages[weapon.element]) {
        cardElementImg.src = "img/Element/" + elementImages[weapon.element];
        cardElementImg.style.display = 'block';
    }

    // --- GESTION DE L'ICÔNE DE RARETÉ ---
    if (cardRarityImg && weapon.rarity && rarityImages[weapon.rarity]) {
        cardRarityImg.src = "img/rarete/" + rarityImages[weapon.rarity];
        cardRarityImg.style.display = 'block';
    }

    let weaponCurrentLevel = 0;
    let isSummaryMode = false;

    function renderWeaponContent() {
        const dataSource = isSummaryMode ? weapon.summaryData : weapon.fullData;
        weaponMessage.innerHTML = dataSource[weaponCurrentLevel] || dataSource[0];
    }

    renderWeaponContent();

    // --- GESTION DES ÉVÉNEMENTS ---
    toggleBtn.addEventListener('click', function() {
        isSummaryMode = !isSummaryMode;
        this.textContent = isSummaryMode ? "Texte Complet" : "Mode Résumé";
        this.classList.toggle('active', isSummaryMode);
        renderWeaponContent();
    });

    weaponStars.forEach(star => {
        star.addEventListener('click', function () {
            const clickedValue = parseInt(this.getAttribute('data-value'));
            weaponCurrentLevel = (clickedValue === weaponCurrentLevel) ? clickedValue - 1 : clickedValue;
            updateWeaponStars(weaponCurrentLevel);
            renderWeaponContent();
        });
    });

    function updateWeaponStars(level) {
        weaponStars.forEach(star => {
            const starValue = parseInt(star.getAttribute('data-value'));
            star.classList.toggle('filled', starValue <= level);
        });
    }
} else {
    console.error("Arme non trouvée dans les fichiers data.");
}