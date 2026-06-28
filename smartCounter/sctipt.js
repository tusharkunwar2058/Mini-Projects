let count = 0;
let increase = document.getElementById("increase");
let decrease = document.getElementById("decrease");
let reset = document.getElementById("reset");
let noOfIncrement = 0;
let noOfDecrement = 0;
let oddEvenStatus = "";

displayCount();

increase.addEventListener("click", function() {
    count++;
    noOfIncrement++;
    displayCount();
});

decrease.addEventListener("click", function() {

    
    if (count > 0) {
        count--;
    }
    noOfDecrement++;
    displayCount();
    
});

function displayCount() {


    if (count % 2 === 0) {
        oddEvenStatus = "Even";
    } else {
        oddEvenStatus = "odd";
    }

    let text = `${count} <br> ${oddEvenStatus} <br>
                 no of icrement clicked: ${noOfIncrement} <br> 
                 no of decrement clicked: ${noOfDecrement}`

    document.getElementById("demo").innerHTML = text;
}

reset.addEventListener("click", function() {
    count = 0;
    noOfIncrement = 0;
    noOfDecrement = 0;
    displayCount();
})