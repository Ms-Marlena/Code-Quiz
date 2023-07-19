var questions = [
  {
    title: "What color is the sky?",
    choices: ["blue", "gray", "green", "red"],
    answer: "blue",
  },
  {
    title: "What color is grass?",
    choices: ["blue", "gray", "green", "red"],
    answer: "green",
  },
  {
    title: "What color is blood?",
    choices: ["blue", "gray", "green", "red"],
    answer: "red",
  },
  {
    title: "What color is a pigeon?",
    choices: ["blue", "gray", "green", "red"],
    answer: "gray",
  },
];
//number of questions
var gameIndex = 0;
//timer code
var element = document.querySelector(".time");
console.log(element);

var mainEl = document.getElementById("main");
console.log(mainEl);
var timerInterval;
var secondsLeft = 75;
//timer countdown function
function countDown() {
  timerInterval = setInterval(function () {
    secondsLeft--;
    element.textContent = secondsLeft;
    if (secondsLeft <= 0) {
      clearInterval(timerInterval);
      sendMessage();
    }
  }, 1000);
}

//Time's up message
function sendMessage() {
  element.textContent = " ";
  var textContent = "Time's Up";
  mainEl.appendChild(textContent);
}
//moves to the next question in the list
function nextQuestion() {
  document.getElementById("question").textContent = questions[gameIndex].title;
  document.querySelector("#answers").innerHTML = ""
  questions[gameIndex].choices.forEach(function (choice) {
    console.log(choice);
    var Btn = document.createElement("button");
    Btn.textContent = choice;
    Btn.onclick = checkAnswer;
    document.getElementById("answers").append(Btn);
  })
}
//checks answer once it's been clicked
function checkAnswer() {
  console.log(this);
  if (this.textContent === questions[gameIndex].answer) {
    console.log("correct");
    var textCorrect = "That is CORRECT!";
    document.querySelector("#response").textContent = (textCorrect);
  } else {
    console.log("incorrect!");
    var textIncorrect = "That is INCORRECT!";
    document.querySelector("#response").textContent = (textIncorrect);
  } gameIndex++;
  if (gameIndex >= questions.length) {
    endGame();
  } else {
    nextQuestion();
  }
}
function endGame() {
  var gameOverMsg = "Game Over!"
  document.querySelector("#response").textContent = (gameOverMsg);
  document.querySelector("#answers").innerHTML = "";
  document.querySelector("#question").innerHTML = "";
  clearInterval(timerInterval);
}

document.getElementById("start").addEventListener("click", function () {
  console.log("start button clicked");
  countDown();
  nextQuestion();
});
// // function countDown() {

//   // Sets interval in variable
//   // var timerInterval = setInterval(function () {
//   //   secondsLeft--;
//     timeEl.innerHTML = secondsLeft;

//     console.log(secondsLeft);

//   if (secondsLeft === 0) {
//         // Stops execution of action at set interval
//         clearInterval(timerInterval);
//         // Calls function to create and append image
//         timeEl.innerHTML = "Time's Up!";
//       }
//     // }, 1000);
//   }

// // Function to create and append colorsplosion image
// // function timesUp() {
// //   timeEl.textContent = "Time's Up!";
// // }
