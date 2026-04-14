// Initialise l'objet global s'il n'existe pas encore
if (typeof weaponsData === 'undefined') {
    var weaponsData = {};
}

// --- LAME DE RAZAN (R) ---
weaponsData["lame-de-razan"] = {
    name: "Lame de Razan",
    rarity: "R",
    element: "Feu",
    gradient: "linear-gradient(90deg, #e64b4b, #000)",
    image: "Armes_Joueur_R/feu/lame_de_razan/GSWeapon_RazanBlade_PortraitBig.png",
    fullData: {
        0: fmtPassif(`Passif :`, `Lorsque la compétence **Entaille ardente** touche sa cible, elle lui inflige l'effet [Brûlure].`, [
        { title: `[Brûlure]`, content: `Inflige des dégâts équivalents à 44 % de l'Attaque toutes les 3 seconde(s) (cumulable jusqu'à 5 fois).
Durée : 30 seconde(s)` }
    ], "Feu"),
        1: fmtPassif(`1 étoile :`, `Les dégâts de la compétence **Entaille ardente** augmentent de 44 % lorsque Jinwoo attaque des cibles affectées par [Brûlure].`, [], "Feu"),
        2: fmtPassif(`2 étoiles :`, `Vos dégâts de feu augmentent de 6 %.`, [], "Feu"),
        3: fmtPassif(`3 étoiles :`, `Augmente les dégâts de brûlure de la compétence **Entaille ardente** de 44 %.`, [], "Feu"),
        4: fmtPassif(`4 étoiles :`, `Le temps de rechargement d'**Entaille ardente** diminue de 10 %.`, [], "Feu"),
        5: fmtPassif(`5 étoiles :`, `Les dégâts infligés aux monstres de type Boss avec **Entaille ardente** augmentent de 44 %.`, [], "Feu")
    },
    summaryData: {
        0: `<h3>Passif :</h3><p>Entaille ardente = <span class="buff">[Brûlure]</span>.<br>44 % Atk/3s (max 5 piles).</p>`,
        1: `<h3>1 étoile</h3><p>Dégâts Entaille ardente <span class="stat-boost">+44 %</span> sur cible brûlée.</p>`,
        2: `<h3>2 étoiles</h3><p>Dégâts Feu <span class="stat-boost">+6 %</span>.</p>`,
        3: `<h3>3 étoiles</h3><p>Dégâts de l'effet <span class="buff">[Brûlure]</span> <span class="stat-boost">+44 %</span>.</p>`,
        4: `<h3>4 étoiles</h3><p>CD Entaille ardente <span class="stat-boost">-10 %</span>.</p>`,
        5: `<h3>5 étoiles</h3><p>Dégâts sur Boss (via compétence) <span class="stat-boost">+44 %</span>.</p>`
    }
};

// --- ÉPÉE LONGUE EN ÉCAILLES DE DRAGON (SR) ---
weaponsData["epee-longue-en-ecailles-de-dragon"] = {
    name: "Épée longue en écailles de dragon",
    rarity: "SR",
    element: "Feu",
    gradient: "linear-gradient(90deg, #e64b4b, #000)",
    image: "Armes_Joueur_SR/feu/epee_longue_en_ecailles_de_dragon/GSWeapon_DragnScaleGreatBlade_PortraitBig.png",
    fullData: {
        0: fmtPassif(`Passif :`, `Lorsque l'utilisateur réalise une frappe descendante avec **Entaille du dragon de feu**, il crée un **Domaine du dragon**.`, [
        { title: `[Domaine du dragon]`, content: `Réduit de 30% les dégâts subis par les alliés se trouvant dans la zone et ajoute l'effet [Super armure].
Inflige des dégâts supplémentaires équivalents à 100% de l'Attaque lorsque des attaques touchent leur cible dans la zone (s'active toutes les 2 seconde(s)).
Durée: 10 secondes` }
    ], "Feu"),
        1: fmtPassif(`1 étoile :`, `Applique l'effet [Pouvoir du sang de dragon] aux alliés se trouvant dans la zone de [Domaine du dragon].`, [
        { title: `[Le pouvoir du sang de dragon]`, content: `Augmente l'Attaque de l'utilisateur de 12%.
Durée: 10 seconde(s)` }
    ], "Feu"),
        2: fmtPassif(`2 étoiles :`, `Vos dégâts de feu augmentent de 8 %.`, [], "Feu"),
        3: fmtPassif(`3 étoiles :`, `Augmente la zone d'effet et la durée de [Domaine du dragon] de 50%.`, [], "Feu"),
        4: fmtPassif(`4 étoiles :`, `Réduit le temps de rechargement d'**Entaille du dragon de feu** de 15%.`, [], "Feu"),
        5: fmtPassif(`5 étoiles :`, `Augmente les dégâts de 100% lorsque la compétence **Entaille du dragon de feu** est utilisée dans la zone d'effet de [Domaine du dragon].`, [], "Feu")
    },
    summaryData: {
        0: `<h3>Passif :</h3><p>Entaille du dragon de feu = <span class="buff">[Domaine du dragon]</span>.<br>[Domaine] : Réduc Dégâts <span class="stat-boost">30%</span>, Super armure, Dégâts Zone (100% Atk/2s).<br>Durée : 10s.</p>`,
        1: `<h3>1 étoile</h3><p>Domaine applique <span class="buff">[Le pouvoir du sang de dragon]</span>.<br>[Pouvoir] : Attaque <span class="stat-boost">+12%</span>.</p>`,
        2: `<h3>2 étoiles</h3><p>Dégâts Feu <span class="stat-boost">+8%</span>.</p>`,
        3: `<h3>3 étoiles</h3><p>Zone et Durée de [Domaine du dragon] <span class="stat-boost">+50%</span>.</p>`,
        4: `<h3>4 étoiles</h3><p>CD Entaille du dragon de feu <span class="stat-boost">-15%</span>.</p>`,
        5: `<h3>5 étoiles</h3><p>Entaille dans le Domaine : Dégâts <span class="stat-boost">+100%</span>.</p>`
    }
};

