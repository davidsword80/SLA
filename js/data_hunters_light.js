if (typeof huntersData === 'undefined') { 
    var huntersData = {}; 
}

// --- CHO GYUHWAN ---
huntersData["cho-gyuhwan"] = {
    name: "Cho GyuHwan",
    rarity: "SR",
    element: "Lumière",
    gradient: "linear-gradient(90deg, #fac700, #000)", // Dégradé jaune/or pour la lumière
    image: "Chasseurs_SR/lumiere/Cho_gyu_hwan/ChoGyuHwan_Portrait_Body.png",
    weaponImage: "Chasseurs_SR/lumiere/Cho_gyu_hwan/la_belle_vie/Relic_ChoGyuHwan_PortraitBig.png",
    weaponName: "La belle vie",
    fullData: {
        0: fmtPassif(`Passif :`, `Augmente l'Attaque de l'utilisateur face aux cibles affectées par [Brûlure].`, [
        { title: `[Attaque augmentée]`, content: `Augmente l'Attaque de 25%.
            Durée: 10 seconde(s)
            Temps de rechargement: 20 seconde(s)` }
    ], "Lumière"),
        1: fmtPassif(`1 étoile :`, `L'effet passif de Kyuhwan s'applique même s'il touche une cible affectée par [Brûlure].`, [], "Lumière"),
        2: fmtPassif(`2 étoiles :`, `Les Points de mana de Kyuhwan augmentent de 30%.`, [], "Lumière"),
        3: fmtPassif(`3 étoiles :`, `La consommation de PM des compétences de lumière augmente de 25%, mais leur portée et leurs dégâts augmentent de 50%.`, [], "Lumière"),
        4: fmtPassif(`4 étoiles :`, `Augmente le Taux de récupération naturel du mana de 50%.`, [], "Lumière"),
        5: fmtPassif(`5 étoiles :`, `Augment la portée de la compétence **Rayon irradiant** de 20% et lorsque la première attaque touche sa cible, elle lui applique l'effet [étourdissement].`, [
        { title: `[étourdissement]`, content: `La cible est immobilisée.
            Durée: 1 seconde(s)` }
    ], "Lumière")
    },
    summaryData: {
        0: `
        <h3>Passif : Mage de <span class="element-lumiere">Lumière</span></h3>
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
        <p>Compétences <span class="element-lumiere">Lumière</span> : Conso PM +25%, mais Portée/Dégâts <span class="stat-boost">+50%</span>.<br></p>
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
        0: fmtWeapon(`Avancement 0 :`, `Augmente l'Attaque de l'utilisateur de 2%.

        Si les PM de l'utilisateur sont à 50% ou au-dessus, les dégâts de son attaque de noyau, de sa compétence de base et de sa Compétence QTE augmentent de 10%.`, "Lumière"),
        1: fmtWeapon(`Avancement 5 étoiles :`, `Augmente l'Attaque de l'utilisateur de 8%.

        Si les PM de l'utilisateur sont à 50% ou au-dessus, les dégâts de son attaque de noyau, de sa compétence de base et de sa Compétence QTE augmentent de 40 %.`, "Lumière"),
        2: fmtWeapon(`Avancement 10 étoiles :`, `Augmente l'Attaque, la Défense et les PV de l'utilisateur de 15%.`, "Lumière")
    }
};

// --- KIM CHUL ---
huntersData["kim-chul"] = {
    name: "Kim Chul",
    rarity: "SR",
    element: "Lumière",
    gradient: "linear-gradient(90deg, #fac700, #000)",
    image: "Chasseurs_SR/lumiere/Kim_chul/KimChul_Portrait_Body.png",
    weaponImage: "Chasseurs_SR/lumiere/Kim_chul/la_volonte_du_gardien/Relic_KimChul_PortraitBig.png",
    weaponName: "La volonté du gardien",
    fullData: {
        0: fmtPassif(`Passif :`, `Lors de l'utilisation des compétences **Saut de bouclier** ou **Rugissement féroce**, l'effet [Impénétrable] est appliqué.`, [
        { title: `[Impénétrable]`, content: `Crée un [Bouclier] équivalent à 2.5 % de la Défense de l'utilisateur.
            Durée: 10 seconde(s)` }
    ], "Lumière"),
        1: fmtPassif(`1 étoile :`, `Modification des effets de la compétence **Saut de bouclier**

        Peut être utilisée jusqu'à 2 fois.

        Réduit le temps de rechargement de 2 secondes.`, [], "Lumière"),
        2: fmtPassif(`2 étoiles :`, `Augmente la Défense de l'utilisateur de 6%.`, [], "Lumière"),
        3: fmtPassif(`3 étoiles :`, `Lorsqu'un personnage [quitte le combat], l'effet [Impénétrable] est appliqué à toute l'équipe.`, [
        { title: `[Impénétrable]`, content: `Crée un [Bouclier] équivalent à 8% de la
            Défense de l'utilisateur.
            Durée: 10 seconde(s)
            Temps de rechargement: 30 seconde(s)` }
    ], "Lumière"),
        4: fmtPassif(`4 étoiles :`, `Les PV de l'utilisateur augmentent de 8%.`, [], "Lumière"),
        5: fmtPassif(`5 étoiles :`, `L'effet [Défense réduite] s'applique pendant **Saut de bouclier**.`, [
        { title: `[Défense réduite]`, content: `Réduit la Défense de 16%.
            Durée: 10 seconde(s)` }
    ], "Lumière")
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
        0: fmtWeapon(`Avancement 0 :`, `Augmente la Défense de l'utilisateur de 2.5%.

        Lors de l'utilisation de la compétence **Saut de bouclier**, les dégâts subis par l'équipe diminuent de 2% pendant 20 seconde(s).`, "Lumière"),
        1: fmtWeapon(`Avancement 5 étoiles :`, `Augmente la Défense de l'utilisateur de 10%.

        Lors de l'utilisation de la compétence **Saut de bouclier**, les dégâts subis par l'équipe diminuent de 12% pendant 20 seconde(s).`, "Lumière"),
        2: fmtWeapon(`Avancement 10 étoiles :`, `Augmente l'Attaque, la Défense et les PV de l'utilisateur de 15%.`, "Lumière")
    }
};

