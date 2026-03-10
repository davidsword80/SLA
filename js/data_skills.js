// Initialise l'objet global s'il n'existe pas encore
if (typeof skillsData === 'undefined') { 
    var skillsData = {}; 
}

// --- ARTS VERTICAUX ---
skillsData["arts_verticaux"] = {
    title: "Arts verticaux",
    variants: [
        {
            name: "Explosion consécutive",
            color: "#3498db", // Bleu (Eau)
            bgColor: "#f0f7ff",
            image: "Competence_sung/Arts_verticaux/Explosion_consecutive_P1/Explosion_consecutive_P1.png",
            description: `Explosion consécutive Rune de compétence En votre possession 0 Source<br><br>Dégâts : 1126 % de l'Attaque de Jinwoo Temps de rechargement : 15 s Consommation de PM : 150 Inflige des dégâts élémentaires d'eau. Lorsque cette compétence touche sa cible, elle la [renverse]. Lorsque la dernière attaque touche la cible, elle lui inflige l'effet [En l'air]. Augmente les dégâts infligés aux ennemis en état de [Bris] de 250 %.`
        },
        {
            name: "Onde croisée",
            color: "#e74c3c", // Rouge (Feu)
            bgColor: "#fff5f5",
            image: "Competence_sung/Arts_verticaux/Onde_croisee_P2/Onde_croisee_P2.png",
            description: `Dégâts : 416 % de l'Attaque de Jinwoo Temps de rechargement : 15 s Consommation de PM : 150 Inflige des dégâts élémentaires de feu. Inflige l'effet [En l'air] lorsque la compétence touche. Les dégâts infligés aux boss et aux monstres de type Élite augmentent de 120 %.<br><br>Lorsque cette compétence touche sa cible, elle lui applique l'effet [Brûlure].<br><br>[Brûlure] Inflige des dégâts équivalents à 50 % de l'Attaque toutes les 3 seconde(s). Durée : 30 seconde(s)`
        },
        {
            name: "Ombres",
            color: "#8e44ad", // Violet (Ténèbres)
            bgColor: "#f9f0ff",
            image: "Competence_sung/Arts_verticaux/Ombres_P3/Ombres_P3.png",
            description: `Dégâts : 2454 % de l'Attaque de Jinwoo Temps de rechargement : 10 s Consommation de PM : 100 Inflige des dégâts élémentaires de ténèbres. Lorsque cette compétence touche sa cible, elle la [renverse]. Lorsque cette compétence est utilisée, elle applique un [Bouclier] équivalent à 20 % des PV de Jinwoo pendant 2 seconde(s). Lorsque cette compétence est utilisée, Jinwoo peut contre-attaquer. Inflige à la cible des dégâts équivalents à 1000 % de l'Attaque de Jinwoo et l'effet [Étourdissement] quand une contre-attaque est réussie. Active Foulée de l'ombre et réinitialise son temps de rechargement quand une contre-attaque est réussie (temps de rechargement : 20 seconde(s)).<br><br>[Étourdissement] Immobilise la cible. Durée : 3 seconde(s)`
        },
        {
            name: "Bourrasque",
            color: "#27ae60", // Vert (Vent)
            bgColor: "#f0fff4",
            image: "Competence_sung/Arts_verticaux/Bourrasque_P4/Bourrasque_P4.png",
            description: `Dégâts : 1564 % de l'Attaque de Jinwoo Temps de rechargement : 15 s Consommation de PM : 150 Inflige des dégâts élémentaires de vent. Lorsque cette compétence touche la cible, celle-ci est [renversée]. En fonction du nombre de cibles touchées avec cette compétence, augmente les dégâts infligés aux monstres de type Normal de 20 % (jusqu'à 10 cible(s)).`
        }
    ]
};

// --- BRIS D'ARMURE ---
skillsData["bris_d_armure"] = {
    title: "Bris d'armure",
    variants: [
        {
            name: "Décimation",
            color: "#e74c3c", // Rouge (Feu)
            bgColor: "#fff5f5",
            image: "Competence_sung/Bris_d_armure/Decimation_P1/Decimation_P1.png",
            description: `Décimation<br>Légendaire<br><br>Dégâts : 1628 % de l'Attaque de Jinwoo Temps de rechargement : 20 s Consommation de PM : 200 Inflige des dégâts élémentaires de feu.<br>Inflige des dégâts de Bris tout-puissants. Inflige l'effet [En l'air] lorsque la compétence touche.<br>Lorsque cette compétence est utilisée, elle augmente les dégâts de coup critique de 80 % pendant 5 seconde(s).`
        },
        {
            name: "Iceberg",
            color: "#3498db", // Bleu (Eau)
            bgColor: "#f0f7ff",
            image: "Competence_sung/Bris_d_armure/Iceberg_P2/Iceberg_P2.png",
            description: `Iceberg<br>Légendaire<br><br>Dégâts : 2046 % de l'Attaque de Jinwoo Temps de rechargement : 20 s Consommation de PM : 200 Inflige des dégâts élémentaires d'eau.<br>Inflige des dégâts de Bris tout-puissants. [Renverse] la cible lorsque la dernière attaque la touche.<br>Lorsque cette compétence touche sa cible, elle lui applique l'effet [Gel].<br><br>[Gel] Interrompt la cible.<br>Durée : 2 seconde(s)`
        },
        {
            name: "Onde de vide",
            color: "#27ae60", // Vert (Vent)
            bgColor: "#f0fff4",
            image: "Competence_sung/Bris_d_armure/Onde_de_vide_P3/Onde_de_vide_P3.png",
            description: `Onde de vide<br>Légendaire<br><br>Dégâts : 560 % de l'Attaque de Jinwoo Temps de rechargement : 20 s Consommation de PM : 200 Inflige des dégâts élémentaires de vent.<br>Inflige des dégâts de Bris tout-puissants. [Renverse] la cible lorsque la dernière attaque touche sa cible.<br>Lorsque cette compétence touche sa cible, les dégâts subis par celle-ci augmentent de 15 % pendant 12 seconde(s).<br>Lors de l'utilisation de cette compétence, les dégâts d'Arts verticaux augmentent de 30 % pendant 10 seconde(s).`
        },
        {
            name: "Frappe d'ombres multiples",
            color: "#f1c40f", // Jaune (Lumière)
            bgColor: "#fffce8",
            image: "Competence_sung/Bris_d_armure/Frappe_d_ombres_multiples_P4/Frappe_d_ombres_multiples_P4.png",
            description: `Frappe d'ombres multiples<br>Légendaire<br><br>Dégâts : 1312 % de l'Attaque de Jinwoo et 1312 % de la Défense de Jinwoo Temps de rechargement : 20 s Consommation de PM : 200 Inflige des dégâts élémentaires de lumière.<br>Inflige des dégâts de Bris tout-puissants. Lorsque la dernière attaque touche sa cible, elle la [renverse].<br>Cette compétence rend Jinwoo [Invincible]. Une fois utilisé, augmente la Défense de 20 % pendant 30 seconde(s) (cumulable jusqu'à 5 fois).`
        }
    ]
};

