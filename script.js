// NEW GAME

document.getElementById("newgame").addEventListener("click", function() {
  let global1 = document.getElementById("global1").innerHTML = 0;
  let global2 = document.getElementById("global2").innerHTML = 0;
  let score1 = document.getElementById("score1").innerHTML = 0;
  let score2 = document.getElementById("score2").innerHTML = 0;
})

// ROLL DICE

document.getElementById("rolldice").addEventListener("click", function() {
  document.getElementById("dice");
  document.getElementById("rond");
  document.getElementById("left");
  document.getElementById("right");

  let dicenumber = Math.floor(Math.random() * 6);

  if (dicenumber == 0) {
    dice.innerHTML = '<img src="img/dice1.png">';
  } else if (dicenumber == 1) {
    dice.innerHTML = '<img src="img/dice2.png">';
  } else if (dicenumber == 2) {
    dice.innerHTML = '<img src="img/dice3.png">';
  } else if (dicenumber == 3) {
    dice.innerHTML = '<img src="img/dice4.png">';
  } else if (dicenumber == 4) {
    dice.innerHTML = '<img src="img/dice5.png">';
  } else if (dicenumber == 5) {
    dice.innerHTML = '<img src="img/dice6.png">';
  }

})

// HOLD

document.getElementById("hold").addEventListener("click", function() {
  alert("hold");
})