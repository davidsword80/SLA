if (typeof huntersData === 'undefined') { 
    var huntersData = {}; 
}

// --- KIM SANGSHIK ---
huntersData["kim-sangshik"] = {
    name: "Kim Sangshik",
    rarity: "SR",
    element: "Vent",
    gradient: "linear-gradient(90deg, #2ecc71, #000)", // Dégradé vert/noir pour le vent
    image: "Chasseurs_SR/vent/kim_sangshik/KimSangshik_Portrait_Body.png",
    weaponImage: "Chasseurs_SR/vent/kim_sangshik/la_chute_de_quelqu_un/Relic_KimSangshik_PortraitBig.png",
    weaponName: "La chute de quelqu'un",
    fullData: {
        0: `
        <h3>Passif :</h3>
        <p>Le temps de rechargement de <strong>Choc véloce</strong> diminue de 1 seconde(s) et la jauge de noyau se remplit de <span class="stat-boost">50%</span> lors de l'utilisation de <strong>Tempête tranchante</strong>.<br>
        Le temps de rechargement de <strong>Tempête tranchante</strong> diminue de 1 seconde(s) et la jauge de noyau se remplit de <span class="stat-boost">50%</span> lors de l'utilisation de <strong>Choc véloce</strong>.<br>
        Le temps de rechargement de <strong>Tempête tranchante</strong> et <strong>Choc véloce</strong> diminue de 1 seconde(s) lors de l'utilisation de <strong>Bourrasque perçante</strong>.<br></p>
    `,
        1: `
        <h3>1 étoile :</h3>
        <p>Lorsque Sangshik utilise les compétences <strong>Tempête tranchante</strong>, <strong>Choc véloce</strong> ou <strong>Bourrasque perçante</strong>, son effet de Réduction du temps de rechargement fait passer le temps de rechargement à 2 seconde(s).<br>
        Lorsque Sangshik utilise les compétences <strong>Tempête tranchante</strong> ou <strong>Choc véloce</strong>, <strong>Bourrasque perçante</strong> s'active.<br></p>
    `,
        2: `
        <h3>2 étoiles :</h3>
        <p>Les PV de l'utilisateur augmentent de <span class="stat-boost">10%</span>.<br></p>
    `,
        3: `
        <h3>3 étoiles :</h3>
        <p>L'efficacité de <span class="buff">[Bris]</span> de l'utilisateur augmente de <span class="stat-boost">20%</span>.<br></p>
    `,
        4: `
        <h3>4 étoiles :</h3>
        <p>Augmente la Défense de l'utilisateur de <span class="stat-boost">6 %</span>.<br></p>
    `,
        5: `
        <h3>5 étoiles :</h3>
        <p>Lors de l'utilisation de <strong>Bourrasque perçante</strong>, l'utilisateur récupère 60 des PV de Sangshik.<br></p>
    `
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
        0: `
        <h3>Avancement 0 :</h3>
        <p>Augmente les dégâts de l'Attaque de noyau de l'utilisateur de <span class="stat-boost">4%</span>.<br>
        Lors de l'utilisation d'une Attaque de noyau, les dégâts de la prochaine compétence de base de l'utilisateur augmentent de <span class="stat-boost">4%</span>.<br></p>
    `,
        1: `
        <h3>Avancement 5 étoiles :</h3>
        <p>Augmente les dégâts de l'Attaque de noyau de l'utilisateur de <span class="stat-boost">24%</span>.<br>
        Lors de l'utilisation d'une Attaque de noyau, les dégâts de la prochaine compétence de base de l'utilisateur augmentent de <span class="stat-boost">24%</span>.<br></p>
    `,
        2: `
        <h3>Avancement 10 étoiles :</h3>
        <p>Augmente l'Attaque, la Défense et les PV de l'utilisateur de <span class="stat-boost">15%</span>.<br></p>
    `
    }
};

// --- PARK BEOM-SHIK ---
huntersData["park-beom-shik"] = {
    name: "Park Beom-shik",
    rarity: "SR",
    element: "Vent",
    gradient: "linear-gradient(90deg, #2ecc71, #000)",
    image: "Chasseurs_SR/vent/park_beom_shik/ParkBeomSik_Portrait_Body.png",
    weaponImage: "Chasseurs_SR/vent/park_beom_shik/decisions/Relic_ParkBeomsik_PortraitBig.png",
    weaponName: "Décisions",
    fullData: {
        0: `
        <h3>Passif :</h3>
        <p>Lors de l'utilisation des compétences <strong>Frappe tournoyante!</strong>, <strong>Frappe descendante!</strong> ou <strong>Attaque de charge!</strong>, l'utilisateur applique l'effet <span class="buff">[Père de deux enfants]</span>.<br>
        Si les PV de l'utilisateur sont inférieurs à 30%, l'effet <span class="buff">[Détermination du père]</span> s'applique.<br></p>
        <div class="detail-box">
            <h4><span class="buff">[Père de deux enfants]</span></h4>
            <p>Augmente la Défense de <span class="stat-boost">4%</span> (cumulable jusqu'à 10 fois).<br>
            Durée: 30 seconde(s)</p>
        </div>
        <div class="detail-box">
            <h4><span class="buff">[Détermination du père]</span></h4>
            <p>La compétence <strong>Frappe tournoyante!</strong> peut être utilisée indéfiniment.<br>
            Applique l'effet <span class="buff">[Super armure]</span>.<br>
            Augmente la Vitesse d'attaque de <span class="stat-boost">8%</span>.<br>
            Augmente la Défense de l'utilisateur de <span class="stat-boost">8%</span>.<br>
            Durée: 4 seconde(s) (ne s'active qu'une fois la première fois)</p>
        </div>
    `,
        1: `
        <h3>1 étoile :</h3>
        <p>Les dégâts infligés aux cibles ayant moins de PV que l'utilisateur augmentent de <span class="stat-boost">15%</span>.<br></p>
    `,
        2: `
        <h3>2 étoiles :</h3>
        <p>Votre Défense augmente de <span class="stat-boost">6%</span>.<br></p>
    `,
        3: `
        <h3>3 étoiles :</h3>
        <p>Améliore la compétence <strong>Frappe descendante !</strong>.<br>
        Réduit le temps de charge de l'utilisateur de <span class="stat-boost">30%</span>.<br>
        Augmente la portée de la compétence de <span class="stat-boost">30%</span>.<br>
        Augmente les dégâts de l'utilisateur de <span class="stat-boost">60%</span>.<br></p>
    `,
        4: `
        <h3>4 étoiles :</h3>
        <p>Les PV de l'utilisateur augmentent de <span class="stat-boost">10%</span>.<br></p>
    `,
        5: `
        <h3>5 étoiles :</h3>
        <p>Lors de l'utilisation de la compétence <strong>Une autre ligne temporelle</strong>, l'utilisateur applique l'effet <span class="buff">[Détermination du père]</span>.<br></p>
    `
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
        0: `
        <h3>Avancement 0 :</h3>
        <p>Augmente la Défense de l'utilisateur de <span class="stat-boost">2%</span>.<br>
        Lorsque l'effet <span class="buff">[Détermination du père]</span> s'active, un <span class="buff">[Bouclier]</span> supplémentaire équivalent à <span class="stat-boost">2%</span> de la Défense de l'utilisateur est créé, et les dégâts de ses Compétences de base augmentent de <span class="stat-boost">10%</span>.<br></p>
    `,
        1: `
        <h3>Avancement 5 étoiles :</h3>
        <p>Augmente la Défense de l'utilisateur de <span class="stat-boost">8%</span>.<br>
        Lorsque l'effet <span class="buff">[Détermination du père]</span> s'active, un <span class="buff">[Bouclier]</span> supplémentaire équivalent à <span class="stat-boost">8%</span> de la Défense de l'utilisateur est créé, et les dégâts de ses Compétences de base augmentent de <span class="stat-boost">35%</span>.<br></p>
    `,
        2: `
        <h3>Avancement 10 étoiles :</h3>
        <p>Augmente l'Attaque, la Défense et les PV de l'utilisateur de <span class="stat-boost">15%</span>.<br></p>
    `
    }
};

