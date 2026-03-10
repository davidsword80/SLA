// Initialise l'objet global s'il n'existe pas encore
if (typeof shadowsData === 'undefined') { 
    var shadowsData = {}; 
}

// --- BER ---
shadowsData["ber"] = {
    shadowName: "Ombre : Ber",
    shadowRarity: "Grand Maréchal",
    shadowImage: "Ombres/Ber/Ber.png",
    shadowGradient: "linear-gradient(90deg, #8e44ad, #000)",
    shadowData: {
        0: `<h3>Rang : Commun</h3><p>L'attaque et les dégâts de coup critique de toute l'équipe augmentent de <span class="stat-boost">3%</span>.<br></p>`,
        1: `<h3>Rang : Général</h3><p>L'attaque et les dégâts de coup critique de toute l'équipe augmentent de <span class="stat-boost">5%</span>.<br></p>`
    },
    weaponName: "Arme : Faux de l'ombre (Reproduction)",
    weaponRarity: "Arme d'ombre",
    weaponImage: "Ombres/Ber/faux_de_l_ombre_reproduction/faux_de_l_ombre_reproduction.png",
    weaponGradient: "linear-gradient(90deg, #8e44ad, #000)",
    weaponFullData: {
        0: `<h3>Passif (Base) :</h3><p>Les soins prodigués à l'ombre augmentent de <span class="stat-boost">15%</span> et sa Pénétration de défense de <span class="stat-boost">2.5%</span>.<br></p>`,
        1: `<h3>Passif (Max) :</h3><p>Les soins prodigués à l'ombre augmentent de <span class="stat-boost">30%</span> et sa Pénétration de défense de <span class="stat-boost">5%</span>.<br></p>`
    },
    weaponSummaryData: {
        0: `<h3>Passif : Armement Ombre</h3><p>Soins <span class="stat-boost">+15%</span>, Pén. Déf <span class="stat-boost">+2.5%</span>.</p>`,
        1: `<h3>Passif : Max</h3><p>Soins <span class="stat-boost">+30%</span>, Pén. Déf <span class="stat-boost">+5%</span>.</p>`
    }
};

// --- BESTE ---
shadowsData["beste"] = {
    shadowName: "Ombre : Beste",
    shadowRarity: "Grand Maréchal",
    shadowImage: "Ombres/Beste/Beste.png",
    shadowGradient: "linear-gradient(90deg, #8e44ad, #000)",
    shadowData: {
        0: `<h3>Rang : Commun</h3><p>La Pénétration de défense de toute l'équipe augmente de <span class="stat-boost">4%</span>.<br></p>`,
        1: `<h3>Rang : Général</h3><p>La Pénétration de défense de toute l'équipe augmente de <span class="stat-boost">8%</span>.<br></p>`
    },
    weaponName: "Arme : Grimoire de Thétis (Reproduction)",
    weaponRarity: "Arme d'ombre",
    weaponImage: "Ombres/Beste/grimoire_de_thetis_reproduction/grimoire_de_thetis_reproduction.png",
    weaponGradient: "linear-gradient(90deg, #8e44ad, #000)",
    weaponFullData: {
        0: `<h3>Passif (Base) :</h3><p>L'Attaque de l'ombre augmente de <span class="stat-boost">4%</span>.<br>Les dégâts de la compétence de base de l'ombre augmentent de <span class="stat-boost">2.5%</span>.<br></p>`,
        1: `<h3>Passif (Élévation cliquée) :</h3><p>L'Attaque de l'ombre augmente de <span class="stat-boost">4%</span>.<br>Les dégâts de la compétence de base de l'ombre augmentent de <span class="stat-boost">2.5%</span>.<br></p>`
    },
    weaponSummaryData: {
        0: `<h3>Résumé : Base</h3><p>Atk ombre <span class="stat-boost">+4%</span>, Dégâts Compétence base <span class="stat-boost">+2.5%</span>.</p>`,
        1: `<h3>Résumé : Étoile</h3><p>Atk ombre <span class="stat-boost">+4%</span>, Dégâts Compétence base <span class="stat-boost">+2.5%</span>.</p>`
    }
};

