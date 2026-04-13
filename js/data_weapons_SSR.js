// Initialise l'objet global s'il n'existe pas encore
if (typeof weaponsData === 'undefined') {
    var weaponsData = {};
}

// --- BONBON FANTÔME (SSR) ---
weaponsData["bonbon-fantome"] = {
    name: "Bonbon fantôme",
    rarity: "SSR",
    element: null,
    gradient: "linear-gradient(90deg, #888, #333)",
    image: "Armes_Chasseurs_SSR/bonbon_fantome/Relic_SSR_HWCandy_3_PortraitBig.png",
    fullData: {
        0: `<h3>Passif :</h3>
            <p>Augmente les PV de l'utilisateur de <span class="stat-boost">4%</span>.<br>
            Augmente le taux de remplissage de la jauge de puissance de l'utilisateur de <span class="stat-boost">4%</span>.</p>`,
        1: `<h3>5 étoiles :</h3>
            <p>Augmente les PV de l'utilisateur de <span class="stat-boost">4%</span>.<br>
            Augmente le taux de remplissage de la jauge de puissance de <span class="stat-boost">10%</span>.</p>`,
        2: `<h3>10 étoiles :</h3>
            <p>Augmente l'Attaque, la Défense et les PV de l'utilisateur de <span class="stat-boost">15%</span>.</p>`
    },
};

// --- BONBON FRANKENSTEIN (SSR) ---
weaponsData["bonbon-frankenstein"] = {
    name: "Bonbon Frankenstein",
    rarity: "SSR",
    element: null,
    gradient: "linear-gradient(90deg, #888, #333)",
    image: "Armes_Chasseurs_SSR/bonbon_frankenstein/Relic_SSR_HWCandy_2_PortraitBig.png",
    fullData: {
        0: `<h3>Passif :</h3>
            <p>Augmente la Défense de l'utilisateur de <span class="stat-boost">4%</span>.<br>
            Augmente les dégâts infligés par l'utilisateur de <span class="stat-boost">0.5%</span>.</p>`,
        1: `<h3>5 étoiles :</h3>
            <p>Augmente la Défense de l'utilisateur de <span class="stat-boost">10%</span>.<br>
            Augmente les dégâts infligés par l'utilisateur de <span class="stat-boost">15%</span>.</p>`,
        2: `<h3>10 étoiles :</h3>
            <p>Augmente l'Attaque, la Défense et les PV de l'utilisateur de <span class="stat-boost">5%</span>.</p>`
    },
};

// --- BONBON VAMPIRE (SSR) ---
weaponsData["bonbon-vampire"] = {
    name: "Bonbon vampire",
    rarity: "SSR",
    element: null,
    gradient: "linear-gradient(90deg, #888, #333)",
    image: "Armes_Chasseurs_SSR/bonbon_vampire/Relic_SSR_HWCandy_1_PortraitBig.png",
    fullData: {
        0: `<h3>Passif :</h3>
            <p>Augmente l'Attaque de l'utilisateur de <span class="stat-boost">4%</span>.<br>
            Augmente les Dégâts de coup critique de l'utilisateur de <span class="stat-boost">4%</span>.</p>`,
        1: `<h3>5 étoiles :</h3>
            <p>Augmente l'Attaque de l'utilisateur de <span class="stat-boost">10%</span>.<br>
            Augmente les Dégâts de coup critique de l'utilisateur de <span class="stat-boost">15%</span>.</p>`,
        2: `<h3>10 étoiles :</h3>
            <p>Augmente l'Attaque, la Défense et les PV de l'utilisateur de <span class="stat-boost">10%</span>.</p>`
    },
};

// --- FEUILLE DU SERPENT AZUR (SSR) ---
weaponsData["feuille-du-serpent-azur"] = {
    name: "Feuille du serpent azur",
    rarity: "SSR",
    element: null,
    gradient: "linear-gradient(90deg, #888, #333)",
    image: "Armes_Chasseurs_SSR/Feuille_du_serpent_azur/Relic_SSR_BlueSnake_Circle_PortraitBig.png",
    fullData: {
        0: `<h3>Passif :</h3>
            <p>Augmente les PV de l'utilisateur de <span class="stat-boost">4%</span>.<br>
            Augmente le taux de remplissage de la jauge de puissance de l'utilisateur de <span class="stat-boost">4%</span>.</p>`,
        1: `<h3>5 étoiles :</h3>
            <p>Augmente les PV de l'utilisateur de <span class="stat-boost">10%</span>.<br>
            Augmente le taux de remplissage de la jauge de puissance de <span class="stat-boost">10%</span>.</p>`,
        2: `<h3>10 étoiles :</h3>
            <p>Augmente l'Attaque, la Défense et les PV de l'utilisateur de <span class="stat-boost">15%</span>.</p>`
    },
};

