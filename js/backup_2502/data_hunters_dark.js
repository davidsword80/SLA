if (typeof huntersData === 'undefined') { 
    var huntersData = {}; 
}

// --- HWANG DONGSUK ---
huntersData["hwang-dongsuk"] = {
    name: "Hwang Dongsuk",
    rarity: "SR",
    element: "Ténèbres",
    gradient: "linear-gradient(90deg, #8e44ad, #000)", // Dégradé violet/noir pour les ténèbres
    image: "Chasseurs_SR/tenebre/hwang_dongsuk/HwangDongsuk_Portrait_Body.png",
    weaponImage: "Chasseurs_SR/tenebre/hwang_dongsuk/pilleur_d_ame/Relic_HwangDongsuk_PortraitBig.png",
    weaponName: "Pilleur d'âme",
    fullData: {
        0: `
        <h3>Passif :</h3>
        <p>Si les PV de l'utilisateur sont à 75% ou au-dessus, les dégâts de compétence augmentent de <span class="stat-boost">16%</span>.<br>
        Si les PV de l'utilisateur sont inférieurs à 50%, applique l'effet <span class="buff">[Vitalité du lézard]</span>.<br></p>
        <div class="detail-box">
            <h4><span class="buff">[Vitalité du lézard]</span></h4>
            <p>Récupère <span class="stat-boost">2.5%</span> de ses PV toutes les 1 seconde(s) (s'active une fois par niveau).<br>
            Durée: 10 seconde(s)</p>
        </div>
    `,
        1: `
        <h3>1 étoile :</h3>
        <p>Lors de l'utilisation de la compétence <strong>Amélioration</strong>, le temps de rechargement de la compétence <strong>Bouclier ardent</strong> se réinitialise.<br>
        Tant que la compétence <span class="buff">[Amélioration]</span> reste activé, le temps de rechargement de la compétence <strong>Bouclier ardent</strong> diminue de <span class="stat-boost">50%</span>.<br></p>
    `,
        2: `
        <h3>2 étoiles :</h3>
        <p>Les PV de l'utilisateur augmentent de <span class="stat-boost">8%</span>.<br></p>
    `,
        3: `
        <h3>3 étoiles :</h3>
        <p>Lors de l'utilisation de la compétence <strong>Amélioration</strong>, un <span class="buff">[Bouclier]</span> est appliqué.<br></p>
        <div class="detail-box">
            <h4><span class="buff">[Bouclier]</span></h4>
            <p>Crée un <span class="buff">[Bouclier]</span> équivalent à <span class="stat-boost">20%</span> des PV max de l'utilisateur.<br>
            Durée: 10 seconde(s)</p>
        </div>
    `,
        4: `
        <h3>4 étoiles :</h3>
        <p>Le temps de rechargement de <strong>Attaque redoutable</strong> diminue de <span class="stat-boost">25%</span>.<br></p>
    `,
        5: `
        <h3>5 étoiles :</h3>
        <p>Lors de l'utilisation de <strong>Attaque redoutable</strong>, l'utilisateur a <span class="stat-boost">50%</span> de chances de réinitialiser le temps de rechargement de la compétence <strong>Attaque redoutable</strong>.<br>
        (Temps de rechargement: 30 seconde(s))</p>
    `
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
        0: `
        <h3>Avancement 0 :</h3>
        <p>Augmente les PV de l'utilisateur de <span class="stat-boost">2%</span>.<br>
        Lorsque l'utilisateur arrive dans un niveau, sa jauge de puissance se remplit de <span class="stat-boost">25%</span>.<br>
        Lorsqu'<strong>Attaque redoutable</strong> touche sa cible, les dégâts de ténèbres subis par la cible augmentent de <span class="stat-boost">1%</span> pendant 15 seconde(s) (cumulable jusqu'à 2 fois).<br></p>
    `,
        1: `
        <h3>Avancement 5 étoiles :</h3>
        <p>Augmente les PV de l'utilisateur de <span class="stat-boost">8 %</span>.<br>
        Lorsque l'utilisateur arrive dans un niveau, sa jauge de puissance se remplit de <span class="stat-boost">100%</span>.<br>
        Lorsqu'<strong>Attaque redoutable</strong> touche sa cible, les dégâts de ténèbres subis par la cible augmentent de <span class="stat-boost">6 %</span> pendant 15 seconde(s) (cumulable jusqu'à 2 fois).<br></p>
    `,
        2: `
        <h3>Avancement 10 étoiles :</h3>
        <p>Augmente l'Attaque, la Défense et les PV de l'utilisateur de <span class="stat-boost">15%</span>.<br></p>
    `
    }
};

// --- KANG TAESHIK ---
huntersData["kang-taeshik"] = {
    name: "Kang Taeshik",
    rarity: "SR",
    element: "Ténèbres",
    gradient: "linear-gradient(90deg, #8e44ad, #000)",
    image: "Chasseurs_SR/tenebre/kang_taeshik/KangTaeshik_Portrait_Body.png",
    weaponImage: "Chasseurs_SR/tenebre/kang_taeshik/frenesie_inarretable/Relic_KangTaeShik_PortraitBig.png",
    weaponName: "Frénésie Inarrêtable",
    fullData: {
        0: `
        <h3>Passif :</h3>
        <p>Lorsque les compétences <strong>Lancer de dague</strong>, <strong>Recherche</strong> ou <strong>Assaut</strong> touchent leurs cibles, elles leur appliquent l'effet <span class="buff">[Hémorragie]</span>.<br></p>
        <div class="detail-box">
            <h4><span class="buff">[Hémorragie]</span></h4>
            <p>L'utilisateur inflige des dégâts équivalents à <span class="stat-boost">0.6%</span> des PV actuels de la cible toutes les 3 seconde(s).<br>
            Durée: 30 seconde(s)</p>
        </div>
    `,
        1: `
        <h3>1 étoile :</h3>
        <p>Augmente l'Attaque face aux cibles affectées par <span class="buff">[Hémorragie]</span>.<br></p>
        <div class="detail-box">
            <h4><span class="buff">[Attaque augmentée]</span></h4>
            <p>Augmente l'Attaque de l'utilisateur de <span class="stat-boost">15%</span>.<br>
            Durée: 10 seconde(s)</p>
        </div>
    `,
        2: `
        <h3>2 étoiles :</h3>
        <p>Augmente l'Attaque de l'utilisateur de <span class="stat-boost">5%</span>.<br></p>
    `,
        3: `
        <h3>3 étoiles :</h3>
        <p>Lorsque la compétence <strong>Recherche</strong> touche une cible affectée par <span class="buff">[Hémorragie]</span>, elle lui applique l'effet Augmentation des dégâts subis.<br></p>
        <div class="detail-box">
            <h4><span class="buff">[Dégâts subis augmentés]</span></h4>
            <p>Les dégâts subis par la cible augmentent de <span class="stat-boost">15%</span>.<br>
            Durée: 10 seconde(s)</p>
        </div>
    `,
        4: `
        <h3>4 étoiles :</h3>
        <p>Le temps de rechargement des compétences de Taeshik diminue de <span class="stat-boost">10%</span>.<br></p>
    `,
        5: `
        <h3>5 étoiles :</h3>
        <p>Lorsque Taeshik utilise <strong>Camouflage</strong> face à une cible affectée par <span class="buff">[Hémorragie]</span>, les dégâts augmentent de <span class="stat-boost">100%</span>.<br></p>
    `
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
        0: `
        <h3>Avancement 0 :</h3>
        <p>Augmente les dégâts des attaques dans le dos de l'utilisateur de <span class="stat-boost">2.5 %</span>.<br>
        Les dégâts de Kang Taeshik face aux cibles affectées par <span class="buff">[Hémorragie]</span> augmentent de <span class="stat-boost">2.5%</span>.<br></p>
    `,
        1: `
        <h3>Avancement 5 étoiles :</h3>
        <p>Augmente les dégâts des attaques dans le dos de l'utilisateur de <span class="stat-boost">10%</span>.<br>
        Les dégâts de Kang Taeshik face aux cibles affectées par <span class="buff">[Hémorragie]</span> augmentent de <span class="stat-boost">10%</span>.<br></p>
    `,
        2: `
        <h3>Avancement 10 étoiles :</h3>
        <p>Augmente l'Attaque, la Défense et les PV de l'utilisateur de <span class="stat-boost">15%</span>.<br></p>
    `
    }
};

