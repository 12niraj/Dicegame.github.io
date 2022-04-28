
var randomNumber1= Math.random();
randomNumber1=Math.floor(randomNumber1*6)+1;

var diceimg1 = "images/dice"+randomNumber1+".png";

var img1=document.querySelectorAll("img")[0].setAttribute("src",diceimg1);


// var img2=document.querySelectorAll("img")[1].setAttribute("src",diceimg1);----> {"it is for draw , as both dice showing same no." }


var randomNumber2= Math.random();
randomNumber2=Math.floor(randomNumber2*6)+1;

var diceimg2 = "images/dice"+randomNumber2+".png";

var img2=document.querySelectorAll("img")[1].setAttribute("src",diceimg2);

if(randomNumber1>randomNumber2){
  document.querySelector("h1").innerHTML="Player 1 wins 🚩!!! "
}
else if(randomNumber2>randomNumber1){
  document.querySelector("h1").innerHTML="Player 2 wins 🚩!!! "
}
else{
document.querySelector("h1").innerHTML="DRAW!!! "
}
