var names = ["John", "Mark","Jane"];
var years = new Array(1990, 1969, 1948);

//Initialaze new array
//console.log(names[0]);

console.log(names[2]);
console.log(names.length);

//Mutate array data
names[1] = "Ben";
names[5] = "Marry";
console.log(names);

//Different Data Types
var john  =["John", "Smith", 1990, "Teacher", false];

john.push("blue");
john.unshift("Mr.");
console.log(john);

//hw1 bu çıktı ne anlama geliyor 
john.pop();
john.pop();
john.shift();
console.log(john);

console.log(john.indexOf(23));

//hw2 kod okuma ödevi indexOf ne demek, neden -1 yaptık kontrolde ne işe yaradı 
var isDesigner = john.indexOf("designer")=== -1 
? "John is not a designer" : "John is a designer";
console.log(isDesigner);



