// Initialise l'objet global s'il n'existe pas encore
if (typeof weaponsData === 'undefined') {
    var weaponsData = {};
}

// --- LAME DE RAZAN (R) ---
weaponsData["lame-de-razan"] = {
    name: "Lame de Razan",
    rarity: "R",
    gradient: "linear-gradient(90deg, #e67e22, #000)",
    image: "Armes_Joueur_R/feu/lame_de_razan/GSWeapon_RazanBlade_PortraitBig.png",
    fullData: {
        0: `<h3>Passif :</h3><p>Lorsque la compétence <strong>Entaille ardente</strong> touche sa cible, elle lui inflige l'effet <span class="buff">[Brûlure]</span>.<br></p><div class="detail-box"><h4><span class="buff">[Brûlure]</span></h4><p>Inflige des dégâts équivalents à <span class="stat-boost">44 %</span> de l'Attaque toutes les 3 seconde(s) (cumulable jusqu'à 5 fois).<br>Durée : 30 seconde(s)</p></div>`,
        1: `<h3>1 étoile :</h3><p>Les dégâts de la compétence <strong>Entaille ardente</strong> augmentent de <span class="stat-boost">44 %</span> lorsque Jinwoo attaque des cibles affectées par <span class="buff">[Brûlure]</span>.<br></p>`,
        2: `<h3>2 étoiles :</h3><p>Vos dégâts de feu augmentent de <span class="stat-boost">6 %</span>.<br></p>`,
        3: `<h3>3 étoiles :</h3><p>Augmente les dégâts de brûlure de la compétence <strong>Entaille ardente</strong> de <span class="stat-boost">44 %</span>.<br></p>`,
        4: `<h3>4 étoiles :</h3><p>Le temps de rechargement d'<strong>Entaille ardente</strong> diminue de <span class="stat-boost">10 %</span>.<br></p>`,
        5: `<h3>5 étoiles :</h3><p>Les dégâts infligés aux monstres de type Boss avec <strong>Entaille ardente</strong> augmentent de <span class="stat-boost">44 %</span>.<br></p>`
    },
    summaryData: {
        0: `<h3>Passif : Ignition</h3><p>Entaille ardente = <span class="buff">[Brûlure]</span>.<br>44 % Atk/3s (max 5 piles).</p>`,
        1: `<h3>1 étoile</h3><p>Dégâts Entaille ardente <span class="stat-boost">+44 %</span> sur cible brûlée.<br></p>`,
        2: `<h3>2 étoiles</h3><p>Dégâts Feu <span class="stat-boost">+6 %</span>.<br></p>`,
        3: `<h3>3 étoiles</h3><p>Dégâts de l'effet <span class="buff">[Brûlure]</span> <span class="stat-boost">+44 %</span>.<br></p>`,
        4: `<h3>4 étoiles</h3><p>CD Entaille ardente <span class="stat-boost">-10 %</span>.<br></p>`,
        5: `<h3>5 étoiles</h3><p>Dégâts sur Boss (via compétence) <span class="stat-boost">+44 %</span>.<br></p>`
    }
};

// --- ÉPÉE LONGUE EN ÉCAILLES DE DRAGON (SR) ---
weaponsData["epee-longue-en-ecailles-de-dragon"] = {
    name: "Épée longue en écailles de dragon",
    rarity: "SR",
    gradient: "linear-gradient(90deg, #e67e22, #000)",
    image: "Armes_Joueur_SR/feu/epee_longue_en_ecailles_de_dragon/GSWeapon_DragnScaleGreatBlade_PortraitBig.png",
    fullData: {
        0: `<h3>Passif :</h3><p>Lorsque l'utilisateur réalise une frappe descendante avec <strong>Entaille du dragon de feu</strong>, il crée un <strong>Domaine du dragon</strong>.<br></p><div class="detail-box"><h4><span class="buff">[Domaine du dragon]</span></h4><p>Réduit de <span class="stat-boost">30%</span> les dégâts subis par les alliés se trouvant dans la zone et ajoute l'effet <span class="buff">[Super armure]</span>.<br>Inflige des dégâts supplémentaires équivalents à <span class="stat-boost">100%</span> de l'Attaque lorsque des attaques touchent leur cible dans la zone (s'active toutes les 2 seconde(s)).<br>Durée: 10 secondes</p></div>`,
        1: `<h3>1 étoile :</h3><p>Applique l'effet <span class="buff">[Pouvoir du sang de dragon]</span> aux alliés se trouvant dans la zone de <span class="buff">[Domaine du dragon]</span>.<br></p><div class="detail-box"><h4><span class="buff">[Le pouvoir du sang de dragon]</span></h4><p>Augmente l'Attaque de l'utilisateur de <span class="stat-boost">12%</span>.<br>Durée: 10 seconde(s)</p></div>`,
        2: `<h3>2 étoiles :</h3><p>Vos dégâts de feu augmentent de <span class="stat-boost">8 %</span>.<br></p>`,
        3: `<h3>3 étoiles :</h3><p>Augmente la zone d'effet et la durée de <span class="buff">[Domaine du dragon]</span> de <span class="stat-boost">50%</span>.<br></p>`,
        4: `<h3>4 étoiles :</h3><p>Réduit le temps de rechargement d'<strong>Entaille du dragon de feu</strong> de <span class="stat-boost">15%</span>.<br></p>`,
        5: `<h3>5 étoiles :</h3><p>Augmente les dégâts de <span class="stat-boost">100%</span> lorsque la compétence <strong>Entaille du dragon de feu</strong> est utilisée dans la zone d'effet de <span class="buff">[Domaine du dragon]</span>.<br></p>`
    },
    summaryData: {
        0: `<h3>Passif : Domaine Draconique</h3><p>Entaille du dragon de feu = <span class="buff">[Domaine du dragon]</span>.<br>[Domaine] : Réduc Dégâts <span class="stat-boost">30%</span>, Super armure, Dégâts Zone (100% Atk/2s).<br>Durée : 10s.</p>`,
        1: `<h3>1 étoile</h3><p>Domaine applique <span class="buff">[Le pouvoir du sang de dragon]</span>.<br>[Pouvoir] : Attaque <span class="stat-boost">+12%</span>.</p>`,
        2: `<h3>2 étoiles</h3><p>Dégâts Feu <span class="stat-boost">+8%</span>.<br></p>`,
        3: `<h3>3 étoiles</h3><p>Zone et Durée de [Domaine du dragon] <span class="stat-boost">+50%</span>.<br></p>`,
        4: `<h3>4 étoiles</h3><p>CD Entaille du dragon de feu <span class="stat-boost">-15%</span>.<br></p>`,
        5: `<h3>5 étoiles</h3><p>Entaille dans le Domaine : Dégâts <span class="stat-boost">+100%</span>.<br></p>`
    }
};

