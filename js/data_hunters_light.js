if (typeof huntersData === 'undefined') { 
    var huntersData = {}; 
}

// --- CHO GYUHWAN ---
huntersData["cho-gyuhwan"] = {
    name: "Cho GyuHwan",
    rarity: "SR",
    element: "Lumière",
    gradient: "linear-gradient(90deg, #f1c40f, #000)", // Dégradé jaune/or pour la lumière
    image: "Chasseurs_SR/lumiere/Cho_gyuHwan/ChoGyuHwan_Portrait_Body.png",
    weaponImage: "Chasseurs_SR/lumiere/Cho_gyuhwan/la_belle_vie/Relic_ChoGyuHwan_PortraitBig.png",
    weaponName: "La belle vie",
    fullData: {
        0: `
        <h3>Passif :</h3>
        <p>Augmente l'Attaque de l'utilisateur face aux cibles affectées par <span class="buff">[Brûlure]</span>.<br></p>
        <div class="detail-box">
            <h4><span class="buff">[Attaque augmentée]</span></h4>
            <p>Augmente l'Attaque de <span class="stat-boost">25%</span>.<br>
            Durée: 10 seconde(s)<br>
            Temps de rechargement: 20 seconde(s)</p>
        </div>
    `,
        1: `
        <h3>1 étoile :</h3>
        <p>L'effet passif de Kyuhwan s'applique même s'il touche une cible affectée par <span class="buff">[Brûlure]</span>.<br></p>
    `,
        2: `
        <h3>2 étoiles :</h3>
        <p>Les Points de mana de Kyuhwan augmentent de <span class="stat-boost">30%</span>.<br></p>
    `,
        3: `
        <h3>3 étoiles :</h3>
        <p>La consommation de PM des compétences de lumière augmente de <span class="stat-boost">25%</span>, mais leur portée et leurs dégâts augmentent de <span class="stat-boost">50%</span>.<br></p>
    `,
        4: `
        <h3>4 étoiles :</h3>
        <p>Augmente le Taux de récupération naturel du mana de <span class="stat-boost">50%</span>.<br></p>
    `,
        5: `
        <h3>5 étoiles :</h3>
        <p>Augment la portée de la compétence <strong>Rayon irradiant</strong> de <span class="stat-boost">20%</span> et lorsque la première attaque touche sa cible, elle lui applique l'effet <span class="buff">[étourdissement]</span>.<br></p>
        <div class="detail-box">
            <h4><span class="buff">[étourdissement]</span></h4>
            <p>La cible est immobilisée.<br>
            Durée: 1 seconde(s)</p>
        </div>
    `
    },
    summaryData: {
        0: `
        <h3>Passif : Mage de Lumière</h3>
        <p>Cible Brûlée = <span class="buff">[Attaque augmentée]</span>.<br>
        [Attaque] : <span class="stat-boost">+25%</span> (10s).</p>
    `,
        1: `
        <h3>1 étoile</h3>
        <p>Passif s'applique sur touche de Brûlure.<br></p>
    `,
        2: `
        <h3>2 étoiles</h3>
        <p>PM Max <span class="stat-boost">+30%</span>.<br></p>
    `,
        3: `
        <h3>3 étoiles</h3>
        <p>Compétences Lumière : Conso PM +25%, mais Portée/Dégâts <span class="stat-boost">+50%</span>.<br></p>
    `,
        4: `
        <h3>4 étoiles</h3>
        <p>Récupération naturelle Mana <span class="stat-boost">+50%</span>.<br></p>
    `,
        5: `
        <h3>5 étoiles</h3>
        <p>Rayon irradiant : Portée +20% + <span class="buff">[Étourdissement]</span> (1s).<br></p>
    `
    },
    weaponData: {
        0: `
        <h3>Avancement 0 :</h3>
        <p>Augmente l'Attaque de l'utilisateur de <span class="stat-boost">2%</span>.<br>
        Si les PM de l'utilisateur sont à <span class="stat-boost">50%</span> ou au-dessus, les dégâts de son Attaque de noyau, de sa Compétence de base et de sa Compétence QTE augmentent de <span class="stat-boost">10%</span>.<br></p>
    `,
        1: `
        <h3>Avancement 5 étoiles :</h3>
        <p>Augmente l'Attaque de l'utilisateur de <span class="stat-boost">8%</span>.<br>
        Si les PM de l'utilisateur sont à <span class="stat-boost">50%</span> ou au-dessus, les dégâts de son Attaque de noyau, de sa Compétence de base et de sa Compétence QTE augmentent de <span class="stat-boost">40 %</span>.<br></p>
    `,
        2: `
        <h3>Avancement 10 étoiles :</h3>
        <p>Augmente l'Attaque, la Défense et les PV de l'utilisateur de <span class="stat-boost">15%</span>.<br></p>
    `
    }
};

// --- KIM CHUL ---
huntersData["kim-chul"] = {
    name: "Kim Chul",
    rarity: "SR",
    element: "Lumière",
    gradient: "linear-gradient(90deg, #f1c40f, #000)",
    image: "Chasseurs_SR/lumiere/Kim_chul/KimChul_Portrait_Body.png",
    weaponImage: "Chasseurs_SR/lumiere/Kim_chul/la_volonte_du_gardien/Relic_KimChul_PortraitBig.png",
    weaponName: "La volonté du gardien",
    fullData: {
        0: `
        <h3>Passif :</h3>
        <p>Lors de l'utilisation des compétences <strong>Saut de bouclier</strong> ou <strong>Rugissement féroce</strong>, l'effet <span class="buff">[Impénétrable]</span> est appliqué.<br></p>
        <div class="detail-box">
            <h4><span class="buff">[Impénétrable]</span></h4>
            <p>Crée un <span class="buff">[Bouclier]</span> équivalent à <span class="stat-boost">2.5 %</span> de la Défense de l'utilisateur.<br>
            Durée: 10 seconde(s)</p>
        </div>
    `,
        1: `
        <h3>1 étoile :</h3>
        <p>Modification des effets de la compétence <strong>Saut de bouclier</strong><br>
        Peut être utilisée jusqu'à 2 fois.<br>
        Réduit le temps de rechargement de 2 secondes.<br></p>
    `,
        2: `
        <h3>2 étoiles :</h3>
        <p>Augmente la Défense de l'utilisateur de <span class="stat-boost">6%</span>.<br></p>
    `,
        3: `
        <h3>3 étoiles :</h3>
        <p>Lorsqu'un personnage <span class="buff">[quitte le combat]</span>, l'effet <span class="buff">[Impénétrable]</span> est appliqué à toute l'équipe.<br></p>
        <div class="detail-box">
            <h4><span class="buff">[Impénétrable]</span></h4>
            <p>Crée un <span class="buff">[Bouclier]</span> équivalent à <span class="stat-boost">8%</span> de la<br>
            Défense de l'utilisateur.<br>
            Durée: 10 seconde(s)<br>
            Temps de rechargement: 30 seconde(s)</p>
        </div>
    `,
        4: `
        <h3>4 étoiles :</h3>
        <p>Les PV de l'utilisateur augmentent de <span class="stat-boost">8%</span>.<br></p>
    `,
        5: `
        <h3>5 étoiles :</h3>
        <p>L'effet <span class="buff">[Défense réduite]</span> s'applique pendant <strong>Saut de bouclier</strong>.<br></p>
        <div class="detail-box">
            <h4><span class="buff">[Défense réduite]</span></h4>
            <p>Réduit la Défense de <span class="stat-boost">16%</span>.<br>
            Durée: 10 seconde(s)</p>
        </div>
    `
    },
    summaryData: {
        0: `
        <h3>Passif : Gardien de Fer</h3>
        <p>Saut de bouclier/Rugissement = <span class="buff">[Impénétrable]</span>.<br>
        [Impénétrable] : Bouclier (<span class="stat-boost">2.5%</span> Def, 10s).</p>
    `,
        1: `
        <h3>1 étoile</h3>
        <p>Saut de bouclier : 2 charges, CD -2s.<br></p>
    `,
        2: `
        <h3>2 étoiles</h3>
        <p>Défense <span class="stat-boost">+6%</span>.<br></p>
    `,
        3: `
        <h3>3 étoiles</h3>
        <p>Switch out = <span class="buff">[Impénétrable]</span> pour l'équipe (<span class="stat-boost">8%</span> Def, 10s).<br>
        CD 30s.</p>
    `,
        4: `
        <h3>4 étoiles</h3>
        <p>PV <span class="stat-boost">+8%</span>.<br></p>
    `,
        5: `
        <h3>5 étoiles</h3>
        <p>Saut de bouclier applique <span class="buff">[Défense réduite]</span> (-16%).<br></p>
    `
    },
    weaponData: {
        0: `
        <h3>Avancement 0 :</h3>
        <p>Augmente la Défense de l'utilisateur de <span class="stat-boost">2.5%</span>.<br>
        Lors de l'utilisation de la compétence <strong>Saut de bouclier</strong>, les dégâts subis par l'équipe diminuent de <span class="stat-boost">2%</span> pendant 20 seconde(s).<br></p>
    `,
        1: `
        <h3>Avancement 5 étoiles :</h3>
        <p>Augmente la Défense de l'utilisateur de <span class="stat-boost">10%</span>.<br>
        Lors de l'utilisation de la compétence <strong>Saut de bouclier</strong>, les dégâts subis par l'équipe diminuent de <span class="stat-boost">12%</span> pendant 20 seconde(s).<br></p>
    `,
        2: `
        <h3>Avancement 10 étoiles :</h3>
        <p>Augmente l'Attaque, la Défense et les PV de l'utilisateur de <span class="stat-boost">15%</span>.<br></p>
    `
    }
};

