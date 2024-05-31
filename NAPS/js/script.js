showActionPanel = function(e) {
    var elementStyle = document.getElementById("action_panel").style;

    // Vérifier si le panneau est actuellement affiché ou caché
    var isPanelVisible = elementStyle.display === "block";

    // Inverser l'état d'affichage du panneau
    elementStyle.display = isPanelVisible ? "none" : "block";

    // Si le panneau est visible, placer le curseur au-dessus
    if (isPanelVisible) {
        // Réinitialiser les positions du panneau
        elementStyle.top = "0px";
        elementStyle.left = "0px";
    } else {
        // Définir les positions initiales du panneau
        elementStyle.left = "87%";
        // En fonction du bouton cliqué, définir la position verticale du panneau
        switch (e.id) {
            case "action_button1":
                elementStyle.top = "67%";
                break;
            case "action_button2":
                elementStyle.top = "79%";
                break;
            case "action_button3":
                elementStyle.top = "91.5%";
                break;
            case "action_button4":
                elementStyle.top = "104%";
                break;
            case "action_button5":
                elementStyle.top = "116.5%";
                break;
            case "action_button6":
                elementStyle.top = "128%";
                break;
            default:
                elementStyle.top = "460px"; // Valeur par défaut
                break;
        }
    }
}



showFilterPanel = function(e) {

    var elementStyle = document.getElementById("filter_panel").style;

    // Vérifier si le panneau est actuellement affiché ou caché
    var isPanelVisible = elementStyle.display === "flex";

    // Inverser l'état d'affichage du panneau
    elementStyle.display = isPanelVisible ? "none" : "flex";

}
