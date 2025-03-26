export default class SuperDialog extends HTMLElement {
    constructor() {
        super();
        this.shadow = this.attachShadow({mode: 'open'})
    }

    connectedCallback() {
        this.style();
        this.render();
    }

    style(){
        const cssLink = document.createElement('link');
        cssLink.rel = 'stylesheet';
        cssLink.href = './dialog.css';
        this.shadow.appendChild(cssLink)
    }

    render() {
        this.dialog = document.createElement("dialog");
        this.dialog.setAttribute("id", "class")
        this.dialog.id = "add-card-dialog";
        this.dialog.classList.add("mother", "dialog-add");
        this.dialog.innerHTML = `
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
        okBtn.innerText = "ok";
        cancelBtn.innerText = "cancel"


        btnContainer.appendChild(okBtn);
        btnContainer.appendChild(cancelBtn);
        this.dialog.appendChild(btnContainer);
        this.shadow.appendChild(this.dialog)
    }

    showModal() {
        this.dialog.showModal();
    }

}

customElements.define('super-dialog', SuperDialog);