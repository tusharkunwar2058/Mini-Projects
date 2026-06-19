// // fetching the container and the button which has class cell inside that
// let container = document.getElementById("container");
// let cell = document.getElementsByClassName("cell");

// // setting winner to no one, so that we can replace later
// let winner = "";
// let currentPlayer = "X";  // making X always play first

// // adding the events so that it will do the following task when clicked
// container.addEventListener("click", function(e) {

//     // this will show the button that trigger the event
//     let clickedButton = e.target;

//     // if winner has already decided then return from this function
//     if (winner !== "") return;

//     // when user clicked the button it will display which player press which button
//     clickedButton.innerText = currentPlayer;

//     // storing all those pattern which contribute to winning the game
//     let winPattern = [
//         [0, 1, 2], [3, 4, 5], [6, 7, 8], 
//         [0, 3, 6], [1, 4, 7], [2, 5, 8], 
//         [0, 4, 8], [2, 4, 6]
//     ]

//     // i don't know what it does
//     for (pattern of winPattern) {
//         let pos1 = cell[pattern[0]].innerText;
//         let pos2 = cell[pattern[1]].innerText;
//         let pos3 = cell[pattern[2]].innerText;

//         // comparing if these have the same value
//         if (pos1 !== "" && pos1 === pos2 && pos2 === pos3) {

//             // winner will always be the one that play the last 
//             winner = currentPlayer;
//             document.getElementById("demo").innerHTML = `${winner} wins`
//             return;
//         }
//     }

//     // flipping the player, if first player is x then 0, vice versa
//     currentPlayer = currentPlayer === "X" ? "0" : "X";
// });

// let reset = document.getElementById("reset");

// // resetting the content inside the button 
// reset.addEventListener("click", function() {

//     for (let i of cell) {
//         i.innerText = "";
//     }

//     winner = "";
//     currentPlayer = "X";
//     document.getElementById("demo").innerHTML = "";
// })






