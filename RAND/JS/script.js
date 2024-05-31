let choix = "region";
var gateways = document.getElementById("network");
var lines = document.getElementsByClassName("line_select");
var sites = document.getElementById("region");
var edges = document.getElementById("site");

gateways.addEventListener("click", function () {
    choixNavbar("network");
    updateSelection("network");
});

sites.addEventListener("click", function () {
        choixNavbar("region");
        updateSelection("region");
    }
);

edges.addEventListener("click", function () {
        choixNavbar("site");
        updateSelection("site");
    }
);



function updateSelection(selected) {
    for (let i = 0; i < lines.length; i++) {
        if (lines[i].classList.contains("line--active") && lines[i].id !== selected) {
            lines[i].classList.remove("line--active");
        }
    }
    if (selected == "network") {
        lines[0].classList.add("line--active");
    }
    else if (selected == "region") {
        lines[1].classList.add("line--active");
    }
    else if (selected == "site") {
        lines[2].classList.add("line--active");
    }
}




function choixNavbar(nouveauChoix) {
    if (nouveauChoix == "network" || nouveauChoix == "region" || nouveauChoix == "site") {
        if (choix !== nouveauChoix) {
            choix = nouveauChoix;
            console.log(choix);
        }
    }
}

updateSelection(choix);