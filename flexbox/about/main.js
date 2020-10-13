function bodyLoad() {
  let bodyelements = document.getElementsByClassName("foranimation");
  let anotherbodyelements = document.getElementsByClassName(
    "foranotheranimation"
  );
  window.addEventListener("scroll", function () {
    setInterval(function () {
      onScrollFunctionCheckIfElementInView(bodyelements);
      fromlefttorightanimation(anotherbodyelements);
    }, 500);
  });
}

function onScrollFunctionCheckIfElementInView(elements) {
  for (let i of elements) {
    let rect = i.getBoundingClientRect();
    if (
      rect.top <= (window.innerHeight || document.documentElement.clientHeight)
    ) {
      i.classList.add("thirdcontainer-animation-start");
    } else {
      i.classList.remove("thirdcontainer-animation-start");
    }
  }
}

function fromlefttorightanimation(elements) {
  for (let i of elements) {
    let rect = i.getBoundingClientRect();
    if (
      rect.top <= (window.innerHeight || document.documentElement.clientHeight)
    )
      i.classList.add("anotheranimation-start");
    else {
      i.classList.remove("anotheranimation-start");
    }
  }
}
