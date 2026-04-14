// Initialise l'objet global s'il n'existe pas encore
if (typeof weaponsData === 'undefined') { 
    var weaponsData = {}; 
}

// --- ARBALÈTE D'ARACHNIDE (R) ---
weaponsData["arbalete-d-arachnide"] = {
    name: "Arbalète d'Arachnide",
    rarity: "R",
    element: "Ténèbre",
    gradient: "linear-gradient(90deg, #af63af, #000)",
    image: "Armes_Joueur_R/tenebre/arbalete_d_arachnide/GSWeapon_GiantArachne_01_PortraitBig.png",
    fullData: {
        0: fmtPassif(`Passif :`, `Lorsque **Barrage d'aiguilles empoisonnées** touche sa cible, l'utilisateur lui inflige l'effet [Empoisonnement].`, [
        { title: `[Empoisonnement]`, content: `L'utilisateur inflige des dégâts équivalents à 50% de son Attaque toutes les 3 seconde(s).\nRéduit le Taux de récupération des PV de 70%.\nDurée: 30 seconde(s)` }
    ], "Ténèbre"),
        1: fmtPassif(`1 étoile :`, `Lorsque la compétence **Barrage d'aiguilles empoisonnées** est utilisée, **Ruée** gagne 1 charge.`, [], "Ténèbre"),
        2: fmtPassif(`2 étoiles :`, `Vos dégâts de ténèbres augmentent de 6%.`, [], "Ténèbre"),
        3: fmtPassif(`3 étoiles :`, `Les dégâts de [Poison] de la compétence **Barrage d'aiguilles empoisonnées** augmentent de 50%.`, [], "Ténèbre"),
        4: fmtPassif(`4 étoiles :`, `Le temps de rechargement de **Barrage d'aiguilles empoisonnées** diminue de 10%.`, [], "Ténèbre"),
        5: fmtPassif(`5 étoiles :`, `Si Jinwoo est touché dans les airs pendant qu'il utilise **Barrage d'aiguilles empoisonnées**, **Évasion extrême** s'active.`, [], "Ténèbre")
    },
    summaryData: {
        0: `<h3>Passif :</h3><p><strong>Barrage d'aiguilles</strong> → <span class="buff">[Empoisonnement]</span> sur la cible.<br><span class="stat-boost">50% Atk</span>/3s + Récup. PV <span class="stat-boost">-70%</span> (30s).</p>`,
        1: `<h3>1 étoile</h3><p><strong>Barrage d'aiguilles</strong> utilisé → <strong>Ruée</strong> gagne <span class="stat-boost">+1 charge</span>.</p>`,
        2: `<h3>2 étoiles</h3><p>Dégâts Ténèbres <span class="stat-boost">+6%</span>.</p>`,
        3: `<h3>3 étoiles</h3><p>Dégâts <span class="buff">[Poison]</span> de la compétence <span class="stat-boost">+50%</span>.</p>`,
        4: `<h3>4 étoiles</h3><p>CD <strong>Barrage d'aiguilles</strong> <span class="stat-boost">-10%</span>.</p>`,
        5: `<h3>5 étoiles</h3><p>Touché en l'air pendant la compétence → <strong>Évasion extrême</strong> s'active automatiquement.</p>`
    }
};

// --- FAUX DU GARDIEN DU TOMBEAU (R) ---
weaponsData["faux-du-gardien-du-tombeau"] = {
    name: "Faux du gardien du tombeau",
    rarity: "R",
    element: "Ténèbre",
    gradient: "linear-gradient(90deg, #af63af, #000)",
    image: "Armes_Joueur_R/tenebre/faux_du_gardien_du_tombeau/GSWeapon_GravekeeperScythe_PortraitBig.png",
    fullData: {
        0: fmtPassif(`Passif :`, `Lorsque l'utilisateur terrasse un ennemi, applique l'effet [Sanctuaire].`, [
        { title: `[Sanctuaire]`, content: `Augmente l'Attaque de l'utilisateur de 2 % (cumulable jusqu'à 10 fois).\nDurée : 20 seconde(s)` }
    ], "Ténèbre"),
        1: fmtPassif(`1 étoile :`, `Les dégâts infligés aux monstres non-boss avec **Lame de retour** augmentent de 30 %.`, [], "Ténèbre"),
        2: fmtPassif(`2 étoiles :`, `Augmente les dégâts de ténèbres de l'utilisateur de 6 %.`, [], "Ténèbre"),
        3: fmtPassif(`3 étoiles :`, `Les dégâts de la lame qui revient pendant **Lame de retour** augmentent de 100 %.`, [], "Ténèbre"),
        4: fmtPassif(`4 étoiles :`, `Réduit le temps de rechargement de **Lame de retour** de 10 %.`, [], "Ténèbre"),
        5: fmtPassif(`5 étoiles :`, `Lorsque l'utilisateur terrasse un ennemi, réduit le temps de rechargement de **Lame de retour** de 3 seconde(s).`, [], "Ténèbre")
    },
    summaryData: {
        0: `<h3>Passif :</h3><p>Ennemi terrassé → <span class="buff">[Sanctuaire]</span>.<br>Attaque <span class="stat-boost">+2%</span>/pile (max 10, 20s).</p>`,
        1: `<h3>1 étoile</h3><p>Dégâts <strong>Lame de retour</strong> sur non-boss <span class="stat-boost">+30%</span>.</p>`,
        2: `<h3>2 étoiles</h3><p>Dégâts Ténèbres <span class="stat-boost">+6%</span>.</p>`,
        3: `<h3>3 étoiles</h3><p>Dégâts phase retour de <strong>Lame de retour</strong> <span class="stat-boost">+100%</span>.</p>`,
        4: `<h3>4 étoiles</h3><p>CD <strong>Lame de retour</strong> <span class="stat-boost">-10%</span>.</p>`,
        5: `<h3>5 étoiles</h3><p>Ennemi terrassé → CD <strong>Lame de retour</strong> <span class="stat-boost">-3s</span>.</p>`
    }
};

