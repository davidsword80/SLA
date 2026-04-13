// Initialise l'objet global s'il n'existe pas encore
if (typeof weaponsData === 'undefined') { 
    var weaponsData = {}; 
}

// --- ÉPÉE DU CHEVALIER (R) ---
weaponsData["epee-du-chevalier"] = {
    name: "Épée du chevalier",
    rarity: "R",
    element: "Vent",
    gradient: "linear-gradient(90deg, #32c732, #000)",
    image: "Armes_Joueur_R/vent/epee_du_chevalier/GSWeapon_KnightSword_PortraitBig.png",
    fullData: {
        0: fmtPassif(`Passif :`, `Lors de l'utilisation de la compétence **Épéiste royal : Épée du jugement**, l'effet [Chevalerie] est appliqué.`, [
        { title: `[Chevalerie]`, content: `Augmente la Défense de l'utilisateur de 400 (cumulable jusqu'à 7 fois).
Durée : 15 seconde(s)` }
    ], "Vent"),
        1: fmtPassif(`1 étoile :`, `Augmente l'Attaque de l'utilisateur de 400 lorsque l'effet [Chevalerie] se cumule 3 fois.`, [], "Vent"),
        2: fmtPassif(`2 étoiles :`, `Les dégâts de vent infligés par l'utilisateur augmentent de 6 %.`, [], "Vent"),
        3: fmtPassif(`3 étoiles :`, `Lorsque l'effet [Chevalerie] se cumule 5 fois, l'utilisateur récupère des PV à hauteur de 20 pour chaque ennemi touché par la compétence.
(Temps de rechargement : 0.5 seconde(s))`, [], "Vent"),
        4: fmtPassif(`4 étoiles :`, `Réduit le temps de rechargement de la compétence **Épéiste royal : Épée du jugement** de 10 %.`, [], "Vent"),
        5: fmtPassif(`5 étoiles :`, `Applique l'effet [Purification] toutes les 10 secondes lorsque l'effet [Chevalerie] se cumule 7 fois.
La durée de [Chevalerie] devient illimitée.`, [], "Vent")
    },
    summaryData: {
        0: `<h3>Passif : Chevalerie</h3><p>Compétence = <span class="buff">[Chevalerie]</span>.<br>Défense <span class="stat-boost">+400</span> par pile (max 7).</p>`,
        1: `<h3>1 étoile</h3><p>À 3 piles : Attaque <span class="stat-boost">+400</span>.<br></p>`,
        2: `<h3>2 étoiles</h3><p>Dégâts Vent <span class="stat-boost">+6 %</span>.<br></p>`,
        3: `<h3>3 étoiles</h3><p>À 5 piles : Soin <span class="stat-boost">20 PV</span> par ennemi touché.<br></p>`,
        4: `<h3>4 étoiles</h3><p>CD Épée du jugement <span class="stat-boost">-10 %</span>.<br></p>`,
        5: `<h3>5 étoiles</h3><p>À 7 piles : <span class="buff">[Purification]</span> (10s) + Durée <span class="buff">[Chevalerie]</span> infinie.<br></p>`
    }
};

// --- ÉPÉE DE KIM SANGSHINK (R) ---
weaponsData["epee-de-kim-sangshink"] = {
    name: "Épée de Kim Sangshink",
    rarity: "R",
    element: "Vent",
    gradient: "linear-gradient(90deg, #32c732, #000)",
    image: "Armes_Joueur_R/vent/epee_de_kim_sangshink/GSWeapon_KimSangShik_01_PortraitBig.png",
    fullData: {
        0: fmtPassif(`Passif :`, `Lorsque la compétence **Énergie d'épée à 3 millions de wons** est utilisée, l'effet [Un nouveau départ] s'applique.`, [
        { title: `[Un nouveau départ]`, content: `La Vitesse d'attaque et la Vitesse de l'utilisateur augmentent de 12 %.
Durée : 8 seconde(s)` }
    ], "Vent"),
        1: fmtPassif(`1 étoile :`, `Lorsque les PV de l'utilisateur sont supérieurs à 70 %, applique l'effet [Taux de coup critique augmenté].`, [
        { title: `[Taux de coup critique augmenté]`, content: `Augmente le Taux de coup critique de 8 %.` }
    ], "Vent"),
        2: fmtPassif(`2 étoiles :`, `Vos dégâts de vent augmentent de 6 %.`, [], "Vent"),
        3: fmtPassif(`3 étoiles :`, `Lorsque l'effet [Un nouveau départ] est appliqué, un [Bouclier] équivalent à 50 % de la Défense de l'utilisateur est créé.`, [], "Vent"),
        4: fmtPassif(`4 étoiles :`, `Réduit le temps de rechargement de la compétence **Énergie d'épée à 3 millions de wons** de 10 %.`, [], "Vent"),
        5: fmtPassif(`5 étoiles :`, `Lorsque l'effet [Un nouveau départ] est appliqué, les dégâts des Attaques de base et de noyau augmentent de 50 %.`, [], "Vent")
    },
    summaryData: {
        0: `<h3>Passif : Nouveau Départ</h3><p>Compétence = <span class="buff">[Un nouveau départ]</span>.<br>Vitesse Atk et déplacement <span class="stat-boost">+12 %</span>.</p>`,
        1: `<h3>1 étoile</h3><p>PV > 70 % = Taux de coup critique <span class="stat-boost">+8 %</span>.<br></p>`,
        2: `<h3>2 étoiles</h3><p>Dégâts Vent <span class="stat-boost">+6 %</span>.<br></p>`,
        3: `<h3>3 étoiles</h3><p><span class="buff">[Un nouveau départ]</span> = <span class="buff">[Bouclier]</span> (50 % Défense).<br></p>`,
        4: `<h3>4 étoiles</h3><p>CD Énergie d'épée <span class="stat-boost">-10 %</span>.<br></p>`,
        5: `<h3>5 étoiles</h3><p><span class="buff">[Un nouveau départ]</span> = Dégâts Base/Noyau <span class="stat-boost">+50 %</span>.<br></p>`
    }
};

