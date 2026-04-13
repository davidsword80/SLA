if (typeof huntersData === 'undefined') { 
    var huntersData = {}; 
}

// --- SUGIMOTO REIJI ---
huntersData["sugimoto-reiji"] = {
    name: "Sugimoto Reiji",
    rarity: "SSR",
    element: "Vent",
    gradient: "linear-gradient(90deg, #32c732, #000)",
    image: "Chasseurs_SSR/vent/Sugimoto_reiji/SugimotoReiji_Portrait_Body.png",
    weaponImage: "Chasseurs_SSR/vent/Sugimoto_reiji/gravee_dans_la_chair/Relic_SugimotoReiji_PortraitBig.png",
    weaponName: "Gravée dans la chair",
    fullData: {
        0: fmtPassif(`Passif :`, `L'effet [Combat à l'épée] reste actif et l'état [Combat à l'épée] se divise en trois phases : [Initiation, Accélération, Finalité].

        [Initiation] s'active lorsque l'utilisateur entre dans un niveau.

        L'utilisation des compétences **Éclair d'acier**, **Retour de fil** et **Renvoi de fil** active l'effet [Dégainage éclair].

        L'utilisation de la compétence **Concentration inébranlable** active l'effet [Danse de l'épée].

        Lorsque la compétence **Vengeur** touche sa cible, elle lui applique l'effet [Fil de l'hiver].

        Lorsque les compétences **Entaille éclipse** ou **Lame d'extinction** touchent leur cible, elles lui appliquent 2 cumuls de l'effet [Fil de l'hiver].`, [
        { title: `[Dégainage éclair]`, content: `Les compétences **Vengeur**, **Entaille éclipse** et **Lame d'extinction** deviennent disponibles et suppriment 1 cumul de [Dégainage éclair] lors de leur utilisation.
            Durée : illimitée (cumulable jusqu'à 3 fois)` },
        { title: `[Initiation]`, content: `L'utilisation de la compétence **Vengeur** supprime l'effet [Initiation] et fait passer à la phase [Accélération].
            Durée : illimitée` },
        { title: `[Accélération]`, content: `Transforme **Éclair d'acier** en **Retour de fil** et augmente ses dégâts de 50 %.
            Transforme **Vengeur** en **Entaille éclipse** et augmente ses dégâts de 50 %.
            L'utilisation de **Entaille éclipse** supprime l'effet [Accélération] et fait passer à la phase [Finalité].
            Durée : illimitée` },
        { title: `[Finalité]`, content: `Transforme **Retour de fil** en **Renvoi de fil** et augmente ses dégâts de 100 %.
            Transforme **Entaille éclipse** en **Lame d'extinction** et augmente ses dégâts de 100 %.
            L'utilisation de **Lame d'extinction** refait passer de la phase [Finalité] à la phase [Initiation].
            Durée : illimitée` },
        { title: `[Danse de l'épée]`, content: `L'utilisation de **Vivelame - Origine** remplit la jauge de noyau deux fois plus vite.
            Lorsque la compétence [Évasion extrême] est activée, l'attaque de noyau est activée.
            Durée : 15 seconde(s)` },
        { title: `[Fil de l'hiver]`, content: `Inflige des dégâts équivalents à 50 % des PV max de l'utilisateur toutes les 3 secondes.
            Durée : 30 seconde(s) (cumulable jusqu'à 10 fois)` }
    ], "Vent"),
        1: fmtPassif(`1 étoile :`, `L'utilisation des compétences **Concentration inébranlable** ou **Vivelame - Oubli** active l'effet [Dégainage éclair] ainsi que l'attaque de noyau de l'utilisateur.

        La consommation de l'effet [Dégainage éclair] réduit le temps de rechargement de **Vivelame - Oubli** de 10 seconde(s) et restaure 35 % de la jauge de puissance de l'utilisateur.`, [], "Vent"),
        2: fmtPassif(`2 étoiles :`, `L'efficacité d'[Accumulation élémentaire] de Vent augmente de 20 %.`, [], "Vent"),
        3: fmtPassif(`3 étoiles :`, `Lorsque Sugimoto Reiji ou un allié parvient à infliger une Surcharge de vent, l'effet [Lame tempête] est appliqué à Sung Jinwoo et aux membres de l'équipe de l'élément Vent.`, [
        { title: `[Lame tempête]`, content: `Augmente la Pénétration de défense de 18 %.
            Augmente les dégâts de Surcharge de vent de 45 %.
            Augmente les dégâts de compétence QTE de vent de 100 %.
            Durée : 15 seconde(s)` }
    ], "Vent"),
        4: fmtPassif(`4 étoiles :`, `Les Dégâts de coup critique des membres de l'équipe de l'élément Vent augmentent de 10 % par allié de l'élément Vent présent dans l'équipe.`, [], "Vent"),
        5: fmtPassif(`5 étoiles :`, `L'utilisation de la compétence **Vivelame - Oubli** active l'effet [Éclair tempétueux].

        L'effet [Danse de l'épée] est amélioré.`, [
        { title: `[Danse de l'épée] (amélioré)`, content: `L'utilisation de **Vivelame - Origine** recharge la jauge de noyau deux fois plus vite.
            Lors de l'utilisation des compétences **Vengeur**, **Entaille éclipse** ou **Lame d'extinction** et de l'activation d'[Évasion extrême], l'attaque de noyau de l'utilisateur se déclenche.
            Les dégâts de l'attaque de noyau augmentent de 100 %.
            Augmente l'effet d'[Accumulation élémentaire] de Vent de 20 %.
            Durée : 15 seconde(s)` },
        { title: `[Éclair tempétueux]`, content: `Les dégâts des compétences **Lame d'extinction** et **Chute de fleur** augmentent de 300 %.
            Durée : 30 seconde(s)` }
    ], "Vent")
    },
    summaryData: {
        0: `
        <h3>Passif : Combat à l'épée</h3>
        <p>3 phases : <span class="buff">[Initiation → Accélération → Finalité]</span>.<br>
        Éclair d'acier/Retour/Renvoi de fil = <span class="buff">[Dégainage éclair]</span> (x3 max).<br>
        Concentration inébranlable = <span class="buff">[Danse de l'épée]</span> (15s).<br>
        Vengeur = <span class="buff">[Fil de l'hiver]</span> (x1) | Entaille éclipse/Lame extinction = (x2).<br>
        <span class="buff">[Fil de l'hiver]</span> : <span class="stat-boost">50%</span> PV max / 3s (30s, cumulable x10).</p>
        `,
        1: `
        <h3>1 étoile</h3>
        <p>Concentration/Vivelame Oubli = <span class="buff">[Dégainage éclair]</span> + Attaque Noyau.<br>
        Consommation <span class="buff">[Dégainage éclair]</span> : CD Vivelame Oubli <span class="stat-boost">-10s</span> + Jauge Puissance <span class="stat-boost">+35%</span>.</p>
        `,
        2: `
        <h3>2 étoiles</h3>
        <p>Accumulation élémentaire <span class="element-vent">Vent</span> <span class="stat-boost">+20%</span>.</p>
        `,
        3: `
        <h3>3 étoiles</h3>
        <p>Surcharge vent = <span class="buff">[Lame tempête]</span> sur équipe <span class="element-vent">Vent</span>.<br>
        Pénétration Déf <span class="stat-boost">+18%</span>, Dégâts Surcharge vent <span class="stat-boost">+45%</span>, QTE vent <span class="stat-boost">+100%</span> (15s).</p>
        `,
        4: `
        <h3>4 étoiles</h3>
        <p>Dégâts Crit équipe <span class="element-vent">Vent</span> <span class="stat-boost">+10%</span> par allié <span class="element-vent">Vent</span>.</p>
        `,
        5: `
        <h3>5 étoiles</h3>
        <p>Vivelame Oubli = <span class="buff">[Éclair tempétueux]</span> : Lame extinction/Chute de fleur <span class="stat-boost">+300%</span> (30s).<br>
        <span class="buff">[Danse de l'épée]</span> amélioré : Attaque Noyau <span class="stat-boost">+100%</span>, Accumulation Vent <span class="stat-boost">+20%</span>.</p>
        `
    },
    weaponData: {
        0: fmtWeapon(`Avancement 0 :`, `Les PV de l'utilisateur augmentent de 5 %.

        L'utilisation des compétences **Vengeur**, **Entaille éclipse** ou **Lame d'extinction** augmente les dégâts de Surcharge de toute l'équipe de 5 %.

        Durée : 30 seconde(s) (cumulable jusqu'à 3 fois)`, "Vent"),
        1: fmtWeapon(`Avancement 5 étoiles :`, `Les PV de l'utilisateur augmentent de 12 %.

        L'utilisation des compétences **Vengeur**, **Entaille éclipse** ou **Lame d'extinction** augmente les dégâts de Surcharge de toute l'équipe de 10 %.

        Durée : 30 seconde(s) (cumulable jusqu'à 3 fois)`, "Vent"),
        2: fmtWeapon(`Avancement 10 étoiles :`, `Augmente l'Attaque, la Défense et les PV de 15 %.`, "Vent")
    }
};

