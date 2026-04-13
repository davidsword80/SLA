if (typeof huntersData === 'undefined') { 
    var huntersData = {}; 
}

// --- HWANG DONGSUK ---
huntersData["hwang-dongsuk"] = {
    name: "Hwang Dongsuk",
    rarity: "SR",
    element: "Ténèbres",
    gradient: "linear-gradient(90deg, #af63af, #000)", // Dégradé violet/noir pour les ténèbres
    image: "Chasseurs_SR/tenebre/Hwang_dongsuk/HwangDongSuk_Portrait_Body.png",
    weaponImage: "Chasseurs_SR/tenebre/Hwang_dongsuk/pilleur_d_ame/Relic_HwangDongSuk_PortraitBig.png",
    weaponName: "Pilleur d'âme",
    fullData: {
        0: fmtPassif(`Passif :`, `Si les PV de l'utilisateur sont à 75% ou au-dessus, les dégâts de compétence augmentent de 16%.

        Si les PV de l'utilisateur sont inférieurs à 50%, applique l'effet [Vitalité du lézard].`, [
        { title: `[Vitalité du lézard]`, content: `Récupère 2.5% de ses PV toutes les 1 seconde(s) (s'active une fois par niveau).
            Durée: 10 seconde(s)` }
    ], "Ténèbres"),
        1: fmtPassif(`1 étoile :`, `Lors de l'utilisation de la compétence **Amélioration**, le temps de rechargement de la compétence **Bouclier ardent** se réinitialise.

        Tant que la compétence [Amélioration] reste activé, le temps de rechargement de la compétence **Bouclier ardent** diminue de 50%.`, [], "Ténèbres"),
        2: fmtPassif(`2 étoiles :`, `Les PV de l'utilisateur augmentent de 8%.`, [], "Ténèbres"),
        3: fmtPassif(`3 étoiles :`, `Lors de l'utilisation de la compétence **Amélioration**, un [Bouclier] est appliqué.`, [
        { title: `[Bouclier]`, content: `Crée un [Bouclier] équivalent à 20% des PV max de l'utilisateur.
            Durée: 10 seconde(s)` }
    ], "Ténèbres"),
        4: fmtPassif(`4 étoiles :`, `Le temps de rechargement de **Attaque redoutable** diminue de 25%.`, [], "Ténèbres"),
        5: fmtPassif(`5 étoiles :`, `Lors de l'utilisation de **Attaque redoutable**, l'utilisateur a 50% de chances de réinitialiser le temps de rechargement de la compétence **Attaque redoutable**.

        (Temps de rechargement: 30 seconde(s))`, [], "Ténèbres")
    },
    summaryData: {
        0: `
        <h3>Passif : Ténacité du Lézard</h3>
        <p>PV > 75% = Dégâts Compétence <span class="stat-boost">+16%</span>.<br>
        PV < 50% = <span class="buff">[Vitalité du lézard]</span> (Regen PV <span class="stat-boost">2.5%</span>/sec, 10s).</p>
    `,
        1: `
        <h3>1 étoile</h3>
        <p>Amélioration : Reset CD Bouclier ardent.<br>
        Sous Amélioration : CD Bouclier ardent <span class="stat-boost">-50%</span>.<br></p>
    `,
        2: `
        <h3>2 étoiles</h3>
        <p>PV <span class="stat-boost">+8%</span>.<br></p>
    `,
        3: `
        <h3>3 étoiles</h3>
        <p>Amélioration = <span class="buff">[Bouclier]</span> (20% PV Max, 10s).<br></p>
    `,
        4: `
        <h3>4 étoiles</h3>
        <p>CD Attaque redoutable <span class="stat-boost">-25%</span>.<br></p>
    `,
        5: `
        <h3>5 étoiles</h3>
        <p>Attaque redoutable : 50% chance Reset CD.<br></p>
    `
    },
    weaponData: {
        0: fmtWeapon(`Avancement 0 :`, `Augmente les PV de l'utilisateur de 2%.

        Lorsque l'utilisateur arrive dans un niveau, sa jauge de puissance se remplit de 25%.

        Lorsqu'**Attaque redoutable** touche sa cible, les dégâts de ténèbres subis par la cible augmentent de 1% pendant 15 seconde(s) (cumulable jusqu'à 2 fois).`, "Ténèbres"),
        1: fmtWeapon(`Avancement 5 étoiles :`, `Augmente les PV de l'utilisateur de 8 %.

        Lorsque l'utilisateur arrive dans un niveau, sa jauge de puissance se remplit de 100%.

        Lorsqu'**Attaque redoutable** touche sa cible, les dégâts de ténèbres subis par la cible augmentent de 6 % pendant 15 seconde(s) (cumulable jusqu'à 2 fois).`, "Ténèbres"),
        2: fmtWeapon(`Avancement 10 étoiles :`, `Augmente l'Attaque, la Défense et les PV de l'utilisateur de 15%.`, "Ténèbres")
    }
};

// --- KANG TAESHIK ---
huntersData["kang-taeshik"] = {
    name: "Kang Taeshik",
    rarity: "SR",
    element: "Ténèbres",
    gradient: "linear-gradient(90deg, #af63af, #000)",
    image: "Chasseurs_SR/tenebre/Kang_taeshik/KangTaeShik_Portrait_Body.png",
    weaponImage: "Chasseurs_SR/tenebre/Kang_taeshik/frenesie_inarretable/Relic_KangTaeShik_PortraitBig.png",
    weaponName: "Frénésie Inarrêtable",
    fullData: {
        0: fmtPassif(`Passif :`, `Lorsque les compétences **Lancer de dague**, **Recherche** ou **Assaut** touchent leurs cibles, elles leur appliquent l'effet [Hémorragie].`, [
        { title: `[Hémorragie]`, content: `L'utilisateur inflige des dégâts équivalents à 0.6% des PV actuels de la cible toutes les 3 seconde(s).
            Durée: 30 seconde(s)` }
    ], "Ténèbres"),
        1: fmtPassif(`1 étoile :`, `Augmente l'Attaque face aux cibles affectées par [Hémorragie].`, [
        { title: `[Attaque augmentée]`, content: `Augmente l'Attaque de l'utilisateur de 15%.
            Durée: 10 seconde(s)` }
    ], "Ténèbres"),
        2: fmtPassif(`2 étoiles :`, `Augmente l'Attaque de l'utilisateur de 5%.`, [], "Ténèbres"),
        3: fmtPassif(`3 étoiles :`, `Lorsque la compétence **Recherche** touche une cible affectée par [Hémorragie], elle lui applique l'effet Augmentation des dégâts subis.`, [
        { title: `[Dégâts subis augmentés]`, content: `Les dégâts subis par la cible augmentent de 15%.
            Durée: 10 seconde(s)` }
    ], "Ténèbres"),
        4: fmtPassif(`4 étoiles :`, `Le temps de rechargement des compétences de Taeshik diminue de 10%.`, [], "Ténèbres"),
        5: fmtPassif(`5 étoiles :`, `Lorsque Taeshik utilise **Camouflage** face à une cible affectée par [Hémorragie], les dégâts augmentent de 100%.`, [], "Ténèbres")
    },
    summaryData: {
        0: `
        <h3>Passif : Assassin Sanglant</h3>
        <p>Compétences = <span class="buff">[Hémorragie]</span>.<br>
        [Hémorragie] : DOT (<span class="stat-boost">0.6%</span> PV actuels cible, 30s).</p>
    `,
        1: `
        <h3>1 étoile</h3>
        <p>Contre Hémorragie = <span class="buff">[Attaque augmentée]</span> (<span class="stat-boost">+15%</span>, 10s).</p>
    `,
        2: `
        <h3>2 étoiles</h3>
        <p>Attaque <span class="stat-boost">+5%</span>.<br></p>
    `,
        3: `
        <h3>3 étoiles</h3>
        <p>Recherche sur Hémorragie = <span class="buff">[Debuff Dégâts Subis]</span> (<span class="stat-boost">+15%</span>, 10s).</p>
    `,
        4: `
        <h3>4 étoiles</h3>
        <p>CD Compétences <span class="stat-boost">-10%</span>.<br></p>
    `,
        5: `
        <h3>5 étoiles</h3>
        <p>Camouflage sur Hémorragie = Dégâts <span class="stat-boost">+100%</span>.<br></p>
    `
    },
    weaponData: {
        0: fmtWeapon(`Avancement 0 :`, `Augmente les dégâts des attaques dans le dos de l'utilisateur de 2.5 %.

        Les dégâts de Kang Taeshik face aux cibles affectées par [Hémorragie] augmentent de 2.5%.`, "Ténèbres"),
        1: fmtWeapon(`Avancement 5 étoiles :`, `Augmente les dégâts des attaques dans le dos de l'utilisateur de 10%.

        Les dégâts de Kang Taeshik face aux cibles affectées par [Hémorragie] augmentent de 10%.`, "Ténèbres"),
        2: fmtWeapon(`Avancement 10 étoiles :`, `Augmente l'Attaque, la Défense et les PV de l'utilisateur de 15%.`, "Ténèbres")
    }
};

