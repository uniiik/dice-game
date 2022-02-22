
var randomnumber1 = Math.floor(Math.random() * 6) + 1;
var random_dice_image1 = "dice" + randomnumber1 + ".png";
var random_image_source1 = "images/" + random_dice_image1;
var image1 = document.querySelectorAll("img")[0];
image1.setAttribute("src", random_image_source1);

var randomnumber2 = Math.floor(Math.random() * 6) + 1;
var random_dice_image2 = "dice" + randomnumber2 + ".png";
var random_image_source2 = "images/" + random_dice_image2;
var image2 = document.querySelectorAll("img")[1];
image2.setAttribute("src", random_image_source2);

if (randomnumber1 > randomnumber2) {
  document.querySelector("h1").innerHTML = "player1 wins";
} else if (randomnumber1 == randomnumber2) {
  document.querySelector("h1").innerHTML = "match tie!!";
} else {
  document.querySelector("h1").innerHTML = "Player2 wins";
}
