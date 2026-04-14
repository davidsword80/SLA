if (typeof huntersData === 'undefined') { 
    var huntersData = {}; 
}

// --- ELENA RENAULT ---
huntersData["elena-renault"] = {
    name: "Elena Renault",
    rarity: "SSR",
    element: "Eau",
    gradient: "linear-gradient(90deg, #4b96fa, #000)",
    image: "Chasseurs_SSR/eau/Elena_renault/ElenaRenaud_Portrait_Body.png",
    weaponImage: "Chasseurs_SSR/eau/Elena_renault/l_incarnation_de_l_obsession/Relic_ElenaRenaud_PortraitBig.png",
    weaponName: "L'incarnation de l'obsession",
    fullData: {
        0: fmtPassif(`Passif :`, `L'utilisation de **Piège de mercure** active **Trahison de mercure** 1 fois.

        Lorsque **Piège de mercure** touche sa cible, il inflige 1 cumul(s) de [Froid hivernal].

        L'utilisation de **Furie de mercure** confère à toute l'équipe l'effet [Marée argentée].

        L'utilisation d'**Éclat de folie** confère à toute l'équipe l'effet [Emprise de l'obsession].`, [
        { title: `[Marée argentée]`, content: `Augmente les dégâts d'eau de 10 %.
            Augmente les dégâts de Surcharge d'eau de 15 %.
            Durée : 40 seconde(s)` },
        { title: `[Emprise de l'obsession]`, content: `Confère un [Bouclier] équivalent à 15 % de la Défense d'Elena Renault.
            Restaure en continu des PV équivalents à 2 % de la Défense d'Elena Renault toutes les 3 secondes.
            15 PM sont restaurés toutes les 3 secondes.
            Durée : 40 seconde(s)` },
        { title: `[Froid hivernal]`, content: `Inflige des dégâts équivalents à 100 % de la Défense de l'utilisatrice toutes les 3 secondes.
            Durée : 30 seconde(s) (cumulable jusqu'à 10 fois)` }
    ], "Eau"),
        1: fmtPassif(`1 étoile :`, `Toute l'équipe bénéficie de l'effet [Regard sauvage] au début du niveau.

        Lorsqu'un allié inflige avec succès des dégâts de Surcharge d'eau, les dégâts de Surcharge d'eau de tous les membres de l'équipe de l'élément Eau augmentent de 15 % pendant 40 seconde(s).

        L'utilisation de **Prison de mercure** restaure la jauge de puissance de toute l'équipe de 10 %.

        Lorsque **Furie de mercure** touche une cible affectée par [Froid hivernal], elle lui applique l'effet [Goutte de mercure].`, [
        { title: `[Regard sauvage]`, content: `Augmente le Taux de coup critique de 5 %.
            Augmente les Dégâts de coup critique de 10 %.
            Durée : illimitée` },
        { title: `[Goutte de mercure]`, content: `Augmente les dégâts d'eau subis par la cible de 10 %.
            Augmente les dégâts de Surcharge d'eau subis par la cible de 15 %.
            Durée : 40 seconde(s)` }
    ], "Eau"),
        2: fmtPassif(`2 étoiles :`, `L'Attaque, la Défense et les PV max de toute l'équipe augmentent de 9 %.`, [], "Eau"),
        3: fmtPassif(`3 étoiles :`, `Les effets [Marée argentée] et [Emprise de l'obsession] sont améliorés.

        Lorsque **Piège de mercure** touche sa cible, les effets changent et infligent 2 cumul(s) de [Froid hivernal].

        Lorsque l'utilisatrice ou un membre de l'équipe de l'élément Eau utilise son attaque de noyau ou sa compétence de base, cela restaure 10 % de la jauge de puissance d'Elena Renault. (Temps de rechargement : 1 seconde(s))`, [
        { title: `[Marée argentée] (améliorée)`, content: `Augmente les dégâts d'eau de 20 %.
            Augmente les dégâts de Surcharge d'eau de 30 %.
            Durée : 40 seconde(s)` },
        { title: `[Emprise de l'obsession] (améliorée)`, content: `Confère un [Bouclier] équivalent à 30 % de la Défense d'Elena Renault.
            Restaure en continu des PV équivalents à 5 % de la Défense d'Elena Renault toutes les 3 secondes.
            30 PM sont restaurés toutes les 3 secondes.
            Durée : 40 seconde(s)` },
        { title: `[Froid hivernal]`, content: `Inflige des dégâts équivalents à 100 % de la Défense toutes les 3 secondes.
            Durée : 30 seconde(s) (cumulable jusqu'à 10 fois)` }
    ], "Eau"),
        4: fmtPassif(`4 étoiles :`, `Les dégâts de Surcharge d'eau de toute l'équipe augmentent de 20 %.`, [], "Eau"),
        5: fmtPassif(`5 étoiles :`, `Les effets [Regard sauvage] et [Goutte de mercure] sont améliorés.

        Lorsqu'un allié inflige avec succès des dégâts de Surcharge d'eau, les dégâts de Surcharge d'eau de tous les membres de l'équipe de l'élément Eau augmentent de 30 % pendant 40 seconde(s).

        La jauge de puissance de l'utilisatrice est chargée à hauteur de 80 % au début du niveau.

        Lorsque **Prison de mercure** touche sa cible, elle lui inflige 3 cumul(s) de [Froid hivernal].`, [
        { title: `[Regard sauvage] (amélioré)`, content: `Augmente le Taux de coup critique de 25 %.
            Augmente les Dégâts de coup critique de 32 %.
            Durée : illimitée` },
        { title: `[Goutte de mercure] (améliorée)`, content: `Augmente les dégâts d'eau de 15 %.
            Augmente les dégâts de Surcharge d'eau subis par la cible de 20 %.
            Durée : 40 seconde(s)` },
        { title: `[Froid hivernal]`, content: `Inflige des dégâts équivalents à 100 % de la Défense toutes les 3 secondes.
            Durée : 30 seconde(s) (cumulable jusqu'à 10 fois)` }
    ], "Eau")
    },
    summaryData: {
        0: `
        <h3>Passif : Mercure & Obsession</h3>
        <p>Piège de mercure = Trahison de mercure + <span class="buff">[Froid hivernal]</span> (x1).<br>
        Furie de mercure = <span class="buff">[Marée argentée]</span> : Dégâts eau <span class="stat-boost">+10%</span>, Surcharge eau <span class="stat-boost">+15%</span> (40s).<br>
        Éclat de folie = <span class="buff">[Emprise de l'obsession]</span> : Bouclier <span class="stat-boost">15%</span> Déf + Soin <span class="stat-boost">2%</span> Déf/3s + 15 PM/3s (40s).</p>
        `,
        1: `
        <h3>1 étoile</h3>
        <p>Entrée niveau : <span class="buff">[Regard sauvage]</span> (Taux Crit <span class="stat-boost">+5%</span>, Dégâts Crit <span class="stat-boost">+10%</span>, illimité).<br>
        Surcharge eau alliés : Dégâts Surcharge eau équipe Eau <span class="stat-boost">+15%</span> (40s).<br>
        Prison de mercure : Jauge Puissance équipe <span class="stat-boost">+10%</span>.<br>
        Furie sur cible <span class="buff">[Froid hivernal]</span> = <span class="buff">[Goutte de mercure]</span> : Dégâts eau cible <span class="stat-boost">+10%</span>, Surcharge <span class="stat-boost">+15%</span>.</p>
        `,
        2: `
        <h3>2 étoiles</h3>
        <p>ATK/DEF/PV équipe <span class="stat-boost">+9%</span>.</p>
        `,
        3: `
        <h3>3 étoiles</h3>
        <p><span class="buff">[Marée argentée]</span> améliorée : eau <span class="stat-boost">+20%</span>, Surcharge <span class="stat-boost">+30%</span>.<br>
        <span class="buff">[Emprise]</span> améliorée : Bouclier <span class="stat-boost">30%</span> Déf, Soin <span class="stat-boost">5%</span>/3s, 30 PM/3s.<br>
        Piège = x2 <span class="buff">[Froid hivernal]</span>.<br>
        Attaque Noyau/Base équipe Eau = Jauge Puissance Elena <span class="stat-boost">+10%</span> (CD 1s).</p>
        `,
        4: `
        <h3>4 étoiles</h3>
        <p>Dégâts Surcharge eau équipe <span class="stat-boost">+20%</span>.</p>
        `,
        5: `
        <h3>5 étoiles</h3>
        <p>Entrée niveau : Jauge Puissance <span class="stat-boost">80%</span>.<br>
        Surcharge eau alliés : Dégâts Surcharge eau équipe Eau <span class="stat-boost">+30%</span> (40s).<br>
        Prison de mercure : x3 <span class="buff">[Froid hivernal]</span>.<br>
        <span class="buff">[Regard sauvage]</span> amélioré : Taux Crit <span class="stat-boost">+25%</span>, Dégâts Crit <span class="stat-boost">+32%</span>.<br>
        <span class="buff">[Goutte de mercure]</span> améliorée : eau <span class="stat-boost">+15%</span>, Surcharge <span class="stat-boost">+20%</span>.</p>
        `
    },
    weaponData: {
        0: fmtWeapon(`Avancement 0 :`, `La Défense de l'utilisatrice augmente de 5 %.

        L'utilisation de **Piège de mercure** augmente les dégâts de Surcharge des membres de l'équipe de l'élément de 5 % pendant 60 seconde(s).`, "Eau"),
        1: fmtWeapon(`Avancement 5 étoiles :`, `La Défense de l'utilisatrice augmente de 50 %.

        L'utilisation de **Piège de mercure** augmente les dégâts de Surcharge des membres de l'équipe de l'élément de 30 % pendant 60 seconde(s).

        L'utilisation de **Furie de mercure** augmente les dégâts des membres de l'équipe de l'élément de 30 % pendant 60 seconde(s).`, "Eau"),
        2: fmtWeapon(`Avancement 10 étoiles :`, `Augmente l'Attaque, la Défense et les PV de 15 %.`, "Eau")
    }
};