// --- YOO JINHO ---
huntersData["yoo-jinho"] = {
    name: "Yoo Jinho",
    rarity: "SR",
    element: "Lumière",
    gradient: "linear-gradient(90deg, #fac700, #000)",
    image: "Chasseurs_SR/lumiere/Yoo_jinho/YooJinHo_Portrait_Body.png",
    weaponImage: "Chasseurs_SR/lumiere/Yoo_jinho/enchante/Relic_YooJinHo_PortraitBig.png",
    weaponName: "Enchanté",
    fullData: {
        0: fmtPassif(`Passif :`, `Lorsque **[À mon tour!, Fais-moi confiance! ou Je vais te protéger!]** touche sa cible, une potion est créée près de l'utilisateur.`, [
        { title: `[Potion]`, content: `En obtenant une potion, les PV sont restaurés à hauteur de 8% des PV max de Yoo Jinho.
            Temps de rechargement: 20 seconde(s)` }
    ], "Lumière"),
        1: fmtPassif(`1 étoile :`, `Lors de l'utilisation de la compétence **Fais-moi confiance!**, l'utilisateur crée une aura qui inflige toutes les secondes des dégâts équivalents à 70% de sa Défense pendant la durée d'application du buff de Fais-moi confiance !.`, [], "Lumière"),
        2: fmtPassif(`2 étoiles :`, `Les PV de l'utilisateur augmentent de 8%.`, [], "Lumière"),
        3: fmtPassif(`3 étoiles :`, `Lors de l'utilisation de la compétence **Fais-moi confiance!**, un [Bouclier] est appliqué.`, [
        { title: `[Bouclier]`, content: `Crée un [Bouclier] équivalent à 20% des PV de l'utilisateur.
            Durée: 8 seconde(s)` }
    ], "Lumière"),
        4: fmtPassif(`4 étoiles :`, `Augmente la Défense de l'utilisateur de 6 %.`, [], "Lumière"),
        5: fmtPassif(`5 étoiles :`, `Tous les effets ci-dessous s'appliquent à l'obtention d'une [Potion].

        Restauration de 12% des PV max de Yoo Jinho.

        Applique l'effet [Attaque augmentée].

        Applique un [Bouclier].`, [
        { title: `[Attaque augmentée]`, content: `Augmente l'Attaque de 12%.
            Durée: 10 seconde(s)` },
        { title: `[Bouclier]`, content: `Crée un [Bouclier] équivalent à 12% des PV max de Yoo Jinho.
            Durée: 10 seconde(s)` }
    ], "Lumière")
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
        0: fmtWeapon(`Avancement 0 :`, `Augmente l'Attaque, la Défense et les PV de l'utilisateur de 2%.

        Lorsque l'utilisateur obtient une [Potion] de Yoo Jinho, l'Attaque, la Défense et les PV des membres de l'équipe augmentent de 1.5% supplémentaires pendant 10 seconde(s).`, "Lumière"),
        1: fmtWeapon(`Avancement 5 étoiles :`, `Augmente l'Attaque, la Défense et les PV de l'utilisateur de 5%.

        Lorsque l'utilisateur obtient une [Potion] de Yoo Jinho, l'Attaque, la Défense et les PV des membres de l'équipe augmentent de 3% supplémentaires pendant 10 seconde(s).`, "Lumière"),
        2: fmtWeapon(`Avancement 10 étoiles :`, `Augmente l'Attaque, la Défense et les PV de l'utilisateur de 15%.`, "Lumière")
    }
};

// --- BAEK YUNHO ---
huntersData["baek-yunho"] = {
    name: "Baek Yunho",
    rarity: "SSR",
    element: "Lumière",
    gradient: "linear-gradient(90deg, #fac700, #000)",
    image: "Chasseurs_SSR/lumiere/Baek_yunho/baek_art.png",
    weaponImage: "Chasseurs_SSR/lumiere/Baek_yunho/ame_de_tigre_blanc_reprimee/Relic_BaekYoonHo_Human_PortraitBig.png",
    weaponName: "Âme de tigre blanc réprimée",
    fullData: {
        0: fmtPassif(`Passif :`, `Le dernier coup de toutes les compétences, à l'exception des attaques de base, applique l'effet [Flammes blanches].`, [
        { title: `[Flammes blanches]`, content: `Lorsque l'effet atteint 2 cumuls, il active l'effet [Violente explosion] qui inflige des dégâts équivalents à 600% de la Défense de l'utilisateur et applique [Défense réduite] à la cible.
            Lorsque l'effet Violente explosion est utilisé sur la cible, sa Défense est réduite de 5% supplémentaires.
            Durée: illimitée (jusqu'à 1 cumul)` },
        { title: `[Défense réduite]`, content: `Réduit la Défense de 20%.
            Durée: 12 secondes` }
    ], "Lumière"),
        1: fmtPassif(`1 étoile :`, `Augmente les dégâts de **Coup de pied perçant de la flamme blanche** de 150%.`, [], "Lumière"),
        2: fmtPassif(`2 étoiles :`, `Augmente l'efficacité de [Bris] de l'utilisateur de 20%`, [], "Lumière"),
        3: fmtPassif(`3 étoiles :`, `Lors de l'utilisation de la compétence **Vérité: Frappe de la flamme blanche**, l'effet [Bris lourd] est appliqué.

        Lors de l'utilisation des compétences **Fosse sans fond** ou **Coup de pied perçant de la flamme blanche**, l'effet [Flammes blanches débloquées] s'applique.`, [
        { title: `[Débloquer Flammes blanches]`, content: `Augmente les dégâts de lumière de l'utilisateur de 40% et octroie [Super armure].
            Durée: 15 secondes` }
    ], "Lumière"),
        4: fmtPassif(`4 étoiles :`, `Le Taux de coup critique de l'utilisatrice augmente de 16%.`, [], "Lumière"),
        5: fmtPassif(`5 étoiles :`, `Lorsque l'utilisateur rejoint le niveau, il récupère 100 % de sa jauge de puissance et les dégâts de **Violente explosion** augmentent de 200%.`, [], "Lumière")
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
        Autres skills = [Flammes débloquées] (Dégâts <span class="element-lumiere">Lumière</span> <span class="stat-boost">+40%</span> + Super Armure).<br></p>
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
        0: fmtWeapon(`Avancement 0 :`, `Augmente les dégâts de lumière de l'utilisateur de 4%.

        Face à des cibles affectées par l'effet [Flammes blanches], la Défense de l'utilisateur augmente de 5% pendant 20 seconde(s).

        (Temps de rechargement: 30 seconde(s))`, "Lumière"),
        1: fmtWeapon(`Avancement 5 étoiles :`, `Augmente les dégâts de lumière de l'utilisateur de 12%.

        Face à des cibles affectées par l'effet [Flammes blanches], la Défense de l'utilisateur augmente de 20% pendant 20 seconde(s).

        (Temps de rechargement: 30 seconde(s))`, "Lumière"),
        2: fmtWeapon(`Avancement 10 étoiles :`, `Augmente l'Attaque, la Défense et les PV de l'utilisateur de 15%.`, "Lumière")
    }
};