// --- YOO JINHO ---
huntersData["yoo-jinho"] = {
    name: "Yoo Jinho",
    rarity: "SR",
    element: "Lumière",
    gradient: "linear-gradient(90deg, #f1c40f, #000)",
    image: "Chasseurs_SR/lumiere/Yoo_jinho/YooJinHo_Portrait_Body.png",
    weaponImage: "Chasseurs_SR/lumiere/Yoo_jinho/enchante/Relic_YooJinHo_PortraitBig.png",
    weaponName: "Enchanté",
    fullData: {
        0: `
        <h3>Passif :</h3>
        <p>Lorsque <strong>[À mon tour!, Fais-moi confiance! ou Je vais te protéger!]</strong> touche sa cible, une potion est créée près de l'utilisateur.<br></p>
        <div class="detail-box">
            <h4><span class="buff">[Potion]</span></h4>
            <p>En obtenant une potion, les PV sont restaurés à hauteur de <span class="stat-boost">8%</span> des PV max de Yoo Jinho.<br>
            Temps de rechargement: 20 seconde(s)</p>
        </div>
    `,
        1: `
        <h3>1 étoile :</h3>
        <p>Lors de l'utilisation de la compétence <strong>Fais-moi confiance!</strong>, l'utilisateur crée une aura qui inflige toutes les secondes des dégâts équivalents à <span class="stat-boost">70%</span> de sa Défense pendant la durée d'application du buff de Fais-moi confiance !.<br></p>
    `,
        2: `
        <h3>2 étoiles :</h3>
        <p>Les PV de l'utilisateur augmentent de <span class="stat-boost">8%</span>.<br></p>
    `,
        3: `
        <h3>3 étoiles :</h3>
        <p>Lors de l'utilisation de la compétence <strong>Fais-moi confiance!</strong>, un <span class="buff">[Bouclier]</span> est appliqué.<br></p>
        <div class="detail-box">
            <h4><span class="buff">[Bouclier]</span></h4>
            <p>Crée un <span class="buff">[Bouclier]</span> équivalent à <span class="stat-boost">20%</span> des PV de l'utilisateur.<br>
            Durée: 8 seconde(s)</p>
        </div>
    `,
        4: `
        <h3>4 étoiles :</h3>
        <p>Augmente la Défense de l'utilisateur de <span class="stat-boost">6 %</span>.<br></p>
    `,
        5: `
        <h3>5 étoiles :</h3>
        <p>Tous les effets ci-dessous s'appliquent à l'obtention d'une <span class="buff">[Potion]</span>.<br>
        Restauration de <span class="stat-boost">12%</span> des PV max de Yoo Jinho.<br>
        Applique l'effet <span class="buff">[Attaque augmentée]</span>.<br>
        Applique un <span class="buff">[Bouclier]</span>.<br></p>
        <div class="detail-box">
            <h4><span class="buff">[Attaque augmentée]</span></h4>
            <p>Augmente l'Attaque de <span class="stat-boost">12%</span>.<br>
            Durée: 10 seconde(s)</p>
        </div>
        <div class="detail-box">
            <h4><span class="buff">[Bouclier]</span></h4>
            <p>Crée un <span class="buff">[Bouclier]</span> équivalent à <span class="stat-boost">12%</span> des PV max de Yoo Jinho.<br>
            Durée: 10 seconde(s)</p>
        </div>
    `
    },
    summaryData: {
        0: `
        <h3>Passif : Alchimiste de Terrain</h3>
        <p>Compétences = Création <span class="buff">[Potion]</span>.<br>
        [Potion] : Soin <span class="stat-boost">8%</span> PV Max.<br>
        CD 20s.</p>
    `,
        1: `
        <h3>1 étoile</h3>
        <p>Fais-moi confiance! : Aura de dégâts (<span class="stat-boost">70%</span> Défense/sec).<br></p>
    `,
        2: `
        <h3>2 étoiles</h3>
        <p>PV <span class="stat-boost">+8%</span>.<br></p>
    `,
        3: `
        <h3>3 étoiles</h3>
        <p>Fais-moi confiance! = <span class="buff">[Bouclier]</span> (20% PV).<br></p>
    `,
        4: `
        <h3>4 étoiles</h3>
        <p>Défense <span class="stat-boost">+6%</span>.<br></p>
    `,
        5: `
        <h3>5 étoiles</h3>
        <p>[Potion] Améliorée :<br>
        - Soin <span class="stat-boost">12%</span> PV.<br>
        - Attaque <span class="stat-boost">+12%</span> (10s).<br>
        - Bouclier <span class="stat-boost">12%</span> PV Max (10s).</p>
    `
    },
    weaponData: {
        0: `
        <h3>Avancement 0 :</h3>
        <p>Augmente l'Attaque, la Défense et les PV de l'utilisateur de <span class="stat-boost">2%</span>.<br>
        Lorsque l'utilisateur obtient une <span class="buff">[Potion]</span> de Yoo Jinho, l'Attaque, la Défense et les PV des membres de l'équipe augmentent de <span class="stat-boost">1.5%</span> supplémentaires pendant 10 seconde(s).<br></p>
    `,
        1: `
        <h3>Avancement 5 étoiles :</h3>
        <p>Augmente l'Attaque, la Défense et les PV de l'utilisateur de <span class="stat-boost">5%</span>.<br>
        Lorsque l'utilisateur obtient une <span class="buff">[Potion]</span> de Yoo Jinho, l'Attaque, la Défense et les PV des membres de l'équipe augmentent de <span class="stat-boost">3%</span> supplémentaires pendant 10 seconde(s).<br></p>
    `,
        2: `
        <h3>Avancement 10 étoiles :</h3>
        <p>Augmente l'Attaque, la Défense et les PV de l'utilisateur de <span class="stat-boost">15%</span>.<br></p>
    `
    }
};

