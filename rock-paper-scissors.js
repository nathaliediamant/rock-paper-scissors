let score = JSON.parse(localStorage.getItem('score')) || {
    wins: 0,
    losses: 0,
    ties: 0

   };

   
  
    function updateScoreElement() { document.querySelector('.js-score').innerHTML = `Wins: ${score.wins}, Losses: ${score.losses}, Ties: ${score.ties}`;

    }

    updateScoreElement();
     
    function playGame(playerMove) {
      const computerMove = pickComputerMove();
       let result = '';
      

      if(playerMove === 'Rock'){
            if (computerMove === 'Rock') {
                result = 'A tie!';
              } else if (computerMove === 'Paper') {
                result = 'You lost!';
              } else if (computerMove === 'Scissors') {
                result = 'You won!';
              }
      }else if (playerMove === 'Paper'){
        if (computerMove === 'Paper') {
            result = 'A tie!';
          } else if (computerMove === 'Scissors') {
            result = 'You lost!';
          } else if (computerMove === 'Rock') {
            result = 'You won!';
          }

      }else if (playerMove === 'Scissors') {
         if (computerMove === 'Scissors') {
            result = 'A tie!';
          } else if (computerMove === 'Paper') {
            result = 'You won!';
          } else if (computerMove === 'Rock') {
            result = 'You lost!';
          }
      }
      if(result === 'You won!'){
        score.wins +=1
      } else if (result === 'You lost!'){
        score.losses +=1
      }else if (result === 'A tie!'){
        score.ties +=1
      }

      document.querySelector('.js-result').innerHTML = result;

      document.querySelector('.js-moves').innerHTML = `You<img src="images/${playerMove}-emoji.png" class="move-icon"><img src="images/${computerMove}-emoji.png" class="move-icon">Computer`;

      localStorage.setItem('score', JSON.stringify(score));

     updateScoreElement();
      
      
    }

    function pickComputerMove() {
      const randomValue = Math.random();  

      let computerMove = '';   

      if (randomValue >= 0 && randomValue < 1/3) {
      computerMove = 'Rock';

      } else if (randomValue >= 1 /3 && randomValue < 2/3) {
      computerMove = 'Paper';
      } else if (randomValue >= 2/3 && randomValue < 3/3) {
      computerMove = 'Scissors';
      }

      return computerMove;


    }
          
