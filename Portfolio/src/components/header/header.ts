import html from "bundle-text:./header.html";
class Header extends HTMLElement {
  constructor() {
    super();
 
    this.innerHTML = html;
    let firstclick: HTMLElement | null = document.getElementById("first");
    let secondclck: HTMLElement | null =
    document.getElementById("second");
    let thirdclick: HTMLElement | null = document.getElementById("third");
    let ownclass: Header = this;
    
    if (firstclick && secondclck && thirdclick) {
      firstclick.addEventListener("click", (e: MouseEvent) =>
        this.homeredirect(document, ownclass)
      );
      secondclck.addEventListener("click", (e: MouseEvent) =>
        this.skillsredirect(document, ownclass)
      );
      thirdclick.addEventListener("click", (e: MouseEvent) =>
        this.aboutrefirect(document, ownclass)
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
            this.skillsredirect(document, ownclass);
            window.location.hash = "skills";
          } else if (getattribute === "skills") {
            this.aboutrefirect(document, ownclass);
            window.location.hash = "about";
          } else if (getattribute === "about") {
            this.homeredirect(document, ownclass);
            window.location.hash = "home";
          }
        } else if (e.key === "ArrowLeft") {
          if (getattribute === "home") {
            this.aboutrefirect(document, ownclass);
            window.location.hash = "about";
          } else if (getattribute === "skills") {
            this.homeredirect(document, ownclass);
            window.location.hash = "home";
          } else if (getattribute === "about") {
            this.skillsredirect(document, ownclass);
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
  public elementRemoveClass(root: Document, ids: Array<string>, classtoremove: string) {
    for (let i = 0; i < ids.length; i++) {
      let element: HTMLElement | null = root.getElementById(ids[i]);
      element?.classList.remove(classtoremove);
    }
  }
  public elementAddClass(root: Document, id: string, classname: string) {
    let elementwithclass: HTMLElement | null = root.getElementById(id);
    elementwithclass?.classList.add(classname);
  }
  
  public homeredirect(shadow: Document, ownclass: Header) {
    ownclass.elementRemoveClass(
      shadow,
      ["first", "second", "third"],
      "underline"
    );
    ownclass.elementAddClass(shadow, "first", "underline");
    Header.atributeset("historylacation", "home");
  }
  
  public skillsredirect(shadow: Document, ownclass: Header) {
    ownclass.elementRemoveClass(
      shadow,
      ["first", "second", "third"],
      "underline"
    );
    ownclass.elementAddClass(shadow, "second", "underline");
    Header.atributeset("historylacation", "skills");
  }

  public aboutrefirect(shadow: Document, ownclass: Header) {
    ownclass.elementRemoveClass(
      shadow,
      ["first", "second", "third"],
      "underline"
    );
    ownclass.elementAddClass(shadow, "third", "underline");
    Header.atributeset("historylacation", "about");
  }
}
window.customElements.define("app-header", Header);
