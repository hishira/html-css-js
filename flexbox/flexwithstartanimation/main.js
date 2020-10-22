let leftpanel = false;
let MAINCONTAINERCENTERHOME = "maincontainer-center-home";
let lASTVALUE = "maincontainer-center-home";
let TIMEOUT = 500;
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
    firsthelper();
  setTimeout(() => {
    secondHelper("maincontainer-center-about")
  }, TIMEOUT);
}
function homeappear() {

    firsthelper();
  setTimeout(() => {
    secondHelper("maincontainer-center-home")
  }, TIMEOUT);
}
function projectsappear() {
  firsthelper();
  setTimeout(() => {
    secondHelper("maincontainer-center-projects")
  }, TIMEOUT );
}
function firsthelper() {
  let element = document.getElementsByClassName(lASTVALUE)[0];
  element.classList.remove("animate");
  element.classList.add("stop-animation");
  
}
function secondHelper(lastcssclass){
  let secondelement = document.getElementsByClassName(
    lastcssclass
  )[0];
  lASTVALUE = lastcssclass;
  secondelement.classList.remove("stop-animation");
  secondelement.classList.add("animate");
}
function starProjects(){
  firsthelper();
  setTimeout(() => {
    secondHelper("maincontainer-center-spacestar")
  }, TIMEOUT );
}
function shopProjects(){
  firsthelper();
  setTimeout(() => {
    secondHelper("maincontainer-center-shop")
  }, TIMEOUT );
}
