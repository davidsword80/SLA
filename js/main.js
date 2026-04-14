/* main.js - Filtres multi-sélection par toggle, sans bouton "Tous" */

// --- État des filtres : ensembles de valeurs actives ---
let activeFilters       = new Set(); // .filter-btn
let activeSubFilters    = new Set(); // .sub-filter-btn
let activeSubSubFilters = new Set(); // .sub-sub-filter-btn
let activeSimpleFilters = new Set(); // filterItems()

function normalizeText(text) {
    if (!text) return "";
    return text.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase();
}

document.addEventListener('DOMContentLoaded', function () {
    // Supprimer le bouton "Afficher les filtres"
    document.querySelectorAll('.filter-button[onclick="toggleFilters()"]').forEach(btn => btn.remove());

    // Rendre les filtres visibles
    const filtersSection = document.getElementById('filters') || document.querySelector('.filter-section');
    if (filtersSection) filtersSection.style.display = '';

    // Supprimer les boutons "Tous"
    document.querySelectorAll('[data-filter="all"],[data-sub-filter="all"],[data-sub-sub-filter="all"]').forEach(btn => btn.remove());

    // Filtres principaux
    document.querySelectorAll('.filter-btn').forEach(function (button) {
        if (!button.hasAttribute('onclick')) {
            button.addEventListener('click', function () {
                toggleSetFilter(activeFilters, this.getAttribute('data-filter'), this);
                applyFilters();
            });
        }
    });

    // Sous-filtres
    document.querySelectorAll('.sub-filter-btn').forEach(function (button) {
        button.addEventListener('click', function () {
            toggleSetFilter(activeSubFilters, this.getAttribute('data-sub-filter'), this);
            applyFilters();
        });
    });

    // Sous-sous-filtres
    document.querySelectorAll('.sub-sub-filter-btn').forEach(function (button) {
        button.addEventListener('click', function () {
            toggleSetFilter(activeSubSubFilters, this.getAttribute('data-sub-sub-filter'), this);
            applyFilters();
        });
    });

    // Barre de recherche
    const searchInput = document.getElementById('search');
    if (searchInput) searchInput.addEventListener('input', applyFilters);

    applyFilters();
});

function toggleSetFilter(set, value, button) {
    if (set.has(value)) {
        set.delete(value);
        button.classList.remove('active');
    } else {
        set.add(value);
        button.classList.add('active');
    }
}

// Pour Runes / Noyaux / Gemmes (onclick="filterItems(...)")
function filterItems(category, button) {
    toggleSetFilter(activeSimpleFilters, category, button);
    applyFilters();
}

function applyFilters() {
    const searchInputEl = document.getElementById('search');
    const searchTerm = normalizeText(searchInputEl ? searchInputEl.value : "");

    document.querySelectorAll('.item').forEach(function (item) {
        const rawText = item.querySelector('h4') ? item.querySelector('h4').textContent : item.textContent;
        const itemText = normalizeText(rawText);

        const matchesSearch   = !searchTerm || itemText.includes(searchTerm);
        const matchesSimple   = activeSimpleFilters.size === 0 || [...activeSimpleFilters].some(f => item.classList.contains(f));
        const matchesMain     = activeFilters.size === 0       || [...activeFilters].some(f => item.classList.contains(f));
        const matchesSub      = activeSubFilters.size === 0    || [...activeSubFilters].some(f => item.classList.contains(f));
        const matchesSubSub   = activeSubSubFilters.size === 0 || [...activeSubSubFilters].some(f => item.classList.contains(f));

        item.style.display = (matchesSearch && matchesSimple && matchesMain && matchesSub && matchesSubSub) ? 'block' : 'none';
    });
}

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
    container.querySelectorAll('.passive-content').forEach(c => c.classList.remove('active'));
    const target = container.querySelector('.passive-content.' + rarityClass);
    if (target) target.classList.add('active');
}

window.onclick = function(event) {
    if (event.target.classList.contains('popup')) event.target.style.display = "none";
};

function toggleFilters() {} // conservé pour compatibilité