// --- NAM CHAE-YOUNG ---
huntersData["nam-chae-young"] = {
    name: "Nam Chae-young",
    rarity: "SR",
    element: "Eau",
    gradient: "linear-gradient(90deg, #4b96fa, #000)",
    image: "Chasseurs_SR/eau/Nam_chae_young/NamChaeYeong_Portrait_Body.png", 
    weaponImage: "Chasseurs_SR/eau/Nam_chae_young/misericorde_du_tueur/Relic_NamChaeyeong_PortraitBig.png", 
    weaponName: "Miséricorde du tueur",
    fullData: {
        0: fmtPassif(`Passif :`, `Les dégâts infligés aux cibles affectées par l'effet [Gel] augmentent de 20%.`, [], "Eau"),
        1: fmtPassif(`1 étoile :`, `L'efficacité de [Bris] de l'utilisateur augmente de 20%.`, [], "Eau"),
        2: fmtPassif(`2 étoiles :`, `Les PV de l'utilisateur augmentent de 6 %.`, [], "Eau"),
        3: fmtPassif(`3 étoiles :`, `Augmente les dégâts de **Flèche détonatrice** de 80%.`, [], "Eau"),
        4: fmtPassif(`4 étoiles :`, `Augmente la portée de l'explosion de **K63 - Grenade de glace**, **Percée glaçante** et **Sommet de l'iceberg** de 20%.`, [], "Eau"),
        5: fmtPassif(`5 étoiles :`, `La durée de l'effet [Gel] de **K63 - Grenade de glace**, **Sommet de l'iceberg** et **Flèche détonatrice** passe à 3 seconds.`, [], "Eau")
    },
    summaryData: {
        0: `
        <h3>Passif : Ranger de Glace</h3>
        <p>Dégâts sur cible <span class="buff">[Gelée]</span> <span class="stat-boost">+20%</span>.<br></p>
    `,
        1: `
        <h3>1 étoile</h3>
        <p>Efficacité Bris <span class="stat-boost">+20%</span>.<br></p>
    `,
        2: `
        <h3>2 étoiles</h3>
        <p>PV <span class="stat-boost">+6%</span>.<br></p>
    `,
        3: `
        <h3>3 étoiles</h3>
        <p>Flèche détonatrice : Dégâts <span class="stat-boost">+80%</span>.<br></p>
    `,
        4: `
        <h3>4 étoiles</h3>
        <p>Portée Explosion compétences <span class="stat-boost">+20%</span>.<br></p>
    `,
        5: `
        <h3>5 étoiles</h3>
        <p>Durée <span class="buff">[Gel]</span> passe à 3s.<br></p>
    `
    },
    weaponData: {
        0: fmtWeapon(`Avancement 0 :`, `S'il n'y a aucun ennemi dans un rayon de 5 m, les dégâts de l'utilisatrice augmentent de 2.5%.

        Lorsque Nam Chae-Young attaque une cible affectée par [Gel], la Défense de la cible diminue de 5% pendant 5 seconde(s).`, "Eau"),
        1: fmtWeapon(`Avancement 5 étoiles :`, `S'il n'y a aucun ennemi dans un rayon de 5 m, les dégâts de l'utilisatrice augmentent de 10%.

        Lorsque Nam Chae-Young attaque une cible affectée par [Gel], la Défense de la cible diminue de 20 % pendant 5 seconde(s).`, "Eau"),
        2: fmtWeapon(`Avancement 10 étoiles :`, `Augmente l'Attaque, la Défense et les PV de l'utilisateur de 15%.`, "Eau")
    }
};

// --- LEE JUHEE ---
huntersData["lee-juhee"] = {
    name: "Lee Juhee",
    rarity: "SR",
    element: "Eau",
    gradient: "linear-gradient(90deg, #4b96fa, #000)",
    image: "Chasseurs_SR/eau/Lee_juhee/LeeJuHee_Portrait_Body.png",
    weaponImage: "Chasseurs_SR/eau/Lee_juhee/ce_qui_n_a_jamais_ete/Relic_LeeJuHee_PortraitBig.png",
    weaponName: "Ce qui n'a jamais été",
    fullData: {
        0: fmtPassif(`Passif :`, `Augmente les PV de l'utilisateur et des membres de l'équipe de 8%.`, [], "Eau"),
        1: fmtPassif(`1 étoile :`, `Le Taux de récupération des PV reçus de Juhee augmente de 20%.`, [], "Eau"),
        2: fmtPassif(`2 étoiles :`, `Les PV de l'utilisateur augmentent de 6 %.`, [], "Eau"),
        3: fmtPassif(`3 étoiles :`, `Juhee et ses coéquipiers récupèrent 400 de leur mana lorsque Juhee utilise **Cercle de guérison**.`, [], "Eau"),
        4: fmtPassif(`4 étoiles :`, `Augmente le Taux de récupération naturel du mana de 50%.`, [], "Eau"),
        5: fmtPassif(`5 étoiles :`, `**Cercle de guérison** s'active lorsque Juhee quitte le combat et son temps de rechargement se réinitialise (temps de rechargement: 35 seconde(s)).`, [], "Eau")
    },
    summaryData: {
        0: `
        <h3>Passif : Soutien Dévoué</h3>
        <p>PV Équipe <span class="stat-boost">+8%</span>.<br></p>
    `,
        1: `
        <h3>1 étoile</h3>
        <p>Taux récupération soins reçus <span class="stat-boost">+20%</span>.<br></p>
    `,
        2: `
        <h3>2 étoiles</h3>
        <p>PV Max <span class="stat-boost">+6%</span>.<br></p>
    `,
        3: `
        <h3>3 étoiles</h3>
        <p>Cercle de guérison rend 400 Mana à l'équipe.<br></p>
    `,
        4: `
        <h3>4 étoiles</h3>
        <p>Récupération naturelle Mana <span class="stat-boost">+50%</span>.<br></p>
    `,
        5: `
        <h3>5 étoiles</h3>
        <p>Switch out = Cercle de guérison gratuit (Reset CD, 35s CD interne).<br></p>
    `
    },
    weaponData: {
        0: fmtWeapon(`Avancement 0 :`, `Augmente les PV de l'utilisatrice de 2%.

        Lorsqu'un personnage quitte le combat, l'utilisatrice et les membres de l'équipe obtiennent un [Bouclier] équivalent à 2% des PV de Lee Juhee pendant 10 seconde(s).

        (Temps de rechargement: 30 seconde(s))`, "Eau"),
        1: fmtWeapon(`Avancement 5 étoiles :`, `Augmente les PV de l'utilisatrice de 5%.

        Lorsqu'un personnage quitte le combat, l'utilisatrice et les membres de l'équipe obtiennent un [Bouclier] équivalent à 5% des PV de Lee Juhee pendant 10 seconde(s).

        (Temps de rechargement: 30 seconde(s))`, "Eau"),
        2: fmtWeapon(`Avancement 10 étoiles :`, `Augmente l'Attaque, la Défense et les PV de l'utilisateur de 15%.`, "Eau")
    }
};

// --- HAN SONGYI ---
huntersData["han-songyi"] = {
    name: "Han Songyi",
    rarity: "SR",
    element: "Eau",
    gradient: "linear-gradient(90deg, #4b96fa, #000)",
    image: "Chasseurs_SR/eau/Han_songyi/HanSongI_Portrait_Body.png",
    weaponImage: "Chasseurs_SR/eau/Han_songyi/premieres_fleurs/Relic_HanSongI_PortraitBig.png",
    weaponName: "Premières fleurs",
    fullData: {
        0: fmtPassif(`Passif :`, `Les dégâts de l'arme de l'ombre récupérée augmentent de 30% lorsque Songyi utilise la compétence **Récupération** sur les cibles [empoisonnées].`, [], "Eau"),
        1: fmtPassif(`1 étoile :`, `Lors de l'utilisation de la compétence **Récupération**, un [Bouclier] est appliqué.`, [
        { title: `[Bouclier]`, content: `Crée un [Bouclier] équivalent à 15% de l'Attaque de l'utilisateur.
            Durée: 3 seconde(s)` }
    ], "Eau"),
        2: fmtPassif(`2 étoiles :`, `Le Taux de coup critique et les Dégâts de coup critique de Songyi augmentent de 5%.`, [], "Eau"),
        3: fmtPassif(`3 étoiles :`, `Modification des effets de la compétence **Vol prompt**.

        Le nombre d'armes de l'ombre lancées augmente de 3.`, [], "Eau"),
        4: fmtPassif(`4 étoiles :`, `Augmente l'Attaque de l'utilisateur de 6%.`, [], "Eau"),
        5: fmtPassif(`5 étoiles :`, `Le temps de rechargement des compétences **Vol prompt** et **Récupération** se réinitialise en utilisant **Rakshasa**.`, [], "Eau")
    },
    summaryData: {
        0: `
        <h3>Passif : Assassin de l'Ombre</h3>
        <p>Dégâts arme ombre <span class="stat-boost">+30%</span> sur cibles empoisonnées.<br></p>
    `,
        1: `
        <h3>1 étoile</h3>
        <p>Récupération = <span class="buff">[Bouclier]</span> (<span class="stat-boost">15%</span> Attaque).<br></p>
    `,
        2: `
        <h3>2 étoiles</h3>
        <p>Crit Rate/Dmg <span class="stat-boost">+5%</span>.<br></p>
    `,
        3: `
        <h3>3 étoiles</h3>
        <p>Vol prompt : +3 armes d'ombre lancées.<br></p>
    `,
        4: `
        <h3>4 étoiles</h3>
        <p>Attaque <span class="stat-boost">+6%</span>.<br></p>
    `,
        5: `
        <h3>5 étoiles</h3>
        <p>Rakshasa (Ultime) réinitialise CD Vol prompt & Récupération.<br></p>
    `
    },
    weaponData: {
        0: fmtWeapon(`Avancement 0 :`, `Augmente les dégâts d'eau infligés par l'utilisatrice de 2.5%.

        Lorsque l'utilisatrice place une arme d'ombre, à l'exception de celles placées à l'aide de **Récupération**, l'effet [Assassinat prêt] s'active.

        Lorsque l'effet [Assassinat prêt] s'active, les dégâts de **Récupération** augmentent à hauteur de 10% par cumul pendant 15 seconde(s) (cumulable jusqu'à 3 fois).`, "Eau"),
        1: fmtWeapon(`Avancement 5 étoiles :`, `Augmente les dégâts d'eau infligés par l'utilisatrice de 10%.

        Lorsque l'utilisatrice place une arme d'ombre, à l'exception de celles placées à l'aide de **Récupération**, l'effet [Assassinat prêt] s'active.

        Lorsque l'effet [Assassinat prêt] s'active, les dégâts de **Récupération** augmentent à hauteur de 20% par cumul pendant 15 seconde(s) (cumulable jusqu'à 3 fois).`, "Eau"),
        2: fmtWeapon(`Avancement 10 étoiles :`, `Augmente l'Attaque, la Défense et les PV de l'utilisatrice de 15%.`, "Eau")
    }
};