// --- GRIMOIRE DE DÉMON ARDENT (SR) ---
weaponsData["grimoire-de-demon-ardent"] = {
    name: "Grimoire de démon ardent",
    rarity: "SR",
    gradient: "linear-gradient(90deg, #e67e22, #000)",
    image: "Armes_Joueur_SR/feu/grimoire_de_demon_ardent/GSWeapon_BurningDevilGrimoire_PortraitBig.png",
    fullData: {
        0: `<h3>Passif :</h3><p>Lorsque l'utilisateur applique <strong>Éclatement</strong>, les effets <span class="buff">[Insufflation de points de mana]</span> ou <span class="buff">[Récupération de points de mana]</span> s'appliquent selon la quantité de PM restante.<br></p><div class="detail-box"><h4><span class="buff">[Insufflation de points de mana]</span></h4><p>Si les PM de l'utilisateur sont de <span class="stat-boost">51%</span> ou plus, l'effet est activé.<br>Lorsque l'utilisateur applique <strong>Éclatement</strong>, ses dégâts de compétence augmentent de <span class="stat-boost">30%</span>, mais <span class="stat-boost">10%</span> de ses PM max sont consommés.<br></p></div><div class="detail-box"><h4><span class="buff">[Récupération de points de mana]</span></h4><p>Si les PM de l'utilisateur sont de <span class="stat-boost">50%</span> ou moins, l'effet est activé.<br>L'utilisateur récupère <span class="stat-boost">5%</span> de ses PM pour chaque cible touchée par <strong>Éclatement</strong>.<br></p></div>`,
        1: `<h3>1 étoile :</h3><p>Lors de l'utilisation de la compétence <strong>Éclatement</strong>, l'effet <strong>Éclatement</strong> s'active à nouveau à l'emplacement de la première explosion.<br></p>`,
        2: `<h3>2 étoiles :</h3><p>Augmente les dégâts de feu de <span class="stat-boost">8%</span>.<br></p>`,
        3: `<h3>3 étoiles :</h3><p>Lorsque les PM de l'utilisateur sont supérieurs à <span class="stat-boost">51%</span>, son Attaque augmente à hauteur de <span class="stat-boost">60%</span> de ses PM.<br></p>`,
        4: `<h3>4 étoiles :</h3><p>Réduit le temps de rechargement d'<strong>Éclatement</strong> de <span class="stat-boost">15%</span>.<br></p>`,
        5: `<h3>5 étoiles :</h3><p>Augmente les PM max de <span class="stat-boost">400</span>.<br></p>`
    },
    summaryData: {
        0: `<h3>Passif : Gestion de Mana</h3><p>Éclatement déclenche un effet selon les PM restants :<br>> 51% PM : <span class="buff">[Insufflation]</span> (Dégâts <span class="stat-boost">+30%</span>, Coût <span class="stat-boost">-10%</span> PM).<br><= 50% PM : <span class="buff">[Récupération]</span> (Regen <span class="stat-boost">5%</span> PM par cible).</p>`,
        1: `<h3>1 étoile</h3><p>Éclatement s'active une seconde fois (Double explosion).<br></p>`,
        2: `<h3>2 étoiles</h3><p>Dégâts Feu <span class="stat-boost">+8%</span>.<br></p>`,
        3: `<h3>3 étoiles</h3><p>Si PM > 51% : Attaque augmentée de <span class="stat-boost">60%</span> des PM.<br></p>`,
        4: `<h3>4 étoiles</h3><p>CD Éclatement <span class="stat-boost">-15%</span>.<br></p>`,
        5: `<h3>5 étoiles</h3><p>PM Max <span class="stat-boost">+400</span>.<br></p>`
    }
};

// --- ORBE D'AVARICE (SR) ---
weaponsData["orbe-d-avarice"] = {
    name: "Orbe d'avarice",
    rarity: "SR",
    gradient: "linear-gradient(90deg, #e67e22, #000)",
    image: "Armes_Joueur_SR/feu/orbe_d_avarice/GSWeapon_OrbGreed_PortraitBig.png",
    fullData: {
        0: `<h3>Passif :</h3><p>Les dégâts infligés par <strong>Purgatoire</strong> augmentent de <span class="stat-boost">50%</span> et la consommation de PM augmente de <span class="stat-boost">10%</span>.<br></p>`,
        1: `<h3>1 étoile :</h3><p>Lorsque l'utilisateur rejoint le niveau, applique 20 cumuls de l'effet <span class="buff">[Flamme noire tonitruante)</span>.<br>Augmente le temps de rechargement de <strong>Purgatoire</strong> de 5 seconde(s).<br></p><div class="detail-box"><h4><span class="buff">[Flamme noire tonitruante]</span></h4><p>Augmente les dégâts de <strong>Purgatoire</strong> de <span class="stat-boost">8%</span>.<br>Lorsque l'utilisateur lance <strong>Purgatoire</strong>, consomme 4 cumuls.<br>Durée: illimitée</p></div>`,
        2: `<h3>2 étoiles :</h3><p>Vos dégâts de feu augmentent de <span class="stat-boost">8%</span>.<br></p>`,
        3: `<h3>3 étoiles :</h3><p>Restaure les PM à hauteur des cumuls de <span class="buff">[Flamme noire tonitruante]</span> x 2 toutes les 3 seconde(s).<br></p>`,
        4: `<h3>4 étoiles :</h3><p>Le temps de rechargement de <strong>Purgatoire</strong> diminue de <span class="stat-boost">15%</span>.<br></p>`,
        5: `<h3>5 étoiles :</h3><p>Lorsque l'utilisateur rejoint le niveau, applique 30 cumuls de l'effet <span class="buff">[Flamme noire tonitruante]</span>.<br></p>`
    },
    summaryData: {
        0: `<h3>Passif : Purgatoire Infernal</h3><p>Purgatoire : Dégâts <span class="stat-boost">+50%</span>, Conso PM <span class="stat-boost">+10%</span>.<br></p>`,
        1: `<h3>1 étoile</h3><p>Début niveau : 20 cumuls <span class="buff">[Flamme noire]</span>.<br>CD Purgatoire +5s.<br>[Flamme] : Dégâts Purgatoire <span class="stat-boost">+8%</span> (Conso 4 cumuls/tir).</p>`,
        2: `<h3>2 étoiles</h3><p>Dégâts Feu <span class="stat-boost">+8%</span>.<br></p>`,
        3: `<h3>3 étoiles</h3><p>Regen PM = Cumuls [Flamme] x 2 toutes les 3s.<br></p>`,
        4: `<h3>4 étoiles</h3><p>CD Purgatoire <span class="stat-boost">-15%</span>.<br></p>`,
        5: `<h3>5 étoiles</h3><p>Début niveau : 30 cumuls <span class="buff">[Flamme noire]</span>.<br></p>`
    }
};