// --- VENT D'OUEST (SR) ---
weaponsData["vent-d-ouest"] = {
    name: "Vent d'ouest",
    rarity: "SR",
    element: "Vent",
    gradient: "linear-gradient(90deg, #32c732, #000)",
    image: "Armes_Joueur_SR/vent/vent_d_ouest/GSWeapon_Zephyr_PortraitBig.png",
    fullData: {
        0: fmtPassif(`Passif :`, `S'il n'y a aucune cible dans un rayon de 5 m, les dégâts de la compétence **Balle secrète** lancée par l'utilisateur augmentent de 75%.`, [], "Vent"),
        1: fmtPassif(`1 étoile :`, `Modification des effets de la compétence **Balle secrète**.
Il s'agit désormais d'une compétence à effet de charge.
Les dégâts augmentent de 130 % maximum suivant le temps passé à la charger.`, [], "Vent"),
        2: fmtPassif(`2 étoiles :`, `Vos dégâts de vent augmentent de 8 %.`, [], "Vent"),
        3: fmtPassif(`3 étoiles :`, `Lorsque **Balle secrète** touche sa cible, elle applique l'effet [Vent d'ouest].`, [
        { title: `[Vent d'ouest]`, content: `Augmente les dégâts de la compétence **Balle secrète** de 30% (cumulable jusqu'à 5 fois).
Si la compétence **Balle secrète** manque sa cible, tous les cumuls sont annulés.
Durée: 30 seconde(s) (Temps de rechargement: 10 seconde(s))` }
    ], "Vent"),
        4: fmtPassif(`4 étoiles :`, `Le temps de rechargement de **Balle secrète** diminue de 15%.`, [], "Vent"),
        5: fmtPassif(`5 étoiles :`, `Lorsque **Balle secrète** inflige un Coup critique, le temps de rechargement diminue de 9 seconde(s) (Temps de rechargement: 10 seconde(s)).`, [], "Vent")
    },
    summaryData: {
        0: `<h3>Passif : Tireur d'Élite</h3><p>Si aucune cible < 5m : Dégâts Balle secrète <span class="stat-boost">+75%</span>.<br></p>`,
        1: `<h3>1 étoile</h3><p>Balle secrète devient Chargée (Max Dégâts <span class="stat-boost">+130%</span>).<br></p>`,
        2: `<h3>2 étoiles</h3><p>Dégâts Vent <span class="stat-boost">+8%</span>.<br></p>`,
        3: `<h3>3 étoiles</h3><p>Touche = <span class="buff">[Vent d'ouest]</span> (Dégâts Balle <span class="stat-boost">+30%</span>, max 5).<br>Manqué = Perte cumuls.</p>`,
        4: `<h3>4 étoiles</h3><p>CD Balle secrète <span class="stat-boost">-15%</span>.<br></p>`,
        5: `<h3>5 étoiles</h3><p>Critique Balle secrète : CD -9s (CD effet 10s).<br></p>`
    }
};

