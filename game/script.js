function play(user){
  let cpMove = ComputerMove();
  result(user,cpMove);
  showScoreBoard();
  localStorage.setItem('.js-score', JSON.stringify(score));
}

function ComputerMove(){
  
  let randomMove = Math.ceil(Math.random()*3);
  console.log(randomMove);
  let move = '';

  switch(randomMove){
    case 1: move = '✊';
            break;
    case 2: move = '🖐️';
            break;
    case 3: move = '✌️';
            break;        
  }
  
    return move;
}

let score = JSON.parse(localStorage.getItem('.js-score')) || {
  tie: 0,
  win: 0,
  lose: 0
};

function result(user, cpMove){

  if(user === cpMove){
    document.querySelector('.js-result').innerHTML = `<b>Tie!<b> <br><br> You: ${user} - Computer: ${cpMove}`;
    score.tie++;
  }

  if(user === '✊'){
    if(cpMove === '✌️'){
      document.querySelector('.js-result').innerHTML = `<b>You Win!<b> <br><br> You: ${user} - Computer: ${cpMove}`;
      score.win++;
    }else if(cpMove === '🖐️'){
      document.querySelector('.js-result').innerHTML = `<b>You Lose!<b> <br><br> You: ${user} - Computer: ${cpMove}`;
      score.lose++;
    }
  }

  if(user === '🖐️'){
    if(cpMove === '✊'){
      document.querySelector('.js-result').innerHTML = `<b>You Win!<b> <br><br> You: ${user} - Computer: ${cpMove}`;
      score.win++;
    }else if(cpMove === '✌️'){
      document.querySelector('.js-result').innerHTML = `<b>You Lose!<b> <br><br> You: ${user} - Computer: ${cpMove}`;
      score.lose++;
    }
  }

  if(user === '✌️'){
    if(cpMove === '🖐️'){
      document.querySelector('.js-result').innerHTML = `<b>You Win!<b> <br><br> You: ${user} - Computer: ${cpMove}`;
      score.win++;
    }else if(cpMove === '✊'){
      document.querySelector('.js-result').innerHTML = `<b>You Lose!<b> <br><br> You: ${user} - Computer: ${cpMove}`;
      score.lose++;
    }
  }

}

function resetGame(){
  score.tie = 0;
  score.win = 0;
  score.lose = 0;
  showScoreBoard();
}

function showScoreBoard(){
  document.querySelector('.js-score').innerHTML = `Tie: ${score.tie} Win: ${score.win} Lose: ${score.lose}`;
}