// --- BAEK YUNHO À CRINIÈRE ARGENTÉE ---
huntersData["baek_yunho_a_criniere_argentee"] = {
    name: "Baek Yunho (Crinière argentée)",
    rarity: "SSR",
    element: "Ténèbres",
    gradient: "linear-gradient(90deg, #8e44ad, #000)",
    image: "Chasseurs_SSR/tenebre/Baek_yunho_a_criniere_argentee/baek_art.png",
    weaponImage: "Chasseurs_SSR/tenebre/Baek_yunho_a_criniere_argentee/ame_d_un_tigre_blanc_hurlant/Relic_BaekYoonHo_PortraitBig.png",
    weaponName: "Âme d'un tigre blanc hurlant",
    fullData: {
        0: `
        <h3>Passif :</h3>
        <p>Les dégâts de compétence de l'utilisateur augmentent proportionnellement à hauteur de <span class="stat-boost">50%</span> du ratio de PV perdus par l'utilisateur.<br>
        Lorsque les compétences <strong>Massacre</strong> ou <strong>Approche violente</strong> touchent leur cible, elles lui appliquent l'effet <span class="buff">[Hémorragie]</span>.<br>
        Applique l'effet <span class="buff">[Malédiction de la bête magique]</span> aux cibles immunisées contre l'effet <span class="buff">[Hémorragie]</span>.<br>
        Les dégâts des compétences <strong>Griffes de bête magique</strong> et <strong>Massacre</strong> augmentent de <span class="stat-boost">60%</span> face à des cibles affectées par les effets <span class="buff">[Hémorragie ou Malédiction de la bête magique]</span>.<br></p>
        <div class="detail-box">
            <h4><span class="buff">[Hémorragie]</span></h4>
            <p>Inflige des dégâts équivalents à <span class="stat-boost">1%</span> des PV actuels de l'utilisateur toutes les 3 secondes.<br>
            Durée: 30 seconde(s)</p>
        </div>
        <div class="detail-box">
            <h4><span class="buff">[Malédiction de la bête magique]</span></h4>
            <p>Inflige des dégâts équivalents à <span class="stat-boost">200 %</span> des PV max de Baek Yunho à crinière argentée toutes les 3 secondes.<br>
            Durée: 30 seconde(s)</p>
        </div>
    `,
        1: `
        <h3>1 étoile :</h3>
        <p>Lors de l'utilisation de la compétence <strong>Attaque extrême: Forme animale</strong>, le Taux de coup critique et les Dégâts de coup critique augmentent de <span class="stat-boost">3%</span> toutes les 1 seconde(s) pendant 12 seconde(s).<br>
        Lors de l'utilisation de la compétence <strong>Attaque extrême: Forme animale</strong>, les dégâts subis augmentent à hauteur de <span class="stat-boost">10%</span> des PV actuels de l'utilisateur, mais il profite d'un <span class="buff">[Bouclier]</span> équivalent à <span class="stat-boost">20%</span> de ses PV max.<br>
        <strong>Attaque extrême: Forme animale</strong> ignore l'effet de <span class="buff">[Bouclier]</span> de l'utilisateur et inflige des dégâts à l'utilisateur.<br>
        Lorsque les PV de l'utilisateur sont à <span class="stat-boost">30%</span> ou moins, les dégâts subis par l'utilisateur de <span class="stat-boost">15%</span>.<br></p>
    `,
        2: `
        <h3>2 étoiles :</h3>
        <p>Les PV de l'utilisateur augmentent de <span class="stat-boost">16%</span>.<br></p>
    `,
        3: `
        <h3>3 étoiles :</h3>
        <p>L'utilisateur débute le combat avec <span class="stat-boost">50%</span> de PV en moins.<br>
        Au début du combat, l'utilisateur bénéficie d'un <span class="buff">[Bouclier]</span> équivalent à <span class="stat-boost">60%</span> de ses PV max.<br>
        Durée: illimitée</p>
    `,
        4: `
        <h3>4 étoiles :</h3>
        <p>Les dégâts de l'Attaque de base de l'utilisateur augmentent de <span class="stat-boost">80%</span>.<br></p>
    `,
        5: `
        <h3>5 étoiles :</h3>
        <p>L'augmentation des dégâts de compétence de l'utilisateur passent à <span class="stat-boost">120%</span> du ratio de PV perdus.<br></p>
    `
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
        0: `
        <h3>Avancement 0 :</h3>
        <p>Augmente les dégâts de lumière de l'utilisateur de <span class="stat-boost">4%</span>.<br>
        Face à des cibles affectées par l'effet <span class="buff">[Flammes blanches]</span>, la Défense de l'utilisateur augmente de <span class="stat-boost">5%</span> pendant 20 seconde(s).<br>
        (Temps de rechargement: 30 seconde(s))</p>
    `,
        1: `
        <h3>Avancement 5 étoiles :</h3>
        <p>Augmente les dégâts de lumière de l'utilisateur de <span class="stat-boost">12%</span>.<br>
        Face à des cibles affectées par l'effet <span class="buff">[Flammes blanches]</span>, la Défense de l'utilisateur augmente de <span class="stat-boost">20 %</span> pendant 20 seconde(s).<br>
        (Temps de rechargement: 30 seconde(s))</p>
    `,
        2: `
        <h3>Avancement 10 étoiles :</h3>
        <p>Augmente l'Attaque, la Défense et les PV de l'utilisateur de <span class="stat-boost">15%</span>.<br></p>
    `
    }
};

// --- CHARLOTTE ---
huntersData["charlotte"] = {
    name: "Charlotte",
    rarity: "SSR",
    element: "Ténèbres",
    gradient: "linear-gradient(90deg, #8e44ad, #000)",
    image: "Chasseurs_SSR/tenebre/charlotte/charlotte_art.png",
    weaponImage: "Chasseurs_SSR/tenebre/charlotte/farceuse/Relic_Charlotte_PortraitBig.png",
    weaponName: "Farceuse",
    fullData: {
        0: `
        <h3>Passif :</h3>
        <p>Lors de l'utilisation de <strong>Ruée</strong>, cette dernière devient une compétence à effet de charge dont la trajectoire peut être contrôlée.<br>
        Lorsque le mode d'attaque de cette Ruée est actif, Charlotte obtient un <span class="buff">[Bouclier]</span> équivalent à <span class="stat-boost">20%</span> de sa défense tant que la Ruée est activée.<br>
        <strong>Prends ça !</strong> devient disponible après avoir utilisé 2 fois des attaques de base de palier 3, contrairement à la règle habituelle qui demande de charger la jauge de puissance en utilisant des compétences et supprime le temps de rechargement.<br>
        (Temps de rechargement: 40 seconde(s))<br>
        Lors de <strong>Prends ça !</strong>, la compétence augmente les dégâts de <strong>Harper! À l'aide !</strong> de <span class="stat-boost">50 %</span> pendant 10 seconde(s)<br>
        La stat de Dégâts de coup critique de l'utilisatrice augmente à hauteur de <span class="stat-boost">10%</span> de la stat de dégâts augmentés.<br></p>
    `,
        1: `
        <h3>1 étoile :</h3>
        <p>Après avoir utilisé une attaque de base de palier 3 1 fois, <strong>Prends ça !</strong> devient disponible.<br>
        (Temps de rechargement: 20 seconde(s)).<br>
        Lors de <strong>Danse disla</strong>, cette compétence augmente les dégâts de ténèbres de <span class="stat-boost">15%</span> pendant 20 seconde(s).<br></p>
    `,
        2: `
        <h3>2 étoiles :</h3>
        <p>Augmente la Défense de l'utilisatrice de <span class="stat-boost">12%</span>.<br></p>
    `,
        3: `
        <h3>3 étoiles :</h3>
        <p><strong>Prends ça!</strong> devient <strong>Harper! Nous ne faisons qu'un!</strong> <br>
        lorsque Harper prête assistance.<br>
        Les dégâts de l'utilisatrice augmentent aussi de <span class="stat-boost">70%</span></p>
    `,
        4: `
        <h3>4 étoiles :</h3>
        <p>Les attaques de base sont plus rapides et leurs dégâts augmentent de <span class="stat-boost">60%</span>.<br></p>
    `,
        5: `
        <h3>5 étoiles :</h3>
        <p>Lors d'une attaque de base,, l'utilisatrice active l'effet <span class="buff">[Reconnaissance de la poupée]</span>.<br></p>
        <div class="detail-box">
            <h4><span class="buff">[Reconnaissance de la poupée]</span></h4>
            <p>Augmente les dégâts de <strong>Harper ! Nous ne faisons qu'un!</strong> et <strong>Harper! A l'aide !</strong> de <span class="stat-boost">8%</span>.<br>
            Durée: illimitée Cumulable jusqu'à 15 fois.)</p>
        </div>
    `
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
        Danse disla : Dégâts Ténèbres <span class="stat-boost">+15%</span>.<br></p>
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
        0: `
        <h3>Avancement 0 :</h3>
        <p>Augmente la Défense de l'utilisatrice de <span class="stat-boost">2%</span>.<br>
        Augmente le Taux de coup critique et les Dégâts de coup critique de <strong>Prends ça !</strong>, <strong>Harper ! Nous ne faisons qu'un!</strong> et <strong>Harper ! À l'aide !</strong> de <span class="stat-boost">4%</span>.<br></p>
    `,
        1: `
        <h3>Avancement 5 étoiles :</h3>
        <p>Augmente la Défense de l'utilisatrice de <span class="stat-boost">12%</span>.<br>
        Augmente le Taux de coup critique et les Dégâts de coup critique de <strong>Prends ça !</strong>, <strong>Harper! Nous ne faisons qu'un!</strong> et <strong>Harper! À l'aide !</strong> de <span class="stat-boost">24%</span>.<br></p>
    `,
        2: `
        <h3>Avancement 10 étoiles :</h3>
        <p>Augmente l'Attaque, la Défense et les PV de l'utilisateur de <span class="stat-boost">15%</span>.<br></p>
    `
    }
};