// --- SURIN DE BARUKA (SR) ---
weaponsData["surine-de-baruka"] = {
    name: "Surine de baruka",
    rarity: "SR",
    element: "Vent",
    gradient: "linear-gradient(90deg, #32c732, #000)",
    image: "Armes_Joueur_SR/vent/surin_de_baruka/GSWeapon_Baruka_01_PortraitBig.png",
    fullData: {
        0: fmtPassif(`Passif :`, `Lors de l'utilisation de la compétence **Tueur de marcheurs blancs**, l'utilisateur applique l'effet [Vivacité].`, [
        { title: `[Vivacité]`, content: `Augmente les dégâts des attaques dans le dos de 30%.
Durée: 8 seconde(s)` }
    ], "Vent"),
        1: fmtPassif(`1 étoile :`, `Modification des effets de **Tueur de marcheurs blancs**:
Lorsque cette compétence touche sa cible, l'utilisateur se téléporte derrière elle.`, [], "Vent"),
        2: fmtPassif(`2 étoiles :`, `Vos dégâts de vent augmentent de 8 %.`, [], "Vent"),
        3: fmtPassif(`3 étoiles :`, `Lorsque l'utilisateur réussit une attaque dans le dos, il applique l'effet [Attaque surprise].`, [
        { title: `[Attaque surprise]`, content: `Augmente le Taux de coup critique de 20%.
Durée: 5 seconde(s)
Temps de rechargement: 5 seconde(s)` }
    ], "Vent"),
        4: fmtPassif(`4 étoiles :`, `Le temps de rechargement de **Tueur de marcheurs blancs** diminue de 15%.`, [], "Vent"),
        5: fmtPassif(`5 étoiles :`, `Fait passer le Taux de coup critique de l'effet **Attaque surprise** à 40%.
Lorsque la compétence **Foulée de l'ombre** est utilisée, elle applique les effets [Vivacité et Attaque surprise].`, [], "Vent")
    },
    summaryData: {
        0: `<h3>Passif : Assassin du Givre</h3><p>Tueur de marcheurs blancs = <span class="buff">[Vivacité]</span>.<br>[Vivacité] : Dégâts attaque dos <span class="stat-boost">+30%</span> (8s).</p>`,
        1: `<h3>1 étoile</h3><p>Tueur de marcheurs blancs : Téléporte derrière la cible.<br></p>`,
        2: `<h3>2 étoiles</h3><p>Dégâts Vent <span class="stat-boost">+8%</span>.<br></p>`,
        3: `<h3>3 étoiles</h3><p>Attaque dos = <span class="buff">[Attaque surprise]</span>.<br>[Attaque surprise] : Crit Rate <span class="stat-boost">+20%</span> (5s, CD 5s).</p>`,
        4: `<h3>4 étoiles</h3><p>CD Tueur de marcheurs blancs <span class="stat-boost">-15%</span>.<br></p>`,
        5: `<h3>5 étoiles</h3><p>[Attaque surprise] améliorée : Crit Rate <span class="stat-boost">+40%</span>.<br>Foulée de l'ombre active [Vivacité] + [Attaque surprise].</p>`
    }
};

// --- MARTEAU DE GOLEM DE ROCHE (SR) ---
weaponsData["marteau-de-golem-de-roche"] = {
    name: "Marteau de golem de roche",
    rarity: "SR",
    element: "Vent",
    gradient: "linear-gradient(90deg, #32c732, #000)",
    image: "Armes_Joueur_SR/vent/marteau_de_golem_de_roche/GSWeapon_StoneGolemHammer_PortraitBig.png",
    fullData: {
        0: fmtPassif(`Passif :`, `Lors de l'utilisation de la compétence **Destruction terrestre**, l'effet [Protection terrestre] est appliqué.`, [
        { title: `[Protection terrestre]`, content: `Crée un [Bouclier] équivalent à 40% de la Défense de l'utilisateur.
Durée: 4 seconde(s)` }
    ], "Vent"),
        1: fmtPassif(`1 étoile :`, `Modification de l'effet [Protection terrestre]
L'effet de [Bouclier] bénéficie d'une augmentation équivalente à 80% de la Défense.
Augmente sa durée à 6 seconde(s).`, [], "Vent"),
        2: fmtPassif(`2 étoiles :`, `Vos dégâts de vent augmentent de 8 %.`, [], "Vent"),
        3: fmtPassif(`3 étoiles :`, `Lorsque l'effet [Protection terrestre] est actif, il applique aussi l'effet [Tempête terrestre].`, [
        { title: `[Tempête terrestre]`, content: `L'utilisateur invoque un rocher qui inflige des dégâts équivalents à 200% de sa Défense dans un rayon de 5 m toutes les secondes.
Durée: 10 seconde(s)` }
    ], "Vent"),
        4: fmtPassif(`4 étoiles :`, `Le temps de rechargement de **Destruction terrestre** diminue de 15%.`, [], "Vent"),
        5: fmtPassif(`5 étoiles :`, `Pendant que l'effet [Bouclier] est actif, l'Attaque augmente de 10% et la Défense de 10%.`, [], "Vent")
    },
    summaryData: {
        0: `<h3>Passif : Gardien de Pierre</h3><p>Destruction terrestre = <span class="buff">[Protection terrestre]</span> (Bouclier <span class="stat-boost">40%</span> Def, 4s).<br></p>`,
        1: `<h3>1 étoile</h3><p>[Protection] améliorée : Bouclier <span class="stat-boost">80%</span> Def, Durée 6s.<br></p>`,
        2: `<h3>2 étoiles</h3><p>Dégâts Vent <span class="stat-boost">+8%</span>.<br></p>`,
        3: `<h3>3 étoiles</h3><p>Sous Protection = <span class="buff">[Tempête terrestre]</span>.<br>[Tempête] : Dégâts zone (<span class="stat-boost">200%</span> Def/s, 10s).</p>`,
        4: `<h3>4 étoiles</h3><p>CD Destruction terrestre <span class="stat-boost">-15%</span>.<br></p>`,
        5: `<h3>5 étoiles</h3><p>Sous Bouclier : Attaque/Défense <span class="stat-boost">+10%</span>.<br></p>`
    }
};

