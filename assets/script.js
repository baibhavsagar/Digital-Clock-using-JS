setInterval(function() {
    var curentTime = new Date();
    var hours = curentTime.getHours();
    var minutes = curentTime.getMinutes();
    var seconds = curentTime.getSeconds();
   var period = "AM";

   if(hours >= 12) {
       period = "PM";
   }
   if(hours > 12) {
       hours = hours - 12;
   }
    if(seconds < 10) {
        seconds = "0" + seconds;
    }   
    if(minutes < 10) {
        minutes = "0" + minutes;
    }
    var clockTime = hours + ":" + minutes + ":" + seconds + " " + period;
    var clock = document.getElementById('clock');
    clock.innerText = clockTime;
}, 1000);