// --- KIM SANGSHIK ---
huntersData["kim-sangshik"] = {
    name: "Kim Sangshik",
    rarity: "SR",
    element: "Vent",
    gradient: "linear-gradient(90deg, #32c732, #000)", // Dégradé vert/noir pour le vent
    image: "Chasseurs_SR/vent/Kim_sangshik/KimSangShik_Portrait_Body.png",
    weaponImage: "Chasseurs_SR/vent/Kim_sangshik/la_chute_de_quelqu_un/Relic_KimSangShik_PortraitBig.png",
    weaponName: "La chute de quelqu'un",
    fullData: {
        0: fmtPassif(`Passif :`, `Le temps de rechargement de **Choc véloce** diminue de 1 seconde(s) et la jauge de noyau se remplit de 50% lors de l'utilisation de **Tempête tranchante**.

        Le temps de rechargement de **Tempête tranchante** diminue de 1 seconde(s) et la jauge de noyau se remplit de 50% lors de l'utilisation de **Choc véloce**.

        Le temps de rechargement de **Tempête tranchante** et **Choc véloce** diminue de 1 seconde(s) lors de l'utilisation de **Bourrasque perçante**.`, [], "Vent"),
        1: fmtPassif(`1 étoile :`, `Lorsque Sangshik utilise les compétences **Tempête tranchante**, **Choc véloce** ou **Bourrasque perçante**, son effet de Réduction du temps de rechargement fait passer le temps de rechargement à 2 seconde(s).

        Lorsque Sangshik utilise les compétences **Tempête tranchante** ou **Choc véloce**, **Bourrasque perçante** s'active.`, [], "Vent"),
        2: fmtPassif(`2 étoiles :`, `Les PV de l'utilisateur augmentent de 10%.`, [], "Vent"),
        3: fmtPassif(`3 étoiles :`, `L'efficacité de [Bris] de l'utilisateur augmente de 20%.`, [], "Vent"),
        4: fmtPassif(`4 étoiles :`, `Augmente la Défense de l'utilisateur de 6 %.`, [], "Vent"),
        5: fmtPassif(`5 étoiles :`, `Lors de l'utilisation de **Bourrasque perçante**, l'utilisateur récupère 60 des PV de Sangshik.`, [], "Vent")
    },
    summaryData: {
        0: `
        <h3>Passif : Maître de l'Épée Rapide</h3>
        <p>Skills = Réduction CD mutuelle (1s) + Regen Jauge (<span class="stat-boost">50%</span>).<br></p>
    `,
        1: `
        <h3>1 étoile</h3>
        <p>Réduction CD forcée à 2s.<br>
        Tempête/Choc = Active <strong>Bourrasque perçante</strong>.<br></p>
    `,
        2: `
        <h3>2 étoiles</h3>
        <p>PV <span class="stat-boost">+10%</span>.<br></p>
    `,
        3: `
        <h3>3 étoiles</h3>
        <p>Efficacité Bris <span class="stat-boost">+20%</span>.<br></p>
    `,
        4: `
        <h3>4 étoiles</h3>
        <p>Défense <span class="stat-boost">+6%</span>.<br></p>
    `,
        5: `
        <h3>5 étoiles</h3>
        <p>Bourrasque perçante = Soin (60 PV).<br></p>
    `
    },
    weaponData: {
        0: fmtWeapon(`Avancement 0 :`, `Augmente les dégâts de l'attaque de noyau de l'utilisateur de 4%.

        Lors de l'utilisation d'une attaque de noyau, les dégâts de la prochaine compétence de base de l'utilisateur augmentent de 4%.`, "Vent"),
        1: fmtWeapon(`Avancement 5 étoiles :`, `Augmente les dégâts de l'attaque de noyau de l'utilisateur de 24%.

        Lors de l'utilisation d'une attaque de noyau, les dégâts de la prochaine compétence de base de l'utilisateur augmentent de 24%.`, "Vent"),
        2: fmtWeapon(`Avancement 10 étoiles :`, `Augmente l'Attaque, la Défense et les PV de l'utilisateur de 15%.`, "Vent")
    }
};

// --- PARK BEOM-SHIK ---
huntersData["park-beom-shik"] = {
    name: "Park Beom-shik",
    rarity: "SR",
    element: "Vent",
    gradient: "linear-gradient(90deg, #32c732, #000)",
    image: "Chasseurs_SR/vent/Park_beom_shik/ParkBeomSik_Portrait_Body.png",
    weaponImage: "Chasseurs_SR/vent/Park_beom_shik/decisions/Relic_ParkBeomsik_PortraitBig.png",
    weaponName: "Décisions",
    fullData: {
        0: fmtPassif(`Passif :`, `Lors de l'utilisation des compétences **Frappe tournoyante!**, **Frappe descendante!** ou **Attaque de charge!**, l'utilisateur applique l'effet [Père de deux enfants].

        Si les PV de l'utilisateur sont inférieurs à 30%, l'effet [Détermination du père] s'applique.`, [
        { title: `[Père de deux enfants]`, content: `Augmente la Défense de 4% (cumulable jusqu'à 10 fois).
            Durée: 30 seconde(s)` },
        { title: `[Détermination du père]`, content: `La compétence **Frappe tournoyante!** peut être utilisée indéfiniment.
            Applique l'effet [Super armure].
            Augmente la Vitesse d'attaque de 8%.
            Augmente la Défense de l'utilisateur de 8%.
            Durée: 4 seconde(s) (ne s'active qu'une fois la première fois)` }
    ], "Vent"),
        1: fmtPassif(`1 étoile :`, `Les dégâts infligés aux cibles ayant moins de PV que l'utilisateur augmentent de 15%.`, [], "Vent"),
        2: fmtPassif(`2 étoiles :`, `Votre Défense augmente de 6%.`, [], "Vent"),
        3: fmtPassif(`3 étoiles :`, `Améliore la compétence **Frappe descendante !**.

        Réduit le temps de charge de l'utilisateur de 30%.

        Augmente la portée de la compétence de 30%.

        Augmente les dégâts de l'utilisateur de 60%.`, [], "Vent"),
        4: fmtPassif(`4 étoiles :`, `Les PV de l'utilisateur augmentent de 10%.`, [], "Vent"),
        5: fmtPassif(`5 étoiles :`, `Lors de l'utilisation de la compétence **Une autre ligne temporelle**, l'utilisateur applique l'effet [Détermination du père].`, [], "Vent")
    },
    summaryData: {
        0: `
        <h3>Passif : Force Paternelle</h3>
        <p>Compétences = <span class="buff">[Père de deux enfants]</span> (Def <span class="stat-boost">+4%</span>, max 10).<br>
        PV < 30% = <span class="buff">[Détermination du père]</span> (Frappe tournoyante infinie, Super armure, Buff Def/Vitesse).</p>
    `,
        1: `
        <h3>1 étoile</h3>
        <p>Dégâts vs PV inférieurs <span class="stat-boost">+15%</span>.<br></p>
    `,
        2: `
        <h3>2 étoiles</h3>
        <p>Défense <span class="stat-boost">+6%</span>.<br></p>
    `,
        3: `
        <h3>3 étoiles</h3>
        <p>Frappe descendante ! améliorée : Charge/Portée/Dégâts boostés.<br></p>
    `,
        4: `
        <h3>4 étoiles</h3>
        <p>PV <span class="stat-boost">+10%</span>.<br></p>
    `,
        5: `
        <h3>5 étoiles</h3>
        <p>Une autre ligne temporelle active <span class="buff">[Détermination du père]</span>.<br></p>
    `
    },
    weaponData: {
        0: fmtWeapon(`Avancement 0 :`, `Augmente la Défense de l'utilisateur de 2%.

        Lorsque l'effet [Détermination du père] s'active, un [Bouclier] supplémentaire équivalent à 2% de la Défense de l'utilisateur est créé, et les dégâts de ses compétences de base augmentent de 10%.`, "Vent"),
        1: fmtWeapon(`Avancement 5 étoiles :`, `Augmente la Défense de l'utilisateur de 8%.

        Lorsque l'effet [Détermination du père] s'active, un [Bouclier] supplémentaire équivalent à 8% de la Défense de l'utilisateur est créé, et les dégâts de ses compétences de base augmentent de 35%.`, "Vent"),
        2: fmtWeapon(`Avancement 10 étoiles :`, `Augmente l'Attaque, la Défense et les PV de l'utilisateur de 15%.`, "Vent")
    }
};

