// Initialise l'objet global s'il n'existe pas encore
if (typeof weaponsData === 'undefined') { 
    var weaponsData = {}; 
}

// --- ARC D'ELFE DES GLACES (R) ---
weaponsData["arc-d-elfe-des-glaces"] = {
    name: "Arc d'elfe des glaces",
    rarity: "R",
    gradient: "linear-gradient(90deg, #2980b9, #000)",
    image: "Armes_Joueur_R/eau/arc_d_elfe_des_glaces/GSWeapon_IceElfBow_PortraitBig.png",
    fullData: {
        0: `<h3>Passif :</h3><p>Lorsque la compétence <strong>Explosion glacée</strong> touche sa cible, elle lui applique l'effet <span class="buff">[Gel]</span>.<br></p><div class="detail-box"><h4><span class="buff">[Gel]</span></h4><p>Cette compétence interrompt la cible.<br>Durée : <span class="stat-boost">0,5</span> seconde(s)</p></div>`,
        1: `<h3>1 étoile :</h3><p>La durée de l'effet <span class="buff">[Gel]</span> provoqué par <strong>Explosion glacée</strong> augmente de <span class="stat-boost">1</span> seconde(s).<br></p>`,
        2: `<h3>2 étoiles :</h3><p>Vos dégâts d'eau augmentent de <span class="stat-boost">6 %</span>.<br></p>`,
        3: `<h3>3 étoiles :</h3><p>La portée de la compétence <strong>Explosion glacée</strong> augmente de <span class="stat-boost">25 %</span>.<br></p>`,
        4: `<h3>4 étoiles :</h3><p>Le temps de rechargement de la compétence <strong>Explosion glacée</strong> diminue de <span class="stat-boost">10 %</span>.<br></p>`,
        5: `<h3>5 étoiles :</h3><p>Lorsque la compétence <strong>Explosion glacée</strong> touche sa cible, elle lui applique l'effet <span class="buff">[Engelure]</span>.<br></p><div class="detail-box"><h4><span class="buff">[Engelure]</span></h4><p>Inflige des dégâts équivalents à <span class="stat-boost">50 %</span> de l'Attaque toutes les 3 seconde(s) (cumulable jusqu'à 5 fois).<br>Après 5 cumuls, la compétence applique l'effet <span class="buff">[Gel]</span> à la cible pendant <span class="stat-boost">2</span> seconde(s).<br>Durée : 30 seconde(s)</p></div>`
    },
    summaryData: {
        0: `<h3>Passif : Explosion Glacée</h3><p>Touche = <span class="buff">[Gel]</span> (Interruption).<br>Durée : <span class="stat-boost">0,5s</span>.</p>`,
        1: `<h3>1 étoile</h3><p>Durée <span class="buff">[Gel]</span> <span class="stat-boost">+1s</span>.<br></p>`,
        2: `<h3>2 étoiles</h3><p>Dégâts Eau <span class="stat-boost">+6 %</span>.<br></p>`,
        3: `<h3>3 étoiles</h3><p>Portée Explosion glacée <span class="stat-boost">+25 %</span>.<br></p>`,
        4: `<h3>4 étoiles</h3><p>CD Explosion glacée <span class="stat-boost">-10 %</span>.<br></p>`,
        5: `<h3>5 étoiles</h3><p>Applique <span class="buff">[Engelure]</span> (DoT cumulable).<br>À 5 cumuls = <span class="buff">[Gel]</span> (2s).</p>`
    }
};

// --- GLAIVE DE LÉZARD (R) ---
weaponsData["glaive-de-lezard"] = {
    name: "Glaive de lézard",
    rarity: "R",
    gradient: "linear-gradient(90deg, #2980b9, #000)",
    image: "Armes_Joueur_R/eau/glaive_de_lezard/GSWeapon_LizardGlaive_PortraitBig.png",
    fullData: {
        0: `<h3>Passif :</h3><p>Lors de l'utilisation de la compétence <strong>Transpercement de lézard</strong>, l'utilisateur applique l'effet <span class="buff">[Protection de lézard]</span>.<br></p><div class="detail-box"><h4><span class="buff">[Protection de lézard]</span></h4><p>Les dégâts de la compétence <strong>Transpercement de lézard</strong> augmentent de <span class="stat-boost">0.3 %</span> (cumulable jusqu'à 999 fois).<br>Durée : infinie</p></div>`,
        1: `<h3>1 étoile :</h3><p>Lors de l'utilisation de la compétence <strong>Transpercement de lézard</strong>, l'utilisateur a <span class="stat-boost">80 %</span> de chances de réinitialiser son temps de rechargement.<br>Réduit le prochain taux de réinitialisation du temps de rechargement en cas de réussite.</p>`,
        2: `<h3>2 étoiles :</h3><p>Vos dégâts d'eau augmentent de <span class="stat-boost">6 %</span>.<br></p>`,
        3: `<h3>3 étoiles :</h3><p>L'effet <strong>Protection de lézard</strong> s'active tous les 2 cumuls.<br></p>`,
        4: `<h3>4 étoiles :</h3><p>Le temps de rechargement de <strong>Transpercement de lézard</strong> diminue de <span class="stat-boost">10 %</span>.<br></p>`,
        5: `<h3>5 étoiles :</h3><p>Les dégâts infligés aux monstres de type Boss avec <strong>Transpercement de lézard</strong> augmentent de <span class="stat-boost">40 %</span>.<br></p>`
    },
    summaryData: {
        0: `<h3>Passif : Protection lézard</h3><p>Utilisation compétence = <span class="buff">[Protection de lézard]</span>.<br>Dégâts compétence <span class="stat-boost">+0.3 %</span> (max 999 piles, durée infinie).</p>`,
        1: `<h3>1 étoile</h3><p>80 % de chances de reset CD sur <strong>Transpercement de lézard</strong> (taux réduit après réussite).<br></p>`,
        2: `<h3>2 étoiles</h3><p>Dégâts Eau <span class="stat-boost">+6 %</span>.<br></p>`,
        3: `<h3>3 étoiles</h3><p>Activation de <strong>Protection de lézard</strong> doublée (tous les 2 cumuls).<br></p>`,
        4: `<h3>4 étoiles</h3><p>CD Transpercement de lézard <span class="stat-boost">-10 %</span>.<br></p>`,
        5: `<h3>5 étoiles</h3><p>Dégâts sur Boss (via compétence) <span class="stat-boost">+40 %</span>.<br></p>`
    }
};

