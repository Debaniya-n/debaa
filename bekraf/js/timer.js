// Set the date we're counting down to
var countDownDate = new Date("Nov 10, 2019 10:00:00").getTime();

// Update the count down every 1 second
var x = setInterval(function() {

  // Get today's date and time
  var now = new Date().getTime();

  // Find the distance between now and the count down date
  var distance = countDownDate - now;

  // Time calculations for days, hours, minutes and seconds
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);

  // Display the result in the element with id="demo"
  document.getElementById("count").innerHTML = days + "d " + hours + "h "
  + minutes + "m " + seconds + "s <div style='margin-top:50px'>Left Until Orenji Jicoma 2019</div>";

  // If the count down is finished, write some text
  if (distance < 0) {
    clearInterval(x);
    document.getElementById("count").innerHTML = "Event Ongoing Now!";
  }
}, 1000);

//from w3schools thank you uwu