// --- COUP DÉVASTATEUR ---
skillsData["coup_devastateur"] = {
    title: "Coup dévastateur",
    variants: [
        {
            name: "Bris à la chaîne",
            color: "#27ae60", // Vert (Vent)
            bgColor: "#f0fff4",
            image: "Competence_sung/Coup_devastateur/Bris_a_la_chaine_P1/Bris_a_la_chaine_P1.png",
            description: `Bris à la chaîne<br>Légendaire<br><br>Dégâts : 1280 % de l'Attaque de Jinwoo Temps de rechargement : 10 s Consommation de PM : 80 Inflige des dégâts élémentaires de vent.<br>Inflige des dégâts de Bris moyens. [Renverse] la cible lorsque la dernière attaque touche sa cible.<br>Augmente l'Attaque de 4 % pendant 12 seconde(s) lorsque cette compétence touche sa cible (cumulable jusqu'à 4 fois).<br>Lorsque cette compétence est utilisée, un [Bouclier] est appliqué.<br><br>[Bouclier] Crée un [Bouclier] équivalent à 10 % des PV max de l'utilisateur.<br>Durée : 3 seconde(s)`
        },
        {
            name: "Bris d'ascension",
            color: "#e74c3c", // Rouge (Feu)
            bgColor: "#fff5f5",
            image: "Competence_sung/Coup_devastateur/Bris_d_ascension_P2/Bris_d_ascension_P2.png",
            description: `Bris d'ascension<br>Légendaire<br><br>Dégâts : 580 % de l'Attaque de Jinwoo Temps de rechargement : 10 s Consommation de PM : 80 Inflige des dégâts élémentaires de feu.<br>Inflige des dégâts de Bris moyens. Inflige l'effet [En l'air] lorsque la première attaque touche sa cible.<br>Inflige l'effet [Renversement] lorsque la dernière attaque touche sa cible.<br>Charge la jauge de puissance de 30 % et réduit le temps de rechargement de la Compétence ultime de l'utilisateur de 30 seconde(s) lorsqu'il lance cette compétence.<br>(Temps de rechargement : 30 seconde(s))`
        },
        {
            name: "Bris de contre",
            color: "#8e44ad", // Violet (Ténèbres)
            bgColor: "#f9f0ff",
            image: "Competence_sung/Coup_devastateur/Bris_de_contre_P3/Bris_de_contre_P3.png",
            description: `Bris de contre<br>Légendaire<br><br>Dégâts : 2506 % de l'Attaque de Jinwoo Temps de rechargement : 10 s Consommation de PM : 80 Inflige des dégâts élémentaires de ténèbres.<br>Inflige des dégâts de Bris légers. Lorsque la dernière attaque touche sa cible, elle lui applique l'effet [En l'air].<br>Lorsque cette compétence est utilisée, elle applique un [Bouclier] équivalent à 20 % des PV de Jinwoo pendant 3 seconde(s).<br>Lorsque cette compétence est utilisée, Jinwoo peut contre-attaquer. Inflige des dégâts de Bris lourds et l'effet [Étourdissement] à la cible quand une contre-attaque est réussie.<br><br>[Étourdissement] Immobilise la cible. Durée : 3 seconde(s)`
        },
        {
            name: "Bris lumineux",
            color: "#f1c40f", // Jaune (Lumière)
            bgColor: "#fffce8",
            image: "Competence_sung/Coup_devastateur/Bris_lumineux_P4/Bris_lumineux_P4.png",
            description: `Bris lumineux<br>Légendaire<br><br>Dégâts : 945 % de l'Attaque de Jinwoo Temps de rechargement : 10 s Consommation de PM : 80 Inflige des dégâts élémentaires de lumière.<br>Inflige des dégâts de Bris moyens. Inflige l'effet [En l'air] lorsque cette compétence touche sa cible.<br>Lorsque cette compétence touche sa cible, elle lui applique l'effet [Lumière].<br><br>[Lumière] Inflige des dégâts équivalents à 60 % de l'Attaque toutes les 3 seconde(s). Réduit l'Attaque de 20 %.<br>Durée : 30 seconde(s)`
        }
    ]
};

// --- DANSE DE LA MORT ---
skillsData["danse_de_la_mort"] = {
    title: "Danse de la mort",
    variants: [
        {
            name: "Choc terrestre",
            color: "#f1c40f", // Jaune (Lumière)
            bgColor: "#fffce8",
            image: "Competence_sung/Danse_de_la_mort/Choc_terrestre_P1/Choc_terrestre_P1.png",
            description: `Choc terrestre<br>Légendaire Choc terrestre Rune de compétence En votre possession 0 Source<br><br>Dégâts : 746 % de l'Attaque de Jinwoo Temps de rechargement : 15 s Consommation de PM : 150 Inflige des dégâts élémentaires de lumière.<br>Inflige des dégâts de Bris lourds. Lorsque la dernière attaque touche sa cible, elle la [renverse].<br>Lorsque cette compétence est utilisée, elle augmente les dégâts de coup critique de 50 % pendant 12 seconde(s).<br>Lorsque cette compétence touche sa cible, elle réinitialise le temps de rechargement de Toucher du maître (temps de rechargement : 30 seconde(s)).`
        },
        {
            name: "Éruption",
            color: "#8e44ad", // Violet (Ténèbres)
            bgColor: "#f9f0ff",
            image: "Competence_sung/Danse_de_la_mort/Eruption_P2/Eruption_P2.png",
            description: `Éruption<br>Légendaire<br><br>Dégâts : 1466 % de l'Attaque de Jinwoo Temps de rechargement : 15 s Consommation de PM : 150 Inflige des dégâts élémentaires de ténèbres.<br>Inflige des dégâts de Bris lourds. Inflige l'effet [En l'air] lorsque la dernière attaque touche sa cible.<br>Les dégâts infligés aux boss et aux monstres de type Élite augmentent de 120 %.`
        },
        {
            name: "Feu sauvage",
            color: "#e74c3c", // Rouge (Feu)
            bgColor: "#fff5f5",
            image: "Competence_sung/Danse_de_la_mort/Feu_sauvage_P3/Feu_sauvage_P3.png",
            description: `Feu sauvage<br>Légendaire<br><br>Dégâts : 1582 % de l'Attaque de Jinwoo Temps de rechargement : 15 s Consommation de PM : 150 Inflige des dégâts élémentaires de feu.<br>Inflige des dégâts de Bris lourds. Lorsque la dernière attaque touche sa cible, celle-ci est [renversée].<br>Les dégâts augmentent de 55 % lorsque des ennemis sont attaqués avec leur faiblesse élémentaire.`
        },
        {
            name: "Rotation fulgurante",
            color: "#27ae60", // Vert (Vent)
            bgColor: "#f0fff4",
            image: "Competence_sung/Danse_de_la_mort/Rotation_fulgurante_P4/Rotation_fulgurante_P4.png",
            description: `Rotation fulgurante<br>Légendaire<br><br>Dégâts : 525 % de l'Attaque de Jinwoo Temps de rechargement : 5 s Consommation de PM : 40 Inflige des dégâts élémentaires de vent.<br>Inflige des dégâts de Bris légers. Cette compétence peut être utilisée jusqu'à 3 fois.<br>La jauge de puissance se charge de 2.5 % lorsque vous êtes touché.`
        }
    ]
};

// --- DOUBLE ENTAILLE ---
skillsData["double_entaille"] = {
    title: "Double entaille",
    variants: [
        {
            name: "Entaille ardente",
            color: "#e74c3c", // Rouge (Feu)
            bgColor: "#fff5f5",
            image: "Competence_sung/Double_entaille/Entaille_ardente_P1/Entaille_ardente_P1.png",
            description: `Entaille ardente<br>Légendaire<br><br>Dégâts : 1023 % de l'Attaque de Jinwoo Temps de rechargement : 10 s Consommation de PM : 80 Inflige des dégâts élémentaires de feu.<br>Inflige l'effet [En l'air] lorsque la dernière attaque touche. Lorsque cette compétence est utilisée, elle augmente le taux de coup critique de 10 % pendant 8 seconde(s).`
        },
        {
            name: "Multiple",
            color: "#3498db", // Bleu (Neutre/Général)
            bgColor: "#f0f7ff",
            image: "Competence_sung/Double_entaille/Multiple_P2/Multiple_P2.png",
            description: `Multiple<br>Légendaire<br><br>Dégâts : 734 % de l'Attaque de Jinwoo Temps de rechargement : 10 s Consommation de PM : 30 Lorsque la dernière attaque touche la cible, elle lui inflige l'effet [En l'air].<br>Lorsque Jinwoo élimine l'ennemi avec cette compétence, il a 100 % de chances que son temps de rechargement soit réinitialisé (temps de rechargement : 0.5 seconde(s)).<br>Lorsque cette compétence touche un monstre Élite ou supérieur, il a 70 % de chances que son temps de rechargement soit réinitialisé (temps de rechargement : 0.5 seconde(s)).<br>Lorsque cette compétence est utilisée, les dégâts de Mutilation augmentent de 30 % pendant 10 seconde(s) (cumulable jusqu'à 3 fois).`
        },
        {
            name: "Roue de pleine lune",
            color: "#8e44ad", // Violet (Neutre/Général)
            bgColor: "#f9f0ff",
            image: "Competence_sung/Double_entaille/Roue_de_pleine_lune_P3/Roue_de_pleine_lune_P3.png",
            description: `Roue de pleine lune<br>Légendaire<br><br>Dégâts : 1230 % de l'Attaque de Jinwoo Temps de rechargement : 10 s Consommation de PM : 80 Lorsque la compétence touche, elle inflige l'effet [En l'air].<br>Les dégâts infligés aux boss et aux monstres de type Élite augmentent de 120 %.`
        },
        {
            name: "Ruée tourbillonnante",
            color: "#27ae60", // Vert (Vent)
            bgColor: "#f0fff4",
            image: "Competence_sung/Double_entaille/Ruee_tourbillonnante_P4/Ruee_tourbillonnante_P4.png",
            description: `Ruée tourbillonnante<br>Légendaire<br><br>Dégâts : 640 % de l'Attaque de Jinwoo Temps de rechargement : 10 s Consommation de PM : 80 Inflige des dégâts élémentaires de vent.<br>Inflige l'effet [En l'air] lorsque la dernière attaque touche. Lorsque cette compétence touche sa cible, elle lui applique l'effet [Étourdissement].<br>Lorsque cette compétence touche sa cible, elle charge Ruée 2 fois.<br><br>[Étourdissement] Immobilise la cible. Durée : 2 seconde(s)`
        }
    ]
};

