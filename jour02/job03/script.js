
document.addEventListener('DOMContentLoaded', function loaded() {

var button = document.querySelector("#button");

function increment () {

var compteur = document.querySelector("#compteur").textContent;
compteur++;
document.querySelector("#compteur").textContent = compteur;
}

button.addEventListener("click", increment);
});