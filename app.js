const squares = document.querySelectorAll(".square");
const mole = document.querySelector(".mole")
const timeLeft = document.querySelector('#time-left')
const score = document.querySelector('#score')

let result = 0;
let hitPosition;
let currentTime = 60;
let timerID = null;


function randomSquare() {
    squares.forEach(square => {
        square.classList.remove('mole')
    })

    let somSquare = squares[Math.floor(Math.random()*9)]
    somSquare.classList.add('mole')

    hitPosition = somSquare.id
}

squares.forEach( square => {
    square.addEventListener("mousedown", () => {
        if (square.id === hitPosition) {
            result++;
            score.textContent = result;
            // hitPosition = null;
        }
    })

})

function moveMole () {
    timerID = setInterval(randomSquare, 1000)

}

moveMole();

function countDown() {
    currentTime--
    timeLeft.textContent = currentTime
    if (currentTime == 0) {
        clearInterval(countDownTimerId)
        clearInterval(timerID)
        alert('Game over. Final score is '+ result)
    }
}

// não entendi
let countDownTimerId = setInterval(countDown,1000)