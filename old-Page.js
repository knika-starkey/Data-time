let t;
let count = 0;
let finish = prompt("Сколько секунд?");

function ticker() {
  if (count >= 60) {
    let min = Math.round(count / 60);
    let sec = count - min * 60;
    document.getElementById(
      "old"
    ).innerHTML = `Ви знаходитесь на сторінці:${min}:${sec}`;
  } else
    document.getElementById(
      "old"
    ).innerHTML = `Ви знаходитесь на сторінці: ${count}`;
  count++;
  if (count >= finish) {
    clearInterval(t);
    document.getElementById("old").innerHTML = "Сторінка застаріла!";
  }
}
t = setInterval(ticker, 1000);
