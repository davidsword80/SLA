/* main.js - Version Universelle & Insensible aux accents */

// --- Variables d'état des filtres ---
let selectedFilter = "all";       // Filtre Principal (Chasseurs)
let selectedSubFilter = "all";    // Sous-filtre (Chasseurs)
let selectedSubSubFilter = "all"; // Sous-sous-filtre (Chasseurs & Ombres)
let selectedSimpleFilter = "all"; // Filtre Simple (Runes)

document.addEventListener('DOMContentLoaded', function () {
    // Initialisation : Active visuellement les boutons "Tous"
    setActiveButton('.filter-btn', 'all');
    setActiveButton('.sub-filter-btn', 'all');
    setActiveButton('.sub-sub-filter-btn', 'all');

    // Masquer les filtres au démarrage si nécessaire
    const filtersContainer = document.getElementById('filters');
    // filtersContainer.style.display = 'none'; // Décommenter si besoin
    
    // Application initiale
    applyFilters();
});

// --- Gestion des Événements (Click) ---

document.querySelectorAll('.filter-btn').forEach(function (button) {
    if (!button.hasAttribute('onclick')) {
        button.addEventListener('click', function () {
            selectedFilter = this.getAttribute('data-filter');
            updateActiveState('.filter-btn', this);
            applyFilters();
        });
    }
});

document.querySelectorAll('.sub-filter-btn').forEach(function (button) {
    button.addEventListener('click', function () {
        selectedSubFilter = this.getAttribute('data-sub-filter');
        updateActiveState('.sub-filter-btn', this);
        applyFilters();
    });
});

document.querySelectorAll('.sub-sub-filter-btn').forEach(function (button) {
    button.addEventListener('click', function () {
        selectedSubSubFilter = this.getAttribute('data-sub-sub-filter');
        updateActiveState('.sub-sub-filter-btn', this);
        applyFilters();
    });
});

// Barre de recherche
const searchInput = document.getElementById('search');
if (searchInput) {
    searchInput.addEventListener('input', function () {
        applyFilters();
    });
}

// --- Fonctions Utilitaires ---

/**
 * Nettoie le texte : met en minuscule et retire les accents
 * Exemple : "Héroïque" devient "heroique"
 */
function normalizeText(text) {
    if (!text) return "";
    return text.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase();
}

function updateActiveState(selector, activeButton) {
    document.querySelectorAll(selector).forEach(btn => btn.classList.remove('active'));
    activeButton.classList.add('active');
}

function setActiveButton(selector, value) {
    const btn = document.querySelector(`${selector}[data-filter="${value}"]`) || 
                document.querySelector(`${selector}[data-sub-filter="${value}"]`) || 
                document.querySelector(`${selector}[data-sub-sub-filter="${value}"]`);
    if (btn) btn.classList.add('active');
}

function toggleFilters() {
    var filters = document.getElementById('filters');
    if (!filters) filters = document.querySelector('.filter-section');

    if (filters) {
        if (filters.style.display === 'none' || filters.style.display === '') {
            filters.style.display = 'flex';
            filters.style.justifyContent = 'center';
            filters.style.flexWrap = 'wrap';
        } else {
            filters.style.display = 'none';
        }
    }
}

// --- Fonctions de Filtrage ---

function filterItems(category, button) {
    selectedSimpleFilter = category;
    if (button) {
        const parent = button.parentElement;
        if (parent) {
            parent.querySelectorAll('.filter-btn, .filter-button').forEach(btn => {
                btn.classList.remove('active');
            });
        }
        button.classList.add('active');
    }
    applyFilters();
}

function applyFilters() {
    // 1. Récupération et nettoyage de la recherche
    let searchInputVal = document.getElementById('search') ? document.getElementById('search').value : "";
    let searchTerm = normalizeText(searchInputVal); // On retire les accents de la recherche

    let items = document.querySelectorAll('.item');

    items.forEach(function (item) {
        // 2. Récupération et nettoyage du nom de l'item
        let rawText = item.querySelector('h4') ? item.querySelector('h4').textContent : item.textContent;
        let itemText = normalizeText(rawText); // On retire les accents du nom de l'item

        // Vérification correspondance texte
        let matchesSearch = !searchTerm || itemText.includes(searchTerm);

        // Vérification des catégories
        let matchesSimple = (selectedSimpleFilter === "all" || item.classList.contains(selectedSimpleFilter));
        let matchesMain = (selectedFilter === "all" || item.classList.contains(selectedFilter));
        let matchesSub = (selectedSubFilter === "all" || item.classList.contains(selectedSubFilter));
        let matchesSubSub = (selectedSubSubFilter === "all" || item.classList.contains(selectedSubSubFilter));

        // Affichage
        if (matchesSearch && matchesSimple && matchesMain && matchesSub && matchesSubSub) {
            item.style.display = 'block';
        } else {
            item.style.display = 'none';
        }
    });
}

// --- Pop-ups ---
function openPopup(id) {
    const popup = document.getElementById(id);
    if (popup) popup.style.display = "flex";
}

function closePopup(id) {
    const popup = document.getElementById(id);
    if (popup) popup.style.display = "none";
}

function showRarity(button, rarityClass) {
    const container = button.closest('.popup-content');
    if (!container) return;

    container.querySelectorAll('.rarity-btn').forEach(btn => btn.classList.remove('active'));
    button.classList.add('active');

    container.querySelectorAll('.passive-content').forEach(content => {
        content.classList.remove('active');
    });

    const targetContent = container.querySelector('.passive-content.' + rarityClass);
    if (targetContent) targetContent.classList.add('active');
}

window.onclick = function(event) {
    if (event.target.classList.contains('popup')) {
        event.target.style.display = "none";
    }
};