const portrait = document.getElementById('portrait-container');
const tree = document.getElementById('tree');
const treeRect = () => tree.getBoundingClientRect();

function createApple() {
  const apple = document.createElement('div');
  apple.className = 'apple';
  apple.textContent = '🍎';

  const tr = treeRect();
  const x = tr.left + 20 + Math.random() * (tr.width - 40);
  apple.style.left = x + 'px';

  const duration = 3 + Math.random() * 2;
  apple.style.animation = `fall ${duration}s linear forwards`;
  document.body.appendChild(apple);

  const startY = -50, endY = window.innerHeight + 50;
  const pr = portrait.getBoundingClientRect();
  const collisionY = pr.top + pr.height * 0.2;
  const collideTime = duration * ((collisionY - startY)/(endY - startY));

  setTimeout(() => triggerImpact(apple), collideTime * 1000);
}

function triggerImpact(apple) {
  apple.style.animation = `bounce 1s ease-out forwards`;
  portrait.classList.add('angry');
  setTimeout(() => portrait.classList.remove('angry'), 1800);
  setTimeout(() => apple.remove(), 1000);
}

// Start apples
setInterval(createApple, 500);

// Turn Newton after a moment
setTimeout(() => {
  portrait.classList.add('turn');
}, 2000);

document.getElementById('continueBtn')
  .addEventListener('click', () => {
    window.location.href = 'questions.html';
  });

