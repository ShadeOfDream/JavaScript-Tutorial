var now = 2021;
var yearAlice = 2010;
var fullAge = 36;

//Multiple Operators
var isFullAge = now - yearAlice >= fullAge;
console.log(isFullAge);

//Grouping Operators
var ageJohn = now - yearAlice;
var ageMark = 35;
var average = (ageJohn + ageMark) / 2 ;
console.log(average);

//Multiple Assignment
var x,y;
x = y = (3 + 5) * 4 - 6;
console.log(x, y);

//More Operators
var z = 1;
z *= 2;
console.log(z);
z +=10;
console.log(z);
z++;
console.log(z);
z--;
console.log(z);