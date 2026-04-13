// Initialise l'objet global s'il n'existe pas encore
if (typeof weaponsData === 'undefined') { 
    var weaponsData = {}; 
}

// --- CHASSEUR DE LYCANS (R) ---
weaponsData["chasseur-de-lycans"] = {
    name: "Chasseur de lycans",
    rarity: "R",
    element: "Lumière",
    gradient: "linear-gradient(90deg, #fac700, #000)",
    image: "Armes_Joueur_R/lumiere/chasseur_de_lycans/GSWeapon_LycanSlayer_01_PortraitBig.png",
    fullData: {
        0: fmtPassif(`Passif :`, `Lorsque l'Attaque de noyau de l'utilisateur touche sa cible, elle lui applique l'effet [Cible].`, [
        { title: `[Cible]`, content: `Les dégâts infligés avec **Chasse aux lycans** augmentent de 50 %.
Durée : 8 seconde(s)` }
    ], "Lumière"),
        1: fmtPassif(`1 étoile :`, `L'utilisateur inflige des dégâts supplémentaires équivalents à 100 % de l'Attaque tous les 10 coup(s).`, [], "Lumière"),
        2: fmtPassif(`2 étoiles :`, `Vos dégâts de lumière augmentent de 6 %.`, [], "Lumière"),
        3: fmtPassif(`3 étoiles :`, `Les dégâts des attaques de noyau de Jinwoo augmentent de 40 %.`, [], "Lumière"),
        4: fmtPassif(`4 étoiles :`, `Le temps de rechargement de **Chasse aux lycans** diminue de 10 %.`, [], "Lumière"),
        5: fmtPassif(`5 étoiles :`, `Lorsque **Chasse aux lycans** est utilisée sur des cibles affectées par l'effet [Cible], l'effet Dégâts subis augmentés passe à 200 %.`, [], "Lumière")
    },
    summaryData: {
        0: `<h3>Passif : Marquage</h3><p>Atk de noyau = <span class="buff">[Cible]</span>.<br>Dégâts Chasse aux lycans <span class="stat-boost">+50 %</span>.</p>`,
        1: `<h3>1 étoile</h3><p>Dégâts sup. <span class="stat-boost">100 % Atk</span> tous les 10 coups.<br></p>`,
        2: `<h3>2 étoiles</h3><p>Dégâts Lumière <span class="stat-boost">+6 %</span>.<br></p>`,
        3: `<h3>3 étoiles</h3><p>Dégâts Atk de noyau <span class="stat-boost">+40 %</span>.<br></p>`,
        4: `<h3>4 étoiles</h3><p>CD Chasse aux lycans <span class="stat-boost">-10 %</span>.<br></p>`,
        5: `<h3>5 étoiles</h3><p>Chasse aux lycans sur <span class="buff">[Cible]</span> : Dégâts subis <span class="stat-boost">200 %</span>.<br></p>`
    }
};

// --- CUBE DE TEMPÊTE DE SABLE (R) ---
weaponsData["cube-de-tempete-de-sable"] = {
    name: "Cube de tempête de sable",
    rarity: "R",
    element: "Lumière",
    gradient: "linear-gradient(90deg, #fac700, #000)",
    image: "Armes_Joueur_R/lumiere/cube_de_tempete_de_sable/GSWeapon_SandCentipedeCube_PortraitBig.png",
    fullData: {
        0: fmtPassif(`Passif :`, `Lorsque la compétence **Yeux luisants** touche sa cible, elle lui inflige l'effet [Écran de fumée].`, [
        { title: `[Écran de fumée]`, content: `Réduit la Précision de 5 % (cumulable jusqu'à 3 fois).
Durée : 20 seconde(s)` }
    ], "Lumière"),
        1: fmtPassif(`1 étoile :`, `Lorsqu'une cible affectée par [Écran de fumée] est attaquée, la Précision augmente de 5 %.`, [], "Lumière"),
        2: fmtPassif(`2 étoiles :`, `Vos dégâts de lumière augmentent de 6 %.`, [], "Lumière"),
        3: fmtPassif(`3 étoiles :`, `Lors de l'utilisation de la compétence **Yeux luisants**, si l'utilisateur subit une attaque ou si son Attaque de noyau touche sa cible dans les 10 seconde(s), ce dernier inflige à la cible des dégâts supplémentaires équivalents à 150 % de son Attaque et lui applique l'effet [Écran de fumée].`, [], "Lumière"),
        4: fmtPassif(`4 étoiles :`, `Réduit les temps de rechargement de la compétence **Yeux luisants** de 10 %.`, [], "Lumière"),
        5: fmtPassif(`5 étoiles :`, `Lorsque l'effet [Écran de fumée] se cumule 3 fois, il se transforme en effet [Écran de fumée amélioré].`, [
        { title: `[Écran de fumée amélioré]`, content: `Réduit la Précision de 50 %. [Écran de fumée] ne peut pas s'activer.
Durée : 20 seconde(s)` }
    ], "Lumière")
    },
    summaryData: {
        0: `<h3>Passif : Brouillard</h3><p>Yeux luisants = <span class="buff">[Écran de fumée]</span>.<br>Précision <span class="stat-boost">-5 %</span> (max 3 piles).</p>`,
        1: `<h3>1 étoile</h3><p>Cible sous fumée attaquée : Précision <span class="stat-boost">+5 %</span>.<br></p>`,
        2: `<h3>2 étoiles</h3><p>Dégâts Lumière <span class="stat-boost">+6 %</span>.<br></p>`,
        3: `<h3>3 étoiles</h3><p>Contre ou Atk de noyau = <span class="stat-boost">150 %</span> de dégâts sup + <span class="buff">[Écran de fumée]</span>.<br></p>`,
        4: `<h3>4 étoiles</h3><p>CD Yeux luisants <span class="stat-boost">-10 %</span>.<br></p>`,
        5: `<h3>5 étoiles</h3><p>3 piles = <span class="buff">[Écran de fumée amélioré]</span>.<br>Précision ennemie <span class="stat-boost">-50 %</span>.</p>`
    }
};

