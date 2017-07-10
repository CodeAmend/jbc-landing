var draw = SVG('lungs').size(686, 635);


// NAV buttons
var blog = document.getElementById('blog');
var funds = document.getElementById('funds');
var nav = document.getElementById('nav');



// lungPath and pipePath in svgPath.js must be imported in HTML
var lungs = draw.path(lungPath);
var pipes = draw.path(pipePath);
var lungGroup = draw.group();

lungs.translate(0, 123);

function lungDefault() {
  lungs.stop(true, true)
  pipes.stop(true, true)
  lungs.animate().attr({
    fill: '#454545'
  });

  pipes.animate().attr({
    fill: '#A0A0A0'
  });
}

function blueFlash() {
  lungs.stop(true);
  pipes.stop(true)
  lungs.animate({ ease: '<>', duration: 400 }).attr({
    fill: '#82b9ff'
  });

  pipes.animate().attr({
    fill: '#50a0ff'
  });
}

lungDefault();
funds.addEventListener('mouseover', blueFlash);
funds.addEventListener('mouseout', lungDefault);
