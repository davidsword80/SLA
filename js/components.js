const headerHTML = `
<header>
  <h1>Solo Leveling Arise</h1>
  <nav>
    <ul>
      <li><a href="index.html">Accueil</a></li>
      <li><a href="armes.html">Armes</a></li>
      <li><a href="Runes.html">Runes</a></li>
      <li><a href="noyaux.html">Noyaux</a></li>
      <li><a href="equipements.html">Equipements</a></li>
      <li><a href="gemmes.html">Gemmes</a></li>
      <li><a href="chasseurs.html">Chasseurs</a></li>
      <li><a href="armes_chasseur.html">Armes Chasseur</a></li>
      <li><a href="ombre.html">Ombre</a></li>
      <li><a href="puissance_remanante.html">Puissance rémanante</a></li>
      <li><a href="competence.html">Competence</a></li>
      <li><a href="actu.html">Actu</a></li>
    </ul>
  </nav>
</header>
`;

const footerHTML = `
<footer style="position: relative;">
    <p>&copy; 2026 Solo Leveling Arise</p>
    <div style="margin-top: 10px; opacity: 0.8; pointer-events: none;">
        <a href="http://www.mon-compteur.fr">
            <img src="http://www.mon-compteur.fr/html_c01genv2-246480-1" alt="Compteur" border="0" />
        </a>
    </div>
    
    <button id="btn-remonter" style="position: absolute; right: 20px; top: 50%; transform: translateY(-50%); background: none; border: none; cursor: pointer; padding: 0; outline: none;">
        <img src="img/footer/PageTop.png" alt="Haut de page" style="width: 80px; height: auto;" />
    </button>
</footer>
`;

document.addEventListener("DOMContentLoaded", function() {
    // Injection du Header au début du body
    document.body.insertAdjacentHTML('afterbegin', headerHTML);
    
    // Injection du Footer à la fin du body
    document.body.insertAdjacentHTML('beforeend', footerHTML);

    const links = document.querySelectorAll('nav ul li a');
    const currentPage = window.location.pathname.split("/").pop() || "index.html";
    
    links.forEach(link => {
        // Si le lien correspond à la page actuelle
        if (link.getAttribute('href') === currentPage) {
            // 1. On met l'onglet en surbrillance
            link.style.borderBottom = "2px solid white";
            link.style.color = "white";
            
            // 2. On change dynamiquement le titre h1
            const mainTitle = document.querySelector('header h1');
            if (mainTitle) {
                // On ajoute " - " suivi du nom du lien (ex: Accueil, Armes...)
                mainTitle.innerText = `Solo Leveling Arise - ${link.innerText}`;
            }
        }
    });

    // Logique du bouton pour remonter en haut
    const btnRemonter = document.getElementById('btn-remonter');
    if (btnRemonter) {
        btnRemonter.addEventListener('click', function() {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
    }
});