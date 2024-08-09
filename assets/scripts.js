const userData = {
    isExotic: undefined,
    isFurry: undefined,
    isFriendly: undefined,
    isLarge: undefined,
}
const animalArray = [
    {name: "Capybara", image: "#", isExotic: true, isFriendly: true, isFurry: true, isLarge: true},
    {name: "Lemur", image: "#", isExotic: true, isFriendly: true, isFurry: true, isLarge: false},
    {name: "Liger", image: "#", isExotic: true, isFriendly: false, isFurry: true, isLarge: true},
    {name: "Mongoose", image: "#", isExotic: true, isFriendly: false, isFurry: true, isLarge: false},
    {name: "Blue Whale", image: "#", isExotic: true, isFriendly: true, isFurry: false, isLarge: true},
    {name: "Poison Dart Frog", image: "#", isExotic: true, isFriendly: true, isFurry: false, isLarge: false},
    {name: "Anaconda", image: "#", isExotic: true, isFriendly: false, isFurry: false, isLarge: true},
    {name: "Piranha", image: "#", isExotic: true, isFriendly: false, isFurry: false, isLarge: false},
    {name: "Horse", image: "#", isExotic: false, isFriendly: true, isFurry: true, isLarge: true},
    {name: "Ferret", image: "#", isExotic: false, isFriendly: true, isFurry: true, isLarge: false},
    {name: "Boar", image: "#", isExotic: false, isFriendly: false, isFurry: true, isLarge: true},
    {name: "Badger", image: "#", isExotic: false, isFriendly: false, isFurry: true, isLarge: false},
    {name: "Seal", image: "#", isExotic: false, isFriendly: true, isFurry: false, isLarge: true},
    {name: "Gecko", image: "#", isExotic: false, isFriendly: true, isFurry: false, isLarge: false},
    {name: "Alligator", image: "#", isExotic: false, isFriendly: false, isFurry: false, isLarge: true},
    {name: "Scorpion", image: "#", isExotic: false, isFriendly: false, isFurry: false, isLarge: false},
] 
const questionsandAnswers = [
    {question: "If you're planning a vacation, where would you rather go?", answer1: "Somewhere far away you've never been to before.", answer2: "Somewhere close to home that is familiar and cozy."},
    {question: "You win a chance to spend a day with a celebrity. Between these two, who's your pick?", answer1: "Jason Momoa", answer2: `Dwayne "The Rock" Johnson`},
    {question: "It's your cheat day. Which would you rather indulge in?", answer1: "Ice Cream", answer2: "Spicy Wings"},
    {question: "Time to do some grocery shopping. Where are you buying from?", answer1: "Costco", answer2: "Local Market/General Store"},
]

// code for button display
let answerButtonOne = document.getElementById('answerButtonOne');
let answerButtonTwo = document.getElementById('answerButtonTwo');
let questionText = document.getElementById('questionText');

function showAnswerButtonTwo() {
    answerButtonTwo.style.display = 'flex';
}

answerButtonOne.addEventListener('click', showAnswerButtonTwo);

let questionIndex = 0;

// code for displaying questions
function displayNextQuestion() {
    if (questionIndex < questionsandAnswers.length) {
        questionText.textContent = questionsandAnswers[questionIndex].question;
        questionIndex++;
    } else {
        // End of questions
        questionText.textContent = "Congratulations!";
        answerButtonOne.style.display = 'none';
        answerButtonTwo.style.display = 'none';
    }
}

answerButtonOne.addEventListener('click', displayNextQuestion);
answerButtonTwo.addEventListener('click', displayNextQuestion);

// code for updating answer buttons

let answer1Index = 0;
let answer2Index = 0;

function updateAnswerButtons() {
    if (answer1Index < questionsandAnswers.length && answer2Index < questionsandAnswers.length) {
        answerButtonOne.textContent = questionsandAnswers[answer1Index].answer1;
        answerButtonTwo.textContent = questionsandAnswers[answer2Index].answer2;
        answer1Index++;
        answer2Index++;
    }
}

answerButtonOne.addEventListener('click', updateAnswerButtons);
answerButtonTwo.addEventListener('click', updateAnswerButtons);