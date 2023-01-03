const hourHand = document.querySelector(".hour-hand");
const minuteHand = document.querySelector(".minute-hand");
const secondHand = document.querySelector(".second-hand");

const hourValue = document.querySelector("#hour");
const minuteValue = document.querySelector("#minutes");
const secondValue = document.querySelector("#seconds");

const day = document.querySelector("#day");
const month = document.querySelector("#month");
const year = document.querySelector("#year");

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

  if (hr < 10) {
    hour.textContent = "0" + hr;
  } else {
    hour.textContent = hr;
  }

  if (min < 10) {
    minute.textContent = "0" + min;
  } else {
    minute.textContent = min;
  }

  if (sec < 10) {
    second.textContent = "0" + sec;
  } else {
    second.textContent = sec;
  }
}

function setDate() {
  date = new Date();
  d = date.getDate();
  m = date.getMonth();
  y = date.getFullYear();

  day.textContent = d;
  year.textContent = y;

  var monthMap = [
    "January",
    "Febrauary",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  month.textContent = monthMap[m];

  // console.log(m);

  // switch (m) {
  //   case m === 0:
  //     month.textContent = "January";
  //     break;
  // default:
  //   month.textContent = "Wrong";
  //   break;
  // }
}

setInterval(setTime, 1000);
setInterval(setWrittenTime, 1000);
setInterval(setDate, 100000);

setTime();
setWrittenTime();
setDate();