// --- FLOT SONIQUE ---
skillsData["flot_sonique"] = {
    title: "Flot sonique",
    variants: [
        {
            name: "Double attaque descendante",
            color: "#f1c40f", // Jaune (Lumière)
            bgColor: "#fffce8",
            image: "Competence_sung/Flot_sonique/Double_attaque_descendante_P1/Double_attaque_descendante_P1.png",
            description: `Double attaque descendante<br>Légendaire<br><br>Dégâts : 1332 % de l'Attaque de Jinwoo Temps de rechargement : 20 s Consommation de PM : 200 Inflige des dégâts élémentaires de lumière.<br>Inflige l'effet [En l'air] lorsque la dernière attaque touche. Lorsque votre attaque touche un ennemi sans jauge de bris, elle augmente les dégâts de Double attaque descendante de 240 % pendant 7 seconde(s).`
        },
        {
            name: "Entailles croissantes",
            color: "#8e44ad", // Violet (Ténèbres)
            bgColor: "#f9f0ff",
            image: "Competence_sung/Flot_sonique/Entailles_croissantes_P2/Entailles_croissantes_P2.png",
            description: `Entailles croissantes<br>Légendaire<br><br>Dégâts : 390 % de l'Attaque de l'utilisateur Temps de rechargement : 20 s Consommation de PM : 100 Inflige des dégâts élémentaires de ténèbres.<br>Lorsque cette compétence est utilisée après Entailles croissantes ou au bon moment après une Ruée, les dégâts de la compétence Entailles croissantes augmentent de 250 % pendant 3 seconde(s) (cumulable jusqu'à 2 fois).<br>Lorsque la compétence Entailles croissantes et une autre compétence sont utilisées l'une après l'autre, l'utilisateur récupère 200 PM.`
        },
        {
            name: "Explosion sonique",
            color: "#e74c3c", // Rouge (Feu)
            bgColor: "#fff5f5",
            image: "Competence_sung/Flot_sonique/Explosion_sonique_P3/Explosion_sonique_P3.png",
            description: `Explosion sonique<br>Légendaire<br><br>Dégâts : 2295 % de l'Attaque de Jinwoo Temps de rechargement : 20 s Consommation de PM : 200 Inflige des dégâts élémentaires de feu.<br>Inflige l'effet [En l'air] lorsque la dernière attaque touche. Lorsque la dernière attaque touche sa cible, la jauge de noyau passe à 100 %.<br>Lorsque la dernière attaque touche sa cible, les dégâts de l'Attaque de noyau de Sung Jinwoo augmentent de 240 % pendant 7 seconde(s).`
        },
        {
            name: "Voile venteux",
            color: "#27ae60", // Vert (Vent)
            bgColor: "#f0fff4",
            image: "Competence_sung/Flot_sonique/Voile_venteux_P4/Voile_venteux_P4.png",
            description: `Voile venteux<br>Légendaire<br><br>Dégâts : 1162 % de l'Attaque de Jinwoo Temps de rechargement : 20 s Consommation de PM : 200 Inflige des dégâts élémentaires de vent.<br>Applique l'effet [Courant du vent] à chaque coup porté. [Voile venteux] s'active pour chaque petite lame lancée à la suite et qui touche sa cible, ce qui permet d'augmenter les dégâts de la dernière lame de 50 %.<br>Durée : 5 seconde(s) (cumulable jusqu'à 6 fois)<br><br>[Courant du vent]<br><br>Augmente l'Attaque de 3 %.<br>Durée : 10 seconde(s) (cumulable jusqu'à 10 fois).`
        }
    ]
};

// --- FRAPPE VITALE ---
skillsData["frappe_vitale"] = {
    title: "Frappe vitale",
    variants: [
        {
            name: "À point",
            color: "#3498db", // Bleu (Eau)
            bgColor: "#f0f7ff",
            image: "Competence_sung/Frappe_vitale/A_point_P1/A_point_P1.png",
            description: `À point<br>Légendaire<br><br>Dégâts : 1674 % de l'Attaque de Jinwoo Temps de rechargement : 15 s Consommation de PM : 150 Inflige des dégâts élémentaires d'eau.<br>Lorsque la dernière attaque touche sa cible, elle la [renverse]. Lorsque cette compétence est utilisée, un [Bouclier] est appliqué.<br><br>[Bouclier]<br><br>Crée un [Bouclier] équivalent à 10 % des PV max de l'utilisateur.<br><br>Durée : 12 seconde(s)`
        },
        {
            name: "Extermination",
            color: "#34495e", // Gris/Bleu foncé (Neutre/Physique)
            bgColor: "#f2f4f6",
            image: "Competence_sung/Frappe_vitale/Extermination_P2/Extermination_P2.png",
            description: `Extermination<br>Légendaire<br><br>Dégâts : 1938 % de l'Attaque de Jinwoo Temps de rechargement : 15 s Consommation de PM : 150 L'Attaque de Jinwoo augmente de 15 % pendant 12 seconde(s) après utilisation.`
        },
        {
            name: "Lésion interne",
            color: "#34495e", // Gris/Bleu foncé (Neutre/Physique)
            bgColor: "#f2f4f6",
            image: "Competence_sung/Frappe_vitale/Lesion_interne_P3/Lesion_interne_P3.png",
            description: `Lésion interne<br>Légendaire<br><br>Dégâts : 2120 % de l'Attaque de Jinwoo Temps de rechargement : 15 s Consommation de PM : 150 Lorsque la dernière attaque touche la cible, elle lui inflige l'effet [En l'air].<br>Lorsque cette compétence touche sa cible, elle lui inflige l'effet [Défense réduite].<br><br>[Défense réduite]<br><br>Réduit la Défense de la cible de 20 %.<br><br>Durée : 12 seconde(s)`
        },
        {
            name: "Plantage",
            color: "#34495e", // Gris/Bleu foncé (Neutre/Physique)
            bgColor: "#f2f4f6",
            image: "Competence_sung/Frappe_vitale/Plantage_P4/Plantage_P4.png",
            description: `Plantage<br>Légendaire<br><br>Dégâts : 1350 % de l'Attaque de Jinwoo Temps de rechargement : 15 s Consommation de PM : 150 Les dégâts infligés aux boss et aux monstres de type Élite augmentent de 120 %.`
        }
    ]
};

