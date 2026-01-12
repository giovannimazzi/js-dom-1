// utilities
const lightONPath = "./img/yellow_lamp.png";
const lightOFFPath = "./img/white_lamp.png";
const turnONCMD = "ACCENDI";
const turnOFFCMD = "SPEGNI";
let lampState;

// selezione elementi del DOM da manipolare
const lampImage = document.getElementById("lamp-img");
const lampButton = document.getElementById("lamp-button");

// al caricamento della pagina
lampImage.src = lightOFFPath; // luce OFF
lampState = "OFF";
lampButton.textContent = turnONCMD; // segnale di accensione luce

// funzione che si attiva al click sul pulsante
lampButton.addEventListener("click", function () {
  if (lampState === "OFF") {
    lampImage.src = lightONPath;
    lampButton.textContent = turnOFFCMD;
    lampButton.classList.remove("btn-warning");
    lampButton.classList.add("btn-primary");
    lampState = "ON";
    console.log(`STATO LAMPADA: ${lampState}`);
  }
});
