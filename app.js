/////
//Created by @kinifi for the Pebble Smart Watch
/////
var player1 = 20;

checkPlayerLife();

simply.on('singleClick', function(e) {
  
  if (e.button === 'up') {
    simply.subtitle('Life: ' + (++player1));
    savePlayerLife();
  } else if (e.button === 'down') {
    simply.subtitle('Life: ' + --player1);
    savePlayerLife();
  }
  
});

simply.setText({
  title: 'MTG: Life Counter',
});

simply.setText({
  subtitle: 'Life: ' + player1,
});

function savePlayerLife () {
  localStorage.setItem('count', player1);
  console.log('Saving Player 1 Life: ' + player1);
}

function checkPlayerLife() {  
  if(player1 === undefined)
  {
    player1 = 20;
    console.log('player life undefined, setting to 20');
  }
  else
  {
    player1 = parseInt(localStorage.getItem('count'));
  }
}
