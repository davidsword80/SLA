const fs = require('fs');
const path = require('path');

const directoryPath = './'; 

const fichiersCibles = [
    "data_weapons_dark.js",
    "data_weapons_fire.js",
    "data_weapons_light.js",
    "data_weapons_water.js",
    "data_weapons_wind.js"
];

const elementsMap = {
    "dark": "tenebre",
    "fire": "feu",
    "light": "lumiere",
    "water": "eau",
    "wind": "vent"
};

function formaterNom(str) {
    return str.normalize("NFD").replace(/[\u0300-\u036f]/g, "") 
              .toLowerCase() 
              .replace(/œ/g, "oe")
              .replace(/æ/g, "ae")
              .replace(/['\s\-]/g, "_") 
              .replace(/_+/g, "_") 
              .replace(/_$/g, ""); 
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

        let regex = /name:\s*"([^"]+)"([\s\S]*?)rarity:\s*"([^"]+)"((?:(?!\bname:\s*")[\s\S])*?)image:\s*"([^"]+)"/g;

        let modifications = 0;

        let newContent = content.replace(regex, (match, name, middle1, rarity, middle2, oldImage) => {
            let nomDossier = formaterNom(name);
            let nomImageSeul = oldImage.split('/').pop().split('\\').pop();
            
            let dossierPrincipal = `Armes_Joueur_${rarity}`;
            
            let nouvelleImage = `${dossierPrincipal}/${elementFrancais}/${nomDossier}/${nomImageSeul}`;
            
            // LA VÉRIFICATION EST ICI : on modifie seulement si c'est différent
            if (oldImage !== nouvelleImage) {
                modifications++;
                return `name: "${name}"${middle1}rarity: "${rarity}"${middle2}image: "${nouvelleImage}"`;
            } else {
                return match; // On renvoie le texte exact d'origine, sans rien toucher
            }
        });

        if (modifications > 0) {
            fs.writeFileSync(path.join(directoryPath, file), newContent, 'utf8');
            console.log(`✅ [${elementFrancais.toUpperCase()}] Fichier mis à jour avec succès : ${file} (${modifications} armes modifiées)`);
        } else {
            console.log(`ℹ️  [${elementFrancais.toUpperCase()}] ${file} est déjà à jour (0 modification)`);
        }
    });
});