// todo: validation

const valueEl = document.getElementById('value');
let value = + localStorage.getItem('total') || 0;
let hourRate = localStorage.getItem('hourRate');
let interval;
const REFRESH_RATE = 100;

if (hourRate) {
  document.getElementById("rate").value = hourRate;
  run();
}

function onChange() {
  hourRate = document.getElementById("rate").value;
  localStorage.setItem("hourRate", hourRate);
  run();
}

function run() {
  if (interval) {
    clearInterval(interval);
  }
  interval = setInterval(() => {
    value += hourRate / (60 * 60 * REFRESH_RATE);
    render();
  }, REFRESH_RATE); // todo: set interval depends of value // limit maximum refresh ration
}

function render() {
  localStorage.setItem('total', value);
  valueEl.value = `$ ${Math.round((value + Number.EPSILON) * 100) / 100}`;
}