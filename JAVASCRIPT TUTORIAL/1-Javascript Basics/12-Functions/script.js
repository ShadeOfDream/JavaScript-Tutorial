function calculateAge(birthYear) {
    return 2021 - birthYear;
}

calculateAge(1990);

var ageJohn = calculateAge(1990);
var ageMike = calculateAge(1948);
var ageJane = calculateAge(1969);
console.log(ageJohn,ageMike,ageJane);

function yearsUntilRetirement(year, firstName){
    var age = calculateAge(year);
    var retirement = 65 - age;
    if (retirement > 0){
        console.log (firstName + " retires in " + retirement + " years.");
    }else{
        console.log(firstName + " is already retired.");
    }
}
yearsUntilRetirement(1990,"John");
yearsUntilRetirement(1948,"Mike");
yearsUntilRetirement(1970,"Jane");

var whatDoYouDo = function(job, firstName){
    switch(job){
        case "teacher":
            return firstName + " teaches kids how to code.";
        case "driver":
            return firstName + " drives a cab in Lisbon.";
        case "designer" :
            return firstName + " designes beautiful websites.";
        default:
            return firstName + " does something else.";
    }
};

console.log(whatDoYouDo("teacher", "John"));
console.log(whatDoYouDo("designer", "Jane"));
console.log(whatDoYouDo("retired", "Mark"));

