const chalk = require('chalk');
var readlineSync = require('readline-sync');

right=chalk.green;
wrong=chalk.red;
y=chalk.yellow;

score=0;

var userName=readlineSync.question("What is your name? ");
console.log('Hello ' + chalk.yellow(userName) + "!! Welcome to "+ chalk.bgBlue("FAVOURITE CHARACTER") + " quiz game" );

console.log('--------------------------');
console.log(y('RULES:'))
console.log(y('1. Type all your answers in lowercase and without spaces'))
console.log(y('2. Incase there are options write only option alphabet like a or b'))
console.log('--------------------------');



characters = ['DORAEMON', 'SHINCHAN'];
index = readlineSync.keyInSelect(characters, 'Which character quiz you want to play? ');




function quiz(question,answer){
  var userAnswer=readlineSync.question(question);

  if(userAnswer === answer ){
  console.log(right('YOU ARE RIGHT'));
  score++;
 
}
else{
  console.log(wrong('You are wrong'));
  
}
}

quesAns=[{
  question:"FIRST QUESTION: What is Doraemon's color? ",
  answer:'blue'
},
{
  question:"SECOND QUESTION: What is Doraemon's favourite food? ",
  answer:'doracake'
},
{
  question:"THIRD QUESTION: What is Doraemon scared of? [1]nobita's Mom  [2]rats  [3]mechan  [1,2,3]: ",
  answer:'2'
},
{
  question:"FOURTH QUESTION: Who is Doraemon's best friend? " ,
  answer:'nobita'
},
{
  question:'FIFTH QUESTION: Doraemon is from which century? (Enter a number)',
  answer:'21'
},
{
  question:"FIRST QUESTION: What is shinchan's surname? ",
  answer:'nohara'
},
{
  question:'SECOND QUESTION: What is his age? (Enter a number) ',
  answer:'5'
},
{
  question:"THIRD QUESTION: What is his dog's name? [1] shinzo [2]shiro [1,2]:" ,
  answer:'2'
},
{
  question:'FOURTH QUESTION: What is his favorite food?',
  answer:'chocochips'
},
{
  question:'FIFTH QUESTION: Which food he does not like? [1] capsicum [2] cabbage [1,2]:',
  answer:'1'
},
]

if(characters[index] === 'DORAEMON'){
  console.log("Let's start your " + chalk.blue(characters[index]) + ' quiz.');
  console.log("Good Luck, LET'S BEGIN");
  console.log('--------------------------');

  for(var i=0; i<5; i++){
  var currentQues=quesAns[i];
  quiz(currentQues.question, currentQues.answer)
  console.log('--------------------------')
  }

}
else if(characters[index] === 'SHINCHAN'){
  console.log("Let's start your " + chalk.yellow(characters[index]) + ' quiz.');
  console.log("Good Luck, LET'S BEGIN");
  console.log('--------------------------');

  for(var i=5; i<quesAns.length; i++){
  var currentQues=quesAns[i];
  quiz(currentQues.question, currentQues.answer)
  console.log('--------------------------')
  }
}
else{
  console.log(chalk.red("Re-Run and Choose another option"));
}


console.log('YOUR SCORE IS= ',score);

if(score === 5){
  console.log(right('WOW! YOU ARE A TRUE ' + characters[index] + ' LOVER'))
}
else if(score === 4 || score === 3){
  console.log(right('YOU REALLY DID WELL'))
}
else{
  console.log(wrong('UMM, TRIED WELL BUT YOU CAN YOU BETTER :D'))
}