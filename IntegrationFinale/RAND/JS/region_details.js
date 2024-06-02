let choix = "gateways";
var gateways = document.getElementById("gateways");
var lines = document.getElementsByClassName("line_select");
var sites = document.getElementById("sites");
var edges = document.getElementById("edges");
var Map = document.getElementById("map");

gateways.addEventListener("click", function () {
    choixNavbar("gateways");
    updateSelection("gateways");
});

sites.addEventListener("click", function () {
    choixNavbar("sites");
    updateSelection("sites");
}
);

edges.addEventListener("click", function () {
    choixNavbar("edges");
    updateSelection("edges");
}
);

map.addEventListener("click", function () {
    choixNavbar("map");
    updateSelection("map");
}
);


function updateSelection(selected) {
    for (let i = 0; i < lines.length; i++) {
        if (lines[i].classList.contains("line--active") && lines[i].id !== selected) {
            lines[i].classList.remove("line--active");
        }
    }
    if (selected == "gateways") {
        lines[0].classList.add("line--active");
    }
    else if (selected == "sites") {
        lines[1].classList.add("line--active");
    }
    else if (selected == "edges") {
        lines[2].classList.add("line--active");
    }
    else if (selected == "map") {
        lines[3].classList.add("line--active");
    }
}




function choixNavbar(nouveauChoix) {
    if (nouveauChoix == "gateways" || nouveauChoix == "sites" || nouveauChoix == "edges" || nouveauChoix == "Map") {
        if (choix !== nouveauChoix) {
            choix = nouveauChoix;
            console.log(choix);
        }
    }
}

updateSelection(choix);