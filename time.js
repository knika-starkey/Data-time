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
// Установить дату и время в будущем
let date_in_future = new Date(2023, 0, 1, 0, 0, 0); // 1.01.2020, 10:32:04
let x;
function timer() {
  // Установить дату и время текущего момента
  let date = new Date().getTime();
  // Разница в милисекундах между текущей и будущей датой
  let ms = date_in_future - date;
  // Подсчет разницы времени в днях, часах, минутах и секундах
  let days = Math.floor(ms / (1000 * 60 * 60 * 24));
  let hours = Math.floor((ms % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  let minutes = Math.floor((ms % (1000 * 60 * 60)) / (1000 * 60));
  let seconds = Math.floor((ms % (1000 * 60)) / 1000);
  // Показать результат в теге с id="time"
  document.getElementById(
    "timer"
  ).innerHTML = `До нового року залишилось: ${days} днів ${hours} годин ${minutes} хвилин ${seconds} секунд`;
  // Если время истекло, показать сообщение
  if (ms < 0) {
    clearInterval(x);
    document.getElementById("timer").innerHTML = "Час закінчився!";
  }
  x = setInterval(timer, 1000);
}

function startTime() {
  let date = new Date();
  let hours = date.getHours();
  let minutes = date.getMinutes();
  let seconds = date.getSeconds();
  if (hours < 10) hours = "0" + hours;
  if (minutes < 10) minutes = "0" + minutes;
  if (seconds < 10) seconds = "0" + seconds;
  document.getElementById(
    "timeNow"
  ).innerHTML = `Зараз: ${hours}:${minutes}:${seconds}`; // Выбор элемента документа по его id = "time"
  setInterval(startTime, 1000);
}