// --- GRIMOIRE DE DÉMON ARDENT (SR) ---
weaponsData["grimoire-de-demon-ardent"] = {
    name: "Grimoire de démon ardent",
    rarity: "SR",
    element: "Feu",
    gradient: "linear-gradient(90deg, #e64b4b, #000)",
    image: "Armes_Joueur_SR/feu/grimoire_de_demon_ardent/GSWeapon_BurningDevilGrimoire_PortraitBig.png",
    fullData: {
        0: fmtPassif(`Passif :`, `Lorsque l'utilisateur applique **Éclatement**, les effets [Insufflation de points de mana] ou [Récupération de points de mana] s'appliquent selon la quantité de PM restante.`, [
        { title: `[Insufflation de points de mana]`, content: `Si les PM de l'utilisateur sont de 51% ou plus, l'effet est activé.
Lorsque l'utilisateur applique **Éclatement**, ses dégâts de compétence augmentent de 30%, mais 10% de ses PM max sont consommés.` },
        { title: `[Récupération de points de mana]`, content: `Si les PM de l'utilisateur sont de 50% ou moins, l'effet est activé.
L'utilisateur récupère 5% de ses PM pour chaque cible touchée par **Éclatement**.` }
    ], "Feu"),
        1: fmtPassif(`1 étoile :`, `Lors de l'utilisation de la compétence **Éclatement**, l'effet **Éclatement** s'active à nouveau à l'emplacement de la première explosion.`, [], "Feu"),
        2: fmtPassif(`2 étoiles :`, `Augmente les dégâts de feu de 8%.`, [], "Feu"),
        3: fmtPassif(`3 étoiles :`, `Lorsque les PM de l'utilisateur sont supérieurs à 51%, son Attaque augmente à hauteur de 60% de ses PM.`, [], "Feu"),
        4: fmtPassif(`4 étoiles :`, `Réduit le temps de rechargement d'**Éclatement** de 15%.`, [], "Feu"),
        5: fmtPassif(`5 étoiles :`, `Augmente les PM max de 400.`, [], "Feu")
    },
    summaryData: {
        0: `<h3>Passif :</h3><p>Éclatement déclenche un effet selon les PM restants :<br>> 51% PM : <span class="buff">[Insufflation]</span> (Dégâts <span class="stat-boost">+30%</span>, Coût <span class="stat-boost">-10%</span> PM).<br><= 50% PM : <span class="buff">[Récupération]</span> (Regen <span class="stat-boost">5%</span> PM par cible).</p>`,
        1: `<h3>1 étoile</h3><p>Éclatement s'active une seconde fois (Double explosion).</p>`,
        2: `<h3>2 étoiles</h3><p>Dégâts Feu <span class="stat-boost">+8%</span>.</p>`,
        3: `<h3>3 étoiles</h3><p>Si PM > 51% : Attaque augmentée de <span class="stat-boost">60%</span> des PM.</p>`,
        4: `<h3>4 étoiles</h3><p>CD Éclatement <span class="stat-boost">-15%</span>.</p>`,
        5: `<h3>5 étoiles</h3><p>PM Max <span class="stat-boost">+400</span>.</p>`
    }
};

// --- ORBE D'AVARICE (SR) ---
weaponsData["orbe-d-avarice"] = {
    name: "Orbe d'avarice",
    rarity: "SR",
    element: "Feu",
    gradient: "linear-gradient(90deg, #e64b4b, #000)",
    image: "Armes_Joueur_SR/feu/orbe_d_avarice/GSWeapon_OrbGreed_PortraitBig.png",
    fullData: {
        0: fmtPassif(`Passif :`, `Les dégâts infligés par **Purgatoire** augmentent de 50% et la consommation de PM augmente de 10%.`, [], "Feu"),
        1: fmtPassif(`1 étoile :`, `Lorsque l'utilisateur rejoint le niveau, applique 20 cumuls de l'effet [Flamme noire tonitruante).
Augmente le temps de rechargement de **Purgatoire** de 5 seconde(s).`, [
        { title: `[Flamme noire tonitruante]`, content: `Augmente les dégâts de **Purgatoire** de 8%.
Lorsque l'utilisateur lance **Purgatoire**, consomme 4 cumuls.
Durée: illimitée` }
    ], "Feu"),
        2: fmtPassif(`2 étoiles :`, `Vos dégâts de feu augmentent de 8%.`, [], "Feu"),
        3: fmtPassif(`3 étoiles :`, `Restaure les PM à hauteur des cumuls de [Flamme noire tonitruante] x 2 toutes les 3 seconde(s).`, [], "Feu"),
        4: fmtPassif(`4 étoiles :`, `Le temps de rechargement de **Purgatoire** diminue de 15%.`, [], "Feu"),
        5: fmtPassif(`5 étoiles :`, `Lorsque l'utilisateur rejoint le niveau, applique 30 cumuls de l'effet [Flamme noire tonitruante].`, [], "Feu")
    },
    summaryData: {
        0: `<h3>Passif :</h3><p>Purgatoire : Dégâts <span class="stat-boost">+50%</span>, Conso PM <span class="stat-boost">+10%</span>.</p>`,
        1: `<h3>1 étoile</h3><p>Début niveau : 20 cumuls <span class="buff">[Flamme noire]</span>.<br>CD Purgatoire +5s.<br>[Flamme] : Dégâts Purgatoire <span class="stat-boost">+8%</span> (Conso 4 cumuls/tir).</p>`,
        2: `<h3>2 étoiles</h3><p>Dégâts Feu <span class="stat-boost">+8%</span>.</p>`,
        3: `<h3>3 étoiles</h3><p>Regen PM = Cumuls [Flamme] x 2 toutes les 3s.</p>`,
        4: `<h3>4 étoiles</h3><p>CD Purgatoire <span class="stat-boost">-15%</span>.</p>`,
        5: `<h3>5 étoiles</h3><p>Début niveau : 30 cumuls <span class="buff">[Flamme noire]</span>.</p>`
    }
};