// --- ARC LONG DE LA FAMILLE RADIR (SR) ---
weaponsData["arc-long-de-la-famille-radir"] = {
    name: "Arc long de la famille Radir",
    rarity: "SR",
    element: "Lumière",
    gradient: "linear-gradient(90deg, #fac700, #000)",
    image: "Armes_Joueur_SR/lumiere/arc_long_de_la_famille_radir/GSWeapon_RadiruGreatBow_01_PortraitBig.png",
    fullData: {
        0: fmtPassif(`Passif :`, `Chaque fois que la flèche d'**Éclat de lumière** pénètre une cible, les dégâts infligés par l'utilisateur augmentent de 4% (cumulable jusqu'à 20 fois).`, [], "Lumière"),
        1: fmtPassif(`1 étoile :`, `Lorsque la compétence **Éclat de lumière** est utilisée, la Défense de la cible est ignorée à hauteur de 50%.`, [], "Lumière"),
        2: fmtPassif(`2 étoiles :`, `Vos dégâts de lumière augmentent de 8%.`, [], "Lumière"),
        3: fmtPassif(`3 étoiles :`, `Modification des effets de la compétence **Éclat de lumière**:
Lorsque les cibles sont touchées par l'onde de choc d'**Éclat de lumière**, elles sont repoussées de 3m et subissent l'effet [Étourdissement].`, [
        { title: `[Étourdissement]`, content: `Cet effet immobilise la cible.
Durée: 2 seconde(s)` }
    ], "Lumière"),
        4: fmtPassif(`4 étoiles :`, `Le temps de rechargement d'**Éclat de lumière** diminue de 15%.`, [], "Lumière"),
        5: fmtPassif(`5 étoiles :`, `Augmente les dégâts de toutes les attaques de 25% sur les cibles [étourdies].`, [], "Lumière")
    },
    summaryData: {
        0: `<h3>Passif : Tir Perçant</h3><p>Flèche pénètre = Dégâts <span class="stat-boost">+4%</span> (max 20 stacks).<br></p>`,
        1: `<h3>1 étoile</h3><p>Éclat de lumière : Ignore <span class="stat-boost">50%</span> Défense.<br></p>`,
        2: `<h3>2 étoiles</h3><p>Dégâts Lumière <span class="stat-boost">+8%</span>.<br></p>`,
        3: `<h3>3 étoiles</h3><p>Éclat de lumière : Repousse 3m + <span class="buff">[Étourdissement]</span> (2s).<br></p>`,
        4: `<h3>4 étoiles</h3><p>CD Éclat de lumière <span class="stat-boost">-15%</span>.<br></p>`,
        5: `<h3>5 étoiles</h3><p>Dégâts sur étourdis <span class="stat-boost">+25%</span>.<br></p>`
    }
};

// --- ÉPÉE DE DRAGON ÉTINCELANTE (SR) ---
weaponsData["epee-de-dragon-etincelante"] = {
    name: "Épée de dragon étincelante",
    rarity: "SR",
    element: "Lumière",
    gradient: "linear-gradient(90deg, #fac700, #000)",
    image: "Armes_Joueur_SR/lumiere/epee_de_dragon_etincelante/GSWeapon_LightningDragonBlade_PortraitBig.png",
    fullData: {
        0: fmtPassif(`Passif :`, `Lorsque les PV de l'utilisateur sont supérieurs à 80%, applique l'effet [Énergie du dragon de lumière].`, [
        { title: `[Énergie du dragon de lumière]`, content: `Augmente l'attaque de 8%.` }
    ], "Lumière"),
        1: fmtPassif(`1 étoile :`, `Applique un effet d'augmentation de 30% des Dégâts de coup critique de la compétence [Énergie du dragon de lumière].`, [], "Lumière"),
        2: fmtPassif(`2 étoiles :`, `Vos dégâts de lumière augmentent de 8%.`, [], "Lumière"),
        3: fmtPassif(`3 étoiles :`, `Modification des effets de la compétence **Éclat du dragon**: Un éclair supplémentaire frappe successivement devant l'utilisateur.`, [], "Lumière"),
        4: fmtPassif(`4 étoiles :`, `Le temps de rechargement de la compétence **Éclat du dragon** diminue de 15%.`, [], "Lumière"),
        5: fmtPassif(`5 étoiles :`, `Lorsque les PV sont à 60% ou au-dessus, l'effet [Énergie du dragon de lumière] s'applique.
Lorsque la compétence **Éclat du dragon** est utilisée, le Taux de coup critique passe à 100%.`, [], "Lumière")
    },
    summaryData: {
        0: `<h3>Passif : Lumière Draconique</h3><p>PV > 80% = <span class="buff">[Énergie du dragon de lumière]</span>.<br>[Énergie] : Attaque <span class="stat-boost">+8%</span>.</p>`,
        1: `<h3>1 étoile</h3><p>[Énergie] : Dégâts Coup critique <span class="stat-boost">+30%</span>.<br></p>`,
        2: `<h3>2 étoiles</h3><p>Dégâts Lumière <span class="stat-boost">+8%</span>.<br></p>`,
        3: `<h3>3 étoiles</h3><p>Éclat du dragon : +1 éclair supplémentaire.<br></p>`,
        4: `<h3>4 étoiles</h3><p>CD Éclat du dragon <span class="stat-boost">-15%</span>.<br></p>`,
        5: `<h3>5 étoiles</h3><p>Condition PV [Énergie] réduite à > 60%.<br>Éclat du dragon : Taux critique <span class="stat-boost">100%</span>.</p>`
    }
};

