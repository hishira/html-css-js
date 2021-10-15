import html from "./header.html";
class Header extends HTMLElement {
  private shadowDom: ShadowRoot;
  constructor() {
    super();
    this.shadowDom = this.attachShadow({ mode: "open" });
    this.shadowDom.innerHTML = html.trim();
    let firstclick: HTMLElement | null = this.shadowDom.getElementById("first");
    let secondclck: HTMLElement | null =
      this.shadowDom.getElementById("second");
    let thirdclick: HTMLElement | null = this.shadowDom.getElementById("third");
    let ownclass: Header = this;
    if (firstclick && secondclck && thirdclick) {
      firstclick.addEventListener("click", (e: MouseEvent) =>
        this.homeredirect(this.shadowDom, ownclass)
      );
      secondclck.addEventListener("click", (e: MouseEvent) =>
        this.skillsredirect(this.shadowDom, ownclass)
      );
      thirdclick.addEventListener("click", (e: MouseEvent) =>
        this.aboutrefirect(this.shadowDom, ownclass)
      );
    }
    window.addEventListener("keydown", (e) => {
      e.preventDefault();
      let getattribute = document
        .getElementById("root")
        ?.getAttribute("historylacation");
      if (e.key !== undefined) {
        if (e.key === "ArrowRight") {
          if (getattribute === "home") {
            this.skillsredirect(this.shadowDom, ownclass);
            window.location.hash = "skills";
          } else if (getattribute === "skills") {
            this.aboutrefirect(this.shadowDom, ownclass);
            window.location.hash = "about";
          } else if (getattribute === "about") {
            this.homeredirect(this.shadowDom, ownclass);
            window.location.hash = "home";
          }
        } else if (e.key === "ArrowLeft") {
          if (getattribute === "home") {
            this.aboutrefirect(this.shadowDom, ownclass);
            window.location.hash = "about";
          } else if (getattribute === "skills") {
            this.homeredirect(this.shadowDom, ownclass);
            window.location.hash = "home";
          } else if (getattribute === "about") {
            this.skillsredirect(this.shadowDom, ownclass);
            window.location.hash = "skills";
          }
        }
      }
    });
  }
  static atributeset(attribute: string, where: string) {
    let root: HTMLElement | null = document.getElementById("root");
    root?.setAttribute(attribute, where);
  }
  public elementRemoveClass(root: ShadowRoot, ids: Array<string>, classtoremove: string) {
    for (let i = 0; i < ids.length; i++) {
      let element: HTMLElement | null = root.getElementById(ids[i]);
      element?.classList.remove(classtoremove);
    }
  }
  public elementAddClass(root: ShadowRoot, id: string, classname: string) {
    let elementwithclass: HTMLElement | null = root.getElementById(id);
    elementwithclass?.classList.add(classname);
  }
  
  public homeredirect(shadow: ShadowRoot, ownclass: Header) {
    ownclass.elementRemoveClass(
      shadow,
      ["first", "second", "third"],
      "underline"
    );
    ownclass.elementAddClass(shadow, "first", "underline");
    Header.atributeset("historylacation", "home");
  }
  
  public skillsredirect(shadow: ShadowRoot, ownclass: Header) {
    ownclass.elementRemoveClass(
      shadow,
      ["first", "second", "third"],
      "underline"
    );
    ownclass.elementAddClass(shadow, "second", "underline");
    Header.atributeset("historylacation", "skills");
  }

  public aboutrefirect(shadow: ShadowRoot, ownclass: Header) {
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