// --- TUEUSE DE CHEVALIER (SR) ---
weaponsData["tueuse-de-chevalier"] = {
    name: "Tueuse de chevalier",
    rarity: "SR",
    gradient: "linear-gradient(90deg, #e67e22, #000)",
    image: "Armes_Joueur_SR/feu/tueuse_de_chevalier/GSWeapon_KnightKiller_PortraitBig.png",
    fullData: {
        0: `<h3>Passif :</h3><p>Lors de l'utilisation de la compétence <strong>Télékinésie</strong>, l'utilisateur inflige l'effet <span class="buff">[Tueuse de chevaliers]</span> tous les 5 coup(s).<br></p><div class="detail-box"><h4><span class="buff">[Tueuse de chevaliers]</span></h4><p>Augmente la Pénétration de défense de l'utilisateur de <span class="stat-boost">2.4%</span> (cumulable jusqu'à 10 fois).<br>Durée: 20 seconde(s)</p></div>`,
        1: `<h3>1 étoile :</h3><p>Lors de l'utilisation de la compétence <strong>Télékinésie</strong>, l'utilisateur inflige l'effet <span class="buff">[Décomposition]</span> tous les 5 coup(s).<br></p><div class="detail-box"><h4><span class="buff">[Décomposition]</span></h4><p>Lorsque la dernière attaque de <strong>Télékinésie</strong> touche sa cible, elle crée une explosion après 1 seconde.<br>Inflige des dégâts équivalents à <span class="stat-boost">40%</span> de l'Attaque par cumul (cumulable jusqu'à 10 fois).<br>Durée: 2 seconde(s)</p></div>`,
        2: `<h3>2 étoiles :</h3><p>Vos dégâts de feu augmentent de <span class="stat-boost">8%</span>.<br></p>`,
        3: `<h3>3 étoiles :</h3><p>Lors de l'utilisation de la compétence <strong>Télékinésie</strong>, l'effet <span class="buff">[Voile de flammes]</span> est appliqué.<br></p><div class="detail-box"><h4><span class="buff">[Voile de flammes]</span></h4><p>Applique un <span class="buff">[Bouclier]</span> équivalent à <span class="stat-boost">15%</span> des PV max de l'utilisateur.<br>Durée: 5 seconde(s)</p></div>`,
        4: `<h3>4 étoiles :</h3><p>Le temps de rechargement de <strong>Télékinésie</strong> diminue de <span class="stat-boost">15%</span>.<br></p>`,
        5: `<h3>5 étoiles :</h3><p>Lorsque <span class="buff">[Décomposition]</span> explose avec le maximum de cumuls, l'effet <span class="buff">[Destruction amorcée]</span> s'applique sur la cible.<br></p><div class="detail-box"><h4><span class="buff">[Destruction amorcée]</span></h4><p>Les dégâts qu'elle subit augmentent de <span class="stat-boost">2%</span> (cumulable jusqu'à 5 fois).<br>Durée: infinie</p></div>`
    },
    summaryData: {
        0: `<h3>Passif : Brise-Armure</h3><p>Télékinésie (5 coups) = <span class="buff">[Tueuse de chevaliers]</span>.<br>[Tueuse] : Pénétration Défense <span class="stat-boost">+2.4%</span>/cumul (max 10).</p>`,
        1: `<h3>1 étoile</h3><p>Télékinésie (5 coups) = <span class="buff">[Décomposition]</span>.<br>[Décomposition] : Explosion finale (Dégâts <span class="stat-boost">40%</span> Atk/cumul, max 10).</p>`,
        2: `<h3>2 étoiles</h3><p>Dégâts Feu <span class="stat-boost">+8%</span>.<br></p>`,
        3: `<h3>3 étoiles</h3><p>Télékinésie = <span class="buff">[Voile de flammes]</span> (Bouclier <span class="stat-boost">15%</span> PV).<br></p>`,
        4: `<h3>4 étoiles</h3><p>CD Télékinésie <span class="stat-boost">-15%</span>.<br></p>`,
        5: `<h3>5 étoiles</h3><p>Explosion max [Décomposition] = <span class="buff">[Destruction amorcée]</span>.<br>[Destruction] : Dégâts subis <span class="stat-boost">+2%</span>/cumul (max 5, infini).</p>`
    }
};