// --- LANCE DE CHEVALIER DÉMONIAQUE (SR) ---
weaponsData["lance-de-chevalier-demoniaque"] = {
    name: "Lance de chevalier démoniaque",
    rarity: "SR",
    element: "Lumière",
    gradient: "linear-gradient(90deg, #fac700, #000)",
    image: "Armes_Joueur_SR/lumiere/lance_de_chevalier_demoniaque/GSWeapon_DemonKnightSpear_PortraitBig.png",
    fullData: {
        0: fmtPassif(`Passif :`, `Lors de l'utilisation de la compétence **Lance sacrée**, l'utilisateur applique l'effet [Esprit corrompu].`, [
        { title: `[Esprit corrompu]`, content: `Supprime le temps de rechargement de la compétence **Lance sacrée**.
Durée: 3 seconde(s)` }
    ], "Lumière"),
        1: fmtPassif(`1 étoile :`, `Lorsque **Lance sacrée** touche sa cible, l'utilisateur récupère 1% de ses PM.`, [], "Lumière"),
        2: fmtPassif(`2 étoiles :`, `Vos dégâts de lumière augmentent de 8%.`, [], "Lumière"),
        3: fmtPassif(`3 étoiles :`, `Lorsque la compétence **Lance sacrée** est utilisée, la durée de l'effet [Esprit corrompu] augmente de 4 seconde(s).`, [], "Lumière"),
        4: fmtPassif(`4 étoiles :`, `Le temps de rechargement de la compétence **Lance sacrée** diminue de 15%.`, [], "Lumière"),
        5: fmtPassif(`5 étoiles :`, `Pendant que l'effet [Esprit corrompu] est actif, la Vitesse d'attaque de l'utilisateur augmente de 10%.
Les dégâts de la compétence **Lance sacrée** augmentent de 10%.`, [], "Lumière")
    },
    summaryData: {
        0: `<h3>Passif : Lance Corrompue</h3><p>Lance sacrée = <span class="buff">[Esprit corrompu]</span> (Reset CD, 3s).<br></p>`,
        1: `<h3>1 étoile</h3><p>Touche = Regen <span class="stat-boost">1%</span> PM.<br></p>`,
        2: `<h3>2 étoiles</h3><p>Dégâts Lumière <span class="stat-boost">+8%</span>.<br></p>`,
        3: `<h3>3 étoiles</h3><p>Durée [Esprit corrompu] <span class="stat-boost">+4s</span>.<br></p>`,
        4: `<h3>4 étoiles</h3><p>CD Lance sacrée <span class="stat-boost">-15%</span>.<br></p>`,
        5: `<h3>5 étoiles</h3><p>Sous [Esprit] : Vitesse Atk <span class="stat-boost">+10%</span>, Dégâts Lance <span class="stat-boost">+10%</span>.<br></p>`
    }
};

