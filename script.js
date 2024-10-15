

let randomNumber = Math.floor(Math.random() * 10);

function guessNumber(userNumber) {
    
    if (userNumber === randomNumber) {
        document.getElementById('result').innerText = "Correct! You guessed the right number.";
    } else {
        document.getElementById('result').innerText = "Wrong! The correct number was " + randomNumber + ".";
    }

    console.log(randomNumber);
    

   
    randomNumber = Math.floor(Math.random() * 10);

}
