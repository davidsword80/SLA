if (typeof huntersData === 'undefined') { 
    var huntersData = {}; 
}

// --- SONG CHIYUL ---
huntersData["song-chiyul"] = {
    name: "Song Chiyul",
    rarity: "SR",
    element: "Feu",
    gradient: "linear-gradient(90deg, #e74c3c, #000)", // Dégradé rouge/noir pour le feu
    image: "Chasseurs_SR/feu/song_chiyul/SongChiyul_Portrait_Body.png",
    weaponImage: "Chasseurs_SR/feu/song_chiyul/talent_intact/Relic_SongChiyul_PortraitBig.png",
    weaponName: "Talent intact",
    fullData: {
        0: `
        <h3>Passif :</h3>
        <p>Lorsque la compétence <strong>Iaido de type 4: Fleur de lotus rouge</strong> touche sa cible, les dégâts d'<strong>Incinération</strong> augmentent de <span class="stat-boost">20%</span> pendant 10 seconde(s) (cumulable jusqu'à 3 fois) et la jauge de noyau se charge à <span class="stat-boost">100%</span>.<br></p>
    `,
        1: `
        <h3>1 étoile :</h3>
        <p>La consommation de PM de Chiyul augmente de <span class="stat-boost">50%</span>, mais les dégâts qu'il inflige aux monstres de type Normal augmentent de <span class="stat-boost">50%</span>.<br></p>
    `,
        2: `
        <h3>2 étoiles :</h3>
        <p>Augmente les PM de l'utilisateur de <span class="stat-boost">20 %</span>.<br></p>
    `,
        3: `
        <h3>3 étoiles :</h3>
        <p>La portée et la durée du tourbillon de flammes de la compétence <strong>Feu de l'enfer</strong> augmentent de <span class="stat-boost">50%</span>.<br></p>
    `,
        4: `
        <h3>4 étoiles :</h3>
        <p>Les dégâts d'<strong>Incinération</strong> augmentent de <span class="stat-boost">20%</span>.<br></p>
    `,
        5: `
        <h3>5 étoiles :</h3>
        <p>Les dégâts infligés par l'utilisateur augmentent de <span class="stat-boost">50%</span> lorsqu'il utilise la compétence <strong>Incinération</strong> sur des cibles affectées par <span class="buff">[Brûlure]</span>.<br></p>
    `
    },
    summaryData: {
        0: `
        <h3>Passif : Maître du Lotus Rouge</h3>
        <p>Iaido 4 touche = Dégâts Incinération <span class="stat-boost">+20%</span> (max 3) + Jauge Noyau 100%.<br></p>
    `,
        1: `
        <h3>1 étoile</h3>
        <p>Conso PM <span class="stat-boost">+50%</span>, Dégâts vs Monstres Normaux <span class="stat-boost">+50%</span>.<br></p>
    `,
        2: `
        <h3>2 étoiles</h3>
        <p>PM Max <span class="stat-boost">+20%</span>.<br></p>
    `,
        3: `
        <h3>3 étoiles</h3>
        <p>Feu de l'enfer : Portée/Durée <span class="stat-boost">+50%</span>.<br></p>
    `,
        4: `
        <h3>4 étoiles</h3>
        <p>Dégâts Incinération <span class="stat-boost">+20%</span>.<br></p>
    `,
        5: `
        <h3>5 étoiles</h3>
        <p>Incinération sur cible Brûlée = Dégâts <span class="stat-boost">+50%</span>.<br></p>
    `
    },
    weaponData: {
        0: `
        <h3>Avancement 0 :</h3>
        <p>Augmente les dégâts de feu de l'utilisateur de <span class="stat-boost">2%</span>.<br>
        Lors de l'utilisation d'une Compétence de base ou d'une Attaque de noyau, les dégâts infligés aux monstres de type Normal augmentent de <span class="stat-boost">2%</span> pendant 10 seconde(s) (cumulable jusqu'à 5 fois).<br></p>
    `,
        1: `
        <h3>Avancement 5 étoiles :</h3>
        <p>Augmente les dégâts de feu de l'utilisateur de <span class="stat-boost">8%</span>.<br>
        Lors de l'utilisation d'une Attaque de base ou de noyau, les dégâts infligés aux monstres de type Normal augmentent de <span class="stat-boost">8%</span> pendant 10 seconde(s) (cumulable jusqu'à 5 fois).<br></p>
    `,
        2: `
        <h3>Avancement 10 étoiles :</h3>
        <p>Augmente l'Attaque, la Défense et les PV de <span class="stat-boost">15%</span>.<br></p>
    `
    }
};

// --- CHOI JONGIN ---
huntersData["choi-jongin"] = {
    name: "Choi Jongin",
    rarity: "SSR",
    element: "Feu",
    gradient: "linear-gradient(90deg, #e67e22, #000)",
    image: "Chasseurs_SSR/feu/choi_jongin/choi_art.png",
    weaponImage: "Chasseurs_SSR/feu/choi_jongin/echange_equivalent/Relic_ChoiJongIn_PortraitBig.png",
    weaponName: "échange équivalent",
    fullData: {
        0: `
        <h3>Passif :</h3>
        <p>Choi Jongin ne peut pas infliger de coups critiques, mais son Attaque augmente de <span class="stat-boost">50%</span>.<br>
        Lorsque l'utilisateur lance <strong>Fin des temps</strong>, applique l'effet <span class="buff feu">[L'Arme Ultime]</span>.</p>
        
        <div class="detail-box">
            <h4><span class="buff feu">[L'Arme Ultime]</span></h4>
            <p>Réinitialise le temps de rechargement de <strong>Pluie de flammes</strong> et de <strong>Lance de feu</strong>.<br>
            Augmente l'Attaque et la Pénétration de défense de l'utilisateur de <span class="stat-boost">20%</span>.<br>
            Durée: 15 seconde(s)</p>
        </div>
    `,
        1: `
        <h3>1 étoile :</h3>
        <p>Les dégâts de <strong>Pluie de flammes</strong> triplent pendant la durée de <span class="buff feu">[L'Arme Ultime]</span>, et la compétence devient <strong>Méga cratère</strong>.</p>
    `,
        2: `
        <h3>2 étoiles :</h3>
        <p>Augmente l'Attaque de l'utilisateur de <span class="stat-boost">12%</span>.</p>
    `,
        3: `
        <h3>3 étoiles :</h3>
        <p>Augmente les dégâts de <strong>Fin des temps</strong> de <span class="stat-boost">60%</span>.</p>
    `,
        4: `
        <h3>4 étoiles :</h3>
        <p>Augmente les dégâts de <span class="buff ecarlate">[Brûlure]</span> de l'utilisateur de <span class="stat-boost">100%</span>.<br>
        Augmente les dégâts de feu infligés par l'utilisateur de <span class="stat-boost">16%</span>.</p>
    `,
        5: `
        <h3>5 étoiles :</h3>
        <p>Lorsqu'un personnage <span class="buff">[quitte le combat]</span>, le temps de rechargement de la compétence <strong>Fin des temps</strong> est divisé par 3 et la jauge de puissance se charge de <span class="stat-boost">0.8%</span> toutes les secondes.<br>
        En mode Combat d'équipe, le temps de rechargement de <strong>Fin des temps</strong>, <strong>Pluie de flammes</strong> et <strong>Lance de feu</strong> est divisé par 2 et la jauge de puissance se charge de <span class="stat-boost">0.4%</span> toutes les secondes.</p>
    `
    },
    summaryData: {
        0: `
        <h3>Passif : Le Mage Ultime</h3>
        <p>Pas de Critique, mais Attaque <span class="stat-boost">+50%</span>.<br>
        Ultime = <span class="buff feu">[L'Arme Ultime]</span>.</p>
        <div class="detail-box">
            <h4><span class="buff feu">[L'Arme Ultime]</span></h4>
            <p>Reset CD Compétences.<br>
            Attaque et Pen. Def <span class="stat-boost">+20%</span> (15s).</p>
        </div>
    `,
        1: `
        <h3>1 étoile</h3>
        <p>Sous [L'Arme Ultime] : Dégâts Pluie de flammes <span class="stat-boost">x3</span> (Devient Méga cratère).</p>
    `,
        2: `
        <h3>2 étoiles</h3>
        <p>Attaque <span class="stat-boost">+12%</span>.</p>
    `,
        3: `
        <h3>3 étoiles</h3>
        <p>Dégâts Ultime <span class="stat-boost">+60%</span>.</p>
    `,
        4: `
        <h3>4 étoiles</h3>
        <p>Dégâts Brûlure <span class="stat-boost">+100%</span>. Dégâts Feu <span class="stat-boost">+16%</span>.</p>
    `,
        5: `
        <h3>5 étoiles</h3>
        <p>Switch Out : CD Ultime divisé par 3, Regen Jauge ++.<br>
        Mode Équipe : CD skills divisés par 2, Regen Jauge +.</p>
    `
    },
    weaponData: {
        0: `
        <h3>Avancement 0 :</h3>
        <p>Augmente l'Attaque de l'utilisateur de <span class="stat-boost">5%</span>.<br>
        Lorsque des cibles affectées par l'effet <span class="buff ecarlate">[Brûlure]</span> de Choi Jongin sont attaquées, leur Défense diminue de <span class="stat-boost">7%</span> pendant 5 seconde(s).</p>
    `,
        1: `
        <h3>Avancement 5 étoiles :</h3>
        <p>Augmente l'Attaque de l'utilisateur de <span class="stat-boost">20%</span>.<br>
        Lorsque des cibles affectées par l'effet <span class="buff ecarlate">[Brûlure]</span> de Choi Jongin sont attaquées, leur Défense diminue de <span class="stat-boost">20%</span> pendant 5 seconde(s).</p>
    `,
        2: `
        <h3>Avancement 10 étoiles :</h3>
        <p>Augmente l'Attaque, la Défense et les PV de l'utilisateur de <span class="stat-boost">15%</span>.</p>
    `
    }
};

