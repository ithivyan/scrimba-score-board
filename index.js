
let homeScoreCard = document.getElementById("home-score-el")
let guestScoreCard = document.getElementById("guest-score-el")

let homeScore = 0
let guestScore = 0

function homePlusOne(){
    homeScoreCard.textContent = homeScore+=1
}

function homePlusTwo(){
    homeScoreCard.textContent = homeScore+=2
}

function homePlusThree(){
    homeScoreCard.textContent = homeScore+=3
}

function guestPlusOne(){
    guestScoreCard.textContent = guestScore+=1
}

function guestPlusTwo(){
    guestScoreCard.textContent = guestScore+=2
}
function guestPlusThree(){
    guestScoreCard.textContent = guestScore+=3
}


function newGame(){
    homeScoreCard.textContent = 0
    homeScore = 0
    guestScoreCard.textContent = 0
    guestScore = 0
}