// --- FRAPPES MULTIPLES ---
skillsData["frappes_multiples"] = {
    title: "Frappes multiples",
    variants: [
        {
            name: "Accablement",
            color: "#3498db", // Bleu (Eau)
            bgColor: "#f0f7ff",
            image: "Competence_sung/Frappes_multiples/Accablement_P1/Accablement_P1.png",
            description: `Accablement<br>Légendaire<br><br>Dégâts : 900 % de l'Attaque de Jinwoo Temps de rechargement : 10 s Consommation de PM : 100 Inflige des dégâts élémentaires d'eau.<br>Inflige des dégâts de Bris moyens. Lorsque la dernière attaque touche sa cible, elle lui inflige l'effet [En l'air].<br>Lors de l'utilisation de cette compétence, les dégâts de [Coup dévastateur] augmentent de 30 % pendant 10 seconde(s).<br>Lorsque la dernière attaque touche sa cible, elle lui inflige des dégâts de Bris légers toutes les 3 seconde(s) pendant 15 seconde(s).`
        },
        {
            name: "Déchaînement",
            color: "#f1c40f", // Jaune (Lumière)
            bgColor: "#fffce8",
            image: "Competence_sung/Frappes_multiples/Dechainement_P2/Dechainement_P2.png",
            description: `Déchaînement<br>Légendaire<br><br>Dégâts : 953 % de l'Attaque de Jinwoo Temps de rechargement : 10 s Consommation de PM : 40 Inflige des dégâts élémentaires de lumière.<br>Inflige des dégâts de Bris légers. Lorsque la dernière attaque touche sa cible, elle lui inflige l'effet [En l'air].<br>Jinwoo obtient [Super armure] pendant l'utilisation de cette compétence. Lorsque cette compétence est utilisée, elle augmente le taux de coup critique de 5 % pendant 8 seconde(s).<br>Lorsque cette compétence touche sa cible, le temps de rechargement se réinitialise (Temps de rechargement : 10 seconde(s)).`
        },
        {
            name: "Illusion",
            color: "#8e44ad", // Violet (Ténèbres)
            bgColor: "#f9f0ff",
            image: "Competence_sung/Frappes_multiples/Illusion_P3/Illusion_P3.png",
            description: `Illusion<br>Légendaire<br><br>Dégâts : 641 % de l'Attaque de Jinwoo Temps de rechargement : 10 s Consommation de PM : 80 Inflige des dégâts élémentaires de ténèbres.<br>Inflige des dégâts de Bris moyens. Inflige l'effet [En l'air] lorsque la dernière attaque touche sa cible.<br>Jinwoo devient [invincible] pendant l'utilisation de cette compétence. Chaque fois que cette compétence touche une cible, les dégâts infligés par Jinwoo augmentent de 11 % (cumulable jusqu'à 4 fois).<br>Lorsque cette compétence touche sa cible, le temps de rechargement de Lancer de dague se réinitialise (temps de rechargement : 20 seconde(s)).`
        },
        {
            name: "Percussion",
            color: "#e74c3c", // Rouge (Feu)
            bgColor: "#fff5f5",
            image: "Competence_sung/Frappes_multiples/Percussion_P4/Percussion_P4.png",
            description: `Percussion<br>Légendaire<br><br>Dégâts : 1136 % de l'Attaque de Jinwoo Temps de rechargement : 10 s Consommation de PM : 80 Inflige des dégâts élémentaires de feu.<br>Inflige des dégâts de Bris moyens. Lorsque cette compétence touche sa cible, elle lui inflige l'effet [En l'air].<br>Les dégâts infligés aux boss et aux monstres de type Élite augmentent de 100 %.`
        }
    ]
};

// --- LANCER DE DAGUE ---
skillsData["lancer_de_dague"] = {
    title: "Lancer de dague",
    variants: [
        {
            name: "Ascension",
            color: "#34495e", // Gris/Bleu foncé (Neutre/Physique)
            bgColor: "#f2f4f6",
            image: "Competence_sung/Lancer_de_dague/Ascension_P1/Ascension_P1.png",
            description: `Ascension<br>Légendaire<br><br>Dégâts : 871 % de l'Attaque de Jinwoo Temps de rechargement : 10 s Consommation de PM : 80 Augmente les dégâts infligés aux ennemis en état de [Bris] de 250 %.`
        },
        {
            name: "Bombardement",
            color: "#34495e", // Gris/Bleu foncé (Neutre/Physique)
            bgColor: "#f2f4f6",
            image: "Competence_sung/Lancer_de_dague/Bombardement_P2/Bombardement_P2.png",
            description: `Bombardement<br>Légendaire<br><br>Dégâts : 1432 % de l'Attaque de Jinwoo Temps de rechargement : 10 s Consommation de PM : 80 Lorsque cette compétence touche sa cible, elle la [renverse].<br>Les dégâts infligés par cette compétence sont augmentés de 100 % face aux cibles renversées.`
        },
        {
            name: "Détonation",
            color: "#e74c3c", // Rouge (Feu)
            bgColor: "#fff5f5",
            image: "Competence_sung/Lancer_de_dague/Detonation_P3/Detonation_P3.png",
            description: `Détonation<br>Légendaire<br><br>Dégâts par dague : 177 % de l'Attaque de Jinwoo Temps de rechargement : 10 s Consommation de PM : 100 Inflige des dégâts élémentaires de feu.<br>Lorsque cette compétence touche sa cible, elle lui applique l'effet [Brûlure].<br><br>[Brûlure] Inflige des dégâts équivalents à 80 % de l'Attaque toutes les 3 seconde(s) (cumulable jusqu'à 3 fois).<br>Durée : 30 seconde(s)`
        },
        {
            name: "Électrocution",
            color: "#f1c40f", // Jaune (Lumière)
            bgColor: "#fffce8",
            image: "Competence_sung/Lancer_de_dague/Electrocution_P4/Electrocution_P4.png",
            description: `Électrocution<br>Légendaire<br><br>Dégâts : 1430 % de l'Attaque de Jinwoo Temps de rechargement : 10 s Consommation de PM : 80 Inflige des dégâts élémentaires de lumière.<br>Chaque fois que cette compétence touche sa cible, elle lui applique l'effet [Électrocution].<br><br>[Électrocution] Inflige des dégâts équivalents à 600 % de l'Attaque.`
        }
    ]
};

// --- MUTILATION ---
skillsData["mutilation"] = {
    title: "Mutilation",
    variants: [
        {
            name: "Coup de tonnerre",
            color: "#8e44ad", // Violet (Ténèbres)
            bgColor: "#f9f0ff",
            image: "Competence_sung/Mutilation/Coup_de_tonnerre_P1/Coup_de_tonnerre_P1.png",
            description: `Coup de tonnerre<br>Légendaire<br><br>Dégâts : 772 % de l'Attaque de Jinwoo Temps de rechargement : 15 s Consommation de PM : 150 Inflige des dégâts élémentaires de ténèbres.<br>Lorsque la dernière attaque touche l'ennemi, elle le [renverse]. Les attaques du chasseur ont 50 % de chances d'ignorer 100 % de la Défense de la cible.`
        },
        {
            name: "Fantôme",
            color: "#34495e", // Gris/Bleu foncé (Neutre/Physique)
            bgColor: "#f2f4f6",
            image: "Competence_sung/Mutilation/Fantome_P2/Fantome_P2.png",
            description: `Fantôme<br>Légendaire<br><br>Dégâts : 1016 % de l'Attaque de Jinwoo + 1016 % des PV max de Jinwoo Temps de rechargement : 15 s Consommation de PM : 60 Le temps de rechargement de cette compétence se réinitialise lorsque la cible est touchée (temps de rechargement : 15 seconde(s)).`
        },
        {
            name: "Frappe",
            color: "#34495e", // Gris/Bleu foncé (Neutre/Physique)
            bgColor: "#f2f4f6",
            image: "Competence_sung/Mutilation/Frappe_P3/Frappe_P3.png",
            description: `Frappe<br>Légendaire<br><br>Dégâts : 1648 % de l'Attaque de Jinwoo Temps de rechargement : 15 s Consommation de PM : 150 Lorsque la dernière attaque touche la cible, elle lui inflige l'effet [En l'air].<br>Lorsque cette compétence touche sa cible, elle lui inflige les effets [Attaque réduite] et [Défense réduite].<br>Lorsque cette compétence touche sa cible, elle active Mort et réinitialise son temps de rechargement, et augmente les dégâts de Mort de 30 % pendant 5 seconde(s) (temps de rechargement : 15 seconde(s)).<br><br>[Attaque réduite]<br><br>Réduit l'Attaque de la cible de 16 %.<br><br>Durée : 12 seconde(s)<br><br>[Défense réduite]<br><br>Réduit la Défense de la cible de 16 %.<br>Durée : 12 seconde(s)`
        },
        {
            name: "Tempête glacée",
            color: "#3498db", // Bleu (Eau)
            bgColor: "#f0f7ff",
            image: "Competence_sung/Mutilation/Tempete_glacee_P4/Tempete_glacee_P4.png",
            description: `Tempête glacée<br>Légendaire<br><br>Dégâts : 1992 % de l'Attaque de Jinwoo Temps de rechargement : 15 s Consommation de PM : 150 Inflige des dégâts élémentaires d'eau.<br>Lorsque cette compétence touche sa cible, elle lui applique l'effet [Engelure].<br>Lorsque cette compétence touche sa cible, elle lui applique l'effet [Gel].<br><br>[Engelure]<br><br>Inflige des dégâts équivalents à 400 % de l'Attaque de l'utilisateur toutes les 3 seconde(s).<br>Durée : 30 seconde(s)<br><br>[Gel]<br><br>Interrompt la cible.<br><br>Durée : 2 seconde(s)`
        }
    ]
};