// --- CROCHET VENIMEUX (SR) ---
weaponsData["crochet-venimeux-kasaka"] = {
    name: "Crochet venimeux",
    rarity: "SR",
    gradient: "linear-gradient(90deg, #2980b9, #000)",
    image: "Armes_Joueur_SR/eau/crochet_venimeux/GSWeapon_KasakaVenomFang_PortraitBig.png",
    fullData: {
        0: `<h3>Passif :</h3><p>Il y a <span class="stat-boost">30%</span> de chances d'appliquer l'effet <span class="buff">[Hémorragie]</span> à la cible lorsque le compétence <strong>Vile attaque sournoise</strong> la touche.<br></p><div class="detail-box"><h4><span class="buff">[Hémorragie]</span></h4><p>Inflige des dégâts équivalents à <span class="stat-boost">0.8%</span> des PV actuels de la cible toutes les 3 seconde(s).<br>Durée: 30 seconde(s)</p></div>`,
        1: `<h3>1 étoile :</h3><p>Lorsque la compétence <strong>Attaque de noyau</strong> ou <strong>Vile attaque sournoise</strong> touche sa cible, elle a <span class="stat-boost">30%</span> de chances de lui appliquer l'effet <span class="buff">[Paralysie]</span>.<br></p><div class="detail-box"><h4><span class="buff">[Paralysie]</span></h4><p>Cette compétence interrompt la cible.<br>Durée: 1 seconde(s)</p></div>`,
        2: `<h3>2 étoiles :</h3><p>Vos dégâts d'eau augmentent de <span class="stat-boost">8 %</span>.<br></p>`,
        3: `<h3>3 étoiles :</h3><p>Ajoute l'effet <span class="buff">[Venin de Kasaka]</span> à la compétence <strong>Vile attaque sournoise</strong>.<br></p><div class="detail-box"><h4><span class="buff">[Poison de Kasaka]</span></h4><p>Crée une flaque de venin au sol pendant 5 secondes qui inflige des dégâts supplémentaires aux cibles se trouvant dans la zone.</p></div>`,
        4: `<h3>4 étoiles :</h3><p>Le temps de rechargement de <strong>Vile attaque sournoise</strong> diminue de <span class="stat-boost">15%</span>.<br></p>`,
        5: `<h3>5 étoiles :</h3><p>Applique l'effet <span class="buff">[Poison mortel de Kasaka]</span> aux cibles touchées par <strong>Vile attaque sournoise</strong>.<br></p><div class="detail-box"><h4><span class="buff">[Poison mortel de Kasaka]</span></h4><p>L'utilisateur inflige des dégâts équivalents à <span class="stat-boost">75%</span> de l'Attaque toutes les 3 seconde(s).<br>Réduit le Taux de récupération des PV de la cible de <span class="stat-boost">70%</span>.<br>Durée: 30 seconde(s)</p></div>`
    },
    summaryData: {
        0: `<h3>Passif : Dent de Vipère</h3><p>Vile attaque sournoise : 30% chance <span class="buff">[Hémorragie]</span>.<br>[Hémorragie] : DOT (<span class="stat-boost">0.8%</span> PV actuels, 30s).</p>`,
        1: `<h3>1 étoile</h3><p>Noyau / Vile attaque : 30% chance <span class="buff">[Paralysie]</span> (Stun 1s).<br></p>`,
        2: `<h3>2 étoiles</h3><p>Dégâts Eau <span class="stat-boost">+8%</span>.<br></p>`,
        3: `<h3>3 étoiles</h3><p>Vile attaque = Zone <span class="buff">[Poison de Kasaka]</span> (Flaque dégâts 5s).<br></p>`,
        4: `<h3>4 étoiles</h3><p>CD Vile attaque sournoise <span class="stat-boost">-15%</span>.<br></p>`,
        5: `<h3>5 étoiles</h3><p>Vile attaque = <span class="buff">[Poison mortel]</span>.<br>[Poison mortel] : DOT (<span class="stat-boost">75%</span> Atk) + Debuff Soin (<span class="stat-boost">-70%</span>).</p>`
    }
};