// --- ÉPÉE LONGUE D'ORC (SR) ---
weaponsData["epee-longue-d-orc"] = {
    name: "Épée longue d'orc",
    rarity: "SR",
    element: "Ténèbre",
    gradient: "linear-gradient(90deg, #af63af, #000)",
    image: "Armes_Joueur_SR/tenebre/epee_longue_d_orc/GSWeapon_OrcGreatSword_PortraitBig.png",
    fullData: {
        0: fmtPassif(`Passif :`, `Lorsque l'utilisateur tue un ennemi avec **Épée longue d'orc**, l'effet [Force d'orc] s'applique.`, [
        { title: `[Force d'orc]`, content: `Augmente les dégâts d'**Épée longue d'orc** de 40%.\nRéduit le temps de rechargement de 8 seconde(s).\nDurée: 20 seconde(s)` }
    ], "Ténèbre"),
        1: fmtPassif(`1 étoile :`, `Lors de l'utilisation de la compétence **Épée longue d'orc**, l'effet [Armure d'orc] est appliqué.`, [
        { title: `[Armure d'orc]`, content: `Crée un [Bouclier] équivalent à 12% des PV max de l'utilisateur.\nDurée: 3 seconde(s)` }
    ], "Ténèbre"),
        2: fmtPassif(`2 étoiles :`, `Les dégâts élémentaires de ténèbres augmentent de 8%.`, [], "Ténèbre"),
        3: fmtPassif(`3 étoiles :`, `L'effet [Force d'orc] s'applique également en cas de Coup critique réussi.\nAugmente les chance qu'**Épée longue d'orc** inflige un Coup critique de 40 %.`, [], "Ténèbre"),
        4: fmtPassif(`4 étoiles :`, `Réduit le temps de rechargement de la compétence de l'**Épée longue d'orc** de 15%.`, [], "Ténèbre"),
        5: fmtPassif(`5 étoiles :`, `Lorsque l'effet [Armure d'orc] est appliqué pendant que l'effet [Force d'orc] est actif, les deux effets se combinent pour devenir [Prestige de haut orc].`, [
        { title: `[Prestige de haut orc]`, content: `L'utilisateur crée un [Bouclier] équivalent à 25% de ses PV max.\nLorsque l'effet est appliqué pour la première fois, le temps de rechargement d'**Épée longue d'orc** se réinitialise, puis il est réduit de 40%.\nAugmente les dégâts d'**Épée longue d'orc** de 75%.\nDurée: 15 seconde(s)` }
    ], "Ténèbre")
    },
    summaryData: {
        0: `<h3>Passif :</h3><p>Kill avec la compétence → <span class="buff">[Force d'orc]</span>.<br>Dégâts arme <span class="stat-boost">+40%</span>, CD <span class="stat-boost">-8s</span> (20s).</p>`,
        1: `<h3>1 étoile</h3><p>Compétence → <span class="buff">[Armure d'orc]</span> (Bouclier <span class="stat-boost">12% PV</span>, 3s).</p>`,
        2: `<h3>2 étoiles</h3><p>Dégâts Ténèbres <span class="stat-boost">+8%</span>.</p>`,
        3: `<h3>3 étoiles</h3><p>Coup critique active aussi <span class="buff">[Force d'orc]</span>.<br>Taux critique arme <span class="stat-boost">+40%</span>.</p>`,
        4: `<h3>4 étoiles</h3><p>CD compétence <span class="stat-boost">-15%</span>.</p>`,
        5: `<h3>5 étoiles</h3><p><span class="buff">[Force]</span> + <span class="buff">[Armure]</span> actifs → <span class="buff">[Prestige de haut orc]</span>.<br>Bouclier <span class="stat-boost">25% PV</span>, reset CD puis <span class="stat-boost">-40%</span>, dégâts arme <span class="stat-boost">+75%</span>.</p>`
    }
};