// --- ANNA RUIZ ---
huntersData["anna-ruiz"] = {
    name: "Anna Ruiz",
    rarity: "SR",
    element: "Eau",
    gradient: "linear-gradient(90deg, #4b96fa, #000)",
    image: "Chasseurs_SR/eau/Anna_ruiz/AnnaRuiz_Portrait_Body.png",
    weaponImage: "Chasseurs_SR/eau/Anna_ruiz/vagabon_solitaire/Relic_AnnaRuiz_PortraitBig.png",
    weaponName: "Vagabon Solitaire",
    fullData: {
        0: fmtPassif(`Passif :`, `Lorsque l'une des compétences d'Anna touche sa cible, a 6% de chances d'infliger [Poison corrosif].`, [
        { title: `[Poison corrosif]`, content: `Inflige 100 dégâts de Bris toutes les 3 seconde(s).
            Inflige des dégâts équivalents à 30% de l'Attaque toutes les 3 seconde(s) (cumulable jusqu'à 10 fois).
            Durée: 30 seconde(s)` }
    ], "Eau"),
        1: fmtPassif(`1 étoile :`, `Les ennemis se trouvant dans la [Zone toxique] se voient infliger l'effet [Entrave] 1 fois.`, [
        { title: `[Entrave]`, content: `Immobilise la cible.
            Durée: 1.5 seconde(s)` }
    ], "Eau"),
        2: fmtPassif(`2 étoiles :`, `Augmente les dégâts de Bris de l'utilisateur de 10%.`, [], "Eau"),
        3: fmtPassif(`3 étoiles :`, `Applique [Poison corrosif amélioré] et réduit la Défense de la cible.`, [
        { title: `[Poison corrosif amélioré]`, content: `Inflige 100 dégâts de Bris toutes les 3 seconde(s).
            Inflige des dégâts équivalents à 30% de l'Attaque toutes les 3 seconde(s).
            Réduit la défense de 1% (cumulable jusqu'à 10 fois).
            Durée: 30 seconde(s)` }
    ], "Eau"),
        4: fmtPassif(`4 étoiles :`, `Augmente l'Attaque de l'utilisateur de 10%.`, [], "Eau"),
        5: fmtPassif(`5 étoiles :`, `Augmente les dégâts de **Vague venimeuse** de 100%.`, [], "Eau")
    },
    summaryData: {
        0: `
        <h3>Passif : Ranger Toxique</h3>
        <p>6% chance d'infliger <span class="buff">[Poison corrosif]</span> sur touche.<br>
        [Poison] : Dégâts Bris + DOT (<span class="stat-boost">30%</span> Atk, 30s).</p>
    `,
        1: `
        <h3>1 étoile</h3>
        <p>Zone toxique = <span class="buff">[Entrave]</span> (Immobilisation 1.5s).<br></p>
    `,
        2: `
        <h3>2 étoiles</h3>
        <p>Dégâts de Bris <span class="stat-boost">+10%</span>.<br></p>
    `,
        3: `
        <h3>3 étoiles</h3>
        <p>[Poison corrosif amélioré] : Ajoute Réduction Défense (<span class="stat-boost">-1%</span> par cumul, max 10).</p>
    `,
        4: `
        <h3>4 étoiles</h3>
        <p>Attaque <span class="stat-boost">+10%</span>.<br></p>
    `,
        5: `
        <h3>5 étoiles</h3>
        <p>Dégâts Vague venimeuse <span class="stat-boost">+100%</span>.<br></p>
    `
    },
    weaponData: {
        0: fmtWeapon(`Avancement 0 :`, `Augmente l'Attaque de l'utilisateur de 2.5%.

        Lorsque la compétence **Pluie venimeuse** touche sa cible, sa Défense diminue de 2.5% pendant 5 seconde(s).`, "Eau"),
        1: fmtWeapon(`Avancement 5 étoiles :`, `Augmente l'Attaque de l'utilisateur de 10%.

        Lorsque la compétence **Pluie venimeuse** touche sa cible, sa Défense diminue de 10% pendant 5 seconde(s).`, "Eau"),
        2: fmtWeapon(`Avancement 10 étoiles :`, `Augmente l'Attaque, la Défense et les PV de 15%.`, "Eau")
    }
};

huntersData["alicia-blanche"] = {
    name: "Alicia Blanche",
    rarity: "SSR",
    element: "Eau",
    gradient: "linear-gradient(90deg, #4b96fa, #000)",
    image: "Chasseurs_SSR/eau/Alicia_blanche/alicia_art.png", 
    weaponImage: "Chasseurs_SSR/eau/Alicia_blanche/sorciere_des_glaces/Relic_AliciaBlanchet_PortraitBig.png", 
    weaponName: "Sorcière des glaces",
    fullData: {
        0: fmtPassif(`Passif :`, `Lorsqu'elles sont lancées, les compétences **Givre éternel**, **Tempête hivernale** ou **Aiguille de glace** appliquent l'effet [Gel] à l'utilisateur, ce qui active la modification de son [Givre] attaque de noyau.
L'attaque de noyau de l'utilisateur devient **Lance de froid glacial**.
L'utilisation de Lance de froid glacial consomme des instances de [Givre] (jusqu'à 3 instances à la fois).
Les dégâts de Lance de froid glacial augmentent de 60% par instance de [Givre] consommée (augmentant jusqu'à 180%).
Durée: permanent (cumulable jusqu'à 5 fois)`, [], "Eau"),
        1: fmtPassif(`Avancement 1 étoile :`, `Le taux de coup critique de **Lance de froid glacial** augmente de 10%.
Lorsque l'utilisateur touche sa cible avec **Lance de froid glacial**, les dégâts de l'attaque de noyau augmentent de 5% pendant 15 seconde(s) (cumulable jusqu'à 4 fois).`, [], "Eau"),
        2: fmtPassif(`Avancement 2 étoiles :`, `Les dégâts d'eau augmentent de 10%.`, [], "Eau"),
        3: fmtPassif(`Avancement 3 étoiles :`, `Lorsque l'effet [Armure de givre] est activé, l'utilisateur récupère 5% de ses PM max.
L'Attaque augmente de 10% tant que l'effet [Armure de givre] est actif.`, [], "Eau"),
        4: fmtPassif(`Avancement 4 étoiles :`, `Les dégâts de l'attaque de noyau augmentent de 15%.`, [], "Eau"),
        5: fmtPassif(`Avancement 5 étoiles :`, `Augmente le nombre maximum de cumuls de [Givre] de 2.
Lorsque l'effet [Armure de givre] est activé, les dégâts d'eau augmentent de 20% pendant 20 seconde(s).`, [], "Eau")
    },
    weaponData: {
        0: fmtWeapon(`Effet de l'arme :`, `Augmente l'Attaque de l'utilisateur de 2%.
Lorsque l'utilisateur touche sa cible avec une attaque de noyau, les dégâts de l'attaque de noyau augmentent de 5% pendant 20 seconde(s) (Temps de rechargement: 30 seconde(s))`, "Eau"),
        1: fmtWeapon(`Avancement 5 étoiles (Arme) :`, `Les dégâts de l'attaque de noyau de l'utilisateur augmentent de 40%.
Lorsque l'effet [Armure de givre] s'active, les dégâts d'eau augmentent de 20% pendant 20 seconde(s).
(Temps de rechargement: 30 seconde(s))`, "Eau"),
        2: fmtWeapon(`Avancement 10 étoiles :`, `Augmente l'Attaque, la Défense et les PV de l'utilisateur de 15%.`, "Eau")
    }
};