// --- BÂTON DE COMBAT DIVIN ---
weaponsData["baton-de-combat-divin"] = {
    name: "Bâton de combat divin",
    rarity: "SSR",
    element: "Lumière",
    gradient: "linear-gradient(90deg, #fac700, #000)", // Couleur Lumière
    image: "Armes_Joueur_SSR/lumiere/baton_de_combat_divin/GSWeapon_ManaPole_PortraitBig.png",
    fullData: {
        0: fmtPassif(`Passif :`, `La compétence **Frappe de l'Ordre céleste** peut être chargée jusqu'au Stade 3, et lorsque chaque stade est chargé, elle active l'effet [Concentration d'énergie de mana].
En cas d'utilisation de **Ruée** pendant la charge de la compétence, le temps de rechargement de **Frappe de l'Ordre céleste** diminue de 18 seconde(s) et l'effet [Concentration d'énergie de mana] est supprimé.`, [
        { title: `[Concentration d'énergie de mana]`, content: `Augmente les dégâts de **Frappe de l'Ordre céleste** de 100% (cumulable jusqu'à 3 fois).
Cet effet est supprimé après une attaque avec **Frappe de l'Ordre céleste**.` }
    ], "Lumière"),
        1: fmtPassif(`1 étoile :`, `Lors de l'utilisation de **Frappe de l'Ordre céleste** avec 3 cumuls de l'effet [Concentration d'énergie de mana] appliqués, l'effet [Lâché de Bâton de combat divin] est activé.`, [
        { title: `[Lâché de bâton de combat divin]`, content: `Crée un Bâton de combat divin géant qui inflige des dégâts équivalents à 800% de l'Attaque de l'utilisateur.` }
    ], "Lumière"),
        2: fmtPassif(`2 étoiles :`, `Augmente les dégâts de lumière de 10%.`, [], "Lumière"),
        3: fmtPassif(`3 étoiles :`, `La compétence **Frappe de l'Ordre céleste** peut être chargée jusqu'au Stade 5, et lorsque chaque stade est chargé, elle active l'effet [Concentration d'énergie de mana].
[Concentration d'énergie de mana] peut désormais se cumuler jusqu'à 5 fois.
Un effet [Bouclier] s'active lors de la charge.
Au bout de 5 cumuls, si l'effet [Concentration d'énergie de mana] s'est activé et si l'utilisateur est touché pendant la charge, la compétence **Frappe de l'Ordre céleste** est instantanément activée.`, [
        { title: `[Bouclier]`, content: `Octroie un [Bouclier] équivalent à 50% des PV max de l'utilisateur.
Une fois que **Frappe de l'Ordre céleste** a fini de se charger, cet effet est supprimé.` }
    ], "Lumière"),
        4: fmtPassif(`4 étoiles :`, `Le temps de rechargement de **Frappe de l'Ordre céleste** diminue de 20%.`, [], "Lumière"),
        5: fmtPassif(`5 étoiles :`, `Lorsque l'effet [Concentration d'énergie de mana] atteint 5 cumuls, les dégâts de l'effet [Lâché de bâton de combat divin] augmentent de 150%.`, [], "Lumière")
    },
    summaryData: {
        0: `<h3>Passif : Ordre Céleste</h3><p>Frappe chargée (3 stades) = <span class="buff">[Concentration]</span>.<br>Ruée annule charge = CD -18s.<br>[Concentration] : Dégâts Frappe <span class="stat-boost">+100%</span>/cumul (max 3).</p>`,
        1: `<h3>1 étoile</h3><p>3 cumuls Concentration = <span class="buff">[Lâché de Bâton]</span> (Dégâts <span class="stat-boost">800%</span> Atk).<br></p>`,
        2: `<h3>2 étoiles</h3><p>Dégâts Lumière <span class="stat-boost">+10%</span>.<br></p>`,
        3: `<h3>3 étoiles</h3><p>Charge max passe à 5 stades (Max 5 Concentr.).<br>Charge = <span class="buff">[Bouclier]</span> (<span class="stat-boost">50%</span> PV).<br>Touché à 5 stacks = Instant Cast.</p>`,
        4: `<h3>4 étoiles</h3><p>CD Frappe de l'Ordre céleste <span class="stat-boost">-20%</span>.<br></p>`,
        5: `<h3>5 étoiles</h3><p>À 5 cumuls Concentration : Dégâts [Lâché de Bâton] <span class="stat-boost">+150%</span>.<br></p>`
    }
};

// --- LE CHASSEUR ---
weaponsData["le-chasseur"] = {
    name: "Le Chasseur",
    rarity: "SSR",
    element: "Lumière",
    gradient: "linear-gradient(90deg, #fac700, #000)",
    image: "Armes_Joueur_SSR/lumiere/le_chasseur/GSWeapon_KillWolf_PortraitBig.png",
    fullData: {
        0: fmtPassif(`Passif :`, `Lors de l'utilisation de **Jugement**, l'utilisateur active son Attaque de noyau.
Lors de l'utilisation de **Jugement**, l'Attaque de noyau devient **Que la chasse commence** pendant 6 seconde(s) et les dégâts augmentent de 100%.
Lorsque l'Attaque de base, l'Attaque de noyau ou la compétence **Que la chasse commence** touchent des cibles dans un rayon de 4 m, les dégâts augmentent de 50%.`, [], "Lumière"),
        1: fmtPassif(`1 étoile :`, `Lorsque la dernière attaque de **Jugement** touche sa cible, elle inflige l'effet [Cission].
Lorsque la cible entre en état de [Bris] alors que l'effet [Cission] est actif, l'effet [Destruction] s'applique à la cible.`, [
        { title: `[Faille]`, content: `Augmente l'effet [Bris] de 25%.
Durée: 3 seconde(s)` },
        { title: `[Destruction]`, content: `Augmente les dégâts subis de 8%.
Durée: infinie` }
    ], "Lumière"),
        2: fmtPassif(`2 étoiles :`, `Vos dégâts de lumière augmentent de 10%.`, [], "Lumière"),
        3: fmtPassif(`3 étoiles :`, `Lorsque la première attaque de **Jugement** touche sa cible, elle lui applique l'effet [Halte].`, [
        { title: `[Prise]`, content: `Interrompt la cible.
Durée: 2 seconde(s)` }
    ], "Lumière"),
        4: fmtPassif(`4 étoiles :`, `Le temps de rechargement de **Jugement** diminue de 20%.`, [], "Lumière"),
        5: fmtPassif(`5 étoiles :`, `Modification de l'effet [Destruction]
Augmente les dégâts subis de 16% (cumulable jusqu'à 99 fois).
Une fois que **Jugement** touche sa cible et si une a Attaque de noyau suit directement la compétence, l'effet [Ouverture au jugement] s'applique à la cible.
Au bout de 3 cumuls de l'effet [Ouverture au jugement), 1 cumul de [Destruction] est créé (cumulable 1 fois).`, [], "Lumière")
    },
    summaryData: {
        0: `<h3>Passif : Danseuse à l'Épée</h3><p>Jugement active Attaque noyau (buffée <strong>Que la chasse commence</strong>, Dégâts <span class="stat-boost">+100%</span>).<br>Attaques (4m) = Dégâts <span class="stat-boost">+50%</span>.</p>`,
        1: `<h3>1 étoile</h3><p>Jugement = <span class="buff">[Cission]</span>.<br>Bris sous Cission = <span class="buff">[Destruction]</span> (Dégâts subis <span class="stat-boost">+8%</span>, infini).</p>`,
        2: `<h3>2 étoiles</h3><p>Dégâts Lumière <span class="stat-boost">+10%</span>.<br></p>`,
        3: `<h3>3 étoiles</h3><p>Jugement = <span class="buff">[Halte]</span> (Interruption 2s).<br></p>`,
        4: `<h3>4 étoiles</h3><p>CD Jugement <span class="stat-boost">-20%</span>.<br></p>`,
        5: `<h3>5 étoiles</h3><p>[Destruction] améliorée : Dégâts subis <span class="stat-boost">+16%</span> (max 99 stacks).<br>Combo Jugement -> Attaque noyau génère [Destruction].</p>`
    }
};

