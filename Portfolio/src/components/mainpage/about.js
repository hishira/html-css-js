import about from './about.html'
class About extends HTMLElement{
    constructor(){
        super();
        this.attachShadow({mode:"open"})
        this.shadowRoot.innerHTML = about
    }
}
customElements.define("about-body",About)