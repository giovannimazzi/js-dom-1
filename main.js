// utilities
const lightONPath = "./img/yellow_lamp.png";
const lightOFFPath = "./img/white_lamp.png";
const lightBROKENPath = "./img/broken_lamp.png";
const turnONCMD = "ACCENDI";
const turnOFFCMD = "SPEGNI";
const brokenThreshold = 5;
let lampState;
let consoleColor;
let onOffCount = 0;

// selezione elementi del DOM da manipolare
const lampOFFImage = document.getElementById("lampOFF-img");
const lampONImage = document.getElementById("lampON-img");
const lampBROKENImage = document.getElementById("lampBROKEN-img");
const lampButton = document.getElementById("lamp-button");

// al caricamento della pagina
lampOFFImage.src = lightOFFPath; // luce OFF
lampONImage.src = lightONPath; // luce ON
lampBROKENImage.src = lightBROKENPath; // luce Rotta
lampState = "OFF";
lampButton.textContent = turnONCMD; // segnale di accensione luce

// funzione che si attiva al click sul pulsante
lampButton.addEventListener("click", function () {
  if (!(lampState === "BROKEN")) {
    if (onOffCount < brokenThreshold - 1) {
      if (lampState === "OFF") {
        /* if (lampImage.src.includes("white")) { */
        /* if (lampONImage.classList.contains("d-none")) { */
        /* lampImage.src = lightONPath; */
        /* lampImage.classList.add("lampON"); */
        lampOFFImage.classList.add("d-none");
        lampOFFImage.classList.remove("d-block");
        lampONImage.classList.remove("d-none");
        lampONImage.classList.add("d-block");
        lampButton.textContent = turnOFFCMD;
        lampButton.classList.remove("btn-warning");
        lampButton.classList.add("btn-primary");
        lampState = "ON";
        consoleColor = "color: yellow";
      } else {
        /* lampImage.src = lightOFFPath; */
        /* lampImage.classList.remove("lampON"); */
        lampONImage.classList.add("d-none");
        lampONImage.classList.remove("d-block");
        lampOFFImage.classList.remove("d-none");
        lampOFFImage.classList.add("d-block");
        lampButton.textContent = turnONCMD;
        lampButton.classList.remove("btn-primary");
        lampButton.classList.add("btn-warning");
        lampState = "OFF";
        consoleColor = "color: cyan";
      }
    } else {
      lampOFFImage.classList.add("d-none");
      lampOFFImage.classList.remove("d-block");
      lampONImage.classList.add("d-none");
      lampONImage.classList.remove("d-block");
      lampBROKENImage.classList.add("d-block");
      lampBROKENImage.classList.remove("d-none");
      lampButton.textContent = "ROTTA!";
      lampButton.classList.remove("btn-warning");
      lampButton.classList.add("btn-danger");
      lampButton.disabled = true;
      lampState = "BROKEN";
      consoleColor = "color: orangered";
    }
    onOffCount++;
  }

  console.log(
    `STATO LAMPADA: %c${lampState}%c [${onOffCount}]`,
    consoleColor,
    ""
  );
  /* console.log(
    `STATO LAMPADA: %c${lampImage.src.includes("white") ? "OFF" : "ON"}`,
    consoleColor
  ); */
  /* console.log(
    `STATO LAMPADA: %c${
      lampONImage.classList.contains("d-none") ? "OFF" : "ON"
    }`,
    consoleColor
  ); */
});