// --- BAEK YUNHO À CRINIÈRE ARGENTÉE ---
huntersData["baek_yunho_a_criniere_argentee"] = {
    name: "Baek Yunho (Crinière argentée)",
    rarity: "SSR",
    element: "Ténèbres",
    gradient: "linear-gradient(90deg, #af63af, #000)",
    image: "Chasseurs_SSR/tenebre/Baek_yunho_a_criniere_argentee/baek_art.png",
    weaponImage: "Chasseurs_SSR/tenebre/Baek_yunho_a_criniere_argentee/ame_d_un_tigre_blanc_hurlant/Relic_BaekYoonHo_PortraitBig.png",
    weaponName: "Âme d'un tigre blanc hurlant",
    fullData: {
        0: fmtPassif(`Passif :`, `Les dégâts de compétence de l'utilisateur augmentent proportionnellement à hauteur de 50% du ratio de PV perdus par l'utilisateur.

        Lorsque les compétences **Massacre** ou **Approche violente** touchent leur cible, elles lui appliquent l'effet [Hémorragie].

        Applique l'effet [Malédiction de la bête magique] aux cibles immunisées contre l'effet [Hémorragie].

        Les dégâts des compétences **Griffes de bête magique** et **Massacre** augmentent de 60% face à des cibles affectées par les effets [Hémorragie ou Malédiction de la bête magique].`, [
        { title: `[Hémorragie]`, content: `Inflige des dégâts équivalents à 1% des PV actuels de l'utilisateur toutes les 3 secondes.
            Durée: 30 seconde(s)` },
        { title: `[Malédiction de la bête magique]`, content: `Inflige des dégâts équivalents à 200 % des PV max de Baek Yunho à crinière argentée toutes les 3 secondes.
            Durée: 30 seconde(s)` }
    ], "Ténèbres"),
        1: fmtPassif(`1 étoile :`, `Lors de l'utilisation de la compétence **Attaque extrême: Forme animale**, le Taux de coup critique et les Dégâts de coup critique augmentent de 3% toutes les 1 seconde(s) pendant 12 seconde(s).

        Lors de l'utilisation de la compétence **Attaque extrême: Forme animale**, les dégâts subis augmentent à hauteur de 10% des PV actuels de l'utilisateur, mais il profite d'un [Bouclier] équivalent à 20% de ses PV max.

        **Attaque extrême: Forme animale** ignore l'effet de [Bouclier] de l'utilisateur et inflige des dégâts à l'utilisateur.

        Lorsque les PV de l'utilisateur sont à 30% ou moins, les dégâts subis par l'utilisateur de 15%.`, [], "Ténèbres"),
        2: fmtPassif(`2 étoiles :`, `Les PV de l'utilisateur augmentent de 16%.`, [], "Ténèbres"),
        3: fmtPassif(`3 étoiles :`, `L'utilisateur débute le combat avec 50% de PV en moins.

        Au début du combat, l'utilisateur bénéficie d'un [Bouclier] équivalent à 60% de ses PV max.

        Durée: illimitée`, [], "Ténèbres"),
        4: fmtPassif(`4 étoiles :`, `Les dégâts de l'Attaque de base de l'utilisateur augmentent de 80%.`, [], "Ténèbres"),
        5: fmtPassif(`5 étoiles :`, `L'augmentation des dégâts de compétence de l'utilisateur passent à 120% du ratio de PV perdus.`, [], "Ténèbres")
    },
    summaryData: {
        0: `
        <h3>Passif : Berserker Sauvage</h3>
        <p>Moins de PV = Plus de Dégâts (max <span class="stat-boost">50%</span>).<br>
        Compétences = <span class="buff">[Hémorragie]</span> ou <span class="buff">[Malédiction]</span> (DOT).<br>
        Bonus dégâts <span class="stat-boost">+60%</span> sur cibles saignantes.</p>
    `,
        1: `
        <h3>1 étoile</h3>
        <p>Attaque extrême : Crit Rate/Dmg progressif (<span class="stat-boost">+3%</span>/s).<br>
        Coût PV pour activer, mais <span class="buff">[Bouclier]</span> (20% PV Max).<br>
        Sous 30% PV : Réduction dégâts subis <span class="stat-boost">15%</span>.</p>
    `,
        2: `
        <h3>2 étoiles</h3>
        <p>PV Max <span class="stat-boost">+16%</span>.</p>
    `,
        3: `
        <h3>3 étoiles</h3>
        <p>Début combat : -50% PV, mais gros <span class="buff">[Bouclier]</span> (<span class="stat-boost">60%</span> PV Max).</p>
    `,
        4: `
        <h3>4 étoiles</h3>
        <p>Dégâts Attaque base <span class="stat-boost">+80%</span>.</p>
    `,
        5: `
        <h3>5 étoiles</h3>
        <p>Bonus dégâts sur PV perdus passe à <span class="stat-boost">120%</span>.</p>
    `
    },
    weaponData: {
        0: fmtWeapon(`Avancement 0 :`, `Augmente les dégâts de lumière de l'utilisateur de 4%.

        Face à des cibles affectées par l'effet [Flammes blanches], la Défense de l'utilisateur augmente de 5% pendant 20 seconde(s).

        (Temps de rechargement: 30 seconde(s))`, "Ténèbres"),
        1: fmtWeapon(`Avancement 5 étoiles :`, `Augmente les dégâts de lumière de l'utilisateur de 12%.

        Face à des cibles affectées par l'effet [Flammes blanches], la Défense de l'utilisateur augmente de 20 % pendant 20 seconde(s).

        (Temps de rechargement: 30 seconde(s))`, "Ténèbres"),
        2: fmtWeapon(`Avancement 10 étoiles :`, `Augmente l'Attaque, la Défense et les PV de l'utilisateur de 15%.`, "Ténèbres")
    }
};

// --- CHARLOTTE ---
huntersData["charlotte"] = {
    name: "Charlotte",
    rarity: "SSR",
    element: "Ténèbres",
    gradient: "linear-gradient(90deg, #af63af, #000)",
    image: "Chasseurs_SSR/tenebre/Charlotte/charlotte_art.png",
    weaponImage: "Chasseurs_SSR/tenebre/Charlotte/farceuse/Relic_Charlotte_PortraitBig.png",
    weaponName: "Farceuse",
    fullData: {
        0: fmtPassif(`Passif :`, `Lors de l'utilisation de **Ruée**, cette dernière devient une compétence à effet de charge dont la trajectoire peut être contrôlée.

        Lorsque le mode d'attaque de cette Ruée est actif, Charlotte obtient un [Bouclier] équivalent à 20% de sa défense tant que la Ruée est activée.

        **Prends ça !** devient disponible après avoir utilisé 2 fois des attaques de base de palier 3, contrairement à la règle habituelle qui demande de charger la jauge de puissance en utilisant des compétences et supprime le temps de rechargement.

        (Temps de rechargement: 40 seconde(s))

        Lors de **Prends ça !**, la compétence augmente les dégâts de **Harper! À l'aide !** de 50 % pendant 10 seconde(s)

        La stat de Dégâts de coup critique de l'utilisatrice augmente à hauteur de 10% de la stat de dégâts augmentés.`, [], "Ténèbres"),
        1: fmtPassif(`1 étoile :`, `Après avoir utilisé une attaque de base de palier 3 1 fois, **Prends ça !** devient disponible.

        (Temps de rechargement: 20 seconde(s)).

        Lors de **Danse disla**, cette compétence augmente les dégâts de ténèbres de 15% pendant 20 seconde(s).`, [], "Ténèbres"),
        2: fmtPassif(`2 étoiles :`, `Augmente la Défense de l'utilisatrice de 12%.`, [], "Ténèbres"),
        3: fmtPassif(`3 étoiles :`, `**Prends ça!** devient **Harper! Nous ne faisons qu'un!** 

        lorsque Harper prête assistance.

        Les dégâts de l'utilisatrice augmentent aussi de 70%`, [], "Ténèbres"),
        4: fmtPassif(`4 étoiles :`, `Les attaques de base sont plus rapides et leurs dégâts augmentent de 60%.`, [], "Ténèbres"),
        5: fmtPassif(`5 étoiles :`, `Lors d'une attaque de base,, l'utilisatrice active l'effet [Reconnaissance de la poupée].`, [
        { title: `[Reconnaissance de la poupée]`, content: `Augmente les dégâts de **Harper ! Nous ne faisons qu'un!** et **Harper! A l'aide !** de 8%.
            Durée: illimitée Cumulable jusqu'à 15 fois.)` }
    ], "Ténèbres")
    },
    summaryData: {
        0: `
        <h3>Passif : Duo Dynamique</h3>
        <p>Ruée contrôlable + <span class="buff">[Bouclier]</span>.<br>
        Attaques de base débloquent <strong>Prends ça !</strong> (Reset CD).<br>
        Prends ça ! booste Harper! À l'aide ! (<span class="stat-boost">+50%</span>).<br>
        Conversion Dégâts Bonus -> Dégâts Crit (<span class="stat-boost">10%</span>).</p>
    `,
        1: `
        <h3>1 étoile</h3>
        <p>Déblocage Prends ça ! plus rapide (1 attaque palier 3).<br>
        Danse disla : Dégâts <span class="element-tenebre">Ténèbres</span> <span class="stat-boost">+15%</span>.<br></p>
    `,
        2: `
        <h3>2 étoiles</h3>
        <p>Défense <span class="stat-boost">+12%</span>.<br></p>
    `,
        3: `
        <h3>3 étoiles</h3>
        <p>Prends ça! amélioré en <strong>Harper! Nous ne faisons qu'un!</strong>.<br>
        Dégâts globaux <span class="stat-boost">+70%</span>.</p>
    `,
        4: `
        <h3>4 étoiles</h3>
        <p>Attaques de base plus rapides et dégâts <span class="stat-boost">+60%</span>.<br></p>
    `,
        5: `
        <h3>5 étoiles</h3>
        <p>Attaques de base = <span class="buff">[Reconnaissance]</span>.<br>
        Boost dégâts compétences Harper (<span class="stat-boost">+8%</span> par cumul, max 15).</p>
    `
    },
    weaponData: {
        0: fmtWeapon(`Avancement 0 :`, `Augmente la Défense de l'utilisatrice de 2%.

        Augmente le Taux de coup critique et les Dégâts de coup critique de **Prends ça !**, **Harper ! Nous ne faisons qu'un!** et **Harper ! À l'aide !** de 4%.`, "Ténèbres"),
        1: fmtWeapon(`Avancement 5 étoiles :`, `Augmente la Défense de l'utilisatrice de 12%.

        Augmente le Taux de coup critique et les Dégâts de coup critique de **Prends ça !**, **Harper! Nous ne faisons qu'un!** et **Harper! À l'aide !** de 24%.`, "Ténèbres"),
        2: fmtWeapon(`Avancement 10 étoiles :`, `Augmente l'Attaque, la Défense et les PV de l'utilisateur de 15%.`, "Ténèbres")
    }
};

