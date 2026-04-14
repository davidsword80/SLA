// Initialise l'objet global s'il n'existe pas encore
if (typeof weaponsData === 'undefined') { 
    var weaponsData = {}; 
}

// --- ARC EN ACIER (SR) ---
weaponsData["arc-en-acier"] = {
    name: "Arc en acier",
    rarity: "SR",
    element: null,
    gradient: "linear-gradient(90deg, #888, #333)",
    image: "Armes_Chasseurs_SR/arc_en_acier/Relic_SR_Bow_PortraitBig.png",
    fullData: {
        0: `<h3>Passif :</h3><p>Les dégâts de coup critique de l'utilisateur augmentent de <span class="stat-boost">9%</span>.</p>`,
        1: `<h3>5 étoiles :</h3><p>Augmente les dégâts de coup critique de l'utilisateur de <span class="stat-boost">24%</span>.</p>`,
        2: `<h3>10 étoiles :</h3><p>Augmente l'Attaque, la Défense et les PV de l'utilisateur de <span class="stat-boost">10%</span>.</p>`
    },
};

// --- BÂTON EN ACIER (SR) ---
weaponsData["baton-en-acier"] = {
    name: "Bâton en acier",
    rarity: "SR",
    element: null,
    gradient: "linear-gradient(90deg, #888, #333)",
    image: "Armes_Chasseurs_SR/baton_en_acier/Relic_SR_Staff_PortraitBig.png",
    fullData: {
        0: `<h3>Passif :</h3><p>Lorsque vous utilisez la compétence <strong>QTE</strong>, votre jauge de puissance se charge de <span class="stat-boost">4.5%</span>.</p>`,
        1: `<h3>5 étoiles :</h3><p>Lors de l'utilisation d'une compétence <strong>QTE</strong>, la jauge de puissance se charge de <span class="stat-boost">12%</span>.</p>`,
        2: `<h3>10 étoiles :</h3><p>Augmente l'Attaque, la Défense et les PV de l'utilisateur de <span class="stat-boost">10%</span>.</p>`
    },
};

// --- BOUCLIER EN ACIER (SR) ---
weaponsData["bouclier-en-acier"] = {
    name: "Bouclier en acier",
    rarity: "SR",
    element: null,
    gradient: "linear-gradient(90deg, #888, #333)",
    image: "Armes_Chasseurs_SR/bouclier_en_acier/Relic_SR_Shield_PortraitBig.png",
    fullData: {
        0: `<h3>Passif :</h3><p>Réduit les dégâts infligés par les boss de <span class="stat-boost">4.5%</span>.</p>`,
        1: `<h3>5 étoiles :</h3><p>Réduit les dégâts infligés par les boss de <span class="stat-boost">12%</span>.</p>`,
        2: `<h3>10 étoiles :</h3><p>Augmente l'Attaque, la Défense et les PV de l'utilisateur de <span class="stat-boost">10%</span>.</p>`
    },
};

// --- ÉPÉE LONGUE EN ACIER (SR) ---
weaponsData["epee-longue-en-acier"] = {
    name: "Épée longue en acier",
    rarity: "SR",
    element: null,
    gradient: "linear-gradient(90deg, #888, #333)",
    image: "Armes_Chasseurs_SR/epee_longue_en_acier/Relic_SR_Sword_PortraitBig.png",
    fullData: {
        0: `<h3>Passif :</h3><p>Les dégâts de faiblesse élémentaire augmentent de <span class="stat-boost">4.5%</span>.</p>`,
        1: `<h3>5 étoiles :</h3><p>Augmente de <span class="stat-boost">12%</span> les dégâts infligés par l'utilisateur aux ennemis dotés d'une faiblesse élémentaire.</p>`,
        2: `<h3>10 étoiles :</h3><p>Augmente l'Attaque, la Défense et les PV de l'utilisateur de <span class="stat-boost">10%</span>.</p>`
    },
};

// --- GRIMOIRE ANCIEN (SR) ---
weaponsData["grimoire-ancien"] = {
    name: "Grimoire ancien",
    rarity: "SR",
    element: null,
    gradient: "linear-gradient(90deg, #888, #333)",
    image: "Armes_Chasseurs_SR/grimoire_ancien/Relic_SR_MagicBook_PortraitBig.png",
    fullData: {
        0: `<h3>Passif :</h3><p>Le taux de remplissage de la jauge de puissance augmente de <span class="stat-boost">12%</span>.</p>`,
        1: `<h3>5 étoiles :</h3><p>Augmente le taux de remplissage de la jauge de puissance de <span class="stat-boost">32%</span>.</p>`,
        2: `<h3>10 étoiles :</h3><p>Augmente l'Attaque, la Défense et les PV de l'utilisateur de <span class="stat-boost">10%</span>.</p>`
    },
};

// --- HACHE EN ACIER (SR) ---
weaponsData["hache-en-acier"] = {
    name: "Hache en acier",
    rarity: "SR",
    element: null,
    gradient: "linear-gradient(90deg, #888, #333)",
    image: "Armes_Chasseurs_SR/hache_en_acier/Relic_SR_OneHandAxe_PortraitBig.png",
    fullData: {
        0: `<h3>Passif :</h3><p>Les dégâts de vos attaques de noyau augmentent de <span class="stat-boost">9%</span>.</p>`,
        1: `<h3>5 étoiles :</h3><p>Augmente les dégâts de l'Attaque de noyau de l'utilisateur de <span class="stat-boost">24%</span>.</p>`,
        2: `<h3>10 étoiles :</h3><p>Augmente l'Attaque, la Défense et les PV de l'utilisateur de <span class="stat-boost">10%</span>.</p>`
    },
};

// --- DAGUE EN ACIER (SR) ---
weaponsData["dague-en-acier"] = {
    name: "Dague en acier",
    rarity: "SR",
    element: null,
    gradient: "linear-gradient(90deg, #888, #333)",
    image: "Armes_Chasseurs_SR/dague_en_acier/Relic_SR_Dagger_PortraitBig.png",
    fullData: {
        0: `<h3>Passif :</h3><p>Les dégâts de vos attaques de base augmentent de <span class="stat-boost">6%</span>.</p>`,
        1: `<h3>5 étoiles :</h3><p>Augmente les dégâts de l'Attaque de base de l'utilisateur de <span class="stat-boost">16%</span>.</p>`,
        2: `<h3>10 étoiles :</h3><p>Augmente l'Attaque, la Défense et les PV de l'utilisateur de <span class="stat-boost">10%</span>.</p>`
    },
};