// --- POUSSÉE PERFORANTE ---
skillsData["poussee_perforante"] = {
    title: "Poussée perforante",
    variants: [
        {
            name: "Coup de pied azur",
            color: "#f1c40f", // Jaune (Lumière)
            bgColor: "#fffce8",
            image: "Competence_sung/Poussee_perforante/Coup_de_pied_azur_P1/Coup_de_pied_azur_P1.png",
            description: `Coup de pied azur<br>Légendaire<br><br>Dégâts : 668 % de l'Attaque de Jinwoo Temps de rechargement : 20 s Consommation de PM : 200 Inflige des dégâts élémentaires de lumière.<br>Inflige des dégâts de [Bris tout-puissants]. Lorsque la dernière attaque touche sa cible, elle lui applique l'effet [En l'air].<br>Lors de l'utilisation de cette compétence, Jinwoo devient [invincible]. L'utilisation de cette compétence augmente les dégâts de lumière de 22 % pendant 12 seconde(s).`
        },
        {
            name: "Coup de pied de l'eau circulante",
            color: "#3498db", // Bleu (Eau)
            bgColor: "#f0f7ff",
            image: "Competence_sung/Poussee_perforante/Coup_de_pied_de_l_eau_circulante_P2/Coup_de_pied_de_l_eau_circulante_P2.png",
            description: `Coup de pied de l'eau circulante<br>Légendaire<br><br>Dégâts : 1679 % de l'Attaque de Jinwoo Temps de rechargement : 20 s Consommation de PM : 200 Inflige des dégâts élémentaires d'eau.<br>Lorsque la dernière attaque touche sa cible, elle la [renverse].<br>Chaque fois que cette compétence touche sa cible, elle lui applique l'effet [Au fil de l'eau].<br><br>[Au fil de l'eau]<br><br>Augmente les dégâts de Coup de pied de l'eau circulante de 90 %.<br>Augmente les dégâts élémentaires d'eau de Coup de pied de l'eau circulante de 22 %.<br>Durée : 3 seconde(s) (cumulable jusqu'à 3 fois).`
        },
        {
            name: "Coup de pied de la bourrasque",
            color: "#27ae60", // Vert (Vent)
            bgColor: "#f0fff4",
            image: "Competence_sung/Poussee_perforante/Coup_de_pied_de_la_bourrasque_P3/Coup_de_pied_de_la_bourrasque_P3.png",
            description: `Coup de pied de la bourrasque<br>Légendaire<br><br>Dégâts : 1560 % de l'Attaque de Jinwoo Temps de rechargement : 20 s Consommation de PM : 200 Inflige des dégâts élémentaires de vent.<br>Inflige des dégâts de Bris lourds. Lorsque la dernière attaque touche sa cible, elle lui applique l'effet [En l'air].<br>Lorsque cette compétence est utilisée, un [Bouclier] est appliqué. Chaque fois que cette compétence touche sa cible, les dégâts infligés par l'utilisateur augmentent de 1 % pendant 8 seconde(s) (cumulable jusqu'à 20 fois).<br><br>[Bouclier]<br><br>Crée un [Bouclier] équivalent à 20 % des PV max de l'utilisateur.<br>Durée : 5 seconde(s)`
        },
        {
            name: "Coup de pied de la tempête de feu",
            color: "#e74c3c", // Rouge (Feu)
            bgColor: "#fff5f5",
            image: "Competence_sung/Poussee_perforante/Coup_de_pied_de_la_tempete_de_feu_P4/Coup_de_pied_de_la_tempete_de_feu_P4.png",
            description: `Coup de pied de la tempête de feu<br>Légendaire<br><br>Dégâts : 1407 % de l'Attaque de Jinwoo Temps de rechargement : 20 s Consommation de PM : 200 Inflige des dégâts élémentaires de feu.<br>Lorsque la dernière attaque touche sa cible, elle lui applique l'effet [En l'air].<br>Lorsque cette compétence touche sa cible, elle lui applique l'effet [Brûlure].<br>Augmente les dégâts de la compétence Coup de pied de la tempête de feu sur les ennemis affectés par [Brûlure] de 180 %.<br><br>[Brûlure]<br><br>Inflige des dégâts équivalents à 500 % de l'Attaque toutes les 3 seconde(s) (cumulable jusqu'à 1 fois).<br>Durée : 30 seconde(s)`
        }
    ]
};

// --- RUÉE ACÉRÉE ---
skillsData["ruee_aceree"] = {
    title: "Ruée acérée",
    variants: [
        {
            name: "Annihilation",
            color: "#34495e", // Gris/Bleu foncé (Neutre/Physique)
            bgColor: "#f2f4f6",
            image: "Competence_sung/Ruee_aceree/Annihilation_P1/Annihilation_P1.png",
            description: `Annihilation<br>Légendaire<br><br>Dégâts : 1325 % de l'Attaque de Jinwoo Temps de rechargement : 20 s Consommation de PM : 200 Lorsque cette compétence touche, elle inflige l'effet [En l'air].<br>Augmente les dégâts infligés aux ennemis en état de [Bris] de 250 %.`
        },
        {
            name: "Débordement",
            color: "#34495e", // Gris/Bleu foncé (Neutre/Physique)
            bgColor: "#f2f4f6",
            image: "Competence_sung/Ruee_aceree/Debordement_P2/Debordement_P2.png",
            description: `Débordement<br>Légendaire<br><br>Dégâts : 698 % de l'Attaque de Jinwoo Temps de rechargement : 15 s Consommation de PM : 150 Lorsque la compétence la touche la cible, elle la [renverse].<br>Lorsque cette compétence touche sa cible, le temps de rechargement se réinitialise (Temps de rechargement : 15 seconde(s)).<br>Lorsque cette compétence est utilisée, elle augmente les dégâts de coup critique de 40 % pendant 12 seconde(s).`
        },
        {
            name: "Recrudescence",
            color: "#34495e", // Gris/Bleu foncé (Neutre/Physique)
            bgColor: "#f2f4f6",
            image: "Competence_sung/Ruee_aceree/Recrudescence_P3/Recrudescence_P3.png",
            description: `Recrudescence<br>Légendaire<br><br>Dégâts : 544 % de l'Attaque de Jinwoo Temps de rechargement : 10 s Consommation de PM : 100 Lorsque la dernière attaque touche sa cible, elle inflige l'effet [En l'air].<br>Après une attaque dans le dos réussie, 60 % de chances d'appliquer un taux de coup critique de 100 % à la prochaine attaque.`
        },
        {
            name: "Scission",
            color: "#8e44ad", // Violet (Ténèbres)
            bgColor: "#f9f0ff",
            image: "Competence_sung/Ruee_aceree/Scission_P4/Scission_P4.png",
            description: `Scission<br>Légendaire<br><br>Dégâts : 1626 % de l'Attaque de Jinwoo Temps de rechargement : 15 s Consommation de PM : 150 Inflige des dégâts élémentaires de ténèbres.<br>Inflige l'effet [En l'air] lorsque la dernière attaque touche. Jinwoo devient [invincible] pendant l'utilisation de cette compétence.<br>Lorsque cette compétence est utilisée, elle augmente le taux de coup critique de 15 % pendant 12 seconde(s).`
        }
    ]
};

