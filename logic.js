let userScore = document.querySelector("#user-score");
let comScore = document.querySelector("#com-score");
const choice = document.querySelectorAll(".choice");
let msg = document.querySelector("#msg");
choice.forEach((el) => {
    el.addEventListener("click",()=>{
        const userchoice = el.getAttribute("id");
        playgame(userchoice);
    });
});
Us = 0;
Cs = 0;
let getComchoice = ()=>{
    const options = ["rock","scissors","paper"];
    let idx = Math.floor(Math.random()*3);
    return options[idx];
};
let showWinner = (userwin,comchoice)=>{
    if(userwin){
        userScore.innerText = ++Us;
        msg.innerText = `YOU WON THE GAME!! || Computer - ${comchoice}`;
        

    }
    else{
        comScore.innerText = ++Cs;    
        msg.innerText = `YOU LOST THE GAME!! || computer - ${comchoice}`;
    }
}
let playgame = (userchoice)=>{
    console.log(`userchoice is ${userchoice}`);
    let comchoice = getComchoice();
    console.log(`computer choice is ${comchoice}`);
    let userwin = true;
    if(userchoice==comchoice){
        console.log("Match was draw");
    }else{
        if(userchoice=="rock"){
            userwin = comchoice=="paper"?false:true;
        }
        else if (userchoice=="paper") {
            userwin = comchoice=="rock"?true:false;
        }
        else{
            userwin = comchoice=="paper"?true:false;
        }
    }
    showWinner(userwin,comchoice);
};

let refresh = document.querySelector("#newGame");
refresh.addEventListener("click",()=>{
    msg.innerText = "Play your move";
    Us = Cs = 0
    userScore.innerText = 0;
    comScore.innerText = 0;
});