// --- PARK HEEJIN ---
huntersData["park-heejin"] = {
    name: "Park Heejin",
    rarity: "SR",
    element: "Vent",
    gradient: "linear-gradient(90deg, #32c732, #000)",
    image: "Chasseurs_SR/vent/Park_heejin/ParkHeeJin_Portrait_Body.png",
    weaponImage: "Chasseurs_SR/vent/Park_heejin/intuition/Relic_ParkHeejin_PortraitBig.png",
    weaponName: "Intuition",
    fullData: {
        0: fmtPassif(`Passif :`, `Lors de l'utilisation des compétences **Balle d'air**, **Cisaille venteuse**, **Bourrasque tranchante** ou **Vortex venteux**, la jauge de puissance de l'utilisateur se remplit de 8%.

        Réduit le temps de rechargement de **Tempête venteuse** de 30%.`, [], "Vent"),
        1: fmtPassif(`1 étoile :`, `Lorsque Heejin utilise la compétence **Bourrasque tranchante**, elle supprime les [débuffs] appliqués à elle et son équipe.`, [], "Vent"),
        2: fmtPassif(`2 étoiles :`, `Le temps de rechargement de **Tempête venteuse** diminue de 10%.`, [], "Vent"),
        3: fmtPassif(`3 étoiles :`, `Lors de l'utilisation des compétences **Balle d'air**, **Cisaille venteuse**, **Bourrasque tranchante** ou

        **Vortex venteux**, la jauge de puissance de l'utilisateur se remplit de 10%.`, [], "Vent"),
        4: fmtPassif(`4 étoiles :`, `Les dégâts de la compétence **Tempête venteuse** augmentent de 30%.`, [], "Vent"),
        5: fmtPassif(`5 étoiles :`, `Au début du combat, la jauge de puissance de Heejin se remplit de 100%.`, [], "Vent")
    },
    summaryData: {
        0: `
        <h3>Passif : <span class="element-vent">Vent</span> de l'Esprit</h3>
        <p>Skills <span class="element-vent">Vent</span> = Jauge Puissance <span class="stat-boost">+8%</span>.<br>
        CD Tempête venteuse <span class="stat-boost">-30%</span>.<br></p>
    `,
        1: `
        <h3>1 étoile</h3>
        <p>Bourrasque tranchante : Purge débuffs (Soi + Équipe).<br></p>
    `,
        2: `
        <h3>2 étoiles</h3>
        <p>CD Tempête venteuse <span class="stat-boost">-10%</span>.<br></p>
    `,
        3: `
        <h3>3 étoiles</h3>
        <p>Skills <span class="element-vent">Vent</span> = Jauge Puissance <span class="stat-boost">+10%</span>.<br></p>
    `,
        4: `
        <h3>4 étoiles</h3>
        <p>Dégâts Tempête venteuse <span class="stat-boost">+30%</span>.<br></p>
    `,
        5: `
        <h3>5 étoiles</h3>
        <p>Début combat : Jauge Puissance 100%.<br></p>
    `
    },
    weaponData: {
        0: fmtWeapon(`Avancement 0 :`, `Augmente les dégâts de compétence ultime de l'utilisatrice de 5%.

        Lors de l'utilisation de la compétence ultime, les dégâts de compétence ultime du membre de son équipe ayant la Puissance totale la plus élevée augmentent de 5% pendant 20 seconde(s).`, "Vent"),
        1: fmtWeapon(`Avancement 5 étoiles :`, `Augmente les dégâts de compétence ultime de l'utilisatrice de 20%.

        Lors de l'utilisation de la compétence ultime, les dégâts de compétence ultime du membre de son équipe ayant la Puissance totale la plus élevée augmentent de 20% pendant 20 seconde(s).`, "Vent"),
        2: fmtWeapon(`Avancement 10 étoiles :`, `Augmente l'Attaque, la Défense et les PV de l'utilisateur de 15%.`, "Vent")
    }
};

// --- LENNART NIERMANN ---
huntersData["lennart-niermann"] = {
    name: "Lennart Niermann",
    rarity: "SSR",
    element: "Vent",
    gradient: "linear-gradient(90deg, #1e8449, #000)",
    image: "Chasseurs_SSR/vent/Lennart_niermann/lennart_art.png",
    weaponImage: "Chasseurs_SSR/vent/Lennart_niermann/le_poid_des_responsabilites/Relic_LennartNiermann_PortraitBig.png",
    weaponName: "Le poid des responsabilités",
    fullData: {
        0: fmtPassif(`Passif :`, `Lorsque **Todessinfonie** touche sa cible, l'effet [Marque du chasseur] est activé.

        Lors de l'utilisation des compétences **Fenriszahn** ou **Kaisers Rache**, l'utilisateur reçoit 6 cumuls de l'effet [Analyse].

        Lors de l'utilisation de **Todessinfonie**, l'utilisateur reçoit 12 cumuls de l'effet [Analyse].

        La Défense de l'utilisateur augmente de 20 % tant que l'effet [Analyse] est actif.`, [
        { title: `[Marque du chasseur]`, content: `Lorsque la cible récupère des PV ou est sous l'effet [Irrémédiable], l'effet [Marque du chasseur] devient [Cage du chasseur].
            Durée : 20 seconde(s).` },
        { title: `[Cage du chasseur]`, content: `Augmente les dégâts infligés par Lennart Niermann de 15 %.
            Durée : 20 seconde(s).` },
        { title: `[Analyse]`, content: `Octroie [Super armure]. Lorsque l'utilisateur est touché par une attaque ennemie, il perd 1 cumul de l'effet [Analyse].
            Durée : illimitée (cumulable jusqu'à 20 fois).` }
    ], "Vent"),
        1: fmtPassif(`1 étoile :`, `Lors de l'utilisation des compétences **Fenriszahn**, **Kaisers Rache** ou **Todessinfonie**, la durée d'effet de l'attaque de zone créée augmente de 3 seconde(s).

        Lorsque les membres de l'équipe de l'élément Vent, y compris l'utilisateur, utilisent leur compétence de base, Lennart Niermann récupère 3 % de ses PM et sa jauge de puissance se remplit de 5 %.`, [], "Vent"),
        2: fmtPassif(`2 étoiles :`, `Les dégâts élémentaires de vent de l'utilisateur augmentent de 30 %.`, [], "Vent"),
        3: fmtPassif(`3 étoiles :`, `Lorsque l'effet [Analyse] a 20 cumuls, il active l'effet [Cercle magique défensif] sur l'ensemble de l'équipe.`, [
        { title: `[Cercle magique défensif]`, content: `Empêche de gagner ou de perdre des cumuls de l'effet [Analyse]. Octroie [Super armure].
            Augmente les Dégâts de coup critique de l'utilisateur de 30 %. Augmente la Défense de l'utilisateur de 30 %.
            Durée : 20 seconde(s).` }
    ], "Vent"),
        4: fmtPassif(`4 étoiles :`, `La Défense des membres de l'équipe de l'élément Vent augmente de 14 % par allié de l'élément Vent.

        Augmente les PV de l'ensemble de l'équipe de 8 %.`, [], "Vent"),
        5: fmtPassif(`5 étoiles :`, `L'effet [Cage du chasseur] est amélioré.

        Au début du niveau, l'utilisateur reçoit 100 cumuls de l'effet [Analyse].

        Le temps de rechargement de **Todessinfonie** diminue de 25 seconde(s).`, [
        { title: `[Cage du chasseur] (Amélioré)`, content: `Augmente les dégâts infligés par Lennart Niermann de 30 %.
            Durée : 40 seconde(s).` }
    ], "Vent")
    },
    summaryData: {
        0: `
        <h3>Passif : Analyse Tactique</h3>
        <p>Compétences génèrent <span class="buff">[Analyse]</span> (Super armure, Défense <span class="stat-boost">+20%</span>).<br>
        <strong>Todessinfonie</strong> applique <span class="buff">[Marque du chasseur]</span>.<br>
        Si cible Heal/Irrémédiable : Marque -> <span class="buff">[Cage du chasseur]</span> (Dégâts <span class="stat-boost">+15%</span>).</p>
    `,
        1: `
        <h3>1 étoile</h3>
        <p>Durée zones de compétences +3s.<br>
        <span class="keyword-orange">compétences de base</span> alliés <span class="element-vent">Vent</span> : Regen PM <span class="stat-boost">3%</span> + Jauge Puissance <span class="stat-boost">5%</span>.<br></p>
    `,
        2: `
        <h3>2 étoiles</h3>
        <p>Dégâts <span class="element-vent">Vent</span> <span class="stat-boost">+30%</span>.<br></p>
    `,
        3: `
        <h3>3 étoiles</h3>
        <p>20 cumuls Analyse = <span class="buff">[Cercle magique défensif]</span> équipe.<br>
        Effet : Super armure, Dégâts Crit/Défense <span class="stat-boost">+30%</span>.</p>
    `,
        4: `
        <h3>4 étoiles</h3>
        <p>Défense équipe <span class="element-vent">Vent</span> <span class="stat-boost">+14%</span> par allié <span class="element-vent">Vent</span>.<br>
        PV équipe <span class="stat-boost">+8%</span>.</p>
    `,
        5: `
        <h3>5 étoiles</h3>
        <p>Début niveau : 100 cumuls <span class="buff">[Analyse]</span>.<br>
        CD Todessinfonie -25s.<br>
        <span class="buff">[Cage]</span> améliorée : Dégâts <span class="stat-boost">+30%</span> (40s).</p>
    `
    },
    weaponData: {
        0: fmtWeapon(`Avancement 0 :`, `Augmente la Défense de l'utilisateur de 5 %.

        Lors de l'utilisation des compétences **Fenriszahn**, **Kaisers Rache**, **Todessinfonie** ou **Wolfspranke**, l'effet [Paralysie] est appliqué pendant 0.5 seconde(s) aux ennemis se trouvant à moins de 10 m (temps de rechargement : 20 seconde(s)).`, "Vent"),
        1: fmtWeapon(`Avancement 5 étoiles :`, `Augmente la Défense de l'utilisateur de 50 %.

        Lors de l'utilisation des compétences **Fenriszahn**, **Kaisers Rache**, **Todessinfonie** ou **Wolfspranke**, l'effet [Paralysie] est appliqué pendant 5 seconde(s) aux ennemis se trouvant à moins de 10 m (temps de rechargement : 20 seconde(s)).`, "Vent"),
        2: fmtWeapon(`Avancement 10 étoiles :`, `Augmente l'Attaque, la Défense et les PV de l'utilisateur de 15 %.`, "Vent")
    }
};

