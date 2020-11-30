const { Board, Led, Button } = require("johnny-five");
const board = new Board({ port: "COM3" });
let flag = false;
board.on("ready", () => {
  const led = new Led(13);
  let button = new Button({ pin: 2 });
  button.on("down", () => {
        if(!flag)
            led.on();
        else
            led.off();
        flag=!flag
        console.log("donw");
  });
  button.on("release", () => {
    //led.off();
    console.log("release");
  });
  board.on("exit", () => {
    //    led.off();
  });
});
