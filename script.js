let score = 0;
const button = document.getElementById("clickBtn");
const scoreDisplay = document.getElementById("score");

function moveButton() {
  const x = Math.random() * window.innerWidth;
  const y = Math.random() * window.innerHeight;
  button.style.left = `${x}px`;
  button.style.top = `${y}px`;
}

button.addEventListener("click", () => {
  score++;
  scoreDisplay.textContent = score;
  moveButton();
});

setTimeout(() => {
  button.disabled = true;
  button.textContent = "Game Over!";
}, 30000); // 30 seconds
