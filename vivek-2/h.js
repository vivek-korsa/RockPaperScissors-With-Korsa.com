let userScore=0;
let compScore=0;

const choices=document.querySelectorAll(".choice");
const msg=document.querySelector("#msg");

const userScorepara=document.querySelector("#user-score");
const compScorepara=document.querySelector("#computer-score");

const gencompchoice=()=>{
    const options=["rock","paper","scissors"];
    const randIdx=Math.floor(Math.random()*3);
    return options[randIdx];
};
const drawgame=()=>{
    msg.innerText="Its a draw! Play again";
    msg.style.backgroundColor="black";
};
const showWinner=(userwin,userChoice,compchoice)=>{
    if(userwin){
       userScore++;
       userScorepara.innerText=userScore;
        msg.innerText=`You win! Your ${userChoice} beats ${compchoice}`;
        msg.style.backgroundColor="green";
    }else{
       compScore++;
       compScorepara.innerText=compScore;
       msg.innerText=`You loss! ${compchoice} beats Your ${userChoice}`;
       msg.style.backgroundColor="red";
    }
};
const playgame=(userChoice)=>{
    console.log("user choice=",userChoice);
    const compchoice=gencompchoice();
    console.log("comp choice=",compchoice);

if (userChoice === compchoice){
    drawgame();
}else{
    let userwin=true;
    if (userChoice==="rock"){
        userwin = compchoice==="paper"?false:true;
    }else if (userChoice="paper"){
        userwin = compchoice==="scissors"?false:true;
    }else if(userChoice="scissors"){
        userwin = compchoice==="rock"?false:true;
    }
    showWinner(userwin,userChoice,compchoice);
}

};
choices.forEach((choice)=>{
    choice.addEventListener("click",()=>{
        const userChoice=choice.getAttribute("id");
        playgame(userChoice);
    });
});