// --- BAEK YUNHO ---
huntersData["baek-yunho"] = {
    name: "Baek Yunho",
    rarity: "SSR",
    element: "Lumière",
    gradient: "linear-gradient(90deg, #f1c40f, #000)",
    image: "Chasseurs_SSR/lumiere/Baek_yunho/baek_art.png",
    weaponImage: "Chasseurs_SSR/lumiere/Baek_yunho/ame_de_tigre_blanc_reprimee/Relic_BaekYoonHo_Human_PortraitBig.png",
    weaponName: "Âme de tigre blanc réprimée",
    fullData: {
        0: `
        <h3>Passif :</h3>
        <p>Le dernier coup de toutes les compétences, à l'exception des attaques de base, applique l'effet <span class="buff">[Flammes blanches]</span>.<br></p>
        <div class="detail-box">
            <h4><span class="buff">[Flammes blanches]</span></h4>
            <p>Lorsque l'effet atteint 2 cumuls, il active l'effet <span class="buff">[Violente explosion]</span> qui inflige des dégâts équivalents à <span class="stat-boost">600%</span> de la Défense de l'utilisateur et applique <span class="buff">[Défense réduite]</span> à la cible.<br>
            Lorsque l'effet Violente explosion est utilisé sur la cible, sa Défense est réduite de <span class="stat-boost">5%</span> supplémentaires.<br>
            Durée: illimitée (jusqu'à 1 cumul)</p>
        </div>
        <div class="detail-box">
            <h4><span class="buff">[Défense réduite]</span></h4>
            <p>Réduit la Défense de <span class="stat-boost">20%</span>.<br>
            Durée: 12 secondes</p>
        </div>
    `,
        1: `
        <h3>1 étoile :</h3>
        <p>Augmente les dégâts de <strong>Coup de pied perçant de la flamme blanche</strong> de <span class="stat-boost">150%</span>.<br></p>
    `,
        2: `
        <h3>2 étoiles :</h3>
        <p>Augmente l'efficacité de [Bris] de l'utilisateur de <span class="stat-boost">20%</span></p>
    `,
        3: `
        <h3>3 étoiles :</h3>
        <p>Lors de l'utilisation de la compétence <strong>Vérité: Frappe de la flamme blanche</strong>, l'effet <span class="buff">[Bris lourd]</span> est appliqué.<br>
        Lors de l'utilisation des compétences <strong>Fosse sans fond</strong> ou <strong>Coup de pied perçant de la flamme blanche</strong>, l'effet <span class="buff">[Flammes blanches débloquées]</span> s'applique.<br></p>
        <div class="detail-box">
            <h4><span class="buff">[Débloquer Flammes blanches]</span></h4>
            <p>Augmente les dégâts de lumière de l'utilisateur de <span class="stat-boost">40%</span> et octroie <span class="buff">[Super armure]</span>.<br>
            Durée: 15 secondes</p>
        </div>
    `,
        4: `
        <h3>4 étoiles :</h3>
        <p>Le Taux de coup critique de l'utilisatrice augmente de <span class="stat-boost">16%</span>.<br></p>
    `,
        5: `
        <h3>5 étoiles :</h3>
        <p>Lorsque l'utilisateur rejoint le niveau, il récupère <span class="stat-boost">100 %</span> de sa jauge de puissance et les dégâts de <strong>Violente explosion</strong> augmentent de <span class="stat-boost">200%</span>.<br></p>
    `
    },
    summaryData: {
        0: `
        <h3>Passif : Instinct Sauvage</h3>
        <p>Compétences = [Flammes blanches].<br>
        2 Cumuls = [Violente explosion] (Dégâts via Défense) + [Défense réduite].<br></p>
        <div class="detail-box">
            <h4>[Défense réduite]</h4>
            <p>Défense cible <span class="stat-boost">-20%</span> (12s).<br></p>
        </div>
    `,
        1: `
        <h3>1 étoile</h3>
        <p>Dégâts Coup de pied perçant <span class="stat-boost">+150%</span>.<br></p>
    `,
        2: `
        <h3>2 étoiles</h3>
        <p>Efficacité Bris <span class="stat-boost">+20%</span>.<br></p>
    `,
        3: `
        <h3>3 étoiles</h3>
        <p>Vérité = [Bris lourd].<br>
        Autres skills = [Flammes débloquées] (Dégâts Lumière <span class="stat-boost">+40%</span> + Super Armure).<br></p>
    `,
        4: `
        <h3>4 étoiles</h3>
        <p>Taux Critique <span class="stat-boost">+16%</span>.<br></p>
    `,
        5: `
        <h3>5 étoiles</h3>
        <p>Entrée en combat : Jauge 100%.<br>
        Dégâts Violente explosion <span class="stat-boost">+200%</span>.<br></p>
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
        Face à des cibles affectées par l'effet <span class="buff">[Flammes blanches]</span>, la Défense de l'utilisateur augmente de <span class="stat-boost">20%</span> pendant 20 seconde(s).<br>
        (Temps de rechargement: 30 seconde(s))</p>
    `,
        2: `
        <h3>Avancement 10 étoiles :</h3>
        <p>Augmente l'Attaque, la Défense et les PV de l'utilisateur de <span class="stat-boost">15%</span>.<br></p>
    `
    }
};

// --- CHA HAE-IN ---
huntersData["cha-hae-in"] = {
    name: "Cha Hae-in",
    rarity: "SSR",
    element: "Lumière",
    gradient: "linear-gradient(90deg, #f1c40f, #000)",
    image: "Chasseurs_SSR/lumiere/Cha_hae_in/cha_art.png",
    weaponImage: "Chasseurs_SSR/lumiere/Cha_hae_in/epee_de_lumiere/Relic_ChaHaeIn_PortraitBig.png",
    weaponName: "Épée de lumière",
    fullData: {
        0: `
        <h3>Passif :</h3>
        <p>Lorsque la compétence La danseuse touche sa cible, l'utilisateur a <span class="stat-boost">66%</span> de chances de la <span class="buff">[marquer]</span>.<br>
        <div class="detail-box">
            <h4><span class="buff">[Marquage]</span></h4>
            <p>Le Taux de coup critique et les Dégâts de coup critique de la cible touchée augmentent de <span class="stat-boost">12%</span>.<br>
            Durée: 15 seconde(s)</p>
        </div>
    `,
        1: `
        <h3>1 étoile :</h3>
        <p>L'effet <span class="buff">[La danseuse]</span> peut se cumuler jusqu'à 5 fois.<br>
        Confère <span class="buff">[Super armure]</span> tant que l'effet <span class="buff">[Valse de l'épée]</span> est actif.</p>
    `,
        2: `
        <h3>2 étoiles :</h3>
        <p>Le Taux de coup critique de l'utilisatrice augmente de <span class="stat-boost">16%</span>.</p>
    `,
        3: `
        <h3>3 étoiles :</h3>
        <p>Face à une cible affectée par l'effet <span class="buff">[Marquage]</span>, les dégâts des compétences La danseuse et Épée de lumière augmentent de <span class="stat-boost">50%</span>.</p>
    `,
        4: `
        <h3>4 étoiles :</h3>
        <p>Les dégâts de coup critique de l'utilisatrice augmentent de <span class="stat-boost">16%</span>.</p>
    `,
        5: `
        <h3>5 étoiles :</h3>
        <p>Les dégâts et le Taux de coup critique de Lumière finale augmentent de <span class="stat-boost">20%</span> et <span class="stat-boost">2%</span> respectivement, en fonction du nombre de fois où l'utilisatrice applique l'effet de <span class="buff">[La danseuse]</span> (cumulable jusqu'à 5 fois).</p>
    `
    },
    summaryData: {
        0: `
        <h3>Passif : L'Odeur de Mana</h3>
        <p>La danseuse applique <span class="buff">[Marquage]</span> (66% chance).<br>
        [Marquage] : La cible subit + de Critiques (Taux/Dégâts <span class="stat-boost">+12%</span>).</p>
    `,
        1: `
        <h3>1 étoile</h3>
        <p>[La danseuse] cumulable 5 fois.<br>
        [Valse de l'épée] = <span class="buff">[Super Armure]</span>.</p>
    `,
        2: `
        <h3>2 étoiles</h3>
        <p>Taux Critique <span class="stat-boost">+16%</span>.</p>
    `,
        3: `
        <h3>3 étoiles</h3>
        <p>Contre cible [Marquée] : Dégâts Compétences <span class="stat-boost">+50%</span>.</p>
    `,
        4: `
        <h3>4 étoiles</h3>
        <p>Dégâts Critique <span class="stat-boost">+16%</span>.</p>
    `,
        5: `
        <h3>5 étoiles</h3>
        <p>Lumière finale (Ultime) boostée par cumuls de [La danseuse] (Dégâts/Crit <span class="stat-boost">+20%/+2%</span> par cumul).</p>
    `
    },
    weaponData: {
        0: `
        <h3>Avancement 0 :</h3>
        <p>Augmente les dégâts de compétence de base de l'utilisateur de <span class="stat-boost">5%</span>.<br>
        Lors de l'utilisation d'une compétence de base, les Dégâts de coup critique de l'utilisateur augmentent de <span class="stat-boost">2%</span> pendant 12 seconde(s) (cumulable jusqu'à 6 fois).</p>
    `,
        1: `
        <h3>Avancement 5 étoiles :</h3>
        <p>Augmente les dégâts de Compétence de base de l'utilisateur de <span class="stat-boost">20 %</span>.<br>
        Lors de l'utilisation d'une Compétence de base, les Dégâts de coup critique de l'utilisateur augmentent de <span class="stat-boost">8%</span> pendant 12 seconde(s) (cumulable jusqu'à 6 fois).</p>
    `,
        2: `
        <h3>Avancement 10 étoiles :</h3>
        <p>Augmente l'Attaque, la Défense et les PV de l'utilisateur de <span class="stat-boost">15%</span>.</p>
    `
    }
};

