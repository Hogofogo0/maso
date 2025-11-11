// Countdown target: 12.11.2025 09:20 (local time)
const TARGET_DATE = new Date("2025-11-12T09:20:00");
const metalPipe = new Audio("https://github.com/Hogofogo0/maso/raw/refs/heads/main/assets/jixaw-metal-pipe-falling-sound.mp3");
const airport = new Audio("https://github.com/Hogofogo0/maso/raw/refs/heads/main/assets/airport.mpeg");
const minutesEl = document.getElementById("minutes");
const secondsEl = document.getElementById("seconds");

function pad(n) {
  return String(n).padStart(2, "0");
}

async function playAudio(){
  await metalPipe.play();
  await setTimeout(async ()=>{await airport.play();
                       await setTimeout(async () => {window.location.replace("https://docs.google.com/presentation/d/1AmyAQs8LR-B7KB6GSVj5piJiktSVsFFFday-b2NCIXE/present?slide=id.g2c19ced0f24_0_100#slide=id.g2c19ced0f24_0_100");}, 36000);},2900);
  
  
}

function updateCountdown() {
  const now = new Date();
  let diff = TARGET_DATE - now;

  if (diff <= 0) {
    minutesEl.textContent = "00";
    secondsEl.textContent = "00";
    return;
  }

  const totalSec = Math.floor(diff / 1000);
  const minutes = Math.floor(totalSec / 60);
  const seconds = totalSec % 60;

  minutesEl.textContent = pad(minutes);
  secondsEl.textContent = pad(seconds);
  if(seconds == 0 || minutes == 0) {
    
    playAudio()
  }
}

updateCountdown();
var timer = setInterval(updateCountdown, 1000);
