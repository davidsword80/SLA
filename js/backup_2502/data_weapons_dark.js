// Initialise l'objet global s'il n'existe pas encore
if (typeof weaponsData === 'undefined') { 
    var weaponsData = {}; 
}

// --- ARBALÈTE D'ARACHNIDE (R) ---
weaponsData["arbalete-d-arachnide"] = {
    name: "Arbalète d'Arachnide",
    rarity: "R",
    gradient: "linear-gradient(90deg, #4a235a, #000)",
    image: "Armes_Joueur_R/tenebre/arbalete_d_arachnide/GSWeapon_GiantArachne_01_PortraitBig.png",
    fullData: {
        0: `<h3>Passif :</h3><p>Lorsque <strong>Barrage d'aiguilles empoisonnées</strong> touche sa cible, l'utilisateur lui inflige l'effet <span class="buff">[Empoisonnement]</span>.<br></p><div class="detail-box"><h4><span class="buff">[Empoisonnement]</span></h4><p>L'utilisateur inflige des dégâts équivalents à <span class="stat-boost">50%</span> de son Attaque toutes les 3 seconde(s).<br>Réduit le Taux de récupération des PV de <span class="stat-boost">70%</span>.<br>Durée: 30 seconde(s)</p></div>`,
        1: `<h3>1 étoile :</h3><p>Lorsque la compétence <strong>Barrage d'aiguilles empoisonnées</strong> est utilisée, <strong>Ruée</strong> gagne 1 charge.<br></p>`,
        2: `<h3>2 étoiles :</h3><p>Vos dégâts de ténèbres augmentent de <span class="stat-boost">6%</span>.<br></p>`,
        3: `<h3>3 étoiles :</h3><p>Les dégâts de <span class="buff">[Poison]</span> de la compétence <strong>Barrage d'aiguilles empoisonnées</strong> augmentent de <span class="stat-boost">50%</span>.<br></p>`,
        4: `<h3>4 étoiles :</h3><p>Le temps de rechargement de <strong>Barrage d'aiguilles empoisonnées</strong> diminue de <span class="stat-boost">10%</span>.<br></p>`,
        5: `<h3>5 étoiles :</h3><p>Si Jinwoo est touché dans les airs pendant qu'il utilise <strong>Barrage d'aiguilles empoisonnées</strong>, <strong>Évasion extrême</strong> s'active.<br></p>`
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
    gradient: "linear-gradient(90deg, #4a235a, #000)",
    image: "Armes_Joueur_R/tenebre/faux_du_gardien_du_tombeau/GSWeapon_GravekeeperScythe_PortraitBig.png",
    fullData: {
        0: `<h3>Passif :</h3><p>Lorsque l'utilisateur terrasse un ennemi, applique l'effet <span class="buff">[Sanctuaire]</span>.<br></p><div class="detail-box"><h4><span class="buff">[Sanctuaire]</span></h4><p>Augmente l'Attaque de l'utilisateur de <span class="stat-boost">2 %</span> (cumulable jusqu'à 10 fois).<br>Durée : 20 seconde(s)</p></div>`,
        1: `<h3>1 étoile :</h3><p>Les dégâts infligés aux monstres non-boss avec <strong>Lame de retour</strong> augmentent de <span class="stat-boost">30 %</span>.<br></p>`,
        2: `<h3>2 étoiles :</h3><p>Augmente les dégâts de ténèbres de l'utilisateur de <span class="stat-boost">6 %</span>.<br></p>`,
        3: `<h3>3 étoiles :</h3><p>Les dégâts de la lame qui revient pendant <strong>Lame de retour</strong> augmentent de <span class="stat-boost">100 %</span>.<br></p>`,
        4: `<h3>4 étoiles :</h3><p>Réduit le temps de rechargement de <strong>Lame de retour</strong> de <span class="stat-boost">10 %</span>.<br></p>`,
        5: `<h3>5 étoiles :</h3><p>Lorsque l'utilisateur terrasse un ennemi, réduit le temps de rechargement de <strong>Lame de retour</strong> de <span class="stat-boost">3</span> seconde(s).<br></p>`
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
    gradient: "linear-gradient(90deg, #4a235a, #000)",
    image: "Armes_Joueur_SR/tenebre/epee_longue_d_orc/GSWeapon_OrcGreatSword_PortraitBig.png",
    fullData: {
        0: `<h3>Passif :</h3><p>Lorsque l'utilisateur tue un ennemi avec <strong>Épée longue d'orc</strong>, l'effet <span class="buff">[Force d'orc]</span> s'applique.<br></p><div class="detail-box"><h4><span class="buff">[Force d'orc]</span></h4><p>Augmente les dégâts d'<strong>Épée longue d'orc</strong> de <span class="stat-boost">40%</span>.<br>Réduit le temps de rechargement de 8 seconde(s).<br>Durée: 20 seconde(s)</p></div>`,
        1: `<h3>1 étoile :</h3><p>Lors de l'utilisation de la compétence <strong>Épée longue d'orc</strong>, l'effet <span class="buff">[Armure d'orc]</span> est appliqué.<br></p><div class="detail-box"><h4><span class="buff">[Armure d'orc]</span></h4><p>Crée un <span class="buff">[Bouclier]</span> équivalent à <span class="stat-boost">12%</span> des PV max de l'utilisateur.<br>Durée: 3 seconde(s)</p></div>`,
        2: `<h3>2 étoiles :</h3><p>Les dégâts élémentaires de ténèbres augmentent de <span class="stat-boost">8%</span>.<br></p>`,
        3: `<h3>3 étoiles :</h3><p>L'effet <span class="buff">[Force d'orc]</span> s'applique également en cas de Coup critique réussi.<br>Augmente les chance qu'<strong>Épée longue d'orc</strong> inflige un Coup critique de <span class="stat-boost">40 %</span>.<br></p>`,
        4: `<h3>4 étoiles :</h3><p>Réduit le temps de rechargement de la compétence de l'<strong>Épée longue d'orc</strong> de <span class="stat-boost">15%</span>.<br></p>`,
        5: `<h3>5 étoiles :</h3><p>Lorsque l'effet <span class="buff">[Armure d'orc]</span> est appliqué pendant que l'effet <span class="buff">[Force d'orc]</span> est actif, les deux effets se combinent pour devenir <span class="buff">[Prestige de haut orc]</span>.<br></p><div class="detail-box"><h4><span class="buff">[Prestige de haut orc]</span></h4><p>L'utilisateur crée un <span class="buff">[Bouclier]</span> équivalent à <span class="stat-boost">25%</span> de ses PV max.<br>Lorsque l'effet est appliqué pour la première fois, le temps de rechargement d'<strong>Épée longue d'orc</strong> se réinitialise, puis il est réduit de <span class="stat-boost">40%</span>.<br>Augmente les dégâts d'<strong>Épée longue d'orc</strong> de <span class="stat-boost">75%</span>.<br>Durée: 15 seconde(s)</p></div>`
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
    gradient: "linear-gradient(90deg, #4a235a, #000)",
    image: "Armes_Joueur_SR/tenebre/faucon_noir/GSWeapon_DarkHawk_PortraitBig.png",
    fullData: {
        0: `<h3>Passif :</h3><p>Si <strong>Évasion</strong> s'active pendant une glissade de l'utilisateur, l'effet <span class="buff">[Évasion extrême]</span> se déclenche.<br>L'activation de l'effet <span class="buff">[Évasion extrême]</span> applique l'effet <span class="buff">[Partie de chasse]</span>.<br></p><div class="detail-box"><h4><span class="buff">[Partie de chasse]</span></h4><p>Augmente l'Attaque de l'utilisateur de <span class="stat-boost">7%</span> (cumulable jusqu'à 3 fois).<br>Durée: 30 seconde(s)</p></div>`,
        1: `<h3>1 étoile :</h3><p>Lors de l'utilisation de la compétence <strong>Faucon chasseur</strong>, le temps de rechargement des compétences <strong>Foulée de l'ombre</strong>, <strong>Mort</strong> ou <strong>Effondrement</strong> est réinitialisé et activé.<br>Taux de réinitialisation: <span class="stat-boost">20%</span> pour <strong>Foulée de l'ombre</strong>, <span class="stat-boost">40%</span> pour <strong>Mort</strong>, <span class="stat-boost">40%</span> pour <strong>Effondrement</strong></p>`,
        2: `<h3>2 étoiles :</h3><p>Vos dégâts de ténèbres augmentent de <span class="stat-boost">8 %</span>.<br></p>`,
        3: `<h3>3 étoiles :</h3><p>Modification des effets de la compétence <strong>Faucon chasseur</strong>:<br>La compétence peut être utilisée jusqu'à 2 fois.<br></p>`,
        4: `<h3>4 étoiles :</h3><p>Le temps de rechargement de <strong>Faucon chasseur</strong> diminue de <span class="stat-boost">15%</span>.<br></p>`,
        5: `<h3>5 étoiles :</h3><p>Lorsque la compétence <strong>Faucon chasseur</strong> est utilisée, elle applique l'effet <span class="buff">[Œil de faucon]</span>.<br></p><div class="detail-box"><h4><span class="buff">[Œil de faucon]</span></h4><p>Augmente les dégâts des compétences <strong>Effondrement</strong>, <strong>Mort</strong> et <strong>Foulée de l'ombre</strong> de <span class="stat-boost">30%</span>.<br>Durée: 3 seconde(s)</p></div>`
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
    gradient: "linear-gradient(90deg, #4a235a, #000)",
    image: "Armes_Joueur_SSR/tenebre/winchester_roke/GSWeapon_WinchesterLock_PortraitBig.png",
    fullData: {
        0: `<h3>Passif :</h3><p>L'utilisation de la compétence <strong>[Apocalypse]</strong> active <span class="buff">[Rechargement rotatif]</span>.<br></p><div class="detail-box"><h4><span class="buff">[Rechargement rotatif]</span></h4><p>Active l'attaque de noyau de l'utilisateur.<br>Transforme l'attaque de noyau de Winchester Roke en Condamnation et augmente ses dégâts de <span class="stat-boost">20 %</span>.<br>L'effet <strong>[Rechargement rotatif]</strong> ne peut être appliqué qu' avec un maximum de 2 utilisations de Condamnation.<br>Durée : 4 seconde(s)</p></div>`,
        1: `<h3>1 étoile :</h3><p>Augmente les dégâts de la compétence <strong>[Apocalypse]</strong> de l'utilisateur de <span class="stat-boost">100 %</span> face aux cibles se trouvant à une portée de 5 m.<br>Améliore l'effet <span class="buff">[Rechargement rotatif]</span>.<br></p><div class="detail-box"><h4><span class="buff">[Rechargement rotatif]</span></h4><p>Active l'attaque de noyau de l'utilisateur.<br>Transforme l'attaque de noyau de Winchester Roke en Condamnation et augmente ses dégâts de <span class="stat-boost">40 %</span>.<br>L'effet <strong>[Rechargement rotatif]</strong> ne peut être appliqué qu' avec un maximum de 3 utilisations de Condamnation.<br>Durée : 5 seconde(s)</p></div>`,
        2: `<h3>2 étoiles :</h3><p>Les dégâts de ténèbres infligés par l'utilisateur augmentent de <span class="stat-boost">10 %</span>.<br></p>`,
        3: `<h3>3 étoiles :</h3><p>L'utilisation de la compétence <strong>[Apocalypse]</strong> active <span class="buff">[Prêt ou non]</span>.<br></p><div class="detail-box"><h4><span class="buff">[Prêt ou non]</span></h4><p>Augmente les dégâts de ténèbres de la compétence Condamnation de <span class="stat-boost">15 %</span>.<br>Augmente les Dégâts de coup critique de la compétence Condamnation de <span class="stat-boost">30 %</span>.<br>Confère à l'utilisateur [Super armure].<br>Durée : 6 seconde(s)</p></div>`,
        4: `<h3>4 étoiles :</h3><p>Le temps de rechargement de la compétence <strong>[Apocalypse]</strong> diminue de <span class="stat-boost">20 %</span>.<br></p>`,
        5: `<h3>5 étoiles :</h3><p>Les compétences <span class="buff">[Rechargement rotatif et Prêt ou non]</span> sont améliorées.<br></p><div class="detail-box"><h4><span class="buff">[Rechargement rotatif]</span></h4><p>Active l'attaque de noyau de l'utilisateur.<br>Transforme l'attaque de noyau de Winchester Roke en Condamnation, et ses dégâts augmentent de <span class="stat-boost">80 %</span>.<br>Augmente les dégâts de Surcharge de Condamnation de <span class="stat-boost">70 %</span>.<br>L'effet <strong>[Rechargement rotatif]</strong> ne peut être appliqué qu' avec un maximum de 4 utilisations de Condamnation.<br>Durée : 6 seconde(s)</p><h4><span class="buff">[Prêt ou non]</span></h4><p>Augmente les dégâts de ténèbres de Condamnation de <span class="stat-boost">30 %</span>.<br>Augmente les Dégâts de coup critique de la compétence Condamnation de <span class="stat-boost">60 %</span>.<br>Confère à l'utilisateur [Super armure].<br>Durée : 6 seconde(s)</p></div>`
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
    gradient: "linear-gradient(90deg, #5b2c6f, #000)",
    image: "Armes_Joueur_SSR/tenebre/cle_de_transfiguration/GSWeapon_KeyOfTrans_PortraitBig.png",
    fullData: {
        0: `<h3>Passif :</h3><p>L'utilisation de <strong>Frappe de morphobête</strong> restaure <span class="stat-boost">100 %</span> de la jauge de noyau de l'utilisateur et active l'effet <span class="buff">[Regard de morphobête]</span>.<br></p><div class="detail-box"><h4><span class="buff">[Regard de morphobête]</span></h4><p>L'utilisation d'une attaque de noyau de ténèbres active <span class="stat-boost">[Flux instable de morphobête]</span> devant l'utilisateur (temps de rechargement : 2 seconde(s)).<br>Durée : 15 seconde(s)</p><h4><span class="stat-boost">[Flux instable de morphobête]</span></h4><p>Inflige des dégâts élémentaires de <strong>ténèbres</strong> équivalents à <span class="stat-boost">900 %</span> de l'Attaque de Sung Jinwoo.<br>Compte comme une <strong>attaque de noyau</strong>.</p></div>`,
        1: `<h3>1 étoile :</h3><p>Lorsque toutes les armes dont l'utilisateur est équipé sont de l'élément Ténèbres, l'effet <span class="buff">[Esprit de morphobête]</span> est activé.<br></p><div class="detail-box"><h4><span class="buff">[Esprit de morphobête]</span></h4><p>Augmente les dégâts de Surcharge de ténèbres de <span class="stat-boost">10 %</span>.<br>Augmente l'effet d'[Accumulation élémentaire] de [Ténèbres] de <span class="stat-boost">20 %</span>.<br>Durée : illimitée</p></div>`,
        2: `<h3>2 étoiles :</h3><p>Les dégâts de ténèbres infligés par l'utilisateur augmentent de <span class="stat-boost">10 %</span>.<br></p>`,
        3: `<h3>3 étoiles :</h3><p>L'activation de <strong>[Flux instable de morphobête]</strong> active <span class="buff">[Énergie de la transfiguration]</span>.<br></p><div class="detail-box"><h4><span class="buff">[Énergie de la transfiguration]</span></h4><p>Augmente les dégâts de l'attaque de noyau et de la compétence d'arme de ténèbres de <span class="stat-boost">15 %</span>.<br>Augmente le Taux de coup critique de l'attaque de noyau et de la compétence d'arme de ténèbres de <span class="stat-boost">3 %</span>.<br>Augmente les Dégâts de coup critique de l'attaque de noyau et de la compétence d'arme de ténèbres de <span class="stat-boost">10 %</span>.<br>Durée : 10 seconde(s) (cumulable jusqu'à 2 fois)</p></div>`,
        4: `<h3>4 étoiles :</h3><p>Diminue le temps de rechargement de <strong>Frappe de morphobête</strong> de <span class="stat-boost">20 %</span>.<br></p>`,
        5: `<h3>5 étoiles :</h3><p>Les effets <span class="buff">[Esprit de morphobête et Énergie de la transfiguration]</span> sont améliorés.<br></p><div class="detail-box"><h4><span class="buff">[Esprit de morphobête]</span></h4><p>Augmente les dégâts de Surcharge de ténèbres de <span class="stat-boost">20 %</span>.<br>Augmente l'effet d'[Accumulation élémentaire] de [Ténèbres] de <span class="stat-boost">40 %</span>.<br>Lorsque l'effet [Surcharge] de [Ténèbres] est activé, les dégâts de compétence d'arme de ténèbres augmentent de <span class="stat-boost">100 %</span> pendant 3 seconde(s), et le nombre de cumuls d'Énergie de la transfiguration passe à 5 (temps de rechargement : 15 seconde(s)).<br>Durée : illimitée</p><h4><span class="buff">[Énergie de la transfiguration]</span></h4><p>Augmente les dégâts de l'attaque de noyau et de la compétence d'arme de ténèbres de <span class="stat-boost">15 %</span>.<br>Augmente le Taux de coup critique de l'attaque de noyau et de la compétence d'arme de ténèbres de <span class="stat-boost">3 %</span>.<br>Augmente les Dégâts de coup critique de l'attaque de noyau et de la compétence d'arme de ténèbres de <span class="stat-boost">10 %</span>.<br>Durée : <span class="stat-boost">15 seconde(s)</span> (cumulable jusqu'à 5 fois)</p></div>`
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
    gradient: "linear-gradient(90deg, #8e44ad, #000)",
    image: "Armes_Joueur_SSR/tenebre/epee_demoniaque _fleur_de_prunier/GSWeapon_PlumBlossom_PortraitBig.png",
    fullData: {
        0: `<h3>Passif :</h3><p>Après l'utilisation de <strong>Fleur de prunier : Vol prompt</strong>, l'effet <span class="buff">[Fleur de prunier]</span> s'applique.<br>Lorsque l'utilisateur réussit une <strong>Ruée</strong> suivie de <strong>Fleur de prunier: Vol prompt</strong>, l'effet <span class="buff">[Éclosion]</span> s'applique.<br></p><div class="detail-box"><h4><span class="buff">[Fleur de prunier]</span></h4><p>Augmente les dégâts de coup critique de <span class="stat-boost">12%</span> (cumulable jusqu'à 3 fois).<br>Durée: illimitée</p></div><div class="detail-box"><h4><span class="buff">[Éclosion]</span></h4><p>Augmente également la vitesse d'utilisation de <strong>Fleur de prunier : Vol prompt</strong> de <span class="stat-boost">20%</span>.<br>L'Attaque de l'utilisateur augmente de <span class="stat-boost">4%</span>.<br>Le Taux de coup critique de l'utilisateur augmente de <span class="stat-boost">4%</span>.<br>Durée: 8 seconde(s)</p></div>`,
        1: `<h3>1 étoile :</h3><p>Lorsque l'utilisateur rengaine après avoir utilisé la compétence <strong>Fleur de prunier: Vol prompt</strong>, l'effet <span class="buff">[Tirage amplificateur]</span> s'applique.<br></p><div class="detail-box"><h4><span class="buff">[Tirage amplificateur]</span></h4><p>Augmente les chances de l'utilisateur de porter un coup critique à la prochaine attaque de <span class="stat-boost">32 %</span>.<br>Augmente les dégâts de compétence de <span class="stat-boost">32%</span>.<br>Durée: 3 seconde(s)</p></div>`,
        2: `<h3>2 étoiles :</h3><p>Vos dégâts de ténèbres augmentent de <span class="stat-boost">10%</span>.<br></p>`,
        3: `<h3>3 étoiles :</h3><p>Lors de l'utilisation de <strong>Ruée</strong>, <span class="buff">[Tirage amplificateur]</span> dure 5 seconde(s) et les Dégâts de coup critique augmentent de <span class="stat-boost">32%</span>.<br></p>`,
        4: `<h3>4 étoiles :</h3><p>Le temps de rechargement de <strong>Fleur de prunier: Vol prompt</strong> est réduit de <span class="stat-boost">20%</span>.<br></p>`,
        5: `<h3>5 étoiles :</h3><p>Ajoute l'effet <span class="buff">[Fleur de prunier]</span>.<br>Les dégâts de ténèbres de l'utilisateur augmentent de <span class="stat-boost">5%</span>.<br>Applique 2 cumuls de <span class="buff">[Fleur De Prunier]</span> au début du niveau (cumulable jusqu'à 5 fois).<br></p>`
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
    gradient: "linear-gradient(90deg, #8e44ad, #000)",
    image: "Armes_Joueur_SSR/tenebre/faux_de_l_ombre/GSWeapon_LordScythe_PortraitBig.png",
    fullData: {
        0: `<h3>Passif :</h3><p>Lorsque la compétence <strong>Récolte d'esprits</strong> est utilisée, elle consomme <span class="stat-boost">5%</span> des PV actuels et augmente les dégâts de compétence de <span class="stat-boost">100%</span>.<br></p>`,
        1: `<h3>1 étoile :</h3><p>Lorsque les PV actuels de l'utilisateur sont inférieurs à 70%, l'effet <span class="buff">[Tranchant des ténèbres]</span> s'applique.<br></p><div class="detail-box"><h4><span class="buff">[Tranchant des ténèbres]</span></h4><p>Augmente le Taux de coup critique de l'utilisateur de <span class="stat-boost">25%</span>.<br></p></div>`,
        2: `<h3>2 étoiles :</h3><p>Vos dégâts de ténèbres augmentent de <span class="stat-boost">10%</span>.<br></p>`,
        3: `<h3>3 étoiles :</h3><p>Lorsque les PV actuels de l'utilisateur sont à 60% ou en dessous, <span class="stat-boost">0.4%</span> des PV actuels sont restaurés dès que la compétence touche sa cible.<br></p>`,
        4: `<h3>4 étoiles :</h3><p>Le temps de rechargement de la compétence <strong>Récolte d'esprits</strong> diminue de <span class="stat-boost">20 %</span>.<br></p>`,
        5: `<h3>5 étoiles :</h3><p>Les dégâts subis augmentent de <span class="stat-boost">15%</span>, mais l'Attaque augmente de <span class="stat-boost">15%</span>.<br></p>`
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
    gradient: "linear-gradient(90deg, #8e44ad, #000)",
    image: "Armes_Joueur_SSR/tenebre/fragment_de_zeke/GSWeapon_SSR_PieceOfSieg_PortraitBig.png",
    fullData: {
        0: `<h3>Passif :</h3><p>Lors d'une nouvelle utilisation de l'<strong>Avènement de Zeke</strong> après une <strong>Attaque au javelot</strong>, l'utilisateur réalise immédiatement une <strong>Attaque tombante</strong>.<br>Lors de l'utilisation d'<strong>Attaque au javelot</strong>, l'effet <span class="buff">[Récupération de fragment]</span> est appliqué.<br>Après l'utilisation d'<strong>Attaque tombante</strong>, l'utilisateur obtient <span class="buff">[Super armure]</span> et les dégâts qu'il subit diminuent de <span class="stat-boost">50%</span> pendant 5 seconde(s).<br></p><div class="detail-box"><h4><span class="buff">[Récupération de fragment]</span></h4><p>Lorsque l'effet se dissipe, l'effet <span class="buff">[Fragment amélioré]</span> est appliqué.<br>Durée: 3 seconde(s)</p></div><div class="detail-box"><h4><span class="buff">[Fragment amélioré]</span></h4><p>Augmente les dégâts d'<strong>Avènement de Zeke</strong> et de <strong>Retour de Zeke</strong> de <span class="stat-boost">50%</span>.<br>Durée: 3 seconde(s)</p></div>`,
        1: `<h3>1 étoile :</h3><p><strong>Retour de Zeke</strong> s'active après l'utilisation d'une <strong>Attaque tombante</strong>.<br></p><div class="detail-box"><h4><span class="buff">[Renvoyez le Zeke]</span></h4><p>Dégâts et consommation de PM: identiques à ceux d'<strong>Attaque tombante</strong><br>L'utilisateur réalise une puissante attaque de taille vers l'avant et crée un tonnerre noir.<br>Lors de l'utilisation de <strong>Retour de Zeke</strong> à la suite d'<strong>Attaque tombante</strong>, les dégâts d'attaque augmentent de <span class="stat-boost">50%</span>.<br></p></div>`,
        2: `<h3>2 étoiles :</h3><p>Vos dégâts de ténèbres augmentent de <span class="stat-boost">10%</span>.<br></p>`,
        3: `<h3>3 étoiles :</h3><p>L'utilisation d'<strong>Attaque tombante</strong> peut se faire plus rapidement.<br>Lors de l'utilisation d'<strong>Attaque tombante</strong>, l'effet <span class="buff">[Fragment amélioré]</span> est appliqué immédiatement.<br>Lors de l'utilisation à la suite d'<strong>Attaque tombante</strong> puis de <strong>Retour de Zeke</strong>, le temps de rechargement d'<strong>Avènement de Zeke</strong> diminue de 2 seconde(s).<br></p>`,
        4: `<h3>4 étoiles :</h3><p>Le temps de rechargement d'<strong>Avènement de Zeke</strong> diminue de <span class="stat-boost">20%</span>.<br></p>`,
        5: `<h3>5 étoiles :</h3><p>Lors de l'utilisation à la suite d'<strong>Attaque tombante</strong> puis de <strong>Retour de Zeke</strong>, l'effet <span class="buff">[Fragment amélioré]</span> est amélioré et l'effet <span class="buff">[Fragment de foudre noire]</span> est appliqué.<br></p><div class="detail-box"><h4><span class="buff">[Fragment de foudre noire]</span></h4><p>Augmente les dégâts d'<strong>Avènement de Zeke</strong> et de <strong>Retour de Zeke</strong> de <span class="stat-boost">80%</span>.<br>Augmente le Taux de coup critique d'<strong>Avènement de Zeke</strong> et de <strong>Retour de Zeke</strong> de <span class="stat-boost">20%</span>.<br>Durée: 3 seconde(s)</p></div>`
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
    gradient: "linear-gradient(90deg, #8e44ad, #000)",
    image: "Armes_Joueur_SSR/tenebre/ombre_selene/GSWeapon_MoonShadow_PortraitBig.png",
    fullData: {
        0: `<h3>Passif :</h3><p>Lors de l'utilisation de la compétence <strong>Éclat lunaire dans la nuit</strong>, l'effet <span class="buff">[Pleine lune]</span> est appliqué aux cibles sur la lune.<br>Lorsque la dernière attaque d'<strong>Éclat lunaire dans la nuit</strong> touche sa cible, le temps ralentit pendant 3 seconds et 1 cumul d'<span class="buff">[Éclipse lunaire]</span> est appliqué à la cible par cumul de <span class="buff">[Pleine lune]</span>.<br></p><div class="detail-box"><h4><span class="buff">[Pleine lune]</span></h4><p>Durée: illimitée (cumulable jusqu'à 1 fois)</p></div><div class="detail-box"><h4><span class="buff">[Éclipse lunaire]</span></h4><p>Augmente les dégâts subis de <span class="stat-boost">10%</span>.<br>Augmente les dégâts de ténèbres de l'utilisateur de <span class="stat-boost">10%</span>.<br>Durée: 3 seconde(s)</p></div>`,
        1: `<h3>1 étoile :</h3><p>Améliore les effets de <span class="buff">[Pleine lune et Éclipse lunaire]</span><br></p><div class="detail-box"><h4><span class="buff">[Pleine lune]</span></h4><p>Durée: infinie (cumulable jusqu'à 3 fois).<br></p></div><div class="detail-box"><h4><span class="buff">[Éclipse lunaire]</span></h4><p>Les dégâts subis par la cible augmentent de <span class="stat-boost">15%</span>.<br>Les dégâts de ténèbres subis par la cible augmentent de <span class="stat-boost">15%</span>.<br>Durée: 3 seconde(s)</p></div>`,
        2: `<h3>2 étoiles :</h3><p>Vos dégâts de ténèbres augmentent de <span class="stat-boost">10%</span>.<br></p>`,
        3: `<h3>3 étoiles :</h3><p>Lorsque la compétence <strong>Foulée de l'ombre</strong> touche sa cible, elle lui applique 1 instance d'<span class="buff">[Éclipse lunaire]</span> par instance de <span class="buff">[Pleine lune]</span>.<br></p>`,
        4: `<h3>4 étoiles :</h3><p>Réduit le temps de rechargement de la compétence <strong>Éclat lunaire dans la nuit</strong> de <span class="stat-boost">20%</span>.<br></p>`,
        5: `<h3>5 étoiles :</h3><p>Les dégâts de l'utilisateur et des membres de son équipe augmentent de <span class="stat-boost">15%</span> lorsque l'effet de ralentissement du temps est actif.<br></p>`
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