// --- RUÉE DE DAGUE ---
skillsData["ruee_de_dague"] = {
    title: "Ruée de dague",
    variants: [
        {
            name: "Brèche",
            color: "#27ae60", // Vert (Vent)
            bgColor: "#f0fff4",
            image: "Competence_sung/Ruee_de_dague/Breche_P1/Breche_P1.png",
            description: `Brèche<br>Légendaire<br>Dégâts : 790 % de l'Attaque de Jinwoo Temps de rechargement : 20 s Consommation de PM : 200 Inflige des dégâts élémentaires de vent.<br>Inflige des dégâts de Bris lourds. Lorsque cette compétence touche sa cible, elle lui inflige l'effet [En l'air].<br>[Renverse] la cible lorsque la dernière attaque la touche. Lorsque cette compétence touche sa cible, elle augmente les Dégâts de coup critique reçus par la cible de 2 % pendant 10 seconde(s) (cumulable jusqu'à 7 fois).<br>Les dégâts augmentent de 50 % lorsque des ennemis sont attaqués avec leur faiblesse élémentaire.`
        },
        {
            name: "Dispersion",
            color: "#8e44ad", // Violet (Ténèbres)
            bgColor: "#f9f0ff",
            image: "Competence_sung/Ruee_de_dague/Dispersion_P2/Dispersion_P2.png",
            description: `Dispersion<br>Légendaire<br><br>Dégâts : 908 % de l'Attaque de Jinwoo Temps de rechargement : 20 s Consommation de PM : 200 Inflige des dégâts élémentaires de ténèbres.<br>Inflige des dégâts de Bris tout-puissants. Inflige l'effet [En l'air] lorsque cette compétence touche sa cible.<br>Lorsque votre attaque touche un ennemi sans jauge de bris, elle augmente les dégâts de Dispersion de 240 % pendant 7 seconde(s).`
        },
        {
            name: "Explosion",
            color: "#e74c3c", // Rouge (Feu)
            bgColor: "#fff5f5",
            image: "Competence_sung/Ruee_de_dague/Explosion_P3/Explosion_P3.png",
            description: `Explosion<br>Légendaire<br><br>Dégâts : 1474 % de l'Attaque de Jinwoo Temps de rechargement : 20 s Consommation de PM : 200 Inflige des dégâts élémentaires de feu.<br>Inflige des dégâts de Bris tout-puissants. Lorsque la dernière attaque touche sa cible, elle lui inflige l'effet [En l'air].<br>Lorsque cette compétence est utilisée, un [Bouclier] est appliqué. Lorsque cette compétence touche sa cible, elle lui inflige des dégâts supplémentaires équivalents à 100 % de l'Attaque.<br>[Bouclier]<br><br>Crée un [Bouclier] équivalent à 50 % des PV max de l'utilisateur.<br>Durée : 5 seconde(s)`
        },
        {
            name: "Glace gelée",
            color: "#3498db", // Bleu (Eau)
            bgColor: "#f0f7ff",
            image: "Competence_sung/Ruee_de_dague/Glace_gelee_P4/Glace_gelee_P4.png",
            description: `Glace gelée<br>Légendaire<br><br>Dégâts : 458 % de l'Attaque de Jinwoo Temps de rechargement : 20 s Consommation de PM : 200 Inflige des dégâts élémentaires d'eau.<br>Inflige des dégâts de Bris tout-puissants. Lorsque cette compétence touche sa cible, elle lui applique l'effet [Engelure].<br>Augmente de 10 % les dégâts infligés aux cibles situées dans un rayon de 5 m.<br>[Engelure]<br><br>Inflige des dégâts équivalents à 300 % de l'Attaque de l'utilisateur toutes les 3 seconde(s).<br><br>Durée : 3 seconde(s)`
        }
    ]
};

// --- TOUCHER DU MAÎTRE ---
skillsData["toucher_du_maitre"] = {
    title: "Toucher du maître",
    variants: [
        {
            name: "Absorption",
            color: "#34495e", // Gris/Bleu foncé (Neutre/Physique)
            bgColor: "#f2f4f6",
            image: "Competence_sung/Toucher_du_maitre/Absorption_P1/Absorption_P1.png",
            description: `Absorption<br>Légendaire<br><br>Dégâts : 935 % de l'Attaque de Jinwoo Temps de rechargement : 15 s Consommation de PM : 150 Lorsque la première attaque touche, elle inflige l'effet [En l'air].<br>Lorsque la dernière attaque touche la cible, elle la [renverse].<br>Lorsque cette compétence touche sa cible, l'utilisateur récupère 7.5 % de ses PM et sa jauge de puissance se remplit de 7.5 % (s'active au maximum 3 fois).`
        },
        {
            name: "Attaque finale",
            color: "#34495e", // Gris/Bleu foncé (Neutre/Physique)
            bgColor: "#f2f4f6",
            image: "Competence_sung/Toucher_du_maitre/Attaque_finale_P2/Attaque_finale_P2.png",
            description: `Attaque finale<br>Légendaire<br><br>Dégâts : 2406 % de l'Attaque de Jinwoo Temps de rechargement : 20 s Consommation de PM : 200 Lorsque la dernière attaque touche la cible, elle lui inflige l'effet [À terre].<br>Lorsque cette compétence touche sa cible, elle lui inflige l'effet [Défense réduite].<br>[Défense réduite]<br><br>Réduit la Défense de la cible de 20 %.<br>Durée : 12 seconde(s)`
        },
        {
            name: "Libération",
            color: "#34495e", // Gris/Bleu foncé (Neutre/Physique)
            bgColor: "#f2f4f6",
            image: "Competence_sung/Toucher_du_maitre/Liberation_P3/Liberation_P3.png",
            description: `Libération<br>Légendaire<br><br>Dégâts : 1095 % de l'Attaque de Jinwoo Temps de rechargement : 10 s Consommation de PM : 100 Lorsque cette compétence touche sa cible, elle lui inflige l'effet [À terre].<br>Cette compétence est utilisable jusqu'à 2 fois. Lorsque cette compétence touche sa cible, l'Attaque de Jinwoo augmente de 5 % pendant 12 seconde(s) (cumulable jusqu'à 2 fois).<br>Lorsque cette compétence touche sa cible, elle active Effondrement et réinitialise son temps de rechargement, et augmente les dégâts de Effondrement de 30 % pendant 5 seconde(s) (temps de rechargement : 20 seconde(s)).`
        },
        {
            name: "Trou noir",
            color: "#34495e", // Gris/Bleu foncé (Neutre/Physique)
            bgColor: "#f2f4f6",
            image: "Competence_sung/Toucher_du_maitre/Trou_noir_P4/Trou_noir_P4.png",
            description: `Trou noir<br>Légendaire<br>Dégâts : 50 % de l'Attaque de Jinwoo Temps de rechargement : 15 s Consommation de PM : 150 En fonction du nombre de cibles touchées avec cette compétence, augmente les dégâts infligés aux monstres de type Normal de 20 % (jusqu'à 10 cible(s)).`
        }
    ]
};

// --- VÉRITÉ : MUTILATION (Ultime) ---
skillsData["verite_mutilation"] = {
    title: "Vérité : Mutilation",
    variants: [
        {
            name: "Vérité : Mutilation",
            color: "#8e44ad", // Violet (Ténèbres / Ombre)
            bgColor: "#f9f0ff",
            image: "Competence_sung/Verite_mutilation/Verite_mutilation.png",
            description: `Vérité : Mutilation<br>Niv. 10 Compétence ultime<br><br>Après s'être caché dans l'ombre, Jinwoo entaille toute la zone autour de lui.<br><br>Dégâts : 6239.34 % de l'Attaque de Jinwoo. Temps de rechargement : 60 s Consommation de la jauge de puissance : 100 %`
        }
    ]
};

