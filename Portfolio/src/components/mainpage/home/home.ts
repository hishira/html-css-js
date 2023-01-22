import home from 'bundle-text:./home.html'

class About extends HTMLElement{
    constructor(){
        super();
        this.innerHTML = home
    }
}
customElements.define("home-body",About)