// Countdown target: 12.11.2025 09:20 (local time)
const TARGET_DATE = new Date("2025-11-12T09:20:00");

const minutesEl = document.getElementById("minutes");
const secondsEl = document.getElementById("seconds");

function pad(n) {
  return String(n).padStart(2, "0");
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
}

updateCountdown();
setInterval(updateCountdown, 1000);