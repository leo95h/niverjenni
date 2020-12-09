const year = new Date().getFullYear();
const nextYear = year+1;
const thirteenDecember = new Date("Dec 13,"+ year+ " 00:00:00").getTime();
const thirteenDecemberNextYear = new Date("Dec 13, "+ nextYear + " 00:00:00").getTime();
const month = new Date().getMonth();

// countdown
let timer = setInterval(function() {

  // get today's date
  const today = new Date().getTime();
  // get the difference
  console.log(month);
  let diff;
  if(month < 11) {
    diff = thirteenDecemberNextYear - today;
  } else {
    diff = thirteenDecember - today;
  }




  // math
  let days = Math.floor(diff / (1000 * 60 * 60 * 24));
  let hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  let minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
  let seconds = Math.floor((diff % (1000 * 60)) / 1000);

  // display
  document.getElementById("timer").innerHTML =
    "<div class=\"days\"> \
  <div class=\"numbers\">" + days + "</div>Dias</div> \
<div class=\"hours\"> \
  <div class=\"numbers\">" + hours + "</div>Horas</div> \
<div class=\"minutes\"> \
  <div class=\"numbers\">" + minutes + "</div>Minutos</div> \
<div class=\"seconds\"> \
  <div class=\"numbers\">" + seconds + "</div>Segundos</div> \
</div>";

  // display
  document.getElementById("timer2").innerHTML =
    "<div class=\"days\"> \
  <div class=\"numbers\">" + days + "</div>Dias</div> \
<div class=\"hours\"> \
  <div class=\"numbers\">" + hours + "</div>Horas</div> \
<div class=\"minutes\"> \
  <div class=\"numbers\">" + minutes + "</div>Minutos</div> \
<div class=\"seconds\"> \
  <div class=\"numbers\">" + seconds + "</div>Segundos</div> \
</div>";

}, 1000);