// --- HARPER ---
huntersData["harper"] = {
    name: "Harper",
    rarity: "SSR",
    element: "Ténèbres",
    gradient: "linear-gradient(90deg, #8e44ad, #000)",
    image: "Chasseurs_SSR/tenebre/harper/harper_art.png",
    weaponImage: "Chasseurs_SSR/tenebre/harper/espiegle/Relic_Harper_PortraitBig.png",
    weaponName: "Espiègle",
    fullData: {
        0: `
        <h3>Passif :</h3>
        <p>L'effet <span class="buff">[Super boost magique]</span> est activé au début du combat.<br>
        Lors de <strong>Dérapage au marteau!</strong>, cette compétence active l'effet <span class="buff">[London Drift]</span>.<br></p>
        <div class="detail-box">
            <h4><span class="buff">[Super boost magique]</span></h4>
            <p>Lors de <strong>Dérapage au marteau!</strong>, cette compétence augmente le Taux de coup critique et les Dégâts de coup critique de <span class="stat-boost">5%</span>.<br>
            (Cumulable jusqu'à 4 fois.)<br>
            Durée: illimitée</p>
        </div>
        <div class="detail-box">
            <h4><span class="buff">[La dérive de Londres]</span></h4>
            <p>Augmente les dégâts infligés de <span class="stat-boost">20 %</span>.<br>
            Durée: 10 seconde(s)</p>
        </div>
    `,
        1: `
        <h3>1 étoile :</h3>
        <p>L'utilisation de <strong>L'attendrisseur!</strong> octroie un <span class="buff">[Bouclier]</span> équivalent à <span class="stat-boost">50%</span> des PV de l'utilisatrice.<br>
        Le nombre max de coups de <strong>L'attendrisseur!</strong> augmente de 4 et les dégâts de compétence augmentent de <span class="stat-boost">120%</span>.<br></p>
    `,
        2: `
        <h3>2 étoiles :</h3>
        <p>L'efficacité de <span class="buff">[Bris]</span> augmente de <span class="stat-boost">20%</span>.<br></p>
    `,
        3: `
        <h3>3 étoiles :</h3>
        <p>Lors de <strong>Dérapage au marteau !</strong>, l'utilisatrice attaque instantanément les ennemis dans un rayon de 5 m.<br>
        <span class="buff">[London Drift]</span> est amélioré.<br>
        <strong>Mjöllnir de Harper</strong> devient <strong>Mjöllnir de Harper et Charlotte</strong>.<br>
        Les dégâts de compétence ultime de l'utilisatrice augmentent de <span class="stat-boost">70%</span>.<br></p>
        <div class="detail-box">
            <h4><span class="buff">[La dérive de Londres]</span></h4>
            <p>Augmente les dégâts infligés de <span class="stat-boost">60%</span>.<br>
            Durée: 15 seconde(s)</p>
        </div>
    `,
        4: `
        <h3>4 étoiles :</h3>
        <p>La Défense et les PV de tous les membres de l'équipe augmentent de <span class="stat-boost">8%</span>.<br></p>
    `,
        5: `
        <h3>5 étoiles :</h3>
        <p><strong>Petits morceaux</strong> est amélioré.<br>
        <span class="buff">[Super boost magique]</span> devient <span class="buff">[Super boost magique des jumelles]</span>.<br></p>
        <div class="detail-box">
            <h4><span class="buff">[Petits morceaux]</span></h4>
            <p>Les dégâts de compétence ultime subis par les chasseurs d'élément Ténèbres augmentent de <span class="stat-boost">2%</span>.<br>
            (Cumulable jusqu'à 16 fois.)<br>
            Durée: 30 seconde(s)</p>
        </div>
        <div class="detail-box">
            <h4><span class="buff">[Super boost magique des jumelles]</span></h4>
            <p>Lors de <strong>Dérapage au marteau !</strong>, la compétence augmente le Taux de coup critique et les Dégâts de coup critique de l'utilisatrice de <span class="stat-boost">6%</span>.<br>
            (Cumulable jusqu'à 7 fois.)<br>
            Durée: illimitée</p>
        </div>
    `
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
        <p><span class="buff">[Petits morceaux]</span> : Debuff Ulti Ténèbres (<span class="stat-boost">+2%</span> par cumul, max 16).<br>
        <span class="buff">[Super boost jumelles]</span> : Crit Rate/Dmg <span class="stat-boost">+6%</span> (Max 7).<br></p>
    `
    },
    weaponData: {
        0: `
        <h3>Avancement 0 :</h3>
        <p>Les PV de l'utilisatrice augmentent de <span class="stat-boost">4%</span>.<br>
        Lors de l'utilisation de la Compétence ultime, les dégâts de ténèbres des membres de son équipe augmentent de <span class="stat-boost">4%</span> pendant 30 seconde(s).<br></p>
    `,
        1: `
        <h3>Avancement 5 étoiles :</h3>
        <p>Les PV de l'utilisatrice augmentent de <span class="stat-boost">12%</span>.<br>
        Lors de l'utilisation de la Compétence ultime, les dégâts de ténèbres des membres de son équipe augmentent de <span class="stat-boost">12%</span> pendant 30 seconde(s).<br></p>
    `,
        2: `
        <h3>Avancement 10 étoiles :</h3>
        <p>Augmente l'Attaque, la Défense et les PV de l'utilisateur de <span class="stat-boost">15%</span>.<br></p>
    `
    }
};

// --- ISLA WRIGHT ---
huntersData["isla-wright"] = {
    name: "Isla Wright",
    rarity: "SSR",
    element: "Ténèbres",
    gradient: "linear-gradient(90deg, #8e44ad, #000)",
    image: "Chasseurs_SSR/tenebre/isla_wright/isla_art.png",
    weaponImage: "Chasseurs_SSR/tenebre/isla_wright/chance_impromptue/Relic_IslaWright_PortraitBig.png",
    weaponName: "Chance impromptue",
    fullData: {
        0: `
        <h3>Passif :</h3>
        <p>Lors de l'utilisation du Stade 3 de son attaque de base, l'utilisatrice charge sa jauge de puissance de <span class="stat-boost">100%</span>.<br>
        Lors de l'utilisation de <strong>Nova de la Mort</strong>, la compétence <strong>Arcane: le Monde</strong> devient <strong>Arcane : la Mort</strong>.<br>
        Lors de l'utilisation de la compétence <strong>Urgence cosmique</strong>, la compétence <strong>Arcane : la Mort</strong> devient <strong>Arcane: le Monde</strong>.<br></p>
    `,
        1: `
        <h3>1 étoile :</h3>
        <p>Lors de l'utilisation de la compétence <strong>Nova de la Mort</strong>, l'utilisatrice charge la jauge de puissance du deuxième personnage de l'équipe de <span class="stat-boost">60%</span> et réduit le temps de rechargement de sa compétence ultime de 20 seconde(s).<br>
        Améliore l'effet <span class="buff">[La Tour]</span>.<br></p>
        <div class="detail-box">
            <h4><span class="buff">[La Tour]</span></h4>
            <p>Augmente les dégâts élémentaires de ténèbres infligés par les membres de type Ténèbres de <span class="stat-boost">10%</span>.<br>
            Durée: 16 seconde(s)</p>
        </div>
    `,
        2: `
        <h3>2 étoiles :</h3>
        <p>Augmente la Vitesse de toute l'équipe de <span class="stat-boost">10%</span> et l'immunise contre l'effet <span class="buff">[Ralenti]</span>.<br>
        Augmente la Défense de toute l'équipe de <span class="stat-boost">5%</span>.<br></p>
    `,
        3: `
        <h3>3 étoiles :</h3>
        <p>Lors de l'utilisation de la compétence <strong>Horoscope, Étoiles contraires</strong>, les effets <span class="buff">[La Force, Le Magicien et La Roue de la Fortune]</span> s'activent.<br></p>
    `,
        4: `
        <h3>4 étoiles :</h3>
        <p>Les dégâts élémentaires de ténèbres des membres de type Ténèbres augmentent de <span class="stat-boost">3%</span> et les dégâts qu'ils subissent diminuent de <span class="stat-boost">3%</span> (cumulable jusqu'à 3 fois) par chasseur de l'élément Ténèbres présent dans l'équipe.<br></p>
    `,
        5: `
        <h3>5 étoiles :</h3>
        <p>Les effets <span class="buff">[Le Monde et La Mort]</span> sont améliorés.<br></p>
        <div class="detail-box">
            <h4><span class="buff">[Le Monde]</span></h4>
            <p>Des PV équivalents à <span class="stat-boost">25%</span> de la Défense d'Isla Wright sont instantanément restaurés pour toute l'équipe.<br>
            Octroie à toute l'équipe un <span class="buff">[Bouclier]</span> équivalent à <span class="stat-boost">25%</span> de la Défense d'Isla Wright.<br>
            Durée: 8 seconde(s)</p>
        </div>
        <div class="detail-box">
            <h4><span class="buff">[La Mort]</span></h4>
            <p>Augmente la stat d'augmentation des dégâts de toute l'équipe de <span class="stat-boost">12%</span> de la stat d'augmentation des dégâts d'Isla Wright.<br>
            Si un chasseur de l'élément Ténèbres est présent dans le groupe, les dégâts de compétence ultime de toute l'équipe augmentent de <span class="stat-boost">32%</span>.<br>
            L'effet <span class="buff">[Guide de la Mort]</span> est appliqué à toute l'équipe.<br>
            Durée: 16 seconde(s)</p>
        </div>
        <div class="detail-box">
            <h4><span class="buff">[Guide de la Mort]</span></h4>
            <p>Augmente les dégâts de <span class="stat-boost">0.2%</span> chaque fois que les PV de la cible baissent de 1% (cumulable jusqu'à 16 %).<br>
            Durée: 16 seconde(s)</p>
        </div>
    `
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
        <span class="buff">[La Tour]</span> : Dégâts Ténèbres <span class="stat-boost">+10%</span> pour alliés Ténèbres.</p>
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
        <p>Buff Ténèbres (Dégâts/Réduction Dégâts) par allié Ténèbres (<span class="stat-boost">+/-3%</span> par allié).</p>
    `,
        5: `
        <h3>5 étoiles</h3>
        <p><span class="buff">[Le Monde]</span> : Soin + Bouclier (<span class="stat-boost">25%</span> Def Isla).<br>
        <span class="buff">[La Mort]</span> : Boost Dégâts Ultime Ténèbres (<span class="stat-boost">+32%</span>) + <span class="buff">[Guide]</span> (Exécution <span class="stat-boost">+0.2%</span> par 1% PV perdu).</p>
    `
    },
    weaponData: {
        0: `
        <h3>Avancement 0 :</h3>
        <p>Augmente la Défense de l'utilisatrice de <span class="stat-boost">0.5%</span>.<br>
        La Défense de toute l'équipe augmente de <span class="stat-boost">0.5%</span> par chasseur de l'élément Ténèbres présent dans l'équipe.<br>
        Réduit le temps de rechargement de la compétence ultime d'Isla Wright de 4 seconde(s).<br></p>
    `,
        1: `
        <h3>Avancement 5 étoiles :</h3>
        <p>Augmente la Défense de l'utilisatrice de <span class="stat-boost">4%</span>.<br>
        La Défense de toute l'équipe augmente de <span class="stat-boost">4%</span> par chasseur de l'élément Ténèbres présent dans l'équipe.<br>
        Réduit le temps de rechargement de la compétence ultime d'Isla Wright de 20 seconde(s).<br></p>
    `,
        2: `
        <h3>Avancement 10 étoiles :</h3>
        <p>Augmente l'Attaque, la Défense et les PV de l'utilisateur de <span class="stat-boost">15%</span>.<br></p>
    `
    }
};

