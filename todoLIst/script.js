// getting the id of buttons to the variable
let add = document.getElementById("add");
let reset = document.getElementById("reset");

// loading from the local storage
let todosArray = JSON.parse(localStorage.getItem("todos")) || [];
showTodos();

// function to add the task to the todos
function addTodos() {

    let input = document.getElementById("input");
    
    // prevents the user from entering the white spaces only
    if (input.value.trim() === "") return;

    // add the input value to the todos
    todosArray.push(input.value);

    // adding the items to the local storage
    localStorage.setItem("todos", JSON.stringify(todosArray));

    // clears out the input field when task are added to the todos
    input.value = "";

    // show the task added to the todos
    showTodos();
}

// trigger the event when clicked the button
add.addEventListener("click", addTodos);

// trigger the same addTodos function when hit enter
document.getElementById("input").addEventListener("keypress", function(e) {
    if (e.key === "Enter") {
        addTodos();
    }
})

// function to show the task added to the todos
function showTodos() {

    let todoText = "";
    
    for (let i = 0; i < todosArray.length; i++) {

        // method to be safe from cross site scripting (xss)
        let tempDiv = document.createElement("div");
        tempDiv.textContent = todosArray[i];
        let safeText = tempDiv.innerHTML

        todoText += `${safeText} <button onclick="deleteItems(${i})" style="background-color:
                      red; border: none; border-radius: 5px; cursor: pointer;">
                      X</button> <br>`;

    }

    document.getElementById("demo").innerHTML = todoText;
}

// function to delete a single item
function deleteItems(i) {

    todosArray.splice(i, 1);

    // again setting the item to the localstorage so that deleted item are not
    //  seen and only the updated items are added
    localStorage.setItem("todos", JSON.stringify(todosArray));

    // again calling the function so that it will not show the deleted items
    showTodos();
}

// function to reset everything that clear out the todos
reset.addEventListener("click", function () {

    // setting the length of arrays to 0 so that it becomes empty
    todosArray.length = 0;

    // agian setting the items that are empty to the local storage so that it can load the empty 
    localStorage.setItem("todos", JSON.stringify(todosArray));
    showTodos();
})