// --- TUEUSE DE CHEVALIER (SR) ---
weaponsData["tueuse-de-chevalier"] = {
    name: "Tueuse de chevalier",
    rarity: "SR",
    element: "Feu",
    gradient: "linear-gradient(90deg, #e64b4b, #000)",
    image: "Armes_Joueur_SR/feu/tueuse_de_chevalier/GSWeapon_KnightKiller_PortraitBig.png",
    fullData: {
        0: fmtPassif(`Passif :`, `Lors de l'utilisation de la compétence **Télékinésie**, l'utilisateur inflige l'effet [Tueuse de chevaliers] tous les 5 coup(s).`, [
        { title: `[Tueuse de chevaliers]`, content: `Augmente la Pénétration de défense de l'utilisateur de 2.4% (cumulable jusqu'à 10 fois).
Durée: 20 seconde(s)` }
    ], "Feu"),
        1: fmtPassif(`1 étoile :`, `Lors de l'utilisation de la compétence **Télékinésie**, l'utilisateur inflige l'effet [Décomposition] tous les 5 coup(s).`, [
        { title: `[Décomposition]`, content: `Lorsque la dernière attaque de **Télékinésie** touche sa cible, elle crée une explosion après 1 seconde.
Inflige des dégâts équivalents à 40% de l'Attaque par cumul (cumulable jusqu'à 10 fois).
Durée: 2 seconde(s)` }
    ], "Feu"),
        2: fmtPassif(`2 étoiles :`, `Vos dégâts de feu augmentent de 8%.`, [], "Feu"),
        3: fmtPassif(`3 étoiles :`, `Lors de l'utilisation de la compétence **Télékinésie**, l'effet [Voile de flammes] est appliqué.`, [
        { title: `[Voile de flammes]`, content: `Applique un [Bouclier] équivalent à 15% des PV max de l'utilisateur.
Durée: 5 seconde(s)` }
    ], "Feu"),
        4: fmtPassif(`4 étoiles :`, `Le temps de rechargement de **Télékinésie** diminue de 15%.`, [], "Feu"),
        5: fmtPassif(`5 étoiles :`, `Lorsque [Décomposition] explose avec le maximum de cumuls, l'effet [Destruction amorcée] s'applique sur la cible.`, [
        { title: `[Destruction amorcée]`, content: `Les dégâts qu'elle subit augmentent de 2% (cumulable jusqu'à 5 fois).
Durée: infinie` }
    ], "Feu")
    },
    summaryData: {
        0: `<h3>Passif :</h3><p>Télékinésie (5 coups) = <span class="buff">[Tueuse de chevaliers]</span>.<br>[Tueuse] : Pénétration Défense <span class="stat-boost">+2.4%</span>/cumul (max 10).</p>`,
        1: `<h3>1 étoile</h3><p>Télékinésie (5 coups) = <span class="buff">[Décomposition]</span>.<br>[Décomposition] : Explosion finale (Dégâts <span class="stat-boost">40%</span> Atk/cumul, max 10).</p>`,
        2: `<h3>2 étoiles</h3><p>Dégâts Feu <span class="stat-boost">+8%</span>.</p>`,
        3: `<h3>3 étoiles</h3><p>Télékinésie = <span class="buff">[Voile de flammes]</span> (Bouclier <span class="stat-boost">15%</span> PV).</p>`,
        4: `<h3>4 étoiles</h3><p>CD Télékinésie <span class="stat-boost">-15%</span>.</p>`,
        5: `<h3>5 étoiles</h3><p>Explosion max [Décomposition] = <span class="buff">[Destruction amorcée]</span>.<br>[Destruction] : Dégâts subis <span class="stat-boost">+2%</span>/cumul (max 5, infini).</p>`
    }
};

