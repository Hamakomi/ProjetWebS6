let choix = "locations";
var locations = document.getElementById("locations");
var location_table = document.getElementById("table_location");
var lines = document.getElementsByClassName("line_select");
var edges = document.getElementById("edges");
var edges_table = document.getElementById("table_edges");
var gateways = document.getElementById("gateways");
var gateways_table = document.getElementById("table_gateway");
var locationMap = document.getElementById("location_map");
var table_title = document.getElementById("table_title");
var table_nav = document.getElementById("table-navigation");
var screen_size = window.innerWidth;


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
    updateGatewayRegions();
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
        location_table.style.display = "block";
        edges_table.style.display = "none";
        gateways_table.style.display = "none";
        table_nav.style.display = "flex";
        lines[0].classList.add("line--active");
        table_title.innerText = "Locations Inventory";
    }
    else if (selected == "edges") {
        location_table.style.display = "none";
        edges_table.style.display = "block";
        gateways_table.style.display = "none";
        table_nav.style.display = "flex";
        lines[1].classList.add("line--active");
        table_title.innerText = "Edges Inventory";
    }
    else if (selected == "gateways") {
        location_table.style.display = "none";
        edges_table.style.display = "none";
        gateways_table.style.display = "block";
        table_nav.style.display = "flex";
        lines[2].classList.add("line--active");
        table_title.innerText = "Gateways Inventory";
    }
    else if (selected == "location_map") {
        location_table.style.display = "none";
        edges_table.style.display = "none";
        gateways_table.style.display = "none";
        table_nav.style.display = "none";
        lines[3].classList.add("line--active");
        table_title.innerText = "Location Map";
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
function updateLocationEdges() {
    let location_edges = document.getElementsByClassName("location_edges");
    //récupérer les classes status dans l'id tableau_location et les mettre dans un tableau
    let status = document.getElementById("table_location").getElementsByClassName("status");
    console.log("status", status);
    if (screen_size <= 600) {
        for (let i = 1; i < location_edges.length; i++) {
            status[i - 1].children[0].innerText = location_edges[i].innerText;
            location_edges[i].style.display = "none";
        }
    }
    else if (screen_size > 600) {
        for (let i = 1; i < location_edges.length; i++) {
            location_edges[i].style.display = "block";
            if (status[i - 1].classList.contains("status--active")) {
                status[i - 1].children[0].innerText = "Active";
            }
            else if (status[i - 1].classList.contains("status--inactive")) {
                status[i - 1].children[0].innerText = "Inactive";
            }
            else if (status[i - 1].classList.contains("status--degraded")) {
                status[i - 1].children[0].innerText = "Degraded";
            }
        }
    }
}

function updateGatewayRegions() {
    let gateway_region = document.getElementsByClassName("gateway_region");

    let status = document.getElementById("table_gateway").getElementsByClassName("status");
    if (screen_size <= 600) {
        for (let i = 1; i < gateway_region.length; i++) {
            status[i - 1].children[0].innerText = gateway_region[i].innerText;
            gateway_region[i].style.display = "none";
        }
    }
    else if (screen_size > 600) {
        for (let i = 1; i < gateway_region.length; i++) {
            gateway_region[i].style.display = "block";
            if (status[i - 1].classList.contains("status--active")) {
                status[i - 1].children[0].innerText = "Active";
            }
            else if (status[i - 1].classList.contains("status--inactive")) {
                status[i - 1].children[0].innerText = "Inactive";
            }
            else if (status[i - 1].classList.contains("status--degraded")) {
                status[i - 1].children[0].innerText = "Degraded";
            }
        }
    }
}

window.addEventListener("resize", function () {
    screen_size = window.innerWidth;
    console.log(screen_size);
    updateLocationEdges();
    updateGatewayRegions();
});

updateSelection(choix);
changeColorStatus();
updateLocationEdges();