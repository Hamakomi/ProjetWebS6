let choix = "locations";



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
changeColorStatus();
