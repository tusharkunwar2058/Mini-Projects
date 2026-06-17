let add = document.getElementById("add");
let expense = document.getElementById("expense");

// loading form local storage
let expenseArray = JSON.parse(localStorage.getItem("expenses")) || [];

add.addEventListener("click", function() {

    // getting the value from the input in html
    let items = document.getElementById("items").value;
    let quantity = Number(document.getElementById("quantity").value);
    let price = Number(document.getElementById("price").value);

    // adding these value in the following order into an array
    expenseArray.push({
        item: items,
        quantity: quantity,
        price: price
    });
    
    // console.log("added");  // to check if items are added or not, uncomment it to check

    // clearing the value once you added
    document.getElementById("items").value = "";
    document.getElementById("quantity").value = "";
    document.getElementById("price").value = "";

    // saving to local storage
    localStorage.setItem("expenses", JSON.stringify(expenseArray));

})

// to show the expense list
expense.addEventListener("click", function() {
    let text = "";
    let total = 0;

    // looping through the array
    for (let i of expenseArray) {

        total += i.quantity * i.price;

        text += `item: ${i.item} <br> quantity: ${i.quantity} <br> Price: ${i.price} <br> 
                 your single item Expenditure: ${i.quantity * i.price} <br> <br>`;
                 
    }

    // finally showing the expense data
    document.getElementById("demo").innerHTML = `${text} <br> Total Expenditure: ${total}`;
})