// --- LEE BORA ---
huntersData["lee-bora"] = {
    name: "Lee Bora",
    rarity: "SSR",
    element: "Ténèbres",
    gradient: "linear-gradient(90deg, #8e44ad, #000)",
    image: "Chasseurs_SSR/tenebre/lee_bora/lee_art.png",
    weaponImage: "Chasseurs_SSR/tenebre/lee_bora/logique_imparable/Relic_LeeBora_PortraitBig.png",
    weaponName: "Logique Imparable",
    fullData: {
        0: `
        <h3>Passif :</h3>
        <p>Lorsque l'Attaque de noyau ou la compétence <strong>Tempête</strong> touchent leur cible, l'effet <span class="buff">[Talisman]</span> est infligé à la cible.<br></p>
        <div class="detail-box">
            <h4><span class="buff">[Talisman]</span></h4>
            <p>Les dégâts subis par la cible augmentent de <span class="stat-boost">15%</span>.<br>
            Durée: 15 seconde(s)</p>
        </div>
    `,
        1: `
        <h3>1 étoile :</h3>
        <p>Modification des effets de la compétence <strong>Talisman d'invocation: Renard fantomatique</strong> Lors de l'utilisation de <span class="buff">[Renards fantomatiques]</span>, 3 renards sont invoqués.<br>
        Augmente les dégâts de chaque Renard fantomatique de <span class="stat-boost">50%</span>.<br></p>
    `,
        2: `
        <h3>2 étoiles :</h3>
        <p>Les dégâts de coup critique et le Taux de coup critique de l'utilisatrice augmentent de <span class="stat-boost">6 %</span>.<br></p>
    `,
        3: `
        <h3>3 étoiles :</h3>
        <p>Modification des effets de la compétence <strong>Talisman de renforcement</strong> Peut être utilisée jusqu'à 2 fois.<br>
        La portée et les dégâts de la compétence augmentent de <span class="stat-boost">40%</span>.<br></p>
    `,
        4: `
        <h3>4 étoiles :</h3>
        <p>Réduit le temps de rechargement de <strong>Talisman de ténèbres: Meg</strong> de <span class="stat-boost">25%</span>.<br></p>
    `,
        5: `
        <h3>5 étoiles :</h3>
        <p>Les dégâts de base des petits Meg de <strong>Talisman de ténèbres: Meg</strong> augmentent de <span class="stat-boost">75%</span>.<br></p>
    `
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
        0: `
        <h3>Avancement 0 :</h3>
        <p>Augmente l'Attaque de l'utilisateur de <span class="stat-boost">2.5%</span>.<br>
        Lorsque l'utilisateur touche des cibles avec <strong>Talisman de renforcement</strong>, ses Dégâts de coup critique et son Taux de coup critique augmentent de <span class="stat-boost">2.5%</span> pendant 10 seconde(s) face à celles-ci.<br></p>
    `,
        1: `
        <h3>Avancement 5 étoiles :</h3>
        <p>Augmente l'Attaque de l'utilisateur de <span class="stat-boost">10%</span>.<br>
        Les Dégâts de coup critique et le Taux de coup critique augmentent de <span class="stat-boost">10%</span> pendant 10 seconde(s) face aux cibles touchées par <strong>Talisman de renforcement</strong>.<br></p>
    `,
        2: `
        <h3>Avancement 10 étoiles :</h3>
        <p>Augmente l'Attaque, la Défense et les PV de l'utilisateur de <span class="stat-boost">15%</span>.<br></p>
    `
    }
};

// --- LIM TAEGYU ---
huntersData["lim-taegyu"] = {
    name: "Lim Taegyu",
    rarity: "SSR",
    element: "Ténèbres",
    gradient: "linear-gradient(90deg, #8e44ad, #000)",
    image: "Chasseurs_SSR/tenebre/lim_taegyu/LimTaeGyu_Portrait_Body.png",
    weaponImage: "Chasseurs_SSR/tenebre/lim_taegyu/interception/Relic_LimTaegyu_PortraitBig.png",
    weaponName: "Interception",
    fullData: {
        0: `
        <h3>Passif :</h3>
        <p>Lors de l'utilisation d'<strong>Explosion aérienne</strong>, l'utilisateur applique l'effet <span class="buff">[Boost magique]</span>.<br></p>
        <div class="detail-box">
            <h4><span class="buff">[Boost magique]</span></h4>
            <p>Lorsque la compétence touche sa cible, l'utilisateur tire 3 flèches magiques.<br>
            Lorsque l'Attaque de base de l'utilisateur touche sa cible, 2 flèches magiques sont tirées.<br>
            Dégâts: inflige des dégâts équivalents à <span class="stat-boost">120 %</span> de l'Attaque de l'utilisateur par flèche.<br>
            Les dégâts des Attaques de noyau, de <strong>Typhon ardent</strong> et d'<strong>Attaque rapide : Typhon ardent</strong> augmentent de <span class="stat-boost">30%</span>.<br>
            Durée: 15 seconde(s)</p>
        </div>
    `,
        1: `
        <h3>1 étoile :</h3>
        <p>Améliore l'effet de compétence <strong>Manœuvre de tir</strong>.<br>
        La vitesse et les dégâts de compétence de l'utilisateur augmentent de <span class="stat-boost">25%</span>, et l'effet est utilisable jusqu'à 3 fois.<br></p>
    `,
        2: `
        <h3>2 étoiles :</h3>
        <p>Augmente l'efficacité de <span class="buff">[Bris]</span> de l'utilisateur de <span class="stat-boost">20%</span>.<br></p>
    `,
        3: `
        <h3>3 étoiles :</h3>
        <p>Lorsque l'effet <span class="buff">[Boost magique]</span> est actif, les effets des Attaques de noyau, de <strong>Typhon ardent</strong> et d'<strong>Attaque rapide: Typhon ardent</strong> augmentent de <span class="stat-boost">50%</span>.<br>
        Lors de l'utilisation de <strong>Manœuvre de tir</strong>, l'effet <span class="buff">[Boost magique]</span> s'applique (temps de rechargement: 20 seconde(s)).<br></p>
    `,
        4: `
        <h3>4 étoiles :</h3>
        <p>Augmente l'Attaque de l'utilisateur de <span class="stat-boost">12%</span>.<br></p>
    `,
        5: `
        <h3>5 étoiles :</h3>
        <p>Chaque fois que l'Attaque de noyau de l'utilisateur touche sa cible, l'Attaque augmente de <span class="stat-boost">4%</span> (cumulable jusqu'à 10 fois).<br>
        Durée: infinie</p>
    `
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
        0: `
        <h3>Avancement 0 :</h3>
        <p>Augmente les dégâts de ténèbres de l'utilisateur de <span class="stat-boost">4%</span>.<br>
        Lors de l'utilisation d'une Attaque de base moins de 10 seconde(s) après l'utilisation de <strong>Attaque rapide: Typhon ardent</strong>, l'Attaque de l'utilisateur augmente de <span class="stat-boost">8%</span> pendant 30 seconde(s) (cumulable jusqu'à 2 fois).<br></p>
    `,
        1: `
        <h3>Avancement 5 étoiles :</h3>
        <p>Augmente les dégâts de ténèbres de l'utilisateur de <span class="stat-boost">12%</span>.<br>
        Lors de l'utilisation d'une Attaque de base moins de 10 seconde(s) après l'utilisation de <strong>Attaque rapide: Typhon ardent</strong>, l'Attaque de l'utilisateur augmente de <span class="stat-boost">8%</span> pendant 30 seconde(s) (cumulable jusqu'à 8 fois).<br></p>
    `,
        2: `
        <h3>Avancement 10 étoiles :</h3>
        <p>Augmente l'Attaque, la Défense et les PV de l'utilisateur de <span class="stat-boost">15%</span>.<br></p>
    `
    }
};

