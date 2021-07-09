// To get a number between 1 and 6
var randomNumber1 = Math.floor(Math.random()*6)+1
var randomNumber2 = Math.floor(Math.random()*6)+1

// change the image of dice1
image1 = document.querySelector(".img1")
image1.setAttribute("src","images/dice"+randomNumber1+".png")

// change the image of dice2
image2 = document.querySelector(".img2")
image2.setAttribute("src","images/dice"+randomNumber2+".png")

// change the text in h1
text = document.querySelector("h1")
if (randomNumber1>randomNumber2){
  text.innerHTML="🚩Player 1 Wins!"
}else if (randomNumber1<randomNumber2){
  text.innerHTML="Player 2 Wins! 🚩"
}else{
  text.innerHTML="Draw!"
}
