

var randomNumber1 = Math.random();
randomNumber1 = randomNumber1 * 6;
randomNumber1 = Math.floor(randomNumber1) + 1;

var randomNumber2 = Math.random();
randomNumber2 = randomNumber2 * 6;
randomNumber2 = Math.floor(randomNumber2) + 1;

var images1 = "images/dice" + randomNumber1 + ".png";
var images2 = "images/dice" + randomNumber2 + ".png";

document.querySelectorAll("img")[0].setAttribute("src", images1);
document.querySelectorAll("img")[1].setAttribute("src", images2);

if(randomNumber1 === randomNumber2){
    document.querySelector(".container h1").innerHTML=("Draw!");
}
else if(randomNumber1 > randomNumber2){
    document.querySelector(".container h1").innerHTML=("🚩 Player1 Wins!");
}
else {
    document.querySelector(".container h1").innerHTML=("Player2 Wins! 🚩");
}