// --- ÂME DE PHÉNIX ---
weaponsData["ame-de-phenix"] = {
    name: "Âme de Phénix",
    rarity: "SSR",
    element: "Feu",
    gradient: "linear-gradient(90deg, #e64b4b, #000)", // Couleur Feu
    image: "Armes_Joueur_SSR/feu/ame_de_phenix/GSWeapon_PhoenixSoul_PortraitBig.png",
    fullData: {
        0: fmtPassif(`Passif :`, `Lors de l'utilisation de **Tir rapide de phénix**, l'effet [Âme de l'oiseau de feu] s'applique aux 3e, 6e et 9e flèches.
Lorsque l'Attaque de base de l'arme touche 3 fois sa cible, elle applique l'effet [Âme de l'oiseau de feu].`, [
        { title: `[Âme de l'oiseau de feu]`, content: `L'Attaque de noyau de l'utilisateur devient **Tir de flamme**.
Augmente les dégâts de **Tir de flamme** de 80% par cumul d'âme de l'oiseau de feu (cumulable jusqu'à 3 fois).
Lors de l'utilisation de **Tir de flamme**, tous les cumuls d'âme de l'oiseau de feu sont consumés.
Durée: infinie` }
    ], "Feu"),
        1: fmtPassif(`1 étoile :`, `Remplit 34 % de la jauge de noyau de l'utilisateur aux 3e, 6e et 9e flèches de **Tir rapide de phénix**.
Lorsque **Tir de flamme** touche sa cible, la jauge de noyau de l'utilisateur se remplit de 50%.`, [], "Feu"),
        2: fmtPassif(`2 étoiles :`, `Augmente les dégâts de feu de l'utilisateur de 10%.`, [], "Feu"),
        3: fmtPassif(`3 étoiles :`, `La dernière flèche de **Tir rapide de phénix** octroie 2 cumuls de l'effet [Âme de l'oiseau de feu].
Fait passer le maximum de cumuls de **Tir de flamme** à 4.`, [], "Feu"),
        4: fmtPassif(`4 étoiles :`, `Réduit le temps de rechargement de **Tir rapide de phénix** de 20%.`, [], "Feu"),
        5: fmtPassif(`5 étoiles :`, `Après l'obtention de l'effet [Ame de l'oiseau de feu] suite à l'utilisation de **Tir rapide de phénix** ou de l'Attaque de base, l'utilisateur récupère les cumuls consommés de l'effet [Âme de l'oiseau de feu] et 100% de sa jauge de noyau dès qu'il utilise **Tir de flamme**.`, [], "Feu")
    },
    summaryData: {
        0: `<h3>Passif :</h3><p>Tir rapide / 3x Attaque base = <span class="buff">[Âme de l'oiseau de feu]</span>.<br>[Âme] : Attaque noyau -> <strong>Tir de flamme</strong>.<br>Dégâts Tir de flamme <span class="stat-boost">+80%</span>/cumul (max 3).</p>`,
        1: `<h3>1 étoile</h3><p>Tir rapide = Regen Jauge (34% x3).<br>Tir de flamme = Regen Jauge <span class="stat-boost">50%</span>.</p>`,
        2: `<h3>2 étoiles</h3><p>Dégâts Feu <span class="stat-boost">+10%</span>.</p>`,
        3: `<h3>3 étoiles</h3><p>Dernière flèche Tir rapide = +2 cumuls Âme.<br>Max cumuls Tir de flamme passe à 4.</p>`,
        4: `<h3>4 étoiles</h3><p>CD Tir rapide de phénix <span class="stat-boost">-20%</span>.</p>`,
        5: `<h3>5 étoiles</h3><p>Après obtention Âme : Utiliser Tir de flamme rend les cumuls + Jauge 100% (Boucle infinie potentielle).</p>`
    }
};

// --- BROCHETTE GRILLÉE JUTEUSE ---
weaponsData["brochette-grillee-juteuse"] = {
    name: "Brochette grillée juteuse",
    rarity: "SSR",
    element: "Feu",
    gradient: "linear-gradient(90deg, #e64b4b, #000)",
    image: "Armes_Joueur_SSR/feu/brochette_grillee_juteuse/GSWeapon_JuicyGrilledSkewers_PortraitBig.png",
    fullData: {
        0: fmtPassif(`Passif :`, `Lorsque la compétence **Fumant et juteux** est utilisée, l'effet [Grill bien saisi] est appliqué.
Lorsque la compétence **Fumant et juteux** est utilisée, elle crée 3 cumuls de [Viande juteuse et Oignon vert fumant XL].
Accorde des effets supplémentaires pour chaque cumul de [Viande juteuse ou Oignon vert fumant XL].`, [
        { title: `[Grill saisi]`, content: `Les dégâts élémentaires de feu des membres de l'équipe augmentent de 5% lorsqu'ils se trouvent dans la zone.
Les dégâts infligés par les membres de l'équipe augmentent de 5% lorsqu'ils se trouvent dans la zone.
Durée: 7 secondes` },
        { title: `[Viande juteuse]`, content: `L'utilisateur récupère 3% de PV en mangeant ça.
Augmente l'Attaque de l'utilisateur de 1%.
Durée: 10 seconde(s)` },
        { title: `[Oignon vert fumant XL]`, content: `L'utilisateur récupère 3% de PM en mangeant ça.
Augmente la Défense de l'utilisateur de 1%.
Durée: 10 seconde(s)` }
    ], "Feu"),
        1: fmtPassif(`1 étoile :`, `Le nombre de cumuls de [Viande juteuse et Oignon vert fumant XL] créés augmente de 4 à chaque fois.
Lorsque les cumuls de [Viande juteuse et Oignon vert fumant XL] sont épuisés, la flamme du grill se ravive pour infliger des dégâts équivalents à 50% des dégâts d'origine infligés lors de la première flambée.`, [], "Feu"),
        2: fmtPassif(`2 étoiles :`, `Augmente les dégâts de feu de l'utilisateur de 10%.`, [], "Feu"),
        3: fmtPassif(`3 étoiles :`, `Augmente les effets de [Viande juteuse et Oignon vert fumant XL].`, [
        { title: `[Viande juteuse]`, content: `L'utilisateur récupère 5% de PV.
Augmente l'Attaque de l'utilisateur de 3%.
Durée: 10 seconde(s)` },
        { title: `[Oignon vert fumant XL]`, content: `L'utilisateur récupère 5% de PV.
Augmente la Défense de l'utilisateur de 3%.
Durée: 10 seconde(s)` }
    ], "Feu"),
        4: fmtPassif(`4 étoiles :`, `Le temps de rechargement de **Fumant et juteux** diminue de 20%.`, [], "Feu"),
        5: fmtPassif(`5 étoiles :`, `Augmente les effets de [Grill bien saisi].`, [
        { title: `[Grill saisi]`, content: `Augmente les dégâts de feu de 10% dans la zone.
Augmente les dégâts infligés de 10% dans la zone.
Durée: 7 secondes` }
    ], "Feu")
    },
    summaryData: {
        0: `<h3>Passif :</h3><p>Fumant et juteux = <span class="buff">[Grill bien saisi]</span> + Consommables.<br>[Grill] : Zone buff Feu/Dégâts <span class="stat-boost">+5%</span>.<br>[Viande] : Soin PV <span class="stat-boost">3%</span>, Atk <span class="stat-boost">+1%</span>.<br>[Oignon] : Soin PM <span class="stat-boost">3%</span>, Def <span class="stat-boost">+1%</span>.</p>`,
        1: `<h3>1 étoile</h3><p>+4 cumuls Viande/Oignon.<br>Explosion finale du grill (50% dégâts initiaux).</p>`,
        2: `<h3>2 étoiles</h3><p>Dégâts Feu <span class="stat-boost">+10%</span>.</p>`,
        3: `<h3>3 étoiles</h3><p>Consommables améliorés : Soin <span class="stat-boost">5%</span>, Atk/Def <span class="stat-boost">+3%</span>.</p>`,
        4: `<h3>4 étoiles</h3><p>CD Fumant et juteux <span class="stat-boost">-20%</span>.</p>`,
        5: `<h3>5 étoiles</h3><p>[Grill bien saisi] amélioré : Dégâts Feu/Dégâts <span class="stat-boost">+10%</span> dans la zone.</p>`
    }
};

