import skills from './skills.html'
class Skills extends HTMLElement{
    private shadowDom: ShadowRoot;
    constructor(){
        super();
        this.shadowDom = this.attachShadow({mode:"open"})
        this.shadowDom.innerHTML = skills
    }
}
customElements.define("skills-body",Skills)