// --- RENARD À QUEUE DORÉE ---
weaponsData["renard-a-queue-doree"] = {
    name: "Renard à queue dorée",
    rarity: "SSR",
    element: "Lumière",
    gradient: "linear-gradient(90deg, #fac700, #000)",
    image: "Armes_Joueur_SSR/lumiere/renard_a_queue_doree/GSWeapon_GoldTaleFox_PortraitBig.png",
    fullData: {
        0: fmtPassif(`Passif :`, `Lorsque l'utilisateur rejoint le niveau, il obtient 9 cumuls de l'effet [Queue de renard].
Lorsque l'utilisateur lance la compétence **Prélude**, il obtient 1 cumul de l'effet [Queue de renard].
Si l'utilisateur parvient à esquiver pendant la charge de cette compétence, he active l'effet [Évasion extrême].`, [
        { title: `[Queue de renard]`, content: `Augmente le Taux de coup critique et les Dégâts de coup critique de la compétence de base de lumière de 12.25% (cumulable jusqu'à 1 fois).
Cet effet se dissipe lorsque l'utilisateur lance une compétence de base de lumière.
Durée: illimitée (cumulable jusqu'à 9 fois)` }
    ], "Lumière"),
        1: fmtPassif(`1 étoile :`, `Lorsque la compétence **Prélude** touche sa cible, elle lui applique l'effet [Plaie dorée].`, [
        { title: `[Plaie dorée]`, content: `Lorsque l'utilisateur attaque une cible affectée par [Plaie Dorée], ses dégâts de lumière augmentent de 99.99%.
Lorsque l'utilisateur attaque une cible avec l'effet [Plaie Dorée], il récupère 9.99% de ses PV 1 fois.
Subir une attaque de lumière dissipe cet effet.
Durée: 9.9 seconde(s)` }
    ], "Lumière"),
        2: fmtPassif(`2 étoiles :`, `Augmente les dégâts de lumière de 10%.`, [], "Lumière"),
        3: fmtPassif(`3 étoiles :`, `Lorsqu'[Évasion extrême] est activée, l'utilisateur obtient 1 cumul de l'effet [Queue de renard].
Lorsque l'utilisateur lance **Prélude**, il obtient 1 cumul supplémentaire de l'effet [Queue de renard] et un [Bouclier].`, [
        { title: `[Bouclier]`, content: `Confère un [Bouclier] équivalent à 12.25% des PV max de l'utilisateur.
Durée: 9.9 seconde(s)` }
    ], "Lumière"),
        4: fmtPassif(`4 étoiles :`, `Le temps de rechargement de **Prélude** diminue de 20%.`, [], "Lumière"),
        5: fmtPassif(`5 étoiles :`, `Lorsque l'utilisateur lance **Prélude** alors qu'un ennemi se trouve dans un rayon de 5 m, il charge immédiatement.
Lorsque seules des armes de type Lumière sont équipées, les dégâts de lumière de l'utilisateur augmentent de 20.24 % et son Attaque augmente de 12.25%.
L'effet [Queue de renard] est amélioré.`, [
        { title: `[Queue de renard]`, content: `Augmente le Taux de coup critique et les Dégâts de coup critique de la compétence de base de lumière de l'utilisateur de 20.24 % (cumulable jusqu'à 1 fois).
Lorsque l'utilisateur lance une compétence de base de lumière, cet effet est dissipé.
Durée: illimitée (cumulable jusqu'à 9 fois)` }
    ], "Lumière")
    },
    summaryData: {
        0: `<h3>Passif : Esprit du Renard</h3><p>Entrée/Prélude = <span class="buff">[Queue de renard]</span> (max 9).<br>Esquive charge = Évasion extrême.<br>[Queue] : Crit/Crit Dmg skill lumière <span class="stat-boost">+12.25%</span> (conso 1 stack).</p>`,
        1: `<h3>1 étoile</h3><p>Prélude touche = <span class="buff">[Plaie dorée]</span>.<br>[Plaie] : Prochaine attaque lumière <span class="stat-boost">+99.99%</span> Dégâts + Soin <span class="stat-boost">9.99%</span> PV.</p>`,
        2: `<h3>2 étoiles</h3><p>Dégâts Lumière <span class="stat-boost">+10%</span>.<br></p>`,
        3: `<h3>3 étoiles</h3><p>Évasion extrême / Prélude = +Stacks Queue.<br>Prélude = <span class="buff">[Bouclier]</span> (<span class="stat-boost">12.25%</span> PV, 9.9s).</p>`,
        4: `<h3>4 étoiles</h3><p>CD Prélude <span class="stat-boost">-20%</span>.<br></p>`,
        5: `<h3>5 étoiles</h3><p>Prélude charge instantanée (si ennemi < 5m).<br>Full Lumière : Dégâts Lumière <span class="stat-boost">+20.24%</span>, Atk <span class="stat-boost">+12.25%</span>.<br>[Queue] améliorée : Crit/Crit Dmg <span class="stat-boost">+20.24%</span>.</p>`
    }
};