// --- FAUCHON GELÉ (SR) ---
weaponsData["fauchon-gele"] = {
    name: "Fauchon gelé",
    rarity: "SR",
    gradient: "linear-gradient(90deg, #2980b9, #000)",
    image: "Armes_Joueur_SR/eau/fauchon_gele/GSWeapon_FrostIceSword_PortraitBig.png",
    fullData: {
        0: `<h3>Passif :</h3><p>Lorsque la compétence <strong>Bourrasque glaciale</strong> touche sa cible, elle a <span class="stat-boost">20%</span> de chances de lui appliquer l'effet <span class="buff">[Gel]</span>.<br></p><div class="detail-box"><h4><span class="buff">[Gel]</span></h4><p>Cette compétence interrompt la cible.<br>Durée: 2 seconde(s)</p></div>`,
        1: `<h3>1 étoile :</h3><p>Lorsque la compétence <strong>Bourrasque glaciale</strong> est utilisée sur des cibles affectées par <span class="buff">[Gel]</span>, l'effet <span class="buff">[Érosion]</span> s'applique.<br></p><div class="detail-box"><h4><span class="buff">[Érosion]</span></h4><p>Augmente les dégâts infligés aux cibles dotées d'une faiblesse élémentaire de <span class="stat-boost">12%</span>.<br>Durée: 15 seconde(s)</p></div>`,
        2: `<h3>2 étoiles :</h3><p>Vos dégâts d'eau augmentent de <span class="stat-boost">8%</span>.<br></p>`,
        3: `<h3>3 étoiles :</h3><p>Modification des effets de la compétence <span class="buff">[Bourrasque glaciale]</span>: Peut être utilisée jusqu'à 2 fois Réduit le temps de rechargement de 3 seconde(s).<br></p>`,
        4: `<h3>4 étoiles :</h3><p>Le temps de rechargement de <span class="buff">[Bourrasque glaciale]</span> diminue de <span class="stat-boost">15 %</span>.<br></p>`,
        5: `<h3>5 étoiles :</h3><p>L'effet <span class="buff">[Erosion]</span> peut se cumuler jusqu'à 2 fois.<br></p>`
    },
    summaryData: {
        0: `<h3>Passif : Lame de Givre</h3><p>Bourrasque glaciale : 20% chance <span class="buff">[Gel]</span> (Stun 2s).<br></p>`,
        1: `<h3>1 étoile</h3><p>Bourrasque sur Gel = <span class="buff">[Érosion]</span>.<br>[Érosion] : Dégâts faiblesse élémentaire <span class="stat-boost">+12%</span> (15s).</p>`,
        2: `<h3>2 étoiles</h3><p>Dégâts Eau <span class="stat-boost">+8%</span>.<br></p>`,
        3: `<h3>3 étoiles</h3><p>Bourrasque glaciale : 2 charges max, CD <span class="stat-boost">-3s</span>.<br></p>`,
        4: `<h3>4 étoiles</h3><p>CD Bourrasque glaciale <span class="stat-boost">-15%</span>.<br></p>`,
        5: `<h3>5 étoiles</h3><p>[Érosion] cumulable 2 fois (Max Dégâts faiblesse <span class="stat-boost">+24%</span>).<br></p>`
    }
};

// --- TRIDENT DE DRAGON GARDIEN NAGA (SR) ---
weaponsData["trident-de-dragon-gardien-naga"] = {
    name: "Trident de dragon gardien Naga",
    rarity: "SR",
    gradient: "linear-gradient(90deg, #2980b9, #000)",
    image: "Armes_Joueur_SR/eau/trident_de_dragon_gardien_naga/GSWeapon_NagaGDTrident_PortraitBig.png",
    fullData: {
        0: `<h3>Passif :</h3><p>Lorsque qu'une attaque de base est portée, elle a <span class="stat-boost">75%</span> de chances de créer des explosions d'eau supplémentaires devant l'utilisateur.<br></p>`,
        1: `<h3>1 étoile :</h3><p>Lorsque la compétence <strong>Tsunami naga</strong> est utilisée, elle projette 3 déferlements d'eau supplémentaires.<br>Inflige des dégâts équivalents à <span class="stat-boost">120%</span> de l'Attaque de l'utilisateur à chaque explosion.<br></p>`,
        2: `<h3>2 étoiles :</h3><p>Vos dégâts d'eau augmentent de <span class="stat-boost">8%</span>.<br></p>`,
        3: `<h3>3 étoiles :</h3><p>Lorsqu'une Attaque de noyau est utilisée, elle projette 3 déferlements d'eau supplémentaires.<br>Inflige des dégâts équivalents à <span class="stat-boost">120%</span> de l'Attaque de l'utilisateur à chaque explosion.<br></p>`,
        4: `<h3>4 étoiles :</h3><p>Le temps de rechargement de <strong>Tsunami naga</strong> diminue de <span class="stat-boost">15%</span>.<br></p>`,
        5: `<h3>5 étoiles :</h3><p>Lors de l'utilisation de la compétence <strong>Tsunami naga</strong>, l'utilisateur applique l'effet <span class="buff">[Gardien naga]</span>.<br></p><div class="detail-box"><h4><span class="buff">[Gardien naga]</span></h4><p>Augmente les dégâts d'eau de l'utilisateur de <span class="stat-boost">15%</span>.<br>Augmente la Vitesse d'attaque de l'utilisateur de <span class="stat-boost">12%</span>.<br>Durée: 15 seconde(s)</p></div>`
    },
    summaryData: {
        0: `<h3>Passif : Océan Furieux</h3><p>Attaque de base : 75% chance explosions d'eau.<br></p>`,
        1: `<h3>1 étoile</h3><p>Tsunami naga : +3 déferlements (Dégâts <span class="stat-boost">120%</span> Atk chacun).<br></p>`,
        2: `<h3>2 étoiles</h3><p>Dégâts Eau <span class="stat-boost">+8%</span>.<br></p>`,
        3: `<h3>3 étoiles</h3><p>Attaque noyau : +3 déferlements (Dégâts <span class="stat-boost">120%</span> Atk chacun).<br></p>`,
        4: `<h3>4 étoiles</h3><p>CD Tsunami naga <span class="stat-boost">-15%</span>.<br></p>`,
        5: `<h3>5 étoiles</h3><p>Tsunami naga = <span class="buff">[Gardien naga]</span> (Dégâts Eau <span class="stat-boost">+15%</span>, Vitesse <span class="stat-boost">+12%</span>, 15s).<br></p>`
    }
};

