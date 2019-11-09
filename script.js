var numOfSq = 6;
var colors = generateColors(numOfSq);
var resetButton = document.querySelector("#reset");
var square = document.querySelectorAll(".square");
var pickedColor = pickColor();
var heading = document.querySelector("h1");
var colorDisplay = document.querySelector("#colorDisplay");
colorDisplay.textContent = pickedColor;
var messageDisplay = document.querySelector("#message");
var easyBtn = document.querySelector("#easy");
var hardBtn = document.querySelector("#hard");

easyBtn.addEventListener("click", function(){
    easyBtn.classList.add("selected");
    hardBtn.classList.remove("selected");
    numOfSq = 3;
    colors = generateColors(numOfSq);
    pickedColor = pickColor();
    colorDisplay.textContent = pickedColor;
    for (var i=0; i<square.length;i++){
        if (colors[i]){
            square[i].style.backgroundColor = colors[i];
        } else{
            square[i].style.display = "none";
        }
    }
})

hardBtn.addEventListener("click", function(){
    hardBtn.classList.add("selected");
    easyBtn.classList.remove("selected");
    numOfSq = 6;
    colors = generateColors(numOfSq);
    pickedColor = pickColor();
    colorDisplay.textContent = pickedColor;
    for (var i=0; i<square.length;i++){
       square[i].style.backgroundColor = colors[i];
       square[i].style.display = "block";
    }
})

resetButton.addEventListener("click", function(){
    colors=generateColors(numOfSq);
    pickedColor = pickColor();
    messageDisplay.textContent="";
    this.textContent="New colors";
    colorDisplay.textContent = pickedColor;
    for (var i=0; i<square.length;i++){
        square[i].style.backgroundColor = colors[i];
    }
    heading.style.backgroundColor="steelblue";
})

for (var i=0; i<square.length;i++){
    square[i].style.backgroundColor = colors[i];
    square[i].addEventListener("click", function(){
        var clickedColor = this.style.backgroundColor; 
        if (clickedColor === pickedColor){
            messageDisplay.textContent = "Correct";
            changeColors(pickedColor);
            heading.style.backgroundColor = clickedColor;
            resetButton.textContent="Play again?";
        } else {
            this.style.backgroundColor = "#232323";
            messageDisplay.textContent = "Try again";        }
        
    })
}

function changeColors (color){
    for (var i=0; i<square.length;i++){
        square[i].style.backgroundColor = color;
    }
}

function pickColor(){
    var randomNumber = Math.floor(Math.random() * colors.length);
    return colors[randomNumber];
}

function generateColors(nummber){
    var arr = [];
    for (var i = 0 ; i< nummber; i++){
        arr.push(randomColor());
    }
    return arr; 
}

function randomColor(){
    var red = Math.floor(Math.random() * 256);
    var green = Math.floor(Math.random() * 256);
    var blue = Math.floor(Math.random() * 256);
    return "rgb("+red+", "+green+", "+blue+")";
}