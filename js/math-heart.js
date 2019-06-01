var width = 320,
    height = 320;
const lineColor = '#c76868';


var canvas = d3.select('#container')
               .append('canvas')
               .attr('width', width)
               .attr('height', height),
    context = canvas.node()
                    .getContext('2d'),
    radius = 150,
    range = 200,
    multiplier = qs['multiplier'] || 2;
var multiplierInput = document.getElementById("multiplierInput");
var points = d3.range(range).map(dotsOnCircle);
var interval = null
if (!qs['multiplier']){
   interval = setInterval(ticked, 1500);
}
ticked();

document.addEventListener('keyup', (event) => {
  const keyName = event.key;
  stopInterval();
  if (keyName === 'ArrowLeft' || keyName === 'ArrowDown') {
    stepLeft()
  } else if (keyName === 'ArrowRight' || keyName === 'ArrowUp') {
    stepRight()
  } else if (keyName === 'Enter') {
    multiplier = +multiplierInput.value;
    ticked();
  }
});

function starInterval() {
  interval = setInterval(()=>{
    multiplier++
    ticked();
  }, 500);
}

function stopInterval() {
  clearInterval(interval)
}

function stepLeft(){
  stopInterval();
  multiplier--;
  ticked(multiplier);
}
function stepRight(){
  stopInterval();
  multiplier++;
  ticked(multiplier);
}

function ticked(step) {
  context.clearRect(0, 0, width, height);
  multiplierInput.value = multiplier = step || multiplier;
  console.log(`Ticked multiplier: ${multiplier}`)
  var links = points.map(linkDots)

  context.beginPath();
  links.forEach(drawLink);
  context.strokeStyle = lineColor;
  context.stroke();

  context.beginPath();
  points.forEach(drawNode)
  context.fill();
  context.strokeStyle = "#fff";
  context.stroke()
};
function drawLink(d) {
  context.moveTo(d.source.x, d.source.y);
  context.lineTo(d.target.x, d.target.y);
}
function drawNode(d) {
  const [x, y] = d;
  context.moveTo(x + 3, y);
  context.arc(x, y, 2, 0, 2 * Math.PI);
}
function dotsOnCircle(index) {
  var r = radius;
  var angle = Math.PI*1/2 + Math.PI*2 * index / range;
  return [
    width/2 + r * Math.cos(angle),
    height/2 + r * Math.sin(angle)
  ];
}
function linkDots(el, index){
  const total = range;
  const target = points[ index * multiplier % total ];
  return {
    source: {
      x: el[0],
      y: el[1]
    },
    target: {
      x: target[0],
      y: target[1]
    }
  };
}
