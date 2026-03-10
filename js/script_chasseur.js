const fs = require('fs');
const path = require('path');

const directoryPath = './'; 

const fichiersCibles = [
    "data_hunters_dark.js",
    "data_hunters_fire.js",
    "data_hunters_light.js",
    "data_hunters_water.js",
    "data_hunters_wind.js"
];

const elementsMap = {
    "dark": "tenebre",
    "fire": "feu",
    "light": "lumiere",
    "water": "eau",
    "wind": "vent"
};

function formaterNomDossier(str) {
    return str.normalize("NFD").replace(/[\u0300-\u036f]/g, "") 
              .toLowerCase() 
              .replace(/œ/g, "oe")
              .replace(/æ/g, "ae")
              .replace(/['\s\-]/g, "_") 
              .replace(/_+/g, "_") 
              .replace(/_$/g, ""); 
}

function formaterPremierMot(str) {
    let premierMot = str.split(/[\s\-]/)[0]; 
    return formaterNomDossier(premierMot);
}

function formaterPascalCase(str) {
    let cleanedStr = str.normalize("NFD").replace(/[\u0300-\u036f]/g, "").replace(/[']/g, "");
    return cleanedStr.split(/[\s\-]/).map(word => {
        if (!word) return "";
        return word.charAt(0).toUpperCase() + word.slice(1);
    }).join('');
}

fs.readdir(directoryPath, (err, files) => {
    if (err) return console.log('Erreur de lecture du dossier:', err);

    let jsFiles = files.filter(file => fichiersCibles.includes(file));

    jsFiles.forEach(file => {
        let content = fs.readFileSync(path.join(directoryPath, file), 'utf8');
        
        let elementFrancais = "";
        for (let key in elementsMap) {
            if (file.includes(`_${key}.js`)) {
                elementFrancais = elementsMap[key];
                break;
            }
        }

        let regex = /name:\s*"([^"]+)",\s*rarity:\s*"([^"]+)",([\s\S]*?)image:\s*"([^"]+)"([\s\S]*?)weaponImage:\s*"([^"]+)"([\s\S]*?)weaponName:\s*"([^"]+)"/g;

        let modifications = 0;

        let newContent = content.replace(regex, (match, name, rarity, middle1, oldImage, middle2, oldWeaponImage, middle3, weaponName) => {
            
            let nomDossierChasseur = formaterNomDossier(name);
            let nomDossierArme = formaterNomDossier(weaponName);
            let pascalCaseName = formaterPascalCase(name);
            
            let dossierPrincipal = `Chasseurs_${rarity}`;
            
            let nomImageChasseur = "";
            if (rarity === "SR") {
                nomImageChasseur = `${pascalCaseName}_Portrait_Body.png`;
            } else {
                nomImageChasseur = `${formaterPremierMot(name)}_art.png`;
            }
            let nouvelleImageChasseur = `${dossierPrincipal}/${elementFrancais}/${nomDossierChasseur}/${nomImageChasseur}`;
            
            let nomImageArmeSeul = `Relic_${pascalCaseName}_PortraitBig.png`;
            let nouvelleWeaponImage = `${dossierPrincipal}/${elementFrancais}/${nomDossierChasseur}/${nomDossierArme}/${nomImageArmeSeul}`;
            
            // LA VÉRIFICATION EST ICI : on modifie si l'image chasseur OU l'image arme est différente
            if (oldImage !== nouvelleImageChasseur || oldWeaponImage !== nouvelleWeaponImage) {
                modifications++;
                return `name: "${name}",\n    rarity: "${rarity}",${middle1}image: "${nouvelleImageChasseur}"${middle2}weaponImage: "${nouvelleWeaponImage}"${middle3}weaponName: "${weaponName}"`;
            } else {
                return match; // Aucun des deux chemins n'a changé, on ne fait rien
            }
        });

        if (modifications > 0) {
            fs.writeFileSync(path.join(directoryPath, file), newContent, 'utf8');
            console.log(`✅ [${elementFrancais.toUpperCase()}] Fichier mis à jour avec succès : ${file} (${modifications} chasseurs modifiés)`);
        } else {
            console.log(`ℹ️  [${elementFrancais.toUpperCase()}] ${file} est déjà à jour (0 modification)`);
        }
    });
});