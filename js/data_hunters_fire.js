if (typeof huntersData === 'undefined') { 
    var huntersData = {}; 
}

// --- SONG CHIYUL ---
huntersData["song-chiyul"] = {
    name: "Song Chiyul",
    rarity: "SR",
    element: "Feu",
    gradient: "linear-gradient(90deg, #e64b4b, #000)", // Dégradé rouge/noir pour le feu
    image: "Chasseurs_SR/feu/Song_chiyul/SongChiYul_Portrait_Body.png",
    weaponImage: "Chasseurs_SR/feu/Song_chiyul/talent_intact/Relic_SongChiYul_PortraitBig.png",
    weaponName: "Talent intact",
    fullData: {
        0: fmtPassif(`Passif :`, `Lorsque la compétence **Iaido de type 4: Fleur de lotus rouge** touche sa cible, les dégâts d'**Incinération** augmentent de 20% pendant 10 seconde(s) (cumulable jusqu'à 3 fois) et la jauge de noyau se charge à 100%.`, [], "Feu"),
        1: fmtPassif(`1 étoile :`, `La consommation de PM de Chiyul augmente de 50%, mais les dégâts qu'il inflige aux monstres de type Normal augmentent de 50%.`, [], "Feu"),
        2: fmtPassif(`2 étoiles :`, `Augmente les PM de l'utilisateur de 20 %.`, [], "Feu"),
        3: fmtPassif(`3 étoiles :`, `La portée et la durée du tourbillon de flammes de la compétence **Feu de l'enfer** augmentent de 50%.`, [], "Feu"),
        4: fmtPassif(`4 étoiles :`, `Les dégâts d'**Incinération** augmentent de 20%.`, [], "Feu"),
        5: fmtPassif(`5 étoiles :`, `Les dégâts infligés par l'utilisateur augmentent de 50% lorsqu'il utilise la compétence **Incinération** sur des cibles affectées par [Brûlure].`, [], "Feu")
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
        <p><span class="element-feu">Feu</span> de l'enfer : Portée/Durée <span class="stat-boost">+50%</span>.<br></p>
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
        0: fmtWeapon(`Avancement 0 :`, `Augmente les dégâts de feu de l'utilisateur de 2%.

        Lors de l'utilisation d'une compétence de base ou d'une attaque de noyau, les dégâts infligés aux monstres de type Normal augmentent de 2% pendant 10 seconde(s) (cumulable jusqu'à 5 fois).`, "Feu"),
        1: fmtWeapon(`Avancement 5 étoiles :`, `Augmente les dégâts de feu de l'utilisateur de 8%.

        Lors de l'utilisation d'une Attaque de base ou de noyau, les dégâts infligés aux monstres de type Normal augmentent de 8% pendant 10 seconde(s) (cumulable jusqu'à 5 fois).`, "Feu"),
        2: fmtWeapon(`Avancement 10 étoiles :`, `Augmente l'Attaque, la Défense et les PV de 15%.`, "Feu")
    }
};

// --- CHOI JONGIN ---
huntersData["choi-jongin"] = {
    name: "Choi Jongin",
    rarity: "SSR",
    element: "Feu",
    gradient: "linear-gradient(90deg, #e64b4b, #000)",
    image: "Chasseurs_SSR/feu/Choi_jongin/choi_art.png",
    weaponImage: "Chasseurs_SSR/feu/Choi_jongin/echange_equivalent/Relic_ChoiJongIn_PortraitBig.png",
    weaponName: "échange équivalent",
    fullData: {
        0: fmtPassif(`Passif :`, `Choi Jongin ne peut pas infliger de coups critiques, mais son Attaque augmente de 50%.

        Lorsque l'utilisateur lance **Fin des temps**, applique l'effet [L'Arme Ultime].`, [
        { title: `[L'Arme Ultime]`, content: `Réinitialise le temps de rechargement de **Pluie de flammes** et de **Lance de feu**.
            Augmente l'Attaque et la Pénétration de défense de l'utilisateur de 20%.
            Durée: 15 seconde(s)` }
    ], "Feu"),
        1: fmtPassif(`1 étoile :`, `Les dégâts de **Pluie de flammes** triplent pendant la durée de [L'Arme Ultime], et la compétence devient **Méga cratère**.`, [], "Feu"),
        2: fmtPassif(`2 étoiles :`, `Augmente l'Attaque de l'utilisateur de 12%.`, [], "Feu"),
        3: fmtPassif(`3 étoiles :`, `Augmente les dégâts de **Fin des temps** de 60%.`, [], "Feu"),
        4: fmtPassif(`4 étoiles :`, `Augmente les dégâts de [Brûlure] de l'utilisateur de 100%.

        Augmente les dégâts de feu infligés par l'utilisateur de 16%.`, [], "Feu"),
        5: fmtPassif(`5 étoiles :`, `Lorsqu'un personnage [quitte le combat], le temps de rechargement de la compétence **Fin des temps** est divisé par 3 et la jauge de puissance se charge de 0.8% toutes les secondes.

        En mode Combat d'équipe, le temps de rechargement de **Fin des temps**, **Pluie de flammes** et **Lance de feu** est divisé par 2 et la jauge de puissance se charge de 0.4% toutes les secondes.`, [], "Feu")
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
        <p>Dégâts Brûlure <span class="stat-boost">+100%</span>. Dégâts <span class="element-feu">Feu</span> <span class="stat-boost">+16%</span>.</p>
    `,
        5: `
        <h3>5 étoiles</h3>
        <p>Switch Out : CD Ultime divisé par 3, Regen Jauge ++.<br>
        Mode Équipe : CD skills divisés par 2, Regen Jauge +.</p>
    `
    },
    weaponData: {
        0: fmtWeapon(`Avancement 0 :`, `Augmente l'Attaque de l'utilisateur de 5%.

        Lorsque des cibles affectées par l'effet [Brûlure] de Choi Jongin sont attaquées, leur Défense diminue de 7% pendant 5 seconde(s).`, "Feu"),
        1: fmtWeapon(`Avancement 5 étoiles :`, `Augmente l'Attaque de l'utilisateur de 20%.

        Lorsque des cibles affectées par l'effet [Brûlure] de Choi Jongin sont attaquées, leur Défense diminue de 20% pendant 5 seconde(s).`, "Feu"),
        2: fmtWeapon(`Avancement 10 étoiles :`, `Augmente l'Attaque, la Défense et les PV de l'utilisateur de 15%.`, "Feu")
    }
};

