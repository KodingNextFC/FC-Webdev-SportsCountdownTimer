let countdown = 20;
let playerStamina = 0;
let rivalStamina = 0;

const timerDisplay = document.getElementById("timer");
const playerDisplay = document.getElementById("player-stamina");
const rivalDisplay = document.getElementById("rival-stamina");
const playerBar = document.getElementById("player-bar");
const rivalBar = document.getElementById("rival-bar");
const result = document.getElementById("result");
const tapBtn = document.getElementById("tap-button");
const restartBtn = document.getElementById("restart-button");

// Countdown timer every 1 second
const countdownInterval = setInterval(() => {
  countdown--;
  timerDisplay.textContent = countdown;

  if (countdown <= 0) {
    clearInterval(countdownInterval);
    clearInterval(rivalInterval);
    endGame();
  }
}, 1000);

// Rival gains +2 stamina every 0.5 second
const rivalInterval = setInterval(() => {
  rivalStamina += 2;
  rivalDisplay.textContent = rivalStamina;
  rivalBar.style.width = `${Math.min(rivalStamina, 100)}%`;
}, 500);

// Player gets +1 per click
tapBtn.addEventListener("click", () => {
  playerStamina += 1;
  playerDisplay.textContent = playerStamina;
  playerBar.style.width = `${Math.min(playerStamina, 100)}%`;
});

function endGame() {
  tapBtn.disabled = true;
  tapBtn.textContent = "⏳ Time’s Up!";
  restartBtn.style.display = "inline-block";

  if (playerStamina > rivalStamina) {
    result.textContent = "🥇 You Win! Gold Medal!";
    document.body.style.background = "linear-gradient(135deg, #16a34a, #22c55e)";
  } else if (playerStamina === rivalStamina) {
    result.textContent = "🥈 It's a Tie! Silver Medal!";
    document.body.style.background = "linear-gradient(135deg, #9ca3af, #d1d5db)";
  } else {
    result.textContent = "🥉 You Lose! Bronze Medal!";
    document.body.style.background = "linear-gradient(135deg, #7c2d12, #a16207)";
  }
}

restartBtn.addEventListener("click", () => {
  location.reload();
});
