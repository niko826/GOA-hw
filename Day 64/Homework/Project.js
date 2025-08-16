const choices = [`rock`,`paper`,`scissors`]

const playerdisplay = document.getElementById('playerdisplay');
const computerdisplay = document.getElementById('computerdisplay');
const resultdisplay = document.getElementById('resultdisplay');


function playgame (playerchoice){
    const computerchoice = choices[Math.floor(Math.random()*3)];
    let result = "";
    if(playerchoice === computerchoice){
     result="IT IS A TIE!";
    }
    else{
        switch(playerchoice){
         case "rock":
           result = (computerchoice ==="scissors") ? "YOU WIN!" : "YOU LOST!";
            break;  
            case "paper":
           result =  (computerchoice ==="rock") ? "YOU WIN!" : "YOU LOST!";
            break; 
            case "scissors":
           result =  (computerchoice ==="paper") ? "YOU WIN!" : "YOU LOST!";
            break;
          }
    }
       playerdisplay.textContent = `PLAYER: ${playerchoice}`;
       computerdisplay.textContent = `COMPUTER: ${computerchoice}`;
       resultdisplay.textContent = result;
}