// --- CROC DU FRIMAS ---
weaponsData["croc-du-frimas"] = {
    name: "Croc du frimas",
    rarity: "SSR",
    gradient: "linear-gradient(90deg, #2980b9, #000)", // Couleur Eau
    image: "Armes_Joueur_SSR/eau/croc_du_frimas/GSWeapon_WinterFang_PortraitBig.png",
    fullData: {
        0: `<h3>Passif :</h3><p>Lorsque l'utilisateur a équipé la Pierre de bénédiction <strong>[Titre: Massacreur de lycans]</strong>, l'effet <span class="buff">[Isolation]</span> s'active.</p><p>Si la jauge de puissance est à <span class="stat-boost">30%</span> ou plus lors de l'utilisation d'<strong>Ombre du loup</strong>, elle devient <strong>Sillage du loup</strong> pendant 3s.</p><div class="detail-box"><h4><span class="buff">[Isolement]</span></h4><p>Augmente les dégâts infligés de <span class="stat-boost">30%</span> et les dégâts de coup critique de <span class="stat-boost">30%</span> (Durée: illimitée).</p></div>`,
        1: `<h3>1 étoile :</h3><p><strong>Sillage du loup</strong> devient <strong>Nuit du loup blanc</strong> pendant 3s.</p><p>Utiliser une compétence Eau remplit la jauge de puissance de <span class="stat-boost">10%</span> (CD: 1s).</p><p>Toucher une cible applique l'effet <span class="buff">[Marquage d'argent]</span> (CD: 0.5s).</p><div class="detail-box"><h4><span class="buff">[Marquage d'argent]</span></h4><p>Augmente les dégâts de <strong>Nuit du loup blanc</strong> de <span class="stat-boost">55%</span> (Durée: 3s).</p></div>`,
        2: `<h3>2 étoiles :</h3><p>Les dégâts d'eau de l'utilisateur augmentent de <span class="stat-boost">10%</span>.</p>`,
        3: `<h3>3 étoiles :</h3><p>Rejoindre le niveau remplit la jauge de puissance de <span class="stat-boost">50%</span>.</p><p>Utiliser <strong>Ombre du loup</strong> ou <strong>Sillage du loup</strong> active l'effet <span class="buff">[Crépuscule]</span>.</p><div class="detail-box"><h4><span class="buff">[Crépuscule]</span></h4><p>Augmente le Taux crit de <span class="stat-boost">15%</span> et les Dégâts crit de <span class="stat-boost">40%</span> pour les compétences de loup (Durée: 3s).</p></div>`,
        4: `<h3>4 étoiles :</h3><p>Le temps de rechargement d'<strong>Ombre du loup</strong> diminue de <span class="stat-boost">20%</span>.</p>`,
        5: `<h3>5 étoiles :</h3><p>Améliore les effets <span class="buff">[Crépuscule]</span> et <span class="buff">[Marquage d'argent]</span>.</p><div class="detail-box"><h4>Améliorations :</h4><p><strong>[Crépuscule] :</strong> Taux crit <span class="stat-boost">+25%</span>, Dégâts crit <span class="stat-boost">+80%</span>, Dégâts Eau <span class="stat-boost">+80%</span>.</p><p><strong>[Marquage d'argent] :</strong> Dégâts <strong>Nuit du loup blanc</strong> <span class="stat-boost">+55%</span> (cumulable 2 fois).</p></div>`
    },
    summaryData: {
        0: `<h3>Passif : Isolement</h3><p>Buff dégâts/crit <span class="stat-boost">+30%</span> permanent avec titre. Mode Sillage activé.</p>`,
        1: `<h3>1 étoile : Nuit du loup</h3><p>Nouvelle compétence. Charge jauge <span class="stat-boost">+10%</span> (Eau). [Marquage] : Dégâts comp <span class="stat-boost">+55%</span>.</p>`,
        2: `<h3>2 étoiles : Glace</h3><p>Dégâts Eau <span class="stat-boost">+10%</span>.</p>`,
        3: `<h3>3 étoiles : Crépuscule</h3><p>Charge initiale <span class="stat-boost">50%</span>. Buff Crit Rate/Dmg sur compétences de loup.</p>`,
        4: `<h3>4 étoiles : Rapidité</h3><p>CD Ombre du loup <span class="stat-boost">-20%</span>.</p>`,
        5: `<h3>5 étoiles : Éveil</h3><p>Buffs Crépuscule/Marquage massifs (Crit <span class="stat-boost">+25%</span>, Dégâts Eau <span class="stat-boost">+80%</span>).</p>`
    }
};