// --- CHA HAE-IN ---
huntersData["cha-hae-in"] = {
    name: "Cha Hae-in",
    rarity: "SSR",
    element: "Lumière",
    gradient: "linear-gradient(90deg, #fac700, #000)",
    image: "Chasseurs_SSR/lumiere/Cha_hae_in/cha_art.png",
    weaponImage: "Chasseurs_SSR/lumiere/Cha_hae_in/epee_de_lumiere/Relic_ChaHaeIn_PortraitBig.png",
    weaponName: "Épée de lumière",
    fullData: {
        0: fmtPassif(`Passif :`, `<p>Lorsque la compétence La danseuse touche sa cible, l'utilisateur a 66% de chances de la [marquer].`, [
        { title: `[Marquage]`, content: `Le Taux de coup critique et les Dégâts de coup critique de la cible touchée augmentent de 12%.
            Durée: 15 seconde(s)` }
    ], "Lumière"),
        1: fmtPassif(`1 étoile :`, `L'effet [La danseuse] peut se cumuler jusqu'à 5 fois.

        Confère [Super armure] tant que l'effet [Valse de l'épée] est actif.`, [], "Lumière"),
        2: fmtPassif(`2 étoiles :`, `Le Taux de coup critique de l'utilisatrice augmente de 16%.`, [], "Lumière"),
        3: fmtPassif(`3 étoiles :`, `Face à une cible affectée par l'effet [Marquage], les dégâts des compétences La danseuse et Épée de lumière augmentent de 50%.`, [], "Lumière"),
        4: fmtPassif(`4 étoiles :`, `Les dégâts de coup critique de l'utilisatrice augmentent de 16%.`, [], "Lumière"),
        5: fmtPassif(`5 étoiles :`, `Les dégâts et le Taux de coup critique de Lumière finale augmentent de 20% et 2% respectivement, en fonction du nombre de fois où l'utilisatrice applique l'effet de [La danseuse] (cumulable jusqu'à 5 fois).`, [], "Lumière")
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
        <p><span class="element-lumiere">Lumière</span> finale (Ultime) boostée par cumuls de [La danseuse] (Dégâts/Crit <span class="stat-boost">+20%/+2%</span> par cumul).</p>
    `
    },
    weaponData: {
        0: fmtWeapon(`Avancement 0 :`, `Augmente les dégâts de compétence de base de l'utilisateur de 5%.

        Lors de l'utilisation d'une compétence de base, les Dégâts de coup critique de l'utilisateur augmentent de 2% pendant 12 seconde(s) (cumulable jusqu'à 6 fois).`, "Lumière"),
        1: fmtWeapon(`Avancement 5 étoiles :`, `Augmente les dégâts de compétence de base de l'utilisateur de 20 %.

        Lors de l'utilisation d'une compétence de base, les Dégâts de coup critique de l'utilisateur augmentent de 8% pendant 12 seconde(s) (cumulable jusqu'à 6 fois).`, "Lumière"),
        2: fmtWeapon(`Avancement 10 étoiles :`, `Augmente l'Attaque, la Défense et les PV de l'utilisateur de 15%.`, "Lumière")
    }
};

// --- GO GUNHEE ---
huntersData["go-gunhee"] = {
    name: "Go Gunhee",
    rarity: "SSR",
    element: "Lumière",
    gradient: "linear-gradient(90deg, #fac700, #000)",
    image: "Chasseurs_SSR/lumiere/Go_gunhee/go_art.png",
    weaponImage: "Chasseurs_SSR/lumiere/Go_gunhee/une_conviction_et_une_vocation/Relic_GoGunHee_PortraitBig.png",
    weaponName: "Une conviction et une vocation",
    fullData: {
        0: fmtPassif(`Passif :`, `L'effet [Vaisseau brisé] est appliqué lorsque l'utilisateur arrive dans le niveau.

        Lorsqu'il utilise les compétences **Balayage** ou **Esprit combatif**, l'effet [Aura de dirigeant] est appliqué.

        Lors de l'utilisation de la compétence **Pouvoir de la lumière brillante**, l'effet [Fragment de lumière brillante] est appliqué.`, [
        { title: `[Vaisseau brisé]`, content: `Diminue le taux de récupération de PV de 50%.
            Durée: illimitée` },
        { title: `[Aura de dirigeant]`, content: `Augmente la Défense de l'utilisateur de 30%.
            L'utilisateur bénéficie d'un [Bouclier] équivalent à 20% de la Défense de Go Gunhee.
            Durée: 10 seconde(s)` },
        { title: `[Fragment de lumière brillante]`, content: `Active l'attaque de noyau de l'utilisateur 1 fois.
            L'attaque de noyau de l'utilisateur devient **Attaque lourde: Écrasement abdominal** et ses dégâts augmentent de 60%.
            Esprit combatif devient **Attaque lourde: Esprit combatif** et les dégâts infligés par l'utilisateur augmentent de 60%.
            Durée: 15 seconde(s)` }
    ], "Lumière"),
        1: fmtPassif(`1 étoile :`, `Lors de l'utilisation des compétences **Esprit combatif** ou **Attaque lourde: Esprit combatif**, l'attaque de noyau s'active.

        Lors de l'utilisation des compétences **Esprit combatif** ou **Attaque lourde: Esprit combatif**, l'attaque de noyau devient **Attaque lourde: Écrasement abdominal** pendant 15 seconde(s).

        Lors de l'utilisation de la compétence **Pouvoir de la lumière brillante**, l'effet [Volonté de lumière brillante] est appliqué à tous les membres de l'équipe.`, [
        { title: `[Volonté de lumière brillante]`, content: `Pour chaque membre de l'équipe de l'élément Lumière présent, les dégâts élémentaires de lumière infligés par l'utilisateur augmentent de 8%, et ses Dégâts de coup critique augmentent de 8%.` }
    ], "Lumière"),
        2: fmtPassif(`2 étoiles :`, `L'efficacité de [Bris] est augmentée de 20%.`, [], "Lumière"),
        3: fmtPassif(`3 étoiles :`, `L'utilisation de la compétence **Supernova** inflige des dégâts de Bris tout-puissants.

        L'effet [Aura de dirigeant] est amélioré.`, [
        { title: `[Aura de dirigeant] (Amélioré)`, content: `Augmente la Défense de l'utilisateur de 50%.
            L'utilisateur bénéficie d'un Bouclier équivalent à 20% de la Défense de Go Gunhee.
            Les dégâts subis par l'utilisateur diminuent de 20%.
            Durée: 15 seconde(s)` }
    ], "Lumière"),
        4: fmtPassif(`4 étoiles :`, `Augmente la Défense de l'utilisateur de 12%.`, [], "Lumière"),
        5: fmtPassif(`5 étoiles :`, `Les dégâts de la compétence **Supernova** augmentent de 60% lors d'une utilisation contre des cibles disposant d'une jauge de bris.

        Lorsque la compétence Supernova touche une cible ne disposant pas de jauge de bris, l'effet [Volonté du fragment] est appliqué à tous les membres de l'équipe.`, [
        { title: `[Volonté du fragment]`, content: `Augmente les Dégâts de coup critique de 30% et les dégâts de la Compétence QTE de 150%.
            Durée: 20 seconde(s)` }
    ], "Lumière")
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
        Pouvoir lumière = <span class="buff">[Volonté]</span> (Buff Dégâts <span class="element-lumiere">Lumière</span>/Crit Équipe par allié <span class="element-lumiere">Lumière</span>).</p>
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
        0: fmtWeapon(`Avancement 0 :`, `La Défense de l'utilisateur augmente de 4%.

        Lorsque les compétences **Esprit combatif** ou **Attaque lourde: Esprit combatif** touchent leur cible, les dégâts élémentaires de lumière infligés à la cible augmentent de 4% pendant 15 seconde(s).`, "Lumière"),
        1: fmtWeapon(`Avancement 5 étoiles :`, `La Défense de l'utilisateur augmente de 12%.

        Lorsque les compétences **Esprit combatif** ou **Attaque lourde: Esprit combatif** touchent leur cible, les dégâts élémentaires de lumière infligés à la cible augmentent de 12% pendant 15 seconde(s).`, "Lumière"),
        2: fmtWeapon(`Avancement 10 étoiles :`, `Augmente l'Attaque, la Défense et les PV de l'utilisateur de 15%.`, "Lumière")
    }
};

