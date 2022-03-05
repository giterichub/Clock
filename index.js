setInterval(setClockq, 1000);
var daysOfWeek = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];
function setClockq(){
  var currentDate = new Date();
  var days = currentDate.getDay();
  var seconds = currentDate.getSeconds();
  var minutes = currentDate.getMinutes();
  var hours = currentDate.getHours();
  var dayName = daysOfWeek[days];
  if(seconds < 10){
    seconds = '0' + seconds;
  }

  if(minutes < 10){
    minutes = '0' + minutes;
  }

  if(hours < 10){
    hours = '0' + hours;
  }
  document.querySelector(".day1").innerHTML = dayName;
  document.querySelector(".hour1").innerHTML = hours;
  document.querySelector(".hour2").innerHTML = minutes;
  document.querySelector(".hour3").innerHTML = seconds;
}
setClockq();
