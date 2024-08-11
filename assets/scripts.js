const userData = {
    isExotic: undefined,
    isFriendly: undefined,
    isFurry: undefined,
    isLarge: undefined,
}
const userDataOrder = ["isExotic", "isFriendly", "isFurry", "isLarge"];
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
const questionsAndAnswers = [
    {question: "If you're planning a vacation, where would you rather go?", answer1: "Somewhere far away you've never been to before.", answer2: "Somewhere close to home that is familiar and cozy."},
    {question: "It's your cheat day. Which would you rather indulge in?", answer1: "Ice Cream", answer2: "Spicy Wings"},
    {question: "You win a chance to spend a day with a celebrity. Between these two, who's your pick?", answer1: "Jason Momoa", answer2: `Dwayne "The Rock" Johnson`},
    {question: "Time to do some grocery shopping. Where are you buying from?", answer1: "Costco", answer2: "Local Market/General Store"},
]
let questionIndex = -1;
let matchingAnimal = "";

// code for button display
let answerButtonOne = document.getElementById('answerButtonOne');
let answerButtonTwo = document.getElementById('answerButtonTwo');
let questionText = document.getElementById('questionText');

function showAnswerButtonTwo() {
    if (questionIndex === -1)
    answerButtonTwo.style.display = 'flex';
}

// code for displaying questions

function displayNextQuestion() {
    if (questionIndex < questionsAndAnswers.length) {
        questionText.textContent = questionsAndAnswers[questionIndex].question;
    } else {
        // End of questions
        questionText.textContent = "Congratulations!";
        answerButtonOne.style.display = 'none';
        answerButtonTwo.style.display = 'none';
    }
}

// code for updating answer buttons

function updateAnswerButtons() {
    if (questionIndex < questionsAndAnswers.length) {
        answerButtonOne.textContent = questionsAndAnswers[questionIndex].answer1;
        answerButtonTwo.textContent = questionsAndAnswers[questionIndex].answer2;
    }
}

// Answer buttons eventListeners

answerButtonOne.addEventListener('click', function() {
    showAnswerButtonTwo();
    answerOneValue();
    questionIndex++;
    displayNextQuestion();
    updateAnswerButtons();
    findMatchingAnimal();
});
answerButtonTwo.addEventListener('click', function() {
    answerTwoValue();
    questionIndex++;
    displayNextQuestion();
    updateAnswerButtons();
    findMatchingAnimal();
});

// Code for applying values to userData on answer given

function answerOneValue() {
    if (questionIndex >= 0) {
        userData[userDataOrder[questionIndex]] = true;
    }
}
function answerTwoValue() {
    if (questionIndex >= 0) {
        userData[userDataOrder[questionIndex]] = false;
    }
}

// Evaluating the matching animal

function findMatchingAnimal() {
    if (questionIndex === questionsAndAnswers.length) {
        for (let x = 0; x < animalArray.length; x++) {
            if (userData.isExotic === animalArray[x].isExotic && userData.isFriendly === animalArray[x].isFriendly && userData.isFurry === animalArray[x].isFurry && userData.isLarge === animalArray[x].isLarge) {
                matchingAnimal = animalArray[x].name;
                console.log(matchingAnimal);
                console.log(userData);
                console.log(animalArray[x]);
                break
            }
        }
    }
}