// --- SEO JIWOO ---
huntersData["seo-jiwoo"] = {
    name: "Seo Jiwoo",
    rarity: "SSR",
    element: "Eau",
    gradient: "linear-gradient(90deg, #4b96fa, #000)",
    image: "Chasseurs_SSR/eau/Seo_jiwoo/seo_art.png", // Remplacer par le nom exact de ton image
    weaponImage: "Chasseurs_SSR/eau/Seo_jiwoo/bravoure_inegalee/Relic_SeoJiwoo_PortraitBig.png", // Remplacer par le nom exact de ton image
    weaponName: "Bravoure Inégalée",
    fullData: {
        0: fmtPassif(`Passif :`, `Lors de l'utilisation des compétences **Frappe du dragon jumeau**, **Ruade du dragon d'eau**, **Coup de pied foudroyant** ou de **Coup de poing éclatant**, l'effet [Entraînement] se cumule 1 fois.
Lorsque l'effet [Entraînement] se cumule 3 fois, l'effet [Entraînement du dragon d'eau] s'applique.
Lorsque l'effet [Entraînement du dragon d'eau] est actif, le temps de rechargement de **Ruade du dragon d'eau** et **Coup de pied foudroyant** se réinitialise, et ces compétences deviennent respectivement **Attaque lourde : Ruade du dragon d'eau** et **Attaque lourde: Coup de pied foudroyant**.`, [
        { title: `[Entraînement]`, content: `Durée: infinie (cumulable jusqu'à 3 fois)` },
        { title: `[Entraînement du dragon d'eau]`, content: `Lors de l'utilisation des compétences **Attaque lourde: Ruade du dragon d'eau** ou **Attaque lourde: Coup de pied foudroyant**, l'effet se dissipe.
Durée: infinie` }
    ], "Eau"),
        1: fmtPassif(`1 étoile :`, `Les dégâts des compétences **Attaque lourde: Ruade du dragon d'eau** et **Attaque lourde: Coup de pied foudroyant** augmentent de 150%.`, [], "Eau"),
        2: fmtPassif(`2 étoiles :`, `Augmente l'efficacité de [Bris] de l'utilisateur de 15%.
Augmente l'efficacité de [Bris] de la compétence **Attaque lourde: Coup de pied foudroyant** de l'utilisateur de 50%.`, [], "Eau"),
        3: fmtPassif(`3 étoiles :`, `L'utilisateur récupère **50 PM** en appliquant [Entraînement du dragon d'eau].`, [], "Eau"),
        4: fmtPassif(`4 étoiles :`, `Les PV max de l'utilisatrice augmentent à hauteur de 15% de ses Dégâts de coup critique supplémentaires.`, [], "Eau"),
        5: fmtPassif(`5 étoiles :`, `Le Taux de coup critique et les Dégâts de compétence de **Attaque lourde : Ruade du dragon d'eau**, **Attaque lourde: Coup de pied foudroyant** et **Coup létal: Frappe de transformation du dragon d'eau** augmentent de 32%.`, [], "Eau")
    },
    summaryData: {
        0: `<h3>Passif : L'Héritière du Dragon</h3><p>Compétences = cumuls <span class="buff">[Entraînement]</span>.<br>3 cumuls = <span class="buff">[Entraînement du dragon d'eau]</span> (Reset CD + Compétences deviennent <strong>Attaque Lourde</strong>).<br>Consommé à l'utilisation.</p>`,
        1: `<h3>1 étoile</h3><p>Dégâts Attaques Lourdes <span class="stat-boost">+150%</span>.<br></p>`,
        2: `<h3>2 étoiles</h3><p>Efficacité Bris <span class="stat-boost">+15%</span>.<br>Efficacité Bris (Coup de pied foudroyant lourd) <span class="stat-boost">+50%</span>.<br></p>`,
        3: `<h3>3 étoiles</h3><p>Activation [Entraînement du dragon d'eau] rend <strong>50 PM</strong>.<br></p>`,
        4: `<h3>4 étoiles</h3><p>PV Max augmentent selon Dégâts Crit supp (<span class="stat-boost">15%</span> ratio).<br></p>`,
        5: `<h3>5 étoiles</h3><p>Taux Crit et Dégâts Compétences (Lourdes/Ultime) <span class="stat-boost">+32%</span>.<br></p>`
    },
    weaponData: {
        0: fmtWeapon(`Avancement 0 :`, `Augmente les dégâts de coup critique de l'utilisateur de 5%.
Lorsque l'utilisatrice lance **Ruade du dragon d'eau**, **Coup de pied foudroyant**, **Attaque lourde: Ruade du dragon d'eau** ou **Attaque lourde: Coup de pied foudroyant**, augmente les dégâts de coup critique de 1% (cumulable jusqu'à 20 fois).`, "Eau"),
        1: fmtWeapon(`Avancement 5 étoiles :`, `Augmente les dégâts de coup critique de l'utilisatrice de 20%.
Lorsque l'utilisatrice lance **Ruade du dragon d'eau**, **Coup de pied foudroyant**, **Attaque lourde: Ruade du dragon d'eau** ou **Attaque lourde: Coup de pied foudroyant**, augmente les dégâts de coup critique de 6 % (cumulable jusqu'à 20 fois).`, "Eau"),
        2: fmtWeapon(`Avancement 10 étoiles :`, `Augmente l'Attaque, la Défense et les PV de l'utilisateur de 15%.`, "Eau")
    }
};

// --- MEILIN FISHER ---
huntersData["meilin-fisher"] = {
    name: "Meilin Fisher",
    rarity: "SSR",
    element: "Eau",
    gradient: "linear-gradient(90deg, #4b96fa, #000)",
    image: "Chasseurs_SSR/eau/Meilin_fisher/meilin_art.png", // Remplacer par le nom exact
    weaponImage: "Chasseurs_SSR/eau/Meilin_fisher/contre_toute_attente/Relic_MeilinFisher_PortraitBig.png", // Remplacer par le nom exact
    weaponName: "Contre toute attente",
    fullData: {
        0: fmtPassif(`Passif :`, `Lorsque les compétences **Retour de fouet** ou **Ruade féline** touchent leur cible, elles leur infligent l'effet [Étreinte liquide].
Lors de l'utilisation des compétences **Fouet latéral** ou **Au-dessus!** ou si l'utilisatrice quitte le combat, l'effet [Salut, miaou!] s'applique à tous les membres de l'équipe.`, [
        { title: `[Étreinte liquide]`, content: `Augmente les dégâts d'eau subis de 8%.
Durée: 16 seconde(s)` },
        { title: `[Salut, miaou!]`, content: `L'Attaque augmente de 8%.
La Défense augmente de 8%.
Durée: 16 seconde(s) (cumulable jusqu'à 3 fois)` }
    ], "Eau"),
        1: fmtPassif(`1 étoile :`, `Augmente les dégâts de la compétence **Au-dessus!** de 64%.
Lors de l'utilisation de la compétence **Au-dessus!**, l'effet [Serviteur félin] s'applique à l'allié ayant l'Attaque la plus élevée.
Amélioration de l'effet [Trop mignon!]`, [
        { title: `[Serviteur félin]`, content: `Meilin Fisher encaisse 64% de dégâts lorsque l'utilisateur subit directement des dégâts.
Octroie l'effet [Super armure].
Durée: 8 seconde(s)
([Serviteur félin] ne peut s'appliquer à Sung Jinwoo et Meilin Fisher ne subit pas de dégâts continus ou de dégâts dus à certains effets d'autres membres de l'équipe.)` },
        { title: `[Trop mignon!]`, content: `Augmente les dégâts des attaques de noyau de 32%.
Durée: 8 seconde(s)` }
    ], "Eau"),
        2: fmtPassif(`2 étoiles :`, `L'Attaque et la Défense de tous les membres de l'équipe augmentent de 8%.
L'Attaque et la Défense de tous les membres de l'équipe de l'élément Eau augmentent de 8%.`, [], "Eau"),
        3: fmtPassif(`3 étoiles :`, `Lorsque **Retour de fouet** touche sa cible, les jauges de puissance de tous les membres de l'équipe se remplissent de 8%.
Lorsque **Retour de fouet** touche un monstre Élite ou supérieur, les jauges de puissance de tous les membres de l'équipe se remplissent de 8%.`, [], "Eau"),
        4: fmtPassif(`4 étoiles :`, `Les PV de l'utilisatrice augmentent de 8%.`, [], "Eau"),
        5: fmtPassif(`5 étoiles :`, `Amélioration des effets de [Remonté à bloc!]`, [
        { title: `[Remonté à bloc !]`, content: `Augmente l'Attaque de l'utilisatrice de 16%.
Augmente la Défense de l'utilisatrice de 16%.
Augmente le Taux de coup critique de l'utilisatrice de 16%.
Augmente les dégâts des attaques de noyau de l'utilisatrice de 16%.
Réduit les dégâts subis par l'utilisatrice de 16%.
Durée: 24 seconde(s).` }
    ], "Eau")
    },
    summaryData: {
        0: `<h3>Passif : Soutien Félin</h3><p>Compétences offensives = <span class="buff">[Étreinte liquide]</span> (Cible : Dégâts <span class="element-eau">Eau</span> +8%).<br>Soutien / Switch = <span class="buff">[Salut, miaou!]</span> (Équipe : Atk/Def +8%).</p>`,
        1: `<h3>1 étoile</h3><p>Au-dessus! : Dégâts <span class="stat-boost">+64%</span> + <span class="buff">[Serviteur félin]</span> sur DPS (Partage dégâts + Super Armure).<br>[Trop mignon!] : Dégâts Attaque Noyau <span class="stat-boost">+32%</span>.</p>`,
        2: `<h3>2 étoiles</h3><p>Atk/Def Équipe <span class="stat-boost">+8%</span> (Doublé si élément <span class="element-eau">Eau</span>).</p>`,
        3: `<h3>3 étoiles</h3><p>Retour de fouet : Remplissage Jauge Puissance Équipe <span class="stat-boost">+8%</span> (ou plus sur Élite).</p>`,
        4: `<h3>4 étoiles</h3><p>PV <span class="stat-boost">+8%</span>.</p>`,
        5: `<h3>5 étoiles</h3><p>[Remonté à bloc!] amélioré : Boost complet stats perso (Atk, Def, Crit, Noyau, Res) de <span class="stat-boost">16%</span>.</p>`
    },
    weaponData: {
        0: fmtWeapon(`Avancement 0 :`, `Lors de l'utilisation de la compétence **Fouet latéral**, les dégâts du membre de l'équipe ayant l'Attaque la plus élevée augmentent de 1% tous les 2000 de PV max de Meilin Fisher pendant 12 seconde(s) (avec un taux d'augmentation maximal des dégâts de 6 %).
Réduit le temps de rechargement de la compétence ultime de 5%.`, "Eau"),
        1: fmtWeapon(`Avancement 5 étoiles :`, `Lors de l'utilisation de la compétence **Fouet latéral**, les dégâts du membre de l'équipe ayant l'Attaque la plus élevée augmentent de 1% tous les 2000 de PV max de Meilin Fisher pendant 12 seconde(s) (avec un taux d'augmentation maximal des dégâts de 16%).
Réduit le temps de rechargement de la compétence ultime de 20 %.`, "Eau"),
        2: fmtWeapon(`Avancement 10 étoiles :`, `Augmente l'Attaque, la Défense et les PV de l'utilisateur de 15%.`, "Eau")
    }
};