// --- CHRISTOPHER REED ---
huntersData["christopher-reed"] = {
    name: "Christopher Reed",
    rarity: "SSR",
    element: "Feu",
    gradient: "linear-gradient(90deg, #e64b4b, #000)",
    image: "Chasseurs_SSR/feu/Christopher_reed/christopher_art.png",
    weaponImage: "Chasseurs_SSR/feu/Christopher_reed/strategie_victorieuse/Relic_ChristopherReed_PortraitBig.png",
    weaponName: "Strategie victorieuse",
    fullData: {
        0: fmtPassif(`Passif :`, `L'utilisation des compétences **Étoile montante**, **Passe offensive**, **Coup de pied nitro** ou **Faute de jeu** remplit la jauge d'[Apparition de corps spirituel] de l'utilisateur.

        L'utilisation de la compétence **0 à 100** vide la jauge d'[Apparition de corps spirituel].

        Lorsque la jauge d'[Apparition de corps spirituel] atteint 100 %, elle active l'attaque de noyau spéciale de l'utilisateur.

        L'utilisation de l'attaque de noyau spéciale active l'effet [Apparition de corps spirituel].

        La compétence **Interception décisive** devient disponible en cas d'Évasion extrême réussie.

        Lorsque les compétences **Performance montante**, **Coup de pied rapide** ou **0 à 100** touchent leur cible, elles lui appliquent l'effet [Brûlure].

        L'utilisation des compétences **Coup de pied nitro** ou **Faute de jeu** dans le mode [Combat d'équipe] active l'effet [Touchdown].`, [
        { title: `[Interception décisive]`, content: `L'utilisateur attrape un ballon devant l'ennemi et le frappe au sol pour faire un touchdown.
            Inflige des dégâts élémentaires de feu équivalents à 1500 % de la Défense de l'utilisateur.
            L'utilisation de cette compétence active l'effet [Touchdown].
            Compte comme une compétence de base. (temps de rechargement : 15 seconde(s)).` },
        { title: `[Apparition de corps spirituel]`, content: `Transforme l'attaque de base, l'attaque de noyau et la compétence de base de l'utilisateur en versions améliorées, et les temps de rechargement de ces compétences sont réinitialisés.
            Augmente l'effet d'[Accumulation élémentaire] de feu de 25 %.
            Augmente les dégâts de l'attaque de base, de l'attaque de noyau et de la compétence de base de 150 %.
            L'utilisation de la compétence **0 à 100** supprime l'effet.
            Durée : 30 seconde(s)` },
        { title: `[Touchdown]`, content: `Augmente les dégâts de [Surcharge] de feu de 15 %.
            Augmente l'effet d'[Accumulation élémentaire] de feu de 5 %.
            Durée : 60 seconde(s) (cumulable jusqu'à 3 fois)` },
        { title: `[Brûlure]`, content: `Inflige des dégâts équivalents à 200 % de la Défense de l'utilisateur toutes les 3 secondes.
            Durée : 30 seconde(s)` }
    ], "Feu"),
        1: fmtPassif(`1 étoile :`, `Augmente l'effet de l'[Accumulation élémentaire] de feu de 20 %.`, [], "Feu"),
        2: fmtPassif(`2 étoiles :`, `Si l'effet [Immunité contre l'Accumulation élémentaire] de feu est actif sur la cible lorsque l'utilisateur porte une attaque, sa jauge d'[Apparition de corps spirituel] se remplit (temps de rechargement : 15 seconde(s)).

        Lorsque des membres de l'équipe de l'élément Feu, y compris l'utilisateur, utilisent leurs compétences de base ou ultime, la jauge d'[Apparition de corps spirituel] de l'utilisateur se remplit.

        Augmente les dégâts de la compétence **Interception décisive** de 25 % contre les cibles affectées par [Brûlure].`, [], "Feu"),
        3: fmtPassif(`3 étoiles :`, `Lorsque l'effet [Apparition de corps spirituel] est activé, l'utilisateur récupère 30 % de ses PV et reçoit un [Bouclier].

        Lorsque l'attaque de l'utilisateur touche une cible affectée par [Brûlure], l'utilisateur reçoit l'effet [Esprit de compétition] (temps de rechargement : 2 seconde(s)).`, [
        { title: `[Esprit de compétition]`, content: `Augmente les dégâts de feu de 165 %.
            Augmente les dégâts de la compétence **Interception décisive** de 15 %.
            Durée : 15 seconde(s)` },
        { title: `[Bouclier]`, content: `Confère un [Bouclier] équivalent à 100 % de la Défense de l'utilisateur.
            Durée : 20 seconde(s)` }
    ], "Feu"),
        4: fmtPassif(`4 étoiles :`, `Les dégâts de feu des membres de l'équipe de l'élément Feu augmentent de 5 % par allié de l'élément Feu présent dans le groupe.`, [], "Feu"),
        5: fmtPassif(`5 étoiles :`, `Lorsque Christopher Reed ou un allié parvient à déclencher l'effet [Surcharge] de feu, sa jauge de puissance se remplit de 20 % et le temps de rechargement de la compétence **0 à 100** est réinitialisé (temps de rechargement : 30 seconde(s)).

        Lorsqu'une attaque de Christopher Reed touche une cible affectée par l'effet [Surcharge] de feu, elle lui applique [Choc flamboyant] (temps de rechargement : 30 seconde(s)).

        Lorsque l'effet [Apparition de corps spirituel] est activé, l'effet [Esprit du vainqueur] est activé.`, [
        { title: `[Choc flamboyant]`, content: `Augmente les dégâts de [Surcharge] de feu infligés de 20 %.
            L'effet [Irrémédiable] est activé.
            Durée : 30 seconde(s)` },
        { title: `[Esprit du vainqueur]`, content: `Augmente les dégâts de la compétence **0 à 100** de 250 %.
            Les effets sont supprimés lors de l'utilisation de la compétence **0 à 100**.
            (Les compétences QTE des alliés ne peuvent pas être utilisées automatiquement en [Mode Chasseur] pendant 25 seconde(s).)
            Durée : 60 seconde(s)` }
    ], "Feu")
    },
    summaryData: {
        0: `
        <h3>Passif : Esprit du <span class="element-feu">Feu</span></h3>
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
        Toucher cible Brûlée = <span class="buff">[Esprit de compétition]</span> (Dégâts <span class="element-feu">Feu</span> <span class="stat-boost">+165%</span>).</p>
    `,
        4: `
        <h3>4 étoiles</h3>
        <p>Dégâts <span class="element-feu">Feu</span> équipe <span class="stat-boost">+5%</span> par allié <span class="element-feu">Feu</span>.<br></p>
    `,
        5: `
        <h3>5 étoiles</h3>
        <p>Surcharge (Soi/Allié) = Jauge Puissance <span class="stat-boost">+20%</span> + Reset <strong>0 à 100</strong>.<br>
        Toucher cible Surchargée = <span class="buff">[Choc flamboyant]</span> (Dégâts Surcharge <span class="stat-boost">+20%</span>, Anti-heal).<br>
        [Apparition] active <span class="buff">[Esprit du vainqueur]</span> (Dégâts "0 à 100" <span class="stat-boost">+250%</span>).</p>
    `
    },
    weaponData: {
        0: fmtWeapon(`Avancement 0 :`, `La Défense de l'utilisateur augmente de 5%.

        Le temps de rechargement de la Ruée de l'utilisateur diminue de 5%.

        L'utilisation de la compétence **0 à 100** augmente la Pénétration de défense de l'utilisateur de 2% pendant 20 seconde(s).`, "Feu"),
        1: fmtWeapon(`Avancement 5 étoiles :`, `La Défense de l'utilisateur augmente de 50%.

        Le temps de rechargement de la Ruée de l'utilisateur diminue de 20%.

        L'utilisation de la compétence **0 à 100** augmente la Pénétration de défense de l'utilisateur de 15% pendant 20 seconde(s).`, "Feu"),
        2: fmtWeapon(`Avancement 10 étoiles :`, `L'Attaque, la Défense et les PV de l'utilisateur augmentent de 15%.`, "Feu")
    }
};

