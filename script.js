let credit = {
  name: 'John',
  chips: 180,
};
let card = [];
let sum = 0;
let blackJack = false;
let isAlive = false;
let massage = '';
let massageEl = document.getElementById('massage-el');
let sumEl = document.getElementById('sum-el');
let cardEl = document.getElementById('card-el');
let sayEl = document.getElementById('say-el');

sayEl.textContent = credit.name + ': $' + credit.chips;

function getRandomNumber() {
  let random = Math.floor(Math.random() * 13);
  if (random === 1) {
    return 11;
  } else if (random > 10) {
    return 10;
  } else {
    return random;
  }
}

function startGame() {
  isAlive = true;
  let card1 = getRandomNumber();
  let card2 = getRandomNumber();
  card = [card1, card2];
  sum = card1 + card2;
  result();
}

function result() {
  cardEl.textContent = 'Cards :';
  for (let i = 0; i < card.length; i++) {
    cardEl.textContent += card[i] + ' ';
  }
  sumEl.innerHTML = 'Sum :' + sum;
  if (sum <= 21) {
    massage = 'Do you want a draw a New Card ?';
  } else if (sum === 21) {
    massage = 'Yaahoo! You Won the Match 🥳';
    blackJack = true;
  } else {
    massage = 'You Lost the Match';
    isAlive = false;
  }
  massageEl.innerHTML = massage;
}

function newCard() {
  if (isAlive === true && blackJack === false) {
    let cardNew = getRandomNumber();
    sum += cardNew;
    card.push(cardNew);
    result();
  }
}