// --- LAURA WALKER ---
huntersData["laura-walker"] = {
    name: "Laura Walker",
    rarity: "SSR",
    element: "Lumière",
    gradient: "linear-gradient(90deg, #fac700, #000)",
    image: "Chasseurs_SSR/lumiere/Laura_walker/laura_art.png",
    weaponImage: "Chasseurs_SSR/lumiere/Laura_walker/eclair_dechire_nuit/Relic_LauraWalker_PortraitBig.png",
    weaponName: "Éclair déchire-nuit",
    fullData: {
        0: fmtPassif(`Passif :`, `L'utilisation de la compétence **Point de contrôle** active l'effet [Échéance] 1 fois.

        L'utilisation des compétences **Escorte d'entreprise** ou **Administratrice en chef** lorsque l'équipe est composée de chasseurs de l'élément Lumière applique l'effet [Élan] à toute l'équipe.

        L'utilisation de la compétence **Boucle de tâche** applique l'effet [Éclaireuse] à tous les membres de l'équipe de l'élément Lumière.`, [
        { title: `[Élan]`, content: `Augmente la Pénétration de défense de 10 %. Réduit les dégâts subis de 10 %.
            Durée : 60 seconde(s).` },
        { title: `[Éclaireuse]`, content: `Restaure en continu les PV à hauteur de 2 % de l'Attaque de Laura Walker toutes les 3 seconde(s).
            Confère un Bouclier équivalent à 3 % de l'Attaque de Laura Walker toutes les 3 seconde(s).
            Lorsque le Bouclier est actif, il active l'effet [Secrétaire]. Durée : 60 seconde(s).` },
        { title: `[Secrétaire]`, content: `L'Attaque et la Défense augmentent de 1 %. Durée : 10 seconde(s) (cumulable jusqu'à 10 fois).` }
    ], "Lumière"),
        1: fmtPassif(`1 étoile :`, `L'Attaque et la Défense de tous les membres de l'équipe augmentent de 9 %.`, [], "Lumière"),
        2: fmtPassif(`2 étoiles :`, `Lorsque l'utilisatrice quitte le combat, l'effet [Entreprise] est appliqué à tous les membres de l'équipe de l'élément Lumière, sauf Laura Walker, au bout de 3.5 seconde(s).

        Chaque fois que les compétences **Échéance**, **Boucle de tâche** ou **Officieusement** touchent leur cible, elles leur appliquent l'effet [Date butoir].

        L'utilisation de la compétence **Escorte d'entreprise** améliore l'effet [Développement].`, [
        { title: `[Officieusement]`, content: `Laura Walker apparaît et fait claquer son fouet.
            Elle inflige des dégâts élémentaires de lumière équivalents à 1000 % de son Attaque.
            L'utilisation de cette compétence supprime les débuffs sur toute l'équipe. Compte comme une compétence de base.` },
        { title: `[Entreprise]`, content: `Lorsqu'une attaque de lumière touche sa cible, elle lui applique l'effet [Officieusement] (temps de rechargement : 5 seconde(s)).
            Durée : 60 seconde(s).` },
        { title: `[Date butoir]`, content: `Augmente les dégâts subis de lumière de 1 %.
            Durée : 60 seconde(s) (cumulable jusqu'à 20 fois).` },
        { title: `[Développement]`, content: `Augmente les dégâts infligés de 30 %. Supprime les débuffs.
            Durée : 30 seconde(s).` }
    ], "Lumière"),
        3: fmtPassif(`3 étoiles :`, `Les effets [Éclaireuse] et [Secrétaire] sont améliorés.

        L'utilisation de **Point de contrôle** remplit la jauge de puissance de l'utilisatrice de 50 %.`, [
        { title: `Amélioration [Éclaireuse]`, content: `Restaure en continu les PV à hauteur de 4 % de l'Attaque de Laura Walker toutes les 3 seconde(s).
            Confère un Bouclier équivalent à 6 % de l'Attaque de Laura Walker toutes les 3 seconde(s).
            Lorsque le Bouclier est actif, il active l'effet [Secrétaire]. Durée : 60 seconde(s).` },
        { title: `Amélioration [Secrétaire]`, content: `Augmente l'Attaque et la Défense de 1.7 %. Durée : 10 seconde(s) (cumulable jusqu'à 10 fois).` }
    ], "Lumière"),
        4: fmtPassif(`4 étoiles :`, `Les dégâts infligés par les membres de l'équipe de l'élément Lumière augmentent de 30 %.`, [], "Lumière"),
        5: fmtPassif(`5 étoiles :`, `L'effet [Professionnelle] est activé lorsque l'utilisatrice arrive dans le niveau.

        Les effets [Date butoir] et [Élan] sont améliorés.`, [
        { title: `[Professionnelle]`, content: `Augmente les dégâts de **Boucle de tâche** de 250 %.
            Augmente les dégâts infligés de 200 %. L'utilisation de la compétence **Boucle de tâche** confère à l'utilisatrice un Bouclier équivalent à 10 % de l'Attaque de Laura Walker pendant 3 seconde(s).
            Durée : illimitée.` },
        { title: `Amélioration [Date butoir]`, content: `Augmente les dégâts de lumière subis par la cible de 1.5 %.
            Durée : 60 seconde(s) (cumulable jusqu'à 20 fois).` },
        { title: `Amélioration [Élan]`, content: `Augmente la Pénétration de défense de 20 %.
            Réduit les dégâts subis de 20 %. Durée : 60 seconde(s).` }
    ], "Lumière")
    },
    summaryData: {
        0: `
        <h3>Passif : Assistante <span class="element-lumiere">Lumière</span></h3>
        <p>Buffs Équipe <span class="element-lumiere">Lumière</span> : <span class="buff">[Élan]</span> (Pénétration/Défense) et <span class="buff">[Éclaireuse]</span> (Soin/Bouclier).<br>
        Bouclier active <span class="buff">[Secrétaire]</span> (Att/Déf <span class="stat-boost">+1%</span>/stack).</p>
    `,
        1: `
        <h3>1 étoile</h3>
        <p>Attaque et Défense de toute l'équipe <span class="stat-boost">+9%</span>.<br></p>
    `,
        2: `
        <h3>2 étoiles</h3>
        <p>Sortie combat = <span class="buff">[Entreprise]</span> sur alliés (Active Officieusement : Dégâts/Cleanse).<br>
        Applique <span class="buff">[Date butoir]</span> (Debuff Dégâts <span class="element-lumiere">Lumière</span> <span class="stat-boost">1%</span>/stack).<br>
        Escorte améliore <span class="buff">[Développement]</span> (Dégâts <span class="stat-boost">+30%</span>, Cleanse).</p>
    `,
        3: `
        <h3>3 étoiles</h3>
        <p>Améliore <span class="buff">[Éclaireuse]</span> (Soin 4%, Bouclier 6%) et <span class="buff">[Secrétaire]</span> (Att/Def 1.7%).<br>
        Point de contrôle = Jauge Puissance <span class="stat-boost">+50%</span>.</p>
    `,
        4: `
        <h3>4 étoiles</h3>
        <p>Dégâts de l'équipe <span class="element-lumiere">Lumière</span> <span class="stat-boost">+30%</span>.<br></p>
    `,
        5: `
        <h3>5 étoiles</h3>
        <p>Entrée = <span class="buff">[Professionnelle]</span> (Dégâts massifs, Bouclier).<br>
        Améliore <span class="buff">[Date butoir]</span> (1.5%) et <span class="buff">[Élan]</span> (Pénétration/Réduc 20%).</p>
    `
    },
    weaponData: {
        0: fmtWeapon(`Avancement 0 :`, `L'Attaque de l'utilisatrice augmente de 5%.

        L'utilisation des compétences **Escorte d'entreprise** ou **Administratrice en chef** augmente les dégâts de lumière de toute l'équipe de 5% pendant 30 seconde(s).`, "Lumière"),
        1: fmtWeapon(`Avancement 5 étoiles :`, `L'Attaque de l'utilisatrice augmente de 12 %.

        L'utilisation des compétences **Escorte d'entreprise** ou **Administratrice en chef** augmente les dégâts de lumière de toute l'équipe de 30% pendant 30 seconde(s).`, "Lumière"),
        2: fmtWeapon(`Avancement 10 étoiles :`, `Augmente l'Attaque, la Défense et les PV de 15%.`, "Lumière")
    }
};

