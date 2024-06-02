function showContent(contentId, iconElement) {
  // Hide all content sections
  var contents = document.querySelectorAll('#overview-content, #monitor-content, #availability-content, #service-content, #security-content, #configure-content, #data-content, #billing-content');
  contents.forEach(function(content) {
    content.style.display = 'none';
  });

  // Remove active class from all icons
  var icons = document.querySelectorAll('#cockpit-navbar div');
  icons.forEach(function(icon) {
    icon.classList.remove('active');
  });

  // Show the selected content and mark the icon as active
  document.getElementById(contentId).style.display = 'flex';
  iconElement.classList.add('active');
}

let fleche = document.getElementById("menu");
let plus = document.getElementsByClassName("more");


fleche.addEventListener("click", () => {
  for(let i = 0; i < plus.length; i++){
    if(getComputedStyle(plus[i]).display !== "none") {
      plus[i].style.display = "none";
    }
    else
    {
      plus[i].style.display= "table-row";
    }}

});

let information = document.getElementById("over");
let information1 = document.getElementById("over1");
let tab = document.getElementById("tunnel");
let tab1 = document.getElementById("qoe");


information.addEventListener("mouseover", () => {tab.style.display = "block";});
information.addEventListener("mouseout", () => {tab.style.display = "none";});

information1.addEventListener("mouseover", () => {tab1.style.display = "block";});
information1.addEventListener("mouseout", () => {tab1.style.display = "none";});
