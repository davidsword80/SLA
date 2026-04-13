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
        { title: `[Empoisonnement]`, content: `L'utilisateur inflige des dégâts équivalents à 50% de son Attaque toutes les 3 seconde(s).
Réduit le Taux de récupération des PV de 70%.
Durée: 30 seconde(s)` }
    ], "Ténèbre"),
        1: fmtPassif(`1 étoile :`, `Lorsque la compétence **Barrage d'aiguilles empoisonnées** est utilisée, **Ruée** gagne 1 charge.`, [], "Ténèbre"),
        2: fmtPassif(`2 étoiles :`, `Vos dégâts de ténèbres augmentent de 6%.`, [], "Ténèbre"),
        3: fmtPassif(`3 étoiles :`, `Les dégâts de [Poison] de la compétence **Barrage d'aiguilles empoisonnées** augmentent de 50%.`, [], "Ténèbre"),
        4: fmtPassif(`4 étoiles :`, `Le temps de rechargement de **Barrage d'aiguilles empoisonnées** diminue de 10%.`, [], "Ténèbre"),
        5: fmtPassif(`5 étoiles :`, `Si Jinwoo est touché dans les airs pendant qu'il utilise **Barrage d'aiguilles empoisonnées**, **Évasion extrême** s'active.`, [], "Ténèbre")
    },
    summaryData: {
        0: `<h3>Passif : Venin d'Arachnide</h3><p>Barrage d'aiguilles = <span class="buff">[Empoisonnement]</span>.<br>50% Atk/3s & Récup. PV <span class="stat-boost">-70%</span>.</p>`,
        1: `<h3>1 étoile</h3><p>Utilisation compétence = <strong>+1 charge de Ruée</strong>.<br></p>`,
        2: `<h3>2 étoiles</h3><p>Dégâts Ténèbres <span class="stat-boost">+6%</span>.<br></p>`,
        3: `<h3>3 étoiles</h3><p>Dégâts du Poison <span class="stat-boost">+50%</span>.<br></p>`,
        4: `<h3>4 étoiles</h3><p>CD Barrage d'aiguilles <span class="stat-boost">-10%</span>.<br></p>`,
        5: `<h3>5 étoiles</h3><p>Auto-trigger <strong>Évasion extrême</strong> si touché en l'air pendant la compétence.<br></p>`
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
        { title: `[Sanctuaire]`, content: `Augmente l'Attaque de l'utilisateur de 2 % (cumulable jusqu'à 10 fois).
Durée : 20 seconde(s)` }
    ], "Ténèbre"),
        1: fmtPassif(`1 étoile :`, `Les dégâts infligés aux monstres non-boss avec **Lame de retour** augmentent de 30 %.`, [], "Ténèbre"),
        2: fmtPassif(`2 étoiles :`, `Augmente les dégâts de ténèbres de l'utilisateur de 6 %.`, [], "Ténèbre"),
        3: fmtPassif(`3 étoiles :`, `Les dégâts de la lame qui revient pendant **Lame de retour** augmentent de 100 %.`, [], "Ténèbre"),
        4: fmtPassif(`4 étoiles :`, `Réduit le temps de rechargement de **Lame de retour** de 10 %.`, [], "Ténèbre"),
        5: fmtPassif(`5 étoiles :`, `Lorsque l'utilisateur terrasse un ennemi, réduit le temps de rechargement de **Lame de retour** de 3 seconde(s).`, [], "Ténèbre")
    },
    summaryData: {
        0: `<h3>Passif : Sanctuaire</h3><p>Ennemi terrassé = <span class="buff">[Sanctuaire]</span>.<br>Attaque <span class="stat-boost">+2 %</span> par pile (max 10).</p>`,
        1: `<h3>1 étoile</h3><p>Dégâts aux monstres (non-boss) <span class="stat-boost">+30 %</span> avec Lame de retour.<br></p>`,
        2: `<h3>2 étoiles</h3><p>Dégâts Ténèbres <span class="stat-boost">+6 %</span>.<br></p>`,
        3: `<h3>3 étoiles</h3><p>Dégâts de la lame (retour) <span class="stat-boost">+100 %</span>.<br></p>`,
        4: `<h3>4 étoiles</h3><p>CD Lame de retour <span class="stat-boost">-10 %</span>.<br></p>`,
        5: `<h3>5 étoiles</h3><p>Ennemi terrassé = CD Lame de retour <span class="stat-boost">-3s</span>.<br></p>`
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
        { title: `[Force d'orc]`, content: `Augmente les dégâts d'**Épée longue d'orc** de 40%.
Réduit le temps de rechargement de 8 seconde(s).
Durée: 20 seconde(s)` }
    ], "Ténèbre"),
        1: fmtPassif(`1 étoile :`, `Lors de l'utilisation de la compétence **Épée longue d'orc**, l'effet [Armure d'orc] est appliqué.`, [
        { title: `[Armure d'orc]`, content: `Crée un [Bouclier] équivalent à 12% des PV max de l'utilisateur.
Durée: 3 seconde(s)` }
    ], "Ténèbre"),
        2: fmtPassif(`2 étoiles :`, `Les dégâts élémentaires de ténèbres augmentent de 8%.`, [], "Ténèbre"),
        3: fmtPassif(`3 étoiles :`, `L'effet [Force d'orc] s'applique également en cas de Coup critique réussi.
Augmente les chance qu'**Épée longue d'orc** inflige un Coup critique de 40 %.`, [], "Ténèbre"),
        4: fmtPassif(`4 étoiles :`, `Réduit le temps de rechargement de la compétence de l'**Épée longue d'orc** de 15%.`, [], "Ténèbre"),
        5: fmtPassif(`5 étoiles :`, `Lorsque l'effet [Armure d'orc] est appliqué pendant que l'effet [Force d'orc] est actif, les deux effets se combinent pour devenir [Prestige de haut orc].`, [
        { title: `[Prestige de haut orc]`, content: `L'utilisateur crée un [Bouclier] équivalent à 25% de ses PV max.
Lorsque l'effet est appliqué pour la première fois, le temps de rechargement d'**Épée longue d'orc** se réinitialise, puis il est réduit de 40%.
Augmente les dégâts d'**Épée longue d'orc** de 75%.
Durée: 15 seconde(s)` }
    ], "Ténèbre")
    },
    summaryData: {
        0: `<h3>Passif : Guerrier Orc</h3><p>Kill = <span class="buff">[Force d'orc]</span>.<br>[Force] : Dégâts arme <span class="stat-boost">+40%</span>, CD -8s (20s).</p>`,
        1: `<h3>1 étoile</h3><p>Compétence = <span class="buff">[Armure d'orc]</span> (Bouclier <span class="stat-boost">12%</span> PV, 3s).<br></p>`,
        2: `<h3>2 étoiles</h3><p>Dégâts Ténèbres <span class="stat-boost">+8%</span>.<br></p>`,
        3: `<h3>3 étoiles</h3><p>Critique active aussi [Force d'orc].<br>Taux critique arme <span class="stat-boost">+40%</span>.</p>`,
        4: `<h3>4 étoiles</h3><p>CD Épée longue d'orc <span class="stat-boost">-15%</span>.<br></p>`,
        5: `<h3>5 étoiles</h3><p>Armure + Force = <span class="buff">[Prestige de haut orc]</span>.<br>[Prestige] : Bouclier <span class="stat-boost">25%</span> PV, Reset CD puis <span class="stat-boost">-40%</span>, Dégâts <span class="stat-boost">+75%</span>.</p>`
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
        0: fmtPassif(`Passif :`, `Si **Évasion** s'active pendant une glissade de l'utilisateur, l'effet [Évasion extrême] se déclenche.
L'activation de l'effet [Évasion extrême] applique l'effet [Partie de chasse].`, [
        { title: `[Partie de chasse]`, content: `Augmente l'Attaque de l'utilisateur de 7% (cumulable jusqu'à 3 fois).
Durée: 30 seconde(s)` }
    ], "Ténèbre"),
        1: fmtPassif(`1 étoile :`, `Lors de l'utilisation de la compétence **Faucon chasseur**, le temps de rechargement des compétences **Foulée de l'ombre**, **Mort** ou **Effondrement** est réinitialisé et activé.
Taux de réinitialisation: 20% pour **Foulée de l'ombre**, 40% pour **Mort**, 40% pour **Effondrement**`, [], "Ténèbre"),
        2: fmtPassif(`2 étoiles :`, `Vos dégâts de ténèbres augmentent de 8 %.`, [], "Ténèbre"),
        3: fmtPassif(`3 étoiles :`, `Modification des effets de la compétence **Faucon chasseur**:
La compétence peut être utilisée jusqu'à 2 fois.`, [], "Ténèbre"),
        4: fmtPassif(`4 étoiles :`, `Le temps de rechargement de **Faucon chasseur** diminue de 15%.`, [], "Ténèbre"),
        5: fmtPassif(`5 étoiles :`, `Lorsque la compétence **Faucon chasseur** est utilisée, elle applique l'effet [Œil de faucon].`, [
        { title: `[Œil de faucon]`, content: `Augmente les dégâts des compétences **Effondrement**, **Mort** et **Foulée de l'ombre** de 30%.
Durée: 3 seconde(s)` }
    ], "Ténèbre")
    },
    summaryData: {
        0: `<h3>Passif : Prédateur Silencieux</h3><p>Évasion (glissade) -> <span class="buff">[Évasion extrême]</span> -> <span class="buff">[Partie de chasse]</span>.<br>[Partie de chasse] : Attaque <span class="stat-boost">+7%</span> (Max 3 stacks, 30s).</p>`,
        1: `<h3>1 étoile</h3><p>Faucon chasseur reset CD : Foulée (20%), Mort (40%), Effondrement (40%).<br></p>`,
        2: `<h3>2 étoiles</h3><p>Dégâts Ténèbres <span class="stat-boost">+8%</span>.<br></p>`,
        3: `<h3>3 étoiles</h3><p>Faucon chasseur : 2 charges max.<br></p>`,
        4: `<h3>4 étoiles</h3><p>CD Faucon chasseur <span class="stat-boost">-15%</span>.<br></p>`,
        5: `<h3>5 étoiles</h3><p>Faucon chasseur = <span class="buff">[Œil de faucon]</span>.<br>[Œil] : Dégâts Effondrement/Mort/Foulée <span class="stat-boost">+30%</span> (3s).</p>`
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
        { title: `[Rechargement rotatif]`, content: `Active l'attaque de noyau de l'utilisateur.
Transforme l'attaque de noyau de Winchester Roke en Condamnation et augmente ses dégâts de 20 %.
L'effet **[Rechargement rotatif]** ne peut être appliqué qu' avec un maximum de 2 utilisations de Condamnation.
Durée : 4 seconde(s)` }
    ], "Ténèbre"),
        1: fmtPassif(`1 étoile :`, `Augmente les dégâts de la compétence **[Apocalypse]** de l'utilisateur de 100 % face aux cibles se trouvant à une portée de 5 m.
Améliore l'effet [Rechargement rotatif].`, [
        { title: `[Rechargement rotatif]`, content: `Active l'attaque de noyau de l'utilisateur.
Transforme l'attaque de noyau de Winchester Roke en Condamnation et augmente ses dégâts de 40 %.
L'effet **[Rechargement rotatif]** ne peut être appliqué qu' avec un maximum de 3 utilisations de Condamnation.
Durée : 5 seconde(s)` }
    ], "Ténèbre"),
        2: fmtPassif(`2 étoiles :`, `Les dégâts de ténèbres infligés par l'utilisateur augmentent de 10 %.`, [], "Ténèbre"),
        3: fmtPassif(`3 étoiles :`, `L'utilisation de la compétence **[Apocalypse]** active [Prêt ou non].`, [
        { title: `[Prêt ou non]`, content: `Augmente les dégâts de ténèbres de la compétence Condamnation de 15 %.
Augmente les Dégâts de coup critique de la compétence Condamnation de 30 %.
Confère à l'utilisateur [Super armure].
Durée : 6 seconde(s)` }
    ], "Ténèbre"),
        4: fmtPassif(`4 étoiles :`, `Le temps de rechargement de la compétence **[Apocalypse]** diminue de 20 %.`, [], "Ténèbre"),
        5: fmtPassif(`5 étoiles :`, `Les compétences [Rechargement rotatif et Prêt ou non] sont améliorées.`, [
        { title: `[Rechargement rotatif]`, content: `Active l'attaque de noyau de l'utilisateur.
Transforme l'attaque de noyau de Winchester Roke en Condamnation, et ses dégâts augmentent de 80 %.
Augmente les dégâts de Surcharge de Condamnation de 70 %.
L'effet **[Rechargement rotatif]** ne peut être appliqué qu' avec un maximum de 4 utilisations de Condamnation.
Durée : 6 seconde(s)</p><h4>[Prêt ou non]</h4><p>Augmente les dégâts de ténèbres de Condamnation de 30 %.
Augmente les Dégâts de coup critique de la compétence Condamnation de 60 %.
Confère à l'utilisateur [Super armure].
Durée : 6 seconde(s)` }
    ], "Ténèbre")
    },
    summaryData: {
        0: `<h3>Passif</h3><p>[Apocalypse] active <span class="buff">[Rechargement]</span>.<br>Noyau devient Condamnation (Dégâts <span class="stat-boost">+20 %</span>, 2 tirs max).</p>`,
        1: `<h3>1 étoile</h3><p>Dégâts [Apocalypse] <span class="stat-boost">+100 %</span> au corps à corps.<br>[Rechargement] UP : Dégâts <span class="stat-boost">+40 %</span>, 3 tirs max.</p>`,
        2: `<h3>2 étoiles</h3><p>Dégâts Ténèbres <span class="stat-boost">+10 %</span>.<br></p>`,
        3: `<h3>3 étoiles</h3><p>[Apocalypse] active <span class="buff">[Prêt ou non]</span>.<br>Condamnation : Dégâts Ténèbres <span class="stat-boost">+15 %</span>, Dégâts Crit <span class="stat-boost">+30 %</span> + Super Armure.</p>`,
        4: `<h3>4 étoiles</h3><p>CD [Apocalypse] <span class="stat-boost">-20 %</span>.<br></p>`,
        5: `<h3>5 étoiles</h3><p>[Rechargement] UP : Dégâts <span class="stat-boost">+80 %</span>, Surcharge <span class="stat-boost">+70 %</span>, 4 tirs max.<br>[Prêt ou non] UP : Dégâts Ténèbres <span class="stat-boost">+30 %</span>, Dégâts Crit <span class="stat-boost">+60 %</span>.</p>`
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
        { title: `[Regard de morphobête]`, content: `L'utilisation d'une attaque de noyau de ténèbres active [Flux instable de morphobête] devant l'utilisateur (temps de rechargement : 2 seconde(s)).
Durée : 15 seconde(s)</p><h4>[Flux instable de morphobête]</h4><p>Inflige des dégâts élémentaires de **ténèbres** équivalents à 900 % de l'Attaque de Sung Jinwoo.
Compte comme une **attaque de noyau**.` }
    ], "Ténèbre"),
        1: fmtPassif(`1 étoile :`, `Lorsque toutes les armes dont l'utilisateur est équipé sont de l'élément Ténèbres, l'effet [Esprit de morphobête] est activé.`, [
        { title: `[Esprit de morphobête]`, content: `Augmente les dégâts de Surcharge de ténèbres de 10 %.
Augmente l'effet d'[Accumulation élémentaire] de [Ténèbres] de 20 %.
Durée : illimitée` }
    ], "Ténèbre"),
        2: fmtPassif(`2 étoiles :`, `Les dégâts de ténèbres infligés par l'utilisateur augmentent de 10 %.`, [], "Ténèbre"),
        3: fmtPassif(`3 étoiles :`, `L'activation de **[Flux instable de morphobête]** active [Énergie de la transfiguration].`, [
        { title: `[Énergie de la transfiguration]`, content: `Augmente les dégâts de l'attaque de noyau et de la compétence d'arme de ténèbres de 15 %.
Augmente le Taux de coup critique de l'attaque de noyau et de la compétence d'arme de ténèbres de 3 %.
Augmente les Dégâts de coup critique de l'attaque de noyau et de la compétence d'arme de ténèbres de 10 %.
Durée : 10 seconde(s) (cumulable jusqu'à 2 fois)` }
    ], "Ténèbre"),
        4: fmtPassif(`4 étoiles :`, `Diminue le temps de rechargement de **Frappe de morphobête** de 20 %.`, [], "Ténèbre"),
        5: fmtPassif(`5 étoiles :`, `Les effets [Esprit de morphobête et Énergie de la transfiguration] sont améliorés.`, [
        { title: `[Esprit de morphobête]`, content: `Augmente les dégâts de Surcharge de ténèbres de 20 %.
Augmente l'effet d'[Accumulation élémentaire] de [Ténèbres] de 40 %.
Lorsque l'effet [Surcharge] de [Ténèbres] est activé, les dégâts de compétence d'arme de ténèbres augmentent de 100 % pendant 3 seconde(s), et le nombre de cumuls d'Énergie de la transfiguration passe à 5 (temps de rechargement : 15 seconde(s)).
Durée : illimitée</p><h4>[Énergie de la transfiguration]</h4><p>Augmente les dégâts de l'attaque de noyau et de la compétence d'arme de ténèbres de 15 %.
Augmente le Taux de coup critique de l'attaque de noyau et de la compétence d'arme de ténèbres de 3 %.
Augmente les Dégâts de coup critique de l'attaque de noyau et de la compétence d'arme de ténèbres de 10 %.
Durée : 15 seconde(s) (cumulable jusqu'à 5 fois)` }
    ], "Ténèbre")
    },
    summaryData: {
        0: `<h3>Passif</h3><p>Frappe de morphobête : Jauge de noyau <span class="stat-boost">+100 %</span> + <span class="buff">[Regard]</span>.<br>[Regard] : Noyau Ténèbres déclenche <span class="stat-boost">[Flux instable]</span> (900 % Attaque).</p>`,
        1: `<h3>1 étoile</h3><p>Full Ténèbres = <span class="buff">[Esprit de morphobête]</span>.<br>[Esprit] : Surcharge +10 %, Accumulation +20 %.</p>`,
        2: `<h3>2 étoiles</h3><p>Dégâts Ténèbres <span class="stat-boost">+10 %</span>.<br></p>`,
        3: `<h3>3 étoiles</h3><p>[Flux] active <span class="buff">[Énergie de la transfiguration]</span>.<br>[Énergie] : Dégâts Noyau/Arme +15 %, Taux Crit +3 %, Dégâts Crit +10 % (Max x2).</p>`,
        4: `<h3>4 étoiles</h3><p>CD Frappe de morphobête <span class="stat-boost">-20 %</span>.<br></p>`,
        5: `<h3>5 étoiles</h3><p>[Esprit] & [Énergie] UP.<br>Surcharge active = Dégâts Arme <span class="stat-boost">+100 %</span> et <span class="stat-boost">5 cumuls</span> Énergie.<br>[Énergie] : Max x5, Durée 15s.</p>`
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
        0: fmtPassif(`Passif :`, `Après l'utilisation de **Fleur de prunier : Vol prompt**, l'effet [Fleur de prunier] s'applique.
Lorsque l'utilisateur réussit une **Ruée** suivie de **Fleur de prunier: Vol prompt**, l'effet [Éclosion] s'applique.`, [
        { title: `[Fleur de prunier]`, content: `Augmente les dégâts de coup critique de 12% (cumulable jusqu'à 3 fois).
Durée: illimitée` },
        { title: `[Éclosion]`, content: `Augmente également la vitesse d'utilisation de **Fleur de prunier : Vol prompt** de 20%.
L'Attaque de l'utilisateur augmente de 4%.
Le Taux de coup critique de l'utilisateur augmente de 4%.
Durée: 8 seconde(s)` }
    ], "Ténèbre"),
        1: fmtPassif(`1 étoile :`, `Lorsque l'utilisateur rengaine après avoir utilisé la compétence **Fleur de prunier: Vol prompt**, l'effet [Tirage amplificateur] s'applique.`, [
        { title: `[Tirage amplificateur]`, content: `Augmente les chances de l'utilisateur de porter un coup critique à la prochaine attaque de 32 %.
Augmente les dégâts de compétence de 32%.
Durée: 3 seconde(s)` }
    ], "Ténèbre"),
        2: fmtPassif(`2 étoiles :`, `Vos dégâts de ténèbres augmentent de 10%.`, [], "Ténèbre"),
        3: fmtPassif(`3 étoiles :`, `Lors de l'utilisation de **Ruée**, [Tirage amplificateur] dure 5 seconde(s) et les Dégâts de coup critique augmentent de 32%.`, [], "Ténèbre"),
        4: fmtPassif(`4 étoiles :`, `Le temps de rechargement de **Fleur de prunier: Vol prompt** est réduit de 20%.`, [], "Ténèbre"),
        5: fmtPassif(`5 étoiles :`, `Ajoute l'effet [Fleur de prunier].
Les dégâts de ténèbres de l'utilisateur augmentent de 5%.
Applique 2 cumuls de [Fleur De Prunier] au début du niveau (cumulable jusqu'à 5 fois).`, [], "Ténèbre")
    },
    summaryData: {
        0: `<h3>Passif : Lame du Prunier</h3><p>Vol prompt = <span class="buff">[Fleur de prunier]</span> (Dégâts Crit <span class="stat-boost">+12%</span>, max 3).<br>Ruée + Vol prompt = <span class="buff">[Éclosion]</span> (Vitesse skill +20%, Atk/Crit <span class="stat-boost">+4%</span>, 8s).</p>`,
        1: `<h3>1 étoile</h3><p>Rengaine après Vol prompt = <span class="buff">[Tirage amplificateur]</span>.<br>[Tirage] : Prochain Crit Rate <span class="stat-boost">+32%</span>, Dégâts Skill <span class="stat-boost">+32%</span>.</p>`,
        2: `<h3>2 étoiles</h3><p>Dégâts Ténèbres <span class="stat-boost">+10%</span>.<br></p>`,
        3: `<h3>3 étoiles</h3><p>Ruée étend [Tirage] à 5s + Dégâts Crit <span class="stat-boost">+32%</span>.<br></p>`,
        4: `<h3>4 étoiles</h3><p>CD Fleur de prunier: Vol prompt <span class="stat-boost">-20%</span>.<br></p>`,
        5: `<h3>5 étoiles</h3><p>Dégâts Ténèbres <span class="stat-boost">+5%</span>.<br>Début niveau : +2 cumuls [Fleur de prunier] (Max cumul passe à 5).</p>`
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
        0: `<h3>Passif : Moissonneur d'Âmes</h3><p>Récolte d'esprits : Coût 5% PV = Dégâts <span class="stat-boost">+100%</span>.<br></p>`,
        1: `<h3>1 étoile</h3><p>PV < 70% = <span class="buff">[Tranchant des ténèbres]</span>.<br>[Tranchant] : Crit Rate <span class="stat-boost">+25%</span>.</p>`,
        2: `<h3>2 étoiles</h3><p>Dégâts Ténèbres <span class="stat-boost">+10%</span>.<br></p>`,
        3: `<h3>3 étoiles</h3><p>PV <= 60% : Touche = Regen <span class="stat-boost">0.4%</span> PV actuels.<br></p>`,
        4: `<h3>4 étoiles</h3><p>CD Récolte d'esprits <span class="stat-boost">-20%</span>.<br></p>`,
        5: `<h3>5 étoiles</h3><p>Sacrifice : Dégâts subis <span class="stat-boost">+15%</span> pour Attaque <span class="stat-boost">+15%</span>.<br></p>`
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
        0: fmtPassif(`Passif :`, `Lors d'une nouvelle utilisation de l'**Avènement de Zeke** après une **Attaque au javelot**, l'utilisateur réalise immédiatement une **Attaque tombante**.
Lors de l'utilisation d'**Attaque au javelot**, l'effet [Récupération de fragment] est appliqué.
Après l'utilisation d'**Attaque tombante**, l'utilisateur obtient [Super armure] et les dégâts qu'il subit diminuent de 50% pendant 5 seconde(s).`, [
        { title: `[Récupération de fragment]`, content: `Lorsque l'effet se dissipe, l'effet [Fragment amélioré] est appliqué.
Durée: 3 seconde(s)` },
        { title: `[Fragment amélioré]`, content: `Augmente les dégâts d'**Avènement de Zeke** et de **Retour de Zeke** de 50%.
Durée: 3 seconde(s)` }
    ], "Ténèbre"),
        1: fmtPassif(`1 étoile :`, `**Retour de Zeke** s'active après l'utilisation d'une **Attaque tombante**.`, [
        { title: `[Renvoyez le Zeke]`, content: `Dégâts et consommation de PM: identiques à ceux d'**Attaque tombante**
L'utilisateur réalise une puissante attaque de taille vers l'avant et crée un tonnerre noir.
Lors de l'utilisation de **Retour de Zeke** à la suite d'**Attaque tombante**, les dégâts d'attaque augmentent de 50%.` }
    ], "Ténèbre"),
        2: fmtPassif(`2 étoiles :`, `Vos dégâts de ténèbres augmentent de 10%.`, [], "Ténèbre"),
        3: fmtPassif(`3 étoiles :`, `L'utilisation d'**Attaque tombante** peut se faire plus rapidement.
Lors de l'utilisation d'**Attaque tombante**, l'effet [Fragment amélioré] est appliqué immédiatement.
Lors de l'utilisation à la suite d'**Attaque tombante** puis de **Retour de Zeke**, le temps de rechargement d'**Avènement de Zeke** diminue de 2 seconde(s).`, [], "Ténèbre"),
        4: fmtPassif(`4 étoiles :`, `Le temps de rechargement d'**Avènement de Zeke** diminue de 20%.`, [], "Ténèbre"),
        5: fmtPassif(`5 étoiles :`, `Lors de l'utilisation à la suite d'**Attaque tombante** puis de **Retour de Zeke**, l'effet [Fragment amélioré] est amélioré et l'effet [Fragment de foudre noire] est appliqué.`, [
        { title: `[Fragment de foudre noire]`, content: `Augmente les dégâts d'**Avènement de Zeke** et de **Retour de Zeke** de 80%.
Augmente le Taux de coup critique d'**Avènement de Zeke** et de **Retour de Zeke** de 20%.
Durée: 3 seconde(s)` }
    ], "Ténèbre")
    },
    summaryData: {
        0: `<h3>Passif : Héritage de Zeke</h3><p>Avènement après Javelot = <strong>Attaque tombante</strong> auto.<br>Javelot = <span class="buff">[Récupération]</span> -> <span class="buff">[Amélioré]</span> (3s).<br>Attaque tombante = <span class="buff">[Super armure]</span> + Réduc Dégâts <span class="stat-boost">50%</span>.<br>[Amélioré] : Dégâts Zeke <span class="stat-boost">+50%</span>.</p>`,
        1: `<h3>1 étoile</h3><p>Attaque tombante active <strong>Retour de Zeke</strong>.<br>Combo Tombante -> Retour = Dégâts <span class="stat-boost">+50%</span>.</p>`,
        2: `<h3>2 étoiles</h3><p>Dégâts Ténèbres <span class="stat-boost">+10%</span>.<br></p>`,
        3: `<h3>3 étoiles</h3><p>Tombante plus rapide + [Amélioré] immédiat.<br>Combo Tombante -> Retour = CD Avènement -2s.</p>`,
        4: `<h3>4 étoiles</h3><p>CD Avènement de Zeke <span class="stat-boost">-20%</span>.<br></p>`,
        5: `<h3>5 étoiles</h3><p>Combo complet = [Amélioré] boosté + <span class="buff">[Foudre noire]</span>.<br>[Foudre noire] : Dégâts <span class="stat-boost">+80%</span>, Crit <span class="stat-boost">+20%</span> (3s).</p>`
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
        0: fmtPassif(`Passif :`, `Lors de l'utilisation de la compétence **Éclat lunaire dans la nuit**, l'effet [Pleine lune] est appliqué aux cibles sur la lune.
Lorsque la dernière attaque d'**Éclat lunaire dans la nuit** touche sa cible, le temps ralentit pendant 3 seconds et 1 cumul d'[Éclipse lunaire] est appliqué à la cible par cumul de [Pleine lune].`, [
        { title: `[Pleine lune]`, content: `Durée: illimitée (cumulable jusqu'à 1 fois)` },
        { title: `[Éclipse lunaire]`, content: `Augmente les dégâts subis de 10%.
Augmente les dégâts de ténèbres de l'utilisateur de 10%.
Durée: 3 seconde(s)` }
    ], "Ténèbre"),
        1: fmtPassif(`1 étoile :`, `Améliore les effets de [Pleine lune et Éclipse lunaire]`, [
        { title: `[Pleine lune]`, content: `Durée: infinie (cumulable jusqu'à 3 fois).` },
        { title: `[Éclipse lunaire]`, content: `Les dégâts subis par la cible augmentent de 15%.
Les dégâts de ténèbres subis par la cible augmentent de 15%.
Durée: 3 seconde(s)` }
    ], "Ténèbre"),
        2: fmtPassif(`2 étoiles :`, `Vos dégâts de ténèbres augmentent de 10%.`, [], "Ténèbre"),
        3: fmtPassif(`3 étoiles :`, `Lorsque la compétence **Foulée de l'ombre** touche sa cible, elle lui applique 1 instance d'[Éclipse lunaire] par instance de [Pleine lune].`, [], "Ténèbre"),
        4: fmtPassif(`4 étoiles :`, `Réduit le temps de rechargement de la compétence **Éclat lunaire dans la nuit** de 20%.`, [], "Ténèbre"),
        5: fmtPassif(`5 étoiles :`, `Les dégâts de l'utilisateur et des membres de son équipe augmentent de 15% lorsque l'effet de ralentissement du temps est actif.`, [], "Ténèbre")
    },
    summaryData: {
        0: `<h3>Passif : Lune Noire</h3><p>Éclat lunaire = <span class="buff">[Pleine lune]</span> (1 stack max).<br>Touche finale = Ralenti (3s) + <span class="buff">[Éclipse lunaire]</span>.<br>[Éclipse] : Dégâts subis/Ténèbres <span class="stat-boost">+10%</span> (3s).</p>`,
        1: `<h3>1 étoile</h3><p>Max [Pleine lune] passe à 3.<br>[Éclipse] améliorée : Dégâts subis/Ténèbres <span class="stat-boost">+15%</span>.</p>`,
        2: `<h3>2 étoiles</h3><p>Dégâts Ténèbres <span class="stat-boost">+10%</span>.<br></p>`,
        3: `<h3>3 étoiles</h3><p>Foulée de l'ombre déclenche [Éclipse lunaire] selon stacks [Pleine lune].<br></p>`,
        4: `<h3>4 étoiles</h3><p>CD Éclat lunaire dans la nuit <span class="stat-boost">-20%</span>.<br></p>`,
        5: `<h3>5 étoiles</h3><p>Sous Ralenti : Dégâts Équipe <span class="stat-boost">+15%</span>.<br></p>`
    }
};