// --- HARPER ---
huntersData["harper"] = {
    name: "Harper",
    rarity: "SSR",
    element: "Ténèbres",
    gradient: "linear-gradient(90deg, #af63af, #000)",
    image: "Chasseurs_SSR/tenebre/Harper/harper_art.png",
    weaponImage: "Chasseurs_SSR/tenebre/Harper/espiegle/Relic_Harper_PortraitBig.png",
    weaponName: "Espiègle",
    fullData: {
        0: fmtPassif(`Passif :`, `L'effet [Super boost magique] est activé au début du combat.

        Lors de **Dérapage au marteau!**, cette compétence active l'effet [London Drift].`, [
        { title: `[Super boost magique]`, content: `Lors de **Dérapage au marteau!**, cette compétence augmente le Taux de coup critique et les Dégâts de coup critique de 5%.
            (Cumulable jusqu'à 4 fois.)
            Durée: illimitée` },
        { title: `[La dérive de Londres]`, content: `Augmente les dégâts infligés de 20 %.
            Durée: 10 seconde(s)` }
    ], "Ténèbres"),
        1: fmtPassif(`1 étoile :`, `L'utilisation de **L'attendrisseur!** octroie un [Bouclier] équivalent à 50% des PV de l'utilisatrice.

        Le nombre max de coups de **L'attendrisseur!** augmente de 4 et les dégâts de compétence augmentent de 120%.`, [], "Ténèbres"),
        2: fmtPassif(`2 étoiles :`, `L'efficacité de [Bris] augmente de 20%.`, [], "Ténèbres"),
        3: fmtPassif(`3 étoiles :`, `Lors de **Dérapage au marteau !**, l'utilisatrice attaque instantanément les ennemis dans un rayon de 5 m.

        [London Drift] est amélioré.

        **Mjöllnir de Harper** devient **Mjöllnir de Harper et Charlotte**.

        Les dégâts de compétence ultime de l'utilisatrice augmentent de 70%.`, [
        { title: `[La dérive de Londres]`, content: `Augmente les dégâts infligés de 60%.
            Durée: 15 seconde(s)` }
    ], "Ténèbres"),
        4: fmtPassif(`4 étoiles :`, `La Défense et les PV de tous les membres de l'équipe augmentent de 8%.`, [], "Ténèbres"),
        5: fmtPassif(`5 étoiles :`, `**Petits morceaux** est amélioré.

        [Super boost magique] devient [Super boost magique des jumelles].`, [
        { title: `[Petits morceaux]`, content: `Les dégâts de compétence ultime subis par les chasseurs d'élément Ténèbres augmentent de 2%.
            (Cumulable jusqu'à 16 fois.)
            Durée: 30 seconde(s)` },
        { title: `[Super boost magique des jumelles]`, content: `Lors de **Dérapage au marteau !**, la compétence augmente le Taux de coup critique et les Dégâts de coup critique de l'utilisatrice de 6%.
            (Cumulable jusqu'à 7 fois.)
            Durée: illimitée` }
    ], "Ténèbres")
    },
    summaryData: {
        0: `
        <h3>Passif : La Petite Terreur</h3>
        <p>Début : <span class="buff">[Super boost]</span>.<br>
        Dérapage = <span class="buff">[London Drift]</span>.<br>
        [Super boost] : Crit Rate/Dmg <span class="stat-boost">+5%</span> (Max 4).<br>
        [London Drift] : Dégâts <span class="stat-boost">+20%</span>.</p>
    `,
        1: `
        <h3>1 étoile</h3>
        <p>L'attendrisseur! = <span class="buff">[Bouclier]</span> (50% PV).<br>
        Coups +4, Dégâts <span class="stat-boost">+120%</span>.<br></p>
    `,
        2: `
        <h3>2 étoiles</h3>
        <p>Efficacité Bris <span class="stat-boost">+20%</span>.<br></p>
    `,
        3: `
        <h3>3 étoiles</h3>
        <p>Dérapage : AoE instantanée.<br>
        Ulti : Dégâts <span class="stat-boost">+70%</span>.<br>
        [London Drift] amélioré (<span class="stat-boost">+60%</span> dégâts).<br></p>
    `,
        4: `
        <h3>4 étoiles</h3>
        <p>Def/PV Équipe <span class="stat-boost">+8%</span>.<br></p>
    `,
        5: `
        <h3>5 étoiles</h3>
        <p><span class="buff">[Petits morceaux]</span> : Debuff Ulti <span class="element-tenebre">Ténèbres</span> (<span class="stat-boost">+2%</span> par cumul, max 16).<br>
        <span class="buff">[Super boost jumelles]</span> : Crit Rate/Dmg <span class="stat-boost">+6%</span> (Max 7).<br></p>
    `
    },
    weaponData: {
        0: fmtWeapon(`Avancement 0 :`, `Les PV de l'utilisatrice augmentent de 4%.

        Lors de l'utilisation de la compétence ultime, les dégâts de ténèbres des membres de son équipe augmentent de 4% pendant 30 seconde(s).`, "Ténèbres"),
        1: fmtWeapon(`Avancement 5 étoiles :`, `Les PV de l'utilisatrice augmentent de 12%.

        Lors de l'utilisation de la compétence ultime, les dégâts de ténèbres des membres de son équipe augmentent de 12% pendant 30 seconde(s).`, "Ténèbres"),
        2: fmtWeapon(`Avancement 10 étoiles :`, `Augmente l'Attaque, la Défense et les PV de l'utilisateur de 15%.`, "Ténèbres")
    }
};

