let right = document.getElementById("right");
let left = document.getElementById("left");
let rond = document.getElementById("rond");

function player1() {
  left.style.backgroundColor = "rgb(238, 238, 238)";
  right.style.backgroundColor = "white";
  rond.style.left = "650px";
}

function player2() {
  left.style.backgroundColor = "white";
  right.style.backgroundColor = "rgb(238, 238, 238)";
  rond.style.left = "1200px";
}

let currentPlayer = player1();

// NEW GAME

document.getElementById("newgame").addEventListener("click", function() {
  let global1 = document.getElementById("global1").innerHTML = 0;
  let global2 = document.getElementById("global2").innerHTML = 0;
  let score1 = document.getElementById("score1").innerHTML = 0;
  let score2 = document.getElementById("score2").innerHTML = 0;
  currentPlayer = player1();
})

// ROLL DICE

document.getElementById("rolldice").addEventListener("click", function() {
  document.getElementById("dice");
  document.getElementById("score1");
  document.getElementById("score2");
  
  let counter;
  let dicenumber = Math.floor(Math.random() * 6);
  
  if (dicenumber == 0) {
    dice.innerHTML = '<img src="img/dice1.png">';
    counter = 1;
    if(counter == 1) {
      if (currentPlayer === player1) {
        currentPlayer = player2;
      } else {
        currentPlayer = player1;
      }
      currentPlayer();
    };
  } else if (dicenumber == 1) {
    dice.innerHTML = '<img src="img/dice2.png">';
    counter = 2;
  } else if (dicenumber == 2) {
    dice.innerHTML = '<img src="img/dice3.png">';
    counter = 3;
  } else if (dicenumber == 3) {
    dice.innerHTML = '<img src="img/dice4.png">';
    counter = 4;
  } else if (dicenumber == 4) {
    dice.innerHTML = '<img src="img/dice5.png">';
    counter = 5;
  } else if (dicenumber == 5) {
    dice.innerHTML = '<img src="img/dice6.png">';
    counter = 6;
  };

})

// HOLD

document.getElementById("hold").addEventListener("click", function() {
  if (currentPlayer === player1) {
    currentPlayer = player2;
  } else {
    currentPlayer = player1;
  }
  currentPlayer();
})

/* PSEUDO CODE :

Règles :
Le jeu comprend 2 joueurs sur un seul et même écran. 
Chaque joueur possède un score temporaire (ROUND) et un score global (GLOBAL).
À chaque tour, le joueur a son ROUND initialisé à 0 et peut lancer un dé autant de fois qu'il le souhaite. Le 
résultat d’un lancer est ajouté au ROUND. 
Lors de son tour, le joueur peut décider à tout moment de:
- Cliquer sur l’option “Hold”, qui permet d’envoyer les points du ROUND vers le GLOBAL. Ce sera alors le
tour de l’autre joueur.
- Lancer le dé. S’il obtient un 1, son score ROUND est perdu et c’est la fin de son tour.
Le premier joueur qui atteint les 100 points sur global gagne le jeu

-------------------------------------------------------------------------------------------------------------

New game : 
réinitialiser à 0;
tour 1()


fonction tour 1 :
activer style joueur 1;
désactiver style joueur 2;
score 1 = 0;
bouton hold joueur 1 et fin de tour;
si dé = 1 alors fin de tour;

fonction tour 2 :
activer style joueur 2;
désactiver style joueur 1;
bouton hold joueur 2 et fin de tour;
si dé = 1 alors fin de tour;








*/

/*

btn1 = !btn1
btn2 = !btn2

currentplayer = player1;

  if (!player1) {
    player2
  } else {
    player1
  }

let player1 = [
  left.style.backgroundColor = "rgb(238, 238, 238)",
  right.style.backgroundColor = "white",
  rond.style.left = "650px"
];

let player2 = [
  left.style.backgroundColor = "white",
  right.style.backgroundColor = "rgb(238, 238, 238)",
  rond.style.left = "1200px"
];

*/