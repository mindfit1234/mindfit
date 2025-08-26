const message = document.getElementById("message");
const timer = document.getElementById("timer");
const start = document.getElementById("start");
const next = document.getElementById("next");
const visi = document.getElementsByClassName("test")
visi.style.display = "none";
let timeleft = 60;
let timeinterval;
 function formatTime(time) {
  const minutes = Math.floor(time / 60);
  const seconds = time % 60;
  const formattedMinutes = String(minutes).padStart(2, "0");
   const formattedSeconds = String(seconds).padStart(2, "0");
   return '${formattedMinutes}:${formattedSeconds}';
}
function startTimer(){
  visi.style.display = "block";
  clearInterval(timeinterval)
  // Set the interval to update the timer every second
      timerInterval = setInterval(() => {
          if (timeLeft > 0) {
              timeLeft--;
              timerDisplay.textContent = formatTime(timeLeft);
          } else {
              // Stop the timer when it reaches zero
              clearInterval(timerInterval);
              timer.textContent = "Time's up!"; 
          }
      }, 1000);
  }
start.addEventListener("click", startTimer)