// --- CROCHET VENIMEUX DE KASAKA (SSR) ---
weaponsData["crochet-venimeux-de-kasaka"] = {
    name: "Crochet venimeux de Kasaka",
    rarity: "SSR",
    gradient: "linear-gradient(90deg, #2980b9, #000)",
    image: "Armes_Joueur_SSR/eau/crochet_venimeux_de_kasaka/GSWeapon_SSR_Kasaka_Venom_Fang_PortraitBig.png",
    fullData: {
        0: `<h3>Passif :</h3><p>Lorsque la compétence <strong>Ombrin fugace</strong> est utilisée, un <span class="buff">[Voile de poison]</span> est créé autour de l'utilisateur.<br></p><div class="detail-box"><h4><span class="buff">[Voile de poison]</span></h4><p>Applique les effets <span class="buff">[Poison mortel de Kasaka et Spasmes]</span> aux cibles se trouvant dans la zone toxique (temps de rechargement: 1 seconde(s)).<br>Durée: 7 seconde(s)</p></div><div class="detail-box"><h4><span class="buff">[Poison mortel de Kasaka]</span></h4><p>Inflige des dégâts équivalents à <span class="stat-boost">110%</span> de l'Attaque de l'utilisateur toutes les 3 seconde(s).<br>Réduit le Taux de récupération de PV de la cible de <span class="stat-boost">70%</span>.<br>Durée: 20 seconde(s)</p></div><div class="detail-box"><h4><span class="buff">[Spasmes]</span></h4><p>Lorsque l'effet atteint 5 cumuls, il active l'effet <span class="buff">[Paralysie]</span>.<br>Réduit l'Attaque de la cible de <span class="stat-boost">3%</span>.<br>Durée: 3 seconde(s) (cumulable jusqu'à 5 fois)</p></div><div class="detail-box"><h4><span class="buff">[Paralysie]</span></h4><p>Interrompt la cible.<br>Durée: 1 seconde(s)</p></div>`,
        1: `<h3>1 étoile :</h3><p>Lors de l'utilisation de la compétence <strong>Ombrin fugace</strong>, l'utilisateur reçoit un <span class="buff">[Bouclier]</span>.<br>L'entrée dans le donjon éphémère active l'effet <span class="buff">[Exterminateur de donjon]</span>.<br>Lorsque la pierre de bénédiction <span class="buff">[Titre: Massacreur de lycans]</span> est équipée, elle active l'effet <span class="buff">[Regard de Kasaka]</span>.<br></p><div class="detail-box"><h4><span class="buff">[Bouclier]</span></h4><p>Applique un <span class="buff">[Bouclier]</span> équivalent à <span class="stat-boost">30%</span> des PV max de l'utilisateur.<br>Durée: 10 seconde(s)</p></div><div class="detail-box"><h4><span class="buff">[Exterminateur de donjon]</span></h4><p>Augmente le Taux de coup critique et les Dégâts de coup critique de <span class="stat-boost">20%</span>.<br><strong>Ombrin fugace</strong> inflige toujours des dégâts élémentaires d'eau, comme si c'était la faiblesse élémentaire de la cible, et ce quelle que soit sa véritable faiblesse élémentaire.<br>Durée: illimitée</p></div><div class="detail-box"><h4><span class="buff">[Regard de Kasaka]</span></h4><p>Augmente les dégâts infligés aux boss dans les mêmes proportions que les dégâts infligés aux monstres normaux grâce au bonus <span class="buff">[Titre: Massacreur de lycans]</span>.<br>Durée: illimitée</p></div>`,
        2: `<h3>2 étoiles :</h3><p>Les dégâts d'eau de l'utilisateur augmentent de <span class="stat-boost">10%</span>.<br></p>`,
        3: `<h3>3 étoiles :</h3><p>Lorsque la compétence <strong>Ombrin fugace</strong> est utilisée, elle active l'effet <span class="buff">[Kasaka majestueux]</span>.<br>L'effet <span class="buff">[Poison mortel de Kasaka]</span> est amélioré.<br></p><div class="detail-box"><h4><span class="buff">[Kasaka majestueux]</span></h4><p>Augmente l'Attaque de <span class="stat-boost">20 %</span>.<br>Durée: 10 seconde(s)</p></div><div class="detail-box"><h4><span class="buff">[Poison mortel de Kasaka]</span></h4><p>Inflige des dégâts équivalents à <span class="stat-boost">200 %</span> de l'Attaque de l'utilisateur toutes les 3 seconde(s).<br>Réduit le Taux de récupération de PV de la cible de <span class="stat-boost">70%</span>.<br>Durée: 20 seconde(s)</p></div>`,
        4: `<h3>4 étoiles :</h3><p>Le temps de rechargement de la compétence <strong>Ombrin fugace</strong> diminue de <span class="stat-boost">20 %</span>.<br></p>`,
        5: `<h3>5 étoiles :</h3><p>Les dégâts de la compétence <strong>Ombrin fugace</strong> augmentent de <span class="stat-boost">150%</span>.<br></p>`
    },
    summaryData: {
        0: `<h3>Passif : Venin de Kasaka</h3><p>Ombrin fugace = <span class="buff">[Voile de poison]</span> (Zone toxique).<br>[Poison mortel] : DOT (<span class="stat-boost">110%</span> Atk) + Debuff Soin (<span class="stat-boost">-70%</span>).<br>[Spasmes] : Debuff Atk (<span class="stat-boost">-3%</span>/stack) -> [Paralysie] à 5 stacks.</p>`,
        1: `<h3>1 étoile</h3><p>Ombrin fugace = <span class="buff">[Bouclier]</span> (30% PV).<br>Donjon éphémère = Crit/Crit Dmg <span class="stat-boost">+20%</span> + Faiblesse Eau forcée.<br>Avec Titre Massacreur = Bonus Dégâts Boss.</p>`,
        2: `<h3>2 étoiles</h3><p>Dégâts Eau <span class="stat-boost">+10%</span>.<br></p>`,
        3: `<h3>3 étoiles</h3><p>Ombrin fugace = <span class="buff">[Kasaka majestueux]</span> (Atk <span class="stat-boost">+20%</span>).<br>Poison amélioré : Dégâts <span class="stat-boost">200%</span> Atk.</p>`,
        4: `<h3>4 étoiles</h3><p>CD Ombrin fugace <span class="stat-boost">-20%</span>.<br></p>`,
        5: `<h3>5 étoiles</h3><p>Dégâts Ombrin fugace <span class="stat-boost">+150%</span>.<br></p>`
    }
};