// --- MERI LAINE ---
huntersData["meri-laine"] = {
    name: "Meri Laine",
    rarity: "SSR",
    element: "Eau",
    gradient: "linear-gradient(90deg, #4b96fa, #000)",
    image: "Chasseurs_SSR/eau/Meri_laine/meri_art.png", 
    weaponImage: "Chasseurs_SSR/eau/Meri_laine/brise_hiver/Relic_Relic_MeriLaine_PortraitBig.png", 
    weaponName: "Brise-hiver",
    fullData: {
        0: fmtPassif(`Passif :`, `L'effet [Mode Pingqueen normale] s'active au début du niveau.
La jauge de puissance de l'utilisatrice ne peut pas se remplir, mais si la jauge de [Boost de Pingqueen] atteint 100%, l'utilisatrice récupère 100% de sa jauge de puissance, et le temps de recharge d'**Élan glacial** est réinitialisé.
Lorsque **Ruade grinçante** touche sa cible, elle lui applique 1 cumuls de l'effet [Froid hivernal].
Lorsque la compétence **Claque montante** touche une cible affectée par [Froid hivernal], l'effet [Souvenirs d'hiver] est activé.`, [
        { title: `[Mode Pingqueen normale]`, content: `Chaque fois que les compétences **Claque montante** ou **Balayage de lame** touchent leur cible, elles remplissent la jauge de [Boost de Pingqueen].
L'utilisation de la compétence **Élan glacial** supprime l'effet [Mode Pingqueen normale] et active l'effet [Mode Pingqueen boostée].
Durée : illimitée` },
        { title: `[Mode Pingqueen boostée]`, content: `La compétence **Balayage de lame** devient **Balayage enragé**, et son temps de recharge est réinitialisé.
L'utilisatrice peut bouger lors de l'utilisation de la compétence **Balayage enragé**.
Augmente les dégâts infligés par les compétences **Balayage de lame** et **Élan glacial** aux cibles affectées par [Froid hivernal] de 25%.
Augmente l'effet d' [Accumulation élémentaire] d'Eau de 5%.
Confère [Super armure] à l'utilisatrice jusqu'à la fin de l'activation.
Active l'effet [Mode Pingqueen normale] à la fin de l'activation.
Durée : 10 seconde(s)` },
        { title: `[Souvenirs d'hiver]`, content: `Augmente les dégâts d'eau de 15%.
Augmente les dégâts des compétences **Balayage de lame** et **Balayage enragé** de 15%.
Durée : 30 seconde(s)` },
        { title: `[Froid hivernal]`, content: `Inflige des dégâts équivalents à 50% des PV max de Meri Laine toutes les 3 secondes.
Durée : 30 seconde(s) (cumulable jusqu'à 10 fois)` }
    ], "Eau"),
        1: fmtPassif(`1 étoile :`, `Lorsque la compétence **Ruade grinçante** touche une cible, elle lui applique 2 cumuls de [Froid hivernal].
Chaque fois que les compétences **Balayage de lame** ou **Balayage enragé** touchent une cible affectée par [Froid hivernal], l'effet [Gel du sang] est activé.
Augmente considérablement la Vitesse d'attaque des compétences **Balayage de lame** et **Balayage enragé**.
Augmente de 25% le nombre d'utilisations possibles de la compétence **Balayage enragé**.`, [
        { title: `[Gel de sang]`, content: `Augmente les dégâts d'eau subis de 0.6%.
Augmente les dégâts de Surcharge d'eau subis de 0.6%.
Durée : 30 seconde(s) (cumulable jusqu'à 70 fois).` }
    ], "Eau"),
        2: fmtPassif(`2 étoiles :`, `Augmente l'effet d'[Accumulation élémentaire] d'eau de 20%.`, [], "Eau"),
        3: fmtPassif(`3 étoiles :`, `L'effet [Souvenirs d'hiver] est amélioré.
L'utilisation de la compétence **Élan glacial** active l'effet [Glace façon Pingqueen].`, [
        { title: `[Souvenirs d'hiver] (Amélioré)`, content: `Augmente les dégâts d'eau de 30%.
Augmente les dégâts des compétences **Balayage de lame** et **Balayage enragé** de 30%.
Durée : 30 seconde(s).` },
        { title: `[Glace façon Pingqueen]`, content: `Augmente les dégâts infligés aux cibles affectées par [Froid hivernal] de 20%.
Augmente les dégâts de Surcharge d'eau de 10%.
Augmente l'effet d'[Accumulation élémentaire] d'Eau de 10%.
Durée : 30 seconde(s).` }
    ], "Eau"),
        4: fmtPassif(`4 étoiles :`, `La Pénétration de défense des membres de l'équipe de l'élément Eau augmente de 5% par membre de l'élément Eau présent dans le groupe.`, [], "Eau"),
        5: fmtPassif(`5 étoiles :`, `L'effet [Mode Pingqueen boostée] est amélioré.
L'effet [Gel de sang] est amélioré.
Lorsque la compétence **Balayage enragé** touche sa cible, elle lui applique 3 cumuls de [Froid hivernal].`, [
        { title: `[Mode Pingqueen boostée] (Amélioré)`, content: `Balayage de lame devient Balayage enragé et le temps de recharge est réinitialisé.
L'utilisatrice peut bouger pendant l'utilisation de la compétence Balayage enragé.
Les dégâts des compétences Balayage de lame et Balayage enragé infligés aux cibles affectées par [Froid hivernal] augmentent de 50%.
Augmente l'effet d'[Accumulation élémentaire] d'Eau de 10%.
Confère à l'utilisatrice [Super armure] tant que l'effet est actif.
Active l'effet [Mode Pingqueen normale] à la fin de l'effet.
Durée : 10 seconde(s)` },
        { title: `[Gel de sang] (Amélioré)`, content: `Augmente les dégâts d'eau subis de 1%.
Augmente les dégâts de Surcharge d'eau subis de 1%.
Durée : 45 seconde(s) (cumulable jusqu'à 70 fois)` },
        { title: `[Froid hivernal]`, content: `Inflige des dégâts équivalents à 50% des PV max de l'utilisatrice toutes les 3 secondes.
Durée : 30 seconde(s) (cumulable jusqu'à 10 fois)` }
    ], "Eau")
    },
    summaryData: {
        0: `<h3>Passif : Mode Pingqueen</h3><p>Mécanique de jauge [Boost] pour reset l'Ultime. Applique [Froid hivernal] (DoT PV max) et [Souvenirs d'hiver].</p>`,
        1: `<h3>1 étoile</h3><p>Plus de cumuls de Froid. Active [Gel du sang] (Dégâts <span class="element-eau">Eau</span> subis +0.6%). Boost Balayage enragé.</p>`,
        2: `<h3>2 étoiles</h3><p>Accumulation élémentaire <span class="element-eau">Eau</span> +20%.</p>`,
        3: `<h3>3 étoiles</h3><p>Buff Souvenirs d'hiver (30%). Ajoute [Glace façon Pingqueen] (Dégâts vs Froid +20%).</p>`,
        4: `<h3>4 étoiles</h3><p>Pénétration de Défense équipe <span class="element-eau">Eau</span> +5% par membre <span class="element-eau">Eau</span>.</p>`,
        5: `<h3>5 étoiles</h3><p>Modes Boostée et Gel de sang améliorés (1% par cumul). Balayage enragé applique 3 cumuls de Froid.</p>`
    },
    weaponData: {
        0: fmtWeapon(`Avancement 0 :`, `Augmente les PV de l'utilisatrice de 5%.
Chaque fois que les compétences **Balayage de lame** ou **Balayage enragé** touchent leur cible, les dégats d' de toute L'équipe augmentent de 0.1%.
Durée: 45 seconde(s) (cumulable jusqu'à 50 fois)`, "Eau"),
        1: fmtWeapon(`Avancement 5 étoiles :`, `Augmente les PV de l'utilisatrice de 12%.
Chaque fois que les compétences **Balayage de lame** ou **Balayage enragé** touchent leur cible, les dégats d' de toute L'équipe augmentent de 0.6%.
Durée: 45 seconde(s) (cumulable jusqu'à 50 fois)`, "Eau"),
        2: fmtWeapon(`Avancement 10 étoiles :`, `Augmente L'attaque, la Défense et les PV de L'utilisatrice de 15%.`, "Eau")
    }
};