// --- ISLA WRIGHT ---
huntersData["isla-wright"] = {
    name: "Isla Wright",
    rarity: "SSR",
    element: "Ténèbres",
    gradient: "linear-gradient(90deg, #af63af, #000)",
    image: "Chasseurs_SSR/tenebre/Isla_wright/isla_art.png",
    weaponImage: "Chasseurs_SSR/tenebre/Isla_wright/chance_impromptue/Relic_IslaWright_PortraitBig.png",
    weaponName: "Chance impromptue",
    fullData: {
        0: fmtPassif(`Passif :`, `Lors de l'utilisation du Stade 3 de son attaque de base, l'utilisatrice charge sa jauge de puissance de 100%.

        Lors de l'utilisation de **Nova de la Mort**, la compétence **Arcane: le Monde** devient **Arcane : la Mort**.

        Lors de l'utilisation de la compétence **Urgence cosmique**, la compétence **Arcane : la Mort** devient **Arcane: le Monde**.`, [], "Ténèbres"),
        1: fmtPassif(`1 étoile :`, `Lors de l'utilisation de la compétence **Nova de la Mort**, l'utilisatrice charge la jauge de puissance du deuxième personnage de l'équipe de 60% et réduit le temps de rechargement de sa compétence ultime de 20 seconde(s).

        Améliore l'effet [La Tour].`, [
        { title: `[La Tour]`, content: `Augmente les dégâts élémentaires de ténèbres infligés par les membres de type Ténèbres de 10%.
            Durée: 16 seconde(s)` }
    ], "Ténèbres"),
        2: fmtPassif(`2 étoiles :`, `Augmente la Vitesse de toute l'équipe de 10% et l'immunise contre l'effet [Ralenti].

        Augmente la Défense de toute l'équipe de 5%.`, [], "Ténèbres"),
        3: fmtPassif(`3 étoiles :`, `Lors de l'utilisation de la compétence **Horoscope, Étoiles contraires**, les effets [La Force, Le Magicien et La Roue de la Fortune] s'activent.`, [], "Ténèbres"),
        4: fmtPassif(`4 étoiles :`, `Les dégâts élémentaires de ténèbres des membres de type Ténèbres augmentent de 3% et les dégâts qu'ils subissent diminuent de 3% (cumulable jusqu'à 3 fois) par chasseur de l'élément Ténèbres présent dans l'équipe.`, [], "Ténèbres"),
        5: fmtPassif(`5 étoiles :`, `Les effets [Le Monde et La Mort] sont améliorés.`, [
        { title: `[Le Monde]`, content: `Des PV équivalents à 25% de la Défense d'Isla Wright sont instantanément restaurés pour toute l'équipe.
            Octroie à toute l'équipe un [Bouclier] équivalent à 25% de la Défense d'Isla Wright.
            Durée: 8 seconde(s)` },
        { title: `[La Mort]`, content: `Augmente la stat d'augmentation des dégâts de toute l'équipe de 12% de la stat d'augmentation des dégâts d'Isla Wright.
            Si un chasseur de l'élément Ténèbres est présent dans le groupe, les dégâts de compétence ultime de toute l'équipe augmentent de 32%.
            L'effet [Guide de la Mort] est appliqué à toute l'équipe.
            Durée: 16 seconde(s)` },
        { title: `[Guide de la Mort]`, content: `Augmente les dégâts de 0.2% chaque fois que les PV de la cible baissent de 1% (cumulable jusqu'à 16 %).
            Durée: 16 seconde(s)` }
    ], "Ténèbres")
    },
    summaryData: {
        0: `
        <h3>Passif : Maîtresse des Arcanes</h3>
        <p>Stade 3 Attaque base = <span class="stat-boost">100%</span> Jauge Puissance.<br>
        Nova de la Mort -> Active <strong>Arcane : la Mort</strong>.<br>
        Urgence cosmique -> Active <strong>Arcane : le Monde</strong>.</p>
    `,
        1: `
        <h3>1 étoile</h3>
        <p>Nova de la Mort : Jauge Puissance <span class="stat-boost">+60%</span> + Réduction CD Ultime (20s) pour le 2nd Chasseur.<br>
        <span class="buff">[La Tour]</span> : Dégâts <span class="element-tenebre">Ténèbres</span> <span class="stat-boost">+10%</span> pour alliés <span class="element-tenebre">Ténèbres</span>.</p>
    `,
        2: `
        <h3>2 étoiles</h3>
        <p>Vitesse Équipe <span class="stat-boost">+10%</span> (Immunité Ralenti).<br>
        Défense Équipe <span class="stat-boost">+5%</span>.</p>
    `,
        3: `
        <h3>3 étoiles</h3>
        <p>Horoscope : Active 3 Arcanes bonus (<span class="buff">[Force, Magicien, Fortune]</span>).</p>
    `,
        4: `
        <h3>4 étoiles</h3>
        <p>Buff <span class="element-tenebre">Ténèbres</span> (Dégâts/Réduction Dégâts) par allié <span class="element-tenebre">Ténèbres</span> (<span class="stat-boost">+/-3%</span> par allié).</p>
    `,
        5: `
        <h3>5 étoiles</h3>
        <p><span class="buff">[Le Monde]</span> : Soin + Bouclier (<span class="stat-boost">25%</span> Def Isla).<br>
        <span class="buff">[La Mort]</span> : Boost Dégâts Ultime <span class="element-tenebre">Ténèbres</span> (<span class="stat-boost">+32%</span>) + <span class="buff">[Guide]</span> (Exécution <span class="stat-boost">+0.2%</span> par 1% PV perdu).</p>
    `
    },
    weaponData: {
        0: fmtWeapon(`Avancement 0 :`, `Augmente la Défense de l'utilisatrice de 0.5%.

        La Défense de toute l'équipe augmente de 0.5% par chasseur de l'élément Ténèbres présent dans l'équipe.

        Réduit le temps de rechargement de la compétence ultime d'Isla Wright de 4 seconde(s).`, "Ténèbres"),
        1: fmtWeapon(`Avancement 5 étoiles :`, `Augmente la Défense de l'utilisatrice de 4%.

        La Défense de toute l'équipe augmente de 4% par chasseur de l'élément Ténèbres présent dans l'équipe.

        Réduit le temps de rechargement de la compétence ultime d'Isla Wright de 20 seconde(s).`, "Ténèbres"),
        2: fmtWeapon(`Avancement 10 étoiles :`, `Augmente l'Attaque, la Défense et les PV de l'utilisateur de 15%.`, "Ténèbres")
    }
};

// --- LEE BORA ---
huntersData["lee-bora"] = {
    name: "Lee Bora",
    rarity: "SSR",
    element: "Ténèbres",
    gradient: "linear-gradient(90deg, #af63af, #000)",
    image: "Chasseurs_SSR/tenebre/Lee_bora/lee_art.png",
    weaponImage: "Chasseurs_SSR/tenebre/Lee_bora/logique_imparable/Relic_LeeBoRa_PortraitBig.png",
    weaponName: "Logique Imparable",
    fullData: {
        0: fmtPassif(`Passif :`, `Lorsque l'attaque de noyau ou la compétence **Tempête** touchent leur cible, l'effet [Talisman] est infligé à la cible.`, [
        { title: `[Talisman]`, content: `Les dégâts subis par la cible augmentent de 15%.
            Durée: 15 seconde(s)` }
    ], "Ténèbres"),
        1: fmtPassif(`1 étoile :`, `Modification des effets de la compétence **Talisman d'invocation: Renard fantomatique** Lors de l'utilisation de [Renards fantomatiques], 3 renards sont invoqués.

        Augmente les dégâts de chaque Renard fantomatique de 50%.`, [], "Ténèbres"),
        2: fmtPassif(`2 étoiles :`, `Les dégâts de coup critique et le Taux de coup critique de l'utilisatrice augmentent de 6 %.`, [], "Ténèbres"),
        3: fmtPassif(`3 étoiles :`, `Modification des effets de la compétence **Talisman de renforcement** Peut être utilisée jusqu'à 2 fois.

        La portée et les dégâts de la compétence augmentent de 40%.`, [], "Ténèbres"),
        4: fmtPassif(`4 étoiles :`, `Réduit le temps de rechargement de **Talisman de ténèbres: Meg** de 25%.`, [], "Ténèbres"),
        5: fmtPassif(`5 étoiles :`, `Les dégâts de base des petits Meg de **Talisman de ténèbres: Meg** augmentent de 75%.`, [], "Ténèbres")
    },
    summaryData: {
        0: `
        <h3>Passif : Maîtresse des Talismans</h3>
        <p>Tempête / Attaque noyau = <span class="buff">[Talisman]</span>.<br>
        [Talisman] : Dégâts subis par la cible <span class="stat-boost">+15%</span> (15s).</p>
    `,
        1: `
        <h3>1 étoile</h3>
        <p>Renards fantomatiques : Invoque 3 renards.<br>
        Dégâts Renards <span class="stat-boost">+50%</span>.<br></p>
    `,
        2: `
        <h3>2 étoiles</h3>
        <p>Crit Rate/Dmg <span class="stat-boost">+6%</span>.<br></p>
    `,
        3: `
        <h3>3 étoiles</h3>
        <p>Talisman de renforcement : 2 charges.<br>
        Portée et Dégâts <span class="stat-boost">+40%</span>.<br></p>
    `,
        4: `
        <h3>4 étoiles</h3>
        <p>CD Talisman de ténèbres: Meg <span class="stat-boost">-25%</span>.<br></p>
    `,
        5: `
        <h3>5 étoiles</h3>
        <p>Dégâts petits Meg <span class="stat-boost">+75%</span>.<br></p>
    `
    },
    weaponData: {
        0: fmtWeapon(`Avancement 0 :`, `Augmente l'Attaque de l'utilisateur de 2.5%.

        Lorsque l'utilisateur touche des cibles avec **Talisman de renforcement**, ses Dégâts de coup critique et son Taux de coup critique augmentent de 2.5% pendant 10 seconde(s) face à celles-ci.`, "Ténèbres"),
        1: fmtWeapon(`Avancement 5 étoiles :`, `Augmente l'Attaque de l'utilisateur de 10%.

        Les Dégâts de coup critique et le Taux de coup critique augmentent de 10% pendant 10 seconde(s) face aux cibles touchées par **Talisman de renforcement**.`, "Ténèbres"),
        2: fmtWeapon(`Avancement 10 étoiles :`, `Augmente l'Attaque, la Défense et les PV de l'utilisateur de 15%.`, "Ténèbres")
    }
};

