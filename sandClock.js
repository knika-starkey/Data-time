let t;
//let count = 0;
let sand = prompt(`об'єм "піску" (кількістю секунд`);
function ticker() {
  sand--;
  if (sand >= 60) {
    let min = Math.round(sand / 60);
    let sec = sand - min * 60;
    document.getElementById("sandTime").innerHTML = `${min}:${sec}`;
  } else document.getElementById("sandTime").innerHTML = sand;
  //   count++;
  if (0 == sand) {
    clearInterval(t);
    document.getElementById("sandTime").innerHTML = "Ваш час минув";
  }
}
t = setInterval(ticker, 1000);
