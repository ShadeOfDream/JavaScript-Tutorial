var john  = {
    firstName: 'John',
    lastName: 'Smith',
    birthYear: 1990,
    family: ["Jane", "Mark","Bob", "Emily"],
    job: "teacher",
    isMarried: false,
    calcAge: function(birthYear){
        return 2018 - this.birthYear;

        //return 2018 - birthYear;
        //this.age = 2018 - this.birthYear;
    }
};

console.log(john.calcAge());

