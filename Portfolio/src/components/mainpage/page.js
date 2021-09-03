class MainPage extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
    if (window.location.hash === "#skills") {
      this.shadowRoot.innerHTML = "<skills-body></skills-body>";
    } else if (window.location.hash === "#about") {
      this.shadowRoot.innerHTML = "<about-body></about-body>";
    } else {
      this.shadowRoot.innerHTML = "<home-body></home-body>";
    }
  }
  static get observedAttributes() {
    return ["historylacation"];
  }
  htmlchange(html) {
    this.shadowRoot.innerHTML = html;
  }
  attributeChangedCallback(name, oldval, newval) {
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
