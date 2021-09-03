import html from "./header.html";
class Header extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
    this.shadowRoot.innerHTML = html.trim();
    let firstclick = this.shadowRoot.getElementById("first");
    let secondclck = this.shadowRoot.getElementById("second");
    let thirdclick = this.shadowRoot.getElementById("third");
    let ownclass = this;
    console.log(firstclick, secondclck, thirdclick);
    firstclick.addEventListener("click", (e) =>
      this.homeredirect(this.shadowRoot, ownclass)
    );
    secondclck.addEventListener("click", (e) =>
      this.skillsredirect(this.shadowRoot, ownclass)
    );
    thirdclick.addEventListener("click", (e) =>
      this.aboutrefirect(this.shadowRoot, ownclass)
    );
    window.addEventListener("keydown", (e) => {
      e.preventDefault();
      let getattribute = document
        .getElementById("root")
        .getAttribute("historylacation");
      if (e.key !== undefined) {
        if (e.key === "ArrowRight") {
          if (getattribute === "home") {
            this.skillsredirect(this.shadowRoot, ownclass);
          } else if (getattribute === "skills") {
            this.aboutrefirect(this.shadowRoot, ownclass);
          } else if (getattribute === "about") {
            this.homeredirect(this.shadowRoot, ownclass);
          }
        } else if (e.key === "ArrowLeft") {
          if (getattribute === "home") {
            this.aboutrefirect(this.shadowRoot, ownclass);
          } else if (getattribute === "skills") {
            this.homeredirect(this.shadowRoot, ownclass);
          } else if (getattribute === "about") {
            this.skillsredirect(this.shadowRoot, ownclass);
          }
        }
      }
    });
  }
  static atributeset(attribute, where) {
    let root = document.getElementById("root");
    console.log;
    root.setAttribute(attribute, where);
  }
  elementRemoveClass(root, ids, classtoremove) {
    for (let i = 0; i < ids.length; i++) {
      let element = root.getElementById(ids[i]);
      element.classList.remove(classtoremove);
    }
  }
  elementAddClass(root, id, classname) {
    let elementwithclass = root.getElementById(id);
    elementwithclass.classList.add(classname);
  }
  homeredirect(shadow, ownclass) {
    ownclass.elementRemoveClass(
      shadow,
      ["first", "second", "third"],
      "underline"
    );
    ownclass.elementAddClass(shadow, "first", "underline");
    Header.atributeset("historylacation", "home");
  }
  skillsredirect(shadow, ownclass) {
    ownclass.elementRemoveClass(
      shadow,
      ["first", "second", "third"],
      "underline"
    );
    ownclass.elementAddClass(shadow, "second", "underline");
    Header.atributeset("historylacation", "skills");
  }
  aboutrefirect(shadow, ownclass) {
    ownclass.elementRemoveClass(
      shadow,
      ["first", "second", "third"],
      "underline"
    );
    ownclass.elementAddClass(shadow, "third", "underline");
    Header.atributeset("historylacation", "about");
  }
}
customElements.define("app-header", Header);
