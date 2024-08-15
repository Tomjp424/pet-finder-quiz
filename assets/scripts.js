const userData = {
    isExotic: undefined,
    isFriendly: undefined,
    isFurry: undefined,
    isLarge: undefined,
}
const userDataOrder = ["isExotic", "isFriendly", "isFurry", "isLarge"];
const animalArray = [
    {name: "Capybara", image: "./assets/images/capybara.jpg", isExotic: true, isFriendly: true, isFurry: true, isLarge: true, funFact: "Capybara Fun Fact: Capybaras are the world's largest living rodent!"},
    {name: "Lemur", image: "./assets/images/lemur.jpg", isExotic: true, isFriendly: true, isFurry: true, isLarge: false, funFact: "Lemur Fun Fact: Lemurs are considered the world's oldest primate!"},
    {name: "Liger", image: "./assets/images/liger.jpg", isExotic: true, isFriendly: false, isFurry: true, isLarge: true, funFact: "Liger Fun Fact: Ligers are real. I know, right? Not just a gag from Napoleon Dynamite."},
    {name: "Mongoose", image: "./assets/images/mongoose.jpg", isExotic: true, isFriendly: false, isFurry: true, isLarge: false, funFact: "Mongoose Fun Fact: The plural form of mongoose is mongooses, not mongeese!"},
    {name: "Blue Whale", image: "./assets/images/blue-whale.jpg", isExotic: true, isFriendly: true, isFurry: false, isLarge: true, funFact: "Blue Whale Fun Fact: Blue whales are so big, their tongue alone weighs as much as an elephant!"},
    {name: "Poison Dart Frog", image: "./assets/images/poison-dart-frog.jpg", isExotic: true, isFriendly: true, isFurry: false, isLarge: false, funFact: "Poison Dart Frog Fun Fact: Domesticated poison dart frogs aren't actually poisonous, because their diet does not contain the alkaloids needed to produce poison!"},
    {name: "Anaconda", image: "./assets/images/anaconda.jpg", isExotic: true, isFriendly: false, isFurry: false, isLarge: true, funFact: "Anaconda Fun Fact: Anaconda had three sequels, a crossover movie, a 2024 Chinese remake, and a reboot currently in production. That's a lot for a kinda mediocre movie."},
    {name: "Piranha", image: "./assets/images/piranha.jpg", isExotic: true, isFriendly: false, isFurry: false, isLarge: false, funFact: "Piranha Fun Fact: Piranhas are actually omnivores, despite their reputation as flesh-eating monsters."},
    {name: "Horse", image: "./assets/images/horse.jpg", isExotic: false, isFriendly: true, isFurry: true, isLarge: true, funFact: "Horse Fun Fact: Horses have a nearly 360-degree field of view. Talk about a Quake pro!"},
    {name: "Ferret", image: "./assets/images/ferret.png", isExotic: false, isFriendly: true, isFurry: true, isLarge: false, funFact: "Ferret Fun Fact: Ferrets are cool, but wouldn't you rather have a raccoon? Just my opinion..."},
    {name: "Boar", image: "./assets/images/boar.jpg", isExotic: false, isFriendly: false, isFurry: true, isLarge: true, funFact: "Boar Fun Fact: Packs of wild boars typically have up to 20 members, but historically, some have had over 100!"},
    {name: "Badger", image: "./assets/images/badger.jpg", isExotic: false, isFriendly: false, isFurry: true, isLarge: false, funFact: "Badger Fun Fact: Badgers don't bring food into their den because they like to keep it clean, which I'm sure you could learn from."},
    {name: "Seal", image: "./assets/images/seal.jpg", isExotic: false, isFriendly: true, isFurry: false, isLarge: true, funFact: "Seal Fun Fact: The act of a seal bouncing on land to move is called galumphing, and is also how I move on my way to the Ministry of Silly Walks."},
    {name: "Gecko", image: "./assets/images/gecko.jpg", isExotic: false, isFriendly: true, isFurry: false, isLarge: false, funFact: "Gecko Fun Fact: The guy who plays the Geico Gecko, Jake Wood, also plays the inmate Kill Crazy in the BBC space drama Red Dwarf."},
    {name: "Alligator", image: "./assets/images/alligator.jpg", isExotic: false, isFriendly: false, isFurry: false, isLarge: true, funFact: "Alligator Fun Fact: An alligator's sex isn't determined by chromosomes like ours, but instead by their temperature during incubation. Weird..."},
    {name: "Scorpion", image: "./assets/images/scorpion.jpg", isExotic: false, isFriendly: false, isFurry: false, isLarge: false, funFact: `Scorpion Fun Fact: The Scorpion King (2002) features Dwayne "The Rock" Johnson's first leading role.`},
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
const questionCard = document.querySelector("#questionCard");
const endingPage = document.querySelector("#endingPage");
const congratsText = document.querySelector("#congratsText");
const funFact = document.querySelector("#funFact");

// code for button display
const answerButtonOne = document.getElementById('answerButtonOne');
const answerButtonTwo = document.getElementById('answerButtonTwo');
const questionText = document.getElementById('questionText');

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
        congratsText.textContent = `Congratulations! Your perfect pet is a ${matchingAnimal[0]}!`;
        questionCard.style.display = "none";
        endingPage.style.display = "flex";
        matchingAnimalImage.src = matchingAnimal[1];
        funFact.textContent = matchingAnimal[2];
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
});
answerButtonTwo.addEventListener('click', function() {
    answerTwoValue();
    questionIndex++;
    findMatchingAnimal();
    displayNextQuestion();
    updateAnswerButtons();
    handleAnswerButtonClick();
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
                matchingAnimal = [animalArray[x].name, animalArray[x].image, animalArray[x].funFact];
                localStorage.setItem("previousAnimal", JSON.stringify(matchingAnimal));
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
/* 
function reTriggerAnimation(element, animationClass) {
    element.classList.remove(animationClass);
    void element.offsetWidth;
    element.classList.add(animationClass);
}
*/

// This function is called when the user clicks on an answer button. 
// It updates the progress bar with the calculated percentage of questions answered.
const totalQuestions = questionsAndAnswers.length;

function handleAnswerButtonClick() {
    const percentage = (questionIndex / totalQuestions) * 100;
    updateProgressBar(percentage);

    // Re-trigger the fadeIn animation on the .card element
    /*
    const mainCard = document.querySelector('.card');
    if (mainCard) {
        reTriggerAnimation(mainCard, 'fadeIn');
    }
    */
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

// Modal
const creditsButton = document.querySelector("#creditsButton");
const modalContent = document.querySelector(".modal");
const modalBG = document.querySelector(".modal-background");
const modalCloseButton = document.querySelector("#modalCloseButton");

creditsButton.addEventListener("click", function() {
    modalContent.classList.add("is-active");
});

modalBG.addEventListener("click", function() {
    modalContent.classList.remove("is-active");
});

modalCloseButton.addEventListener("click", function() {
    modalContent.classList.remove("is-active");
});

// Start Over Button
const startOverButton = document.querySelector("#startOverButton");

startOverButton.addEventListener("click", function() {
    location.reload();
});