// --- SUNG JINAH ---
huntersData["sung-jinah"] = {
    name: "Sung Jinah",
    rarity: "SSR",
    element: "Vent",
    gradient: "linear-gradient(90deg, #1e8449, #000)",
    image: "Chasseurs_SSR/vent/Sung_jinah/sung_art.png",
    weaponImage: "Chasseurs_SSR/vent/Sung_jinah/mousson_bleue/Relic_SungJinah_PortraitBig.png",
    weaponName: "Mousson bleue",
    fullData: {
        0: fmtPassif(`Passif :`, `Lors de l'utilisation des compétences **Rapière de tempête inversée**, **Tourbillon convergent**, **Torrent**, **Parapluie : Rapière de tempête inversée**, **Parapluie : Tourbillon convergent** ou **Parapluie : Torrent**, l'effet [Vent] est activé.`, [
        { title: `[Vent]`, content: `Augmente les dégâts des compétences **Rapière de tempête inversée**, **Tourbillon convergent**, **Parapluie : Rapière de tempête inversée**, **Parapluie : Tourbillon convergent**, **Sérénade tempétueuse** et **Sérénade : Perturbation aéro** de 50 %.
            À 3 cumuls, octroie à toute l'équipe le maximum de cumuls de l'effet [Ailes de bourrasque] à l'exception de Sung Jinah.
            Lorsque l'utilisatrice quitte le combat, cet effet est supprimé. En mode Combat d'équipe, cet effet est supprimé toutes les 15 seconde(s).
            Durée : 60 seconde(s) (cumulable jusqu'à 3 fois).` },
        { title: `[Ailes de bourrasque]`, content: `Lors de l'utilisation de la compétence de base ou de la compétence ultime, 1 cumul de l'effet [Ailes de bourrasque] est supprimé et l'effet [Ailes de la liberté] est activé.
            Durée : 60 seconde(s) (cumulable jusqu'à 3 fois).` },
        { title: `[Ailes de la liberté]`, content: `Augmente les dégâts des compétences de base et ultime de l'utilisatrice de 10 %.
            Durée : 5 seconde(s) (cumulable jusqu'à 1 fois).` }
    ], "Vent"),
        1: fmtPassif(`1 étoile :`, `Lorsque l'effet [Vent] est activé, l'effet [Toucher du vent] est appliqué à toute l'équipe.`, [
        { title: `[Toucher du vent]`, content: `Augmente l'Attaque de l'utilisatrice de 1 %. Augmente la Défense de 1 %.
            Augmente les dégâts de la compétence de base de 0.5 %.
            Augmente en plus l'Attaque des membres de l'équipe de l'élément Vent de 1 %.
            Augmente en plus la Défense des membres de l'équipe de l'élément Vent de 1 %.
            Augmente en plus les dégâts de la compétence de base des membres de l'équipe de l'élément Vent de 0.5 %.
            Durée : illimitée (cumulable jusqu'à 10 fois).` }
    ], "Vent"),
        2: fmtPassif(`2 étoiles :`, `Lorsque l'effet [Ailes de bourrasque] est activé, toute l'équipe récupère des PM à hauteur de 100 par cumul appliqué.

        L'effet [Ailes de la liberté] est amélioré.`, [
        { title: `[Ailes de la liberté] (Amélioré)`, content: `Les dégâts des compétences de base et ultime de l'utilisatrice augmentent de 20 %.
            Les dégâts de vent de l'utilisatrice augmentent de 10 %.
            Durée : 10 seconde(s) (cumulable jusqu'à 1 fois).` }
    ], "Vent"),
        3: fmtPassif(`3 étoiles :`, `Améliore l'effet [Ailes de la liberté].`, [
        { title: `[Ailes de la liberté] (Amélioré - 3 Étoiles)`, content: `Augmente les dégâts des compétences de base et ultime de l'utilisatrice de 20 %.
            Augmente les dégâts de vent de 10 %.
            Lorsque la compétence ultime de l'utilisatrice touche sa cible, elle lui applique l'effet [Irrémédiable].
            Durée : 10 seconde(s) (cumulable jusqu'à 1 fois).` },
        { title: `[Irrémédiable]`, content: `La cible n'est pas en mesure de récupérer des PV.
            Durée : 30 seconde(s).` }
    ], "Vent"),
        4: fmtPassif(`4 étoiles :`, `Les dégâts de vent des membres de l'équipe de l'élément Vent augmentent de 5 % par allié de l'élément Vent.`, [], "Vent"),
        5: fmtPassif(`5 étoiles :`, `L'utilisation des compétences **Perturbation aéro** ou **Sérénade : Perturbation aéro** confère 1 cumul(s) de l'effet [Aéro] à toute l'équipe.

        Après l'utilisation de la compétence **Sérénade tempétueuse** en mode Combat d'équipe, la compétence **Sérénade : Perturbation aéro** peut à nouveau être utilisée.

        Lorsque Sung Jinah ou un membre de l'équipe quitte le combat, 1 cumuls supplémentaires de l'effet [Aéro] sont conférés à toute l'équipe.`, [
        { title: `[Sérénade : Perturbation aéro]`, content: `Dégâts : inflige des dégâts équivalents à 300 % de ceux de **Sérénade tempétueuse**.
            Lors de l'utilisation de cette compétence, le temps de rechargement de la compétence **Sérénade tempétueuse** diminue de 60 % et l'effet [Averses soudaines] est réactivé sur Sung Jinah.` },
        { title: `[Aéro]`, content: `Augmente les dégâts de vent de 2 %.
            Durée : 60 seconde(s) (cumulable jusqu'à 5 fois).` }
    ], "Vent")
    },
    summaryData: {
        0: `
        <h3>Passif : Maîtrise du <span class="element-vent">Vent</span></h3>
        <p>Compétences activent <span class="buff">[Vent]</span> (Dégâts compétences <span class="stat-boost">+50%</span>).<br>
        3 stacks [<span class="element-vent">Vent</span>] = Buff équipe <span class="buff">[Ailes de bourrasque]</span>.<br>
        [Ailes de bourrasque] -> Active <span class="buff">[Ailes de la liberté]</span> sur Basic/Ult (Dégâts <span class="stat-boost">+10%</span>).</p>
    `,
        1: `
        <h3>1 étoile</h3>
        <p>[<span class="element-vent">Vent</span>] active <span class="buff">[Toucher du vent]</span> (Stackable x10) :<br>
        Boost Self: Atk/Def +1%, Basic Dmg +0.5%.<br>
        Boost Équipe <span class="element-vent">Vent</span>: Atk/Def +1%, Basic Dmg +0.5%.</p>
    `,
        2: `
        <h3>2 étoiles</h3>
        <p>[Ailes de bourrasque] rend 100 PM/stack à l'équipe.<br>
        Améliore <span class="buff">[Ailes de la liberté]</span> : Dégâts Basic/Ult <span class="stat-boost">+20%</span>, <span class="element-vent">Vent</span> <span class="stat-boost">+10%</span>.</p>
    `,
        3: `
        <h3>3 étoiles</h3>
        <p>Ultime applique <span class="buff">[Irrémédiable]</span> (Anti-heal).</p>
    `,
        4: `
        <h3>4 étoiles</h3>
        <p>Dégâts <span class="element-vent">Vent</span> équipe <span class="stat-boost">+5%</span> par allié <span class="element-vent">Vent</span>.<br></p>
    `,
        5: `
        <h3>5 étoiles</h3>
        <p>Perturbation/Tag out = Buff <span class="buff">[Aéro]</span> (Dégâts <span class="element-vent">Vent</span> <span class="stat-boost">+2%</span>/stack).<br>
        Sérénade : Perturbation aéro reset CD Ult et boost dégâts.</p>
    `
    },
    weaponData: {
        0: fmtWeapon(`Avancement 0 :`, `Augmente la Défense de 2 %.

        Lors de l'utilisation des compétences **Rapière de tempête inversée** ou **Parapluie : Rapière de tempête inversée**, les dégâts de compétence de base des membres de l'équipe augmentent de 0.5 %.`, "Vent"),
        1: fmtWeapon(`Avancement 5 étoiles :`, `Augmente la Défense de 12 %.

        Lors de l'utilisation des compétences **Rapière de tempête inversée** ou **Parapluie : Rapière de tempête inversée**, les dégâts de compétence de base des membres de l'équipe augmentent de 2 %.

        Durée : illimitée (cumulable jusqu'à 5 fois)`, "Vent"),
        2: fmtWeapon(`Avancement 10 étoiles :`, `Augmente l'Attaque, la Défense et les PV de l'utilisatrice de 15 %.`, "Vent")
    }
};

