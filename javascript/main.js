const container = document.querySelector('.container');
const SQUARES = 200;

for (let i = 0; i < SQUARES; i++) {
  let square = document.createElement('div');
  square.classList.add('square');

  square.addEventListener('mouseover', () => setColor(square));
  square.addEventListener("mouseout", () => removeColor(square))

  container.appendChild(square)
}

function removeColor(element) {
  element.style.background = "#1d1d1d";
  element.style.boxShadow = "0 0 2px #000";
}

function setColor(element) {
  const color = generateRandomColor();
  element.style.background = color;
  element.style.boxShadow = `0 0 10px ${color}, 0 0 100px ${color}`;
}

function generateRandomColor() {
  let letters = '0123456789ABCDEF';
  let color = '#';

  for(let i = 0; i < 6; i++) {
    color = color + letters[Math.floor(Math.random() * 16)]
  }
  return color
}

