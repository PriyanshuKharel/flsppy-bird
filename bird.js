var game=document.getElementById("game");
var hole=document.getElementById("hole");
var block=document.getElementById("block");
var bird=document.getElementById("bird");
var score=0;
var result=document.getElementById("result");
var text=document.getElementById("text");
var mov=0;

hole.addEventListener("animationiteration",holeran);
function holeran()
{
    var random=-((Math.random()*150)+50);
    hole.style.top=random+"px";
    score++;
}

var fall=setInterval(function(){
    var birdt=parseInt(window.getComputedStyle(bird).getPropertyValue("top"));
    if(mov==0)
    {
        bird.style.top=(birdt+2)+"px";
    }
    var blockl=parseInt(window.getComputedStyle(block).getPropertyValue("left"));
    var holet=parseInt(window.getComputedStyle(hole).getPropertyValue("top"));
    var ht=(500+holet);
    if((birdt>459)||((blockl<50)&&(blockl>-50)&&((birdt<ht)||(birdt>ht+100))))
    {
        result.style.display="block";
        text.innerText=`Your score is :${score}`;   
        game.style.display="none";
        score=0;    
    }

},10)

window.addEventListener("keydown",hop)
function hop(){
    mov=1;
    var birdt=parseInt(window.getComputedStyle(bird).getPropertyValue("top"));
    if(birdt>6)
    {
        bird.style.top=(birdt-60)+"px";
        setTimeout(function(){
            mov=0;
        },100)
    }
}