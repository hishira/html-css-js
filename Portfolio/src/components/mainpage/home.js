import home from './home.html'
class About extends HTMLElement{
    constructor(){
        super();
        this.attachShadow({mode:"open"})
        this.shadowRoot.innerHTML = home
    }
}
customElements.define("home-body",About)