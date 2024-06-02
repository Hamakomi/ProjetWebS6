//fonction de filtrage si la case ne contient pas que du texte
function extractText(cell) {
  //element temporaire
  let tempDiv = document.createElement("div");
  tempDiv.innerHTML = cell.innerHTML;

  // Supprime les éléments d'image
  let images = tempDiv.getElementsByTagName("img");
  while (images.length > 0) {
    images[0].parentNode.removeChild(images[0]);
  }

  // Récupère le texte restant
  return tempDiv.textContent || tempDiv.innerText || "";
}


//fonction de trie croissant décroissant du tableau
function sortTable(n) {
  var table, rows, switching, i, x, y, shouldSwitch, dir, switchcount = 0;
  table = document.getElementById("tableau");
  switching = true;
  dir = "asc"; 

  while (switching) {
    switching = false;
    rows = table.rows;

    for (i = 1; i < (rows.length - 1); i++) {
      shouldSwitch = false;
      x = rows[i].getElementsByTagName("TD")[n];
      y = rows[i + 1].getElementsByTagName("TD")[n];

      let xText = extractText(x).toLowerCase().trim();
      let yText = extractText(y).toLowerCase().trim();

      if (dir == "asc") {
        if (xText > yText) {
          shouldSwitch = true;
          break;
        }
      } else if (dir == "desc") {
        if (xText < yText) {
          shouldSwitch = true;
          break;
        }
      }
    }

    if (shouldSwitch) {
      rows[i].parentNode.insertBefore(rows[i + 1], rows[i]);
      switching = true;
      switchcount++;
    } else {
      if (switchcount == 0 && dir == "asc") {
        dir = "desc";
        switching = true;
      }
    }
  }
}
