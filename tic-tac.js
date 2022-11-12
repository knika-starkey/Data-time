let tick = true;
let t;
//let count = 0;
function ticker() {
  let d1 = new Date();
  if (tick) {
    document.write("Тік ");
    tick = false;
  } else {
    document.write("Так ");
    tick = true;
  }
  //   count++;
  if (Math.round((d1.getTime() - d.getTime()) / 1000) == 10) {
    clearInterval(t);
  }
}
let d = new Date();
t = setInterval(ticker, 1000);
