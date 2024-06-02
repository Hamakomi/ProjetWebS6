function openTab(tabName) {
    // Fonction pour ouvrir un onglet spécifique en masquant les autres
    var i, tabcontent, tablinks;

    // Masquer tous les onglets
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }

    // Afficher l'onglet sélectionné
    document.getElementById(tabName).style.display = "block";

    // Enlever la classe 'selectedtablink' de tous les boutons
    tablinks = document.getElementsByClassName("tablink");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].classList.remove("selectedtablink");
    }

    // Ajouter la classe 'selectedtablink' au bouton cliqué
    event.currentTarget.classList.add("selectedtablink");
}


document.addEventListener('DOMContentLoaded', function () {
    
    // Sélectionne tous les éléments avec la classe 'tabcontent'
    const tabs = document.querySelectorAll('.tabcontent');
    tabs.forEach(tab => {

        // Sélectionne le premier élément avec la classe 'content' à l'intérieur de chaque 'tabcontent'
        const content = tab.querySelector('.content');
        if (content) {

            // Définition du nombre de lignes par page
            const nbLignes = 6;

            // Initialise la page sélectionnée à 0 (la première page)
            let pageSelectionee = 0;

            // Déclaration du nombre total de pages (sera calculé plus tard)
            let nbPages;

            // Récupère tous les éléments 'tr' (lignes de tableau) dans 'content', en ignorant la première ligne (en-tête)
            const items = Array.from(content.getElementsByTagName('tr')).slice(1);

            function showPage(page) {
                // Fonction pour afficher une page donnée
                const startIndex = page * nbLignes;
                const endIndex = Math.min(startIndex + nbLignes, items.length);
                items.forEach((item, index) => {
                    item.style.display = (index >= startIndex && index < endIndex) ? 'table-row' : 'none';
                });
                updateActiveButtonStates();
            }

            function createPageButtons() {
                // Fonction pour créer les boutons de pagination
                nbPages = Math.ceil(items.length / nbLignes);
                const paginationContainer = document.createElement('div');
                paginationContainer.classList.add('pagination');

                // Bouton précédent
                const prevButton = document.createElement('button');
                prevButton.textContent = '<';

                prevButton.addEventListener('click', () => {
                    if (pageSelectionee > 0) {
                        pageSelectionee--;
                        showPage(pageSelectionee);
                    }
                });
                paginationContainer.appendChild(prevButton);

                // Boutons numérotés
                for (let i = 0; i < nbPages; i++) {
                    const pageButton = document.createElement('button');
                    pageButton.textContent = i + 1;
                    pageButton.dataset.pageIndex = i;
                    pageButton.addEventListener('click', function() {
                        const pageIndex = parseInt(this.dataset.pageIndex);
                        pageSelectionee = pageIndex;
                        showPage(pageSelectionee);
                    });
                    paginationContainer.appendChild(pageButton);
                }

                // Bouton suivant
                const nextButton = document.createElement('button');
                nextButton.textContent = '>';
                nextButton.addEventListener('click', () => {
                    if (pageSelectionee < nbPages - 1) {
                        pageSelectionee++;
                        showPage(pageSelectionee);
                    }
                });
                paginationContainer.appendChild(nextButton);

                tab.appendChild(paginationContainer);
            }

            function updateActiveButtonStates() {
                // Fonction pour mettre à jour l'état des boutons de pagination
                const pageButtons = tab.querySelectorAll('.pagination button');
                pageButtons.forEach((button, index) => {
                    button.classList.toggle('active', index === pageSelectionee + 1);
                });

                // Bouton précédent
                const prevButton = tab.querySelector('.pagination button:first-child');
                if (pageSelectionee === 0) {
                    prevButton.style.opacity = '0.5'; // Opacité réduite à 50%
                    prevButton.disabled = true; // Désactiver le bouton
                } else {
                    prevButton.style.opacity = '1'; // Rétablir l'opacité par défaut
                    prevButton.disabled = false; // Activer le bouton
                }

                // Bouton suivant
                const nextButton = tab.querySelector('.pagination button:last-child');
                if (pageSelectionee === nbPages - 1) {
                    nextButton.style.opacity = '0.5'; // Opacité réduite à 50%
                    nextButton.disabled = true; // Désactiver le bouton
                } else {
                    nextButton.style.opacity = '1'; // Rétablir l'opacité par défaut
                    nextButton.disabled = false; // Activer le bouton
                }
            }

            // Création des boutons de pagination
            createPageButtons();
            // Affichage de la première page au chargement
            showPage(pageSelectionee);
        }
    });
});