// --- VÉRITÉ : LANCE DE CHEVALIER DÉMONIAQUE ---
weaponsData["verite-lance-de-chevalier-demoniaque"] = {
    name: "Vérité : Lance de chevalier démoniaque",
    rarity: "SSR",
    element: "Lumière",
    gradient: "linear-gradient(90deg, #fac700, #000)",
    image: "Armes_Joueur_SSR/lumiere/verite_lance_de_chevalier_demoniaque/GSWeapon_SSR_Demon_Knight_Spear_PortraitBig.png",
    fullData: {
        0: fmtPassif(`Passif :`, `Lors de l'utilisation de la compétence **Furie de chevalier sacré**, l'utilisateur applique l'effet [Règles corrompues].`, [
        { title: `[Règles corrompues]`, content: `Supprime le temps de rechargement de la compétence **Furie de chevalier sacré**.
(temps de rechargement: 20 seconde(s))
Augmente les dégâts élémentaires de lumière de 10%.
Durée: 4 seconde(s)` }
    ], "Lumière"),
        1: fmtPassif(`1 étoile :`, `Augmente la Vitesse d'attaque de l'utilisateur de 15% et les dégâts de **Furie de chevalier sacré** de 15% tant que l'effet **Règles corrompues** reste actif.
Lorsque **Furie de chevalier sacré** touche une cible, l'utilisateur récupère 1% de PM.`, [], "Lumière"),
        2: fmtPassif(`2 étoiles :`, `Augmente les dégâts de lumière de 10%.`, [], "Lumière"),
        3: fmtPassif(`3 étoiles :`, `Lorsque **Furie de chevalier sacré** touche une cible, elle lui inflige l'effet [Rage du chevalier sacré corrompu].`, [
        { title: `[Rage du chevalier sacré corrompu]`, content: `Augmente les dégâts de **Furie de chevalier sacré** de 2% (cumulable jusqu'à 50 fois).
Durée: illimitée` }
    ], "Lumière"),
        4: fmtPassif(`4 étoiles :`, `Le temps de rechargement de la compétence **Furie de chevalier sacré** diminue de 20 %.`, [], "Lumière"),
        5: fmtPassif(`5 étoiles :`, `Lorsque **Furie de chevalier sacré** touche une cible, elle lui inflige l'effet [Malédiction du chevalier sacré].`, [
        { title: `[Malédiction du chevalier sacré]`, content: `Au bout de 3 cumuls, elle inflige des dégâts supplémentaires équivalents à 2000 % de l'Attaque de l'utilisateur.
Lorsque les dégâts supplémentaires sont subis, l'effet se dissipe.
Durée: 60 seconde(s)` }
    ], "Lumière")
    },
    summaryData: {
        0: `<h3>Passif : Ordre du Chaos</h3><p>Furie de chevalier sacré = <span class="buff">[Règles corrompues]</span>.<br>[Règles] : Reset CD Furie + Dégâts Lumière <span class="stat-boost">+10%</span> (4s, CD 20s).</p>`,
        1: `<h3>1 étoile</h3><p>Sous Règles corrompues : Vitesse Atk <span class="stat-boost">+15%</span>, Dégâts Furie <span class="stat-boost">+15%</span>.<br>Touche Furie = Regen 1% PM.</p>`,
        2: `<h3>2 étoiles</h3><p>Dégâts Lumière <span class="stat-boost">+10%</span>.<br></p>`,
        3: `<h3>3 étoiles</h3><p>Touche Furie = <span class="buff">[Rage du chevalier sacré corrompu]</span>.<br>[Rage] : Dégâts Furie <span class="stat-boost">+2%</span> (max 50, infini).</p>`,
        4: `<h3>4 étoiles</h3><p>CD Furie de chevalier sacré <span class="stat-boost">-20%</span>.<br></p>`,
        5: `<h3>5 étoiles</h3><p>Touche Furie = <span class="buff">[Malédiction]</span>.<br>3 cumuls = Dégâts <span class="stat-boost">2000%</span> Atk.</p>`
    }
};