// --- CHRISTOPHER REED ---
huntersData["christopher-reed"] = {
    name: "Christopher Reed",
    rarity: "SSR",
    element: "Feu",
    gradient: "linear-gradient(90deg, #e67e22, #000)",
    image: "Chasseurs_SSR/feu/christopher_reed/christopher_art.png",
    weaponImage: "Chasseurs_SSR/feu/christopher_reed/Strategie_victorieuse/Relic_ChristopherReed_PortraitBig.png",
    weaponName: "Strategie victorieuse",
    fullData: {
        0: `
        <h3>Passif :</h3>
        <p>L'utilisation des compétences <strong>Étoile montante</strong>, <strong>Passe offensive</strong>, <strong>Coup de pied nitro</strong> ou <strong>Faute de jeu</strong> remplit la jauge d'<span class="buff">[Apparition de corps spirituel]</span> de l'utilisateur.<br>
        L'utilisation de la compétence <strong>0 à 100</strong> vide la jauge d'<span class="buff">[Apparition de corps spirituel]</span>.<br>
        Lorsque la jauge d'<span class="buff">[Apparition de corps spirituel]</span> atteint 100 %, elle active l'attaque de noyau spéciale de l'utilisateur.<br>
        L'utilisation de l'attaque de noyau spéciale active l'effet <span class="buff">[Apparition de corps spirituel]</span>.<br>
        La compétence <strong>Interception décisive</strong> devient disponible en cas d'Évasion extrême réussie.<br>
        Lorsque les compétences <strong>Performance montante</strong>, <strong>Coup de pied rapide</strong> ou <strong>0 à 100</strong> touchent leur cible, elles lui appliquent l'effet <span class="buff">[Brûlure]</span>.<br>
        L'utilisation des compétences <strong>Coup de pied nitro</strong> ou <strong>Faute de jeu</strong> dans le mode <span class="buff">[Combat d'équipe]</span> active l'effet <span class="buff">[Touchdown]</span>.<br></p>
        
        <div class="detail-box">
            <h4><span class="buff">[Interception décisive]</span></h4>
            <p>L'utilisateur attrape un ballon devant l'ennemi et le frappe au sol pour faire un touchdown.<br>
            Inflige des dégâts élémentaires de feu équivalents à <span class="stat-boost">1500 %</span> de la Défense de l'utilisateur.<br>
            L'utilisation de cette compétence active l'effet <span class="buff">[Touchdown]</span>.<br>
            Compte comme une compétence de base. (temps de rechargement : 15 seconde(s)).</p>
        </div>

        <div class="detail-box">
            <h4><span class="buff">[Apparition de corps spirituel]</span></h4>
            <p>Transforme l'attaque de base, l'attaque de noyau et la compétence de base de l'utilisateur en versions améliorées, et les temps de rechargement de ces compétences sont réinitialisés.<br>
            Augmente l'effet d'<span class="buff">[Accumulation élémentaire]</span> de feu de <span class="stat-boost">25 %</span>.<br>
            Augmente les dégâts de l'attaque de base, de l'attaque de noyau et de la compétence de base de <span class="stat-boost">150 %</span>.<br>
            L'utilisation de la compétence <strong>0 à 100</strong> supprime l'effet.<br>
            Durée : 30 seconde(s)</p>
        </div>

        <div class="detail-box">
            <h4><span class="buff">[Touchdown]</span></h4>
            <p>Augmente les dégâts de <span class="buff">[Surcharge]</span> de feu de <span class="stat-boost">15 %</span>.<br>
            Augmente l'effet d'<span class="buff">[Accumulation élémentaire]</span> de feu de <span class="stat-boost">5 %</span>.<br>
            Durée : 60 seconde(s) (cumulable jusqu'à 3 fois)</p>
        </div>

        <div class="detail-box">
            <h4><span class="buff">[Brûlure]</span></h4>
            <p>Inflige des dégâts équivalents à <span class="stat-boost">200 %</span> de la Défense de l'utilisateur toutes les 3 secondes.<br>
            Durée : 30 seconde(s)</p>
        </div>
    `,
        1: `
        <h3>1 étoile :</h3>
        <p>Augmente l'effet de l'<span class="buff">[Accumulation élémentaire]</span> de feu de <span class="stat-boost">20 %</span>.<br></p>
    `,
        2: `
        <h3>2 étoiles :</h3>
        <p>Si l'effet <span class="buff">[Immunité contre l'Accumulation élémentaire]</span> de feu est actif sur la cible lorsque l'utilisateur porte une attaque, sa jauge d'<span class="buff">[Apparition de corps spirituel]</span> se remplit (temps de rechargement : 15 seconde(s)).<br>
        Lorsque des membres de l'équipe de l'élément Feu, y compris l'utilisateur, utilisent leurs compétences de base ou ultime, la jauge d'<span class="buff">[Apparition de corps spirituel]</span> de l'utilisateur se remplit.<br>
        Augmente les dégâts de la compétence <strong>Interception décisive</strong> de <span class="stat-boost">25 %</span> contre les cibles affectées par <span class="buff">[Brûlure]</span>.<br></p>
    `,
        3: `
        <h3>3 étoiles :</h3>
        <p>Lorsque l'effet <span class="buff">[Apparition de corps spirituel]</span> est activé, l'utilisateur récupère <span class="stat-boost">30 %</span> de ses PV et reçoit un <span class="buff">[Bouclier]</span>.<br>
        Lorsque l'attaque de l'utilisateur touche une cible affectée par <span class="buff">[Brûlure]</span>, l'utilisateur reçoit l'effet <span class="buff">[Esprit de compétition]</span> (temps de rechargement : 2 seconde(s)).<br></p>

        <div class="detail-box">
            <h4><span class="buff">[Esprit de compétition]</span></h4>
            <p>Augmente les dégâts de feu de <span class="stat-boost">165 %</span>.<br>
            Augmente les dégâts de la compétence <strong>Interception décisive</strong> de <span class="stat-boost">15 %</span>.<br>
            Durée : 15 seconde(s)</p>
        </div>

        <div class="detail-box">
            <h4><span class="buff">[Bouclier]</span></h4>
            <p>Confère un <span class="buff">[Bouclier]</span> équivalent à <span class="stat-boost">100 %</span> de la Défense de l'utilisateur.<br>
            Durée : 20 seconde(s)</p>
        </div>
    `,
        4: `
        <h3>4 étoiles :</h3>
        <p>Les dégâts de feu des membres de l'équipe de l'élément Feu augmentent de <span class="stat-boost">5 %</span> par allié de l'élément Feu présent dans le groupe.<br></p>
    `,
        5: `
        <h3>5 étoiles :</h3>
        <p>Lorsque Christopher Reed ou un allié parvient à déclencher l'effet <span class="buff">[Surcharge]</span> de feu, sa jauge de puissance se remplit de <span class="stat-boost">20 %</span> et le temps de rechargement de la compétence <strong>0 à 100</strong> est réinitialisé (temps de rechargement : 30 seconde(s)).<br>
        Lorsqu'une attaque de Christopher Reed touche une cible affectée par l'effet <span class="buff">[Surcharge]</span> de feu, elle lui applique <span class="buff">[Choc flamboyant]</span> (temps de rechargement : 30 seconde(s)).<br>
        Lorsque l'effet <span class="buff">[Apparition de corps spirituel]</span> est activé, l'effet <span class="buff">[Esprit du vainqueur]</span> est activé.<br></p>

        <div class="detail-box">
            <h4><span class="buff">[Choc flamboyant]</span></h4>
            <p>Augmente les dégâts de <span class="buff">[Surcharge]</span> de feu infligés de <span class="stat-boost">20 %</span>.<br>
            L'effet <span class="buff">[Irrémédiable]</span> est activé.<br>
            Durée : 30 seconde(s)</p>
        </div>

        <div class="detail-box">
            <h4><span class="buff">[Esprit du vainqueur]</span></h4>
            <p>Augmente les dégâts de la compétence <strong>0 à 100</strong> de <span class="stat-boost">250 %</span>.<br>
            Les effets sont supprimés lors de l'utilisation de la compétence <strong>0 à 100</strong>.<br>
            (Les compétences QTE des alliés ne peuvent pas être utilisées automatiquement en <span class="buff">[Mode Chasseur]</span> pendant 25 seconde(s).)<br>
            Durée : 60 seconde(s)</p>
        </div>
    `
    },
    summaryData: {
        0: `
        <h3>Passif : Esprit du Feu</h3>
        <p>Compétences = Charge la jauge <span class="buff">[Apparition]</span>.<br>
        Jauge 100% = Attaque Noyau Spéciale qui active <span class="buff">[Apparition de corps spirituel]</span>.<br>
        <strong>[Apparition]</strong> : Reset CD, Dégâts Compétences <span class="stat-boost">+150%</span>, Accumulation <span class="stat-boost">+25%</span>.<br>
        Compétences appliquent <span class="buff">[Brûlure]</span> et <span class="buff">[Touchdown]</span> (Buff Surcharge).</p>
    `,
        1: `
        <h3>1 étoile</h3>
        <p>Effet d'<span class="buff">[Accumulation élémentaire]</span> de feu <span class="stat-boost">+20%</span>.<br></p>
    `,
        2: `
        <h3>2 étoiles</h3>
        <p>Jauge se remplit si cible immunisée ou alliés utilisent compétences.<br>
        Dégâts <strong>Interception décisive</strong> sur cible Brûlée <span class="stat-boost">+25%</span>.<br></p>
    `,
        3: `
        <h3>3 étoiles</h3>
        <p>Activation [Apparition] = Soin <span class="stat-boost">30%</span> + <span class="buff">[Bouclier]</span>.<br>
        Toucher cible Brûlée = <span class="buff">[Esprit de compétition]</span> (Dégâts Feu <span class="stat-boost">+165%</span>).</p>
    `,
        4: `
        <h3>4 étoiles</h3>
        <p>Dégâts Feu équipe <span class="stat-boost">+5%</span> par allié Feu.<br></p>
    `,
        5: `
        <h3>5 étoiles</h3>
        <p>Surcharge (Soi/Allié) = Jauge Puissance <span class="stat-boost">+20%</span> + Reset <strong>0 à 100</strong>.<br>
        Toucher cible Surchargée = <span class="buff">[Choc flamboyant]</span> (Dégâts Surcharge <span class="stat-boost">+20%</span>, Anti-heal).<br>
        [Apparition] active <span class="buff">[Esprit du vainqueur]</span> (Dégâts "0 à 100" <span class="stat-boost">+250%</span>).</p>
    `
    },
    weaponData: {
        0: `
        <h3>Avancement 0 :</h3>
        <p>La Défense de l'utilisateur augmente de <span class="stat-boost">5%</span>.<br>
        Le temps de rechargement de la Ruée de l'utilisateur diminue de <span class="stat-boost">5%</span>.<br>
        L'utilisation de la compétence <strong>0 à 100</strong> augmente la Pénétration de défense de l'utilisateur de <span class="stat-boost">2%</span> pendant 20 seconde(s).</p>
    `,
        1: `
        <h3>Avancement 5 étoiles :</h3>
        <p>La Défense de l'utilisateur augmente de <span class="stat-boost">50%</span>.<br>
        Le temps de rechargement de la Ruée de l'utilisateur diminue de <span class="stat-boost">20%</span>.<br>
        L'utilisation de la compétence <strong>0 à 100</strong> augmente la Pénétration de défense de l'utilisateur de <span class="stat-boost">15%</span> pendant 20 seconde(s).</p>
    `,
        2: `
        <h3>Avancement 10 étoiles :</h3>
        <p>L'Attaque, la Défense et les PV de l'utilisateur augmentent de <span class="stat-boost">15%</span>.</p>
    `
    }
};