// --- WOO JINCHEOL ---
huntersData["woo-jincheol"] = {
    name: "Woo Jincheol",
    rarity: "SSR",
    element: "Vent",
    gradient: "linear-gradient(90deg, #1e8449, #000)",
    image: "Chasseurs_SSR/vent/Woo_jincheol/woo_art.png",
    weaponImage: "Chasseurs_SSR/vent/Woo_jincheol/un_autre_niveau/Relic_WooJinChul_PortraitBig.png",
    weaponName: "Un autre niveau",
    fullData: {
        0: fmtPassif(`Passif :`, `Lorsque la compétence **Ruée** est utilisée, les dégâts des compétences **Suppression**, **Médiation de puissance** et **Poing de fer** augmentent de 30% pendant 6 seconde(s) et l'effet [Super armure] est appliqué.

        Le temps de rechargement de **Ruée** est réduit de 1 seconde(s).`, [], "Vent"),
        1: fmtPassif(`1 étoile :`, `Modification de l'effet de la compétence

        **[Médiation de puissance]**

        Augmente l'effet et les dégâts de [Bris] de 100%.

        Peut être utilisée jusqu'à 3 fois.`, [], "Vent"),
        2: fmtPassif(`2 étoiles :`, `La Pénétration de défense de l'utilisateur augmente de 10%.`, [], "Vent"),
        3: fmtPassif(`3 étoiles :`, `Lors de l'utilisation des compétences **Ruée**, **Évasion extrême** ou **Verdict**, le temps de rechargement des compétences **Médiation de puissance** et **Poing de fer** est réduit de 2 seconde(s), et l'attaque de noyau de l'utilisateur est activée.

        Lors de l'utilisation de **Verdict**, la compétence passive de base de l'utilisateur s'active et l'effet est amélioré.

        L'effet d'augmentation des dégâts de l'utilisateur passe à 35%.

        Augmente sa durée à 7 seconde(s).`, [], "Vent"),
        4: fmtPassif(`4 étoiles :`, `Les dégâts de vent infligés par l'utilisateur augmentent de 16%.`, [], "Vent"),
        5: fmtPassif(`5 étoiles :`, `Lorsque l'Attaque de base est utilisée 4 fois, l'utilisateur active sa compétence passive de palier 31.

        Lors de l'utilisation de la compétence **Médiation de puissance**, la Défense de l'utilisateur augmente de 5% 

        (cumulable jusqu'à 12 fois).`, [], "Vent")
    },
    summaryData: {
        0: `
        <h3>Passif : Le Médiateur</h3>
        <p>Ruée = Buff dégâts (+30% pour Suppression/Médiation/Poing) + [Super armure].<br>
        Réduit CD Ruée de 1s.</p>
    `,
        1: `
        <h3>1 étoile</h3>
        <p>[Médiation de puissance] améliorée : Effet/Dégâts Bris <span class="stat-boost">+100%</span>.<br>
        3 charges disponibles.</p>
    `,
        2: `
        <h3>2 étoiles</h3>
        <p>Pénétration de défense <span class="stat-boost">+10%</span>.<br></p>
    `,
        3: `
        <h3>3 étoiles</h3>
        <p>Skills mouvement/Verdict = Réduction CD Médiation/Poing (-2s) + Attaque noyau.<br>
        Verdict améliore passif : Dégâts <span class="stat-boost">+35%</span> (7s).</p>
    `,
        4: `
        <h3>4 étoiles</h3>
        <p>Dégâts <span class="element-vent">Vent</span> <span class="stat-boost">+16%</span>.<br></p>
    `,
        5: `
        <h3>5 étoiles</h3>
        <p>4 Attaques base = Active passif.<br>
        Médiation de puissance = Défense <span class="stat-boost">+5%</span> (Max 12 cumuls).</p>
    `
    },
    weaponData: {
        0: fmtWeapon(`Avancement 0 :`, `L'utilisateur attaque en ignorant 2 % de la Défense.

        Lors de l'utilisation de la compétence **Médiation de puissance**, les dégâts infligés par l'utilisateur à la cible augmentent de 5% pendant 5 seconde(s) (cumulable jusqu'à 3 fois).

        Lorsque l'ennemi entre en état de [Bris], les dégâts élémentaires de vent de toute l'équipe augmentent de 4%, à l'exception de l'utilisateur de cette compétence.

        Durée: infinie`, "Vent"),
        1: fmtWeapon(`Avancement 5 étoiles :`, `L'utilisateur attaque en ignorant 6 % de la Défense.

        Lors de l'utilisation de la compétence **Médiation de puissance**, les dégâts infligés par l'utilisateur à la cible augmentent de 20% pendant 5 seconde(s) (cumulable jusqu'à 3 fois).

        Lorsque l'ennemi entre en état de [Bris], les dégâts élémentaires de vent de toute l'équipe augmentent de 12%, à l'exception de l'utilisateur de cette compétence.

        Durée: infinie`, "Vent"),
        2: fmtWeapon(`Avancement 10 étoiles :`, `Augmente l'Attaque, la Défense et les PV de l'utilisateur de 15%.`, "Vent")
    }
};