// --- ÉVENTAIL DU DÉMON DE FEU ---
weaponsData["eventail-du-demon-de-feu"] = {
    name: "Éventail du démon de feu",
    rarity: "SSR",
    element: "Feu",
    gradient: "linear-gradient(90deg, #e64b4b, #000)",
    image: "Armes_Joueur_SSR/feu/eventail_du_demon_de_feu/GSWeapon_FlamesFan_PortraitBig.png",
    fullData: {
        0: fmtPassif(`Passif :`, `Lorsque la jauge de noyau de l'utilisateur est à 100%, la compétence **Fleur de feu** devient **Jouvence fugace**.
Lorsque les compétences **Fleur de feu** ou **Jouvence fugace** sont utilisées, l'utilisateur et les membres de son équipe reçoivent 1 cumul de l'effet [Papillons].`, [
        { title: `[Jouvence fugace]`, content: `Dégâts et consommation de PM: identiques à ceux de **Fleur de feu**.
Consommation de la jauge de noyau: 100%.
Lorsque cette compétence touche sa cible, le temps ralentit.
Inflige des dégâts de Bris lourds.
Lorsqu'une attaque de l'utilisateur transperce une cible, une explosion florale de flammes ardentes survient et inflige des dégâts à la cible.` },
        { title: `[Papillons]`, content: `Augmente les dégâts de feu de 3%.
Augmente le Taux de récupération de PM de 5%.
Durée: 60 seconde(s) (cumulable jusqu'à 6 fois)` }
    ], "Feu"),
        1: fmtPassif(`1 étoile :`, `Lorsqu'il utilise sa compétence de Bris de feu, l'utilisateur et les membres de son équipe reçoivent 1 cumul supplémentaire de l'effet [Papillons].
Lorsque les compétences **Fleur de feu** ou **Jouvence fugace** touchent leur cible, elles lui appliquent l'effet [Forte fièvre].`, [
        { title: `[Forte fièvre]`, content: `Les dégâts de feu de Jinwoo augmentent de 50% lorsqu'il touche des cibles affectées par l'effet [Forte fièvre].
L'utilisateur récupère 10% de ses PM 1 fois lorsqu'il touche une cible affectée par l'effet [Forte fièvre].
Durée: 8 seconde(s) (cumulable jusqu'à 1 fois)` }
    ], "Feu"),
        2: fmtPassif(`2 étoiles :`, `Augmente les dégâts de feu de 10%.`, [], "Feu"),
        3: fmtPassif(`3 étoiles :`, `Lorsque l'effet [Papillons] atteint 6 cumuls, il active l'effet [Démon de feu].
([Démon de feu] ne s'active que pour Sung Jinwoo.)`, [
        { title: `[Démon de feu]`, content: `Les cumuls de l'effet [Papillons] sont supprimés et l'utilisateur ne peut plus en recevoir.
Augmente les dégâts de feu de l'utilisateur et le Taux de récupération de PM de 50%.
Augmente le Taux de coup critique de la compétence de noyau de feu de l'utilisateur de 30%.
Augmente les Dégâts de coup critique de la compétence de noyau de feu de l'utilisateur de 120%.
Lors de l'utilisation de sa compétence de base de feu, l'utilisateur reçoit l'effet [Super armure] pendant 4 seconde(s).
Consomme 5% des PM de l'utilisateur toutes les 3 seconde(s).
Si l'utilisateur a 20% de ses PM max ou moins sur le moment, l'effet est supprimé.
Durée: illimitée (cumulable jusqu'à 1 fois)` }
    ], "Feu"),
        4: fmtPassif(`4 étoiles :`, `Réduit le temps de rechargement des compétences **Fleur de feu** et **Jouvence fugace** de 20%.`, [], "Feu"),
        5: fmtPassif(`5 étoiles :`, `Au début du niveau, la jauge de noyau de l'utilisateur est remplie à 100%.
Lorsque toutes les armes équipées sur le chasseur sont des armes de feu, les dégâts de feu augmentent de 50%.
Lorsque l'utilisateur recourt à une attaque de feu pendant que l'effet [Démon de feu] est actif, il récupère 10% de ses PM (temps de rechargement: 3 seconde(s)).`, [], "Feu")
    },
    summaryData: {
        0: `<h3>Passif :</h3><p>Jauge 100% = <strong>Jouvence fugace</strong> (Ralenti, Bris lourd).<br>Compétences feu = <span class="buff">[Papillons]</span> (Équipe, Dégâts Feu <span class="stat-boost">+3%</span>, Regen PM <span class="stat-boost">+5%</span>, max 6).</p>`,
        1: `<h3>1 étoile</h3><p>Bris de feu = +1 cumul [Papillons].<br>Touche = <span class="buff">[Forte fièvre]</span> (Dégâts Feu <span class="stat-boost">+50%</span>, Regen 10% PM).</p>`,
        2: `<h3>2 étoiles</h3><p>Dégâts Feu <span class="stat-boost">+10%</span>.</p>`,
        3: `<h3>3 étoiles</h3><p>6 Papillons = <span class="buff">[Démon de feu]</span>.<br>Dégâts Feu/Regen PM <span class="stat-boost">+50%</span>.<br>Crit/Dégâts Crit noyau feu <span class="stat-boost">+30%/+120%</span>.<br>Super armure sur skill base.<br>Conso PM 5%/3s.</p>`,
        4: `<h3>4 étoiles</h3><p>CD Fleur de feu/Jouvence <span class="stat-boost">-20%</span>.</p>`,
        5: `<h3>5 étoiles</h3><p>Début niveau : Jauge Noyau <span class="stat-boost">100%</span>.<br>Full armes Feu : Dégâts Feu <span class="stat-boost">+50%</span>.<br>Attaque feu sous Démon : Regen 10% PM (CD 3s).</p>`
    }
};