// --- MIN BYEONGGU ---
huntersData["min-byeonggu"] = {
    name: "Min Byeonggu",
    rarity: "SSR",
    element: "Lumière",
    gradient: "linear-gradient(90deg, #fac700, #000)",
    image: "Chasseurs_SSR/lumiere/Min_byeonggu/min_art.png",
    weaponImage: "Chasseurs_SSR/lumiere/Min_byeonggu/sommeil_eternel/Relic_MinByungGu_PortraitBig.png",
    weaponName: "Sommeil éternel",
    fullData: {
        0: fmtPassif(`Passif :`, `Lors de l'appel d'un chasseur ou de l'utilisation de **Châtiment divin**, l'effet [Dissimulation]s'applique.`, [
        { title: `[Dissimulation]`, content: `Réduit les dégâts subis de 50%.
            Améliore un effet de compétence spécifique.
            Si l'utilisateur est touché, l'effet [Dissimulation] se dissipe.
            Durée: 10 seconde(s)` }
    ], "Lumière"),
        1: fmtPassif(`1 étoile :`, `Le Taux de coup critique et les Dégâts de coup critique de tous les membres de l'équipe augmentent de 12%.`, [], "Lumière"),
        2: fmtPassif(`2 étoiles :`, `Les PV de l'utilisateur augmentent de 8%.`, [], "Lumière"),
        3: fmtPassif(`3 étoiles :`, `Lors de l'utilisation de **Lueur vive**, toute l'équipe récupère instantanément des PV à hauteur de 2% des PV max de Min Byeonggu.`, [], "Lumière"),
        4: fmtPassif(`4 étoiles :`, `Le Taux de remplissage de la jauge de puissance de Min Byeonggu augmente de 10%.`, [], "Lumière"),
        5: fmtPassif(`5 étoiles :`, `Lors de l'utilisation de **Bénédiction céleste**, les dégâts de la prochaine compétence ultime du membre de l'équipe ayant la Puissance totale la plus élevée augmentent de 50%.`, [], "Lumière")
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
        0: fmtWeapon(`Avancement 0 :`, `Augmente les PV de l'utilisateur de 2.5%.

        Lorsque l'utilisateur lance **Bénédiction céleste**, les dégâts infligés par l'utilisateur et les membres de l'équipe augmentent de 4% pendant 16 seconde(s)`, "Lumière"),
        1: fmtWeapon(`Avancement 5 étoiles :`, `Augmente les PV de l'utilisateur de 10%.

        Lorsque l'utilisateur lance **Bénédiction céleste**, les dégâts infligés par l'utilisateur et les membres de l'équipe augmentent de 16% pendant 16 seconde(s)`, "Lumière"),
        2: fmtWeapon(`Avancement 10 étoiles :`, `Augmente l'Attaque, la Défense et les PV de l'utilisateur de 15%.`, "Lumière")
    }
};