// --- GO GUNHEE ---
huntersData["go-gunhee"] = {
    name: "Go Gunhee",
    rarity: "SSR",
    element: "Lumière",
    gradient: "linear-gradient(90deg, #f1c40f, #000)",
    image: "Chasseurs_SSR/lumiere/Go_gunhee/go_art.png",
    weaponImage: "Chasseurs_SSR/lumiere/Go_gunhee/une_conviction_et_une_vocation/Relic_GoGunHee_PortraitBig.png",
    weaponName: "Une conviction et une vocation",
    fullData: {
        0: `
        <h3>Passif :</h3>
        <p>L'effet <span class="buff">[Vaisseau brisé]</span> est appliqué lorsque l'utilisateur arrive dans le niveau.<br>
        Lorsqu'il utilise les compétences <strong>Balayage</strong> ou <strong>Esprit combatif</strong>, l'effet <span class="buff">[Aura de dirigeant]</span> est appliqué.<br>
        Lors de l'utilisation de la compétence <strong>Pouvoir de la lumière brillante</strong>, l'effet <span class="buff">[Fragment de lumière brillante]</span> est appliqué.<br></p>
        <div class="detail-box">
            <h4><span class="buff">[Vaisseau brisé]</span></h4>
            <p>Diminue le taux de récupération de PV de <span class="stat-boost">50%</span>.<br>
            Durée: illimitée<br></p>
        </div>
        <div class="detail-box">
            <h4><span class="buff">[Aura de dirigeant]</span></h4>
            <p>Augmente la Défense de l'utilisateur de <span class="stat-boost">30%</span>.<br>
            L'utilisateur bénéficie d'un <span class="buff">[Bouclier]</span> équivalent à <span class="stat-boost">20%</span> de la Défense de Go Gunhee.<br>
            Durée: 10 seconde(s)<br></p>
        </div>
        <div class="detail-box">
            <h4><span class="buff">[Fragment de lumière brillante]</span></h4>
            <p>Active l'Attaque de noyau de l'utilisateur 1 fois.<br>
            L'Attaque de noyau de l'utilisateur devient <strong>Attaque lourde: Écrasement abdominal</strong> et ses dégâts augmentent de <span class="stat-boost">60%</span>.<br>
            Esprit combatif devient <strong>Attaque lourde: Esprit combatif</strong> et les dégâts infligés par l'utilisateur augmentent de <span class="stat-boost">60%</span>.<br>
            Durée: 15 seconde(s)</p>
        </div>
    `,
        1: `
        <h3>1 étoile :</h3>
        <p>Lors de l'utilisation des compétences <strong>Esprit combatif</strong> ou <strong>Attaque lourde: Esprit combatif</strong>, l'Attaque de noyau s'active.<br>
        Lors de l'utilisation des compétences <strong>Esprit combatif</strong> ou <strong>Attaque lourde: Esprit combatif</strong>, l'Attaque de noyau devient <strong>Attaque lourde: Écrasement abdominal</strong> pendant 15 seconde(s).<br>
        Lors de l'utilisation de la compétence <strong>Pouvoir de la lumière brillante</strong>, l'effet <span class="buff">[Volonté de lumière brillante]</span> est appliqué à tous les membres de l'équipe.<br></p>
        <div class="detail-box">
            <h4><span class="buff">[Volonté de lumière brillante]</span></h4>
            <p>Pour chaque membre de l'équipe de l'élément Lumière présent, les dégâts élémentaires de lumière infligés par l'utilisateur augmentent de <span class="stat-boost">8%</span>, et ses Dégâts de coup critique augmentent de <span class="stat-boost">8%</span>.<br></p>
        </div>
    `,
        2: `
        <h3>2 étoiles :</h3>
        <p>L'efficacité de <span class="buff">[Bris]</span> est augmentée de <span class="stat-boost">20%</span>.<br></p>
    `,
        3: `
        <h3>3 étoiles :</h3>
        <p>L'utilisation de la compétence <strong>Supernova</strong> inflige des dégâts de Bris tout-puissants.<br>
        L'effet <span class="buff">[Aura de dirigeant]</span> est amélioré.<br></p>
        <div class="detail-box">
            <h4><span class="buff">[Aura de dirigeant]</span> (Amélioré)</h4>
            <p>Augmente la Défense de l'utilisateur de <span class="stat-boost">50%</span>.<br>
            L'utilisateur bénéficie d'un Bouclier équivalent à <span class="stat-boost">20%</span> de la Défense de Go Gunhee.<br>
            Les dégâts subis par l'utilisateur diminuent de <span class="stat-boost">20%</span>.<br>
            Durée: 15 seconde(s)</p>
        </div>
    `,
        4: `
        <h3>4 étoiles :</h3>
        <p>Augmente la Défense de l'utilisateur de <span class="stat-boost">12%</span>.<br></p>
    `,
        5: `
        <h3>5 étoiles :</h3>
        <p>Les dégâts de la compétence <strong>Supernova</strong> augmentent de <span class="stat-boost">60%</span> lors d'une utilisation contre des cibles disposant d'une jauge de bris.<br>
        Lorsque la compétence Supernova touche une cible ne disposant pas de jauge de bris, l'effet <span class="buff">[Volonté du fragment]</span> est appliqué à tous les membres de l'équipe.<br></p>
        <div class="detail-box">
            <h4><span class="buff">[Volonté du fragment]</span></h4>
            <p>Augmente les Dégâts de coup critique de <span class="stat-boost">30%</span> et les dégâts de la Compétence QTE de <span class="stat-boost">150%</span>.<br>
            Durée: 20 seconde(s)</p>
        </div>
    `
    },
    summaryData: {
        0: `
        <h3>Passif : Le Dirigeant Illuminé</h3>
        <p>Début : <span class="buff">[Vaisseau brisé]</span> (Regen PV <span class="stat-boost">-50%</span>).<br>
        Compétences = <span class="buff">[Aura de dirigeant]</span> (Def/Bouclier).<br>
        Pouvoir lumière = <span class="buff">[Fragment]</span> (Boost Compétences/Core <span class="stat-boost">+60%</span>).</p>
    `,
        1: `
        <h3>1 étoile</h3>
        <p>Compétences activent Attaque Noyau (Lourde).<br>
        Pouvoir lumière = <span class="buff">[Volonté]</span> (Buff Dégâts Lumière/Crit Équipe par allié Lumière).</p>
    `,
        2: `
        <h3>2 étoiles</h3>
        <p>Efficacité Bris <span class="stat-boost">+20%</span>.</p>
    `,
        3: `
        <h3>3 étoiles</h3>
        <p>Supernova = Bris tout-puissant.<br>
        [Aura] Améliorée : Def <span class="stat-boost">+50%</span>, Réduction dégâts <span class="stat-boost">-20%</span>.</p>
    `,
        4: `
        <h3>4 étoiles</h3>
        <p>Défense <span class="stat-boost">+12%</span>.</p>
    `,
        5: `
        <h3>5 étoiles</h3>
        <p>Supernova sur Bris : Dégâts <span class="stat-boost">+60%</span>.<br>
        Supernova sans Bris : <span class="buff">[Volonté du fragment]</span> (Crit Dmg <span class="stat-boost">+30%</span>, QTE <span class="stat-boost">+150%</span> Équipe).</p>
    `
    },
    weaponData: {
        0: `
        <h3>Avancement 0 :</h3>
        <p>La Défense de l'utilisateur augmente de <span class="stat-boost">4%</span>.<br>
        Lorsque les compétences <strong>Esprit combatif</strong> ou <strong>Attaque lourde: Esprit combatif</strong> touchent leur cible, les dégâts élémentaires de lumière infligés à la cible augmentent de <span class="stat-boost">4%</span> pendant 15 seconde(s).<br></p>
    `,
        1: `
        <h3>Avancement 5 étoiles :</h3>
        <p>La Défense de l'utilisateur augmente de <span class="stat-boost">12%</span>.<br>
        Lorsque les compétences <strong>Esprit combatif</strong> ou <strong>Attaque lourde: Esprit combatif</strong> touchent leur cible, les dégâts élémentaires de lumière infligés à la cible augmentent de <span class="stat-boost">12%</span> pendant 15 seconde(s).<br></p>
    `,
        2: `
        <h3>Avancement 10 étoiles :</h3>
        <p>Augmente l'Attaque, la Défense et les PV de l'utilisateur de <span class="stat-boost">15%</span>.<br></p>
    `
    }
};