// --- LANCE À DOUBLE LAME DU CLAN RADIR ---
weaponsData["lance_a_double_lame_du_clan_radir"] = {
    name: "Lance à double lame du clan Radir",
    rarity: "SSR",
    element: "Feu",
    gradient: "linear-gradient(90deg, #e64b4b, #000)",
    image: "Armes_Joueur_SSR/feu/lance_a_double_lame_du_clan_radir/GSWeapon_EsilsDoubleEdge_PortraitBig.png",
    fullData: {
        0: fmtPassif(`Passif :`, `L'utilisation de la compétence **Soutien du clan Radish** applique 10 fois l'effet [Moral] sur l'utilisateur.`, [
        { title: `[Moral]`, content: `Augmente les dégâts infligés de 0.5 %.
Durée : illimitée (cumulable jusqu'à 30 fois).` }
    ], "Feu"),
        1: fmtPassif(`1 étoile :`, `Lorsque l'utilisateur touche une cible avec une attaque de feu, il applique 1 effet [Moral] (ne s'active qu'une fois lorsque l'attaque touche sa cible).
Lorsque l'utilisateur touche une cible avec une attaque de feu tout en ayant 30 cumuls de l'effet [Moral] appliqués, une petite zone [Feu de soutien] est créée autour de la cible (temps de rechargement : 10 seconde(s)).`, [
        { title: `[Feu de soutien]`, content: `Inflige des dégâts élémentaires de feu équivalents à 600 % de l'Attaque de Sung Jinwoo.
Compte comme une compétence de base. Inflige des dégâts de Bris légers.` }
    ], "Feu"),
        2: fmtPassif(`2 étoiles :`, `Augmente les dégâts de feu de l'utilisateur de 10 %.`, [], "Feu"),
        3: fmtPassif(`3 étoiles :`, `Lorsque l'attaque de l'utilisateur touche une cible avec un effet Brûlure, l'effet [Volonté brûlante] est activé sur l'utilisateur (temps de rechargement : 2 seconde(s)).`, [
        { title: `[Volonté brûlante]`, content: `Augmente les dégâts de feu de 6 %.
Augmente les Dégâts de coup critique de 12 %.
Durée : 15 seconde(s) (cumulable jusqu'à 5 fois).` }
    ], "Feu"),
        4: fmtPassif(`4 étoiles :`, `Diminue le temps de rechargement de **Soutien du clan Radish** de 20 %.`, [], "Feu"),
        5: fmtPassif(`5 étoiles :`, `La portée d'attaque de [Feu de soutien] augmente de 50 %, et son temps de rechargement passe à 5 seconde(s).
Lorsqu'une attaque de feu de l'utilisateur touche une cible et si toutes les armes équipées sont de l'élément Feu, un cumul supplémentaire de l'effet [Moral] est activé (lorsque cette compétence touche sa cible, il ne s'active qu'une fois).
Améliore l'effet [Moral].`, [
        { title: `[Moral] (Amélioré)`, content: `Augmente les dégâts infligés de 1.2 %.
Augmente les dégâts de feu de la compétence de base de 0.5 % et les dégâts de la Compétences d'arme de 1 % lorsque toutes les armes équipées sont de l'élément Feu.
Durée : illimitée (cumulable jusqu'à 30 fois).` }
    ], "Feu")
    },
    summaryData: {
        0: `<h3>Passif :</h3><p>Soutien du clan Radish = 10x <span class="buff">[Moral]</span>.<br>[Moral] : Dégâts infligés <span class="stat-boost">+0.5%</span> (max 30).</p>`,
        1: `<h3>1 étoile</h3><p>Attaque feu = +1 Moral.<br>30 Moral + Attaque feu = <span class="buff">[Feu de soutien]</span> (600% Atk, Bris léger, CD 10s).</p>`,
        2: `<h3>2 étoiles</h3><p>Dégâts Feu <span class="stat-boost">+10%</span>.</p>`,
        3: `<h3>3 étoiles</h3><p>Touche cible brûlée = <span class="buff">[Volonté brûlante]</span> (Dégâts Feu +6%, Dégâts Crit +12%, max 5).</p>`,
        4: `<h3>4 étoiles</h3><p>CD Soutien du clan Radish <span class="stat-boost">-20%</span>.</p>`,
        5: `<h3>5 étoiles</h3><p>[Feu de soutien] CD 5s + Portée <span class="stat-boost">+50%</span>.<br>Full Feu : +1 cumul Moral supplémentaire.<br>[Moral] UP : Dégâts infligés <span class="stat-boost">+1.2%</span>/cumul.</p>`
    }
};