// --- LIM TAEGYU ---
huntersData["lim-taegyu"] = {
    name: "Lim Taegyu",
    rarity: "SSR",
    element: "Ténèbres",
    gradient: "linear-gradient(90deg, #af63af, #000)",
    image: "Chasseurs_SSR/tenebre/Lim_taegyu/LimTaeGyu_Portrait_Body.png",
    weaponImage: "Chasseurs_SSR/tenebre/Lim_taegyu/interception/Relic_LimTaeGyu_PortraitBig.png",
    weaponName: "Interception",
    fullData: {
        0: fmtPassif(`Passif :`, `Lors de l'utilisation d'**Explosion aérienne**, l'utilisateur applique l'effet [Boost magique].`, [
        { title: `[Boost magique]`, content: `Lorsque la compétence touche sa cible, l'utilisateur tire 3 flèches magiques.
            Lorsque l'Attaque de base de l'utilisateur touche sa cible, 2 flèches magiques sont tirées.
            Dégâts: inflige des dégâts équivalents à 120 % de l'Attaque de l'utilisateur par flèche.
            Les dégâts des attaques de noyau, de **Typhon ardent** et d'**Attaque rapide : Typhon ardent** augmentent de 30%.
            Durée: 15 seconde(s)` }
    ], "Ténèbres"),
        1: fmtPassif(`1 étoile :`, `Améliore l'effet de compétence **Manœuvre de tir**.

        La vitesse et les dégâts de compétence de l'utilisateur augmentent de 25%, et l'effet est utilisable jusqu'à 3 fois.`, [], "Ténèbres"),
        2: fmtPassif(`2 étoiles :`, `Augmente l'efficacité de [Bris] de l'utilisateur de 20%.`, [], "Ténèbres"),
        3: fmtPassif(`3 étoiles :`, `Lorsque l'effet [Boost magique] est actif, les effets des attaques de noyau, de **Typhon ardent** et d'**Attaque rapide: Typhon ardent** augmentent de 50%.

        Lors de l'utilisation de **Manœuvre de tir**, l'effet [Boost magique] s'applique (temps de rechargement: 20 seconde(s)).`, [], "Ténèbres"),
        4: fmtPassif(`4 étoiles :`, `Augmente l'Attaque de l'utilisateur de 12%.`, [], "Ténèbres"),
        5: fmtPassif(`5 étoiles :`, `Chaque fois que l'attaque de noyau de l'utilisateur touche sa cible, l'Attaque augmente de 4% (cumulable jusqu'à 10 fois).

        Durée: infinie`, [], "Ténèbres")
    },
    summaryData: {
        0: `
        <h3>Passif : Archer Magique</h3>
        <p>Explosion aérienne = <span class="buff">[Boost magique]</span>.<br>
        [Boost magique] : Tirs de flèches supplémentaires + Boost dégâts Noyau/Typhon (<span class="stat-boost">+30%</span>).</p>
    `,
        1: `
        <h3>1 étoile</h3>
        <p>Manœuvre de tir améliorée : 3 charges, Vitesse/Dégâts <span class="stat-boost">+25%</span>.<br></p>
    `,
        2: `
        <h3>2 étoiles</h3>
        <p>Efficacité Bris <span class="stat-boost">+20%</span>.<br></p>
    `,
        3: `
        <h3>3 étoiles</h3>
        <p>Sous [Boost magique] : Effets Noyau/Typhon <span class="stat-boost">+50%</span>.<br>
        Manœuvre de tir active [Boost magique].<br></p>
    `,
        4: `
        <h3>4 étoiles</h3>
        <p>Attaque <span class="stat-boost">+12%</span>.<br></p>
    `,
        5: `
        <h3>5 étoiles</h3>
        <p>Touche Attaque Noyau = Attaque <span class="stat-boost">+4%</span> (Max 10 fois, infini).<br></p>
    `
    },
    weaponData: {
        0: fmtWeapon(`Avancement 0 :`, `Augmente les dégâts de ténèbres de l'utilisateur de 4%.

        Lors de l'utilisation d'une Attaque de base moins de 10 seconde(s) après l'utilisation de **Attaque rapide: Typhon ardent**, l'Attaque de l'utilisateur augmente de 8% pendant 30 seconde(s) (cumulable jusqu'à 2 fois).`, "Ténèbres"),
        1: fmtWeapon(`Avancement 5 étoiles :`, `Augmente les dégâts de ténèbres de l'utilisateur de 12%.

        Lors de l'utilisation d'une Attaque de base moins de 10 seconde(s) après l'utilisation de **Attaque rapide: Typhon ardent**, l'Attaque de l'utilisateur augmente de 8% pendant 30 seconde(s) (cumulable jusqu'à 8 fois).`, "Ténèbres"),
        2: fmtWeapon(`Avancement 10 étoiles :`, `Augmente l'Attaque, la Défense et les PV de l'utilisateur de 15%.`, "Ténèbres")
    }
};

// --- SIAN HALAT ---
huntersData["sian-halat"] = {
    name: "Sian Halat",
    rarity: "SSR",
    element: "Ténèbres",
    gradient: "linear-gradient(90deg, #af63af, #000)",
    image: "Chasseurs_SSR/tenebre/Sian_halat/sian_art.png",
    weaponImage: "Chasseurs_SSR/tenebre/Sian_halat/ombre_pourpre/Relic_SianHalat_PortraitBig.png",
    weaponName: "Ombre pourpre",
    fullData: {
        0: fmtPassif(`Passif :`, `Chaque fois que les compétences **Épéiste royal : Jugement**, **Épéiste royal : Flash noir** ou **Épéiste royal : Ruade** touchent leur cible, elles remplissent la jauge de [Maîtrise impeccable de l'épée].

        Lorsque la jauge de [Maîtrise impeccable de l'épée] atteint 50 % ou plus, l'effet [Danse de l'épée pourpre] est activé.

        Lorsque les compétences **Épéiste royal : Flash noir** ou **Épéiste royal : Ruade** touchent leur cible, l'effet [Furie pourpre] est activé.`, [
        { title: `[Danse de l'épée pourpre]`, content: `Augmente l'effet d'[Accumulation élémentaire] de ténèbres de 10 %.
            Augmente les dégâts de ténèbres de 5 %. Augmente l'Attaque de 5 %. Durée : 15 seconde(s).` },
        { title: `[Furie pourpre]`, content: `Restaure instantanément les PV à hauteur de 5 % de l'Attaque de Sian Halat.
            Augmente le Taux de récupération de PV de 5 %. Durée : 5 seconde(s).` }
    ], "Ténèbres"),
        1: fmtPassif(`1 étoile :`, `Lorsque la jauge de [Maîtrise impeccable de l'épée] atteint 50 % ou plus, les compétences **Épéiste royal : Flash noir** et **Épéiste royal : Ruade** deviennent **Épéiste royal : Pleine lune** et **Épéiste royal : Tempête de sang**, ce qui augmente leurs dégâts de 100 %.

        L'utilisation des compétences **Épéiste royal : Pleine lune** ou **Épéiste royal : Tempête de sang** consomme 50 % de la jauge de [Maîtrise impeccable de l'épée].

        Lorsque les compétences **Épéiste royal : Flash noir**, **Épéiste royal : Ruade**, **Épéiste royal : Pleine lune** ou **Épéiste royal : Tempête de sang** touchent leur cible, elles lui appliquent l'effet [Domination écarlate].

        L'effet [Furie pourpre] qui est activé lorsque les compétences **Épéiste royal : Flash noir** ou **Épéiste royal : Ruade** touchent leur cible devient [Furie insatiable].

        Lorsque les compétences **Épéiste royal : Pleine lune** ou **Épéiste royal : Tempête de sang** touchent leur cible, elles appliquent l'effet [Furie insatiable].

        Lorsque les PV de Sian Halat atteignent 1 ou moins, il devient [Immortel] pendant 2 seconde(s).

        Lorsque l'effet [Immortel] prend fin, il récupère des PV équivalents à 50 % de son Attaque.

        Cet effet ne s'active qu'une fois pendant le combat.`, [
        { title: `[Domination écarlate]`, content: `Augmente les dégâts de ténèbres subis de 5 %.
            Augmente les dégâts de [Surcharge] de ténèbres subis de 5 %. Durée : 10 seconde(s) (cumulable jusqu'à 2 fois).` },
        { title: `[Furie insatiable]`, content: `Restaure instantanément des PV équivalents à 10 % de l'Attaque de Sian Halat.
            Augmente le Taux de récupération de PV de 10 %. Durée : 5 seconde(s).` }
    ], "Ténèbres"),
        2: fmtPassif(`2 étoiles :`, `Applique l'effet [Serment de la victoire] à toute l'équipe au début du niveau.

        Augmente l'effet d'[Accumulation élémentaire] de ténèbres de 20 %.`, [
        { title: `[Serment de la victoire]`, content: `Augmente les dégâts de [Surcharge] de ténèbres subis par les cibles affectées de 20 %.
            Durée : illimitée.` }
    ], "Ténèbres"),
        3: fmtPassif(`3 étoiles :`, `Améliore l'effet [Danse de l'épée pourpre].

        Lorsque les compétences **Épéiste royal : Flash noir**, **Épéiste royal : Ruade**, **Épéiste royal : Pleine lune** ou **Épéiste royal : Tempête de sang** touchent leur cible, elles activent l'effet [Résolution du gardien].`, [
        { title: `[Danse de l'épée pourpre] (Amélioré)`, content: `Augmente l'effet d'[Accumulation élémentaire] de ténèbres de 20 %.
            Augmente les dégâts de ténèbres de 10 %. Augmente l'Attaque de 10 %. Durée : 30 seconde(s).` },
        { title: `[Résolution du gardien]`, content: `Augmente l'effet d'[Accumulation élémentaire] de ténèbres de 1 %.
            Augmente les dégâts de ténèbres de 1.6 %. Augmente l'Attaque de 1 %. Durée : illimitée (cumulable jusqu'à 20 fois).` }
    ], "Ténèbres"),
        4: fmtPassif(`4 étoiles :`, `La Pénétration de défense des membres de l'équipe de l'élément Ténèbres augmente de 3 % par membre de l'élément Ténèbres présent dans le groupe.`, [], "Ténèbres"),
        5: fmtPassif(`5 étoiles :`, `Les effets [Domination écarlate] et [Furie insatiable] sont améliorés.

        Le taux de remplissage de la jauge de [Maîtrise impeccable de l'épée] augmente de 100 %.

        Lorsque les compétences **Épéiste royal : Flash noir**, **Épéiste royal : Ruade**, **Épéiste royal : Pleine lune** ou **Épéiste royal : Tempête de sang** touchent leur cible, elles restaurent 20 % de la jauge de puissance de l'utilisateur et réduisent le temps de rechargement de **Fierté du chevalier** de 3 seconde(s) (temps de rechargement : 0.5 seconde(s)).

        Lorsque **Fierté du chevalier** touche sa cible, elle applique l'effet [Épée du zénith] aux membres de l'équipe de l'élément Ténèbres.`, [
        { title: `[Domination écarlate] (Amélioré)`, content: `Augmente les dégâts de ténèbres subis de 10 %.
            Augmente les dégâts de [Surcharge] de ténèbres subis de 10 %. Durée : 20 seconde(s) (cumulable jusqu'à 4 fois).` },
        { title: `[Furie insatiable] (Amélioré)`, content: `Restaure instantanément des PV équivalents à 20 % de l'Attaque de Sian Halat.
            Augmente le Taux de récupération de PV de 20 %. Augmente les dégâts de [Surcharge] de ténèbres de 30 %.
            Augmente la Pénétration de défense de 10 %. Augmente l'Attaque de 15 %. Durée : 30 seconde(s).` }
    ], "Ténèbres")
    },
    summaryData: {
        0: `
        <h3>Passif : Maître des <span class="element-tenebre">Ténèbres</span></h3>
        <p>Compétences remplissent <span class="buff">[Maîtrise]</span>.<br>
        Jauge > 50% = <span class="buff">[Danse de l'épée]</span> (Accumulation +10%, Atk +5%).<br>
        Compétences activent <span class="buff">[Furie pourpre]</span> (Soin 5%).</p>
    `,
        1: `
        <h3>1 étoile</h3>
        <p>Jauge > 50% : Compétences améliorées (Dégâts <span class="stat-boost">+100%</span>).<br>
        Applique <span class="buff">[Domination écarlate]</span> (Debuff Dégâts/Surcharge <span class="element-tenebre">Ténèbres</span>).<br>
        <span class="buff">[Furie insatiable]</span> : Soin 10%.<br>
        Mécanique d'<span class="buff">[Immortel]</span> (1 HP -> Invincible 2s -> Soin 50%).</p>
    `,
        2: `
        <h3>2 étoiles</h3>
        <p>Entrée : <span class="buff">[Serment de la victoire]</span> (Debuff Surcharge <span class="element-tenebre">Ténèbres</span> <span class="stat-boost">+20%</span>).<br>
        Accumulation <span class="element-tenebre">Ténèbres</span> <span class="stat-boost">+20%</span>.</p>
    `,
        3: `
        <h3>3 étoiles</h3>
        <p>Améliore <span class="buff">[Danse]</span> : Accumulation <span class="stat-boost">+20%</span>, Dégâts/Atk <span class="stat-boost">+10%</span>.<br>
        Active <span class="buff">[Résolution du gardien]</span> (Stack Dégâts/Atk illimité).</p>
    `,
        4: `
        <h3>4 étoiles</h3>
        <p>Pénétration défense équipe <span class="element-tenebre">Ténèbres</span> <span class="stat-boost">+3%</span> par allié <span class="element-tenebre">Ténèbres</span>.</p>
    `,
        5: `
        <h3>5 étoiles</h3>
        <p>Remplissage Jauge <span class="stat-boost">+100%</span>.<br>
        Compétences : Jauge Puissance <span class="stat-boost">+20%</span> + CD Fierté réduit.<br>
        Améliore <span class="buff">[Domination]</span> (Debuff 10%, x4) et <span class="buff">[Furie]</span> (Soin 20%, Buffs Atk/Pen/Surcharge).</p>
    `
    },
    weaponData: {
        0: fmtWeapon(`Avancement 0 :`, `Augmente la Pénétration de défense de 2 %.

        Lorsqu'un ennemi est affecté par une [Surcharge] de ténèbres, un effet qui augmente les dégats de ténèbres de toute l'équipe de 2 % est activé (cumulable jusqu'a 4 fois).

        Durée: illimitée`, "Ténèbres"),
        1: fmtWeapon(`Avancement 5 étoiles :`, `Augmente la Pénétration de défense de 15 %.

        Lorsqu'un ennemi est affecté par une [Surcharge] de ténèbres, un effet qui augmente les dégats de ténèbres de toute l'équipe de 12 % est activé (cumulable jusqu'a 4 fois).

        Durée: illimitée`, "Ténèbres"),
        2: fmtWeapon(`Avancement 10 étoiles :`, `Augmente l'Attaque, la Défense et les PV de 15 %.`, "Ténèbres")
    }
};

