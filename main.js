let rollButton, activePlayer, roundScore, scores, dice, current, current1, current0, holdButton;
init();
rollButton = document.querySelector('.roll-button');
current = document.querySelector('#current-' + activePlayer);
current.textContent = 0;


document.querySelector('#current-1').textContent = 0;
document.querySelector('#current-0').textContent = 0;
rollButton.addEventListener('click', changeScore);
let diceDOM = document.querySelector('.dice');
function changeScore() {
    dice = Math.floor(Math.random() * 6) + 1;
    console.log(dice);

    document.querySelector('.reloader').style.pointerEvents = 'all';

    diceDOM.style.display = 'block';
    diceDOM.src = './dice/dice-' + dice + '.svg';



    if (dice !== 1) {
        roundScore += dice;
        document.querySelector('#current-' + activePlayer).textContent = roundScore;
    } else {
        nextPlayer()
    }

}

holdButton = document.querySelector('.hold-button');


holdButton.addEventListener('click', function () {
    scores[activePlayer] += roundScore;
    document.querySelector('#score-' + activePlayer).textContent = scores[activePlayer];


    if (scores[activePlayer] >= 10) {
        document.querySelector('#player-' + activePlayer + '-name').textContent = 'winner!';
        document.querySelector('#player-' + activePlayer + '-panel').classList.add('winner');
        document.querySelector('#player-' + activePlayer + '-panel').classList.remove('active');
        document.querySelector('.container').style.backgroundColor = 'rgba(255, 0, 0, 0.473)';
        diceDOM.style.display = 'none';
        rollButton.style.pointerEvents = 'none';
        holdButton.style.pointerEvents = 'none';


        activePlayer === 0 ? document.querySelector('#player-1-name').textContent = 'looser!' : document.querySelector('#player-0-name').textContent = 'looser!'
    } else {
        nextPlayer();

    }


});


let reloader = document.querySelector('.reloader');
reloader.addEventListener('click', init);

function init() {
    activePlayer = 0;
    roundScore = 0;
    scores = [0, 0];
    document.querySelector('#player-0-name').textContent = 'player 1';
    document.querySelector('#player-1-name').textContent = 'player 2';
    document.querySelector('#player-0-panel').classList.remove('winner');
    document.querySelector('#player-1-panel').classList.remove('winner');
    document.querySelector('#player-0-panel').classList.remove('active');
    document.querySelector('#player-1-panel').classList.remove('active');
    document.querySelector('#player-0-panel').classList.add('active');
    document.querySelector('.container').style.backgroundColor = 'whiteSmoke';
    document.querySelector('.reloader').style.pointerEvents = 'none';
    document.querySelector('.roll-button').style.pointerEvents = 'all';
    document.querySelector('.hold-button').style.pointerEvents = 'all';
    document.querySelector('#score-0').textContent = 0;
    document.querySelector('#score-1').textContent = 0;
    document.querySelector('.dice').style.display = 'none';
    document.querySelector('#current-0').textContent = 0;
    document.querySelector('#current-1').textContent = 0;

}


function nextPlayer() {
    activePlayer == 0 ? activePlayer = 1 : activePlayer = 0;
    roundScore = 0;
    document.querySelector('#current-0').textContent = 0;
    document.querySelector('#current-1').textContent = 0;
    document.querySelector('#player-0-panel').classList.toggle('active');
    document.querySelector('#player-1-panel').classList.toggle('active');
    diceDOM.style.display = 'none';

}