// --- RAGE DE VULCAN ---
weaponsData["rage-de-vulcan"] = {
    name: "Rage de Vulcan",
    rarity: "SSR",
    element: "Feu",
    gradient: "linear-gradient(90deg, #e64b4b, #000)",
    image: "Armes_Joueur_SSR/feu/rage_de_vulcan/GSWeapon_Vulcan_PortraitBig.png",
    fullData: {
        0: fmtPassif(`Passif :`, `Lors de l'utilisation de **Feu destructeur**, l'effet [Bénédiction de Vulcan] s'applique.`, [
        { title: `[Bénédiction de Vulcan]`, content: `Cet effet crée un [Bouclier] équivalent à 10% de l'Attaque de l'utilisateur et applique l'effet [Concentration] à chaque Attaque de base et de noyau que subit l'ennemi.
Durée: 10 seconde(s)` },
        { title: `[Concentration]`, content: `Si l'effet expire ou est dissipé, [Bénédiction de Vulcan] explose et inflige des dégâts équivalents à 400% de l'Attaque de l'utilisateur (cumulable jusqu'à 20 fois).
L'explosion inflige 20% de dégâts supplémentaires par cumul de [Concentration].
En explosant, [Bénédiction de Vulcan] supprime toutes les instances de l'effet [Concentration].
À 20 cumuls de l'effet [Concentration], [Bénédiction de Vulcan] explose instantanément et recrée un [Bouclier] équivalent à 10% de l'Attaque de l'utilisateur.
Durée: illimitée` }
    ], "Feu"),
        1: fmtPassif(`1 étoile :`, `Lorsque l'effet [Bénédiction de Vulcan] provoque l'explosion, il applique l'effet [Rage].`, [
        { title: `[Rage]`, content: `Augmente l'Attaque de l'utilisateur de 12%.
Augmente la Vitesse d'attaque de 6%.
Durée: 15 seconde(s)` }
    ], "Feu"),
        2: fmtPassif(`2 étoiles :`, `Vos dégâts de feu augmentent de 10%.`, [], "Feu"),
        3: fmtPassif(`3 étoiles :`, `Améliore l'effet [Rage].`, [
        { title: `[Rage]`, content: `S'applique même lors de l'utilisation de **Feu destructeur**.
Augmente l'Attaque de l'utilisateur de 20%.
Augmente la Vitesse d'attaque de 10%.
Durée: 15 seconde(s)` }
    ], "Feu"),
        4: fmtPassif(`4 étoiles :`, `Le temps de rechargement de **Feu destructeur** diminue de 20%.`, [], "Feu"),
        5: fmtPassif(`5 étoiles :`, `Pendant que l'effet [Bouclier] est actif, les dégâts de la compétence **Feu destructeur** augmentent de 50%.`, [], "Feu")
    },
    summaryData: {
        0: `<h3>Passif :</h3><p>Feu destructeur = <span class="buff">[Bénédiction]</span> + <span class="buff">[Concentration]</span>.<br>[Bénédiction] : Bouclier (<span class="stat-boost">10%</span> Atk).<br>[Concentration] : Explosion cumulable à la fin (max 20 stacks, dégâts massifs).</p>`,
        1: `<h3>1 étoile</h3><p>Explosion = <span class="buff">[Rage]</span> (Atk <span class="stat-boost">+12%</span>, Vitesse <span class="stat-boost">+6%</span>, 15s).</p>`,
        2: `<h3>2 étoiles</h3><p>Dégâts Feu <span class="stat-boost">+10%</span>.</p>`,
        3: `<h3>3 étoiles</h3><p>[Rage] améliorée : Atk <span class="stat-boost">+20%</span>, Vitesse <span class="stat-boost">+10%</span>.<br>S'active aussi sur Feu destructeur.</p>`,
        4: `<h3>4 étoiles</h3><p>CD Feu destructeur <span class="stat-boost">-20%</span>.</p>`,
        5: `<h3>5 étoiles</h3><p>Sous Bouclier : Dégâts Feu destructeur <span class="stat-boost">+50%</span>.</p>`
    }
};