// --- FAUCON NOIR (SR) ---
weaponsData["faucon-noir"] = {
    name: "Faucon noir",
    rarity: "SR",
    element: "Ténèbre",
    gradient: "linear-gradient(90deg, #af63af, #000)",
    image: "Armes_Joueur_SR/tenebre/faucon_noir/GSWeapon_DarkHawk_PortraitBig.png",
    fullData: {
        0: fmtPassif(`Passif :`, `Si **Évasion** s'active pendant une glissade de l'utilisateur, l'effet [Évasion extrême] se déclenche.\nL'activation de l'effet [Évasion extrême] applique l'effet [Partie de chasse].`, [
        { title: `[Partie de chasse]`, content: `Augmente l'Attaque de l'utilisateur de 7% (cumulable jusqu'à 3 fois).\nDurée: 30 seconde(s)` }
    ], "Ténèbre"),
        1: fmtPassif(`1 étoile :`, `Lors de l'utilisation de la compétence **Faucon chasseur**, le temps de rechargement des compétences **Foulée de l'ombre**, **Mort** ou **Effondrement** est réinitialisé et activé.\nTaux de réinitialisation: 20% pour **Foulée de l'ombre**, 40% pour **Mort**, 40% pour **Effondrement**`, [], "Ténèbre"),
        2: fmtPassif(`2 étoiles :`, `Vos dégâts de ténèbres augmentent de 8 %.`, [], "Ténèbre"),
        3: fmtPassif(`3 étoiles :`, `Modification des effets de la compétence **Faucon chasseur**:\nLa compétence peut être utilisée jusqu'à 2 fois.`, [], "Ténèbre"),
        4: fmtPassif(`4 étoiles :`, `Le temps de rechargement de **Faucon chasseur** diminue de 15%.`, [], "Ténèbre"),
        5: fmtPassif(`5 étoiles :`, `Lorsque la compétence **Faucon chasseur** est utilisée, elle applique l'effet [Œil de faucon].`, [
        { title: `[Œil de faucon]`, content: `Augmente les dégâts des compétences **Effondrement**, **Mort** et **Foulée de l'ombre** de 30%.\nDurée: 3 seconde(s)` }
    ], "Ténèbre")
    },
    summaryData: {
        0: `<h3>Passif :</h3><p>Évasion pendant glissade → <span class="buff">[Évasion extrême]</span> → <span class="buff">[Partie de chasse]</span>.<br>Attaque <span class="stat-boost">+7%</span>/pile (max 3, 30s).</p>`,
        1: `<h3>1 étoile</h3><p><strong>Faucon chasseur</strong> → Reset CD : <strong>Foulée</strong> 20%, <strong>Mort</strong> 40%, <strong>Effondrement</strong> 40%.</p>`,
        2: `<h3>2 étoiles</h3><p>Dégâts Ténèbres <span class="stat-boost">+8%</span>.</p>`,
        3: `<h3>3 étoiles</h3><p><strong>Faucon chasseur</strong> → 2 charges max.</p>`,
        4: `<h3>4 étoiles</h3><p>CD <strong>Faucon chasseur</strong> <span class="stat-boost">-15%</span>.</p>`,
        5: `<h3>5 étoiles</h3><p><strong>Faucon chasseur</strong> → <span class="buff">[Œil de faucon]</span>.<br>Dégâts <strong>Effondrement</strong>/<strong>Mort</strong>/<strong>Foulée</strong> <span class="stat-boost">+30%</span> (3s).</p>`
    }
};

