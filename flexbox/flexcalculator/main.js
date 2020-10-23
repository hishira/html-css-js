let STRINGVALUE = "";
let stos = [];
let lastclick = "";
function buttonclick(e) {
  STRINGVALUE += e.target.innerText;
  let screen = document.getElementsByClassName("screenrow")[0];
  screen.innerHTML = STRINGVALUE;
  lastclick = STRINGVALUE;
}
function calcbutton(e) {
  if (
    lastclick === "+" ||
    lastclick === "-" ||
    lastclick === "x" ||
    lastclick === "\\" ||
    lastclick === ""
  )
    return;
  stos.push(parseFloat(STRINGVALUE));
  stos.push(e.target.innerText);
  STRINGVALUE = "";
  lastclick = e.target.innerText;
}
function calculation(e) {
  if (STRINGVALUE !== "") stos.push(parseFloat(STRINGVALUE));
  else if (stos.length < 3) return;
  STRINGVALUE = "";
  let value = 0;
  let numberstos = [];
  for (let i = 0; i < stos.length; i++) {
    if (stos[i] !== "x" && stos[i] !== "\\") numberstos.push(stos[i]);
    else if (stos[i] === "x" || stos[i] === "\\") {
      if (i + 1 >= stos.length) continue;
      let newvalue =
        stos[i] === "x"
          ? numberstos[numberstos.length - 1] * stos[i + 1]
          : numberstos[numberstos.length - 1] / stos[i + 1];
      numberstos.pop(numberstos.length - 1);
      numberstos.push(newvalue);
      i += 1;
    }
  }
  let valuetmp = 0;
  let lastvalue = 0;
  for (let i = 0; i < numberstos.length; i++) {
    if (numberstos[i] === "+" && i + 1 < numberstos.length) {
      console.log(numberstos[i]);
      valuetmp += numberstos[i + 1];
      i += 1;
    } else if (numberstos[i] === "-" && i + 1 < numberstos.length) {
      console.log(numberstos[i]);
      valuetmp -= numberstos[i + 1];
      i += 1;
    } else {
      console.log(numberstos[i]);
      valuetmp += numberstos[i];
    }
  }
  STRINGVALUE = valuetmp;
  let screen = document.getElementsByClassName("screenrow")[0];
  screen.innerHTML = STRINGVALUE;
}
