const photoarray = [
    "https://cdn.pixabay.com/photo/2020/04/18/18/20/catrina-5060422__340.jpg",
    "https://cdn.pixabay.com/photo/2020/02/20/18/58/funnel-web-spider-4865535__340.jpg",
    "https://cdn.pixabay.com/photo/2020/09/23/19/58/ghost-5596921__340.jpg",
    "https://cdn.pixabay.com/photo/2020/05/29/06/42/cat-5233986__340.jpg",
    "https://cdn.pixabay.com/photo/2020/10/21/19/43/jack-o-lanterns-5674148__340.jpg",
    "https://cdn.pixabay.com/photo/2020/10/11/09/04/peak-5645235__340.jpg",
    "https://cdn.pixabay.com/photo/2019/06/13/11/22/golden-gate-bridge-4271364__340.jpg"
];
let startindex = 0;
let idinterval;
function buttonclikc(photoindex,interval){
    let karuzela = document.getElementById("carousellelement")
    karuzela.src = photoarray[photoindex]
    startindex = photoindex;
    clearInterval(interval);
    idinterval = setInterval(changePicture,1500);
}
function onload(){
    let element = document.getElementById("carousellelement")
    element.src = photoarray[startindex]
    let secondelement = document.getElementById("buttonelements")
    for(let i in photoarray){
        let lielement = document.createElement("li");
        lielement.classList.add("lielement");
        lielement.textContent=" ";
        secondelement.appendChild(lielement);
    }
    idinterval = setInterval(changePicture,2300)
    let lielements = document.getElementsByClassName("lielement");
    for(let i = 0;i<photoarray.length;i++){
        lielements[i].addEventListener('click',()=>buttonclikc(i,idinterval))
    }
    
    
}
function changePicture(){
    let futureindex = startindex + 1;
    if(futureindex >= photoarray.length)
        startindex = 0;
    else{
        startindex = futureindex;
    }
    let karuzela = document.getElementById("carousellelement")
    karuzela.classList.remove("animation")
    karuzela.classList.add("animationoff")
    karuzela.classList.add("animation")
    setTimeout(()=>{
        karuzela.classList.remove("animationoff")
        karuzela.src = photoarray[startindex]
    },800)
}
function nextPhoto(){
    let futureindex = startindex+1;
    if(futureindex >= photoarray.length){
        startindex = 0;
    }else{
        startindex = futureindex;
    }
}
function previuousPhoto(){

}