
function randomInt(max){
    return Math.floor(Math.random() * Math.floor(max))
}
console.log(randomInt(100))
console.log(randomInt(10))

    
    function getUserGuess() {
 const  stringValue = document.getElementById('user-input').value
 return parseInt(stringValue, 10)
    };

console.log(getUserGuess());

document.addEventListener('keyup', function (event){
   
    if (event.key === 'Enter') {
     const guess = getGuess()
     
       
 console.log(guess)
    }
})