// --- ÂME DE PHÉNIX ---
weaponsData["ame-de-phenix"] = {
    name: "Âme de Phénix",
    rarity: "SSR",
    gradient: "linear-gradient(90deg, #e67e22, #000)", // Couleur Feu
    image: "Armes_Joueur_SSR/feu/ame_de_phenix/GSWeapon_PhoenixSoul_PortraitBig.png",
    fullData: {
        0: `<h3>Passif :</h3><p>Lors de l'utilisation de <strong>Tir rapide de phénix</strong>, l'effet <span class="buff">[Âme de l'oiseau de feu]</span> s'applique aux 3e, 6e et 9e flèches.<br>Lorsque l'Attaque de base de l'arme touche 3 fois sa cible, elle applique l'effet <span class="buff">[Âme de l'oiseau de feu]</span>.<br></p><div class="detail-box"><h4><span class="buff">[Âme de l'oiseau de feu]</span></h4><p>L'Attaque de noyau de l'utilisateur devient <strong>Tir de flamme</strong>.<br>Augmente les dégâts de <strong>Tir de flamme</strong> de <span class="stat-boost">80%</span> par cumul d'âme de l'oiseau de feu (cumulable jusqu'à 3 fois).<br>Lors de l'utilisation de <strong>Tir de flamme</strong>, tous les cumuls d'âme de l'oiseau de feu sont consumés.<br>Durée: infinie</p></div>`,
        1: `<h3>1 étoile :</h3><p>Remplit <span class="stat-boost">34 %</span> de la jauge de noyau de l'utilisateur aux 3e, 6e et 9e flèches de <strong>Tir rapide de phénix</strong>.<br>Lorsque <strong>Tir de flamme</strong> touche sa cible, la jauge de noyau de l'utilisateur se remplit de <span class="stat-boost">50%</span>.<br></p>`,
        2: `<h3>2 étoiles :</h3><p>Augmente les dégâts de feu de l'utilisateur de <span class="stat-boost">10%</span>.<br></p>`,
        3: `<h3>3 étoiles :</h3><p>La dernière flèche de <strong>Tir rapide de phénix</strong> octroie 2 cumuls de l'effet <span class="buff">[Âme de l'oiseau de feu]</span>.<br>Fait passer le maximum de cumuls de <strong>Tir de flamme</strong> à 4.<br></p>`,
        4: `<h3>4 étoiles :</h3><p>Réduit le temps de rechargement de <strong>Tir rapide de phénix</strong> de <span class="stat-boost">20%</span>.<br></p>`,
        5: `<h3>5 étoiles :</h3><p>Après l'obtention de l'effet <span class="buff">[Ame de l'oiseau de feu]</span> suite à l'utilisation de <strong>Tir rapide de phénix</strong> ou de l'Attaque de base, l'utilisateur récupère les cumuls consommés de l'effet <span class="buff">[Âme de l'oiseau de feu]</span> et <span class="stat-boost">100%</span> de sa jauge de noyau dès qu'il utilise <strong>Tir de flamme</strong>.<br></p>`
    },
    summaryData: {
        0: `<h3>Passif : Archer du Phénix</h3><p>Tir rapide / 3x Attaque base = <span class="buff">[Âme de l'oiseau de feu]</span>.<br>[Âme] : Attaque noyau -> <strong>Tir de flamme</strong>.<br>Dégâts Tir de flamme <span class="stat-boost">+80%</span>/cumul (max 3).</p>`,
        1: `<h3>1 étoile</h3><p>Tir rapide = Regen Jauge (34% x3).<br>Tir de flamme = Regen Jauge <span class="stat-boost">50%</span>.<br></p>`,
        2: `<h3>2 étoiles</h3><p>Dégâts Feu <span class="stat-boost">+10%</span>.<br></p>`,
        3: `<h3>3 étoiles</h3><p>Dernière flèche Tir rapide = +2 cumuls Âme.<br>Max cumuls Tir de flamme passe à 4.</p>`,
        4: `<h3>4 étoiles</h3><p>CD Tir rapide de phénix <span class="stat-boost">-20%</span>.<br></p>`,
        5: `<h3>5 étoiles</h3><p>Après obtention Âme : Utiliser Tir de flamme rend les cumuls + Jauge 100% (Boucle infinie potentielle).</p>`
    }
};

// --- BROCHETTE GRILLÉE JUTEUSE ---
weaponsData["brochette-grillee-juteuse"] = {
    name: "Brochette grillée juteuse",
    rarity: "SSR",
    gradient: "linear-gradient(90deg, #e67e22, #000)",
    image: "Armes_Joueur_SSR/feu/brochette_grillee_juteuse/GSWeapon_JuicyGrilledSkewers_PortraitBig.png",
    fullData: {
        0: `<h3>Passif :</h3><p>Lorsque la compétence <strong>Fumant et juteux</strong> est utilisée, l'effet <span class="buff">[Grill bien saisi]</span> est appliqué.<br>Lorsque la compétence <strong>Fumant et juteux</strong> est utilisée, elle crée 3 cumuls de <span class="buff">[Viande juteuse et Oignon vert fumant XL]</span>.<br>Accorde des effets supplémentaires pour chaque cumul de <span class="buff">[Viande juteuse ou Oignon vert fumant XL]</span>.<br></p><div class="detail-box"><h4><span class="buff">[Grill saisi]</span></h4><p>Les dégâts élémentaires de feu des membres de l'équipe augmentent de <span class="stat-boost">5%</span> lorsqu'ils se trouvent dans la zone.<br>Les dégâts infligés par les membres de l'équipe augmentent de <span class="stat-boost">5%</span> lorsqu'ils se trouvent dans la zone.<br>Durée: 7 secondes</p></div><div class="detail-box"><h4><span class="buff">[Viande juteuse]</span></h4><p>L'utilisateur récupère <span class="stat-boost">3%</span> de PV en mangeant ça.<br>Augmente l'Attaque de l'utilisateur de <span class="stat-boost">1%</span>.<br>Durée: 10 seconde(s)</p></div><div class="detail-box"><h4><span class="buff">[Oignon vert fumant XL]</span></h4><p>L'utilisateur récupère <span class="stat-boost">3%</span> de PM en mangeant ça.<br>Augmente la Défense de l'utilisateur de <span class="stat-boost">1%</span>.<br>Durée: 10 seconde(s)</p></div>`,
        1: `<h3>1 étoile :</h3><p>Le nombre de cumuls de <span class="buff">[Viande juteuse et Oignon vert fumant XL]</span> créés augmente de 4 à chaque fois.<br>Lorsque les cumuls de <span class="buff">[Viande juteuse et Oignon vert fumant XL]</span> sont épuisés, la flamme du grill se ravive pour infliger des dégâts équivalents à <span class="stat-boost">50%</span> des dégâts d'origine infligés lors de la première flambée.<br></p>`,
        2: `<h3>2 étoiles :</h3><p>Augmente les dégâts de feu de l'utilisateur de <span class="stat-boost">10%</span>.<br></p>`,
        3: `<h3>3 étoiles :</h3><p>Augmente les effets de <span class="buff">[Viande juteuse et Oignon vert fumant XL]</span>.<br></p><div class="detail-box"><h4><span class="buff">[Viande juteuse]</span></h4><p>L'utilisateur récupère <span class="stat-boost">5%</span> de PV.<br>Augmente l'Attaque de l'utilisateur de <span class="stat-boost">3%</span>.<br>Durée: 10 seconde(s)</p></div><div class="detail-box"><h4><span class="buff">[Oignon vert fumant XL]</span></h4><p>L'utilisateur récupère <span class="stat-boost">5%</span> de PV.<br>Augmente la Défense de l'utilisateur de <span class="stat-boost">3%</span>.<br>Durée: 10 seconde(s)</p></div>`,
        4: `<h3>4 étoiles :</h3><p>Le temps de rechargement de <strong>Fumant et juteux</strong> diminue de <span class="stat-boost">20%</span>.<br></p>`,
        5: `<h3>5 étoiles :</h3><p>Augmente les effets de <span class="buff">[Grill bien saisi]</span>.<br></p><div class="detail-box"><h4><span class="buff">[Grill saisi]</span></h4><p>Augmente les dégâts de feu de <span class="stat-boost">10%</span> dans la zone.<br>Augmente les dégâts infligés de <span class="stat-boost">10%</span> dans la zone.<br>Durée: 7 secondes</p></div>`
    },
    summaryData: {
        0: `<h3>Passif : Barbecue Démonique</h3><p>Fumant et juteux = <span class="buff">[Grill bien saisi]</span> + Consommables.<br>[Grill] : Zone buff Feu/Dégâts <span class="stat-boost">+5%</span>.<br>[Viande] : Soin PV <span class="stat-boost">3%</span>, Atk <span class="stat-boost">+1%</span>.<br>[Oignon] : Soin PM <span class="stat-boost">3%</span>, Def <span class="stat-boost">+1%</span>.</p>`,
        1: `<h3>1 étoile</h3><p>+4 cumuls Viande/Oignon.<br>Explosion finale du grill (50% dégâts initiaux).</p>`,
        2: `<h3>2 étoiles</h3><p>Dégâts Feu <span class="stat-boost">+10%</span>.<br></p>`,
        3: `<h3>3 étoiles</h3><p>Consommables améliorés : Soin <span class="stat-boost">5%</span>, Atk/Def <span class="stat-boost">+3%</span>.<br></p>`,
        4: `<h3>4 étoiles</h3><p>CD Fumant et juteux <span class="stat-boost">-20%</span>.<br></p>`,
        5: `<h3>5 étoiles</h3><p>[Grill bien saisi] amélioré : Dégâts Feu/Dégâts <span class="stat-boost">+10%</span> dans la zone.<br></p>`
    }
};

