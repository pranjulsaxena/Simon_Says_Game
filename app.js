let gameSeq =[];
let userSeq= [];

let btns = ["green","yellow","purple","red"]; // array to access the btns

let started = false;
let level = 0;

let h2 = document.querySelector("h2");

window.addEventListener("keypress",function(){
    if(started == false){
        console.log("game is started");
        started = true;
    }
    levelup(); // as the game started  level should be up i.e. +1;
});

function computerFlash(btn){            // when computer press the button.. then white colour flash     
    btn.classList.add("flash");
    setTimeout(function(){
        btn.classList.remove("flash")
    },250);

}


function userFlash(btn){                // when user press the button.. then black color flash
    btn.classList.add("userflash");
    setTimeout(function(){
        btn.classList.remove("userflash")
    },250);

}

function levelup(){
    userSeq =[];
    level++;

    h2.innerText = `Level ${level}`;

    let randIdx = Math.floor(Math.random()*4);
    let rdncolor = btns[randIdx];
    let randmbtn = document.querySelector(`.${rdncolor}`);
    // console.log(randmbtn);
    gameSeq.push(rdncolor);
     console.log(gameSeq);
    
    computerFlash(randmbtn);

}


let allbtns = document.querySelectorAll(".btn");
for(btn of allbtns){
    btn.addEventListener("click",btnPress);
}

function checkAns(idx){
    // if level is 1...then total buttons that will be pressed is 1;

    if(userSeq[idx] == gameSeq[idx]){
        if(userSeq.length == gameSeq.length){
            setTimeout(levelup(),500);
        }
    }
    else{
        h2.innerHTML = `Game Over !!! Your score was  <b>${level}</b> <br> Press any key to restart...`;
        document.querySelector("body").style.backgroundColor="red";
        setTimeout(function() {document.querySelector("body").style.backgroundColor="white"},150);
        reset();
    }
    
}

function btnPress(){
    let btn = this;
    console.log(btn);
    userFlash(btn);

    let usercolor = btn.getAttribute("id");
    console.log(usercolor);  

    userSeq.push(usercolor);

    // whenever button is pressed by user.. it needs to be checked..whether it is correct or not so.
    checkAns(userSeq.length-1);
}
function reset(){
    userSeq=[];
    gameSeq=[];
    level =0;
    started = false;
}