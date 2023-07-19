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
];

var gameIndex = 0;

var element = document.querySelector(".time");
console.log(element);

var mainEl = document.getElementById("main");
console.log(mainEl);
var timerInterval;
var secondsLeft = 75;
console.log(secondsLeft);

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

function sendMessage() {
  element.textContent = " ";
  var textContent = "Time's Up";
  mainEl.appendChild(textContent);
}

function nextQuestion() {
  document.getElementById("question").textContent = questions[gameIndex].title;
  //how to delete
  questions[gameIndex].choices.forEach(function(choice){
    console.log(choice);
    var Btn = document.createElement("button");
    Btn.textContent = choice;
    Btn.onclick = checkAnswer;
    document.getElementById("answers").append(Btn);
  })
}

function checkAnswer() {
  console.log(this);
  if (this.textContent === questions[gameIndex].answer) {
    console.log("correct");
    document.getElementById("question").textContent = "That is CORRECT!";
  } else {
    console.log("incorrect!");
    document.getElementById("question").textContent = "That is INCORRECT!";
  } gameIndex++;
  nextQuestion();
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
