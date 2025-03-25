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

function start() {
    render();
    const addBtn = document.getElementById("foot-btn");
    addBtn.addEventListener("click", (event) => showDialog(event));
}

function render() {
    const ancestorContainer = document.getElementById("ancestor-container");

    const dialog = document.createElement("dialog");
    dialog.id = "add-card-dialog";
    dialog.classList.add("mother", "dialog-add");
    dialog.innerHTML=`
    <div class="father">
    <div class="mother form-div1">
        <input class="img" type="image" src="./public/angry_4875881.png" alt="" id="angry">
        <label for="angry">Angry</label>
    </div>
    <div class="mother form-div1">
        <input class="img" type="image" src="./public/weary_4875814.png" alt="" id="dejected">
        <label for="angry">Dejected </label>
    </div>
    <div class="mother form-div1">
        <input class="img" type="image" src="./public/raised-eyebrow_4875549.png" alt="" id="puzzled">
        <label for="angry">Puzzled</label>
    </div>
    <div class="mother form-div1">
        <input class="img" type="image" src="./public/smiling_4875375.png" alt="" id="happy">
        <label for="angry">Happy</label>
    </div>
    <div class="mother form-div1">
        <input class="img" type="image" src="./public/struck_4875459.png" alt="" id="ecstatic">
        <label for="angry">Ecstatic</label>
    </div>
</div>
<div class="form-div2">
    <input type="text" name="summary" id="summary" maxlength="140" placeholder="140 char max">
</div>
    `
    const btnContainer = document.createElement("div");
    btnContainer.classList.add("father");
    const okBtn = document.createElement("button");
    const cancelBtn = document.createElement("button");
    okBtn.innerText="ok";
    cancelBtn.innerText="cancel"


    btnContainer.appendChild(okBtn);
    btnContainer.appendChild(cancelBtn);
    dialog.appendChild(btnContainer);

    ancestorContainer.appendChild(dialog);
}

function showDialog() {
    const dialog = document.getElementById("add-card-dialog")
    dialog.showModal()
}

const sService = new StorageService();
const cardComp = new DayCardComponent();

start();



