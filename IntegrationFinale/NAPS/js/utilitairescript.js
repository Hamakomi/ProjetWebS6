/* bouton de refresh */
// load la dernière date en début de session
window.onload = loadLastDate;
 
//fonction de sauvegarde de la date
function loadLastDate() {
    const lastDate = sessionStorage.getItem('lastDate');
    if (lastDate) {
        document.getElementById("date").innerText = lastDate;
    }
}

//fonction de reformatage du temps acquérir et affichage + reload de la page
function Refresh() {
    const d = new Date();
    /* formattage des nombres pour avoir deux chiffres */
    const padZero = (num) => num.toString().padStart(2, '0');
    const day = padZero(d.getDate());
    const month = padZero(d.getMonth() + 1);
    const year = d.getFullYear();
    const hours = padZero(d.getHours());
    const minutes = padZero(d.getMinutes());
    const seconds = padZero(d.getSeconds());
 
    const formattedDate = `${day}/${month}/${year} at ${hours}:${minutes}:${seconds}`;
    sessionStorage.setItem('lastDate', formattedDate);
   
    location.reload();
}