// --- PARK HEEJIN ---
huntersData["park-heejin"] = {
    name: "Park Heejin",
    rarity: "SR",
    element: "Vent",
    gradient: "linear-gradient(90deg, #2ecc71, #000)",
    image: "Chasseurs_SR/vent/park_heejin/ParkHeejin_Portrait_Body.png",
    weaponImage: "Chasseurs_SR/vent/park_heejin/intuition/Relic_ParkHeejin_PortraitBig.png",
    weaponName: "Intuition",
    fullData: {
        0: `
        <h3>Passif :</h3>
        <p>Lors de l'utilisation des compétences <strong>Balle d'air</strong>, <strong>Cisaille venteuse</strong>, <strong>Bourrasque tranchante</strong> ou <strong>Vortex venteux</strong>, la jauge de puissance de l'utilisateur se remplit de <span class="stat-boost">8%</span>.<br>
        Réduit le temps de rechargement de <strong>Tempête venteuse</strong> de <span class="stat-boost">30%</span>.<br></p>
    `,
        1: `
        <h3>1 étoile :</h3>
        <p>Lorsque Heejin utilise la compétence <strong>Bourrasque tranchante</strong>, elle supprime les <span class="buff">[débuffs]</span> appliqués à elle et son équipe.<br></p>
    `,
        2: `
        <h3>2 étoiles :</h3>
        <p>Le temps de rechargement de <strong>Tempête venteuse</strong> diminue de <span class="stat-boost">10%</span>.<br></p>
    `,
        3: `
        <h3>3 étoiles :</h3>
        <p>Lors de l'utilisation des compétences <strong>Balle d'air</strong>, <strong>Cisaille venteuse</strong>, <strong>Bourrasque tranchante</strong> ou<br>
        <strong>Vortex venteux</strong>, la jauge de puissance de l'utilisateur se remplit de <span class="stat-boost">10%</span>.<br></p>
    `,
        4: `
        <h3>4 étoiles :</h3>
        <p>Les dégâts de la compétence <strong>Tempête venteuse</strong> augmentent de <span class="stat-boost">30%</span>.<br></p>
    `,
        5: `
        <h3>5 étoiles :</h3>
        <p>Au début du combat, la jauge de puissance de Heejin se remplit de <span class="stat-boost">100%</span>.<br></p>
    `
    },
    summaryData: {
        0: `
        <h3>Passif : Vent de l'Esprit</h3>
        <p>Skills Vent = Jauge Puissance <span class="stat-boost">+8%</span>.<br>
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
        <p>Skills Vent = Jauge Puissance <span class="stat-boost">+10%</span>.<br></p>
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
        0: `
        <h3>Avancement 0 :</h3>
        <p>Augmente les dégâts de Compétence ultime de l'utilisatrice de <span class="stat-boost">5%</span>.<br>
        Lors de l'utilisation de la compétence ultime, les dégâts de Compétence ultime du membre de son équipe ayant la Puissance totale la plus élevée augmentent de <span class="stat-boost">5%</span> pendant 20 seconde(s).<br></p>
    `,
        1: `
        <h3>Avancement 5 étoiles :</h3>
        <p>Augmente les dégâts de Compétence ultime de l'utilisatrice de <span class="stat-boost">20%</span>.<br>
        Lors de l'utilisation de la compétence ultime, les dégâts de Compétence ultime du membre de son équipe ayant la Puissance totale la plus élevée augmentent de <span class="stat-boost">20%</span> pendant 20 seconde(s).<br></p>
    `,
        2: `
        <h3>Avancement 10 étoiles :</h3>
        <p>Augmente l'Attaque, la Défense et les PV de l'utilisateur de <span class="stat-boost">15%</span>.<br></p>
    `
    }
};

// --- LENNART NIERMANN ---
huntersData["lennart-niermann"] = {
    name: "Lennart Niermann",
    rarity: "SSR",
    element: "Vent",
    gradient: "linear-gradient(90deg, #1e8449, #000)",
    image: "Chasseurs_SSR/vent/lennart_niermann/lennart_art.png",
    weaponImage: "Chasseurs_SSR/vent/lennart_niermann/le_poid_des_responsabilites/Relic_LennartNiermann_PortraitBig.png",
    weaponName: "Le poid des responsabilités",
    fullData: {
        0: `
        <h3>Passif :</h3>
        <p>Lorsque <strong>Todessinfonie</strong> touche sa cible, l'effet <span class="buff">[Marque du chasseur]</span> est activé.<br>
        Lors de l'utilisation des compétences <strong>Fenriszahn</strong> ou <strong>Kaisers Rache</strong>, l'utilisateur reçoit 6 cumuls de l'effet <span class="buff">[Analyse]</span>.<br>
        Lors de l'utilisation de <strong>Todessinfonie</strong>, l'utilisateur reçoit 12 cumuls de l'effet <span class="buff">[Analyse]</span>.<br>
        La Défense de l'utilisateur augmente de <span class="stat-boost">20 %</span> tant que l'effet <span class="buff">[Analyse]</span> est actif.<br></p>
        
        <div class="detail-box">
            <h4><span class="buff">[Marque du chasseur]</span></h4>
            <p>Lorsque la cible récupère des PV ou est sous l'effet <span class="buff">[Irrémédiable]</span>, l'effet <span class="buff">[Marque du chasseur]</span> devient <span class="buff">[Cage du chasseur]</span>.<br>
            Durée : 20 seconde(s).</p>
        </div>

        <div class="detail-box">
            <h4><span class="buff">[Cage du chasseur]</span></h4>
            <p>Augmente les dégâts infligés par Lennart Niermann de <span class="stat-boost">15 %</span>.<br>
            Durée : 20 seconde(s).</p>
        </div>

        <div class="detail-box">
            <h4><span class="buff">[Analyse]</span></h4>
            <p>Octroie <span class="buff">[Super armure]</span>. Lorsque l'utilisateur est touché par une attaque ennemie, il perd 1 cumul de l'effet <span class="buff">[Analyse]</span>.<br>
            Durée : illimitée (cumulable jusqu'à 20 fois).</p>
        </div>
    `,
        1: `
        <h3>1 étoile :</h3>
        <p>Lors de l'utilisation des compétences <strong>Fenriszahn</strong>, <strong>Kaisers Rache</strong> ou <strong>Todessinfonie</strong>, la durée d'effet de l'attaque de zone créée augmente de 3 seconde(s).<br>
        Lorsque les membres de l'équipe de l'élément Vent, y compris l'utilisateur, utilisent leur compétence de base, Lennart Niermann récupère <span class="stat-boost">3 %</span> de ses PM et sa jauge de puissance se remplit de <span class="stat-boost">5 %</span>.<br></p>
    `,
        2: `
        <h3>2 étoiles :</h3>
        <p>Les dégâts élémentaires de vent de l'utilisateur augmentent de <span class="stat-boost">30 %</span>.<br></p>
    `,
        3: `
        <h3>3 étoiles :</h3>
        <p>Lorsque l'effet <span class="buff">[Analyse]</span> a 20 cumuls, il active l'effet <span class="buff">[Cercle magique défensif]</span> sur l'ensemble de l'équipe.<br></p>

        <div class="detail-box">
            <h4><span class="buff">[Cercle magique défensif]</span></h4>
            <p>Empêche de gagner ou de perdre des cumuls de l'effet <span class="buff">[Analyse]</span>. Octroie <span class="buff">[Super armure]</span>.<br>
            Augmente les Dégâts de coup critique de l'utilisateur de <span class="stat-boost">30 %</span>. Augmente la Défense de l'utilisateur de <span class="stat-boost">30 %</span>.<br>
            Durée : 20 seconde(s).</p>
        </div>
    `,
        4: `
        <h3>4 étoiles :</h3>
        <p>La Défense des membres de l'équipe de l'élément Vent augmente de <span class="stat-boost">14 %</span> par allié de l'élément Vent.<br>
        Augmente les PV de l'ensemble de l'équipe de <span class="stat-boost">8 %</span>.<br></p>
    `,
        5: `
        <h3>5 étoiles :</h3>
        <p>L'effet <span class="buff">[Cage du chasseur]</span> est amélioré.<br>
        Au début du niveau, l'utilisateur reçoit 100 cumuls de l'effet <span class="buff">[Analyse]</span>.<br>
        Le temps de rechargement de <strong>Todessinfonie</strong> diminue de 25 seconde(s).<br></p>

        <div class="detail-box">
            <h4><span class="buff">[Cage du chasseur]</span> (Amélioré)</h4>
            <p>Augmente les dégâts infligés par Lennart Niermann de <span class="stat-boost">30 %</span>.<br>
            Durée : 40 seconde(s).</p>
        </div>
    `
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
        Compétences de base alliés Vent : Regen PM <span class="stat-boost">3%</span> + Jauge Puissance <span class="stat-boost">5%</span>.<br></p>
    `,
        2: `
        <h3>2 étoiles</h3>
        <p>Dégâts Vent <span class="stat-boost">+30%</span>.<br></p>
    `,
        3: `
        <h3>3 étoiles</h3>
        <p>20 cumuls Analyse = <span class="buff">[Cercle magique défensif]</span> équipe.<br>
        Effet : Super armure, Dégâts Crit/Défense <span class="stat-boost">+30%</span>.</p>
    `,
        4: `
        <h3>4 étoiles</h3>
        <p>Défense équipe Vent <span class="stat-boost">+14%</span> par allié Vent.<br>
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
        0: `
        <h3>Avancement 0 :</h3>
        <p>Augmente la Défense de l'utilisateur de <span class="stat-boost">5 %</span>.<br>
        Lors de l'utilisation des compétences <strong>Fenriszahn</strong>, <strong>Kaisers Rache</strong>, <strong>Todessinfonie</strong> ou <strong>Wolfspranke</strong>, l'effet <span class="buff">[Paralysie]</span> est appliqué pendant 0.5 seconde(s) aux ennemis se trouvant à moins de 10 m (temps de rechargement : 20 seconde(s)).</p>
    `,
        1: `
        <h3>Avancement 5 étoiles :</h3>
        <p>Augmente la Défense de l'utilisateur de <span class="stat-boost">50 %</span>.<br>
        Lors de l'utilisation des compétences <strong>Fenriszahn</strong>, <strong>Kaisers Rache</strong>, <strong>Todessinfonie</strong> ou <strong>Wolfspranke</strong>, l'effet <span class="buff">[Paralysie]</span> est appliqué pendant 5 seconde(s) aux ennemis se trouvant à moins de 10 m (temps de rechargement : 20 seconde(s)).</p>
    `,
        2: `
        <h3>Avancement 10 étoiles :</h3>
        <p>Augmente l'Attaque, la Défense et les PV de l'utilisateur de <span class="stat-boost">15 %</span>.</p>
    `
    }
};

// --- SUNG JINAH ---
huntersData["sung-jinah"] = {
    name: "Sung Jinah",
    rarity: "SSR",
    element: "Vent",
    gradient: "linear-gradient(90deg, #1e8449, #000)",
    image: "Chasseurs_SSR/vent/sung_jinah/sung_art.png",
    weaponImage: "Chasseurs_SSR/vent/sung_jinah/mousson_bleue/Relic_SungJinah_PortraitBig.png",
    weaponName: "Mousson bleue",
    fullData: {
        0: `
        <h3>Passif :</h3>
        <p>Lors de l'utilisation des compétences <strong>Rapière de tempête inversée</strong>, <strong>Tourbillon convergent</strong>, <strong>Torrent</strong>, <strong>Parapluie : Rapière de tempête inversée</strong>, <strong>Parapluie : Tourbillon convergent</strong> ou <strong>Parapluie : Torrent</strong>, l'effet <span class="buff">[Vent]</span> est activé.<br></p>
        
        <div class="detail-box">
            <h4><span class="buff">[Vent]</span></h4>
            <p>Augmente les dégâts des compétences <strong>Rapière de tempête inversée</strong>, <strong>Tourbillon convergent</strong>, <strong>Parapluie : Rapière de tempête inversée</strong>, <strong>Parapluie : Tourbillon convergent</strong>, <strong>Sérénade tempétueuse</strong> et <strong>Sérénade : Perturbation aéro</strong> de <span class="stat-boost">50 %</span>.<br>
            À 3 cumuls, octroie à toute l'équipe le maximum de cumuls de l'effet <span class="buff">[Ailes de bourrasque]</span> à l'exception de Sung Jinah.<br>
            Lorsque l'utilisatrice quitte le combat, cet effet est supprimé. En mode Combat d'équipe, cet effet est supprimé toutes les 15 seconde(s).<br>
            Durée : 60 seconde(s) (cumulable jusqu'à 3 fois).</p>
        </div>

        <div class="detail-box">
            <h4><span class="buff">[Ailes de bourrasque]</span></h4>
            <p>Lors de l'utilisation de la compétence de base ou de la compétence ultime, 1 cumul de l'effet <span class="buff">[Ailes de bourrasque]</span> est supprimé et l'effet <span class="buff">[Ailes de la liberté]</span> est activé.<br>
            Durée : 60 seconde(s) (cumulable jusqu'à 3 fois).</p>
        </div>

        <div class="detail-box">
            <h4><span class="buff">[Ailes de la liberté]</span></h4>
            <p>Augmente les dégâts des compétences de base et ultime de l'utilisatrice de <span class="stat-boost">10 %</span>.<br>
            Durée : 5 seconde(s) (cumulable jusqu'à 1 fois).</p>
        </div>
    `,
        1: `
        <h3>1 étoile :</h3>
        <p>Lorsque l'effet <span class="buff">[Vent]</span> est activé, l'effet <span class="buff">[Toucher du vent]</span> est appliqué à toute l'équipe.<br></p>

        <div class="detail-box">
            <h4><span class="buff">[Toucher du vent]</span></h4>
            <p>Augmente l'Attaque de l'utilisatrice de <span class="stat-boost">1 %</span>. Augmente la Défense de <span class="stat-boost">1 %</span>.<br>
            Augmente les dégâts de la compétence de base de <span class="stat-boost">0.5 %</span>.<br>
            Augmente en plus l'Attaque des membres de l'équipe de l'élément Vent de <span class="stat-boost">1 %</span>.<br>
            Augmente en plus la Défense des membres de l'équipe de l'élément Vent de <span class="stat-boost">1 %</span>.<br>
            Augmente en plus les dégâts de la compétence de base des membres de l'équipe de l'élément Vent de <span class="stat-boost">0.5 %</span>.<br>
            Durée : illimitée (cumulable jusqu'à 10 fois).</p>
        </div>
    `,
        2: `
        <h3>2 étoiles :</h3>
        <p>Lorsque l'effet <span class="buff">[Ailes de bourrasque]</span> est activé, toute l'équipe récupère des PM à hauteur de 100 par cumul appliqué.<br>
        L'effet <span class="buff">[Ailes de la liberté]</span> est amélioré.<br></p>

        <div class="detail-box">
            <h4><span class="buff">[Ailes de la liberté]</span> (Amélioré)</h4>
            <p>Les dégâts des compétences de base et ultime de l'utilisatrice augmentent de <span class="stat-boost">20 %</span>.<br>
            Les dégâts de vent de l'utilisatrice augmentent de <span class="stat-boost">10 %</span>.<br>
            Durée : 10 seconde(s) (cumulable jusqu'à 1 fois).</p>
        </div>
    `,
        3: `
        <h3>3 étoiles :</h3>
        <p>Améliore l'effet <span class="buff">[Ailes de la liberté]</span>.<br></p>

        <div class="detail-box">
            <h4><span class="buff">[Ailes de la liberté]</span> (Amélioré - 3 Étoiles)</h4>
            <p>Augmente les dégâts des compétences de base et ultime de l'utilisatrice de <span class="stat-boost">20 %</span>.<br>
            Augmente les dégâts de vent de <span class="stat-boost">10 %</span>.<br>
            Lorsque la compétence ultime de l'utilisatrice touche sa cible, elle lui applique l'effet <span class="buff">[Irrémédiable]</span>.<br>
            Durée : 10 seconde(s) (cumulable jusqu'à 1 fois).</p>
        </div>

        <div class="detail-box">
            <h4><span class="buff">[Irrémédiable]</span></h4>
            <p>La cible n'est pas en mesure de récupérer des PV.<br>
            Durée : 30 seconde(s).</p>
        </div>
    `,
        4: `
        <h3>4 étoiles :</h3>
        <p>Les dégâts de vent des membres de l'équipe de l'élément Vent augmentent de <span class="stat-boost">5 %</span> par allié de l'élément Vent.<br></p>
    `,
        5: `
        <h3>5 étoiles :</h3>
        <p>L'utilisation des compétences <strong>Perturbation aéro</strong> ou <strong>Sérénade : Perturbation aéro</strong> confère 1 cumul(s) de l'effet <span class="buff">[Aéro]</span> à toute l'équipe.<br>
        Après l'utilisation de la compétence <strong>Sérénade tempétueuse</strong> en mode Combat d'équipe, la compétence <strong>Sérénade : Perturbation aéro</strong> peut à nouveau être utilisée.<br>
        Lorsque Sung Jinah ou un membre de l'équipe quitte le combat, 1 cumuls supplémentaires de l'effet <span class="buff">[Aéro]</span> sont conférés à toute l'équipe.<br></p>

        <div class="detail-box">
            <h4><span class="buff">[Sérénade : Perturbation aéro]</span></h4>
            <p>Dégâts : inflige des dégâts équivalents à <span class="stat-boost">300 %</span> de ceux de <strong>Sérénade tempétueuse</strong>.<br>
            Lors de l'utilisation de cette compétence, le temps de rechargement de la compétence <strong>Sérénade tempétueuse</strong> diminue de <span class="stat-boost">60 %</span> et l'effet <span class="buff">[Averses soudaines]</span> est réactivé sur Sung Jinah.</p>
        </div>

        <div class="detail-box">
            <h4><span class="buff">[Aéro]</span></h4>
            <p>Augmente les dégâts de vent de <span class="stat-boost">2 %</span>.<br>
            Durée : 60 seconde(s) (cumulable jusqu'à 5 fois).</p>
        </div>
    `
    },
    summaryData: {
        0: `
        <h3>Passif : Maîtrise du Vent</h3>
        <p>Compétences activent <span class="buff">[Vent]</span> (Dégâts compétences <span class="stat-boost">+50%</span>).<br>
        3 stacks [Vent] = Buff équipe <span class="buff">[Ailes de bourrasque]</span>.<br>
        [Ailes de bourrasque] -> Active <span class="buff">[Ailes de la liberté]</span> sur Basic/Ult (Dégâts <span class="stat-boost">+10%</span>).</p>
    `,
        1: `
        <h3>1 étoile</h3>
        <p>[Vent] active <span class="buff">[Toucher du vent]</span> (Stackable x10) :<br>
        Boost Self: Atk/Def +1%, Basic Dmg +0.5%.<br>
        Boost Équipe Vent: Atk/Def +1%, Basic Dmg +0.5%.</p>
    `,
        2: `
        <h3>2 étoiles</h3>
        <p>[Ailes de bourrasque] rend 100 PM/stack à l'équipe.<br>
        Améliore <span class="buff">[Ailes de la liberté]</span> : Dégâts Basic/Ult <span class="stat-boost">+20%</span>, Vent <span class="stat-boost">+10%</span>.</p>
    `,
        3: `
        <h3>3 étoiles</h3>
        <p>Ultime applique <span class="buff">[Irrémédiable]</span> (Anti-heal).</p>
    `,
        4: `
        <h3>4 étoiles</h3>
        <p>Dégâts Vent équipe <span class="stat-boost">+5%</span> par allié Vent.<br></p>
    `,
        5: `
        <h3>5 étoiles</h3>
        <p>Perturbation/Tag out = Buff <span class="buff">[Aéro]</span> (Dégâts Vent <span class="stat-boost">+2%</span>/stack).<br>
        Sérénade : Perturbation aéro reset CD Ult et boost dégâts.</p>
    `
    },
    weaponData: {
        0: `
        <h3>Avancement 0 :</h3>
        <p>Augmente la Défense de <span class="stat-boost">2 %</span>.<br>
        Lors de l'utilisation des compétences <strong>Rapière de tempête inversée</strong> ou <strong>Parapluie : Rapière de tempête inversée</strong>, les dégâts de compétence de base des membres de l'équipe augmentent de <span class="stat-boost">0.5 %</span>.</p>
    `,
        1: `
        <h3>Avancement 5 étoiles :</h3>
        <p>Augmente la Défense de <span class="stat-boost">12 %</span>.<br>
        Lors de l'utilisation des compétences <strong>Rapière de tempête inversée</strong> ou <strong>Parapluie : Rapière de tempête inversée</strong>, les dégâts de compétence de base des membres de l'équipe augmentent de <span class="stat-boost">2 %</span>.<br>
        Durée : illimitée (cumulable jusqu'à 5 fois)</p>
    `,
        2: `
        <h3>Avancement 10 étoiles :</h3>
        <p>Augmente l'Attaque, la Défense et les PV de l'utilisatrice de <span class="stat-boost">15 %</span>.</p>
    `
    }
};

// --- WOO JINCHEOL ---
huntersData["woo-jincheol"] = {
    name: "Woo Jincheol",
    rarity: "SSR",
    element: "Vent",
    gradient: "linear-gradient(90deg, #1e8449, #000)",
    image: "Chasseurs_SSR/vent/woo_jincheol/woo_art.png",
    weaponImage: "Chasseurs_SSR/vent/woo_jincheol/un_autre_niveau/Relic_WooJinChul_PortraitBig.png",
    weaponName: "Un autre niveau",
    fullData: {
        0: `
        <h3>Passif :</h3>
        <p>Lorsque la compétence <strong>Ruée</strong> est utilisée, les dégâts des compétences <strong>Suppression</strong>, <strong>Médiation de puissance</strong> et <strong>Poing de fer</strong> augmentent de <span class="stat-boost">30%</span> pendant 6 seconde(s) et l'effet <span class="buff">[Super armure]</span> est appliqué.<br>
        Le temps de rechargement de <strong>Ruée</strong> est réduit de 1 seconde(s).<br></p>
    `,
        1: `
        <h3>1 étoile :</h3>
        <p>Modification de l'effet de la compétence<br>
        <strong>[Médiation de puissance]</strong><br>
        Augmente l'effet et les dégâts de <span class="buff">[Bris]</span> de <span class="stat-boost">100%</span>.<br>
        Peut être utilisée jusqu'à 3 fois.<br></p>
    `,
        2: `
        <h3>2 étoiles :</h3>
        <p>La Pénétration de défense de l'utilisateur augmente de <span class="stat-boost">10%</span>.<br></p>
    `,
        3: `
        <h3>3 étoiles :</h3>
        <p>Lors de l'utilisation des compétences <strong>Ruée</strong>, <strong>Évasion extrême</strong> ou <strong>Verdict</strong>, le temps de rechargement des compétences <strong>Médiation de puissance</strong> et <strong>Poing de fer</strong> est réduit de 2 seconde(s), et l'Attaque de noyau de l'utilisateur est activée.<br>
        Lors de l'utilisation de <strong>Verdict</strong>, la compétence passive de base de l'utilisateur s'active et l'effet est amélioré.<br>
        L'effet d'augmentation des dégâts de l'utilisateur passe à <span class="stat-boost">35%</span>.<br>
        Augmente sa durée à 7 seconde(s).<br></p>
    `,
        4: `
        <h3>4 étoiles :</h3>
        <p>Les dégâts de vent infligés par l'utilisateur augmentent de <span class="stat-boost">16%</span>.<br></p>
    `,
        5: `
        <h3>5 étoiles :</h3>
        <p>Lorsque l'Attaque de base est utilisée 4 fois, l'utilisateur active sa compétence passive de palier 31.<br>
        Lors de l'utilisation de la compétence <strong>Médiation de puissance</strong>, la Défense de l'utilisateur augmente de <span class="stat-boost">5%</span> <br>
        (cumulable jusqu'à 12 fois).<br></p>
    `
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
        <p>Dégâts Vent <span class="stat-boost">+16%</span>.<br></p>
    `,
        5: `
        <h3>5 étoiles</h3>
        <p>4 Attaques base = Active passif.<br>
        Médiation de puissance = Défense <span class="stat-boost">+5%</span> (Max 12 cumuls).</p>
    `
    },
    weaponData: {
        0: `
        <h3>Avancement 0 :</h3>
        <p>L'utilisateur attaque en ignorant <span class="stat-boost">2 %</span> de la Défense.<br>
        Lors de l'utilisation de la compétence <strong>Médiation de puissance</strong>, les dégâts infligés par l'utilisateur à la cible augmentent de <span class="stat-boost">5%</span> pendant 5 seconde(s) (cumulable jusqu'à 3 fois).<br>
        Lorsque l'ennemi entre en état de <span class="buff">[Bris]</span>, les dégâts élémentaires de vent de toute l'équipe augmentent de <span class="stat-boost">4%</span>, à l'exception de l'utilisateur de cette compétence.<br>
        Durée: infinie<br></p>
    `,
        1: `
        <h3>Avancement 5 étoiles :</h3>
        <p>L'utilisateur attaque en ignorant <span class="stat-boost">6 %</span> de la Défense.<br>
        Lors de l'utilisation de la compétence <strong>Médiation de puissance</strong>, les dégâts infligés par l'utilisateur à la cible augmentent de <span class="stat-boost">20%</span> pendant 5 seconde(s) (cumulable jusqu'à 3 fois).<br>
        Lorsque l'ennemi entre en état de <span class="buff">[Bris]</span>, les dégâts élémentaires de vent de toute l'équipe augmentent de <span class="stat-boost">12%</span>, à l'exception de l'utilisateur de cette compétence.<br>
        Durée: infinie<br></p>
    `,
        2: `
        <h3>Avancement 10 étoiles :</h3>
        <p>Augmente l'Attaque, la Défense et les PV de l'utilisateur de <span class="stat-boost">15%</span>.<br></p>
    `
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
        0: `
        <h3>Passif :</h3>
        <p>Lors de l'utilisation des compétences <strong>Soif de tuer</strong>, <strong>Frappe de fer</strong> ou <strong>Influence de rang S</strong> ou après que l'utilisateur a subi une attaque, l'effet <span class="buff">[Impulsion]</span> s'applique.<br>
        Lorsque l'effet <span class="buff">[Impulsion]</span> atteint son nombre de cumuls maximum, l'effet <span class="buff">[Vengeance impulsive]</span> s'applique.<br></p>
        <div class="detail-box">
            <h4><span class="buff">[Impulsion]</span></h4>
            <p>Augmente la Défense de l'utilisateur de <span class="stat-boost">3%</span> (cumulable jusqu'à 5 fois).<br>
            Durée: illimitée</p>
        </div>
        <div class="detail-box">
            <h4><span class="buff">[Vengeance impulsive]</span></h4>
            <p>Lorsque cet effet est actif, il dissipe l'effet <span class="buff">[Impulsion]</span>.<br>
            Augmente la Défense de l'utilisateur de <span class="stat-boost">24%</span>.<br>
            Crée un <span class="buff">[Bouclier]</span> équivalent à <span class="stat-boost">12%</span> de la Défense de l'utilisateur.<br>
            Lorsque l'effet est appliqué pour la première fois, améliore <strong>Scavenger d'avarice</strong>, double les dégâts et réinitialise le temps de rechargement.<br>
            Durée: 10 seconde(s)</p>
        </div>
    `,
        1: `
        <h3>1 étoile :</h3>
        <p>La compétence <strong>Scavenger d'avarice</strong> peut être chargée jusqu'au palier 2, augmentant ainsi ses dégâts de <span class="stat-boost">150%</span> maximum selon le temps de charge.<br>
        L'utilisation de <strong>Scavenger d'avarice</strong> applique l'effet <span class="buff">[Super armure]</span>.<br></p>
    `,
        2: `
        <h3>2 étoiles :</h3>
        <p>Augmente la Défense de l'utilisateur de <span class="stat-boost">8%</span>.<br></p>
    `,
        3: `
        <h3>3 étoiles :</h3>
        <p>À chaque utilisation des compétences <strong>Soif de tuer</strong> ou <strong>Scavenger d'avarice</strong>, l'utilisateur obtient l'effet <span class="buff">[Folie]</span>.<br></p>
        <div class="detail-box">
            <h4><span class="buff">[Folie]</span></h4>
            <p>Augmente la Défense et la Pénétration de défense de l'utilisateur de <span class="stat-boost">4%</span> (cumulable Jusqu'a 3 fois)<br>
            Durée: 6 seconde(s)</p>
        </div>
    `,
        4: `
        <h3>4 étoiles :</h3>
        <p>Augmente les dégâts de <strong>Sans pitié</strong> de l'utilisateur de <span class="stat-boost">40 %</span>.<br></p>
    `,
        5: `
        <h3>5 étoiles :</h3>
        <p>Les dégâts de <strong>Sans pitié</strong> infligés par l'utilisateur augmentent de <span class="stat-boost">80%</span> lorsque <strong>Vengeance Impulsive</strong> est active.<br></p>
    `
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
        0: `
        <h3>Avancement 0 :</h3>
        <p>Les dégâts de vent infligés par l'utilisateur augmentent de <span class="stat-boost">4%</span>.<br>
        Les dégâts de compétence de base de l'utilisateur augmentent de <span class="stat-boost">3%</span> lorsque les effets <span class="buff">[Vengeance impulsive ou Folie]</span> s'activent (cumulable jusqu'à 4 fois).<br></p>
    `,
        1: `
        <h3>Avancement 5 étoiles :</h3>
        <p>Les dégâts de vent infligés par l'utilisateur augmentent de <span class="stat-boost">12%</span>.<br>
        Les dégâts de compétence de base de l'utilisateur augmentent de <span class="stat-boost">3%</span> lorsque les effets <span class="buff">[Vengeance impulsive ou Folie]</span> s'activent (cumulable jusqu'à 15 fois).<br></p>
    `,
        2: `
        <h3>Avancement 10 étoiles :</h3>
        <p>Augmente l'Attaque, la Défense et les PV de l'utilisateur de <span class="stat-boost">15%</span>.<br></p>
    `
    }
};

// --- HAN SE-MI ---
huntersData["han-se-mi"] = {
    name: "Han Se-Mi",
    rarity: "SSR",
    element: "Vent",
    gradient: "linear-gradient(90deg, #1e8449, #000)",
    image: "Chasseurs_SSR/vent/han_se_mi/han_art.png",
    weaponImage: "Chasseurs_SSR/vent/han_se_mi/l_age_adulte/Relic_HanSeMi_PortraitBig.png",
    weaponName: "L'âge adulte",
    fullData: {
        0: `
        <h3>Passif :</h3>
        <p>Lors de l'utilisation des compétences <strong>Pousses affûtées</strong>, <strong>Prairie dorée</strong> ou <strong>Lianes de vitalité</strong>, le buff <span class="buff">[Souffle]</span> est appliqué à tous les membres de l'équipe (Temps de rechargement: 15 seconde(s)).<br></p>
        <div class="detail-box">
            <h4><span class="buff">[Souffle]</span></h4>
            <p>Augmente les dégâts de Compétence de base de l'utilisatrice de <span class="stat-boost">10%</span>.<br>
            Augmente également les dégâts de Compétence de base des coéquipiers l'élément Vent de <span class="stat-boost">5%</span>.<br>
            Durée: 25 seconde(s)<br>
            (Cumuls max :2).<br></p>
        </div>
    `,
        1: `
        <h3>1 étoile :</h3>
        <p>Les membres de l'équipe bénéficient de l'effet <span class="buff">[Souffle robuste]</span> lorsqu'ils utilisent leur Compétence ultime.<br></p>
        <div class="detail-box">
            <h4><span class="buff">[Souffle tranchant]</span></h4>
            <p>Applique l'effet ci-dessous à chaque seconde.<br>
            Taux de coup critique: <span class="stat-boost">1%</span> (cumulable jusqu'à 10%) <br>
            Dégâts de coup critique: <span class="stat-boost">1%</span> (cumulable jusqu'à 10%)<br>
            Charge la jauge de puissance de <span class="stat-boost">1%</span><br>
            Durée: 20 seconde(s)</p>
        </div>
    `,
        2: `
        <h3>2 étoiles :</h3>
        <p>Les PV de l'utilisatrice augmentent de <span class="stat-boost">10%</span>.<br></p>
    `,
        3: `
        <h3>3 étoiles :</h3>
        <p>Lorsque les PV de l'utilisatrice sont à 1 ou en dessous de la zone de la compétence <strong>Prairie dorée</strong>, elle devient <span class="buff">[immortelle]</span> pendant 2 seconde(s)<br>
        Lorsque l'effet <span class="buff">[Immortel]</span> se dissipe, elle récupère des PV à hauteur de <span class="stat-boost">30%</span> des PV max de Han Se-Mi.<br>
        Cet effet ne s'active qu'une fois par combat.<br></p>
    `,
        4: `
        <h3>4 étoiles :</h3>
        <p>Les dégâts de vent infligés par tous les membres de l'équipe augmentent de <span class="stat-boost">10%</span>.<br></p>
    `,
        5: `
        <h3>5 étoiles :</h3>
        <p>Lorsque l'utilisatrice quitte le combat ou utilise <strong>Lianes de vitalité</strong>, l'effet <span class="buff">[Unité de la nature]</span> est octroyé à tous les membres de son équipe.<br></p>
        <div class="detail-box">
            <h4><span class="buff">[Unité de la nature]</span></h4>
            <p>Augmente l'Attaque de l'utilisatrice de <span class="stat-boost">10%</span>.<br>
            Augmente les dégâts de vent de <span class="stat-boost">20%</span>.<br>
            Durée: 25 seconde(s)</p>
        </div>
    `
    },
    summaryData: {
        0: `
        <h3>Passif : Gardienne de la Forêt</h3>
        <p>Compétences = <span class="buff">[Souffle]</span> (Équipe).<br>
        [Souffle] : Dégâts Compétence base <span class="stat-boost">+10%</span> (Vent +5%).<br>
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
        <p>Dégâts Vent Équipe <span class="stat-boost">+10%</span>.<br></p>
    `,
        5: `
        <h3>5 étoiles</h3>
        <p>Switch out / Lianes = <span class="buff">[Unité de la nature]</span> (Équipe).<br>
        Attaque <span class="stat-boost">+10%</span>, Dégâts Vent <span class="stat-boost">+20%</span>.</p>
    `
    },
    weaponData: {
        0: `
        <h3>Avancement 0 :</h3>
        <p>Augmente les PV de l'utilisatrice de <span class="stat-boost">4 %</span>.<br>
        Augmente les dégâts subis de <span class="stat-boost">5%</span> pendant 4 seconde(s) face aux cibles touchées par une compétence de Han Se-Mi.<br></p>
    `,
        1: `
        <h3>Avancement 5 étoiles :</h3>
        <p>Augmente les PV de l'utilisatrice de <span class="stat-boost">10%</span>.<br>
        Augmente les dégâts subis de <span class="stat-boost">5%</span> pendant 10 seconde(s) face aux cibles touchées par une compétence de Han Se-Mi.<br></p>
    `,
        2: `
        <h3>Avancement 10 étoiles :</h3>
        <p>Augmente l'Attaque, la Défense et les PV de l'utilisateur de <span class="stat-boost">15%</span>.<br></p>
    `
    }
};

// --- GOTO RYUJI ---
huntersData["goto-ryuji"] = {
    name: "Goto Ryuji",
    rarity: "SSR",
    element: "Vent",
    gradient: "linear-gradient(90deg, #1e8449, #000)",
    image: "Chasseurs_SSR/vent/goto_ryuji/goto_art.png",
    weaponImage: "Chasseurs_SSR/vent/goto_ryuji/reves_distordus/Relic_GotoRyuji_PortraitBig.png",
    weaponName: "Rêves distordus",
    fullData: {
        0: `
        <h3>Passif :</h3>
        <p>Lorsque la compétence de base de l'utilisateur touche sa cible, ce dernier récupère 50 PM.<br>
        Le Taux de coup critique de l'utilisateur augmente à hauteur de <span class="stat-boost">20%</span> de ses Dégâts de coup critique.<br>
        Lorsque l'effet <span class="buff">[Exorcisme]</span> atteint 5 cumuls, il déclenche l'effet <span class="buff">[Arrogance]</span> sur tous les membres de l'équipe de l'élément <span class="buff">[Vent]</span>.<br></p>
        
        <div class="detail-box">
            <h4><span class="buff">[Arrogance]</span></h4>
            <p>Augmente les Dégâts de coup critique de <span class="stat-boost">20%</span>.<br>
            Les dégâts de la compétence de base de l'utilisateur augmentent de <span class="stat-boost">20 %</span>.<br>
            La Consommation de mana des compétences de l'utilisateur augmente de <span class="stat-boost">33%</span>.<br>
            Durée: 20 seconde(s)</p>
        </div>
    `,
        1: `
        <h3>1 étoile :</h3>
        <p>Si Goto Ryuji ou un allié parvient à mettre un ennemi en état de <span class="buff">[Bris]</span>, la durée de l'état de <span class="buff">[Bris]</span> augmente de 3 seconde(s).<br>
        L'effet <span class="buff">[Voie du tyran]</span> est appliqué aux alliés à l'arrivée dans un niveau.<br>
        Lorsque l'effet <span class="buff">[Exorcisme]</span> atteint 5 cumuls, il déclenche l'effet <span class="buff">[Âme démonique]</span>.<br>
        Lorsque Goto utilise <strong>Bourrasque mortelle</strong>, les dégâts de vent des compétences <strong>Tempête inversée</strong> et <strong>Lame tempête</strong> augmentent de <span class="stat-boost">10%</span> pendant 10 seconde(s).<br></p>

        <div class="detail-box">
            <h4><span class="buff">[Voie du tyran]</span></h4>
            <p>Augmente les dégâts infligés aux cibles en état de <span class="buff">[Bris]</span> de <span class="stat-boost">12%</span>.<br>
            Durée: illimitée</p>
        </div>

        <div class="detail-box">
            <h4><span class="buff">[Âme démonique]</span></h4>
            <p><strong>Tempête inversée</strong> devient <strong>Lame tempête</strong>, ce qui augmente ses dégâts de <span class="stat-boost">50%</span>.<br>
            Durée: 10 seconde(s)</p>
        </div>
    `,
        2: `
        <h3>2 étoiles :</h3>
        <p>L'efficacité de <span class="buff">[Bris]</span> de l'utilisateur augmente de <span class="stat-boost">20%</span>.<br></p>
    `,
        3: `
        <h3>3 étoiles :</h3>
        <p>L'utilisation des compétences <strong>Vent divin</strong> et <strong>Dévastation de proie</strong> augmente les Dégâts de coup critique de l'utilisateur de <span class="stat-boost">20%</span> pendant 12 seconde(s).<br></p>
    `,
        4: `
        <h3>4 étoiles :</h3>
        <p>Les dégâts du troisième chasseur de l'équipe augmentent de <span class="stat-boost">24%</span>, mais les dégâts qu'il subit augmentent aussi de <span class="stat-boost">12%</span>.<br></p>
    `,
        5: `
        <h3>5 étoiles :</h3>
        <p>Les compétences <strong>Ouragan céleste fantomatique</strong>, <strong>Tempête inversée</strong> et <strong>Lame tempête</strong> peuvent toucher la cible 2 fois de plus, et chaque attaque inflige des dégâts supplémentaires de <span class="stat-boost">10%</span>.<br>
        Les compétences <strong>Ouragan céleste fantomatique</strong>, <strong>Tempête inversée</strong> et <strong>Lame tempête</strong> peuvent être utilisées 2 fois supplémentaires.<br>
        Lorsque le ratio de PV de Goto Ryuji est supérieur à celui de l'ennemi, les dégâts de la compétence <strong>Dévastation de proie</strong> et les Dégâts de coup critique augmentent de <span class="stat-boost">60%</span>.<br></p>
    `
    },
    summaryData: {
        0: `
        <h3>Passif : Roi du Vent</h3>
        <p>Récupère des PM sur touche.<br>
        Taux Critique augmente selon Dégâts Critique (20%).<br>
        5 stacks [Exorcisme] = Buff <span class="buff">[Arrogance]</span> équipe Vent (Dégâts Crit/Compétence <span class="stat-boost">+20%</span>, mais Coût Mana <span class="stat-boost">+33%</span>).</p>
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
        <p>Compétences ultimes frappent +2 fois (Bonus Dégâts).<br>
        Utilisations max +2 pour Ouragan/Tempête.<br>
        Si PV Goto > PV Ennemi : Dévastation/Crit Dmg <span class="stat-boost">+60%</span>.</p>
    `
    },
    weaponData: {
        0: `
        <h3>Avancement 0 :</h3>
        <p>Les PV de l'utilisateur augmentent de <span class="stat-boost">5%</span>.<br>
        L'utilisation des compétences <strong>Tempête inversée</strong> ou <strong>Lame tempête</strong> augmente les Dégâts de coup critique de l'utilisateur de <span class="stat-boost">5%</span> pendant 15 seconde(s).</p>
    `,
        1: `
        <h3>Avancement 5 étoiles :</h3>
        <p>Les PV de l'utilisateur augmentent de <span class="stat-boost">12%</span>.<br>
        L'utilisation des compétences <strong>Tempête inversée</strong> ou <strong>Lame tempête</strong> augmente les Dégâts de coup critique de l'utilisateur de <span class="stat-boost">30%</span> pendant 15 seconde(s).</p>
    `,
        2: `
        <h3>Avancement 10 étoiles :</h3>
        <p>L'Attaque, la Défense et les PV augmentent de <span class="stat-boost">15%</span>.</p>
    `
    }
};

// --- AMAMIYA MIREI ---
huntersData["amamiya-mirei"] = {
    name: "Amamiya Mirei",
    rarity: "SSR",
    element: "Vent",
    gradient: "linear-gradient(90deg, #1e8449, #000)",
    image: "Chasseurs_SSR/vent/amamiya_mirei/amamiya_art.png",
    weaponImage: "Chasseurs_SSR/vent/amamiya_mirei/lapin_bunbun/Relic_AmamiyaMirei_PortraitBig.png",
    weaponName: "Lapin Bunbun",
    fullData: {
        0: `
        <h3>Passif :</h3>
        <p>Lorsque l'utilisatrice a 66% de PM ou au-dessus, l'effet <span class="buff">[Noirceur de Kuroha]</span> s'applique.<br>
        L'Attaque de l'utilisatrice augmente de <span class="stat-boost">4%</span> par tranche de 150 PM supplémentaires <br>(jusqu'à <span class="stat-boost">40%</span>)..<br></p>
        <div class="detail-box">
            <h4><span class="buff">[Noirceur de Kuroha]</span></h4>
            <p>Les dégâts des compétences <br><strong>Technique à l'épée de Kuroha type 3: Ailes de la nuit</strong> <br> et <strong>Technique à l'épée de Kuroha type 4: Cri de la corneille</strong> <br> augmentent de <span class="stat-boost">30%</span></p>
        </div>
    `,
        1: `
        <h3>1 étoile :</h3>
        <p><img src='icon mirei.png' > Lorsque l'effet <span class="buff">[Possession]</span> est actif, le Taux de coup critique et les Dégâts de coup critique de l'utilisatrice augmentent de <span class="stat-boost">20%</span>.<br>
        Lors de l'utilisation de la compétence <strong>Technique à l'épée de Kuroha type 3: Ailes de la nuit</strong> tandis que l'effet <span class="buff">[Possession]</span> est actif, l'effet <span class="buff">[Ténèbres profondes]</span> s'applique.<br></p>
        <div class="detail-box">
            <h4><span class="buff">[Ténèbres profondes]</span></h4>
            <p>L'Attaque et le Taux de coup critique de l'utilisatrice augmentent de <span class="stat-boost">12%</span> <br>
            (cumulable jusqu'à 2 fois).<br>
            Durée: 10 seconde(s)</p>
        </div>
    `,
        2: `
        <h3>2 étoiles :</h3>
        <p>Remplit la jauge de puissance de l'utilisatrice de <span class="stat-boost">40%</span> en accédant au niveau.<br></p>
    `,
        3: `
        <h3>3 étoiles :</h3>
        <p>Lors de l'utilisation des Attaques de base ou de noyau, les PM et la jauge de puissance se remplissent de <span class="stat-boost">1%</span>, et le temps de rechargement de la compétence <strong>Technique à l'épée de Kuroha Coup létal : Ouverture spéciale de la nuit sans lune</strong> diminue de 2 seconde(s).<br></p>
    `,
        4: `
        <h3>4 étoiles :</h3>
        <p>Augmente les dégâts de vent d'Amamiya Mirei de <span class="stat-boost">10%</span> pour chaque membre de l'équipe de l'élément vent <br>
        (cumulable jusqu'à 3 fois).<br></p>
    `,
        5: `
        <h3>5 étoiles :</h3>
        <p>Lorsque l'effet <span class="buff">[Possession]</span> est actif, l'effet <span class="buff">[Confession de la corneille]</span> s'applique à l'utilisatrice..<br></p>
        <div class="detail-box">
            <h4><span class="buff">[Confession de la corneille]</span></h4>
            <p>Les dégâts des compétences <strong>Technique à l'épée de Kuroha type 3: Ailes de la nuit</strong> et <strong>Technique à l'épée de Kuroha type 4 : Cri de la corneille</strong> augmentent de <span class="stat-boost">80%</span></p>
        </div>
    `
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
        Skill Kuroha 3 = <span class="buff">[Ténèbres profondes]</span> (Atk/Crit <span class="stat-boost">+12%</span>, x2).</p>
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
        <p>Dégâts Vent <span class="stat-boost">+10%</span> par allié Vent (Max 3).<br></p>
    `,
        5: `
        <h3>5 étoiles</h3>
        <p>Sous [Possession] : <span class="buff">[Confession]</span>.<br>
        Dégâts Compétences Kuroha <span class="stat-boost">+80%</span>.</p>
    `
    },
    weaponData: {
        0: `
        <h3>Avancement 0 :</h3>
        <p>Lorsque l'utilisatrice entre dans un niveau, sa jauge de puissance se remplit de <span class="stat-boost">10%</span>.<br>
        Le Taux de coup critique et les Dégâts de coup critique des compétences <strong>Technique à l'épée de Kuroha type 3: Ailes de la nuit</strong> et <strong>Technique à l'épée de Kuroha type 4: Cri de la corneille</strong> augmentent de <span class="stat-boost">5%</span>.<br></p>
    `,
        1: `
        <h3>Avancement 5 étoiles :</h3>
        <p>Lorsque l'utilisatrice entre dans un niveau, sa jauge de puissance se remplit de <span class="stat-boost">60%</span>.<br>
        Le Taux de coup critique et les Dégâts de coup critique des compétences <strong>Technique à l'épée de Kuroha type 3: Ailes de la nuit</strong> et <strong>Technique à l'épée de Kuroha type 4: Cri de la corneille</strong> augmentent de <span class="stat-boost">30%</span>.<br></p>
    `,
        2: `
        <h3>Avancement 10 étoiles :</h3>
        <p>Augmente l'Attaque, la Défense et les PV de l'utilisateur de <span class="stat-boost">15%</span>.<br></p>
    `
    }
};

// --- SOYEON ---
huntersData["soyeon"] = {
    name: "Soyeon",
    rarity: "SSR",
    element: "Vent",
    gradient: "linear-gradient(90deg, #2ecc71, #000)",
    image: "Chasseurs_SSR/collab/vent/soyeon/soyeon_art.png",
    weaponImage: "Chasseurs_SSR/collab/vent/soyeon/flash_flamboyant/Relic_Soyeon_PortraitBig.png",
    weaponName: "Flash flamboyant",
    fullData: {
        0: `
        <h3>Passif :</h3>
        <p>Lorsque les compétences QTE, ultime ou l'attaque de noyau touchent leur cible, la jauge d'<span class="buff">[Énergie du flash]</span> se remplit.<br>
        Lorsque la jauge d'<span class="buff">[Énergie du flash]</span> est remplie au maximum, l'effet <span class="buff">[Énergie du flash]</span> est activé.<br></p>
        
        <div class="detail-box">
            <h4><span class="buff">[Énergie du flash]</span></h4>
            <p>Augmente la Vitesse d'attaque, le Taux de coup critique et les Dégâts de coup critique de <span class="stat-boost">10 %</span>.<br>
            Durée : 20 seconde(s)</p>
        </div>
    `,
        1: `
        <h3>1 étoile :</h3>
        <p>Lorsque l'attaque de noyau est utilisée alors que la jauge d'<span class="buff">[Énergie du flash]</span> est remplie au maximum, l'effet <span class="buff">[Décharge]</span> est activé et la jauge d'<span class="buff">[Énergie du flash]</span> se vide entièrement.<br>
        L'effet <span class="buff">[Énergie du flash]</span> est activé lorsque l'utilisatrice arrive dans le niveau.<br>
        Les compétences <strong>Éclair de brèche</strong> et <strong>Entaille tournoyante</strong> deviennent respectivement <strong>Flash d'acier</strong> et <strong>Entaille tournoyante double</strong>, et leurs dégâts augmentent de <span class="stat-boost">100 %</span>.<br></p>

        <div class="detail-box">
            <h4><span class="buff">[Décharge]</span></h4>
            <p>Augmente les dégâts infligés de <span class="stat-boost">30 %</span>.<br>
            Durée : 15 seconde(s)</p>
        </div>
    `,
        2: `
        <h3>2 étoiles :</h3>
        <p>Augmente les dégâts de vent de l'utilisatrice de <span class="stat-boost">30 %</span>.<br></p>
    `,
        3: `
        <h3>3 étoiles :</h3>
        <p>L'effet <span class="buff">[Décharge]</span> n'active pas l'effet <span class="buff">[Énergie du flash]</span>, mais active l'effet <span class="buff">[Vitesse maximale]</span> à la place.<br></p>

        <div class="detail-box">
            <h4><span class="buff">[Vitesse maximale]</span></h4>
            <p>Augmente les dégâts infligés de <span class="stat-boost">50 %</span>.<br>
            Augmente la Vitesse d'attaque de <span class="stat-boost">30 %</span>.<br>
            Confère l'effet <span class="buff">[Super armure]</span>.<br>
            Durée : 15 seconde(s)</p>
        </div>
    `,
        4: `
        <h3>4 étoiles :</h3>
        <p>Le taux de remplissage de la jauge de puissance des membres de l'équipe de l'élément Vent augmente de <span class="stat-boost">20 %</span>.<br></p>
    `,
        5: `
        <h3>5 étoiles :</h3>
        <p>Les compétences <strong>Angle mort</strong> et <strong>Entaille tournoyante</strong> deviennent respectivement <strong>Angle mort instantané</strong> et <strong>Entaille tournoyante double</strong>, et leurs dégâts augmentent de <span class="stat-boost">50 %</span>.<br>
        Lorsque l'effet <span class="buff">[Décharge]</span> est activé, les temps de rechargement des compétences <strong>Angle mort instantané</strong> et <strong>Entaille tournoyante double</strong> sont réinitialisés.<br></p>
    `
    },
    summaryData: {
        0: `
        <h3>Passif : Vitesse Lumière</h3>
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
        <p>Dégâts Vent <span class="stat-boost">+30%</span>.<br></p>
    `,
        3: `
        <h3>3 étoiles</h3>
        <p>[Décharge] active <span class="buff">[Vitesse maximale]</span> au lieu de [Énergie du flash].<br>
        <span class="buff">[Vitesse maximale]</span> : Dégâts <span class="stat-boost">+50%</span>, Vitesse Atk <span class="stat-boost">+30%</span>, Super armure.</p>
    `,
        4: `
        <h3>4 étoiles</h3>
        <p>Taux remplissage Jauge Puissance équipe Vent <span class="stat-boost">+20%</span>.<br></p>
    `,
        5: `
        <h3>5 étoiles</h3>
        <p>Compétences améliorées : Angle mort instantané et Entaille double (Dégâts <span class="stat-boost">+50%</span>).<br>
        Activation de <span class="buff">[Décharge]</span> réinitialise le TdR de ces compétences.</p>
    `
    },
    weaponData: {
        0: `
        <h3>Avancement 0 :</h3>
        <p>Augmente le Taux de coup critique de l'utilisatrice de <span class="stat-boost">4 %</span>.<br>
        Lorsque l'effet <span class="buff">[Décharge]</span> est activé, les dégâts des compétences de base augmentent de <span class="stat-boost">15 %</span> pendant 15 seconde(s).</p>
    `,
        1: `
        <h3>Avancement 5 étoiles :</h3>
        <p>Augmente le Taux de coup critique de l'utilisatrice de <span class="stat-boost">12 %</span>.<br>
        Lorsque l'effet <span class="buff">[Décharge]</span> est activé, les dégâts des compétences de base augmentent de <span class="stat-boost">50 %</span> pendant 15 seconde(s).</p>
    `,
        2: `
        <h3>Avancement 10 étoiles :</h3>
        <p>L'Attaque, la Défense et les PV de l'utilisatrice augmentent de <span class="stat-boost">15 %</span>.</p>
    `
    }
};