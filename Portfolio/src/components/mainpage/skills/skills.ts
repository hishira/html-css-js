import skills from 'bundle-text:./skills.html';
class Skills extends HTMLElement{
    constructor(){
        super();
        this.innerHTML = skills;
    }
}
customElements.define("skills-body",Skills)