// --- Lame fantôme ---
weaponsData["lame-fantome"] = {
    name: "Lame fantôme",
    rarity: "SSR",
    element: "Lumière",
    gradient: "linear-gradient(90deg, #fac700, #000)",
    image: "Armes_Joueur_SSR/lumiere/lame_fantome/GSWeapon_PhantomBlade_PortraitBig.png",
    fullData: {
        0: fmtPassif(`Passif :`, `L'effet [Projection] est activé lorsque l'utilisateur arrive dans le niveau.

        L'effet [Lumina] s'active lorsque l'utilisateur est équipé d'armes de l'élément Lumière.

        Après l'utilisation de la compétence **Entaille spirituelle fantôme**, celle-ci devient **Entaille enchaînée fantôme**.`, [
        { title: `[Entaille enchaînée fantôme]`, content: `Lance rapidement une lame d'énergie sur l'ennemi.
            Dégâts et Consommation de PM : identiques à ceux de la compétence **Entaille spirituelle fantôme**.
            Lance une lame d'énergie à haute vélocité sur l'ennemi. Peut être utilisée jusqu'à 3 fois.
            La compétence redevient **Entaille spirituelle fantôme** après un certain temps ou après avoir été utilisée le nombre maximum de fois possible.` },
        { title: `[Projection]`, content: `Augmente l'Attaque de 5 %.
            Augmente la Vitesse de 5 %.
            Durée : illimitée.` },
        { title: `[Lumina]`, content: `Augmente les dégâts de lumière de 5 %.
            Augmente les Dégâts de coup critique de 10 %.
            Durée : illimitée.` }
    ], "Lumière"),
        1: fmtPassif(`1 étoile :`, `Lorsque la compétence **Entaille spirituelle fantôme** porte un Coup critique, le nombre d'utilisations de la compétence **Entaille enchaînée fantôme** augmente de 2 (Entaille enchaînée fantôme peut ainsi être utilisée jusqu'à 5 fois).

        L'utilisation de la compétence **Entaille spirituelle fantôme** active [Écho de lumière].

        L'utilisateur reçoit [Super armure] lors de l'utilisation de la compétence **Entaille enchaînée fantôme**.`, [
        { title: `[Écho de lumière]`, content: `Augmente le Taux de coup critique de 5 %.
            Augmente les Dégâts de coup critique de 10 %.
            Durée : 7 seconde(s).` }
    ], "Lumière"),
        2: fmtPassif(`2 étoiles :`, `Augmente les dégâts de lumière de 10 %.`, [], "Lumière"),
        3: fmtPassif(`3 étoiles :`, `L'utilisation de la compétence **Entaille spirituelle fantôme** active l'effet [Fantôme].

        L'effet [Projection] est amélioré.`, [
        { title: `[Fantôme]`, content: `Augmente les dégâts de la compétence **Entaille enchaînée fantôme** de 100 %.
            Lorsque les dégâts subis représentent 5 % des PV max de l'utilisateur ou plus, l'effet [Camouflage] est activé pendant 4.5 seconde(s).
            Durée : 4.5 seconde(s).` },
        { title: `Amélioration [Projection]`, content: `Augmente l'Attaque de 10 %.
            Augmente la Vitesse de 10 %.
            Durée : illimitée.` }
    ], "Lumière"),
        4: fmtPassif(`4 étoiles :`, `Le temps de rechargement de la compétence **Entaille spirituelle fantôme** diminue de 20 %.`, [], "Lumière"),
        5: fmtPassif(`5 étoiles :`, `Si les PM de l'utilisateur sont à 50 % ou moins, sa Consommation de PM diminue de 25 %.

        L'effet [Écho de lumière] est amélioré.

        Chaque fois que la compétence **Entaille spirituelle fantôme** est utilisée, les dégâts de la compétence **Entaille enchaînée fantôme** augmentent de 25 % (cumulable jusqu'à 10 fois).`, [
        { title: `Amélioration [Écho de lumière]`, content: `Augmente le Taux de coup critique de 10 %.
            Augmente les Dégâts de coup critique de 20 %.
            Augmente les dégâts infligés de 10 %.
            Durée : 7 seconde(s).` }
    ], "Lumière")
    },
    summaryData: {
        0: `
        <h3>Passif : Lame Spirituelle</h3>
        <p>Entrée : <span class="buff">[Projection]</span> (Atk/Vitesse +5%).<br>
        Arme Lumière : <span class="buff">[Lumina]</span> (Dégâts Lumière +5%, Crit Dmg +10%).<br>
        Entaille spirituelle -> <strong>Entaille enchaînée</strong> (3 utilisations).</p>
    `,
        1: `
        <h3>1 étoile</h3>
        <p>Critique sur Entaille spirituelle = +2 utilisations Enchaînée (Max 5).<br>
        Active <span class="buff">[Écho de lumière]</span> (Crit Rate +5%, Crit Dmg +10%).<br>
        Super armure sur Entaille enchaînée.</p>
    `,
        2: `
        <h3>2 étoiles</h3>
        <p>Dégâts Lumière <span class="stat-boost">+10%</span>.<br></p>
    `,
        3: `
        <h3>3 étoiles</h3>
        <p>Entaille spirituelle active <span class="buff">[Fantôme]</span> (Dégâts Enchaînée +100%, Camouflage si dégâts subis).<br>
        Améliore <span class="buff">[Projection]</span> (Atk/Vitesse +10%).</p>
    `,
        4: `
        <h3>4 étoiles</h3>
        <p>CD Entaille spirituelle <span class="stat-boost">-20%</span>.<br></p>
    `,
        5: `
        <h3>5 étoiles</h3>
        <p>PM < 50% = Conso PM -25%.<br>
        Stack Dégâts Enchaînée (+25%/stack).<br>
        Améliore <span class="buff">[Écho]</span> (Crit Rate 10%, Crit Dmg 20%, Dégâts 10%).</p>
    `
    }
};

