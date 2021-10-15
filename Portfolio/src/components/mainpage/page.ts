class MainPage extends HTMLElement {
  private shadowDom: ShadowRoot;

  constructor() {
    super();
    this.shadowDom = this.attachShadow({ mode: "open" });
    if (window.location.hash === "#skills") {
      this.shadowDom.innerHTML = "<skills-body></skills-body>";
    } else if (window.location.hash === "#about") {
      this.shadowDom.innerHTML = "<about-body></about-body>";
    } else {
      this.shadowDom.innerHTML = "<home-body></home-body>";
    }
  }
  static get observedAttributes() {
    return ["historylacation"];
  }
  
  htmlchange(html: string) {
    this.shadowDom.innerHTML = html;
  }
  
  attributeChangedCallback(name: string, oldval: string, newval: string) {
    if (name === "historylacation") {
      if (oldval === newval) return;
      switch (newval) {
        case "home":
          this.htmlchange("<home-body></home-body>");
          break;
        case "skills":
          this.htmlchange("<skills-body></skills-body>");
          break;
        case "about":
          this.htmlchange("<about-body></about-body>");
          break;
        default:
          this.htmlchange("<home-body></home-body>");
      }
    }
  }
}
customElements.define("main-page", MainPage);
