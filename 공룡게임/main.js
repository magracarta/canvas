var canvas = document.querySelector('#canvas');
var ctx = canvas.getContext('2d');

canvas.width = window.innerWidth - 100;
canvas.height = window.innerHeight -100;


var dinoImg = new Image();
dinoImg.src = 'dino.png';
var dino = {
    x:10,
    y:200,
    width : 50,
    height:50,
    draw(){
        ctx.fillStyle='green';
        //ctx.fillRect(this.x, this.y, this.width, this.height);
        ctx.drawImage(dinoImg, this.x, this.y ,this.width, this.height);
    }
}
dino.draw();


var cactusImg = new Image();
cactusImg.src = 'catus.png';
class Cactus {
    constructor(){
        this.x = 600;
        this.y = 200;
        this.width =30;
        this.height = 50;
    }
    draw(){
        ctx.fillStyle='red';
        // ctx.fillRect(this.x, this.y, this.width, this.height);
        ctx.drawImage(cactusImg, this.x, this.y ,this.width, this.height);
    }
}

var timer = 0;
var cactusArray = [];
var jumpTitme = 0 ;
var animation;

function frameAnimation(){
    animation = requestAnimationFrame(frameAnimation);
    timer++;
    ctx.clearRect(0,0,canvas.width, canvas.height);
    if(timer%150 ===0){
        var cactus = new Cactus();
        cactusArray.push(cactus);
    }
    cactusArray.forEach((a, i, o)=>{
        //x좌표가 0미만이면 제거
        if(a.x < -50){
            o.splice(i,1); 
        }
        a.x -=5;
        crashFn(dino,a);
        a.draw();
    });
    if(jump == true){
        dino.y-=4;
        jumpTitme++;
    }
    if(jump == false){
        if(dino.y<200){
            dino.y+=4;
        }
    }
    if(jumpTitme > 30){
        jump=false;
        jumpTitme=0;
    }
    dino.draw();
}
frameAnimation();

//충돌확인
function crashFn(dino, cactus){
    var xDiffernt = cactus.x - (dino.x + dino.width);
    var yDiffent = cactus.y - (dino.y + dino.height);
    if(xDiffernt < 0 && yDiffent < 0){
        ctx.clearRect(0,0,canvas.width, canvas.height);
        cancelAnimationFrame(animation);
    }
}

var jump = false;
document.addEventListener('keydown', function(e){
    if(e.code === 'ArrowUp' || e.code==='Space' ){
        jump = true;
    }
});