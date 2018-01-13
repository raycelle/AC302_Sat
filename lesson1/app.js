console.log("testing....")

var c = document.getElementById("myCanvas");
var ctx = c.getContext("2d");

//starting point
ctx.moveTo(0,0);
//end point
ctx.lineTo(200,100);
//line color
ctx.strokeStyle = "green";
//draw line
ctx.stroke();

ctx.strokeStyle = "blue";
//draw rectangle
ctx.strokeRect(50, 50, 200,200);

//change filled in color
ctx.fillStyle = "tomato";
//draw filled in rectangle
ctx.fillRect(100,100,100,100);

//clear a rectangle
ctx.clearRect(100,100,30,30);
ctx.clearRect(170,100,30,30);


var c1 = document.getElementById("one");
var ctx1 = c1.getContext("2d");

ctx1.fillRect(0,0,150,150);
ctx1.fillRect(150,150,150,150);