// --- SHIMIZU AKARI ---
huntersData["shimizu-akari"] = {
    name: "Shimizu Akari",
    rarity: "SSR",
    element: "Lumière",
    gradient: "linear-gradient(90deg, #fac700, #000)",
    image: "Chasseurs_SSR/lumiere/Shimizu_akari/shimizu_art.png",
    weaponImage: "Chasseurs_SSR/lumiere/Shimizu_akari/le_prix_d_une_promesse/Relic_ShimizuAkari_PortraitBig.png",
    weaponName: "Le prix d'une promesse",
    fullData: {
        0: fmtPassif(`Passif :`, `Au début du combat, l'effet [Investigatrice de la flamme divine] est activé.
 Lorsque la compétence **Lumière de l'aube** est utilisée, Dévastation devient **Attaque lourde: Dévastation**, qui augmente les dégâts infligés par l'utilisatrice de 100%.
 Si l'utilisatrice est touchée lors d'une **Ruée**, **Évasion extrême** est activée, les ennemis proches subissent des dégâts, et ces derniers sont [étourdis].
 
<div class="detail-box"><h4>[Investigatrice de la flamme divine]</h4>Lorsque les compétences Lumière de l'aube ou Attaque lourde: Dévastation touchent leur cible, elles leur appliquent l'effet [Flamme divine] 1 fois.
 Durée: illimitée<div class="detail-box"><h4>[Flamme divine]</h4>Augmente les dégâts de lumière subis par la cible de 1% (cumulable jusqu'à 10 fois).
 Durée: 24 seconde(s)<div class="detail-box"><h4>[étourdissement]</h4>Immobilise la cible.
 Durée: 2 seconde(s)`, [], "Lumière"),
        1: fmtPassif(`1 étoile :`, `Améliore l'effet [Investigatrice de la flamme divin].
 Améliore l'effet [Feu sacré].
 
<div class="detail-box"><h4>[Investigatrice de la flamme divine]</h4>Lorsque les compétences Lumière de l'aube ou Attaque lourde: Dévastation touchent leur cible, elles lui appliquent 2 cumuls de l'effet [Flamme divine].
 Quand l'attaque d'un membre de l'équipe de type Lumière touche sa cible, elle active l'effet [Echo de lumière] (temps de rechargement: 20 seconde(s)).
 Durée: illimitée<div class="detail-box"><h4>[Feu sacré]</h4>Active l'effet [Écho de lumière].
 Charge la jauge de puissance de l'utilisatrice de 1.6% toutes les 1 seconde(s).
 Réduit les dégâts subis de 12%.
 Durée: 24 Seconde(s)`, [], "Lumière"),
        2: fmtPassif(`2 étoiles :`, `Augmente les PV de l'utilisatrice de 5%.
 Améliore le bouclier obtenu par les coéquipiers de type Lumière de 5%.`, [], "Lumière"),
        3: fmtPassif(`3 étoiles :`, `Améliore l'effet [Flamme divine].
 Améliore l'effet [Anneau de feu].
 
<div class="detail-box"><h4>[Flamme divine]</h4>Augmente les dégâts de lumière subis de 1.6% (cumulable jusqu'à 10 fois).
 Lorsque le maximum de cumuls est atteint, l'effet [Anneau de feu] s'active.
 Durée: 24 seconde(s)<div class="detail-box"><h4>[Anneau de feu]</h4>Augmente les dégâts de lumière subis de 20%.
 Lorsque cet effet est appliqué, il dissipe tous les effets [Flamme divine] qui ne peuvent plus être réactivés.
 Lorsque cet effet se dissipe, l'utilisatrice récupère 5 cumuls de l'effet [Flamme divine].
 Durée: 24 seconde(s)`, [], "Lumière"),
        4: fmtPassif(`4 étoiles :`, `Augmente les dégâts de lumière des coéquipiers de type Lumière de 3% par coéquipier de type Lumière présent dans le groupe.
 Augmente la défense du coéquipier doté de la défense la plus élevée de 3%.`, [], "Lumière"),
        5: fmtPassif(`5 étoiles :`, `Améliore l'effet [Brillance].
 
<div class="detail-box"><h4>[Brillance]</h4>Augmente les dégâts infligés par l'utilisatrice de 16%.
 Augmente le Taux de coup critique de la compétence de base et de la compétence ultime de l'utilisatrice de 16%.
 Redonne instantanément des PV équivalents à 16% des PV max de Shimizu Akari.
 Durée: 24 seconde(s)`, [], "Lumière")
    },
    summaryData: {
        0: `<h3>Passif : Prêtresse de la Flamme</h3>Début combat : [Investigatrice].<br> <span class="element-lumiere">Lumière</span> de l'aube = Attaque Lourde (+100% dégâts).<br> Ruée touchée = Évasion + [Étourdis].<br> [Flamme divine] : Dégâts <span class="element-lumiere">Lumière</span> subis +1% (Max 10).`,
        1: `<h3>1 étoile</h3>[Investigatrice] : Applique 2 cumuls.<br> Attaque allié <span class="element-lumiere">Lumière</span> = [Echo de lumière].<br> [<span class="element-feu">Feu</span> sacré] : Regen Jauge, Réduction Dégâts.`,
        2: `<h3>2 étoiles</h3>PV +5%.<br> Bouclier alliés <span class="element-lumiere">Lumière</span> +5%.`,
        3: `<h3>3 étoiles</h3>[Flamme divine] améliorée (+1.6%).<br> Max cumuls = [Anneau de feu] (+20% Dégâts <span class="element-lumiere">Lumière</span> subis).`,
        4: `<h3>4 étoiles</h3>Dégâts <span class="element-lumiere">Lumière</span> équipe +3% par allié <span class="element-lumiere">Lumière</span>.<br> Def +3% pour le tank.`,
        5: `<h3>5 étoiles</h3>[Brillance] améliorée : Dégâts +16%, Crit +16%, Soin 16%.`
    },
    weaponData: {
        0: fmtWeapon(`0 étoile :`, `Augmente les PV de l'utilisatrice de 4%.
 Lorsque l'effet [Écho de lumière] est activé sur les coéquipiers de type Lumière, augmente les dégâts de lumière de tous les membres de l'équipe de 2% pendant 8 seconde(s).`, "Lumière"),
        1: fmtWeapon(`5 étoiles :`, `Augmente les PV de l'utilisatrice de 12%.
 Lorsque l'effet [Écho de lumière] est activé sur les coéquipiers de type Lumière, augmente les dégâts de lumière de tous les membres de l'équipe de 8% pendant 8 seconde(s).`, "Lumière"),
        2: fmtWeapon(`10 étoiles :`, `Augmente l'Attaque, la Défense et les PV de l'utilisateur de 15%.`, "Lumière")
    }
};