// --- WINCHESTER ROKE ---
weaponsData["winchester-roke"] = {
    name: "Winchester Roke",
    rarity: "SSR",
    element: "Ténèbre",
    gradient: "linear-gradient(90deg, #af63af, #000)",
    image: "Armes_Joueur_SSR/tenebre/winchester_roke/GSWeapon_WinchesterLock_PortraitBig.png",
    fullData: {
        0: fmtPassif(`Passif :`, `L'utilisation de la compétence **[Apocalypse]** active [Rechargement rotatif].`, [
        { title: `[Rechargement rotatif]`, content: `Active l'attaque de noyau de l'utilisateur.\nTransforme l'attaque de noyau de Winchester Roke en Condamnation et augmente ses dégâts de 20 %.\nL'effet **[Rechargement rotatif]** ne peut être appliqué qu' avec un maximum de 2 utilisations de Condamnation.\nDurée : 4 seconde(s)` }
    ], "Ténèbre"),
        1: fmtPassif(`1 étoile :`, `Augmente les dégâts de la compétence **[Apocalypse]** de l'utilisateur de 100 % face aux cibles se trouvant à une portée de 5 m.\nAméliore l'effet [Rechargement rotatif].`, [
        { title: `[Rechargement rotatif]`, content: `Active l'attaque de noyau de l'utilisateur.\nTransforme l'attaque de noyau de Winchester Roke en Condamnation et augmente ses dégâts de 40 %.\nL'effet **[Rechargement rotatif]** ne peut être appliqué qu' avec un maximum de 3 utilisations de Condamnation.\nDurée : 5 seconde(s)` }
    ], "Ténèbre"),
        2: fmtPassif(`2 étoiles :`, `Les dégâts de ténèbres infligés par l'utilisateur augmentent de 10 %.`, [], "Ténèbre"),
        3: fmtPassif(`3 étoiles :`, `L'utilisation de la compétence **[Apocalypse]** active [Prêt ou non].`, [
        { title: `[Prêt ou non]`, content: `Augmente les dégâts de ténèbres de la compétence Condamnation de 15 %.\nAugmente les Dégâts de coup critique de la compétence Condamnation de 30 %.\nConfère à l'utilisateur [Super armure].\nDurée : 6 seconde(s)` }
    ], "Ténèbre"),
        4: fmtPassif(`4 étoiles :`, `Le temps de rechargement de la compétence **[Apocalypse]** diminue de 20 %.`, [], "Ténèbre"),
        5: fmtPassif(`5 étoiles :`, `Les compétences [Rechargement rotatif et Prêt ou non] sont améliorées.`, [
        { title: `[Rechargement rotatif]`, content: `Active l'attaque de noyau de l'utilisateur.\nTransforme l'attaque de noyau de Winchester Roke en Condamnation, et ses dégâts augmentent de 80 %.\nAugmente les dégâts de Surcharge de Condamnation de 70 %.\nL'effet **[Rechargement rotatif]** ne peut être appliqué qu' avec un maximum de 4 utilisations de Condamnation.\nDurée : 6 seconde(s)</p><h4>[Prêt ou non]</h4><p>Augmente les dégâts de ténèbres de Condamnation de 30 %.\nAugmente les Dégâts de coup critique de la compétence Condamnation de 60 %.\nConfère à l'utilisateur [Super armure].\nDurée : 6 seconde(s)` }
    ], "Ténèbre")
    },
    summaryData: {
        0: `<h3>Passif :</h3><p><strong>[Apocalypse]</strong> → <span class="buff">[Rechargement rotatif]</span>.<br>Noyau → <strong>Condamnation</strong> : dégâts <span class="stat-boost">+20%</span>, max 2 tirs (4s).</p>`,
        1: `<h3>1 étoile</h3><p><strong>[Apocalypse]</strong> < 5m : dégâts <span class="stat-boost">+100%</span>.<br><span class="buff">[Rechargement]</span> amélioré : dégâts <span class="stat-boost">+40%</span>, max 3 tirs.</p>`,
        2: `<h3>2 étoiles</h3><p>Dégâts Ténèbres <span class="stat-boost">+10%</span>.</p>`,
        3: `<h3>3 étoiles</h3><p><strong>[Apocalypse]</strong> → <span class="buff">[Prêt ou non]</span>.<br><strong>Condamnation</strong> : Dégâts Ténèbres <span class="stat-boost">+15%</span>, Crit Dmg <span class="stat-boost">+30%</span> + Super Armure.</p>`,
        4: `<h3>4 étoiles</h3><p>CD <strong>[Apocalypse]</strong> <span class="stat-boost">-20%</span>.</p>`,
        5: `<h3>5 étoiles</h3><p><span class="buff">[Rechargement]</span> UP : dégâts <span class="stat-boost">+80%</span>, Surcharge <span class="stat-boost">+70%</span>, max 4 tirs.<br><span class="buff">[Prêt ou non]</span> UP : Dégâts Ténèbres <span class="stat-boost">+30%</span>, Crit Dmg <span class="stat-boost">+60%</span>.</p>`
    }
};