// --- CITROUILLE EFFRAYANTE ---
weaponsData["citrouille-effrayante"] = {
    name: "Citrouille effrayante",
    rarity: "SSR",
    element: "Vent",   
    gradient: "linear-gradient(90deg, #32c732, #000)", // Couleur Vent
    image: "Armes_Joueur_SSR/vent/citrouille_effrayante/GSWeapon_SpookyPumpkin_PortraitBig.png",
    fullData: {
        0: fmtPassif(`Passif :`, `Lors de l'utilisation de **Farce et attaque**, 1 à 10 cumuls de l'effet [Bonbon citrouille] sont appliqués.
Lorsque l'attaque de base Stade 3 de l'arme **Citrouille effrayante** touche sa cible, elle applique 2 cumuls de l'effet [Bonbon citrouille].
Dès lors que 10 cumuls de l'effet [Bonbon citrouille] ont été appliqués, l'effet [Des bonbons ou un sort!] est appliqué.`, [
        { title: `[Bonbon citrouille]`, content: `Augmente les dégâts élémentaires de vent de 1%.
Durée: illimitée (cumulable jusqu'à 10 fois)` },
        { title: `[Des bonbons ou un sort!]`, content: `Supprime les cumuls de l'effet [Bonbon citrouille] et empêche la cible d'en recevoir de nouveaux.
Augmente les dégâts élémentaires de vent de l'utilisateur de 10%.
Augmente les dégâts infligés de 10%.
Durée: 10 seconde(s)` }
    ], "Vent"),
        1: fmtPassif(`1 étoile :`, `Lors de l'utilisation de **Farce et attaque**, l'attaque de noyau a 50% de chances de s'activer.
Lorsque l'attaque de noyau touche sa cible, elle active 2 cumuls pour l'effet [Bonbon citrouille].`, [], "Vent"),
        2: fmtPassif(`2 étoiles :`, `Les dégâts élémentaires de vent de l'utilisateur augmentent de 10%.`, [], "Vent"),
        3: fmtPassif(`3 étoiles :`, `Lors de l'utilisation de **Farce et attaque**, 3 cumuls supplémentaires de l'effet [Bonbon citrouille] sont activés.
L'effet [Des bonbons ou un sort!] est également amélioré.`, [
        { title: `[Des bonbons ou un sort!]`, content: `Supprime les cumuls de l'effet [Bonbon citrouille] et empêche la cible d'en recevoir de nouveaux.
Augmente les dégâts élémentaires de vent de l'utilisateur de 20 %.
Augmente les dégâts infligés de 20%.
Durée: 10 seconde(s)` }
    ], "Vent"),
        4: fmtPassif(`4 étoiles :`, `Le temps de rechargement de **Farce et attaque** diminue de 20%.`, [], "Vent"),
        5: fmtPassif(`5 étoiles :`, `Lors de l'utilisation de **Farce et attaque**, l'attaque de noyau a 100% de chances de s'activer.
Lorsque l'attaque de base Stade 3 de l'arme **Citrouille effrayante** touche sa cible, le temps de rechargement de **Farce et attaque** diminue de 2 seconde(s).
Lorsque l'attaque de noyau de l'arme **Citrouille effrayante** touche sa cible, le temps de rechargement de **Farce et attaque** diminue de 2 seconde(s).`, [], "Vent")
    },
    summaryData: {
        0: `<h3>Passif : Festival de la Citrouille</h3><p>Attaques -> <span class="buff">[Bonbon citrouille]</span> (Dégâts Vent <span class="stat-boost">+1%</span>, max 10).<br>10 Bonbons = <span class="buff">[Des bonbons ou un sort!]</span>.<br>[Sort!] : Dégâts Vent/Infligés <span class="stat-boost">+10%</span> (10s, reset stacks).</p>`,
        1: `<h3>1 étoile</h3><p>Farce et attaque : 50% chance activer Attaque noyau.<br>Attaque noyau : +2 cumuls [Bonbon].<br></p>`,
        2: `<h3>2 étoiles</h3><p>Dégâts Vent <span class="stat-boost">+10%</span>.<br></p>`,
        3: `<h3>3 étoiles</h3><p>Farce et attaque : +3 cumuls [Bonbon].<br>[Sort!] amélioré : Dégâts Vent/Infligés <span class="stat-boost">+20%</span>.<br></p>`,
        4: `<h3>4 étoiles</h3><p>CD Farce et attaque <span class="stat-boost">-20%</span>.<br></p>`,
        5: `<h3>5 étoiles</h3><p>Farce et attaque : 100% chance activer Attaque noyau.<br>Attaque base 3 / Attaque noyau : CD Farce et attaque -2s.<br></p>`
    }
};