// --- EMMA LAURENT ---
huntersData["emma-laurent"] = {
    name: "Emma Laurent",
    rarity: "SSR",
    element: "Feu",
    gradient: "linear-gradient(90deg, #e67e22, #000)",
    image: "Chasseurs_SSR/feu/emma_laurent/emma_art.png",
    weaponImage: "Chasseurs_SSR/feu/emma_laurent/pensees_nocturnes/Relic_EmmaLaurent_PortraitBig.png",
    weaponName: "Pensées nocturnes",
    fullData: {
        0: `
        <h3>Passif :</h3>
        <p>L'effet <span class="buff feu">[Absorption de chaleur]</span> s'applique pour chaque action spécifique.<br>
        Lorsque l'utilisatrice lance <strong>Rapière de feu</strong>, applique l'effet <span class="buff ecarlate">[Radiation de chaleur]</span> en fonction du nombre de cumuls d'[Absorption de chaleur].</p>
        <ul>
            <li>Attaque de base ou Dégâts subis : <strong>+2 cumuls</strong> [Absorption].</li>
            <li>Compétences (Attaque de noyau, Traînée brûlante, Jugement incandescent, Évasion) : <strong>+5 cumuls</strong> [Absorption].</li>
            <li>Fierté incandescente : <strong>+10 cumuls</strong> [Absorption].</li>
        </ul>
        <p>Lorsque l'effet [Radiation de chaleur] est activé, l'effet [Absorption de chaleur] appliqué est consumé.</p>
        
        <div class="detail-box">
            <h4><span class="buff feu">[Absorption de chaleur]</span></h4>
            <p><strong>5 cumuls :</strong> Défense <span class="stat-boost">+7.77%</span>.<br>
            <strong>10 cumuls :</strong> Récupère des PV à hauteur de 7.77% des dégâts subis (15s).<br>
            <strong>15 cumuls :</strong> Applique un <span class="buff">[Bouclier]</span> (7.77% des PV max).<br>
            Durée: 15s</p>
        </div>
        <div class="detail-box">
            <h4><span class="buff ecarlate">[Radiation de chaleur]</span></h4>
            <p><strong>5 cumuls :</strong> Pénétration de défense <span class="stat-boost">+7.77%</span>.<br>
            <strong>10 cumuls :</strong> Dégâts de feu de l'utilisatrice <span class="stat-boost">+7.77%</span>.<br>
            <strong>15 cumuls :</strong> Dégâts de feu de l'équipe <span class="stat-boost">+7.77%</span>.<br>
            Durée: 20s</p>
        </div>
    `,
        1: `
        <h3>1 étoile :</h3>
        <p>Augmente les dégâts de Bris de <strong>Traînée brûlante</strong> de <span class="stat-boost">77.77%</span>.</p>
    `,
        2: `
        <h3>2 étoiles :</h3>
        <p>L'efficacité de <span class="buff">[Bris]</span> de l'utilisateur augmente de <span class="stat-boost">10%</span>.<br>
        Augmente les dégâts infligés aux cibles avec le statut [Bris] de <span class="stat-boost">20%</span>.</p>
    `,
        3: `
        <h3>3 étoiles :</h3>
        <p>L'effet <span class="buff feu">[Absorption de chaleur]</span> s'applique aux membres de l'équipe.<br>
        Applique 5 cumuls d'[Absorption de chaleur] à l'arrivée dans le niveau.</p>
    `,
        4: `
        <h3>4 étoiles :</h3>
        <p>Les PV de l'utilisateur augmentent de <span class="stat-boost">10%</span>.</p>
    `,
        5: `
        <h3>5 étoiles :</h3>
        <p>Lorsque la cible entre en état de <span class="buff">[Bris]</span> :<br>
        - Réinitialise le temps de rechargement de toutes les compétences.<br>
        - Récupère <strong>100%</strong> de la jauge de noyau et de la jauge de puissance.<br>
        - Applique l'effet <span class="buff ecarlate">[Augmentation des dégâts]</span>.</p>
        <div class="detail-box">
            <h4><span class="buff ecarlate">[Augmentation des dégâts]</span></h4>
            <p>Augmente les dégâts de <span class="stat-boost">77.77%</span>.<br>Durée: 15s</p>
        </div>
    `
    },
    summaryData: {
        0: `
        <h3>Passif : Maîtrise de la Chaleur</h3>
        <p>Génère <span class="buff feu">[Absorption]</span> via Attaques/Compétences.<br>
        Consomme [Absorption] via <strong>Rapière de feu</strong> pour activer <span class="buff ecarlate">[Radiation]</span>.</p>
        <div class="detail-box">
            <h4><span class="buff feu">[Absorption]</span> (Max 15)</h4>
            <p>Bonus Def, Regen PV, Bouclier (7.77%).</p>
        </div>
        <div class="detail-box">
            <h4><span class="buff ecarlate">[Radiation]</span> (Max 15)</h4>
            <p>Pen Def, Dégâts Feu Perso/Équipe (7.77%).</p>
        </div>
    `,
        1: `
        <h3>1 étoile</h3>
        <p>Dégâts Bris (Traînée brûlante) <span class="stat-boost">+77.77%</span>.</p>
    `,
        2: `
        <h3>2 étoiles</h3>
        <p>Efficacité Bris <span class="stat-boost">+10%</span>. Dégâts sur [Bris] <span class="stat-boost">+20%</span>.</p>
    `,
        3: `
        <h3>3 étoiles</h3>
        <p>[Absorption] partagé avec l'équipe. Début combat : +5 cumuls.</p>
    `,
        4: `
        <h3>4 étoiles</h3>
        <p>PV Max <span class="stat-boost">+10%</span>.</p>
    `,
        5: `
        <h3>5 étoiles</h3>
        <p>Sur inflige [Bris] : Reset CD skills, Jauges 100%, Dégâts <span class="stat-boost">+77.77%</span> (15s).</p>
    `
    },
    weaponData: {
        0: `
        <h3>Avancement 0 :</h3>
        <p>Augmente les dégâts infligés aux cibles affectées par l'effet <span class="buff">[Bris]</span> de <span class="stat-boost">4%</span>.<br>
        Lorsque l'effet <span class="buff feu">[Absorption de chaleur]</span> s'active, les dégâts infligés par l'utilisateur augmentent de <span class="stat-boost">1.5%</span> (cumulable jusqu'à 4 fois).</p>
    `,
        1: `
        <h3>Avancement 5 étoiles :</h3>
        <p>Augmente les dégâts infligés aux cibles affectées par l'effet <span class="buff">[Bris]</span> de <span class="stat-boost">12%</span>.<br>
        Lorsque l'effet <span class="buff feu">[Absorption de chaleur]</span> s'active, les dégâts infligés par l'utilisateur augmentent de <span class="stat-boost">1.5%</span> (cumulable jusqu'à 15 fois).</p>
    `,
        2: `
        <h3>Avancement 10 étoiles :</h3>
        <p>Augmente l'Attaque, la Défense et les PV de l'utilisateur de <span class="stat-boost">15%</span>.</p>
    `
    }
};

// --- ESIL RADIR ---
huntersData["esil-radir"] = {
    name: "Esil Radir",
    rarity: "SSR",
    element: "Feu",
    gradient: "linear-gradient(90deg, #e67e22, #000)",
    image: "Chasseurs_SSR/feu/esil_radir/esil_art.png",
    weaponImage: "Chasseurs_SSR/feu/esil_radir/mort_glorieuse/Relic_EsilRadiru_PortraitBig.png",
    weaponName: "Mort glorieuse",
    fullData: {
        0: `<h3>Passif :</h3><p>Lorsqu'Esil Radir parvient à mettre une cible en état de <span class="buff">[Bris]</span>, la durée de l'état de [Bris] augmente de <span class="stat-boost">3 seconde(s)</span>.<br>Lorsqu'elle utilise <strong>Impatience de la mort</strong> ou qu'<strong>Évasion extrême</strong> est activée, <strong>Jet de lance</strong> s'active.<br>Lorsqu'elle utilise <strong>Pics transperçants</strong> ou <strong>Gloire à la chaîne</strong>, elle reçoit l'effet <span class="buff pourpre">[Jet de lance amélioré]</span>.<br>Lorsque la compétence <strong>Jet de lance</strong> est activée, son efficacité augmente en fonction du nombre de cumuls de [Jet de lance amélioré] appliqués.<br>L'efficacité de [Bris] dans l'[Atelier de la lumière brillante] augmente de <span class="stat-boost">24 %</span>.</p><div class="detail-box"><h4>[Jet de lance]</h4><p>Esil projette une lance qui transperce les armures magiques (Dégâts: 800% de l'Attaque).<br>Inflige des dégâts de [Bris] légers et active l'effet <span class="buff ecarlate">[Proie]</span> (Max 5 fois).</p></div><div class="detail-box"><h4><span class="buff pourpre">[Jet de lance amélioré]</span></h4><p>Augmente les dégâts de Jet de lance et l'efficacité de [Bris] de <span class="stat-boost">80%</span> (cumulable 5 fois).<br>Supprimé après l'utilisation de Jet de lance.</p></div><div class="detail-box"><h4><span class="buff ecarlate">[Proie]</span></h4><p>Si la cible passe en état de [Bris], elle reçoit <span class="buff feu">[Mort aux faibles]</span> selon le nombre de cumuls de [Proie].<br>Durée: 60s (cumulable 50 fois).</p></div><div class="detail-box"><h4><span class="buff feu">[Mort aux faibles]</span></h4><p>Augmente les dégâts de feu subis de <span class="stat-boost">0.3%</span>.<br>Augmente les dégâts subis de <span class="stat-boost">0.3%</span>.<br>Durée: 60s (cumulable 50 fois).</p></div>`,
        1: `<h3>1 étoile :</h3><p>Tant que les effets de <strong>Victoire annoncée</strong> sont actifs, les effets de <strong>Jet de lance</strong> sont améliorés.<br>Les dégâts de Jet de lance augmentent de <span class="stat-boost">100 %</span>. <br>Lorsque Jet de lance touche sa cible, l'effet <span class="buff ecarlate">[Proie]</span> est appliqué 2 fois.<br>L'effet [Proie] déclenché par Jet de lance ne peut s'appliquer que 10 fois au maximum.</p>`,
        2: `<h3>2 étoiles :</h3><p>L'Attaque des membres de l'équipe augmente de <span class="stat-boost">3%</span> par membre de l'équipe de l'élément feu présent dans le groupe (cumulable jusqu'à 3 fois).</p>`,
        3: `<h3>3 étoiles :</h3><p>Au début du niveau, l'utilisatrice commence le combat avec sa jauge de puissance à <span class="stat-boost">100%</span>.<br>Lorsque Jet de lance touche sa cible, la jauge de puissance de l'utilisatrice se remplit de <span class="stat-boost">1%</span> et le temps de rechargement de la compétence <strong>Victoire annoncée</strong> diminue de 1 seconde (CD: 1s).<br>Lorsque Victoire annoncée touche une cible dont la jauge de [bris] est à 10% ou moins, la cible est instantanément mise en état de <span class="buff">[Bris]</span>.</p>`,
        4: `<h3>4 étoiles :</h3><p>La Pénétration de défense des membres de l'équipe augmente de <span class="stat-boost">4%</span> par membre de l'équipe de l'élément feu présent dans le groupe (cumulable jusqu'à 3 fois).</p>`,
        5: `<h3>5 étoiles :</h3><p>Lors de l'utilisation de la compétence <strong>Impatience de la mort améliorée</strong>, la compétence <strong>Jet de lance</strong> est activée une fois de plus.<br>Lorsque Jet de lance touche une cible en état de [Bris] dans les 10s, l'effet <span class="buff feu">[Mort aux faibles]</span> est déclenché au lieu de l'effet [Proie].</p><div class="detail-box"><h4><span class="buff feu">[Mort aux faibles] (Amélioré)</span></h4><p>Augmente les dégâts de feu subis de <span class="stat-boost">0.3%</span>.<br>Augmente les dégâts subis de <span class="stat-boost">0.3%</span>.<br>Durée: 90s (cumulable 100 fois).</p></div>`
    },
    summaryData: {
        0: `<h3>Passif : Esil</h3><p>Met en [Bris] = durée [Bris] <span class="stat-boost">+3s</span>.<br>Actions spécifiques activent <strong>Jet de lance</strong>.<br><strong>Jet de lance</strong> inflige [Bris] et applique <span class="buff ecarlate">[Proie]</span>.</p><div class="detail-box"><h4><span class="buff pourpre">[Jet de lance amélioré]</span></h4><p>Dégâts et efficacité [Bris] <span class="stat-boost">+80%</span> (Max 5).</p></div><div class="detail-box"><h4><span class="buff ecarlate">[Proie]</span> / <span class="buff feu">[Mort aux faibles]</span></h4><p>Si cible [Bris], convertit [Proie] en [Mort aux faibles] : Dégâts subis/Feu <span class="stat-boost">+0.3%</span> par cumul.</p></div>`,
        1: `<h3>1 étoile</h3><p>Sous <strong>Victoire annoncée</strong> : Dégâts Jet de lance <span class="stat-boost">+100%</span>.<br>Applique <span class="buff ecarlate">[Proie]</span> x2 (Max 10 cumuls).</p>`,
        2: `<h3>2 étoiles</h3><p>Attaque équipe <span class="stat-boost">+3%</span> par allié Feu (Max 3).</p>`,
        3: `<h3>3 étoiles</h3><p>Début combat : Jauge Puissance <span class="stat-boost">100%</span>.<br>Jet de lance : Puissance +1%, CD Victoire annoncée -1s.<br>Victoire annoncée : [Bris] instantané si jauge ≤ 10%.</p>`,
        4: `<h3>4 étoiles</h3><p>Pénétration Défense équipe <span class="stat-boost">+4%</span> par allié Feu (Max 3).</p>`,
        5: `<h3>5 étoiles</h3><p>Impatience de la mort améliorée active Jet de lance supplémentaire.<br>Sur cible [Bris] : Applique directement <span class="buff feu">[Mort aux faibles]</span> (Max 100 cumuls, durée 90s).</p>`
    },
    weaponData: {
        0: `<h3>Avancement 0 :</h3><p>L'Attaque de l'utilisatrice augmente de <span class="stat-boost">4%</span>.<br>Augmente l'Attaque supplémentaire du membre de l'équipe au Taux de coup critique le plus élevé de <span class="stat-boost">300 pts</span> par tranche de 1000 pts d'Attaque supplémentaire d'Esil Radir (Max <span class="stat-boost">600</span>).</p>`,
        1: `<h3>Avancement 5 étoiles :</h3><p>L'Attaque de l'utilisatrice augmente de <span class="stat-boost">12%</span>.<br>Augmente l'Attaque supplémentaire du membre de l'équipe au Taux de coup critique le plus élevé de <span class="stat-boost">300 pts</span> par tranche de 1000 pts d'Attaque supplémentaire d'Esil Radir (Max <span class="stat-boost">2400</span>).</p>`,
        2: `<h3>Avancement 10 étoiles :</h3><p>Augmente l'Attaque, la Défense et les PV de l'utilisateur de <span class="stat-boost">15%</span>.</p>`
    }
};