// --- GRIMOIRE DE THÉTIS ---
weaponsData["grimoire-de-thetis"] = {
    name: "Grimoire de thétis",
    rarity: "SSR",
    gradient: "linear-gradient(90deg, #2980b9, #000)",
    image: "Armes_Joueur_SSR/eau/grimoire_de_thetis/GSWeapon_Tethis_01_PortraitBig.png",
    fullData: {
        0: `<h3>Passif :</h3><p>Lorsque la compétence <strong>Jet d'eau</strong> touche sa cible, elle a <span class="stat-boost">100%</span> de chances de lui appliquer l'effet <span class="buff">[Glace gelée]</span>.<br></p><div class="detail-box"><h4><span class="buff">[Glace gelée]</span></h4><p>Applique l'effet <span class="buff">[Gel]</span> à la cible et l'interrompt.<br>Lorsque cet effet expire, il inflige des dégâts supplémentaires équivalents à <span class="stat-boost">10%</span> des dégâts subis pendant la durée de l'effet.<br>Durée: 4 seconde(s)</p></div>`,
        1: `<h3>1 étoile :</h3><p>L'effet <span class="buff">[Erosion profonde]</span> s'applique également aux cibles affectées par l'effet <span class="buff">[Glace gelée]</span>.<br></p><div class="detail-box"><h4><span class="buff">[Érosion profonde]</span></h4><p>Augmente les dégâts de Faiblesse élémentaire subis par l'ennemi de <span class="stat-boost">24%</span>.<br>Durée: 15 seconde(s)</p></div>`,
        2: `<h3>2 étoiles :</h3><p>Vos dégâts d'eau augmentent de <span class="stat-boost">10%</span>.<br></p>`,
        3: `<h3>3 étoiles :</h3><p>Lorsque l'effet <span class="buff">[Glace gelée]</span> expire, les dégâts supplémentaires de l'utilisateur passent à <span class="stat-boost">20%</span>.<br></p>`,
        4: `<h3>4 étoiles :</h3><p>Le temps de rechargement de <strong>Jet d'eau</strong> diminue de <span class="stat-boost">20%</span>.<br></p>`,
        5: `<h3>5 étoiles :</h3><p>Les dégâts infligés aux cibles affectées par <span class="buff">[Gel]</span> augmentent de <span class="stat-boost">50%</span>.<br></p>`
    },
    summaryData: {
        0: `<h3>Passif : Prison de Glace</h3><p>Jet d'eau = <span class="buff">[Glace gelée]</span> (Gel, Interruption).<br>Explosion finale : 10% des dégâts subis pendant l'effet.</p>`,
        1: `<h3>1 étoile</h3><p>Glace gelée = <span class="buff">[Érosion profonde]</span>.<br>[Érosion] : Dégâts Faiblesse élémentaire <span class="stat-boost">+24%</span>.</p>`,
        2: `<h3>2 étoiles</h3><p>Dégâts Eau <span class="stat-boost">+10%</span>.<br></p>`,
        3: `<h3>3 étoiles</h3><p>Dégâts explosion Glace gelée passent à <span class="stat-boost">20%</span>.<br></p>`,
        4: `<h3>4 étoiles</h3><p>CD Jet d'eau <span class="stat-boost">-20%</span>.<br></p>`,
        5: `<h3>5 étoiles</h3><p>Dégâts sur cible Gelée <span class="stat-boost">+50%</span>.<br></p>`
    }
};

// --- ORBE D'ALLON ---
weaponsData["orbe-d-allon"] = {
    name: "Orbe d'Allon",
    rarity: "SSR",
    gradient: "linear-gradient(90deg, #2980b9, #000)",
    image: "Armes_Joueur_SSR/eau/orbe_d_allon/GSWeapon_AlonOrb_PortraitBig.png",
    fullData: {
        0: `<h3>Passif :</h3><p>La Précision augmente de <span class="stat-boost">0.5 %</span> par tranche de 20 point(s) d'Intelligence de Sung Jinwoo (jusqu'à 5 %).<br>L'utilisation de <strong>Tempête de dominion</strong> confère un <span class="buff">[Bouclier]</span> et active l'effet <span class="buff">[Marée roulante]</span>.<br>Lorsque la compétence <strong>Tempête de dominion</strong> touche sa cible, elle lui applique l'effet <span class="buff">[Maelstrom]</span>.<br></p><div class="detail-box"><h4><span class="buff">[Bouclier]</span></h4><p>Confère un <span class="buff">[Bouclier]</span> équivalent à <span class="stat-boost">10 %</span> des PV max.<br>Durée : 10 seconde(s).</p></div><div class="detail-box"><h4><span class="buff">[Marée roulante]</span></h4><p>Augmente les dégâts infligés de <span class="stat-boost">10 %</span>.<br>Augmente les dégâts d'eau de <span class="stat-boost">10 %</span>.<br>Durée : 20 seconde(s).</p></div><div class="detail-box"><h4><span class="buff">[Maelstrom]</span></h4><p>Augmente les dégâts d'eau subis de <span class="stat-boost">8 %</span>.<br>Durée : 20 seconde(s).</p></div>`,
        1: `<h3>1 étoile :</h3><p>Les dégâts d'eau augmentent de <span class="stat-boost">1 %</span> par tranche de 10 point(s) d'Intelligence de Sung Jinwoo (jusqu'à 20 %).<br>Si la stat Intelligence de Sung Jinwoo est à 200 ou plus, l'effet <span class="buff">[Dérive lunaire]</span> s'active.<br></p><div class="detail-box"><h4><span class="buff">[Dérive lunaire]</span></h4><p>Si les PM de l'utilisateur sont à 41 % ou plus, les dégâts d'eau augmentent de <span class="stat-boost">20 %</span>.<br>Si les PM de l'utilisateur sont à 41 % ou plus, les dégâts des compétences d'arme de l'élément Eau augmentent de <span class="stat-boost">30 %</span>.<br>Durée : illimitée.</p></div>`,
        2: `<h3>2 étoiles :</h3><p>Les dégâts d'eau de l'utilisateur augmentent de <span class="stat-boost">10 %</span>.<br></p>`,
        3: `<h3>3 étoiles :</h3><p>Améliore l'effet <span class="buff">[Marée roulante]</span>.<br>Améliore l'effet <span class="buff">[Maelstrom]</span>.<br></p><div class="detail-box"><h4><span class="buff">[Marée roulante]</span> (Amélioré)</h4><p>Augmente les dégâts infligés de <span class="stat-boost">20 %</span>.<br>Augmente les dégâts d'eau de <span class="stat-boost">20 %</span>.<br>Lorsqu'une compétence d'arme de l'élément Eau touche sa cible, elle lui applique l'effet <span class="buff">[Maelstrom]</span>.<br>Durée : 20 seconde(s).</p></div><div class="detail-box"><h4><span class="buff">[Maelstrom]</span> (Amélioré)</h4><p>Augmente les dégâts d'eau subis de <span class="stat-boost">8 %</span>.<br>Durée : 20 seconde(s) (cumulable jusqu'à 3 fois).</p></div>`,
        4: `<h3>4 étoiles :</h3><p>Diminue le temps de rechargement de la compétence <strong>Tempête de dominion</strong> de <span class="stat-boost">15 %</span>.<br></p>`,
        5: `<h3>5 étoiles :</h3><p>Les dégâts d'eau augmentent de <span class="stat-boost">30 %</span>.<br>Améliore l'effet <span class="buff">[Dérive lunaire]</span>.<br></p><div class="detail-box"><h4><span class="buff">[Dérive lunaire]</span> (Amélioré)</h4><p>Si les PM de l'utilisateur sont à 41 % ou plus, les dégâts d'eau augmentent de <span class="stat-boost">50 %</span>.<br>Si les PM de l'utilisateur sont à 41 % ou plus, les dégâts des compétences d'arme de l'élément Eau augmentent de <span class="stat-boost">60 %</span>.<br>Durée : illimitée.</p></div>`
    },
    summaryData: {
        0: `<h3>Passif : Souverain des Marées</h3><p>Dominion = <span class="buff">[Bouclier]</span> (10% PV) + <span class="buff">[Marée roulante]</span> (+10% Dégâts/Eau).<br>Touche = <span class="buff">[Maelstrom]</span> (+8% Eau subis).<br>Bonus Précision via Intelligence.</p>`,
        1: `<h3>1 étoile</h3><p>Dégâts Eau via Intelligence (max 20%).<br>Intelligence >= 200 & PM >= 41% = <span class="buff">[Dérive lunaire]</span> (+20% Eau, +30% Skill Eau).</p>`,
        2: `<h3>2 étoiles</h3><p>Dégâts Eau <span class="stat-boost">+10 %</span>.<br></p>`,
        3: `<h3>3 étoiles</h3><p>[Marée] améliorée : +20% Dégâts/Eau.<br>[Maelstrom] amélioré : Cumulable jusqu'à 3 fois.</p>`,
        4: `<h3>4 étoiles</h3><p>CD Tempête de dominion <span class="stat-boost">-15 %</span>.<br></p>`,
        5: `<h3>5 étoiles</h3><p>Dégâts Eau <span class="stat-boost">+30 %</span>.<br>[Dérive lunaire] UP : +50% Eau, +60% Skill Eau.</p>`
    }
};