// --- BIGROCK ---
shadowsData["bigrock"] = {
    shadowName: "Ombre : Bigrock",
    shadowRarity: "Grand Maréchal",
    shadowImage: "Ombres/Bigrock/Bigrock.png",
    shadowGradient: "linear-gradient(90deg, #8e44ad, #000)",
    shadowData: {
        0: `<h3>Rang : Commun</h3>
        <p>Les dégâts de compétence infligés par tous les membres de l'équipe augmentent de <span class="stat-boost">8%</span>.<br></p>`,
        1: `<h3>Rang : Général</h3>
        <p>Les dégâts de compétence infligés par tous les membres de l'équipe augmentent de <span class="stat-boost">12%</span>.<br></p>`
    },
    weaponName: "Arme : Marteau de golem de roche (Reproduction)",
    weaponRarity: "Arme d'ombre",
    weaponImage: "Ombres/Bigrock/marteau_de_golem_de_roche_reproduction/marteau_de_golem_de_roche_reproduction.png",
    weaponGradient: "linear-gradient(90deg, #8e44ad, #000)",
    weaponFullData: {
        0: `<h3>Passif (Base) :</h3><p>Lorsque l'ombre est touchée, l'Attaque de la cible diminue de <span class="stat-boost">2.5%</span> pendant 5 seconde(s).<br>
    Lorsque l'ombre est touchée, la Défense de l'attaquant diminue de <span class="stat-boost">30%</span> pendant 5 seconde(s).<br></p>`,
        1: `<h3>Passif (Max) :</h3><p>Lorsque l'ombre est touchée, l'Attaque de la cible diminue de <span class="stat-boost">2.5%</span> pendant 5 seconde(s).<br>
    Lorsque l'ombre est touchée, la Défense de l'attaquant diminue de <span class="stat-boost">30%</span> pendant 5 seconde(s).<br></p>`
    },
    weaponSummaryData: {
        0: `<h3>Résumé : Base</h3><p>Debuff Atk cible (-2.5%) et Def attaquant (-30%) si touché.</p>`,
        1: `<h3>Résumé : Étoile</h3><p>Debuff Atk cible (-2.5%) et Def attaquant (-30%) si touché.</p>`
    }
};

// --- CERBIE ---
shadowsData["cerbie"] = {
    shadowName: "Ombre : Cerbie",
    shadowRarity: "Grand Maréchal",
    shadowImage: "Ombres/Cerbie/Cerbie.png",
    shadowGradient: "linear-gradient(90deg, #8e44ad, #000)",
    shadowData: {
        0: `<h3>Rang : Commun</h3>
        <p>Le Taux de coup critique de tous les membres de l'équipe augmente de <span class="stat-boost">4%</span>.<br></p>`,
        1: `<h3>Rang : Général</h3>
        <p>Le Taux de coup critique de tous les membres de l'équipe augmente de <span class="stat-boost">8%</span>.<br></p>`
    },
    weaponName: "Arme : Chasseur de lycans (Reproduction)",
    weaponRarity: "Arme d'ombre",
    weaponImage: "Ombres/Cerbie/chasseur_de_lycans_reproduction/chasseur_de_lycans_reproduction.png",
    weaponGradient: "linear-gradient(90deg, #8e44ad, #000)",
    weaponFullData: {
        0: `<h3>Passif (Base) :</h3><p>Lorsque Cerbie atteint une cible avec l'effet <span class="buff">[Combustion]</span> appliqué, les dégâts de ses compétences augmentent de <span class="stat-boost">8%</span> pendant 10 seconde(s).<br></p>`,
        1: `<h3>Passif (Max) :</h3><p>Lorsque Cerbie atteint une cible avec l'effet <span class="buff">[Combustion]</span> appliqué, les dégâts de ses compétences augmentent de <span class="stat-boost">8%</span> pendant 10 seconde(s).<br></p>`
    },
    weaponSummaryData: {
        0: `<h3>Résumé : Base</h3><p>Cible [Combustion] : Dégâts compétences <span class="stat-boost">+8%</span> (10s).</p>`,
        1: `<h3>Résumé : Étoile</h3><p>Cible [Combustion] : Dégâts compétences <span class="stat-boost">+8%</span> (10s).</p>`
    }
};