// --- HWANG DONGSOO ---
huntersData["hwang-dongsoo"] = {
    name: "Hwang Dongsoo",
    rarity: "SSR",
    element: "Vent",
    gradient: "linear-gradient(90deg, #1e8449, #000)",
    image: "Chasseurs_SSR/vent/Hwang_dongsoo/HwangDongSu_Portrait_Body.png",
    weaponImage: "Chasseurs_SSR/vent/Hwang_dongsoo/une_touche_de_douceur/Relic_HwangDongSu_PortraitBig.png",
    weaponName: "Une touche de douceur",
    fullData: {
        0: fmtPassif(`Passif :`, `Lors de l'utilisation des compétences **Soif de tuer**, **Frappe de fer** ou **Influence de rang S** ou après que l'utilisateur a subi une attaque, l'effet [Impulsion] s'applique.

        Lorsque l'effet [Impulsion] atteint son nombre de cumuls maximum, l'effet [Vengeance impulsive] s'applique.`, [
        { title: `[Impulsion]`, content: `Augmente la Défense de l'utilisateur de 3% (cumulable jusqu'à 5 fois).
            Durée: illimitée` },
        { title: `[Vengeance impulsive]`, content: `Lorsque cet effet est actif, il dissipe l'effet [Impulsion].
            Augmente la Défense de l'utilisateur de 24%.
            Crée un [Bouclier] équivalent à 12% de la Défense de l'utilisateur.
            Lorsque l'effet est appliqué pour la première fois, améliore **Scavenger d'avarice**, double les dégâts et réinitialise le temps de rechargement.
            Durée: 10 seconde(s)` }
    ], "Vent"),
        1: fmtPassif(`1 étoile :`, `La compétence **Scavenger d'avarice** peut être chargée jusqu'au palier 2, augmentant ainsi ses dégâts de 150% maximum selon le temps de charge.

        L'utilisation de **Scavenger d'avarice** applique l'effet [Super armure].`, [], "Vent"),
        2: fmtPassif(`2 étoiles :`, `Augmente la Défense de l'utilisateur de 8%.`, [], "Vent"),
        3: fmtPassif(`3 étoiles :`, `À chaque utilisation des compétences **Soif de tuer** ou **Scavenger d'avarice**, l'utilisateur obtient l'effet [Folie].`, [
        { title: `[Folie]`, content: `Augmente la Défense et la Pénétration de défense de l'utilisateur de 4% (cumulable Jusqu'a 3 fois)
            Durée: 6 seconde(s)` }
    ], "Vent"),
        4: fmtPassif(`4 étoiles :`, `Augmente les dégâts de **Sans pitié** de l'utilisateur de 40 %.`, [], "Vent"),
        5: fmtPassif(`5 étoiles :`, `Les dégâts de **Sans pitié** infligés par l'utilisateur augmentent de 80% lorsque **Vengeance Impulsive** est active.`, [], "Vent")
    },
    summaryData: {
        0: `
        <h3>Passif : Le Chasseur Implacable</h3>
        <p>Compétences / Subir attaque = <span class="buff">[Impulsion]</span> (Def <span class="stat-boost">+3%</span>, Max 5).<br>
        Max Impulsion = <span class="buff">[Vengeance impulsive]</span> (Def <span class="stat-boost">+24%</span>, Bouclier).<br>
        1ère Vengeance : Reset + Boost Scavenger d'avarice.</p>
    `,
        1: `
        <h3>1 étoile</h3>
        <p>Scavenger d'avarice : Chargeable (Palier 2, Dégâts <span class="stat-boost">+150%</span>).<br>
        Applique <span class="buff">[Super armure]</span>.<br></p>
    `,
        2: `
        <h3>2 étoiles</h3>
        <p>Défense <span class="stat-boost">+8%</span>.<br></p>
    `,
        3: `
        <h3>3 étoiles</h3>
        <p>Compétences = <span class="buff">[Folie]</span>.<br>
        [Folie] : Def/Pen Def <span class="stat-boost">+4%</span> (Max 3).<br></p>
    `,
        4: `
        <h3>4 étoiles</h3>
        <p>Dégâts Sans pitié <span class="stat-boost">+40%</span>.<br></p>
    `,
        5: `
        <h3>5 étoiles</h3>
        <p>Si Vengeance active : Dégâts Sans pitié <span class="stat-boost">+80%</span>.<br></p>
    `
    },
    weaponData: {
        0: fmtWeapon(`Avancement 0 :`, `Les dégâts de vent infligés par l'utilisateur augmentent de 4%.

        Les dégâts de compétence de base de l'utilisateur augmentent de 3% lorsque les effets [Vengeance impulsive ou Folie] s'activent (cumulable jusqu'à 4 fois).`, "Vent"),
        1: fmtWeapon(`Avancement 5 étoiles :`, `Les dégâts de vent infligés par l'utilisateur augmentent de 12%.

        Les dégâts de compétence de base de l'utilisateur augmentent de 3% lorsque les effets [Vengeance impulsive ou Folie] s'activent (cumulable jusqu'à 15 fois).`, "Vent"),
        2: fmtWeapon(`Avancement 10 étoiles :`, `Augmente l'Attaque, la Défense et les PV de l'utilisateur de 15%.`, "Vent")
    }
};

// --- HAN SE-MI ---
huntersData["han-se-mi"] = {
    name: "Han Se-Mi",
    rarity: "SSR",
    element: "Vent",
    gradient: "linear-gradient(90deg, #1e8449, #000)",
    image: "Chasseurs_SSR/vent/Han_se_mi/han_art.png",
    weaponImage: "Chasseurs_SSR/vent/Han_se_mi/l_age_adulte/Relic_HanSeMi_PortraitBig.png",
    weaponName: "L'âge adulte",
    fullData: {
        0: fmtPassif(`Passif :`, `Lors de l'utilisation des compétences **Pousses affûtées**, **Prairie dorée** ou **Lianes de vitalité**, le buff [Souffle] est appliqué à tous les membres de l'équipe (Temps de rechargement: 15 seconde(s)).`, [
        { title: `[Souffle]`, content: `Augmente les dégâts de compétence de base de l'utilisatrice de 10%.
            Augmente également les dégâts de compétence de base des coéquipiers l'élément Vent de 5%.
            Durée: 25 seconde(s)
            (Cumuls max :2).` }
    ], "Vent"),
        1: fmtPassif(`1 étoile :`, `Les membres de l'équipe bénéficient de l'effet [Souffle robuste] lorsqu'ils utilisent leur compétence ultime.`, [
        { title: `[Souffle tranchant]`, content: `Applique l'effet ci-dessous à chaque seconde.
            Taux de coup critique: 1% (cumulable jusqu'à 10%) 
            Dégâts de coup critique: 1% (cumulable jusqu'à 10%)
            Charge la jauge de puissance de 1%
            Durée: 20 seconde(s)` }
    ], "Vent"),
        2: fmtPassif(`2 étoiles :`, `Les PV de l'utilisatrice augmentent de 10%.`, [], "Vent"),
        3: fmtPassif(`3 étoiles :`, `Lorsque les PV de l'utilisatrice sont à 1 ou en dessous de la zone de la compétence **Prairie dorée**, elle devient [immortelle] pendant 2 seconde(s)

        Lorsque l'effet [Immortel] se dissipe, elle récupère des PV à hauteur de 30% des PV max de Han Se-Mi.

        Cet effet ne s'active qu'une fois par combat.`, [], "Vent"),
        4: fmtPassif(`4 étoiles :`, `Les dégâts de vent infligés par tous les membres de l'équipe augmentent de 10%.`, [], "Vent"),
        5: fmtPassif(`5 étoiles :`, `Lorsque l'utilisatrice quitte le combat ou utilise **Lianes de vitalité**, l'effet [Unité de la nature] est octroyé à tous les membres de son équipe.`, [
        { title: `[Unité de la nature]`, content: `Augmente l'Attaque de l'utilisatrice de 10%.
            Augmente les dégâts de vent de 20%.
            Durée: 25 seconde(s)` }
    ], "Vent")
    },
    summaryData: {
        0: `
        <h3>Passif : Gardienne de la Forêt</h3>
        <p>Compétences = <span class="buff">[Souffle]</span> (Équipe).<br>
        [Souffle] : Dégâts Compétence base <span class="stat-boost">+10%</span> (<span class="element-vent">Vent</span> +5%).<br>
        Max 2 cumuls.</p>
    `,
        1: `
        <h3>1 étoile</h3>
        <p>Ultime alliés = <span class="buff">[Souffle tranchant]</span>.<br>
        Stack progressif : Crit Rate/Dmg <span class="stat-boost">+1%</span>/sec (Max 10%).<br>
        Regen Jauge <span class="stat-boost">+1%</span>/sec.</p>
    `,
        2: `
        <h3>2 étoiles</h3>
        <p>PV Max <span class="stat-boost">+10%</span>.<br></p>
    `,
        3: `
        <h3>3 étoiles</h3>
        <p>Mort évitée dans Prairie dorée = <span class="buff">[Immortel]</span> (2s).<br>
        Soin <span class="stat-boost">30%</span> après effet.<br>
        1 fois par combat.</p>
    `,
        4: `
        <h3>4 étoiles</h3>
        <p>Dégâts <span class="element-vent">Vent</span> Équipe <span class="stat-boost">+10%</span>.<br></p>
    `,
        5: `
        <h3>5 étoiles</h3>
        <p>Switch out / Lianes = <span class="buff">[Unité de la nature]</span> (Équipe).<br>
        Attaque <span class="stat-boost">+10%</span>, Dégâts <span class="element-vent">Vent</span> <span class="stat-boost">+20%</span>.</p>
    `
    },
    weaponData: {
        0: fmtWeapon(`Avancement 0 :`, `Augmente les PV de l'utilisatrice de 4 %.

        Augmente les dégâts subis de 5% pendant 4 seconde(s) face aux cibles touchées par une compétence de Han Se-Mi.`, "Vent"),
        1: fmtWeapon(`Avancement 5 étoiles :`, `Augmente les PV de l'utilisatrice de 10%.

        Augmente les dégâts subis de 5% pendant 10 seconde(s) face aux cibles touchées par une compétence de Han Se-Mi.`, "Vent"),
        2: fmtWeapon(`Avancement 10 étoiles :`, `Augmente l'Attaque, la Défense et les PV de l'utilisateur de 15%.`, "Vent")
    }
};

