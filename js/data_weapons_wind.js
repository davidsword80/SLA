// Initialise l'objet global s'il n'existe pas encore
if (typeof weaponsData === 'undefined') { 
    var weaponsData = {}; 
}

// --- ÉPÉE DU CHEVALIER (R) ---
weaponsData["epee-du-chevalier"] = {
    name: "Épée du chevalier",
    rarity: "R",
    element: "Vent",
    gradient: "linear-gradient(90deg, #1e8449, #000)",
    image: "Armes_Joueur_R/vent/epee_du_chevalier/GSWeapon_KnightSword_PortraitBig.png",
    fullData: {
        0: `<h3>Passif :</h3><p>Lors de l'utilisation de la compétence <strong>Épéiste royal : Épée du jugement</strong>, l'effet <span class="buff">[Chevalerie]</span> est appliqué.<br></p><div class="detail-box"><h4><span class="buff">[Chevalerie]</span></h4><p>Augmente la Défense de l'utilisateur de <span class="stat-boost">400</span> (cumulable jusqu'à 7 fois).<br>Durée : 15 seconde(s)</p></div>`,
        1: `<h3>1 étoile :</h3><p>Augmente l'Attaque de l'utilisateur de <span class="stat-boost">400</span> lorsque l'effet <span class="buff">[Chevalerie]</span> se cumule 3 fois.<br></p>`,
        2: `<h3>2 étoiles :</h3><p>Les dégâts de vent infligés par l'utilisateur augmentent de <span class="stat-boost">6 %</span>.<br></p>`,
        3: `<h3>3 étoiles :</h3><p>Lorsque l'effet <span class="buff">[Chevalerie]</span> se cumule 5 fois, l'utilisateur récupère des PV à hauteur de <span class="stat-boost">20</span> pour chaque ennemi touché par la compétence.<br>(Temps de rechargement : 0.5 seconde(s))</p>`,
        4: `<h3>4 étoiles :</h3><p>Réduit le temps de rechargement de la compétence <strong>Épéiste royal : Épée du jugement</strong> de <span class="stat-boost">10 %</span>.<br></p>`,
        5: `<h3>5 étoiles :</h3><p>Applique l'effet <span class="buff">[Purification]</span> toutes les 10 secondes lorsque l'effet <span class="buff">[Chevalerie]</span> se cumule 7 fois.<br>La durée de <span class="buff">[Chevalerie]</span> devient illimitée.</p>`
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
    gradient: "linear-gradient(90deg, #1e8449, #000)",
    image: "Armes_Joueur_R/vent/epee_de_kim_sangshink/GSWeapon_KimSangShik_01_PortraitBig.png",
    fullData: {
        0: `<h3>Passif :</h3><p>Lorsque la compétence <strong>Énergie d'épée à 3 millions de wons</strong> est utilisée, l'effet <span class="buff">[Un nouveau départ]</span> s'applique.<br></p><div class="detail-box"><h4><span class="buff">[Un nouveau départ]</span></h4><p>La Vitesse d'attaque et la Vitesse de l'utilisateur augmentent de <span class="stat-boost">12 %</span>.<br>Durée : 8 seconde(s)</p></div>`,
        1: `<h3>1 étoile :</h3><p>Lorsque les PV de l'utilisateur sont supérieurs à <span class="stat-boost">70 %</span>, applique l'effet <span class="buff">[Taux de coup critique augmenté]</span>.<br></p><div class="detail-box"><h4><span class="buff">[Taux de coup critique augmenté]</span></h4><p>Augmente le Taux de coup critique de <span class="stat-boost">8 %</span>.</p></div>`,
        2: `<h3>2 étoiles :</h3><p>Vos dégâts de vent augmentent de <span class="stat-boost">6 %</span>.<br></p>`,
        3: `<h3>3 étoiles :</h3><p>Lorsque l'effet <span class="buff">[Un nouveau départ]</span> est appliqué, un <span class="buff">[Bouclier]</span> équivalent à <span class="stat-boost">50 %</span> de la Défense de l'utilisateur est créé.<br></p>`,
        4: `<h3>4 étoiles :</h3><p>Réduit le temps de rechargement de la compétence <strong>Énergie d'épée à 3 millions de wons</strong> de <span class="stat-boost">10 %</span>.<br></p>`,
        5: `<h3>5 étoiles :</h3><p>Lorsque l'effet <span class="buff">[Un nouveau départ]</span> est appliqué, les dégâts des Attaques de base et de noyau augmentent de <span class="stat-boost">50 %</span>.<br></p>`
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
    gradient: "linear-gradient(90deg, #1e8449, #000)",
    image: "Armes_Joueur_SR/vent/vent_d_ouest/GSWeapon_Zephyr_PortraitBig.png",
    fullData: {
        0: `<h3>Passif :</h3><p>S'il n'y a aucune cible dans un rayon de 5 m, les dégâts de la compétence <strong>Balle secrète</strong> lancée par l'utilisateur augmentent de <span class="stat-boost">75%</span>.<br></p>`,
        1: `<h3>1 étoile :</h3><p>Modification des effets de la compétence <strong>Balle secrète</strong>.<br>Il s'agit désormais d'une compétence à effet de charge.<br>Les dégâts augmentent de <span class="stat-boost">130 %</span> maximum suivant le temps passé à la charger.<br></p>`,
        2: `<h3>2 étoiles :</h3><p>Vos dégâts de vent augmentent de <span class="stat-boost">8 %</span>.<br></p>`,
        3: `<h3>3 étoiles :</h3><p>Lorsque <strong>Balle secrète</strong> touche sa cible, elle applique l'effet <span class="buff">[Vent d'ouest]</span>.<br></p><div class="detail-box"><h4><span class="buff">[Vent d'ouest]</span></h4><p>Augmente les dégâts de la compétence <strong>Balle secrète</strong> de <span class="stat-boost">30%</span> (cumulable jusqu'à 5 fois).<br>Si la compétence <strong>Balle secrète</strong> manque sa cible, tous les cumuls sont annulés.<br>Durée: 30 seconde(s) (Temps de rechargement: 10 seconde(s))</p></div>`,
        4: `<h3>4 étoiles :</h3><p>Le temps de rechargement de <strong>Balle secrète</strong> diminue de <span class="stat-boost">15%</span>.<br></p>`,
        5: `<h3>5 étoiles :</h3><p>Lorsque <strong>Balle secrète</strong> inflige un Coup critique, le temps de rechargement diminue de 9 seconde(s) (Temps de rechargement: 10 seconde(s)).<br></p>`
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
    gradient: "linear-gradient(90deg, #1e8449, #000)",
    image: "Armes_Joueur_SR/vent/surin_de_baruka/GSWeapon_Baruka_01_PortraitBig.png",
    fullData: {
        0: `<h3>Passif :</h3><p>Lors de l'utilisation de la compétence <strong>Tueur de marcheurs blancs</strong>, l'utilisateur applique l'effet <span class="buff">[Vivacité]</span>.<br></p><div class="detail-box"><h4><span class="buff">[Vivacité]</span></h4><p>Augmente les dégâts des attaques dans le dos de <span class="stat-boost">30%</span>.<br>Durée: 8 seconde(s)</p></div>`,
        1: `<h3>1 étoile :</h3><p>Modification des effets de <strong>Tueur de marcheurs blancs</strong>:<br>Lorsque cette compétence touche sa cible, l'utilisateur se téléporte derrière elle.<br></p>`,
        2: `<h3>2 étoiles :</h3><p>Vos dégâts de vent augmentent de <span class="stat-boost">8 %</span>.<br></p>`,
        3: `<h3>3 étoiles :</h3><p>Lorsque l'utilisateur réussit une attaque dans le dos, il applique l'effet <span class="buff">[Attaque surprise]</span>.<br></p><div class="detail-box"><h4><span class="buff">[Attaque surprise]</span></h4><p>Augmente le Taux de coup critique de <span class="stat-boost">20%</span>.<br>Durée: 5 seconde(s)<br>Temps de rechargement: 5 seconde(s)</p></div>`,
        4: `<h3>4 étoiles :</h3><p>Le temps de rechargement de <strong>Tueur de marcheurs blancs</strong> diminue de <span class="stat-boost">15%</span>.<br></p>`,
        5: `<h3>5 étoiles :</h3><p>Fait passer le Taux de coup critique de l'effet <strong>Attaque surprise</strong> à <span class="stat-boost">40%</span>.<br>Lorsque la compétence <strong>Foulée de l'ombre</strong> est utilisée, elle applique les effets <span class="buff">[Vivacité et Attaque surprise]</span>.<br></p>`
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
    gradient: "linear-gradient(90deg, #1e8449, #000)",
    image: "Armes_Joueur_SR/vent/marteau_de_golem_de_roche/GSWeapon_StoneGolemHammer_PortraitBig.png",
    fullData: {
        0: `<h3>Passif :</h3><p>Lors de l'utilisation de la compétence <strong>Destruction terrestre</strong>, l'effet <span class="buff">[Protection terrestre]</span> est appliqué.<br></p><div class="detail-box"><h4><span class="buff">[Protection terrestre]</span></h4><p>Crée un <span class="buff">[Bouclier]</span> équivalent à <span class="stat-boost">40%</span> de la Défense de l'utilisateur.<br>Durée: 4 seconde(s)</p></div>`,
        1: `<h3>1 étoile :</h3><p>Modification de l'effet <span class="buff">[Protection terrestre]</span><br>L'effet de <span class="buff">[Bouclier]</span> bénéficie d'une augmentation équivalente à <span class="stat-boost">80%</span> de la Défense.<br>Augmente sa durée à 6 seconde(s).<br></p>`,
        2: `<h3>2 étoiles :</h3><p>Vos dégâts de vent augmentent de <span class="stat-boost">8 %</span>.<br></p>`,
        3: `<h3>3 étoiles :</h3><p>Lorsque l'effet <span class="buff">[Protection terrestre]</span> est actif, il applique aussi l'effet <span class="buff">[Tempête terrestre]</span>.<br></p><div class="detail-box"><h4><span class="buff">[Tempête terrestre]</span></h4><p>L'utilisateur invoque un rocher qui inflige des dégâts équivalents à <span class="stat-boost">200%</span> de sa Défense dans un rayon de 5 m toutes les secondes.<br>Durée: 10 seconde(s)</p></div>`,
        4: `<h3>4 étoiles :</h3><p>Le temps de rechargement de <strong>Destruction terrestre</strong> diminue de <span class="stat-boost">15%</span>.<br></p>`,
        5: `<h3>5 étoiles :</h3><p>Pendant que l'effet <span class="buff">[Bouclier]</span> est actif, l'Attaque augmente de <span class="stat-boost">10%</span> et la Défense de <span class="stat-boost">10%</span>.<br></p>`
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
    gradient: "linear-gradient(90deg, #1e8449, #000)", // Couleur Vent
    image: "Armes_Joueur_SSR/vent/citrouille_effrayante/GSWeapon_SpookyPumpkin_PortraitBig.png",
    fullData: {
        0: `<h3>Passif :</h3><p>Lors de l'utilisation de <strong>Farce et attaque</strong>, 1 à 10 cumuls de l'effet <span class="buff">[Bonbon citrouille]</span> sont appliqués.<br>Lorsque l'attaque de base Stade 3 de l'arme <strong>Citrouille effrayante</strong> touche sa cible, elle applique 2 cumuls de l'effet <span class="buff">[Bonbon citrouille]</span>.<br>Dès lors que 10 cumuls de l'effet <span class="buff">[Bonbon citrouille]</span> ont été appliqués, l'effet <span class="buff">[Des bonbons ou un sort!]</span> est appliqué.<br></p><div class="detail-box"><h4><span class="buff">[Bonbon citrouille]</span></h4><p>Augmente les dégâts élémentaires de vent de <span class="stat-boost">1%</span>.<br>Durée: illimitée (cumulable jusqu'à 10 fois)</p></div><div class="detail-box"><h4><span class="buff">[Des bonbons ou un sort!]</span></h4><p>Supprime les cumuls de l'effet <span class="buff">[Bonbon citrouille]</span> et empêche la cible d'en recevoir de nouveaux.<br>Augmente les dégâts élémentaires de vent de l'utilisateur de <span class="stat-boost">10%</span>.<br>Augmente les dégâts infligés de <span class="stat-boost">10%</span>.<br>Durée: 10 seconde(s)</p></div>`,
        1: `<h3>1 étoile :</h3><p>Lors de l'utilisation de <strong>Farce et attaque</strong>, l'attaque de noyau a <span class="stat-boost">50%</span> de chances de s'activer.<br>Lorsque l'attaque de noyau touche sa cible, elle active 2 cumuls pour l'effet <span class="buff">[Bonbon citrouille]</span>.<br></p>`,
        2: `<h3>2 étoiles :</h3><p>Les dégâts élémentaires de vent de l'utilisateur augmentent de <span class="stat-boost">10%</span>.<br></p>`,
        3: `<h3>3 étoiles :</h3><p>Lors de l'utilisation de <strong>Farce et attaque</strong>, 3 cumuls supplémentaires de l'effet <span class="buff">[Bonbon citrouille]</span> sont activés.<br>L'effet <span class="buff">[Des bonbons ou un sort!]</span> est également amélioré.<br></p><div class="detail-box"><h4><span class="buff">[Des bonbons ou un sort!]</span></h4><p>Supprime les cumuls de l'effet <span class="buff">[Bonbon citrouille]</span> et empêche la cible d'en recevoir de nouveaux.<br>Augmente les dégâts élémentaires de vent de l'utilisateur de <span class="stat-boost">20 %</span>.<br>Augmente les dégâts infligés de <span class="stat-boost">20%</span>.<br>Durée: 10 seconde(s)</p></div>`,
        4: `<h3>4 étoiles :</h3><p>Le temps de rechargement de <strong>Farce et attaque</strong> diminue de <span class="stat-boost">20%</span>.<br></p>`,
        5: `<h3>5 étoiles :</h3><p>Lors de l'utilisation de <strong>Farce et attaque</strong>, l'attaque de noyau a <span class="stat-boost">100%</span> de chances de s'activer.<br>Lorsque l'attaque de base Stade 3 de l'arme <strong>Citrouille effrayante</strong> touche sa cible, le temps de rechargement de <strong>Farce et attaque</strong> diminue de 2 seconde(s).<br>Lorsque l'attaque de noyau de l'arme <strong>Citrouille effrayante</strong> touche sa cible, le temps de rechargement de <strong>Farce et attaque</strong> diminue de 2 seconde(s).<br></p>`
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
    gradient: "linear-gradient(90deg, #1e8449, #000)",
    image: "Armes_Joueur_SSR/vent/dagues_du_roi_des_demons/GSWeapon_DemonKingDagger_PortraitBig.png",
    fullData: {
        0: `<h3>Passif :</h3><p>Applique l'effet <span class="buff">[Deux en un]</span> lorsque les Dagues du roi des démons sont équipées.<br>Le Taux de coup critique et les Dégâts de coup critique de <strong>Tonnerre tonitruant</strong> augmentent de <span class="stat-boost">30%</span>.<br></p><div class="detail-box"><h4><span class="buff">[Deux en un]</span></h4><p>Augmente les dégâts de <strong>Tonnerre tonitruant</strong> proportionnellement à la Force de Sung Jinwoo.<br>Augmente les dégâts de <strong>Tonnerre tonitruant</strong> de <span class="stat-boost">1%</span> par tranche de 10 points de Force (cumulable jusqu'à 50%).<br>Durée: illimitée</p></div>`,
        1: `<h3>1 étoile :</h3><p>Après l'utilisation de <strong>Tonnerre tonitruant</strong>, il est possible de réutiliser immédiatement <strong>Tonnerre tonitruant</strong> une fois dans une version plus puissante.<br>Lorsque la compétence <strong>Tonnerre tonitruant</strong> est utilisée, elle applique l'effet <span class="buff">[Éclair concentré]</span>.<br></p><div class="detail-box"><h4><span class="buff">[Éclair concentré]</span></h4><p>Un cumul de l'effet <span class="buff">[Éclair concentré]</span> s'ajoute toutes les secondes.<br>Chaque attaque de Sung Jinwoo ajoute un cumul supplémentaire d'<span class="buff">[Éclair concentré]</span>.<br>Lorsque le maximum de cumuls est atteint, l'effet <span class="buff">[Ruade foudroyante]</span> s'applique et l'effet <span class="buff">[Éclair concentré]</span> est supprimé.<br>Durée: illimitée (cumulable jusqu'à 40 fois)</p></div><div class="detail-box"><h4><span class="buff">[Ruade foudroyante]</span></h4><p>Lorsque la compétence <strong>Tonnerre tonitruant</strong> est utilisée, elle consomme 1 cumul(s) de l'effet <span class="buff">[Ruade foudroyante]</span> et augmente les dégâts de compétence de <span class="stat-boost">50%</span>.<br>Durée: illimitée</p></div>`,
        2: `<h3>2 étoiles :</h3><p>Les dégâts de vent infligés par l'utilisateur augmentent de <span class="stat-boost">10%</span>.<br></p>`,
        3: `<h3>3 étoiles :</h3><p>Améliore les effets <span class="buff">[Deux en un, Éclair concentré et Ruade foudroyante]</span>.<br></p><div class="detail-box"><h4><span class="buff">[Deux en un]</span></h4><p>Augmente les dégâts de <strong>Tonnerre tonitruant</strong> proportionnellement à la Force de Sung Jinwoo.<br>Augmente les dégâts de <strong>Tonnerre tonitruant</strong> de <span class="stat-boost">5%</span> par tranche de 10 points de Force (cumulable jusqu'à 150%).<br>Durée: illimitée</p></div><div class="detail-box"><h4><span class="buff">[Éclair concentré]</span></h4><p>Un effet <span class="buff">[Éclair concentré]</span> est ajouté aux cumuls toutes les secondes.<br>Toutes les attaques de Sung Jinwoo ajoutent un cumul supplémentaire d'<span class="buff">[Éclair concentré]</span>.<br>Lorsque le maximum de cumuls est atteint, l'effet <span class="buff">[Ruade foudroyante]</span> s'applique et l'effet <span class="buff">[Éclair concentré]</span> est supprimé.<br>Durée: illimitée (cumulable jusqu'à 20 fois)</p></div><div class="detail-box"><h4><span class="buff">[Ruade foudroyante]</span></h4><p>2 cumuls d'effet sont obtenus lors de l'application de <span class="buff">[Ruade foudroyante]</span>.<br>Lorsque la compétence <strong>Tonnerre tonitruant</strong> est utilisée, elle consomme 1 cumul(s) de <span class="buff">[Ruade foudroyante]</span> et augmente les dégâts de compétence de <span class="stat-boost">150%</span>.<br>Durée: illimitée</p></div>`,
        4: `<h3>4 étoiles :</h3><p>Le temps de rechargement de <strong>Tonnerre tonitruant</strong> diminue de <span class="stat-boost">20%</span>.<br></p>`,
        5: `<h3>5 étoiles :</h3><p><strong>Tonnerre tonitruant</strong> augmente les dégâts de vent de <span class="stat-boost">30%</span>.<br>La zone d'effet de <strong>Tonnerre Tonitruant</strong> augmente de <span class="stat-boost">20%</span>.<br>La distance de charge de <strong>Tonnerre Tonitruant</strong> augmente de <span class="stat-boost">50%</span>.<br>Les dégâts de <strong>Tonnerre Tonitruant</strong> augmentent de <span class="stat-boost">150%</span>.<br></p>`
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
    gradient: "linear-gradient(90deg, #1e8449, #000)",
    image: "Armes_Joueur_SSR/vent/glaive_du_roi_des_demons/GSWeapon_DemonKing_01_PortraitBig.png",
    fullData: {
        0: `<h3>Passif :</h3><p>Lors de l'utilisation de la compétence <strong>Foudre</strong>, l'utilisateur applique un <span class="buff">[Bouclier]</span> et réalise une <span class="buff">[contre-attaque]</span>.<br>Les effets <span class="buff">[Étourdissement]</span> et <span class="buff">[Foudre tonitruante]</span> s'appliquent en cas de contre-attaque réussie.<br></p><div class="detail-box"><h4><span class="buff">[Bouclier]</span></h4><p>Crée un <span class="buff">[Bouclier]</span> équivalent à <span class="stat-boost">50%</span> des PV max de l'utilisateur.<br>Durée: 3 seconde(s)</p></div><div class="detail-box"><h4><span class="buff">[étourdi]</span></h4><p>Immobilise la cible.<br>Durée: 3 seconde(s)</p></div><div class="detail-box"><h4><span class="buff">[Foudre tonitruante]</span></h4><p>Augmente l'Attaque de l'utilisateur de <span class="stat-boost">12%</span>.<br>Crée un éclair qui inflige toutes les secondes des dégâts équivalents à <span class="stat-boost">200%</span> de l'Attaque de l'utilisateur dans les zones proches toutes les 0,75 secondes.<br>Durée: 10 seconde(s)</p></div>`,
        1: `<h3>1 étoile :</h3><p>Inflige l'effet <span class="buff">[Coup de tonnerre]</span> à une même cible toutes les 5 attaques.<br></p><div class="detail-box"><h4><span class="buff">[Coup de tonnerre]</span></h4><p>Inflige des dégâts équivalents à <span class="stat-boost">100%</span> de l'Attaque.<br>Temps de rechargement: 0.5 seconde(s)</p></div>`,
        2: `<h3>2 étoiles :</h3><p>Vos dégâts de vent augmentent de <span class="stat-boost">10 %</span>.<br></p>`,
        3: `<h3>3 étoiles :</h3><p>Lorsque la compétence <strong>Foudre</strong> est utilisée, l'effet <span class="buff">[Foudre tonitruante]</span> s'applique, qu'une contre-attaque soit réussie ou non.<br>Les dégâts de <span class="buff">[Foudre tonitruante]</span> augmentent de <span class="stat-boost">30%</span>.<br>Les dégâts de vent augmentent de <span class="stat-boost">10%</span> tant que l'effet <span class="buff">[Foudre tonitruante]</span> est actif.<br></p>`,
        4: `<h3>4 étoiles :</h3><p>Le temps de rechargement de <strong>Foudre</strong> diminue de <span class="stat-boost">20%</span>.<br></p>`,
        5: `<h3>5 étoiles :</h3><p>L'effet <span class="buff">[Coup de tonnerre]</span> est amélioré.<br>Chaque fois que l'utilisateur touche une même cible 3 fois, l'effet <span class="buff">[Coup de tonnerre]</span> est appliqué à la cible.<br>Lorsque la compétence <strong>Foudre</strong> touche sa cible, les effets <span class="buff">[Bénédiction des Flammes blanches]</span> et <span class="buff">[Éclair final]</span> sont appliqués.<br></p><div class="detail-box"><h4><span class="buff">[Coup de tonnerre]</span></h4><p>Inflige des dégâts équivalents à <span class="stat-boost">200 %</span> de l'Attaque de l'utilisateur.<br>Temps de rechargement: 0.3 seconde(s)</p></div><div class="detail-box"><h4><span class="buff">[Éclair final]</span></h4><p>Un énorme éclair s'abat sur la cible et inflige des dégâts équivalents à <span class="stat-boost">1600%</span> de l'Attaque de l'utilisateur aux ennemis proches.<br></p></div><div class="detail-box"><h4><span class="buff">[Bénédiction des Flammes blanches]</span></h4><p>Octroie un <span class="buff">[Bouclier]</span> équivalent à <span class="stat-boost">10%</span> des PV max de l'utilisateur.<br>Lorsque l'utilisateur est touché, l'assaillant est <span class="buff">[étourdi]</span> pendant 2 seconde(s) (ne s'active qu'une fois par cible).<br>Durée: 10 seconde(s)</p></div>`
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
    gradient: "linear-gradient(90deg, #1e8449, #000)",
    image: "Armes_Joueur_SSR/vent/porte_tempete/GSWeapon_Stormbringer_PortraitBig.png",
    fullData: {
        0: `<h3>Passif :</h3><p><span class="buff">[Pouvoir scellé]</span> s'active en début de niveau.</p><div class="detail-box"><h4><span class="buff">[Pouvoir scellé]</span></h4><p>Lorsque Jinwoo utilise <strong>Tempête de grêle</strong>, aucun coup critique ne se déclenche, mais ses dégâts augmentent de <span class="stat-boost">120%</span>.<br>La Précision de Sung Jinwoo diminue de <span class="stat-boost">24%</span>.<br>L'Attaque et la Précision de Jinwoo augmentent de <span class="stat-boost">0.8%</span> par tranche de 10 point(s) de Force (jusqu'à <span class="stat-boost">24%</span>).<br>Si la Force de Sung Jinwoo est de 300 ou plus, l'effet devient <span class="buff">[Tempête éveillée]</span>.</p></div><div class="detail-box"><h4><span class="buff">[Tempête éveillée]</span></h4><p>Lorsque <strong>Tempête de grêle</strong> touche sa cible, le tourbillon créé déclenche un effet qui attire les ennemis.<br>Lorsque Jinwoo utilise <strong>Tempête de grêle</strong>, il bénéficie de <span class="buff">[Super armure]</span> pendant 3 seconde(s).<br>Lorsque Jinwoo utilise <strong>Tempête de grêle</strong>, aucun coup critique ne se déclenche, mais ses dégâts augmentent de <span class="stat-boost">200%</span>.<br>Son Attaque augmente de <span class="stat-boost">30%</span>.<br>Sa Précision augmente de <span class="stat-boost">5%</span>.<br>La Vitesse d'attaque de Tempête de grêle, de l'attaque de base et de l'attaque de noyau de Porte-tempête augmente significativement.<br>Durée: illimitée</p></div>`,
        1: `<h3>1 étoile :</h3><p>Lorsque <strong>Tempête de grêle</strong> touche sa cible, <span class="buff">[Tempête menaçante]</span> s'active.</p><div class="detail-box"><h4><span class="buff">[Tempête menaçante]</span></h4><p>Lorsque la compétence de base de vent de l'utilisateur touche sa cible, elle lui applique l'effet <span class="buff">[Frappe tempête]</span>.<br>Durée: 4 seconde(s)</p></div><div class="detail-box"><h4><span class="buff">[Frappe tempête]</span></h4><p>L'utilisateur inflige des dégâts équivalents à <span class="stat-boost">1600%</span> de l'Attaque (temps de rechargement: 0.5 seconde(s)).<br>Lorsque cet effet s'active, il déclenche <span class="buff">[Marque de la tempête]</span> sur la cible.</p></div><div class="detail-box"><h4><span class="buff">[Marque de la tempête]</span></h4><p>Augmente les dégâts subis de <span class="stat-boost">5%</span>.<br>Augmente les dégâts de vent subis de <span class="stat-boost">5%</span>.<br>Durée: 10 seconde(s) (cumulable jusqu'à 2 fois)</p></div>`,
        2: `<h3>2 étoiles :</h3><p>Les dégâts élémentaires de vent de l'utilisateur augmentent de <span class="stat-boost">10%</span>.</p>`,
        3: `<h3>3 étoiles :</h3><p>L'utilisation de <strong>Tempête de grêle</strong> diminue les dégâts subis par l'utilisateur de <span class="stat-boost">50%</span> pendant 3 seconde(s).</p><p>Améliore l'effet <span class="buff">[Marque de la tempête]</span>.</p><div class="detail-box"><h4><span class="buff">[Marque de la tempête]</span> (Amélioré)</h4><p>Augmente les dégâts subis de <span class="stat-boost">10%</span>.<br>Augmente les dégâts de vent subis de <span class="stat-boost">15%</span>.<br>Durée: 20 seconde(s) (cumulable jusqu'à 2 fois)</p></div>`,
        4: `<h3>4 étoiles :</h3><p>Le temps de rechargement de la compétence <strong>Tempête de grêle</strong> diminue de <span class="stat-boost">20%</span>.</p>`,
        5: `<h3>5 étoiles :</h3><p>L'effet <span class="buff">[Frappe tempête]</span> est amélioré.</p><div class="detail-box"><h4><span class="buff">[Frappe tempête]</span> (Amélioré)</h4><p>Inflige des dégâts équivalents à <span class="stat-boost">3200%</span> de l'Attaque de l'utilisateur (temps de rechargement: 0.5 seconde(s)).<br>Lorsque cet effet s'active, il déclenche <span class="buff">[Marque de la tempête]</span> sur la cible.<br>Lorsque cet effet s'active, Jinwoo récupère <span class="stat-boost">25 PM</span>.</p></div><div class="detail-box"><h4><span class="buff">[Marque de la tempête]</span></h4><p>Augmente les dégâts subis de <span class="stat-boost">10%</span>.<br>Augmente les dégâts de vent subis de <span class="stat-boost">15%</span>.<br>Durée: 20 seconde(s) (cumulable jusqu'à 2 fois)</p></div>`
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
    gradient: "linear-gradient(90deg, #1e8449, #000)",
    image: "Armes_Joueur_SSR/vent/voeu_de_fores/GSWeapon_ForresWishes_PortraitBig.png",
    fullData: {
        0: `<h3>Passif :</h3><p>Lorsque l'attaque de noyau touche sa cible, l'utilisateur reçoit l'effet <span class="buff">[Vœu]</span>.</p><div class="detail-box"><h4><span class="buff">[Vœu]</span></h4><p>Augmente les dégâts infligés de <span class="stat-boost">20%</span>.<br>Lorsque la compétence <strong>Chant de l'arbre du vent</strong> touche sa cible, l'effet <span class="buff">[Vœu]</span> est supprimé.<br>Durée: 20 seconde(s)</p></div>`,
        1: `<h3>1 étoile :</h3><p>Lorsque l'utilisateur rejoint un niveau, sa jauge de noyau est chargée à <span class="stat-boost">100%</span>.</p><p>Améliore l'effet <span class="buff">[Vœu]</span> : augmente les dégâts infligés de <span class="stat-boost">20%</span>. Lorsque <strong>Chant de l'arbre du vent</strong> touche sa cible, l'utilisateur a <span class="stat-boost">100%</span> de chances d'activer son attaque de noyau (CD: 20s).</p><p>L'utilisateur reçoit également l'effet <span class="buff">[Détachement]</span> lors de l'utilisation de la compétence.</p><div class="detail-box"><h4><span class="buff">[Détachement]</span></h4><p>Lorsque l'attaque de noyau touche sa cible, le temps de rechargement de <strong>Chant de l'arbre du vent</strong> est réinitialisé (CD: 20s).<br>L'effet est supprimé après activation. Durée: 20 seconde(s)</p></div>`,
        2: `<h3>2 étoiles :</h3><p>Les dégâts élémentaires de vent de l'utilisateur augmentent de <span class="stat-boost">10%</span>.</p>`,
        3: `<h3>3 étoiles :</h3><p>L'effet <span class="buff">[Vœu]</span> est amélioré : augmente les dégâts infligés de <span class="stat-boost">40%</span>.</p><p>L'attaque de noyau inflige des dégâts supplémentaires équivalents à <span class="stat-boost">500%</span> de l'Attaque à la première cible.</p><p>Lorsque <strong>Chant de l'arbre du vent</strong> touche sa cible, l'effet <span class="buff">[Dispersion racinaire]</span> s'active (dégâts zone <span class="stat-boost">100%</span> Atk) et applique <span class="buff">[Poison]</span>.</p><div class="detail-box"><h4><span class="buff">[Empoisonnement]</span></h4><p>Inflige des dégâts équivalents à <span class="stat-boost">50%</span> de l'Attaque toutes les 3s.<br>Diminue le Taux de récupération de la cible de <span class="stat-boost">70%</span>. Durée: 30s</p></div>`,
        4: `<h3>4 étoiles :</h3><p>Le temps de rechargement de <strong>Chant de l'arbre du vent</strong> diminue de <span class="stat-boost">20%</span>.</p>`,
        5: `<h3>5 étoiles :</h3><p>Les dégâts de <strong>Chant de l'arbre du vent</strong> augmentent de <span class="stat-boost">50%</span>.</p><p>Les dégâts de <span class="buff">[Dispersion racinaire]</span> augmentent de <span class="stat-boost">150%</span>.</p>`
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