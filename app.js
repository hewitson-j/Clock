const hourHand = document.querySelector(".hour-hand");
const minuteHand = document.querySelector(".minute-hand");
const secondHand = document.querySelector(".second-hand");

const hourValue = document.querySelector("#hour");
const minuteValue = document.querySelector("#minutes");
const secondValue = document.querySelector("#seconds");

function setTime() {
  d = new Date(); //object of date()
  hr = d.getHours();
  min = d.getMinutes();
  sec = d.getSeconds();
  hr_rotation = 30 * hr + min / 2; //converting current time
  min_rotation = 6 * min;
  sec_rotation = 6 * sec;
  hour = document.querySelector(".hour-hand");
  minute = document.querySelector(".minute-hand");
  second = document.querySelector(".second-hand");
  hour.style.transform = `rotate(${hr_rotation}deg)`;
  minute.style.transform = `rotate(${min_rotation}deg)`;
  second.style.transform = `rotate(${sec_rotation}deg)`;
}

function setWrittenTime() {
  d = new Date();
  hr = d.getHours();
  min = d.getMinutes();
  sec = d.getSeconds();
  hour = hourValue;
  minute = minuteValue;
  second = secondValue;

  hour.textContent = hr;
  minute.textContent = min;
  second.textContent = sec;
}

setInterval(setTime, 1000);
setInterval(setWrittenTime, 1000);

setTime();
setWrittenTime();
