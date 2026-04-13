// Initialise l'objet global s'il n'existe pas encore
if (typeof weaponsData === 'undefined') { 
    var weaponsData = {}; 
}

// --- ARC (R) ---
weaponsData["arc"] = {
    name: "Arc",
    rarity: "R",
    element: null,
    gradient: "linear-gradient(90deg, #888, #333)",
    image: "Armes_Chasseurs_R/Arc/Relic_R_Pickaxe_PortraitBig.png",
    fullData: {
        0: `<h3>Passif :</h3><p>Augmente les dégats de coup critique de l'utilisateur de <span class="stat-boost">3 %</span>.</p>`,
        1: `<h3>5 étoiles :</h3><p>Augmente les dégats de coup critique de l'utilisateur de <span class="stat-boost">18 %</span>.</p>`,
        2: `<h3>10 étoiles :</h3><p>Augmente l'Attaque, la Défense et les PV de l'utilisateur de <span class="stat-boost">10 %</span>.</p>`
    },
};

// --- BÂTON (R) ---
weaponsData["baton"] = {
    name: "Bâton",
    rarity: "R",
    element: null,
    gradient: "linear-gradient(90deg, #888, #333)",
    image: "Armes_Chasseurs_R/Baton/Relic_R_Staff_PortraitBig.png",
    fullData: {
        0: `<h3>Passif :</h3><p>Lors de l'utilisation d'une compétence QTE, la jauge de puissance se charge de <span class="stat-boost">1.5 %</span>.</p>`,
        1: `<h3>5 étoiles :</h3><p>Lors de l'utilisation d'une compétence QTE, la jauge de puissance se charge de <span class="stat-boost">9 %</span>.</p>`,
        2: `<h3>10 étoiles :</h3><p>Augmente L'attaque, la Défense et les PV de l'utilisateur de <span class="stat-boost">10 %</span>.</p>`
    },
};

// --- BOUCLIER (R) ---
weaponsData["bouclier"] = {
    name: "Bouclier",
    rarity: "R",
    element: null,
    gradient: "linear-gradient(90deg, #888, #333)",
    image: "Armes_Chasseurs_R/Bouclier/Relic_R_Shield_PortraitBig.png",
    fullData: {
        0: `<h3>Passif :</h3><p>Réduit les dégats infligés par les boss de <span class="stat-boost">1.5 %</span>.</p>`,
        1: `<h3>5 étoiles :</h3><p>Réduit les dégats infligés par les boss de <span class="stat-boost">9 %</span>.</p>`,
        2: `<h3>10 étoiles :</h3><p>Augmente L'attaque, la Défense et les PV de l'utilisateur de <span class="stat-boost">10 %</span>.</p>`
    },
};

// --- DAGUE (R) ---
weaponsData["dague"] = {
    name: "Dague",
    rarity: "R",
    element: null,
    gradient: "linear-gradient(90deg, #888, #333)",
    image: "Armes_Chasseurs_R/Dague/Relic_R_Dagger_PortraitBig.png",
    fullData: {
        0: `<h3>Passif :</h3><p>Augmente les dégats de L'attaque de base de l'utilisateur de <span class="stat-boost">2%</span>.</p>`,
        1: `<h3>5 étoiles :</h3><p>Augmente les dégats de L'attaque de base de l'utilisateur de <span class="stat-boost">12%</span>.</p>`,
        2: `<h3>10 étoiles :</h3><p>Augmente L'attaque, la Défense et les PV de l'utilisateur de <span class="stat-boost">10%</span>.</p>`
    },
};

// --- ÉPÉE (R) ---
weaponsData["epee"] = {
    name: "Épée",
    rarity: "R",
    element: null,
    gradient: "linear-gradient(90deg, #888, #333)",
    image: "Armes_Chasseurs_R/Epee/Relic_R_Sword_PortraitBig.png",
    fullData: {
        0: `<h3>Passif :</h3><p>Les dégâts de faiblesse élémentaire augmentent de <span class="stat-boost">1.5%</span>.</p>`,
        1: `<h3>5 étoiles :</h3><p>Augmente de <span class="stat-boost">9%</span> les dégâts infligés par l'utilisateur aux ennemis dotés d'une faiblesse élémentaire.</p>`,
        2: `<h3>10 étoiles :</h3><p>Augmente l'Attaque, la Défense et les PV de l'utilisateur de <span class="stat-boost">10%</span>.</p>`
    },
};

// --- ESPRIT DE MAGIE (R) ---
weaponsData["esprit-de-magie"] = {
    name: "Esprit de magie",
    rarity: "R",
    element: null,
    gradient: "linear-gradient(90deg, #888, #333)",
    image: "Armes_Chasseurs_R/Esprit_de_magie/Relic_R_MagicBook_PortraitBig.png",
    fullData: {
        0: `<h3>Passif :</h3><p>Augmente le taux de remplissage de la jauge de puissance de l'utilisateur de <span class="stat-boost">4%</span>.</p>`,
        1: `<h3>5 étoiles :</h3><p>Augmente le taux de remplissage de la jauge de puissance de l'utilisateur de <span class="stat-boost">24%</span>.</p>`,
        2: `<h3>10 étoiles :</h3><p>Augmente l'Attaque, la Défense et les PV de l'utilisateur de <span class="stat-boost">10%</span>.</p>`
    },
};

// --- HACHETTE (R) ---
weaponsData["hachette"] = {
    name: "Hachette",
    rarity: "R",
    element: null,
    gradient: "linear-gradient(90deg, #888, #333)",
    image: "Armes_Chasseurs_R/Hachette/Relic_R_OneHandAxe_PortraitBig.png",
    fullData: {
        0: `<h3>Passif :</h3><p>Augmente les dégâts de l'attaque de noyau de l'utilisateur de <span class="stat-boost">3%</span>.</p>`,
        1: `<h3>5 étoiles :</h3><p>Augmente les dégâts de l'attaque de noyau de l'utilisateur de <span class="stat-boost">18%</span>.</p>`,
        2: `<h3>10 étoiles :</h3><p>Augmente l'Attaque, la Défense et les PV de l'utilisateur de <span class="stat-boost">10%</span>.</p>`
    },
};