// --- DAGUES DU ROI DES DÉMONS ---
weaponsData["dagues-du-roi-des-demons"] = {
    name: "Dagues du roi des démons",
    rarity: "SSR",
    element: "Vent",
    gradient: "linear-gradient(90deg, #32c732, #000)",
    image: "Armes_Joueur_SSR/vent/dagues_du_roi_des_demons/GSWeapon_DemonKingDagger_PortraitBig.png",
    fullData: {
        0: fmtPassif(`Passif :`, `Applique l'effet [Deux en un] lorsque les Dagues du roi des démons sont équipées.
Le Taux de coup critique et les Dégâts de coup critique de **Tonnerre tonitruant** augmentent de 30%.`, [
        { title: `[Deux en un]`, content: `Augmente les dégâts de **Tonnerre tonitruant** proportionnellement à la Force de Sung Jinwoo.
Augmente les dégâts de **Tonnerre tonitruant** de 1% par tranche de 10 points de Force (cumulable jusqu'à 50%).
Durée: illimitée` }
    ], "Vent"),
        1: fmtPassif(`1 étoile :`, `Après l'utilisation de **Tonnerre tonitruant**, il est possible de réutiliser immédiatement **Tonnerre tonitruant** une fois dans une version plus puissante.
Lorsque la compétence **Tonnerre tonitruant** est utilisée, elle applique l'effet [Éclair concentré].`, [
        { title: `[Éclair concentré]`, content: `Un cumul de l'effet [Éclair concentré] s'ajoute toutes les secondes.
Chaque attaque de Sung Jinwoo ajoute un cumul supplémentaire d'[Éclair concentré].
Lorsque le maximum de cumuls est atteint, l'effet [Ruade foudroyante] s'applique et l'effet [Éclair concentré] est supprimé.
Durée: illimitée (cumulable jusqu'à 40 fois)` },
        { title: `[Ruade foudroyante]`, content: `Lorsque la compétence **Tonnerre tonitruant** est utilisée, elle consomme 1 cumul(s) de l'effet [Ruade foudroyante] et augmente les dégâts de compétence de 50%.
Durée: illimitée` }
    ], "Vent"),
        2: fmtPassif(`2 étoiles :`, `Les dégâts de vent infligés par l'utilisateur augmentent de 10%.`, [], "Vent"),
        3: fmtPassif(`3 étoiles :`, `Améliore les effets [Deux en un, Éclair concentré et Ruade foudroyante].`, [
        { title: `[Deux en un]`, content: `Augmente les dégâts de **Tonnerre tonitruant** proportionnellement à la Force de Sung Jinwoo.
Augmente les dégâts de **Tonnerre tonitruant** de 5% par tranche de 10 points de Force (cumulable jusqu'à 150%).
Durée: illimitée` },
        { title: `[Éclair concentré]`, content: `Un effet [Éclair concentré] est ajouté aux cumuls toutes les secondes.
Toutes les attaques de Sung Jinwoo ajoutent un cumul supplémentaire d'[Éclair concentré].
Lorsque le maximum de cumuls est atteint, l'effet [Ruade foudroyante] s'applique et l'effet [Éclair concentré] est supprimé.
Durée: illimitée (cumulable jusqu'à 20 fois)` },
        { title: `[Ruade foudroyante]`, content: `2 cumuls d'effet sont obtenus lors de l'application de [Ruade foudroyante].
Lorsque la compétence **Tonnerre tonitruant** est utilisée, elle consomme 1 cumul(s) de [Ruade foudroyante] et augmente les dégâts de compétence de 150%.
Durée: illimitée` }
    ], "Vent"),
        4: fmtPassif(`4 étoiles :`, `Le temps de rechargement de **Tonnerre tonitruant** diminue de 20%.`, [], "Vent"),
        5: fmtPassif(`5 étoiles :`, `**Tonnerre tonitruant** augmente les dégâts de vent de 30%.
La zone d'effet de **Tonnerre Tonitruant** augmente de 20%.
La distance de charge de **Tonnerre Tonitruant** augmente de 50%.
Les dégâts de **Tonnerre Tonitruant** augmentent de 150%.`, [], "Vent")
    },
    summaryData: {
        0: `<h3>Passif : Roi des Démons</h3><p><span class="buff">[Deux en un]</span> : Boost Dégâts Tonnerre (1% / 10 Force, max 50%).<br>Crit/Crit Dmg Tonnerre <span class="stat-boost">+30%</span>.</p>`,
        1: `<h3>1 étoile</h3><p>Double Tonnerre possible.<br><span class="buff">[Éclair concentré]</span> (Stacks) -> <span class="buff">[Ruade foudroyante]</span>.<br>[Ruade] : Boost dégâts Tonnerre <span class="stat-boost">+50%</span>.</p>`,
        2: `<h3>2 étoiles</h3><p>Dégâts Vent <span class="stat-boost">+10%</span>.<br></p>`,
        3: `<h3>3 étoiles</h3><p>[Deux en un] : Max <span class="stat-boost">150%</span>.<br>[Éclair] : Max stack réduit à 20.<br>[Ruade] : +2 Stacks, Dégâts Tonnerre <span class="stat-boost">+150%</span>.</p>`,
        4: `<h3>4 étoiles</h3><p>CD Tonnerre tonitruant <span class="stat-boost">-20%</span>.<br></p>`,
        5: `<h3>5 étoiles</h3><p>Tonnerre tonitruant amélioré :<br>Dégâts Vent <span class="stat-boost">+30%</span>, Zone <span class="stat-boost">+20%</span>, Charge <span class="stat-boost">+50%</span>, Dégâts <span class="stat-boost">+150%</span>.</p>`
    }
};