// --- GOTO RYUJI ---
huntersData["goto-ryuji"] = {
    name: "Goto Ryuji",
    rarity: "SSR",
    element: "Vent",
    gradient: "linear-gradient(90deg, #1e8449, #000)",
    image: "Chasseurs_SSR/vent/Goto_ryuji/goto_art.png",
    weaponImage: "Chasseurs_SSR/vent/Goto_ryuji/reves_distordus/Relic_GotoRyuji_PortraitBig.png",
    weaponName: "Rêves distordus",
    fullData: {
        0: fmtPassif(`Passif :`, `Lorsque la compétence de base de l'utilisateur touche sa cible, ce dernier récupère 50 PM.

        Le Taux de coup critique de l'utilisateur augmente à hauteur de 20% de ses Dégâts de coup critique.

        Lorsque l'effet [Exorcisme] atteint 5 cumuls, il déclenche l'effet [Arrogance] sur tous les membres de l'équipe de l'élément [Vent].`, [
        { title: `[Arrogance]`, content: `Augmente les Dégâts de coup critique de 20%.
            Les dégâts de la compétence de base de l'utilisateur augmentent de 20 %.
            La Consommation de mana des compétences de l'utilisateur augmente de 33%.
            Durée: 20 seconde(s)` }
    ], "Vent"),
        1: fmtPassif(`1 étoile :`, `Si Goto Ryuji ou un allié parvient à mettre un ennemi en état de [Bris], la durée de l'état de [Bris] augmente de 3 seconde(s).

        L'effet [Voie du tyran] est appliqué aux alliés à l'arrivée dans un niveau.

        Lorsque l'effet [Exorcisme] atteint 5 cumuls, il déclenche l'effet [Âme démonique].

        Lorsque Goto utilise **Bourrasque mortelle**, les dégâts de vent des compétences **Tempête inversée** et **Lame tempête** augmentent de 10% pendant 10 seconde(s).`, [
        { title: `[Voie du tyran]`, content: `Augmente les dégâts infligés aux cibles en état de [Bris] de 12%.
            Durée: illimitée` },
        { title: `[Âme démonique]`, content: `**Tempête inversée** devient **Lame tempête**, ce qui augmente ses dégâts de 50%.
            Durée: 10 seconde(s)` }
    ], "Vent"),
        2: fmtPassif(`2 étoiles :`, `L'efficacité de [Bris] de l'utilisateur augmente de 20%.`, [], "Vent"),
        3: fmtPassif(`3 étoiles :`, `L'utilisation des compétences **Vent divin** et **Dévastation de proie** augmente les Dégâts de coup critique de l'utilisateur de 20% pendant 12 seconde(s).`, [], "Vent"),
        4: fmtPassif(`4 étoiles :`, `Les dégâts du troisième chasseur de l'équipe augmentent de 24%, mais les dégâts qu'il subit augmentent aussi de 12%.`, [], "Vent"),
        5: fmtPassif(`5 étoiles :`, `Les compétences **Ouragan céleste fantomatique**, **Tempête inversée** et **Lame tempête** peuvent toucher la cible 2 fois de plus, et chaque attaque inflige des dégâts supplémentaires de 10%.

        Les compétences **Ouragan céleste fantomatique**, **Tempête inversée** et **Lame tempête** peuvent être utilisées 2 fois supplémentaires.

        Lorsque le ratio de PV de Goto Ryuji est supérieur à celui de l'ennemi, les dégâts de la compétence **Dévastation de proie** et les Dégâts de coup critique augmentent de 60%.`, [], "Vent")
    },
    summaryData: {
        0: `
        <h3>Passif : Roi du <span class="element-vent">Vent</span></h3>
        <p>Récupère des PM sur touche.<br>
        Taux Critique augmente selon Dégâts Critique (20%).<br>
        5 stacks [Exorcisme] = Buff <span class="buff">[Arrogance]</span> équipe <span class="element-vent">Vent</span> (Dégâts Crit/Compétence <span class="stat-boost">+20%</span>, mais Coût Mana <span class="stat-boost">+33%</span>).</p>
    `,
        1: `
        <h3>1 étoile</h3>
        <p>Durée Bris +3s.<br>
        Entrée : Buff <span class="buff">[Voie du tyran]</span> (Dégâts sur Bris <span class="stat-boost">+12%</span>).<br>
        5 stacks [Exorcisme] = Buff <span class="buff">[Âme démonique]</span> (Améliore Tempête inversée).</p>
    `,
        2: `
        <h3>2 étoiles</h3>
        <p>Efficacité de <span class="buff">[Bris]</span> augmentée de <span class="stat-boost">20%</span>.<br></p>
    `,
        3: `
        <h3>3 étoiles</h3>
        <p>Utilisation compétences majeures = Dégâts Crit <span class="stat-boost">+20%</span> (12s).<br></p>
    `,
        4: `
        <h3>4 étoiles</h3>
        <p>Le 3ème Chasseur : Dégâts infligés <span class="stat-boost">+24%</span>, Dégâts subis <span class="stat-boost">+12%</span>.<br></p>
    `,
        5: `
        <h3>5 étoiles</h3>
        <p><span class="keyword-orange">compétences ultime</span>s frappent +2 fois (Bonus Dégâts).<br>
        Utilisations max +2 pour Ouragan/Tempête.<br>
        Si PV Goto > PV Ennemi : Dévastation/Crit Dmg <span class="stat-boost">+60%</span>.</p>
    `
    },
    weaponData: {
        0: fmtWeapon(`Avancement 0 :`, `Les PV de l'utilisateur augmentent de 5%.

        L'utilisation des compétences **Tempête inversée** ou **Lame tempête** augmente les Dégâts de coup critique de l'utilisateur de 5% pendant 15 seconde(s).`, "Vent"),
        1: fmtWeapon(`Avancement 5 étoiles :`, `Les PV de l'utilisateur augmentent de 12%.

        L'utilisation des compétences **Tempête inversée** ou **Lame tempête** augmente les Dégâts de coup critique de l'utilisateur de 30% pendant 15 seconde(s).`, "Vent"),
        2: fmtWeapon(`Avancement 10 étoiles :`, `L'Attaque, la Défense et les PV augmentent de 15%.`, "Vent")
    }
};

