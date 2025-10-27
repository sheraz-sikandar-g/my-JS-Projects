'use strict';

// selecting El
const score0El = document.querySelector('#score--0');
const score1El = document.querySelector('#score--1');
const diceEl = document.querySelector('.dice');
const btnNew = document.querySelector('.btn--new');
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');
const current0El = document.querySelector('#current--0');
const current1El = document.querySelector('#current--1');
const player0 = document.querySelector('.player--0');
const player1 = document.querySelector('.player--1');

// The in code variabale
let currentScore = 0;
let scores = [0, 0];
let playing = true;
let activePlayer = 0;

const removeFunc = function () {
  classList.remove('player--winner');
};

const switchPlayer = function () {
  document.querySelector(`#current--${activePlayer}`).textContent = 0;
  activePlayer = activePlayer === 0 ? 1 : 0;
  currentScore = 0;
  player0.classList.toggle('player--active');
  player1.classList.toggle('player--active');
};

// start
score0El.textContent = 0;
score1El.textContent = 0;
diceEl.classList.add('hide');

btnRoll.addEventListener('click', function () {
  if (playing) {
    // random no.
    const diceRoll = Math.trunc(Math.random() * 6) + 1;
    //display roll
    diceEl.classList.remove('hide');
    diceEl.src = `dice-${diceRoll}.png`;

    //check for 1
    if (diceRoll !== 1) {
      currentScore += diceRoll;
      // Get current score
      document.querySelector(`#current--${activePlayer}`).textContent =
        currentScore;
    } else {
      // document
      //   .querySelector(`.player--${activePlayer}`)
      //   .classList.remove('player--active');
      // switching the playr
      switchPlayer();

      //   document
      //     .querySelector(`.player--${activePlayer}`)
      //     .classList.add('player--active');
    }
  }
});
btnHold.addEventListener('click', function () {
  if (playing) {
    // getting scores
    scores[activePlayer] += currentScore;
    console.log(scores[0], scores[1]);
    document.getElementById(`score--${activePlayer}`).textContent =
      scores[activePlayer];
    // check if >= 100
    if (scores[activePlayer] >= 5) {
      playing = false;
      diceEl.classList.add('hide');
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.add('player--winner');
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.remove('player--actiive');
    }
    // display scores

    // Switch player
    else switchPlayer();
  }
});
btnNew.addEventListener('click', function () {
  playing = true;
  activePlayer = 0;
  diceEl.classList.add('hide');
  currentScore = 0;
  current0El.textContent = currentScore;
  current1El.textContent = currentScore;
  for (let i = 0; i < scores.length; i++) {
    scores[i] = 0;
    document.querySelector(`#score--${i}`).textContent = 0;
  }
  if (player0.classList.contains('player--winner')) {
    player0.classList.remove('player--winner');
  } else {
    player1.classList.remove('player--winner');
    player0.classList.add('player--active');
    player1.classList.remove('player--active');
  }
});
