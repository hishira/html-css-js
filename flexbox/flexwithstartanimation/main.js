
function indissapearbuttonclick(event){
    let clickedElement = event.target;
    console.log(clickedElement)
    clickedElement.classList.remove("buttonendanimation-only")
    setTimeout(()=>{
        clickedElement.classList.add("buttonendanimation-secondanimation")
        setTimeout(()=>{
            let element = document.getElementsByClassName("entrance")[0]
            element.classList.add("entrance-animation")
            console.log(element)
            
        },250)
    },450)
    
    
}