// --- SIAN HALAT ---
huntersData["sian-halat"] = {
    name: "Sian Halat",
    rarity: "SSR",
    element: "Ténèbres",
    gradient: "linear-gradient(90deg, #8e44ad, #000)",
    image: "Chasseurs_SSR/tenebre/sian_halat/sian_art.png",
    weaponImage: "Chasseurs_SSR/tenebre/sian_halat/ombre_pourpre/Relic_SianHalat_PortraitBig.png",
    weaponName: "Ombre pourpre",
    fullData: {
        0: `
        <h3>Passif :</h3>
        <p>Chaque fois que les compétences <strong>Épéiste royal : Jugement</strong>, <strong>Épéiste royal : Flash noir</strong> ou <strong>Épéiste royal : Ruade</strong> touchent leur cible, elles remplissent la jauge de <span class="buff">[Maîtrise impeccable de l'épée]</span>.<br>
        Lorsque la jauge de <span class="buff">[Maîtrise impeccable de l'épée]</span> atteint 50 % ou plus, l'effet <span class="buff">[Danse de l'épée pourpre]</span> est activé.<br>
        Lorsque les compétences <strong>Épéiste royal : Flash noir</strong> ou <strong>Épéiste royal : Ruade</strong> touchent leur cible, l'effet <span class="buff">[Furie pourpre]</span> est activé.<br></p>
        
        <div class="detail-box">
            <h4><span class="buff">[Danse de l'épée pourpre]</span></h4>
            <p>Augmente l'effet d'<span class="buff">[Accumulation élémentaire]</span> de ténèbres de <span class="stat-boost">10 %</span>.<br>
            Augmente les dégâts de ténèbres de <span class="stat-boost">5 %</span>. Augmente l'Attaque de <span class="stat-boost">5 %</span>. Durée : 15 seconde(s).</p>
        </div>

        <div class="detail-box">
            <h4><span class="buff">[Furie pourpre]</span></h4>
            <p>Restaure instantanément les PV à hauteur de <span class="stat-boost">5 %</span> de l'Attaque de Sian Halat.<br>
            Augmente le Taux de récupération de PV de <span class="stat-boost">5 %</span>. Durée : 5 seconde(s).</p>
        </div>
    `,
        1: `
        <h3>1 étoile :</h3>
        <p>Lorsque la jauge de <span class="buff">[Maîtrise impeccable de l'épée]</span> atteint 50 % ou plus, les compétences <strong>Épéiste royal : Flash noir</strong> et <strong>Épéiste royal : Ruade</strong> deviennent <strong>Épéiste royal : Pleine lune</strong> et <strong>Épéiste royal : Tempête de sang</strong>, ce qui augmente leurs dégâts de <span class="stat-boost">100 %</span>.<br>
        L'utilisation des compétences <strong>Épéiste royal : Pleine lune</strong> ou <strong>Épéiste royal : Tempête de sang</strong> consomme 50 % de la jauge de <span class="buff">[Maîtrise impeccable de l'épée]</span>.<br>
        Lorsque les compétences <strong>Épéiste royal : Flash noir</strong>, <strong>Épéiste royal : Ruade</strong>, <strong>Épéiste royal : Pleine lune</strong> ou <strong>Épéiste royal : Tempête de sang</strong> touchent leur cible, elles lui appliquent l'effet <span class="buff">[Domination écarlate]</span>.<br>
        L'effet <span class="buff">[Furie pourpre]</span> qui est activé lorsque les compétences <strong>Épéiste royal : Flash noir</strong> ou <strong>Épéiste royal : Ruade</strong> touchent leur cible devient <span class="buff">[Furie insatiable]</span>.<br>
        Lorsque les compétences <strong>Épéiste royal : Pleine lune</strong> ou <strong>Épéiste royal : Tempête de sang</strong> touchent leur cible, elles appliquent l'effet <span class="buff">[Furie insatiable]</span>.<br>
        Lorsque les PV de Sian Halat atteignent 1 ou moins, il devient <span class="buff">[Immortel]</span> pendant 2 seconde(s).<br>
        Lorsque l'effet <span class="buff">[Immortel]</span> prend fin, il récupère des PV équivalents à <span class="stat-boost">50 %</span> de son Attaque.<br>
        Cet effet ne s'active qu'une fois pendant le combat.<br></p>

        <div class="detail-box">
            <h4><span class="buff">[Domination écarlate]</span></h4>
            <p>Augmente les dégâts de ténèbres subis de <span class="stat-boost">5 %</span>.<br>
            Augmente les dégâts de <span class="buff">[Surcharge]</span> de ténèbres subis de <span class="stat-boost">5 %</span>. Durée : 10 seconde(s) (cumulable jusqu'à 2 fois).</p>
        </div>

        <div class="detail-box">
            <h4><span class="buff">[Furie insatiable]</span></h4>
            <p>Restaure instantanément des PV équivalents à <span class="stat-boost">10 %</span> de l'Attaque de Sian Halat.<br>
            Augmente le Taux de récupération de PV de <span class="stat-boost">10 %</span>. Durée : 5 seconde(s).</p>
        </div>
    `,
        2: `
        <h3>2 étoiles :</h3>
        <p>Applique l'effet <span class="buff">[Serment de la victoire]</span> à toute l'équipe au début du niveau.<br>
        Augmente l'effet d'<span class="buff">[Accumulation élémentaire]</span> de ténèbres de <span class="stat-boost">20 %</span>.<br></p>

        <div class="detail-box">
            <h4><span class="buff">[Serment de la victoire]</span></h4>
            <p>Augmente les dégâts de <span class="buff">[Surcharge]</span> de ténèbres subis par les cibles affectées de <span class="stat-boost">20 %</span>.<br>
            Durée : illimitée.</p>
        </div>
    `,
        3: `
        <h3>3 étoiles :</h3>
        <p>Améliore l'effet <span class="buff">[Danse de l'épée pourpre]</span>.<br>
        Lorsque les compétences <strong>Épéiste royal : Flash noir</strong>, <strong>Épéiste royal : Ruade</strong>, <strong>Épéiste royal : Pleine lune</strong> ou <strong>Épéiste royal : Tempête de sang</strong> touchent leur cible, elles activent l'effet <span class="buff">[Résolution du gardien]</span>.<br></p>

        <div class="detail-box">
            <h4><span class="buff">[Danse de l'épée pourpre]</span> (Amélioré)</h4>
            <p>Augmente l'effet d'<span class="buff">[Accumulation élémentaire]</span> de ténèbres de <span class="stat-boost">20 %</span>.<br>
            Augmente les dégâts de ténèbres de <span class="stat-boost">10 %</span>. Augmente l'Attaque de <span class="stat-boost">10 %</span>. Durée : 30 seconde(s).</p>
        </div>

        <div class="detail-box">
            <h4><span class="buff">[Résolution du gardien]</span></h4>
            <p>Augmente l'effet d'<span class="buff">[Accumulation élémentaire]</span> de ténèbres de <span class="stat-boost">1 %</span>.<br>
            Augmente les dégâts de ténèbres de <span class="stat-boost">1.6 %</span>. Augmente l'Attaque de <span class="stat-boost">1 %</span>. Durée : illimitée (cumulable jusqu'à 20 fois).</p>
        </div>
    `,
        4: `
        <h3>4 étoiles :</h3>
        <p>La Pénétration de défense des membres de l'équipe de l'élément Ténèbres augmente de <span class="stat-boost">3 %</span> par membre de l'élément Ténèbres présent dans le groupe.<br></p>
    `,
        5: `
        <h3>5 étoiles :</h3>
        <p>Les effets <span class="buff">[Domination écarlate]</span> et <span class="buff">[Furie insatiable]</span> sont améliorés.<br>
        Le taux de remplissage de la jauge de <span class="buff">[Maîtrise impeccable de l'épée]</span> augmente de <span class="stat-boost">100 %</span>.<br>
        Lorsque les compétences <strong>Épéiste royal : Flash noir</strong>, <strong>Épéiste royal : Ruade</strong>, <strong>Épéiste royal : Pleine lune</strong> ou <strong>Épéiste royal : Tempête de sang</strong> touchent leur cible, elles restaurent <span class="stat-boost">20 %</span> de la jauge de puissance de l'utilisateur et réduisent le temps de rechargement de <strong>Fierté du chevalier</strong> de 3 seconde(s) (temps de rechargement : 0.5 seconde(s)).<br>
        Lorsque <strong>Fierté du chevalier</strong> touche sa cible, elle applique l'effet <span class="buff">[Épée du zénith]</span> aux membres de l'équipe de l'élément Ténèbres.<br></p>

        <div class="detail-box">
            <h4><span class="buff">[Domination écarlate]</span> (Amélioré)</h4>
            <p>Augmente les dégâts de ténèbres subis de <span class="stat-boost">10 %</span>.<br>
            Augmente les dégâts de <span class="buff">[Surcharge]</span> de ténèbres subis de <span class="stat-boost">10 %</span>. Durée : 20 seconde(s) (cumulable jusqu'à 4 fois).</p>
        </div>

        <div class="detail-box">
            <h4><span class="buff">[Furie insatiable]</span> (Amélioré)</h4>
            <p>Restaure instantanément des PV équivalents à <span class="stat-boost">20 %</span> de l'Attaque de Sian Halat.<br>
            Augmente le Taux de récupération de PV de <span class="stat-boost">20 %</span>. Augmente les dégâts de <span class="buff">[Surcharge]</span> de ténèbres de <span class="stat-boost">30 %</span>.<br>
            Augmente la Pénétration de défense de <span class="stat-boost">10 %</span>. Augmente l'Attaque de <span class="stat-boost">15 %</span>. Durée : 30 seconde(s).</p>
        </div>
    `
    },
    summaryData: {
        0: `
        <h3>Passif : Maître des Ténèbres</h3>
        <p>Compétences remplissent <span class="buff">[Maîtrise]</span>.<br>
        Jauge > 50% = <span class="buff">[Danse de l'épée]</span> (Accumulation +10%, Atk +5%).<br>
        Compétences activent <span class="buff">[Furie pourpre]</span> (Soin 5%).</p>
    `,
        1: `
        <h3>1 étoile</h3>
        <p>Jauge > 50% : Compétences améliorées (Dégâts <span class="stat-boost">+100%</span>).<br>
        Applique <span class="buff">[Domination écarlate]</span> (Debuff Dégâts/Surcharge Ténèbres).<br>
        <span class="buff">[Furie insatiable]</span> : Soin 10%.<br>
        Mécanique d'<span class="buff">[Immortel]</span> (1 HP -> Invincible 2s -> Soin 50%).</p>
    `,
        2: `
        <h3>2 étoiles</h3>
        <p>Entrée : <span class="buff">[Serment de la victoire]</span> (Debuff Surcharge Ténèbres <span class="stat-boost">+20%</span>).<br>
        Accumulation Ténèbres <span class="stat-boost">+20%</span>.</p>
    `,
        3: `
        <h3>3 étoiles</h3>
        <p>Améliore <span class="buff">[Danse]</span> : Accumulation <span class="stat-boost">+20%</span>, Dégâts/Atk <span class="stat-boost">+10%</span>.<br>
        Active <span class="buff">[Résolution du gardien]</span> (Stack Dégâts/Atk illimité).</p>
    `,
        4: `
        <h3>4 étoiles</h3>
        <p>Pénétration défense équipe Ténèbres <span class="stat-boost">+3%</span> par allié Ténèbres.</p>
    `,
        5: `
        <h3>5 étoiles</h3>
        <p>Remplissage Jauge <span class="stat-boost">+100%</span>.<br>
        Compétences : Jauge Puissance <span class="stat-boost">+20%</span> + CD Fierté réduit.<br>
        Améliore <span class="buff">[Domination]</span> (Debuff 10%, x4) et <span class="buff">[Furie]</span> (Soin 20%, Buffs Atk/Pen/Surcharge).</p>
    `
    },
    weaponData: {
        0: `
        <h3>Avancement 0 :</h3>
        <p>Augmente la Pénétration de défense de <span class="stat-boost">2 %</span>.<br>
        Lorsqu'un ennemi est affecté par une <span class="buff">[Surcharge]</span> de ténèbres, un effet qui augmente les dégats de ténèbres de toute l'équipe de <span class="stat-boost">2 %</span> est activé (cumulable jusqu'a 4 fois).<br>
        Durée: illimitée</p>
    `,
        1: `
        <h3>Avancement 5 étoiles :</h3>
        <p>Augmente la Pénétration de défense de <span class="stat-boost">15 %</span>.<br>
        Lorsqu'un ennemi est affecté par une <span class="buff">[Surcharge]</span> de ténèbres, un effet qui augmente les dégats de ténèbres de toute l'équipe de <span class="stat-boost">12 %</span> est activé (cumulable jusqu'a 4 fois).<br>
        Durée: illimitée</p>
    `,
        2: `
        <h3>Avancement 10 étoiles :</h3>
        <p>Augmente l'Attaque, la Défense et les PV de <span class="stat-boost">15 %</span>.</p>
    `
    }
};

