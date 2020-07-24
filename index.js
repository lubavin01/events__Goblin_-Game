import './css/style.css';

let goblinCell;
let score = 0;
let mistakes = 0;
const img = document.getElementById('goblin');

function random(min, max) {
  return Math.floor(min + Math.random() * (max + 1 - min));
}

function drawResults() {
  document.getElementById('score').textContent = score;
  document.getElementById('mistakes').textContent = mistakes;
}

function drawGoblin() {
  const idx = random(1, 16);

  goblinCell = document.getElementById(`cell${idx}`);
  goblinCell.append(img);
}

const board = document.querySelector('.board');
board.addEventListener('mouseover', (e) => {
  if (!e.target.classList.contains('cell')) return;

  e.target.classList.add('cursor');
});

board.addEventListener('mouseleave', (e) => {
  if (!e.target.classList.contains('cell')) return;

  e.target.style.cursor = 'auto';
});

board.addEventListener('click', (e) => {
  if (!(e.target.classList.contains('cell') || e.target.classList.contains('goblin'))) return;

  if (e.target === goblinCell || e.target === img) {
    score += 1;
  } else {
    mistakes += 1;
  }
  drawResults();

  if (mistakes >= 5) {
    alert('game over');
    mistakes = 0;
    score = 0;
    drawResults();
  }
});

drawGoblin();
drawResults();
img.classList.remove('hidden');

setInterval(drawGoblin, 1000);
