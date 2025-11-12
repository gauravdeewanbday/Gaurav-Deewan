
// --- Newton’s Birthday Scene (2 Bubbles + Left-Offset Placement) ---
document.addEventListener("DOMContentLoaded", () => {
  const scene = document.getElementById("scene");
  const newton = document.getElementById("portrait-container");
  const nextBtn = document.getElementById("nextBtn");
  const stage1 = document.getElementById("stage1");
  const stage2 = document.getElementById("stage2");

  let thoughtCount = 0;
  let bubbleInterval;

  // Start apples and Newton's brief thinking moment
  setTimeout(() => startThinking(), 1500);

  function spawnApple() {
    const apple = document.createElement("img");
    apple.src = "apple.png";
    apple.classList.add("apple");
    apple.style.left = 50 + (Math.random() * 40 - 20) + "%";
    apple.style.top = "-60px";
    scene.appendChild(apple);
    setTimeout(() => apple.remove(), 3000);
  }

  // Slightly offset bubble to left (~20%)
  function spawnBubble() {
    const bubble = document.createElement("div");
    bubble.className = "bubble";
    bubble.textContent = "🤔  Chalo bachche pareshan karte hai!";
    newton.appendChild(bubble);

    // Custom left offset (20%)
    bubble.style.left = "20%";

    setTimeout(() => bubble.remove(), 3500);
  }

  // Only two bubbles, then silence
  function startThinking() {
    bubbleInterval = setInterval(() => {
      if (thoughtCount < 2) {
        spawnBubble();
        thoughtCount++;
      } else {
        clearInterval(bubbleInterval);
      }
    }, 2600);

    // Apples continue falling forever
    setInterval(spawnApple, 1000);
  }

  // Transition to gravity roast section
  nextBtn.addEventListener("click", () => {
    stage1.classList.remove("active");
    setTimeout(() => {
      stage2.classList.add("active");
      const lines = document.querySelectorAll(".sarcasm p");
      lines.forEach((line, i) => {
        line.style.animationDelay = `${i * 0.35}s`;
      });
    }, 800);
  });
});