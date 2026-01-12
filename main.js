// selezione elementi del DOM da manipolare
const lampImage = document.getElementById("lamp-img");
const lampButton = document.getElementById("lamp-button");

// funzione che si attiva al click sul pulsante
lampButton.addEventListener("click", function () {
  console.log(lampImage.src);
  console.log(lampButton.textContent);
});
