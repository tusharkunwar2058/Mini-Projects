let quiz = [
    {
        question: "Which is the year un is established?",
        options: ["A. 1940", "B. 1942", "C. 1944", "D. 1943", "E. 1945"],
        answer: "e"
    },

    {
        question: "Which is the highest Mountain in the world?",
        options: ["A. mount k2", "B. mount fuji", "C. mount olympus", "D. mount Everest", "E. mount Whatever"],
        answer: "d"
    },

    {
        question: "How many elements are there in modern periodic table?",
        options: ["A. 112", "B. 118", "C. 119", "D. 120", "E. 115"],
        answer: "b"
    },

    {
        question: "Who is the mother of adityas in hindu?",
        options: ["A. ila", "B. danu", "C. tara", "D. sachi", "E. aditi"],
        answer: "e"
    },

    {
        question: "Which country won the first world test Championship in cricket?",
        options: ["A. new zealand", "B. south africa", "C. australia", "D. india", "E. England"],
        answer: "a"
    }
];

let current = 0;
let score = 0;

function displayQuestion() {

    let text = `Question No.${current+1}: ${quiz[current].question} <br> Options:<br> `;
    for (let i of quiz[current].options) {
        text += `${i} <br>`;
    }
    text += `Score: ${score}`

    document.getElementById("demo").innerHTML = text;
    document.getElementById("answer").value = "";
}

displayQuestion();

function playNext() {
    current++;

    if (current < quiz.length) {
        displayQuestion();
    } else {
        document.getElementById("answer").style.display = "none";
        document.getElementById("submit").style.display = "none";
        document.getElementById("next").style.display = "none";
        document.getElementById("demo").innerHTML = `FINISH <br> You Score: ${score}`;
    }
}

function winStatus() {
    let answer = document.getElementById("answer").value.toLowerCase();
    let correctAnswer = quiz[current].answer;

    if (answer == correctAnswer) {
        alert("Correct");
        score++;
    } else {
         alert("Wrong");
    }
    playNext();
}