// --- ÉVENTAIL DU DÉMON DE FEU ---
weaponsData["eventail-du-demon-de-feu"] = {
    name: "Éventail du démon de feu",
    rarity: "SSR",
    gradient: "linear-gradient(90deg, #e67e22, #000)",
    image: "Armes_Joueur_SSR/feu/eventail_du_demon_de_feu/GSWeapon_FlamesFan_PortraitBig.png",
    fullData: {
        0: `<h3>Passif :</h3><p>Lorsque la jauge de noyau de l'utilisateur est à <span class="stat-boost">100%</span>, la compétence <strong>Fleur de feu</strong> devient <strong>Jouvence fugace</strong>.<br>Lorsque les compétences <strong>Fleur de feu</strong> ou <strong>Jouvence fugace</strong> sont utilisées, l'utilisateur et les membres de son équipe reçoivent 1 cumul de l'effet <span class="buff">[Papillons]</span>.<br></p><div class="detail-box"><h4><span class="buff">[Jouvence fugace]</span></h4><p>Dégâts et consommation de PM: identiques à ceux de <strong>Fleur de feu</strong>.<br>Consommation de la jauge de noyau: <span class="stat-boost">100%</span>.<br>Lorsque cette compétence touche sa cible, le temps ralentit.<br>Inflige des dégâts de Bris lourds.<br>Lorsqu'une attaque de l'utilisateur transperce une cible, une explosion florale de flammes ardentes survient et inflige des dégâts à la cible.<br></p></div><div class="detail-box"><h4><span class="buff">[Papillons]</span></h4><p>Augmente les dégâts de feu de <span class="stat-boost">3%</span>.<br>Augmente le Taux de récupération de PM de <span class="stat-boost">5%</span>.<br>Durée: 60 seconde(s) (cumulable jusqu'à 6 fois)</p></div>`,
        1: `<h3>1 étoile :</h3><p>Lorsqu'il utilise sa compétence de Bris de feu, l'utilisateur et les membres de son équipe reçoivent 1 cumul supplémentaire de l'effet <span class="buff">[Papillons]</span>.<br>Lorsque les compétences <strong>Fleur de feu</strong> ou <strong>Jouvence fugace</strong> touchent leur cible, elles lui appliquent l'effet <span class="buff">[Forte fièvre]</span>.<br></p><div class="detail-box"><h4><span class="buff">[Forte fièvre]</span></h4><p>Les dégâts de feu de Jinwoo augmentent de <span class="stat-boost">50%</span> lorsqu'il touche des cibles affectées par l'effet <span class="buff">[Forte fièvre]</span>.<br>L'utilisateur récupère <span class="stat-boost">10%</span> de ses PM 1 fois lorsqu'il touche une cible affectée par l'effet <span class="buff">[Forte fièvre]</span>.<br>Durée: 8 seconde(s) (cumulable jusqu'à 1 fois)</p></div>`,
        2: `<h3>2 étoiles :</h3><p>Augmente les dégâts de feu de <span class="stat-boost">10%</span>.<br></p>`,
        3: `<h3>3 étoiles :</h3><p>Lorsque l'effet <span class="buff">[Papillons]</span> atteint 6 cumuls, il active l'effet <span class="buff">[Démon de feu]</span>.<br>(<span class="buff">[Démon de feu]</span> ne s'active que pour Sung Jinwoo.)<br></p><div class="detail-box"><h4><span class="buff">[Démon de feu]</span></h4><p>Les cumuls de l'effet <span class="buff">[Papillons]</span> sont supprimés et l'utilisateur ne peut plus en recevoir.<br>Augmente les dégâts de feu de l'utilisateur et le Taux de récupération de PM de <span class="stat-boost">50%</span>.<br>Augmente le Taux de coup critique de la compétence de noyau de feu de l'utilisateur de <span class="stat-boost">30%</span>.<br>Augmente les Dégâts de coup critique de la compétence de noyau de feu de l'utilisateur de <span class="stat-boost">120%</span>.<br>Lors de l'utilisation de sa compétence de base de feu, l'utilisateur reçoit l'effet <span class="buff">[Super armure]</span> pendant 4 seconde(s).<br>Consomme 5% des PM de l'utilisateur toutes les 3 seconde(s).<br>Si l'utilisateur a <span class="stat-boost">20%</span> de ses PM max ou moins sur le moment, l'effet est supprimé.<br>Durée: illimitée (cumulable jusqu'à 1 fois)</p></div>`,
        4: `<h3>4 étoiles :</h3><p>Réduit le temps de rechargement des compétences <strong>Fleur de feu</strong> et <strong>Jouvence fugace</strong> de <span class="stat-boost">20%</span>.<br></p>`,
        5: `<h3>5 étoiles :</h3><p>Au début du niveau, la jauge de noyau de l'utilisateur est remplie à <span class="stat-boost">100%</span>.<br>Lorsque toutes les armes équipées sur le chasseur sont des armes de feu, les dégâts de feu augmentent de <span class="stat-boost">50%</span>.<br>Lorsque l'utilisateur recourt à une attaque de feu pendant que l'effet <span class="buff">[Démon de feu]</span> est actif, il récupère <span class="stat-boost">10%</span> de ses PM (temps de rechargement: 3 seconde(s)).<br></p>`
    },
    summaryData: {
        0: `<h3>Passif : Fleur Infernale</h3><p>Jauge 100% = <strong>Jouvence fugace</strong> (Ralenti, Bris lourd).<br>Compétences feu = <span class="buff">[Papillons]</span> (Équipe, Dégâts Feu <span class="stat-boost">+3%</span>, Regen PM <span class="stat-boost">+5%</span>, max 6).</p>`,
        1: `<h3>1 étoile</h3><p>Bris de feu = +1 cumul [Papillons].<br>Touche = <span class="buff">[Forte fièvre]</span> (Dégâts Feu <span class="stat-boost">+50%</span>, Regen 10% PM).</p>`,
        2: `<h3>2 étoiles</h3><p>Dégâts Feu <span class="stat-boost">+10%</span>.<br></p>`,
        3: `<h3>3 étoiles</h3><p>6 Papillons = <span class="buff">[Démon de feu]</span>.<br>Dégâts Feu/Regen PM <span class="stat-boost">+50%</span>.<br>Crit/Dégâts Crit noyau feu <span class="stat-boost">+30%/+120%</span>.<br>Super armure sur skill base.<br>Conso PM 5%/3s.</p>`,
        4: `<h3>4 étoiles</h3><p>CD Fleur de feu/Jouvence <span class="stat-boost">-20%</span>.<br></p>`,
        5: `<h3>5 étoiles</h3><p>Début niveau : Jauge Noyau <span class="stat-boost">100%</span>.<br>Full armes Feu : Dégâts Feu <span class="stat-boost">+50%</span>.<br>Attaque feu sous Démon : Regen 10% PM (CD 3s).</p>`
    }
};