// --- LAURA WALKER ---
huntersData["laura-walker"] = {
    name: "Laura Walker",
    rarity: "SSR",
    element: "Lumière",
    gradient: "linear-gradient(90deg, #f1c40f, #000)",
    image: "Chasseurs_SSR/lumiere/Laura_walker/laura_art.png",
    weaponImage: "Chasseurs_SSR/lumiere/Laura_walker/eclair_dechire_nuit/Relic_LauraWalker_PortraitBig.png",
    weaponName: "Éclair déchire-nuit",
    fullData: {
        0: `
        <h3>Passif :</h3>
        <p>L'utilisation de la compétence <strong>Point de contrôle</strong> active l'effet <span class="buff">[Échéance]</span> 1 fois.<br>
        L'utilisation des compétences <strong>Escorte d'entreprise</strong> ou <strong>Administratrice en chef</strong> lorsque l'équipe est composée de chasseurs de l'élément Lumière applique l'effet <span class="buff">[Élan]</span> à toute l'équipe.<br>
        L'utilisation de la compétence <strong>Boucle de tâche</strong> applique l'effet <span class="buff">[Éclaireuse]</span> à tous les membres de l'équipe de l'élément Lumière.<br></p>
        
        <div class="detail-box">
            <h4><span class="buff">[Élan]</span></h4>
            <p>Augmente la Pénétration de défense de <span class="stat-boost">10 %</span>. Réduit les dégâts subis de <span class="stat-boost">10 %</span>.<br>
            Durée : 60 seconde(s).</p>
        </div>

        <div class="detail-box">
            <h4><span class="buff">[Éclaireuse]</span></h4>
            <p>Restaure en continu les PV à hauteur de <span class="stat-boost">2 %</span> de l'Attaque de Laura Walker toutes les 3 seconde(s).<br>
            Confère un Bouclier équivalent à <span class="stat-boost">3 %</span> de l'Attaque de Laura Walker toutes les 3 seconde(s).<br>
            Lorsque le Bouclier est actif, il active l'effet <span class="buff">[Secrétaire]</span>. Durée : 60 seconde(s).</p>
        </div>

        <div class="detail-box">
            <h4><span class="buff">[Secrétaire]</span></h4>
            <p>L'Attaque et la Défense augmentent de <span class="stat-boost">1 %</span>. Durée : 10 seconde(s) (cumulable jusqu'à 10 fois).</p>
        </div>
    `,
        1: `
        <h3>1 étoile :</h3>
        <p>L'Attaque et la Défense de tous les membres de l'équipe augmentent de <span class="stat-boost">9 %</span>.<br></p>
    `,
        2: `
        <h3>2 étoiles :</h3>
        <p>Lorsque l'utilisatrice quitte le combat, l'effet <span class="buff">[Entreprise]</span> est appliqué à tous les membres de l'équipe de l'élément Lumière, sauf Laura Walker, au bout de 3.5 seconde(s).<br>
        Chaque fois que les compétences <strong>Échéance</strong>, <strong>Boucle de tâche</strong> ou <strong>Officieusement</strong> touchent leur cible, elles leur appliquent l'effet <span class="buff">[Date butoir]</span>.<br>
        L'utilisation de la compétence <strong>Escorte d'entreprise</strong> améliore l'effet <span class="buff">[Développement]</span>.<br></p>

        <div class="detail-box">
            <h4><span class="buff">[Officieusement]</span></h4>
            <p>Laura Walker apparaît et fait claquer son fouet.<br>
            Elle inflige des dégâts élémentaires de lumière équivalents à <span class="stat-boost">1000 %</span> de son Attaque.<br>
            L'utilisation de cette compétence supprime les débuffs sur toute l'équipe. Compte comme une compétence de base.</p>
        </div>

        <div class="detail-box">
            <h4><span class="buff">[Entreprise]</span></h4>
            <p>Lorsqu'une attaque de lumière touche sa cible, elle lui applique l'effet <span class="buff">[Officieusement]</span> (temps de rechargement : 5 seconde(s)).<br>
            Durée : 60 seconde(s).</p>
        </div>

        <div class="detail-box">
            <h4><span class="buff">[Date butoir]</span></h4>
            <p>Augmente les dégâts subis de lumière de <span class="stat-boost">1 %</span>.<br>
            Durée : 60 seconde(s) (cumulable jusqu'à 20 fois).</p>
        </div>

        <div class="detail-box">
            <h4><span class="buff">[Développement]</span></h4>
            <p>Augmente les dégâts infligés de <span class="stat-boost">30 %</span>. Supprime les débuffs.<br>
            Durée : 30 seconde(s).</p>
        </div>
    `,
        3: `
        <h3>3 étoiles :</h3>
        <p>Les effets <span class="buff">[Éclaireuse]</span> et <span class="buff">[Secrétaire]</span> sont améliorés.<br>
        L'utilisation de <strong>Point de contrôle</strong> remplit la jauge de puissance de l'utilisatrice de <span class="stat-boost">50 %</span>.<br></p>

        <div class="detail-box">
            <h4>Amélioration <span class="buff">[Éclaireuse]</span></h4>
            <p>Restaure en continu les PV à hauteur de <span class="stat-boost">4 %</span> de l'Attaque de Laura Walker toutes les 3 seconde(s).<br>
            Confère un Bouclier équivalent à <span class="stat-boost">6 %</span> de l'Attaque de Laura Walker toutes les 3 seconde(s).<br>
            Lorsque le Bouclier est actif, il active l'effet <span class="buff">[Secrétaire]</span>. Durée : 60 seconde(s).</p>
        </div>

        <div class="detail-box">
            <h4>Amélioration <span class="buff">[Secrétaire]</span></h4>
            <p>Augmente l'Attaque et la Défense de <span class="stat-boost">1.7 %</span>. Durée : 10 seconde(s) (cumulable jusqu'à 10 fois).</p>
        </div>
    `,
        4: `
        <h3>4 étoiles :</h3>
        <p>Les dégâts infligés par les membres de l'équipe de l'élément Lumière augmentent de <span class="stat-boost">30 %</span>.<br></p>
    `,
        5: `
        <h3>5 étoiles :</h3>
        <p>L'effet <span class="buff">[Professionnelle]</span> est activé lorsque l'utilisatrice arrive dans le niveau.<br>
        Les effets <span class="buff">[Date butoir]</span> et <span class="buff">[Élan]</span> sont améliorés.<br></p>

        <div class="detail-box">
            <h4><span class="buff">[Professionnelle]</span></h4>
            <p>Augmente les dégâts de <strong>Boucle de tâche</strong> de <span class="stat-boost">250 %</span>.<br>
            Augmente les dégâts infligés de <span class="stat-boost">200 %</span>. L'utilisation de la compétence <strong>Boucle de tâche</strong> confère à l'utilisatrice un Bouclier équivalent à <span class="stat-boost">10 %</span> de l'Attaque de Laura Walker pendant 3 seconde(s).<br>
            Durée : illimitée.</p>
        </div>

        <div class="detail-box">
            <h4>Amélioration <span class="buff">[Date butoir]</span></h4>
            <p>Augmente les dégâts de lumière subis par la cible de <span class="stat-boost">1.5 %</span>.<br>
            Durée : 60 seconde(s) (cumulable jusqu'à 20 fois).</p>
        </div>

        <div class="detail-box">
            <h4>Amélioration <span class="buff">[Élan]</span></h4>
            <p>Augmente la Pénétration de défense de <span class="stat-boost">20 %</span>.<br>
            Réduit les dégâts subis de <span class="stat-boost">20 %</span>. Durée : 60 seconde(s).</p>
        </div>
    `
    },
    summaryData: {
        0: `
        <h3>Passif : Assistante Lumière</h3>
        <p>Buffs Équipe Lumière : <span class="buff">[Élan]</span> (Pénétration/Défense) et <span class="buff">[Éclaireuse]</span> (Soin/Bouclier).<br>
        Bouclier active <span class="buff">[Secrétaire]</span> (Att/Déf <span class="stat-boost">+1%</span>/stack).</p>
    `,
        1: `
        <h3>1 étoile</h3>
        <p>Attaque et Défense de toute l'équipe <span class="stat-boost">+9%</span>.<br></p>
    `,
        2: `
        <h3>2 étoiles</h3>
        <p>Sortie combat = <span class="buff">[Entreprise]</span> sur alliés (Active Officieusement : Dégâts/Cleanse).<br>
        Applique <span class="buff">[Date butoir]</span> (Debuff Dégâts Lumière <span class="stat-boost">1%</span>/stack).<br>
        Escorte améliore <span class="buff">[Développement]</span> (Dégâts <span class="stat-boost">+30%</span>, Cleanse).</p>
    `,
        3: `
        <h3>3 étoiles</h3>
        <p>Améliore <span class="buff">[Éclaireuse]</span> (Soin 4%, Bouclier 6%) et <span class="buff">[Secrétaire]</span> (Att/Def 1.7%).<br>
        Point de contrôle = Jauge Puissance <span class="stat-boost">+50%</span>.</p>
    `,
        4: `
        <h3>4 étoiles</h3>
        <p>Dégâts de l'équipe Lumière <span class="stat-boost">+30%</span>.<br></p>
    `,
        5: `
        <h3>5 étoiles</h3>
        <p>Entrée = <span class="buff">[Professionnelle]</span> (Dégâts massifs, Bouclier).<br>
        Améliore <span class="buff">[Date butoir]</span> (1.5%) et <span class="buff">[Élan]</span> (Pénétration/Réduc 20%).</p>
    `
    },
    weaponData: {
        0: `
        <h3>Avancement 0 :</h3>
        <p>L'Attaque de l'utilisatrice augmente de <span class="stat-boost">5%</span>.<br>
        L'utilisation des compétences <strong>Escorte d'entreprise</strong> ou <strong>Administratrice en chef</strong> augmente les dégâts de lumière de toute l'équipe de <span class="stat-boost">5%</span> pendant 30 seconde(s).</p>
    `,
        1: `
        <h3>Avancement 5 étoiles :</h3>
        <p>L'Attaque de l'utilisatrice augmente de <span class="stat-boost">12 %</span>.<br>
        L'utilisation des compétences <strong>Escorte d'entreprise</strong> ou <strong>Administratrice en chef</strong> augmente les dégâts de lumière de toute l'équipe de <span class="stat-boost">30%</span> pendant 30 seconde(s).</p>
    `,
        2: `
        <h3>Avancement 10 étoiles :</h3>
        <p>Augmente l'Attaque, la Défense et les PV de <span class="stat-boost">15%</span>.</p>
    `
    }
};

