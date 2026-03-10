// Initialise l'objet global s'il n'existe pas encore
if (typeof weaponsData === 'undefined') { 
    var weaponsData = {}; 
}

// --- CHASSEUR DE LYCANS (R) ---
weaponsData["chasseur-de-lycans"] = {
    name: "Chasseur de lycans",
    rarity: "R",
    gradient: "linear-gradient(90deg, #f1c40f, #000)",
    image: "Armes_Joueur_R/lumiere/chasseur_de_lycans/GSWeapon_LycanSlayer_01_PortraitBig.png",
    fullData: {
        0: `<h3>Passif :</h3><p>Lorsque l'Attaque de noyau de l'utilisateur touche sa cible, elle lui applique l'effet <span class="buff">[Cible]</span>.<br></p><div class="detail-box"><h4><span class="buff">[Cible]</span></h4><p>Les dégâts infligés avec <strong>Chasse aux lycans</strong> augmentent de <span class="stat-boost">50 %</span>.<br>Durée : 8 seconde(s)</p></div>`,
        1: `<h3>1 étoile :</h3><p>L'utilisateur inflige des dégâts supplémentaires équivalents à <span class="stat-boost">100 %</span> de l'Attaque tous les 10 coup(s).<br></p>`,
        2: `<h3>2 étoiles :</h3><p>Vos dégâts de lumière augmentent de <span class="stat-boost">6 %</span>.<br></p>`,
        3: `<h3>3 étoiles :</h3><p>Les dégâts des attaques de noyau de Jinwoo augmentent de <span class="stat-boost">40 %</span>.<br></p>`,
        4: `<h3>4 étoiles :</h3><p>Le temps de rechargement de <strong>Chasse aux lycans</strong> diminue de <span class="stat-boost">10 %</span>.<br></p>`,
        5: `<h3>5 étoiles :</h3><p>Lorsque <strong>Chasse aux lycans</strong> est utilisée sur des cibles affectées par l'effet <span class="buff">[Cible]</span>, l'effet Dégâts subis augmentés passe à <span class="stat-boost">200 %</span>.<br></p>`
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
    gradient: "linear-gradient(90deg, #f1c40f, #000)",
    image: "Armes_Joueur_R/lumiere/cube_de_tempete_de_sable/GSWeapon_SandCentipedeCube_PortraitBig.png",
    fullData: {
        0: `<h3>Passif :</h3><p>Lorsque la compétence <strong>Yeux luisants</strong> touche sa cible, elle lui inflige l'effet <span class="buff">[Écran de fumée]</span>.<br></p><div class="detail-box"><h4><span class="buff">[Écran de fumée]</span></h4><p>Réduit la Précision de <span class="stat-boost">5 %</span> (cumulable jusqu'à 3 fois).<br>Durée : 20 seconde(s)</p></div>`,
        1: `<h3>1 étoile :</h3><p>Lorsqu'une cible affectée par <span class="buff">[Écran de fumée]</span> est attaquée, la Précision augmente de <span class="stat-boost">5 %</span>.<br></p>`,
        2: `<h3>2 étoiles :</h3><p>Vos dégâts de lumière augmentent de <span class="stat-boost">6 %</span>.<br></p>`,
        3: `<h3>3 étoiles :</h3><p>Lors de l'utilisation de la compétence <strong>Yeux luisants</strong>, si l'utilisateur subit une attaque ou si son Attaque de noyau touche sa cible dans les 10 seconde(s), ce dernier inflige à la cible des dégâts supplémentaires équivalents à <span class="stat-boost">150 %</span> de son Attaque et lui applique l'effet <span class="buff">[Écran de fumée]</span>.<br></p>`,
        4: `<h3>4 étoiles :</h3><p>Réduit les temps de rechargement de la compétence <strong>Yeux luisants</strong> de <span class="stat-boost">10 %</span>.<br></p>`,
        5: `<h3>5 étoiles :</h3><p>Lorsque l'effet <span class="buff">[Écran de fumée]</span> se cumule 3 fois, il se transforme en effet <span class="buff">[Écran de fumée amélioré]</span>.<br></p><div class="detail-box"><h4><span class="buff">[Écran de fumée amélioré]</span></h4><p>Réduit la Précision de <span class="stat-boost">50 %</span>. <span class="buff">[Écran de fumée]</span> ne peut pas s'activer.<br>Durée : 20 seconde(s)</p></div>`
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
    gradient: "linear-gradient(90deg, #f1c40f, #000)",
    image: "Armes_Joueur_SR/lumiere/arc_long_de_la_famille_radir/GSWeapon_RadiruGreatBow_01_PortraitBig.png",
    fullData: {
        0: `<h3>Passif :</h3><p>Chaque fois que la flèche d'<strong>Éclat de lumière</strong> pénètre une cible, les dégâts infligés par l'utilisateur augmentent de <span class="stat-boost">4%</span> (cumulable jusqu'à 20 fois).<br></p>`,
        1: `<h3>1 étoile :</h3><p>Lorsque la compétence <strong>Éclat de lumière</strong> est utilisée, la Défense de la cible est ignorée à hauteur de <span class="stat-boost">50%</span>.<br></p>`,
        2: `<h3>2 étoiles :</h3><p>Vos dégâts de lumière augmentent de <span class="stat-boost">8%</span>.<br></p>`,
        3: `<h3>3 étoiles :</h3><p>Modification des effets de la compétence <strong>Éclat de lumière</strong>:<br>Lorsque les cibles sont touchées par l'onde de choc d'<strong>Éclat de lumière</strong>, elles sont repoussées de 3m et subissent l'effet <span class="buff">[Étourdissement]</span>.<br></p><div class="detail-box"><h4><span class="buff">[Étourdissement]</span></h4><p>Cet effet immobilise la cible.<br>Durée: 2 seconde(s)</p></div>`,
        4: `<h3>4 étoiles :</h3><p>Le temps de rechargement d'<strong>Éclat de lumière</strong> diminue de <span class="stat-boost">15%</span>.<br></p>`,
        5: `<h3>5 étoiles :</h3><p>Augmente les dégâts de toutes les attaques de <span class="stat-boost">25%</span> sur les cibles <span class="buff">[étourdies]</span>.<br></p>`
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
    gradient: "linear-gradient(90deg, #f1c40f, #000)",
    image: "Armes_Joueur_SR/lumiere/epee_de_dragon_etincelante/GSWeapon_LightningDragonBlade_PortraitBig.png",
    fullData: {
        0: `<h3>Passif :</h3><p>Lorsque les PV de l'utilisateur sont supérieurs à <span class="stat-boost">80%</span>, applique l'effet <span class="buff">[Énergie du dragon de lumière]</span>.<br></p><div class="detail-box"><h4><span class="buff">[Énergie du dragon de lumière]</span></h4><p>Augmente l'attaque de <span class="stat-boost">8%</span>.<br></p></div>`,
        1: `<h3>1 étoile :</h3><p>Applique un effet d'augmentation de <span class="stat-boost">30%</span> des Dégâts de coup critique de la compétence <span class="buff">[Énergie du dragon de lumière]</span>.<br></p>`,
        2: `<h3>2 étoiles :</h3><p>Vos dégâts de lumière augmentent de <span class="stat-boost">8%</span>.<br></p>`,
        3: `<h3>3 étoiles :</h3><p>Modification des effets de la compétence <strong>Éclat du dragon</strong>: Un éclair supplémentaire frappe successivement devant l'utilisateur.<br></p>`,
        4: `<h3>4 étoiles :</h3><p>Le temps de rechargement de la compétence <strong>Éclat du dragon</strong> diminue de <span class="stat-boost">15%</span>.<br></p>`,
        5: `<h3>5 étoiles :</h3><p>Lorsque les PV sont à 60% ou au-dessus, l'effet <span class="buff">[Énergie du dragon de lumière]</span> s'applique.<br>Lorsque la compétence <strong>Éclat du dragon</strong> est utilisée, le Taux de coup critique passe à <span class="stat-boost">100%</span>.<br></p>`
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
    gradient: "linear-gradient(90deg, #f1c40f, #000)",
    image: "Armes_Joueur_SR/lumiere/lance_de_chevalier_demoniaque/GSWeapon_DemonKnightSpear_PortraitBig.png",
    fullData: {
        0: `<h3>Passif :</h3><p>Lors de l'utilisation de la compétence <strong>Lance sacrée</strong>, l'utilisateur applique l'effet <span class="buff">[Esprit corrompu]</span>.<br></p><div class="detail-box"><h4><span class="buff">[Esprit corrompu]</span></h4><p>Supprime le temps de rechargement de la compétence <strong>Lance sacrée</strong>.<br>Durée: 3 seconde(s)</p></div>`,
        1: `<h3>1 étoile :</h3><p>Lorsque <strong>Lance sacrée</strong> touche sa cible, l'utilisateur récupère <span class="stat-boost">1%</span> de ses PM.<br></p>`,
        2: `<h3>2 étoiles :</h3><p>Vos dégâts de lumière augmentent de <span class="stat-boost">8%</span>.<br></p>`,
        3: `<h3>3 étoiles :</h3><p>Lorsque la compétence <strong>Lance sacrée</strong> est utilisée, la durée de l'effet <span class="buff">[Esprit corrompu]</span> augmente de 4 seconde(s).<br></p>`,
        4: `<h3>4 étoiles :</h3><p>Le temps de rechargement de la compétence <strong>Lance sacrée</strong> diminue de <span class="stat-boost">15%</span>.<br></p>`,
        5: `<h3>5 étoiles :</h3><p>Pendant que l'effet <span class="buff">[Esprit corrompu]</span> est actif, la Vitesse d'attaque de l'utilisateur augmente de <span class="stat-boost">10%</span>.<br>Les dégâts de la compétence <strong>Lance sacrée</strong> augmentent de <span class="stat-boost">10%</span>.<br></p>`
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
    gradient: "linear-gradient(90deg, #f1c40f, #000)", // Couleur Lumière
    image: "Armes_Joueur_SSR/lumiere/baton_de_combat_divin/GSWeapon_ManaPole_PortraitBig.png",
    fullData: {
        0: `<h3>Passif :</h3><p>La compétence <strong>Frappe de l'Ordre céleste</strong> peut être chargée jusqu'au Stade 3, et lorsque chaque stade est chargé, elle active l'effet <span class="buff">[Concentration d'énergie de mana]</span>.<br>En cas d'utilisation de <strong>Ruée</strong> pendant la charge de la compétence, le temps de rechargement de <strong>Frappe de l'Ordre céleste</strong> diminue de 18 seconde(s) et l'effet <span class="buff">[Concentration d'énergie de mana]</span> est supprimé.<br></p><div class="detail-box"><h4><span class="buff">[Concentration d'énergie de mana]</span></h4><p>Augmente les dégâts de <strong>Frappe de l'Ordre céleste</strong> de <span class="stat-boost">100%</span> (cumulable jusqu'à 3 fois).<br>Cet effet est supprimé après une attaque avec <strong>Frappe de l'Ordre céleste</strong>.<br></p></div>`,
        1: `<h3>1 étoile :</h3><p>Lors de l'utilisation de <strong>Frappe de l'Ordre céleste</strong> avec 3 cumuls de l'effet <span class="buff">[Concentration d'énergie de mana]</span> appliqués, l'effet <span class="buff">[Lâché de Bâton de combat divin]</span> est activé.<br></p><div class="detail-box"><h4><span class="buff">[Lâché de bâton de combat divin]</span></h4><p>Crée un Bâton de combat divin géant qui inflige des dégâts équivalents à <span class="stat-boost">800%</span> de l'Attaque de l'utilisateur.<br></p></div>`,
        2: `<h3>2 étoiles :</h3><p>Augmente les dégâts de lumière de <span class="stat-boost">10%</span>.<br></p>`,
        3: `<h3>3 étoiles :</h3><p>La compétence <strong>Frappe de l'Ordre céleste</strong> peut être chargée jusqu'au Stade 5, et lorsque chaque stade est chargé, elle active l'effet <span class="buff">[Concentration d'énergie de mana]</span>.<br><span class="buff">[Concentration d'énergie de mana]</span> peut désormais se cumuler jusqu'à 5 fois.<br>Un effet <span class="buff">[Bouclier]</span> s'active lors de la charge.<br>Au bout de 5 cumuls, si l'effet <span class="buff">[Concentration d'énergie de mana]</span> s'est activé et si l'utilisateur est touché pendant la charge, la compétence <strong>Frappe de l'Ordre céleste</strong> est instantanément activée.<br></p><div class="detail-box"><h4><span class="buff">[Bouclier]</span></h4><p>Octroie un <span class="buff">[Bouclier]</span> équivalent à <span class="stat-boost">50%</span> des PV max de l'utilisateur.<br>Une fois que <strong>Frappe de l'Ordre céleste</strong> a fini de se charger, cet effet est supprimé.</p></div>`,
        4: `<h3>4 étoiles :</h3><p>Le temps de rechargement de <strong>Frappe de l'Ordre céleste</strong> diminue de <span class="stat-boost">20%</span>.<br></p>`,
        5: `<h3>5 étoiles :</h3><p>Lorsque l'effet <span class="buff">[Concentration d'énergie de mana]</span> atteint 5 cumuls, les dégâts de l'effet <span class="buff">[Lâché de bâton de combat divin]</span> augmentent de <span class="stat-boost">150%</span>.<br></p>`
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
    gradient: "linear-gradient(90deg, #f1c40f, #000)",
    image: "Armes_Joueur_SSR/lumiere/le_chasseur/GSWeapon_KillWolf_PortraitBig.png",
    fullData: {
        0: `<h3>Passif :</h3><p>Lors de l'utilisation de <strong>Jugement</strong>, l'utilisateur active son Attaque de noyau.<br>Lors de l'utilisation de <strong>Jugement</strong>, l'Attaque de noyau devient <strong>Que la chasse commence</strong> pendant 6 seconde(s) et les dégâts augmentent de <span class="stat-boost">100%</span>.<br>Lorsque l'Attaque de base, l'Attaque de noyau ou la compétence <strong>Que la chasse commence</strong> touchent des cibles dans un rayon de 4 m, les dégâts augmentent de <span class="stat-boost">50%</span>.<br></p>`,
        1: `<h3>1 étoile :</h3><p>Lorsque la dernière attaque de <strong>Jugement</strong> touche sa cible, elle inflige l'effet <span class="buff">[Cission]</span>.<br>Lorsque la cible entre en état de <span class="buff">[Bris]</span> alors que l'effet <span class="buff">[Cission]</span> est actif, l'effet <span class="buff">[Destruction]</span> s'applique à la cible.<br></p><div class="detail-box"><h4><span class="buff">[Faille]</span></h4><p>Augmente l'effet <span class="buff">[Bris]</span> de <span class="stat-boost">25%</span>.<br>Durée: 3 seconde(s)</p></div><div class="detail-box"><h4><span class="buff">[Destruction]</span></h4><p>Augmente les dégâts subis de <span class="stat-boost">8%</span>.<br>Durée: infinie</p></div>`,
        2: `<h3>2 étoiles :</h3><p>Vos dégâts de lumière augmentent de <span class="stat-boost">10%</span>.<br></p>`,
        3: `<h3>3 étoiles :</h3><p>Lorsque la première attaque de <strong>Jugement</strong> touche sa cible, elle lui applique l'effet <span class="buff">[Halte]</span>.<br></p><div class="detail-box"><h4><span class="buff">[Prise]</span></h4><p>Interrompt la cible.<br>Durée: 2 seconde(s)</p></div>`,
        4: `<h3>4 étoiles :</h3><p>Le temps de rechargement de <strong>Jugement</strong> diminue de <span class="stat-boost">20%</span>.<br></p>`,
        5: `<h3>5 étoiles :</h3><p>Modification de l'effet <span class="buff">[Destruction]</span><br>Augmente les dégâts subis de <span class="stat-boost">16%</span> (cumulable jusqu'à 99 fois).<br>Une fois que <strong>Jugement</strong> touche sa cible et si une a Attaque de noyau suit directement la compétence, l'effet <span class="buff">[Ouverture au jugement]</span> s'applique à la cible.<br>Au bout de 3 cumuls de l'effet <span class="buff">[Ouverture au jugement)</span>, 1 cumul de <span class="buff">[Destruction]</span> est créé (cumulable 1 fois).<br></p>`
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
    gradient: "linear-gradient(90deg, #f1c40f, #000)",
    image: "Armes_Joueur_SSR/lumiere/renard_a_queue_doree/GSWeapon_GoldTaleFox_PortraitBig.png",
    fullData: {
        0: `<h3>Passif :</h3><p>Lorsque l'utilisateur rejoint le niveau, il obtient 9 cumuls de l'effet <span class="buff">[Queue de renard]</span>.<br>Lorsque l'utilisateur lance la compétence <strong>Prélude</strong>, il obtient 1 cumul de l'effet <span class="buff">[Queue de renard]</span>.<br>Si l'utilisateur parvient à esquiver pendant la charge de cette compétence, he active l'effet <span class="buff">[Évasion extrême]</span>.<br></p><div class="detail-box"><h4><span class="buff">[Queue de renard]</span></h4><p>Augmente le Taux de coup critique et les Dégâts de coup critique de la compétence de base de lumière de <span class="stat-boost">12.25%</span> (cumulable jusqu'à 1 fois).<br>Cet effet se dissipe lorsque l'utilisateur lance une compétence de base de lumière.<br>Durée: illimitée (cumulable jusqu'à 9 fois)</p></div>`,
        1: `<h3>1 étoile :</h3><p>Lorsque la compétence <strong>Prélude</strong> touche sa cible, elle lui applique l'effet <span class="buff">[Plaie dorée]</span>.<br></p><div class="detail-box"><h4><span class="buff">[Plaie dorée]</span></h4><p>Lorsque l'utilisateur attaque une cible affectée par <span class="buff">[Plaie Dorée]</span>, ses dégâts de lumière augmentent de <span class="stat-boost">99.99%</span>.<br>Lorsque l'utilisateur attaque une cible avec l'effet <span class="buff">[Plaie Dorée]</span>, il récupère <span class="stat-boost">9.99%</span> de ses PV 1 fois.<br>Subir une attaque de lumière dissipe cet effet.<br>Durée: 9.9 seconde(s)</p></div>`,
        2: `<h3>2 étoiles :</h3><p>Augmente les dégâts de lumière de <span class="stat-boost">10%</span>.<br></p>`,
        3: `<h3>3 étoiles :</h3><p>Lorsqu'<span class="buff">[Évasion extrême]</span> est activée, l'utilisateur obtient 1 cumul de l'effet <span class="buff">[Queue de renard]</span>.<br>Lorsque l'utilisateur lance <strong>Prélude</strong>, il obtient 1 cumul supplémentaire de l'effet <span class="buff">[Queue de renard]</span> et un <span class="buff">[Bouclier]</span>.<br></p><div class="detail-box"><h4><span class="buff">[Bouclier]</span></h4><p>Confère un <span class="buff">[Bouclier]</span> équivalent à <span class="stat-boost">12.25%</span> des PV max de l'utilisateur.<br>Durée: 9.9 seconde(s)</p></div>`,
        4: `<h3>4 étoiles :</h3><p>Le temps de rechargement de <strong>Prélude</strong> diminue de <span class="stat-boost">20%</span>.<br></p>`,
        5: `<h3>5 étoiles :</h3><p>Lorsque l'utilisateur lance <strong>Prélude</strong> alors qu'un ennemi se trouve dans un rayon de 5 m, il charge immédiatement.<br>Lorsque seules des armes de type Lumière sont équipées, les dégâts de lumière de l'utilisateur augmentent de <span class="stat-boost">20.24 %</span> et son Attaque augmente de <span class="stat-boost">12.25%</span>.<br>L'effet <span class="buff">[Queue de renard]</span> est amélioré.<br></p><div class="detail-box"><h4><span class="buff">[Queue de renard]</span></h4><p>Augmente le Taux de coup critique et les Dégâts de coup critique de la compétence de base de lumière de l'utilisateur de <span class="stat-boost">20.24 %</span> (cumulable jusqu'à 1 fois).<br>Lorsque l'utilisateur lance une compétence de base de lumière, cet effet est dissipé.<br>Durée: illimitée (cumulable jusqu'à 9 fois)</p></div>`
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
    gradient: "linear-gradient(90deg, #f1c40f, #000)",
    image: "Armes_Joueur_SSR/lumiere/verite_lance_de_chevalier_demoniaque/GSWeapon_SSR_Demon_Knight_Spear_PortraitBig.png",
    fullData: {
        0: `<h3>Passif :</h3><p>Lors de l'utilisation de la compétence <strong>Furie de chevalier sacré</strong>, l'utilisateur applique l'effet <span class="buff">[Règles corrompues]</span>.<br></p><div class="detail-box"><h4><span class="buff">[Règles corrompues]</span></h4><p>Supprime le temps de rechargement de la compétence <strong>Furie de chevalier sacré</strong>.<br>(temps de rechargement: 20 seconde(s))<br>Augmente les dégâts élémentaires de lumière de <span class="stat-boost">10%</span>.<br>Durée: 4 seconde(s)</p></div>`,
        1: `<h3>1 étoile :</h3><p>Augmente la Vitesse d'attaque de l'utilisateur de <span class="stat-boost">15%</span> et les dégâts de <strong>Furie de chevalier sacré</strong> de <span class="stat-boost">15%</span> tant que l'effet <strong>Règles corrompues</strong> reste actif.<br>Lorsque <strong>Furie de chevalier sacré</strong> touche une cible, l'utilisateur récupère <span class="stat-boost">1%</span> de PM.<br></p>`,
        2: `<h3>2 étoiles :</h3><p>Augmente les dégâts de lumière de <span class="stat-boost">10%</span>.<br></p>`,
        3: `<h3>3 étoiles :</h3><p>Lorsque <strong>Furie de chevalier sacré</strong> touche une cible, elle lui inflige l'effet <span class="buff">[Rage du chevalier sacré corrompu]</span>.<br></p><div class="detail-box"><h4><span class="buff">[Rage du chevalier sacré corrompu]</span></h4><p>Augmente les dégâts de <strong>Furie de chevalier sacré</strong> de <span class="stat-boost">2%</span> (cumulable jusqu'à 50 fois).<br>Durée: illimitée</p></div>`,
        4: `<h3>4 étoiles :</h3><p>Le temps de rechargement de la compétence <strong>Furie de chevalier sacré</strong> diminue de <span class="stat-boost">20 %</span>.<br></p>`,
        5: `<h3>5 étoiles :</h3><p>Lorsque <strong>Furie de chevalier sacré</strong> touche une cible, elle lui inflige l'effet <span class="buff">[Malédiction du chevalier sacré]</span>.<br></p><div class="detail-box"><h4><span class="buff">[Malédiction du chevalier sacré]</span></h4><p>Au bout de 3 cumuls, elle inflige des dégâts supplémentaires équivalents à <span class="stat-boost">2000 %</span> de l'Attaque de l'utilisateur.<br>Lorsque les dégâts supplémentaires sont subis, l'effet se dissipe.<br>Durée: 60 seconde(s)</p></div>`
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
    gradient: "linear-gradient(90deg, #f1c40f, #000)",
    image: "Armes_Joueur_SSR/lumiere/Lame_fantome/GSWeapon_PhantomBlade_PortraitBig.png",
    fullData: {
},
    summaryData: {
}
};

// --- Epée du Héros ---
weaponsData["epee-du-heros"] = {
    name: "Epée du Héros",
    rarity: "SSR",
    gradient: "linear-gradient(90deg, #f1c40f, #000)",
    image: "Armes_Joueur_SSR/lumiere/Epee_du_heros/GSWeapon_HimmelSword_PortraitBig.png",
    fullData: {
},
    summaryData: {
}
};