// --- LANCE À DOUBLE LAME DU CLAN RADIR ---
weaponsData["lance_a_double_lame_du_clan_radir"] = {
    name: "Lance à double lame du clan Radir",
    rarity: "SSR",
    gradient: "linear-gradient(90deg, #e67e22, #000)",
    image: "Armes_Joueur_SSR/feu/Lance_a_double_lame_du_clan_radir/GSWeapon_EsilsDoubleEdge_PortraitBig.png",
    fullData: {
        0: `<h3>Passif :</h3><p>L'utilisation de la compétence <strong>Soutien du clan Radish</strong> applique 10 fois l'effet <span class="buff">[Moral]</span> sur l'utilisateur.<br></p><div class="detail-box"><h4><span class="buff">[Moral]</span></h4><p>Augmente les dégâts infligés de <span class="stat-boost">0.5 %</span>.<br>Durée : illimitée (cumulable jusqu'à 30 fois).</p></div>`,
        1: `<h3>1 étoile :</h3><p>Lorsque l'utilisateur touche une cible avec une attaque de feu, il applique 1 effet <span class="buff">[Moral]</span> (ne s'active qu'une fois lorsque l'attaque touche sa cible).<br>Lorsque l'utilisateur touche une cible avec une attaque de feu tout en ayant 30 cumuls de l'effet <span class="buff">[Moral]</span> appliqués, une petite zone <span class="buff">[Feu de soutien]</span> est créée autour de la cible (temps de rechargement : 10 seconde(s)).<br></p><div class="detail-box"><h4><span class="buff">[Feu de soutien]</span></h4><p>Inflige des dégâts élémentaires de feu équivalents à <span class="stat-boost">600 %</span> de l'Attaque de Sung Jinwoo.<br>Compte comme une compétence de base. Inflige des dégâts de Bris légers.</p></div>`,
        2: `<h3>2 étoiles :</h3><p>Augmente les dégâts de feu de l'utilisateur de <span class="stat-boost">10 %</span>.<br></p>`,
        3: `<h3>3 étoiles :</h3><p>Lorsque l'attaque de l'utilisateur touche une cible avec un effet Brûlure, l'effet <span class="buff">[Volonté brûlante]</span> est activé sur l'utilisateur (temps de rechargement : 2 seconde(s)).<br></p><div class="detail-box"><h4><span class="buff">[Volonté brûlante]</span></h4><p>Augmente les dégâts de feu de <span class="stat-boost">6 %</span>.<br>Augmente les Dégâts de coup critique de <span class="stat-boost">12 %</span>.<br>Durée : 15 seconde(s) (cumulable jusqu'à 5 fois).</p></div>`,
        4: `<h3>4 étoiles :</h3><p>Diminue le temps de rechargement de <strong>Soutien du clan Radish</strong> de <span class="stat-boost">20 %</span>.<br></p>`,
        5: `<h3>5 étoiles :</h3><p>La portée d'attaque de <span class="buff">[Feu de soutien]</span> augmente de <span class="stat-boost">50 %</span>, et son temps de rechargement passe à 5 seconde(s).<br>Lorsqu'une attaque de feu de l'utilisateur touche une cible et si toutes les armes équipées sont de l'élément Feu, un cumul supplémentaire de l'effet <span class="buff">[Moral]</span> est activé (lorsque cette compétence touche sa cible, il ne s'active qu'une fois).<br>Améliore l'effet <span class="buff">[Moral]</span>.<br></p><div class="detail-box"><h4><span class="buff">[Moral]</span> (Amélioré)</h4><p>Augmente les dégâts infligés de <span class="stat-boost">1.2 %</span>.<br>Augmente les dégâts de feu de la compétence de base de <span class="stat-boost">0.5 %</span> et les dégâts de la Compétences d'arme de <span class="stat-boost">1 %</span> lorsque toutes les armes équipées sont de l'élément Feu.<br>Durée : illimitée (cumulable jusqu'à 30 fois).</p></div>`
    },
    summaryData: {
        0: `<h3>Passif : Moral</h3><p>Soutien du clan Radish = 10x <span class="buff">[Moral]</span>.<br>[Moral] : Dégâts infligés <span class="stat-boost">+0.5%</span> (max 30).</p>`,
        1: `<h3>1 étoile</h3><p>Attaque feu = +1 Moral.<br>30 Moral + Attaque feu = <span class="buff">[Feu de soutien]</span> (600% Atk, Bris léger, CD 10s).</p>`,
        2: `<h3>2 étoiles</h3><p>Dégâts Feu <span class="stat-boost">+10%</span>.<br></p>`,
        3: `<h3>3 étoiles</h3><p>Touche cible brûlée = <span class="buff">[Volonté brûlante]</span> (Dégâts Feu +6%, Dégâts Crit +12%, max 5).</p>`,
        4: `<h3>4 étoiles</h3><p>CD Soutien du clan Radish <span class="stat-boost">-20%</span>.<br></p>`,
        5: `<h3>5 étoiles</h3><p>[Feu de soutien] CD 5s + Portée <span class="stat-boost">+50%</span>.<br>Full Feu : +1 cumul Moral supplémentaire.<br>[Moral] UP : Dégâts infligés <span class="stat-boost">+1.2%</span>/cumul.</p>`
    }
};