// --- FLAMME DU SERPENT AZUR (SSR) ---
weaponsData["flamme-du-serpent-azur"] = {
    name: "Flamme du serpent azur",
    rarity: "SSR",
    element: null,
    gradient: "linear-gradient(90deg, #888, #333)",
    image: "Armes_Chasseurs_SSR/Flamme_du_serpent_azur/Relic_SSR_BlueSnake_Flower_PortraitBig.png",
    fullData: {
        0: `<h3>Passif :</h3>
            <p>Augmente l'Attaque de l'utilisateur de <span class="stat-boost">4%</span>.<br>
            Augmente les Dégâts de coup critique de l'utilisateur de <span class="stat-boost">4%</span>.</p>`,
        1: `<h3>5 étoiles :</h3>
            <p>Augmente l'Attaque de l'utilisateur de <span class="stat-boost">10%</span>.<br>
            Augmente les Dégâts de coup critique de l'utilisateur de <span class="stat-boost">15%</span>.</p>`,
        2: `<h3>10 étoiles :</h3>
            <p>Augmente l'Attaque, la Défense et les PV de l'utilisateur de <span class="stat-boost">10%</span>.</p>`
    },
};

// --- PISTOLET À EAU REQUIN À POINTES (SSR) ---
weaponsData["pistolet-a-eau-requin-a-pointes"] = {
    name: "Pistolet à eau requin à pointes",
    rarity: "SSR",
    element: null,
    gradient: "linear-gradient(90deg, #888, #333)",
    image: "Armes_Chasseurs_SSR/pistolet_a_eau_requin_a_pointes/Relic_SSR_WaterGun_Red_PortraitBig.png",
    fullData: {
        0: `<h3>Passif :</h3>
            <p>Augmente les dégâts de Compétence QTE de l'utilisateur de <span class="stat-boost">2.5%</span>.<br>
            Augmente les dégâts de Compétence de base de l'utilisateur de <span class="stat-boost">2.5%</span>.</p>`,
        1: `<h3>5 étoiles :</h3>
            <p>Augmente les dégâts de Compétence QTE de l'utilisateur de <span class="stat-boost">10%</span>.<br>
            Augmente les dégâts de Compétence de base de l'utilisateur de <span class="stat-boost">10%</span>.</p>`,
        2: `<h3>10 étoiles :</h3>
            <p>Augmente l'Attaque, la Défense et les PV de l'utilisateur de <span class="stat-boost">15%</span>.</p>`
    },
};

// --- PISTOLET À EAU REQUIN ROBUSTE (SSR) ---
weaponsData["pistolet-a-eau-requin-robuste"] = {
    name: "Pistolet à eau requin robuste",
    rarity: "SSR",
    element: null,
    gradient: "linear-gradient(90deg, #888, #333)",
    image: "Armes_Chasseurs_SSR/pistolet_a_eau_requin_robuste/Relic_SSR_WaterGun_Blue_PortraitBig.png",
    fullData: {
        0: `<h3>Passif :</h3>
            <p>Augmente les dégâts de Compétence QTE de l'utilisateur de <span class="stat-boost">2.5%</span>.<br>
            Augmente les dégâts de Compétence de base de l'utilisateur de <span class="stat-boost">2.5%</span>.</p>`,
        1: `<h3>5 étoiles :</h3>
            <p>Augmente les dégâts de Compétence QTE de l'utilisateur de <span class="stat-boost">10%</span>.<br>
            Augmente les dégâts de Compétence de base de l'utilisateur de <span class="stat-boost">10%</span>.</p>`,
        2: `<h3>10 étoiles :</h3>
            <p>Augmente l'Attaque, la Défense et les PV de l'utilisateur de <span class="stat-boost">15%</span>.</p>`
    },
};

// --- PISTOLET À EAU REQUIN SOLIDE (SSR) ---
weaponsData["pistolet-a-eau-requin-solide"] = {
    name: "Pistolet à eau requin solide",
    rarity: "SSR",
    element: null,
    gradient: "linear-gradient(90deg, #888, #333)",
    image: "Armes_Chasseurs_SSR/pistolet_a_eau_requin_solide/Relic_SSR_WaterGun_Yellow_PortraitBig.png",
    fullData: {
        0: `<h3>Passif :</h3>
            <p>Augmente les dégâts de Compétence QTE de l'utilisateur de <span class="stat-boost">2.5%</span>.<br>
            Augmente les dégâts de Compétence de base de l'utilisateur de <span class="stat-boost">2.5%</span>.</p>`,
        1: `<h3>5 étoiles :</h3>
            <p>Augmente les dégâts de Compétence QTE de l'utilisateur de <span class="stat-boost">10%</span>.<br>
            Augmente les dégâts de Compétence de base de l'utilisateur de <span class="stat-boost">10%</span>.</p>`,
        2: `<h3>10 étoiles :</h3>
            <p>Augmente l'Attaque, la Défense et les PV de l'utilisateur de <span class="stat-boost">15%</span>.</p>`
    },
};