// --- CRÂNE ---
shadowsData["crane"] = {
    shadowName: "Ombre : Crâne",
    shadowRarity: "Grand Maréchal",
    shadowImage: "Ombres/Crane/Crane.png",
    shadowGradient: "linear-gradient(90deg, #8e44ad, #000)",
    shadowData: {
        0: `<h3>Rang : Commun</h3>
        <p>Les PM de toute l'équipe augmentent de <span class="stat-boost">6%</span>.<br>
        La consommation de mana des compétences diminue de <span class="stat-boost">5%</span>.</p>`,
        1: `<h3>Rang : Général</h3>
        <p>Les PM de toute l'équipe augmentent de <span class="stat-boost">12%</span>.<br>
        La consommation de mana des compétences diminue de <span class="stat-boost">5%</span>.</p>`
    },
    weaponName: "Arme : Faux du gardien du tombeau (Reproduction)",
    weaponRarity: "Arme d'ombre",
    weaponImage: "Ombres/Crane/faux_du_gardien_du_tombeau_reproduction/faux_du_gardien_du_tombeau_reproduction.png",
    weaponGradient: "linear-gradient(90deg, #8e44ad, #000)",
    weaponFullData: {
        0: `<h3>Passif (Base) :</h3>
        <p>Lors d'une attaque avec la compétence <span class="stat-boost">[Flamme de la mort]</span> de Crâne, les dégâts infligés par l'utilisateur augmentent de <span class="stat-boost">4%</span> pendant 10s.</p>
        <p><small>Attaque +400 | Précision +500</small></p>`,
        1: `<h3>Passif (5 Étoiles) :</h3>
        <p>Lors d'une attaque avec la compétence <span class="stat-boost">[Flamme de la mort]</span> de Crâne, les dégâts infligés par l'utilisateur augmentent de <span class="stat-boost">24%</span> pendant 10s.</p>
        <p><small>Attaque +2400 | Précision +3000</small></p>`
    },
    weaponSummaryData: {
        0: `<h3>Résumé : Base</h3><p>[Flamme de la mort] → Dégâts <span class="stat-boost">+4%</span> (10s).</p>`,
        1: `<h3>Résumé : 5★</h3><p>[Flamme de la mort] → Dégâts <span class="stat-boost">+24%</span> (10s).</p>`
    }
};

// --- CROC ---
shadowsData["croc"] = {
    shadowName: "Ombre : Croc",
    shadowRarity: "Grand Maréchal",
    shadowImage: "Ombres/Croc/Croc.png",
    shadowGradient: "linear-gradient(90deg, #8e44ad, #000)",
    shadowData: {
        0: `<h3>Rang : Commun</h3>
        <p>Les dégâts d'Attaque de noyau de tous les membres de l'équipe augmentent de <span class="stat-boost">20 %</span>.<br></p>`,
        1: `<h3>Rang : Général</h3>
        <p>Les dégâts d'Attaque de noyau de tous les membres de l'équipe augmentent de <span class="stat-boost">40 %</span>.<br></p>`
    },
    weaponName: "Arme : Orbe d'avarice (Reproduction)",
    weaponRarity: "Arme d'ombre",
    weaponImage: "Ombres/Croc/orbe_d_avarice_reproduction/orbe_d_avarice_reproduction.png",
    weaponGradient: "linear-gradient(90deg, #8e44ad, #000)",
    weaponFullData: {
        0: `<h3>Passif (Base) :</h3><p>Les ennemis ayant <span class="stat-boost">50% de PV ou moins</span> subissent <span class="stat-boost">8%</span> de dégâts en plus lorsqu'ils sont touchés par l'ombre.<br></p>`,
        1: `<h3>Passif (Max) :</h3><p>Les ennemis ayant <span class="stat-boost">50% de PV ou moins</span> subissent <span class="stat-boost">8%</span> de dégâts en plus lorsqu'ils sont touchés par l'ombre.<br></p>`
    },
    weaponSummaryData: {
        0: `<h3>Résumé : Base</h3><p>PV cible < 50% : Dégâts ombre <span class="stat-boost">+8%</span>.</p>`,
        1: `<h3>Résumé : Étoile</h3><p>PV cible < 50% : Dégâts ombre <span class="stat-boost">+8%</span>.</p>`
    }
};

