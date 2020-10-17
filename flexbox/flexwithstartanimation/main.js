let leftpanel = false
function indissapearbuttonclick(event){
    let clickedElement = event.target;
    console.log(clickedElement)
    clickedElement.classList.remove("buttonendanimation-only")
    setTimeout(()=>{
        clickedElement.classList.add("buttonendanimation-secondanimation")
        setTimeout(()=>{
            let element = document.getElementsByClassName("entrance")[0];
            element.classList.add("entrance-animation");
            console.log(element);
            
        },250)
    },450);
}
function leftpanelClickHandle(){
    if (leftpanel === false){
        let element = document.getElementsByClassName("leftcontainer")[0];
        element.classList.remove("leftcontainer-animation-back")
        element.classList.add("leftcontainer-animation");
        let elementnext = document.getElementsByClassName("left-word-visible")[0]
        elementnext.classList.add("left-word-novisible")
        let elementnextnext = document.getElementsByClassName("leftclose")[0]
        elementnextnext.classList.add("leftclose-visible")
        leftpanel=!leftpanel
    }else{
        let element = document.getElementsByClassName("leftcontainer")[0];
        element.classList.remove("leftcontainer-animation")
        element.classList.add("leftcontainer-animation-back")
        let elementnext = document.getElementsByClassName("left-word-visible")[0]
        elementnext.classList.remove("left-word-novisible")
        let elementnextnext = document.getElementsByClassName("leftclose")[0]
        elementnextnext.classList.remove("leftclose-visible")
        leftpanel=!leftpanel
    }
}