// --- PLANCHE DE SURF DE MARLIN GELÉ ---
weaponsData["planche-de-surf-marlin"] = {
    name: "Planche de surf de marlin gelé",
    rarity: "SSR",
    gradient: "linear-gradient(90deg, #2980b9, #000)",
    image: "Armes_Joueur_SSR/eau/planche_de_surf_de_marlin_gele/GSWeapon_IceStripedMarlinSurfboard_PortraitBig.png",
    fullData: {
        0: `<h3>Passif :</h3><p>Lorsque la compétence <strong>Rêve de marlin</strong> est utilisée à la suite de <strong>Ruée</strong>, elle devient <strong>Marlin volant</strong> et augmente les dégâts de l'utilisateur de <span class="stat-boost">30%</span>.<br>Lorsque les compétences <strong>Rêve de marlin</strong> ou <strong>Marlin volant</strong> touchent leur cible, l'effet <span class="buff">[Voie du surfeur]</span> est appliqué.<br>Lorsque les compétences <strong>Rêve de marlin</strong> ou <strong>Marlin volant</strong> sont utilisées, l'effet <span class="buff">[Super armure]</span> est appliqué.<br></p><div class="detail-box"><h4><span class="buff">[Voie du surfeur]</span></h4><p>Augmente les dégâts face aux monstres de type Normal de <span class="stat-boost">1%</span>.<br>Durée: infinie (cumulable jusqu'à 999 fois)</p></div>`,
        1: `<h3>1 étoile :</h3><p>Lorsque la compétence <strong>Rêve de marlin</strong> est utilisée à la suite de <strong>Ruée</strong>, le temps de rechargement des compétences <strong>Rêve de marlin</strong> et <strong>Marlin volant</strong> se réinitialise (temps de rechargement: 30 seconde(s)).<br></p>`,
        2: `<h3>2 étoiles :</h3><p>Les dégâts d'eau de l'utilisateur augmentent de <span class="stat-boost">10%</span>.<br></p>`,
        3: `<h3>3 étoiles :</h3><p>Lorsque la compétence <strong>Marlin volant</strong> est utilisée, la compétence <strong>Ruée</strong> se charge 1 fois.<br>Augmente les dégâts des compétences <strong>Rêve de marlin</strong> et <strong>Marlin volant</strong> de <span class="stat-boost">30%</span>.<br></p>`,
        4: `<h3>4 étoiles :</h3><p>Réduit le temps de rechargement des compétences <strong>Rêve de marlin</strong> et <strong>Marlin volant</strong> de <span class="stat-boost">20%</span>.<br></p>`,
        5: `<h3>5 étoiles :</h3><p>Lorsque l'utilisateur terrasse un ennemi avec <strong>Rêve de marlin</strong> ou <strong>Marlin volant</strong>, l'effet <span class="buff">[Shaka]</span> est appliqué.<br></p><div class="detail-box"><h4><span class="buff">[Shaka]</span></h4><p>Augmente l'Attaque de l'utilisateur de <span class="stat-boost">1%</span>.<br>Durée: infinie (cumulable jusqu'à 20 fois)</p></div>`
    },
    summaryData: {
        0: `<h3>Passif : Surfeur des Mers</h3><p>Ruée -> Rêve de marlin = <strong>Marlin volant</strong> (Dégâts <span class="stat-boost">+30%</span>).<br>Touche = <span class="buff">[Voie du surfeur]</span> (Dégâts monstres normaux <span class="stat-boost">+1%</span>, max 999).<br>Utilisation = <span class="buff">[Super armure]</span>.</p>`,
        1: `<h3>1 étoile</h3><p>Combo Ruée -> Rêve de marlin réinitialise le CD (30s).<br></p>`,
        2: `<h3>2 étoiles</h3><p>Dégâts Eau <span class="stat-boost">+10%</span>.<br></p>`,
        3: `<h3>3 étoiles</h3><p>Marlin volant recharge Ruée (1 fois).<br>Dégâts Rêve de marlin / Marlin volant <span class="stat-boost">+30%</span>.</p>`,
        4: `<h3>4 étoiles</h3><p>CD Rêve de marlin / Marlin volant <span class="stat-boost">-20%</span>.<br></p>`,
        5: `<h3>5 étoiles</h3><p>Kill avec compétence = <span class="buff">[Shaka]</span>.<br>[Shaka] : Attaque <span class="stat-boost">+1%</span> (infinie, max 20).</p>`
    }
};

