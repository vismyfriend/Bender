export class aNGmechanic {
    constructor(data) {
        this.aNGdata = data.aNGdata
                this.rules = document.querySelector(".aNGrules")
        this.rules.classList.remove("yellow")
        this.rules.textContent = `если вы видите эту надпись, то тут скоро появится новая игра!`
        
    
    }
}