// --- IGRIT ---
shadowsData["igrit"] = {
    shadowName: "Ombre : Igrit",
    shadowRarity: "Grand Maréchal",
    shadowImage: "Ombres/Igrit/Igrit.png",
    shadowGradient: "linear-gradient(90deg, #8e44ad, #000)",
    shadowData: {
        0: `<h3>Rang : Commun</h3>
        <p>Le Taux de coup critique de tous les membres de l'équipe augmente de <span class="stat-boost">4%</span>.<br></p>`,
        1: `<h3>Rang : Général</h3>
        <p>Le Taux de coup critique de tous les membres de l'équipe augmente de <span class="stat-boost">8%</span>.<br></p>`
    },
    weaponName: "Arme : Glaive du roi des démons (Reproduction)",
    weaponRarity: "Arme d'ombre",
    weaponImage: "Ombres/Igrit/glaive_du_roi_des_demons_reproduction/glaive_du_roi_des_demons_reproduction.png",
    weaponGradient: "linear-gradient(90deg, #8e44ad, #000)",
    weaponFullData: {
        0: `<h3>Passif (Base) :</h3><p>Le Taux de coup critique et les Dégâts de coup critique de l'ombre augmentent de <span class="stat-boost">2.5%</span>.<br></p>`,
        1: `<h3>Passif (Élévation cliquée) :</h3><p>Le Taux de coup critique et les Dégâts de coup critique de l'ombre augmentent de <span class="stat-boost">2.5%</span>.<br></p>`
    },
    weaponSummaryData: {
        0: `<h3>Résumé : Base</h3><p>Taux Crit / Dégâts Crit ombre <span class="stat-boost">+2.5%</span>.</p>`,
        1: `<h3>Résumé : Étoile</h3><p>Taux Crit / Dégâts Crit ombre <span class="stat-boost">+2.5%</span>.</p>`
    }
};

// --- IRON ---
shadowsData["iron"] = {
    shadowName: "Ombre : Iron",
    shadowRarity: "Grand Maréchal",
    shadowImage: "Ombres/Iron/Iron.png",
    shadowGradient: "linear-gradient(90deg, #8e44ad, #000)",
    shadowData: {
        0: `<h3>Rang : Commun</h3>
        <p>Les PV max de tous les membres de l'équipe augmentent de <span class="stat-boost">6%</span>.<br></p>`,
        1: `<h3>Rang : Général</h3>
        <p>Les PV max de tous les membres de l'équipe augmentent de <span class="stat-boost">12%</span>.<br></p>`
    },
    weaponName: "Arme : Le souhait du gardien (Reproduction)",
    weaponRarity: "Arme d'ombre",
    weaponImage: "Ombres/Iron/le_souhait_du_gardien_reproduction/le_souhait_du_gardien_reproduction.png",
    weaponGradient: "linear-gradient(90deg, #8e44ad, #000)",
    weaponFullData: {
        0: `<h3>Passif (Base) :</h3><p>Les PV de l'ombre augmentent de <span class="stat-boost">4%</span>.<br>
    Les probabilités d'acquisition de bouclier de l'ombre augmentent de <span class="stat-boost">6%</span>.<br></p>`,
        1: `<h3>Passif (Élévation cliquée) :</h3><p>Les PV de l'ombre augmentent de <span class="stat-boost">4%</span>.<br>
    Les probabilités d'acquisition de bouclier de l'ombre augmentent de <span class="stat-boost">6%</span>.<br></p>`
    },
    weaponSummaryData: {
        0: `<h3>Résumé : Base</h3><p>PV ombre <span class="stat-boost">+4%</span>, Probabilité bouclier <span class="stat-boost">+6%</span>.</p>`,
        1: `<h3>Résumé : Étoile</h3><p>PV ombre <span class="stat-boost">+4%</span>, Probabilité bouclier <span class="stat-boost">+6%</span>.</p>`
    }
};

// --- JIMA ---
shadowsData["jima"] = {
    shadowName: "Ombre : Jima",
    shadowRarity: "Grand Maréchal",
    shadowImage: "Ombres/Jima/Jima.png",
    shadowGradient: "linear-gradient(90deg, #8e44ad, #000)",
    shadowData: {
        0: `<h3>Rang : Commun</h3>
        <p>L'Attaque de toute l'équipe augmente de <span class="stat-boost">3%</span>.<br>
        Les Probabilités d'acquisition de bouclier augmentent de <span class="stat-boost">5%</span>.</p>`,
        1: `<h3>Rang : Général</h3>
        <p>L'Attaque de toute l'équipe augmente de <span class="stat-boost">5%</span>.<br>
        Les Probabilités d'acquisition de bouclier augmentent de <span class="stat-boost">13%</span>.</p>`
    },
    weaponName: "Arme : Trident de dragon gardien naga (Reproduction)",
    weaponRarity: "Arme d'ombre",
    weaponImage: "Ombres/Jima/trident_de_dragon_gardien_naga_reproduction/trident_de_dragon_gardien_naga_reproduction.png",
    weaponGradient: "linear-gradient(90deg, #8e44ad, #000)",
    weaponFullData: {
        0: `<h3>Passif (Base) :</h3>
        <p>Lorsqu'un [Bouclier] est activé, il déclenche l'effet [Attaque augmentée].<br>
        <span class="stat-boost">[Attaque augmentée]</span> : Augmente l'Attaque de <span class="stat-boost">4%</span>.<br>
        Durée : 15 seconde(s)</p>`,
        1: `<h3>Passif (5 Étoiles) :</h3>
        <p>Lorsqu'un [Bouclier] est activé, il déclenche l'effet [Attaque augmentée].<br>
        <span class="stat-boost">[Attaque augmentée]</span> : Augmente l'Attaque de <span class="stat-boost">24%</span>.<br>
        Durée : 15 seconde(s)</p>`
    },
    weaponSummaryData: {
        0: `<h3>Résumé : Base</h3><p>Effet Bouclier : Atk <span class="stat-boost">+4%</span> (15s).</p>`,
        1: `<h3>Résumé : 5★</h3><p>Effet Bouclier : Atk <span class="stat-boost">+24%</span> (15s).</p>`
    }
};

