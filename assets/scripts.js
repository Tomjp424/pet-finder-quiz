const userData = {
    isExotic: undefined,
    isFriendly: undefined,
    isFurry: undefined,
    isLarge: undefined,
}
const userDataOrder = ["isExotic", "isFriendly", "isFurry", "isLarge"];
const animalArray = [
    {name: "Capybara", image: "./assets/images/capybara.jpg", isExotic: true, isFriendly: true, isFurry: true, isLarge: true},
    {name: "Lemur", image: "./assets/images/lemur.jpg", isExotic: true, isFriendly: true, isFurry: true, isLarge: false},
    {name: "Liger", image: "./assets/images/liger.jpg", isExotic: true, isFriendly: false, isFurry: true, isLarge: true},
    {name: "Mongoose", image: "./assets/images/mongoose.jpg", isExotic: true, isFriendly: false, isFurry: true, isLarge: false},
    {name: "Blue Whale", image: "./assets/images/blue-whale.jpg", isExotic: true, isFriendly: true, isFurry: false, isLarge: true},
    {name: "Poison Dart Frog", image: "./assets/images/poison-dart-frog.jpg", isExotic: true, isFriendly: true, isFurry: false, isLarge: false},
    {name: "Anaconda", image: "./assets/images/anaconda.jpg", isExotic: true, isFriendly: false, isFurry: false, isLarge: true},
    {name: "Piranha", image: "./assets/images/piranha.jpg", isExotic: true, isFriendly: false, isFurry: false, isLarge: false},
    {name: "Horse", image: "./assets/images/horse.jpg", isExotic: false, isFriendly: true, isFurry: true, isLarge: true},
    {name: "Ferret", image: "./assets/images/ferret.jpg", isExotic: false, isFriendly: true, isFurry: true, isLarge: false},
    {name: "Boar", image: "./assets/images/boar.jpg", isExotic: false, isFriendly: false, isFurry: true, isLarge: true},
    {name: "Badger", image: "./assets/images/badger.jpg", isExotic: false, isFriendly: false, isFurry: true, isLarge: false},
    {name: "Seal", image: "./assets/images/seal.jpg", isExotic: false, isFriendly: true, isFurry: false, isLarge: true},
    {name: "Gecko", image: "./assets/images/gecko.jpg", isExotic: false, isFriendly: true, isFurry: false, isLarge: false},
    {name: "Alligator", image: "./assets/images/alligator.jpg", isExotic: false, isFriendly: false, isFurry: false, isLarge: true},
    {name: "Scorpion", image: "./assets/images/scorpion.jpg", isExotic: false, isFriendly: false, isFurry: false, isLarge: false},
] 
const questionsAndAnswers = [
    {question: "If you're planning a vacation, where would you rather go?", answer1: "Somewhere far away you've never been to before.", answer2: "Somewhere close to home that is familiar and cozy."},
    {question: "It's your cheat day. Which would you rather indulge in?", answer1: "Ice Cream", answer2: "Spicy Wings"},
    {question: "You win a chance to spend a day with a celebrity. Between these two, who's your pick?", answer1: "Jason Momoa", answer2: `Dwayne "The Rock" Johnson`},
    {question: "Time to do some grocery shopping. Where are you buying from?", answer1: "Costco", answer2: "Local Market/General Store"},
]
let questionIndex = -1;
let matchingAnimal = [];
let previousAnimal = JSON.parse(localStorage.getItem("previousAnimal"));

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
    matchingAnimalImage = document.querySelector("#matchingAnimalImage");
    if (questionIndex < questionsAndAnswers.length) {
        questionText.textContent = questionsAndAnswers[questionIndex].question;
    } else {
        // End of questions
        questionText.textContent = `Congratulations! Your perfect pet is a ${matchingAnimal[0]}!`;
        answerButtonOne.style.display = 'none';
        answerButtonTwo.style.display = 'none';
        matchingAnimalImage.src = matchingAnimal[1];
        matchingAnimalImage.style.display = "flex";
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
    findMatchingAnimal();
    displayNextQuestion();
    updateAnswerButtons();
    handleAnswerButtonClick();
    reTriggerAnimation(); 
});
answerButtonTwo.addEventListener('click', function() {
    answerTwoValue();
    questionIndex++;
    findMatchingAnimal();
    displayNextQuestion();
    updateAnswerButtons();
    handleAnswerButtonClick();
    reTriggerAnimation(); 
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

// Evaluating the matching animal and storing it to localStorage

function findMatchingAnimal() {
    if (questionIndex === questionsAndAnswers.length) {
        for (let x = 0; x < animalArray.length; x++) {
            if (userData.isExotic === animalArray[x].isExotic && userData.isFriendly === animalArray[x].isFriendly && userData.isFurry === animalArray[x].isFurry && userData.isLarge === animalArray[x].isLarge) {
                matchingAnimal = [animalArray[x].name, animalArray[x].image];
                localStorage.setItem("previousAnimal", JSON.stringify(matchingAnimal));
                console.log(matchingAnimal);
                console.log(userData);
                console.log(animalArray[x]);
                break
            }
        }
    }
}

function updateProgressBar(percentage) {
    const progressBar = document.getElementById('progressBar');
    progressBar.style.height = percentage + '%';
    progressBar.textContent = percentage + '%';
}

// Pulling previous animal from localStorage on page load
if(previousAnimal !== null) {
    previousAnimalText = document.querySelector("#previousAnimalText");
    previousAnimalImage = document.querySelector("#previousAnimalImage");
    previousText = document.querySelector("#prevText");
    roundImage = document.querySelector("#roundImage");

    previousAnimalText.textContent = previousAnimal[0];
    previousAnimalImage.src = previousAnimal[1];
    previousAnimalImage.style.display = "flex";
    previousText.style.display = "flex";
    roundImage.style.display = "flex";
}

// This function adds and removes animation classes to re-trigger the animation on the .card element
function reTriggerAnimation(element, animationClass) {
    element.classList.remove(animationClass);
    void element.offsetWidth;
    element.classList.add(animationClass);
}

// This function is called when the user clicks on an answer button. 
// It updates the progress bar with the calculated percentage of questions answered.
const totalQuestions = questionsAndAnswers.length;

function handleAnswerButtonClick() {
    const percentage = (questionIndex / totalQuestions) * 100;
    updateProgressBar(percentage);

    // Re-trigger the fadeIn animation on the .card element
    const mainCard = document.querySelector('.card');
    if (mainCard) {
        reTriggerAnimation(mainCard, 'fadeIn');
    }
}

//I really like this method for handling the answer button functions. Let's try to find a way to make this work with all the functions + the one extra that buttonOne has. I've commented it out for now just for the sake of testing. Let's talk about it tonight (Monday).
/*
let answerButtons = document.querySelectorAll('button.answerButton');

answerButtons.forEach((btn) => {
    btn.addEventListener('click', function() {
        handleAnswerButtonClick()
});
});
*/