// --- THOMAS ANDRÉ ---
huntersData["thomas-andre"] = {
    name: "Thomas André",
    rarity: "SSR",
    element: "Lumière",
    gradient: "linear-gradient(90deg, #fac700, #000)",
    image: "Chasseurs_SSR/lumiere/Thomas_andre/thomas_art.png",
    weaponImage: "Chasseurs_SSR/lumiere/Thomas_andre/le_veritable_roi/Relic_ThomasAndre_PortraitBig.png",
    weaponName: "Le véritable roi",
    fullData: {
        0: fmtPassif(`Passif :`, `Lorsque les compétences **Démolition absolue**, **Écrasement colossal**, **Coup de marteau géant** ou **Coup à la volée** sont utilisées, elles activent l'effet [Puissance écrasante].

        La jauge de puissance de l'utilisateur ne se remplira pas et il n'y aura plus de temps de rechargement.

        À la place, **Jugement du chef** sera disponible au bout de 5 cumuls de [Puissance écrasante] (temps de rechargement: 36 seconde(s)).

        En mode [Combat d'équipe], les dégâts infligés par l'utilisateur augmentent de 24 %.`, [
        { title: `[Puissance écrasante]`, content: `Augmente la Défense de l'utilisateur de 10%.
            Augmente les probabilités d'acquisition de bouclier de l'utilisateur de 2%.
            Durée: 25 seconde(s) (cumulable jusqu'à 5 fois)` }
    ], "Lumière"),
        1: fmtPassif(`1 étoile :`, `Lorsque l'utilisateur bénéficie d'un effet [Bouclier], l'effet [Puissance écrasante] est activé.`, [], "Lumière"),
        2: fmtPassif(`2 étoiles :`, `Augmente les probabilités d'acquisition de bouclier de 8%.

        Lorsqu'un effet [Bouclier] est actif, les Dégâts de coup critique et le Taux de coup critique de l'utilisateur augmentent de 10%.`, [], "Lumière"),
        3: fmtPassif(`3 étoiles :`, `L'effet [Surcroissance] est appliqué lorsqu'un effet [Bouclier] est actif.

        (temps de rechargement: 0,5 seconde)

        Si le dernier coup de la compétence **Écrasement colossal** touche sa cible pendant que l'effet [Tyran d'acier] est actif, l'effet [Surcroissance] est activé.`, [
        { title: `[Surcroissance]`, content: `Le Bouclier de l'utilisateur vole en éclats de mana qui infligent des dégâts de zone de lumière équivalents à 200 % de la Défense de Thomas André.
            Pour chaque tranche de 1.000 points d'effet de [Bouclier] appliqués, les dégâts de Surcroissance augmentent de 100% (cumulable jusqu'à 1000%).` }
    ], "Lumière"),
        4: fmtPassif(`4 étoiles :`, `Augmente la Défense de 16%.`, [], "Lumière"),
        5: fmtPassif(`5 étoiles :`, `Lorsque l'effet [Tyran d'acier] est actif, il augmente les dégâts de **Collision de trou noir** de 125%.`, [], "Lumière")
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
        0: fmtWeapon(`Avancement 0 :`, `Augmente la Défense de 4%.

        Augmente les probabilités d'acquisition de bouclier de 6%.`, "Lumière"),
        1: fmtWeapon(`Avancement 5 étoiles :`, `Augmente la Défense de 16%.

        Augmente les probabilités d'acquisition de bouclier de 24%.`, "Lumière"),
        2: fmtWeapon(`Avancement 10 étoiles :`, `Augmente l'Attaque, la Défense et les PV de l'utilisateur de 15%.`, "Lumière")
    }
};