// --- KAISEL ---
shadowsData["kaisel"] = {
    shadowName: "Ombre : Kaisel",
    shadowRarity: "Grand Maréchal",
    shadowImage: "Ombres/Kaisel/Kaisel.png",
    shadowGradient: "linear-gradient(90deg, #8e44ad, #000)",
    shadowData: {
        0: `<h3>Rang : Commun</h3>
        <p>Les dégâts de compétence ultime de tous les membres de l'équipe augmentent de <span class="stat-boost">5%</span>.<br></p>`,
        1: `<h3>Rang : Général</h3>
        <p>Les dégâts de compétence ultime de tous les membres de l'équipe augmentent de <span class="stat-boost">9%</span>.<br></p>`
    },
    weaponName: "Arme : Skadi (Reproduction)",
    weaponRarity: "Arme d'ombre",
    weaponImage: "Ombres/Kaisel/skadi_reproduction/skadi_reproduction.png",
    weaponGradient: "linear-gradient(90deg, #8e44ad, #000)",
    weaponFullData: {
        0: `<h3>Passif (Base) :</h3><p>Les Dégâts de coup critique de l'ombre augmentent de <span class="stat-boost">4%</span> et les dégâts qu'elle inflige aux boss augmentent de <span class="stat-boost">5%</span>.<br></p>`,
        1: `<h3>Passif (Élévation cliquée) :</h3><p>Les Dégâts de coup critique de l'ombre augmentent de <span class="stat-boost">4%</span> et les dégâts qu'elle inflige aux boss augmentent de <span class="stat-boost">5%</span>.<br></p>`
    },
    weaponSummaryData: {
        0: `<h3>Résumé : Base</h3><p>Dégâts Crit ombre <span class="stat-boost">+4%</span>, Dégâts Boss <span class="stat-boost">+5%</span>.</p>`,
        1: `<h3>Résumé : Étoile</h3><p>Dégâts Crit ombre <span class="stat-boost">+4%</span>, Dégâts Boss <span class="stat-boost">+5%</span>.</p>`
    }
};

// --- LAMES ---
shadowsData["lames"] = {
    shadowName: "Ombre : Lames",
    shadowRarity: "Grand Maréchal",
    shadowImage: "Ombres/Lames/Lames.png",
    shadowGradient: "linear-gradient(90deg, #8e44ad, #000)",
    shadowData: {
        0: `<h3>Rang : Commun</h3>
        <p>L'Attaque de tous les membres de l'équipe augmente de <span class="stat-boost">3%</span>.<br></p>`,
        1: `<h3>Rang : Général</h3>
        <p>L'Attaque de tous les membres de l'équipe augmente de <span class="stat-boost">7%</span>.<br></p>`
    },
    weaponName: "Arme : Surin de baruka (Reproduction)",
    weaponRarity: "Arme d'ombre",
    weaponImage: "Ombres/Lames/surin_de_baruka_reproduction/surin_de_baruka_reproduction.png",
    weaponGradient: "linear-gradient(90deg, #8e44ad, #000)",
    weaponFullData: {
        0: `<h3>Passif (Base) :</h3><p>L'Attaque de l'ombre augmente de <span class="stat-boost">2.5%</span> et sa Pénétration de défense de <span class="stat-boost">2.5%</span>.<br></p>`,
        1: `<h3>Passif (Élévation cliquée) :</h3><p>L'Attaque de l'ombre augmente de <span class="stat-boost">2.5%</span> et sa Pénétration de défense de <span class="stat-boost">2.5%</span>.<br></p>`
    },
    weaponSummaryData: {
        0: `<h3>Résumé : Base</h3><p>Atk ombre <span class="stat-boost">+2.5%</span>, Pén. Déf <span class="stat-boost">+2.5%</span>.</p>`,
        1: `<h3>Résumé : Étoile</h3><p>Atk ombre <span class="stat-boost">+2.5%</span>, Pén. Déf <span class="stat-boost">+2.5%</span>.</p>`
    }
};

