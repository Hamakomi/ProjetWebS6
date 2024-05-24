let choix = "locations";
var locations = document.getElementById("locations");
var lines = document.getElementsByClassName("line_select");
var edges = document.getElementById("edges");
var gateways = document.getElementById("gateways");
var locationMap = document.getElementById("location_map");

locations.addEventListener("click", function () {
    choixNavbar("locations");
    updateSelection("locations");
});

edges.addEventListener("click", function () {
    choixNavbar("edges");
    updateSelection("edges");
}
);

gateways.addEventListener("click", function () {
    choixNavbar("gateways");
    updateSelection("gateways");
}
);

locationMap.addEventListener("click", function () {
    choixNavbar("locationMap");
    updateSelection("location_map");
}
);

function updateSelection(selected) {
    for (let i = 0; i < lines.length; i++) {
        if (lines[i].classList.contains("line--active") && lines[i].id !== selected) {
            lines[i].classList.remove("line--active");
        }
    }
    if (selected == "locations") {
        lines[0].classList.add("line--active");
    }
    else if (selected == "edges") {
        lines[1].classList.add("line--active");
    }
    else if (selected == "gateways") {
        lines[2].classList.add("line--active");
    }
    else if (selected == "location_map") {
        lines[3].classList.add("line--active");
    }
}

function choixNavbar(nouveauChoix) {
    if (nouveauChoix == "locations" || nouveauChoix == "edges" || nouveauChoix == "gateways" || nouveauChoix == "locationMap") {
        if (choix !== nouveauChoix) {
            choix = nouveauChoix;
            console.log(choix);
        }
    }
}

function changeColorStatus() {
    let status = document.getElementsByClassName("status");
    for (let i = 0; i < status.length; i++) {
        console.log(status[i].children[0].innerText);
        if (status[i].children[0].innerText == "Active") {
            status[i].classList.add("status--active");
        }
        else if (status[i].children[0].innerText == "Inactive") {
            status[i].classList.add("status--inactive");
        }
        else if (status[i].children[0].innerText == "Degraded") {
            status[i].classList.add("status--degraded");
        }
        else
            console.log("error");
    }
}
updateSelection(choix);
changeColorStatus();