// --- GLAIVE DU ROI DES DÉMONS ---
weaponsData["glaive-du-roi-des-demons"] = {
    name: "Glaive du roi des démons",
    rarity: "SSR",
    element: "Vent",
    gradient: "linear-gradient(90deg, #32c732, #000)",
    image: "Armes_Joueur_SSR/vent/glaive_du_roi_des_demons/GSWeapon_DemonKing_01_PortraitBig.png",
    fullData: {
        0: fmtPassif(`Passif :`, `Lors de l'utilisation de la compétence **Foudre**, l'utilisateur applique un [Bouclier] et réalise une [contre-attaque].
Les effets [Étourdissement] et [Foudre tonitruante] s'appliquent en cas de contre-attaque réussie.`, [
        { title: `[Bouclier]`, content: `Crée un [Bouclier] équivalent à 50% des PV max de l'utilisateur.
Durée: 3 seconde(s)` },
        { title: `[étourdi]`, content: `Immobilise la cible.
Durée: 3 seconde(s)` },
        { title: `[Foudre tonitruante]`, content: `Augmente l'Attaque de l'utilisateur de 12%.
Crée un éclair qui inflige toutes les secondes des dégâts équivalents à 200% de l'Attaque de l'utilisateur dans les zones proches toutes les 0,75 secondes.
Durée: 10 seconde(s)` }
    ], "Vent"),
        1: fmtPassif(`1 étoile :`, `Inflige l'effet [Coup de tonnerre] à une même cible toutes les 5 attaques.`, [
        { title: `[Coup de tonnerre]`, content: `Inflige des dégâts équivalents à 100% de l'Attaque.
Temps de rechargement: 0.5 seconde(s)` }
    ], "Vent"),
        2: fmtPassif(`2 étoiles :`, `Vos dégâts de vent augmentent de 10 %.`, [], "Vent"),
        3: fmtPassif(`3 étoiles :`, `Lorsque la compétence **Foudre** est utilisée, l'effet [Foudre tonitruante] s'applique, qu'une contre-attaque soit réussie ou non.
Les dégâts de [Foudre tonitruante] augmentent de 30%.
Les dégâts de vent augmentent de 10% tant que l'effet [Foudre tonitruante] est actif.`, [], "Vent"),
        4: fmtPassif(`4 étoiles :`, `Le temps de rechargement de **Foudre** diminue de 20%.`, [], "Vent"),
        5: fmtPassif(`5 étoiles :`, `L'effet [Coup de tonnerre] est amélioré.
Chaque fois que l'utilisateur touche une même cible 3 fois, l'effet [Coup de tonnerre] est appliqué à la cible.
Lorsque la compétence **Foudre** touche sa cible, les effets [Bénédiction des Flammes blanches] et [Éclair final] sont appliqués.`, [
        { title: `[Coup de tonnerre]`, content: `Inflige des dégâts équivalents à 200 % de l'Attaque de l'utilisateur.
Temps de rechargement: 0.3 seconde(s)` },
        { title: `[Éclair final]`, content: `Un énorme éclair s'abat sur la cible et inflige des dégâts équivalents à 1600% de l'Attaque de l'utilisateur aux ennemis proches.` },
        { title: `[Bénédiction des Flammes blanches]`, content: `Octroie un [Bouclier] équivalent à 10% des PV max de l'utilisateur.
Lorsque l'utilisateur est touché, l'assaillant est [étourdi] pendant 2 seconde(s) (ne s'active qu'une fois par cible).
Durée: 10 seconde(s)` }
    ], "Vent")
    },
    summaryData: {
        0: `<h3>Passif : Gardien de l'Orage</h3><p>Foudre = <span class="buff">[Bouclier]</span> (50% PV, 3s) + Contre-attaque.<br>Contre réussi = <span class="buff">[Étourdi]</span> + <span class="buff">[Foudre tonitruante]</span>.<br>[Foudre] : Attaque <span class="stat-boost">+12%</span> + DOT Éclair (200% Atk/s).</p>`,
        1: `<h3>1 étoile</h3><p>5 attaques = <span class="buff">[Coup de tonnerre]</span>.<br>[Coup] : Dégâts <span class="stat-boost">100%</span> Atk (CD 0.5s).</p>`,
        2: `<h3>2 étoiles</h3><p>Dégâts Vent <span class="stat-boost">+10%</span>.<br></p>`,
        3: `<h3>3 étoiles</h3><p>Foudre active [Foudre tonitruante] sans condition.<br>Dégâts Foudre tonitruante <span class="stat-boost">+30%</span>.<br>Dégâts Vent <span class="stat-boost">+10%</span> sous Foudre.</p>`,
        4: `<h3>4 étoiles</h3><p>CD Foudre <span class="stat-boost">-20%</span>.<br></p>`,
        5: `<h3>5 étoiles</h3><p>3 attaques = [Coup de tonnerre] amélioré (200% Atk, CD 0.3s).<br>Foudre touche = <span class="buff">[Éclair final]</span> (1600% Atk) + <span class="buff">[Bénédiction]</span> (Bouclier + Stun sur coup reçu).</p>`
    }
};

