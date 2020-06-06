const coinArray=["Heads","Tails"];
let score=[0,0];
const message=document.querySelector(".message");
console.log(message);

const buttons=document.querySelectorAll("button");
console.log(buttons);

for(i=0;i<buttons.length;i++){
    console.log(buttons[i]);
    buttons[i].addEventListener("click",tossCoin);
}

    function tossCoin(e){
        let playerGuess=e.target.innerText;
        console.log(playerGuess);
        let computerToss=Math.floor(Math.random()*2);
        let computerGuess=coinArray[computerToss];
        console.log(computerGuess);
        
        message.innerHTML="Computer Selected" + " " + computerGuess + "<br>";
        
        let output;
        if(playerGuess === computerGuess){
            output="Player Wins";
            score[0]++;
            
        } else {
            output="Computer Wins";
            score[1]++;
        }
        message.innerHTML+= output + "<br> Player" + " " + score[0] + " " + "Computer" + " " + score[1];
    }