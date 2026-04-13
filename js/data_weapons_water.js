// Initialise l'objet global s'il n'existe pas encore
if (typeof weaponsData === 'undefined') { 
    var weaponsData = {}; 
}

// --- ARC D'ELFE DES GLACES (R) ---
weaponsData["arc-d-elfe-des-glaces"] = {
    name: "Arc d'elfe des glaces",
    rarity: "R",
    element: "Eau",
    gradient: "linear-gradient(90deg, #4b96fa, #000)",
    image: "Armes_Joueur_R/eau/arc_d_elfe_des_glaces/GSWeapon_IceElfBow_PortraitBig.png",
    fullData: {
        0: fmtPassif(`Passif :`, `Lorsque la compétence **Explosion glacée** touche sa cible, elle lui applique l'effet [Gel].`, [
        { title: `[Gel]`, content: `Cette compétence interrompt la cible.
Durée : 0,5 seconde(s)` }
    ], "Eau"),
        1: fmtPassif(`1 étoile :`, `La durée de l'effet [Gel] provoqué par **Explosion glacée** augmente de 1 seconde(s).`, [], "Eau"),
        2: fmtPassif(`2 étoiles :`, `Vos dégâts d'eau augmentent de 6 %.`, [], "Eau"),
        3: fmtPassif(`3 étoiles :`, `La portée de la compétence **Explosion glacée** augmente de 25 %.`, [], "Eau"),
        4: fmtPassif(`4 étoiles :`, `Le temps de rechargement de la compétence **Explosion glacée** diminue de 10 %.`, [], "Eau"),
        5: fmtPassif(`5 étoiles :`, `Lorsque la compétence **Explosion glacée** touche sa cible, elle lui applique l'effet [Engelure].`, [
        { title: `[Engelure]`, content: `Inflige des dégâts équivalents à 50 % de l'Attaque toutes les 3 seconde(s) (cumulable jusqu'à 5 fois).
Après 5 cumuls, la compétence applique l'effet [Gel] à la cible pendant 2 seconde(s).
Durée : 30 seconde(s)` }
    ], "Eau")
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
    element: "Eau",
    gradient: "linear-gradient(90deg, #4b96fa, #000)",
    image: "Armes_Joueur_R/eau/glaive_de_lezard/GSWeapon_LizardGlaive_PortraitBig.png",
    fullData: {
        0: fmtPassif(`Passif :`, `Lors de l'utilisation de la compétence **Transpercement de lézard**, l'utilisateur applique l'effet [Protection de lézard].`, [
        { title: `[Protection de lézard]`, content: `Les dégâts de la compétence **Transpercement de lézard** augmentent de 0.3 % (cumulable jusqu'à 999 fois).
Durée : infinie` }
    ], "Eau"),
        1: fmtPassif(`1 étoile :`, `Lors de l'utilisation de la compétence **Transpercement de lézard**, l'utilisateur a 80 % de chances de réinitialiser son temps de rechargement.
Réduit le prochain taux de réinitialisation du temps de rechargement en cas de réussite.`, [], "Eau"),
        2: fmtPassif(`2 étoiles :`, `Vos dégâts d'eau augmentent de 6 %.`, [], "Eau"),
        3: fmtPassif(`3 étoiles :`, `L'effet **Protection de lézard** s'active tous les 2 cumuls.`, [], "Eau"),
        4: fmtPassif(`4 étoiles :`, `Le temps de rechargement de **Transpercement de lézard** diminue de 10 %.`, [], "Eau"),
        5: fmtPassif(`5 étoiles :`, `Les dégâts infligés aux monstres de type Boss avec **Transpercement de lézard** augmentent de 40 %.`, [], "Eau")
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
weaponsData["crochet-venimeux"] = {
    name: "Crochet venimeux",
    rarity: "SR",
    element: "Eau",
    gradient: "linear-gradient(90deg, #4b96fa, #000)",
    image: "Armes_Joueur_SR/eau/crochet_venimeux/GSWeapon_KasakaVenomFang_PortraitBig.png",
    fullData: {
        0: fmtPassif(`Passif :`, `Il y a 30% de chances d'appliquer l'effet [Hémorragie] à la cible lorsque le compétence **Vile attaque sournoise** la touche.`, [
        { title: `[Hémorragie]`, content: `Inflige des dégâts équivalents à 0.8% des PV actuels de la cible toutes les 3 seconde(s).
Durée: 30 seconde(s)` }
    ], "Eau"),
        1: fmtPassif(`1 étoile :`, `Lorsque la compétence **Attaque de noyau** ou **Vile attaque sournoise** touche sa cible, elle a 30% de chances de lui appliquer l'effet [Paralysie].`, [
        { title: `[Paralysie]`, content: `Cette compétence interrompt la cible.
Durée: 1 seconde(s)` }
    ], "Eau"),
        2: fmtPassif(`2 étoiles :`, `Vos dégâts d'eau augmentent de 8 %.`, [], "Eau"),
        3: fmtPassif(`3 étoiles :`, `Ajoute l'effet [Venin de Kasaka] à la compétence **Vile attaque sournoise**.`, [
        { title: `[Poison de Kasaka]`, content: `Crée une flaque de venin au sol pendant 5 secondes qui inflige des dégâts supplémentaires aux cibles se trouvant dans la zone.` }
    ], "Eau"),
        4: fmtPassif(`4 étoiles :`, `Le temps de rechargement de **Vile attaque sournoise** diminue de 15%.`, [], "Eau"),
        5: fmtPassif(`5 étoiles :`, `Applique l'effet [Poison mortel de Kasaka] aux cibles touchées par **Vile attaque sournoise**.`, [
        { title: `[Poison mortel de Kasaka]`, content: `L'utilisateur inflige des dégâts équivalents à 75% de l'Attaque toutes les 3 seconde(s).
Réduit le Taux de récupération des PV de la cible de 70%.
Durée: 30 seconde(s)` }
    ], "Eau")
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
    element: "Eau",
    gradient: "linear-gradient(90deg, #4b96fa, #000)",
    image: "Armes_Joueur_SR/eau/fauchon_gele/GSWeapon_FrostIceSword_PortraitBig.png",
    fullData: {
        0: fmtPassif(`Passif :`, `Lorsque la compétence **Bourrasque glaciale** touche sa cible, elle a 20% de chances de lui appliquer l'effet [Gel].`, [
        { title: `[Gel]`, content: `Cette compétence interrompt la cible.
Durée: 2 seconde(s)` }
    ], "Eau"),
        1: fmtPassif(`1 étoile :`, `Lorsque la compétence **Bourrasque glaciale** est utilisée sur des cibles affectées par [Gel], l'effet [Érosion] s'applique.`, [
        { title: `[Érosion]`, content: `Augmente les dégâts infligés aux cibles dotées d'une faiblesse élémentaire de 12%.
Durée: 15 seconde(s)` }
    ], "Eau"),
        2: fmtPassif(`2 étoiles :`, `Vos dégâts d'eau augmentent de 8%.`, [], "Eau"),
        3: fmtPassif(`3 étoiles :`, `Modification des effets de la compétence [Bourrasque glaciale]: Peut être utilisée jusqu'à 2 fois Réduit le temps de rechargement de 3 seconde(s).`, [], "Eau"),
        4: fmtPassif(`4 étoiles :`, `Le temps de rechargement de [Bourrasque glaciale] diminue de 15 %.`, [], "Eau"),
        5: fmtPassif(`5 étoiles :`, `L'effet [Erosion] peut se cumuler jusqu'à 2 fois.`, [], "Eau")
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
    element: "Eau",
    gradient: "linear-gradient(90deg, #4b96fa, #000)",
    image: "Armes_Joueur_SR/eau/trident_de_dragon_gardien_naga/GSWeapon_NagaGDTrident_PortraitBig.png",
    fullData: {
        0: fmtPassif(`Passif :`, `Lorsque qu'une attaque de base est portée, elle a 75% de chances de créer des explosions d'eau supplémentaires devant l'utilisateur.`, [], "Eau"),
        1: fmtPassif(`1 étoile :`, `Lorsque la compétence **Tsunami naga** est utilisée, elle projette 3 déferlements d'eau supplémentaires.
Inflige des dégâts équivalents à 120% de l'Attaque de l'utilisateur à chaque explosion.`, [], "Eau"),
        2: fmtPassif(`2 étoiles :`, `Vos dégâts d'eau augmentent de 8%.`, [], "Eau"),
        3: fmtPassif(`3 étoiles :`, `Lorsqu'une Attaque de noyau est utilisée, elle projette 3 déferlements d'eau supplémentaires.
Inflige des dégâts équivalents à 120% de l'Attaque de l'utilisateur à chaque explosion.`, [], "Eau"),
        4: fmtPassif(`4 étoiles :`, `Le temps de rechargement de **Tsunami naga** diminue de 15%.`, [], "Eau"),
        5: fmtPassif(`5 étoiles :`, `Lors de l'utilisation de la compétence **Tsunami naga**, l'utilisateur applique l'effet [Gardien naga].`, [
        { title: `[Gardien naga]`, content: `Augmente les dégâts d'eau de l'utilisateur de 15%.
Augmente la Vitesse d'attaque de l'utilisateur de 12%.
Durée: 15 seconde(s)` }
    ], "Eau")
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
    element: "Eau",
    gradient: "linear-gradient(90deg, #4b96fa, #000)", // Couleur Eau
    image: "Armes_Joueur_SSR/eau/croc_du_frimas/GSWeapon_WinterFang_PortraitBig.png",
    fullData: {
        0: fmtPassif(`Passif :`, `Lorsque l'utilisateur a équipé la Pierre de bénédiction **[Titre: Massacreur de lycans]**, l'effet [Isolation] s'active.
Si la jauge de puissance est à 30% ou plus lors de l'utilisation d'**Ombre du loup**, elle devient **Sillage du loup** pendant 3s.`, [
        { title: `[Isolement]`, content: `Augmente les dégâts infligés de 30% et les dégâts de coup critique de 30% (Durée: illimitée).` }
    ], "Eau"),
        1: fmtPassif(`1 étoile :`, `**Sillage du loup** devient **Nuit du loup blanc** pendant 3s.
Utiliser une compétence Eau remplit la jauge de puissance de 10% (CD: 1s).
Toucher une cible applique l'effet [Marquage d'argent] (CD: 0.5s).`, [
        { title: `[Marquage d'argent]`, content: `Augmente les dégâts de **Nuit du loup blanc** de 55% (Durée: 3s).` }
    ], "Eau"),
        2: fmtPassif(`2 étoiles :`, `Les dégâts d'eau de l'utilisateur augmentent de 10%.`, [], "Eau"),
        3: fmtPassif(`3 étoiles :`, `Rejoindre le niveau remplit la jauge de puissance de 50%.
Utiliser **Ombre du loup** ou **Sillage du loup** active l'effet [Crépuscule].`, [
        { title: `[Crépuscule]`, content: `Augmente le Taux crit de 15% et les Dégâts crit de 40% pour les compétences de loup (Durée: 3s).` }
    ], "Eau"),
        4: fmtPassif(`4 étoiles :`, `Le temps de rechargement d'**Ombre du loup** diminue de 20%.`, [], "Eau"),
        5: fmtPassif(`5 étoiles :`, `Améliore les effets [Crépuscule] et [Marquage d'argent].`, [
        { title: `Améliorations :`, content: `**[Crépuscule] :** Taux crit +25%, Dégâts crit +80%, Dégâts Eau +80%.</p><p>**[Marquage d'argent] :** Dégâts **Nuit du loup blanc** +55% (cumulable 2 fois).` }
    ], "Eau")
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
    element: "Eau",
    gradient: "linear-gradient(90deg, #4b96fa, #000)",
    image: "Armes_Joueur_SSR/eau/crochet_venimeux_de_kasaka/GSWeapon_SSR_Kasaka_Venom_Fang_PortraitBig.png",
    fullData: {
        0: fmtPassif(`Passif :`, `Lorsque la compétence **Ombrin fugace** est utilisée, un [Voile de poison] est créé autour de l'utilisateur.`, [
        { title: `[Voile de poison]`, content: `Applique les effets [Poison mortel de Kasaka et Spasmes] aux cibles se trouvant dans la zone toxique (temps de rechargement: 1 seconde(s)).
Durée: 7 seconde(s)` },
        { title: `[Poison mortel de Kasaka]`, content: `Inflige des dégâts équivalents à 110% de l'Attaque de l'utilisateur toutes les 3 seconde(s).
Réduit le Taux de récupération de PV de la cible de 70%.
Durée: 20 seconde(s)` },
        { title: `[Spasmes]`, content: `Lorsque l'effet atteint 5 cumuls, il active l'effet [Paralysie].
Réduit l'Attaque de la cible de 3%.
Durée: 3 seconde(s) (cumulable jusqu'à 5 fois)` },
        { title: `[Paralysie]`, content: `Interrompt la cible.
Durée: 1 seconde(s)` }
    ], "Eau"),
        1: fmtPassif(`1 étoile :`, `Lors de l'utilisation de la compétence **Ombrin fugace**, l'utilisateur reçoit un [Bouclier].
L'entrée dans le donjon éphémère active l'effet [Exterminateur de donjon].
Lorsque la pierre de bénédiction [Titre: Massacreur de lycans] est équipée, elle active l'effet [Regard de Kasaka].`, [
        { title: `[Bouclier]`, content: `Applique un [Bouclier] équivalent à 30% des PV max de l'utilisateur.
Durée: 10 seconde(s)` },
        { title: `[Exterminateur de donjon]`, content: `Augmente le Taux de coup critique et les Dégâts de coup critique de 20%.
**Ombrin fugace** inflige toujours des dégâts élémentaires d'eau, comme si c'était la faiblesse élémentaire de la cible, et ce quelle que soit sa véritable faiblesse élémentaire.
Durée: illimitée` },
        { title: `[Regard de Kasaka]`, content: `Augmente les dégâts infligés aux boss dans les mêmes proportions que les dégâts infligés aux monstres normaux grâce au bonus [Titre: Massacreur de lycans].
Durée: illimitée` }
    ], "Eau"),
        2: fmtPassif(`2 étoiles :`, `Les dégâts d'eau de l'utilisateur augmentent de 10%.`, [], "Eau"),
        3: fmtPassif(`3 étoiles :`, `Lorsque la compétence **Ombrin fugace** est utilisée, elle active l'effet [Kasaka majestueux].
L'effet [Poison mortel de Kasaka] est amélioré.`, [
        { title: `[Kasaka majestueux]`, content: `Augmente l'Attaque de 20 %.
Durée: 10 seconde(s)` },
        { title: `[Poison mortel de Kasaka]`, content: `Inflige des dégâts équivalents à 200 % de l'Attaque de l'utilisateur toutes les 3 seconde(s).
Réduit le Taux de récupération de PV de la cible de 70%.
Durée: 20 seconde(s)` }
    ], "Eau"),
        4: fmtPassif(`4 étoiles :`, `Le temps de rechargement de la compétence **Ombrin fugace** diminue de 20 %.`, [], "Eau"),
        5: fmtPassif(`5 étoiles :`, `Les dégâts de la compétence **Ombrin fugace** augmentent de 150%.`, [], "Eau")
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
    element: "Eau",
    gradient: "linear-gradient(90deg, #4b96fa, #000)",
    image: "Armes_Joueur_SSR/eau/grimoire_de_thetis/GSWeapon_Tethis_01_PortraitBig.png",
    fullData: {
        0: fmtPassif(`Passif :`, `Lorsque la compétence **Jet d'eau** touche sa cible, elle a 100% de chances de lui appliquer l'effet [Glace gelée].`, [
        { title: `[Glace gelée]`, content: `Applique l'effet [Gel] à la cible et l'interrompt.
Lorsque cet effet expire, il inflige des dégâts supplémentaires équivalents à 10% des dégâts subis pendant la durée de l'effet.
Durée: 4 seconde(s)` }
    ], "Eau"),
        1: fmtPassif(`1 étoile :`, `L'effet [Erosion profonde] s'applique également aux cibles affectées par l'effet [Glace gelée].`, [
        { title: `[Érosion profonde]`, content: `Augmente les dégâts de Faiblesse élémentaire subis par l'ennemi de 24%.
Durée: 15 seconde(s)` }
    ], "Eau"),
        2: fmtPassif(`2 étoiles :`, `Vos dégâts d'eau augmentent de 10%.`, [], "Eau"),
        3: fmtPassif(`3 étoiles :`, `Lorsque l'effet [Glace gelée] expire, les dégâts supplémentaires de l'utilisateur passent à 20%.`, [], "Eau"),
        4: fmtPassif(`4 étoiles :`, `Le temps de rechargement de **Jet d'eau** diminue de 20%.`, [], "Eau"),
        5: fmtPassif(`5 étoiles :`, `Les dégâts infligés aux cibles affectées par [Gel] augmentent de 50%.`, [], "Eau")
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
    element: "Eau",
    gradient: "linear-gradient(90deg, #4b96fa, #000)",
    image: "Armes_Joueur_SSR/eau/orbe_d_allon/GSWeapon_AlonOrb_PortraitBig.png",
    fullData: {
        0: fmtPassif(`Passif :`, `La Précision augmente de 0.5 % par tranche de 20 point(s) d'Intelligence de Sung Jinwoo (jusqu'à 5 %).
L'utilisation de **Tempête de dominion** confère un [Bouclier] et active l'effet [Marée roulante].
Lorsque la compétence **Tempête de dominion** touche sa cible, elle lui applique l'effet [Maelstrom].`, [
        { title: `[Bouclier]`, content: `Confère un [Bouclier] équivalent à 10 % des PV max.
Durée : 10 seconde(s).` },
        { title: `[Marée roulante]`, content: `Augmente les dégâts infligés de 10 %.
Augmente les dégâts d'eau de 10 %.
Durée : 20 seconde(s).` },
        { title: `[Maelstrom]`, content: `Augmente les dégâts d'eau subis de 8 %.
Durée : 20 seconde(s).` }
    ], "Eau"),
        1: fmtPassif(`1 étoile :`, `Les dégâts d'eau augmentent de 1 % par tranche de 10 point(s) d'Intelligence de Sung Jinwoo (jusqu'à 20 %).
Si la stat Intelligence de Sung Jinwoo est à 200 ou plus, l'effet [Dérive lunaire] s'active.`, [
        { title: `[Dérive lunaire]`, content: `Si les PM de l'utilisateur sont à 41 % ou plus, les dégâts d'eau augmentent de 20 %.
Si les PM de l'utilisateur sont à 41 % ou plus, les dégâts des compétences d'arme de l'élément Eau augmentent de 30 %.
Durée : illimitée.` }
    ], "Eau"),
        2: fmtPassif(`2 étoiles :`, `Les dégâts d'eau de l'utilisateur augmentent de 10 %.`, [], "Eau"),
        3: fmtPassif(`3 étoiles :`, `Améliore l'effet [Marée roulante].
Améliore l'effet [Maelstrom].`, [
        { title: `[Marée roulante] (Amélioré)`, content: `Augmente les dégâts infligés de 20 %.
Augmente les dégâts d'eau de 20 %.
Lorsqu'une compétence d'arme de l'élément Eau touche sa cible, elle lui applique l'effet [Maelstrom].
Durée : 20 seconde(s).` },
        { title: `[Maelstrom] (Amélioré)`, content: `Augmente les dégâts d'eau subis de 8 %.
Durée : 20 seconde(s) (cumulable jusqu'à 3 fois).` }
    ], "Eau"),
        4: fmtPassif(`4 étoiles :`, `Diminue le temps de rechargement de la compétence **Tempête de dominion** de 15 %.`, [], "Eau"),
        5: fmtPassif(`5 étoiles :`, `Les dégâts d'eau augmentent de 30 %.
Améliore l'effet [Dérive lunaire].`, [
        { title: `[Dérive lunaire] (Amélioré)`, content: `Si les PM de l'utilisateur sont à 41 % ou plus, les dégâts d'eau augmentent de 50 %.
Si les PM de l'utilisateur sont à 41 % ou plus, les dégâts des compétences d'arme de l'élément Eau augmentent de 60 %.
Durée : illimitée.` }
    ], "Eau")
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
    element: "Eau",
    gradient: "linear-gradient(90deg, #4b96fa, #000)",
    image: "Armes_Joueur_SSR/eau/planche_de_surf_de_marlin_gele/GSWeapon_IceStripedMarlinSurfboard_PortraitBig.png",
    fullData: {
        0: fmtPassif(`Passif :`, `Lorsque la compétence **Rêve de marlin** est utilisée à la suite de **Ruée**, elle devient **Marlin volant** et augmente les dégâts de l'utilisateur de 30%.
Lorsque les compétences **Rêve de marlin** ou **Marlin volant** touchent leur cible, l'effet [Voie du surfeur] est appliqué.
Lorsque les compétences **Rêve de marlin** ou **Marlin volant** sont utilisées, l'effet [Super armure] est appliqué.`, [
        { title: `[Voie du surfeur]`, content: `Augmente les dégâts face aux monstres de type Normal de 1%.
Durée: infinie (cumulable jusqu'à 999 fois)` }
    ], "Eau"),
        1: fmtPassif(`1 étoile :`, `Lorsque la compétence **Rêve de marlin** est utilisée à la suite de **Ruée**, le temps de rechargement des compétences **Rêve de marlin** et **Marlin volant** se réinitialise (temps de rechargement: 30 seconde(s)).`, [], "Eau"),
        2: fmtPassif(`2 étoiles :`, `Les dégâts d'eau de l'utilisateur augmentent de 10%.`, [], "Eau"),
        3: fmtPassif(`3 étoiles :`, `Lorsque la compétence **Marlin volant** est utilisée, la compétence **Ruée** se charge 1 fois.
Augmente les dégâts des compétences **Rêve de marlin** et **Marlin volant** de 30%.`, [], "Eau"),
        4: fmtPassif(`4 étoiles :`, `Réduit le temps de rechargement des compétences **Rêve de marlin** et **Marlin volant** de 20%.`, [], "Eau"),
        5: fmtPassif(`5 étoiles :`, `Lorsque l'utilisateur terrasse un ennemi avec **Rêve de marlin** ou **Marlin volant**, l'effet [Shaka] est appliqué.`, [
        { title: `[Shaka]`, content: `Augmente l'Attaque de l'utilisateur de 1%.
Durée: infinie (cumulable jusqu'à 20 fois)` }
    ], "Eau")
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
    element: "Eau",
    gradient: "linear-gradient(90deg, #4b96fa, #000)",
    image: "Armes_Joueur_SSR/eau/skadi/GSWeapon_Skadi_PortraitBig.png",
    fullData: {
        0: fmtPassif(`Passif :`, `Lorsque la compétence **Chasse hivernale** est utilisée, elle active la compétence **Dernière chasse** et applique l'effet [Bénédiction de Skadi] pendant 7 secondes.
Lorsque la compétence **[Chasse hivernale]** touche sa cible, elle lui inflige l'effet [Malédiction de Skadi].`, [
        { title: `[Dernière chasse]`, content: `Inflige des dégâts équivalents à 200 % de l'Attaque de l'utilisateur aux cibles affectées par [Malédiction de Skadi].
Inflige l'effet [Gel].
Lorsque la compétence **Dernière chasse** touche sa cible, l'effet [Malédiction de Skadi] est dissipé.` },
        { title: `[Bénédiction de Skadi]`, content: `Augmente l'Attaque de l'utilisateur de 3%.
Augmente la Pénétration de défense de l'utilisateur de 3%.
Durée: 10 seconde(s)` },
        { title: `[Malédiction de Skadi]`, content: `Durée: 7 seconde(s)` },
        { title: `[Gel]`, content: `Interrompt la cible.
Durée: 2 seconde(s)` }
    ], "Eau"),
        1: fmtPassif(`1 étoile :`, `Lorsque la compétence **Dernière chasse** est utilisée, elle matérialise [Domaine de Skadi] pendant 7 seconde(s).`, [
        { title: `[Domaine de Skadi]`, content: `Lorsqu'une attaque est portée dans le domaine, elle inflige des dégâts équivalents à 50% de l'Attaque de l'assaillant (temps de rechargement: 0.5 seconde(s)).
Augmente les dégâts élémentaires d'eau des membres de l'équipe de 10% dans le domaine.` }
    ], "Eau"),
        2: fmtPassif(`2 étoiles :`, `Augmente les dégâts d'eau de 10%.`, [], "Eau"),
        3: fmtPassif(`3 étoiles :`, `Améliore [Bénédiction de Skadi].`, [
        { title: `[Bénédiction de Skadi]`, content: `Augmente l'Attaque de 3%.
Augmente la Pénétration de défense de l'utilisateur de 3%.
Durée: infinie (cumulable jusqu'à 4 fois)` }
    ], "Eau"),
        4: fmtPassif(`4 étoiles :`, `Le temps de rechargement de **Chasse hivernale** diminue de 20%.`, [], "Eau"),
        5: fmtPassif(`5 étoiles :`, `Améliore la compétence **Dernière chasse**.
Inflige des dégâts équivalents à 1000 % de l'Attaque de l'utilisateur aux cibles affectées par [Malédiction de Skadi].
Inflige l'effet [Gel].
Lorsque la compétence **Dernière chasse** touche sa cible, l'effet [Malédiction de Skadi] est dissipé.`, [
        { title: `[Gel]`, content: `Interrompt la cible.
Durée: 3 seconde(s)` }
    ], "Eau")
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