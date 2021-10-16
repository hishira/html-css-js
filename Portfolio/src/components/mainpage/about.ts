import about from 'bundle-text:./about.html'
import style from "../../style/about.style.module.scss"
class About extends HTMLElement{
    private styleValue: string = style;
    constructor(){
        super();
        this.innerHTML = about
    }
}
customElements.define("about-body",About)