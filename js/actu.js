document.addEventListener("DOMContentLoaded", () => {
    const newsContainer = document.getElementById("news-container");

    try {
        newsContainer.innerHTML = "";

        // On vérifie si la variable actusData existe et n'est pas vide
        if (typeof actusData === 'undefined' || actusData.length === 0) {
            throw new Error("Aucun article");
        }

        actusData.forEach(post => {
            const articleDiv = document.createElement("div");
            articleDiv.className = "actu-item";
            
            // On prépare l'affichage de la date et de la description uniquement si elles existent
            const dateSaisie = post.date ? `<span style="font-size: 0.8em; color: #aaaaaa; display: block; margin-bottom: 5px;">📅 ${post.date}</span>` : '';
            const descriptionSaisie = post.description ? `<p style="font-size: 0.9em; color: #dddddd; margin-top: 8px;">${post.description}</p>` : '';

            articleDiv.innerHTML = `
                <a href="${post.url}" target="_blank">
                    ${dateSaisie}
                    <h4>${post.title}</h4>
                    ${descriptionSaisie}
                </a>
            `;
            newsContainer.appendChild(articleDiv);
        });
    } catch (error) {
        console.log(error.message);
    }
});