// --- CLÉ DE TRANSFIGURATION ---
weaponsData["cle-de-transfiguration"] = {
    name: "Clé de transfiguration",
    rarity: "SSR",
    element: "Ténèbre",
    gradient: "linear-gradient(90deg, #5b2c6f, #000)",
    image: "Armes_Joueur_SSR/tenebre/cle_de_transfiguration/GSWeapon_KeyOfTrans_PortraitBig.png",
    fullData: {
        0: fmtPassif(`Passif :`, `L'utilisation de **Frappe de morphobête** restaure 100 % de la jauge de noyau de l'utilisateur et active l'effet [Regard de morphobête].`, [
        { title: `[Regard de morphobête]`, content: `L'utilisation d'une attaque de noyau de ténèbres active [Flux instable de morphobête] devant l'utilisateur (temps de rechargement : 2 seconde(s)).\nDurée : 15 seconde(s)</p><h4>[Flux instable de morphobête]</h4><p>Inflige des dégâts élémentaires de **ténèbres** équivalents à 900 % de l'Attaque de Sung Jinwoo.\nCompte comme une **attaque de noyau**.` }
    ], "Ténèbre"),
        1: fmtPassif(`1 étoile :`, `Lorsque toutes les armes dont l'utilisateur est équipé sont de l'élément Ténèbres, l'effet [Esprit de morphobête] est activé.`, [
        { title: `[Esprit de morphobête]`, content: `Augmente les dégâts de Surcharge de ténèbres de 10 %.\nAugmente l'effet d'[Accumulation élémentaire] de [Ténèbres] de 20 %.\nDurée : illimitée` }
    ], "Ténèbre"),
        2: fmtPassif(`2 étoiles :`, `Les dégâts de ténèbres infligés par l'utilisateur augmentent de 10 %.`, [], "Ténèbre"),
        3: fmtPassif(`3 étoiles :`, `L'activation de **[Flux instable de morphobête]** active [Énergie de la transfiguration].`, [
        { title: `[Énergie de la transfiguration]`, content: `Augmente les dégâts de l'attaque de noyau et de la compétence d'arme de ténèbres de 15 %.\nAugmente le Taux de coup critique de l'attaque de noyau et de la compétence d'arme de ténèbres de 3 %.\nAugmente les Dégâts de coup critique de l'attaque de noyau et de la compétence d'arme de ténèbres de 10 %.\nDurée : 10 seconde(s) (cumulable jusqu'à 2 fois)` }
    ], "Ténèbre"),
        4: fmtPassif(`4 étoiles :`, `Diminue le temps de rechargement de **Frappe de morphobête** de 20 %.`, [], "Ténèbre"),
        5: fmtPassif(`5 étoiles :`, `Les effets [Esprit de morphobête et Énergie de la transfiguration] sont améliorés.`, [
        { title: `[Esprit de morphobête]`, content: `Augmente les dégâts de Surcharge de ténèbres de 20 %.\nAugmente l'effet d'[Accumulation élémentaire] de [Ténèbres] de 40 %.\nLorsque l'effet [Surcharge] de [Ténèbres] est activé, les dégâts de compétence d'arme de ténèbres augmentent de 100 % pendant 3 seconde(s), et le nombre de cumuls d'Énergie de la transfiguration passe à 5 (temps de rechargement : 15 seconde(s)).\nDurée : illimitée</p><h4>[Énergie de la transfiguration]</h4><p>Augmente les dégâts de l'attaque de noyau et de la compétence d'arme de ténèbres de 15 %.\nAugmente le Taux de coup critique de l'attaque de noyau et de la compétence d'arme de ténèbres de 3 %.\nAugmente les Dégâts de coup critique de l'attaque de noyau et de la compétence d'arme de ténèbres de 10 %.\nDurée : 15 seconde(s) (cumulable jusqu'à 5 fois)` }
    ], "Ténèbre")
    },
    summaryData: {
        0: `<h3>Passif :</h3><p><strong>Frappe de morphobête</strong> → Jauge noyau <span class="stat-boost">+100%</span> + <span class="buff">[Regard de morphobête]</span>.<br>Noyau Ténèbres → <span class="buff">[Flux instable]</span> : <span class="stat-boost">900% Atk</span> (CD 2s, 15s).</p>`,
        1: `<h3>1 étoile</h3><p>Full Ténèbres → <span class="buff">[Esprit de morphobête]</span>.<br>Surcharge Ténèbres <span class="stat-boost">+10%</span>, Accumulation élémentaire <span class="stat-boost">+20%</span>.</p>`,
        2: `<h3>2 étoiles</h3><p>Dégâts Ténèbres <span class="stat-boost">+10%</span>.</p>`,
        3: `<h3>3 étoiles</h3><p><span class="buff">[Flux instable]</span> → <span class="buff">[Énergie de la transfiguration]</span>.<br>Noyau/Arme Ténèbres : dégâts <span class="stat-boost">+15%</span>, Crit Rate <span class="stat-boost">+3%</span>, Crit Dmg <span class="stat-boost">+10%</span> (max 2 cumuls).</p>`,
        4: `<h3>4 étoiles</h3><p>CD <strong>Frappe de morphobête</strong> <span class="stat-boost">-20%</span>.</p>`,
        5: `<h3>5 étoiles</h3><p><span class="buff">[Esprit]</span> UP : Surcharge <span class="stat-boost">+20%</span>, Accumulation <span class="stat-boost">+40%</span>.<br>Surcharge active → Dégâts arme <span class="stat-boost">+100%</span> (3s) + <span class="buff">[Énergie]</span> max 5 cumuls (15s).</p>`
    }
};

