'use strict'
const player0=document.querySelector(".player-0");
const player1=document.querySelector(".player-1");
const score0=document.getElementById("score-0");
const score1=document.getElementById("score-1");
const dicemove=document.querySelector(".dice");
const btnnew=document.querySelector(".btn-new");
const btnroll=document.querySelector(".btn-roll");
const btnhold=document.querySelector(".btn-hold");
const currentp0=document.getElementById("current-0");
const currentp1=document.getElementById("current-1");
const nameof0=document.getElementById("name-0");
const nameof1=document.getElementById("name-1");

// score0.textContent=10;
// score1.textContent=10;
let score,currentScore,activeplayer,playing;
const init=function()
{
score=[0,0];
 currentScore=0;
 activeplayer=0;
 playing=true;


score0.innerHTML=0;
score1.innerHTML=0;
currentp0.textContent=0;
currentp1.textContent=0;
nameof0.textContent="Player 1";
nameof1.textContent="Player 2";


dicemove.classList.add('hidden');
player0.classList.remove("player-winner");
player1.classList.remove("player-winner");
}

init();

const switchplayer=function(){
    document.getElementById('current-'+activeplayer).textContent=0;
      activeplayer=activeplayer=== 0 ? 1 : 0;
      currentScore=0;
//        player0.classList.toggle('player-active');
//        player1.classList.toggle('player-active');

};
btnroll.addEventListener('click',function(){
   if(playing)
   {
    const dicechange=Math.floor(Math.random()*6)+1;
    dicemove.classList.remove("hidden");
    dicemove.src = "dice-" + dicechange + ".png";
    
    if(dicechange!==1&&dicechange!==6)
    {
        currentScore+=dicechange;
        // currentp0.textContent=currentScore;
        document.getElementById('current-'+activeplayer).textContent=currentScore;
        
    }
    else{
        switchplayer();
    }
    }
})
btnhold.addEventListener('click',function(){
    if(playing)
    {
    score[activeplayer]+=currentScore;
    document.getElementById("score-"+activeplayer).textContent=score[activeplayer];
    if(score[activeplayer]>=30)
    {
        playing=false;
        dicemove.classList.add("hidden");
        document.querySelector('.player-'+activeplayer).
        classList.add('player-winner');
        console.log('nameof'+activeplayer);
      document.getElementById("name-"+activeplayer).textContent="winner🍷🍷.";
    }
    else
    {    
    switchplayer();
    }
}
})
btnnew.addEventListener("click",init);




const modal=document.querySelector(".modal");
const overlay=document.querySelector(".overlay");
const btnclose=document.querySelector(".close-modal");
const btnopen=document.querySelector(".show-modal");

btnopen.addEventListener('click',function(){
console.log("pawan");
    modal.classList.remove('hidden1');
})
btnclose.addEventListener('click',function(){
    modal.classList.add("hidden1");
})

document.addEventListener('keydown',function(e){
    if(e.key==='Escape')
    {
        if(!modal.classList.contains("hidden1"))
        modal.classList.add("hidden1");
    }
})