// --- OMBRE : TRAGÉDIE (Ultime) ---
skillsData["ombre_tragedie"] = {
    title: "Ombre : Tragédie",
    variants: [
        {
            name: "Ombre : Tragédie",
            color: "#8e44ad", // Violet (Ténèbres / Ombre)
            bgColor: "#f9f0ff",
            image: "Competence_sung/Ombre_tragedie/Ombre_tragedie.png",
            description: `Ombre : Tragédie<br>Niv. 10 Compétence ultime<br><br>En une fraction de seconde, Jinwoo taillade l'ennemi plusieurs fois, puis il se place derrière l'ennemi pour le poignarder violemment.<br><br>Dégâts : 5021.46 % de l'Attaque de Jinwoo. Temps de rechargement : 60 s Consommation de la jauge de puissance : 100 %`
        }
    ]
};

// --- DOMAINE DU ROI (Ultime) ---
skillsData["domaine_du_roi"] = {
    title: "Domaine du roi",
    variants: [
        {
            name: "Annihilation flamboyante",
            color: "#e74c3c", // Rouge (Feu)
            bgColor: "#fff5f5",
            image: "Competence_sung/Domaine_du_roi/Annihilation_flamboyante_P1/Annihilation_flamboyante_P1.png",
            description: `Annihilation flamboyante<br>Légendaire<br><br>Dégâts : 3282 % de l'Attaque de Jinwoo<br><br>Temps de rechargement : 60 s<br><br>Consommation de la jauge de puissance : 100 %<br><br>Élément : Inflige des dégâts élémentaires de feu.`
        },
        {
            name: "Déflagration déferlante",
            color: "#3498db", // Bleu (Eau)
            bgColor: "#f0f7ff",
            image: "Competence_sung/Domaine_du_roi/Deflagration_deferlante_P2/Deflagration_deferlante_P2.png",
            description: `Déflagration déferlante<br>Légendaire<br><br>Dégâts : 3282 % de l'Attaque de Jinwoo<br><br>Temps de rechargement : 60 s<br><br>Consommation de la jauge de puissance : 100 %<br><br>Élément : Inflige des dégâts élémentaires d'eau.`
        },
        {
            name: "Point du jour",
            color: "#f1c40f", // Jaune (Lumière)
            bgColor: "#fffce8",
            image: "Competence_sung/Domaine_du_roi/Point_du_jour_P3/Point_du_jour_P3.png",
            description: `Point du jour<br>Légendaire<br><br>Dégâts : 3282 % de l'Attaque de Jinwoo<br><br>Temps de rechargement : 60 s<br><br>Consommation de la jauge de puissance : 100 %<br><br>Élément : Inflige des dégâts élémentaires de lumière.`
        },
        {
            name: "Tempête",
            color: "#27ae60", // Vert (Vent)
            bgColor: "#f0fff4",
            image: "Competence_sung/Domaine_du_roi/Tempete_P4/Tempete_P4.png",
            description: `Tempête<br>Légendaire<br><br>Dégâts : 3282 % de l'Attaque de Jinwoo<br><br>Temps de rechargement : 60 s<br><br>Consommation de la jauge de puissance : 100 %<br><br>Élément : Inflige des dégâts élémentaires de vent.`
        },
        {
            name: "Fin du jour",
            color: "#8e44ad", // Violet (Ténèbres)
            bgColor: "#f9f0ff",
            image: "Competence_sung/Fin_du_jour/Fin_du_jour.png",
            description: `Fin du jour<br>Légendaire<br><br>Dégats: 10094.89 % de L'Attaque de Jinwoo<br><br>Temps de rechargement: 60 s<br><br>Consommation de la jauge de puissance: 100 %<br><br>Élément : Inflige des dégats élémentaires de ténèbre`
        }
    ]
};

// --- EFFONDREMENT (QTE) ---
skillsData["effondrement"] = {
    title: "Effondrement",
    variants: [
        {
            name: "Attaque surprise",
            color: "#34495e", // Gris/Bleu foncé (Neutre/Physique)
            bgColor: "#f2f4f6",
            image: "Competence_sung/Effondrement/Attaque_surprise_P1/Attaque_surprise_P1.png",
            description: `Attaque surprise<br>Légendaire<br><br>Dégâts : 1105 % de l'Attaque de Jinwoo Temps de rechargement : 25 s Condition d'utilisation : réussir une attaque qui [renverse] la cible.<br>Inflige des dégâts élémentaires de Bris légers. Lorsque la dernière attaque touche sa cible, elle la [renverse].<br>Lorsque cette compétence touche sa cible, elle lui applique l'effet [Résonance].<br><br>[Résonance]<br><br>Lorsque la cible se retrouve en état de [bris], l'effet [Résonance] est dissipé et l'effet [Augmentation des dégâts] de Sung Jinwoo est activé.<br><br>Durée : 8 seconde(s)<br><br>[Augmentation des dégâts]<br><br>Augmente les dégâts de 20 %.<br><br>Durée : 20 seconde(s)`
        },
        {
            name: "Compression",
            color: "#34495e", // Gris/Bleu foncé (Neutre/Physique)
            bgColor: "#f2f4f6",
            image: "Competence_sung/Effondrement/Compression_P2/Compression_P2.png",
            description: `Compression<br>Légendaire<br><br>Dégâts : 852 % de l'Attaque de Jinwoo Temps de rechargement : 25 s Condition d'utilisation : réussir une attaque qui [renverse] la cible.<br>Lorsque la dernière attaque touche sa cible, elle la [renverse].<br>Lorsque la dernière attaque touche sa cible, sa jauge de [bris] baisse instantanément de 5 %.`
        },
        {
            name: "Surtension",
            color: "#e74c3c", // Rouge (Feu)
            bgColor: "#fff5f5",
            image: "Competence_sung/Effondrement/Surtension_P3/Surtension_P3.png",
            description: `Surtension<br>Légendaire<br><br>Dégâts : 872 % de l'Attaque de Jinwoo Temps de rechargement : 25 s Condition d'utilisation : réussir une attaque qui [renverse] la cible.<br>Inflige des dégâts élémentaires de feu. Lorsque la première attaque touche sa cible, elle la [renverse].<br>Lorsque la dernière attaque touche sa cible, elle lui applique l'effet [En l'air].<br>Lorsque cette compétence est utilisée, elle active un effet qui augmente les dégâts de Surtension de 15 %.<br>Durée : illimitée (cumulable jusqu'à 20 fois). Lorsque cette compétence touche sa cible avec un coup critique, 1 cumul de Surtension augmente les dégâts de 15 %.`
        },
        {
            name: "Violent orage",
            color: "#27ae60", // Vert (Vent)
            bgColor: "#f0fff4",
            image: "Competence_sung/Effondrement/Violent_orage_P4/Violent_orage_P4.png",
            description: `Violent orage<br>Légendaire<br><br>Dégâts : 1362 % de l'Attaque de Jinwoo Temps de rechargement : 25 s Condition d'utilisation : réussir une attaque qui [renverse] la cible.<br>Inflige des dégâts élémentaires de vent. Lorsque la dernière attaque touche sa cible, elle la [renverse].<br>Lorsque l'attaque de l'utilisateur touche un ennemi sans jauge de bris, les dégâts de Violent orage augmentent de 120 %.<br>Lorsque l'utilisateur touche un ennemi en état de [Bris], les dégâts de Violent orage augmentent de 160 %.`
        }
    ]
};

