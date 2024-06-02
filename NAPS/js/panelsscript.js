showActionPanel = function(e) {
    var elementStyle = document.getElementById("action_panel").style;
    // Vérifier si le panneau est actuellement affiché ou caché
    var isPanelVisible = elementStyle.display === "block";
 
    // Inverser l'état d'affichage du panneau
    elementStyle.display = isPanelVisible ? "none" : "block";
        elementStyle.left = "88%";
        var rect = e.getBoundingClientRect();
        var elementY = rect.top + window.scrollY;
        elementStyle.top = elementY + 34 + "px" ;
}


showFilterPanel = function(e) {
    var elementStyle = document.getElementById("filter_panel").style;
    var img = document.querySelector("#filter img");
 
    // Inverser l'état de visibilité du panneau
    var isPanelVisible = elementStyle.display === "flex";
    elementStyle.display = isPanelVisible ? "none" : "flex";
    var rect = e.getBoundingClientRect();
    var elementY = rect.top + window.scrollY;
    elementStyle.top = (elementY + 59) + "px";
    if (!isPanelVisible) {
        e.style.color = "#F16E00";
        img.style.filter = "invert(66%) sepia(65%) saturate(1969%) hue-rotate(336deg) brightness(99%) contrast(92%)";
    } else {
        e.style.color = "";
        img.style.filter = "";
    }
}
 

// Fonction pour fermer filter panel
function Close(){
    deleteAll();
    selectedFilters = {}; 
    var elementStyle = document.getElementById("filter_panel").style;
    elementStyle.display = "none";
}

var counters = {};
var selectedFilters = {};

// Fonction pour gérer les checkboxs cochés de filter panel
function updateStatus(elementId, statusId) {
    // Sélectionne toutes les checkboxes dans l'élément spécifié par son ID
    var checkboxes = document.querySelectorAll('#' + elementId + ' input[type="checkbox"]');
    // Compte le nombre de checkboxes cochées
    var checkedCount = 0;
    checkboxes.forEach(function(checkbox) {
        var text = checkbox.closest('.element_filter').querySelector('p').textContent.trim();
        if (!selectedFilters[elementId]) {
            selectedFilters[elementId] = [];
        }
        if (checkbox.checked) {
            checkedCount++;
            if (!selectedFilters[elementId].includes(text)) {
                selectedFilters[elementId].push(text);
            }
        } else {
            var index = selectedFilters[elementId].indexOf(text);
            if (index !== -1) {
                selectedFilters[elementId].splice(index, 1);
            }
        }
    });
    // Met à jour le compteur individuel pour cet élément dans l'objet counters
    counters[elementId] = checkedCount;
    // Met à jour le texte du paragraphe spécifié par son ID avec le nombre de checkboxes cochées
    var statusParagraph = document.getElementById(statusId);
    statusParagraph.textContent = statusParagraph.textContent.replace(/\d+/, checkedCount);
  // Met à jour le compteur général
    var totalCheckedCount = Object.values(counters).reduce((acc, val) => acc + val, 0);
    var effacerStatusParagraph = document.getElementById('peffacer');
    effacerStatusParagraph.textContent = effacerStatusParagraph.textContent.replace(/\d+/, totalCheckedCount);

    console.log(selectedFilters);
}

// Fonction pour désélectionner toutes les checkboxes et réinitialiser les compteurs
function deleteAll(){
    var checkboxes = document.querySelectorAll('#filter_panel input[type="checkbox"]');
    checkboxes.forEach(function(checkbox) {
        checkbox.checked = false;
    });
     // Réinitialiser les compteurs
    for (var key in counters) {
        counters[key] = 0;
    }
    // Mettre à jour les paragraphes de statut
    document.querySelectorAll('#filter_panel p').forEach(function(paragraph) {
        paragraph.textContent = paragraph.textContent.replace(/\d+/, 0);
    });
    // Mettre à jour le compteur général
    var effacerStatusParagraph = document.getElementById('peffacer');
    effacerStatusParagraph.textContent = effacerStatusParagraph.textContent.replace(/\d+/, 0);
}

// Fonction pour filtrer le tableau selon les valeurs sélectionnées
function filterTable() {
        var table = document.getElementById("tableau");
        var rows = table.getElementsByTagName("tr");
    
        for (var i = 1; i < rows.length; i++) {
            var row = rows[i];
            var showRow = true;
    
            for (var key in selectedFilters) {
                if (selectedFilters[key].length > 0) {
                    var filterFound = false;
                    var filterIndices = [];
    
                    // Trouver les indices des colonnes correspondant à la clé (key)
                    if (key === 'provisioning_states') {
                        filterIndices = [1]; 
                    } else if (key === 'operational_status') {
                        filterIndices = [2]; 
                    } else if (key === 'vendors') {
                        filterIndices = [4]; 
                    }
    
                    // Vérifier si la valeur du filtre est présente dans l'une des colonnes spécifiées
                    for (var j = 0; j < filterIndices.length; j++) {
                        var cell = row.getElementsByTagName("td")[filterIndices[j]];
                        if (cell && selectedFilters[key].includes(cell.textContent.trim())) {
                            filterFound = true;
                            break;
                        }
                    }
    
                    if (!filterFound) {
                        showRow = false;
                        break;
                    }
                }
            }
    
            row.style.display = showRow ? '' : 'none';
        }
        Close(); 
    }
