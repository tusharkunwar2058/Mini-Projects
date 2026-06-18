// getting the value of rock, paper and scissor from html
const rock = document.getElementById("rock");
const paper = document.getElementById("paper");
const scissor = document.getElementById("scissor");

// getting the value of reset button
const reset = document.getElementById("reset");


// defining three choices of the games in array
let choiceArr = ["rock", "paper", "scissor"];

// variables to keep track of the score of win by player and computer
let userScore = 0;
let computerScore = 0;

// adding event listener to listen to the event to decide what will happen when user click those buttons 

rock.addEventListener("click", function() {
    playGame("rock");
}) 

paper.addEventListener("click", function() {
    playGame("paper");
}) 

scissor.addEventListener("click", function() {
    playGame("scissor");
}) 

reset.addEventListener("click", function() {
    userScore = 0;
    computerScore = 0;

    // showing the score after resetting
    document.getElementById("demo").innerHTML = `Game Reset <br>
                                                 Your Score: ${userScore} <br>
                                                 Computer Score: ${computerScore}`;
})

function playGame(userChoice) {

    // generating a random choice from the choice array 
    let randomIndex = Math.floor(Math.random () * choiceArr.length);
    let computerChoice = choiceArr[randomIndex];

    // to show if player lose, win or tie
    let winStatus = "";

    // the main logic of the game
    if (userChoice === computerChoice) {
        winStatus = "!IT'S A TIE!";

    } else if (userChoice === "rock" && computerChoice === "scissor" ||
               userChoice === "paper" && computerChoice === "rock" || 
               userChoice === "scissor" && computerChoice === "paper") {

               winStatus = "!!YOU WIN!!"
               userScore += 1;

    } else {
        winStatus = "!YOU LOSE!";
        computerScore += 1;

    }

    // finally printing everything to the page
    document.getElementById("demo").innerHTML = `You Choose: ${userChoice} <br>
                                                 Computer Choose: ${computerChoice} <br>
                                                 ${winStatus} <br>
                                                 Your Score: ${userScore} <br>
                                                 Computer Score: ${computerScore}`;
}