// --- GINA ---
huntersData["gina"] = {
    name: "Gina",
    rarity: "SSR",
    element: "Feu",
    gradient: "linear-gradient(90deg, #e67e22, #000)",
    image: "Chasseurs_SSR/feu/gina/gina_art.png",
    weaponImage: "Chasseurs_SSR/feu/gina/glamour_et_auto_reconnaissance/Relic_Gina_PortraitBig.png",
    weaponName: "Glamour et auto reconnaissance",
    fullData: {
        0: `
        <h3>Passif :</h3>
        <p>Lors de l'utilisation de <strong>Descente forcée</strong>, <strong>Masse gravitationnelle</strong> ou <strong>Voie d'extinction</strong>, l'effet <span class="buff ecarlate">[Contre-courant]</span> est appliqué.<br>
        Lorsque [Contre-courant] atteint son maximum, l'effet <span class="buff feu">[Circulation de mana]</span> est appliqué à toute l'équipe.<br>
        Après la création du [Champ gravitationnel], l'effet <span class="buff pourpre">[Rétrogradation corporelle]</span> est appliqué à l'équipe.</p>
        
        <div class="detail-box">
            <h4><span class="buff ecarlate">[Contre-courant]</span></h4>
            <p>Durée: illimitée (cumulable jusqu'à 5 fois).</p>
        </div>
        <div class="detail-box">
            <h4><span class="buff feu">[Circulation de mana]</span></h4>
            <p>Augmente l'Attaque de <span class="stat-boost">15%</span>.<br>
            Augmente les dégâts de feu de <span class="stat-boost">15%</span>.<br>
            Active : Supprime l'effet [Contre-courant].<br>
            Durée: 15s</p>
        </div>
        <div class="detail-box">
            <h4><span class="buff pourpre">[Rétrogradation corporelle]</span></h4>
            <p>Toute l'équipe récupère des PV (2% de l'Attaque de Gina) toutes les 3s.<br>
            La jauge de puissance de l'équipe se remplit de <span class="stat-boost">2%</span> toutes les 3s.<br>
            Durée: 15s</p>
        </div>
    `,
        1: `
        <h3>1 étoile :</h3>
        <p>Lorsque l'effet <span class="buff feu">[Circulation de mana]</span> s'active, l'effet <span class="buff instinct">[Transformation de mana]</span> est également appliqué à tous les membres de l'équipe.</p>
        <div class="detail-box">
            <h4><span class="buff instinct">[Transformation de mana]</span></h4>
            <p>Octroie un <span class="buff">[Bouclier]</span> équivalent à 12% de l'Attaque.<br>
            Augmente les dégâts infligés de <span class="stat-boost">12%</span>.<br>
            Réduit les dégâts subis de <span class="stat-boost">12%</span>.<br>
            Durée: 20s</p>
        </div>
    `,
        2: `
        <h3>2 étoiles :</h3>
        <p>Augmente la valeur du [Bouclier] appliqué à l'équipe de <span class="stat-boost">20%</span>.<br>
        Lorsqu'un [Bouclier] est appliqué à un membre de l'équipe, ses dégâts augmentent de <span class="stat-boost">10%</span>.</p>
    `,
        3: `
        <h3>3 étoiles :</h3>
        <p>Lors de l'utilisation de <strong>Masse gravitationnelle</strong>, un <span class="buff pourpre">[Champ gravitationnel]</span> est créé.<br>
        Applique l'effet <span class="buff ecarlate">[Boost gravitationnel]</span> aux cibles touchées.</p>
        <div class="detail-box">
            <h4><span class="buff pourpre">[Champ gravitationnel]</span></h4>
            <p>Dégâts: 20% de Masse gravitationnelle.<br>
            Applique <span class="buff">[Halte]</span> (Interruption, CD 20s) sur les ennemis dans la zone.<br>
            Durée: 3s</p>
        </div>
        <div class="detail-box">
            <h4><span class="buff ecarlate">[Boost gravitationnel]</span></h4>
            <p>Augmente les dégâts de feu subis par la cible de <span class="stat-boost">10%</span>.<br>
            Durée: 20s</p>
        </div>
    `,
        4: `
        <h3>4 étoiles :</h3>
        <p>La Pénétration de défense de tous les membres de l'équipe augmente de <span class="stat-boost">4%</span>.<br>
        La Pénétration de défense des membres de l'équipe de l'élément Feu augmente de <span class="stat-boost">4%</span> supplémentaires.</p>
    `,
        5: `
        <h3>5 étoiles :</h3>
        <p>Lorsqu'un [Champ gravitationnel] est créé, l'effet <span class="buff feu">[Singularité spatio-temporelle]</span> est appliqué.</p>
        <div class="detail-box">
            <h4><span class="buff feu">[Singularité spatio-temporelle]</span></h4>
            <p>Augmente les dégâts de <strong>Voie d'extinction</strong> de <span class="stat-boost">60%</span>.<br>
            Augmente les dégâts de Voie d'extinction de <span class="stat-boost">60%</span> supp. sur les cibles affectées par [Boost gravitationnel].<br>
            Consumé après utilisation.<br>
            Durée: 10s</p>
        </div>
    `
    },
    summaryData: {
        0: `
        <h3>Passif : Support Gravitationnel</h3>
        <p>Compétences = <span class="buff ecarlate">[Contre-courant]</span>.<br>
        Max [Contre-courant] = <span class="buff feu">[Circulation de mana]</span> (Buff Atk/Feu Équipe).<br>
        [Champ Gravitationnel] = <span class="buff pourpre">[Rétrogradation]</span> (Soin/Jauge Équipe).</p>
    `,
        1: `
        <h3>1 étoile</h3>
        <p>[Circulation de mana] donne <span class="buff instinct">[Transformation]</span> :<br>
        <span class="buff">[Bouclier]</span> (12% Atk) + Dégâts infligés/subis <span class="stat-boost">+/-12%</span>.</p>
    `,
        2: `
        <h3>2 étoiles</h3>
        <p>Bouclier Équipe <span class="stat-boost">+20%</span>.<br>
        Si Bouclier actif : Dégâts <span class="stat-boost">+10%</span>.</p>
    `,
        3: `
        <h3>3 étoiles</h3>
        <p>Masse gravitationnelle crée une zone [Halte] (Interruption).<br>
        Cibles touchées : Dégâts Feu subis <span class="stat-boost">+10%</span>.</p>
    `,
        4: `
        <h3>4 étoiles</h3>
        <p>Pénétration Défense Équipe <span class="stat-boost">+4%</span> (+4% si Feu).</p>
    `,
        5: `
        <h3>5 étoiles</h3>
        <p>Champ Gravitationnel = <span class="buff feu">[Singularité]</span>.<br>
        Dégâts Voie d'extinction <span class="stat-boost">+60%</span> (ou <span class="stat-boost">+120%</span> si cible debuff).</p>
    `
    },
    weaponData: {
        0: `
        <h3>Avancement 0 :</h3>
        <p>L'Attaque de l'utilisatrice augmente de <span class="stat-boost">2%</span>.<br>
        Lorsque <span class="buff feu">[Circulation de mana]</span> est activé :<br>
        - L'équipe récupère <strong>50 PM</strong>.<br>
        - Attaque et Dégâts de feu équipe <span class="stat-boost">+1%</span> (Max 4 fois).</p>
    `,
        1: `
        <h3>Avancement 5 étoiles :</h3>
        <p>L'Attaque de l'utilisatrice augmente de <span class="stat-boost">12%</span>.<br>
        Lorsque <span class="buff feu">[Circulation de mana]</span> est activé :<br>
        - L'équipe récupère <strong>250 PM</strong>.<br>
        - Attaque et Dégâts de feu équipe <span class="stat-boost">+1%</span> (Max 10 fois).</p>
    `,
        2: `
        <h3>Avancement 10 étoiles :</h3>
        <p>Augmente l'Attaque, la Défense et les PV de l'utilisateur de <span class="stat-boost">15%</span>.</p>
    `
    }
};