// --- SON KIHOON ---
huntersData["son-kihoon"] = {
    name: "Son Kihoon",
    rarity: "SSR",
    element: "Ténèbres",
    gradient: "linear-gradient(90deg, #af63af, #000)",
    image: "Chasseurs_SSR/tenebre/Son_kihoon/son_art.png",
    weaponImage: "Chasseurs_SSR/tenebre/Son_kihoon/determination_de_fer/Relic_SonKiHoon_PC_PortraitBig.png",
    weaponName: "Détermination de fer",
    fullData: {
        0: fmtPassif(`Passif :`, `L'effet [Posture de combat] est activé lorsque l'utilisateur arrive dans le niveau.

        Lorsqu'une attaque touche une cible avec une jauge de Bris, elle active l'effet [Posture de garde].

        Si Son Kihoon ou un allié parvient à mettre la cible en état de [Bris], la durée de Bris augmente de 3 secondes, les jauges de noyau et de puissance de Kihoon se remplissent à 100 % et l'effet [Posture de combat] est activé.`, [
        { title: `[Posture de combat]`, content: `Supprime [Posture de garde].
            Augmente les dégâts de ténèbres de 20 %.
            Augmente les dégâts de **Charge féroce** de 50 %.
            Durée : illimitée.` },
        { title: `[Posture de garde]`, content: `Supprime [Posture de combat].
            Augmente les dégâts infligés de 10 %.
            Augmente l'efficacité de Bris de 10 %.
            Durée : illimitée.` }
    ], "Ténèbres"),
        1: fmtPassif(`1 étoile :`, `L'utilisation des compétences **Drapeau d'autorité** ou **Charge féroce** active l'effet [Bouclier robuste].

        L'utilisation des compétences **Drapeau d'autorité** ou **Charge féroce** transforme **Motivation** en **Esprit combatif : Motivation** et l'active.

        L'utilisation de la compétence **Esprit combatif : Motivation** remplit 35 % de la jauge de puissance de l'utilisateur.

        Lorsque l'utilisateur quitte le combat, il applique l'effet [Esprit vertueux] aux membres de l'équipe de la classe Attaquant et de l'élément Ténèbres.`, [
        { title: `[Bouclier robuste]`, content: `Confère un Bouclier équivalent à 30 % des PV de Son Kihoon.
            Durée : 30 seconde(s).` },
        { title: `[Esprit vertueux]`, content: `Lorsqu'une compétence de base touche sa cible, elle inflige des dégâts de Bris faibles.
            L'utilisateur reçoit [Super armure] tant que l'effet est actif.
            Lorsque l'effet [Esprit vertueux] prend fin, il restaure 25 % des PM de l'utilisateur.
            Durée : 25 seconde(s) (temps de rechargement : 30 seconde(s)).` }
    ], "Ténèbres"),
        2: fmtPassif(`2 étoiles :`, `L'efficacité de Bris de l'utilisateur augmente de 10 %.`, [], "Ténèbres"),
        3: fmtPassif(`3 étoiles :`, `Inflige des dégâts de Bris lourds lorsque la compétence **Esprit combatif : Motivation** touche sa cible.

        Inflige des dégâts de Bris tout-puissants lorsque la compétence **Charge féroce** touche sa cible.

        Améliore l'effet [Esprit combatif affaibli].`, [
        { title: `[Esprit combatif affaibli] (Amélioré)`, content: `Les effets suivants sont appliqués aux cibles qui entrent dans la zone :
            Diminue l'Attaque de 12.5 %.
            Augmente les dégâts de ténèbres subis de 10 %.
            L'effet [Irrémédiable] est activé.` }
    ], "Ténèbres"),
        4: fmtPassif(`4 étoiles :`, `L'Attaque et les PV de toute l'équipe augmentent de 10 %.`, [], "Ténèbres"),
        5: fmtPassif(`5 étoiles :`, `L'effet [Chef de l'escadron d'attaque] est appliqué à toute l'équipe lorsque l'utilisateur arrive dans le niveau.

        Lorsque la compétence **Esprit combatif palpitant** touche une cible sans jauge de Bris, elle active l'effet [Esprit brisé] et applique l'effet [Frappe de Berserker] à toute l'équipe.`, [
        { title: `[Chef de l'escadron d'attaque]`, content: `Augmente l'Attaque de 10 %.
            Augmente les PV de 10 %.
            Augmente les dégâts infligés de 10 %.
            Durée : illimitée.` },
        { title: `[Esprit brisé]`, content: `Diminue l'Attaque de 12.5 %.
            Augmente les chances de recevoir des Dégâts de coup critique de 15 %.
            Durée : 60 seconde(s).` },
        { title: `[Frappe de Berserker]`, content: `Augmente les Dégâts de coup critique de 30 %.
            Augmente les dégâts de ténèbres de 15 %.
            Durée : 60 seconde(s).` }
    ], "Ténèbres")
    },
    summaryData: {
        0: `
        <h3>Passif : Maître du Bris</h3>
        <p>Cible avec Jauge Bris = <span class="buff">[Posture de garde]</span> (Efficacité Bris +10%).<br>
        Cible mise en Bris = <span class="buff">[Posture de combat]</span> (Dégâts <span class="element-tenebre">Ténèbres</span> +20%) + Reset Jauges.<br>
        Prolonge durée Bris de 3s.</p>
    `,
        1: `
        <h3>1 étoile</h3>
        <p>Compétences = <span class="buff">[Bouclier robuste]</span> (30% PV).<br>
        Motivation remplit Jauge Puissance.<br>
        Sortie combat = Buff <span class="buff">[Esprit vertueux]</span> aux Attaquants <span class="element-tenebre">Ténèbres</span> (Super armure, Regen PM, Dégâts Bris).</p>
    `,
        2: `
        <h3>2 étoiles</h3>
        <p>Efficacité de Bris de l'utilisateur <span class="stat-boost">+10%</span>.<br></p>
    `,
        3: `
        <h3>3 étoiles</h3>
        <p>Compétences infligent Bris Lourds/Tout-puissants.<br>
        Zone : Atk ennemie <span class="stat-boost">-12.5%</span>, Dégâts <span class="element-tenebre">Ténèbres</span> subis <span class="stat-boost">+10%</span>, <span class="buff">[Irrémédiable]</span>.</p>
    `,
        4: `
        <h3>4 étoiles</h3>
        <p>Attaque et PV de toute l'équipe <span class="stat-boost">+10%</span>.<br></p>
    `,
        5: `
        <h3>5 étoiles</h3>
        <p>Entrée = Buff <span class="buff">[Chef]</span> (Atk/PV/Dégâts <span class="stat-boost">+10%</span>).<br>
        Ultime sur cible sans Bris = Debuff <span class="buff">[Esprit brisé]</span> (Atk down, Crit reçu up) + Buff équipe <span class="buff">[Berserker]</span> (Crit Dmg/<span class="element-tenebre">Ténèbres</span> up).</p>
    `
    },
    weaponData: {
        0: fmtWeapon(`Avancement 0 :`, `Les PV de Kihoon augmentent de 5 %.

        Lorsque Kihoon ou un membre de l'équipe parvient à mettre la cible en état de [Bris], les dégâts de ténèbres de toute l'équipe augmentent de 2.5 %.

        Durée: illimitée`, "Ténèbres"),
        1: fmtWeapon(`Avancement 5 étoiles :`, `Les PV de Kihoon augmentent de 12 %.

        Lorsque Kihoon ou un membre de l'équipe parvient à mettre la cible en état de [Bris], les dégâts de ténèbres de toute l'équipe augmentent de 15 %.

        Durée: illimitée`, "Ténèbres"),
        2: fmtWeapon(`Avancement 10 étoiles :`, `L'Attaque, la Défense et les PV de l'utilisateur augmentent de 15 %.`, "Ténèbres")
    }
};