// --- ÉPÉE DÉMONIAQUE : FLEUR DE PRUNIER ---
weaponsData["fleur-de-prunier"] = {
    name: "Épée démoniaque : Fleur de prunier",
    rarity: "SSR",
    element: "Ténèbre",
    gradient: "linear-gradient(90deg, #8e44ad, #000)",
    image: "Armes_Joueur_SSR/tenebre/epee_demoniaque _fleur_de_prunier/GSWeapon_PlumBlossom_PortraitBig.png",
    fullData: {
        0: fmtPassif(`Passif :`, `Après l'utilisation de **Fleur de prunier : Vol prompt**, l'effet [Fleur de prunier] s'applique.\nLorsque l'utilisateur réussit une **Ruée** suivie de **Fleur de prunier: Vol prompt**, l'effet [Éclosion] s'applique.`, [
        { title: `[Fleur de prunier]`, content: `Augmente les dégâts de coup critique de 12% (cumulable jusqu'à 3 fois).\nDurée: illimitée` },
        { title: `[Éclosion]`, content: `Augmente également la vitesse d'utilisation de **Fleur de prunier : Vol prompt** de 20%.\nL'Attaque de l'utilisateur augmente de 4%.\nLe Taux de coup critique de l'utilisateur augmente de 4%.\nDurée: 8 seconde(s)` }
    ], "Ténèbre"),
        1: fmtPassif(`1 étoile :`, `Lorsque l'utilisateur rengaine après avoir utilisé la compétence **Fleur de prunier: Vol prompt**, l'effet [Tirage amplificateur] s'applique.`, [
        { title: `[Tirage amplificateur]`, content: `Augmente les chances de l'utilisateur de porter un coup critique à la prochaine attaque de 32 %.\nAugmente les dégâts de compétence de 32%.\nDurée: 3 seconde(s)` }
    ], "Ténèbre"),
        2: fmtPassif(`2 étoiles :`, `Vos dégâts de ténèbres augmentent de 10%.`, [], "Ténèbre"),
        3: fmtPassif(`3 étoiles :`, `Lors de l'utilisation de **Ruée**, [Tirage amplificateur] dure 5 seconde(s) et les Dégâts de coup critique augmentent de 32%.`, [], "Ténèbre"),
        4: fmtPassif(`4 étoiles :`, `Le temps de rechargement de **Fleur de prunier: Vol prompt** est réduit de 20%.`, [], "Ténèbre"),
        5: fmtPassif(`5 étoiles :`, `Ajoute l'effet [Fleur de prunier].\nLes dégâts de ténèbres de l'utilisateur augmentent de 5%.\nApplique 2 cumuls de [Fleur De Prunier] au début du niveau (cumulable jusqu'à 5 fois).`, [], "Ténèbre")
    },
    summaryData: {
        0: `<h3>Passif :</h3><p><strong>Vol prompt</strong> → <span class="buff">[Fleur de prunier]</span> : Crit Dmg <span class="stat-boost">+12%</span>/pile (max 3, infini).<br><strong>Ruée</strong> + <strong>Vol prompt</strong> → <span class="buff">[Éclosion]</span> : Vitesse skill <span class="stat-boost">+20%</span>, Atk/Crit Rate <span class="stat-boost">+4%</span> (8s).</p>`,
        1: `<h3>1 étoile</h3><p>Rengaine après <strong>Vol prompt</strong> → <span class="buff">[Tirage amplificateur]</span>.<br>Prochain Crit Rate <span class="stat-boost">+32%</span>, dégâts skill <span class="stat-boost">+32%</span> (3s).</p>`,
        2: `<h3>2 étoiles</h3><p>Dégâts Ténèbres <span class="stat-boost">+10%</span>.</p>`,
        3: `<h3>3 étoiles</h3><p><strong>Ruée</strong> → <span class="buff">[Tirage]</span> dure 5s + Crit Dmg <span class="stat-boost">+32%</span>.</p>`,
        4: `<h3>4 étoiles</h3><p>CD <strong>Vol prompt</strong> <span class="stat-boost">-20%</span>.</p>`,
        5: `<h3>5 étoiles</h3><p>Dégâts Ténèbres <span class="stat-boost">+5%</span>.<br>Début niveau : +2 cumuls <span class="buff">[Fleur de prunier]</span> (max passe à 5).</p>`
    }
};

// --- FAUX DE L'OMBRE ---
weaponsData["faux-de-l-ombre"] = {
    name: "Faux de l'ombre",
    rarity: "SSR",
    element: "Ténèbre",
    gradient: "linear-gradient(90deg, #8e44ad, #000)",
    image: "Armes_Joueur_SSR/tenebre/faux_de_l_ombre/GSWeapon_LordScythe_PortraitBig.png",
    fullData: {
        0: fmtPassif(`Passif :`, `Lorsque la compétence **Récolte d'esprits** est utilisée, elle consomme 5% des PV actuels et augmente les dégâts de compétence de 100%.`, [], "Ténèbre"),
        1: fmtPassif(`1 étoile :`, `Lorsque les PV actuels de l'utilisateur sont inférieurs à 70%, l'effet [Tranchant des ténèbres] s'applique.`, [
        { title: `[Tranchant des ténèbres]`, content: `Augmente le Taux de coup critique de l'utilisateur de 25%.` }
    ], "Ténèbre"),
        2: fmtPassif(`2 étoiles :`, `Vos dégâts de ténèbres augmentent de 10%.`, [], "Ténèbre"),
        3: fmtPassif(`3 étoiles :`, `Lorsque les PV actuels de l'utilisateur sont à 60% ou en dessous, 0.4% des PV actuels sont restaurés dès que la compétence touche sa cible.`, [], "Ténèbre"),
        4: fmtPassif(`4 étoiles :`, `Le temps de rechargement de la compétence **Récolte d'esprits** diminue de 20 %.`, [], "Ténèbre"),
        5: fmtPassif(`5 étoiles :`, `Les dégâts subis augmentent de 15%, mais l'Attaque augmente de 15%.`, [], "Ténèbre")
    },
    summaryData: {
        0: `<h3>Passif :</h3><p><strong>Récolte d'esprits</strong> : coûte <span class="stat-boost">5% PV actuels</span> → dégâts skill <span class="stat-boost">+100%</span>.</p>`,
        1: `<h3>1 étoile</h3><p>PV < 70% → <span class="buff">[Tranchant des ténèbres]</span> : Crit Rate <span class="stat-boost">+25%</span>.</p>`,
        2: `<h3>2 étoiles</h3><p>Dégâts Ténèbres <span class="stat-boost">+10%</span>.</p>`,
        3: `<h3>3 étoiles</h3><p>PV ≤ 60% : chaque touche → Soin <span class="stat-boost">0.4%</span> PV actuels.</p>`,
        4: `<h3>4 étoiles</h3><p>CD <strong>Récolte d'esprits</strong> <span class="stat-boost">-20%</span>.</p>`,
        5: `<h3>5 étoiles</h3><p>Dégâts subis <span class="stat-boost">+15%</span> ↔ Attaque <span class="stat-boost">+15%</span>.</p>`
    }
};

