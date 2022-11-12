"use strict";
let week = ["Нед", "Пн", "Вт", "Сер", "Чт", "Пт", "Сб"];
let d = new Date();
console.log(d);
document.write(
  `${d.getDate()}.${
    d.getMonth() + 1
  }.${d.getFullYear()} ${d.getHours()}:${d.getMinutes()}:${d.getSeconds()} ${
    week[d.getDay()]
  }`
);
document.write(" : " + d.getTime());
let dStart = new Date();
// let dStop = new Date();
// let dif = dStop.getTime() - dStart.getTime();
// document.write(`<br> ${Math.round(dif/1000)}`);
