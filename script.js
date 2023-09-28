let right = document.getElementById("right");
let left = document.getElementById("left");
let rond = document.getElementById("rond");
let block = document.getElementById("block")
let rolldice = document.getElementById("rolldice");
let hold = document.getElementById("hold");

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

let currentPlayer;

function changePlayer() {
  if (currentPlayer === player1) {
      currentPlayer = player2;
    } else {
      currentPlayer = player1;
    }
    currentPlayer();
}

changePlayer()

// NEW GAME

document.getElementById("newgame").addEventListener("click", function() {
  let global1 = document.getElementById("global1").innerHTML = 0;
  let global2 = document.getElementById("global2").innerHTML = 0;
  let score1 = document.getElementById("score1").innerHTML = 0;
  let score2 = document.getElementById("score2").innerHTML = 0;
  block.style.display = "none";
  rolldice.style.color = "rgb(69, 69, 69)";
  hold.style.color = "rgb(69, 69, 69)";
});

// ROLL DICE

rolldice.addEventListener("click", function() {
  document.getElementById("dice");
  let counter;
  let dicenumber = Math.floor(Math.random() * 6);
  
  if (dicenumber == 0) {
    dice.innerHTML = '<img src="img/dice1.png">';
    changePlayer();
    if (currentPlayer === player1) {
      alert("C'est au tour du joueur 1 !")
      score2.innerHTML = 0;
    } else if (currentPlayer === player2) {
      alert("C'est au tour du joueur 2 !")
      score1.innerHTML = 0;
    }
  } else if (dicenumber == 1) {
    dice.innerHTML = '<img src="img/dice2.png">';
    if (currentPlayer === player1) {
      score1.innerHTML = Number(score1.innerHTML) + 2;
    } else if (currentPlayer === player2) {
      score2.innerHTML = Number(score2.innerHTML) + 2;
    }
  } else if (dicenumber == 2) {
    dice.innerHTML = '<img src="img/dice3.png">';
    if (currentPlayer === player1) {
      score1.innerHTML = Number(score1.innerHTML) + 3;
    } else if (currentPlayer === player2) {
      score2.innerHTML = Number(score2.innerHTML) + 3;
    }
  } else if (dicenumber == 3) {
    dice.innerHTML = '<img src="img/dice4.png">';
    if (currentPlayer === player1) {
      score1.innerHTML = Number(score1.innerHTML) + 4;
    } else if (currentPlayer === player2) {
      score2.innerHTML = Number(score2.innerHTML) + 4;
    }
  } else if (dicenumber == 4) {
    dice.innerHTML = '<img src="img/dice5.png">';
    if (currentPlayer === player1) {
      score1.innerHTML = Number(score1.innerHTML) + 5;
    } else if (currentPlayer === player2) {
      score2.innerHTML = Number(score2.innerHTML) + 5;
    }
  } else if (dicenumber == 5) {
    dice.innerHTML = '<img src="img/dice6.png">';
    if (currentPlayer === player1) {
      score1.innerHTML = Number(score1.innerHTML) + 6;
    } else if (currentPlayer === player2) {
      score2.innerHTML = Number(score2.innerHTML) + 6;
    }
  };

})

// HOLD

hold.addEventListener("click", function() {
  changePlayer()
  if (currentPlayer === player1) {
    global2.innerHTML = Number(global2.innerHTML) + Number(score2.innerHTML);
    score2.innerHTML = 0;
    if (global2.innerHTML >= 100) {
      alert("Le joueur 2 a gagné !")
      global2.innerHTML = 100;
      block.style.display = "block";
      rolldice.style.color = "red";
      hold.style.color = "red";
    }
  } else if (currentPlayer === player2) {
    global1.innerHTML = Number(global1.innerHTML) + Number(score1.innerHTML);
    score1.innerHTML = 0;
    if (global1.innerHTML >= 100) {
      alert("Le joueur 1 a gagné !")
      global1.innerHTML = 100;
      block.style.display = "block";
      rolldice.style.color = "red";
      hold.style.color = "red";
    }
  }
})

/*

PSEUDO CODE :

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

*/