// --- TAWATA KANAE ---
huntersData["tawata-kanae"] = {
    name: "Tawata Kanae",
    rarity: "SSR",
    element: "Feu",
    gradient: "linear-gradient(90deg, #e67e22, #000)",
    image: "Chasseurs_SSR/feu/tawata_kanae/tawata_art.png",
    weaponImage: "Chasseurs_SSR/feu/tawata_kanae/la_voix_du_heros/Relic_TawataKanae_PortraitBig.png",
    weaponName: "La voix du héros",
    fullData: {
        0: `
        <h3>Passif :</h3>
        <p>L'utilisatrice reçoit l'effet <span class="buff pourpre">[Pourpre]</span> lorsqu'elle utilise Munechika.<br>
        L'utilisatrice reçoit l'effet <span class="buff ecarlate">[Écarlate]</span> lorsqu'elle utilise son attaque de noyau améliorée.<br>
        Lorsque les effets <span class="buff pourpre">[Pourpre]</span>, <span class="buff ecarlate">[Écarlate]</span> ou <span class="buff feu">[Feu]</span> sont appliqués, les compétences Kamaitachi de l'utilisatrice deviennent sa compétence ultime.<br>
        Les dégâts infligés par l'utilisatrice aux cibles en état de [Bris] augmentent de <span class="stat-boost">24 %</span>.</p>
        
        <div class="detail-box">
            <h4><span class="buff pourpre">[Pourpre]</span></h4>
            <p>Lorsqu'elle utilise Kamaitachi, l'utilisatrice active automatiquement son attaque de noyau améliorée, aux dégâts bonus équivalents à 50% des dégâts infligés par la compétence.</p>
            <small>Durée: illimitée</small>
        </div>
        <div class="detail-box">
            <h4><span class="buff ecarlate">[Écarlate]</span></h4>
            <p>Lors de l'utilisation de Kamaitachi, l'effet <span class="buff feu">[Feu]</span> est activé.</p>
            <small>Durée: illimitée</small>
        </div>
        <div class="detail-box">
            <h4><span class="buff feu">[Feu]</span></h4>
            <p>Augmente les dégâts de Tsuchigumo de 70%.<br>
            L'utilisatrice reçoit [Super armure] lors de l'utilisation de Kamaitachi.<br>
            L'utilisation de Kamaitachi supprime les effets [Pourpre], [Écarlate] et [Feu].</p>
            <small>Durée: illimitée</small>
        </div>
    `,
        1: `
        <h3>1 étoile :</h3>
        <p>Lorsqu'un ennemi meurt près de l'utilisatrice, celle-ci reçoit 1 cumuls de l'effet <span class="buff instinct">[Instinct]</span>. <br>
        Lorsqu'elle met une cible en état de [Bris], elle reçoit 5 cumuls de l'effet <span class="buff instinct">[Instinct]</span>.</p>
        <div class="detail-box">
            <h4><span class="buff instinct">[Instinct]</span></h4>
            <p>Augmente le Taux de coup critique de l'utilisatrice de 1%.<br>
            Lorsque l'effet [Instinct] se cumule 10 fois, il devient l'effet <span class="buff sixieme">[Sixième sens]</span>.</p>
            <small>Durée: illimitée (cumulable jusqu'à 10 fois)</small>
        </div>
        <div class="detail-box">
            <h4><span class="buff sixieme">[Sixième sens]</span></h4>
            <p>Augmente le Taux de coup critique de 20%.<br>
            Si les PM de l'utilisatrice tombent à 20% ou moins, sa Consommation de PM diminue de 40 %.</p>
            <small>Durée: illimitée</small>
        </div>
    `,
        2: `
        <h3>2 étoiles :</h3>
        <p>Les dégâts de coup critique de l'utilisatrice augmentent de <span class="stat-boost">16%</span>.</p>
    `,
        3: `
        <h3>3 étoiles :</h3>
        <p>Lors de l'utilisation de Munechika, l'utilisatrice reçoit l'effet [Super armure] pendant 5 seconde(s).<br>
        L'utilisation de Feu: Kamaitachi réduit le temps de rechargement de Munechika de 5 seconde(s).</p>
    `,
        4: `
        <h3>4 étoiles :</h3>
        <p>Les dégâts de feu de Tawata Kanae augmentent de <span class="stat-boost">12%</span> par chasseur de l'élément Feu présent dans le groupe (cumulable jusqu'à 3 fois).</p>
    `,
        5: `
        <h3>5 étoiles :</h3>
        <p>Les effets <span class="buff instinct">[Instinct]</span> et <span class="buff sixieme">[Sixième sens]</span> sont améliorés.</p>
        <div class="detail-box">
            <h4><span class="buff instinct">[Instinct]</span></h4>
            <p>L'Attaque de l'utilisatrice augmente de 5%.<br>
            Le Taux de coup critique et les Dégâts de coup critique de l'utilisatrice augmentent de 1.5%.<br>
            Lorsque l'effet [Instinct] se cumule 10 fois, il devient l'effet <span class="buff sixieme">[Sixième sens]</span>.</p>
            <small>Durée: illimitée (cumulable jusqu'à 10 fois)</small>
        </div>
        <div class="detail-box">
            <h4><span class="buff sixieme">[Sixième sens]</span></h4>
            <p>Augmente l'Attaque de l'utilisatrice de 77%.<br>
            Augmente le Taux de coup critique et les Dégâts de coup critique de l'utilisatrice de 20%.<br>
            Si les PM de l'utilisatrice tombent à 30% ou moins, sa Consommation de PM diminue de 50%.</p>
            <small>Durée: illimitée</small>
        </div>
    `
    },
    summaryData: {
        0: `
        <h3>Passif : Kunoichi</h3>
        <p>Reçoit <span class="buff pourpre">[Pourpre]</span> via Munechika et <span class="buff ecarlate">[Écarlate]</span> via Atq Noyau.<br>
        Kamaitachi devient Ultime si buffs actifs.<br>
        Dégâts sur [Bris] <span class="stat-boost">+24%</span>.</p>
        <div class="detail-box">
            <h4><span class="buff pourpre">[Pourpre]</span> / <span class="buff ecarlate">[Écarlate]</span></h4>
            <p>Active Atq Noyau (Bonus 50%) ou l'effet <span class="buff feu">[Feu]</span>.</p>
        </div>
        <div class="detail-box">
            <h4><span class="buff feu">[Feu]</span></h4>
            <p>Dégâts Tsuchigumo <span class="stat-boost">+70%</span> + [Super Armure]. Consomme les effets.</p>
        </div>
    `,
        1: `
        <h3>1 étoile</h3>
        <p>Mort ennemi = +1 <span class="buff instinct">[Instinct]</span>. État [Bris] = +5 <span class="buff instinct">[Instinct]</span>.</p>
        <div class="detail-box">
            <h4><span class="buff instinct">[Instinct]</span></h4>
            <p>Crit <span class="stat-boost">+1%</span> (Max 10). Devient [Sixième sens] à 10.</p>
        </div>
        <div class="detail-box">
            <h4><span class="buff sixieme">[Sixième sens]</span></h4>
            <p>Crit <span class="stat-boost">+20%</span>. Si PM ≤ 20%, Conso <span class="stat-boost">-40%</span>.</p>
        </div>
    `,
        2: `
        <h3>2 étoiles</h3>
        <p>Dégâts Critique <span class="stat-boost">+16%</span>.</p>
    `,
        3: `
        <h3>3 étoiles</h3>
        <p>Munechika : <span class="buff">[Super armure]</span> (5s).<br>
        Kamaitachi : CD Munechika <span class="stat-boost">-5s</span>.</p>
    `,
        4: `
        <h3>4 étoiles</h3>
        <p>Dégâts Feu <span class="stat-boost">+12%</span> par allié Feu (Max 3).</p>
    `,
        5: `
        <h3>5 étoiles</h3>
        <p>Amélioration Instinct et Sixième sens.</p>
        <div class="detail-box">
            <h4><span class="buff instinct">[Instinct]</span></h4>
            <p>Atq <span class="stat-boost">+5%</span>. Crit/DmgCrit <span class="stat-boost">+1.5%</span>.</p>
        </div>
        <div class="detail-box">
            <h4><span class="buff sixieme">[Sixième sens]</span></h4>
            <p>Atq <span class="stat-boost">+77%</span>. Crit/DmgCrit <span class="stat-boost">+20%</span>. Si PM ≤ 30%, Conso <span class="stat-boost">-50%</span>.</p>
        </div>
    `
    },
    weaponData: {
        0: `
        <h3>Avancement 0 :</h3>
        <p>L'Attaque de l'utilisatrice augmente de <span class="stat-boost">2%</span>.<br>
        Le Taux de coup critique de l'utilisatrice augmente de <span class="stat-boost">10%</span>.</p>
    `,
        1: `
        <h3>Avancement 5 étoiles :</h3>
        <p>L'Attaque de l'utilisatrice augmente de <span class="stat-boost">12%</span>.<br>
        Le Taux de coup critique de l'utilisatrice augmente de <span class="stat-boost">20%</span>.</p>
    `,
        2: `
        <h3>Avancement 10 étoiles :</h3>
        <p>Augmente l'Attaque, la Défense et les PV de l'utilisateur de <span class="stat-boost">15%</span>.</p>
    `
    }
};

// --- YOO SOOHYUN ---
huntersData["yoo-soohyun"] = {
    name: "Yoo Soohyun",
    rarity: "SSR",
    element: "Feu",
    gradient: "linear-gradient(90deg, #e67e22, #000)",
    image: "Chasseurs_SSR/feu/yoo_soohyun/yoo_art.png",
    weaponImage: "Chasseurs_SSR/feu/yoo_soohyun/overdrive/Relic_YooSoohyun_PortraitBig.png",
    weaponName: "Surpuissance",
    fullData: {
        0: `
        <h3>Passif :</h3>
        <p>Lors de l'utilisation de <strong>Tir astucieux</strong> ou <strong>Nuée embrasée</strong>, l'effet <span class="buff pourpre">[Projecteur]</span> s'applique à l'utilisatrice.<br>
        Lors de l'utilisation de <strong>Nuée embrasée</strong> ou <strong>Souffle de précision</strong>, l'effet <span class="buff ecarlate">[Arme à feu magique]</span> s'applique.</p>
        
        <div class="detail-box">
            <h4><span class="buff pourpre">[Projecteur]</span></h4>
            <p>Augmente la Pénétration de défense de l'utilisatrice de <span class="stat-boost">24%</span>.<br>
            Durée: 24s</p>
        </div>
        <div class="detail-box">
            <h4><span class="buff ecarlate">[Arme à feu magique]</span></h4>
            <p>Apparaissent autour de Soohyun et infligent des dégâts (160% de l'Attaque).<br>
            Inflige l'effet <span class="buff feu">[Réaction magique]</span> à la cible.<br>
            Durée: 5s</p>
        </div>
        <div class="detail-box">
            <h4><span class="buff feu">[Réaction magique]</span></h4>
            <p>Augmente les dégâts de feu subis de <span class="stat-boost">1%</span>.<br>
            Réduit le Taux de récupération de la cible de <span class="stat-boost">4%</span>.<br>
            Durée: 60s (cumulable jusqu'à 20 fois)</p>
        </div>
    `,
        1: `
        <h3>1 étoile :</h3>
        <p>Utiliser <strong>Tir mortel</strong> active l'Attaque de noyau et augmente ses dégâts de <span class="stat-boost">40%</span> (6s).<br>
        Utiliser l'Attaque de noyau octroie l'effet <span class="buff ecarlate">[Folie]</span>.</p>
        <div class="detail-box">
            <h4><span class="buff ecarlate">[Folie]</span></h4>
            <p>Réinitialise le CD de Tir mortel.<br>
            Tir mortel devient <strong>Feu de l'enfer</strong> (Dégâts +40% + [Super Super Armure]).<br>
            Utiliser Feu de l'enfer applique [Arme à feu magique] et annule [Folie].<br>
            Durée: 6s</p>
        </div>
    `,
        2: `
        <h3>2 étoiles :</h3>
        <p>La Pénétration de défense de l'utilisatrice augmente de <span class="stat-boost">12%</span>.</p>
    `,
        3: `
        <h3>3 étoiles :</h3>
        <p>Lorsque <strong>Tir astucieux</strong> est utilisé, l'effet <span class="buff instinct">[Attaque augmentée]</span> s'applique.</p>
        <div class="detail-box">
            <h4><span class="buff instinct">[Attaque augmentée]</span></h4>
            <p>Augmente l'Attaque de l'utilisatrice de <span class="stat-boost">24%</span>.<br>
            Durée: 12s</p>
        </div>
    `,
        4: `
        <h3>4 étoiles :</h3>
        <p>Augmente l'Attaque de l'utilisatrice de <span class="stat-boost">12%</span>.</p>
    `,
        5: `
        <h3>5 étoiles :</h3>
        <p>Augmente les dégâts de <strong>Tir mortel</strong> et <strong>Feu de l'enfer</strong> de <span class="stat-boost">6%</span> par cumul de [Réaction magique] sur la cible (Max <span class="stat-boost">120%</span>).</p>
    `
    },
    summaryData: {
        0: `
        <h3>Passif : Arsenal Magique</h3>
        <p>Skills = <span class="buff pourpre">[Projecteur]</span> (Pen. Def) ou <span class="buff ecarlate">[Arme Magique]</span> (Dégâts Auto).<br>
        Armes Magiques appliquent <span class="buff feu">[Réaction]</span> (Debuff Feu/Soin).</p>
        <div class="detail-box">
            <h4><span class="buff feu">[Réaction magique]</span> (Max 20)</h4>
            <p>Dégâts Feu subis <span class="stat-boost">+1%</span> / Soin <span class="stat-boost">-4%</span> par cumul.</p>
        </div>
    `,
        1: `
        <h3>1 étoile</h3>
        <p>Tir mortel boost Atq Noyau.<br>
        Atq Noyau = <span class="buff ecarlate">[Folie]</span> (Reset CD Tir mortel).<br>
        [Folie] transforme Tir mortel en <strong>Feu de l'enfer</strong> (Dégâts <span class="stat-boost">+40%</span> + Super Armure).</p>
    `,
        2: `
        <h3>2 étoiles</h3>
        <p>Pénétration Défense <span class="stat-boost">+12%</span>.</p>
    `,
        3: `
        <h3>3 étoiles</h3>
        <p>Tir astucieux = Attaque <span class="stat-boost">+24%</span> (12s).</p>
    `,
        4: `
        <h3>4 étoiles</h3>
        <p>Attaque <span class="stat-boost">+12%</span>.</p>
    `,
        5: `
        <h3>5 étoiles</h3>
        <p>Tir mortel / Feu de l'enfer : Dégâts <span class="stat-boost">+6%</span> par cumul de [Réaction] (Max 120%).</p>
    `
    },
    weaponData: {
        0: `
        <h3>Avancement 0 :</h3>
        <p>Augmente la Pénétration de défense de l'utilisatrice de <span class="stat-boost">4%</span>.<br>
        Augmente les dégâts de Tir mortel, Attaque de noyau et Feu de l'enfer de <span class="stat-boost">8%</span>.</p>
    `,
        1: `
        <h3>Avancement 5 étoiles :</h3>
        <p>Augmente la Pénétration de défense de l'utilisatrice de <span class="stat-boost">12%</span>.<br>
        Augmente les dégâts de Tir mortel, Attaque de noyau et Feu de l'enfer de <span class="stat-boost">24%</span>.</p>
    `,
        2: `
        <h3>Avancement 10 étoiles :</h3>
        <p>Augmente l'Attaque, la Défense et les PV de l'utilisateur de <span class="stat-boost">15%</span>.</p>
    `
    }
};

