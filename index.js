


var BasicCard = require('./Basic.js');
var inquirer = require('inquirer');
var cardData = require('./questions.json');

initiateGame();
function initiateGame (currentcard,cardArray,initalScore,initialIndex){
// variable will hold the question in the array
var currentCard;
// variable holds each card that comes from the array
var cardArray=[];
var initialScore = 0;
var initialIndex = 0;
// get the questions from the array and store in variable currentcard
    for (var i = 0; i <cardData.length; i++){
      currentCard = new BasicCard(cardData[i].front,cardData[i].back);
      // push the question into an array
      cardArray.push(currentCard);
    // console.log(cardArray);
    }
// initiate play round function
playRound(initialScore,cardArray,initialIndex);
}


function playRound(currentScore, cardArray,currentIndex){
    if (currentIndex < cardArray.length) {
      promptUser(currentScore,cardArray,currentIndex)
    }
    else
      endGame(currentScore);
}


function promptUser(currentScore,cardArray,currentIndex){
var card = cardArray[currentIndex];
// console.log(card);
    inquirer.prompt([{
      type:"input",
      name:"text",
      // "answer" prompts for user answer
      message: card.front + "\nanswer:"
    // .then is used to run the next function after input by user
    }]).then(function(answer){

      // access the answer refering to the inquirer name
    if(answer.text.trim().toLowerCase() === card.back.trim().toLowerCase()){
      currentScore ++;
      console.log("you are correct");
    }
    else {
      console.log("the correct answer is " + card.back);
    }
    currentIndex ++;
     playRound(currentScore,cardArray,currentIndex);
    })
     


      }




function endGame(score){
console.log("It is the end of Game thanks for playing");
console.log("this is your final score: " + score);
}


