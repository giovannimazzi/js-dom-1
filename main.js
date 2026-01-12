// selezione elementi del DOM da manipolare
const lampImage = document.getElementById("lamp-img");
const lampButton = document.getElementById("lamp-button");

lampButton.addEventListener("click", function () {
  console.log(lampImage.src);
  console.log(lampButton.textContent);
});