// --- RAGE DE VULCAN ---
weaponsData["rage-de-vulcan"] = {
    name: "Rage de Vulcan",
    rarity: "SSR",
    gradient: "linear-gradient(90deg, #e67e22, #000)",
    image: "Armes_Joueur_SSR/feu/rage_de_vulcan/GSWeapon_Vulcan_PortraitBig.png",
    fullData: {
        0: `<h3>Passif :</h3><p>Lors de l'utilisation de <strong>Feu destructeur</strong>, l'effet <span class="buff">[Bénédiction de Vulcan]</span> s'applique.<br></p><div class="detail-box"><h4><span class="buff">[Bénédiction de Vulcan]</span></h4><p>Cet effet crée un <span class="buff">[Bouclier]</span> équivalent à <span class="stat-boost">10%</span> de l'Attaque de l'utilisateur et applique l'effet <span class="buff">[Concentration]</span> à chaque Attaque de base et de noyau que subit l'ennemi.<br>Durée: 10 seconde(s)</p></div><div class="detail-box"><h4><span class="buff">[Concentration]</span></h4><p>Si l'effet expire ou est dissipé, <span class="buff">[Bénédiction de Vulcan]</span> explose et inflige des dégâts équivalents à <span class="stat-boost">400%</span> de l'Attaque de l'utilisateur (cumulable jusqu'à 20 fois).<br>L'explosion inflige <span class="stat-boost">20%</span> de dégâts supplémentaires par cumul de <span class="buff">[Concentration]</span>.<br>En explosant, <span class="buff">[Bénédiction de Vulcan]</span> supprime toutes les instances de l'effet <span class="buff">[Concentration]</span>.<br>À 20 cumuls de l'effet <span class="buff">[Concentration]</span>, <span class="buff">[Bénédiction de Vulcan]</span> explose instantanément et recrée un <span class="buff">[Bouclier]</span> équivalent à <span class="stat-boost">10%</span> de l'Attaque de l'utilisateur.<br>Durée: illimitée</p></div>`,
        1: `<h3>1 étoile :</h3><p>Lorsque l'effet <span class="buff">[Bénédiction de Vulcan]</span> provoque l'explosion, il applique l'effet <span class="buff">[Rage]</span>.<br></p><div class="detail-box"><h4><span class="buff">[Rage]</span></h4><p>Augmente l'Attaque de l'utilisateur de <span class="stat-boost">12%</span>.<br>Augmente la Vitesse d'attaque de <span class="stat-boost">6%</span>.<br>Durée: 15 seconde(s)</p></div>`,
        2: `<h3>2 étoiles :</h3><p>Vos dégâts de feu augmentent de <span class="stat-boost">10%</span>.<br></p>`,
        3: `<h3>3 étoiles :</h3><p>Améliore l'effet <span class="buff">[Rage]</span>.<br></p><div class="detail-box"><h4><span class="buff">[Rage]</span></h4><p>S'applique même lors de l'utilisation de <strong>Feu destructeur</strong>.<br>Augmente l'Attaque de l'utilisateur de <span class="stat-boost">20%</span>.<br>Augmente la Vitesse d'attaque de <span class="stat-boost">10%</span>.<br>Durée: 15 seconde(s)</p></div>`,
        4: `<h3>4 étoiles :</h3><p>Le temps de rechargement de <strong>Feu destructeur</strong> diminue de <span class="stat-boost">20%</span>.<br></p>`,
        5: `<h3>5 étoiles :</h3><p>Pendant que l'effet <span class="buff">[Bouclier]</span> est actif, les dégâts de la compétence <strong>Feu destructeur</strong> augmentent de <span class="stat-boost">50%</span>.<br></p>`
    },
    summaryData: {
        0: `<h3>Passif : Colère Magmatique</h3><p>Feu destructeur = <span class="buff">[Bénédiction]</span> + <span class="buff">[Concentration]</span>.<br>[Bénédiction] : Bouclier (<span class="stat-boost">10%</span> Atk).<br>[Concentration] : Explosion cumulable à la fin (max 20 stacks, dégâts massifs).</p>`,
        1: `<h3>1 étoile</h3><p>Explosion = <span class="buff">[Rage]</span> (Atk <span class="stat-boost">+12%</span>, Vitesse <span class="stat-boost">+6%</span>, 15s).</p>`,
        2: `<h3>2 étoiles</h3><p>Dégâts Feu <span class="stat-boost">+10%</span>.<br></p>`,
        3: `<h3>3 étoiles</h3><p>[Rage] améliorée : Atk <span class="stat-boost">+20%</span>, Vitesse <span class="stat-boost">+10%</span>.<br>S'active aussi sur Feu destructeur.</p>`,
        4: `<h3>4 étoiles</h3><p>CD Feu destructeur <span class="stat-boost">-20%</span>.<br></p>`,
        5: `<h3>5 étoiles</h3><p>Sous Bouclier : Dégâts Feu destructeur <span class="stat-boost">+50%</span>.<br></p>`
    }
};

