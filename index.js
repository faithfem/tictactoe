$(document).ready(function() {

  function playerTurn(turn, id) {
    //STORE THE VALUE OF THE ID  
    var spotTaken = $("#" + id).text();
    //IF SPOT IS NOT X OR O
    if (spotTaken === "#") {
      //KEEPS TRACK FOR WHILE LOOP FOR COMPUTER LOGIC
      count++;
      //CHANGES VALUE TO THE PLAYERS TURN
      $("#" + id).text(turn);
      //ADDS VALUE TO THE ARRAY
      turns[id] = turn;
      //WIN CODITION FUNCTION TAKES IN TURNS ARRAY AND CURRENT X OR 0 TURN
      winCondition(turns, turn);
      //RUN THE COMPUTERS TURN IF THE GAME DID NOT JUST END
      if (gameOn === false) {

        computerTurn();
        winCondition(turns, computersTurn);
      }
    }
  }

  function winCondition(turnArray, currentTurn) {
    if (turnArray[0] === currentTurn && turnArray[1]===currentTurn && turnArray[2] === currentTurn) {
      gameOn = true;
      reset();
      alert("Player " + currentTurn + " wins! (Top row across 0,1, and 2 spots)");
    } 
     else if (turnArray[2] === currentTurn && turnArray[4]===currentTurn && turnArray[6] === currentTurn) {
      gameOn = true;
      reset();
      alert("Player " + currentTurn + " wins! (Top row across 2,4, and 6 spots)");
    } 
    else if (turnArray[0] === currentTurn && turnArray[3]===currentTurn && turnArray[6] === currentTurn) {
      gameOn = true;
      reset();
      alert("Player " + currentTurn + " wins! (1st row down 0,3, and 6 spots)");
      }
    else if (turnArray[0] === currentTurn && turnArray[4]===currentTurn && turnArray[8] === currentTurn) {
      gameOn = true;
      reset();
      alert("Player " + currentTurn + " wins! (1st row diagonally across 0,4, and 8 spots)");
    } 
    else if (turnArray[1] === currentTurn && turnArray[4]===currentTurn && turnArray[7] === currentTurn) {
      gameOn = true;
      reset();
      alert("Player " + currentTurn + " wins! (2nd row down 1,4, and 7 spots)");
    } 
    else if (turnArray[2] === currentTurn && turnArray[5]===currentTurn && turnArray[8] === currentTurn) {
      gameOn = true;
      reset();
      alert("Player " + currentTurn + " wins! (3rd row down 2,5, and 8 spots)");
    } else if (turnArray[2] === currentTurn && turnArray[5]===currentTurn && turnArray[8] === currentTurn) {
      gameOn = true;
      reset();
      alert("Player " + currentTurn + " wins! (3rd row across 2,4, and 6 spots)");
    } else if (turnArray[3] === currentTurn && turnArray[4]===currentTurn && turnArray[5] === currentTurn) {
      gameOn = true;
      reset();
      alert("Player " + currentTurn + " wins! (Middle row across 3,4, and 5 spots)");
      
    } 
    else if(turnArray[6]===currentTurn && turnArray[7]===currentTurn && turnArray[8]===currentTurn){
        gameOn = true;
      reset();
      alert("Player " + currentTurn + " wins! (Bottom row across 6,7, and 8 spots)");
      
    }
    else {
      gameOn = false;
    }
  }

  //FUNCTION FOR COMPUTERS TURN
  function computerTurn() {
    //USED TO BREAK WHILE LOOP
    var taken = false;
    //COUNT USED TO BREAK INFINITE LOOP ON LAST TURN
    while (taken === false && count !== 5) {
      //CHOOSE A RANDOM SPOT FOR THE COMPUTER TO MOVE TO
      var computersMove = (Math.random() * 10).toFixed();
      var move = $("#" + computersMove).text();
      if (move === '#') {
        $('#' + computersMove).text(computersTurn);
        taken = true;
        turns[computersMove] = computersTurn;
      }
    }
  }

  $(".tic").click(function() {
    var slot = $(this).attr('id');
    playerTurn(turn, slot);
  });

  $("#turnX").click(function() {
    reset();
    turn = 'O';
    computersTurn = 'X';
    $("#turnX").removeClass("btn-primary");
    $("#turnO").addClass("btn-primary");

  });
  $("#turnO").click(function() {
    reset();
    turn = "X";
    computersTurn = 'O'
    $("#turnO").removeClass("btn-primary");
    $("#turnX").addClass("btn-primary");
    $(".tic").text("#");
  });

  function reset() {
    turns = ["#", "#", "#", "#", "#", "#", "#", "#", "#"];
    count = 0;
    $(".tic").text("#");
    gameOn= false;
  }
});