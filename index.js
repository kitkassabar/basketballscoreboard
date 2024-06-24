let homeScore = 0;
let guestScore = 0;
document.getElementById('home-score').innerText = homeScore;
document.getElementById('guest-score').innerText = guestScore;

function one() {
    homeScore += 1
    console.log("Home +1 button was clicked");
}

function two() {
    homeScore += 2
    console.log("Home +2 button was clicked");
}

function three() {
    homeScore += 3
    console.log("Home +3 button was clicked");
}

function guestone() {
    guestScore += 1
    console.log("Guest +1 button was clicked");
}

function guesttwo() {
    guestScore += 2
    console.log("Guest +2 button was clicked");
}

function guestthree() {
    guestScore += 3
    console.log("Guest +3 button was clicked");
}

