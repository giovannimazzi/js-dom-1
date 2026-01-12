// utilities
const lightONPath = "./img/yellow_lamp.png";
const lightOFFPath = "./img/white_lamp.png";
const turnONCMD = "ACCENDI";
const turnOFFCMD = "SPEGNI";
/* let lampState; */
let consoleColor;

// selezione elementi del DOM da manipolare
const lampOFFImage = document.getElementById("lampOFF-img");
const lampONImage = document.getElementById("lampON-img");
const lampButton = document.getElementById("lamp-button");

// al caricamento della pagina
lampOFFImage.src = lightOFFPath; // luce OFF
lampONImage.src = lightONPath; // luce ON
/* lampState = "OFF"; */
lampButton.textContent = turnONCMD; // segnale di accensione luce

// funzione che si attiva al click sul pulsante
lampButton.addEventListener("click", function () {
  /* if (lampState === "OFF") { */
  /* if (lampImage.src.includes("white")) { */
  if (lampONImage.classList.contains("d-none")) {
    /* lampImage.src = lightONPath; */
    /* lampImage.classList.add("lampON"); */
    lampOFFImage.classList.add("d-none");
    lampOFFImage.classList.remove("d-block");
    lampONImage.classList.remove("d-none");
    lampONImage.classList.add("d-block");
    lampButton.textContent = turnOFFCMD;
    lampButton.classList.remove("btn-warning");
    lampButton.classList.add("btn-primary");
    /* lampState = "ON"; */
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
    /* lampState = "OFF"; */
    consoleColor = "color: cyan";
  }
  /* console.log(`STATO LAMPADA: %c${lampState}`, consoleColor); */
  /* console.log(
    `STATO LAMPADA: %c${lampImage.src.includes("white") ? "OFF" : "ON"}`,
    consoleColor
  ); */
  console.log(
    `STATO LAMPADA: %c${
      lampONImage.classList.contains("d-none") ? "OFF" : "ON"
    }`,
    consoleColor
  );
});