// --- EMMA LAURENT ---
huntersData["emma-laurent"] = {
    name: "Emma Laurent",
    rarity: "SSR",
    element: "Feu",
    gradient: "linear-gradient(90deg, #e64b4b, #000)",
    image: "Chasseurs_SSR/feu/Emma_laurent/emma_art.png",
    weaponImage: "Chasseurs_SSR/feu/Emma_laurent/pensees_nocturnes/Relic_EmmaLaurent_PortraitBig.png",
    weaponName: "Pensées nocturnes",
    fullData: {
        0: fmtPassif(`Passif :`, `L'effet [Absorption de chaleur] s'applique pour chaque action spécifique.

        Lorsque l'utilisatrice lance **Rapière de feu**, applique l'effet [Radiation de chaleur] en fonction du nombre de cumuls d'[Absorption de chaleur].
Lorsque l'effet [Radiation de chaleur] est activé, l'effet [Absorption de chaleur] appliqué est consumé.`, [
        { title: `[Absorption de chaleur]`, content: `**5 cumuls :** Défense +7.77%.
            **10 cumuls :** Récupère des PV à hauteur de 7.77% des dégâts subis (15s).
            **15 cumuls :** Applique un [Bouclier] (7.77% des PV max).
            Durée: 15s` },
        { title: `[Radiation de chaleur]`, content: `**5 cumuls :** Pénétration de défense +7.77%.
            **10 cumuls :** Dégâts de feu de l'utilisatrice +7.77%.
            **15 cumuls :** Dégâts de feu de l'équipe +7.77%.
            Durée: 20s` }
    ], "Feu"),
        1: fmtPassif(`1 étoile :`, `Augmente les dégâts de Bris de **Traînée brûlante** de 77.77%.`, [], "Feu"),
        2: fmtPassif(`2 étoiles :`, `L'efficacité de [Bris] de l'utilisateur augmente de 10%.

        Augmente les dégâts infligés aux cibles avec le statut [Bris] de 20%.`, [], "Feu"),
        3: fmtPassif(`3 étoiles :`, `L'effet [Absorption de chaleur] s'applique aux membres de l'équipe.

        Applique 5 cumuls d'[Absorption de chaleur] à l'arrivée dans le niveau.`, [], "Feu"),
        4: fmtPassif(`4 étoiles :`, `Les PV de l'utilisateur augmentent de 10%.`, [], "Feu"),
        5: fmtPassif(`5 étoiles :`, `Lorsque la cible entre en état de [Bris] :

        - Réinitialise le temps de rechargement de toutes les compétences.

        - Récupère **100%** de la jauge de noyau et de la jauge de puissance.

        - Applique l'effet [Augmentation des dégâts].`, [
        { title: `[Augmentation des dégâts]`, content: `Augmente les dégâts de 77.77%.
Durée: 15s` }
    ], "Feu")
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
            <p>Pen Def, Dégâts <span class="element-feu">Feu</span> Perso/Équipe (7.77%).</p>
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
        0: fmtWeapon(`Avancement 0 :`, `Augmente les dégâts infligés aux cibles affectées par l'effet [Bris] de 4%.

        Lorsque l'effet [Absorption de chaleur] s'active, les dégâts infligés par l'utilisateur augmentent de 1.5% (cumulable jusqu'à 4 fois).`, "Feu"),
        1: fmtWeapon(`Avancement 5 étoiles :`, `Augmente les dégâts infligés aux cibles affectées par l'effet [Bris] de 12%.

        Lorsque l'effet [Absorption de chaleur] s'active, les dégâts infligés par l'utilisateur augmentent de 1.5% (cumulable jusqu'à 15 fois).`, "Feu"),
        2: fmtWeapon(`Avancement 10 étoiles :`, `Augmente l'Attaque, la Défense et les PV de l'utilisateur de 15%.`, "Feu")
    }
};

// --- ESIL RADIR ---
huntersData["esil-radir"] = {
    name: "Esil Radir",
    rarity: "SSR",
    element: "Feu",
    gradient: "linear-gradient(90deg, #e64b4b, #000)",
    image: "Chasseurs_SSR/feu/Esil_radir/esil_art.png",
    weaponImage: "Chasseurs_SSR/feu/Esil_radir/mort_glorieuse/Relic_EsilRadiru_PortraitBig.png",
    weaponName: "Mort glorieuse",
    fullData: {
        0: fmtPassif(`Passif :`, `Lorsqu'Esil Radir parvient à mettre une cible en état de [Bris], la durée de l'état de [Bris] augmente de 3 seconde(s).
Lorsqu'elle utilise **Impatience de la mort** ou qu'**Évasion extrême** est activée, **Jet de lance** s'active.
Lorsqu'elle utilise **Pics transperçants** ou **Gloire à la chaîne**, elle reçoit l'effet [Jet de lance amélioré].
Lorsque la compétence **Jet de lance** est activée, son efficacité augmente en fonction du nombre de cumuls de [Jet de lance amélioré] appliqués.
L'efficacité de [Bris] dans l'[Atelier de la lumière brillante] augmente de 24 %.`, [
        { title: `[Jet de lance]`, content: `Esil projette une lance qui transperce les armures magiques (Dégâts: 800% de l'Attaque).
Inflige des dégâts de [Bris] légers et active l'effet [Proie] (Max 5 fois).` },
        { title: `[Jet de lance amélioré]`, content: `Augmente les dégâts de Jet de lance et l'efficacité de [Bris] de 80% (cumulable 5 fois).
Supprimé après l'utilisation de Jet de lance.` },
        { title: `[Proie]`, content: `Si la cible passe en état de [Bris], elle reçoit [Mort aux faibles] selon le nombre de cumuls de [Proie].
Durée: 60s (cumulable 50 fois).` },
        { title: `[Mort aux faibles]`, content: `Augmente les dégâts de feu subis de 0.3%.
Augmente les dégâts subis de 0.3%.
Durée: 60s (cumulable 50 fois).` }
    ], "Feu"),
        1: fmtPassif(`1 étoile :`, `Tant que les effets de **Victoire annoncée** sont actifs, les effets de **Jet de lance** sont améliorés.
Les dégâts de Jet de lance augmentent de 100 %. 
Lorsque Jet de lance touche sa cible, l'effet [Proie] est appliqué 2 fois.
L'effet [Proie] déclenché par Jet de lance ne peut s'appliquer que 10 fois au maximum.`, [], "Feu"),
        2: fmtPassif(`2 étoiles :`, `L'Attaque des membres de l'équipe augmente de 3% par membre de l'équipe de l'élément feu présent dans le groupe (cumulable jusqu'à 3 fois).`, [], "Feu"),
        3: fmtPassif(`3 étoiles :`, `Au début du niveau, l'utilisatrice commence le combat avec sa jauge de puissance à 100%.
Lorsque Jet de lance touche sa cible, la jauge de puissance de l'utilisatrice se remplit de 1% et le temps de rechargement de la compétence **Victoire annoncée** diminue de 1 seconde (CD: 1s).
Lorsque Victoire annoncée touche une cible dont la jauge de [bris] est à 10% ou moins, la cible est instantanément mise en état de [Bris].`, [], "Feu"),
        4: fmtPassif(`4 étoiles :`, `La Pénétration de défense des membres de l'équipe augmente de 4% par membre de l'équipe de l'élément feu présent dans le groupe (cumulable jusqu'à 3 fois).`, [], "Feu"),
        5: fmtPassif(`5 étoiles :`, `Lors de l'utilisation de la compétence **Impatience de la mort améliorée**, la compétence **Jet de lance** est activée une fois de plus.
Lorsque Jet de lance touche une cible en état de [Bris] dans les 10s, l'effet [Mort aux faibles] est déclenché au lieu de l'effet [Proie].`, [
        { title: `[Mort aux faibles] (Amélioré)`, content: `Augmente les dégâts de feu subis de 0.3%.
Augmente les dégâts subis de 0.3%.
Durée: 90s (cumulable 100 fois).` }
    ], "Feu")
    },
    summaryData: {
        0: `<h3>Passif : Esil</h3><p>Met en [Bris] = durée [Bris] <span class="stat-boost">+3s</span>.<br>Actions spécifiques activent <strong>Jet de lance</strong>.<br><strong>Jet de lance</strong> inflige [Bris] et applique <span class="buff ecarlate">[Proie]</span>.</p><div class="detail-box"><h4><span class="buff pourpre">[Jet de lance amélioré]</span></h4><p>Dégâts et efficacité [Bris] <span class="stat-boost">+80%</span> (Max 5).</p></div><div class="detail-box"><h4><span class="buff ecarlate">[Proie]</span> / <span class="buff feu">[Mort aux faibles]</span></h4><p>Si cible [Bris], convertit [Proie] en [Mort aux faibles] : Dégâts subis/<span class="element-feu">Feu</span> <span class="stat-boost">+0.3%</span> par cumul.</p></div>`,
        1: `<h3>1 étoile</h3><p>Sous <strong>Victoire annoncée</strong> : Dégâts Jet de lance <span class="stat-boost">+100%</span>.<br>Applique <span class="buff ecarlate">[Proie]</span> x2 (Max 10 cumuls).</p>`,
        2: `<h3>2 étoiles</h3><p>Attaque équipe <span class="stat-boost">+3%</span> par allié <span class="element-feu">Feu</span> (Max 3).</p>`,
        3: `<h3>3 étoiles</h3><p>Début combat : Jauge Puissance <span class="stat-boost">100%</span>.<br>Jet de lance : Puissance +1%, CD Victoire annoncée -1s.<br>Victoire annoncée : [Bris] instantané si jauge ≤ 10%.</p>`,
        4: `<h3>4 étoiles</h3><p>Pénétration Défense équipe <span class="stat-boost">+4%</span> par allié <span class="element-feu">Feu</span> (Max 3).</p>`,
        5: `<h3>5 étoiles</h3><p>Impatience de la mort améliorée active Jet de lance supplémentaire.<br>Sur cible [Bris] : Applique directement <span class="buff feu">[Mort aux faibles]</span> (Max 100 cumuls, durée 90s).</p>`
    },
    weaponData: {
        0: fmtWeapon(`Avancement 0 :`, `L'Attaque de l'utilisatrice augmente de 4%.
Augmente l'Attaque supplémentaire du membre de l'équipe au Taux de coup critique le plus élevé de 300 pts par tranche de 1000 pts d'Attaque supplémentaire d'Esil Radir (Max 600).`, "Feu"),
        1: fmtWeapon(`Avancement 5 étoiles :`, `L'Attaque de l'utilisatrice augmente de 12%.
Augmente l'Attaque supplémentaire du membre de l'équipe au Taux de coup critique le plus élevé de 300 pts par tranche de 1000 pts d'Attaque supplémentaire d'Esil Radir (Max 2400).`, "Feu"),
        2: fmtWeapon(`Avancement 10 étoiles :`, `Augmente l'Attaque, la Défense et les PV de l'utilisateur de 15%.`, "Feu")
    }
};