// --- SON KIHOON ---
huntersData["son-kihoon"] = {
    name: "Son Kihoon",
    rarity: "SSR",
    element: "Ténèbres",
    gradient: "linear-gradient(90deg, #8e44ad, #000)",
    image: "Chasseurs_SSR/tenebre/son_kihoon/son_art.png",
    weaponImage: "Chasseurs_SSR/tenebre/son_kihoon/determination_de_fer/Relic_SonKiHoon_PC_PortraitBig.png",
    weaponName: "Détermination de fer",
    fullData: {
        0: `
        <h3>Passif :</h3>
        <p>L'effet <span class="buff">[Posture de combat]</span> est activé lorsque l'utilisateur arrive dans le niveau.<br>
        Lorsqu'une attaque touche une cible avec une jauge de Bris, elle active l'effet <span class="buff">[Posture de garde]</span>.<br>
        Si Son Kihoon ou un allié parvient à mettre la cible en état de <span class="buff">[Bris]</span>, la durée de Bris augmente de 3 secondes, les jauges de noyau et de puissance de Kihoon se remplissent à 100 % et l'effet <span class="buff">[Posture de combat]</span> est activé.<br></p>
        
        <div class="detail-box">
            <h4><span class="buff">[Posture de combat]</span></h4>
            <p>Supprime <span class="buff">[Posture de garde]</span>.<br>
            Augmente les dégâts de ténèbres de <span class="stat-boost">20 %</span>.<br>
            Augmente les dégâts de <strong>Charge féroce</strong> de <span class="stat-boost">50 %</span>.<br>
            Durée : illimitée.</p>
        </div>

        <div class="detail-box">
            <h4><span class="buff">[Posture de garde]</span></h4>
            <p>Supprime <span class="buff">[Posture de combat]</span>.<br>
            Augmente les dégâts infligés de <span class="stat-boost">10 %</span>.<br>
            Augmente l'efficacité de Bris de <span class="stat-boost">10 %</span>.<br>
            Durée : illimitée.</p>
        </div>
    `,
        1: `
        <h3>1 étoile :</h3>
        <p>L'utilisation des compétences <strong>Drapeau d'autorité</strong> ou <strong>Charge féroce</strong> active l'effet <span class="buff">[Bouclier robuste]</span>.<br>
        L'utilisation des compétences <strong>Drapeau d'autorité</strong> ou <strong>Charge féroce</strong> transforme <strong>Motivation</strong> en <strong>Esprit combatif : Motivation</strong> et l'active.<br>
        L'utilisation de la compétence <strong>Esprit combatif : Motivation</strong> remplit <span class="stat-boost">35 %</span> de la jauge de puissance de l'utilisateur.<br>
        Lorsque l'utilisateur quitte le combat, il applique l'effet <span class="buff">[Esprit vertueux]</span> aux membres de l'équipe de la classe Attaquant et de l'élément Ténèbres.<br></p>

        <div class="detail-box">
            <h4><span class="buff">[Bouclier robuste]</span></h4>
            <p>Confère un Bouclier équivalent à <span class="stat-boost">30 %</span> des PV de Son Kihoon.<br>
            Durée : 30 seconde(s).</p>
        </div>

        <div class="detail-box">
            <h4><span class="buff">[Esprit vertueux]</span></h4>
            <p>Lorsqu'une compétence de base touche sa cible, elle inflige des dégâts de Bris faibles.<br>
            L'utilisateur reçoit <span class="buff">[Super armure]</span> tant que l'effet est actif.<br>
            Lorsque l'effet <span class="buff">[Esprit vertueux]</span> prend fin, il restaure <span class="stat-boost">25 %</span> des PM de l'utilisateur.<br>
            Durée : 25 seconde(s) (temps de rechargement : 30 seconde(s)).</p>
        </div>
    `,
        2: `
        <h3>2 étoiles :</h3>
        <p>L'efficacité de Bris de l'utilisateur augmente de <span class="stat-boost">10 %</span>.<br></p>
    `,
        3: `
        <h3>3 étoiles :</h3>
        <p>Inflige des dégâts de Bris lourds lorsque la compétence <strong>Esprit combatif : Motivation</strong> touche sa cible.<br>
        Inflige des dégâts de Bris tout-puissants lorsque la compétence <strong>Charge féroce</strong> touche sa cible.<br>
        Améliore l'effet <span class="buff">[Esprit combatif affaibli]</span>.<br></p>

        <div class="detail-box">
            <h4><span class="buff">[Esprit combatif affaibli]</span> (Amélioré)</h4>
            <p>Les effets suivants sont appliqués aux cibles qui entrent dans la zone :<br>
            Diminue l'Attaque de <span class="stat-boost">12.5 %</span>.<br>
            Augmente les dégâts de ténèbres subis de <span class="stat-boost">10 %</span>.<br>
            L'effet <span class="buff">[Irrémédiable]</span> est activé.</p>
        </div>
    `,
        4: `
        <h3>4 étoiles :</h3>
        <p>L'Attaque et les PV de toute l'équipe augmentent de <span class="stat-boost">10 %</span>.<br></p>
    `,
        5: `
        <h3>5 étoiles :</h3>
        <p>L'effet <span class="buff">[Chef de l'escadron d'attaque]</span> est appliqué à toute l'équipe lorsque l'utilisateur arrive dans le niveau.<br>
        Lorsque la compétence <strong>Esprit combatif palpitant</strong> touche une cible sans jauge de Bris, elle active l'effet <span class="buff">[Esprit brisé]</span> et applique l'effet <span class="buff">[Frappe de Berserker]</span> à toute l'équipe.<br></p>

        <div class="detail-box">
            <h4><span class="buff">[Chef de l'escadron d'attaque]</span></h4>
            <p>Augmente l'Attaque de <span class="stat-boost">10 %</span>.<br>
            Augmente les PV de <span class="stat-boost">10 %</span>.<br>
            Augmente les dégâts infligés de <span class="stat-boost">10 %</span>.<br>
            Durée : illimitée.</p>
        </div>

        <div class="detail-box">
            <h4><span class="buff">[Esprit brisé]</span></h4>
            <p>Diminue l'Attaque de <span class="stat-boost">12.5 %</span>.<br>
            Augmente les chances de recevoir des Dégâts de coup critique de <span class="stat-boost">15 %</span>.<br>
            Durée : 60 seconde(s).</p>
        </div>

        <div class="detail-box">
            <h4><span class="buff">[Frappe de Berserker]</span></h4>
            <p>Augmente les Dégâts de coup critique de <span class="stat-boost">30 %</span>.<br>
            Augmente les dégâts de ténèbres de <span class="stat-boost">15 %</span>.<br>
            Durée : 60 seconde(s).</p>
        </div>
    `
    },
    summaryData: {
        0: `
        <h3>Passif : Maître du Bris</h3>
        <p>Cible avec Jauge Bris = <span class="buff">[Posture de garde]</span> (Efficacité Bris +10%).<br>
        Cible mise en Bris = <span class="buff">[Posture de combat]</span> (Dégâts Ténèbres +20%) + Reset Jauges.<br>
        Prolonge durée Bris de 3s.</p>
    `,
        1: `
        <h3>1 étoile</h3>
        <p>Compétences = <span class="buff">[Bouclier robuste]</span> (30% PV).<br>
        Motivation remplit Jauge Puissance.<br>
        Sortie combat = Buff <span class="buff">[Esprit vertueux]</span> aux Attaquants Ténèbres (Super armure, Regen PM, Dégâts Bris).</p>
    `,
        2: `
        <h3>2 étoiles</h3>
        <p>Efficacité de Bris de l'utilisateur <span class="stat-boost">+10%</span>.<br></p>
    `,
        3: `
        <h3>3 étoiles</h3>
        <p>Compétences infligent Bris Lourds/Tout-puissants.<br>
        Zone : Atk ennemie <span class="stat-boost">-12.5%</span>, Dégâts Ténèbres subis <span class="stat-boost">+10%</span>, <span class="buff">[Irrémédiable]</span>.</p>
    `,
        4: `
        <h3>4 étoiles</h3>
        <p>Attaque et PV de toute l'équipe <span class="stat-boost">+10%</span>.<br></p>
    `,
        5: `
        <h3>5 étoiles</h3>
        <p>Entrée = Buff <span class="buff">[Chef]</span> (Atk/PV/Dégâts <span class="stat-boost">+10%</span>).<br>
        Ultime sur cible sans Bris = Debuff <span class="buff">[Esprit brisé]</span> (Atk down, Crit reçu up) + Buff équipe <span class="buff">[Berserker]</span> (Crit Dmg/Ténèbres up).</p>
    `
    },
    weaponData: {
        0: `
        <h3>Avancement 0 :</h3>
        <p>Les PV de Kihoon augmentent de <span class="stat-boost">5 %</span>.<br>
        Lorsque Kihoon ou un membre de l'équipe parvient à mettre la cible en état de <span class="buff">[Bris]</span>, les dégâts de ténèbres de toute l'équipe augmentent de <span class="stat-boost">2.5 %</span>.<br>
        Durée: illimitée</p>
    `,
        1: `
        <h3>Avancement 5 étoiles :</h3>
        <p>Les PV de Kihoon augmentent de <span class="stat-boost">12 %</span>.<br>
        Lorsque Kihoon ou un membre de l'équipe parvient à mettre la cible en état de <span class="buff">[Bris]</span>, les dégâts de ténèbres de toute l'équipe augmentent de <span class="stat-boost">15 %</span>.<br>
        Durée: illimitée</p>
    `,
        2: `
        <h3>Avancement 10 étoiles :</h3>
        <p>L'Attaque, la Défense et les PV de l'utilisateur augmentent de <span class="stat-boost">15 %</span>.</p>
    `
    }
};