// --- SKADI ---
weaponsData["skadi"] = {
    name: "Skadi",
    rarity: "SSR",
    gradient: "linear-gradient(90deg, #2980b9, #000)",
    image: "Armes_Joueur_SSR/eau/skadi/GSWeapon_Skadi_PortraitBig.png",
    fullData: {
        0: `<h3>Passif :</h3><p>Lorsque la compétence <strong>Chasse hivernale</strong> est utilisée, elle active la compétence <strong>Dernière chasse</strong> et applique l'effet <span class="buff">[Bénédiction de Skadi]</span> pendant 7 secondes.<br>Lorsque la compétence <strong>[Chasse hivernale]</strong> touche sa cible, elle lui inflige l'effet <span class="buff">[Malédiction de Skadi]</span>.<br></p><div class="detail-box"><h4><span class="buff">[Dernière chasse]</span></h4><p>Inflige des dégâts équivalents à <span class="stat-boost">200 %</span> de l'Attaque de l'utilisateur aux cibles affectées par <span class="buff">[Malédiction de Skadi]</span>.<br>Inflige l'effet <span class="buff">[Gel]</span>.<br>Lorsque la compétence <strong>Dernière chasse</strong> touche sa cible, l'effet <span class="buff">[Malédiction de Skadi]</span> est dissipé.<br></p></div><div class="detail-box"><h4><span class="buff">[Bénédiction de Skadi]</span></h4><p>Augmente l'Attaque de l'utilisateur de <span class="stat-boost">3%</span>.<br>Augmente la Pénétration de défense de l'utilisateur de <span class="stat-boost">3%</span>.<br>Durée: 10 seconde(s)</p></div><div class="detail-box"><h4><span class="buff">[Malédiction de Skadi]</span></h4><p>Durée: 7 seconde(s)</p></div><div class="detail-box"><h4><span class="buff">[Gel]</span></h4><p>Interrompt la cible.<br>Durée: 2 seconde(s)</p></div>`,
        1: `<h3>1 étoile :</h3><p>Lorsque la compétence <strong>Dernière chasse</strong> est utilisée, elle matérialise <span class="buff">[Domaine de Skadi]</span> pendant 7 seconde(s).<br></p><div class="detail-box"><h4><span class="buff">[Domaine de Skadi]</span></h4><p>Lorsqu'une attaque est portée dans le domaine, elle inflige des dégâts équivalents à <span class="stat-boost">50%</span> de l'Attaque de l'assaillant (temps de rechargement: 0.5 seconde(s)).<br>Augmente les dégâts élémentaires d'eau des membres de l'équipe de <span class="stat-boost">10%</span> dans le domaine.<br></p></div>`,
        2: `<h3>2 étoiles :</h3><p>Augmente les dégâts d'eau de <span class="stat-boost">10%</span>.<br></p>`,
        3: `<h3>3 étoiles :</h3><p>Améliore <span class="buff">[Bénédiction de Skadi]</span>.<br></p><div class="detail-box"><h4><span class="buff">[Bénédiction de Skadi]</span></h4><p>Augmente l'Attaque de <span class="stat-boost">3%</span>.<br>Augmente la Pénétration de défense de l'utilisateur de <span class="stat-boost">3%</span>.<br>Durée: infinie (cumulable jusqu'à 4 fois)</p></div>`,
        4: `<h3>4 étoiles :</h3><p>Le temps de rechargement de <strong>Chasse hivernale</strong> diminue de <span class="stat-boost">20%</span>.<br></p>`,
        5: `<h3>5 étoiles :</h3><p>Améliore la compétence <strong>Dernière chasse</strong>.<br>Inflige des dégâts équivalents à <span class="stat-boost">1000 %</span> de l'Attaque de l'utilisateur aux cibles affectées par <span class="buff">[Malédiction de Skadi]</span>.<br>Inflige l'effet <span class="buff">[Gel]</span>.<br>Lorsque la compétence <strong>Dernière chasse</strong> touche sa cible, l'effet <span class="buff">[Malédiction de Skadi]</span> est dissipé.<br></p><div class="detail-box"><h4><span class="buff">[Gel]</span></h4><p>Interrompt la cible.<br>Durée: 3 seconde(s)</p></div>`
    },
    summaryData: {
        0: `<h3>Passif : Courroux Hivernal</h3><p>Chasse hivernale active <strong>Dernière chasse</strong> + <span class="buff">[Bénédiction]</span>.<br>Touche = <span class="buff">[Malédiction]</span>.<br><strong>Dernière chasse</strong> : Dégâts <span class="stat-boost">200%</span> sur maudit + <span class="buff">[Gel]</span> (2s).<br>[Bénédiction] : Atk/Pene Def <span class="stat-boost">+3%</span> (10s).</p>`,
        1: `<h3>1 étoile</h3><p>Dernière chasse = <span class="buff">[Domaine de Skadi]</span> (7s).<br>Domaine : Dégâts zone (<span class="stat-boost">50%</span>/0.5s) + Buff Eau équipe (<span class="stat-boost">+10%</span>).</p>`,
        2: `<h3>2 étoiles</h3><p>Dégâts Eau <span class="stat-boost">+10%</span>.<br></p>`,
        3: `<h3>3 étoiles</h3><p>[Bénédiction de Skadi] améliorée : Durée infinie, cumulable 4 fois (Max Atk/Pene <span class="stat-boost">+12%</span>).<br></p>`,
        4: `<h3>4 étoiles</h3><p>CD Chasse hivernale <span class="stat-boost">-20%</span>.<br></p>`,
        5: `<h3>5 étoiles</h3><p>Dernière chasse améliorée : Dégâts <span class="stat-boost">1000%</span> sur maudit.<br>Durée [Gel] passe à 3s.</p>`
    }
};