// --- GINA ---
huntersData["gina"] = {
    name: "Gina",
    rarity: "SSR",
    element: "Feu",
    gradient: "linear-gradient(90deg, #e64b4b, #000)",
    image: "Chasseurs_SSR/feu/Gina/gina_art.png",
    weaponImage: "Chasseurs_SSR/feu/Gina/glamour_et_auto_reconnaissance/Relic_Gina_PortraitBig.png",
    weaponName: "Glamour et auto reconnaissance",
    fullData: {
        0: fmtPassif(`Passif :`, `Lors de l'utilisation de **Descente forcée**, **Masse gravitationnelle** ou **Voie d'extinction**, l'effet [Contre-courant] est appliqué.

        Lorsque [Contre-courant] atteint son maximum, l'effet [Circulation de mana] est appliqué à toute l'équipe.

        Après la création du [Champ gravitationnel], l'effet [Rétrogradation corporelle] est appliqué à l'équipe.`, [
        { title: `[Contre-courant]`, content: `Durée: illimitée (cumulable jusqu'à 5 fois).` },
        { title: `[Circulation de mana]`, content: `Augmente l'Attaque de 15%.
            Augmente les dégâts de feu de 15%.
            Active : Supprime l'effet [Contre-courant].
            Durée: 15s` },
        { title: `[Rétrogradation corporelle]`, content: `Toute l'équipe récupère des PV (2% de l'Attaque de Gina) toutes les 3s.
            La jauge de puissance de l'équipe se remplit de 2% toutes les 3s.
            Durée: 15s` }
    ], "Feu"),
        1: fmtPassif(`1 étoile :`, `Lorsque l'effet [Circulation de mana] s'active, l'effet [Transformation de mana] est également appliqué à tous les membres de l'équipe.`, [
        { title: `[Transformation de mana]`, content: `Octroie un [Bouclier] équivalent à 12% de l'Attaque.
            Augmente les dégâts infligés de 12%.
            Réduit les dégâts subis de 12%.
            Durée: 20s` }
    ], "Feu"),
        2: fmtPassif(`2 étoiles :`, `Augmente la valeur du [Bouclier] appliqué à l'équipe de 20%.

        Lorsqu'un [Bouclier] est appliqué à un membre de l'équipe, ses dégâts augmentent de 10%.`, [], "Feu"),
        3: fmtPassif(`3 étoiles :`, `Lors de l'utilisation de **Masse gravitationnelle**, un [Champ gravitationnel] est créé.

        Applique l'effet [Boost gravitationnel] aux cibles touchées.`, [
        { title: `[Champ gravitationnel]`, content: `Dégâts: 20% de Masse gravitationnelle.
            Applique [Halte] (Interruption, CD 20s) sur les ennemis dans la zone.
            Durée: 3s` },
        { title: `[Boost gravitationnel]`, content: `Augmente les dégâts de feu subis par la cible de 10%.
            Durée: 20s` }
    ], "Feu"),
        4: fmtPassif(`4 étoiles :`, `La Pénétration de défense de tous les membres de l'équipe augmente de 4%.

        La Pénétration de défense des membres de l'équipe de l'élément Feu augmente de 4% supplémentaires.`, [], "Feu"),
        5: fmtPassif(`5 étoiles :`, `Lorsqu'un [Champ gravitationnel] est créé, l'effet [Singularité spatio-temporelle] est appliqué.`, [
        { title: `[Singularité spatio-temporelle]`, content: `Augmente les dégâts de **Voie d'extinction** de 60%.
            Augmente les dégâts de Voie d'extinction de 60% supp. sur les cibles affectées par [Boost gravitationnel].
            Consumé après utilisation.
            Durée: 10s` }
    ], "Feu")
    },
    summaryData: {
        0: `
        <h3>Passif : Support Gravitationnel</h3>
        <p>Compétences = <span class="buff ecarlate">[Contre-courant]</span>.<br>
        Max [Contre-courant] = <span class="buff feu">[Circulation de mana]</span> (Buff Atk/<span class="element-feu">Feu</span> Équipe).<br>
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
        Cibles touchées : Dégâts <span class="element-feu">Feu</span> subis <span class="stat-boost">+10%</span>.</p>
    `,
        4: `
        <h3>4 étoiles</h3>
        <p>Pénétration Défense Équipe <span class="stat-boost">+4%</span> (+4% si <span class="element-feu">Feu</span>).</p>
    `,
        5: `
        <h3>5 étoiles</h3>
        <p>Champ Gravitationnel = <span class="buff feu">[Singularité]</span>.<br>
        Dégâts Voie d'extinction <span class="stat-boost">+60%</span> (ou <span class="stat-boost">+120%</span> si cible debuff).</p>
    `
    },
    weaponData: {
        0: fmtWeapon(`Avancement 0 :`, `L'Attaque de l'utilisatrice augmente de 2%.

        Lorsque [Circulation de mana] est activé :

        - L'équipe récupère **50 PM**.

        - Attaque et Dégâts de feu équipe +1% (Max 4 fois).`, "Feu"),
        1: fmtWeapon(`Avancement 5 étoiles :`, `L'Attaque de l'utilisatrice augmente de 12%.

        Lorsque [Circulation de mana] est activé :

        - L'équipe récupère **250 PM**.

        - Attaque et Dégâts de feu équipe +1% (Max 10 fois).`, "Feu"),
        2: fmtWeapon(`Avancement 10 étoiles :`, `Augmente l'Attaque, la Défense et les PV de l'utilisateur de 15%.`, "Feu")
    }
};

