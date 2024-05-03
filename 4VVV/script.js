function openTab(tabName) {
    // Fonction pour ouvrir un onglet spécifique en masquant les autres
    var i, tabcontent;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }
    document.getElementById(tabName).style.display = "block";
}

document.addEventListener('DOMContentLoaded', function () {
    const tabs = document.querySelectorAll('.tabcontent');
    tabs.forEach(tab => {
        const content = tab.querySelector('.content');
        if (content) {
            const itemsPerPage = 6;
            let currentPage = 0;
            let totalPages;
            const items = Array.from(content.getElementsByTagName('tr')).slice(1);

            function showPage(page) {
                // Fonction pour afficher une page donnée
                const startIndex = page * itemsPerPage;
                const endIndex = Math.min(startIndex + itemsPerPage, items.length);
                items.forEach((item, index) => {
                    item.style.display = (index >= startIndex && index < endIndex) ? 'table-row' : 'none';
                });
                updateActiveButtonStates();
            }

            function createPageButtons() {
                // Fonction pour créer les boutons de pagination
                totalPages = Math.ceil(items.length / itemsPerPage);
                const paginationContainer = document.createElement('div');
                paginationContainer.classList.add('pagination');

                // Bouton précédent
                const prevButton = document.createElement('button');
                prevButton.textContent = '<';

                prevButton.addEventListener('click', () => {
                    if (currentPage > 0) {
                        currentPage--;
                        showPage(currentPage);
                    }
                });
                paginationContainer.appendChild(prevButton);

                // Boutons numérotés
                for (let i = 0; i < totalPages; i++) {
                    const pageButton = document.createElement('button');
                    pageButton.textContent = i + 1;
                    pageButton.dataset.pageIndex = i;
                    pageButton.addEventListener('click', function() {
                        const pageIndex = parseInt(this.dataset.pageIndex);
                        currentPage = pageIndex;
                        showPage(currentPage);
                    });
                    paginationContainer.appendChild(pageButton);
                }

                // Bouton suivant
                const nextButton = document.createElement('button');
                nextButton.textContent = '>';
                nextButton.addEventListener('click', () => {
                    if (currentPage < totalPages - 1) {
                        currentPage++;
                        showPage(currentPage);
                    }
                });
                paginationContainer.appendChild(nextButton);

                tab.appendChild(paginationContainer);
            }

            function updateActiveButtonStates() {
                // Fonction pour mettre à jour l'état des boutons de pagination
                const pageButtons = tab.querySelectorAll('.pagination button');
                pageButtons.forEach((button, index) => {
                    button.classList.toggle('active', index === currentPage + 1);
                });

                // Bouton précédent
                const prevButton = tab.querySelector('.pagination button:first-child');
                if (currentPage === 0) {
                    prevButton.style.opacity = '0.5'; // Opacité réduite à 50%
                    prevButton.disabled = true; // Désactiver le bouton
                } else {
                    prevButton.style.opacity = '1'; // Rétablir l'opacité par défaut
                    prevButton.disabled = false; // Activer le bouton
                }

                // Bouton suivant
                const nextButton = tab.querySelector('.pagination button:last-child');
                if (currentPage === totalPages - 1) {
                    nextButton.style.opacity = '0.5'; // Opacité réduite à 50%
                    nextButton.disabled = true; // Désactiver le bouton
                } else {
                    nextButton.style.opacity = '1'; // Rétablir l'opacité par défaut
                    nextButton.disabled = false; // Activer le bouton
                }
            }

            createPageButtons();
            showPage(currentPage);
        }
    });
});
