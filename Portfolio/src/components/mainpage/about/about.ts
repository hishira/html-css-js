import about from 'bundle-text:./about.html'
class About extends HTMLElement{
    constructor(){
        super();
        this.innerHTML = about
    }
}
customElements.define("about-body",About)