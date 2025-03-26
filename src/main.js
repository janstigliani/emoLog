// applicazione di oggi .-.
// emo logger
// - l'utente che si trova in questa applicazione può registrare l'emozione del con delle emoticon
// brutta storia - bella storia 5 livelli
// arrabbiato - euforico
// con note che spiegano il perché si sente così
// salvare - registrare l'emozione nel localstorage
// 1) la data del momento in cui ha salvato 2) se è condivisa prendere geolocalizzazione dell'utente
// display: per giorno con l'emozione e nota registrata

// mappa, grafico, calendario delle emozioni per il WEEKEND

import StorageService from "./services/storage-service.js";
import DayCardComponent from "./components/day-card-component.js";
import SuperDialog from "./components/super-dialog.js";

function start() {
    render();
    const addBtn = document.getElementById("foot-btn");
    addBtn.addEventListener("click", (event) => showDialog(event));
}

function render() {
    const ancestorContainer = document.getElementById("ancestor-container");

    const dialog = document.createElement("super-dialog");

    ancestorContainer.appendChild(dialog);
}

function showDialog() {
    const dialog = document.getElementById("add-card-dialog");
    console.log(dialog);
    dialog.showModal();
}

const sService = new StorageService();
const cardComp = new DayCardComponent();

start();