// --- MIN BYEONGGU ---
huntersData["min-byeonggu"] = {
    name: "Min Byeonggu",
    rarity: "SSR",
    element: "Lumière",
    gradient: "linear-gradient(90deg, #f1c40f, #000)",
    image: "Chasseurs_SSR/lumiere/Min_byeonggu/min_art.png",
    weaponImage: "Chasseurs_SSR/lumiere/Min_byeonggu/sommeil_eternel/Relic_MinByungGu_PortraitBig.png",
    weaponName: "Sommeil éternel",
    fullData: {
        0: `
        <h3>Passif :</h3>
        <p>Lors de l'appel d'un chasseur ou de l'utilisation de <strong>Châtiment divin</strong>, l'effet <span class="buff">[Dissimulation]</span>s'applique.<br></p>
        <div class="detail-box">
            <h4><span class="buff">[Dissimulation]</span></h4>
            <p>Réduit les dégâts subis de <span class="stat-boost">50%</span>.<br>
            Améliore un effet de compétence spécifique.<br>
            Si l'utilisateur est touché, l'effet [Dissimulation] se dissipe.<br>
            Durée: 10 seconde(s)</p>
        </div>
    `,
        1: `
        <h3>1 étoile :</h3>
        <p>Le Taux de coup critique et les Dégâts de coup critique de tous les membres de l'équipe augmentent de <span class="stat-boost">12%</span>.<br></p>
    `,
        2: `
        <h3>2 étoiles :</h3>
        <p>Les PV de l'utilisateur augmentent de <span class="stat-boost">8%</span>.<br></p>
    `,
        3: `
        <h3>3 étoiles :</h3>
        <p>Lors de l'utilisation de <strong>Lueur vive</strong>, toute l'équipe récupère instantanément des PV à hauteur de <span class="stat-boost">2%</span> des PV max de Min Byeonggu.<br></p>
    `,
        4: `
        <h3>4 étoiles :</h3>
        <p>Le Taux de remplissage de la jauge de puissance de Min Byeonggu augmente de <span class="stat-boost">10%</span>.<br></p>
    `,
        5: `
        <h3>5 étoiles :</h3>
        <p>Lors de l'utilisation de <strong>Bénédiction céleste</strong>, les dégâts de la prochaine compétence ultime du membre de l'équipe ayant la Puissance totale la plus élevée augmentent de <span class="stat-boost">50%</span>.<br></p>
    `
    },
    summaryData: {
        0: `
        <h3>Passif : Soutien de l'Ombre</h3>
        <p>Châtiment divin / Appel = <span class="buff">[Dissimulation]</span>.<br>
        [Dissimulation] : Réduction dégâts subis <span class="stat-boost">50%</span> + Amélioration compétence.<br>
        Se dissipe si touché (10s).</p>
    `,
        1: `
        <h3>1 étoile</h3>
        <p>Buff Équipe : Taux Critique et Dégâts Critique <span class="stat-boost">+12%</span>.<br></p>
    `,
        2: `
        <h3>2 étoiles</h3>
        <p>PV Max <span class="stat-boost">+8%</span>.<br></p>
    `,
        3: `
        <h3>3 étoiles</h3>
        <p>Lueur vive : Soin instantané Équipe (<span class="stat-boost">2%</span> PV Max de Min).<br></p>
    `,
        4: `
        <h3>4 étoiles</h3>
        <p>Gain Jauge de Puissance <span class="stat-boost">+10%</span>.<br></p>
    `,
        5: `
        <h3>5 étoiles</h3>
        <p>Bénédiction céleste : Boost Ultime du meilleur allié (<span class="stat-boost">+50%</span> Dégâts).<br></p>
    `
    },
    weaponData: {
        0: `
        <h3>Avancement 0 :</h3>
        <p>Augmente les PV de l'utilisateur de <span class="stat-boost">2.5%</span>.<br>
        Lorsque l'utilisateur lance <strong>Bénédiction céleste</strong>, les dégâts infligés par l'utilisateur et les membres de l'équipe augmentent de <span class="stat-boost">4%</span> pendant 16 seconde(s)</p>
    `,
        1: `
        <h3>Avancement 5 étoiles :</h3>
        <p>Augmente les PV de l'utilisateur de <span class="stat-boost">10%</span>.<br>
        Lorsque l'utilisateur lance <strong>Bénédiction céleste</strong>, les dégâts infligés par l'utilisateur et les membres de l'équipe augmentent de <span class="stat-boost">16%</span> pendant 16 seconde(s)</p>
    `,
        2: `
        <h3>Avancement 10 étoiles :</h3>
        <p>Augmente l'Attaque, la Défense et les PV de l'utilisateur de <span class="stat-boost">15%</span>.<br></p>
    `
    }
};

