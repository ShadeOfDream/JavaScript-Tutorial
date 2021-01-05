var kgAlice = 50, cmAlice = 168;
var kgJohn = 55, cmJohn = 172;

var bmiAlice = kgAlice / (cmAlice / 100 * 2);
console.log("Alice's bmi: ", bmiAlice);

var bmiJohn = kgJohn / (cmJohn / 100 * 2);
console.log("John's bmi: ", bmiJohn);

//var bmi = kg / (m * 2);

var isBigger = bmiAlice > bmiJohn;
if (isBigger){
 console.log("Alice's bmi bigger than Jhon's bmi");
}else{
    console.log("John's bmi bigger than Alice's bmi");
}
