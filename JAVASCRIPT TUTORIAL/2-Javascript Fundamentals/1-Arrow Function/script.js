//function expression
const calcAge2 = function(birthYear){
    return 2037 - birthYear;
};

//Arrow function expression
const calcAge3 = (birthYear) => 2037 - birthYear;
const age3 = calcAge3(1990);
console.log(age3);

//Exercise süslü parantez birden fazla ifade dönerse

const yearsUntilRetirement = (birthYear, firstName) => {
    const age = 2037 - birthYear;
    const retirement = 65 - age;
    return `${firstName} retires in ${retirement} years`;
};

console.log(yearsUntilRetirement(1991, "Zeki"));
console.log(yearsUntilRetirement(2020, "Asel"));