// --- TANK ---
shadowsData["tank"] = {
    shadowName: "Ombre : Tank",
    shadowRarity: "Grand Maréchal",
    shadowImage: "Ombres/Tank/Tank.png",
    shadowGradient: "linear-gradient(90deg, #8e44ad, #000)",
    shadowData: {
        0: `<h3>Rang : Commun</h3><p>La Défense de tous les membres de l'équipe augmente de <span class="stat-boost">6%</span>.<br></p>`,
        1: `<h3>Rang : Général</h3><p>La Défense de tous les membres de l'équipe augmente de <span class="stat-boost">12%</span>.<br></p>`
    },
    weaponName: "Arme : Fauchon gelé (Reproduction)",
    weaponRarity: "Arme d'ombre",
    weaponImage: "Ombres/Tank/fauchon_gele_reproduction/fauchon_gele_reproduction.png",
    weaponGradient: "linear-gradient(90deg, #8e44ad, #000)",
    weaponFullData: {
        0: `<h3>Passif (Base) :</h3><p>La Pénétration de défense de l'ombre augmente de <span class="stat-boost">2.5%</span>.<br>Les dégâts infligés par l'ombre aux monstres de type Normal augmentent de <span class="stat-boost">8%</span>.<br></p>`,
        1: `<h3>Passif (Élévation cliquée) :</h3><p>La Pénétration de défense de l'ombre augmente de <span class="stat-boost">2.5%</span>.<br>Les dégâts infligés par l'ombre aux monstres de type Normal augmentent de <span class="stat-boost">8%</span>.<br></p>`
    },
    weaponSummaryData: {
        0: `<h3>Résumé : Base</h3><p>Pén. Déf ombre <span class="stat-boost">+2.5%</span>, Dégâts Monstres Normaux <span class="stat-boost">+8%</span>.</p>`,
        1: `<h3>Résumé : Étoile</h3><p>Pén. Déf ombre <span class="stat-boost">+2.5%</span>, Dégâts Monstres Normaux <span class="stat-boost">+8%</span>.</p>`
    }
};

// --- UROS ---
shadowsData["uros"] = {
    shadowName: "Ombre : Uros",
    shadowRarity: "Grand Maréchal",
    shadowImage: "Ombres/Uros/Uros.png",
    shadowGradient: "linear-gradient(90deg, #8e44ad, #000)",
    shadowData: {
        0: `<h3>Rang : Commun</h3><p>Les dégâts de ténèbres de toute l'équipe augmentent de <span class="stat-boost">5%</span>.</p>`,
        1: `<h3>Rang : Général</h3><p>Les dégâts de ténèbres de toute l'équipe augmente de <span class="stat-boost">9%</span>.</p>`
    },
    weaponName: "Arme : Fragment de Zeke (Reproduction)",
    weaponRarity: "Arme d'ombre",
    weaponImage: "Ombres/Uros/fragment_de_zeke_reproduction/fragment_de_zeke_reproduction.png",
    weaponGradient: "linear-gradient(90deg, #9b59b6, #000)",
    weaponFullData: {
        0: `<h3>Passif (Base) :</h3><p>Armement d'ombre exclusif pour Uros.<br>La Pénétration de défense de l'utilisateur augmente de <span class="stat-boost">4%</span>.</p>`,
        1: `<h3>Passif (5 Étoiles) :</h3><p>Armement d'ombre exclusif pour Uros.<br>La Pénétration de défense de l'utilisateur augmente de <span class="stat-boost">24%</span>.</p>`
    },
    weaponSummaryData: {
        0: `<h3>Résumé : Base</h3><p>Pénétration de défense <span class="stat-boost">+4%</span>.</p>`,
        1: `<h3>Résumé : 5★</h3><p>Pénétration de défense <span class="stat-boost">+24%</span>.</p>`
    }
};