// --- Epée du Héros ---
weaponsData["epee-du-heros"] = {
    name: "Epée du Héros",
    rarity: "SSR",
    element: "Lumière",
    gradient: "linear-gradient(90deg, #fac700, #000)",
    image: "Armes_Joueur_SSR/lumiere/epee_du_heros/GSWeapon_HimmelSword_PortraitBig.png",
    fullData: {
        0: fmtPassif(`Passif :`, `L'effet [Détermination inébranlable] s'active lorsque l'utilisateur arrive dans un niveau.

        Lorsque la compétence **Épée porte-paix** touche sa cible, les dégâts de compétence d'arme de l'élément Lumière augmentent de 45 % pendant 15 seconde(s).`, [
        { title: `[Détermination inébranlable]`, content: `Augmente les dégâts de lumière de 25 %.
            Réduit la Consommation de mana pour les compétences de 20 %.
            Durée : illimitée.` }
    ], "Lumière"),
        1: fmtPassif(`1 étoile :`, `Lorsque l'utilisateur arrive dans le niveau, l'effet [Perception extraordinaire] s'active.`, [
        { title: `[Perception extraordinaire]`, content: `Augmente la Précision de 5 %.
            Augmente le Taux de coup critique de 5 %.</p>
            <p>Augmente les Dégâts de coup critique de 60 %.
            Durée : illimitée.` }
    ], "Lumière"),
        2: fmtPassif(`2 étoiles :`, `Augmente les dégâts de lumière de 10 %.`, [], "Lumière"),
        3: fmtPassif(`3 étoiles :`, `L'effet [Volonté du héros] s'active lorsque l'utilisateur arrive dans un niveau.

        Lorsque la compétence **Épée porte-paix** touche une cible bénéficiant d'un **[Bouclier]**, les dégâts qu'elle inflige augmentent de 20 % pendant 15 seconde(s).`, [
        { title: `[Volonté du héros]`, content: `Lorsque la compétence **Épée porte-paix** touche sa cible, elle inflige des dégâts de **Bris lourds**.
            L'utilisateur bénéficie de [Super armure] lors de l'utilisation de la compétence.
            Durée : illimitée.` }
    ], "Lumière"),
        4: fmtPassif(`4 étoiles :`, `Diminue le temps de rechargement de la compétence **Épée porte-paix** de 20 %.`, [], "Lumière"),
        5: fmtPassif(`5 étoiles :`, `<p>L'utilisation de la compétence **Épée porte-paix** ralentit le temps pendant 2 seconde(s) et active l'effet [Épée démono-régicide].`, [
        { title: `[Épée démono-régicide]`, content: `Augmente les dégâts infligés aux boss de 50 %.
            Augmente les dégâts de lumière de 35 %.</p>
            Augmente les dégâts de compétence ultime de 50 % pendant 8 seconde(s).` }
    ], "Lumière")
    },
    summaryData: {
        0: `
        <h3>Passif : Détermination</h3>
        <p>Entrée : <span class="buff">[Détermination]</span> (Dégâts Lumière +25%, Mana -20%).<br>
        Touche Épée porte-paix : Dégâts arme Lumière +45%.<br>
        Permanent : Dégâts Critiques +60%.</p>
    `,
        1: `
        <h3>1 étoile</h3>
        <p>Entrée : <span class="buff">[Perception]</span> (Précision +5%, Taux Crit +5%).</p>
    `,
        2: `
        <h3>2 étoiles</h3>
        <p>Dégâts Lumière <span class="stat-boost">+10%</span>.</p>
    `,
        3: `
        <h3>3 étoiles</h3>
        <p>Entrée : <span class="buff">[Volonté]</span> (Bris lourds et Super armure sur Épée porte-paix).<br>
        Bonus Bouclier : Dégâts +20% contre ennemis protégés.</p>
    `,
        4: `
        <h3>4 étoiles</h3>
        <p>CD Épée porte-paix <span class="stat-boost">-20%</span>.</p>
    `,
        5: `
        <h3>5 étoiles</h3>
        <p>Épée porte-paix : Slow-mo (2s) et <span class="buff">[Démono-régicide]</span> (Dégâts Boss +50%, Lumière +35%).<br>
        Ultime : Dégâts +50% (8s).</p>
    `
    }
};