// --- FOULÉE DE L'OMBRE (QTE) ---
skillsData["foulee_de_l_ombre"] = {
    title: "Foulée de l'ombre",
    variants: [
        {
            name: "Foulée de l'ombre",
            color: "#8e44ad", // Violet (Ténèbres / Ombre)
            bgColor: "#f9f0ff",
            image: "Competence_sung/Light_Element.png", // <- Sans le ../
            style: "background-color: hsl(64, 96%, 51%); border-radius: 5px; padding: 5px;",
            description: `Foulée de l'ombre<br>Niv. 10 Compétences QTE<br><br>Jinwoo trouve une ouverture et se place derrière l'ennemi pour lui tendre un piège.<br><br>Dégâts : 327.42 % de l'Attaque de Jinwoo Temps de rechargement : 15 s Condition d'utilisation : réussir une [Évasion extrême], déclencher l'état [Bris] ou utiliser une [Compétence d'ombre] Active [Foulée de l'ombre] après utilisation.<br>Ralentit grandement l'ennemi pendant 3 secondes. Réduit la défense de l'ennemi de 60 % pendant 15 seconde(s).`
        }
    ]
};

// --- MORT (QTE) ---
skillsData["mort"] = {
    title: "Mort",
    variants: [
        {
            name: "Éviction",
            color: "#34495e", // Gris/Bleu foncé (Neutre/Physique)
            bgColor: "#f2f4f6",
            image: "Competence_sung/Mort/Eviction_P1/Eviction_P1.png",
            description: `Éviction<br>Légendaire<br><br>Dégâts : 942 % de l'Attaque de Jinwoo Temps de rechargement : 25 s Condition d'utilisation : réussir une attaque qui applique l'effet [En l'air].<br>Lorsque cette compétence touche sa cible, elle lui applique l'effet [En l'air].<br>Lors de l'utilisation d'Éviction, les PV de l'utilisateur sont consumés à hauteur de 15 % de ses PV actuels et les dégâts de ses compétences augmentent de 200 %.`
        },
        {
            name: "Extinction",
            color: "#34495e", // Gris/Bleu foncé (Neutre/Physique)
            bgColor: "#f2f4f6",
            image: "Competence_sung/Mort/Extinction_P2/Extinction_P2.png",
            description: `Extinction<br>Légendaire<br><br>Dégâts : 1034 % de l'Attaque de Jinwoo Temps de rechargement : 25 s Condition d'utilisation : réussir une attaque qui applique l'effet [En l'air].<br>Lorsque cette compétence touche sa cible, elle lui applique l'effet [En l'air].<br>Lorsque cette compétence touche sa cible, elle lui applique l'effet [Attaque réduite].<br><br>[Attaque réduite]<br><br>Réduit l'Attaque de la cible de 40 %.<br><br>Durée : 15 seconde(s)`
        },
        {
            name: "Frappe de glace",
            color: "#3498db", // Bleu (Eau)
            bgColor: "#f0f7ff",
            image: "Competence_sung/Mort/Frappe_de_glace_P3/Frappe_de_glace_P3.png",
            description: `Frappe de glace<br>Légendaire<br><br>Dégâts : 1192 % de l'Attaque de Jinwoo Temps de rechargement : 25 s Condition d'utilisation : réussir une attaque qui applique l'effet [En l'air].<br>Inflige des dégâts élémentaires d'eau. Lorsque cette compétence touche sa cible, elle lui applique l'effet [En l'air].<br>Lorsque cette compétence touche sa cible, elle lui applique l'effet [Gel].<br>Les dégâts infligés aux cibles soumises à l'effet [Gel] augmentent de 150 %.<br><br>[Gel]<br><br>Interrompt la cible.<br>Durée : 2 seconde(s)`
        },
        {
            name: "Grain",
            color: "#34495e", // Gris/Bleu foncé (Neutre/Physique)
            bgColor: "#f2f4f6",
            image: "Competence_sung/Mort/Grain_P4/Grain_P4.png",
            description: `Grain<br>Légendaire<br><br>Dégâts : 989 % de l'Attaque de Jinwoo Temps de rechargement : 25 s Condition d'utilisation : réussir une attaque appliquant l'effet [En l'air].<br>Inflige des dégâts de Bris moyens. Lorsque cette compétence touche sa cible, elle lui applique l'effet [En l'air].<br>Lorsque la dernière attaque touche sa cible, elle la [renverse]. Lorsque cette compétence touche sa cible, elle active l'effet [Corrosion].<br><br>[Corrosion]<br><br>Augmente l'efficacité de [Bris] de 12 %.<br><br>Durée : 8 seconde(s)`
        }
    ]
};

// --- FRAPPE FANTÔME ---
skillsData["frappe_fantome"] = {
    title: "Frappe fantôme",
    variants: [
        {
            name: "Frappe blitz",
            color: "#f1c40f", // Jaune (Lumière)
            bgColor: "#fffce8",
            image: "Competence_sung/Frappe_fantome/Frappe_blitz_P1/Frappe_blitz_P1.png",
            description: `Frappe blitz<br><br>Dégâts : 613 % de l'Attaque de Jinwoo Temps de rechargement : 20 s Consommation de PM : 200 Inflige des dégâts élémentaires de lumière.<br>Applique de l'Accumulation élémentaire moyenne. Lorsque cette compétence touche sa cible, elle lui inflige l'effet [En l'air].<br>Les dégâts de Surcharge de la compétence de base de lumière augmentent de 25 % pendant 15 seconde(s).`
        },
        {
            name: "Flash coupant",
            color: "#e74c3c", // Rouge (Feu)
            bgColor: "#fff5f5",
            image: "Competence_sung/Frappe_fantome/Flash_coupant_P2/Flash_coupant_P2.png",
            description: `Flash coupant<br><br>Dégâts : 753 % de l'Attaque de Jinwoo Temps de rechargement : 20 s Consommation de PM : 200 Inflige des dégâts élémentaires de feu.<br>Applique de l'Accumulation élémentaire moyenne. Lorsque cette compétence touche sa cible, elle lui inflige l'effet [En l'air].<br>Augmente les dégâts de Surcharge de la compétence d'arme de feu de l'utilisateur de 40 % pendant 15 seconde(s).`
        },
        {
            name: "Frappe rapide",
            color: "#27ae60", // Vert (Vent)
            bgColor: "#f0fff4",
            image: "Competence_sung/Frappe_fantome/Frappe_rapide_P3/Frappe_rapide_P3.png",
            description: `Frappe rapide<br><br>Dégâts : 993 % de l'Attaque de Jinwoo Temps de rechargement : 20 s Consommation de PM : 200 Inflige des dégâts élémentaires de vent.<br>Applique de l'Accumulation élémentaire moyenne. Lorsque cette compétence touche sa cible, elle lui inflige l'effet [En l'air].<br>Les dégâts infligés par Frappe rapide aux cibles affectées par la [Surcharge] de [Vent] augmentent de 45 %.`
        },
        {
            name: "Frappe silencieuse",
            color: "#8e44ad", // Violet (Ténèbres)
            bgColor: "#f9f0ff",
            image: "Competence_sung/Frappe_fantome/Frappe_silencieuse_P4/Frappe_silencieuse_P4.png",
            description: `Frappe silencieuse<br><br>Dégâts : 602 % de l'Attaque de Jinwoo Temps de rechargement : 20 s Consommation de PM : 200 Inflige des dégâts élémentaires de ténèbres.<br>Applique de l'Accumulation élémentaire moyenne. Lorsque cette compétence touche sa cible, elle lui inflige l'effet [En l'air].<br>Les dégâts de l'attaque de noyau de ténèbres de l'utilisateur augmentent de 135 % pendant 15 seconde(s).`
        },
        {
            name: "Frappe voilée",
            color: "#3498db", // Bleu (Eau)
            bgColor: "#f0f7ff",
            image: "Competence_sung/Frappe_fantome/Frappe_voilee_P5/Frappe_voilee_P5.png",
            description: `Frappe voilée<br><br>Dégâts : 889 % de l'Attaque de Jinwoo Temps de rechargement : 20 s Consommation de PM : 200 Inflige des dégâts élémentaires d'eau.<br>Applique de l'Accumulation élémentaire moyenne. Lorsque cette compétence touche sa cible, elle lui inflige l'effet [En l'air].<br>Les Dégâts de coup critique d'eau de l'utilisateur augmentent de 35 % pendant 15 seconde(s).`
        }
    ]
};