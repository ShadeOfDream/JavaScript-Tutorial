const friend1 = "Michael";
const friend2 = "Peter";
const friend3 = "Steven";

const friends =["Michael", "Steven","Peter"];
console.log(friends);

const y = new Array(1991, 1984, 2008,2020);
console.log(y[0]);
console.log(y.length);


console.log(friends[0]);
console.log(friends[2]);

console.log(friends.length);
console.log(friends[friends.length - 1]);
friends[2] = "Jay";
console.log(friends);

const firstName = "Zeki";
const Mustafa = ["Sema","Süleyman",2037-1991, "teacher",friends];
console.log(Mustafa);
console.log(Mustafa.length);


//Exercise

const calcAge = function(birthYear){
    return 2037 - birthYear;
};
const years = [1990,1967,2002,2010,2021];
const age1 = calcAge(years[0]);
const age2 = calcAge(years[1]);
const age3 = calcAge(years[years.length - 1]);

console.log(age1,age2,age3);


const ages = [
    calcAge(years[0]),
    calcAge(years[1]),
    calcAge(years[years.length - 1]),

  
];
console.log(ages);




