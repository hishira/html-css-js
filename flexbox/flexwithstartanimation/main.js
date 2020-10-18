let leftpanel = false;
let MAINCONTAINERCENTERHOME = "maincontainer-center-home";
let lASTVALUE = "maincontainer-center-home";
function indissapearbuttonclick(event) {
  let clickedElement = event.target;
  console.log(clickedElement);
  clickedElement.classList.remove("buttonendanimation-only");
  setTimeout(() => {
    clickedElement.classList.add("buttonendanimation-secondanimation");
    setTimeout(() => {
      let element = document.getElementsByClassName("entrance")[0];
      element.classList.add("entrance-animation");
      console.log(element);
    }, 250);
  }, 450);
}
function leftpanelClickHandle() {
  if (leftpanel === false) {
    let element = document.getElementsByClassName("leftcontainer")[0];
    element.classList.remove("leftcontainer-animation-back");
    element.classList.add("leftcontainer-animation");
    let elementnext = document.getElementsByClassName("left-word-visible")[0];
    elementnext.classList.add("left-word-novisible");
    let elementnextnext = document.getElementsByClassName("leftclose")[0];
    elementnextnext.classList.add("leftclose-visible");
    leftpanel = !leftpanel;
  } else {
    let element = document.getElementsByClassName("leftcontainer")[0];
    element.classList.remove("leftcontainer-animation");
    element.classList.add("leftcontainer-animation-back");
    let elementnext = document.getElementsByClassName("left-word-visible")[0];
    elementnext.classList.remove("left-word-novisible");
    let elementnextnext = document.getElementsByClassName("leftclose")[0];
    elementnextnext.classList.remove("leftclose-visible");
    leftpanel = !leftpanel;
  }
}
function aboutappear() {
  let element = document.getElementsByClassName(lASTVALUE)[0];
  element.classList.remove("animate");
  element.classList.add("stop-animation");
  setTimeout(() => {
    let secondelement = document.getElementsByClassName(
      "maincontainer-center-about"
    )[0];
    lASTVALUE = "maincontainer-center-about";
    secondelement.classList.remove("stop-animation");
    secondelement.classList.add("animate");
  },900);
}
function projectsappear() {
  let element = document.getElementsByClassName(lASTVALUE)[0];
  element.classList.remove("animate");
  element.classList.add("stop-animation");
  setTimeout(() => {
    let secondelement = document.getElementsByClassName(
      "maincontainer-center-about"
    )[0];
    lASTVALUE = "maincontainer-center-about";
    secondelement.classList.remove("stop-animation");
    secondelement.classList.add("animate");
  },900);
}
function homeappear() {
    let element = document.getElementsByClassName(lASTVALUE)[0];
    element.classList.remove("animate");
    element.classList.add("stop-animation");
    setTimeout(() => {
      let secondelement = document.getElementsByClassName(
        "maincontainer-center-home"
      )[0];
      lASTVALUE = "maincontainer-center-home";
      secondelement.classList.remove("stop-animation");
      secondelement.classList.add("animate")
    },900);
  }
