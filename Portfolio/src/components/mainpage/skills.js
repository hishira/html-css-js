import skills from './skills.html'
class Skills extends HTMLElement{
    constructor(){
        super();
        this.attachShadow({mode:"open"})
        this.shadowRoot.innerHTML = skills
    }
}
customElements.define("skills-body",Skills)