let homeScore = document.getElementById("home-score");
let guestScore = document.getElementById("guest-score");
let Scorehome = 0;
let Scoreguest = 0;

function one() {
    Scorehome += 1;
    homeScore.innerText = Scorehome;
    console.log("Home +1 button was clicked");
}

function two() {
    Scorehome += 2;
    homeScore.innerText = Scorehome;
    console.log("Home +2 button was clicked");
}

function three() {
    Scorehome += 3;
    homeScore.innerText = Scorehome;
    console.log("Home +3 button was clicked");
}

function guestone() {
    Scoreguest += 1;
    guestScore.innerText = Scoreguest;
    console.log("Guest +1 button was clicked");
}

function guesttwo() {
    Scoreguest += 2;
    guestScore.innerText = Scoreguest;
    console.log("Guest +2 button was clicked");
}

function guestthree() {
    Scoreguest += 3;
    guestScore.innerText = Scoreguest;
    console.log("Guest +3 button was clicked");
}
