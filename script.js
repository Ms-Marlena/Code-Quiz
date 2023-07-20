var questions = [
  {
    title: "What HTML element contains JavaScript?",
    choices: ["<js>", "<script>", "<javascript>", "<scripting"],
    answer: "<script>",
  },
  {
    title: "How do you write `Hello World` in an alert box?",
    choices: [
      "alertBox(`Hello World`);",
      "msg(`Hello World`);",
      "msgBox(`Hello World`);",
      "alert(`Hello World`);",
    ],
    answer: "alert(`Hello World`);",
  },
  {
    title: "How do you create a function in JavaScript?",
    choices: [
      "function:myFunction()",
      "function myFunction()",
      "function = myFunction()",
      "function => myFunction()",
    ],
    answer: "function myFunction()",
  },
  {
    title: "How do you call a function named `myFunction`?",
    choices: [
      "myFunction()",
      "call myFunction()",
      "call function myFunction()",
      "function = myFunction()",
    ],
    answer: "myFunction()",
  },
  {
    title: "How do you write an IF statement in JavaScript?",
    choices: [
      "if i = 5",
      "if(i==5)",
      "if i ==5 then",
      "if i = 5 then",
    ],
    answer: "if(i==5)",
  },
];

//number of questions
var gameIndex = 0;
//current score
var score = 0;
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
    if (secondsLeft <= 1) {
      clearInterval(timerInterval);
      sendMessage();
    }
  }, 1000);
}

//Time's up message
function sendMessage() {
  element.textContent = "Time's Up! ";
  // var textContent = "Time's Up";
  // Response.appendChild(textContent);
}
//moves to the next question in the list
function nextQuestion() {
  document.getElementById("question").textContent = questions[gameIndex].title;
  document.querySelector("#answers").innerHTML = ""
  questions[gameIndex].choices.forEach(function (choice) {
    // console.log(choice);
    var Btn = document.createElement("button");
    Btn.textContent = choice;
    Btn.onclick = checkAnswer;
    document.getElementById("answers").append(Btn);
  })
}
//checks answer once it's been clicked; displays correct & increments score OR displays incorrect & decrements the time
function checkAnswer() {
  console.log(this);
  if (this.textContent === questions[gameIndex].answer) {
    console.log("correct");
    var textCorrect = "That is CORRECT!";
    document.querySelector("#response").textContent = (textCorrect);
    score++;
  } else {
    console.log("incorrect!");
    var textIncorrect = "That is INCORRECT!";
    document.querySelector("#response").textContent = (textIncorrect);
    secondsLeft--;
  } gameIndex++;
  if (gameIndex >= questions.length) {
    endGame();
  } else {
    nextQuestion();
  }
}
console.log(score);
function endGame() {
  var gameOverMsg = "Game Over!"
  document.querySelector("#gameOver").textContent = (gameOverMsg);
  document.querySelector("#answers").innerHTML = "";
  document.querySelector("#question").innerHTML = "";
  clearInterval(timerInterval);
}

document.getElementById("start").addEventListener("click", function () {
  console.log("start button clicked");
  countDown();
  nextQuestion();
});

function displayScores() {
  document.querySelector("#scores").textContent = (score);
  console.log(score);
};

displayScores();
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
