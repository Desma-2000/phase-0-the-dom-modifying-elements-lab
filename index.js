// Write your code here!
let mainElement = document.getElementById("main");
mainElement.parentNode.removeChild(mainElement);
let newHeader = document.createElement("h1");
newHeader.setAttribute("id", "victory");
let name = "Des"; 
newHeader.textContent =name + " is the champion";