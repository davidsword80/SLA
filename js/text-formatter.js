// ============================================================
//  text-formatter.js
//  Applique automatiquement la mise en couleur sur les textes
//  des passifs/armes avant injection dans le DOM.
//
//  IMPORTANT : Ce fichier DOIT être chargé AVANT les data_hunters_*.js
//  et data_weapons_*.js dans le HTML.
// ============================================================


// ── PALETTE DE COULEURS ───────────────────────────────────────────────────────

const COLOR_SKILL          = "#fac700";   // compétences & mots-clés d'attaque
const COLOR_BUFF           = "#63fac7";   // [effets] entre crochets
const COLOR_BUFF_EXCEPTION = "#ff8740";   // [Bris], [Accumulation], Surcharge
const COLOR_STAT           = "#ffdf7d";   // %, durées, cumulable, illimité


// ── Couleurs des noms d'éléments dans le texte ───────────────────────────────
const ELEMENT_TEXT_COLORS = {
    "eau":      "#4b96fa",
    "vent":     "#32c732",
    "feu":      "#e64b4b",
    "lumière":  "#fac700",
    "ténèbres": "#af63af",
};


// ── [Effets] qui prennent la couleur ORANGE au lieu du turquoise ──────────────
const BUFF_EXCEPTIONS = [
    "Bris",
    "Accumulation élémentaire",
];

// ── Mots hors crochets → orange ───────────────────────────────────────────────
const ORANGE_KEYWORDS_STANDALONE = [
    "Surcharge",
];

// ── Mots-clés d'attaque/jeu → jaune doré ─────────────────────────────────────
const SKILL_KEYWORDS = [
    "attaque de noyau",
    "attaques de noyau",
    "compétence de base",
    "compétences de base",
    "compétence ultime",
    "compétences ultime",
    "attaque normale",
    "attaques normales",
    "esquive parfaite",
    "jauge de puissance",
    "jauge de noyau",
    "coup critique",
    "coups critiques",
];

// ─────────────────────────────────────────────────────────────────────────────

function escapeRegex(str) {
    return str.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
}

/**
 * fmt(rawText, element)
 *
 * Règles appliquées dans l'ordre :
 *  1. **Nom**                     → gras + jaune doré (#fac700)
 *  2. [Bris], [Accum. élém.]      → orange (#ff8740)
 *  3. [Autre effet]               → turquoise (#63fac7)
 *  4. "Surcharge" hors crochets   → orange (#ff8740)
 *  5. Mots-clés d'attaque         → jaune doré (#fac700)
 *  6. Noms d'éléments (eau, vent, feu, lumière, ténèbres) → couleur de l'élément
 *  7. Valeurs stats (%, durées…)  → jaune clair (#ffdf7d)
 *  8. "illimité" / "cumulable…"   → jaune clair (#ffdf7d)
 */
function fmt(rawText, element = "") {
    let text = rawText;

    // 1. **compétence** → gras jaune doré
    text = text.replace(/\*\*(.+?)\*\*/g,
        '<strong style="color:#fac700;">$1</strong>'
    );

    // 2 & 3. [effets entre crochets]
    text = text.replace(/\[([^\]]+)\]/g, function(match, effectName) {
        var isException = BUFF_EXCEPTIONS.some(function(exc) {
            return effectName.toLowerCase().includes(exc.toLowerCase());
        });
        var color = isException ? "#ff8740" : "#63fac7";
        return '<span style="color:' + color + '; font-weight:700;">[' + effectName + ']</span>';
    });

    // 4. Surcharge standalone → orange
    ORANGE_KEYWORDS_STANDALONE.forEach(function(kw) {
        var regex = new RegExp('(?<![\\w>\\[])' + escapeRegex(kw) + '(?![\\w\\]])', 'gi');
        text = text.replace(regex,
            '<span style="color:#ff8740; font-weight:700;">' + kw + '</span>'
        );
    });

    // 5. Mots-clés d'attaque → jaune doré
    SKILL_KEYWORDS.forEach(function(kw) {
        var regex = new RegExp('(?<![<"\\w])' + escapeRegex(kw) + '(?![\\w])', 'gi');
        text = text.replace(regex,
            '<span style="color:#fac700; font-weight:700;">' + kw + '</span>'
        );
    });

    // 6. Noms d'éléments dans le texte
    //    Colorise "eau", "vent", "feu", "lumière", "ténèbres" (insensible à la casse)
    //    dans les contextes : d'eau, de vent, de feu, élément Eau, dégâts Eau, etc.
    //    On cherche le mot isolé (word boundary étendu pour les accents)
    Object.keys(ELEMENT_TEXT_COLORS).forEach(function(elem) {
        var color = ELEMENT_TEXT_COLORS[elem];
        // Regex : le mot élément précédé d'un espace/ponctuation, pas déjà dans une balise
        var regex = new RegExp(
            '(?<=[ \'(>])(' + escapeRegex(elem) + ')(?=[\\s,.:;)<!\\/]|$)',
            'gi'
        );
        text = text.replace(regex,
            '<span style="color:' + color + '; font-weight:700;">$1</span>'
        );
    });

    // 7. Valeurs numériques de stats → jaune clair
    text = text.replace(
        /(\d+(?:[.,]\d+)?)\s*(%|seconde\(s\)|secondes?|fois|cumul\(s\)|cumuls?|PM|PV)/g,
        '<span style="color:#ffdf7d; font-weight:700;">$1 $2</span>'
    );

    // 8. "illimité" → jaune clair
    text = text.replace(
        /\billimité(e?)\b/gi,
        '<span style="color:#ffdf7d; font-weight:700;">illimité$1</span>'
    );

    // 8b. "cumulable jusqu'à X" → jaune clair
    text = text.replace(
        /(cumulable jusqu'à\s*)(\d+)/gi,
        '<span style="color:#ffdf7d; font-weight:700;">$1$2</span>'
    );

    return text;
}


// ─────────────────────────────────────────────────────────────────────────────
//  HELPERS DE STRUCTURE
// ─────────────────────────────────────────────────────────────────────────────

function fmtPassif(label, body, details, element) {
    if (details === undefined) details = [];
    if (element === undefined) element = "";
    var isPassif = label.toLowerCase().includes("passif");
    var blockClass = isPassif ? "passif-block" : "star-block";

    var detailsHTML = details.map(function(d) {
        return '\n        <div class="detail-box">' +
               '\n            <h4>' + fmt(d.title, element) + '</h4>' +
               '\n            <p>' + fmt(d.content, element) + '</p>' +
               '\n        </div>';
    }).join('\n');

    return '\n    <div class="passif-content ' + blockClass + '">' +
           '\n        <h3>' + label + '</h3>' +
           '\n        <p>' + fmt(body, element) + '</p>' +
           detailsHTML +
           '\n    </div>';
}

function fmtWeapon(label, body, element) {
    if (element === undefined) element = "";
    return '\n    <div class="passif-content passif-block">' +
           '\n        <h3>' + label + '</h3>' +
           '\n        <p>' + fmt(body, element) + '</p>' +
           '\n    </div>';
}