//initialise the count as 0//
//listen for clicks on the increment button//
//increment count variable when button is clicked//
//change the count-el element to reflect new count//

let countEL = document.getElementById("count-el")
let saveEl = document.getElementById("save-el")
let count = 0
function increment() {
    count += 1
    countEL.innerText = count
}

//a variable that contains 

function save() {
    let countScreen = count + " - "
    saveEl.textContent += countScreen
    countEL.textContent = 0
    count = 0
}