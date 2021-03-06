/*
GAME RULES:

- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game

*/

var scores, roundscore,activePlayer,gamePlaying;

init();
 

      /******** ROLL BUTTON *******/


document.querySelector('.btn-roll').addEventListener('click',function(){
      
    if (gamePlaying){
        
        // 1.Random Numbers                                               
        var  dice = Math.floor(Math.random() * 6)+1;
        
        // 2.  Display the results
        var diceDom = document.querySelector('.dice');
        diceDom.style.display = 'block';
        diceDom.src ='dice-'+dice+'.png';
       
       // 3.Update the round score If The rolled number was not 1
        
       if(dice !==1){
           
           roundscore +=dice;
           //Add score
           document.querySelector('#current-'+activePlayer).textContent =roundscore;
       } else{
           
           // Next Player
           nextplayer();
       }
    }
        
});

      /******** HOLD BUTTON *******/


document.querySelector('.btn-hold').addEventListener('click',function(){
   if (gamePlaying){
       
           // Add Current Score
        scores[activePlayer] +=roundscore

        //Update UI
        document.querySelector('#score-'+activePlayer).textContent = scores[activePlayer];

        // check It winner
        if (scores[activePlayer]>=50) {

         document.querySelector('#name-'+activePlayer).textContent='Winner!';
         document.querySelector('.dice').style.display='none';
         document.querySelector('.player-'+activePlayer+'-panel').classList.add('winner')       // Code in CSS on bottom
         document.querySelector('.player-'+activePlayer+'-panel').classList.remove('active');
         gamePlaying = false;
        }else{
            nextplayer();
        }
   } 
    
})


     /******** NEW GAME *******/


document.querySelector('.btn-new').addEventListener('click',init);



/** Requeried Functions **/


function nextplayer(){
    activePlayer===0 ? activePlayer=1:activePlayer=0;
    roundscore =0;
    document.getElementById('current-0').textContent='0';
    document.getElementById('current-1').textContent='0';
    document.querySelector('.player-0-panel').classList.toggle('active');
    document.querySelector('.player-1-panel').classList.toggle('active');
   
// document.querySelector('.player-0-panel').classList.remove('active');
// document.querySelector('.player-1-panel').classList.add('active');
    
    document.querySelector('.dice').style.display='none';
}


function init(){

 scores =[0,0];
 roundscore = 0;
 activePlayer =0;
 gamePlaying =true;
   
document.querySelector('.dice').style.display = 'none';

document.getElementById('score-0').textContent ='0';
document.getElementById('score-1').textContent ='0';
document.getElementById('current-0').textContent ='0';
document.getElementById('current-1').textContent ='0';

document.getElementById('name-0').textContent ='Player 1';
document.getElementById('name-1').textContent ='Player 2';

document.querySelector('.player-0-panel').classList.remove('winner');
document.querySelector('.player-1-panel').classList.remove('winner');
document.querySelector('.player-0-panel').classList.remove('active');
document.querySelector('.player-1-panel').classList.remove('active');

document.querySelector('.player-0-panel').classList.add('active');
}






//document.querySelector('#current-'+activePlayer).textContent =dice;

//document.querySelector('#current-1').innerHTML = '<em>'+dice+'</em>';

//var x = document.querySelector('#score-0').textContent;
//console.log(x);