// --- TAWATA KANAE ---
huntersData["tawata-kanae"] = {
    name: "Tawata Kanae",
    rarity: "SSR",
    element: "Feu",
    gradient: "linear-gradient(90deg, #e64b4b, #000)",
    image: "Chasseurs_SSR/feu/Tawata_kanae/tawata_art.png",
    weaponImage: "Chasseurs_SSR/feu/Tawata_kanae/la_voix_du_heros/Relic_TawataKanae_PortraitBig.png",
    weaponName: "La voix du héros",
    fullData: {
        0: fmtPassif(`Passif :`, `L'utilisatrice reçoit l'effet [Pourpre] lorsqu'elle utilise Munechika.

        L'utilisatrice reçoit l'effet [Écarlate] lorsqu'elle utilise son attaque de noyau améliorée.

        Lorsque les effets [Pourpre], [Écarlate] ou [Feu] sont appliqués, les compétences Kamaitachi de l'utilisatrice deviennent sa compétence ultime.

        Les dégâts infligés par l'utilisatrice aux cibles en état de [Bris] augmentent de 24 %.
Lorsqu'elle utilise Kamaitachi, l'utilisatrice active automatiquement son attaque de noyau améliorée, aux dégâts bonus équivalents à 50% des dégâts infligés par la compétence.
Lors de l'utilisation de Kamaitachi, l'effet [Feu] est activé.
Augmente les dégâts de Tsuchigumo de 70%.

            L'utilisatrice reçoit [Super armure] lors de l'utilisation de Kamaitachi.

            L'utilisation de Kamaitachi supprime les effets [Pourpre], [Écarlate] et [Feu].`, [], "Feu"),
        1: fmtPassif(`1 étoile :`, `Lorsqu'un ennemi meurt près de l'utilisatrice, celle-ci reçoit 1 cumuls de l'effet [Instinct]. 

        Lorsqu'elle met une cible en état de [Bris], elle reçoit 5 cumuls de l'effet [Instinct].
Augmente le Taux de coup critique de l'utilisatrice de 1%.

            Lorsque l'effet [Instinct] se cumule 10 fois, il devient l'effet [Sixième sens].
Augmente le Taux de coup critique de 20%.

            Si les PM de l'utilisatrice tombent à 20% ou moins, sa Consommation de PM diminue de 40 %.`, [], "Feu"),
        2: fmtPassif(`2 étoiles :`, `Les dégâts de coup critique de l'utilisatrice augmentent de 16%.`, [], "Feu"),
        3: fmtPassif(`3 étoiles :`, `Lors de l'utilisation de Munechika, l'utilisatrice reçoit l'effet [Super armure] pendant 5 seconde(s).

        L'utilisation de Feu: Kamaitachi réduit le temps de rechargement de Munechika de 5 seconde(s).`, [], "Feu"),
        4: fmtPassif(`4 étoiles :`, `Les dégâts de feu de Tawata Kanae augmentent de 12% par chasseur de l'élément Feu présent dans le groupe (cumulable jusqu'à 3 fois).`, [], "Feu"),
        5: fmtPassif(`5 étoiles :`, `Les effets [Instinct] et [Sixième sens] sont améliorés.
L'Attaque de l'utilisatrice augmente de 5%.

            Le Taux de coup critique et les Dégâts de coup critique de l'utilisatrice augmentent de 1.5%.

            Lorsque l'effet [Instinct] se cumule 10 fois, il devient l'effet [Sixième sens].
Augmente l'Attaque de l'utilisatrice de 77%.

            Augmente le Taux de coup critique et les Dégâts de coup critique de l'utilisatrice de 20%.

            Si les PM de l'utilisatrice tombent à 30% ou moins, sa Consommation de PM diminue de 50%.`, [], "Feu")
    },
    summaryData: {
        0: `
        <h3>Passif : Kunoichi</h3>
        <p>Reçoit <span class="buff pourpre">[Pourpre]</span> via Munechika et <span class="buff ecarlate">[Écarlate]</span> via Atq Noyau.<br>
        Kamaitachi devient Ultime si buffs actifs.<br>
        Dégâts sur [Bris] <span class="stat-boost">+24%</span>.</p>
        <div class="detail-box">
            <h4><span class="buff pourpre">[Pourpre]</span> / <span class="buff ecarlate">[Écarlate]</span></h4>
            <p>Active Atq Noyau (Bonus 50%) ou l'effet <span class="buff feu">[<span class="element-feu">Feu</span>]</span>.</p>
        </div>
        <div class="detail-box">
            <h4><span class="buff feu">[<span class="element-feu">Feu</span>]</span></h4>
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
        <p>Dégâts <span class="element-feu">Feu</span> <span class="stat-boost">+12%</span> par allié <span class="element-feu">Feu</span> (Max 3).</p>
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
        0: fmtWeapon(`Avancement 0 :`, `L'Attaque de l'utilisatrice augmente de 2%.

        Le Taux de coup critique de l'utilisatrice augmente de 10%.`, "Feu"),
        1: fmtWeapon(`Avancement 5 étoiles :`, `L'Attaque de l'utilisatrice augmente de 12%.

        Le Taux de coup critique de l'utilisatrice augmente de 20%.`, "Feu"),
        2: fmtWeapon(`Avancement 10 étoiles :`, `Augmente l'Attaque, la Défense et les PV de l'utilisateur de 15%.`, "Feu")
    }
};

// --- YOO SOOHYUN ---
huntersData["yoo-soohyun"] = {
    name: "Yoo Soohyun",
    rarity: "SSR",
    element: "Feu",
    gradient: "linear-gradient(90deg, #e64b4b, #000)",
    image: "Chasseurs_SSR/feu/Yoo_soohyun/yoo_art.png",
    weaponImage: "Chasseurs_SSR/feu/Yoo_soohyun/overdrive/Relic_YooSooHyun_PortraitBig.png",
    weaponName: "Surpuissance",
    fullData: {
        0: fmtPassif(`Passif :`, `Lors de l'utilisation de **Tir astucieux** ou **Nuée embrasée**, l'effet [Projecteur] s'applique à l'utilisatrice.

        Lors de l'utilisation de **Nuée embrasée** ou **Souffle de précision**, l'effet [Arme à feu magique] s'applique.`, [
        { title: `[Projecteur]`, content: `Augmente la Pénétration de défense de l'utilisatrice de 24%.
            Durée: 24s` },
        { title: `[Arme à feu magique]`, content: `Apparaissent autour de Soohyun et infligent des dégâts (160% de l'Attaque).
            Inflige l'effet [Réaction magique] à la cible.
            Durée: 5s` },
        { title: `[Réaction magique]`, content: `Augmente les dégâts de feu subis de 1%.
            Réduit le Taux de récupération de la cible de 4%.
            Durée: 60s (cumulable jusqu'à 20 fois)` }
    ], "Feu"),
        1: fmtPassif(`1 étoile :`, `Utiliser **Tir mortel** active l'attaque de noyau et augmente ses dégâts de 40% (6s).

        Utiliser l'attaque de noyau octroie l'effet [Folie].`, [
        { title: `[Folie]`, content: `Réinitialise le CD de Tir mortel.
            Tir mortel devient **Feu de l'enfer** (Dégâts +40% + [Super Super Armure]).
            Utiliser Feu de l'enfer applique [Arme à feu magique] et annule [Folie].
            Durée: 6s` }
    ], "Feu"),
        2: fmtPassif(`2 étoiles :`, `La Pénétration de défense de l'utilisatrice augmente de 12%.`, [], "Feu"),
        3: fmtPassif(`3 étoiles :`, `Lorsque **Tir astucieux** est utilisé, l'effet [Attaque augmentée] s'applique.`, [
        { title: `[Attaque augmentée]`, content: `Augmente l'Attaque de l'utilisatrice de 24%.
            Durée: 12s` }
    ], "Feu"),
        4: fmtPassif(`4 étoiles :`, `Augmente l'Attaque de l'utilisatrice de 12%.`, [], "Feu"),
        5: fmtPassif(`5 étoiles :`, `Augmente les dégâts de **Tir mortel** et **Feu de l'enfer** de 6% par cumul de [Réaction magique] sur la cible (Max 120%).`, [], "Feu")
    },
    summaryData: {
        0: `
        <h3>Passif : Arsenal Magique</h3>
        <p>Skills = <span class="buff pourpre">[Projecteur]</span> (Pen. Def) ou <span class="buff ecarlate">[Arme Magique]</span> (Dégâts Auto).<br>
        Armes Magiques appliquent <span class="buff feu">[Réaction]</span> (Debuff <span class="element-feu">Feu</span>/Soin).</p>
        <div class="detail-box">
            <h4><span class="buff feu">[Réaction magique]</span> (Max 20)</h4>
            <p>Dégâts <span class="element-feu">Feu</span> subis <span class="stat-boost">+1%</span> / Soin <span class="stat-boost">-4%</span> par cumul.</p>
        </div>
    `,
        1: `
        <h3>1 étoile</h3>
        <p>Tir mortel boost Atq Noyau.<br>
        Atq Noyau = <span class="buff ecarlate">[Folie]</span> (Reset CD Tir mortel).<br>
        [Folie] transforme Tir mortel en <strong><span class="element-feu">Feu</span> de l'enfer</strong> (Dégâts <span class="stat-boost">+40%</span> + Super Armure).</p>
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
        <p>Tir mortel / <span class="element-feu">Feu</span> de l'enfer : Dégâts <span class="stat-boost">+6%</span> par cumul de [Réaction] (Max 120%).</p>
    `
    },
    weaponData: {
        0: fmtWeapon(`Avancement 0 :`, `Augmente la Pénétration de défense de l'utilisatrice de 4%.

        Augmente les dégâts de Tir mortel, attaque de noyau et Feu de l'enfer de 8%.`, "Feu"),
        1: fmtWeapon(`Avancement 5 étoiles :`, `Augmente la Pénétration de défense de l'utilisatrice de 12%.

        Augmente les dégâts de Tir mortel, attaque de noyau et Feu de l'enfer de 24%.`, "Feu"),
        2: fmtWeapon(`Avancement 10 étoiles :`, `Augmente l'Attaque, la Défense et les PV de l'utilisateur de 15%.`, "Feu")
    }
};

