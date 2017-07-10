var draw = SVG('lungs').size(686, 635);


// NAV buttons
var blog = document.getElementById('blog');
var funds = document.getElementById('funds');
var nav = document.getElementById('nav');



// lungPath and pipePath in svgPath.js must be imported in HTML
var lungs = draw.path(lungPath);
var pipes = draw.path(pipePath);
var lungGroup = draw.group();

lungGroup.add(lungs);
lungGroup.add(pipes);

lungs.translate(0, 123);

lungGroup.attr({
  opacity: 0.3
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
    fill: '#82b9ff'
  });

  pipes.animate().attr({
    fill: '#aed6f1'
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

funds.addEventListener('mouseover', blueFlash);
funds.addEventListener('mouseout', lungDefault);
blog.addEventListener('mouseover', redFlash);
blog.addEventListener('mouseout', lungDefault);
