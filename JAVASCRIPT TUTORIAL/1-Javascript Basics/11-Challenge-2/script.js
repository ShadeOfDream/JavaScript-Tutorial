var scoreJohn = (89 + 120 + 103) / 3;
var scoreMike = (116 + 94 + 123) / 3;
var scoreMary = (97 + 134 + 105) / 3;
console.log(scoreJohn, scoreMike, scoreMary);

if (scoreJohn > scoreMike && scoreJohn > scoreMary){
    console.log("John\'s team wins with " + scoreJohn + " points.");
}else if(scoreMike > scoreJohn && scoreMike > scoreMary){
    console.log("Mike\'s team wins with " + scoreMike + " points.");
}else if(scoreMary > scoreJohn && scoreMary > scoreMike){
    console.log("Mary\'s team wins with " + scoreMary + " points.");
}else{
    console.log("There is a draw");
}