// --- SUNG ILHWAN ---
huntersData["sung-ilhwan"] = {
    name: "Sung Ilhwan",
    rarity: "SSR",
    element: "Ténèbres",
    gradient: "linear-gradient(90deg, #af63af, #000)",
    image: "Chasseurs_SSR/tenebre/Sung_ilhwan/sung_art.png",
    weaponImage: "Chasseurs_SSR/tenebre/Sung_ilhwan/volonte_implacable/Relic_SungIlHwan_PC_PortraitBig.png",
    weaponName: "Volonté implacable",
    fullData: {
        0: fmtPassif(`Passif :`, `Lorsque la compétence **Entaille fantôme** touche sa cible, l'effet [Balance du Dominateur] est activé.

        Les PM ne se régénèrent ni naturellement, ni avec une attaque de base ou une attaque de noyau.

        L'utilisation de la compétence **Puissance apocalyptique** restaure 14 % des PM actuels de l'utilisateur, proportionnellement au nombre de cumuls de l'effet [Amélioration du Dominateur] appliqués, à la suite de quoi les cumuls sont supprimés.

        L'utilisation des compétences **Entaille fantôme** ou **Courroux de la condamnation** applique l'effet [Amélioration du Dominateur].

        Lorsque les membres de l'équipe, à l'exception de Sung Ilhwan, utilisent leur compétence de base, ce dernier récupère 2 % de ses PM et sa jauge de puissance se remplit de 1 %.`, [
        { title: `[Amélioration du Dominateur]`, content: `Augmente les dégâts de la compétence de base de 5 %.
            Augmente les dégâts de la compétence ultime de 25 %.
            Durée : illimitée (cumulable jusqu'à 7 fois).` },
        { title: `[Balance du Dominateur]`, content: `Augmente les dégâts de la compétence **Courroux de la condamnation** de 1 %.
            Lors de l'utilisation de **Courroux de la condamnation**, l'effet [Balance du Dominateur] est supprimé.
            Durée : illimitée (cumulable jusqu'à 160 fois).` }
    ], "Ténèbres"),
        1: fmtPassif(`1 étoile :`, `L'utilisation de l'attaque de base ou de l'attaque de noyau diminue le temps de rechargement de la compétence **Entaille fantôme** de 1 seconde(s).

        L'utilisation de la compétence **Puissance apocalyptique** réinitialise la durée des buffs actifs sur l'utilisateur (temps de rechargement : 30 seconde(s)).

        Les dégâts de ténèbres augmentent de 150 % pendant 15 seconde(s) lorsque l'utilisateur arrive sur le champ de bataille en [Mode Chasseur].

        (Lorsque le chasseur arrive sur le champ de bataille en [Mode Chasseur], il est impossible d'utiliser automatiquement les compétences QTE des alliés pendant 15 seconde(s)).

        Lorsque les compétences **Grand final ténébreux** ou **Puissance apocalyptique** touchent leur cible, elles lui appliquent l'effet [Marqué].

        Lorsque la compétence **Puissance apocalyptique** touche une cible sous l'effet [Réprimé], la durée de l'effet [Réprimé] est réinitialisée.`, [
        { title: `[Marqué]`, content: `Augmente les dégâts infligés par Sung Ilhwan de 35 %.
            Si la cible est mise en état de [Bris], l'effet devient l'effet [Réprimé].
            Durée : 30 seconde(s).` },
        { title: `[Réprimé]`, content: `Augmente les dégâts infligés par Sung Ilhwan de 50 %.
            Augmente les dégâts des compétences ultimes de l'élément Ténèbres de 20 %.
            Durée : 30 seconde(s).` }
    ], "Ténèbres"),
        2: fmtPassif(`2 étoiles :`, `Les dégâts de ténèbres de l'utilisateur augmentent de 30 %.`, [], "Ténèbres"),
        3: fmtPassif(`3 étoiles :`, `Le nombre d'attaques pour les compétences **Entaille fantôme**, **Courroux de la condamnation** et **Puissance apocalyptique** est doublé.

        Lors de l'utilisation de la compétence **Transperce-ciel**, s'il y a un ennemi dans un rayon de 5 m, l'utilisateur attaque instantanément.`, [], "Ténèbres"),
        4: fmtPassif(`4 étoiles :`, `L'Attaque des coéquipiers de l'élément Ténèbres augmente de 10 % par membre de l'élément Ténèbres présent dans le groupe.`, [], "Ténèbres"),
        5: fmtPassif(`5 étoiles :`, `L'utilisation de l'attaque de base ou de l'attaque de noyau diminue le temps de rechargement de la compétence **Entaille fantôme** de 1.7 seconde(s).

        L'utilisation de la compétence **Courroux de la condamnation** active l'effet [Protection du Dominateur].

        L'utilisateur reçoit un [Bouclier], et l'Attaque ainsi que le Taux de coup critique augmentent de 12 % pendant 30 seconde(s) (cumulable jusqu'à 3 fois).

        Lorsqu'un membre du groupe de l'élément Ténèbres, hormis Sung Ilhwan, utilise sa compétence de base, Sung Ilhwan récupère 8 % de ses PM et remplit sa jauge de puissance de 4 %.`, [
        { title: `[Protection du Dominateur]`, content: `Confère un [Bouclier] équivalent à 100 % de l'Attaque de Sung Ilhwan.
            Durée : 20 seconde(s).` }
    ], "Ténèbres")
    },
    summaryData: {
        0: `
        <h3>Passif : Le Dominateur</h3>
        <p>Pas de regen PM naturelle. L'équipe recharge ses PM/Jauge.<br>
        Compétences cumulent <span class="buff">[Amélioration]</span> (Buff Dégâts Base/Ultime) et <span class="buff">[Balance]</span> (Buff Dégâts Courroux).<br>
        <strong>Puissance apocalyptique</strong> consomme <span class="buff">[Amélioration]</span> pour restaurer les PM.</p>
    `,
        1: `
        <h3>1 étoile</h3>
        <p>Réduction CD <strong>Entaille fantôme</strong> sur attaques.<br>
        Entrée Mode Chasseur : Dégâts <span class="element-tenebre">Ténèbres</span> <span class="stat-boost">+150%</span> (15s).<br>
        Applique <span class="buff">[Marqué]</span> (Dégâts subis +35%) -> Sur Bris devient <span class="buff">[Réprimé]</span> (Dégâts subis +50%, Ult <span class="element-tenebre">Ténèbres</span> +20%).</p>
    `,
        2: `
        <h3>2 étoiles</h3>
        <p>Les dégâts de ténèbres de l'utilisateur augmentent de <span class="stat-boost">30 %</span>.<br></p>
    `,
        3: `
        <h3>3 étoiles</h3>
        <p>Double le nombre d'attaques des compétences principales.<br>
        <strong>Transperce-ciel</strong> attaque instantanément si ennemi proche.<br></p>
    `,
        4: `
        <h3>4 étoiles</h3>
        <p>Attaque équipe <span class="element-tenebre">Ténèbres</span> <span class="stat-boost">+10%</span> par allié <span class="element-tenebre">Ténèbres</span>.<br></p>
    `,
        5: `
        <h3>5 étoiles</h3>
        <p>Réduction CD <strong>Entaille fantôme</strong> améliorée (-1.7s).<br>
        <strong>Courroux</strong> active <span class="buff">[Protection]</span> : Bouclier + Buff Atk/Crit (<span class="stat-boost">+12%</span>/stack).<br>
        Recharge PM/Jauge par l'équipe augmentée (8%/4%).</p>
    `
    },
    weaponData: {
        0: fmtWeapon(`Avancement 0 :`, `Augmente l'Attaque de l'utilisateur de 5 %.

        Augmente les Dégâts de coup critique de l'utilisateur de 5 %.`, "Ténèbres"),
        1: fmtWeapon(`Avancement 5 étoiles :`, `Augmente l'Attaque de l'utilisateur de 30 %.

        Augmente les Dégâts de coup critique de l'utilisateur de 30 %.`, "Ténèbres"),
        2: fmtWeapon(`Avancement 10 étoiles :`, `Augmente l'Attaque, la Défense et les PV de l'utilisateur de 15 %.`, "Ténèbres")
    }
};