// --- FERN ---
huntersData["fern"] = {
    name: "Fern",
    rarity: "SSR",
    element: "Feu",
    gradient: "linear-gradient(90deg, #e64b4b, #000)",
    image: "Chasseurs_SSR/collab/feu/Fern/fern_art.png",
    weaponImage: "Chasseurs_SSR/collab/feu/Fern/baton_de_fern/Relic_Fern_PortraitBig.png",
    weaponName: "Bâton de Fern",
    fullData: {
        0: fmtPassif(`Passif :`, `L'utilisation de l'attaque de base initie les attaques de niveau 1, 2 et 3 à la suite.

        L'utilisation de l'attaque de base de niveau 3 active l'attaque de noyau de l'utilisatrice une fois.

        Les effets [Prodige magique] et [Recherche d'énergie de mana] s'activent lorsque l'utilisatrice arrive dans un niveau.`, [
        { title: `[Prodige magique]`, content: `Augmente l'Attaque de 10 %.
            Lorsque l'utilisatrice a 50 % de PM ou plus, son Attaque augmente de 10 %.
            Réduit la Consommation de mana pour les compétences de 5 %.
            Durée : illimitée` },
        { title: `[Recherche d'énergie de mana]`, content: `Augmente les dégâts infligés aux boss par l'utilisatrice de 30 %.
            Augmente la Précision de l'utilisatrice de 5 %.
            Durée : illimitée` }
    ], "Feu"),
        1: fmtPassif(`1 étoile :`, `L'effet [Coup rapide de base] s'active lorsque l'utilisatrice arrive dans un niveau.

        L'utilisation de ses compétences de base 1 ou 2 active l'effet [Concentration de base].

        Les effets [Prodige magique] et [Recherche d'énergie de mana] sont améliorés.`, [
        { title: `[Coup rapide de base]`, content: `Augmente la Vitesse d'attaque de l'attaque de base, de l'attaque de noyau et des compétences de base 1 et 2.
            L'utilisation des compétences de base 1 ou 2 active l'attaque de noyau de l'utilisatrice une fois.
            L'utilisation de l'attaque de noyau diminue le temps de rechargement des compétences de base 1 et 2 de 25 %.
            L'utilisation de la compétence de base 1 diminue le temps de rechargement des compétences de base 1 et 2 de 25 %.
            L'utilisation de la compétence de base 2 réduit le temps de rechargement des compétences de base 1 et 2 de 25 %.
            Durée : illimitée` },
        { title: `[Concentration de base]`, content: `L'utilisation des compétences de base 1 ou 2 augmente la consommation de PM de 12 %.
            L'utilisation des compétences de base 1 ou 2 augmente les dégâts de la compétence de base de 25 %.
            Durée : 20 seconde(s) (cumulable jusqu'à 4 fois)` },
        { title: `Amélioration [Prodige magique]`, content: `Augmente l'Attaque de 20 %.
            Lorsque l'utilisatrice a 50 % de ses PM ou plus, son Attaque augmente de 20 %.
            Réduit la Consommation de mana pour ses compétences de 10 %.
            Durée : illimitée` },
        { title: `Amélioration [Recherche d'énergie de mana]`, content: `Augmente les dégâts infligés aux boss de 60 %.
            Augmente la Précision de 10 %.
            Durée : illimitée` }
    ], "Feu"),
        2: fmtPassif(`2 étoiles :`, `Augmente les dégâts de feu de l'utilisatrice de 20 %.

        Chaque fois que sa compétence de base 2 touche une cible, applique l'effet [Dégâts de feu subis augmentés].`, [
        { title: `[Dégâts de feu subis augmentés]`, content: `Augmente les dégâts de feu subis de 0.3 %.
            Durée : 30 seconde(s) (cumulable jusqu'à 60 fois)` }
    ], "Feu"),
        3: fmtPassif(`3 étoiles :`, `L'effet [Vision véritable] s'active lorsque l'utilisatrice arrive dans un niveau.

        Les effets [Magie de dissipation] et [Magie défensive] s'activent lorsque l'utilisatrice rejoint le combat (temps de rechargement : 10 seconde(s)).`, [
        { title: `[Vision véritable]`, content: `Augmente le Taux de coup critique de 5 % et les Dégâts de coup critique de 10 %.
            Durée : illimitée` },
        { title: `[Magie de dissipation]`, content: `Supprime les débuffs de toute l'équipe.` },
        { title: `[Magie défensive]`, content: `Confère un [Bouclier] équivalent à 20 % de l'Attaque de Fern.
            Diminue les dégâts subis de 20 %.
            Durée : 20 seconde(s)` }
    ], "Feu"),
        4: fmtPassif(`4 étoiles :`, `Le Taux de coup critique de l'utilisatrice augmente de 10 %, et ses Dégâts de coup critique de 20 %.

        L'effet [Dégâts de feu subis augmentés], qui est appliqué chaque fois que la compétence de base 2 de l'utilisatrice touche une cible, change de 0.3 % à 0.5 %.`, [
        { title: `[Dégâts de feu subis augmentés]`, content: `Augmente les dégâts de feu subis de 0.5 %.
            Durée : 30 seconde(s) (cumulable jusqu'à 60 fois)` }
    ], "Feu"),
        5: fmtPassif(`5 étoiles :`, `Lorsque la compétence ultime de l'utilisatrice touche sa cible, les dégâts de faiblesse élémentaire de feu de l'utilisatrice la touchent également, quel que soit son élément.

        L'effet [Vision véritable] est amélioré.`, [
        { title: `Amélioration [Vision véritable]`, content: `Augmente le Taux de coup critique de 10 % et les Dégâts de coup critique de 20 %.
            Lorsque la compétence de base 1 ou 2 de l'utilisatrice touche sa cible, l'effet [Alerte sismique] s'active (uniquement une fois à l'impact).
            Durée : illimitée` },
        { title: `[Alerte sismique]`, content: `Augmente les dégâts de feu de 10 %.
            L'effet [Regard de la chercheuse] s'active lorsqu'il atteint le maximum de cumuls.
            Durée : 5 seconde(s) (cumulable jusqu'à 6 fois)` },
        { title: `[Regard de la chercheuse]`, content: `L'effet [Alerte sismique] est supprimé et ne peut plus être activé.
            Augmente les dégâts de feu de 60 %.
            Augmente la Pénétration de défense de 10 %.
            Durée : 20 seconde(s)` }
    ], "Feu")
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
        <p>Dégâts <span class="element-feu">Feu</span> <span class="stat-boost">+20%</span>.<br>
        Compétence 2 applique Débuff <span class="buff">[Dégâts <span class="element-feu">Feu</span> subis +0.3%]</span> (Max 18%).</p>
    `,
        3: `
        <h3>3 étoiles</h3>
        <p>Entrée : <span class="buff">[Vision véritable]</span> (Crit Rate/Dmg).<br>
        Rejoint combat : Cleanse équipe + <span class="buff">[Bouclier]</span> (20% Atk, -20% Dégâts subis).</p>
    `,
        4: `
        <h3>4 étoiles</h3>
        <p>Crit Rate +10%, Crit Dmg +20%.<br>
        Débuff <span class="element-feu">Feu</span> amélioré à <span class="stat-boost">0.5%</span> (Max 30%).</p>
    `,
        5: `
        <h3>5 étoiles</h3>
        <p>Ultime tape toujours en Faiblesse <span class="element-feu">Feu</span>.<br>
        Améliore <span class="buff">[Vision]</span>. Compétences stack <span class="buff">[Alerte]</span> (Dégâts <span class="element-feu">Feu</span>).<br>
        Max stack = <span class="buff">[Regard]</span> (Dégâts <span class="element-feu">Feu</span> <span class="stat-boost">+60%</span>, Pénétration <span class="stat-boost">+10%</span>).</p>
    `
    },
    weaponData: {
        0: fmtWeapon(`Avancement 0 :`, `Augmente l'Attaque de l'utilisatrice de 5 %.

        Le Taux de coup critique de **Magie démonicide (Zoltraak) - Barrage** et **Magie démonicide (Zoltraak) - Tir rapide** augmente de 5 %, et les Dégâts de coup critique augmentent de 10 %.

        L'utilisation de la compétence **Magie démonicide (Zoltraak) - Équilibre** restaure 10 % des PM de l'utilisatrice (temps de rechargement : 30 seconde(s)).`, "Feu"),
        1: fmtWeapon(`Avancement 5 étoiles :`, `Augmente l'Attaque de l'utilisatrice de 12 %.

        Le Taux de coup critique de **Magie démonicide (Zoltraak) - Barrage** et **Magie démonicide (Zoltraak) - Tir rapide** augmente de 10 %, et les Dégâts de coup critique augmentent de 20 %.

        L'utilisation de la compétence **Magie démonicide (Zoltraak) - Équilibre** restaure 100 % des PM de l'utilisatrice (temps de rechargement : 30 seconde(s)).`, "Feu"),
        2: fmtWeapon(`Avancement 10 étoiles :`, `L'Attaque, la Défense et les PV de l'utilisatrice augmentent de 15 %.`, "Feu")
    }
};

// --- STARK ---
huntersData["stark"] = {
    name: "Stark",
    rarity: "SSR",
    element: "Feu",
    gradient: "linear-gradient(90deg, #e64b4b, #000)",
    image: "Chasseurs_SSR/collab/feu/Stark/stark_art.png",
    weaponImage: "Chasseurs_SSR/collab/feu/Stark/hache_de_stark/Relic_Stark_PortraitBig.png",
    weaponName: "Hache de Stark",
    fullData: {
        0: fmtPassif(`Passif :`, `L'utilisateur reçoit l'effet [Timidité] à l'arrivée dans le niveau.

        Lorsque Stark ou un allié parvient à mettre un ennemi en état de Bris, la durée de l'état de Bris augmente de 3 secondes.

        La jauge de puissance de l'utilisateur ne peut pas se remplir, mais si l'effet [Courage] est actif, elle se remplit à 100 %.`, [
        { title: `[Timidité]`, content: `L'utilisation des compétences **Frappe spiralée**, **Frappe foudroyante**, **Frappe foudroyante : Attaque lourde** ou **Frappe foudroyante : Attaque extrême** active l'effet [Confiance] et déclenche **Frappe tourbillonnante**.
            L'effet [Détermination] s'active lors de l'utilisation de la compétence **Frappe tourbillonnante**.
            Lorsque l'effet [Courage] est activé, il supprime l'effet [Timidité].
            Durée : illimitée.` },
        { title: `[Confiance]`, content: `Augmente les dégâts de feu de 3 %.
            Augmente la Pénétration de défense de 3 %.
            Lorsque l'effet atteint le maximum de cumuls, l'effet [Confiance] est supprimé et l'effet [Courage] est activé.
            Durée : illimitée (cumulable jusqu'à 4 fois).` },
        { title: `[Détermination]`, content: `Augmente les dégâts des compétences **Frappe foudroyante**, **Frappe foudroyante : Attaque lourde** et **Frappe foudroyante : Attaque extrême** de 10 %.
            Augmente le Taux de coup critique de 10 %.
            Durée : 3 seconde(s).` },
        { title: `[Courage]`, content: `Augmente les dégâts de feu de 20 %.
            Augmente la Pénétration de défense de 20 %.
            L'effet [Confiance] ne peut pas être activé tant que cet effet est actif.
            Active l'effet [Timidité] lorsque cet effet est supprimé.
            Durée : 5 seconde(s).` }
    ], "Feu"),
        1: fmtPassif(`1 étoile :`, `L'effet [Esprit combatif] s'active lorsque l'utilisateur arrive dans un combat d'histoire.

        Lorsque la compétence **Frappe tourbillonnante** touche sa cible, elle lui applique l'effet [Aura du guerrier].

        L'effet [Détermination] est amélioré.`, [
        { title: `[Esprit combatif]`, content: `Les dégâts subis diminuent de 20 %.
            Tant que l'effet reste actif, si les PV de l'utilisateur tombent à 10 % ou moins, il récupère 40 % de ses PV max (temps de rechargement : 60 secondes).
            Durée : illimitée.` },
        { title: `[Aura du guerrier]`, content: `Les dégâts infligés par Stark augmentent de 15 %.
            Durée : 15 seconde(s).` },
        { title: `[Détermination] (Amélioré)`, content: `Les dégâts de la compétence de base augmentent de 15 %.
            Le Taux de coup critique augmente de 15 %.
            Durée : 10 seconde(s).` }
    ], "Feu"),
        2: fmtPassif(`2 étoiles :`, `Les PV de l'utilisateur augmentent de 15 %.`, [], "Feu"),
        3: fmtPassif(`3 étoiles :`, `L'effet [Aura du guerrier] est amélioré.

        Augmente la Pénétration de défense de toute l'équipe à hauteur de 20 % de la stat augmentée de Pénétration de défense de Stark.`, [
        { title: `[Aura du guerrier] (Amélioré)`, content: `Augmente les dégâts infligés par Stark de 30 %.
            Durée : 15 seconde(s).` }
    ], "Feu"),
        4: fmtPassif(`4 étoiles :`, `L'efficacité de Bris de l'utilisateur augmente de 36 %.`, [], "Feu"),
        5: fmtPassif(`5 étoiles :`, `Les effets [Confiance] et [Courage] sont améliorés.

        L'utilisation de **Frappe spiralée** active l'effet [Détermination].

        Lorsque les compétences **Frappe tourbillonnante**, **Frappe foudroyante**, **Frappe foudroyante : Attaque lourde** ou **Frappe foudroyante : Attaque extrême** touchent leur cible, le temps de rechargement de **Frappe foudroyante : Annihilation** diminue de 4 seconde(s) (temps de rechargement : 0.5 seconde(s)).

        Lorsque les compétences **Frappe foudroyante**, **Frappe foudroyante : Attaque lourde** ou **Frappe foudroyante : Attaque extrême** touchent une cible affectée par l'effet [Aura du guerrier], elles activent l'effet [Talent du guerrier].`, [
        { title: `Amélioration [Confiance]`, content: `Augmente les dégâts de feu de 5 %.
            Augmente la Pénétration de défense de 5 %.
            Une fois que cet effet a atteint le maximum de cumuls, si l'effet [Confiance] est supprimé, il active l'effet [Courage].
            Durée : illimitée (cumulable jusqu'à 4 fois).` },
        { title: `Amélioration [Courage]`, content: `Augmente les dégâts de feu de 30 %.
            Augmente la Pénétration de défense de 30 %.
            Augmente les dégâts de la compétence **Frappe foudroyante : Annihilation** de 50 %.
            Il est impossible d'activer l'effet [Confiance] tant que l'effet est actif. Active l'effet [Timidité] lorsque l'effet est supprimé.
            Durée : 5 seconde(s).` },
        { title: `[Talent du guerrier]`, content: `Inflige des dégâts équivalents à 1000 % des PV max de l'utilisateur.` }
    ], "Feu")
    },
    summaryData: {
        0: `
        <h3>Passif : Guerrier Timide</h3>
        <p>Entrée : <span class="buff">[Timidité]</span>. Jauge Puissance bloquée sauf sous <span class="buff">[Courage]</span>.<br>
        Compétences activent <span class="buff">[Confiance]</span> (Stats <span class="element-feu">Feu</span>/Péné +3%/stack).<br>
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
        0: fmtWeapon(`Avancement 0 :`, `Les PV de l'utilisateur augmentent de 5 %.

        Lorsque les compétences **Frappe foudroyante**, **Frappe foudroyante : Attaque lourde** ou **Frappe foudroyante : Attaque extrême** touchent leur cible, les dégâts de feu et la Pénétration de défense augmentent de 1 % (cumulable jusqu'à 3 fois).

        Durée : 20 seconde(s)`, "Feu"),
        1: fmtWeapon(`Avancement 5 étoiles :`, `Les PV de l'utilisateur augmentent de 12 %.

        Lorsque les compétences **Frappe foudroyante**, **Frappe foudroyante : Attaque lourde** ou **Frappe foudroyante : Attaque extrême** touchent leur cible, les dégâts de feu et la Pénétration de défense augmentent de 5 % (cumulable jusqu'à 3 fois).

        Durée : 20 seconde(s)`, "Feu"),
        2: fmtWeapon(`Avancement 10 étoiles :`, `L'Attaque, la Défense et les PV de l'utilisateur augmentent de 15 %.`, "Feu")
    }
};

// --- YUQI ---
huntersData["yuqi"] = {
    name: "Yuqi",
    rarity: "SSR",
    element: "Feu",
    gradient: "linear-gradient(90deg, #e64b4b, #000)",
    image: "Chasseurs_SSR/collab/feu/Yuqi/yuqi_art.png",
    weaponImage: "Chasseurs_SSR/collab/feu/Yuqi/soleil_vertueux/Relic_Yuqi_PortraitBig.png",
    weaponName: "Soleil vertueux",
    fullData: {
        0: fmtPassif(`Passif :`, `Toute l'équipe reçoit l'effet [FOREVER] en arrivant dans les modes Mission Rappel et Donjon éphémère.

        Lorsque YUQI ou un allié parvient à mettre un ennemi en état de [Bris], la durée de l'état de [Bris] augmente de 3 seconde(s).

        L'utilisation des compétences **Fracas d'ampli**, **Cri crescendo**, **Coup de pied rotatif montant** ou **Cri sans limite** active **Coup de pied hurlant**.

        Chaque fois que les compétences **Coup de pied hurlant**, **Fracas d'ampli** ou **Coup de pied rotatif montant** touchent leur cible, l'utilisatrice active l'effet [Tempo] et recharge la jauge [Éclatement total].

        Lorsque la jauge [Éclatement total] atteint 100 % de sa charge, elle active l'effet [Éclatement total].`, [
        { title: `[FOREVER]`, content: `Augmente les dégâts infligés de 5 %.
            Durée : illimitée (cumulable jusqu'à 3 fois)` },
        { title: `[Tempo]`, content: `Augmente les PV max de 0.5 %.
            Augmente les dégâts de la compétence **Coup de pied hurlant** de 0.5 %.
            Durée : 10 seconde(s) (cumulable jusqu'à 15 fois)` },
        { title: `[Éclatement total]`, content: `Les compétences **Fracas d'ampli** et **Coup de pied rotatif montant** deviennent **Cri crescendo** et **Cri sans limite**, ce qui réinitialise leur temps de rechargement.
            Augmente l'efficacité de [Bris] de **Coup de pied hurlant** de 25 %.
            Augmente les dégâts de la compétence **Coup de pied hurlant** de 10 %. Augmente les PV max de 10 %.
            Confère [Super armure] tant que l'effet est actif. Tant que l'effet est actif, l'effet [Tempo] est supprimé et ne peut plus être activé.
            Durée : 10 seconde(s)` }
    ], "Feu"),
        1: fmtPassif(`1 étoile :`, `Le taux de recharge de la jauge [Éclatement total] augmente de 100%.

        Lorsque les compétences **Fracas d'ampli**, **Cri crescendo**, **Coup de pied rotatif montant** ou **Cri sans limite** touchent leur cible, elles leur appliquent l'effet [Distorsion].

        Lorsque la compétence **Bête de scène** touche sa cible, elle lui applique l'effet [Craquage].`, [
        { title: `[Distorsion]`, content: `Augmente les dégâts subis de 3 %. Lorsque l'effet atteint le nombre maximal de cumuls, l'effet [Craquage] s'active.
            Durée : 10 seconde(s) (cumulable jusqu'à 3 fois)` },
        { title: `[Craquage]`, content: `Augmente les dégâts subis de 15 %.
            Augmente les dégâts de feu subis de 20 %. L'effet [Distorsion] est supprimé et ne peut plus être activé tant que cet effet est actif.
            Durée : 20 seconde(s)` }
    ], "Feu"),
        2: fmtPassif(`2 étoiles :`, `L'efficacité de [Bris] augmente de 20 %.`, [], "Feu"),
        3: fmtPassif(`3 étoiles :`, `L'effet [Éclatement total] est amélioré. L'utilisation de l'effet **Bête de scène** active l'effet [Postluminescence] sur toute l'équipe.`, [
        { title: `[Éclatement total] (Amélioré)`, content: `Les compétences **Fracas d'ampli** et **Coup de pied rotatif montant** deviennent **Cri crescendo** et **Cri sans limite**, et leurs temps de rechargement sont réinitialisés.
            Augmente l'efficacité de [Bris] de **Coup de pied hurlant** de 50 %.
            Augmente les dégâts de la compétence **Coup de pied hurlant** de 40 %. Augmente les PV max de 25 %.
            Lorsque les compétences **Coup de pied hurlant**, **Cri crescendo** ou **Cri sans limite** touchent leur cible, la jauge de puissance se recharge de 20 % (ne s'active qu'une fois lorsque la compétence touche sa cible).
            Confère [Super armure] tant que l'effet est actif. L'effet [Tempo] est supprimé et ne peut plus être activé tant que l'effet est actif.
            Durée : 10 seconde(s).` },
        { title: `[Postluminescence]`, content: `Augmente les dégâts infligés aux cibles en état de [Bris] de 12 %.
            Augmente les dégâts de compétence de base et de compétence ultime de 15 %.
            Augmente les Dégâts de coup critique de 15 %. Durée : 20 seconde(s)` }
    ], "Feu"),
        4: fmtPassif(`4 étoiles :`, `Les dégâts de feu des membres de l'équipe de l'élément Feu augmentent de 5 % par allié de l'élément Feu présent dans le groupe.`, [], "Feu"),
        5: fmtPassif(`5 étoiles :`, `Les effets [Distorsion], [Craquage] et [Postluminescence] sont améliorés.`, [
        { title: `[Distorsion] (Amélioré)`, content: `Augmente les dégâts infligés de 6 %.
            Active l'effet [Craquage] une fois le nombre de cumuls maximum atteint.
            Durée : 15 seconde(s) (cumulable jusqu'à 3 fois)` },
        { title: `[Craquage] (Amélioré)`, content: `Augmente les dégâts infligés de 20 %.
            Augmente les dégâts de feu infligés de 25 %. L'effet [Distorsion] est supprimé et ne peut plus être activé tant que cet effet est actif.
            Durée : 30 seconde(s)` },
        { title: `[Postluminescence] (Amélioré)`, content: `Augmente les dégâts subis par une cible en état de [Bris] de 12 %.
            Augmente les dégâts de compétence de base et de compétence ultime de 30 %.
            Augmente les Dégâts de coup critique de 20 %. Durée : 30 seconde(s)` }
    ], "Feu")
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
        Bête de scène applique <span class="buff">[Craquage]</span> (Dégâts subis +15%, <span class="element-feu">Feu</span> +20%).</p>
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
        <p>Dégâts <span class="element-feu">Feu</span> équipe <span class="stat-boost">+5%</span> par allié <span class="element-feu">Feu</span>.<br></p>
    `,
        5: `
        <h3>5 étoiles</h3>
        <p>Améliore <span class="buff">[Distorsion]</span> (Dégâts infligés +6%) et <span class="buff">[Craquage]</span> (Dégâts infligés +20%, <span class="element-feu">Feu</span> +25%).<br>
        Améliore <span class="buff">[Postluminescence]</span> (Bonus Skill Dmg +30%, Crit Dmg +20%).</p>
    `
    },
    weaponData: {
        0: fmtWeapon(`Avancement 0 :`, `Les PV de l'utilisatrice augmentent de 5 %.

        Les dégâts de l'utilisatrice augmentent de 5 % pendant 15 seconde(s) lorsque l'effet [Éclatement total] est activé.`, "Feu"),
        1: fmtWeapon(`Avancement 5 étoiles :`, `Les PV de l'utilisatrice augmentent de 12 %.

        Les dégâts de l'utilisatrice augmentent de 30 % pendant 15 seconde(s) lorsque l'effet [Éclatement total] est activé.`, "Feu"),
        2: fmtWeapon(`Avancement 10 étoiles :`, `Augmente l'Attaque, la Défense et les PV de l'utilisateur de 15 %.`, "Feu")
    }
};