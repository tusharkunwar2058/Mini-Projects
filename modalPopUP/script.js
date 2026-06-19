let box = document.getElementById("box");
let open = document.getElementById("visible");
let close = document.getElementById("cross");

function openModal() {
    box.classList.add("show");
}

function closeModal() {
    box.classList.remove("show");
}

open.addEventListener("click", openModal); 
close.addEventListener("click", closeModal); 