// --- MINNIE ---
huntersData["minnie"] = {
    name: "Minnie",
    rarity: "SSR",
    element: "Ténèbres",
    gradient: "linear-gradient(90deg, #af63af, #000)",
    image: "Chasseurs_SSR/collab/tenebre/Minnie/minnie_art.png",
    weaponImage: "Chasseurs_SSR/collab/tenebre/Minnie/reve_du_papillon_mauve/Relic_Minnie_PortraitBig.png",
    weaponName: "Rêve du papillon mauve",
    fullData: {
        0: fmtPassif(`Passif :`, `Tout l'équipe reçoit l'effet [FOREVER] en arrivant dans les modes Mission Rappel et Donjon éphémère.

        L'utilisation de la compétence **Iris** réduit le temps de rechargement de la compétence **Edelweiss** de 25 seconde(s) et remplit la jauge de puissance de l'utilisatrice de 100 % (temps de rechargement : 20 seconde(s)).

        Lorsque la compétence **Iris** touche sa cible, elle applique l'effet [Lis araignée rouge].

        L'utilisation de la compétence **Edelweiss** active l'effet [Papillon mauve] et confère 3 [Pétales fanés].

        Lorsque l'utilisatrice quitte le combat, l'effet [Papillon mauve] est supprimé.`, [
        { title: `[FOREVER]`, content: `Augmente les dégâts infligés de 5 %.
            Durée : illimitée (cumulable jusqu'à 3 fois)` },
        { title: `[Lis araignée rouge]`, content: `Augmente les dégâts de ténèbres infligés par MINNIE de 30 %.
            Durée : 20 seconde(s)` },
        { title: `[Papillon mauve]`, content: `Active l'attaque de noyau 1 fois.
            Lorsque les compétences **Iris**, **Acacia** ou **Allium** touchent leur cible, elles infligent des dégâts supplémentaires équivalents à 50 % des dégâts de base.
            L'utilisation des compétences **Iris**, **Acacia** ou **Allium** supprime 1 cumul de [Pétales fanés].
            Confère [Super armure] lors de l'utilisation des compétences **Iris**, **Acacia** ou **Allium**.
            Lorsque l'effet est supprimé, les effets [Papillon mauve], [Pétales fanés], [Floraison] et [Floraison totale] sont supprimés.
            Durée : 20 seconde(s)` },
        { title: `[Pétales fanés]`, content: `Lorsque les effets sont supprimés, les temps de rechargement des compétences **Acacia** et **Allium** sont réinitialisés.
            Durée : illimitée (cumulable jusqu'à 5 fois)` }
    ], "Ténèbres"),
        1: fmtPassif(`1 étoile :`, `Lorsque l'utilisatrice rejoint le niveau, sa jauge de puissance se remplit de 100 % de sa charge maximale.

        L'effet [Pétales fanés] est amélioré.`, [
        { title: `[Pétales fanés]`, content: `Lorsque cet effet est supprimé, il réinitialise le temps de rechargement des compétences **Acacia** et **Allium**.
            Lorsque cet effet est supprimé, il active l'effet [Message des fleurs : Fragment de souvenirs].
            Durée : illimitée (cumulable jusqu'à 5 fois)` },
        { title: `[Message des fleurs : Fragment de souvenirs]`, content: `Augmente la Défense de 10 %.
            Augmente les Dégâts de coup critique de 10 %.
            Durée : 20 seconde(s) (cumulable jusqu'à 3 fois)` }
    ], "Ténèbres"),
        2: fmtPassif(`2 étoiles :`, `La Défense de l'utilisatrice augmente de 15 %.`, [], "Ténèbres"),
        3: fmtPassif(`3 étoiles :`, `L'effet [Lis araignée rouge] est amélioré.

        L'utilisation de la compétence **Acacia** active l'effet [Taux de coup critique augmenté], que l'utilisatrice réussisse ou non une Contre-attaque.`, [
        { title: `Amélioration [Lis araignée rouge]`, content: `Augmente les dégâts de ténèbres infligés par MINNIE de 50 %.
            Durée : 20 seconde(s)` },
        { title: `[Taux de coup critique augmenté]`, content: `Augmente le taux de coup critique de 30 %.
            Durée : 20 seconde(s)` }
    ], "Ténèbres"),
        4: fmtPassif(`4 étoiles :`, `Les dégâts de compétence de base de l'utilisatrice augmentent de 20 %.`, [], "Ténèbres"),
        5: fmtPassif(`5 étoiles :`, `L'utilisation de la compétence **Edelweiss** confère désormais 5 [Pétales fanés].

        L'effet [Message des fleurs : Fragment de souvenirs] est amélioré.`, [
        { title: `Amélioration [Message des fleurs : Fragment de souvenirs]`, content: `Augmente la Défense de 20 %.
            Augmente les Dégâts de coup critique de 20 %.
            Durée : 20 seconde(s) (cumulable jusqu'à 3 fois)` }
    ], "Ténèbres")
    },
    summaryData: {
        0: `
        <h3>Passif : Rêve Floral</h3>
        <p>Mode spécial : Buff <span class="buff">[FOREVER]</span> (Dégâts +5%).<br>
        Iris reset Edelweiss + 100% Jauge + <span class="buff">[Lis araignée rouge]</span> (Dégâts <span class="element-tenebre">Ténèbres</span> +30%).<br>
        Edelweiss active <span class="buff">[Papillon mauve]</span> (Dégâts bonus, Super armure) + 3 <span class="buff">[Pétales fanés]</span>.</p>
    `,
        1: `
        <h3>1 étoile</h3>
        <p>Entrée : Jauge 100%.<br>
        <span class="buff">[Pétales fanés]</span> (fin) active <span class="buff">[Message des fleurs]</span> (Déf +10%, Crit Dmg +10%).</p>
    `,
        2: `
        <h3>2 étoiles</h3>
        <p>La Défense de l'utilisatrice augmente de <span class="stat-boost">15 %</span>.<br></p>
    `,
        3: `
        <h3>3 étoiles</h3>
        <p><span class="buff">[Lis araignée rouge]</span> amélioré : Dégâts <span class="element-tenebre">Ténèbres</span> <span class="stat-boost">+50%</span>.<br>
        Acacia active <span class="buff">[Taux Crit augmenté]</span> (+30%).</p>
    `,
        4: `
        <h3>4 étoiles</h3>
        <p>Dégâts <span class="keyword-orange">compétence de base</span> <span class="stat-boost">+20%</span>.<br></p>
    `,
        5: `
        <h3>5 étoiles</h3>
        <p>Edelweiss donne 5 <span class="buff">[Pétales]</span>.<br>
        <span class="buff">[Message des fleurs]</span> amélioré : Déf +20%, Crit Dmg +20%.</p>
    `
    },
    weaponData: {
        0: fmtWeapon(`Avancement 0 :`, `La Défense de l'utilisatrice augmente de 5 %, et son Taux de coup critique ainsi que ses Dégâts de coup critique augmentent de 2.5 %.`, "Ténèbres"),
        1: fmtWeapon(`Avancement 5 étoiles :`, `La Défense de l'utilisatrice augmente de 12 %, et son Taux de coup critique ainsi que ses Dégâts de coup critique augmentent de 15 %.`, "Ténèbres"),
        2: fmtWeapon(`Avancement 10 étoiles :`, `Augmente l'Attaque, la Défense et les PV de 15 %.`, "Ténèbres")
    }
};