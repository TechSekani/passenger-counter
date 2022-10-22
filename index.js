var countEl = document.getElementById("count-el");
var saveEl = document.getElementById("save-el");

count = 0;

function increment() {
    count++
    countEl.innerHTML = count;
}

function decrement() {
    count--
    countEl.innerHTML = count;
}

function save() {
    saveEl.innerHTML += count + " - ";
    count = 0;
    countEl.innerHTML = 0;
}



