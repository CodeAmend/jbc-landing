var lung = document.getElementById('lungs');

window.onresize = function(e) {
  setLungHeight(e.currentTarget);
}

function setLungHeight(target) {
  var height = target.clientHeight || target.innerHeight;
  var width = target.clientWidth || target.innerWidth;
  lung.style.height = '' + Math.floor(height * 0.6) + 'px';
}

setLungHeight(window);


// NAV buttons
var blog = document.getElementById('blog');
var funds = document.getElementById('funds');


funds.addEventListener('mouseover', blueFlash);
funds.addEventListener('mouseout', lungDefault);
blog.addEventListener('mouseover', redFlash);
blog.addEventListener('mouseout', lungDefault);

//
// SVG Manipulation
//
var draw = SVG('lungs').size(686, 635);

// JBC LOGO
// var text = draw.text("Just Breath Chris");
// text.attr({
//   fill: '#fff'
// })

// LUNGS

// lungPath and pipePath in svgPath.js must be imported in HTML
var lungs = draw.path(lungPath);
var pipes = draw.path(pipePath);
var lungGroup = draw.group();

lungGroup.add(lungs);
lungGroup.add(pipes);

lungs.translate(0, 123);

lungGroup.attr({
  opacity: 0.4
});

function lungDefault() {
  lungs.animate().attr({
    fill: '#454545'
  });

  pipes.animate().attr({
    fill: '#A0A0A0'
  });
}
function blueFlash() {
  lungs.stop(true, true);
  pipes.stop(true, true);
  lungs.animate({ duration: 1000 }).attr({
    fill: '#00bdff'
  });

  pipes.animate().attr({
    fill: '#aed6f5'
  });
}

function redFlash() {
  lungs.stop(true, true);
  pipes.stop(true, true);
  lungs.animate({ duration: 1000 }).attr({
    fill: '#Fb4335'
  });

  pipes.animate().attr({
    fill: '#e6b0aa'
  });
}

lungDefault();