// --- PORTE-CLÉS PORTE-BONHEUR DE BERU (SSR) ---
weaponsData["porte-cles-porte-bonheur-de-beru"] = {
    name: "Porte-clés porte-bonheur de Beru",
    rarity: "SSR",
    element: null,
    gradient: "linear-gradient(90deg, #888, #333)",
    image: "Armes_Chasseurs_SSR/Porte_cles_porte_bonheur_de_beru/Relic_SSR_Shadowkeyring_Beru_PortraitBig.png",
    fullData: {
        0: `<h3>Passif :</h3>
            <p>Augmente la Défense de l'utilisateur de <span class="stat-boost">4%</span>.<br>
            Augmente les dégâts infligés par l'utilisateur de <span class="stat-boost">0.5%</span>.</p>`,
        1: `<h3>5 étoiles :</h3>
            <p>Augmente la Défense de l'utilisateur de <span class="stat-boost">10%</span>.<br>
            Augmente les dégâts infligés par l'utilisateur de <span class="stat-boost">5%</span>.</p>`,
        2: `<h3>10 étoiles :</h3>
            <p>Augmente l'Attaque, la Défense et les PV de l'utilisateur de <span class="stat-boost">15%</span>.</p>`
    },
};

// --- PORTE-CLÉS PORTE-BONHEUR D'IGRIS (SSR) ---
weaponsData["porte-cles-porte-bonheur-de-igris"] = {
    name: "Porte-clés porte-bonheur d'Igris",
    rarity: "SSR",
    element: null,
    gradient: "linear-gradient(90deg, #888, #333)",
    image: "Armes_Chasseurs_SSR/Porte_cles_porte_bonheur_de_igris/Relic_SSR_Shadowkeyring_Igris_PortraitBig.png",
    fullData: {
        0: `<h3>Passif :</h3>
            <p>Augmente l'Attaque de l'utilisateur de <span class="stat-boost">4%</span>.<br>
            Augmente les Dégâts de coup critique de l'utilisateur de <span class="stat-boost">4%</span>.</p>`,
        1: `<h3>5 étoiles :</h3>
            <p>Augmente l'Attaque de l'utilisateur de <span class="stat-boost">10%</span>.<br>
            Augmente les Dégâts de coup critique de l'utilisateur de <span class="stat-boost">15%</span>.</p>`,
        2: `<h3>10 étoiles :</h3>
            <p>Augmente l'Attaque, la Défense et les PV de l'utilisateur de <span class="stat-boost">15%</span>.</p>`
    },
};

// --- PORTE-CLÉS PORTE-BONHEUR DE TANK (SSR) ---
weaponsData["porte-cles-porte-bonheur-de-tank"] = {
    name: "Porte-clés porte-bonheur de Tank",
    rarity: "SSR",
    element: null,
    gradient: "linear-gradient(90deg, #888, #333)",
    image: "Armes_Chasseurs_SSR/Porte_cles_porte_bonheur_de_tank/Relic_SSR_Shadowkeyring_Tank_PortraitBig.png",
    fullData: {
        0: `<h3>Passif :</h3>
            <p>Augmente les PV de l'utilisateur de <span class="stat-boost">4%</span>.<br>
            Augmente le taux de remplissage de la jauge de puissance de l'utilisateur de <span class="stat-boost">4%</span>.</p>`,
        1: `<h3>5 étoiles :</h3>
            <p>Augmente les PV de l'utilisateur de <span class="stat-boost">10%</span>.<br>
            Augmente le taux de remplissage de la jauge de puissance de <span class="stat-boost">10%</span>.</p>`,
        2: `<h3>10 étoiles :</h3>
            <p>Augmente l'Attaque, la Défense et les PV de l'utilisateur de <span class="stat-boost">15%</span>.</p>`
    },
};

// --- ROSÉE DU SERPENT AZUR (SSR) ---
weaponsData["rosee-du-serpent-azur"] = {
    name: "Rosée du serpent azur",
    rarity: "SSR",
    element: null,
    gradient: "linear-gradient(90deg, #888, #333)",
    image: "Armes_Chasseurs_SSR/Rosee_du_serpent_azur/Relic_SSR_BlueSnake_Square_PortraitBig.png",
    fullData: {
        0: `<h3>Passif :</h3>
            <p>Augmente la Défense de l'utilisateur de <span class="stat-boost">4%</span>.<br>
            Augmente les dégâts infligés par l'utilisateur de <span class="stat-boost">0.5%</span>.</p>`,
        1: `<h3>5 étoiles :</h3>
            <p>Augmente la Défense de l'utilisateur de <span class="stat-boost">10%</span>.<br>
            Augmente les dégâts infligés par l'utilisateur de <span class="stat-boost">5%</span>.</p>`,
        2: `<h3>10 étoiles :</h3>
            <p>Augmente l'Attaque, la Défense et les PV de l'utilisateur de <span class="stat-boost">15%</span>.</p>`
    },
};