
function randomInt(max){
    return Math.floor(Math.random() * Math.floor(max))
}
    const secretNumber = randomInt(100);
    
    console.log(secretNumber);
    
function getUserGuess() {
    const  guess = document.getElementById('user-input').value;
    return parseInt(guess, 10)
}


document.addEventListener('keyup', keyPress);
   
function keyPress(enter) {
    if (enter.key == 'Enter') {
    console.log(getUserGuess + " " + secretNumber); 

    if (getUserGuess() < secretNumber){
        setMessage("Too low!");
    }
    else if (getUserGuess() > secretNumber){
        setMessage("Too high!");
    }
    else {
            setMessage("You are correct!");
    }
    clearInput()
}

function setMessage(msg){
    console.log("setMessage")
    let textfield = document.getElementById('message');
    textfield.innerHTML = msg;
}

    function clearInput() {
    document.getElementById('user-input').value = "";
    }