// --- FRAGMENT DE ZEKE ---
weaponsData["fragment-de-zeke"] = {
    name: "Fragment de Zeke",
    rarity: "SSR",
    element: "Ténèbre",
    gradient: "linear-gradient(90deg, #8e44ad, #000)",
    image: "Armes_Joueur_SSR/tenebre/fragment_de_zeke/GSWeapon_SSR_PieceOfSieg_PortraitBig.png",
    fullData: {
        0: fmtPassif(`Passif :`, `Lors d'une nouvelle utilisation de l'**Avènement de Zeke** après une **Attaque au javelot**, l'utilisateur réalise immédiatement une **Attaque tombante**.\nLors de l'utilisation d'**Attaque au javelot**, l'effet [Récupération de fragment] est appliqué.\nAprès l'utilisation d'**Attaque tombante**, l'utilisateur obtient [Super armure] et les dégâts qu'il subit diminuent de 50% pendant 5 seconde(s).`, [
        { title: `[Récupération de fragment]`, content: `Lorsque l'effet se dissipe, l'effet [Fragment amélioré] est appliqué.\nDurée: 3 seconde(s)` },
        { title: `[Fragment amélioré]`, content: `Augmente les dégâts d'**Avènement de Zeke** et de **Retour de Zeke** de 50%.\nDurée: 3 seconde(s)` }
    ], "Ténèbre"),
        1: fmtPassif(`1 étoile :`, `**Retour de Zeke** s'active après l'utilisation d'une **Attaque tombante**.`, [
        { title: `[Renvoyez le Zeke]`, content: `Dégâts et consommation de PM: identiques à ceux d'**Attaque tombante**\nL'utilisateur réalise une puissante attaque de taille vers l'avant et crée un tonnerre noir.\nLors de l'utilisation de **Retour de Zeke** à la suite d'**Attaque tombante**, les dégâts d'attaque augmentent de 50%.` }
    ], "Ténèbre"),
        2: fmtPassif(`2 étoiles :`, `Vos dégâts de ténèbres augmentent de 10%.`, [], "Ténèbre"),
        3: fmtPassif(`3 étoiles :`, `L'utilisation d'**Attaque tombante** peut se faire plus rapidement.\nLors de l'utilisation d'**Attaque tombante**, l'effet [Fragment amélioré] est appliqué immédiatement.\nLors de l'utilisation à la suite d'**Attaque tombante** puis de **Retour de Zeke**, le temps de rechargement d'**Avènement de Zeke** diminue de 2 seconde(s).`, [], "Ténèbre"),
        4: fmtPassif(`4 étoiles :`, `Le temps de rechargement d'**Avènement de Zeke** diminue de 20%.`, [], "Ténèbre"),
        5: fmtPassif(`5 étoiles :`, `Lors de l'utilisation à la suite d'**Attaque tombante** puis de **Retour de Zeke**, l'effet [Fragment amélioré] est amélioré et l'effet [Fragment de foudre noire] est appliqué.`, [
        { title: `[Fragment de foudre noire]`, content: `Augmente les dégâts d'**Avènement de Zeke** et de **Retour de Zeke** de 80%.\nAugmente le Taux de coup critique d'**Avènement de Zeke** et de **Retour de Zeke** de 20%.\nDurée: 3 seconde(s)` }
    ], "Ténèbre")
    },
    summaryData: {
        0: `<h3>Passif :</h3><p><strong>Javelot</strong> → <strong>Avènement</strong> → <strong>Attaque tombante</strong> automatique.<br><strong>Javelot</strong> → <span class="buff">[Récupération]</span> (3s) → <span class="buff">[Fragment amélioré]</span> : dégâts Zeke <span class="stat-boost">+50%</span> (3s).<br><strong>Tombante</strong> → Super Armure + dégâts subis <span class="stat-boost">-50%</span> (5s).</p>`,
        1: `<h3>1 étoile</h3><p><strong>Attaque tombante</strong> → active <strong>Retour de Zeke</strong>.<br>Combo Tombante → Retour : dégâts <span class="stat-boost">+50%</span>.</p>`,
        2: `<h3>2 étoiles</h3><p>Dégâts Ténèbres <span class="stat-boost">+10%</span>.</p>`,
        3: `<h3>3 étoiles</h3><p><strong>Tombante</strong> plus rapide + <span class="buff">[Fragment amélioré]</span> immédiat.<br>Combo Tombante → Retour : CD <strong>Avènement</strong> <span class="stat-boost">-2s</span>.</p>`,
        4: `<h3>4 étoiles</h3><p>CD <strong>Avènement de Zeke</strong> <span class="stat-boost">-20%</span>.</p>`,
        5: `<h3>5 étoiles</h3><p>Combo complet → <span class="buff">[Fragment de foudre noire]</span>.<br>Dégâts Zeke <span class="stat-boost">+80%</span>, Crit Rate <span class="stat-boost">+20%</span> (3s).</p>`
    }
};

