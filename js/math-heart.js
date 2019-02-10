var width = 750,
    height = 420;
var canvas = d3.select('#container')
               .append('canvas')
               .attr('width', width)
               .attr('height', height),
    context = canvas.node()
                    .getContext('2d'),
    radius = 200,
    range = 200,
    multiplier = 1;

var points = d3.range(range).map(dotsOnCircle);
var interval = setInterval(ticked, 1500);
ticked();

function ticked() {
  context.clearRect(0, 0, width, height);
  multiplier++;
  console.log(`Ticked multiplier: ${multiplier}`)
  var links = points.map(linkDots)

  context.beginPath();
  links.forEach(drawLink);
  context.strokeStyle = "#aaa";
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
  context.arc(x, y, 3, 0, 2 * Math.PI);
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
