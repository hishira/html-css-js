const { Board, Led, Button } = require("johnny-five");
const board = new Board({ port: "COM3" });
let flag = false;
let sf = false;
board.on("ready", () => {
  const led = new Led(13);
  const led2 = new Led(12);
  const led3 = new Led(11);
  let button = new Button({ pin: 2 });
  let button3 = new Button({pin:3});
  button.on("down", () => {
        if(!flag)
            led.on();
        else
            led.off();
        flag=!flag
  });
  button3.on("down",()=>{
    if(!sf){
      let rand = Math.random();
      if(rand  < 0.5)
        led2.on();
      else
        led3.on();
      sf=!sf;
    }else{
      led2.off();
      led3.off();
      sf=!sf;
    }
  })
  board.on("exit", () => {
    led.off();
    led2.off();
    led3.off();
  });
});