// --- SHIMIZU AKARI ---
huntersData["shimizu-akari"] = {
    name: "Shimizu Akari",
    rarity: "SSR",
    element: "Lumière",
    gradient: "linear-gradient(90deg, #f1c40f, #000)",
    image: "Chasseurs_SSR/lumiere/Shimizu_akari/shimizu_art.png",
    weaponImage: "Chasseurs_SSR/lumiere/Shimizu_akari/le_prix_d_une_promesse/Relic_ShimizuAkari_PortraitBig.png",
    weaponName: "Le prix d'une promesse",
    fullData: {
        0: `<h3>Passif :</h3>Au début du combat, l'effet <span class="buff">[Investigatrice de la flamme divine]</span> est activé.<br> Lorsque la compétence <strong>Lumière de l'aube</strong> est utilisée, Dévastation devient <strong>Attaque lourde: Dévastation</strong>, qui augmente les dégâts infligés par l'utilisatrice de <span class="stat-boost">100%</span>.<br> Si l'utilisatrice est touchée lors d'une <strong>Ruée</strong>, <strong>Évasion extrême</strong> est activée, les ennemis proches subissent des dégâts, et ces derniers sont <span class="buff">[étourdis]</span>.<br> <br><div class="detail-box"><h4><span class="buff">[Investigatrice de la flamme divine]</span></h4>Lorsque les compétences Lumière de l'aube ou Attaque lourde: Dévastation touchent leur cible, elles leur appliquent l'effet <span class="buff">[Flamme divine]</span> 1 fois.<br> Durée: illimitée</div><div class="detail-box"><h4><span class="buff">[Flamme divine]</span></h4>Augmente les dégâts de lumière subis par la cible de <span class="stat-boost">1%</span> (cumulable jusqu'à 10 fois).<br> Durée: 24 seconde(s)</div><div class="detail-box"><h4><span class="buff">[étourdissement]</span></h4>Immobilise la cible.<br> Durée: 2 seconde(s)</div>`,
        1: `<h3>1 étoile :</h3>Améliore l'effet <span class="buff">[Investigatrice de la flamme divin]</span>.<br> Améliore l'effet <span class="buff">[Feu sacré]</span>.<br> <br><div class="detail-box"><h4><span class="buff">[Investigatrice de la flamme divine]</span></h4>Lorsque les compétences Lumière de l'aube ou Attaque lourde: Dévastation touchent leur cible, elles lui appliquent 2 cumuls de l'effet <span class="buff">[Flamme divine]</span>.<br> Quand l'attaque d'un membre de l'équipe de type Lumière touche sa cible, elle active l'effet <span class="buff">[Echo de lumière]</span> (temps de rechargement: 20 seconde(s)).<br> Durée: illimitée</div><div class="detail-box"><h4><span class="buff">[Feu sacré]</span></h4>Active l'effet <span class="buff">[Écho de lumière]</span>.<br> Charge la jauge de puissance de l'utilisatrice de <span class="stat-boost">1.6%</span> toutes les 1 seconde(s).<br> Réduit les dégâts subis de <span class="stat-boost">12%</span>.<br> Durée: 24 Seconde(s)</div>`,
        2: `<h3>2 étoiles :</h3>Augmente les PV de l'utilisatrice de <span class="stat-boost">5%</span>.<br> Améliore le bouclier obtenu par les coéquipiers de type Lumière de <span class="stat-boost">5%</span>.<br>`,
        3: `<h3>3 étoiles :</h3>Améliore l'effet <span class="buff">[Flamme divine]</span>.<br> Améliore l'effet <span class="buff">[Anneau de feu]</span>.<br> <br><div class="detail-box"><h4><span class="buff">[Flamme divine]</span></h4>Augmente les dégâts de lumière subis de <span class="stat-boost">1.6%</span> (cumulable jusqu'à 10 fois).<br> Lorsque le maximum de cumuls est atteint, l'effet <span class="buff">[Anneau de feu]</span> s'active.<br> Durée: 24 seconde(s)</div><div class="detail-box"><h4><span class="buff">[Anneau de feu]</span></h4>Augmente les dégâts de lumière subis de <span class="stat-boost">20%</span>.<br> Lorsque cet effet est appliqué, il dissipe tous les effets [Flamme divine] qui ne peuvent plus être réactivés.<br> Lorsque cet effet se dissipe, l'utilisatrice récupère 5 cumuls de l'effet [Flamme divine].<br> Durée: 24 seconde(s)</div>`,
        4: `<h3>4 étoiles :</h3>Augmente les dégâts de lumière des coéquipiers de type Lumière de <span class="stat-boost">3%</span> par coéquipier de type Lumière présent dans le groupe.<br> Augmente la défense du coéquipier doté de la défense la plus élevée de <span class="stat-boost">3%</span>.<br>`,
        5: `<h3>5 étoiles :</h3>Améliore l'effet <span class="buff">[Brillance]</span>.<br> <br><div class="detail-box"><h4><span class="buff">[Brillance]</span></h4>Augmente les dégâts infligés par l'utilisatrice de <span class="stat-boost">16%</span>.<br> Augmente le Taux de coup critique de la compétence de base et de la compétence ultime de l'utilisatrice de <span class="stat-boost">16%</span>.<br> Redonne instantanément des PV équivalents à <span class="stat-boost">16%</span> des PV max de Shimizu Akari.<br> Durée: 24 seconde(s)</div>`
    },
    summaryData: {
        0: `<h3>Passif : Prêtresse de la Flamme</h3>Début combat : [Investigatrice].<br> Lumière de l'aube = Attaque Lourde (+100% dégâts).<br> Ruée touchée = Évasion + [Étourdis].<br> [Flamme divine] : Dégâts Lumière subis +1% (Max 10).`,
        1: `<h3>1 étoile</h3>[Investigatrice] : Applique 2 cumuls.<br> Attaque allié Lumière = [Echo de lumière].<br> [Feu sacré] : Regen Jauge, Réduction Dégâts.`,
        2: `<h3>2 étoiles</h3>PV +5%.<br> Bouclier alliés Lumière +5%.`,
        3: `<h3>3 étoiles</h3>[Flamme divine] améliorée (+1.6%).<br> Max cumuls = [Anneau de feu] (+20% Dégâts Lumière subis).`,
        4: `<h3>4 étoiles</h3>Dégâts Lumière équipe +3% par allié Lumière.<br> Def +3% pour le tank.`,
        5: `<h3>5 étoiles</h3>[Brillance] améliorée : Dégâts +16%, Crit +16%, Soin 16%.`
    },
    weaponData: {
        0: `<h3>0 étoile :</h3>Augmente les PV de l'utilisatrice de <span class="stat-boost">4%</span>.<br> Lorsque l'effet <span class="buff">[Écho de lumière]</span> est activé sur les coéquipiers de type Lumière, augmente les dégâts de lumière de tous les membres de l'équipe de <span class="stat-boost">2%</span> pendant 8 seconde(s).<br>`,
        1: `<h3>5 étoiles :</h3>Augmente les PV de l'utilisatrice de <span class="stat-boost">12%</span>.<br> Lorsque l'effet <span class="buff">[Écho de lumière]</span> est activé sur les coéquipiers de type Lumière, augmente les dégâts de lumière de tous les membres de l'équipe de <span class="stat-boost">8%</span> pendant 8 seconde(s).<br>`,
        2: `<h3>10 étoiles :</h3>Augmente l'Attaque, la Défense et les PV de l'utilisateur de 15%.<br>`
    }
};

// --- THOMAS ANDRÉ ---
huntersData["thomas-andre"] = {
    name: "Thomas André",
    rarity: "SSR",
    element: "Lumière",
    gradient: "linear-gradient(90deg, #f1c40f, #000)",
    image: "Chasseurs_SSR/lumiere/Thomas_andre/thomas_art.png",
    weaponImage: "Chasseurs_SSR/lumiere/Thomas_andre/le_veritable_roi/Relic_ThomasAndre_PortraitBig.png",
    weaponName: "Le véritable roi",
    fullData: {
        0: `
        <h3>Passif :</h3>
        <p>Lorsque les compétences <strong>Démolition absolue</strong>, <strong>Écrasement colossal</strong>, <strong>Coup de marteau géant</strong> ou <strong>Coup à la volée</strong> sont utilisées, elles activent l'effet <span class="buff">[Puissance écrasante]</span>.<br>
        La jauge de puissance de l'utilisateur ne se remplira pas et il n'y aura plus de temps de rechargement.<br>
        À la place, <strong>Jugement du chef</strong> sera disponible au bout de 5 cumuls de [Puissance écrasante] (temps de rechargement: 36 seconde(s)).<br>
        En mode [Combat d'équipe], les dégâts infligés par l'utilisateur augmentent de <span class="stat-boost">24 %</span>.<br></p>
        <div class="detail-box">
            <h4><span class="buff">[Puissance écrasante]</span></h4>
            <p>Augmente la Défense de l'utilisateur de <span class="stat-boost">10%</span>.<br>
            Augmente les probabilités d'acquisition de bouclier de l'utilisateur de <span class="stat-boost">2%</span>.<br>
            Durée: 25 seconde(s) (cumulable jusqu'à 5 fois)</p>
        </div>
    `,
        1: `
        <h3>1 étoile :</h3>
        <p>Lorsque l'utilisateur bénéficie d'un effet <span class="buff">[Bouclier]</span>, l'effet <span class="buff">[Puissance écrasante]</span> est activé.<br></p>
    `,
        2: `
        <h3>2 étoiles :</h3>
        <p>Augmente les probabilités d'acquisition de bouclier de <span class="stat-boost">8%</span>.<br>
        Lorsqu'un effet <span class="buff">[Bouclier]</span> est actif, les Dégâts de coup critique et le Taux de coup critique de l'utilisateur augmentent de <span class="stat-boost">10%</span>.<br></p>
    `,
        3: `
        <h3>3 étoiles :</h3>
        <p>L'effet <span class="buff">[Surcroissance]</span> est appliqué lorsqu'un effet [Bouclier] est actif.<br>
        (temps de rechargement: 0,5 seconde)<br>
        Si le dernier coup de la compétence <strong>Écrasement colossal</strong> touche sa cible pendant que l'effet <span class="buff">[Tyran d'acier]</span> est actif, l'effet <span class="buff">[Surcroissance]</span> est activé.<br></p>
        <div class="detail-box">
            <h4><span class="buff">[Surcroissance]</span></h4>
            <p>Le Bouclier de l'utilisateur vole en éclats de mana qui infligent des dégâts de zone de lumière équivalents à <span class="stat-boost">200 %</span> de la Défense de Thomas André.<br>
            Pour chaque tranche de 1.000 points d'effet de [Bouclier] appliqués, les dégâts de Surcroissance augmentent de <span class="stat-boost">100%</span> (cumulable jusqu'à 1000%).<br></p>
        </div>
    `,
        4: `
        <h3>4 étoiles :</h3>
        <p>Augmente la Défense de <span class="stat-boost">16%</span>.<br></p>
    `,
        5: `
        <h3>5 étoiles :</h3>
        <p>Lorsque l'effet <span class="buff">[Tyran d'acier]</span> est actif, il augmente les dégâts de <strong>Collision de trou noir</strong> de <span class="stat-boost">125%</span>.<br></p>
    `
    },
    summaryData: {
        0: `
        <h3>Passif : Le Goliath</h3>
        <p>Compétences = <span class="buff">[Puissance écrasante]</span> (Def +10%, Chance Bouclier +2%, Max 5).<br>
        Pas de Jauge/CD normal.<br> 5 cumuls = Ultime dispo.<br>
        Combat équipe : Dégâts <span class="stat-boost">+24%</span>.</p>
    `,
        1: `
        <h3>1 étoile</h3>
        <p>Si <span class="buff">[Bouclier]</span> actif = active [Puissance écrasante].<br></p>
    `,
        2: `
        <h3>2 étoiles</h3>
        <p>Chance Bouclier <span class="stat-boost">+8%</span>.<br>
        Si Bouclier : Crit Rate/Dmg <span class="stat-boost">+10%</span>.<br></p>
    `,
        3: `
        <h3>3 étoiles</h3>
        <p>Bouclier actif = <span class="buff">[Surcroissance]</span> (Explosion du bouclier en dégâts).<br>
        Dégâts Explosion basés sur la valeur du Bouclier (<span class="stat-boost">+100%</span> par 1000 pts).<br></p>
    `,
        4: `
        <h3>4 étoiles</h3>
        <p>Défense <span class="stat-boost">+16%</span>.<br></p>
    `,
        5: `
        <h3>5 étoiles</h3>
        <p>Sous [Tyran d'acier] : Dégâts Collision de trou noir <span class="stat-boost">+125%</span>.<br></p>
    `
    },
    weaponData: {
        0: `
        <h3>Avancement 0 :</h3>
        <p>Augmente la Défense de <span class="stat-boost">4%</span>.<br>
        Augmente les probabilités d'acquisition de bouclier de <span class="stat-boost">6%</span>.<br></p>
    `,
        1: `
        <h3>Avancement 5 étoiles :</h3>
        <p>Augmente la Défense de <span class="stat-boost">16%</span>.<br>
        Augmente les probabilités d'acquisition de bouclier de <span class="stat-boost">24%</span>.<br></p>
    `,
        2: `
        <h3>Avancement 10 étoiles :</h3>
        <p>Augmente l'Attaque, la Défense et les PV de l'utilisateur de <span class="stat-boost">15%</span>.<br></p>
    `
    }
};

