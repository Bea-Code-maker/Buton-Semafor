const button = document.getElementById('trafficLightButton');
const colors = ['btn-danger', 'btn-warning', 'btn-success'];
let count = 0;

function changeColor() {
  button.className = `btn ${colors[count++ % 3]}`;
}

button.addEventListener('click', changeColor);
setInterval(changeColor, 10000);

