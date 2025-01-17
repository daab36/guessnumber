const minNum = 1;
const maxNum = 100;
const x = Math.floor(Math.random() * (maxNum - minNum + 1)) + minNum;

let counter = 0;
let running = true;



let userConsent = confirm ("hi, do you wanna play a game :D");
    if(userConsent) {
        function LuckyGuess(){
        if (isNaN(document.getElementById("gname").value)) {
            document.getElementById("response").innerHTML = "You know that this is not a number, don't play with me, you now lose one chance :@";
        } else if (document.getElementById("gname").value == x) {
            document.getElementById("response").innerHTML = "You did it! It's your lucky day!. It took you X attempts";
        } else if ((document.getElementById("gname").value < x)) {
            document.getElementById("response").innerHTML = "Your guess is low :(";
        } else if (document.getElementById("gname").value > x) {
            document.getElementById("response").innerHTML = "Your guess is high! :(";
        } else {
            document.getElementById("response").innerHTML = "No no no no no, try again. You can do it!";
        }

        counter++;
        attemptsElement.textContent = counter;

        if(counter > 5){
            document.getElementById("response").innerHTML ="ohhhhhhhh you don't have more chances :(, you used your 5 opportunities. Sorry";
            running = false;
            location.reload();
        }
    }
}
else{
    window.location.href = "https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley";   
}


const attemptsElement = document.getElementById("attempts");
attemptsElement.textContent = counter;

console.log(x)