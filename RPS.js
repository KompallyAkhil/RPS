
var Choices=["Rock","Paper","Scissors"];
var wins=0;
var ties=0;
var lost=0;
function computerOutput(){
    var randomIndex = Math.floor(Math.random() * 3);
    return Choices[randomIndex];
}
function win(userchoice, computerOutput) {
    if (userchoice === computerOutput) {
        ties++;
        return "It's a tie!";
    } else if (
        (userchoice === "Rock" && computerOutput === "Scissors") ||
        (userchoice === "Paper" && computerOutput === "Rock") ||
        (userchoice === "Scissors" && computerOutput=== "Paper")
    ) {
        wins++;
        return "You have won this round!";
    } else {
        lost++;
        return "Computer has won this round!";
    }
}
document.getElementById("rock").onclick=function(){
    userInput("Rock");
}
document.getElementById("paper").onclick=function(){
    userInput("Paper");
}
document.getElementById("scissors").onclick=function(){
    userInput("Scissors");
}
function userInput(choice){
    var userselected=document.getElementById("select");
    userselected.innerHTML="You have selected "+choice+".";
    var computerchoice=computerOutput();
    var  computerSelected=document.getElementById("computer");
    computerSelected.innerHTML="Computer has selected "+computerchoice+".";
    var result= win(choice, computerchoice);
    document.getElementById("win").innerHTML = result;
    count();
    
}
function count(){
    document.getElementById("count").innerHTML="Wins: " +wins+ " Tie: " +ties+ " Loses: "+lost+" ";
}

document.getElementById("exit").onclick=function(){
    document.getElementById("exit").innerHTML=window.alert("You have exited the game !!");
    document.getElementById("count").innerHTML=" Wins: 0  Tie: 0  Loses: 0 ";
    document.getElementById("exit").innerHTML="Exit Game";
    
}






