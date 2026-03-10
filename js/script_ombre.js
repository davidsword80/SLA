const fs = require('fs');
const path = require('path');

const directoryPath = './'; 

// On cible uniquement le fichier des ombres
const fichiersCibles = [
    "data_shadows.js"
];

// Fonction pour extraire et nettoyer le nom de l'ombre (ex: "Ombre : Ber" -> "Ber")
function formaterNomOmbre(str) {
    let nom = str.replace(/Ombre\s*:\s*/i, "").trim();
    
    nom = nom.normalize("NFD").replace(/[\u0300-\u036f]/g, "") 
             .replace(/œ/g, "oe")
             .replace(/æ/g, "ae")
             .replace(/['\s\-]/g, "_") 
             .replace(/_+/g, "_") 
             .replace(/_$/g, ""); 
             
    if (nom.length > 0) {
        nom = nom.charAt(0).toUpperCase() + nom.slice(1).toLowerCase();
    }
    
    return nom;
}

// Fonction pour extraire et nettoyer le nom de l'arme (ex: "Arme : Faux de l'ombre (Reproduction)" -> "faux_de_l_ombre_reproduction")
function formaterNomArme(str) {
    let nom = str.replace(/Arme\s*:\s*/i, "").trim();
    nom = nom.replace(/[:()]/g, ""); // Retire les deux-points et les parenthèses
    
    return nom.normalize("NFD").replace(/[\u0300-\u036f]/g, "") 
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
        
        // Nouvelle Regex qui capture également shadowGradient et weaponGradient
        let regex = /shadowName:\s*"([^"]+)"([\s\S]*?)shadowImage:\s*"([^"]+)"([\s\S]*?)shadowGradient:\s*"([^"]+)"((?:(?!\bshadowName:\s*")[\s\S])*?)weaponName:\s*"([^"]+)"([\s\S]*?)weaponImage:\s*"([^"]+)"([\s\S]*?)weaponGradient:\s*"([^"]+)"/g;

        let modifications = 0;
        const nouveauGradient = "linear-gradient(90deg, #8e44ad, #000)";

        let newContent = content.replace(regex, (match, shadowName, middle1, oldShadowImage, middle2, oldShadowGradient, middle3, weaponName, middle4, oldWeaponImage, middle5, oldWeaponGradient) => {
            
            // --- 1. Gestion de l'image de l'ombre ---
            let nomOmbre = formaterNomOmbre(shadowName);
            let nomImageOmbre = `${nomOmbre}.png`;
            let nouvelleImageOmbre = `Ombres/${nomOmbre}/${nomImageOmbre}`;
            
            // --- 2. Gestion de l'image de l'arme ---
            let nomArme = formaterNomArme(weaponName);
            let nomImageArme = `${nomArme}.png`;
            let nouvelleImageArme = `Ombres/${nomOmbre}/${nomArme}/${nomImageArme}`;
            
            // Vérification intelligente : on modifie si les images OU les gradients ne correspondent pas
            if (oldShadowImage !== nouvelleImageOmbre || oldWeaponImage !== nouvelleImageArme || oldShadowGradient !== nouveauGradient || oldWeaponGradient !== nouveauGradient) {
                modifications++;
                return `shadowName: "${shadowName}"${middle1}shadowImage: "${nouvelleImageOmbre}"${middle2}shadowGradient: "${nouveauGradient}"${middle3}weaponName: "${weaponName}"${middle4}weaponImage: "${nouvelleImageArme}"${middle5}weaponGradient: "${nouveauGradient}"`;
            } else {
                return match;
            }
        });

        if (modifications > 0) {
            fs.writeFileSync(path.join(directoryPath, file), newContent, 'utf8');
            console.log(`✅ Fichier mis à jour avec succès : ${file} (${modifications} ombres modifiées)`);
        } else {
            console.log(`ℹ️  ${file} est déjà à jour (0 modification)`);
        }
    });
});