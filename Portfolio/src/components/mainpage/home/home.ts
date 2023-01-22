import home from 'bundle-text:./home.html'
//import style from "../../../style/home.style.module.scss"

class About extends HTMLElement{
    //private styleValue: string = style;
    constructor(){
        super();
        this.innerHTML = home
    }
}
customElements.define("home-body",About)