// --- FERN ---
huntersData["fern"] = {
    name: "Fern",
    rarity: "SSR",
    element: "Feu",
    gradient: "linear-gradient(90deg, #e74c3c, #000)",
    image: "Chasseurs_SSR/collab/feu/fern/fern_art.png",
    weaponImage: "Chasseurs_SSR/collab/feu/fern/baton_de_fern/Relic_Fern_PortraitBig.png",
    weaponName: "Bâton de Fern",
    fullData: {
        0: `
        <h3>Passif :</h3>
        <p>L'utilisation de l'attaque de base initie les attaques de niveau 1, 2 et 3 à la suite.<br>
        L'utilisation de l'attaque de base de niveau 3 active l'attaque de noyau de l'utilisatrice une fois.<br>
        Les effets <span class="buff">[Prodige magique]</span> et <span class="buff">[Recherche d'énergie de mana]</span> s'activent lorsque l'utilisatrice arrive dans un niveau.<br></p>
        
        <div class="detail-box">
            <h4><span class="buff">[Prodige magique]</span></h4>
            <p>Augmente l'Attaque de <span class="stat-boost">10 %</span>.<br>
            Lorsque l'utilisatrice a <span class="stat-boost">50 %</span> de PM ou plus, son Attaque augmente de <span class="stat-boost">10 %</span>.<br>
            Réduit la Consommation de mana pour les compétences de <span class="stat-boost">5 %</span>.<br>
            Durée : illimitée</p>
        </div>

        <div class="detail-box">
            <h4><span class="buff">[Recherche d'énergie de mana]</span></h4>
            <p>Augmente les dégâts infligés aux boss par l'utilisatrice de <span class="stat-boost">30 %</span>.<br>
            Augmente la Précision de l'utilisatrice de <span class="stat-boost">5 %</span>.<br>
            Durée : illimitée</p>
        </div>
    `,
        1: `
        <h3>1 étoile :</h3>
        <p>L'effet <span class="buff">[Coup rapide de base]</span> s'active lorsque l'utilisatrice arrive dans un niveau.<br>
        L'utilisation de ses compétences de base 1 ou 2 active l'effet <span class="buff">[Concentration de base]</span>.<br>
        Les effets <span class="buff">[Prodige magique]</span> et <span class="buff">[Recherche d'énergie de mana]</span> sont améliorés.<br></p>

        <div class="detail-box">
            <h4><span class="buff">[Coup rapide de base]</span></h4>
            <p>Augmente la Vitesse d'attaque de l'attaque de base, de l'attaque de noyau et des compétences de base 1 et 2.<br>
            L'utilisation des compétences de base 1 ou 2 active l'attaque de noyau de l'utilisatrice une fois.<br>
            L'utilisation de l'attaque de noyau diminue le temps de rechargement des compétences de base 1 et 2 de <span class="stat-boost">25 %</span>.<br>
            L'utilisation de la compétence de base 1 diminue le temps de rechargement des compétences de base 1 et 2 de <span class="stat-boost">25 %</span>.<br>
            L'utilisation de la compétence de base 2 réduit le temps de rechargement des compétences de base 1 et 2 de <span class="stat-boost">25 %</span>.<br>
            Durée : illimitée</p>
        </div>

        <div class="detail-box">
            <h4><span class="buff">[Concentration de base]</span></h4>
            <p>L'utilisation des compétences de base 1 ou 2 augmente la consommation de PM de <span class="stat-boost">12 %</span>.<br>
            L'utilisation des compétences de base 1 ou 2 augmente les dégâts de la compétence de base de <span class="stat-boost">25 %</span>.<br>
            Durée : 20 seconde(s) (cumulable jusqu'à 4 fois)</p>
        </div>

        <div class="detail-box">
            <h4>Amélioration <span class="buff">[Prodige magique]</span></h4>
            <p>Augmente l'Attaque de <span class="stat-boost">20 %</span>.<br>
            Lorsque l'utilisatrice a <span class="stat-boost">50 %</span> de ses PM ou plus, son Attaque augmente de <span class="stat-boost">20 %</span>.<br>
            Réduit la Consommation de mana pour ses compétences de <span class="stat-boost">10 %</span>.<br>
            Durée : illimitée</p>
        </div>

        <div class="detail-box">
            <h4>Amélioration <span class="buff">[Recherche d'énergie de mana]</span></h4>
            <p>Augmente les dégâts infligés aux boss de <span class="stat-boost">60 %</span>.<br>
            Augmente la Précision de <span class="stat-boost">10 %</span>.<br>
            Durée : illimitée</p>
        </div>
    `,
        2: `
        <h3>2 étoiles :</h3>
        <p>Augmente les dégâts de feu de l'utilisatrice de <span class="stat-boost">20 %</span>.<br>
        Chaque fois que sa compétence de base 2 touche une cible, applique l'effet <span class="buff">[Dégâts de feu subis augmentés]</span>.<br></p>

        <div class="detail-box">
            <h4><span class="buff">[Dégâts de feu subis augmentés]</span></h4>
            <p>Augmente les dégâts de feu subis de <span class="stat-boost">0.3 %</span>.<br>
            Durée : 30 seconde(s) (cumulable jusqu'à 60 fois)</p>
        </div>
    `,
        3: `
        <h3>3 étoiles :</h3>
        <p>L'effet <span class="buff">[Vision véritable]</span> s'active lorsque l'utilisatrice arrive dans un niveau.<br>
        Les effets <span class="buff">[Magie de dissipation]</span> et <span class="buff">[Magie défensive]</span> s'activent lorsque l'utilisatrice rejoint le combat (temps de rechargement : 10 seconde(s)).<br></p>

        <div class="detail-box">
            <h4><span class="buff">[Vision véritable]</span></h4>
            <p>Augmente le Taux de coup critique de <span class="stat-boost">5 %</span> et les Dégâts de coup critique de <span class="stat-boost">10 %</span>.<br>
            Durée : illimitée</p>
        </div>

        <div class="detail-box">
            <h4><span class="buff">[Magie de dissipation]</span></h4>
            <p>Supprime les débuffs de toute l'équipe.</p>
        </div>

        <div class="detail-box">
            <h4><span class="buff">[Magie défensive]</span></h4>
            <p>Confère un <span class="buff">[Bouclier]</span> équivalent à <span class="stat-boost">20 %</span> de l'Attaque de Fern.<br>
            Diminue les dégâts subis de <span class="stat-boost">20 %</span>.<br>
            Durée : 20 seconde(s)</p>
        </div>
    `,
        4: `
        <h3>4 étoiles :</h3>
        <p>Le Taux de coup critique de l'utilisatrice augmente de <span class="stat-boost">10 %</span>, et ses Dégâts de coup critique de <span class="stat-boost">20 %</span>.<br>
        L'effet <span class="buff">[Dégâts de feu subis augmentés]</span>, qui est appliqué chaque fois que la compétence de base 2 de l'utilisatrice touche une cible, change de 0.3 % à 0.5 %.<br></p>

        <div class="detail-box">
            <h4><span class="buff">[Dégâts de feu subis augmentés]</span></h4>
            <p>Augmente les dégâts de feu subis de <span class="stat-boost">0.5 %</span>.<br>
            Durée : 30 seconde(s) (cumulable jusqu'à 60 fois)</p>
        </div>
    `,
        5: `
        <h3>5 étoiles :</h3>
        <p>Lorsque la compétence ultime de l'utilisatrice touche sa cible, les dégâts de faiblesse élémentaire de feu de l'utilisatrice la touchent également, quel que soit son élément.<br>
        L'effet <span class="buff">[Vision véritable]</span> est amélioré.<br></p>

        <div class="detail-box">
            <h4>Amélioration <span class="buff">[Vision véritable]</span></h4>
            <p>Augmente le Taux de coup critique de <span class="stat-boost">10 %</span> et les Dégâts de coup critique de <span class="stat-boost">20 %</span>.<br>
            Lorsque la compétence de base 1 ou 2 de l'utilisatrice touche sa cible, l'effet <span class="buff">[Alerte sismique]</span> s'active (uniquement une fois à l'impact).<br>
            Durée : illimitée</p>
        </div>

        <div class="detail-box">
            <h4><span class="buff">[Alerte sismique]</span></h4>
            <p>Augmente les dégâts de feu de <span class="stat-boost">10 %</span>.<br>
            L'effet <span class="buff">[Regard de la chercheuse]</span> s'active lorsqu'il atteint le maximum de cumuls.<br>
            Durée : 5 seconde(s) (cumulable jusqu'à 6 fois)</p>
        </div>

        <div class="detail-box">
            <h4><span class="buff">[Regard de la chercheuse]</span></h4>
            <p>L'effet <span class="buff">[Alerte sismique]</span> est supprimé et ne peut plus être activé.<br>
            Augmente les dégâts de feu de <span class="stat-boost">60 %</span>.<br>
            Augmente la Pénétration de défense de <span class="stat-boost">10 %</span>.<br>
            Durée : 20 seconde(s)</p>
        </div>
    `
    },
    summaryData: {
        0: `
        <h3>Passif : Mage de Frieren</h3>
        <p>Attaque Base 3 déclenche Attaque Noyau.<br>
        Entrée = <span class="buff">[Prodige magique]</span> (Atk +10-20%, Éco Mana) et <span class="buff">[Recherche]</span> (Dégâts Boss +30%, Précision).</p>
    `,
        1: `
        <h3>1 étoile</h3>
        <p>Entrée : <span class="buff">[Coup rapide]</span> (Vitesse Atk, Reset CD sur Core/Skills).<br>
        Compétences activent <span class="buff">[Concentration]</span> (Dégâts +25%, Coût Mana +12%).<br>
        Buffs améliorés : Atk +20-40%, Dégâts Boss +60%.</p>
    `,
        2: `
        <h3>2 étoiles</h3>
        <p>Dégâts Feu <span class="stat-boost">+20%</span>.<br>
        Compétence 2 applique Débuff <span class="buff">[Dégâts Feu subis +0.3%]</span> (Max 18%).</p>
    `,
        3: `
        <h3>3 étoiles</h3>
        <p>Entrée : <span class="buff">[Vision véritable]</span> (Crit Rate/Dmg).<br>
        Rejoint combat : Cleanse équipe + <span class="buff">[Bouclier]</span> (20% Atk, -20% Dégâts subis).</p>
    `,
        4: `
        <h3>4 étoiles</h3>
        <p>Crit Rate +10%, Crit Dmg +20%.<br>
        Débuff Feu amélioré à <span class="stat-boost">0.5%</span> (Max 30%).</p>
    `,
        5: `
        <h3>5 étoiles</h3>
        <p>Ultime tape toujours en Faiblesse Feu.<br>
        Améliore <span class="buff">[Vision]</span>. Compétences stack <span class="buff">[Alerte]</span> (Dégâts Feu).<br>
        Max stack = <span class="buff">[Regard]</span> (Dégâts Feu <span class="stat-boost">+60%</span>, Pénétration <span class="stat-boost">+10%</span>).</p>
    `
    },
    weaponData: {
        0: `
        <h3>Avancement 0 :</h3>
        <p>Augmente l'Attaque de l'utilisatrice de <span class="stat-boost">5 %</span>.<br>
        Le Taux de coup critique de <strong>Magie démonicide (Zoltraak) - Barrage</strong> et <strong>Magie démonicide (Zoltraak) - Tir rapide</strong> augmente de <span class="stat-boost">5 %</span>, et les Dégâts de coup critique augmentent de <span class="stat-boost">10 %</span>.<br>
        L'utilisation de la compétence <strong>Magie démonicide (Zoltraak) - Équilibre</strong> restaure <span class="stat-boost">10 %</span> des PM de l'utilisatrice (temps de rechargement : 30 seconde(s)).</p>
    `,
        1: `
        <h3>Avancement 5 étoiles :</h3>
        <p>Augmente l'Attaque de l'utilisatrice de <span class="stat-boost">12 %</span>.<br>
        Le Taux de coup critique de <strong>Magie démonicide (Zoltraak) - Barrage</strong> et <strong>Magie démonicide (Zoltraak) - Tir rapide</strong> augmente de <span class="stat-boost">10 %</span>, et les Dégâts de coup critique augmentent de <span class="stat-boost">20 %</span>.<br>
        L'utilisation de la compétence <strong>Magie démonicide (Zoltraak) - Équilibre</strong> restaure <span class="stat-boost">100 %</span> des PM de l'utilisatrice (temps de rechargement : 30 seconde(s)).</p>
    `,
        2: `
        <h3>Avancement 10 étoiles :</h3>
        <p>L'Attaque, la Défense et les PV de l'utilisatrice augmentent de <span class="stat-boost">15 %</span>.</p>
    `
    }
};

