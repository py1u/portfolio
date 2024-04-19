const background = document.getElementById('blurred-background');

// Change the gradient colors
background.style.background = `radial-gradient(circle at 50% 50%, ${getRandomColor()}, rgba(76, 0, 255, 0))`;

// Change the blur radius
background.style.filter = `blur(${getRandomNumber(1, 10)}px)`;

function getRandomColor() {
  return `rgba(${getRandomNumber(0, 255)}, ${getRandomNumber(0, 255)}, ${getRandomNumber(0, 255)}, 1)`;
}

function getRandomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}