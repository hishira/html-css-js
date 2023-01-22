import about from 'bundle-text:./about.html'
//import * as classes from '../../../style/about.style.module.scss';
//import style from "bundle-text:../../../style/about.style.module.scss";
class About extends HTMLElement{
    //private styleValue: string = style;
    constructor(){
        super();
        this.innerHTML = about
  //      console.log(classes.default)
  //      this.className = classes.default;
    }
}
customElements.define("about-body",About)