// --- PORTE-TEMPÊTE ---
weaponsData["porte-tempete"] = {
    name: "Porte-tempête",
    rarity: "SSR",
    element: "Vent",
    gradient: "linear-gradient(90deg, #32c732, #000)",
    image: "Armes_Joueur_SSR/vent/porte_tempete/GSWeapon_Stormbringer_PortraitBig.png",
    fullData: {
        0: fmtPassif(`Passif :`, `[Pouvoir scellé] s'active en début de niveau.`, [
        { title: `[Pouvoir scellé]`, content: `Lorsque Jinwoo utilise **Tempête de grêle**, aucun coup critique ne se déclenche, mais ses dégâts augmentent de 120%.
La Précision de Sung Jinwoo diminue de 24%.
L'Attaque et la Précision de Jinwoo augmentent de 0.8% par tranche de 10 point(s) de Force (jusqu'à 24%).
Si la Force de Sung Jinwoo est de 300 ou plus, l'effet devient [Tempête éveillée].` },
        { title: `[Tempête éveillée]`, content: `Lorsque **Tempête de grêle** touche sa cible, le tourbillon créé déclenche un effet qui attire les ennemis.
Lorsque Jinwoo utilise **Tempête de grêle**, il bénéficie de [Super armure] pendant 3 seconde(s).
Lorsque Jinwoo utilise **Tempête de grêle**, aucun coup critique ne se déclenche, mais ses dégâts augmentent de 200%.
Son Attaque augmente de 30%.
Sa Précision augmente de 5%.
La Vitesse d'attaque de Tempête de grêle, de l'attaque de base et de l'attaque de noyau de Porte-tempête augmente significativement.
Durée: illimitée` }
    ], "Vent"),
        1: fmtPassif(`1 étoile :`, `Lorsque **Tempête de grêle** touche sa cible, [Tempête menaçante] s'active.`, [
        { title: `[Tempête menaçante]`, content: `Lorsque la compétence de base de vent de l'utilisateur touche sa cible, elle lui applique l'effet [Frappe tempête].
Durée: 4 seconde(s)` },
        { title: `[Frappe tempête]`, content: `L'utilisateur inflige des dégâts équivalents à 1600% de l'Attaque (temps de rechargement: 0.5 seconde(s)).
Lorsque cet effet s'active, il déclenche [Marque de la tempête] sur la cible.` },
        { title: `[Marque de la tempête]`, content: `Augmente les dégâts subis de 5%.
Augmente les dégâts de vent subis de 5%.
Durée: 10 seconde(s) (cumulable jusqu'à 2 fois)` }
    ], "Vent"),
        2: fmtPassif(`2 étoiles :`, `Les dégâts élémentaires de vent de l'utilisateur augmentent de 10%.`, [], "Vent"),
        3: fmtPassif(`3 étoiles :`, `L'utilisation de **Tempête de grêle** diminue les dégâts subis par l'utilisateur de 50% pendant 3 seconde(s).
Améliore l'effet [Marque de la tempête].`, [
        { title: `[Marque de la tempête] (Amélioré)`, content: `Augmente les dégâts subis de 10%.
Augmente les dégâts de vent subis de 15%.
Durée: 20 seconde(s) (cumulable jusqu'à 2 fois)` }
    ], "Vent"),
        4: fmtPassif(`4 étoiles :`, `Le temps de rechargement de la compétence **Tempête de grêle** diminue de 20%.`, [], "Vent"),
        5: fmtPassif(`5 étoiles :`, `L'effet [Frappe tempête] est amélioré.`, [
        { title: `[Frappe tempête] (Amélioré)`, content: `Inflige des dégâts équivalents à 3200% de l'Attaque de l'utilisateur (temps de rechargement: 0.5 seconde(s)).
Lorsque cet effet s'active, il déclenche [Marque de la tempête] sur la cible.
Lorsque cet effet s'active, Jinwoo récupère 25 PM.` },
        { title: `[Marque de la tempête]`, content: `Augmente les dégâts subis de 10%.
Augmente les dégâts de vent subis de 15%.
Durée: 20 seconde(s) (cumulable jusqu'à 2 fois)` }
    ], "Vent")
    },
    summaryData: {
        0: `<h3>Passif : Force Brute</h3><p>Tempête de grêle : Dégâts <span class="stat-boost">+120%</span> (ou <span class="stat-boost">+200%</span> si Force > 300).<br>Pas de critique possible, mais bonus massifs d'Attaque/Précision basés sur la Force.</p>`,
        1: `<h3>1 étoile : Frappe Tempête</h3><p>Compétences Vent -> Frappe extra (<span class="stat-boost">1600%</span> Atk) + Debuff (<span class="stat-boost">+5%</span> dégâts subis).</p>`,
        2: `<h3>2 étoiles : Vent</h3><p>Dégâts Vent <span class="stat-boost">+10%</span>.</p>`,
        3: `<h3>3 étoiles : Protection & Marque</h3><p>Réduction dégâts <span class="stat-boost">50%</span> après Tempête.<br>Debuff Marque amélioré (<span class="stat-boost">+10%</span> subis, <span class="stat-boost">+15%</span> vent).</p>`,
        4: `<h3>4 étoiles : Rapidité</h3><p>CD Tempête de grêle <span class="stat-boost">-20%</span>.</p>`,
        5: `<h3>5 étoiles : Éveil PM</h3><p>Dégâts Frappe doublés (<span class="stat-boost">3200%</span>).<br>Récupère <span class="stat-boost">25 PM</span> par frappe.</p>`
    }
};

