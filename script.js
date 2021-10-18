
var links = [{label: 'link1', bg: '#c0392b'}, 
             {label: 'link2', bg: '#16a085'}, 
             {label: 'link3', bg: '#8e44ad'}, 
             {label: 'link4', bg: '#27ae60'}, 
             {label: 'link5', bg: '#f39c12'}, 
             {label: 'link6', bg: '#2980b9'}];
var windowHeight = window.innerHeight;
if(windowHeight === 0) windowHeight = 238;
var radius = windowHeight*0.6,
    circle = document.createElement('div'),
    borderSize = radius*0.021;
    totalArea = 48, 
    increment = totalArea/(links.length-1),
    startPoint = 0-(totalArea/2),
    fontSize = radius*0.12,
    linkSize = radius*0.25;
​
styleCircle();
addCircle();
addLinks();
styleLinks();
​
function styleCircle() {
  circle.style.border= borderSize+'px solid #fff';
  circle.style.width = radius*2+'px';



Resources1× 0.5× 0.25×Rerun