// --- MIYEON ---
huntersData["miyeon"] = {
    name: "Miyeon",
    rarity: "SSR",
    element: "Lumière",
    gradient: "linear-gradient(90deg, #f1c40f, #000)",
    image: "Chasseurs_SSR/collab/lumiere/Miyeon/miyeon_art.png",
    weaponImage: "Chasseurs_SSR/collab/lumiere/Miyeon/l_etoile_guide_du_champ_de_bataille/Relic_Miyeon_PortraitBig.png",
    weaponName: "L'étoile guide du champ de bataille",
    fullData: {
        0: `
        <h3>Passif :</h3>
        <p>Tout l'équipe reçoit l'effet <span class="buff">[FOREVER]</span> en arrivant dans les modes Mission Rappel et Donjon éphémère.<br>
        Lors de l'utilisation de la compétence <strong>Tête d'affiche</strong>, l'effet <span class="buff">[Coup de projecteur]</span> s'active.<br></p>
        
        <div class="detail-box">
            <h4><span class="buff">[FOREVER]</span></h4>
            <p>Augmente les dégâts infligés de <span class="stat-boost">5 %</span>.<br>
            Durée : illimitée (cumulable jusqu'à 3 fois)</p>
        </div>

        <div class="detail-box">
            <h4><span class="buff">[Coup de projecteur]</span></h4>
            <p>Lors de l'utilisation de son attaque de noyau, l'utilisatrice place un <span class="buff">[Cristal d'énergie de mana noir]</span>.<br>
            Augmente les dégâts de lumière de l'utilisatrice de <span class="stat-boost">15 %</span>.<br>
            Confère un <span class="buff">[Bouclier]</span> équivalent à <span class="stat-boost">5 %</span> des PV max de MIYEON. Augmente la Défense de l'utilisatrice de <span class="stat-boost">30 %</span>.<br>
            Durée : 15 seconde(s)</p>
        </div>

        <div class="detail-box">
            <h4><span class="buff">[Cristal d'énergie de mana noir]</span></h4>
            <p>Dégâts : inflige des dégâts équivalents à <span class="stat-boost">250 %</span> des dégâts de l'attaque de noyau de l'utilisatrice.</p>
        </div>
    `,
        1: `
        <h3>1 étoile :</h3>
        <p>Lorsque l'utilisatrice rejoint un niveau, sa jauge de puissance se remplit de <span class="stat-boost">50 %</span>.<br>
        Lors de l'utilisation de <strong>Tête d'affiche</strong>, l'attaque de noyau de l'utilisatrice s'active et elle récupère ses PM à hauteur de 600.<br></p>
    `,
        2: `
        <h3>2 étoiles :</h3>
        <p>Augmente les dégâts de lumière de <span class="stat-boost">15 %</span>.<br></p>
    `,
        3: `
        <h3>3 étoiles :</h3>
        <p>L'utilisation des compétences <strong>Glissando decrescendo</strong>, <strong>Fente en deux temps</strong> ou <strong>Entaille critique</strong> confère un <span class="buff">[Bouclier]</span> équivalent à <span class="stat-boost">5 %</span> des PV max de MIYEON pendant 15 seconde(s) (cumulable jusqu'à 10 fois).<br>
        Tant que le <span class="buff">[Bouclier]</span> est actif, la Défense de l'utilisatrice augmente de <span class="stat-boost">6 %</span> pendant 30 seconde(s) (cumulable jusqu'à 10 fois).<br></p>
    `,
        4: `
        <h3>4 étoiles :</h3>
        <p>La Défense des membres de l'équipe de l'élément Lumière augmente de <span class="stat-boost">3 %</span> par allié de l'élément Lumière.<br></p>
    `,
        5: `
        <h3>5 étoiles :</h3>
        <p>L'utilisation de la compétence <strong>Tête d'affiche</strong> augmente le Taux de coup critique de l'utilisatrice de <span class="stat-boost">10 %</span> et ses Dégâts de coup critique de <span class="stat-boost">20 %</span> pendant 15 seconde(s).<br>
        Lors de l'utilisation des compétences <strong>Glissando decrescendo</strong>, <strong>Fente en deux temps</strong> ou <strong>Entaille critique</strong>, la jauge de puissance de MIYEON se remplit de <span class="stat-boost">3 %</span> et le temps de rechargement de <strong>Tête d'affiche</strong> de 4.5 seconde(s).<br></p>
    `
    },
    summaryData: {
        0: `
        <h3>Passif : Idol de Lumière</h3>
        <p>Modes spéciaux : Buff <span class="buff">[FOREVER]</span> (Dégâts +5%).<br>
        <strong>Tête d'affiche</strong> active <span class="buff">[Coup de projecteur]</span> : Dégâts Lumière <span class="stat-boost">+15%</span>, Défense <span class="stat-boost">+30%</span>, Bouclier.<br>
        Pose un <span class="buff">[Cristal]</span> (Dégâts de zone).</p>
    `,
        1: `
        <h3>1 étoile</h3>
        <p>Entrée : Jauge 50%.<br>
        <strong>Tête d'affiche</strong> déclenche Attaque Noyau + Regen 600 PM.</p>
    `,
        2: `
        <h3>2 étoiles</h3>
        <p>Dégâts Lumière <span class="stat-boost">+15%</span>.<br></p>
    `,
        3: `
        <h3>3 étoiles</h3>
        <p>Compétences confèrent <span class="buff">[Bouclier]</span> (Stackable).<br>
        Sous Bouclier : Défense <span class="stat-boost">+6%</span> par stack.</p>
    `,
        4: `
        <h3>4 étoiles</h3>
        <p>Défense équipe Lumière <span class="stat-boost">+3%</span> par allié Lumière.<br></p>
    `,
        5: `
        <h3>5 étoiles</h3>
        <p><strong>Tête d'affiche</strong> : Crit Rate <span class="stat-boost">+10%</span>, Crit Dmg <span class="stat-boost">+20%</span>.<br>
        Compétences : Jauge <span class="stat-boost">+3%</span>, CD Tête d'affiche <span class="stat-boost">-4.5s</span>.</p>
    `
    },
    weaponData: {
        0: `
        <h3>Avancement 0 :</h3>
        <p>La Défense de l'utilisatrice augmente de <span class="stat-boost">2 %</span>.<br>
        L'utilisation de l'attaque de noyau applique aux ennemis se trouvant dans un rayon de 20 m un effet d'augmentation des dégats infligés par MIYEON de <span class="stat-boost">5 %</span> pendant 5 seconde(s) (temps de rechargement: 20 seconde(s)).</p>
    `,
        1: `
        <h3>Avancement 5 étoiles :</h3>
        <p>La Défense de l'utilisatrice augmente de <span class="stat-boost">12 %</span>.<br>
        L'utilisation de l'attaque de noyau applique aux ennemis se trouvant dans un rayon de 20 m un effet d'augmentation des dégats infligés par MIYEON de <span class="stat-boost">30 %</span> pendant 30 seconde(s) (temps de rechargement: 20 seconde(s)).</p>
    `,
        2: `
        <h3>Avancement 10 étoiles :</h3>
        <p>Augmente l'Attaque, la Défense et les PV de l'utilisatrice de <span class="stat-boost">15 %</span>.</p>
    `
    }
};