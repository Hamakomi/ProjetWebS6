// Fonction pour ouvrir un onglet spécifique
function openTab(tabName) {
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }
    document.getElementById(tabName).style.display = "block";
}

// Fonction pour afficher les éléments de la page par page
function showPage(page) {
    const content = document.querySelector('.content'); 
    const itemsPerPage = 5;
    const items = Array.from(content.getElementsByTagName('tr')).slice(1);
    const startIndex = page * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    
    items.forEach((item, index) => {
        item.classList.toggle('hidden', index < startIndex || index >= endIndex);
    });
    updateActiveButtonStates();
}

// Fonction pour créer les boutons de pagination
function createPageButtons() {
    const content = document.querySelector('.content'); 
    const itemsPerPage = 5;
    const items = Array.from(content.getElementsByTagName('tr')).slice(1);
    const totalPages = Math.ceil(items.length / itemsPerPage);
    const paginationContainer = document.createElement('div');
    paginationContainer.classList.add('pagination');

    // Ajouter les boutons de page
    for (let i = 0; i < totalPages; i++) {
        const pageButton = document.createElement('button');
        pageButton.textContent = i + 1;
        pageButton.addEventListener('click', () => {
            currentPage = i;
            showPage(currentPage);
            updateActiveButtonStates();
        });
        paginationContainer.appendChild(pageButton);
    }

    content.appendChild(paginationContainer);
}

// Fonction pour mettre à jour l'état des boutons de pagination
function updateActiveButtonStates() {
    const pageButtons = document.querySelectorAll('.pagination button');
    pageButtons.forEach((button, index) => {
        button.classList.toggle('active', index === currentPage);
    });
}

// Variables globales
let currentPage = 0;

document.addEventListener('DOMContentLoaded', function () {
    // Créer les boutons de pagination initialement
    createPageButtons();

    // Afficher la première page par défaut
    showPage(currentPage);
});
