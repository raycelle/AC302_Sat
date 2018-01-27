console.log("test....");

var c = document.getElementById("myCanvas");
var ctx = c.getContext("2d");

//create image
var mario = new Image();
//set source
mario.src = "mario.png";

mario.onload = function(){
	ctx.drawImage(mario, 150,150, 100,100);
}

var c2 = document.getElementById("myCanvas2");
var ctx2 = c2.getContext("2d");

ctx2.fillStyle = "cyan";
ctx2.fillRect(0,0,800,350);