// --- RUGISSEMENT D'ENNIO ---
weaponsData["rugissement-d-ennio"] = {
    name: "Rugissement d'Ennio",
    rarity: "SSR",
    gradient: "linear-gradient(90deg, #e67e22, #000)",
    image: "Armes_Joueur_SSR/feu/rugissement_d_ennio/GSWeapon_RoarOfEnnio_PortraitBig.png",
    fullData: {
        0: `<h3>Passif :</h3><p>Lorsque la compétence <strong>Rage noir d'encre</strong> touche sa cible et que cette dernière présente l'effet <span class="buff">[Brûlure]</span>, l'effet augmente les dégâts de <span class="stat-boost">10 %</span>.<br>Lors de l'utilisation de la compétence <strong>Rage noir d'encre</strong>, l'effet <span class="buff">[Rancœur incandescente]</span> s'active.<br></p><div class="detail-box"><h4><span class="buff">[Rancœur incandescente]</span></h4><p>Augmente les dégâts subis de <span class="stat-boost">10 %</span>. Augmente les dégâts de feu de <span class="stat-boost">5 %</span>.<br>Augmente les dégâts infligés aux boss de <span class="stat-boost">5 %</span>. Augmente les dégâts de la compétence <strong>Rage noir d'encre</strong> de <span class="stat-boost">50 %</span>.</p></div>`,
        1: `<h3>1 étoile :</h3><p>Augmente la Pénétration de défense de <span class="stat-boost">16 %</span> lorsque toutes les armes équipées sont de l'élément Feu.<br>L'utilisation de la compétence <strong>Rage noir d'encre</strong> active l'effet <span class="buff">[Marque de l'Adversaire]</span> sur les boss et monstres Élite se trouvant dans un rayon de 20 m.<br>Lorsque la compétence <strong>Rage noir d'encre</strong> touche sa cible et que cette dernière présente l'effet <span class="buff">[Marque de l'Adversaire]</span>, l'effet <span class="buff">[Rage d'Ennio]</span> s'active.<br></p><div class="detail-box"><h4><span class="buff">[Rage d'Ennio]</span></h4><p>Invoque un météore dans le ciel pour attaquer la cible.<br>Dégâts : <span class="stat-boost">1000 %</span> de l'Attaque.</p></div><div class="detail-box"><h4><span class="buff">[Marque de l'Adversaire]</span></h4><p>Augmente les dégâts de la compétence <strong>Rage noir d'encre</strong> de <span class="stat-boost">50 %</span>.<br>Supprime l'effet lorsque la compétence <strong>Rage noir d'encre</strong> touche sa cible.<br>Durée : 3 secondes.</p></div>`,
        2: `<h3>2 étoiles :</h3><p>Augmente les dégâts de feu de l'utilisateur de <span class="stat-boost">10 %</span>.<br></p>`,
        3: `<h3>3 étoiles :</h3><p>Lorsque la compétence <strong>Rage noir d'encre</strong> touche sa cible et que cette dernière présente l'effet <span class="buff">[Brûlure]</span>, les dégâts augmentent de <span class="stat-boost">25 %</span>.<br>Améliore l'effet <span class="buff">[Rancœur incandescente]</span>.<br></p><div class="detail-box"><h4><span class="buff">[Rancœur incandescente]</span> (Amélioré)</h4><p>Augmente les dégâts subis de <span class="stat-boost">5 %</span>.<br>Augmente les dégâts de feu de <span class="stat-boost">15 %</span>. Augmente les dégâts infligés aux boss de <span class="stat-boost">10 %</span>.<br>Augmente les dégâts de la compétence <strong>Rage noir d'encre</strong> de <span class="stat-boost">100 %</span>.<br>Durée : illimitée.</p></div>`,
        4: `<h3>4 étoiles :</h3><p>Réduit le temps de rechargement de <strong>Rage noir d'encre</strong> de <span class="stat-boost">20 %</span>.<br></p>`,
        5: `<h3>5 étoiles :</h3><p>L'utilisation d'une arme de l'élément Feu augmente les dégâts de compétence d'arme de feu de l'utilisateur de <span class="stat-boost">50 %</span> pendant 2.5 seconde(s) face aux cibles affectées par l'effet <span class="buff">[Brûlure]</span>.<br>Augmente les dégâts de <span class="buff">[Rage d'Ennio]</span>. Améliore l'effet <span class="buff">[Marque de l'Adversaire]</span>.<br></p><div class="detail-box"><h4><span class="buff">[Rage d'Ennio]</span> (Amélioré)</h4><p>Invoque un météore dans le ciel pour attaquer la cible.<br>Dégâts : <span class="stat-boost">2000 %</span> de l'Attaque.</p></div><div class="detail-box"><h4><span class="buff">[Marque de l'Adversaire]</span> (Amélioré)</h4><p>Augmente les dégâts de <strong>Rage noir d'encre</strong> de <span class="stat-boost">100 %</span>.<br>Supprime l'effet lorsque <strong>Rage noir d'encre</strong> touche sa cible.<br>Durée : 3 seconde(s).</p></div>`
    },
    summaryData: {
        0: `<h3>Passif : Rancœur</h3><p>Touche brûlure = Dégâts <span class="stat-boost">+10%</span>.<br>Rage noir active <span class="buff">[Rancœur incandescente]</span> (Dégâts subis +10%, Feu +5%, Boss +5%, Rage noir +50%).</p>`,
        1: `<h3>1 étoile</h3><p>Full Feu : Pén. Def <span class="stat-boost">+16%</span>.<br>Rage noir marque les Boss = <span class="buff">[Rage d'Ennio]</span> (Météore 1000% Atk).</p>`,
        2: `<h3>2 étoiles</h3><p>Dégâts Feu <span class="stat-boost">+10%</span>.<br></p>`,
        3: `<h3>3 étoiles</h3><p>Touche brûlure = Dégâts <span class="stat-boost">+25%</span>.<br>[Rancœur] UP : Subis +5%, Feu +15%, Boss +10%, Rage noir +100%.</p>`,
        4: `<h3>4 étoiles</h3><p>CD Rage noir d'encre <span class="stat-boost">-20%</span>.<br></p>`,
        5: `<h3>5 étoiles</h3><p>Weapon Skill Feu = Dégâts <span class="stat-boost">+50%</span> sur brûlure.<br>Météore [Rage d'Ennio] passe à <span class="stat-boost">2000%</span> Atk.</p>`
    }
};