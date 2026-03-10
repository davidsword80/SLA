document.addEventListener("DOMContentLoaded", () => {
    
    const baseFolder = "img/leak/";
    const mainContainer = document.getElementById("all-leaks-container");

    const leaksData = [
        {
            name: "AntQueen",
            folder: "AntQueen/",
            images: [
                "Artifact_Accessories_Bracelet_AntQueen.png",
                "Artifact_Accessories_Earring_AntQueen.png",
                "Artifact_Accessories_Necklace_AntQueen.png",
                "Artifact_Accessories_Ring_AntQueen.png",
                "Artifact_Equipments_Armor_AntQueen.png",
                "Artifact_Equipments_Boots_AntQueen.png",
                "Artifact_Equipments_Gloves_AntQueen.png",
                "Artifact_Equipments_Helmet_AntQueen.png",
                "Item_Icon_GuildArtifact_Bracelet_AntQueen_Select_Attack.png",
                "Item_Icon_GuildArtifact_Bracelet_AntQueen_Select_Defense.png",
                "Item_Icon_GuildArtifact_Bracelet_AntQueen_Select_HP.png"
            ]
        },
        {
            name: "GateKeeper",
            folder: "GateKeeper/",
            images: [
                "Artifact_Accessories_Bracelet_GateKeeper.png",
                "Artifact_Accessories_Earring_GateKeeper.png",
                "Artifact_Accessories_Necklace_GateKeeper.png",
                "Artifact_Accessories_Ring_GateKeeper.png",
                "Artifact_Accessories_Talisman_GateKeeper.png"
            ]
        },       
        {
            name: "Light7 Common",
            folder: "Light_7/",
            images: [
                "Artifact_Armor_Common_Light_7.png",
                "Artifact_Belt_Common_Light_7.png",
                "Artifact_Boots_Common_Light_7.png",
                "Artifact_Gloves_Common_Light_7.png",
                "Artifact_Helmet_Common_Light_7.png"
            ]
        },
        {
            name: "Light10 Common",
            folder: "Light_10/",
            images: [
                "Artifact_Armor_Common_Light_10.png",
                "Artifact_Belt_Common_Light_10.png",
                "Artifact_Boots_Common_Light_10.png",
                "Artifact_Gloves_Common_Light_10.png",
                "Artifact_Helmet_Common_Light_10.png"
            ]
        },        
        {
            name: "Mage",
            folder: "Mage/",
            images: [
                "Artifact_Accessories_Bracelet_Mage.png",
                "Artifact_Accessories_Earring_Mage.png",
                "Artifact_Accessories_Necklace_Mage.png",
                "Artifact_Accessories_Ring_Mage.png",
                "Artifact_Accessories_Ring_Story_MageElite.png",
                "Artifact_Accessories_Talisman_Mage.png"
            ]
        },
        {
            name: "Orc",
            folder: "Orc/",
            images: [
                "Artifact_Bracelet_Common_Orc_1.png",
                "Artifact_Earring_Common_Orc_1.png",
                "Artifact_Necklace_Common_Orc_1.png",
                "Artifact_Ring_Common_Orc_1.png",
                "Artifact_Talisman_Common_Orc_1.png"
            ]
        },        
        {
            name: "BlackMage",
            folder: "BlackMage/",
            images: [
                "Artifact_Equipments_Armor_BlackMage.png",
                "Artifact_Equipments_Belt_BlackMage.png",
                "Artifact_Equipments_Boots_BlackMage.png",
                "Artifact_Equipments_Gloves_BlackMage.png",
                "Artifact_Equipments_Helmet_BlackMage.png"
            ]
        },
        {
            name: "Erosion",
            folder: "Erosion/",
            images: [
                "Artifact_Equipments_Armor_Erosion.png",
                "Artifact_Equipments_Belt_Erosion.png",
                "Artifact_Equipments_Boots_Erosion.png",
                "Artifact_Equipments_Gloves_Erosion.png",
                "Artifact_Equipments_Helmet_Erosion.png"
            ]
        },
        {
            name: "Fachtna",
            folder: "Fachtna/",
            images: [
                "Artifact_Accessories_Bracelet_Fachtna.png",
                "Artifact_Accessories_Earring_Fachtna.png",
                "Artifact_Accessories_Necklace_Fachtna.png",
                "Artifact_Accessories_Ring_Fachtna.png",
                "Artifact_Equipments_Armor_Fachtna.png",
                "Artifact_Equipments_Boots_Fachtna.png",
                "Artifact_Equipments_Gloves_Fachtna.png",
                "Artifact_Equipments_Helmet_Fachtna.png",
                "Item_Icon_GuildArtifact_Bracelet_Fachtna_Select_Attack.png",
                "Item_Icon_GuildArtifact_Bracelet_Fachtna_Select_Defense.png",
                "Item_Icon_GuildArtifact_Bracelet_Fachtna_Select_HP.png"
            ]
        },
        {
            name: "Heavy6",
            folder: "Heavy6/",
            images: [
                "Artifact_Armor_Legendary_Heavy_6.png",
                "Artifact_Belt_Legendary_Heavy_6.png",
                "Artifact_Boots_Legendary_Heavy_6.png",
                "Artifact_Gloves_Legendary_Heavy_6.png",
                "Artifact_Helmet_Legendary_Heavy_6.png"
            ]
        },
        {
            name: "Heavy8",
            folder: "Heavy8/",
            images: [
                "Artifact_Armor_Common_Heavy_8.png",
                "Artifact_Belt_Common_Heavy_8.png",
                "Artifact_Boots_Common_Heavy_8.png",
                "Artifact_Gloves_Common_Heavy_8.png",
                "Artifact_Helmet_Common_Heavy_8.png"
            ]
        },
        {
            name: "Heavy10",
            folder: "Heavy10/",
            images: [
                "Artifact_Armor_Legendary_Heavy_10.png",
                "Artifact_Belt_Legendary_Heavy_10.png",
                "Artifact_Boots_Legendary_Heavy_10.png",
                "Artifact_Gloves_Legendary_Heavy_10.png",
                "Artifact_Helmet_Legendary_Heavy_10.png"
            ]
        },
        {
            name: "HugeStatue",
            folder: "HugeStatue/",
            images: [
                "Artifact_Accessories_Bracelet_HugeStatue.png",
                "Artifact_Accessories_Earring_HugeStatue.png",
                "Artifact_Accessories_Necklace_HugeStatue.png",
                "Artifact_Accessories_Ring_HugeStatue.png",
                "Artifact_Equipments_Armor_HugeStatue.png",
                "Artifact_Equipments_Boots_HugeStatue.png",
                "Artifact_Equipments_Gloves_HugeStatue.png",
                "Artifact_Equipments_Helmet_HugeStatue.png",
                "Item_Icon_GuildArtifact_Bracelet_HugeStatue_Select_Attack.png",
                "Item_Icon_GuildArtifact_Bracelet_HugeStatue_Select_Defense.png",
                "Item_Icon_GuildArtifact_Bracelet_HugeStatue_Select_HP.png"
            ]
        },
        {
            name: "Light7",
            folder: "Light7/",
            images: [
                "Artifact_Armor_Legendary_Light_7.png",
                "Artifact_Belt_Legendary_Light_7.png",
                "Artifact_Boots_Legendary_Light_7.png",
                "Artifact_Gloves_Legendary_Light_7.png",
                "Artifact_Helmet_Legendary_Light_7.png"
            ]
        },
        {
            name: "Light10",
            folder: "Light10/",
            images: [
                "Artifact_Armor_Legendary_Light_10.png",
                "Artifact_Belt_Legendary_Light_10.png",
                "Artifact_Boots_Legendary_Light_10.png",
                "Artifact_Gloves_Legendary_Light_10.png",
                "Artifact_Helmet_Legendary_Light_10.png"
            ]
        },
        {
            name: "Matériaux",
            folder: "arte/",
            images: [
                "Item_Artifact_LevelUP_3.png",
                "Item_Artifact_OptionFix_1.png",
                "Item_Artifact_OptionReroll_1.png",
                "Item_Artifact_Protection_1.png",
                "Item_ArtifactCraft_LevelMaterial02.png",
                "Item_ArtifactEnchant_Common_ShopIcon.png",
                "Item_ArtifactEnchantFix_Common_ShopIcon.png",
                "Item_ArtifactEnhance_Common_ShopIcon.png",
                "Item_ArtifactEnhance_Epic_ShopIcon.png",
                "Item_ArtifactEnhance_Rare_ShopIcon.png",
                "Item_ArtifactReforge_ReforgeStoneLegend_120.png"
            ]
        },
        {
            name: "Ceintures (Belt)",
            folder: "Belt/",
            images: [
                "Artifact_Belt_Common_Heavy_6.png",
                "Artifact_Belt_Common_Heavy_8.png",
                "Artifact_Belt_Common_Heavy_9.png",
                "Artifact_Belt_Common_Light_7.png",
                "Artifact_Belt_Common_Light_9.png",
                "Artifact_Belt_Common_Light_10.png",
                "Artifact_Belt_DemonCastle_Heavy_1.png",
                "Artifact_Belt_DemonCastle_Light_1.png",
                "Artifact_Belt_Legendary_Heavy_6.png",
                "Artifact_Belt_Legendary_Heavy_7.png",
                "Artifact_Belt_Legendary_Heavy_8.png",
                "Artifact_Belt_Legendary_Heavy_9.png",
                "Artifact_Belt_Legendary_Heavy_10.png",
                "Artifact_Belt_Legendary_Light_6.png",
                "Artifact_Belt_Legendary_Light_7.png",
                "Artifact_Belt_Legendary_Light_8.png",
                "Artifact_Belt_Legendary_Light_9.png",
                "Artifact_Belt_Legendary_Light_10.png",
                "Artifact_Equipments_Belt_BlackMage.png",
                "Artifact_Equipments_Belt_CrimsonKnight.png",
                "Artifact_Equipments_Belt_Erosion.png",
                "Artifact_Equipments_Belt_NoviceMage.png",
                "Artifact_Equipments_Belt_WhiteFlame.png",
                "Artifact_Equipments_Belt_WhiteFlame_Hard.png"
            ]
        },
        {
            name: "Reliques",
            folder: "relic/",
            images: [
                "Relic_SSR_Dagger.png",
                "Relic_SSR_Dagger_Portrait.png",
                "Relic_SSR_Dagger_PortraitBig.png",
                "Relic_SSR_Knuckle.png",
                "Relic_SSR_Knuckle_Portrait.png",
                "Relic_SSR_Knuckle_PortraitBig.png",
                "Relic_SSR_MagicBook.png",
                "Relic_SSR_MagicBook_Portrait.png",
                "Relic_SSR_MagicBook_PortraitBig.png",
                "Relic_SSR_OneHandAxe.png",
                "Relic_SSR_OneHandAxe_Portrait.png",
                "Relic_SSR_OneHandAxe_PortraitBig.png",
                "Relic_SSR_PublicEvolve.png",
                "Relic_SSR_PublicEvolve_Portrait.png",
                "Relic_SSR_PublicEvolve_PortraitBig.png",
                "Relic_SSR_Rapier.png",
                "Relic_SSR_Rapier_Portrait.png",
                "Relic_SSR_Rapier_PortraitBig.png",
                "Relic_SSR_Shield.png",
                "Relic_SSR_Shield_Portrait.png",
                "Relic_SSR_Shield_PortraitBig.png",
                "Relic_SSR_Staff.png",
                "Relic_SSR_Staff_Portrait.png",
                "Relic_SSR_Staff_PortraitBig.png",
                "Relic_SSR_Sword.png",
                "Relic_SSR_Sword_Portrait.png",
                "Relic_SSR_Sword_PortraitBig.png",
                "Relic_SSR_Whip.png",
                "Relic_SSR_Whip_Portrait.png",
                "Relic_SSR_Whip_PortraitBig.png"
            ]
        },
        {
            name: "Ombres",
            folder: "shadow/",
            images: [
                "Shadow_HighOrc_GreatSword_Portrait.png",
                "Shadow_HighOrc_LongSword_Portrait.png",
                "Shadow_HighOrc_Unarmed_Portrait.png",
                "Shadow_Knight_ShieldAxe_Portrait.png"
            ]
        },
        {
            name: "Talismans",
            folder: "Talisman/",
            images: [
                "Artifact_Accessories_Talisman_DaemonLord.png",
                "Artifact_Accessories_Talisman_GateKeeper.png",
                "Artifact_Accessories_Talisman_Mage.png",
                "Artifact_Accessories_Talisman_WhiteFlame.png",
                "Artifact_Accessories_Talisman_WhiteFlame_Hard.png",
                "Artifact_Talisman_Common_Beast_1.png",
                "Artifact_Talisman_Common_Bone_1.png",
                "Artifact_Talisman_Common_Darkness_1.png",
                "Artifact_Talisman_Common_DemonCastle_1.png",
                "Artifact_Talisman_Common_Fire_1.png",
                "Artifact_Talisman_Common_Light_1.png",
                "Artifact_Talisman_Common_Naga_1.png",
                "Artifact_Talisman_Common_Nature_1.png",
                "Artifact_Talisman_Common_Orc_1.png",
                "Artifact_Talisman_Common_Water_1.png",
                "Artifact_Talisman_Common_Wind_1.png"
            ]
        },
        {
            name: "Rang GrandMarshal",
            folder: "GrandMarshal/",
            images: [
                "Shadow_ArchLich_Boss_GrandMarshal.png",
                "Shadow_ArchLich_Boss_GrandMarshal_Big.png",
                "Shadow_ArchLich_Boss_GrandMarshal_Body.png",
                "Shadow_ArchLich_Boss_GrandMarshal_Portrait.png",
                "Shadow_ArchLich_Boss_GrandMarshal_Small.png",
                "Shadow_Baruka_Boss_GrandMarshal.png",
                "Shadow_Baruka_Boss_GrandMarshal_Big.png",
                "Shadow_Baruka_Boss_GrandMarshal_Body.png",
                "Shadow_Baruka_Boss_GrandMarshal_Portrait.png",
                "Shadow_Baruka_Boss_GrandMarshal_Small.png",
                "Shadow_BlueGolem_Boss_GrandMarshal.png",
                "Shadow_BlueGolem_Boss_GrandMarshal_Big.png",
                "Shadow_BlueGolem_Boss_GrandMarshal_Body.png",
                "Shadow_BlueGolem_Boss_GrandMarshal_Portrait.png",
                "Shadow_BlueGolem_Boss_GrandMarshal_Small.png",
                "Shadow_GatekeeperCerberus_Boss_GrandMarshal.png",
                "Shadow_GatekeeperCerberus_Boss_GrandMarshal_Big.png",
                "Shadow_GatekeeperCerberus_Boss_GrandMarshal_Body.png",
                "Shadow_GatekeeperCerberus_Boss_GrandMarshal_Portrait.png",
                "Shadow_GatekeeperCerberus_Boss_GrandMarshal_Small.png",
                "Shadow_IceBear_Boss_GrandMarshal.png",
                "Shadow_IceBear_Boss_GrandMarshal_Big.png",
                "Shadow_IceBear_Boss_GrandMarshal_Body.png",
                "Shadow_IceBear_Boss_GrandMarshal_Portrait.png",
                "Shadow_IceBear_Boss_GrandMarshal_Small.png",
                "Shadow_IceWitchBeste_Boss_GrandMarshal.png",
                "Shadow_IceWitchBeste_Boss_GrandMarshal_Big.png",
                "Shadow_IceWitchBeste_Boss_GrandMarshal_Body.png",
                "Shadow_IceWitchBeste_Boss_GrandMarshal_Portrait.png",
                "Shadow_IceWitchBeste_Boss_GrandMarshal_Small.png",
                "Shadow_Igris_GrandMarshal.png",
                "Shadow_Igris_GrandMarshal_Big.png",
                "Shadow_Igris_GrandMarshal_Body.png",
                "Shadow_Igris_GrandMarshal_Portrait.png",
                "Shadow_Igris_GrandMarshal_Small.png",
                "Shadow_Iron_GrandMarshal.png",
                "Shadow_Iron_GrandMarshal_Big.png",
                "Shadow_Iron_GrandMarshal_Body.png",
                "Shadow_Iron_GrandMarshal_Portrait.png",
                "Shadow_Iron_GrandMarshal_Small.png",
                "Shadow_Kaisellin_Boss_GrandMarshal.png",
                "Shadow_Kaisellin_Boss_GrandMarshal_Big.png",
                "Shadow_Kaisellin_Boss_GrandMarshal_Body.png",
                "Shadow_Kaisellin_Boss_GrandMarshal_Portrait.png",
                "Shadow_Kaisellin_Boss_GrandMarshal_Small.png",
                "Shadow_Kargalgan_GrandMarshal.png",
                "Shadow_Kargalgan_GrandMarshal_Big.png",
                "Shadow_Kargalgan_GrandMarshal_Body.png",
                "Shadow_Kargalgan_GrandMarshal_Portrait.png",
                "Shadow_Kargalgan_GrandMarshal_Small.png",
                "Shadow_KingAnt_Boss_GrandMarshal.png",
                "Shadow_KingAnt_Boss_GrandMarshal_Big.png",
                "Shadow_KingAnt_Boss_GrandMarshal_Body.png",
                "Shadow_KingAnt_Boss_GrandMarshal_Portrait.png",
                "Shadow_KingAnt_Boss_GrandMarshal_Small.png",
                "Shadow_Naga_Boss_GrandMarshal.png",
                "Shadow_Naga_Boss_GrandMarshal_Big.png",
                "Shadow_Naga_Boss_GrandMarshal_Body.png",
                "Shadow_Naga_Boss_GrandMarshal_Portrait.png",
                "Shadow_Naga_Boss_GrandMarshal_Small.png",
                "Shadow_Uros_Boss_GrandMarshal.png",
                "Shadow_Uros_Boss_GrandMarshal_Big.png",
                "Shadow_Uros_Boss_GrandMarshal_Body.png",
                "Shadow_Uros_Boss_GrandMarshal_Portrait.png",
                "Shadow_Uros_Boss_GrandMarshal_Small.png"
            ]
        },
        {
            name: "Pets",
            folder: "banner/",
            images: [
                "Gacha_Pet_260212_Sub_Banner_Front.png"
            ]                
        },
        {
            name: "Runes",
            folder: "rune/",
            images: [
                "Rune_Icon_Passive_17.png",
                "Rune_Icon_Passive_21.png",
                "Rune_Icon_Passive_25.png",
                "Rune_Icon_Passive_31.png",
                "Rune_Icon_Passive_32.png",
                "Rune_Icon_Passive_34.png",
                "Rune_Icon_Passive_36.png",
                "Rune_Icon_Passive_42.png",
                "Rune_Icon_Passive_43.png",
                "Rune_Icon_Passive_55.png",
                "Rune_Icon_Passive_59.png",
                "Rune_Icon_Passive_62.png",
                "Rune_Icon_Passive_65.png"
            ]
        }
    ];

    mainContainer.innerHTML = "";

    leaksData.forEach(dataItem => {
        // Liste des dossiers où on ne veut pas afficher le mot "Set"
        const categoriesSansSet = ["Matériaux", "Pets", "Ceintures (Belt)", "Reliques", "Ombres", "Talismans", "Runes", "Rang GrandMarshal"];
        
        // Si le nom est dans la liste, le préfixe est vide. Sinon, c'est "Set ".
        const prefix = categoriesSansSet.includes(dataItem.name) ? "" : "Set ";

        const titleHTML = `<h2 style="margin-top: 40px; color: red;">Leaks - ${prefix}${dataItem.name}</h2>`;
        mainContainer.insertAdjacentHTML('beforeend', titleHTML);

        const gridSection = document.createElement("section");
        gridSection.className = "item-list";

        dataItem.images.forEach(nomImage => {
            const imagePath = `${baseFolder}${dataItem.folder}${nomImage}`;
            
            // On a simplement enveloppé l'image dans une balise <a>
            const itemHTML = `
                <div class="item">
                    <a href="${imagePath}" target="_blank">
                        <img src="${imagePath}" alt="${nomImage}">
                    </a>
                    <h4 style="font-size: 0.8rem; word-break: break-all;">${nomImage}</h4>
                </div>
            `;
            gridSection.insertAdjacentHTML('beforeend', itemHTML);
        });

        mainContainer.appendChild(gridSection);
    });
});