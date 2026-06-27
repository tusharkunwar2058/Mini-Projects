let submit = document.getElementById("submit");
let reset = document.getElementById("reset");
let score = 0;

// defining the array of objects for question, options and answer
let quiz = [
    { question: "Which scientist proposed the uncertainty principle?", options: ["Erwin Schrödinger", "Werner Heisenberg", "Max Planck", "Niels Bohr"], answer: "Werner Heisenberg" },
    { question: "What does the second T stand for in HTTPS?", options: ["Transfer", "Tracking", "Trusted", "Transport"], answer: "Transport" },
    { question: "Who is the mother of snakes in hindu?", options: ["ulupi", "ila", "kadru", "danu"], answer: "kadru" },
    { question: "Which country contains the world's largest salt flat, Salar de Uyuni?", options: ["Chile", "Peru", "Bolivia", "Argentina"], answer: "Bolivia" },
    { question: "The battle of Hastings in 1066 resulted in the conquest of England []y which ruler?", options: ["Harold Godwinson", "William the Conqueror", "Richard I", "Henry II"], answer: "William the Conqueror" },
    { question: "In George Orwell's novel 1984, what is the name of the ruling political party?", options: ["The Union", "The Brotherhood", "Ingsoc", "The Collective"], answer: "Ingsoc" },
    { question: "Which moon in the Solar System has a denser atmosphere than the planet Mercury?", options: ["Europa", "Titan", "Ganymede", "Io"], answer: "Titan" },
    { question: "What is the value of Euler's Identity eiπ+1?", options: ["0", "1", "π", "i"], answer: "0" },
    { question: "Who is the first king of lunar dynasty in Hindu?", options: ["Manu", "ikshvaku", "Dushyant", "pururava"], answer: "pururava" },
    { question: "Which treaty officially ended the Thirty Years' War in Europe?", options: ["Treaty of Utrecht", "Treaty of Versailles", "Peace of Westphalia", "Treaty of Tordesillas"], answer: "Peace of Westphalia" }
]


// just for rough
// let text = "";
// for (let i = 0; i < 4; i++) {
//     text += ` <input type="radio" id="option${i}" name="options" value="banana">
//              <label for="option${i}">${quiz.question1.options[i]}</label><br> `
// }
// document.getElementById("demo").innerHTML = text;

// to store the index so that we can check next time if the next index is repeated or not
let indexArray = [];

// selected by the user during radio button
let selectedAnswer = "";
// correct answer from the quiz
let correctAnswer = "";

// self explanatory, if you can't guess what it does i think it's time to learn reading again
function getRandomQuestion() {

    // resetting the selected answer again so that it can store the next selected
    //  from the radio button
    selectedAnswer = "";

    // checking if the question has finished or not
    if (indexArray.length === quiz.length) {
        document.getElementById("demo").innerHTML = `<h1> Game Over </h1> <br> Your Final 
                                                    Score: ${score} out of ${quiz.length}`
        document.getElementById("answer").innerHTML = "";
        submit.style.display = "none";

        return;
    };

    // to store the random index so that it becomes easier to access from the quiz array
    let randomIndex;

    // generate random index untill it can generate unique number from 0 to 9 (which is length of array)
    do {
        randomIndex = Math.floor(Math.random() * quiz.length);
    } while (indexArray.includes(randomIndex));

    // storing that randomindex in the arrayn to check again if random number exist or not
    indexArray.push(randomIndex);
    // console.log(randomIndex);

    // generating random question based on the random index
    let randomQuizQuestion = quiz[randomIndex].question;
    // generating correct answer of that question that is being randomly generated here
    correctAnswer = quiz[randomIndex].answer;

    // here the text store the question
    let text = `${randomQuizQuestion} <br> `

    // now adding the options to the text with adding radio button to only click one among options
    for (let i = 0; i < 4; i++) {
        text += `<input type="radio" id="option${i}" name="options" onclick= "selectedAnswer = this.value; document.getElementById('error').innerHTML = '' " value = "${quiz[randomIndex].options[i]}">
                <label for="option${i}">${quiz[randomIndex].options[i]}</label><br>`
    }

    // to display the text that has stored question and options
    document.getElementById("demo").innerHTML = text;
    // console.log(randomQuizQuestion);
}

// to check if i can target the answer from the question (rough)
// console.log(quiz[0].answer);

// after clicking submit it checks for the correct answer (it is pretty explanatory 
// so i am not going to explain it further)
submit.addEventListener("click", () => {

    if (selectedAnswer === "") {

        document.getElementById("error").innerHTML = "please choose answer first";
        document.getElementById("answer").innerHTML = "";
        return;

    }

    document.getElementById("error").innerHTML = "";

    if (selectedAnswer === correctAnswer) {
        score++;
        document.getElementById("answer").innerHTML = `<span style = "color: green">
                                                    you answer: ${selectedAnswer} <br>
                                                    Correct Answer: ${correctAnswer} <br>
                                                    </span> Your current score: ${score}
                                                     out of ${quiz.length}`;
    } else {
        document.getElementById("answer").innerHTML = `<span style = "color: red">
                                                    you answer: ${selectedAnswer} <br>
                                                    Correct Answer: ${correctAnswer} <br>
                                                    </span>
                                                    Your current score: ${score}
                                                    out of ${quiz.length}`;
    }

    // calling again the getRandomQuestion function again so that after clicking submit button
    //  next question will also be generated
    getRandomQuestion();

});

// this button will make the quiz start over
reset.addEventListener("click", () => {

    // resetting the global variable to none(Not literally but just resetting to the initial value)
    indexArray = [];
    selectedAnswer = "";
    correctAnswer = "";
    score = 0;

    // also resetting every item to display nothing
    document.getElementById("demo").innerHTML = "";
    document.getElementById("error").innerHTML = "";
    document.getElementById("answer").innerHTML = "";

    // it kinda confuse me first, but i am going to explain it properly: we first make the
    //  display to none which will make the button to disappear and since the button is 
    // disappeared we now have to make it appear again so we use display block so that it 
    // will appear again when we press reset button
    submit.style.display = "block";

    getRandomQuestion();
})

// calling the function first so that it will display the question when first entering page
getRandomQuestion();