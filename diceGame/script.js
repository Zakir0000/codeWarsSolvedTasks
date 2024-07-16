const listOfAllDice = document.querySelectorAll('.die');
const scoreInputs = document.querySelectorAll('#score-options input');
const scoreSpans = document.querySelectorAll('#score-options span');
const currentRound = document.getElementById('current-round');
const currentRoundRolls = document.getElementById('current-round-rolls');
const totalScore = document.getElementById('total-score');
const scoreHistory = document.getElementById('score-history');
const rollDiceBtn = document.getElementById('roll-dice-btn');
const keepScoreBtn = document.getElementById('keep-score-btn');
const rulesContainer = document.querySelector('.rules-container');
const rulesBtn = document.getElementById('rules-btn');

let diceValuesArr = [];
let isModalShowing = false;
let score = 0;
let total = 0;
let round = 1;
let rolls = 0;

const rollDice = () => {
  diceValuesArr = [];

  for (let i = 0; i < 5; i++) {
    const randomDice = Math.floor(Math.random() * 6) + 1;
    diceValuesArr.push(randomDice);
  }

  listOfAllDice.forEach((dice, index) => {
    dice.textContent = diceValuesArr[index];
  });
  processDiceRoll(diceValuesArr);
};

const updateStats = () => {
  currentRoundRolls.textContent = rolls;
  currentRound.textContent = round;
};

const updateRadioOption = (index, score) => {
  scoreInputs[index].disabled = false;
  scoreInputs[index].value = score;
  scoreSpans[index].textContent = `, score = ${score}`;
};

const getHighestDuplicates = (numbers) => {
  let counts = {};

  // Count occurrences of each number
  for (let number of numbers) {
    counts[number] = counts[number] ? counts[number] + 1 : 1;
  }

  return counts;
};

const processDiceRoll = (dice) => {
  let counts = getHighestDuplicates(dice);
  let sumOfAllDice = dice.reduce((sum, num) => sum + num, 0);

  let maxCount = 0;
  for (let number in counts) {
    if (counts[number] > maxCount) {
      maxCount = counts[number];
    }
  }

  if (maxCount >= 4) {
    // Update the Four of a Kind option
    updateRadioOption(0, sumOfAllDice); // Assuming index 0 is for Four of a Kind
  } else if (maxCount >= 3) {
    // Update the Three of a Kind option
    updateRadioOption(1, sumOfAllDice); // Assuming index 1 is for Three of a Kind
  } else {
    // Update the final option with a score of 0
    updateRadioOption(2, 0); // Assuming index 2 is for the final option
  }
};

rollDiceBtn.addEventListener('click', () => {
  if (rolls === 3) {
    alert('You have made three rolls this round. Please select a score.');
  } else {
    rolls++;
    rollDice();
    updateStats();
  }
});

rulesBtn.addEventListener('click', () => {
  isModalShowing = !isModalShowing;

  if (isModalShowing) {
    rulesBtn.textContent = 'Hide Rules';
    rulesContainer.style.display = 'block';
  } else {
    rulesBtn.textContent = 'Show Rules';
    rulesContainer.style.display = 'none';
  }
});
