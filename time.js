// let d1 = new Date();
// let d2 = new Date(2023, 0, 01);
// let ms = d2.getTime() - d1.getTime(); //разница в милисекундах
// let s = ms / 1000; //разница в секундах
// let m = s / 60; //разница в минутах
// let h = m / 60; //разница в часах
// let d = Math.floor(h / 24); //разница в днях
// document.write(`
//   Сегодня
//   ${d1.getDate()}.
//     ${d1.getMonth() + 1}.
//     ${d1.getFullYear()}<br>Осталось до
//     ${d2.getDate()}.
//     ${d2.getMonth() + 1}.
//     ${d2.getFullYear()}: дней -
//     ${d}; часов -
//     ${h}; минут -
//     ${m}; секунд -
//     ${s}`);

function startTime() {
  let date = new Date();
  let hours = date.getHours();
  let minutes = date.getMinutes();
  let seconds = date.getSeconds();
  if (hours < 10) hours = "0" + hours;
  if (minutes < 10) minutes = "0" + minutes;
  if (seconds < 10) seconds = "0" + seconds;
  document.getElementById("time").innerHTML =
    hours + ":" + minutes + ":" + seconds; // Выбор элемента документа по его id = "time"
  setInterval(startTime, 1000);
}
