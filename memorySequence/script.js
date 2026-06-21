// first the button is assigned to the variable so that we will run the function when
//  trigger the button
let sequenceButton = document.getElementById("sequenceBtn");

// declaring here so that we don't have to pass to the function everytime,
//  can just call the function when needed and it will automatically upadate the value

let randomNumber = 0;   // initializing with 0 but it will later get replaced  
let sequenceArray = [];   // declaring the empty array so that we will later push the random number value
let sequence = "";        // declaring the empty sequence so that when user enter the sequence it will get saved here
let gameOver = false;     // declaring the game over with false, later will change to true, if user enter wrong sequence
let round = 1;            // the game must begin and that will be the first round

// function that will generate the random number
function generateRandomNumber() {
    if (gameOver) return;    // if game is already over, no need to generate the random number

    randomNumber = Math.floor(Math.random() * 10);

    sequenceArray.push(randomNumber);   // pushing the random number to the array
    document.getElementById("showRandom").innerHTML = randomNumber;     // show the random number
}

generateRandomNumber();  // calling first so that it will display the number when the page loads

function compareSequence() {
    if (gameOver) return;   // if game is already over, no need to run the function

    let sequenceText = sequenceArray.join("");  // join the sequence array with "", 
    // that makes it string and become easy to compare with other string since the sequence we will enter will be in string 

    // main comparison
    if (sequence.length !== round){     // if the length of the entered sequence by user is not equal to the round
        document.getElementById("gameOver").innerHTML = `sequence length must be: ${round}`
        return;

    } else if (sequenceText !== sequence) {     // if sequence do not match
        document.getElementById("gameOver").innerText = "Game Over";
        gameOver = true;
        return;

    } else {
        document.getElementById("gameOver").innerText = `Round${round}: Keep Going`;
        round++;     // only increase the round when the sequence is right
        generateRandomNumber();   // only generate the next number when user pass the sequence

    }
}

// function to fetch sequence
// i don't know what to name this function so i think this would be ok
function fetchSequence(){

    if (gameOver) return;    // if game was already over, terminate the function

    // fetching the value of the input entered by user
    sequence = document.getElementById("sequence").value;

    // when sucessfully fetch the value, it will be cleared so that sequence do not get saved
    document.getElementById("sequence").value = "";

    // calling the function only after user has finished entering the sequence
    compareSequence();
}

// run the function when click the button 
sequenceButton.addEventListener("click", fetchSequence);

// also run the function when hit the enter
document.getElementById("sequence").addEventListener("keydown", function(e) {
    if (e.key === "Enter") {
        fetchSequence();
    }
})