const calcAverage = (num1, num2, num3) =>{
    return (num1 + num2 + num3) / 3;
} 
//console.log(calcAverage(10,50,78));

function scoreCalc (dolphins, koalas) {
    const scoreDolphins = calcAverage(10,20,30);
    const scoreKolas = calcAverage(50,8,21);

    const score = `score with ${scoreDolphins} dolphins and score with ${scoreKolas} koalas .`;
    return score;
}

console.log(scoreCalc(2,3));

function checkWinner( ){
    if (scoreDolphins >= 2 * scoreKolas){
        console.log('Winner dolphins');
    }else{
        console.log('No team wins');
    }
}
