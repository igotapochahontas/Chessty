var j= 1;
var number
var sNumber = [];
var map2=[];
var map1 = [];
var output = [];
var hipstj; 
var hipstu; 
var initv; 
var inity;
var initv1; 
var inity1; 
var vtemx; 
var fartBox; 
var abo; 
var fartBoy;
var fartbsize;
var bsize = 8;
var bfract = bsize -4; 
var xycombo = []; 
var combhip; 
var hipster;
var v;

var realfont; 
var xdim = [];
var ydim = [];
var va=[];
var vya = [];
var one;
var one2;
var hipstery;
var oney;
var one2y;
var offs; 
function setup() {
fartBsize = createInput("size");
fartBox = createInput("x");
fartBoy = createInput("y");

  createCanvas(800, 1200);
fartBsize.changed(jixxinboard);
fartBox.changed(jixxinpants);
fartBoy.changed(jiyyinpants);

}

function jixxinpants (){
  v = fartBox.value();
  hipster = parseInt(v);
//xdim.indexOf(hipster) === -1 ? xdim.push(hipster) : alert("X already exists");
if (xdim.indexOf(hipster) == -1) {
    xdim.push(hipster);
}
else {alert("X conflict");
hipster = 0; 
}
createCanvas(800, 1200);

}

function jiyyinpants (){
  vy = fartBoy.value();
  hipstery = parseInt(vy);
//ydim.indexOf(hipstery) === -1 ? ydim.push(hipstery) : alert("Y already exists");

if (ydim.indexOf(hipstery) == -1) {
    ydim.push(hipstery);
}
else {
hipstery = 0; 
hipster = 0;
xdim.pop();
//xycombo.pop();
alert("Y conflict");
}
if ( hipster != 0){
combhip = "" + hipster + hipstery; 
// ^ forces integer to string for concat
initv = parseInt(combhip); 
 xycombo.push(initv);
}
createCanvas(800, 1200);
gridparse();
}


function gridparse (){

if (xycombo.length>1){
// for length parse
// for length subtract
//initv = xycombo[1];
//inity = xycombo[0];
//initv1 = parseInt(initv); 
//inity1 = parseInt(inity); 
//inty = (xycombo.length - 1); 

xycombo.filter(function(e){return e});
// ^ PURGE NULL VALUES
initv1 = xycombo[xycombo.length -1];
//vtemx = initv1-inity1; 
map1 = xycombo.map(t => t - initv1)
map2 = map1.map(Math.abs);
abo = map2.pop();
// ^ get rid of last element (it's null) 
//abo = Math.abs(vtemx);
//alert(abo); 
//alert(map2);
lastest();
}
}
function jixxinboard (){
va = fartBsize.value();
  offs = parseInt(va);


va = 0;
realfont = offs * 1.5;
bfract = offs; 
  return realfont; 
return bfract; 
gridparse();

  }
  function lastest(){
number;
sNumber; 
//var number = abo,
number = map2,

    sNumber = number.toString();

for (var i = 0, len = sNumber.length ; i < len; i += 2) {

hipstu = parseInt(+sNumber.charAt(i));
hipstj = parseInt(+sNumber.charAt(j));

j+=2;
if (hipstu != hipstj){
//output.push(initv1) ;
//alert(hipstu+","+hipstj); 
}
else {
alert("Diagonal Conflict");
xdim.pop();
ydim.pop();
map2.pop();
//output.pop();
xycombo.pop();
}
//output.indexOf(hipstu) === -1 ? output.push(hipstu) : alert("Diagonal Conflict");

 
}


//output.filter(function(e){return !!e});
//vya = output.toString();
//alert(vya);
}
function draw() {
  background(0);
textSize(width / realfont);
textAlign(LEFT, BOTTOM);
fill(0,255,0);
text("Board size: "+offs,0,100);
text("Values Passed: ",0,300);
text("X,Y: "+xycombo,0,600);
text("Diagonal: "+map2,0,900);
 
}