// --- SEO LIN ---
huntersData["seo-lin"] = {
    name: "Seo Lin",
    rarity: "SSR",
    element: "Eau",
    gradient: "linear-gradient(90deg, #4b96fa, #000)",
    image: "Chasseurs_SSR/eau/Seo_lin/seo_art.png",
    weaponImage: "Chasseurs_SSR/eau/Seo_lin/ode_au_fer_et_au_sang/Relic_SeoLin_PC_PortraitBig.png",
    weaponName: "Ode au fer et au sang",
    fullData: {
        0: fmtPassif(`Passif :`, `Lorsque Seo Lin ou un allié parvient à mettre un ennemi en état de [Bris], la durée de l'état de Bris augmente de 3 seconde(s).
Lorsque Seo Lin utilise les compétences **Tornade glaçante**, **Déflagration polaire**, **Énorme éclat de glace** ou **Tornade congelante**, l'effet [Missile guidé] est activé.`, [
        { title: `[Missile guidé]`, content: `**Tornade glaçante**, **Énorme éclat de glace** ou **Tornade congelante** tirent 2 missile(s).
**Déflagration polaire** tire 4 missile(s).
Chaque missile inflige des dégâts d'eau équivalents à 150% des PV max de Seo Lin.
Applique l'effet [En dessous de zéro] à la cible.` },
        { title: `[En dessous de zéro]`, content: `Augmente les dégâts d'eau subis par la cible de 1%.
Durée : 30 seconde(s) (cumulable jusqu'à 10 fois).` }
    ], "Eau"),
        1: fmtPassif(`1 étoile :`, `La compétence **Tornade glaçante** permet désormais de tirer 4 missile(s).
Lorsque l'utilisatrice rejoint le niveau, l'effet [Surpassement] s'active.
Lorsque Seo Lin ou un allié parvient à mettre un ennemi en état de [Bris], l'effet [Bris limité] s'active (temps de rechargement : 120 seconde(s)).`, [
        { title: `[Surpassement]`, content: `Augmente l'efficacité de [Bris] de 50%.
Réduit les dégâts infligés (reçus) de 30%.` },
        { title: `[Bris limité]`, content: `Réinitialise le temps de rechargement de toutes les compétences et restaure les jauges à 100%.
Supprime l'effet [Surpassement].
Réduit l'efficacité de [Bris] de 50%.
Augmente les dégâts infligés, les dégâts des missiles et les Dégâts Critiques de 30%.
Durée : 15 seconde(s) (30s dans l'Atelier de la lumière brillante).
À la fin de l'effet, [Surpassement] se réactive.` }
    ], "Eau"),
        2: fmtPassif(`2 étoiles :`, `**Énorme éclat de glace** ou **Tornade congelante** permettent désormais de tirer 4 missile(s) à la fois.`, [], "Eau"),
        3: fmtPassif(`3 étoiles :`, `Lorsque l'utilisatrice rejoint le niveau, l'effet [Thé noir ?] s'applique à toute l'équipe.`, [
        { title: `[Thé noir ?]`, content: `Augmente la Défense de 20%.
Augmente les PV max de 20%.
Restaure 1.5% de PM toutes les 5 seconde(s).
Durée : illimitée.` }
    ], "Eau"),
        4: fmtPassif(`4 étoiles :`, `Les dégâts d'eau des membres de l'équipe de l'élément Eau augmentent de 10% (cumulable jusqu'à 3 fois) par membre de l'équipe de l'élément Eau présent dans la formation.`, [], "Eau"),
        5: fmtPassif(`5 étoiles :`, `Le Taux de coup critique des missiles augmente de 100% et les Dégâts de coup critique des missiles augmentent de 30%.
Améliore les effets [En dessous de zéro] et [Bris limité].`, [
        { title: `Amélioration [En dessous de zéro]`, content: `Augmente les dégâts d'eau subis de 2% (au lieu de 1%).
Durée : 30 seconde(s) (cumulable jusqu'à 10 fois).` },
        { title: `Amélioration [Bris limité]`, content: `Réduit l'efficacité de [Bris] de 30%.
Augmente les dégâts infligés, les dégâts des missiles et les Dégâts Critiques de 50%.` }
    ], "Eau")
    },
    summaryData: {
        0: `<h3>Passif : Missiles Guidés</h3><p>Bris (Seo/Allié) = Durée Bris +3s.<br>Compétences tirent des <span class="buff">[Missiles]</span> (Dégâts <span class="element-eau">Eau</span> basés sur PV Max).<br>Missiles appliquent <span class="buff">[En dessous de zéro]</span> (Debuff Dégâts <span class="element-eau">Eau</span>).</p>`,
        1: `<h3>1 étoile</h3><p>Entrée : <span class="buff">[Surpassement]</span> (Efficacité Bris <span class="stat-boost">+50%</span>, Tankiness).<br>Sur Bris : Active <span class="buff">[Bris limité]</span> (Reset CD, Full Jauge, Dégâts/Crit <span class="stat-boost">+30%</span>).</p>`,
        2: `<h3>2 étoiles</h3><p>Énorme éclat de glace et Tornade congelante tirent 4 missiles (au lieu de 2).<br></p>`,
        3: `<h3>3 étoiles</h3><p>Buff Équipe <span class="buff">[Thé noir ?]</span> : Déf/PV <span class="stat-boost">+20%</span> + Regen PM.<br></p>`,
        4: `<h3>4 étoiles</h3><p>Dégâts <span class="element-eau">Eau</span> équipe <span class="stat-boost">+10%</span> par allié <span class="element-eau">Eau</span> (Max 30%).<br></p>`,
        5: `<h3>5 étoiles</h3><p>Missiles : Taux Crit <span class="stat-boost">+100%</span>, Dégâts Crit <span class="stat-boost">+30%</span>.<br>Améliore <span class="buff">[Bris limité]</span> : Bonus Dégâts passent à <span class="stat-boost">50%</span>.<br>Améliore <span class="buff">[En dessous de zéro]</span> : Debuff <span class="stat-boost">2%</span>/stack.</p>`
    },
    weaponData: {
        0: fmtWeapon(`Avancement 0 :`, `Augmente les PV de 5%.
Augmente les dégâts des missiles de 30%.`, "Eau"),
        1: fmtWeapon(`Avancement 5 étoiles :`, `Augmente les PV de 12%.
Augmente les dégâts des missiles de 100%.`, "Eau"),
        2: fmtWeapon(`Avancement 10 étoiles :`, `Augmente l'Attaque, la Défense et les PV de 15%.`, "Eau")
    }
};

