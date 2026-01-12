// utilities
const lightONPath = "./img/yellow_lamp.png";
const lightOFFPath = "./img/white_lamp.png";
const turnONCMD = "ACCENDI";
const turnOFFCMD = "SPEGNI";
/* let lampState; */
let consoleColor;

// selezione elementi del DOM da manipolare
const lampImage = document.getElementById("lamp-img");
const lampButton = document.getElementById("lamp-button");

// al caricamento della pagina
lampImage.src = lightOFFPath; // luce OFF
/* lampState = "OFF"; */
lampButton.textContent = turnONCMD; // segnale di accensione luce

// funzione che si attiva al click sul pulsante
lampButton.addEventListener("click", function () {
  /* if (lampState === "OFF") { */
  if (lampImage.src.includes("white")) {
    lampImage.src = lightONPath;
    lampImage.classList.add("lampON");
    lampButton.textContent = turnOFFCMD;
    lampButton.classList.remove("btn-warning");
    lampButton.classList.add("btn-primary");
    /* lampState = "ON"; */
    consoleColor = "color: yellow";
  } else {
    lampImage.src = lightOFFPath;
    lampImage.classList.remove("lampON");
    lampButton.textContent = turnONCMD;
    lampButton.classList.remove("btn-primary");
    lampButton.classList.add("btn-warning");
    /* lampState = "OFF"; */
    consoleColor = "color: cyan";
  }
  /* console.log(`STATO LAMPADA: %c${lampState}`, consoleColor); */
  console.log(
    `STATO LAMPADA: %c${lampImage.src.includes("white") ? "OFF" : "ON"}`,
    consoleColor
  );
});