// --- RUGISSEMENT D'ENNIO ---
weaponsData["rugissement-d-ennio"] = {
    name: "Rugissement d'Ennio",
    rarity: "SSR",
    element: "Feu",
    gradient: "linear-gradient(90deg, #e64b4b, #000)",
    image: "Armes_Joueur_SSR/feu/rugissement_d_ennio/GSWeapon_RoarOfEnnio_PortraitBig.png",
    fullData: {
        0: fmtPassif(`Passif :`, `Lorsque la compétence **Rage noir d'encre** touche sa cible et que cette dernière présente l'effet [Brûlure], l'effet augmente les dégâts de 10 %.
Lors de l'utilisation de la compétence **Rage noir d'encre**, l'effet [Rancœur incandescente] s'active.`, [
        { title: `[Rancœur incandescente]`, content: `Augmente les dégâts subis de 10 %. Augmente les dégâts de feu de 5 %.
Augmente les dégâts infligés aux boss de 5 %. Augmente les dégâts de la compétence **Rage noir d'encre** de 50 %.` }
    ], "Feu"),
        1: fmtPassif(`1 étoile :`, `Augmente la Pénétration de défense de 16 % lorsque toutes les armes équipées sont de l'élément Feu.
L'utilisation de la compétence **Rage noir d'encre** active l'effet [Marque de l'Adversaire] sur les boss et monstres Élite se trouvant dans un rayon de 20 m.
Lorsque la compétence **Rage noir d'encre** touche sa cible et que cette dernière présente l'effet [Marque de l'Adversaire], l'effet [Rage d'Ennio] s'active.`, [
        { title: `[Rage d'Ennio]`, content: `Invoque un météore dans le ciel pour attaquer la cible.
Dégâts : 1000 % de l'Attaque.` },
        { title: `[Marque de l'Adversaire]`, content: `Augmente les dégâts de la compétence **Rage noir d'encre** de 50 %.
Supprime l'effet lorsque la compétence **Rage noir d'encre** touche sa cible.
Durée : 3 secondes.` }
    ], "Feu"),
        2: fmtPassif(`2 étoiles :`, `Augmente les dégâts de feu de l'utilisateur de 10 %.`, [], "Feu"),
        3: fmtPassif(`3 étoiles :`, `Lorsque la compétence **Rage noir d'encre** touche sa cible et que cette dernière présente l'effet [Brûlure], les dégâts augmentent de 25 %.
Améliore l'effet [Rancœur incandescente].`, [
        { title: `[Rancœur incandescente] (Amélioré)`, content: `Augmente les dégâts subis de 5 %.
Augmente les dégâts de feu de 15 %. Augmente les dégâts infligés aux boss de 10 %.
Augmente les dégâts de la compétence **Rage noir d'encre** de 100 %.
Durée : illimitée.` }
    ], "Feu"),
        4: fmtPassif(`4 étoiles :`, `Réduit le temps de rechargement de **Rage noir d'encre** de 20 %.`, [], "Feu"),
        5: fmtPassif(`5 étoiles :`, `L'utilisation d'une arme de l'élément Feu augmente les dégâts de compétence d'arme de feu de l'utilisateur de 50 % pendant 2.5 seconde(s) face aux cibles affectées par l'effet [Brûlure].
Augmente les dégâts de [Rage d'Ennio]. Améliore l'effet [Marque de l'Adversaire].`, [
        { title: `[Rage d'Ennio] (Amélioré)`, content: `Invoque un météore dans le ciel pour attaquer la cible.
Dégâts : 2000 % de l'Attaque.` },
        { title: `[Marque de l'Adversaire] (Amélioré)`, content: `Augmente les dégâts de **Rage noir d'encre** de 100 %.
Supprime l'effet lorsque **Rage noir d'encre** touche sa cible.
Durée : 3 seconde(s).` }
    ], "Feu")
    },
    summaryData: {
        0: `<h3>Passif :</h3><p>Touche brûlure = Dégâts <span class="stat-boost">+10%</span>.<br>Rage noir active <span class="buff">[Rancœur incandescente]</span> (Dégâts subis +10%, Feu +5%, Boss +5%, Rage noir +50%).</p>`,
        1: `<h3>1 étoile</h3><p>Full Feu : Pén. Def <span class="stat-boost">+16%</span>.<br>Rage noir marque les Boss = <span class="buff">[Rage d'Ennio]</span> (Météore 1000% Atk).</p>`,
        2: `<h3>2 étoiles</h3><p>Dégâts Feu <span class="stat-boost">+10%</span>.</p>`,
        3: `<h3>3 étoiles</h3><p>Touche brûlure = Dégâts <span class="stat-boost">+25%</span>.<br>[Rancœur] UP : Subis +5%, Feu +15%, Boss +10%, Rage noir +100%.</p>`,
        4: `<h3>4 étoiles</h3><p>CD Rage noir d'encre <span class="stat-boost">-20%</span>.</p>`,
        5: `<h3>5 étoiles</h3><p>Weapon Skill Feu = Dégâts <span class="stat-boost">+50%</span> sur brûlure.<br>Météore [Rage d'Ennio] passe à <span class="stat-boost">2000%</span> Atk.</p>`
    }
};