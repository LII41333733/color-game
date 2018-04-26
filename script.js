var goalColorText = document.querySelector("#goalColor")
var resetButton = document.querySelector("#reset");
var message = document.querySelector("#message");
var squares = document.querySelectorAll("#square");
var numSquares = 6;
var colors = generateRandomColors(numSquares);
var goalColor = colors[Math.floor(Math.random() * 6)];
var hardButton = document.querySelector("#hard");
var easyButton = document.querySelector("#easy");
var head = document.querySelector("#head");

createSquares();

for (var i = 0; i < squares.length; i++) {
    squares[i].addEventListener("click", function() {
        var clickedColor = this.style.backgroundColor;
        if (clickedColor === goalColor) {
            head.style.backgroundColor = goalColor;
            message.textContent = "Correct!"
            resetButton.textContent = "Play Again?"
            changeAllSquares(goalColor);
        } else {
            message.textContent = "Try Again!"
            this.style.backgroundColor = "black";
        }   
    });
}

resetButton.addEventListener("click", function() {
    reset();
});

easyButton.addEventListener("click", function() {
    this.classList.add("selected");
    hardButton.classList.remove("selected");
    numSquares = 3;
    reset();
    for (var i = 0; i < squares.length; i++) {
        if (i > 2) {
            squares[i].style.backgroundColor = "black";
        }
    }
});

hardButton.addEventListener("click", function() {
    this.classList.add("selected");
    easyButton.classList.remove("selected");
    numSquares = 6;
    reset();
});

function createSquares() {
    for (var i = 0; i < squares.length; i++) {
        squares[i].style.backgroundColor = colors[i];
        goalColorText.textContent = goalColor;
    }
}

function reset() {
    head.style.backgroundColor = "black"
    message.textContent = "Please select a box:";
    colors = generateRandomColors(numSquares);
    goalColor = colors[Math.floor(Math.random() * numSquares)];
    goalColorText.textContent = goalColor;
    resetButton.textContent = "New Colors";
    resetColors();
}

function changeAllSquares(color) {
    for (var i = 0; i < squares.length; i++) {
        squares[i].style.backgroundColor = color;
        if (numSquares === 3) {
            if (i > 2) {
                squares[i].style.backgroundColor = "black";
            }
        }
    }
}

function generateRandomColors(num) {
    var arr = [];
    for (var i = 0; i < num; i++) {
        var red = Math.floor(Math.random() * 256);
        var green = Math.floor(Math.random() * 256);
        var blue = Math.floor(Math.random() * 256);
        arr.push("rgb(" + red + ", " + green + ", " + blue + ")");
    }
    return arr;
}

function resetColors() {
    for (var i = 0; i < squares.length; i++) {
        squares[i].style.backgroundColor = colors[i];
    }
}