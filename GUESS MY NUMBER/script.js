'use strict';

// Variables
let secretNum = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let high = 0;
const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};

document.querySelector('.check').addEventListener('click', function () {
  const theNum = Number(document.querySelector('.guess').value);
  // No number
  if (!theNum) {
    displayMessage('⛔ No Number');
  }
  // When guess is right
  else if (theNum === secretNum) {
    displayMessage('Correct Number');
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';
    document.querySelector('.number').textContent = secretNum;

    if (score > high) {
      high = score;
      document.querySelector('.highscore').textContent = score;
    }
  }
  // When guess is low or high
  else if (theNum !== secretNum) {
    if (score > 1) {
      score--;
      document.querySelector('.score').textContent = score;
      displayMessage(score > secretNum ? '↗ Too high' : '↗ Too low');
    }
  }
});

// Again button
document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  secretNum = Math.trunc(Math.random() * 20) + 1;
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
  document.querySelector('.message').textContent = 'start guessing...';
  document.querySelector('.score').textContent = 20;
  document.querySelector('.number').textContent = '?';
  document.querySelector('.guess').value = '';
});