// --- STARK ---
huntersData["stark"] = {
    name: "Stark",
    rarity: "SSR",
    element: "Feu",
    gradient: "linear-gradient(90deg, #e74c3c, #000)",
    image: "Chasseurs_SSR/collab/feu/stark/stark_art.png",
    weaponImage: "Chasseurs_SSR/collab/feu/stark/hache_de_stark/Relic_Stark_PortraitBig.png",
    weaponName: "Hache de Stark",
    fullData: {
        0: `
        <h3>Passif :</h3>
        <p>L'utilisateur reçoit l'effet <span class="buff">[Timidité]</span> à l'arrivée dans le niveau.<br>
        Lorsque Stark ou un allié parvient à mettre un ennemi en état de Bris, la durée de l'état de Bris augmente de 3 secondes.<br>
        La jauge de puissance de l'utilisateur ne peut pas se remplir, mais si l'effet <span class="buff">[Courage]</span> est actif, elle se remplit à 100 %.<br></p>
        
        <div class="detail-box">
            <h4><span class="buff">[Timidité]</span></h4>
            <p>L'utilisation des compétences <strong>Frappe spiralée</strong>, <strong>Frappe foudroyante</strong>, <strong>Frappe foudroyante : Attaque lourde</strong> ou <strong>Frappe foudroyante : Attaque extrême</strong> active l'effet <span class="buff">[Confiance]</span> et déclenche <strong>Frappe tourbillonnante</strong>.<br>
            L'effet <span class="buff">[Détermination]</span> s'active lors de l'utilisation de la compétence <strong>Frappe tourbillonnante</strong>.<br>
            Lorsque l'effet <span class="buff">[Courage]</span> est activé, il supprime l'effet <span class="buff">[Timidité]</span>.<br>
            Durée : illimitée.</p>
        </div>

        <div class="detail-box">
            <h4><span class="buff">[Confiance]</span></h4>
            <p>Augmente les dégâts de feu de <span class="stat-boost">3 %</span>.<br>
            Augmente la Pénétration de défense de <span class="stat-boost">3 %</span>.<br>
            Lorsque l'effet atteint le maximum de cumuls, l'effet <span class="buff">[Confiance]</span> est supprimé et l'effet <span class="buff">[Courage]</span> est activé.<br>
            Durée : illimitée (cumulable jusqu'à 4 fois).</p>
        </div>

        <div class="detail-box">
            <h4><span class="buff">[Détermination]</span></h4>
            <p>Augmente les dégâts des compétences <strong>Frappe foudroyante</strong>, <strong>Frappe foudroyante : Attaque lourde</strong> et <strong>Frappe foudroyante : Attaque extrême</strong> de <span class="stat-boost">10 %</span>.<br>
            Augmente le Taux de coup critique de <span class="stat-boost">10 %</span>.<br>
            Durée : 3 seconde(s).</p>
        </div>

        <div class="detail-box">
            <h4><span class="buff">[Courage]</span></h4>
            <p>Augmente les dégâts de feu de <span class="stat-boost">20 %</span>.<br>
            Augmente la Pénétration de défense de <span class="stat-boost">20 %</span>.<br>
            L'effet <span class="buff">[Confiance]</span> ne peut pas être activé tant que cet effet est actif.<br>
            Active l'effet <span class="buff">[Timidité]</span> lorsque cet effet est supprimé.<br>
            Durée : 5 seconde(s).</p>
        </div>
    `,
        1: `
        <h3>1 étoile :</h3>
        <p>L'effet <span class="buff">[Esprit combatif]</span> s'active lorsque l'utilisateur arrive dans un combat d'histoire.<br>
        Lorsque la compétence <strong>Frappe tourbillonnante</strong> touche sa cible, elle lui applique l'effet <span class="buff">[Aura du guerrier]</span>.<br>
        L'effet <span class="buff">[Détermination]</span> est amélioré.<br></p>

        <div class="detail-box">
            <h4><span class="buff">[Esprit combatif]</span></h4>
            <p>Les dégâts subis diminuent de <span class="stat-boost">20 %</span>.<br>
            Tant que l'effet reste actif, si les PV de l'utilisateur tombent à 10 % ou moins, il récupère <span class="stat-boost">40 %</span> de ses PV max (temps de rechargement : 60 secondes).<br>
            Durée : illimitée.</p>
        </div>

        <div class="detail-box">
            <h4><span class="buff">[Aura du guerrier]</span></h4>
            <p>Les dégâts infligés par Stark augmentent de <span class="stat-boost">15 %</span>.<br>
            Durée : 15 seconde(s).</p>
        </div>

        <div class="detail-box">
            <h4><span class="buff">[Détermination]</span> (Amélioré)</h4>
            <p>Les dégâts de la compétence de base augmentent de <span class="stat-boost">15 %</span>.<br>
            Le Taux de coup critique augmente de <span class="stat-boost">15 %</span>.<br>
            Durée : 10 seconde(s).</p>
        </div>
    `,
        2: `
        <h3>2 étoiles :</h3>
        <p>Les PV de l'utilisateur augmentent de <span class="stat-boost">15 %</span>.<br></p>
    `,
        3: `
        <h3>3 étoiles :</h3>
        <p>L'effet <span class="buff">[Aura du guerrier]</span> est amélioré.<br>
        Augmente la Pénétration de défense de toute l'équipe à hauteur de <span class="stat-boost">20 %</span> de la stat augmentée de Pénétration de défense de Stark.<br></p>

        <div class="detail-box">
            <h4><span class="buff">[Aura du guerrier]</span> (Amélioré)</h4>
            <p>Augmente les dégâts infligés par Stark de <span class="stat-boost">30 %</span>.<br>
            Durée : 15 seconde(s).</p>
        </div>
    `,
        4: `
        <h3>4 étoiles :</h3>
        <p>L'efficacité de Bris de l'utilisateur augmente de <span class="stat-boost">36 %</span>.<br></p>
    `,
        5: `
        <h3>5 étoiles :</h3>
        <p>Les effets <span class="buff">[Confiance]</span> et <span class="buff">[Courage]</span> sont améliorés.<br>
        L'utilisation de <strong>Frappe spiralée</strong> active l'effet <span class="buff">[Détermination]</span>.<br>
        Lorsque les compétences <strong>Frappe tourbillonnante</strong>, <strong>Frappe foudroyante</strong>, <strong>Frappe foudroyante : Attaque lourde</strong> ou <strong>Frappe foudroyante : Attaque extrême</strong> touchent leur cible, le temps de rechargement de <strong>Frappe foudroyante : Annihilation</strong> diminue de 4 seconde(s) (temps de rechargement : 0.5 seconde(s)).<br>
        Lorsque les compétences <strong>Frappe foudroyante</strong>, <strong>Frappe foudroyante : Attaque lourde</strong> ou <strong>Frappe foudroyante : Attaque extrême</strong> touchent une cible affectée par l'effet <span class="buff">[Aura du guerrier]</span>, elles activent l'effet <span class="buff">[Talent du guerrier]</span>.<br></p>

        <div class="detail-box">
            <h4>Amélioration <span class="buff">[Confiance]</span></h4>
            <p>Augmente les dégâts de feu de <span class="stat-boost">5 %</span>.<br>
            Augmente la Pénétration de défense de <span class="stat-boost">5 %</span>.<br>
            Une fois que cet effet a atteint le maximum de cumuls, si l'effet <span class="buff">[Confiance]</span> est supprimé, il active l'effet <span class="buff">[Courage]</span>.<br>
            Durée : illimitée (cumulable jusqu'à 4 fois).</p>
        </div>

        <div class="detail-box">
            <h4>Amélioration <span class="buff">[Courage]</span></h4>
            <p>Augmente les dégâts de feu de <span class="stat-boost">30 %</span>.<br>
            Augmente la Pénétration de défense de <span class="stat-boost">30 %</span>.<br>
            Augmente les dégâts de la compétence <strong>Frappe foudroyante : Annihilation</strong> de <span class="stat-boost">50 %</span>.<br>
            Il est impossible d'activer l'effet <span class="buff">[Confiance]</span> tant que l'effet est actif. Active l'effet <span class="buff">[Timidité]</span> lorsque l'effet est supprimé.<br>
            Durée : 5 seconde(s).</p>
        </div>

        <div class="detail-box">
            <h4><span class="buff">[Talent du guerrier]</span></h4>
            <p>Inflige des dégâts équivalents à <span class="stat-boost">1000 %</span> des PV max de l'utilisateur.</p>
        </div>
    `
    },
    summaryData: {
        0: `
        <h3>Passif : Guerrier Timide</h3>
        <p>Entrée : <span class="buff">[Timidité]</span>. Jauge Puissance bloquée sauf sous <span class="buff">[Courage]</span>.<br>
        Compétences activent <span class="buff">[Confiance]</span> (Stats Feu/Péné +3%/stack).<br>
        Max <span class="buff">[Confiance]</span> = <span class="buff">[Courage]</span> (Stats +20%, Jauge 100%, supprime Timidité).</p>
    `,
        1: `
        <h3>1 étoile</h3>
        <p>Entrée (Histoire) : <span class="buff">[Esprit combatif]</span> (Réduc Dégâts, Soin urgence).<br>
        Frappe tourbillonnante applique <span class="buff">[Aura du guerrier]</span> (Dégâts +15%).<br>
        Améliore <span class="buff">[Détermination]</span> (Crit Rate/Dégâts Base +15%).</p>
    `,
        2: `
        <h3>2 étoiles</h3>
        <p>Les PV de l'utilisateur augmentent de <span class="stat-boost">15 %</span>.<br></p>
    `,
        3: `
        <h3>3 étoiles</h3>
        <p>Améliore <span class="buff">[Aura du guerrier]</span> (Dégâts +30%).<br>
        Partage Pénétration de défense avec l'équipe (20% de celle de Stark).</p>
    `,
        4: `
        <h3>4 étoiles</h3>
        <p>L'efficacité de Bris de l'utilisateur augmente de <span class="stat-boost">36 %</span>.<br></p>
    `,
        5: `
        <h3>5 étoiles</h3>
        <p>Améliore <span class="buff">[Confiance]</span> (+5%/stack) et <span class="buff">[Courage]</span> (+30%, Ult Dmg +50%).<br>
        Compétences réduisent CD Ultime.<br>
        Active <span class="buff">[Talent du guerrier]</span> (Dégâts 1000% PV Max).</p>
    `
    },
    weaponData: {
        0: `
        <h3>Avancement 0 :</h3>
        <p>Les PV de l'utilisateur augmentent de <span class="stat-boost">5 %</span>.<br>
        Lorsque les compétences <strong>Frappe foudroyante</strong>, <strong>Frappe foudroyante : Attaque lourde</strong> ou <strong>Frappe foudroyante : Attaque extrême</strong> touchent leur cible, les dégâts de feu et la Pénétration de défense augmentent de <span class="stat-boost">1 %</span> (cumulable jusqu'à 3 fois).<br>
        Durée : 20 seconde(s)</p>
    `,
        1: `
        <h3>Avancement 5 étoiles :</h3>
        <p>Les PV de l'utilisateur augmentent de <span class="stat-boost">12 %</span>.<br>
        Lorsque les compétences <strong>Frappe foudroyante</strong>, <strong>Frappe foudroyante : Attaque lourde</strong> ou <strong>Frappe foudroyante : Attaque extrême</strong> touchent leur cible, les dégâts de feu et la Pénétration de défense augmentent de <span class="stat-boost">5 %</span> (cumulable jusqu'à 3 fois).<br>
        Durée : 20 seconde(s)</p>
    `,
        2: `
        <h3>Avancement 10 étoiles :</h3>
        <p>L'Attaque, la Défense et les PV de l'utilisateur augmentent de <span class="stat-boost">15 %</span>.</p>
    `
    }
};