// --- OMBRE SÉLÈNE ---
weaponsData["ombre-selene"] = {
    name: "Ombre Sélène",
    rarity: "SSR",
    element: "Ténèbre",
    gradient: "linear-gradient(90deg, #8e44ad, #000)",
    image: "Armes_Joueur_SSR/tenebre/ombre_selene/GSWeapon_MoonShadow_PortraitBig.png",
    fullData: {
        0: fmtPassif(`Passif :`, `Lors de l'utilisation de la compétence **Éclat lunaire dans la nuit**, l'effet [Pleine lune] est appliqué aux cibles sur la lune.\nLorsque la dernière attaque d'**Éclat lunaire dans la nuit** touche sa cible, le temps ralentit pendant 3 seconds et 1 cumul d'[Éclipse lunaire] est appliqué à la cible par cumul de [Pleine lune].`, [
        { title: `[Pleine lune]`, content: `Durée: illimitée (cumulable jusqu'à 1 fois)` },
        { title: `[Éclipse lunaire]`, content: `Augmente les dégâts subis de 10%.\nAugmente les dégâts de ténèbres de l'utilisateur de 10%.\nDurée: 3 seconde(s)` }
    ], "Ténèbre"),
        1: fmtPassif(`1 étoile :`, `Améliore les effets de [Pleine lune et Éclipse lunaire]`, [
        { title: `[Pleine lune]`, content: `Durée: infinie (cumulable jusqu'à 3 fois).` },
        { title: `[Éclipse lunaire]`, content: `Les dégâts subis par la cible augmentent de 15%.\nLes dégâts de ténèbres subis par la cible augmentent de 15%.\nDurée: 3 seconde(s)` }
    ], "Ténèbre"),
        2: fmtPassif(`2 étoiles :`, `Vos dégâts de ténèbres augmentent de 10%.`, [], "Ténèbre"),
        3: fmtPassif(`3 étoiles :`, `Lorsque la compétence **Foulée de l'ombre** touche sa cible, elle lui applique 1 instance d'[Éclipse lunaire] par instance de [Pleine lune].`, [], "Ténèbre"),
        4: fmtPassif(`4 étoiles :`, `Réduit le temps de rechargement de la compétence **Éclat lunaire dans la nuit** de 20%.`, [], "Ténèbre"),
        5: fmtPassif(`5 étoiles :`, `Les dégâts de l'utilisateur et des membres de son équipe augmentent de 15% lorsque l'effet de ralentissement du temps est actif.`, [], "Ténèbre")
    },
    summaryData: {
        0: `<h3>Passif :</h3><p><strong>Éclat lunaire</strong> → <span class="buff">[Pleine lune]</span> sur cibles (1 pile max).<br>Dernière touche → Ralenti 3s + 1 <span class="buff">[Éclipse lunaire]</span>/pile : dégâts subis/Ténèbres <span class="stat-boost">+10%</span> (3s).</p>`,
        1: `<h3>1 étoile</h3><p><span class="buff">[Pleine lune]</span> : max 3 piles.<br><span class="buff">[Éclipse lunaire]</span> UP : dégâts subis/Ténèbres <span class="stat-boost">+15%</span>.</p>`,
        2: `<h3>2 étoiles</h3><p>Dégâts Ténèbres <span class="stat-boost">+10%</span>.</p>`,
        3: `<h3>3 étoiles</h3><p><strong>Foulée de l'ombre</strong> → 1 <span class="buff">[Éclipse]</span> par pile de <span class="buff">[Pleine lune]</span>.</p>`,
        4: `<h3>4 étoiles</h3><p>CD <strong>Éclat lunaire dans la nuit</strong> <span class="stat-boost">-20%</span>.</p>`,
        5: `<h3>5 étoiles</h3><p>Sous Ralenti : dégâts équipe <span class="stat-boost">+15%</span>.</p>`
    }
};
