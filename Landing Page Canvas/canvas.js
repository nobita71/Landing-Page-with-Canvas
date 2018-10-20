var canvas = document.querySelector('canvas');
var ctx = document.getElementById('ctx');

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

var c = canvas.getContext('2d');

//c.fillRect(100, 100, 100, 100);
//c.fillRect(200, 200, 100, 100);
//c.fillRect(300, 300, 100, 100);
//c.fillRect(400, 200, 100, 100);
//c.fillRect(500, 300, 100, 100);
//c.fillRect(600, 400, 100, 100);
//c.fillRect(700, 300, 100, 100);
//c.fillRect(800, 200, 100, 100);
//c.fillRect(900, 300, 100, 100);
//c.fillRect(1000, 200, 100, 100);
//c.fillRect(1100, 100, 100, 100);
/*c.fillStyle = "green";
c.fillRect(100,100,100,100);
c.fillStyle = "blue";
c.fillRect(400,100,100,100);
c.fillStyle = "skyblue";
c.fillRect(300,300,100,100);

console.log('canvas');*/
/*
c.beginPath();
c.moveTo(50,300);
c.lineTo(300,100);
c.lineTo(400,300);
c.strokeStyle = "Green";
c.stroke();*/


/*for(var i =0 ; i < 100; i++){
    var x = Math.random()* window.innerWidth;
    var y = Math.random()* window.innerHeight;
c.beginPath();
c.arc(x,y,35,0,Math.PI*2,false);
c.strokeStyle = "red";
c.stroke();
}*/

//x for width
//y for height


/*var x = Math.random() * innerWidth;
var y = Math.random() * innerHeight;
var dx = (Math.random() - 0.5) * 10;
var dy = (Math.random() - 0.5) * 10;
var radius = 30;*/


//object oriented js start

var mouse = {
    x: undefined,
    y: undefined
} 

window.addEventListener('mousemove', function(event){
    mouse.x = event.x;
    mouse.y = event.y;
});

window.addEventListener('resize', function(){
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
})

var maxRadius = 40;
//var minRadius = 2;

var colorArray = [
  '#E97778',
    '#89C7B6',
    '#FFD57E',
    '#AD84C7',
    '#7998C9',
];

function Circle(x, y, dx, dy, radius){
    this.x = x;
    this.y = y;
    this.dx = dx;
    this.dy = dy;
    this.radius = radius;
    this.minRadius = radius;
    this.color = colorArray[Math.floor(Math.random() * colorArray.length)];
    
    this.draw = function(){
        c.beginPath();
        c.arc(this.x ,this.y ,this.radius ,0 ,Math.PI*2,false);
        
        c.strokeStyle = "white";
        c.stroke();
//        c.font = "50px Arial";
//        c.fillStyle = "black";
//         c.fillText("Hello",10,50);
        c.fillStyle = this.color;
        c.fill();
       
        }
     this.update = function(){
           if(this.x + this.radius >innerWidth || this.x - this.radius < 0 ){
            this.dx = -this.dx;
            }
            if(this.y + this.radius > innerHeight || this.y - this.radius < 0 ){

                this.dy = -this.dy;
            }
            this.x += this.dx; //velocity
            this.y += this.dy;
         
         //inneractivity
         if(mouse.x - this.x < 50 && mouse.x - this.x > -50 && mouse.y - this.y < 50 && mouse.y - this.y > -50){
             if(this.radius < maxRadius){
             this.radius += 1;
             }
         }
         else if (this.radius > this.minRadius){
             this.radius -= 1;
         }
         
            this.draw();
     }
    
}

//var x = Math.random() * innerWidth;
//var y = Math.random() * innerHeight;
//var dx = (Math.random() - 0.5) * 10;
//var dy = (Math.random() - 0.5) * 10;
//var radius = 30;

//array diclear circle

var circleArray = [];



//var circle = new Circle(200, 200, 3, 3, 30); //Object Create x value and y value

function init(){
    
    circleArray = [];
    
    for(var i = 0; i <1000; i++){
    var radius = Math.random() * 3 + 1; 
    var x = Math.random() * (innerWidth - radius * 2) + radius ;
    var y = Math.random() * (innerHeight - radius * 2) + radius;
    var dx = (Math.random() - 0.5);
    var dy = (Math.random() - 0.5);
    
    circleArray.push(new Circle(x, y, dx, dy, radius));
    //var circle = new Circle(200,200,3,3,30);
}
}

//object oriented js end





function animate(){
    requestAnimationFrame(animate);
    c.clearRect(0, 0, innerWidth, innerHeight);
    
    //for loop for animate function
    
    for(var i = 0; i < circleArray.length; i++){
        circleArray[i].update();
    }
  
}
init();
animate();
