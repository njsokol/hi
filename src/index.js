var Game = (function() {
  // Game variables
  var gameScore = 0;
  var paused = true;
  var gameSpeed = 10;
  var oldGameSpeed = 0;
  
  // Run the game
  // Add a Dot every second if not paused
  setInterval(function() {
    if(!paused) {
      var s = new Dot();
    }
  }, 1000);

  return {
    getPaused: function() {
      return paused;
    },

    togglePaused: function() {
      paused = !paused;
    },
    
    getGameSpeed: function() {
      return gameSpeed;
    },
    
    setGameSpeed: function(speed) {
      gameSpeed =  speed;
    },
    
    getOldGameSpeed: function() {
      return oldGameSpeed;
    },
    
    setOldGameSpeed: function(speed) {
      oldGameSpeed =  speed;
    },
    
    updateGameScore: function(value) {
      gameScore += value;
      document.getElementById('total-score').innerHTML = gameScore;
    }
  };
  
})(); // END Game

var Dot = function() {
  // Dot variables
  this.size = randomNumber(10, 100);
  this.value = Math.abs(Math.floor(this.size / 10) - 10) + 1;
  render(this);
  
  function animateDot(dot) {
    var headerHeight = document.getElementById('game-header').offsetHeight + 
      document.getElementById('game-speed').offsetHeight;
    
    var top = headerHeight;
    var id = setInterval(frame, 5);
    var speed;
    function frame() {
        if (top === window.innerHeight) {
            clearInterval(id);
            removeDot(dot);
        } else {
            speed = Game.getGameSpeed();
            top += (speed / 10); 
            dot.style.top = top + 'px'; 
        }
    }
  }

  function dotClicked(event) {
    // If the game is not paused
    // Add the value of the dot to the overall score
    // Remove the dot that is clicked
    if(!Game.getPaused()) {
      var value = event.target.value;
      Game.updateGameScore(value);
      removeDot(event.target);
    }
  }
  
  function removeDot(dot) {
    // If the game is not paused
    // Remove the dot
    if(!Game.getPaused()) {
      dot.remove();
    }
  }

  function render(dot) {
    var d = document.createElement('div');
    d.setAttribute('class', 'game-dot');
    d.style.width = dot.size + 'px';
    d.style.height = dot.size + 'px';
    d.style.left = setXPosition(dot.size) + 'px';
    d.style['background-color'] = randomColor();
    d.value = dot.value;
    d.addEventListener('mousedown', dotClicked, false);
    document.body.appendChild(d);
    animateDot(d);
  }

  function setXPosition(dotSize) {
    var max = window.innerWidth - dotSize;
    return randomNumber(0, max);
  }

}; // END Dot


function changeGameSpeed(speed) {
  if(Game.getPaused()) {
    Game.setOldGameSpeed(speed);
  }
  else {
    Game.setGameSpeed(speed);
  }
}

function randomColor() {
  return '#' + (Math.random().toString(16) + "000000").substring(2,8);
}

function randomNumber(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function startStopGame() {
  // Start / Stop
  Game.togglePaused();
  
  // Local variables
  var _paused = Game.getPaused();
  
  // Set the text of Start / Pause / Continue button
  if(_paused) {
    document.getElementById('game-start-stop-button').innerHTML = 'Continue';
    Game.setOldGameSpeed(Game.getGameSpeed());
    Game.setGameSpeed(0);
  } else {
    document.getElementById('game-start-stop-button').innerHTML = 'Pause';
    if(Game.getOldGameSpeed() !== 0) {
      var old = Game.getGameSpeed();
      Game.setGameSpeed(Game.getOldGameSpeed());
      Game.setOldGameSpeed(old);
    }
  }
}