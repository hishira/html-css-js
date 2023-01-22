import skills from 'bundle-text:./skills.html';
//import style from '../../../style/skills.style.module.scss'
class Skills extends HTMLElement{
    //private styleValue: string = style;
    constructor(){
        super();
        this.innerHTML = skills;
    }
}
customElements.define("skills-body",Skills)