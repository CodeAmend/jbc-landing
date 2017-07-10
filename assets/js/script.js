
var jbc = document.getElementById('jbc');
var overlay = document.getElementById('jbc_overlay');

// jbc.addEventListener('mouseover', showOverlay );
//
// function showOverlay(e) {
//   var name = e.target.className;
//   overlay.innerText = name;
// }

function animateTitle() {

}


var draw = SVG('lungs').size(686, 635);

// lungPath and pipePath in svgPath.js must be imported in HTML
var lungs = draw.path(lungPath);
var pipes = draw.path(pipePath);

lungs.attr({
  fill: '#454545'
}).translate(0, 125);

pipes.attr({
  fill: '#A0A0A0'
})