// --- AMAMIYA MIREI ---
huntersData["amamiya-mirei"] = {
    name: "Amamiya Mirei",
    rarity: "SSR",
    element: "Vent",
    gradient: "linear-gradient(90deg, #1e8449, #000)",
    image: "Chasseurs_SSR/vent/Amamiya_mirei/amamiya_art.png",
    weaponImage: "Chasseurs_SSR/vent/Amamiya_mirei/lapin_bunbun/Relic_AmamiyaMirei_PortraitBig.png",
    weaponName: "Lapin Bunbun",
    fullData: {
        0: fmtPassif(`Passif :`, `Lorsque l'utilisatrice a 66% de PM ou au-dessus, l'effet [Noirceur de Kuroha] s'applique.

        L'Attaque de l'utilisatrice augmente de 4% par tranche de 150 PM supplémentaires 
(jusqu'à 40%)..`, [
        { title: `[Noirceur de Kuroha]`, content: `Les dégâts des compétences 
**Technique à l'épée de Kuroha type 3: Ailes de la nuit** 
 et **Technique à l'épée de Kuroha type 4: Cri de la corneille** 
 augmentent de 30%` }
    ], "Vent"),
        1: fmtPassif(`1 étoile :`, `<img src='icon mirei.png' > Lorsque l'effet [Possession] est actif, le Taux de coup critique et les Dégâts de coup critique de l'utilisatrice augmentent de 20%.

        Lors de l'utilisation de la compétence **Technique à l'épée de Kuroha type 3: Ailes de la nuit** tandis que l'effet [Possession] est actif, l'effet [Ténèbres profondes] s'applique.`, [
        { title: `[Ténèbres profondes]`, content: `L'Attaque et le Taux de coup critique de l'utilisatrice augmentent de 12% 
            (cumulable jusqu'à 2 fois).
            Durée: 10 seconde(s)` }
    ], "Vent"),
        2: fmtPassif(`2 étoiles :`, `Remplit la jauge de puissance de l'utilisatrice de 40% en accédant au niveau.`, [], "Vent"),
        3: fmtPassif(`3 étoiles :`, `Lors de l'utilisation des Attaques de base ou de noyau, les PM et la jauge de puissance se remplissent de 1%, et le temps de rechargement de la compétence **Technique à l'épée de Kuroha Coup létal : Ouverture spéciale de la nuit sans lune** diminue de 2 seconde(s).`, [], "Vent"),
        4: fmtPassif(`4 étoiles :`, `Augmente les dégâts de vent d'Amamiya Mirei de 10% pour chaque membre de l'équipe de l'élément vent 

        (cumulable jusqu'à 3 fois).`, [], "Vent"),
        5: fmtPassif(`5 étoiles :`, `Lorsque l'effet [Possession] est actif, l'effet [Confession de la corneille] s'applique à l'utilisatrice..`, [
        { title: `[Confession de la corneille]`, content: `Les dégâts des compétences **Technique à l'épée de Kuroha type 3: Ailes de la nuit** et **Technique à l'épée de Kuroha type 4 : Cri de la corneille** augmentent de 80%` }
    ], "Vent")
    },
    summaryData: {
        0: `
        <h3>Passif : Noirceur de Kuroha</h3>
        <p>>66% PM = <span class="buff">[Noirceur]</span>.<br>
        Attaque <span class="stat-boost">+4%</span> par 150 PM (Max 40%).<br>
        [Noirceur] : Dégâts Compétences Kuroha <span class="stat-boost">+30%</span>.</p>
    `,
        1: `
        <h3>1 étoile</h3>
        <p>Sous [Possession] : Crit Rate/Dmg <span class="stat-boost">+20%</span>.<br>
        Skill Kuroha 3 = <span class="buff">[<span class="element-tenebre">Ténèbres</span> profondes]</span> (Atk/Crit <span class="stat-boost">+12%</span>, x2).</p>
    `,
        2: `
        <h3>2 étoiles</h3>
        <p>Entrée niveau : Jauge Puissance <span class="stat-boost">+40%</span>.<br></p>
    `,
        3: `
        <h3>3 étoiles</h3>
        <p>Attaque Base/Noyau : Regen PM/Jauge <span class="stat-boost">+1%</span> + Réduction CD Ultime (2s).<br></p>
    `,
        4: `
        <h3>4 étoiles</h3>
        <p>Dégâts <span class="element-vent">Vent</span> <span class="stat-boost">+10%</span> par allié <span class="element-vent">Vent</span> (Max 3).<br></p>
    `,
        5: `
        <h3>5 étoiles</h3>
        <p>Sous [Possession] : <span class="buff">[Confession]</span>.<br>
        Dégâts Compétences Kuroha <span class="stat-boost">+80%</span>.</p>
    `
    },
    weaponData: {
        0: fmtWeapon(`Avancement 0 :`, `Lorsque l'utilisatrice entre dans un niveau, sa jauge de puissance se remplit de 10%.

        Le Taux de coup critique et les Dégâts de coup critique des compétences **Technique à l'épée de Kuroha type 3: Ailes de la nuit** et **Technique à l'épée de Kuroha type 4: Cri de la corneille** augmentent de 5%.`, "Vent"),
        1: fmtWeapon(`Avancement 5 étoiles :`, `Lorsque l'utilisatrice entre dans un niveau, sa jauge de puissance se remplit de 60%.

        Le Taux de coup critique et les Dégâts de coup critique des compétences **Technique à l'épée de Kuroha type 3: Ailes de la nuit** et **Technique à l'épée de Kuroha type 4: Cri de la corneille** augmentent de 30%.`, "Vent"),
        2: fmtWeapon(`Avancement 10 étoiles :`, `Augmente l'Attaque, la Défense et les PV de l'utilisateur de 15%.`, "Vent")
    }
};

// --- SOYEON ---
huntersData["soyeon"] = {
    name: "Soyeon",
    rarity: "SSR",
    element: "Vent",
    gradient: "linear-gradient(90deg, #32c732, #000)",
    image: "Chasseurs_SSR/collab/vent/Soyeon/soyeon_art.png",
    weaponImage: "Chasseurs_SSR/collab/vent/Soyeon/flash_flamboyant/Relic_Soyeon_PortraitBig.png",
    weaponName: "Flash flamboyant",
    fullData: {
        0: fmtPassif(`Passif :`, `Lorsque les compétences QTE, ultime ou l'attaque de noyau touchent leur cible, la jauge d'[Énergie du flash] se remplit.

        Lorsque la jauge d'[Énergie du flash] est remplie au maximum, l'effet [Énergie du flash] est activé.`, [
        { title: `[Énergie du flash]`, content: `Augmente la Vitesse d'attaque, le Taux de coup critique et les Dégâts de coup critique de 10 %.
            Durée : 20 seconde(s)` }
    ], "Vent"),
        1: fmtPassif(`1 étoile :`, `Lorsque l'attaque de noyau est utilisée alors que la jauge d'[Énergie du flash] est remplie au maximum, l'effet [Décharge] est activé et la jauge d'[Énergie du flash] se vide entièrement.

        L'effet [Énergie du flash] est activé lorsque l'utilisatrice arrive dans le niveau.

        Les compétences **Éclair de brèche** et **Entaille tournoyante** deviennent respectivement **Flash d'acier** et **Entaille tournoyante double**, et leurs dégâts augmentent de 100 %.`, [
        { title: `[Décharge]`, content: `Augmente les dégâts infligés de 30 %.
            Durée : 15 seconde(s)` }
    ], "Vent"),
        2: fmtPassif(`2 étoiles :`, `Augmente les dégâts de vent de l'utilisatrice de 30 %.`, [], "Vent"),
        3: fmtPassif(`3 étoiles :`, `L'effet [Décharge] n'active pas l'effet [Énergie du flash], mais active l'effet [Vitesse maximale] à la place.`, [
        { title: `[Vitesse maximale]`, content: `Augmente les dégâts infligés de 50 %.
            Augmente la Vitesse d'attaque de 30 %.
            Confère l'effet [Super armure].
            Durée : 15 seconde(s)` }
    ], "Vent"),
        4: fmtPassif(`4 étoiles :`, `Le taux de remplissage de la jauge de puissance des membres de l'équipe de l'élément Vent augmente de 20 %.`, [], "Vent"),
        5: fmtPassif(`5 étoiles :`, `Les compétences **Angle mort** et **Entaille tournoyante** deviennent respectivement **Angle mort instantané** et **Entaille tournoyante double**, et leurs dégâts augmentent de 50 %.

        Lorsque l'effet [Décharge] est activé, les temps de rechargement des compétences **Angle mort instantané** et **Entaille tournoyante double** sont réinitialisés.`, [], "Vent")
    },
    summaryData: {
        0: `
        <h3>Passif : Vitesse <span class="element-lumiere">Lumière</span></h3>
        <p>Remplissage Jauge <span class="buff">[Énergie du flash]</span> via QTE, Ultime ou Attaque Noyau.<br>
        Jauge Max active <span class="buff">[Énergie du flash]</span> : Vitesse Atk, Taux Crit et Dégâts Crit <span class="stat-boost">+10%</span> (20s).</p>
    `,
        1: `
        <h3>1 étoile</h3>
        <p>Entrée : Active <span class="buff">[Énergie du flash]</span>.<br>
        Attaque Noyau avec Jauge Max = <span class="buff">[Décharge]</span> (Dégâts <span class="stat-boost">+30%</span>, vide la jauge).<br>
        Compétences améliorées : Flash d'acier et Entaille double (Dégâts <span class="stat-boost">+100%</span>).</p>
    `,
        2: `
        <h3>2 étoiles</h3>
        <p>Dégâts <span class="element-vent">Vent</span> <span class="stat-boost">+30%</span>.<br></p>
    `,
        3: `
        <h3>3 étoiles</h3>
        <p>[Décharge] active <span class="buff">[Vitesse maximale]</span> au lieu de [Énergie du flash].<br>
        <span class="buff">[Vitesse maximale]</span> : Dégâts <span class="stat-boost">+50%</span>, Vitesse Atk <span class="stat-boost">+30%</span>, Super armure.</p>
    `,
        4: `
        <h3>4 étoiles</h3>
        <p>Taux remplissage Jauge Puissance équipe <span class="element-vent">Vent</span> <span class="stat-boost">+20%</span>.<br></p>
    `,
        5: `
        <h3>5 étoiles</h3>
        <p>Compétences améliorées : Angle mort instantané et Entaille double (Dégâts <span class="stat-boost">+50%</span>).<br>
        Activation de <span class="buff">[Décharge]</span> réinitialise le TdR de ces compétences.</p>
    `
    },
    weaponData: {
        0: fmtWeapon(`Avancement 0 :`, `Augmente le Taux de coup critique de l'utilisatrice de 4 %.

        Lorsque l'effet [Décharge] est activé, les dégâts des compétences de base augmentent de 15 % pendant 15 seconde(s).`, "Vent"),
        1: fmtWeapon(`Avancement 5 étoiles :`, `Augmente le Taux de coup critique de l'utilisatrice de 12 %.

        Lorsque l'effet [Décharge] est activé, les dégâts des compétences de base augmentent de 50 % pendant 15 seconde(s).`, "Vent"),
        2: fmtWeapon(`Avancement 10 étoiles :`, `L'Attaque, la Défense et les PV de l'utilisatrice augmentent de 15 %.`, "Vent")
    }
};