// --- CHA HAE-IN (LA PRINCESSE ÉPÉISTE IMMACULÉE) ---
huntersData["Cha-hae-in-la-princesse-epeiste-immaculee"] = {
    name: "Cha Hae-In, la Princesse Épeiste Immaculée",
    rarity: "SSR",
    element: "Eau",
    gradient: "linear-gradient(90deg, #4b96fa, #000)",
    image: "Chasseurs_SSR/eau/Cha_hae_in_la_princesse_epeiste_immaculee/cha_art.png", 
    weaponImage: "Chasseurs_SSR/eau/Cha_hae_in_la_princesse_epeiste_immaculee/serment_de_la_valkyrie/Relic_ChaHaeIn_MM_PortraitBig.png", 
    weaponName: "Serment de la Valkyrie",
    fullData: {
        0: fmtPassif(`Passif :`, `Lorsque les compétences **Danse de la princesse épéiste** ou **Frappe céleste** touchent leur cible, l'effet [Épées célestes] s'active (temps de rechargement : 0,5 seconde(s)).
Lorsque ces compétences touchent leur cible, la jauge de [Volonté de l'épée] se remplit.`, [
        { title: `[Épées célestes]`, content: `Le nombre de lames dérivées augmente en fonction de la charge de [Volonté de l'épée].
Inflige des dégâts d'eau équivalents à 175 % de la défense par épée.
Considérée comme une compétence de base.` },
        { title: `[Volonté de l'épée]`, content: `Effets par niveau de charge :
Augmente la Défense de 5 % et le Taux de coup critique de 2 %.
Augmente les Dégâts de coup critique de 2 %.
Durée : 15 seconde(s) (cumulable jusqu'à 6 fois).` }
    ], "Eau"),
        1: fmtPassif(`1 étoile :`, `**Tempête d'épées** devient **Attaque rapide : Tempête d'épées** et ses dégâts augmentent de 60 %.
Lors de l'utilisation de **Frappe céleste**, l'effet [Maîtrise de la lame] s'active et améliore l'effet [Volonté de l'épée].`, [
        { title: `[Maîtrise de la lame]`, content: `L'attaque de noyau devient **Danse des lames éparses**.
Accorde l'effet [Super armure] pendant l'utilisation.
Si activée pendant le lancer, la jauge de noyau n'est pas utilisée.
Durée : 5 seconde(s).` },
        { title: `Amélioration [Volonté de l'épée]`, content: `Augmente la Défense de 10 % et le Taux de Coup Critique de 2 %.
Augmente les Dégâts de Coup Critique de 2 %.
Durée : 15 seconde(s) (cumulable jusqu'à 6 fois).` }
    ], "Eau"),
        2: fmtPassif(`2 étoiles :`, `Lorsque la **Frappe céleste** touche sa cible, l'effet [Irrémédiable] s'active.
Lorsque la compétence **Épée de la destinée** touche sa cible, elle la [Paralyse].`, [
        { title: `[Irrémédiable]`, content: `Les cibles ne peuvent pas récupérer de PV.
Durée : 30 seconde(s).` },
        { title: `[Paralysie]`, content: `Interrompt la cible.
Durée : 3 seconde(s).` }
    ], "Eau"),
        3: fmtPassif(`3 étoiles :`, `Lorsque la jauge de [Volonté de l'épée] se recharge à 100 %, l'effet [Détermination de l'épée] s'active.`, [
        { title: `[Détermination de l'épée]`, content: `**Frappe céleste** devient **Attaque lourde : Frappe céleste** (Dégâts +60 %).
Consomme toute la jauge de [Volonté de l'épée] à la fin.
Durée : 6 seconde(s).` }
    ], "Eau"),
        4: fmtPassif(`4 étoiles :`, `Le Taux de coup critique de Cha Hae-In augmente de 7 % par allié de l'élément Eau présent dans le groupe.
Ses Dégâts de coup critique augmentent de 7 % par allié Eau (cumulables jusqu'à 3 fois).`, [], "Eau"),
        5: fmtPassif(`5 étoiles :`, `L'effet [Volonté de l'épée] est amélioré.
Lorsque l'utilisatrice rejoint le niveau, l'effet [Princesse épéiste immaculée] s'active.`, [
        { title: `Amélioration [Volonté de l'épée]`, content: `Augmente la Défense de 10 % et le Taux de Coup Critique de 4 %.
Augmente les Dégâts de Coup Critique de 4 %.
Durée : 15 seconde(s) (cumulable jusqu'à 6 fois).` },
        { title: `[Princesse épéiste immaculée]`, content: `Augmente les dégâts de **Épée de la destinée** de 60 %.
Augmente les dégâts de **Frappe céleste** et **Attaque lourde : Frappe céleste** de 60 %.
Durée : illimitée.` }
    ], "Eau")
    },
    summaryData: {
        0: `<h3>Passif : Épées Célestes</h3><p>Compétences activent <span class="buff">[Épées célestes]</span> (Dégâts = <span class="stat-boost">175% Déf</span>).<br>Charge la jauge <span class="buff">[Volonté de l'épée]</span> : Déf <span class="stat-boost">+5%</span>, Crit <span class="stat-boost">+2%</span>/stack (Max 6).</p>`,
        1: `<h3>1 étoile</h3><p>Attaque Noyau = <strong>Danse des lames éparses</strong> (<span class="buff">Super armure</span>, gratuit).<br>Améliore <span class="buff">[Volonté]</span> : Déf <span class="stat-boost">+10%</span>, Crit <span class="stat-boost">+2%</span>/stack.</p>`,
        2: `<h3>2 étoiles</h3><p>Frappe céleste applique <span class="buff">[Irrémédiable]</span> (Anti-heal).<br>Ultime applique <span class="buff">[Paralysie]</span> (3 sec).</p>`,
        3: `<h3>3 étoiles</h3><p>Jauge pleine = <span class="buff">[Détermination]</span>.<br>Frappe céleste devient <strong>Attaque Lourde</strong> (Dégâts <span class="stat-boost">+60%</span>).</p>`,
        4: `<h3>4 étoiles</h3><p>Par allié <span class="element-eau">Eau</span> : Taux/Dégâts Crit <span class="stat-boost">+7%</span> (Max 3 alliés).</p>`,
        5: `<h3>5 étoiles</h3><p>Améliore <span class="buff">[Volonté]</span> : Déf <span class="stat-boost">+10%</span>, Crit <span class="stat-boost">+4%</span>/stack.<br>Dégâts Ultime et Frappe céleste <span class="stat-boost">+60%</span>.</p>`
    },
    weaponData: {
        0: fmtWeapon(`Avancement 0 :`, `La Défense de l'utilisatrice augmente de 2 %.
Lorsque l'effet [Volonté de l'épée] s'active, la Défense augmente de 1 % (cumulable 60 fois).
Durée : illimitée.`, "Eau"),
        1: fmtWeapon(`Avancement 5 étoiles :`, `La Défense de l'utilisatrice augmente de 12 %.
Lorsque l'effet [Volonté de l'épée] s'active, la Défense augmente de 6 % (cumulable 60 fois).
Durée : illimitée.`, "Eau"),
        2: fmtWeapon(`Avancement 10 étoiles :`, `Augmente l'Attaque, la Défense et les PV de l'utilisatrice de 15 %.`, "Eau")
    }
};

// --- FRIEREN ---
huntersData["frieren"] = {
    name: "Frieren",
    rarity: "SSR",
    element: "eau", 
    gradient: "linear-gradient(90deg, #4b96fa, #000))", 
    image: "Chasseurs_SSR/collab/eau/Frieren/frieren_art.png",
    weaponImage: "Chasseurs_SSR/collab/eau/Frieren/baton_de_frieren/Relic_Frieren_PortraitBig.png",
    weaponName: "Bâton de Frieren",
    fullData: {
        0: fmtPassif(`Passif :`, `Les Niveaux 1, 2 et 3 de la compétence **Magie d'attaque normale (Zoltraak) - Coups multiples** s'activent à la suite.

        Le Niveau 3 de la compétence **Magie d'attaque normale (Zoltraak) - Coups multiples** active **Magie d'attaque normale (Zoltraak) - Concentration** une fois.

        Les effets [Contrôle de l'énergie de mana] et [Magie défensive] s'activent lorsque l'utilisatrice arrive dans le niveau.

        **Magie d'attaque normale (Zoltraak) - Ultime** active l'effet [Libération de l'énergie de mana] tant qu'il est actif.`, [
        { title: `[Contrôle de l'énergie de mana]`, content: `Augmente la Défense de l'utilisatrice de 25 %.
            Lorsque les PM de l'utilisatrice sont à 50 % ou plus, sa Défense augmente de 25 %.
            Réduit la Consommation de mana pour les compétences de 20 %.
            Durée : illimitée` },
        { title: `[Libération de l'énergie de mana]`, content: `Applique l'effet [Magie défensive] à toute l'équipe.
            Augmente le Taux de coup critique de 100 %. Supprime l'effet [Contrôle de l'énergie de mana].
            Lorsque l'effet [Libération de l'énergie de mana] est supprimé, l'effet [Contrôle de l'énergie de mana] est activé sur l'utilisatrice.
            Durée : illimitée` },
        { title: `[Magie défensive]`, content: `Confère un [Bouclier] équivalent à 20 % de la Défense de Frieren.
            Réduit les dégâts subis de 5 %. Durée : 30 seconde(s)` }
    ], "Eau"),
        1: fmtPassif(`1 étoile :`, `Lorsque la compétence **Magie d'attaque normale (Zoltraak) - Ultime** touche sa cible, son [Bouclier] est supprimé.

        Lorsque l'effet [Magie défensive] de Frieren est activé, toute l'équipe récupère des PV équivalents à 20 % de la Défense de Frieren (temps de rechargement : 10 seconde(s)).

        Lorsque la compétence **Magie de foudre destructrice (Judradjim)** touche sa cible, elle la [Paralyse].

        Lorsque la compétence **Magie des flammes de l'enfer (Vollzanbel)** touche sa cible, elle lui applique l'effet [Vollzanbel].`, [
        { title: `[Paralysie]`, content: `Interrompt la cible. Durée : 3 seconde(s)` },
        { title: `[Vollzanbel]`, content: `Diminue la Défense de 5 %.
            Augmente le risque de subir des Dégâts de coup critique de 5 %.
            Augmente les Dégâts de coup critique subis de 5 %.
            Augmente les dégâts infligés par Frieren de 35 %.
            Durée : 20 seconde(s)` }
    ], "Eau"),
        2: fmtPassif(`2 étoiles :`, `L'Attaque, la Défense et les PV de toute l'équipe augmentent de 9 %.`, [], "Eau"),
        3: fmtPassif(`3 étoiles :`, `Améliore les effets [Contrôle de l'énergie de mana] et [Magie défensive].`, [
        { title: `Amélioration [Contrôle de l'énergie de mana]`, content: `Augmente la Défense de 50 %.
            Lorsque les PM de l'utilisatrice sont à 50 % ou plus, sa Défense augmente de 50 %.
            La Consommation de mana des compétences diminue de 30 %.
            Durée : illimitée` },
        { title: `Amélioration [Magie défensive]`, content: `Confère un [Bouclier] équivalent à 30 % de la Défense de Frieren.
            Réduit les dégâts subis de 10 %. Durée : 60 seconde(s)` }
    ], "Eau"),
        4: fmtPassif(`4 étoiles :`, `Les Dégâts de coup critique de toute l'équipe augmentent de 20 %.`, [], "Eau"),
        5: fmtPassif(`5 étoiles :`, `Améliore les effets [Vollzanbel].

        L'utilisation de la compétence **Magie de foudre destructrice (Judradjim)** remplit 80 % de la jauge de puissance de l'utilisatrice.`, [
        { title: `Amélioration [Vollzanbel]`, content: `Diminue la Défense de 10 %. Augmente le risque de subir des Dégâts de coup critique de 15 %.
            Augmente les Dégâts de coup critique subis de 15 %. Augmente les dégâts infligés par Frieren de 70 %.
            Durée : 30 seconde(s)` }
    ], "Eau")
    },
    summaryData: {
        0: `
        <h3>Passif : Mage Légendaire</h3>
        <p>Entrée = <span class="buff">[Contrôle Mana]</span> (Déf +25-50%, Éco Mana).<br>
        Ultime active <span class="buff">[Libération]</span> : Bouclier équipe + Crit Rate <span class="stat-boost">100%</span>.<br>
        <span class="buff">[Magie défensive]</span> : Bouclier (20% Déf) + Réduction Dégâts.</p>
    `,
        1: `
        <h3>1 étoile</h3>
        <p>Ultime brise les Boucliers ennemis.<br>
        Si Bouclier actif : Soin équipe (<span class="stat-boost">20%</span> Déf).<br>
        Foudre = <span class="buff">[Paralysie]</span>. <span class="element-feu">Feu</span> = <span class="buff">[Vollzanbel]</span> (Debuff Déf/Crit, Frieren Dmg +35%).</p>
    `,
        2: `
        <h3>2 étoiles</h3>
        <p>Stats de toute l'équipe <span class="stat-boost">+9%</span>.<br></p>
    `,
        3: `
        <h3>3 étoiles</h3>
        <p>Améliore <span class="buff">[Contrôle Mana]</span> (Déf +50-100%, Mana -30%).<br>
        Améliore <span class="buff">[Magie défensive]</span> (Bouclier 30% Déf, Réduction Dégâts 10%).</p>
    `,
        4: `
        <h3>4 étoiles</h3>
        <p>Dégâts Crit de toute l'équipe <span class="stat-boost">+20%</span>.<br></p>
    `,
        5: `
        <h3>5 étoiles</h3>
        <p>Foudre (Judradjim) remplit Jauge Puissance <span class="stat-boost">80%</span>.<br>
        Améliore <span class="buff">[Vollzanbel]</span> : Déf -10%, Frieren Dmg <span class="stat-boost">+70%</span>.</p>
    `
    },
    weaponData: {
        0: fmtWeapon(`Avancement 0 :`, `La Défense de l'utilisatrice augmente de 5 %.

        Les dégats de compétence de base et de la compétence ultime de tous les membres de l'équipe augmentent de 5 %.`, "Eau"),
        1: fmtWeapon(`Avancement 5 étoiles :`, `La Défense de l'utilisatrice augmente de 50 %.

        Les dégats de compétence de base et de la compétence ultime de tous les membres de l'équipe augmentent de 30 %.`, "Eau"),
        2: fmtWeapon(`Avancement 10 étoiles :`, `L'Attaque, la Défense et les PV de l'utilisatrice augmentent de 15 %.`, "Eau")
    }
};

