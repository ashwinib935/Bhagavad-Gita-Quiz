//Lesson1_Mark2
var readlineSync = require('readline-sync');
var chalk = require('chalk');

const warning = chalk.red;
const welcomemsg = chalk.green.bold;
const right = chalk.green;
const wrong = chalk.red;
const finalscore = chalk.blue.bold;

var userScore = 0;


let questions = [

  questionOne = {
    question: "Bhagavad Gita has how many chapters??",
    option: [16, 17, 18, 21],
    answer: 2
  },
  questionTwo = {
    question: "Who has written the Bhagavad Gita ?",
    option: ["Ved Vyasa", "Valmiki", "Tulsidas", "Kalidas"],
    answer: 0
  },
  questionThree = {
    question: "What is the literary meaning of Bhagavad Gita ?",
    option: ["Song of goddesses", "Song of pain", "Song of lord", "None of above"],
    answer: 2
  },
  questionFour = {
    question: "Who is the speaker of Bhagavad Gita?",
    option: ["Lord Brahma", "Lord Krishna", "Lord Shiva", "Arjuna"],
    answer: 1
  },
  questionFive = {
    question: "Who had the knowledge of Gita before Arjuna ?",
    option: ["Karana", "Drona", "Bhishma", "Lord Sun"],
    answer: 3
  },
  questionSix = {
    question: "Lord Krishna gave this sermon where?",
    option: ["On the battle grounds of Panipat", "On the battle grounds of Kurukshetra", "On the battle grounds of Jhansi", "None of the above"],
    answer: 1
  },
  questionSeven = {
    question: "Apart from Arjuna, who else listened to the Gita?",
    option: ["Dhritrashtra and Sanjaya", "Only Sanjaya", "Kauravas", "None of the above"],
    answer: 0
  },
  questionEight = {
    question: "In the Gita Krishna calls Arjuna also with the name?",
    option: ["Praṇava", "Pradyumna", "Pārta", "Parjanya"],
    answer: 2
  },
  questionNine = {
    question: "Krishna's chakra name is?",
    option: ["Gandiva", "Gada", "Shushumna", "Sudarshana"],
    answer: 3
  },
  questionTen = {
    question: "How many verses does Gita have?",
    option: [710, 700, 650, 800],
    answer: 1
  }
]



function welcome() {
  console.log(welcomemsg('Welcome to the Quiz.... To test your "Bhagavad Gita" knowledge'));
  var userName = readlineSync.question("What's your name? ");
  console.log(welcomemsg('Hello', userName, ", Let's Play the Quiz!!"));

}

function play(question, option, answer) {
  let userAnswer = readlineSync.keyInSelect(option, question);

  if (userAnswer == answer) {
    console.log(right("You are right"));
    userScore++;
  } else {
    console.log(wrong("You are wrong"));
  }
  console.log("Current score:", userScore);
  console.log("----------------");

}

function game() {
  for (let i = 0; i < questions.length; i++) {
    play(questions[i].question, questions[i].option, questions[i].answer);
  }
}


function showScore() {
  console.log(finalscore("YAY! You SCORED: ", userScore));
  if (userScore <= 2) {
    console.log(warning("You scored to low... Please try again!"))
  }
  console.log("**********************")

}

welcome();
game();
showScore();