// --- YUQI ---
huntersData["yuqi"] = {
    name: "Yuqi",
    rarity: "SSR",
    element: "Feu",
    gradient: "linear-gradient(90deg, #e74c3c, #000)",
    image: "Chasseurs_SSR/collab/feu/yuqi/yuqi_art.png",
    weaponImage: "Chasseurs_SSR/collab/feu/yuqi/soleil_vertueux/Relic_Yuqi_PortraitBig.png",
    weaponName: "Soleil vertueux",
    fullData: {
        0: `
        <h3>Passif :</h3>
        <p>Toute l'équipe reçoit l'effet <span class="buff">[FOREVER]</span> en arrivant dans les modes Mission Rappel et Donjon éphémère.<br>
        Lorsque YUQI ou un allié parvient à mettre un ennemi en état de <span class="buff">[Bris]</span>, la durée de l'état de <span class="buff">[Bris]</span> augmente de 3 seconde(s).<br>
        L'utilisation des compétences <strong>Fracas d'ampli</strong>, <strong>Cri crescendo</strong>, <strong>Coup de pied rotatif montant</strong> ou <strong>Cri sans limite</strong> active <strong>Coup de pied hurlant</strong>.<br>
        Chaque fois que les compétences <strong>Coup de pied hurlant</strong>, <strong>Fracas d'ampli</strong> ou <strong>Coup de pied rotatif montant</strong> touchent leur cible, l'utilisatrice active l'effet <span class="buff">[Tempo]</span> et recharge la jauge <span class="buff">[Éclatement total]</span>.<br>
        Lorsque la jauge <span class="buff">[Éclatement total]</span> atteint 100 % de sa charge, elle active l'effet <span class="buff">[Éclatement total]</span>.<br></p>
        
        <div class="detail-box">
            <h4><span class="buff">[FOREVER]</span></h4>
            <p>Augmente les dégâts infligés de <span class="stat-boost">5 %</span>.<br>
            Durée : illimitée (cumulable jusqu'à 3 fois)</p>
        </div>

        <div class="detail-box">
            <h4><span class="buff">[Tempo]</span></h4>
            <p>Augmente les PV max de <span class="stat-boost">0.5 %</span>.<br>
            Augmente les dégâts de la compétence <strong>Coup de pied hurlant</strong> de <span class="stat-boost">0.5 %</span>.<br>
            Durée : 10 seconde(s) (cumulable jusqu'à 15 fois)</p>
        </div>

        <div class="detail-box">
            <h4><span class="buff">[Éclatement total]</span></h4>
            <p>Les compétences <strong>Fracas d'ampli</strong> et <strong>Coup de pied rotatif montant</strong> deviennent <strong>Cri crescendo</strong> et <strong>Cri sans limite</strong>, ce qui réinitialise leur temps de rechargement.<br>
            Augmente l'efficacité de <span class="buff">[Bris]</span> de <strong>Coup de pied hurlant</strong> de <span class="stat-boost">25 %</span>.<br>
            Augmente les dégâts de la compétence <strong>Coup de pied hurlant</strong> de <span class="stat-boost">10 %</span>. Augmente les PV max de <span class="stat-boost">10 %</span>.<br>
            Confère <span class="buff">[Super armure]</span> tant que l'effet est actif. Tant que l'effet est actif, l'effet <span class="buff">[Tempo]</span> est supprimé et ne peut plus être activé.<br>
            Durée : 10 seconde(s)</p>
        </div>
    `,
        1: `
        <h3>1 étoile :</h3>
        <p>Le taux de recharge de la jauge <span class="buff">[Éclatement total]</span> augmente de <span class="stat-boost">100%</span>.<br>
        Lorsque les compétences <strong>Fracas d'ampli</strong>, <strong>Cri crescendo</strong>, <strong>Coup de pied rotatif montant</strong> ou <strong>Cri sans limite</strong> touchent leur cible, elles leur appliquent l'effet <span class="buff">[Distorsion]</span>.<br>
        Lorsque la compétence <strong>Bête de scène</strong> touche sa cible, elle lui applique l'effet <span class="buff">[Craquage]</span>.<br></p>

        <div class="detail-box">
            <h4><span class="buff">[Distorsion]</span></h4>
            <p>Augmente les dégâts subis de <span class="stat-boost">3 %</span>. Lorsque l'effet atteint le nombre maximal de cumuls, l'effet <span class="buff">[Craquage]</span> s'active.<br>
            Durée : 10 seconde(s) (cumulable jusqu'à 3 fois)</p>
        </div>

        <div class="detail-box">
            <h4><span class="buff">[Craquage]</span></h4>
            <p>Augmente les dégâts subis de <span class="stat-boost">15 %</span>.<br>
            Augmente les dégâts de feu subis de <span class="stat-boost">20 %</span>. L'effet <span class="buff">[Distorsion]</span> est supprimé et ne peut plus être activé tant que cet effet est actif.<br>
            Durée : 20 seconde(s)</p>
        </div>
    `,
        2: `
        <h3>2 étoiles :</h3>
        <p>L'efficacité de <span class="buff">[Bris]</span> augmente de <span class="stat-boost">20 %</span>.<br></p>
    `,
        3: `
        <h3>3 étoiles :</h3>
        <p>L'effet <span class="buff">[Éclatement total]</span> est amélioré. L'utilisation de l'effet <strong>Bête de scène</strong> active l'effet <span class="buff">[Postluminescence]</span> sur toute l'équipe.<br></p>

        <div class="detail-box">
            <h4><span class="buff">[Éclatement total]</span> (Amélioré)</h4>
            <p>Les compétences <strong>Fracas d'ampli</strong> et <strong>Coup de pied rotatif montant</strong> deviennent <strong>Cri crescendo</strong> et <strong>Cri sans limite</strong>, et leurs temps de rechargement sont réinitialisés.<br>
            Augmente l'efficacité de <span class="buff">[Bris]</span> de <strong>Coup de pied hurlant</strong> de <span class="stat-boost">50 %</span>.<br>
            Augmente les dégâts de la compétence <strong>Coup de pied hurlant</strong> de <span class="stat-boost">40 %</span>. Augmente les PV max de <span class="stat-boost">25 %</span>.<br>
            Lorsque les compétences <strong>Coup de pied hurlant</strong>, <strong>Cri crescendo</strong> ou <strong>Cri sans limite</strong> touchent leur cible, la jauge de puissance se recharge de <span class="stat-boost">20 %</span> (ne s'active qu'une fois lorsque la compétence touche sa cible).<br>
            Confère <span class="buff">[Super armure]</span> tant que l'effet est actif. L'effet <span class="buff">[Tempo]</span> est supprimé et ne peut plus être activé tant que l'effet est actif.<br>
            Durée : 10 seconde(s).</p>
        </div>

        <div class="detail-box">
            <h4><span class="buff">[Postluminescence]</span></h4>
            <p>Augmente les dégâts infligés aux cibles en état de <span class="buff">[Bris]</span> de <span class="stat-boost">12 %</span>.<br>
            Augmente les dégâts de compétence de base et de compétence ultime de <span class="stat-boost">15 %</span>.<br>
            Augmente les Dégâts de coup critique de <span class="stat-boost">15 %</span>. Durée : 20 seconde(s)</p>
        </div>
    `,
        4: `
        <h3>4 étoiles :</h3>
        <p>Les dégâts de feu des membres de l'équipe de l'élément Feu augmentent de <span class="stat-boost">5 %</span> par allié de l'élément Feu présent dans le groupe.<br></p>
    `,
        5: `
        <h3>5 étoiles :</h3>
        <p>Les effets <span class="buff">[Distorsion]</span>, <span class="buff">[Craquage]</span> et <span class="buff">[Postluminescence]</span> sont améliorés.<br></p>

        <div class="detail-box">
            <h4><span class="buff">[Distorsion]</span> (Amélioré)</h4>
            <p>Augmente les dégâts infligés de <span class="stat-boost">6 %</span>.<br>
            Active l'effet <span class="buff">[Craquage]</span> une fois le nombre de cumuls maximum atteint.<br>
            Durée : 15 seconde(s) (cumulable jusqu'à 3 fois)</p>
        </div>

        <div class="detail-box">
            <h4><span class="buff">[Craquage]</span> (Amélioré)</h4>
            <p>Augmente les dégâts infligés de <span class="stat-boost">20 %</span>.<br>
            Augmente les dégâts de feu infligés de <span class="stat-boost">25 %</span>. L'effet <span class="buff">[Distorsion]</span> est supprimé et ne peut plus être activé tant que cet effet est actif.<br>
            Durée : 30 seconde(s)</p>
        </div>

        <div class="detail-box">
            <h4><span class="buff">[Postluminescence]</span> (Amélioré)</h4>
            <p>Augmente les dégâts subis par une cible en état de <span class="buff">[Bris]</span> de <span class="stat-boost">12 %</span>.<br>
            Augmente les dégâts de compétence de base et de compétence ultime de <span class="stat-boost">30 %</span>.<br>
            Augmente les Dégâts de coup critique de <span class="stat-boost">20 %</span>. Durée : 30 seconde(s)</p>
        </div>
    `
    },
    summaryData: {
        0: `
        <h3>Passif : Star du Rock</h3>
        <p>Bris durée +3s. Mode spécial : Buff <span class="buff">[FOREVER]</span> (+5% dégâts).<br>
        Compétences stack <span class="buff">[Tempo]</span> (PV/Dégâts skill).<br>
        Jauge pleine = <span class="buff">[Éclatement total]</span> (Reset CD, Boost Bris/Dégâts/PV, Super armure).</p>
    `,
        1: `
        <h3>1 étoile</h3>
        <p>Recharge Jauge +100%.<br>
        Compétences appliquent <span class="buff">[Distorsion]</span> (Dégâts subis +3%).<br>
        Bête de scène applique <span class="buff">[Craquage]</span> (Dégâts subis +15%, Feu +20%).</p>
    `,
        2: `
        <h3>2 étoiles</h3>
        <p>L'efficacité de <span class="buff">[Bris]</span> augmente de <span class="stat-boost">20 %</span>.<br></p>
    `,
        3: `
        <h3>3 étoiles</h3>
        <p><span class="buff">[Éclatement total]</span> amélioré : Boost Bris +50%, Dégâts +40%, PV +25%, Recharge Jauge Puissance.<br>
        Bête de scène active <span class="buff">[Postluminescence]</span> équipe (Bonus sur cible Bris, Skill Dmg, Crit Dmg).</p>
    `,
        4: `
        <h3>4 étoiles</h3>
        <p>Dégâts Feu équipe <span class="stat-boost">+5%</span> par allié Feu.<br></p>
    `,
        5: `
        <h3>5 étoiles</h3>
        <p>Améliore <span class="buff">[Distorsion]</span> (Dégâts infligés +6%) et <span class="buff">[Craquage]</span> (Dégâts infligés +20%, Feu +25%).<br>
        Améliore <span class="buff">[Postluminescence]</span> (Bonus Skill Dmg +30%, Crit Dmg +20%).</p>
    `
    },
    weaponData: {
        0: `
        <h3>Avancement 0 :</h3>
        <p>Les PV de l'utilisatrice augmentent de <span class="stat-boost">5 %</span>.<br>
        Les dégâts de l'utilisatrice augmentent de <span class="stat-boost">5 %</span> pendant 15 seconde(s) lorsque l'effet <span class="buff">[Éclatement total]</span> est activé.</p>
    `,
        1: `
        <h3>Avancement 5 étoiles :</h3>
        <p>Les PV de l'utilisatrice augmentent de <span class="stat-boost">12 %</span>.<br>
        Les dégâts de l'utilisatrice augmentent de <span class="stat-boost">30 %</span> pendant 15 seconde(s) lorsque l'effet <span class="buff">[Éclatement total]</span> est activé.</p>
    `,
        2: `
        <h3>Avancement 10 étoiles :</h3>
        <p>Augmente l'Attaque, la Défense et les PV de l'utilisateur de <span class="stat-boost">15 %</span>.</p>
    `
    }
};