// --- SHUHUA ---
huntersData["shuhua"] = {
    name: "Shuhua",
    rarity: "SSR",
    element: "Eau",
    gradient: "linear-gradient(90deg, #4b96fa, #000)",
    image: "Chasseurs_SSR/collab/eau/Shuhua/shuhua_art.png",
    weaponImage: "Chasseurs_SSR/collab/eau/Shuhua/sous_le_clair_de_lune/Relic_Shuhua_PortraitBig.png",
    weaponName: "Sous le clair de lune",
    fullData: {
        0: fmtPassif(`Passif :`, `Tout l'équipe reçoit l'effet [FOREVER] en arrivant dans les modes Mission Rappel et Donjon éphémère.

        L'utilisation de la compétence **Atterrissage de pop-star** active l'effet [Sur scène].

        Les compétences **Grognement aux étoiles** et **Hurlement aux étoiles** activent l'effet [Intensité].`, [
        { title: `[Sur scène]`, content: `Active l'effet [Représentation] sur SHUHUA toutes les 3 seconde(s).
            Durée : 15 seconde(s)` },
        { title: `[FOREVER]`, content: `Augmente les dégâts infligés de 5 %.
            Durée : illimitée (cumulable jusqu'à 3 fois)` },
        { title: `[Représentation]`, content: `Augmente les dégâts de l'attaque de noyau de l'utilisatrice de 50 %.
            Confère un [Bouclier]. Durée : 3 seconde(s)` },
        { title: `[Intensité]`, content: `**Tempo double** devient **Rythme intense** et augmente les dégâts de la compétence de 50 %.
            Lorsque l'attaque de noyau de l'utilisatrice s'active et qu'elle utilise **Rythme intense**, sa jauge de noyau ne se consume pas.
            Lorsque l'attaque de noyau de l'utilisatrice touche sa cible, le temps de rechargement des compétences **Atterrissage de pop-star**, **Grognement aux étoiles** et **Hurlement aux étoiles** est réduit de 3 seconde(s) (temps de rechargement : 1 seconde(s)).
            L'effet [Intensité] est appliqué au moyen d'une [attaque de noyau], 6 fois de suite au maximum.
            Durée : 3.5 seconde(s)` },
        { title: `[Bouclier]`, content: `Confère un [Bouclier] équivalent à 10 % de l'Attaque de l'utilisatrice.
            Durée : 3 seconde(s)` }
    ], "Eau"),
        1: fmtPassif(`1 étoile :`, `L'effet [Intensité] est amélioré.

        Chaque fois que **Rythme intense** touche sa cible, l'effet [Chute de tension] est appliqué.`, [
        { title: `[Intensité] (Amélioré)`, content: `**Tempo double** devient **Rythme intense**, ce qui augmente les dégâts de l'utilisatrice de 100 %.
            Lorsque l'attaque de noyau de l'utilisatrice s'active et qu'elle utilise **Rythme intense**, aucune charge de sa jauge de noyau n'est consumée.
            Lorsque l'attaque de noyau de l'utilisatrice touche sa cible, le temps de rechargement des compétences **Atterrissage de pop-star**, **Grognement aux étoiles** et **Hurlement aux étoiles** diminue de 5 seconde(s) (temps de rechargement : 1 seconde(s)).
            L'effet [Intensité] est appliqué au moyen d'une [attaque de noyau], 6 fois de suite au maximum.
            Durée : 3.5 seconde(s)` },
        { title: `[Chute de tension]`, content: `Augmente les dégâts d'eau infligés par SHUHUA de 1 %.
            Durée : 30 seconde(s) (cumulable jusqu'à 10 fois)` }
    ], "Eau"),
        2: fmtPassif(`2 étoiles :`, `**Grognement aux étoiles** devient **Hurlement aux étoiles**, ce qui augmente les dégâts de l'utilisatrice de 100 %.`, [], "Eau"),
        3: fmtPassif(`3 étoiles :`, `Améliore [Représentation].`, [
        { title: `[Représentation] (Amélioré)`, content: `Augmente les dégâts de l'attaque de noyau de l'utilisatrice de 55 %.
            Confère un [Bouclier]. Remplit la jauge de puissance de 10 %. Active l'effet [Hausse de tension].
            Durée : 3 seconde(s)` },
        { title: `[Hausse de tension]`, content: `Augmente les dégâts d'eau infligés par l'utilisatrice de 20 %.
            Durée : 3 seconde(s)` },
        { title: `[Bouclier] (Amélioré)`, content: `Confère un [Bouclier] équivalent à 15 % de l'Attaque de l'utilisatrice.
            Durée : 3 seconde(s)` }
    ], "Eau"),
        4: fmtPassif(`4 étoiles :`, `L'Attaque augmente de 16 %.`, [], "Eau"),
        5: fmtPassif(`5 étoiles :`, `L'utilisation de **Hurlement aux étoiles** active l'effet [Plus fort !].

        La Vitesse d'attaque de **Rythme intense** augmente considérablement.`, [
        { title: `[Plus fort !]`, content: `Augmente les dégâts infligés par l'utilisatrice de 30 %.
            Augmente le Taux de coup critique de l'utilisatrice de 30 %. Durée : 10 seconde(s)` }
    ], "Eau")
    },
    summaryData: {
        0: `
        <h3>Passif : Star de la Scène</h3>
        <p>Buffs modes spéciaux : <span class="buff">[FOREVER]</span> (+5% dégâts).<br>
        Compétences activent <span class="buff">[Sur scène]</span> (Active <span class="buff">[Représentation]</span>) et <span class="buff">[Intensité]</span> (Améliore Noyau/Rythme intense).<br>
        <span class="buff">[Représentation]</span> : Dégâts Noyau +50% + Bouclier.</p>
    `,
        1: `
        <h3>1 étoile</h3>
        <p>Rythme intense applique <span class="buff">[Chute de tension]</span> (Dégâts <span class="element-eau">Eau</span> +1%/stack).<br>
        Améliore <span class="buff">[Intensité]</span> : Dégâts +100%, Reset CD, Pas de coût Jauge.</p>
    `,
        2: `
        <h3>2 étoiles</h3>
        <p>Grognement devient <strong>Hurlement aux étoiles</strong> (Dégâts +100%).<br></p>
    `,
        3: `
        <h3>3 étoiles</h3>
        <p>Améliore <span class="buff">[Représentation]</span> : Dégâts Noyau +55%, Jauge Puissance +10%, <span class="buff">[Hausse de tension]</span> (Dégâts <span class="element-eau">Eau</span> +20%).<br>
        Bouclier renforcé (15% Atk).</p>
    `,
        4: `
        <h3>4 étoiles</h3>
        <p>L'Attaque augmente de <span class="stat-boost">16 %</span>.<br></p>
    `,
        5: `
        <h3>5 étoiles</h3>
        <p>Hurlement active <span class="buff">[Plus fort !]</span> : Dégâts/Crit Rate <span class="stat-boost">+30%</span>.<br>
        Vitesse Attaque augmentée pour Rythme intense.</p>
    `
    },
    weaponData: {
        0: fmtWeapon(`Avancement 0 :`, `L'Attaque de l'utilisatrice augmente de 5 %.

        Lorsque les compétences **Tempo double** ou **Rythme intense** touchent leur cible, les dégats de **Catharsis en harmonie** augmentent de 5 % (cumulable jusqu'a 10 fois).

        Lorsque **Catharsis en harmonie** s'estompe, tous les cumuls de l'effet sont supprimés.

        Durée: 30 seconde(s)`, "Eau"),
        1: fmtWeapon(`Avancement 5 étoiles :`, `L'Attaque de l'utilisatrice augmente de 12 %.

        Lorsque les compétences **Tempo double** ou **Rythme intense** touchent leur cible, les dégats de **Catharsis en harmonie** augmentent de 30 % (cumulable jusqu'a 10 fois).

        Lorsque **Catharsis en harmonie** s'estompe, tous les cumuls de l'effet sont supprimés.

        Durée: 30 seconde(s)`, "Eau"),
        2: fmtWeapon(`Avancement 10 étoiles :`, `Augmente l'Attaque, la Défense et les PV de l'utilisatrice de 15 %.`, "Eau")
    }
};