// --- SUNG ILHWAN ---
huntersData["sung-ilhwan"] = {
    name: "Sung Ilhwan",
    rarity: "SSR",
    element: "Ténèbres",
    gradient: "linear-gradient(90deg, #8e44ad, #000)",
    image: "Chasseurs_SSR/tenebre/sung_ilhwan/sung_art.png",
    weaponImage: "Chasseurs_SSR/tenebre/sung_ilhwan/volonte_implacable/Relic_SungIlHwan_PC_PortraitBig.png",
    weaponName: "Volonté implacable",
    fullData: {
        0: `
        <h3>Passif :</h3>
        <p>Lorsque la compétence <strong>Entaille fantôme</strong> touche sa cible, l'effet <span class="buff">[Balance du Dominateur]</span> est activé.<br>
        Les PM ne se régénèrent ni naturellement, ni avec une attaque de base ou une attaque de noyau.<br>
        L'utilisation de la compétence <strong>Puissance apocalyptique</strong> restaure <span class="stat-boost">14 %</span> des PM actuels de l'utilisateur, proportionnellement au nombre de cumuls de l'effet <span class="buff">[Amélioration du Dominateur]</span> appliqués, à la suite de quoi les cumuls sont supprimés.<br>
        L'utilisation des compétences <strong>Entaille fantôme</strong> ou <strong>Courroux de la condamnation</strong> applique l'effet <span class="buff">[Amélioration du Dominateur]</span>.<br>
        Lorsque les membres de l'équipe, à l'exception de Sung Ilhwan, utilisent leur compétence de base, ce dernier récupère <span class="stat-boost">2 %</span> de ses PM et sa jauge de puissance se remplit de <span class="stat-boost">1 %</span>.<br></p>
        
        <div class="detail-box">
            <h4><span class="buff">[Amélioration du Dominateur]</span></h4>
            <p>Augmente les dégâts de la compétence de base de <span class="stat-boost">5 %</span>.<br>
            Augmente les dégâts de la compétence ultime de <span class="stat-boost">25 %</span>.<br>
            Durée : illimitée (cumulable jusqu'à 7 fois).</p>
        </div>

        <div class="detail-box">
            <h4><span class="buff">[Balance du Dominateur]</span></h4>
            <p>Augmente les dégâts de la compétence <strong>Courroux de la condamnation</strong> de <span class="stat-boost">1 %</span>.<br>
            Lors de l'utilisation de <strong>Courroux de la condamnation</strong>, l'effet <span class="buff">[Balance du Dominateur]</span> est supprimé.<br>
            Durée : illimitée (cumulable jusqu'à 160 fois).</p>
        </div>
    `,
        1: `
        <h3>1 étoile :</h3>
        <p>L'utilisation de l'attaque de base ou de l'attaque de noyau diminue le temps de rechargement de la compétence <strong>Entaille fantôme</strong> de 1 seconde(s).<br>
        L'utilisation de la compétence <strong>Puissance apocalyptique</strong> réinitialise la durée des buffs actifs sur l'utilisateur (temps de rechargement : 30 seconde(s)).<br>
        Les dégâts de ténèbres augmentent de <span class="stat-boost">150 %</span> pendant 15 seconde(s) lorsque l'utilisateur arrive sur le champ de bataille en <span class="buff">[Mode Chasseur]</span>.<br>
        (Lorsque le chasseur arrive sur le champ de bataille en <span class="buff">[Mode Chasseur]</span>, il est impossible d'utiliser automatiquement les compétences QTE des alliés pendant 15 seconde(s)).<br>
        Lorsque les compétences <strong>Grand final ténébreux</strong> ou <strong>Puissance apocalyptique</strong> touchent leur cible, elles lui appliquent l'effet <span class="buff">[Marqué]</span>.<br>
        Lorsque la compétence <strong>Puissance apocalyptique</strong> touche une cible sous l'effet <span class="buff">[Réprimé]</span>, la durée de l'effet <span class="buff">[Réprimé]</span> est réinitialisée.<br></p>

        <div class="detail-box">
            <h4><span class="buff">[Marqué]</span></h4>
            <p>Augmente les dégâts infligés par Sung Ilhwan de <span class="stat-boost">35 %</span>.<br>
            Si la cible est mise en état de <span class="buff">[Bris]</span>, l'effet devient l'effet <span class="buff">[Réprimé]</span>.<br>
            Durée : 30 seconde(s).</p>
        </div>

        <div class="detail-box">
            <h4><span class="buff">[Réprimé]</span></h4>
            <p>Augmente les dégâts infligés par Sung Ilhwan de <span class="stat-boost">50 %</span>.<br>
            Augmente les dégâts des compétences ultimes de l'élément Ténèbres de <span class="stat-boost">20 %</span>.<br>
            Durée : 30 seconde(s).</p>
        </div>
    `,
        2: `
        <h3>2 étoiles :</h3>
        <p>Les dégâts de ténèbres de l'utilisateur augmentent de <span class="stat-boost">30 %</span>.<br></p>
    `,
        3: `
        <h3>3 étoiles :</h3>
        <p>Le nombre d'attaques pour les compétences <strong>Entaille fantôme</strong>, <strong>Courroux de la condamnation</strong> et <strong>Puissance apocalyptique</strong> est doublé.<br>
        Lors de l'utilisation de la compétence <strong>Transperce-ciel</strong>, s'il y a un ennemi dans un rayon de 5 m, l'utilisateur attaque instantanément.<br></p>
    `,
        4: `
        <h3>4 étoiles :</h3>
        <p>L'Attaque des coéquipiers de l'élément Ténèbres augmente de <span class="stat-boost">10 %</span> par membre de l'élément Ténèbres présent dans le groupe.<br></p>
    `,
        5: `
        <h3>5 étoiles :</h3>
        <p>L'utilisation de l'attaque de base ou de l'attaque de noyau diminue le temps de rechargement de la compétence <strong>Entaille fantôme</strong> de 1.7 seconde(s).<br>
        L'utilisation de la compétence <strong>Courroux de la condamnation</strong> active l'effet <span class="buff">[Protection du Dominateur]</span>.<br>
        L'utilisateur reçoit un <span class="buff">[Bouclier]</span>, et l'Attaque ainsi que le Taux de coup critique augmentent de <span class="stat-boost">12 %</span> pendant 30 seconde(s) (cumulable jusqu'à 3 fois).<br>
        Lorsqu'un membre du groupe de l'élément Ténèbres, hormis Sung Ilhwan, utilise sa compétence de base, Sung Ilhwan récupère <span class="stat-boost">8 %</span> de ses PM et remplit sa jauge de puissance de <span class="stat-boost">4 %</span>.<br></p>

        <div class="detail-box">
            <h4><span class="buff">[Protection du Dominateur]</span></h4>
            <p>Confère un <span class="buff">[Bouclier]</span> équivalent à <span class="stat-boost">100 %</span> de l'Attaque de Sung Ilhwan.<br>
            Durée : 20 seconde(s).</p>
        </div>
    `
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
        Entrée Mode Chasseur : Dégâts Ténèbres <span class="stat-boost">+150%</span> (15s).<br>
        Applique <span class="buff">[Marqué]</span> (Dégâts subis +35%) -> Sur Bris devient <span class="buff">[Réprimé]</span> (Dégâts subis +50%, Ult Ténèbres +20%).</p>
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
        <p>Attaque équipe Ténèbres <span class="stat-boost">+10%</span> par allié Ténèbres.<br></p>
    `,
        5: `
        <h3>5 étoiles</h3>
        <p>Réduction CD <strong>Entaille fantôme</strong> améliorée (-1.7s).<br>
        <strong>Courroux</strong> active <span class="buff">[Protection]</span> : Bouclier + Buff Atk/Crit (<span class="stat-boost">+12%</span>/stack).<br>
        Recharge PM/Jauge par l'équipe augmentée (8%/4%).</p>
    `
    },
    weaponData: {
        0: `
        <h3>Avancement 0 :</h3>
        <p>Augmente l'Attaque de l'utilisateur de <span class="stat-boost">5 %</span>.<br>
        Augmente les Dégâts de coup critique de l'utilisateur de <span class="stat-boost">5 %</span>.</p>
    `,
        1: `
        <h3>Avancement 5 étoiles :</h3>
        <p>Augmente l'Attaque de l'utilisateur de <span class="stat-boost">30 %</span>.<br>
        Augmente les Dégâts de coup critique de l'utilisateur de <span class="stat-boost">30 %</span>.</p>
    `,
        2: `
        <h3>Avancement 10 étoiles :</h3>
        <p>Augmente l'Attaque, la Défense et les PV de l'utilisateur de <span class="stat-boost">15 %</span>.</p>
    `
    }
};

// --- MINNIE ---
huntersData["minnie"] = {
    name: "Minnie",
    rarity: "SSR",
    element: "Ténèbres",
    gradient: "linear-gradient(90deg, #8e44ad, #000)",
    image: "Chasseurs_SSR/collab/tenebre/minnie/minnie_art.png",
    weaponImage: "Chasseurs_SSR/collab/tenebre/minnie/reve_du_papillon_mauve/Relic_Minnie_PortraitBig.png",
    weaponName: "Rêve du papillon mauve",
    fullData: {
        0: `
        <h3>Passif :</h3>
        <p>Tout l'équipe reçoit l'effet <span class="buff">[FOREVER]</span> en arrivant dans les modes Mission Rappel et Donjon éphémère.<br>
        L'utilisation de la compétence <strong>Iris</strong> réduit le temps de rechargement de la compétence <strong>Edelweiss</strong> de 25 seconde(s) et remplit la jauge de puissance de l'utilisatrice de 100 % (temps de rechargement : 20 seconde(s)).<br>
        Lorsque la compétence <strong>Iris</strong> touche sa cible, elle applique l'effet <span class="buff">[Lis araignée rouge]</span>.<br>
        L'utilisation de la compétence <strong>Edelweiss</strong> active l'effet <span class="buff">[Papillon mauve]</span> et confère 3 <span class="buff">[Pétales fanés]</span>.<br>
        Lorsque l'utilisatrice quitte le combat, l'effet <span class="buff">[Papillon mauve]</span> est supprimé.<br></p>
        
        <div class="detail-box">
            <h4><span class="buff">[FOREVER]</span></h4>
            <p>Augmente les dégâts infligés de <span class="stat-boost">5 %</span>.<br>
            Durée : illimitée (cumulable jusqu'à 3 fois)</p>
        </div>

        <div class="detail-box">
            <h4><span class="buff">[Lis araignée rouge]</span></h4>
            <p>Augmente les dégâts de ténèbres infligés par MINNIE de <span class="stat-boost">30 %</span>.<br>
            Durée : 20 seconde(s)</p>
        </div>

        <div class="detail-box">
            <h4><span class="buff">[Papillon mauve]</span></h4>
            <p>Active l'attaque de noyau 1 fois.<br>
            Lorsque les compétences <strong>Iris</strong>, <strong>Acacia</strong> ou <strong>Allium</strong> touchent leur cible, elles infligent des dégâts supplémentaires équivalents à <span class="stat-boost">50 %</span> des dégâts de base.<br>
            L'utilisation des compétences <strong>Iris</strong>, <strong>Acacia</strong> ou <strong>Allium</strong> supprime 1 cumul de <span class="buff">[Pétales fanés]</span>.<br>
            Confère <span class="buff">[Super armure]</span> lors de l'utilisation des compétences <strong>Iris</strong>, <strong>Acacia</strong> ou <strong>Allium</strong>.<br>
            Lorsque l'effet est supprimé, les effets <span class="buff">[Papillon mauve]</span>, <span class="buff">[Pétales fanés]</span>, <span class="buff">[Floraison]</span> et <span class="buff">[Floraison totale]</span> sont supprimés.<br>
            Durée : 20 seconde(s)</p>
        </div>

        <div class="detail-box">
            <h4><span class="buff">[Pétales fanés]</span></h4>
            <p>Lorsque les effets sont supprimés, les temps de rechargement des compétences <strong>Acacia</strong> et <strong>Allium</strong> sont réinitialisés.<br>
            Durée : illimitée (cumulable jusqu'à 5 fois)</p>
        </div>
    `,
        1: `
        <h3>1 étoile :</h3>
        <p>Lorsque l'utilisatrice rejoint le niveau, sa jauge de puissance se remplit de 100 % de sa charge maximale.<br>
        L'effet <span class="buff">[Pétales fanés]</span> est amélioré.<br></p>

        <div class="detail-box">
            <h4><span class="buff">[Pétales fanés]</span></h4>
            <p>Lorsque cet effet est supprimé, il réinitialise le temps de rechargement des compétences <strong>Acacia</strong> et <strong>Allium</strong>.<br>
            Lorsque cet effet est supprimé, il active l'effet <span class="buff">[Message des fleurs : Fragment de souvenirs]</span>.<br>
            Durée : illimitée (cumulable jusqu'à 5 fois)</p>
        </div>

        <div class="detail-box">
            <h4><span class="buff">[Message des fleurs : Fragment de souvenirs]</span></h4>
            <p>Augmente la Défense de <span class="stat-boost">10 %</span>.<br>
            Augmente les Dégâts de coup critique de <span class="stat-boost">10 %</span>.<br>
            Durée : 20 seconde(s) (cumulable jusqu'à 3 fois)</p>
        </div>
    `,
        2: `
        <h3>2 étoiles :</h3>
        <p>La Défense de l'utilisatrice augmente de <span class="stat-boost">15 %</span>.<br></p>
    `,
        3: `
        <h3>3 étoiles :</h3>
        <p>L'effet <span class="buff">[Lis araignée rouge]</span> est amélioré.<br>
        L'utilisation de la compétence <strong>Acacia</strong> active l'effet <span class="buff">[Taux de coup critique augmenté]</span>, que l'utilisatrice réussisse ou non une Contre-attaque.<br></p>

        <div class="detail-box">
            <h4>Amélioration <span class="buff">[Lis araignée rouge]</span></h4>
            <p>Augmente les dégâts de ténèbres infligés par MINNIE de <span class="stat-boost">50 %</span>.<br>
            Durée : 20 seconde(s)</p>
        </div>

        <div class="detail-box">
            <h4><span class="buff">[Taux de coup critique augmenté]</span></h4>
            <p>Augmente le taux de coup critique de <span class="stat-boost">30 %</span>.<br>
            Durée : 20 seconde(s)</p>
        </div>
    `,
        4: `
        <h3>4 étoiles :</h3>
        <p>Les dégâts de compétence de base de l'utilisatrice augmentent de <span class="stat-boost">20 %</span>.<br></p>
    `,
        5: `
        <h3>5 étoiles :</h3>
        <p>L'utilisation de la compétence <strong>Edelweiss</strong> confère désormais 5 <span class="buff">[Pétales fanés]</span>.<br>
        L'effet <span class="buff">[Message des fleurs : Fragment de souvenirs]</span> est amélioré.<br></p>

        <div class="detail-box">
            <h4>Amélioration <span class="buff">[Message des fleurs : Fragment de souvenirs]</span></h4>
            <p>Augmente la Défense de <span class="stat-boost">20 %</span>.<br>
            Augmente les Dégâts de coup critique de <span class="stat-boost">20 %</span>.<br>
            Durée : 20 seconde(s) (cumulable jusqu'à 3 fois)</p>
        </div>
    `
    },
    summaryData: {
        0: `
        <h3>Passif : Rêve Floral</h3>
        <p>Mode spécial : Buff <span class="buff">[FOREVER]</span> (Dégâts +5%).<br>
        Iris reset Edelweiss + 100% Jauge + <span class="buff">[Lis araignée rouge]</span> (Dégâts Ténèbres +30%).<br>
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
        <p><span class="buff">[Lis araignée rouge]</span> amélioré : Dégâts Ténèbres <span class="stat-boost">+50%</span>.<br>
        Acacia active <span class="buff">[Taux Crit augmenté]</span> (+30%).</p>
    `,
        4: `
        <h3>4 étoiles</h3>
        <p>Dégâts compétence de base <span class="stat-boost">+20%</span>.<br></p>
    `,
        5: `
        <h3>5 étoiles</h3>
        <p>Edelweiss donne 5 <span class="buff">[Pétales]</span>.<br>
        <span class="buff">[Message des fleurs]</span> amélioré : Déf +20%, Crit Dmg +20%.</p>
    `
    },
    weaponData: {
        0: `
        <h3>Avancement 0 :</h3>
        <p>La Défense de l'utilisatrice augmente de <span class="stat-boost">5 %</span>, et son Taux de coup critique ainsi que ses Dégâts de coup critique augmentent de <span class="stat-boost">2.5 %</span>.</p>
    `,
        1: `
        <h3>Avancement 5 étoiles :</h3>
        <p>La Défense de l'utilisatrice augmente de <span class="stat-boost">12 %</span>, et son Taux de coup critique ainsi que ses Dégâts de coup critique augmentent de <span class="stat-boost">15 %</span>.</p>
    `,
        2: `
        <h3>Avancement 10 étoiles :</h3>
        <p>Augmente l'Attaque, la Défense et les PV de <span class="stat-boost">15 %</span>.</p>
    `
    }
};