// --- MIYEON ---
huntersData["miyeon"] = {
    name: "Miyeon",
    rarity: "SSR",
    element: "Lumière",
    gradient: "linear-gradient(90deg, #fac700, #000)",
    image: "Chasseurs_SSR/collab/lumiere/Miyeon/miyeon_art.png",
    weaponImage: "Chasseurs_SSR/collab/lumiere/Miyeon/l_etoile_guide_du_champ_de_bataille/Relic_Miyeon_PortraitBig.png",
    weaponName: "L'étoile guide du champ de bataille",
    fullData: {
        0: fmtPassif(`Passif :`, `Tout l'équipe reçoit l'effet [FOREVER] en arrivant dans les modes Mission Rappel et Donjon éphémère.

        Lors de l'utilisation de la compétence **Tête d'affiche**, l'effet [Coup de projecteur] s'active.`, [
        { title: `[FOREVER]`, content: `Augmente les dégâts infligés de 5 %.
            Durée : illimitée (cumulable jusqu'à 3 fois)` },
        { title: `[Coup de projecteur]`, content: `Lors de l'utilisation de son attaque de noyau, l'utilisatrice place un [Cristal d'énergie de mana noir].
            Augmente les dégâts de lumière de l'utilisatrice de 15 %.
            Confère un [Bouclier] équivalent à 5 % des PV max de MIYEON. Augmente la Défense de l'utilisatrice de 30 %.
            Durée : 15 seconde(s)` },
        { title: `[Cristal d'énergie de mana noir]`, content: `Dégâts : inflige des dégâts équivalents à 250 % des dégâts de l'attaque de noyau de l'utilisatrice.` }
    ], "Lumière"),
        1: fmtPassif(`1 étoile :`, `Lorsque l'utilisatrice rejoint un niveau, sa jauge de puissance se remplit de 50 %.

        Lors de l'utilisation de **Tête d'affiche**, l'attaque de noyau de l'utilisatrice s'active et elle récupère ses PM à hauteur de 600.`, [], "Lumière"),
        2: fmtPassif(`2 étoiles :`, `Augmente les dégâts de lumière de 15 %.`, [], "Lumière"),
        3: fmtPassif(`3 étoiles :`, `L'utilisation des compétences **Glissando decrescendo**, **Fente en deux temps** ou **Entaille critique** confère un [Bouclier] équivalent à 5 % des PV max de MIYEON pendant 15 seconde(s) (cumulable jusqu'à 10 fois).

        Tant que le [Bouclier] est actif, la Défense de l'utilisatrice augmente de 6 % pendant 30 seconde(s) (cumulable jusqu'à 10 fois).`, [], "Lumière"),
        4: fmtPassif(`4 étoiles :`, `La Défense des membres de l'équipe de l'élément Lumière augmente de 3 % par allié de l'élément Lumière.`, [], "Lumière"),
        5: fmtPassif(`5 étoiles :`, `L'utilisation de la compétence **Tête d'affiche** augmente le Taux de coup critique de l'utilisatrice de 10 % et ses Dégâts de coup critique de 20 % pendant 15 seconde(s).

        Lors de l'utilisation des compétences **Glissando decrescendo**, **Fente en deux temps** ou **Entaille critique**, la jauge de puissance de MIYEON se remplit de 3 % et le temps de rechargement de **Tête d'affiche** de 4.5 seconde(s).`, [], "Lumière")
    },
    summaryData: {
        0: `
        <h3>Passif : Idol de <span class="element-lumiere">Lumière</span></h3>
        <p>Modes spéciaux : Buff <span class="buff">[FOREVER]</span> (Dégâts +5%).<br>
        <strong>Tête d'affiche</strong> active <span class="buff">[Coup de projecteur]</span> : Dégâts <span class="element-lumiere">Lumière</span> <span class="stat-boost">+15%</span>, Défense <span class="stat-boost">+30%</span>, Bouclier.<br>
        Pose un <span class="buff">[Cristal]</span> (Dégâts de zone).</p>
    `,
        1: `
        <h3>1 étoile</h3>
        <p>Entrée : Jauge 50%.<br>
        <strong>Tête d'affiche</strong> déclenche Attaque Noyau + Regen 600 PM.</p>
    `,
        2: `
        <h3>2 étoiles</h3>
        <p>Dégâts <span class="element-lumiere">Lumière</span> <span class="stat-boost">+15%</span>.<br></p>
    `,
        3: `
        <h3>3 étoiles</h3>
        <p>Compétences confèrent <span class="buff">[Bouclier]</span> (Stackable).<br>
        Sous Bouclier : Défense <span class="stat-boost">+6%</span> par stack.</p>
    `,
        4: `
        <h3>4 étoiles</h3>
        <p>Défense équipe <span class="element-lumiere">Lumière</span> <span class="stat-boost">+3%</span> par allié <span class="element-lumiere">Lumière</span>.<br></p>
    `,
        5: `
        <h3>5 étoiles</h3>
        <p><strong>Tête d'affiche</strong> : Crit Rate <span class="stat-boost">+10%</span>, Crit Dmg <span class="stat-boost">+20%</span>.<br>
        Compétences : Jauge <span class="stat-boost">+3%</span>, CD Tête d'affiche <span class="stat-boost">-4.5s</span>.</p>
    `
    },
    weaponData: {
        0: fmtWeapon(`Avancement 0 :`, `La Défense de l'utilisatrice augmente de 2 %.

        L'utilisation de l'attaque de noyau applique aux ennemis se trouvant dans un rayon de 20 m un effet d'augmentation des dégats infligés par MIYEON de 5 % pendant 5 seconde(s) (temps de rechargement: 20 seconde(s)).`, "Lumière"),
        1: fmtWeapon(`Avancement 5 étoiles :`, `La Défense de l'utilisatrice augmente de 12 %.

        L'utilisation de l'attaque de noyau applique aux ennemis se trouvant dans un rayon de 20 m un effet d'augmentation des dégats infligés par MIYEON de 30 % pendant 30 seconde(s) (temps de rechargement: 20 seconde(s)).`, "Lumière"),
        2: fmtWeapon(`Avancement 10 étoiles :`, `Augmente l'Attaque, la Défense et les PV de l'utilisatrice de 15 %.`, "Lumière")
    }
};