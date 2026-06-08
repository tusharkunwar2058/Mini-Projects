let count = 0;

// getting the values of button
let plus = document.getElementById("plus");
let minus = document.getElementById("minus");
let reset = document.getElementById("reset");
let save = document.getElementById("save");
let load = document.getElementById("load");

let savedCount = 0;

// adding event listener to the button so when user click those button, they will be able to do the following
plus.addEventListener("click", function() {
    count += 1;
    updateCountUi();
})


minus.addEventListener("click", function() {
    count -= 1;
    updateCountUi();
})


reset.addEventListener("click", function() {
    count = 0;
    updateCountUi();
})


save.addEventListener("click", function() {
    savedCount = count;
    updateCountUi();
})


load.addEventListener("click", function() {
    count = savedCount
    updateCountUi();
})

// function that will display the current count
function updateCountUi() {
    document.getElementById("demo").innerHTML = count;
}
updateCountUi();