// --- VŒU DE FORES ---
weaponsData["voeu-de-fores"] = {
    name: "Vœu de fores",
    rarity: "SSR",
    element: "Vent",
    gradient: "linear-gradient(90deg, #32c732, #000)",
    image: "Armes_Joueur_SSR/vent/voeu_de_fores/GSWeapon_ForresWishes_PortraitBig.png",
    fullData: {
        0: fmtPassif(`Passif :`, `Lorsque l'attaque de noyau touche sa cible, l'utilisateur reçoit l'effet [Vœu].`, [
        { title: `[Vœu]`, content: `Augmente les dégâts infligés de 20%.
Lorsque la compétence **Chant de l'arbre du vent** touche sa cible, l'effet [Vœu] est supprimé.
Durée: 20 seconde(s)` }
    ], "Vent"),
        1: fmtPassif(`1 étoile :`, `Lorsque l'utilisateur rejoint un niveau, sa jauge de noyau est chargée à 100%.
Améliore l'effet [Vœu] : augmente les dégâts infligés de 20%. Lorsque **Chant de l'arbre du vent** touche sa cible, l'utilisateur a 100% de chances d'activer son attaque de noyau (CD: 20s).
L'utilisateur reçoit également l'effet [Détachement] lors de l'utilisation de la compétence.`, [
        { title: `[Détachement]`, content: `Lorsque l'attaque de noyau touche sa cible, le temps de rechargement de **Chant de l'arbre du vent** est réinitialisé (CD: 20s).
L'effet est supprimé après activation. Durée: 20 seconde(s)` }
    ], "Vent"),
        2: fmtPassif(`2 étoiles :`, `Les dégâts élémentaires de vent de l'utilisateur augmentent de 10%.`, [], "Vent"),
        3: fmtPassif(`3 étoiles :`, `L'effet [Vœu] est amélioré : augmente les dégâts infligés de 40%.
L'attaque de noyau inflige des dégâts supplémentaires équivalents à 500% de l'Attaque à la première cible.
Lorsque **Chant de l'arbre du vent** touche sa cible, l'effet [Dispersion racinaire] s'active (dégâts zone 100% Atk) et applique [Poison].`, [
        { title: `[Empoisonnement]`, content: `Inflige des dégâts équivalents à 50% de l'Attaque toutes les 3s.
Diminue le Taux de récupération de la cible de 70%. Durée: 30s` }
    ], "Vent"),
        4: fmtPassif(`4 étoiles :`, `Le temps de rechargement de **Chant de l'arbre du vent** diminue de 20%.`, [], "Vent"),
        5: fmtPassif(`5 étoiles :`, `Les dégâts de **Chant de l'arbre du vent** augmentent de 50%.
Les dégâts de [Dispersion racinaire] augmentent de 150%.`, [], "Vent")
    },
    summaryData: {
        0: `<h3>Passif : Vœu</h3><p>Noyau -> <span class="buff">[Vœu]</span> : Dégâts <span class="stat-boost">+20%</span> (20s). Consommé par Chant de l'arbre.</p>`,
        1: `<h3>1 étoile : Détachement</h3><p>Début niveau : Noyau <span class="stat-boost">100%</span>. Chant de l'arbre -> Active Noyau et réinitialise CD (CD 20s).</p>`,
        2: `<h3>2 étoiles : Vent</h3><p>Dégâts Vent <span class="stat-boost">+10%</span>.</p>`,
        3: `<h3>3 étoiles : Floraison</h3><p><span class="buff">[Vœu]</span> <span class="stat-boost">+40%</span> dégâts. Noyau <span class="stat-boost">+500%</span> Atk. Chant de l'arbre : Dégâts zone et <span class="buff">[Poison]</span>.</p>`,
        4: `<h3>4 étoiles : Rapidité</h3><p>CD Chant de l'arbre <span class="stat-boost">-20%</span>.</p>`,
        5: `<h3>5 étoiles : Puissance</h3><p>Dégâts Chant de l'arbre <span class="stat-boost">+50%</span>. Dégâts zone <span class="stat-boost">+150%</span>.</p>`
    }
};