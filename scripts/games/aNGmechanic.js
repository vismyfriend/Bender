export class aNGmechanic {
    constructor(data) {
        this.rules = document.querySelector(".aNGrules")
        this.rules.textContent = `если вы видите эту надпись, отправьте мне скриншот`
        
        this.rules.classList.remove("yellow")
        this.aNGdata = data.aNGdata
        
    
    }
}