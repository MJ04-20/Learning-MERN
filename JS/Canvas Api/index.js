//canvas is used to draw graphics on a web page via scripting (usually JavaScript).
// contex is the part of canvas where we can draw graphics

let canvas=document.getElementById("myCanvas");
let context=canvas.getContext("2d");


// // Draw Line
// context.strokeStyle="blue";
// context.lineWidth=5;
// context.beginPath();
// context.moveTo(0,0);
// context.lineTo(250,250);
// context.lineTo(250,500);
// context.moveTo(500,0);
// context.lineTo(250,250);
// context.stroke();


// // Draw Triangle

// context.fillStyle="lightcoral";
// context.lineWidth=3;
// context.strokeStyle="red";
// context.beginPath();
// context.moveTo(250,0);
// context.lineTo(0,250);
// context.lineTo(500,250);
// context.lineTo(250,0);
// context.stroke();
// context.fill();


// draw rectangle 

// context.fillStyle="lightblue";
// context.fillRect(10,10,150,100); //start x,start y,width,height
// context.fillStyle="lightgreen";
// context.fillRect(200,10,150,100);
// context.fillStyle="lightpink";
// context.fillRect(390,10,100,100);

// draw circle

context.fillStyle="lightgreen"; 
context.strokeStyle="green";
context.lineWidth=4;
context.beginPath();
context.arc(250,250,100,0,2*Math.PI); //x,y,radius,start angle,end angle
context.stroke();
context.fill();

// draw text
context.fillStyle="purple";
context.font="30px Arial";
context.fillText("Hello Canvas!",150,450); //text,x,y